// Keep the generated progress report in README.md and syllabus.md in sync.
// Run with --check to verify without writing either document.
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.slice(2).includes('--check');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const progress = JSON.parse(fs.readFileSync(path.join(root, 'data/progress.json'), 'utf8'));
const statusOrder = ['done', 'partial', 'pending', 'draft', 'review'];
const moduleOrder = [
  ['bx1', '必修1'], ['bx2', '必修2'], ['bx3', '必修3'],
  ['xb1', '选择性必修1'], ['xb2', '选择性必修2'], ['xb3', '选择性必修3'],
  ['gaokao-skills', '高考能力专题'], ['experiments', '实验专题（21 项课标必做 + 配套）'], ['models', '模型专题']
];
const start = '<!-- progress-report:start -->';
const end = '<!-- progress-report:end -->';

const rows = new Map(moduleOrder.map(([file, name]) => [file, { file, name, total: 0, counts: {} }]));
for (const [id, meta] of Object.entries(idMap)) {
  const row = rows.get(meta.file) || { file: meta.file, name: meta.file, total: 0, counts: {} };
  row.total++;
  const status = progress[id]?.status || 'unknown';
  row.counts[status] = (row.counts[status] || 0) + 1;
  rows.set(meta.file, row);
}

function cell(value) {
  return String(value ?? 0);
}

function rate(done, total) {
  return total ? `${(done / total * 100).toFixed(1)}%` : '0.0%';
}

function tableRow(values) {
  return `| ${values.join(' | ')} |`;
}

function report() {
  const orderedRows = [...rows.values()];
  const total = orderedRows.reduce((sum, row) => sum + row.total, 0);
  const totals = Object.fromEntries(statusOrder.map(status => [status, orderedRows.reduce((sum, row) => sum + (row.counts[status] || 0), 0)]));
  const lines = [
    start,
    '<!-- 此区域由 scripts/update-progress-report.js 生成，请勿手工修改。 -->',
    '| 模块 | 总条目 | interaction done | interaction partial | pending | draft | legacy review | 交互建设率 |',
    '|---|---:|---:|---:|---:|---:|---:|---:|',
    ...orderedRows.filter(row => row.total).map(row => tableRow([
      row.name,
      row.total,
      ...statusOrder.map(status => cell(row.counts[status])),
      rate(row.counts.done || 0, row.total)
    ])),
    tableRow([
      '合计', total,
      ...statusOrder.map(status => totals[status]),
      rate(totals.done, total)
    ]),
    '',
    `状态口径：${statusOrder.join('、')}；完成率只表示页面结构与交互建设进度，不表示课标、物理内容、答案、来源或教学审定。当前目录条目总数为 ${total}。`,
    end
  ];
  return lines.join('\n');
}

function update(file) {
  const fullPath = path.join(root, file);
  const current = fs.readFileSync(fullPath, 'utf8');
  const marker = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (!marker.test(current)) throw new Error(`${file} 缺少进度报告标记区间`);
  const next = current.replace(marker, report());
  if (checkOnly) {
    if (next !== current) {
      console.error(`${file} 的自动生成进度区已过期`);
      return false;
    }
    return true;
  }
  fs.writeFileSync(fullPath, next);
  return true;
}

try {
  const ok = ['README.md', 'syllabus.md'].map(update).every(Boolean);
  console.log(`${checkOnly ? '检查' : '更新'}进度报告：${[...rows.values()].filter(row => row.total).length} 个模块，${Object.keys(idMap).length} 个条目`);
  if (!ok) process.exit(1);
} catch (error) {
  console.error(`进度报告失败: ${error.message}`);
  process.exit(1);
}
