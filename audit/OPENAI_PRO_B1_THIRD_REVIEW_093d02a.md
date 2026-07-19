# OpenAI Pro 第三轮复审：B1 优先页面

> 仓库：`yixingzhaishui/gaokao_wuli`
> 分支：`codex/repository-fixes`
> PR：Draft PR #3
> 当前 PR Head：`093d02a38eb0e28e8947b4939f86f15ede976dab`
> 干净受测实现提交：`74ec1244b94ec63638486526b1ebeccfa1477bd6`
> 上一轮基线：`441f6e575f62a9f0b8427f68ced147a852dfabef`
> 复审日期：2026-07-17
> 复审范围：B1-12、B1-18、B1-24、正文集成、专项测试和 CI
> 总裁决：**无新增 P0；优先页面已接近通过，但仍有少量出版级 P1 需要关闭。**

---

## 1. 结论先行

```yaml
reviewed_head: 093d02a38eb0e28e8947b4939f86f15ede976dab
tested_implementation: 74ec1244b94ec63638486526b1ebeccfa1477bd6

new_physics_P0: 0
previous_physics_P0:
  B1-12: closed
  B1-24: closed

B1-12:
  physics_content: approved
  pedagogy_review: minor_revise
  content_approval: pending

B1-18:
  physics_content: approved
  pedagogy_review: conditional_pass
  content_approval: pass_after_document_sync

B1-24:
  physics_content: minor_fix_required
  pedagogy_review: revise
  content_approval: pending

priority_batch: changes_requested
B1_chapter_content_approval: pending
B1_release_gate: blocked_by_remaining_chapter_findings
development_flow: continue
PR_recommendation: keep_draft
```

与上一轮相比，本轮整改有效完成了：

- 完整 Markdown 页面把任务和 iframe 放到规范答案之前；
- B1-12 初态隐藏未来曲线、共速/相遇时刻和结论标记；
- B1-12 保存三选一预测，并运行到实际相遇；
- B1-18 自动/分步路径均显示静止、临界、滑动；
- B1-18 修复 `F=0` 时的虚假相对运动趋势；
- B1-18 将传送带方向预测与推箱临界过程分开；
- B1-24 第二项预测前不再显示 `1/m` 坐标答案；
- B1-24 reduced-motion 每次点击只记录一个数据点；
- CI 已显式运行 B1 专项 Playwright 教学测试；
- 当前 GitHub Actions Repository checks 成功。

当前问题已经不再是大规模重做，而是关闭几个可精确定位的小缺口。

---

# 2. 已确认关闭的问题

## 2.1 B1-12 原确定物理错误：关闭

正文现在明确：

- 前车匀速；
- 后车持续保持正恒加速度；
- 时间和道路不设上限；
- 在该模型中最终一定追上；
- 加速度较小只会让追上时间推迟；
- 共速是距离变化率为零；
- 相遇条件是位置相同。

默认参数：

```text
v10 = 0
a = 2 m/s²
v2 = 8 m/s
d = 40 m
```

独立复算：

```text
t共速 = (8-0)/2 = 4.00 s
Δx最大 = 40 + 8×4 - 1/2×2×4² = 56 m
t相遇 = 4 + √56 ≈ 11.48 s
```

动画默认终点取第一个正相遇根，能够到达 `Δx=0`。

---

## 2.2 B1-18 静摩擦和滑动摩擦模型：通过

当前实现正确区分：

```text
F=0：
无水平相对运动趋势，f=0

0<F<f_s,max：
箱子静止，f_s 按需求与 F 平衡

F=f_s,max：
恰要滑动

F>f_s,max：
进入相对滑动，改用 f_k=μ_kN
```

自动和分步模式均按以下证据节点停留：

```text
F=20 N：静摩擦按需求
F=25 N：达到最大静摩擦
F=32 N：已经滑动，f_k=20 N
传送带方向预测
```

迁移情境不再输出没有模型支撑的精确力值。

---

## 2.3 B1-24 粗糙面静摩擦错误：关闭

拓展中：

```text
F外=6 N
m=3 kg
μ_s=0.32
f_s,max=9.6 N
```

