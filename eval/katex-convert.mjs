#!/usr/bin/env node
// ④ KaTeX 迁移 Phase 1：把章节中反引号公式转换为 LaTeX 候选，输出 eval/results/katex-candidates.json
// 不直接改文件；Phase 2 在真实 KaTeX 里逐条渲染验证；Phase 3 只回写验证通过的。
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHAPTERS = ['bx1','bx2','bx3','xb1','xb2','xb3','experiments','models','gaokao-skills'];

const GREEK = { 'α':'\\alpha ','β':'\\beta ','γ':'\\gamma ','δ':'\\delta ','Δ':'\\Delta ','ε':'\\varepsilon ','θ':'\\theta ','λ':'\\lambda ','μ':'\\mu ','ν':'\\nu ','π':'\\pi ','ρ':'\\rho ','σ':'\\sigma ','τ':'\\tau ','φ':'\\varphi ','Φ':'\\Phi ','ω':'\\omega ','Ω':'\\Omega ','η':'\\eta ','κ':'\\kappa ','ξ':'\\xi ','ψ':'\\psi ' };
const SUP = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-','⁺':'+' };
const UNITS = 'km/h|m/s|rad/s|kg·m/s|N·m|N/C|V/m|J/K|W/m|kW·h|GHz|MHz|kHz|Hz|MeV|keV|eV|kPa|MPa|Pa|mol|rad|kg|km|cm|mm|nm|μm|pm|ms|μs|ns|mA|μA|kV|mV|μC|nC|pC|mT|μT|GW|MW|kW|kJ|MJ|mH|μF|pF|nF|A|C|F|H|J|K|L|N|m|s|T|V|W|Ω|u|g';

function isFormula(s) {
  if (/^https?:|^[a-z-]+\.(html|md|js|json)$/.test(s)) return false;      // 路径/文件
  if (/^[一-龥，。、；]+$/.test(s)) return false;                  // 纯中文短语
  if (/^[A-Za-z][A-Za-z ]*$/.test(s) && !/^[A-Za-z]$/.test(s) && !/^[A-Za-z][0-9]/.test(s)) return false; // 纯英文词
  return /[=＝≈∝≤≥≠<>±×÷·√Δ²³½¼¾⁻⁰¹⁴⁵⁶⁷⁸⁹^_∞°]|[A-Za-z][0-9]|[A-Za-z][一-龥]|\d\s*(?:m\/s|km\/h|rad\/s)|[αβγδεθλμνπρστφωΩΦη]/.test(s);
}

const SUBN = { '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9','₋':'-','₊':'+' };

