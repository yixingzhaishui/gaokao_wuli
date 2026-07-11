'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
}

function list(raw, key) {
  return Array.isArray(raw) ? raw : (raw[key] || []);
}

function hasGraphic(problem) {
  return Boolean(problem.diagram || problem.image || problem.img || problem.figure || problem.svg);
}

const genericPatterns = [
  /围绕“[^”]+”/,
  /基础计算时，已知两个直接相关量/,
  /某同学解“[^”]+”题时，只根据题中最大数字/,
  /把题干所有数字都代入公式/,
  /所有阶段合并成一个公式/,
  /写出通用解题步骤/,
  /请指出错因，并给出纠正步骤/,
  /说明解题时应先观察哪一个量/,
  /建立模型。图中红色箭头/,
  /把原型题公式机械照搬/,
  /关于“[^”]+”，下列做法最稳妥/,
  /某同学看到“[^”]+”/,
  /某同学在“[^”]+”实验/,
  /实验中，读取仪器数据时应先确认什么/,
  /为什么要保持一个变量不变/,
  /设计数据表，至少应记录哪三类信息/,
  /数据作图时，斜率或截距通常有什么作用/,
  /实验出现系统偏差时，应从哪些方面排查/,
  /原型题的第一步应怎样选研究对象/,
  /方向反向时，最容易漏掉什么/,
  /把原来求结果改成反求条件/,
  /出现“刚好”类临界条件时，应怎样列式/,
  /的图像变式题，应优先读取哪些信息/
];
const figureWords = /(如图|下图|图示|所示|图中|右图|左图)/;

function auditProblem(problem, origin) {
  const flags = [];
  const stem = String(problem.stem || '');
  const solution = String(problem.solution || '');
  const method = String(problem.method || '');
  const source = String(problem.source || '');

  for (const field of ['source', 'stem', 'answer', 'solution', 'method']) {
    if (!problem[field] || (typeof problem[field] === 'string' && !problem[field].trim())) {
      flags.push(`missing_${field}`);
    }
  }
  if (!problem.knowledge_ids?.length && !problem.model_ids?.length) flags.push('missing_tags');
  if (['单选', '多选'].includes(problem.type)) {
    if (!Array.isArray(problem.options) || problem.options.length < 3) flags.push('missing_options');
    if (/^[A-F](?:\s*[、.)])?$/.test(String(problem.answer || '').trim()) &&
        Array.isArray(problem.options) && problem.options.length &&
        !problem.options[String(problem.answer).trim().charCodeAt(0) - 65]) {
      flags.push('answer_option_mismatch');
    }
  }
  if (problem.type === '计算' && !/[0-9０-９]/.test(stem)) flags.push('no_numeric_data');
  if (solution.replace(/\s/g, '').length < 35) flags.push('short_solution');
  if (method.replace(/\s/g, '').length < 8) flags.push('short_method');
  if (genericPatterns.some(pattern => pattern.test(stem))) flags.push('template_placeholder');
  if (figureWords.test(stem) && !hasGraphic(problem)) flags.push('missing_diagram');
  if (problem.diagram_required && !hasGraphic(problem)) flags.push('missing_required_diagram');
  if (/真题|适应性|模拟/.test(source) && problem.source_verified !== true) flags.push('adapted_unverified');
  if (origin === 'spec' || problem.review_status === 'needs_review') flags.push('queued_for_manual_review');
  return flags;
}

function auditAll() {
  const core = list(readJson('data/problems.json'), 'problems');
  const page = list(readJson('data/page-examples.json'), 'examples');
  const spec = list(readJson('data/spec-supplement-examples.json'), 'examples');
  const groups = [
    ['core', core],
    ['page', page],
    ['spec', spec]
  ];
  const items = [];
  for (const [origin, problems] of groups) {
    for (const problem of problems) {
      const flags = auditProblem(problem, origin);
      const blockingFlags = flags.filter(flag => flag !== 'adapted_unverified');
      items.push({ id: problem.id, origin, status: blockingFlags.length ? 'needs_review' : 'ready', flags });
    }
  }
  const byFlag = {};
  for (const item of items) for (const flag of item.flags) byFlag[flag] = (byFlag[flag] || 0) + 1;
  return {
    generated_at: new Date().toISOString(),
    total: items.length,
    ready: items.filter(item => item.status === 'ready').length,
    needs_review: items.filter(item => item.status === 'needs_review').length,
    by_origin: Object.fromEntries(groups.map(([origin, problems]) => [origin, {
      total: problems.length,
      ready: items.filter(item => item.origin === origin && item.status === 'ready').length,
      needs_review: items.filter(item => item.origin === origin && item.status === 'needs_review').length
    }])),
    by_flag: byFlag,
    items
  };
}

if (require.main === module) {
  const report = auditAll();
  console.log(JSON.stringify(report, null, 2));
}

module.exports = { auditAll, auditProblem };
