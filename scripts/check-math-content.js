/* P0-MATH-001: fail on known malformed student-visible mathematics. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = ['bx1.md', 'bx2.md', 'bx3.md', 'xb1.md', 'xb2.md', 'xb3.md', 'experiments.md', 'gaokao-skills.md', 'models.md'];
const rules = [
  [/\mathrm\{V\}\d/g, '\\mathrm{V} 后直接跟数字'],
  [/(?:ν|\\nu)\s+0/g, '截止频率下标缺失'],
  [/\b(?:Ek|fmax|fsmax)\b/g, '物理量上下标未规范书写'],
  [/\\begin\{([^}]+)\}(?![\s\S]*\\end\{\1\})/g, '数学环境疑似未闭合']
];

const errors = [];
for (const rel of files) {
  const text = fs.readFileSync(path.join(root, rel), 'utf8');
  text.split('\n').forEach((lineText, index) => {
    const dollars = (lineText.replace(/\\\$/g, '').match(/\$/g) || []).length;
    if (dollars % 2 !== 0) errors.push(`${rel}:${index + 1} 行内数学定界符数量为奇数`);
  });
  for (const [pattern, message] of rules) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const line = text.slice(0, match.index).split('\n').length;
      errors.push(`${rel}:${line} ${message}: ${JSON.stringify(match[0])}`);
      if (!pattern.global) break;
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Math content gate passed for ${files.length} student content files.`);
