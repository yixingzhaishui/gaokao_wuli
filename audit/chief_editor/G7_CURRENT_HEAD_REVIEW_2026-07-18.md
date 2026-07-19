# G7 当前 HEAD 物理、教学与交互初审

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: 828d2a73a930cfc5451404874bfe3f6daa356cbd
review_date: 2026-07-18
review_role: Codex 物理内容 / 高中物理教学设计 / 交互教材总编初审
scope: G-01..G-12 正文、11 个 anim/skill 页面、共享 anim/model/compound-field-particle.html、当前交互与移动端门禁
chapter_mapping: 第七大章 = 高考能力专题 = G-01..G-12
development_flow: continue
physics_review: revise
pedagogy_review: revise
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
```

> 本文件审核的是第七大章“高考能力专题” G-01..G-12；紧随其后的“实验专题”属于第八大章。报告绑定上面的精确 HEAD。本轮形成审核基线和机器证据，没有修改教学实现，没有把 `interaction passed · content pending` 或 `status_scope: page_structure_and_interaction_only` 擅自改成内容完成，也没有提交或推送。

## 初审总裁决

```yaml
engineering_interaction:
  result: PASS
  skill_pages: 11/11
  shared_model_pages: 1/1
  mobile_390x844: 12/12
  hard_failures_generic: 0
physics_CRITICAL:
  - G-01
  - G-03
  - G-06
  - G-08
  - G-09
  - G-11
physics_or_content_MAJOR:
  - G-02
  - G-04
  - G-05
  - G-10
  - G-12
systemic_MAJOR:
  - G-SYS-01
  - G-SYS-02
