'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = ['data/verified-problems.json', 'data/verified-diagnostic-2024cee.json'];
const problems = files.flatMap(rel => {
  const data = JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
  return data.problems || [];
});
const rows = problems.map(p => `| ${p.id} | ${p.answer_checked_by || '—'} | ${p.solution_recalculated_by || '—'} | ${p.verification_status || 'pending'} | blocked |`);
const body = [
  '# 全站答案独立复算登记',
  '',
  '> 生成日期：2026-07-15  ',
  '> 规则：未填写答案核对人和独立复算人，不得进入学生端发布题库。自动计算或原有解析不能冒充独立复算签名。',
  '',
  '## 已确认修正',
  '',
  '| 页面题目 | 原答案 | 独立推导 | 修正后 | 证据 |',
  '|---|---|---|---|---|',
  '| B3-16 并联支路功率 | $2.94\\ \\mathrm{W}$ | $P_2=(3/7)^2\\times4=36/49\\ \\mathrm{W}$ | $36/49\\ \\mathrm{W}\\approx0.735\\ \\mathrm{W}$ | `audit/content/P0-CALC-001.md` |',
  '',
  '## 结构化来源候选题',
  '',
  '| 题目 ID | 答案核对人 | 独立复算人 | 核验状态 | 发布 |',
  '|---|---|---|---|---|',
  ...rows,
  '',
  `当前候选题 ${problems.length} 道；完成政策 2.0 双签并可发布 0 道。`,
  ''
].join('\n');
fs.writeFileSync(path.join(root, 'audit/content-solution-recalculation.md'), body);
console.log(`Built recalculation register for ${problems.length} source candidates.`);
