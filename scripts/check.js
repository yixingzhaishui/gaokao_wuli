/* scripts/check.js - strict site consistency checks
 * Run from website/: node scripts/check.js
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');
const { auditAll } = require('./example-audit.js');

const root = path.resolve(__dirname, '..');
const errors = [];
const warns = [];

function read(rel) {
  return fs.readFileSync(path.join(root, rel), 'utf8');
}

function json(rel) {
  return JSON.parse(read(rel));
}

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

function esc(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function walk(dir, filter = () => true) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp, filter));
    else if (filter(fp, name)) out.push(fp);
  }
  return out;
}

function hasProblemGraphic(problem) {
  if (problem.diagram) return true;
  if (problem.image || problem.img || problem.figure || problem.svg) return true;
  return false;
}

function hasPageGraphic(block) {
  return /<svg\b|!\[[^\]]*\]\([^)]+\)|<img\b|<figure\b|diagram|image|svg/i.test(block);
}

const idMap = json('data/id-map.json');
const progress = json('data/progress.json');
const graph = json('data/graph.json');
const problemsData = json('data/problems.json');
const verifiedProblemsData = json('data/verified-problems.json');
const diagnosticProblemsData = json('data/verified-diagnostic-2024cee.json');
const pageExamplesData = json('data/page-examples.json');
const specExamplesData = json('data/spec-supplement-examples.json');
const officialExperiments = json('data/official-experiments.json');
const curriculumMap = json('data/curriculum-map.json');
const quarantinedMarkdown = json('data/quarantine/legacy-markdown-exercises.json');
const publishablePageExamples = json('data/publishable-page-examples.json');
const coreProblems = problemsData.problems || problemsData;
const verifiedProblems = (verifiedProblemsData.problems || verifiedProblemsData).concat(diagnosticProblemsData.problems || diagnosticProblemsData);
const pageExamples = pageExamplesData.examples || [];
const specExamples = specExamplesData.examples || [];
const problems = coreProblems.concat(pageExamples, specExamples);
const exampleAudit = auditAll();
const sidebar = read('_sidebar.md');
const allIds = Object.keys(idMap);
const validIds = new Set(allIds);
const modelIds = new Set(allIds.filter(id => idMap[id].level === 'model' || id.startsWith('M-')));
const allowedSourceKinds = new Set(['official_exam', 'regional_exam', 'published_simulation', 'diagnostic_exam']);

// 0. Governance and release-safety documents must remain readable and portable.
for (const rel of ['SOURCE_POLICY.md', 'SOURCE_VERIFICATION_REPORT.md']) {
  const text = read(rel);
  if (/No such file or directory|^sed:|\/Users\//m.test(text)) {
    errors.push(`来源治理文档损坏或包含本地绝对路径: ${rel}`);
  }
}
if (!/政策版本：2\.0/.test(read('SOURCE_POLICY.md'))) errors.push('SOURCE_POLICY.md 缺少政策版本 2.0');
if (!/内容审校测试版/.test(read('index.html'))) errors.push('首页缺少内容审校测试版标识');
if (!exists('MATH_SYMBOLS.md') || !/\\nu_0/.test(read('MATH_SYMBOLS.md'))) errors.push('缺少统一数学符号表或截止频率规范');

// 0.1 The official experiment register is authoritative and must contain exactly 21 unique IDs.
const officialExperimentIds = officialExperiments.official_required_ids || [];
if (officialExperiments.official_required_count !== 21 || officialExperimentIds.length !== 21 || new Set(officialExperimentIds).size !== 21) {
  errors.push('课标学生必做实验必须恰为 21 项且 ID 不重复');
}
if (officialExperimentIds.includes('E-02')) errors.push('E-02 不得计入独立课标学生必做实验');
for (const id of officialExperimentIds) {
  if (!idMap[id]) errors.push(`课标学生必做实验 ID 不存在: ${id}`);
}
if (idMap['E-04']?.title !== '探究两个互成角度的力的合成规律') errors.push('E-04 名称未使用课标探究表述');

// 0.2 Every numbered node must have explicit curriculum scope; only primary nodes count as coverage.
const curriculumNodes = curriculumMap.nodes || {};
const primaryClauses = new Map();
for (const id of allIds) {
  const item = curriculumNodes[id];
  if (!item) {
    errors.push(`curriculum-map 缺少节点: ${id}`);
    continue;
  }
  for (const field of ['official_module', 'requirement', 'scope', 'primary_node']) {
    if (item[field] === undefined || item[field] === '') errors.push(`curriculum-map ${id} 缺少 ${field}`);
  }
  if (!['core', 'extension', 'review'].includes(item.scope)) errors.push(`curriculum-map ${id} scope 非法: ${item.scope}`);
  if (item.primary_node) {
    if (!item.standard_clause) errors.push(`primary curriculum node 缺少课标条款: ${id}`);
    const key = `${item.official_module}:${item.standard_clause}`;
    if (primaryClauses.has(key)) errors.push(`课标条款重复 primary_node: ${key} -> ${primaryClauses.get(key)}, ${id}`);
    primaryClauses.set(key, id);
  }
}
for (const id of Object.keys(curriculumNodes)) if (!idMap[id]) errors.push(`curriculum-map 多余节点: ${id}`);
if (curriculumNodes['X1-24']?.primary_node !== false || curriculumNodes['X1-24']?.scope !== 'review') errors.push('X1-24 必须是跨模块复习入口且不计覆盖');
if (curriculumNodes['X3-19']?.primary_node !== true || curriculumNodes['X3-19']?.standard_clause !== '3.4.1—3.4.2') errors.push('X3-19 必须是光电效应课标主节点');
for (const id of ['B3-25', 'B3-26', 'B3-27']) if (curriculumNodes[id]?.primary_node !== true) errors.push(`${id} 必须是必修3基础链路主节点`);

// 1. id-map files and slugs must point at real h4 anchors.
for (const [id, meta] of Object.entries(idMap)) {
  if (!meta.file || !meta.slug || !meta.title) {
    errors.push(`id-map 条目字段不完整: ${id}`);
    continue;
  }
  const rel = `${meta.file}.md`;
  if (!exists(rel)) {
    errors.push(`id-map 文件不存在: ${id} -> ${rel}`);
    continue;
  }
  const text = read(rel);
  const slugRe = new RegExp(`<h4[^>]*\\bid="${esc(meta.slug)}"`);
  if (!slugRe.test(text)) {
    errors.push(`id-map slug 不存在: ${id} ${rel}#${meta.slug}`);
  }
}

// 2. progress must match id-map coverage.
for (const id of allIds) {
  if (!progress[id]) errors.push(`progress.json 缺少编号: ${id}`);
}
for (const id of Object.keys(progress)) {
  if (!validIds.has(id)) errors.push(`progress.json 多余编号: ${id}`);
}
for (const [id, item] of Object.entries(progress)) {
  const axes = item.review_axes;
  const requiredAxes = ['curriculum_map', 'physics_content', 'examples_recalculated', 'source_review', 'pedagogy_review', 'interaction_qa', 'mobile_qa', 'editorial_structure', 'formula_first_use', 'publish'];
  if (!axes) {
    errors.push(`progress.json 缺少多轴审核状态: ${id}`);
    continue;
  }
  for (const axis of requiredAxes) if (!axes[axis]?.status) errors.push(`progress.json ${id} 缺少审核轴 ${axis}`);
  if (axes.editorial_structure?.status !== 'reviewed_by_codex') errors.push(`编辑模板尚未完成 Codex 全量审查: ${id}`);
  if (axes.formula_first_use?.status !== 'reviewed_by_codex') errors.push(`公式首次使用尚未完成 Codex 全量审查: ${id}`);
  if (axes.publish?.status !== 'blocked') errors.push(`未经全部审签的节点不得发布: ${id}`);
  if ('score' in item) errors.push(`progress.json 不得保留无 rubric/审阅人的虚假精确分数: ${id}`);
}

// 3. sidebar links must point to real files/anchors and cover every id-map entry.
const sidebarAnchorKeys = new Set();
const linkRe = /\]\(([^)#?]+)(?:[?#]([^)]+))?\)/g;
let link;
while ((link = linkRe.exec(sidebar)) !== null) {
  let file = link[1];
  let anchor = link[2] || '';
  if (anchor.startsWith('id=')) anchor = anchor.slice(3);
  if (file === '/') continue;
  if (!file.endsWith('.md')) file = `${file}.md`;
  const rel = file;
  if (!exists(rel)) {
    errors.push(`sidebar 链接文件不存在: ${rel}`);
    continue;
  }
  if (anchor) {
    const text = read(rel);
    const idRe = new RegExp(`\\bid="${esc(anchor)}"`);
    if (!idRe.test(text)) errors.push(`sidebar 锚点不存在: ${rel}#${anchor}`);
    sidebarAnchorKeys.add(`${file.replace(/\.md$/, '')}#${anchor}`);
  }
}
for (const [id, meta] of Object.entries(idMap)) {
  const key = `${meta.file}#${meta.slug}`;
  if (!sidebarAnchorKeys.has(key)) {
    errors.push(`sidebar 缺入口: ${id} ${meta.title} -> ${meta.file}?id=${meta.slug}`);
  }
}

// 4. graph must cover all ids and status must agree with progress.
const graphNodes = graph.nodes || [];
const graphIds = new Set(graphNodes.map(n => n.id));
for (const id of allIds) {
  if (!graphIds.has(id)) errors.push(`graph.json 缺节点: ${id}`);
}
for (const node of graphNodes) {
  if (!validIds.has(node.id)) errors.push(`graph.json 多余节点: ${node.id}`);
  const p = progress[node.id];
  if (p && node.status !== p.status) {
    errors.push(`graph/progress 状态不一致: ${node.id} graph=${node.status} progress=${p.status}`);
  }
}
for (const edge of graph.edges || []) {
  if (!validIds.has(edge.from) || !validIds.has(edge.to)) {
    errors.push(`graph.json 边引用无效节点: ${edge.from} -> ${edge.to}`);
  }
}

// 5. iframe animation files must exist.
for (const md of walk(root, (fp, name) => name.endsWith('.md'))) {
  const text = fs.readFileSync(md, 'utf8');
  const ifRe = /<iframe[^>]+src="([^"]+)"/g;
  let m;
  while ((m = ifRe.exec(text)) !== null) {
    const fileTarget = m[1].split(/[?#]/, 1)[0];
    const target = path.resolve(path.dirname(md), fileTarget);
    if (!fs.existsSync(target)) {
      errors.push(`iframe 动画不存在: ${path.basename(md)} -> ${m[1]}`);
    }
  }
}

// 6. problem references and strict problem metadata.
const figureRe = /(如图|下图|图示|所示|图中|右图|左图)/;
const sourceDetailRe = /(真题|适应性|模拟)/;
for (const p of problems) {
  for (const id of p.knowledge_ids || []) {
    if (!validIds.has(id)) errors.push(`problems.json knowledge_ids 无效: ${id} (题 ${p.id})`);
  }
  for (const id of p.model_ids || []) {
    if (id && !modelIds.has(id)) errors.push(`problems.json model_ids 无效: ${id} (题 ${p.id})`);
  }
  if (figureRe.test(p.stem || '') && !hasProblemGraphic(p)) {
    errors.push(`图题缺图: ${p.id} 题干含图示词但无 diagram/image/svg`);
  }
  if (p.diagram_required && !hasProblemGraphic(p)) {
    errors.push(`diagram_required=true 但无图: ${p.id}`);
  }
  if (sourceDetailRe.test(p.source || '') && !p.source_detail && p.source_verified !== false) {
    errors.push(`来源缺 source_detail 或未标 source_verified=false: ${p.id}`);
  }
  if (/上题/.test(p.stem || '') && !p.group_id && !p.parent_id && !p.shared_context) {
    errors.push(`题干含“上题”但无组题上下文: ${p.id}`);
  }
}

// 6.2 Source-review candidates: policy fields are explicit; only double-checked records may publish.
for (const p of verifiedProblems) {
  const required = ['id', 'source', 'source_detail', 'exam', 'question_no', 'verified_at', 'stem', 'answer', 'solution', 'method'];
  for (const field of required) {
    if (!p[field] || (typeof p[field] === 'string' && !p[field].trim())) errors.push(`已核验真题缺少 ${field}: ${p.id || '未编号题目'}`);
  }
  if (p.source_policy_version !== '2.0') errors.push(`题目未迁移到来源政策 2.0: ${p.id}`);
  if (!p.verification_status) errors.push(`题目缺少 verification_status: ${p.id}`);
  if (!allowedSourceKinds.has(p.source_kind)) errors.push(`学生端题目来源类型不允许: ${p.id} ${p.source_kind || '缺失'}`);
  if (!Array.isArray(p.source_urls) || !p.source_urls.length || p.source_urls.some(url => !/^https?:\/\//.test(url))) {
    errors.push(`已核验真题来源链接不完整: ${p.id}`);
  }
  if (!Array.isArray(p.knowledge_ids) || !p.knowledge_ids.length) errors.push(`已核验真题缺少知识标签: ${p.id}`);
  if (['单选', '多选'].includes(p.type) && (!Array.isArray(p.options) || p.options.length < 3)) errors.push(`已核验选择题缺少选项: ${p.id}`);
  if (figureRe.test(p.stem || '') && !hasProblemGraphic(p)) errors.push(`已核验图题缺图: ${p.id}`);
  if (p.verification_status === 'double_checked') {
    const independentB = Array.isArray(p.independent_secondary_sources) && p.independent_secondary_sources.filter(s => s?.tier === 'B').length >= 2;
    if (!(p.primary_source_tier === 'A' || (independentB && p.no_primary_source_reason))) errors.push(`双签题来源等级不足: ${p.id}`);
    for (const field of ['scan_page', 'file_sha256', 'stem_checked_by', 'answer_checked_by', 'solution_recalculated_by']) {
      if (!p[field]) errors.push(`双签题缺少 ${field}: ${p.id}`);
    }
    if (p.source_verified !== true) errors.push(`双签题未设置 source_verified=true: ${p.id}`);
  }
}

// 6.1 example-system quantitative gates.
const coverage = {};
for (const id of allIds) coverage[id] = 0;
for (const p of problems) {
  for (const id of (p.knowledge_ids || []).concat(p.model_ids || [])) {
    if (id in coverage) coverage[id] += 1;
  }
}
for (const [id, meta] of Object.entries(idMap)) {
  const count = coverage[id] || 0;
  if (meta.level === 'A' && count < 5) {
    errors.push(`例题数量不足: A档 ${id} ${meta.title} 当前 ${count}/5`);
  }
  if (id.startsWith('E-') && count < 5) {
    errors.push(`实验训练不足: ${id} ${meta.title} 当前 ${count}/5`);
  }
  if (id.startsWith('M-') && count < 7) {
    errors.push(`模型训练不足: ${id} ${meta.title} 当前 ${count}/7`);
  }
}

// 7. Markdown hygiene, exposed source, and page figure wording.
for (const md of walk(root, (fp, name) => name.endsWith('.md'))) {
  const text = fs.readFileSync(md, 'utf8');
  const file = path.basename(md);
  const fences = (text.match(/```/g) || []).length;
  if (fences % 2 !== 0) errors.push(`Markdown 代码块未闭合: ${file}`);
  [
    { re: /`<svg\b/g, msg: 'SVG 被反引号包住，会在网页露成源码' },
    { re: /<\/svg>`/g, msg: 'SVG 结束标签被反引号包住，会在网页露成源码' },
    { re: /&lt;svg\b/g, msg: 'SVG 被转义，会在网页露成源码' },
    { re: /```(?:svg|html)\b/g, msg: 'HTML/SVG 被放进代码块，会在网页露成源码' },
    { re: /^\* [0-9]+\. /gm, msg: '小节标题写成了普通列表' }
  ].forEach(rule => {
    let m;
    while ((m = rule.re.exec(text)) !== null) {
      errors.push(`${file}:${lineOf(text, m.index)} ${rule.msg}`);
    }
  });

  // Page examples are checked through data/page-examples.json after extraction.
  // Avoid broad paragraph scanning here; it creates noise for phrases like “图中读数”.
}

// 8. Only content-approved A-level nodes may be treated as having a complete learning loop.
const aSectionRules = [
  { name: '现象引入', test: block => /先看现象|现象|实验情境/.test(block) },
  { name: '动画或交互实验', test: block => /<iframe\b|示意动画|交互动画|互动实验|动画/.test(block) },
  { name: '观察任务', test: block => /观察任务/.test(block) },
  { name: '公式绑定', test: block => /公式绑定/.test(block) },
  { name: '易错点', test: block => /易错点/.test(block) },
  { name: '例题', test: block => /\*\*例题|####\s*\d+\.\s*例题/.test(block) }
];
for (const [id, meta] of Object.entries(idMap)) {
  const p = progress[id];
  if (!p || p.review_axes?.physics_content?.status !== 'approved' || p.level !== 'A') continue;
  if (!meta.file || ['experiments', 'models', 'gaokao-skills'].includes(meta.file)) continue;
  const text = read(`${meta.file}.md`);
  const start = text.search(new RegExp(`<h4[^>]*\\bid="${esc(meta.slug)}"`));
  if (start === -1) continue;
  const rest = text.slice(start);
  const next = rest.slice(1).search(/<h4[^>]*\bid="/);
  const block = next === -1 ? rest : rest.slice(0, next + 1);
  for (const rule of aSectionRules) {
    if (!rule.test(block)) warns.push(`A档 ${id} 缺少学习闭环元素: ${rule.name}`);
  }
}

// 9. Animation HTML inline JavaScript syntax.
const animRoot = path.join(root, 'anim');
if (fs.existsSync(animRoot)) {
  for (const html of walk(animRoot, (fp, name) => name.endsWith('.html'))) {
    const text = fs.readFileSync(html, 'utf8');
    const scriptRe = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
    let m;
    while ((m = scriptRe.exec(text)) !== null) {
      if (!m[1].trim()) continue;
      const tmp = path.join(os.tmpdir(), `anim-check-${process.pid}-${Date.now()}.js`);
      fs.writeFileSync(tmp, m[1]);
      try {
        execSync(`node --check ${JSON.stringify(tmp)}`, { stdio: 'pipe' });
      } catch (e) {
        errors.push(`动画 JS 语法错误: ${path.relative(root, html)} - ${(e.stderr || e.message).toString().split('\n')[0]}`);
      } finally {
        fs.rmSync(tmp, { force: true });
      }
    }
  }
}

// 10. Hidden system files must not be shipped.
for (const fp of walk(root)) {
  const name = path.basename(fp);
  if (name === '.DS_Store' || name.startsWith('.fuse_hidden')) {
    errors.push(`仓库包含系统隐藏文件: ${path.relative(root, fp)}`);
  }
}

// 11. Known student-visible content regressions identified in the 2026-07 review.
const studentContentFiles = ['bx1.md', 'bx2.md', 'bx3.md', 'xb1.md', 'xb2.md', 'xb3.md', 'experiments.md', 'gaokao-skills.md', 'models.md'];
const forbiddenContent = [
  [/2\.94\s*W/, 'B3-16 错误功率 2.94 W'],
  [/\\mathrm\{V\}1|ν\s+0|\\nu\s+0/, '损坏的下标或体积公式'],
  [/取之不尽|几乎不排放污染物/, '绝对化能源表述'],
  [/高考[^\n（）]{0,24}(?:改编|风格|演练)|四川适应性演练|[12][0-9]{3}[^\n（）]{0,16}改编/, '无元数据的考试来源标签'],
  [/压轴/, '无具体试卷依据的压轴标签']
];
for (const rel of studentContentFiles) {
  const text = read(rel);
  for (const [re, label] of forbiddenContent) {
    if (re.test(text)) errors.push(`${rel} 仍含${label}`);
  }
  const legacyExercisePattern = /^(?:\*\*(?:例题|训练题)|#{3,6}\s+(?!例题与训练（来源审核中）).*?(?:例题|训练题)|<h[5-6]\b[^>]*>.*(?:例题|训练题))/m;
  if (legacyExercisePattern.test(text)) errors.push(`${rel} 仍物理包含历史自由文本例题/训练题`);
}
if (!quarantinedMarkdown.count || quarantinedMarkdown.count !== quarantinedMarkdown.records?.length) errors.push('Markdown 例题隔离记录为空或计数不一致');
for (const record of quarantinedMarkdown.records || []) {
  if (!record.file || !record.content || !/^[a-f0-9]{64}$/.test(record.sha256 || '')) errors.push('Markdown 例题隔离记录字段或哈希无效');
}
if (publishablePageExamples.fail_closed !== true || publishablePageExamples.source_policy_version !== '2.0') errors.push('构建期例题导出未启用政策 2.0 fail-closed');

console.log('=== check.js strict 自动化检查 ===');
console.log('知识点/实验/模型总数:', allIds.length);
console.log('知识图谱节点数:', graphNodes.length);
console.log('隔离的旧题库数据:', coreProblems.length);
console.log('隔离的页面例题数据:', pageExamples.length);
console.log('隔离的自动补充题:', specExamples.length);
console.log('来源政策 2.0 候选题数:', verifiedProblems.length);
const verifiedKnowledgeIds = new Set(verifiedProblems.flatMap(p => p.knowledge_ids || []));
const verifiedMappedIds = new Set(verifiedProblems.flatMap(p => (p.knowledge_ids || []).concat(p.model_ids || [])));
console.log('候选题非模型知识点映射:', `${verifiedKnowledgeIds.size}/${allIds.length - modelIds.size}`);
console.log('候选题页面节点映射（含模型）:', `${verifiedMappedIds.size}/${allIds.length}`);
console.log('隔离旧数据审计：原可展示', exampleAudit.ready, '道；待人工审核', exampleAudit.needs_review, '道');
if (exampleAudit.needs_review) {
  const blocking = Object.entries(exampleAudit.by_flag)
    .filter(([flag]) => flag !== 'adapted_unverified')
    .map(([flag, count]) => `${flag}=${count}`)
    .join('，');
  warns.push(`隔离旧数据仍有待清理项（不会进入学生端）：${blocking || '见 scripts/example-audit.js'}`);
}
if (warns.length) {
  console.log(`\n⚠ 警告 (${warns.length}):`);
  warns.forEach(w => console.log(`  - ${w}`));
}
if (errors.length) {
  console.log(`\n✗ 错误 (${errors.length}):`);
  errors.forEach(e => console.log(`  - ${e}`));
  process.exit(1);
}
console.log('\n✓ 全部通过');
