/* Exhaustive acceptance gate for P1-EDITOR-002/003. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const review = JSON.parse(fs.readFileSync(path.join(root, 'data/editorial-review.json'), 'utf8'));
const allowed = new Set(['concept-law', 'model', 'experiment', 'stse-extension']);
const errors = [];
if (review.reviewed_by !== 'Codex AI editorial review') errors.push('编辑审查清单缺少真实审阅角色');
if (!Array.isArray(review.review_scope) || !review.review_scope.includes('P1-EDITOR-002') || !review.review_scope.includes('P1-EDITOR-003')) errors.push('编辑审查范围不完整');

function formulaIndices(text) {
  const indices = [];
  let match;
  const math = /\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g;
  while ((match = math.exec(text))) indices.push(match.index);
  const code = /```text\n([\s\S]*?)```/g;
  while ((match = code.exec(text))) if (/=|≤|≥|≈/.test(match[1])) indices.push(match.index);
  return indices.sort((a, b) => a - b);
}

for (const [id, meta] of Object.entries(idMap)) {
  const record = review.nodes?.[id];
  if (!record) { errors.push(`${id} 缺少编辑审查记录`); continue; }
  if (!allowed.has(record.template)) errors.push(`${id} 模板非法: ${record.template}`);
  if (record.formula_occurrences > 0 && (!record.formula_card || !record.condition_basis || record.first_use_reviewed !== true)) errors.push(`${id} 公式首次使用卡不完整`);
  const text = fs.readFileSync(path.join(root, `${meta.file}.md`), 'utf8');
  const start = text.search(new RegExp(`<h4\\b[^>]*\\bid=["']${meta.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`));
  if (start < 0) { errors.push(`${id} 节点不存在`); continue; }
  const rest = text.slice(start);
  const next = rest.slice(1).search(/<h4\b[^>]*\bid=/);
  const block = next < 0 ? rest : rest.slice(0, next + 1);
  if (!block.includes(`content-template: ${record.template}`)) errors.push(`${id} 页面模板标记与清单不一致`);
  if (/^####\s+\d+(?:\.\d+)?\.\s+/m.test(block)) errors.push(`${id} 仍使用固定编号章节模板`);
  if (record.formula_occurrences > 0) {
    const cardAt = block.indexOf('> **公式首次使用卡**');
    if (cardAt < 0) errors.push(`${id} 页面缺公式首次使用卡`);
    const formulaAt = formulaIndices(block)[0];
    if (formulaAt !== undefined && (cardAt > formulaAt || formulaAt - cardAt > 1200)) errors.push(`${id} 公式卡未紧邻首次公式`);
  }
}
for (const id of Object.keys(review.nodes || {})) if (!idMap[id]) errors.push(`编辑审查清单存在多余节点 ${id}`);

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
const counts = Object.values(review.nodes).reduce((a, n) => ((a[n.template] = (a[n.template] || 0) + 1), a), {});
console.log(`Editorial coverage passed for ${Object.keys(idMap).length} nodes: ${JSON.stringify(counts)}.`);