由于 `F外<f_s,max`，当前实现输出：

```text
f_s=6 N
F合=0
a=0
```

不再错误显示 `f_s=μ_smg=9.6 N`。

滑动情境使用 `μ_k`，主实验保持光滑面，外力与合力的语义已分层。

---

## 2.4 工程与证据治理：通过

- 交互报告绑定干净实现提交 `74ec1244`；
- 报告记录 `worktree_clean: true`；
- 记录三个受测动画 SHA-256；
- 当前 PR Head 之后没有再次修改三个动画；
- CI 显式安装 Chromium；
- CI 显式运行 B1 教学测试；
- 当前 Repository checks 成功；
- Claude 历史文件仍处于非权威归档状态。

---

# 3. B1-12 追及相遇：剩余问题

## P1-B1-12-FEEDBACK-001：预测被保存，但没有形成明确反馈闭环

学生会选择：

```text
两车相遇
距离达到最大
距离达到最小
```

但验证完成后，页面没有明确显示：

```text
你的预测：……
实际结果：……
证据：……
为什么：……
```

`state.prediction` 被保存，却只用来解除验证按钮；最终任务和状态没有引用学生的选择。

### 为什么需要修

《动画设计规范》要求反馈至少包含：

1. 学生预测；
2. 实际结果；
3. 画面证据；
4. 因果解释。

仅显示完整图和结论，仍少了“我的预测与证据怎样对应”。

### Codex Action

在进入 `verify` 时或到达共速点时显示：

```text
你的预测：距离达到最大
实际结果：距离达到最大
证据：共速前 v后<v前，距离增大；共速后 v后>v前，距离减小
解释：距离变化率 v前-v后 在此处由正变负
```

选错时不要只显示“错误”，仍显示同一证据链。

### 验收

- 测试分别选择三个选项之一；
- 结果区必须包含所选答案文本；
- 必须同时包含“实际结果”和相对速度变号证据。

---

## P1-B1-12-LOCK-002：自由探索在引导演示完成前已经可以拖动

当前 `state.revealed=true` 在学生点击“验证预测”时立即设置。

随后：

- 完整未来曲线出现；
- `v10`、`a`、`v2` 等手柄出现；
- `pointerdown` 只检查 `state.revealed`；
- 因而演示尚未运行到相遇，学生已经可以拖动参数和时间游标。

这与正文“演示完成后才开放自由参数探索”不一致，也可能中断验证过程。

### Codex Action

把状态拆为：

```js
state.evidenceRevealed
state.exploreEnabled
```

规则：

```text
预测后：
evidenceRevealed=true
exploreEnabled=false

演示完成：
exploreEnabled=true
```

`pointerdown` 必须检查 `exploreEnabled`。

在引导验证阶段可以显示必要的速度证据，但不得显示可拖动手柄。

### 验收

- 预测后、相遇前，拖动画布不得改变 `d、v10、a、v2、t`；
- 到达 final 后才允许拖动；
- 新增 Playwright 断言。

---

## P2-B1-12-SCOPE-003：导数记号应标注为理解性工具

正文直接使用：

```text
dΔx/dt = v2-v1
```

这在物理上正确，但并非所有高考学生都需要把导数记号作为本节核心记忆。

建议主线写：

> 距离的变化率等于前车速度减后车速度。

导数式放在括号或 `extension` 中。

---

# 4. B1-18 摩擦力：接近通过

## 4.1 本轮评价

物理内容和动画主线已经达到可用标准。

```yaml
physics_content: approved
guided_demo: approved
prediction_evidence_loop: approved
mobile_and_controls: approved
```

无需重做动画。

---

## P1-B1-18-DOC-001：正文仍把“人走路”写成默认连播内容

正文“默认引导演示”第 3 项仍写：

> 连续播放人走路和传送带带动物块。

当前默认路径实际是：

```text
推箱静止
→ 临界
→ 滑动
→ 传送带方向预测
```

“人走路”只在演示后的自由探索中出现。

同页后面的动态说明和控件说明已经按当前实现书写，因此前后不一致。

### 修复

将第 3 项改为：