chapter_decision: REVISE
development_flow: continue
content_approval: pending
release_gate: blocked_by_G_01_G_03_G_06_G_08_G_09_G_11
source_gate: all_G_static_examples_quarantined
```

通用交互的 100 分只证明页面能加载、点击、拖动、播放、复位、重入并通过 390×844 布局检查。真实浏览器操作仍复现了同一控件切换仪器量程与单位、磁通量斜率和电动势相差 4 倍、无空气阻力时风改变落点等物理错误，因此工程 PASS 不能替代物理、教学或内容批准。

## 系统级 finding

### G-SYS-01 默认教学路径没有形成“预测—观察—解释—迁移”

```yaml
severity: MAJOR
original_symptom: G-01..G-12 均直接开放公式、实时读数和自由控制，没有先锁定预测再揭示证据的默认路径
inventory: prediction_controls=0/12; guided_lesson_pages=0/12
formula_leakage: G-09,G-10,G-12 的公式首次使用卡位于 iframe 之前
root_cause: 现有专题把方法清单、观察任务和可调实验台当成教学闭环，没有建立逐节点证据状态机
failure_assertion: 有观察任务、公式卡和可动控件就记为 pedagogy PASS
pass_assertion: 每个节点都有主问题、有效预测点、真实状态变化、可读证据、因果解释、边界或反例、迁移与重新预测；默认证据形成前不泄露答案
approval_impact: all G pedagogy_review remain pending
```

### G-SYS-02 减少动态、初态和统一重播路径缺失

```yaml
severity: MAJOR
original_symptom: prefers-reduced-motion=0/12；G-01..G-06 六页载入即持续运动；复位主要依赖页面 reload，重播、重新预测和单步语义不统一
root_cause: 存量专题前六页采用自由运行控制台，后六页才部分采用播放/单步/重置结构
failure_assertion: 手机无横向溢出且存在暂停或重置就视为动画规范通过
pass_assertion: 普通与 reduced-motion 两条路径均可完成；初态静止可读；播放、暂停、单步、重播、复位语义一致；唯一证据不依赖持续运动
approval_impact: mobile layout passes, accessibility and pedagogy approval remain pending
```

### 来源与完成度边界

G-01..G-12 的静态“例题与训练”均明确处于“来源审核中”并隔离。`data/progress.json` 中 12 个节点虽为 `status: done`，但 `status_scope` 全部限定为 `page_structure_and_interaction_only`，物理、题源、例题复算和教学审核仍为 pending，发布仍 blocked。本轮保持这一诚实状态；不得用动画通过或虚构题源把内容改成完成。

## 发布阻断：CRITICAL

### G-01 斜率公式卡把 `y/x` 写成通用斜率

```yaml
severity: CRITICAL
student_visible_failure: 公式卡写“斜率：纵轴量/横轴量”，但正文和画布又正确写 delta_y/delta_x
browser_reproduction: I-U 模式、截距 c=5、A点 U=1 时，页面显示斜率 0.45，而公式卡规则给 y/x=5.45
implementation_cause: anim/skill/graph-slope-area.html:27 使用纵轴量/横轴量的无差分表述；同页非过原点模型为 I=c+0.45U
physics_impact: 专题中心能力被同一页两套互相矛盾的规则定义，直接诱发截距非零图像的典型错解
pass_assertion: 卡片明确写割线 delta_y/delta_x、切线 dy/dx；仅对过原点正比例直线允许 y/x，并用非零截距反例做预测和纠错
```

### G-03 “零误差/倍率”控制会切换仪器量程和单位

```yaml
severity: CRITICAL
student_visible_failure: 保持同一指针读数不变，把“零误差/倍率”滑到左端得到 27.50 A -> 0.330 A；滑到右端变成 27.50 V -> 8.250 V
implementation_cause: anim/skill/instrument-reading.html:46 由 zero 值阈值选择 0.6 A、3 V 或 15 V 量程，并同时复用为卡尺/测微器零误差
physics_impact: 零误差、倍率、量程、仪器类型四个独立概念被一个滑块混合；正文要求的欧姆表非线性刻度和换挡调零也没有对应实验
pass_assertion: 仪器、量程/倍率、机械零误差和欧姆调零分别建模；刻度几何必须唯一决定读数，并用真实浏览器读数断言核对主尺、游标、半毫米线、表盘比例和单位
```

### G-06 圆周最高点的约束力箭头方向相反

```yaml
severity: CRITICAL
student_visible_failure: 页面用 N/m=v^2/R-g 和 v_critical=sqrt(gR) 描述内轨最高点，但蓝色 N 箭头沿半径向外；在最高点画成向上，而公式要求约束力指向圆心向下
implementation_cause: anim/skill/extreme-critical.html:49 使用 position + radial unit vector 绘制 N，没有指向圆心；同一个最高点 N 数值还随小球绕整圈保持不变
physics_impact: 受力图与临界方程方向矛盾；v<v_critical 时页面仍让小球沿完整圆周运动，没有脱离轨道
pass_assertion: 先明确绳、内轨、外轨或杆模型；约束力方向、允许符号、逐位置动力学和脱离后的轨迹一致；最高点专项断言核对力向量与 N=0 边界
```

### G-08 弹簧压缩几何与能量平方关系不一致

```yaml
severity: CRITICAL
student_visible_failure: 单步到 t=6.00 s 时 K=3 J、Ep=3 J、碰后能量=6 J；真实压缩应为最大值的 sqrt(1/2)=0.707，画面却只压到 0.5
implementation_cause: anim/skill/energy-momentum-combo.html:86,97 用 Ep/K_after 直接作为压缩比例，而 Ep=1/2 kx^2
physics_impact: 页面声称弹簧压缩、动能和弹性势能同步变化，实际几何证据违反平方关系；公式卡中的 v 与 v-prime 也未保持统一定义
pass_assertion: 由 x=sqrt(2Ep/k) 驱动画面位置和弹簧几何；公式统一定义碰后初速与压簧中瞬时速度，并对 25%、50%、100% 能量状态建立断言
```

### G-09 磁通量斜率、电动势和安培力方向来自不同运动尺度

```yaml
severity: CRITICAL
student_visible_failure: 默认单步 0.25 s，Phi 从 0.084 Wb 变为 0.14025 Wb，页面自身记录的斜率为 0.225 Wb/s，却显示 epsilon=0.90 V；向右运动时 F 数值为负，画面箭头却因再次取负而指向右
implementation_cause: model() 用 d(position)/dt=v 计算 BLv；step/loop 实际用 d(position)/dt=v/4；绘图又用 rodX-F*18，把应向左的负 F 画向右
physics_impact: Phi-t 图像、法拉第定律、安培力方向和能量链不再是同一过程，中心证据自相矛盾
pass_assertion: 位置使用有单位的 x，唯一 dx/dt 同时驱动 Phi=BLx、epsilon=-dPhi/dt、I、F 和 P；左右运动专项断言核对差分斜率、数值和箭头方向
```

### G-11 声称忽略空气阻力，却让风速直接改变落点

```yaml
severity: CRITICAL
student_visible_failure: 无人机投放模式明确显示“忽略空气阻力”，但把风速从 0 调到 5 m/s 后落点由 40.41 m 变为 50.51 m
implementation_cause: anim/skill/real-world-modeling.html:73,83 直接令水平速度 v_x=v_0+u，同时又声明包裹只受重力
physics_impact: 风对物体的作用必须通过空气相互作用；无阻力模型下加入风速是物理自相矛盾
pass_assertion: 二选一：无阻力模型删除风控件且 v_x=v_0；或建立有来源和适用边界的相对空气速度/阻力模型，再让风通过空气力改变轨迹
```

## 节点级 MAJOR / PASS

| 节点 | 裁决 | 主要问题或通过依据 | 关闭条件 |
|---|---|---|---|
| G-02 | MAJOR | 异常点在生成时预先标为 `bad`，按钮可无证据地一键剔除；5% 被写成跨实验通用“结论可信”阈值 | 先用残差、重复测量或装置原因形成证据，再决定保留/剔除；评价阈值来自题设或不确定度模型 |
| G-04 | MAJOR | 修正后表格仍显示修正前 `raw-true` 误差；2% 被当成通用可信度门槛 | 表格、平均值和误差使用同一修正数据；按测量要求/不确定度解释，不设无来源统一阈值 |
| G-05 | MAJOR | 数值公式可区分内外接误差，但所谓“原理图”没有画出电压表支路和两种滑变器拓扑；也没有量程、过载或额定值控制 | 真实改变接线拓扑，显示 RA/RV/量程/额定值和安全边界；方案结论由同一电路求解器产生 |
| G-07 | physics PASS | 分段加速—匀速—制动的接续速度、时间、位移和 v-t 面积关系一致 | 仍需关闭 G-SYS-01/02 并完成教学签署，不能单独标内容完成 |
| G-10 | MAJOR | 真实控件和移动端通过，但 `abs(relative deviation)<4%` 在没有测量分辨率模型时被判“直线通过”；共享模型页还需纳入 G 专项回归 | 精确物理条件与实验容差分层表达；若保留容差，定义屏宽、狭缝或探测器分辨率并据此判定 |
| G-12 | MAJOR | 高度与速度可任意独立选择；2000 km、1 km/s 仍被称为“轨道”并输出 876.5 min，未区分几何周长/速度和引力圆轨道可行性；轨道模式的 eta 控件无物理作用 | 明确材料只给定运动学圆周，或由引力条件约束 v=sqrt(GM/r)；删除无效控件并加入数量级/可行性检查 |

## 逐节点审核矩阵

| knowledge_id | physics_content | pedagogy_review | interaction_qa | mobile_qa | source/examples | content_approval |
|---|---|---|---|---|---|---|
| G-01 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| G-02 | MAJOR | revise | generic pass / semantic review | pass | pending / quarantined | pending |
| G-03 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| G-04 | MAJOR | revise | generic pass / semantic fail | pass | pending / quarantined | pending |
| G-05 | MAJOR | revise | generic pass / circuit-semantic fail | pass | pending / quarantined | pending |
| G-06 | CRITICAL | revise | generic pass / vector-semantic fail | pass | pending / quarantined | blocked |
| G-07 | pass | revise_systemic | generic pass | pass | pending / quarantined | pending |
| G-08 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| G-09 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| G-10 | MAJOR | revise | real controls pass / tolerance review | pass | pending / quarantined | pending |
| G-11 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| G-12 | MAJOR | revise | generic pass / model-boundary fail | pass | pending / quarantined | pending |

## 工程证据与门禁

| 门禁 | 当前结果 | 解释 |
|---|---|---|
| `node scripts/gen-data.js --check` | PASS，目录 229 / 进度 229 | 没有重建或覆盖 id-map/progress |
| `npm run check` | PASS | strict、editorial、math、solution quarantine、static fallback、P0/P1 gate 全绿 |
| G 自有页面真实交互 | 11/11，score 100，hard_failures=0 | 报告绑定 `828d2a7`，生成时 `worktree_clean=true` |
| G-10 共享模型真实交互 | PASS | 390×844 下速度、正负电荷、播放、记录、复位均实操通过，无横向溢出 |
| G 专项语义探针 | FAIL | G-01、03、08、09、11、12 复现失败态；G-10 工程通过但容差边界待修 |
| 静态教学盘点 | 12 节点、12 个唯一页面；预测 0/12；guided lesson 0/12；reduced motion 0/12 | G-SYS-01/02 未关闭 |
| 来源盘点 | 12/12 静态例题区保持“来源审核中” | 没有伪造题源，但训练内容仍为 pending |

机器报告：

- `audit/results/g7-skill-current-828d2a7.json`：11 个 `anim/skill` 页面，绑定提交 `828d2a7`，生成时记录 `worktree_clean=true`、受测文件哈希和 390×844 结果。
- `audit/results/g7-semantic-probes-828d2a7.json`：真实浏览器点击、键盘、单步、选择、记录、复位与移动端失败态/通过态。

## 双轨评分

| 评分轨 | 得分 | 裁决 |
|---|---:|---|
| 工程交互基线 | 100/100 | 12 个唯一页面均可操作，390×844 全部通过 |
| 内容与教学审核 | 36/100 | 6 个 CRITICAL、5 个节点级 MAJOR、2 个系统级 MAJOR，不得批准发布 G 内容 |

内容与教学分项：物理与模型边界 `14/40`、默认教学主线 `2/25`、交互证据真实性 `8/20`、移动端与可访问性 `7/10`、来源与治理 `5/5`。来源治理得分只表示隔离和状态口径诚实，不表示已有可发布真题或教师签署。

## 建议整改顺序与关闭条件

1. 先关闭 G-01、G-03、G-06、G-08、G-09、G-11 六个发布阻断；每个失败态建立专项 Playwright 物理语义断言，不能只改标签、颜色或限制控件范围。
2. 再关闭 G-02、G-04、G-05、G-10、G-12；所有“可信/通过/应剔除/应选接法/轨道成立”判决必须来自同一模型、明确边界和可观察证据。
3. 逐节点关闭 G-SYS-01：建立预测、真实变化、证据、解释、边界、迁移和重新预测；G-09/G-10/G-12 的公式不能在默认证据形成前抢答。
4. 关闭 G-SYS-02：初态静止可读，普通与 reduced-motion 两条路径均完成，统一播放、暂停、单步、重播、复位语义。
5. 复审同时通过 G 专项物理语义、12 个唯一页面真实控件、390×844、reduced-motion、`node scripts/gen-data.js --check` 和 `npm run check`；自动化全绿后仍按本矩阵逐项人工确认。
6. 真题与训练保持独立来源门禁；找不到完整可靠来源时继续隔离，不得用聚合题库、不可靠 OCR 或改编题填充。

## 当前审批状态

```yaml
engineering_interaction: pass_12_of_12_unique_pages
physics_content: revise
pedagogy_review: revise
interaction_qa: pass_generic_fail_semantic
mobile_qa: pass_12_of_12
accessibility_reduced_motion: fail_0_of_12_pages
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
development_flow: continue
source_gate: all_static_examples_quarantined
teacher_signoff: pending
```
