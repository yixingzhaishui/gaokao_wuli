# B2 当前 HEAD 物理与教学审核及整改矩阵

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
reviewed_head: d93a022ff904750ae89c0beeb827a9fe33918dfc
review_date: 2026-07-18
review_role: OpenAI Pro 物理专家 / 高中物理教学设计 / 交互教材总编
scope: B2-01..B2-27 正文、动画、测试与 CI
baseline_interaction: 27/27 PASS
content_approval: pending
```

> 说明：`27/27 PASS` 只说明当前动画能够加载并完成既有交互检查，不等于物理内容或教学路径获批。本矩阵是修改前的当前 HEAD 审核基线；修复后必须重新绑定实现提交和测试证据。

## 总裁决

```yaml
physics_P0:
  - B2-08
  - B2-22
physics_P1:
  - B2-03
  - B2-04
  - B2-06
  - B2-12
  - B2-14
  - B2-18
  - B2-23
  - B2-26
chapter_decision: REVISE
development_flow: continue
```

本轮不推倒 B2 现有内容和动画。优先关闭确定物理错误、模型边界和正文—动画矛盾；其余页面保留为后续教学路径精修队列。

## 逐节点审核矩阵

| 节点 | 物理 | 教学 | 当前决定 | 主要证据或问题 | Codex 动作 | 验收条件 | 状态 |
|---|---|---|---|---|---|---|---|
| B2-01 曲线运动条件 | PASS | REVISE | PASS_WITH_MINOR | 核心结论正确；自由控制多于默认引导 | 保留模型，后续补“预测合力方向—观察轨迹弯曲”短路径 | 明确切向分力改速率、法向分力改方向 | DEFERRED |
| B2-02 运动的合成与分解 | PASS | REVISE | PASS_WITH_MINOR | 同一参考系、等时性边界已写明；公式先于证据 | 保留现有交互，后续延迟公式揭示 | 学生能先由分运动预测合运动 | DEFERRED |
| B2-03 平抛/类平抛 | REVISE | REVISE | REVISE | “落地时间只由高度决定”缺同一重力场、忽略阻力等条件 | 补齐条件；区分平抛和类平抛 | 结论不得脱离同一 `g` 和理想模型 | OPEN |
| B2-04 斜抛运动 | REVISE | REVISE | REVISE | 把“类平抛”错误写成斜抛特殊情况；动画按钮也写“类平抛” | 改为“水平抛出（θ=0°）”；解释平抛是重力场斜抛模型的 θ=0° 特例，类平抛属于更一般恒加速度模型 | 正文和动画不再混淆三者 | OPEN |
| B2-05 圆周运动基本量 | PASS | REVISE | PASS_WITH_MINOR | 基本量与单位正确；控制台式呈现 | 保留，后续补默认比较演示 | `v=ωr`、`T=2π/ω` 条件清楚 | DEFERRED |
| B2-06 向心加速度与向心力 | REVISE | REVISE | REVISE | “向心力不改变速率”写成无条件结论 | 明确只有合力纯径向、切向合力为零时速率不变；动画状态同步 | 不把一般曲线运动的合力等同纯向心力 | OPEN |
| B2-07 圆锥摆 | PASS | REVISE | PASS_WITH_MINOR | 对称圆锥摆模型正确 | 保留，后续补角度预测 | 公式限定匀速圆周和理想轻绳 | DEFERRED |
| B2-08 竖直圆周临界 | BLOCKED | BLOCKED | BLOCKED | 动画在重力场中以恒速播放整圈；绳只在最高点附近检查松弛；最低点支持力用错误的同一速度；杆“v=0 过顶”措辞不严 | 以最高点速度为输入，按机械能计算任意位置瞬时速度；任意位置检查 `T≥0`；用真实 `dt`；区分“恰好到达最高点”和“连续通过” | 全程能量一致；绳一旦需要负拉力立即松弛；最低点读数用最低点速度；杆的 `v_top=0` 只作极限/恰到最高点 | OPEN |
| B2-09 万有引力定律 | PASS | REVISE | PASS_WITH_MINOR | 适用对象和质点/球对称边界正确 | 保留 | 不把 `r` 写成表面距离 | DEFERRED |
| B2-10 开普勒定律 | PASS | REVISE | PASS_WITH_MINOR | 行星椭圆轨道与面积定律表达基本正确 | 保留 | 不把圆轨道特例冒充所有椭圆轨道 | DEFERRED |
| B2-11 卫星圆轨道 | PASS | REVISE | PASS_WITH_MINOR | 圆轨道公式和卫星质量约去正确 | 保留 | 明确 `r=R+h`，仅限近似圆轨道 | DEFERRED |
| B2-12 同步/静止卫星 | REVISE | REVISE | REVISE | `T=24 h` 未说明是高中近似；严格应取恒星日 | 正文和动画统一写“约 24 h（严格为一个恒星日）” | 同步、赤道、同向三条件完整 | OPEN |
| B2-13 卫星变轨 | PASS | REVISE | PASS_WITH_MINOR | 变轨速度变化与椭圆转移基本正确 | 保留 | 区分同一点瞬时变速和新轨道圆速度 | DEFERRED |
| B2-14 双星模型 | REVISE | PASS_WITH_MINOR | REVISE | 正文公式损坏为 `Gm1 m2/L²` 的错误排版 | 修复 KaTeX，并检查两星角速度相同、质心关系 | 公式正常渲染且量纲正确 | OPEN |
| B2-15 功 | PASS | REVISE | PASS_WITH_MINOR | 恒力功、正负功边界正确 | 保留 | 变力功不误套 `Fs cosθ` | DEFERRED |
| B2-16 功率 | PASS | REVISE | PASS_WITH_MINOR | 平均/瞬时功率边界基本正确 | 保留 | `P=Fv` 限定瞬时同向分量 | DEFERRED |
| B2-17 机车启动 | PASS | REVISE | PASS_WITH_MINOR | 恒功率与恒加速度阶段模型基本正确 | 保留 | 明确牵引力、阻力和额定功率边界 | DEFERRED |
| B2-18 动能定理 | REVISE | REVISE | REVISE | 推导写成“两式相乘”不严谨；斜面摩擦功缺光滑/滑动、无其他法向分量边界 | 改为代入消元推导；给摩擦式补模型条件 | 推导逻辑正确；`Wf=-μmg cosθ·s` 不被当通式 | OPEN |
| B2-19 重力势能 | PASS | REVISE | PASS_WITH_MINOR | 零势能面和重力功关系正确 | 保留 | 只讨论近地匀强重力场时用 `mgh` | DEFERRED |
| B2-20 弹性势能 | PASS | REVISE | PASS_WITH_MINOR | 弹性限度和形变量边界基本正确 | 保留 | 不把总长度当形变量 | DEFERRED |
| B2-21 机械能守恒 | PASS | REVISE | PASS_WITH_MINOR | 守恒条件基本正确 | 保留 | 先选系统，再判断非保守力功 | DEFERRED |
| B2-22 功能关系 | BLOCKED | REVISE | BLOCKED | 把“摩擦力做功=机械能减少/转化内能”写成通式；静摩擦可正、负或零，摩擦功也不普遍等于生热 | 用 `W_非保守外力=ΔE机` 的系统边界表述；把 `Wf=ΔE机` 限定在固定粗糙斜面、滑块为研究对象、摩擦为唯一其他力的演示；另写 `Q=f_k s相对` | 不再把摩擦功与热量普遍等同；动画明确当前模型限定 | OPEN |
| B2-23 能量守恒 | REVISE | REVISE | REVISE | `E内=-Wf` 仅对当前固定粗糙斜面模型成立；“总能量一定守恒”需系统边界 | 正文和动画写清“滑块+斜面+地球”近似封闭系统；补 `Q=f_k s相对`；用“模型中”限定 `E内=-Wf` | 能量守恒、机械能损失和摩擦生热不混写 | OPEN |
| B2-24 相对论初步 | PASS | REVISE | PASS_WITH_MINOR | 固有时间、长度收缩方向等边界正确 | 保留 | 只在惯性系、匀速相对运动中使用本页公式 | DEFERRED |
| B2-25 离心现象 | PASS | REVISE | PASS_WITH_MINOR | 惯性系/旋转系区分正确 | 保留 | 离心力只作旋转系惯性力 | DEFERRED |
| B2-26 宇宙速度 | REVISE | REVISE | REVISE | 动画把 `16.7 km/s` 作为任意方向的固定太阳系逃逸阈值；第三宇宙速度依赖从地球附近、沿地球公转方向发射等理想条件 | 明确参考系和最省能方向；动画将 16.7 标为教材理想条件，不作一般轨道判定 | 不把任意方向、任意高度的速度直接判为第三宇宙速度 | OPEN |
| B2-27 牛顿力学局限与宇宙观 | PASS | PASS_WITH_MINOR | PASS | 经典、相对论、量子适用尺度区分正确 | 保留 | 不把边界写成绝对数值切线 | VERIFIED |

## 本轮直接整改范围

```text
bx2.md
anim/bx2/oblique-throw.html
anim/bx2/centripetal.html
anim/bx2/vertical-circle.html
anim/bx2/geostationary.html
anim/bx2/work-energy-relation.html
anim/bx2/energy-conservation.html
anim/bx2/cosmic-velocity.html
tests/b2-physics-pedagogy.spec.js
package.json
.github/workflows/ci.yml
```

## 提交验收门槛

- `git diff --check`
- `node scripts/gen-data.js --check`
- `npm run audit:physics:b2`
- B2 受影响动画真实点击/拖动/播放测试
- 390×844 无横向溢出、关键状态可见、无 console error
- `AUDIT_MODULE=bx2` 全章交互审计无 hard failure
- `npm run check`
- 实现提交后在干净工作区重新生成绑定 SHA 的审核证据；证据单独提交

## 当前审批状态

```yaml
engineering_baseline: PASS
physics_review: CHANGES_REQUIRED
pedagogy_review: CHANGES_REQUIRED
B2_content_approval: PENDING
B2_release_gate: BLOCKED_BY_B2_08_AND_B2_22
```

## 整改后工作树复审（待提交绑定）

```yaml
remediation_status: IMPLEMENTED_AND_TESTED_IN_WORKTREE
physics_P0_open: 0
physics_P1_open_in_this_batch: 0
B2_03: PASS
B2_04: PASS
B2_06: PASS
B2_08: PASS
B2_12: PASS
B2_14: PASS
B2_18: PASS
B2_22: PASS_WITH_MODEL_BOUNDARY
B2_23: PASS_WITH_MODEL_BOUNDARY
B2_26: PASS_WITH_IDEAL_DIRECTION_BOUNDARY
targeted_tests: 8/8 PASS
full_B2_interaction: 27/27 PASS
hard_failures: 0
mobile_390x844: PASS
full_repository_gate: PASS
B2_content_approval: PENDING_REMAINING_PEDAGOGY_REVIEW
```

本批已经关闭审核基线中的全部确定物理错误和边界问题：

- B2-08 不再用恒速播放重力场中的整圈运动；当前位置速度由最高点速度和机械能关系得到，绳在任意位置都检查张力非负，失效后转入抛体演示；
- B2-22 不再把摩擦功普遍等同于机械能损失或生热，固定斜面特例和一般系统关系已分开；
- B2-23 明确“滑块 + 固定斜面 + 地球”的近似封闭系统，并以 `Q=fk·s相对` 描述相对滑动生热；
- B2-03、04、06、12、14、18、26 的模型条件、概念归属、公式排版和参考系/方向边界已经同步到正文和动画；
- CI 已增加 `npm run audit:physics:b2`，受影响动画专项测试包含真实点击、播放、状态验证和 390×844 布局检查。

当前仍不把 B2 整章标记为内容终审通过。矩阵中 `DEFERRED` 节点的物理正文可继续使用，但默认演示的预测节点、公式延迟揭示和高考迁移仍需在下一轮逐页教学精修中验收。