function toLatex(src) {
  let t = src;
  const stash = [];
  const keep = (s) => { stash.push(s); return '' + (stash.length - 1) + ''; };
  // 1. 分数与根号
  t = t.replace(/½/g, '\\tfrac{1}{2}').replace(/¼/g, '\\tfrac{1}{4}').replace(/¾/g, '\\tfrac{3}{4}');
  t = t.replace(/√\(([^()]+)\)/g, '\\sqrt{$1}');
  t = t.replace(/√([A-Za-z0-9一-龥ΔθωμπλρσφΦ]+)/g, '\\sqrt{$1}');
  // 2. unicode 上下标
  t = t.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹⁻⁺]+)/g, (m) => '^{' + [...m].map(c => SUP[c]).join('') + '}');
  t = t.replace(/([₀₁₂₃₄₅₆₇₈₉₋₊]+)/g, (m) => '_{' + [...m].map(c => SUBN[c]).join('') + '}');
  // 3. 数值+单位 → \mathrm{}（先于希腊替换，保护 μF/μC/Ω 等；结果入栈保护）
  const unitRe = new RegExp('(\\d(?:\\.\\d+)?)\\s*((?:' + UNITS + ')(?:\\^\\{[-0-9]+\\})?(?:/(?:' + UNITS + ')(?:\\^\\{[-0-9]+\\})?)?)(?![A-Za-z}])', 'g');
  t = t.replace(unitRe, (m, num, unit) => num + keep('\\ \\mathrm{' + unit.replace(/μ/g, '\\mu ').replace(/Ω/g, '\\Omega ') + '}'));
  // 4. 符号
  t = t.replace(/×/g, '\\times ').replace(/÷/g, '\\div ').replace(/·/g, '\\cdot ')
       .replace(/≈/g, '\\approx ').replace(/∝/g, '\\propto ').replace(/≤/g, '\\le ').replace(/≥/g, '\\ge ')
       .replace(/≠/g, '\\ne ').replace(/±/g, '\\pm ').replace(/∞/g, '\\infty ').replace(/→/g, '\\to ')
       .replace(/∈/g, '\\in ').replace(/°/g, '^{\\circ}').replace(/∫/g, '\\int ').replace(/∑/g, '\\sum ');
  // 5. 独立中文（前面不是拉丁字母）→ \text{}，入栈保护
  t = t.replace(/(?<![A-Za-z])([一-龥][一-龥，、：？]*)/g, (m) => keep('\\text{' + m + '}'));
  // 6. 中文下标（v物、t停、x物/地）
  t = t.replace(/([A-Za-z])([一-龥]+(?:\/[一-龥]+)?)/g, (m, a, b) => a + '_{' + keep('\\text{' + b + '}') + '}');
  // 7. 三角/对数函数名
  t = t.replace(/\b(sin|cos|tan|cot|arcsin|arccos|arctan|ln|lg|log)\b/g, '\\$1 ')
       .replace(/\\lg /g, '\\lg ').replace(/\\arcsin /g, '\\arcsin ');
  // 8. 常用物理下标：Ep/Ek → E_{p} 等
  t = t.replace(/\bE(p|k|P|K)\b(?!_)/g, (m, s) => 'E_{' + s.toLowerCase() + '}');
  // 9. 数字下标：v0 → v_{0}（此时数值+单位已入栈，不会误伤）
  t = t.replace(/([A-Za-z])(\d+)(?!\d*\})/g, '$1_{$2}');
  // 10. 希腊 → 命令
  t = t.replace(/[αβγδεθλμνπρστφωΩΦηκξψΔ]/g, c => GREEK[c] || c);
  // 11. 还原栈
  while (t.includes('')) t = t.replace(/(\d+)/g, (m, i) => stash[+i]);
  t = t.replace(/\|/g, '\\vert ');
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
}

const out = [];
for (const ch of CHAPTERS) {
  const md = readFileSync(join(ROOT, ch + '.md'), 'utf8');
  const lines = md.split('\n');
  let fence = false;
  lines.forEach((ln, li) => {
    if (/^```/.test(ln.trim())) { fence = !fence; return; }
    if (fence) return;
    for (const m of ln.matchAll(/`([^`\n]+)`/g)) {
      const inner = m[1];
      if (!isFormula(inner)) continue;
      out.push({ ch, line: li + 1, orig: m[0], inner, latex: toLatex(inner) });
    }
  });
}
writeFileSync(join(ROOT, 'eval/results/katex-candidates.json'), JSON.stringify(out, null, 1));
const byCh = {}; out.forEach(o => byCh[o.ch] = (byCh[o.ch] || 0) + 1);
console.log('candidates:', out.length, byCh);
console.log('samples:');
out.filter((_, i) => i % 250 === 0).forEach(o => console.log(' ', o.inner, ' ==> ', o.latex));

// ---------- Phase 3: --apply 回写（只在渲染验证全通过后使用） ----------
if (process.argv.includes('--apply')) {
  let replaced = 0;
  for (const ch of CHAPTERS) {
    const fp = join(ROOT, ch + '.md');
    const md = readFileSync(fp, 'utf8');
    const lines = md.split('\n');
    let fence = false;
    const outLines = lines.map((ln) => {
      if (/^```/.test(ln.trim())) { fence = !fence; return ln; }
      if (fence) return ln;
      return ln.replace(/`([^`\n]+)`/g, (m, inner) => {
        if (!isFormula(inner)) return m;
        replaced++;
        return '$' + toLatex(inner) + '$';
      });
    });
    writeFileSync(fp, outLines.join('\n'));
  }
  console.log('APPLIED: replaced', replaced, 'formulas across', CHAPTERS.length, 'chapters');
}
