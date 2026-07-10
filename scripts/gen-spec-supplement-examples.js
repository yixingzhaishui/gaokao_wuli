'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const problems = JSON.parse(fs.readFileSync(path.join(root, 'data/problems.json'), 'utf8')).problems || [];
const pageExamples = JSON.parse(fs.readFileSync(path.join(root, 'data/page-examples.json'), 'utf8')).examples || [];

const existing = problems.concat(pageExamples);
const counts = {};
for (const id of Object.keys(idMap)) counts[id] = 0;
for (const p of existing) {
  for (const id of (p.knowledge_ids || []).concat(p.model_ids || [])) {
    if (id in counts) counts[id] += 1;
  }
}

const bank = [];

function baseProblem(id, index, kind, stem, answer, solution, method, traps, extra = {}) {
  const meta = idMap[id];
  const isModel = id.startsWith('M-');
  const item = {
    id: `PS-${id}-${String(index).padStart(2, '0')}`,
    source: '规范补充训练',
    source_verified: false,
    year: 2026,
    type: kind,
    difficulty: extra.difficulty || (kind === '综合' ? '中档' : '基础'),
    knowledge_ids: isModel ? [] : [id],
    model_ids: isModel ? [id] : [],
    stem,
    answer,
    solution,
    method,
    traps,
    variants: extra.variants || [],
    spec_role: extra.spec_role || kind,
    page_ref: `${meta.file}?id=${meta.slug}`
  };
  for (const key of ['diagram_required', 'diagram']) {
    if (key in extra) item[key] = extra[key];
  }
  return item;
}

function diagramProblem(id, index) {
  const meta = idMap[id];
  return baseProblem(
    id,
    index,
    '图像/示意图',
    `如图，围绕“${meta.title}”建立模型。图中红色箭头表示待判断的主变量，蓝色读数表示可测量量。请说明解题时应先观察哪一个量，并写出一个容易误判的地方。`,
    `先观察与“${meta.title}”定义或规律直接对应的蓝色读数，再判断红色主变量的方向、大小或变化趋势。`,
    `读图顺序：先确定研究对象和方向，再找公式中的量在图上的对应读数，最后判断变化趋势。若题目给出图像，应优先看斜率、面积、截距或临界点，而不是只看图线高低。`,
    `把图形外观直接当结论；没有把图中读数和公式符号一一对应。`,
    [`不看坐标轴或箭头方向`, `把图线高低误认为物理量大小`],
    {
      difficulty: '中档',
      spec_role: '图像/示意图题',
      diagram_required: true,
      diagram: {
        type: 'inline-svg',
        title: `${meta.title}示意读图`,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 220" role="img" aria-label="${meta.title}示意读图"><rect x="36" y="38" width="448" height="142" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><line x1="90" y1="148" x2="420" y2="148" stroke="#475569" stroke-width="3" marker-end="url(#a)"/><line x1="120" y1="166" x2="120" y2="66" stroke="#475569" stroke-width="3" marker-end="url(#a)"/><path d="M130 140 C205 118 275 82 382 76" fill="none" stroke="#2563eb" stroke-width="4"/><circle cx="276" cy="98" r="7" fill="#dc2626"/><line x1="276" y1="98" x2="338" y2="75" stroke="#dc2626" stroke-width="4" marker-end="url(#b)"/><text x="260" y="34" text-anchor="middle" font-size="18" fill="#102a43">${meta.title}</text><text x="350" y="70" font-size="15" fill="#b91c1c">主变量</text><text x="128" y="62" font-size="14" fill="#334155">读数/图像</text><text x="420" y="170" font-size="14" fill="#334155">条件变化</text><defs><marker id="a" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#475569"/></marker><marker id="b" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#dc2626"/></marker></defs></svg>`
      }
    }
  );
}

