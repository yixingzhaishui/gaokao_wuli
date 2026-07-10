/* scripts/check.js - repository consistency checks
 * Run from the repository root: node scripts/check.js [--strict]
 */
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const strict = process.argv.slice(2).includes('--strict');
const unknownArgs = process.argv.slice(2).filter(arg => arg !== '--strict');
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

function esc(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function walk(dir, filter = () => true) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    if (name === '.git') continue;
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp, filter));
    else if (filter(fp, name)) out.push(fp);
  }
  return out;
}

function idsIn(text) {
  return text.match(/\b(?:B[1-3]|X[1-3])-\d{2}\b|\b[GEM]-\d{2}\b/g) || [];
}

function duplicates(values) {
  const counts = new Map();
  values.forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
  return [...counts.entries()].filter(([, count]) => count > 1).map(([value, count]) => `${value} (${count})`);
}

function formatIds(ids) {
  return ids.length ? ids.join(', ') : '无';
}

function compareCollections(name, actualIds, expectedIds) {
  const actual = new Set(actualIds);
  const expected = new Set(expectedIds);
  const missing = [...expected].filter(id => !actual.has(id));
  const extra = [...actual].filter(id => !expected.has(id));
  if (missing.length) errors.push(`${name} 缺少编号: ${formatIds(missing)}`);
  if (extra.length) errors.push(`${name} 存在未知编号: ${formatIds(extra)}`);
}

function hasProblemGraphic(problem) {
  return Boolean(problem.diagram || problem.image || problem.img || problem.figure || problem.svg);
}

const idMap = json('data/id-map.json');
const progress = json('data/progress.json');
const graph = json('data/graph.json');
const problemsData = json('data/problems.json');
const pageExamplesData = json('data/page-examples.json');
const specExamplesData = json('data/spec-supplement-examples.json');
const coreProblems = Array.isArray(problemsData) ? problemsData : (problemsData.problems || []);
const pageExamples = pageExamplesData.examples || [];
const specExamples = specExamplesData.examples || [];
const problems = coreProblems.concat(pageExamples, specExamples);
const sidebar = read('_sidebar.md');
const idMapIds = Object.keys(idMap);
const progressIds = Object.keys(progress);
const graphNodes = graph.nodes || [];
const graphIds = graphNodes.map(node => node.id);
const sidebarIds = idsIn(sidebar);
const validIds = new Set(idMapIds);
const modelIds = new Set(idMapIds.filter(id => idMap[id].level === 'model' || id.startsWith('M-')));
const validStatuses = new Set(['pending', 'draft', 'partial', 'review', 'done']);

if (unknownArgs.length) errors.push(`不支持的参数: ${unknownArgs.join(', ')}`);

// 1. Every id-map entry must have a complete, unique, real page mapping.
const slugOwners = new Map();
for (const [id, meta] of Object.entries(idMap)) {
  if (!meta || !meta.file || !meta.slug || !meta.title || !meta.level) {
    errors.push(`id-map 条目字段不完整: ${id}`);
    continue;
  }
  const slugKey = `${meta.file}#${meta.slug}`;
  if (!slugOwners.has(slugKey)) slugOwners.set(slugKey, []);
  slugOwners.get(slugKey).push(id);
  const rel = `${meta.file}.md`;
  if (!exists(rel)) {
    errors.push(`id-map 文件不存在: ${id} -> ${rel}`);
    continue;
  }
  const text = read(rel);
  if (!new RegExp(`<h[1-6][^>]*\\bid="${esc(meta.slug)}"`).test(text)) {
    errors.push(`id-map slug 不存在: ${id} ${rel}#${meta.slug}`);
  }
  const expectedFile = {
    B1: 'bx1', B2: 'bx2', B3: 'bx3',
    X1: 'xb1', X2: 'xb2', X3: 'xb3',
    G: 'gaokao-skills', E: 'experiments', M: 'models'
  }[id.split('-')[0]];
  if (expectedFile && meta.file !== expectedFile) {
    errors.push(`编号前缀与所属模块不匹配: ${id} -> ${meta.file}，应为 ${expectedFile}`);
  }
}
for (const [slugKey, ids] of slugOwners) {
  if (ids.length > 1) errors.push(`重复 slug: ${slugKey} -> ${ids.join(', ')}`);
}

// 2. Compare every available numbered collection in both directions.
for (const [name, values] of [['id-map', idMapIds], ['progress', progressIds], ['graph', graphIds], ['sidebar', sidebarIds]]) {
  const dupes = duplicates(values);
  if (dupes.length) errors.push(`${name} 重复编号: ${formatIds(dupes)}`);
}
compareCollections('progress.json 相对 id-map.json', progressIds, idMapIds);
compareCollections('graph.json 相对 id-map.json', graphIds, idMapIds);
compareCollections('sidebar 相对 id-map.json', sidebarIds, idMapIds);
if (exists('data/catalog.json')) {
  const catalog = json('data/catalog.json');
  const catalogIds = Array.isArray(catalog) ? catalog.map(item => item.id) : Object.keys(catalog);
  const dupes = duplicates(catalogIds);
  if (dupes.length) errors.push(`catalog 重复编号: ${formatIds(dupes)}`);
  compareCollections('catalog.json 相对 id-map.json', catalogIds, idMapIds);
  compareCollections('id-map.json 相对 catalog.json', idMapIds, catalogIds);
} else {
  console.log('目录权威源: data/id-map.json（仓库未设置重复的 data/catalog.json）');
}

