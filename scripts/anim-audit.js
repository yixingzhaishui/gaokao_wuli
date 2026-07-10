#!/usr/bin/env node
// 动画静态预筛选 V3：只检查 anim/**/*.html 的静态代理特征。
// 本分数不能证明动画能运行、控件有效或物理规律正确；最终结论以
// Playwright 行为证据和人工物理复核为准（见 ../内容审核评分系统V3.md）。
// 用法: node scripts/anim-audit.js [章节前缀，如 bx3]
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..', 'anim');
const filter = process.argv[2] || '';

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (name.endsWith('.html')) out.push(p);
  }
  return out;
}

function scriptOf(html) {
  const m = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(x => x[1]).join('\n;\n');
  return m;
}
function jsOk(src) { try { new Function(src); return true; } catch (e) { return false; } }
function count(re, s) { const m = s.match(re); return m ? m.length : 0; }
function has(re, s) { return re.test(s); }
function capScore(current, cap, notes, reason) {
  if (current > cap) notes.push(`上限${cap}:${reason}`);
  return Math.min(current, cap);
}

const files = walk(root, []).filter(f => f.includes(path.sep + filter) || filter === '' );
const rows = [];
for (const f of files) {
  const rel = path.relative(path.resolve(__dirname, '..'), f);
  const html = fs.readFileSync(f, 'utf8');
  const lines = html.split('\n').length;
  const src = scriptOf(html);
  const srcLen = src.replace(/\s+/g, ' ').trim().length; // 压缩空白后的脚本字符数（不受 minify 影响）
  const parses = jsOk(src);
  const hasCanvas = /<canvas/.test(html) && /getContext/.test(src);
  // V2 metrics: “有部件”不等于“看得懂”，所以同时检查场景、仪器、多视角和过程痕迹。
  const drag = count(/pointerdown|pointermove|mousedown|touchstart/g, src);
  const raf = count(/requestAnimationFrame/g, src);
  const play = count(/play-btn|playBtn|['"]播放['"]|▶|release|释放/g, html);
  const sliders = count(/type=["']range["']/g, html);
  const readouts = count(/textContent|innerHTML\s*=/g, src);
  // 只在字符串字面量里找公式符号，避免把 JS 赋值号 = 误判为公式
  const strLits = (src.match(/'[^']*'|"[^"]*"|`[^`]*`/g) || []).join(' ');
  const inspectable = html + ' ' + strLits;
  const formula = /[≈√∝²³ΔλμΩθΦφ]|arcsin|sin[ ]?θ|=\s*[a-zA-Zρμ√(]|公式|定律|U=|E=|F=|Q=|I=|p=|v=|a=|ε=|e=|Φ=|N=/.test(strLits) || /公式/.test(html);
  const scene = has(/实验|装置|线圈|磁体|磁铁|导轨|导体棒|电表|电压表|电流表|灵敏电流计|灯泡|电源|变压器|传感器|屏|轨道|探针|磁场|电场|电路|apparatus|lab|coil|magnet|meter|bulb|rail|rod|sensor/i, inspectable);
  const direct = drag >= 2 && has(/drag|拖动|handle|grab|cursor|hit|knob|thumb|probe|magnet|coil|rod|slider/i, src + inspectable);
  const causality = raf > 0 && has(/time|dt|speed|velocity|omega|phase|flux|dPhi|emf|current|force|accel|history|trail|trace|t\s*[+\-*/]?=|v\s*[+\-*/]?=/i, src);
  const spatialView = has(/3D|三维|透视|俯视|侧视|正视|剖面|截面|投影|空间|坐标|x轴|y轴|z轴|isometric|perspective|projection|三视图|多视角/i, inspectable);
  const pairedPanel = has(/实物|装置|实验台|场景/i, inspectable) && has(/图像|图线|表盘|电表|数据|记录|轨迹|俯视|侧视|剖面|3D|三维/i, inspectable);
  const multiView = spatialView && pairedPanel;
  const instrument = readouts >= 3 && has(/电表|电压表|电流表|灵敏电流计|表盘|灯泡|亮度|刻度|尺|读数|图像|图线|坐标|斜率|面积|轨迹|频闪|数据|记录|meter|gauge|scope|chart|graph|plot|bulb|brightness/i, inspectable);
  const state = has(/观察任务|怎么玩|静止|滑动|超重|失重|临界|全反射|共振|守恒|加强|减弱|明显|不明显|状态|反馈|判定|status/i, html);
  const realism = count(/createRadialGradient|createLinearGradient|shadowBlur|arrow|field|line|gradient|label|fillText|strokeText/g, src);
  const isElectromagCore = rel.includes(`${path.sep}xb2${path.sep}`);

  let score = 0, notes = [];
  if (!parses) { rows.push({ rel, score: 0, verdict: 'BROKEN(JS语法错)', lines }); continue; }
  if (!hasCanvas) { rows.push({ rel, score: 0, verdict: 'BROKEN(无canvas绘制)', lines }); continue; }
  if (srcLen < 600) { rows.push({ rel, score: 15, verdict: 'STUB(脚本过短)', lines }); continue; }

  // ① 实验场景与对象 16
  score += (scene ? 10 : 0) + Math.min(6, Math.round(srcLen / 900));
  if (!scene) notes.push('缺实验场景/对象');
  // ② 画面内直接操作 14
  score += direct ? 14 : (drag >= 2 ? 10 : (sliders >= 1 ? 5 : 0));
  if (!direct) notes.push(sliders ? '主要靠滑块' : '缺画面内拖动');
  // ③ 动态因果过程 14
  score += (raf > 0 ? 6 : 0) + (play > 0 ? 4 : 0) + (causality ? 4 : 0);
  if (raf === 0) notes.push('无rAF(不随时间动)');
  if (play === 0) notes.push('无播放/重置');
  if (!causality) notes.push('因果过程弱');
  // ④ 多视角/空间表达 14
  score += multiView ? 14 : 0;
  if (!multiView) notes.push('缺多视角/空间表达');
  // ⑤ 仪器读数与过程痕迹 14
  score += instrument ? 14 : (readouts >= 3 ? 7 : (readouts >= 1 ? 4 : 0));
  if (!instrument) notes.push('缺仪器/轨迹/数据记录');
  // ⑥ 公式绑定 12
  score += formula ? 12 : 0;
  if (!formula) notes.push('无公式绑定');
  // ⑦ 观察任务与状态反馈 8
  score += state ? 8 : 0;
  if (!state) notes.push('缺观察任务/状态反馈');
  // ⑧ 真实感与可读性 8
  score += Math.min(8, realism >= 5 ? 8 : (realism >= 2 ? 5 : (lines > 150 ? 3 : 1)));

  // Hard caps: prevent abstract slider demos from getting high scores.
  if (!direct) score = capScore(score, 80, notes, '无画面内直接操作');
  if (!instrument) score = capScore(score, 84, notes, '无仪器/轨迹/数据记录');
  if (!multiView) score = capScore(score, 86, notes, '无多视角/空间表达');
  if (isElectromagCore && !spatialView) score = capScore(score, 82, notes, 'XB2电磁需空间方向/3D/多视角');
  if (isElectromagCore && spatialView && !multiView) score = capScore(score, 90, notes, 'XB2空间表达未与装置/图像成组');
  if (!state) score = capScore(score, 88, notes, '无观察任务/反馈');
  if (!formula) score = capScore(score, 88, notes, '无公式绑定');
  if (srcLen < 1500) score = capScore(score, 70, notes, '脚本过短');

  let verdict;
  if (score >= 96) verdict = '静态高(待行为复核)';
  else if (score >= 85) verdict = '静态通过(待行为复核)';
  else if (score >= 70) verdict = '静态待修';
  else if (score >= 40) verdict = '静态草稿/抽象';
  else verdict = '静态草稿/玩具';
  const dims = {
    d1: (scene ? 10 : 0) + Math.min(6, Math.round(srcLen / 900)),
    d2: direct ? 14 : (drag >= 2 ? 10 : (sliders >= 1 ? 5 : 0)),
    d3: (raf > 0 ? 6 : 0) + (play > 0 ? 4 : 0) + (causality ? 4 : 0),
    d4: multiView ? 14 : 0,
    d5: instrument ? 14 : (readouts >= 3 ? 7 : (readouts >= 1 ? 4 : 0)),
    d6: formula ? 12 : 0,
    d7: state ? 8 : 0,
    d8: Math.min(8, realism >= 5 ? 8 : (realism >= 2 ? 5 : (lines > 150 ? 3 : 1))),
  };
  rows.push({ rel, score, verdict, lines, notes: notes.join('/'), dims });
}

rows.sort((a, b) => a.score - b.score);
const bad = rows.filter(r => r.score < 85).length;
console.log('警告：以下仅为静态预筛选分，不代表动画可以运行，也不代表控件有效或物理正确。');
console.log(`=== 动画静态预筛选（共 ${rows.length}，其中 <85 需处理 ${bad}）${filter ? ' 过滤:' + filter : ''} ===`);
console.log('静态分  静态判级        行数  文件  | 静态扣分点');
const verbose = process.argv.includes('-v');
for (const r of rows) {
  if (verbose && r.dims) {
    const d = r.dims;
    console.log(`${String(r.score).padStart(3)}  场景${d.d1}/16 操作${d.d2}/14 因果${d.d3}/14 多视${d.d4}/14 仪器${d.d5}/14 公式${d.d6}/12 反馈${d.d7}/8 可读${d.d8}/8  ${r.rel}${r.notes ? ' | ' + r.notes : ''}`);
  } else {
    console.log(`${String(r.score).padStart(3)}  ${(r.verdict).padEnd(16)} ${String(r.lines).padStart(4)}  ${r.rel}${r.notes ? '  | ' + r.notes : ''}`);
  }
}
console.log('结论边界：静态预筛选通过，仍必须通过真实播放、暂停、重置、参数影响、重复进入和 390px 手机行为测试。');
