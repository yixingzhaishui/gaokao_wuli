#!/usr/bin/env node
// ① 重置语义统一：对 B 管线判定为 NONE/PARTIAL 的 62 页注入统一的全量重置逻辑。
// 规则：重置按钮文案未限定范围（不含 播放/时间/回放）→ 点击后在原有处理器执行完毕后整页重载，保证回到初始状态；
//       文案已限定（如"重置播放"）→ 保留原行为，在其后追加一个"全部重置"按钮（整页重载）。
// 页面均为 iframe 内自含页，location.reload() 只重载子页，语义即"恢复初始状态"。
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const S = JSON.parse(readFileSync(join(ROOT, 'eval/results/static.json'), 'utf8'));
const URLS = Object.keys(S.pages);
const RESET_NONE = [0,20,25,31,32,34,35,36,38,41,42,43,44,45,47,49,51,55,58,61,72,87,90,104,108,109,110,112,120,130,133,136,139,147,149,152,154,156,157,173,191,192,194,195,196,197,198,199,200,202];
const RESET_PARTIAL = [23,28,52,56,113,121,142,144,158,163,193,201];
const TARGETS = [...new Set([...RESET_NONE, ...RESET_PARTIAL])].map(i => URLS[i]).sort();

const SNIPPET = `
<script>/* GKWL: unified full reset (2026-07-12 review remediation) */
(function(){
  var btns=[].slice.call(document.querySelectorAll('button'));
  var resets=btns.filter(function(b){return /重置|复位/.test(b.textContent)});
  if(!resets.length)return;
  var scoped=/播放|时间|回放/;
  var primary=resets[0];
  if(scoped.test(primary.textContent)){
    var nb=document.createElement('button');
    nb.textContent='全部重置';
    nb.className=primary.className;
    nb.setAttribute('data-gkwl-full-reset','1');
    nb.addEventListener('click',function(){location.reload()});
    primary.parentNode.insertBefore(nb,primary.nextSibling);
  }else{
    resets.forEach(function(b){b.addEventListener('click',function(){setTimeout(function(){location.reload()},60)})});
  }
})();
<\/script>`;

let patched = 0, skipped = [];
for (const rel of TARGETS) {
  const fp = join(ROOT, rel);
  let html = readFileSync(fp, 'utf8');
  if (html.includes('data-gkwl-full-reset') || html.includes('unified full reset')) { skipped.push(rel + ' (already)'); continue; }
  if (!/<\/body>/i.test(html)) { skipped.push(rel + ' (no </body>)'); continue; }
  html = html.replace(/<\/body>/i, SNIPPET + '\n</body>');
  writeFileSync(fp, html);
  patched++;
}
console.log('patched:', patched, 'of', TARGETS.length);
if (skipped.length) console.log('skipped:', skipped.join('; '));
console.log(TARGETS.map(t => t.replace('anim/', '')).join('\n'));
