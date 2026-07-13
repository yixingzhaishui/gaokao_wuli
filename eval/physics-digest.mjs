#!/usr/bin/env node
// GKWL-EVAL — Pipeline P helper: extract the "physics kernel" of each anim page
// (constants, state models, integration steps, displayed formulas/readouts) for manual review.
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const mod = process.argv[2];
const dir = join(ROOT, 'anim', mod);
let out = '';
for (const f of readdirSync(dir).filter(f => f.endsWith('.html')).sort()) {
  const html = readFileSync(join(dir, f), 'utf8');
  const lines = html.split('\n');
  const keep = [];
  lines.forEach((ln, i) => {
    const t = ln.trim();
    if (!t) return;
    // physics-relevant lines
    if (/(?:const|let|var)\s+(g|G|k|dt|mu|m1|m2|q|B|E|R|L|C|f|T|h|c)\b\s*=/.test(t) ||
        /state\s*=\s*\{/.test(t) ||
        /[a-zA-Z]\w*\s*(\+|-)?=\s*[^=].*(\*|\/|Math\.)/.test(t) && /(v|a|x|y|t|E|p|F|w|omega|theta|phi|I|U|q|B|flux|Ek|Ep)\b/i.test(t) ||
        /Math\.(sin|cos|sqrt|atan2|pow|hypot|exp|log)/.test(t) ||
        /0\.5\s*\*|\*\s*0\.5|9\.8|\b10\b\s*\*.*t|6\.67|1\.6e-19|3e8|9\.11e/.test(t)) {
      keep.push(`${i + 1}: ${t.slice(0, 160)}`);
    }
    // displayed formulas / readouts
    if (/(公式|readout|innerHTML|textContent).*(=|＝)/.test(t) && /[=＝].*[a-zA-Z0-9²³½ΔθωπΦ]/.test(t) && t.length < 220) {
      keep.push(`${i + 1}D: ${t.slice(0, 200)}`);
    }
  });
  out += `\n===== anim/${mod}/${f} (${lines.length} lines, kept ${keep.length}) =====\n` + keep.slice(0, 90).join('\n') + '\n';
}
mkdirSync(join(ROOT, 'eval/digests'), { recursive: true });
writeFileSync(join(ROOT, `eval/digests/${mod}.txt`), out);
console.log(mod, out.length, 'chars');
