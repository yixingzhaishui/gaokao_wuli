#!/usr/bin/env node
// GKWL-EVAL — tight physics-kernel extractor: model equations + taught formula strings only.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const mod = process.argv[2];
const DRAW = /ctx\.|\barc\(|lineTo|moveTo|fillRect|roundRect|strokeRect|createLinear|font|textAlign|clientX|getBounding|classList|addEventListener|querySelector|setLineDash|dataset|style\.|toggle|clamp\(\s*\(?p\.|layout|Path2D|\.width\/r\.|drawImage|globalAlpha|save\(\)|restore\(\)|beginPath/;
const PHYS = /(?:^|[^a-zA-Z])(v0|v1|v2|vb|vy|vx|a|g|F|T|E|U|I|R|r|q|Q|B|m|m1|m2|k|mu|p|V|W|Ek|Ep|omega|w|theta|th|phi|f|lambda|L|C|N|n|h|dt|t)\s*[+\-*/]?=\s*[^=]/;
const OPS = /Math\.(sin|cos|tan|sqrt|atan2|pow|hypot|exp|log|abs|PI)|[*/]|0\.5|\*\*/;
for (const f of readdirSync(join(ROOT, 'anim', mod)).filter(x => x.endsWith('.html')).sort()) {
  const html = readFileSync(join(ROOT, 'anim', mod, f), 'utf8');
  const script = html.split(/<script[^>]*>/).slice(1).join('\n');
  const out = [];
  script.split('\n').forEach((ln, i) => {
    const t = ln.trim();
    if (!t || t.length > 400) return;
    if (DRAW.test(t)) {
      // keep only taught formula strings inside draw code
      const m = t.match(/['"`]([^'"`]*(?:=|＝)[^'"`]*(?:m\/s|N|J|V|A|Ω|Hz|eV|MeV|Pa|²|√|π|Δ|·)[^'"`]*)['"`]/);
      if (m && m[1].length > 6) out.push('D| ' + m[1].slice(0, 150));
      return;
    }
    if ((PHYS.test(t) && OPS.test(t)) || /const\s+(k0?|g|G|dt|c|h)\s*=\s*[\d.]/.test(t)) out.push((i + 1) + '| ' + t.slice(0, 170));
  });
  const uniq = [...new Set(out)];
  console.log('##### ' + mod + '/' + f);
  uniq.slice(0, 45).forEach(l => console.log(l));
}
