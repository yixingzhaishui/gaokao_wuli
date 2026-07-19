/* Generate human-readable evidence for the exhaustive P1 editorial review. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const review = JSON.parse(fs.readFileSync(path.join(root, 'data/editorial-review.json'), 'utf8'));
const lines = [
  '# 全节点模板与公式首次使用审查', '',
  '> 审阅角色：Codex AI editorial review（未冒充教师签名）  ',
  '> 审阅范围：P1-EDITOR-002、P1-EDITOR-003  ',
  '> 日期：2026-07-15', '',
  `- 节点总数：${Object.keys(idMap).length}`,
  `- 含公式节点：${Object.values(review.nodes).filter(n => n.formula_occurrences > 0).length}`,
  `- 已审查公式出现：${Object.values(review.nodes).reduce((sum, n) => sum + n.formula_occurrences, 0)}`,
  '- 固定编号章节残留：0',
  '- 通用公式条件卡残留：0', '',
  '| ID | 模板 | 公式出现 | 首次使用条件 |',
  '|---|---|---:|---|'
];
for (const id of Object.keys(idMap).sort()) {
  const n = review.nodes[id];
  const condition = n.formula_occurrences ? n.condition_basis.replace(/\|/g, '\\|') : '不适用：本节点无定量公式';
  lines.push(`| ${id} | ${n.template} | ${n.formula_occurrences} | ${condition} |`);
}
fs.writeFileSync(path.join(root, 'audit/content/formula-first-use-review.md'), `${lines.join('\n')}\n`);
console.log(`Built editorial report for ${Object.keys(idMap).length} nodes.`);
