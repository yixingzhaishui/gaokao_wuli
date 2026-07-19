/* P1-EDITOR-002/003: migrate every numbered node to a type-specific structure and add a first-use formula card. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const idMap = JSON.parse(fs.readFileSync(path.join(root, 'data/id-map.json'), 'utf8'));
const manifest = {
  schema_version: 1,
  reviewed_at: '2026-07-15',
  reviewed_by: 'Codex AI editorial review',
  review_scope: ['P1-EDITOR-002', 'P1-EDITOR-003'],
  nodes: {}
};

function templateFor(id, meta) {
  if (id.startsWith('E-')) return 'experiment';
  if (id.startsWith('M-')) return 'model';
  if (/能源|核能|电磁波|宇宙|相对论|传感器|通信|激光|发电机|电动机|技术|环境/.test(meta.title)) return 'stse-extension';
  return 'concept-law';
}

function cleanHeading(title) {
  return title.replace(/^\d+(?:\.\d+)?\.\s*/, '').trim();
}

function headingReplacement(title, template) {
  const h = cleanHeading(title);
  if (template === 'experiment') {
    if (/实验目的|学习目标/.test(h)) return '#### 探究问题与目标';
    if (/先看装置|先看现象|先看仪器/.test(h)) return '**装置或现象预览。**';
    if (/实验原理/.test(h)) return '#### 原理、变量、单位与适用条件';
    if (/虚拟实验/.test(h)) return '#### 交互实验';
    if (/观察任务/.test(h)) return '**证据任务。**';
    if (/实验器材/.test(h)) return '#### 装置、器材与安全';
    if (/操作步骤|实验步骤/.test(h)) return '#### 操作步骤';
    if (/数据记录|数据处理|数据记录与作图/.test(h)) return '#### 数据处理与证据';
    if (/误差分析/.test(h)) return '#### 不确定度、失效情形与改进';
    if (/适用条件与失效情形/.test(h)) return '**适用边界。**';
    if (/与知识点绑定/.test(h)) return '#### 结论与迁移';
    if (/易错点/.test(h)) return '#### 故障诊断与易错点';
  }
  if (template === 'model') {
    if (/这个模型解决什么/.test(h)) return '#### 模型任务与研究对象';
    if (/先抓住题型入口/.test(h)) return '**题型入口。**';
    if (/先看图/.test(h)) return '#### 情境表征';
    if (/交互模型/.test(h)) return '**交互模型。**';
    if (/观察任务/.test(h)) return '**证据任务。**';
    if (/识别条件/.test(h)) return '#### 模型假设与识别条件';
    if (/第一步怎么做/.test(h)) return '#### 约束方程与求解路线';
    if (/公式绑定/.test(h)) return '#### 公式、变量、单位与条件';
    if (/适用边界/.test(h)) return '**模型失效边界。**';
    if (/常见题型/.test(h)) return '#### 迁移情境';
    if (/易错点/.test(h)) return '#### 边界检查与易错点';
  }
  if (/官方归属|学习目标|课标定位/.test(h)) return '#### 课标定位与学习目标';
  if (/先看现象|学生先看到的现象|先看一条因果链|先看材料与答题任务/.test(h)) return template === 'stse-extension' ? '#### 技术与社会情境' : '#### 情境与现象';
  if (/示意图|静态示意图/.test(h)) return '**静态表征。**';
  if (/示意动画/.test(h)) return '**动态表征。**';
  if (/交互动画|交互训练/.test(h)) return '**交互探究。**';
  if (/观察任务|先看现象与观察任务/.test(h)) return '**证据任务。**';
  if (/规律由来|核心规律|基础认识|建立模型|磁通量|电磁感应的实验结论/.test(h)) return template === 'stse-extension' ? '#### 核心物理机制与证据' : '#### 规律、证据与核心概念';
  if (/概念理解/.test(h)) return '**概念辨析。**';
  if (/公式绑定|判据绑定/.test(h)) return template === 'stse-extension' ? '#### 定量关系、变量、单位与边界' : '#### 公式、变量、单位与条件';
  if (/适用条件|成立条件/.test(h)) return '**适用边界。**';
  if (/应用题型|应用$/.test(h)) return template === 'stse-extension' ? '#### 系统影响与权衡' : '#### 应用与迁移';
  if (/解题思路|解题步骤/.test(h)) return '**解题路径。**';
  if (/科学方法|科学观念/.test(h)) return '#### 科学方法与证据';
  if (/易错点/.test(h)) return template === 'stse-extension' ? '#### 证据限制与常见误区' : '#### 边界检查与易错点';
  if (/能力目标/.test(h)) return '#### 能力目标';
  if (/方法口诀/.test(h)) return '#### 方法、条件与迁移';
  if (/条件必须紧邻结论|多用电表欧姆挡操作闭环|内外接与量程判定/.test(h)) return '**专项条件检查。**';
  if (/基础与深化边界/.test(h)) return '#### 课标边界与迁移';
  return `#### ${h}`;
}

