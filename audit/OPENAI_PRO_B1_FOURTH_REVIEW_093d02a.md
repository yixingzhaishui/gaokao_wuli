# OpenAI Pro 第四轮复审：B1 优先页面

> 仓库：`yixingzhaishui/gaokao_wuli`
> 分支：`codex/repository-fixes`
> PR：Draft PR #3
> 当前 PR Head：`093d02a38eb0e28e8947b4939f86f15ede976dab`
> 干净受测实现提交：`74ec1244b94ec63638486526b1ebeccfa1477bd6`
> 复审日期：2026-07-17
> 复审范围：B1-12、B1-18、B1-24、正文集成、专项测试和 CI
> 总裁决：**无新增 P0；B1-18 可条件通过，B1-12 与 B1-24 仍需小修。**

---

## 1. 总体结论

```yaml
reviewed_head: 093d02a38eb0e28e8947b4939f86f15ede976dab
tested_implementation: 74ec1244b94ec63638486526b1ebeccfa1477bd6

new_physics_P0: 0

B1-12:
  physics_content: approved
  pedagogy_review: pass_with_minor
  content_approval: pending_minor_feedback_fix

B1-18:
  physics_content: approved
  pedagogy_review: conditional_pass
  content_approval: approved_after_document_sync

B1-24:
  physics_content: approved_with_minor_wording_fix
  pedagogy_review: minor_revise
  content_approval: pending

priority_batch: almost_ready
B1_chapter_content_approval: pending
B1_release_gate: blocked_by_remaining_chapter_findings
development_flow: continue
PR_recommendation: keep_draft
```

本轮确认：

- B1-12 原确定物理错误已经关闭；
- B1-18 静摩擦、最大静摩擦和滑动摩擦模型正确；
- B1-24 粗糙面静摩擦错误已经关闭；
- 三个节点的任务与动画已经放到规范答案和公式之前；
- 预测、证据节点、移动端和 CI 教学测试均已显著加强；
- 当前没有新增严重物理错误。

---

# 2. B1-12 追及相遇

## 结论

```yaml
physics: PASS
pedagogy: PASS_WITH_MINOR
```

### 已通过

- 初态不显示共速时刻、相遇时刻、完整未来曲线和公式；
- 系统在共速前暂停；
- 学生必须完成“相遇 / 距离最大 / 距离最小”三选一；
- 预测后才揭示速度与位置证据；
- 默认演示运行到真正的 `Δx=0`；
- 完成后才开放公式与自由探索。

默认参数独立复算：

```text
v10 = 0
a = 2 m/s²
v2 = 8 m/s
d = 40 m

t共速 = 4.00 s
Δx最大 = 56 m
t相遇 = 4 + √56 ≈ 11.48 s
```

### 剩余小修：预测反馈不完整

当前保存了学生预测，但最终反馈仍应明确展示：

```text
你的预测：
实际结果：
证据：
为什么：
```

推荐文案：

> 你的预测：距离达到最大。
> 实际结果：距离达到最大。
> 证据：共速前后车更慢，距离增大；共速后后车更快，距离减小。
> 原因：距离变化率 `v前-v后` 在共速时由正变负。

选错时也显示相同证据链，不能只显示“错误”。

### 另一个小修：自由探索启用时机

应把：

```js
state.revealed
```

拆成：

```js
state.evidenceRevealed
state.exploreEnabled
```

预测后可显示验证证据，但只有进入 `final` 后才允许拖动 `d、v10、a、v2、t`。

---

# 3. B1-18 摩擦力

## 结论

```yaml
physics: PASS
pedagogy: CONDITIONAL_PASS
```

### 已通过

物理阶段正确：

```text
F=0：
无水平相对运动趋势，f=0

0<F<f_s,max：
静摩擦按需要增大

F=f_s,max：
恰要滑动

F>f_s,max：
切换为滑动摩擦 f_k=μ_kN
```

教学路径正确：

```text
预测 1
→ 静摩擦证据
→ 临界证据
→ 滑动证据
→ 预测 2（传送带方向）
→ 验证
→ 公式和自由探索
```

自动模式和分步模式均会在：

```text
F=20 N
F=25 N
F=32 N
```

三个证据节点停留。

迁移情境只判断相对运动趋势和摩擦方向，不显示无来源的精确力值。

### 剩余一处正文同步

正文仍写默认演示“连续播放人走路和传送带”，但实际默认路径只使用传送带；“人走路”位于演示后的自由探索。

建议改为：

> **方向迁移**：单独预测“传送带向右且物块较慢”时的摩擦方向。演示完成后，可在自由探索中切换“人走路”，验证摩擦也可以成为动力。

完成后可标记：