// 3. Progress must preserve a valid state and cover all ids.
for (const [id, meta] of Object.entries(idMap)) {
  const item = progress[id];
  if (!item) continue;
  if (!validStatuses.has(item.status)) errors.push(`progress 非法状态值: ${id} -> ${item.status}`);
}

// 4. Sidebar links must point to real files/anchors and cover every id-map entry.
const sidebarAnchorKeys = new Set();
const linkRe = /\]\(([^)\s]+)\)/g;
let link;
while ((link = linkRe.exec(sidebar)) !== null) {
  const raw = link[1];
  if (/^(?:https?:)?\/\//.test(raw)) continue;
  const [rawFile, rawQuery] = raw.split('?');
  if (rawFile === '/') continue;
  const file = rawFile.replace(/^\//, '').replace(/\.md$/, '') + '.md';
  const rel = file;
  if (!exists(rel)) {
    errors.push(`sidebar 链接文件不存在: ${rel}`);
    continue;
  }
  const anchorMatch = (rawQuery || '').match(/(?:^|&)id=([^&]+)/);
  const anchor = anchorMatch ? decodeURIComponent(anchorMatch[1]) : '';
  if (anchor) {
    const text = read(rel);
    if (!new RegExp(`\\bid="${esc(anchor)}"`).test(text)) errors.push(`sidebar 锚点不存在: ${rel}#${anchor}`);
    sidebarAnchorKeys.add(`${file.replace(/\.md$/, '')}#${anchor}`);
  }
}
for (const [id, meta] of Object.entries(idMap)) {
  const key = `${meta.file}#${meta.slug}`;
  if (!sidebarAnchorKeys.has(key)) errors.push(`sidebar 缺入口: ${id} ${meta.title} -> ${meta.file}?id=${meta.slug}`);
}

// 5. Graph nodes, statuses, and edges must be internally consistent.
for (const node of graphNodes) {
  if (!validIds.has(node.id)) errors.push(`graph.json 多余节点: ${node.id}`);
  if (node.id && progress[node.id] && node.status !== progress[node.id].status) {
    errors.push(`graph/progress 状态不一致: ${node.id} graph=${node.status} progress=${progress[node.id].status}`);
  }
}
for (const edge of graph.edges || []) {
  if (!validIds.has(edge.from) || !validIds.has(edge.to)) {
    errors.push(`graph.json 边引用无效节点: ${edge.from} -> ${edge.to}`);
  }
}

// 6. Embedded animation files must exist.
for (const md of walk(root, (fp, name) => name.endsWith('.md'))) {
  const text = fs.readFileSync(md, 'utf8');
  const ifRe = /<iframe[^>]+src="([^"]+)"/g;
  let match;
  while ((match = ifRe.exec(text)) !== null) {
    const target = path.resolve(path.dirname(md), match[1]);
    if (!fs.existsSync(target)) errors.push(`iframe 动画不存在: ${path.relative(root, md)} -> ${match[1]}`);
  }
}

// 7. Problem references and strict problem metadata.
const figureRe = /(如图|下图|图示|所示|图中|右图|左图)/;
const sourceDetailRe = /(真题|适应性|模拟)/;
for (const problem of problems) {
  for (const id of problem.knowledge_ids || []) {
    if (!validIds.has(id)) errors.push(`题目 knowledge_ids 无效: ${id} (题 ${problem.id})`);
  }
  for (const id of problem.model_ids || []) {
    if (id && !modelIds.has(id)) errors.push(`题目 model_ids 无效: ${id} (题 ${problem.id})`);
  }
  if (figureRe.test(problem.stem || '') && !hasProblemGraphic(problem)) {
    errors.push(`图题缺图: ${problem.id} 题干含图示词但无 diagram/image/svg`);
  }
  if (problem.diagram_required && !hasProblemGraphic(problem)) errors.push(`diagram_required=true 但无图: ${problem.id}`);
  if (sourceDetailRe.test(problem.source || '') && !problem.source_detail && problem.source_verified !== false) {
    errors.push(`来源缺 source_detail 或未标 source_verified=false: ${problem.id}`);
  }
  if (/上题/.test(problem.stem || '') && !problem.group_id && !problem.parent_id && !problem.shared_context) {
    errors.push(`题干含“上题”但无组题上下文: ${problem.id}`);
  }
}

// 8. Training coverage gates.
const coverage = Object.fromEntries(idMapIds.map(id => [id, 0]));
for (const problem of problems) {
  for (const id of (problem.knowledge_ids || []).concat(problem.model_ids || [])) {
    if (id in coverage) coverage[id]++;
  }
}
for (const [id, meta] of Object.entries(idMap)) {
  const count = coverage[id] || 0;
  if (meta.level === 'A' && count < 5) errors.push(`例题数量不足: A档 ${id} ${meta.title} 当前 ${count}/5`);
  if (id.startsWith('E-') && count < 5) errors.push(`实验训练不足: ${id} ${meta.title} 当前 ${count}/5`);
  if (id.startsWith('M-') && count < 7) errors.push(`模型训练不足: ${id} ${meta.title} 当前 ${count}/7`);
}

