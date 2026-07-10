# 必修 1 内容终审报告（V3 首轮）

- 审核版本：3.0
- 审核日期：2026-07-10
- 基线提交：`fe5d6df25eb029027ac7fcf7df1e3fcc8691cef5`
- 审核范围：B1-01 至 B1-32、`bx1.md`、`anim/bx1/*.html`、关联题库记录
- 证据：`audit/baseline.json`、`audit/results/formula-audit.json`、`audit/results/missing-diagrams.json`、`audit/results/interaction-audit.json`

## 审核范围与基线

必修 1 共 32 个知识点，正文有 32 个 SVG 和 32 个嵌入动画，关联题库记录 143 条；题目字段检查确认均有 `answer` 和 `solution`。旧静态动画脚本把 32 个动画全部评为 100 分，但当时没有真实行为记录，因此该分数只能作为静态预筛选，不能作为发布质量分。

V3 静态扫描最终发现全仓库 3,801 条公式格式候选，必修 1 其中 756 条；`bx1.md` 的 KaTeX `$...$`/`$$...$$` 定界符数量为 0，公式主要使用普通文本、Unicode 或反引号表达。这些是需要逐项复核的候选，不直接等同于物理公式错误，但现阶段不足以支撑 `done`。

## P0

无。仓库一致性检查通过，32 个必修 1 动画均可加载，未发现整章无法打开的问题。

## P1 / H5 修复结果

Playwright 对 32 个动画执行了加载、播放、暂停、重置、条件控件、Canvas 拖拽探测、切走再返回和 390px 手机布局检查。32/32 测试用例执行通过，最终内容结论为：

| 行为结论 | 数量 | 含义 |
| --- | ---: | --- |
| PASS | 18 | 自动行为证据暂时无硬失败 |
| NEEDS_REVIEW | 14 | 播放等行为通过，但直接拖拽证据或物理人工复核仍不足 |
| BLOCKED | 0 | 本轮没有剩余自动化硬阻塞 |

本轮已修复的 H5 问题包括：

- 为 `braking.html`、`elastic-force.html`、`force-composition.html`、`free-fall.html`、`gravity.html`、`hooke-law.html`、`overweight.html`、`pursuit.html`、`reference-frame.html`、`uniform-acceleration.html`、`uniform-motion.html`、`vertical-throw.html`、`vt-graph.html` 补充重置入口和初始状态恢复。
- 让 `force-composition.html` 的“自由拖动”、`gravity.html` 的“自定义”和 `uniform-motion.html` 的“对比匀加速”在点击后产生可观察的状态/读数变化。
- 修复 `galileo-ideal-experiment.html` 暂停后轨迹仍继续累积的问题。
- 修复 `newton-first.html` 重置后未恢复到初始时间、速度和摩擦系数的问题。

当前 14 个 `NEEDS_REVIEW` 为：

`acceleration.html`、`braking.html`、`force-composition.html`、`free-fall.html`、`friction.html`、`gravity.html`、`hooke-law.html`、`newton-first.html`、`particle.html`、`time-instant.html`、`uniform-acceleration.html`、`uniform-motion.html`、`velocity.html`、`vt-graph.html`。

它们不是“已经确认失效”，而是通用 Canvas 网格探测没有找到可靠的直接手柄证据，或仍需逐项核对参数、读数和物理模型。完整字段见 `audit/results/interaction-audit.json`。

## 公式与网页渲染问题清单

- 必修 1 的公式定界符为 0；正文大量出现反引号公式，例如 `f需=Ma`、`Fcrit = ...`、`v = v0 - gt`。
- 静态扫描产生 756 条必修 1 公式候选，包含 `formula_in_backticks`、`plain_formula_outside_math` 和混用 Unicode/LaTeX 的候选。
- 后续应按知识点逐项把关键公式改为 `$...$` 或 `$$...$$`，补上 `\mathrm{}` 单位和 `\vec{}` 矢量，并在桌面与 390px 浏览器确认渲染；不应直接批量替换所有数学文本。

## 缺图问题清单

- 必修 1 题库没有发现题干引用图但缺图的记录。
- 全仓库缺图扫描当前为 0 条；审核器已排除“屏上图样”中“上图”的误匹配，并保留真正的图示引用检测。
- 必修 1 每个知识点正文目前有一个 inline SVG；仍需人工确认方向、单位、箭头、图中符号与解析一致。“有 SVG”不等于图示物理正确。

## 例题与答案问题清单

- 必修 1 关联记录 143 条，自动字段检查确认均有答案和解析字段。
- 题型、来源真实性、答案计算、图示与解析对应关系尚未完成逐题人工复核，因此不能将“字段齐全”当成 C 维度通过。
- 多数记录标记为教材改编、模型改编或 `source_verified=false`；不应把它们表述为未经核实的原题。后续需要补充年份、地区/考试名称、题号或明确“改编”说明。
- `B1-28 板块模型` 页面有训练入口和 4 道题，不能只用 `**例题` 字符串统计判断例题缺失。

## 当前状态结论

按照 V3 的 done gate，B1-01 至 B1-32 已从 `done` 回写为 `review`，并同步更新知识图谱状态。原因是公式逐项复核、图示物理正确性、例题答案与来源复核尚未完成；这不是对全部内容判定为错误，而是对证据边界的如实标注。

## 自动测试结果

- `node scripts/check.js --audit-write`：生成公式和缺图结果，缺图 0 条。
- `node scripts/anim-audit.js bx1`：32 个动画静态预筛选分仍然很高，输出明确标记为“待行为复核”。
- `npm run audit:interaction`：32/32 测试用例通过执行，最终行为结论为 PASS 18、NEEDS_REVIEW 14、BLOCKED 0。

## 后续优先级

1. 为 14 个 `NEEDS_REVIEW` 动画补充真实手柄坐标的鼠标和触摸拖拽证据。
2. 按 B1 知识点批次处理关键公式的 KaTeX/单位/矢量格式，并逐项做桌面与手机渲染复核。
3. 逐题复核答案、来源、图示和解析建模过程，完成后再将对应知识点从 `review` 回写为 `done`。
