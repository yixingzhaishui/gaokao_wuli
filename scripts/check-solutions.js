/* P0-CALC-001: publication must fail closed unless every exported solution is independently recalculated. */
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const exported = JSON.parse(fs.readFileSync(path.join(root, 'data/publishable-page-examples.json'), 'utf8'));
const quarantine = JSON.parse(fs.readFileSync(path.join(root, 'data/quarantine/legacy-markdown-exercises.json'), 'utf8'));
const errors = [];

if (exported.fail_closed !== true) errors.push('例题导出未设置 fail_closed=true');
for (const p of exported.problems || []) {
  for (const field of ['id', 'answer', 'solution', 'solution_recalculated_by', 'answer_checked_by']) {
    if (!p[field]) errors.push(`发布题 ${p.id || 'unknown'} 缺少 ${field}`);
  }
  if (p.verification_status !== 'double_checked') errors.push(`发布题 ${p.id} 未完成双签`);
}
for (const record of quarantine.records || []) {
  const actual = crypto.createHash('sha256').update(record.content || '').digest('hex');
  if (actual !== record.sha256) errors.push(`隔离题块哈希不一致: ${record.file}:${record.original_line}`);
}
const known = (quarantine.records || []).find(r => r.knowledge_id === 'B3-16' && /36\/49\s*W/.test(r.content || ''));
if (!known || /2\.94\s*W/.test(known.content)) errors.push('B3-16 已知功率修正未保留为 36/49 W 且无旧错误值');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Solution gate passed: ${(exported.problems || []).length} publishable; ${quarantine.count} quarantined blocks hash-verified.`);
