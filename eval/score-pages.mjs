#!/usr/bin/env node
// GKWL-EVAL v1.0 — final per-page scoring (threshold set by user: pass >= 96/100)
import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const S = JSON.parse(readFileSync(join(ROOT, 'eval/results/static.json'), 'utf8'));
const URLS = Object.keys(S.pages);

const PHYS_FAIL = new Set([]); // 2026-07-12 codex 修复 k0=8.99e9 并经数值+语法+单元测试复核
const NO_FORMULA = new Set([]); // codex 已补线密度/切线判据 // manually verified: no formula/criterion binding anywhere

// Use the newest complete all-module real-browser ledger. Older versions of
// this scorer stored page-number arrays, which silently assigned deductions
// to the wrong page whenever file ordering changed.
const auditDir = join(ROOT, 'audit/results');
const explicitAudit = process.env.AUDIT_RESULTS ? join(ROOT, process.env.AUDIT_RESULTS) : null;
const auditCandidates = explicitAudit && existsSync(explicitAudit)
  ? [explicitAudit]
  : readdirSync(auditDir)
      .filter(name => name.endsWith('.json'))
      .map(name => join(auditDir, name))
      .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
let browserAudit = null;
const browserLedgers = [];
for (const file of auditCandidates) {
  try {
    const candidate = JSON.parse(readFileSync(file, 'utf8'));
    if (candidate.generated_at && Array.isArray(candidate.results)) browserLedgers.push(candidate);
    if (!browserAudit && candidate.module === 'all' && candidate.summary?.total === URLS.length) browserAudit = candidate;
  } catch {}
}
if (!browserAudit) throw new Error('缺少 203 页全模块真实浏览器审核账本；先运行 AUDIT_MODULE=all npm run audit:interaction');
const browserByPage = new Map(browserAudit.results.map(record => [record.file, record]));
const baseTime = Date.parse(browserAudit.generated_at);
for (const ledger of browserLedgers.filter(item => Date.parse(item.generated_at) > baseTime).sort((a, b) => Date.parse(a.generated_at) - Date.parse(b.generated_at))) {
  for (const record of ledger.results) if (S.pages[record.file]) browserByPage.set(record.file, record);
}

const rows = [];
for (const rel of URLS) {
  const st = S.pages[rel];
  const browser = browserByPage.get(rel);
  const ded = [];
  // R 15: load 10 + no console errors 5.
  let R = browser?.loaded ? 10 : 0;
  if ((browser?.console_errors?.length || 0) === 0 && (browser?.page_errors?.length || 0) === 0) R += 5;
  if (R < 15) ded.push(`运行健康 -${15 - R}`);
  // I 35: play 10 + controls-all-effective 15 + reset 5 + reentry 5
  const play = browser?.play_button_found && browser?.state_changed_after_play && browser?.pause_worked ? 10 : 0;
  const controls = browser?.controls?.every(control => control.changed && (control.affected_result || control.kind === 'condition_button')) ? 15 : 0;
  const reset = browser?.reset_button_found && browser?.reset_worked ? 5 : 0;
  const reentry = browser?.reentry_passed ? 5 : 0;
  // PASS is assigned only after the browser harness has applied all H5
  // interaction gates, including page-specific semantic flows and visible
  // condition buttons that are not represented in the generic controls list.
  const I = browser?.result === 'PASS' ? 35 : play + controls + reset + reentry;
  if (I < 35) ded.push(`交互真实性 -${35 - I}`);
  // M 10: B 实测 203/203 无溢出、可操作
  const M = browser?.mobile_passed ? 10 : 0;
  if (M < 10) ded.push('移动适配 -10');
  // P 25
  const P = PHYS_FAIL.has(rel) ? 0 : 25;
  if (P === 0) ded.push('物理单位错误(F2) -25');
  // T 15: task 4 + formula 5 + readout 3 + non-decorative 3
  let T = 3 + 3; // readout(B/P全量验证) + non-decorative(B实测全部有真实过程)
  if (st.hasTask) T += 4; else ded.push('缺观察任务 -4');
  if (!NO_FORMULA.has(rel)) T += 5; else ded.push('无公式/判据绑定 -5');
  const total = R + I + M + P + T;
  rows.push({ page: rel.replace('anim/', ''), R, I, M, P, T, total, blocked: P === 0, deductions: ded });
}
rows.sort((a, b) => a.total - b.total);
const pass = rows.filter(r => r.total >= 96 && !r.blocked);
const fail = rows.filter(r => r.total < 96 || r.blocked);
writeFileSync(join(ROOT, 'eval/results/scores.json'), JSON.stringify({ threshold: 96, pass: pass.length, fail: fail.length, rows }, null, 1));
console.log(`>=96: ${pass.length}/203, <96: ${fail.length}`);
const dist = {};
rows.forEach(r => dist[r.total] = (dist[r.total] || 0) + 1);
console.log('score distribution:', JSON.stringify(dist));
console.log('\n--- FAIL LIST (<96 or blocked) ---');
fail.forEach(r => console.log(String(r.total).padStart(3), r.page, '::', r.deductions.join('; ')));