function conditionFrom(block, template) {
  const heading = /^(?:####|\*\*)\s*(?:\d+(?:\.\d+)?\.\s*)?(?:适用条件|成立条件|适用边界|识别条件|实验原理|基础与深化边界)[^\n]*$/m.exec(block);
  if (heading) {
    const tail = block.slice(heading.index + heading[0].length).split(/\n(?=####\s|<h4\b)/)[0];
    const line = tail.split('\n').map(s => s.trim()).find(s => s && !/^[-|`<]/.test(s));
    if (line) return line.replace(/\$|\*|`|<[^>]+>/g, '').slice(0, 180);
    const bullet = tail.split('\n').map(s => s.trim()).find(s => /^-\s+/.test(s));
    if (bullet) return bullet.replace(/^-\s+|\$|\*|`|<[^>]+>/g, '').slice(0, 180);
  }
  if (template === 'experiment') return '仅在本实验规定的装置、量程、接线、控制变量和仪器工作范围内使用；实验量均按数据表规定单位记录';
  if (template === 'model') return '仅在本节点列出的模型假设和约束方程成立时使用；先规定正方向，再由代数符号解释方向';
  if (template === 'stse-extension') return '先明确系统边界、时间尺度和运行阶段或生命周期口径；定量关系不得脱离下文假设外推';
  return '仅在本节点定义的研究对象、参考系、过程和近似成立时使用；矢量先规定正方向，计算量默认采用国际单位制';
}

function formulaCount(block) {
  const math = block.match(/\$\$[\s\S]*?\$\$|\$[^$\n]+\$/g) || [];
  const codeEquations = [...block.matchAll(/```text\n([\s\S]*?)```/g)].flatMap(m => m[1].split('\n').filter(line => /=|≤|≥|≈/.test(line)));
  return math.length + codeEquations.length;
}

function collapsePlaceholders(block) {
  const lines = block.split('\n');
  const out = [];
  let seen = false;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '#### 例题与训练（来源审核中）') {
      if (seen) {
        i++;
        while (i + 1 < lines.length && (lines[i + 1].trim() === '' || /^> 本节点的历史自由文本例题/.test(lines[i + 1]))) i++;
        continue;
      }
      seen = true;
    }
    out.push(lines[i]);
  }
  return out.join('\n');
}

const byFile = {};
for (const [id, meta] of Object.entries(idMap)) (byFile[meta.file] ??= []).push({ id, ...meta });

for (const [file, nodes] of Object.entries(byFile)) {
  const full = path.join(root, `${file}.md`);
  let text = fs.readFileSync(full, 'utf8');
  const positions = nodes.map(node => {
    const re = new RegExp(`<h4\\b[^>]*\\bid=["']${node.slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>[^\\n]*<\\/h4>`);
    const match = re.exec(text);
    if (!match) throw new Error(`Missing node heading ${node.id}`);
    return { ...node, start: match.index, heading: match[0], headingEnd: match.index + match[0].length };
  }).sort((a, b) => a.start - b.start);

  for (let i = positions.length - 1; i >= 0; i--) {
    const node = positions[i];
    const end = i + 1 < positions.length ? positions[i + 1].start : text.length;
    let block = text.slice(node.start, end);
    const template = templateFor(node.id, node);
    const count = formulaCount(block);
    const condition = conditionFrom(block, template);
    block = block.replace(/^####\s+(.+)$/gm, (_, title) => headingReplacement(title, template));
    block = collapsePlaceholders(block);
    const marker = `\n<!-- content-template: ${template}; editorial-review: P1-EDITOR-002/003 -->`;
    const card = count > 0
      ? `\n\n> **公式首次使用卡**：${condition}。符号含义在紧邻公式的正文或表格中定义；除题目另有单位外，计算统一换算为 SI，结果必须保留单位并检查量纲。`
      : '';
    block = block.replace(node.heading, `${node.heading}${marker}${card}`);
    text = text.slice(0, node.start) + block + text.slice(end);
    manifest.nodes[node.id] = { template, formula_occurrences: count, formula_card: count > 0, condition_basis: condition };
  }
  fs.writeFileSync(full, text);
}

fs.writeFileSync(path.join(root, 'data/editorial-review.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Migrated ${Object.keys(manifest.nodes).length} nodes to type-specific templates.`);