> **方向迁移**：单独预测“传送带向右且物块较慢”时的摩擦方向。演示完成后，可在自由探索中切换“人走路”，验证摩擦也可成为动力。

### 验收

- 正文默认路径与实际动画逐步一致；
- 不再声称自动播放不存在的“人走路”一幕。

完成这一处文档同步后，B1-18 可以标为：

```yaml
physics_content: approved
pedagogy_review: approved
content_approval: approved
```

---

## P2-B1-18-MODEL-002：自由探索建议处理 `μ_k>μ_s`

当前两个参数完全独立，学生可以选择：

```text
μ_s=0.10
μ_k=0.45
```

这不是数学上绝对禁止的材料行为，但会使本页“达到静摩擦上限后开始向右滑动”的简单阶段模型变得不直观，甚至出现刚滑动后摩擦大于驱动力的情形。

面向高考主模型，建议二选一：

1. 默认限制 `μ_k≤μ_s`；
2. 允许超出，但显示：
   > 当前参数不符合本页常用“最大静摩擦大于滑动摩擦”简化，运动过程需重新分析。

这属于自由探索稳健性优化，不阻断 B1-18 通过。

---

# 5. B1-24 牛顿第二定律：剩余出版级问题

## P1-B1-24-EVIDENCE-001：虚拟数据由目标公式直接生成，不能伪装成独立实验发现

代码直接使用：

```js
a = F/3
a = 12/m
```

然后页面让学生根据这些点“归纳”：

```text
F合=ma
```

作为理想仿真演示，这是可以使用的；但它不是独立于牛顿第二定律的实验数据。若不说明，逻辑上是：

```text
用 F=ma 生成数据
→ 再用数据发现 F=ma
```

属于循环取证。

### Codex Action

在 iframe 前或实验说明中明确：

> 本动画使用牛顿第二定律生成理想化、无测量误差的数据，目的是帮助看清控制变量和图像关系；真实定律的实验证据来自小车—力传感器—加速度传感器实验。

更好的版本：

- 使用一组固定“实测风格数据”；
- 给出小幅测量不确定度；
- 显示拟合而不是每个点绝对精确落线；
- 实验专题再展开误差来源。

本页不需要为了噪声而增加复杂度，但必须诚实标注“理想仿真”。

### 验收

- 学生页面出现“理想仿真/理想数据”说明；
- 不再使用“动画本身证明定律”的表述；
- 保留控制变量和图像理解功能。

---

## P1-B1-24-GRAPH-002：文字称“过原点直线”，画面却没有画到原点

第一轮数据：

```text
(3,1), (6,2), (9,3), (12,4)
```

当前连线从第一个测量点开始，没有连接 `(0,0)`。

第二轮改画 `a-1/m` 后也是只连接四个非零点，没有显示通过原点的拟合线。

仅凭“几个点共线”可以说明线性关系，但不能直接证明正比例；正比例还要求零截距。

### 修复

第一轮：

- 可加入 `F合=0, a=0` 作为物理边界点；
- 或测量点保持不变，另画“过原点拟合/理论线”。

第二轮：

- 不把 `1/m=0` 当作真实测量点（对应无限质量）；
- 画一条由数据拟合并向原点外推的直线；
- 标明原点是模型极限，不是本次测量点。

### 验收

- 画面所称“过原点”有真实图形对应；
- 测量点、拟合线和外推段视觉区分；
- 不把无限质量伪装为实验测量。

---

## P1-B1-24-WORDING-003：因果表述写错

当前正文：

> 质量和加速度是“原因→结果”关系：合力产生加速度……

“质量和加速度”不是这里要表达的原因—结果对。

建议改为：

> 合外力是速度发生变化的原因，加速度描述这种变化的快慢；质量表征物体运动状态改变的难易。在研究对象质量不变的高中模型中，同一合外力作用下，质量越大，加速度越小。

---

## P1-B1-24-BOUNDARY-004：公式边界需要再收紧

### 需要补充

`F合=ma` 在本页高中模型中应明确：

- 研究对象质量在所研究过程中不变；
- 使用惯性参考系；
- `F合` 是同一时刻所有外力的矢量和。

### 当前易误导表述

正文列：

