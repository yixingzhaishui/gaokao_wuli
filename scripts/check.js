/* scripts/check.js — 自动化检查脚本
 * 规格：V1.2.2 §4.5
 * 运行: node scripts/check.js
 * 检查：
 *   1. _sidebar.md 中所有链接目标是否存在
 *   2. 每个知识点编号是否出现在 id-map.json
 *   3. 每个 iframe 动画文件是否存在
 *   4. progress.json 是否覆盖全部知识点/实验/模型
 *   5. problems.json 中 knowledge_ids 是否有效
 *   6. Markdown 文件未闭合代码块
 *   7. Markdown 页面不允许把 SVG/HTML 源码露成正文
 *   8. 每个 A 档知识点是否包含 14 个规定小节
 *   9. 动画 .html 中 JavaScript 语法检查（node --check 提取）
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const data = dir => JSON.parse(fs.readFileSync(path.join(root, 'data', dir), 'utf8'));

let errors = [], warns = [];

function exists(p) { try { fs.accessSync(p); return true; } catch { return false; } }
function lineOf(txt, index) {
  return txt.slice(0, index).split('\n').length;
}

// 1. sidebar 链接
const sidebar = fs.readFileSync(path.join(root, '_sidebar.md'), 'utf8');
const linkRe = /\]\(([^)#?]+)(?:[?#]([^)]+))?\)/g;
let m;
const mdFiles = new Set(fs.readdirSync(root).filter(f => f.endsWith('.md')));
while ((m = linkRe.exec(sidebar)) !== null) {
  let file = m[1];
  let anchor = m[2];
  // Docsify ?id=xxx 语法
  if (anchor && anchor.indexOf('id=') === 0) anchor = anchor.slice(3);
  if (file === '/') continue;
  // Docsify 链接形如 bx1?id=xxx，无 .md 扩展
  if (!file.endsWith('.md')) file = file + '.md';
  const fp = path.join(root, file);
  if (!exists(fp)) errors.push('sidebar 链接文件不存在: ' + file);
  else if (anchor) {
    const content = fs.readFileSync(fp, 'utf8');
    const idRe = new RegExp('id="' + anchor.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"');
    if (!idRe.test(content)) warns.push('sidebar 锚点在 ' + file + ' 中未找到: ' + anchor);
  }
}

// 2 & 4. id-map 与 progress 覆盖
const idMap = data('id-map.json');
const progress = data('progress.json');
const allIds = Object.keys(idMap);
allIds.forEach(id => {
  if (!(id in progress)) errors.push('progress.json 缺少编号: ' + id);
});
Object.keys(progress).forEach(id => {
  if (!(id in idMap)) errors.push('progress.json 多余编号（id-map 无）: ' + id);
});

// 2.1 页面状态徽标与 progress.json 一致性
allIds.forEach(id => {
  const meta = idMap[id];
  const fp = path.join(root, (meta.file || '') + '.md');
  if (!exists(fp)) return;
  const content = fs.readFileSync(fp, 'utf8');
  const slug = (meta.slug || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const headRe = new RegExp('<h[34][^>]*id="' + slug + '"[\\s\\S]*?<span class="status ([^"]+)">([^<]+)<\\/span>[\\s\\S]*?<\\/h[34]>');
  const hm = content.match(headRe);
  if (!hm) return;
  const pageStatus = hm[2].trim();
  const dataStatus = progress[id] && progress[id].status;
  if (dataStatus && pageStatus !== dataStatus) {
    errors.push('页面状态与 progress.json 不一致: ' + id + ' 页面=' + pageStatus + ' progress=' + dataStatus);
  }
});

// 3. iframe 动画文件存在
const animDir = path.join(root, 'anim');
function walkMd(dir) {
  let out = [];
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (f.endsWith('.md')) out.push(fp);
  });
  return out;
}
walkMd(root).forEach(md => {
  const txt = fs.readFileSync(md, 'utf8');
  const ifRe = /<iframe[^>]+src="([^"]+)"/g;
  let im;
  while ((im = ifRe.exec(txt)) !== null) {
    const src = im[1];
    const ap = path.resolve(path.dirname(md), src);
    if (!exists(ap)) errors.push('iframe 动画不存在: ' + src + ' (在 ' + path.basename(md) + ')');
  }
});

// 5. problems knowledge_ids 有效
const problems = data('problems.json');
const probList = problems.problems || problems;
const validIds = new Set(allIds);
const modelIds = new Set(Object.keys(idMap).filter(id => idMap[id].level === 'model'));
(probList).forEach(p => {
  (p.knowledge_ids || []).forEach(id => {
    if (!validIds.has(id)) errors.push('problems.json knowledge_ids 无效: ' + id + ' (题 ' + p.id + ')');
  });
  (p.model_ids || []).forEach(id => {
    if (id && !modelIds.has(id)) errors.push('problems.json model_ids 无效: ' + id + ' (题 ' + p.id + ')');
  });
});

// 6. Markdown 未闭合代码块
walkMd(root).forEach(md => {
  const txt = fs.readFileSync(md, 'utf8');
  const fences = (txt.match(/```/g) || []).length;
  if (fences % 2 !== 0) errors.push('Markdown 代码块未闭合: ' + path.basename(md));
});

// 7. Markdown 可视化源码外露检查
walkMd(root).forEach(md => {
  const txt = fs.readFileSync(md, 'utf8');
  const file = path.basename(md);
  [
    { re: /`<svg\b/g, msg: 'SVG 被反引号包住，会在网页露成源码' },
    { re: /<\/svg>`/g, msg: 'SVG 结束标签被反引号包住，会在网页露成源码' },
    { re: /&lt;svg\b/g, msg: 'SVG 被转义，会在网页露成源码' },
    { re: /```(?:svg|html)\b/g, msg: 'HTML/SVG 被放进代码块，会在网页露成源码' },
    { re: /^\* [0-9]+\. /gm, msg: '小节标题写成了普通列表' }
  ].forEach(rule => {
    let mm;
    while ((mm = rule.re.exec(txt)) !== null) {
      errors.push(file + ':' + lineOf(txt, mm.index) + ' ' + rule.msg);
    }
  });
});

// 8. A 档知识点 14 节检查（仅对 bx1.md 中 done 的 A 档）
const progressById = progress;
const aSections = ['官方归属','先看现象','示意图','示意动画','交互动画','观察任务','规律由来','概念理解','公式绑定','适用条件','应用题型','解题思路','易错点','例题'];
function checkASections(file) {
  const fp = path.join(root, file);
  if (!exists(fp)) return;
  const txt = fs.readFileSync(fp, 'utf8');
  // 按 h3 id 切分
  const parts = txt.split(/<h3 id="[^"]+">/);
  parts.forEach((part, i) => {
    if (i === 0) return;
    // 取该节到下一个 h3 的内容
    const head = part.split('</h3>')[0] || '';
    // 找编号
    const idMatch = part.match(/编号[：:]\s*([A-Z]\d-\d+)/);
    if (!idMatch) return;
    const id = idMatch[1];
    if (progressById[id] && progressById[id].status === 'done' && progressById[id].level === 'A') {
      const body = part;
      aSections.forEach(sec => {
        if (body.indexOf(sec) === -1) {
          warns.push('A档 ' + id + ' 缺少小节: ' + sec);
        }
      });
    }
  });
}
checkASections('bx1.md');

// 9. 动画 HTML JS 语法检查
function checkAnimHtml(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    const fp = path.join(dir, f);
    if (f.endsWith('.html')) {
      const txt = fs.readFileSync(fp, 'utf8');
      // 提取 <script> 内联块（不含 src）
      const re = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
      let sm;
      while ((sm = re.exec(txt)) !== null) {
        const code = sm[1];
        if (!code.trim()) continue;
        const tmp = path.join(require('os').tmpdir(), 'anim-check-' + Date.now() + '.js');
        fs.writeFileSync(tmp, code);
        try { execSync('node --check ' + JSON.stringify(tmp), { stdio: 'pipe' }); }
        catch (e) { errors.push('动画 JS 语法错误: ' + f + ' — ' + (e.stderr || e.message).toString().split('\n')[0]); }
        finally { try { fs.unlinkSync(tmp); } catch {} }
      }
    } else if (fs.statSync(fp).isDirectory()) {
      checkAnimHtml(fp);
    }
  });
}
checkAnimHtml(animDir);

// 报告
console.log('=== check.js 自动化检查 ===');
console.log('知识点/实验/模型总数:', allIds.length);
console.log('题库题数:', probList.length);
if (warns.length) {
  console.log('\n⚠ 警告 (' + warns.length + '):');
  warns.forEach(w => console.log('  - ' + w));
}
if (errors.length) {
  console.log('\n✗ 错误 (' + errors.length + '):');
  errors.forEach(e => console.log('  - ' + e));
  process.exit(1);
} else {
  console.log('\n✓ 全部通过');
  process.exit(0);
}