// 9. Markdown hygiene and A-level learning-loop warnings.
for (const md of walk(root, (fp, name) => name.endsWith('.md'))) {
  const text = fs.readFileSync(md, 'utf8');
  const file = path.relative(root, md);
  if ((text.match(/```/g) || []).length % 2 !== 0) errors.push(`Markdown 代码块未闭合: ${file}`);
  [
    { re: /`<svg\b/g, msg: 'SVG 被反引号包住，会在网页露成源码' },
    { re: /<\/svg>`/g, msg: 'SVG 结束标签被反引号包住，会在网页露成源码' },
    { re: /&lt;svg\b/g, msg: 'SVG 被转义，会在网页露成源码' },
    { re: /```(?:svg|html)\b/g, msg: 'HTML/SVG 被放进代码块，会在网页露成源码' },
    { re: /^\* [0-9]+\. /gm, msg: '小节标题写成了普通列表' }
  ].forEach(rule => {
    let match;
    while ((match = rule.re.exec(text)) !== null) warns.push(`${file}:${lineOf(text, match.index)} ${rule.msg}`);
  });
}

const aSectionRules = [
  { name: '现象引入', test: block => /先看现象|现象|实验情境/.test(block) },
  { name: '动画或交互实验', test: block => /<iframe\b|示意动画|交互动画|互动实验|动画/.test(block) },
  { name: '观察任务', test: block => /观察任务/.test(block) },
  { name: '公式绑定', test: block => /公式绑定/.test(block) },
  { name: '易错点', test: block => /易错点/.test(block) },
  { name: '例题', test: block => /\*\*例题|####\s*\d+\.\s*例题/.test(block) }
];
for (const [id, meta] of Object.entries(idMap)) {
  if (!progress[id] || progress[id].status !== 'done' || meta.level !== 'A') continue;
  if (['experiments', 'models', 'gaokao-skills'].includes(meta.file)) continue;
  const text = read(`${meta.file}.md`);
  const start = text.search(new RegExp(`<h4[^>]*\\bid="${esc(meta.slug)}"`));
  if (start < 0) continue;
  const rest = text.slice(start);
  const next = rest.slice(1).search(/<h4[^>]*\bid="/);
  const block = next < 0 ? rest : rest.slice(0, next + 1);
  for (const rule of aSectionRules) if (!rule.test(block)) warns.push(`A档 ${id} 缺少学习闭环元素: ${rule.name}`);
}

// 10. Inline animation JavaScript syntax.
const animRoot = path.join(root, 'anim');
if (fs.existsSync(animRoot)) {
  for (const html of walk(animRoot, (fp, name) => name.endsWith('.html'))) {
    const text = fs.readFileSync(html, 'utf8');
    const scriptRe = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
    let match;
    while ((match = scriptRe.exec(text)) !== null) {
      if (!match[1].trim()) continue;
      const tmp = path.join(os.tmpdir(), `anim-check-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}.js`);
      fs.writeFileSync(tmp, match[1]);
      try {
        execFileSync(process.execPath, ['--check', tmp], { stdio: 'pipe' });
      } catch (error) {
        errors.push(`动画 JS 语法错误: ${path.relative(root, html)} - ${(error.stderr || error.message).toString().split('\n')[0]}`);
      } finally {
        fs.rmSync(tmp, { force: true });
      }
    }
  }
}

// 11. System files must not be shipped. Check the Git index so a local Finder
// artifact cannot make a clean checkout fail before it is committed.
let trackedFiles = [];
try {
  trackedFiles = execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean);
} catch {
  trackedFiles = walk(root).map(fp => path.relative(root, fp));
}
for (const rel of trackedFiles) {
  const name = path.basename(rel);
  if (name === '.DS_Store' || name.startsWith('.fuse_hidden')) errors.push(`仓库包含系统隐藏文件: ${rel}`);
}

console.log(`=== repository consistency check${strict ? ' (strict)' : ''} ===`);
console.log('知识点/实验/模型总数:', idMapIds.length);
console.log('知识图谱节点数:', graphNodes.length);
console.log('题库题数:', coreProblems.length);
console.log('页面例题数:', pageExamples.length);
console.log('规范补充训练题数:', specExamples.length);
if (warns.length) {
  console.log(`\n⚠ 警告 (${warns.length}):`);
  warns.forEach(warn => console.log(`  - ${warn}`));
}
if (errors.length || (strict && warns.length)) {
  if (strict && warns.length && !errors.length) {
    console.log('\n✗ 严格模式将警告视为错误');
  }
  if (errors.length) {
    console.log(`\n✗ 错误 (${errors.length}):`);
    errors.forEach(error => console.log(`  - ${error}`));
  }
  process.exitCode = 1;
} else {
  console.log('\n✓ 全部通过');
}