```yaml
physics_content: approved
pedagogy_review: approved
content_approval: approved
```

### 非阻断优化

自由探索可限制：

```text
μ_k ≤ μ_s
```

或者当 `μ_k>μ_s` 时提示：

> 当前参数不符合本页常用“最大静摩擦大于滑动摩擦”的简化，阶段运动需重新分析。

---

# 4. B1-24 牛顿第二定律

## 结论

```yaml
physics_core: PASS
publication_wording: MINOR_FIX
pedagogy: MINOR_REVISE
```

### 已通过

第一轮：

```text
m=3 kg 固定
F合=3、6、9、12 N
a=1、2、3、4 m/s²
```

第二轮：

```text
F合=12 N 固定
m=2、3、4、6 kg
a=6、4、3、2 m/s²
```

流程已经做到：

```text
预测
→ 逐点记录
→ 数据表
→ 第一轮拟合
→ 第二轮取点
→ 预测坐标变换
→ a-1/m
→ 最后揭示 F合=ma
```

粗糙面拓展中：

```text
F外=6 N
f_s=6 N
F合=0
a=0
```

语义正确。

### 剩余问题 1：理想仿真必须诚实标注

当前数据由：

```js
a = F / m
```

直接生成。

这可以作为理想化教学模拟，但不能暗示动画本身独立证明牛顿第二定律。

建议增加：

> 本动画使用牛顿第二定律生成理想化、无测量误差的数据，目的是帮助理解控制变量和图像关系；真实实验数据会存在测量误差，定律需要由实际实验与拟合支持。

### 剩余问题 2：“过原点直线”要有图形证据

第一轮当前测量点：

```text
(3,1), (6,2), (9,3), (12,4)
```

没有 `(0,0)`，但文字称“过原点直线”。

建议：

- 加入 `F合=0, a=0` 边界点；或
- 另画经过原点的拟合/理论线。

第二轮 `a-1/m`：

- 不得把 `1/m=0` 当作真实测量点；
- 可将拟合线外推到原点；
- 原点段标注为“模型外推”，不是实测点。

### 剩余问题 3：因果表述需要修正

当前“质量和加速度是原因→结果关系”不准确。

建议改为：

> 合外力是速度发生变化的原因，加速度描述这种变化的快慢；质量表征物体运动状态改变的难易。在研究对象质量不变的高中模型中，同一合外力作用下，质量越大，加速度越小。

### 剩余问题 4：公式边界要收紧

补充：

- 研究对象质量在所研究过程中不变；
- 使用惯性参考系；
- `F合` 是同一时刻所有外力的矢量和。

将：

```text
F合=F外-f
```

改成：

> 本页水平一维拓展中，若拉力向正方向、摩擦向负方向，则 `F合=F拉-f`；一般情形必须按矢量或分量求和。

### 剩余问题 5：正文与实现同步

正文称“三档”，代码实际是四档：

```text
3、6、9、12 N
```

正文写“约 90 秒”，实际流程明显更短。

建议改成：

> 合力依次取四档。完整流程约 15～30 秒，取决于两次预测以及是否使用逐点模式。

学生时间有限，不需要人为把动画拖慢。

---

# 5. CI 审核

## 已通过

CI 已显式运行：

```yaml
Run B1 priority pedagogy tests
```

且当前 Repository checks 成功。

## 剩余门禁建议

当前 CI 的严格检查步骤只运行：

```text
node scripts/check.js --strict
```

完整仓库门禁应改为：

```yaml
- name: Run full repository gate
  run: npm run check
```

从而覆盖：

- editorial coverage；
- math content；
- solutions；
- static fallback；
- static evaluation gate。

继续保留：

```yaml
- name: Audit animations
- name: Run B1 priority pedagogy tests
```

---

# 6. 下一提交范围

建议只修改：

```text
bx1.md
anim/bx1/pursuit.html
anim/bx1/newton-second.html
tests/b1-priority-pedagogy.spec.js
.github/workflows/ci.yml
audit/chief_editor/B1_RE_REVIEW_2026-07-16.md
```

B1-18 动画无需重做，只同步正文一句。

建议提交：

```text
fix(B1): close final priority publication notes
```

---

# 7. 最终裁决

```yaml
OpenAI_Pro_fourth_review: changes_requested_minor

B1_12:
  physics: approved
  pedagogy: pass_with_minor

B1_18:
  physics: approved
  pedagogy: conditional_pass
  approval_after: document_sync

B1_24:
  physics_core: approved
  publication_wording: minor_fix_required
  pedagogy: minor_revise

new_P0: none
priority_batch_approval: pending_minor_changes
chapter_approval: pending
PR_state: keep_draft
```
