#!/usr/bin/env node
'use strict';

/*
 * Import one already-audited original-paper batch into the student bank.
 * Usage:
 *   node scripts/import-verified-batch.js data/import-batches/2025-beijing.json --dry-run
 *   node scripts/import-verified-batch.js data/import-batches/2025-beijing.json --apply
 */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sourceFile = process.argv[2];
const apply = process.argv.includes('--apply');
const allowedKinds = new Set(['official_exam', 'regional_exam', 'published_simulation', 'diagnostic_exam']);
const figureRe = /(如图|下图|图示|所示|图中|右图|左图)/;

function fail(message) {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
}

if (!sourceFile) {
  fail('缺少批次文件。');
  process.exit();
}

const inputPath = path.resolve(process.cwd(), sourceFile);
const bankPath = path.join(root, 'data/verified-problems.json');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const validIds = new Set(Object.keys(idMap));
const modelIds = new Set(Object.keys(idMap).filter(id => id.startsWith('M-')));
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const raw = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const batch = Array.isArray(raw) ? raw : raw.problems;

if (!Array.isArray(batch) || !batch.length) {
  fail('批次文件必须包含非空 problems 数组。');
  process.exit();
}

const ids = new Set((bank.problems || []).map(p => p.id));
const batchIds = new Set();
const errors = [];

for (const p of batch) {
  const label = p.id || '未编号题目';
  const required = ['id', 'source', 'source_detail', 'exam', 'question_no', 'verified_at', 'stem', 'answer', 'solution', 'method'];
  for (const key of required) if (!p[key] || (typeof p[key] === 'string' && !p[key].trim())) errors.push(`${label}: 缺少 ${key}`);
  if (ids.has(p.id)) errors.push(`${label}: 已存在于题库`);
  if (batchIds.has(p.id)) errors.push(`${label}: 批次内重复编号`);
  batchIds.add(p.id);
  if (p.source_verified !== true) errors.push(`${label}: source_verified 必须为 true`);
  if (!allowedKinds.has(p.source_kind)) errors.push(`${label}: source_kind 不允许`);
  if (!Array.isArray(p.source_urls) || !p.source_urls.length || p.source_urls.some(url => !/^https?:\/\//.test(url))) errors.push(`${label}: 来源链接不完整`);
  if (!Array.isArray(p.knowledge_ids) || !p.knowledge_ids.length) errors.push(`${label}: 缺少知识点标签`);
  for (const id of p.knowledge_ids || []) if (!validIds.has(id)) errors.push(`${label}: 无效知识点 ${id}`);
  for (const id of p.model_ids || []) if (id && !modelIds.has(id)) errors.push(`${label}: 无效模型 ${id}`);
  if (['单选', '多选'].includes(p.type) && (!Array.isArray(p.options) || p.options.length < 3)) errors.push(`${label}: 选择题缺选项`);
  if ((figureRe.test(p.stem || '') || p.diagram_required) && !(p.diagram || p.image || p.img || p.figure || p.svg)) errors.push(`${label}: 图题缺图`);
}

if (errors.length) {
  errors.forEach(fail);
  process.exit();
}

const coveredBefore = new Set((bank.problems || []).flatMap(p => p.knowledge_ids || []));
const coveredAfter = new Set([...coveredBefore, ...batch.flatMap(p => p.knowledge_ids || [])]);
console.log(`✓ 批次 ${path.basename(inputPath)}：${batch.length} 题，新增知识点覆盖 ${coveredAfter.size - coveredBefore.size} 个`);
console.log(`✓ 题库将从 ${(bank.problems || []).length} 题变为 ${(bank.problems || []).length + batch.length} 题`);

if (!apply) {
  console.log('（干跑完成；使用 --apply 才写入题库）');
  process.exit();
}

bank.problems.push(...batch);
fs.writeFileSync(bankPath, `${JSON.stringify(bank, null, 2)}\n`);
console.log('✓ 已写入 data/verified-problems.json；请继续运行 node scripts/check.js。');