```text
F合 = F外 - f（有摩擦时）
```

这只适用于本页一维、外力与摩擦共线反向的拓展，不是一般公式。

应改为：

> 本页水平一维拓展中，若拉力向正方向、摩擦向负方向，则 `F合=F拉-f`；一般情形必须按矢量或分量求和。

---

## P1-B1-24-DOC-005：演示说明与实现仍有两处不一致

### 数据档数

正文写：

> 合力依次取三档。

代码实际取四档：

```text
3、6、9、12 N
```

### 时长

正文写：

> 默认引导演示约 90 秒。

自动取点间隔为 `850 ms`，两轮共 8 个点，实际自动过程约 7 秒，加上两次预测也远短于 90 秒。

学生时间有限，短演示是优点，不需要人为拉长；应改文档，例如：

> 约 15～30 秒，取决于两次预测和是否使用逐点模式。

### 验收

- 正文写“四档”或改代码为三档；
- 时长与真实流程接近；
- 不为符合旧规范而故意减慢动画。

---

# 6. CI 与自动门禁

## 6.1 已通过

当前 GitHub Actions 已明确包含：

```yaml
Run B1 priority pedagogy tests
```

当前运行成功。

---

## P1-CI-FULL-GATE-001：CI 没有运行完整 `npm run check`

`package.json` 中完整检查是：

```text
scripts/check.js --strict
check-editorial-coverage
check-math-content
check-solutions
check-static-fallback
static-eval --gate
```

当前 CI 的 “Run strict repository checks” 只运行：

```text
node scripts/check.js --strict
```

因此 GitHub 绿色状态没有覆盖：

- 编辑覆盖；
- 数学内容；
- 解答检查；
- 静态回退；
- 静态评估 gate。

PR 描述称本地 `npm run check` 通过可以作为补充证据，但不如 CI 可重复。

### 修复

将 CI 步骤改为：

```yaml
- name: Run full repository gate
  run: npm run check
```

保留：

```yaml
- name: Audit animations
- name: Run B1 priority pedagogy tests
```

### 验收

- GitHub Actions 日志中出现完整六段检查；
- 任一完整 gate 失败时 PR 检查失败。

---

# 7. 自动测试仍需增加的断言

## B1-12

新增：

- 选择预测后、演示完成前，画布拖动不能修改参数；
- final 后才能拖动；
- 反馈文本包含学生选择；
- 反馈文本包含实际结果和相对速度变号证据。

## B1-18

新增可选稳健性测试：

- 若限制 `μ_k≤μ_s`，测试滑块约束；
- 若允许超出，测试模型警告。

## B1-24

新增：

- 页面出现“理想仿真”说明；
- 拟合线或外推线经过原点；
- 测量点与外推原点不混淆；
- 正文档数与 `forceCases.length` 一致；
- CI 运行完整 `npm run check`。

---

# 8. 下一提交的最小范围

建议仅修改：

```text
bx1.md
anim/bx1/pursuit.html
anim/bx1/friction.html（仅可选 P2 或无改动）
anim/bx1/newton-second.html
tests/b1-priority-pedagogy.spec.js
.github/workflows/ci.yml
audit/chief_editor/B1_RE_REVIEW_2026-07-16.md
```

建议提交：

```text
fix(B1): close final priority publication notes
```

不要在这一提交中开始重写其他 27 个节点。

---

# 9. 最终裁决

本轮没有发现新的严重物理错误。上一轮两个物理 P0 继续保持关闭。

最接近通过的是 B1-18：只需同步一处默认演示文案，即可批准，无需重做动画。

B1-12 剩余的是预测反馈和演示阶段锁定；B1-24 剩余的是科学证据诚实性、图像过原点证据、边界表述和文档同步。

```yaml
OpenAI_Pro_third_review: changes_requested

B1_12:
  physics: approved
  pedagogy: minor_revise

B1_18:
  physics: approved
  pedagogy: conditional_pass
  approval_after: one_document_sync

B1_24:
  physics_core: approved
  publication_physics_wording: minor_fix_required
  pedagogy: revise

new_P0: none
priority_batch_approval: pending
chapter_approval: pending
PR_state: keep_draft
```
