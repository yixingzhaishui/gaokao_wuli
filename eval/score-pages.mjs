#!/usr/bin/env node
// GKWL-EVAL v1.0 — final per-page scoring (threshold set by user: pass >= 96/100)
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const S = JSON.parse(readFileSync(join(ROOT, 'eval/results/static.json'), 'utf8'));
const URLS = Object.keys(S.pages);

// Pipeline B evidence (2026-07-12 full-site, real Chrome on published Pages)
const RESET_NONE = [0,20,25,31,32,34,35,36,38,41,42,43,44,45,47,49,51,55,58,61,72,87,90,104,108,109,110,112,120,130,133,136,139,147,149,152,154,156,157,173,191,192,194,195,196,197,198,199,200,202];
const RESET_PARTIAL = [23,28,52,56,113,121,142,144,158,163,193,201];
const PHYS_FAIL = new Set([]); // 2026-07-12 codex 修复 k0=8.99e9 并经数值+语法+单元测试复核
const NO_FORMULA = new Set([]); // codex 已补线密度/切线判据 // manually verified: no formula/criterion binding anywhere
const resetScope = {};
RESET_NONE.forEach(i => resetScope[URLS[i]] = 'NONE');
RESET_PARTIAL.forEach(i => resetScope[URLS[i]] = 'PARTIAL');

const rows = [];
for (const rel of URLS) {
  const st = S.pages[rel];
  const html = readFileSync(join(ROOT, rel), 'utf8');
  const ded = [];
  // R 15: load 10 + no console errors 5  (B: 203/203 clean)
  const R = 15;
  // I 35: play 10 + controls-all-effective 15 + reset 5 + reentry 5
  let reset = 5;
  const scope = resetScope[rel];
  if (scope) {
    // find reset button label
    const m = html.match(/<button[^>]*>[^<]*(重置|复位)[^<]*<\/button>/);
    const label = m ? m[0].replace(/<[^>]+>/g, '') : '重置';
    const scoped = /播放|时间|回放/.test(label);
    if (scope === 'NONE') { reset = scoped ? 4 : 2; ded.push(`重置${scoped ? '(文案已限定"' + label + '")' : ''}未还原参数 -${5 - reset}`); }
    else { reset = scoped ? 4 : 3; ded.push(`重置部分还原 -${5 - reset}`); }
  }
  const I = 10 + 15 + reset + 5;
  // M 10: B 实测 203/203 无溢出、可操作
  const M = 10;
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
