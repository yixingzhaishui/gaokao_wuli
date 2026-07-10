// Generate data/progress.json from the repository's existing directory authority.
// The current authority is data/id-map.json: it contains all numbered units and
// their page mappings. Run `node scripts/gen-data.js --check` for a read-only check.
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'data');
const idMapPath = path.join(dataDir, 'id-map.json');
const progressPath = path.join(dataDir, 'progress.json');
const args = new Set(process.argv.slice(2));
const checkOnly = args.has('--check');
const unsupported = [...args].filter(arg => arg !== '--check');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function serialized(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function prefixFile(id) {
  return {
    B1: 'bx1', B2: 'bx2', B3: 'bx3',
    X1: 'xb1', X2: 'xb2', X3: 'xb3',
    G: 'gaokao-skills', E: 'experiments', M: 'models'
  }[id.split('-')[0]];
}

function validateAuthority(idMap) {
  if (!idMap || Array.isArray(idMap) || typeof idMap !== 'object') {
    throw new Error('data/id-map.json 必须是编号到元数据的 JSON 对象');
  }
  const slugs = new Map();
  for (const [id, meta] of Object.entries(idMap)) {
    if (!meta || !meta.slug || !meta.title || !meta.file || !meta.level) {
      throw new Error(`目录条目字段不完整: ${id}`);
    }
    const expectedFile = prefixFile(id);
    if (expectedFile && meta.file !== expectedFile) {
      throw new Error(`编号前缀与所属模块不匹配: ${id} -> ${meta.file}，应为 ${expectedFile}`);
    }
    const slugKey = `${meta.file}#${meta.slug}`;
    if (slugs.has(slugKey)) throw new Error(`目录存在重复 slug: ${slugKey} (${slugs.get(slugKey)}, ${id})`);
    slugs.set(slugKey, id);
    const page = path.join(root, `${meta.file}.md`);
    if (!fs.existsSync(page)) throw new Error(`目录条目页面不存在: ${id} -> ${meta.file}.md`);
  }
}

function buildProgress(idMap, existingProgress) {
  const sourceIds = Object.keys(idMap);
  const existingIds = Object.keys(existingProgress || {});
  const unknownIds = existingIds.filter(id => !Object.prototype.hasOwnProperty.call(idMap, id));
  if (unknownIds.length) {
    throw new Error(`现有 progress.json 含目录中不存在的编号，拒绝删除: ${unknownIds.join(', ')}`);
  }
  if (sourceIds.length < existingIds.length) {
    throw new Error(`生成结果条目数 ${sourceIds.length} 小于现有 progress 条目数 ${existingIds.length}，已中止`);
  }

  const generated = {};
  for (const id of sourceIds) {
    if (existingProgress && existingProgress[id]) {
      // Preserve every audit/review field, including reviewer, evidence and timestamps.
      generated[id] = clone(existingProgress[id]);
      if (!generated[id].level) generated[id].level = idMap[id].level;
    } else {
      generated[id] = { status: 'pending', level: idMap[id].level };
    }
  }
  return generated;
}

function firstDifference(current, expected) {
  const currentLines = current.split('\n');
  const expectedLines = expected.split('\n');
  const limit = Math.max(currentLines.length, expectedLines.length);
  for (let i = 0; i < limit; i++) {
    if (currentLines[i] !== expectedLines[i]) {
      return `第 ${i + 1} 行\n  当前: ${currentLines[i] ?? '<文件结束>'}\n  应为: ${expectedLines[i] ?? '<文件结束>'}`;
    }
  }
  return '文件内容不同，但未找到文本行差异';
}

function checkOrWrite(file, expected) {
  if (checkOnly) {
    if (!fs.existsSync(file)) {
      console.error(`陈旧或缺失: ${path.relative(root, file)}（文件不存在）`);
      return false;
    }
    const current = fs.readFileSync(file, 'utf8');
    if (current !== expected) {
      console.error(`陈旧或不一致: ${path.relative(root, file)}`);
      console.error(firstDifference(current, expected));
      return false;
    }
    return true;
  }
  fs.writeFileSync(file, expected);
  return true;
}

if (unsupported.length) {
  console.error(`不支持的参数: ${unsupported.join(', ')}`);
  process.exit(1);
}

try {
  const idMap = readJson(idMapPath);
  validateAuthority(idMap);
  const existingProgress = fs.existsSync(progressPath) ? readJson(progressPath) : {};
  const generatedIdMap = clone(idMap);
  const generatedProgress = buildProgress(idMap, existingProgress);
  const idMapOk = checkOrWrite(idMapPath, serialized(generatedIdMap));
  const progressOk = checkOrWrite(progressPath, serialized(generatedProgress));

  const counts = {};
  for (const item of Object.values(generatedProgress)) counts[item.status] = (counts[item.status] || 0) + 1;
  console.log(`${checkOnly ? '检查' : '生成'}目录条目: ${Object.keys(generatedIdMap).length}`);
  console.log(`${checkOnly ? '检查' : '生成'}进度条目: ${Object.keys(generatedProgress).length}`);
  console.log('状态统计:', Object.entries(counts).map(([status, count]) => `${status}=${count}`).join(', '));
  if (checkOnly && (!idMapOk || !progressOk)) process.exit(1);
} catch (error) {
  console.error(`gen-data 失败: ${error.message}`);
  process.exit(1);
}
