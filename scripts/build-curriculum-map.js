/* Build the curriculum mapping authority required by P0-CURR-001. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const officialExperiments = JSON.parse(fs.readFileSync(path.join(root, 'data/official-experiments.json'), 'utf8'));
const sourceUrl = 'https://www.esph.com.cn/docs/2025-04/b8fb91c002624b2e90ebfb1095f23a32.pdf';

const moduleName = {
  B1: '必修1', B2: '必修2', B3: '必修3',
  X1: '选择性必修1', X2: '选择性必修2', X3: '选择性必修3',
  E: '实验专题', G: '高考能力专题', M: '模型专题'
};

const groups = [
  ['B1', 1, 14, '1.1', '运动的描述与匀变速直线运动', 'B1-01'],
  ['B1', 15, 22, '1.2', '相互作用与力的合成、分解和平衡', 'B1-15'],
  ['B1', 23, 32, '1.3', '牛顿运动定律及其应用', 'B1-23'],
  ['B2', 1, 8, '2.2.1—2.2.3', '曲线运动、抛体运动与匀速圆周运动', 'B2-01'],
  ['B2', 9, 14, '2.2.4—2.2.5', '万有引力定律与天体运动', 'B2-09'],
  ['B2', 15, 23, '2.1.1—2.1.4', '机械能及其守恒定律', 'B2-15'],
  ['B2', 24, 27, '2.3.1—2.3.3', '牛顿力学的局限性与相对论初步', 'B2-24'],
  ['B3', 1, 10, '3.1.1—3.1.6', '静电场', 'B3-01'],
  ['B3', 11, 18, '3.2.1—3.2.6', '电路及其应用', 'B3-11'],
  ['B3', 19, 19, '3.3.4—3.3.6', '电磁场与电磁波初步', 'B3-19'],
  ['B3', 20, 20, '3.4.1—3.4.4', '能源与可持续发展', 'B3-20'],
  ['B3', 21, 23, '3.1/3.2 supporting', '静电与电路实验、应用的配套学习', null],
  ['B3', 24, 24, '3.3.5', '电磁波的应用及其影响', 'B3-24'],
  ['B3', 25, 25, '3.3.1', '磁现象及其生产生活应用', 'B3-25'],
  ['B3', 26, 26, '3.3.2', '磁场、磁感应强度与磁感线', 'B3-26'],
  ['B3', 27, 27, '3.3.3', '磁通量与电磁感应现象初步', 'B3-27'],
  ['X1', 1, 7, '1.1.1—1.1.3', '动量与动量守恒定律', 'X1-01'],
  ['X1', 8, 18, '1.2.1—1.2.6', '机械振动与机械波', 'X1-08'],
  ['X1', 19, 23, '1.3.1—1.3.3', '光的折射、全反射、干涉、衍射与偏振', 'X1-19'],
  ['X1', 25, 27, '1.2.5/1.3.2/1.3.4', '波的反射折射、激光与光纤应用', 'X1-25'],
  ['X2', 3, 6, '2.1.1—2.1.3', '安培力、洛伦兹力及带电粒子运动', 'X2-03'],
  ['X2', 9, 19, '2.2.1—2.2.6', '电磁感应及其应用', 'X2-09'],
  ['X2', 20, 23, '2.3.1—2.3.4', '电磁振荡、电磁波与电磁波谱', 'X2-20'],
  ['X2', 18, 18, '2.4.1—2.4.3', '传感器及自动控制', 'X2-18'],
  ['X2', 24, 24, '2.2.6', '发电机、电动机与能量转化', 'X2-24'],
  ['X3', 1, 12, '3.1.1—3.1.6', '固体、液体和气体及分子动理论', 'X3-01'],
  ['X3', 13, 16, '3.2.1—3.2.3', '热力学定律', 'X3-13'],
  ['X3', 17, 18, '3.1.3/3.1.5', '固体结构与液体表面现象', 'X3-17'],
  ['X3', 19, 20, '3.4.1—3.4.2', '光电效应与波粒二象性', 'X3-19'],
  ['X3', 21, 32, '3.3.1—3.3.5', '原子与原子核', 'X3-21'],
  ['X3', 33, 36, '3.1.2—3.1.5', '分子统计规律、材料与液体现象', null],
  ['X3', 37, 39, '3.3.2—3.3.4', '放射性应用、防护与基本相互作用', null]
];

function numberOf(id) { return Number(id.split('-')[1]); }

function groupFor(id) {
  const prefix = id.split('-')[0];
  const n = numberOf(id);
  return groups.find(g => g[0] === prefix && n >= g[1] && n <= g[2]);
}

const crosslinkOverrides = {
  'B3-21': { official_module: '必修3', standard_clause: '3.1.1/3.1.4', requirement: '静电感应、静电利用与防护的配套学习', scope: 'core', primary_node: false, crosslinks: ['B3-01'] },
  'B3-22': { official_module: '必修3', standard_clause: '3.2.6', requirement: '家庭电路、安全用电与节约用电', scope: 'core', primary_node: true, crosslinks: [] },
  'B3-23': { official_module: '必修3', standard_clause: '3.1.6', requirement: '观察电容器的充、放电现象', scope: 'core', primary_node: false, crosslinks: ['B3-09'] },
  'X1-24': { official_module: '选择性必修3', standard_clause: '3.4.1', requirement: '通过实验了解光电效应现象，知道爱因斯坦光电效应方程及其意义', scope: 'review', primary_node: false, crosslinks: ['X3-19'] },
  'X2-01': { official_module: '必修3', standard_clause: '3.3.2', requirement: '磁场与磁感线基础复习入口', scope: 'review', primary_node: false, crosslinks: ['B3-26', 'X2-03'] },
  'X2-02': { official_module: '必修3', standard_clause: '3.3.2', requirement: '磁感应强度基础复习入口', scope: 'review', primary_node: false, crosslinks: ['B3-26', 'X2-03'] },
  'X2-07': { official_module: '必修3', standard_clause: '3.3.3', requirement: '磁通量基础复习入口', scope: 'review', primary_node: false, crosslinks: ['B3-27', 'X2-09'] },
  'X2-08': { official_module: '必修3', standard_clause: '3.3.3', requirement: '电磁感应现象基础复习入口', scope: 'review', primary_node: false, crosslinks: ['B3-27', 'X2-09'] }
  ,'X2-18': { official_module: '选择性必修2', standard_clause: '2.4.1—2.4.3', requirement: '传感器及自动控制', scope: 'core', primary_node: true, crosslinks: [] }
};

const nodes = {};
for (const [id, meta] of Object.entries(idMap)) {
  const prefix = id.split('-')[0];
  if (crosslinkOverrides[id]) {
    nodes[id] = { knowledge_id: id, title: meta.title, ...crosslinkOverrides[id], source_url: sourceUrl };
    continue;
  }
  if (prefix === 'E') {
    const required = officialExperiments.official_required_ids.includes(id);
    nodes[id] = {
      knowledge_id: id,
      title: meta.title,
      official_module: required ? '学生必做实验' : '实验专题',
      standard_clause: required ? `学生必做实验:${id}` : null,
      requirement: required ? meta.title : (officialExperiments.teaching_support_ids.includes(id) ? '教学支持实验' : '高频拓展实验'),
      scope: required ? 'core' : 'extension',
      primary_node: required,
      crosslinks: [],
      source_url: sourceUrl
    };
    continue;
  }
  if (prefix === 'G' || prefix === 'M') {
    nodes[id] = { knowledge_id: id, title: meta.title, official_module: moduleName[prefix], standard_clause: null, requirement: '复习强化层，不作为独立课标覆盖条目', scope: 'extension', primary_node: false, crosslinks: [], source_url: sourceUrl };
    continue;
  }
  const group = groupFor(id);
  if (!group) throw new Error(`未找到课程映射规则: ${id}`);
  nodes[id] = {
    knowledge_id: id,
    title: meta.title,
    official_module: moduleName[prefix],
    standard_clause: group[3],
    requirement: group[4],
    scope: 'core',
    primary_node: group[5] === id,
    crosslinks: [],
    source_url: sourceUrl
  };
}

const output = {
  schema_version: 1,
  standard: '普通高中物理课程标准（2017年版2020年修订）',
  standard_url: sourceUrl,
  generated_at: '2026-07-15',
  coverage_note: 'primary_node 用于课标覆盖计数；core supporting nodes 不重复增加同一条款覆盖率；review/extension 节点不计入。',
  nodes
};

fs.writeFileSync(path.join(root, 'data/curriculum-map.json'), `${JSON.stringify(output, null, 2)}\n`);
console.log(`Built curriculum map for ${Object.keys(nodes).length} nodes.`);
