#!/usr/bin/env node
// GKWL-EVAL v1.0 — Pipeline S: static analysis of anim pages + content chapters + data layer.
// Independent of scripts/*.js. No dependencies beyond Node core.
import { readFileSync, readdirSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = { generatedAt: new Date().toISOString(), pages: {}, chapters: {}, data: {}, issues: [] };
const issue = (sev, file, msg, detail) => out.issues.push({ sev, file, msg, ...(detail ? { detail } : {}) });

// ---------- anim pages ----------
const MODULES = ['bx1','bx2','bx3','xb1','xb2','xb3','exp','model','skill'];
for (const mod of MODULES) {
  const dir = join(ROOT, 'anim', mod);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).filter(f => f.endsWith('.html')).sort()) {
    const rel = `anim/${mod}/${f}`;
    const html = readFileSync(join(dir, f), 'utf8');
    const r = { module: mod, bytes: html.length };

    // structure
    r.hasViewportMeta = /<meta[^>]+viewport/i.test(html);
    r.canvasCount = (html.match(/<canvas/gi) || []).length;
    r.svgCount = (html.match(/<svg/gi) || []).length;
    // controls inventory (static DOM only; dynamically-created controls detected via JS heuristics)
    r.buttons = [...html.matchAll(/<button[^>]*id="([^"]+)"/g)].map(m => m[1]);
    r.buttonsNoId = (html.match(/<button(?![^>]*id=)/g) || []).length;
    r.ranges = [...html.matchAll(/<input[^>]*type="range"[^>]*id="([^"]+)"/g)].map(m => m[1]);
    r.rangesNoId = (html.match(/<input[^>]*type="range"(?![^>]*id=)/g) || []).length;
    r.selects = [...html.matchAll(/<select[^>]*id="([^"]+)"/g)].map(m => m[1]);
    r.checkboxes = (html.match(/type="checkbox"/g) || []).length;

    // JS behaviour heuristics
    r.hasRAF = /requestAnimationFrame/.test(html);
    r.hasPointerEvents = /pointerdown|touchstart|mousedown/.test(html);
    r.addsDynamicButtons = /createElement\(\s*['"]button['"]\s*\)/.test(html);
    r.hasResize = /resize/.test(html);
    r.listensInput = /addEventListener\(\s*['"](input|change)['"]/.test(html);
    // dead-control heuristic: declared ids never referenced in script
    const script = html.split(/<script[^>]*>/).slice(1).join('\n');
    const deadIds = [...r.buttons, ...r.ranges, ...r.selects].filter(id => !script.includes(id));
    if (deadIds.length) { r.deadIds = deadIds; issue('P1?', rel, '控件id未在脚本中引用（疑似无效控件）', deadIds.join(',')); }
    // play-only-text heuristic
    if (!r.hasRAF && !/setInterval|setTimeout/.test(script) && r.canvasCount) {
      r.noAnimLoop = true; issue('P2', rel, '未检出动画循环（rAF/定时器），播放可能无过程');
    }
    // external deps
    const ext = [...html.matchAll(/(?:src|href)="(https?:\/\/[^"]+)"/g)].map(m => m[1]);
    if (ext.length) { r.external = ext; }
    // physics smells: g value
    const gVals = [...html.matchAll(/\bg\s*[:=]\s*(\d+(?:\.\d+)?)/g)].map(m => +m[1]).filter(v => v >= 8 && v <= 11);
    if (gVals.some(v => v !== 9.8 && v !== 10 && v !== 9.81)) issue('P2', rel, '非常规 g 取值', gVals.join(','));
    // teaching loop
    r.hasTask = /观察任务|任务[:：]|试一试|观察[:：]/.test(html);
    r.hasFormulaPanel = /公式绑定|公式[:：]|=/.test(html) && /公式/.test(html);
    r.hasReadout = /readout|读数|id="status"/.test(html);
    r.hasResetBtn = /重置|resetBtn|id="reset"/i.test(html);
    if (!r.hasTask) issue('P2', rel, '缺观察任务文案');
    if (!r.hasResetBtn) issue('P2', rel, '未检出重置控件');
    if (!r.canvasCount && !r.svgCount) issue('P1?', rel, '页面无 canvas/svg 可视化');

    out.pages[rel] = r;
  }
}

// ---------- content chapters ----------
const CHAPTERS = ['bx1','bx2','bx3','xb1','xb2','xb3','experiments','models','errors','papers','graph','gaokao-skills','syllabus'];
const FIG_HINT = /如图|图中|下图|上图|左图|右图|由图可知|装置如图|电路如图|光路如图|受力如图/;
for (const ch of CHAPTERS) {
  const fp = join(ROOT, `${ch}.md`);
  if (!existsSync(fp)) { issue('P0', `${ch}.md`, '章节文件缺失'); continue; }
  const md = readFileSync(fp, 'utf8');
  const lines = md.split('\n');
  const c = { lines: lines.length, bytes: md.length };

  // iframe targets exist
  c.iframes = [...md.matchAll(/<iframe[^>]+src="([^"]+)"/g)].map(m => m[1]);
  c.iframeMissing = c.iframes.filter(s => !existsSync(join(ROOT, s.split('?')[0])));
  c.iframeMissing.forEach(s => issue('P1', `${ch}.md`, 'iframe 目标不存在', s));
  // images exist
  c.images = [...md.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g), ...md.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]).filter(s => !/^https?:/.test(s));
  c.imageMissing = c.images.filter(s => !existsSync(join(ROOT, decodeURI(s.split('?')[0]))));
  c.imageMissing.forEach(s => issue('P1', `${ch}.md`, '图片不存在', s));

  // formula lint (line-scoped, ignore code fences)
  let inFence = false; const lint = [];
  lines.forEach((ln, i) => {
    if (/^```/.test(ln.trim())) { inFence = !inFence; return; }
    if (inFence) return;
    const noInline = ln.replace(/\$\$[^$]*\$\$/g, '').replace(/\$[^$]*\$/g, '');
    if (/\\(frac|vec|sqrt|mathrm|times|Delta)\b/.test(noInline) && !/^\s*<!--/.test(ln)) lint.push({ line: i + 1, kind: 'naked-latex', text: ln.trim().slice(0, 90) });
    const bt = [...ln.matchAll(/`([^`]+)`/g)].filter(m => /\\(frac|vec|sqrt)|[=]\s*\d|\^2/.test(m[1]) && /[a-zA-Z]\s*=|\\/.test(m[1]));
    bt.forEach(m => lint.push({ line: i + 1, kind: 'backtick-formula', text: m[1].slice(0, 90) }));
  });
  c.formulaLint = lint;
  lint.forEach(l => issue('P3', `${ch}.md`, `公式规范(${l.kind}) L${l.line}`, l.text));

  // examples: figure-hint without nearby figure
  let figMiss = 0;
  lines.forEach((ln, i) => {
    if (FIG_HINT.test(ln) && /题|求|下列|选项|A\.|如图/.test(ln)) {
      const ctx = lines.slice(Math.max(0, i - 30), Math.min(lines.length, i + 30)).join('\n');
      if (!/(<svg|<img|!\[|diagram|figure|<iframe)/.test(ctx)) { figMiss++; issue('P1?', `${ch}.md`, `疑似缺图 L${i + 1}`, ln.trim().slice(0, 80)); }
    }
  });
  c.figureHintMissing = figMiss;
  // status labels
  c.statusCounts = {};
  for (const m of md.matchAll(/class="status (\w+)"/g)) c.statusCounts[m[1]] = (c.statusCounts[m[1]] || 0) + 1;
  out.chapters[`${ch}.md`] = c;
}

// ---------- data layer ----------
try {
  const idMap = JSON.parse(readFileSync(join(ROOT, 'data/id-map.json'), 'utf8'));
  const progress = JSON.parse(readFileSync(join(ROOT, 'data/progress.json'), 'utf8'));
  const problemsRaw = JSON.parse(readFileSync(join(ROOT, 'data/problems.json'), 'utf8'));
  const problems = problemsRaw.problems || problemsRaw;
  out.data.idMapCount = Array.isArray(idMap) ? idMap.length : Object.keys(idMap).length;
  out.data.problemCount = problems.length;
  const bad = problems.filter(p => !p.stem || !p.answer || !p.solution);
  bad.forEach(p => issue('P1', 'data/problems.json', '题目缺 stem/answer/solution', p.id));
  const noSrc = problems.filter(p => !p.source);
  if (noSrc.length) issue('P2', 'data/problems.json', `无来源题目 ${noSrc.length} 条`, noSrc.slice(0, 5).map(p => p.id).join(','));
  const figNeed = problems.filter(p => FIG_HINT.test(p.stem || '') && !(p.diagram || p.image || p.img || p.figure || p.svg || p.shared_diagram || p.group_diagram));
  figNeed.forEach(p => issue('P1?', 'data/problems.json', '题干称如图但无图字段', p.id));
  // graph.json sanity
  const graph = JSON.parse(readFileSync(join(ROOT, 'data/graph.json'), 'utf8'));
  const nodes = graph.nodes || [], edges = graph.edges || graph.links || [];
  const ids = new Set(nodes.map(n => n.id));
  const dangling = edges.filter(e => !ids.has(e.source ?? e.from) || !ids.has(e.target ?? e.to));
  out.data.graph = { nodes: nodes.length, edges: edges.length, dangling: dangling.length };
  if (dangling.length) issue('P1', 'data/graph.json', `悬空边 ${dangling.length} 条`, JSON.stringify(dangling.slice(0, 3)));
} catch (e) { issue('P0', 'data/*', '数据层解析失败', String(e)); }

// ---------- write ----------
mkdirSync(join(ROOT, 'eval/results'), { recursive: true });
writeFileSync(join(ROOT, 'eval/results/static.json'), JSON.stringify(out, null, 1));
const bySev = {};
out.issues.forEach(i => bySev[i.sev] = (bySev[i.sev] || 0) + 1);
console.log(`pages=${Object.keys(out.pages).length} chapters=${Object.keys(out.chapters).length} issues=${out.issues.length}`, bySev);