function knowledgeTemplates(id, need) {
  const meta = idMap[id];
  const items = [
    baseProblem(
      id,
      1,
      '单选',
      `关于“${meta.title}”，下列做法最稳妥的是：A. 先背结论再代数；B. 先确定研究对象、方向和适用条件；C. 只看数值大小；D. 只要单位相同就能相加。`,
      'B',
      `“${meta.title}”类题必须先明确研究对象、方向和适用条件，再把题给量与公式量对应。A、C、D 都容易造成机械套公式。`,
      '先判对象、方向、条件，再列式。',
      ['不判断适用条件就套公式', '忽略矢量方向或过程条件'],
      { spec_role: '概念判断题' }
    ),
    baseProblem(
      id,
      2,
      '计算',
      `围绕“${meta.title}”做基础计算时，已知两个直接相关量，要求第三个量。写出通用解题步骤。`,
      '先统一单位，再选公式，代入后检查量纲和方向。',
      `基础计算不是只把数字塞进公式。第一步统一单位；第二步确认公式是否适用于本过程；第三步代入求解；最后用量纲、正负号或极端情况检查结果。`,
      '单位检查 + 条件检查 + 结果回代。',
      ['单位未统一', '把过程量和状态量混用'],
      { spec_role: '基础计算题' }
    ),
    baseProblem(
      id,
      3,
      '综合',
      `“${meta.title}”常考模型中，题目加入一个临界词，如“恰好”“最大”“最小”或“刚要”。应怎样处理？`,
      '把临界词翻译成等式或边界条件，再与基本规律联立。',
      `临界题的关键不是多列公式，而是识别边界：刚要滑动、刚好通过、恰好平衡、刚好不变等。把文字翻译成物理条件，再与“${meta.title}”的主公式联立。`,
      '临界词 → 边界条件 → 主公式联立。',
      ['看到最大最小就直接求导或猜答案', '漏掉临界条件'],
      { difficulty: '中档', spec_role: '常考模型题' }
    ),
    diagramProblem(id, 4),
    baseProblem(
      id,
      5,
      '错解辨析',
      `某同学解“${meta.title}”题时，只根据题中最大数字选公式，没有画对象图，也没有检查方向。请指出错因，并给出纠正步骤。`,
      '错在把公式当记忆模板，缺少对象、方向、条件和图像读数检查。',
      `纠正顺序：画出研究对象或过程图；标出方向和已知量；确认公式适用条件；把图中读数与公式符号绑定；最后代入计算。`,
      '错解辨析抓四点：对象、方向、条件、读数。',
      ['只按数字选公式', '没有把公式和图像/读数绑定'],
      { spec_role: '错解辨析题' }
    )
  ];
  return items.slice(Math.max(0, items.length - need));
}

function experimentTemplates(id, need) {
  const meta = idMap[id];
  const roles = [
    ['实验', '仪器读数', `在“${meta.title}”实验中，读取仪器数据时应先确认什么？`, '先确认量程、分度值和零点，再读数并估读到要求位数。', '读数前先看量程和分度值，避免把格数直接当物理量。', '量程 → 分度值 → 零点 → 估读。'],
    ['实验', '操作步骤', `在“${meta.title}”实验中，为什么要保持一个变量不变再改变另一个变量？`, '为了控制变量，保证图像或数据变化只来自被研究量。', '实验归纳型题要说明控制变量，否则数据趋势不能支持结论。', '控制变量是实验结论可信的前提。'],
    ['实验', '数据记录', `为“${meta.title}”设计数据表，至少应记录哪三类信息？`, '自变量、因变量和必要的单位/重复测量数据。', '表格必须能支持后续作图、求斜率或求平均值，不能只写最终答案。', '表头带单位，数据能复算。'],
    ['实验', '图像处理', `“${meta.title}”实验数据作图时，斜率或截距通常有什么作用？`, '斜率或截距用来反推出待测物理量或验证正比/反比关系。', '图像法的核心是把公式变成直线关系，再用斜率、截距降低偶然误差。', '先线性化，再解释斜率/截距。'],
    ['实验', '误差分析', `“${meta.title}”实验出现系统偏差时，应从哪些方面排查？`, '仪器零点、摩擦/阻力、读数视差、操作不同步、模型条件不满足。', '误差分析要说清偏大还是偏小，并指出影响哪个读数或图像斜率。', '误差原因必须连到读数或公式。']
  ];
  return roles.slice(Math.max(0, roles.length - need)).map((r, i) => baseProblem(
    id,
    i + 1,
    r[0],
    r[2],
    r[3],
    r[4],
    r[5],
    ['只写“人为误差”但不说明方向', '没有把误差连到具体读数'],
    { spec_role: r[1], difficulty: i >= 3 ? '中档' : '基础' }
  ));
}

