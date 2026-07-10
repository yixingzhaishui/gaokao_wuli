'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));

function esc(text) {
  return String(text).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function clean(text) {
  return String(text || '')
    .replace(/<svg[\s\S]*?<\/svg>/g, '[题图见原知识点页面]')
    .replace(/<iframe[\s\S]*?<\/iframe>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function firstSvg(text) {
  const match = String(text || '').match(/<svg[\s\S]*?<\/svg>/);
  return match ? match[0] : '';
}

function inferDifficulty(text) {
  if (/压轴|较难/.test(text)) return /压轴/.test(text) ? '压轴' : '较难';
  if (/中档|综合/.test(text)) return '中档';
  return '基础';
}

function inferType(text) {
  if (/实验|数据|读数|作图/.test(text)) return '实验';
  if (/单选|多选|下列|选/.test(text)) return '单选';
  if (/综合|压轴|变式/.test(text)) return '综合';
  return '计算';
}

function extractTraps(block) {
  const match = block.match(/####\s*\d+\.\s*易错点([\s\S]*?)(?=####\s*\d+\.|$)/);
  if (!match) return [];
  return match[1].split('\n')
    .map(line => line.replace(/^[-*]\s*/, '').trim())
    .filter(Boolean)
    .slice(0, 3);
}

function splitExample(raw) {
  const answerSplit = raw.split(/\*\*答案与解析\*\*/);
  const stem = clean(answerSplit[0]);
  const afterAnswer = answerSplit[1] || '';
  const methodSplit = afterAnswer.split(/\*\*方法提炼\*\*/);
  const solution = clean(methodSplit[0]);
  const afterMethod = methodSplit[1] || '';
  const sourceMatch = afterMethod.match(/来源[：:]\s*([^\n]+)/);
  const method = clean(afterMethod.replace(/来源[：:][^\n]+/, ''));
  return {
    stem,
    solution,
    method,
    source: sourceMatch ? clean(sourceMatch[1]) : '页面例题'
  };
}

const examples = [];

for (const [knowledgeId, meta] of Object.entries(idMap)) {
  const file = meta.file && path.join(root, `${meta.file}.md`);
  if (!file || !fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, 'utf8');
  const h4 = new RegExp(`<h4[^>]*\\bid="${esc(meta.slug)}"[\\s\\S]*?<\\/h4>`);
  const start = text.search(h4);
  if (start === -1) continue;
  const rest = text.slice(start);
  const next = rest.slice(1).search(/<h4[^>]*\bid="/);
  const block = next === -1 ? rest : rest.slice(0, next + 1);
  const traps = extractTraps(block);
  let n = 0;
  let previousExampleId = '';
  const re = /\*\*(例题[^*]*)\*\*([\s\S]*?)(?=\n---\n|\n\*\*例题|\n<h4\b|$)/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    const title = clean(m[1]);
    const svg = firstSvg(m[2]);
    const parsed = splitExample(m[2]);
    if (!parsed.stem || !parsed.solution) continue;
    n += 1;
    const exampleId = `PX-${knowledgeId}-${String(n).padStart(2, '0')}`;
    const item = {
      id: exampleId,
      source: parsed.source || '页面例题',
      source_verified: false,
      year: 2026,
      type: inferType(`${title}\n${parsed.stem}`),
      difficulty: inferDifficulty(`${title}\n${parsed.stem}`),
      knowledge_ids: knowledgeId.startsWith('M-') ? [] : [knowledgeId],
      model_ids: knowledgeId.startsWith('M-') ? [knowledgeId] : [],
      stem: `${title}：${parsed.stem}`,
      answer: parsed.solution.split('\n')[0].slice(0, 120),
      solution: parsed.solution,
      method: parsed.method,
      traps,
      page_ref: `${meta.file}?id=${meta.slug}`
    };
    if (svg) {
      item.diagram_required = /如图|下图|图示|所示|图中|右图|左图/.test(item.stem);
      item.diagram = {
        type: 'inline-svg',
        title: `${meta.title}页面例题图`,
        svg
      };
    }
    if (/上题/.test(item.stem)) {
      item.group_id = `PX-GROUP-${knowledgeId}`;
      if (previousExampleId) item.parent_id = previousExampleId;
      item.shared_context = `本组题来自 ${meta.title} 页面连续例题，完整上下文见 ${item.page_ref}。`;
    }
    examples.push(item);
    previousExampleId = exampleId;
  }
}

const out = {
  generated_at: new Date().toISOString(),
  source: 'markdown-page-examples',
  count: examples.length,
  examples
};

fs.writeFileSync(path.join(root, 'data/page-examples.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`generated ${examples.length} page examples`);
