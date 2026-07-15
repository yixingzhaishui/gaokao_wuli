'use strict';

const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const progress = JSON.parse(fs.readFileSync(path.join(root, 'data/progress.json'), 'utf8'));
const graphPath = path.join(root, 'data/graph.json');
const graph = JSON.parse(fs.readFileSync(graphPath, 'utf8'));
const moduleName = { bx1: '必修1', bx2: '必修2', bx3: '必修3', xb1: '选择性必修1', xb2: '选择性必修2', xb3: '选择性必修3', experiments: '实验专题', models: '模型专题', 'gaokao-skills': '高考能力专题' };

const existing = new Map((graph.nodes || []).map(n => [n.id, n]));
graph.nodes = Object.entries(idMap).map(([id, meta]) => ({
  ...(existing.get(id) || {}),
  id,
  title: meta.title,
  module: moduleName[meta.file] || meta.file,
  file: meta.file,
  slug: meta.slug,
  level: meta.level,
  status: progress[id]?.status || 'pending'
}));

const wantedEdges = [
  { from: 'B3-25', to: 'B3-26', type: 'prerequisite', label: '磁现象通向磁场描述' },
  { from: 'B3-26', to: 'B3-27', type: 'prerequisite', label: '磁场描述通向磁通量与感应现象' },
  { from: 'B3-26', to: 'X2-03', type: 'application', label: '必修磁场基础通向安培力深化' },
  { from: 'B3-27', to: 'X2-09', type: 'application', label: '感应现象基础通向楞次定律' },
  { from: 'X1-24', to: 'X3-19', type: 'application', label: '跨模块复习入口指向光电效应主节点' }
];
const edgeKey = e => `${e.from}|${e.to}|${e.type}`;
const seen = new Set((graph.edges || []).map(edgeKey));
for (const edge of wantedEdges) if (!seen.has(edgeKey(edge))) graph.edges.push(edge);

fs.writeFileSync(graphPath, `${JSON.stringify(graph, null, 2)}\n`);
console.log(`Synced ${graph.nodes.length} graph nodes and ${graph.edges.length} edges.`);