function modelTemplates(id, need) {
  const meta = idMap[id];
  const roles = [
    ['原型题', '计算', `“${meta.title}”原型题的第一步应怎样选研究对象？`, '先选能直接列出主方程的对象；多物体问题先整体后隔离。'],
    ['对象变式', '综合', `若“${meta.title}”题改变研究对象，原方程能否直接照搬？`, '不能。必须重新画受力/过程图，判断内力、外力和约束关系是否改变。'],
    ['方向变式', '单选', `“${meta.title}”中方向反向时，最容易漏掉什么？`, '最容易漏掉矢量正负号、摩擦/场力方向或速度方向改变。'],
    ['已知量变式', '计算', `“${meta.title}”把原来求结果改成反求条件时，应怎样处理？`, '保留符号式，先由目标状态写约束，再反解所需条件。'],
    ['临界条件变式', '综合', `“${meta.title}”出现“刚好”类临界条件时，应怎样列式？`, '把“刚好”翻译为最大静摩擦、支持力为零、相对速度为零等边界等式。'],
    ['图像变式', '图像/示意图', `如图，围绕“${meta.title}”的图像变式题，应优先读取哪些信息？`, '优先读坐标轴、斜率、面积、截距和转折点，再回到模型方程。'],
    ['错解辨析', '错解辨析', `某同学把“${meta.title}”所有阶段合并成一个公式计算。错在哪里？`, '错在没有分阶段判断条件变化；模型题常要按接触、共速、临界、能量转化等阶段分开。']
  ];
  return roles.slice(Math.max(0, roles.length - need)).map((r, i) => {
    const item = baseProblem(
      id,
      i + 1,
      r[1],
      r[2],
      r[3],
      `模型变式训练要先识别“${meta.title}”的原型条件，再比较题目改变了对象、方向、已知量还是临界条件。`,
      `${r[0]}：回到对象图、过程图和主方程。`,
      ['把原型题公式机械照搬', '不分阶段或不判临界'],
      { spec_role: r[0], difficulty: i >= 4 ? '中档' : '基础' }
    );
    if (r[1] === '图像/示意图') {
      item.diagram_required = true;
      item.diagram = diagramProblem(id, 90).diagram;
    }
    return item;
  });
}

for (const [id, meta] of Object.entries(idMap)) {
  const current = counts[id] || 0;
  let target = 0;
  let items = [];
  if (meta.level === 'A') {
    target = 5;
    items = knowledgeTemplates(id, target - current);
  }
  if (id.startsWith('E-')) {
    target = 5;
    items = experimentTemplates(id, target - current);
  }
  if (id.startsWith('M-')) {
    target = 7;
    items = modelTemplates(id, target - current);
  }
  if (target && current < target) {
    bank.push(...items.slice(0, target - current));
    counts[id] = current + Math.min(items.length, target - current);
  }
}

const out = {
  generated_at: new Date().toISOString(),
  source: 'gaokao-example-system-spec-supplement',
  count: bank.length,
  examples: bank
};

fs.writeFileSync(path.join(root, 'data/spec-supplement-examples.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`generated ${bank.length} spec supplement examples`);
