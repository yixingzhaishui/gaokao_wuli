/* P0-RUNTIME-001: physically remove legacy free-text exercises from student Markdown. */
'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = ['bx1.md', 'bx2.md', 'bx3.md', 'xb1.md', 'xb2.md', 'xb3.md', 'experiments.md', 'gaokao-skills.md', 'models.md'];
const records = [];

function headingLevel(line) {
  const md = line.match(/^(#{1,6})\s+/);
  if (md) return md[1].length;
  const html = line.match(/^<h([1-6])\b/i);
  return html ? Number(html[1]) : null;
}

function isStart(line) {
  if (/^#{3,6}\s+.*(?:例题|训练题)/.test(line) && !/来源审核中/.test(line)) return true;
  if (/^<h[5-6]\b[^>]*>.*(?:例题|训练题)/i.test(line)) return true;
  if (/^\*\*(?:例题|训练题)/.test(line)) return true;
  return false;
}

function isSectionStart(line) {
  const level = headingLevel(line);
  return level !== null && level <= 4 && /(?:例题与训练|训练题)/.test(line);
}

function boundary(line, startLine, section) {
  if (/^<style\b/i.test(line)) return true;
  const level = headingLevel(line);
  if (section) return level !== null && level <= (headingLevel(startLine) || 4);
  if (/^---\s*$/.test(line)) return true;
  if (/^<h[2-5]\b/i.test(line)) return true;
  return level !== null && level <= (headingLevel(startLine) || 6);
}

for (const file of files) {
  const full = path.join(root, file);
  const lines = fs.readFileSync(full, 'utf8').split('\n');
  const out = [];
  let currentKnowledgeId = null;
  for (let i = 0; i < lines.length;) {
    const idMatch = lines[i].match(/^<h4\b[^>]*>\s*([A-Z][0-9]?-\d+)/);
    if (idMatch) currentKnowledgeId = idMatch[1];
    if (!isStart(lines[i])) {
      out.push(lines[i]);
      i++;
      continue;
    }
    const start = i;
    const section = isSectionStart(lines[i]);
    i++;
    while (i < lines.length && !boundary(lines[i], lines[start], section)) i++;
    const content = lines.slice(start, i).join('\n').trimEnd();
    records.push({
      file,
      original_line: start + 1,
      knowledge_id: currentKnowledgeId,
      title: lines[start].replace(/<[^>]+>/g, '').replace(/[*#]/g, '').trim(),
      sha256: crypto.createHash('sha256').update(content).digest('hex'),
      content
    });
    out.push('#### 例题与训练（来源审核中）');
    out.push('');
    out.push(`> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。${currentKnowledgeId ? `（节点：${currentKnowledgeId}）` : ''}`);
    out.push('');
  }
  fs.writeFileSync(full, out.join('\n'));
}

const quarantineDir = path.join(root, 'data/quarantine');
fs.mkdirSync(quarantineDir, { recursive: true });
const quarantineFile = path.join(quarantineDir, 'legacy-markdown-exercises.json');
if (records.length === 0 && fs.existsSync(quarantineFile)) {
  console.log('No new legacy exercise blocks found; preserving the existing quarantine archive.');
  process.exit(0);
}
const payload = {
  schema_version: 1,
  quarantined_at: '2026-07-15',
  reason: 'P0-RUNTIME-001: legacy Markdown exercises lack policy-2.0 source and recalculation evidence',
  count: records.length,
  records
};
fs.writeFileSync(quarantineFile, `${JSON.stringify(payload, null, 2)}\n`);
console.log(`Quarantined ${records.length} legacy exercise blocks from ${files.length} student content files.`);
