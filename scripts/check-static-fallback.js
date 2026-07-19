/* P0-RUNTIME-001: verify source-level fail-closed behavior without relying on JavaScript execution. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = ['bx1.md', 'bx2.md', 'bx3.md', 'xb1.md', 'xb2.md', 'xb3.md', 'experiments.md', 'gaokao-skills.md', 'models.md'];
const errors = [];
const legacy = /^(?:\*\*(?:例题|训练题)|#{3,6}\s+(?!例题与训练（来源审核中）).*?(?:例题|训练题)|<h[5-6]\b[^>]*>.*(?:例题|训练题))/m;
for (const rel of files) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  if (legacy.test(text)) errors.push(`${rel} 静态源仍含旧例题/训练题`);
}
for (const rel of ['papers.md', 'errors.md']) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  if (!/<noscript>[\s\S]+<\/noscript>/i.test(text)) errors.push(`${rel} 缺少无脚本回退`);
  if (!/内容审校|来源|不可用|测试版/.test(text)) errors.push(`${rel} 缺少静态状态说明`);
}
const index = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (!/hideUnverifiedExercises\(\)/.test(index)) errors.push('加载题库前未执行安全隐藏');
if (!/fail_closed/.test(index) && !/题库(?:数据)?暂不可用/.test(index)) errors.push('题库失败路径缺少不可用提示');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log('Static fallback gate passed for disabled-script and missing-data source paths.');
