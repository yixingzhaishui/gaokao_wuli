# E8 当前 HEAD 物理、教学与交互初审

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: a7385e49420ff77a3cd7346064614b57ad4379bb
review_date: 2026-07-18
review_role: Codex 物理内容 / 高中物理实验教学 / 交互教材总编初审
scope: E-01..E-26 正文、26 个 anim/exp 页面、当前交互与移动端门禁
chapter_mapping: 第八大章 = 实验专题 = E-01..E-26
development_flow: continue
physics_review: revise
pedagogy_review: revise
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
```

> 本文件审核的是第八大章“实验专题”全部 E-01..E-26：21 项课标学生必做实验、E-02 教学支持实验和 E-09/E-10/E-11/E-13 四项高频拓展。报告绑定上面的精确 HEAD。本轮形成审核基线和机器证据，没有修改教学实现，没有把 `interaction passed · content pending` 擅自改成内容完成，也没有提交或推送。

## 初审总裁决

```yaml
engineering_interaction:
  result: PASS
  experiment_pages: 26/26
  mobile_390x844: 26/26
  hard_failures_generic: 0
physics_CRITICAL:
  - E-03
  - E-10
  - E-15
  - E-18
  - E-23
  - E-25
physics_or_content_MAJOR:
  - E-06
  - E-08
  - E-20
  - E-21
  - E-22
  - E-24
  - E-26
systemic_MAJOR:
  - E-SYS-01
  - E-SYS-02
  - E-SYS-03
  - E-SYS-04
chapter_decision: REVISE
development_flow: continue
content_approval: pending
release_gate: blocked_by_E_03_E_10_E_15_E_18_E_23_E_25
source_gate: all_26_static_examples_quarantined
```

通用交互 100 分只证明 26 页能够加载、点击、拖动、播放、暂停、复位、重入并通过 390×844 布局检查。真实浏览器操作仍复现了弹性限度外伪造有效记录、未稳定扭秤直接反查正确常量、感应电动势始终显示零、传感器比较器读数与输出脱钩等核心实验错误，因此工程 PASS 不能替代物理、实验教学或内容批准。

## 系统级 finding

### E-SYS-01 默认实验路径没有形成“预测—操作—原始数据—处理—结论—迁移”

```yaml
severity: MAJOR
inventory: prediction_entry=3/26; shared_guided_lesson=2/26; no_prediction=23/26
ordinary_path_problem: E-21 and E-23 load in an already-running state; E-23 reveals motion before its native prediction
root_cause: most pages are free parameter consoles; apparatus setup, safety check, zeroing/connection, controlled-variable plan, raw measurement and graph fitting are not staged states
failure_assertion: an observation-task paragraph, sliders, a generated table and a displayed formula count as a complete experiment
pass_assertion: each experiment requires apparatus/safety -> zero/connect -> choose controlled variables -> collect raw readings -> graph/fit -> conclusion -> uncertainty/improvement; evidence remains hidden until prediction and valid operation are complete
approval_impact: all E pedagogy_review remain pending
```

E-15 and E-21 load the shared B3 guide; E-23 has native prediction buttons. This does not close the chapter-level requirement: E-21's capacitor has already been charging behind the prediction veil, E-23 starts moving with “暂停演示” as its initial button, and the other 23 pages expose the answer path immediately.

### E-SYS-02 公式卡在证据前泄露，19 个节点还有学生可见的生成残片

```yaml
severity: MAJOR
inventory: formula_first_use_cards=26/26; cards_before_iframe=26/26; literal_corruption=19/26
corrupt_nodes: E-03,E-04,E-05,E-06,E-08,E-09,E-10,E-11,E-13,E-14,E-15,E-17,E-19,E-21,E-22,E-23,E-24,E-25,E-26
student_visible_token: "；text；"
additional_example: E-10 card renders the absolute-value expression as "：q1q2：" rather than |q1q2|
failure_assertion: the editorial gate passing means the rendered formula card is valid and pedagogically placed
pass_assertion: remove generation artifacts, validate rendered math, and reveal the law only after the default evidence chain; first-use card remains adjacent to the actual first use
approval_impact: editorial and pedagogy approval remain pending
```

### E-SYS-03 多数“实验数据”由待验证公式直接生成

```yaml
severity: MAJOR
representative_nodes: E-03,E-04,E-05,E-06,E-08,E-09,E-10,E-12,E-13,E-14,E-16,E-17,E-18,E-19,E-20,E-24,E-26
original_symptom: the user selects a target constant or error percentage; the page generates measurements from the target law and then reports that the generated data verify the same law
examples: E-08 uses F=m*omega^2*r to create every graph point; E-19 uses Delta_x=L*lambda/d to create the measured fringe spacing; E-24 sets U2=U1*n2/n1 exactly and then reports zero difference
physics_impact: the activity demonstrates a mathematical dependency but presents it as independent experimental evidence
pass_assertion: clearly label ideal-model exploration, or introduce apparatus-level hidden parameters, finite resolution, raw readings and fitting so the conclusion is inferred from data rather than copied from the target formula
approval_impact: interaction evidence authenticity remains pending
```

### E-SYS-04 减少动态只覆盖 2/26

```yaml
severity: MAJOR
reduced_motion_supported: E-15,E-21
unsupported: 24/26
browser_evidence: under prefers-reduced-motion E-15/E-21 pause and expose data-b3-motion=reduce; E-23 still loads with button text "暂停演示"
root_cause: only pages importing anim/bx3/guided-lesson.js inherit the shared motion handling
pass_assertion: all 26 pages provide a static or stepped evidence path, do not auto-run under reduced motion, and retain complete measurement evidence without continuous animation
approval_impact: mobile layout passes; accessibility approval remains pending
```

### 来源与完成度边界

26/26 节点的静态例题区均明确处于“来源审核中”，历史自由文本题继续隔离。当前内容表的 `content pending` 与交互 `partial/passed` 状态没有被自动审核冒充为内容批准。本轮保持这一诚实状态；不得因为 26/26 通用交互通过就发布题源或改成内容完成。

## 发布阻断：CRITICAL

### E-03 超过弹性限度后仍记录理想胡克定律数据

```yaml
severity: CRITICAL
browser_reproduction: keyboard set k=10 N/m, mass=100 g, count=8, elastic limit=4 cm, then click Record
visible_state: F=7.84 N; ideal x=0.784 m; displayed extension=0.300 m; status says the point cannot be used to calculate k
recorded_row: F=7.84 N; x=0.784 m; k=10 N/m
implementation_cause: display softens extension beyond the limit, but recordBtn recomputes x=F/k and k=F/x from the ideal law
physics_impact: the page warns that Hooke's law has failed while saving a point that proves it perfectly; the core elastic-limit evidence is self-contradictory
pass_assertion: beyond-limit deformation and recorded value come from the same nonlinear model, or invalid points cannot enter the fit; regression excludes them using visible evidence
```

### E-10 扭秤未稳定时仍用理论终值反查出正确常量并判通过

```yaml
severity: CRITICAL
browser_reproduction: click Play and read after 20 ms
visible_state: F_theory=0.539 mN; F_read=0.059 mN; inferred k=8.81e9; relative error=2.0%; status=PASS
implementation_cause: visible force multiplies by state.meter, but kMeas and relative error use the settled Fread before state.meter
physics_impact: measurement has not reached one ninth of the final reading, yet the inference ignores the instrument and returns the expected constant
pass_assertion: all inference, graph points and status use the same measured force; unsettled data are marked waiting/invalid and cannot pass
```

### E-15 把指针式欧姆表画成线性电阻刻度

```yaml
severity: CRITICAL
student_visible_failure: equal angular divisions are labelled infinity,80,60,40,20,0 and the needle ratio is computed linearly as 1-scale/100
implementation_cause: drawDial places resistance labels at uniform angles; draw uses a linear resistance-to-deflection mapping
physics_impact: analog ohmmeter current follows I=Eb/(Rinternal+Rx), so its resistance scale is reversed and nonlinear; the page's central reading skill is wrong
pass_assertion: use the internal battery/meter resistance model, render a nonlinear ohm scale with 0 on the right and infinity on the left, and verify multiple scale readings and multiplier changes through real pointer interaction
```

### E-18 `sin r - sin i` 图把 `1/n` 标成 `n`

```yaml
severity: CRITICAL
student_visible_failure: canvas horizontal axis is sin(i), vertical axis is sin(r), the line is drawn as sin(r)=sin(i)/n, but the label says "slope n"
implementation_cause: graph geometry uses y=x/n while the annotation reuses the pointwise ratio n=sin(i)/sin(r)
physics_impact: graphical data processing reverses the slope; students will infer reciprocal refractive index from an otherwise correct plot
pass_assertion: either plot y=sin(i) against x=sin(r) and label slope n, or retain current axes and label slope 1/n;正文、坐标轴、拟合与读数必须同一约定
```

### E-23 法拉第定律、磁极朝向和学生读数同时失真

```yaml
severity: CRITICAL
browser_reproduction: pause, zero, keyboard-set speed, then drag magnet from logical x=250 to x=330; both speed=1 and speed=2 show DeltaPhi=0.000, e=0.00, galvanometer zero
generic_audit_gap: canvas_or_svg_changed=true while physical_readout_changed=false, yet generic result remains PASS
implementation_cause_1: calc uses e=-N*dPhi*speed instead of -N*dPhi/dt; automatic displacement already depends on speed, so speed is counted again
implementation_cause_2: push stores the current phi before draw recalculates, causing the panel and Record action to compare current phi with itself
implementation_cause_3: state pole=N draws N on the magnet's left and S on the coil-facing right side while the UI says N pole faces the coil
physics_impact: Phi-t slope, emf magnitude, galvanometer deflection, current direction, prediction verification and pole geometry cannot be trusted
pass_assertion: one physical timebase drives x(t), Phi(t), dPhi/dt, e, current and deflection; N/S facing geometry matches the label; four pole/motion directions and two speed/turn ratios pass semantic assertions
```

### E-25 显示的比较器电压没有决定继电器输出

```yaml
severity: CRITICAL
browser_reproduction: set hysteresis=0 and threshold=70; at light=40 page shows Us=3.00 V<Uref=3.50 V and lamp working; at light=80 it shows Us=1.00 V<Uref=3.50 V and lamp stopped
implementation_cause: voltage readout is computed from Us=5*(100-L)/100 and Uref=5*T/100, but switching logic compares L with T instead of comparing Us with Uref
physics_impact: two states with the same displayed comparator relation produce opposite outputs; the central sensor -> comparator -> relay causal chain is false
pass_assertion: derive sensor resistance and divider voltage from one model, choose and state comparator polarity, and make hysteresis thresholds in voltage and light domains mathematically equivalent
```

## 节点级 MAJOR

| 节点 | 主要问题 | 关闭条件 |
|---|---|---|
| E-06 | 纸带位置由含“损失百分比”的运动学公式直接生成，再用同一数据宣称验证能量守恒；损失控件不是独立测量量 | 从原始点位和时间算速度/能量，阻力由独立模型产生；拟合、误差和结论不能直接读目标参数 |
| E-08 | 所有 F 数据点直接由 `m*omega^2*r*(1-error)` 生成，背景“拟合直线”还使用固定对角线而非当前数据尺度 | 同一受力/转动模型产生仪器读数和原始数据，真实拟合当前记录并显示斜率、单位与不确定度 |
| E-20 | `trueD=pureM3/trueArea` 使所谓“真实分子大小”随滴数、滴体积、稀释倍数和面积控件共同变化 | 固定材料分子尺度作为隐藏物性，由体积决定理想油膜面积；测量面积和误差再反推 d |
| E-21 | 页面在预测遮罩后已自动充电；共享引导把 `#play` 当“启动”，实际会把初始运行态切成暂停，默认初态和证据时刻不干净 | 初态静止且 Uc=0；验证后显式开始同一充电过程；普通和 reduced-motion 均从相同初态取证 |
| E-22 | “50 分度游标”读数却按 0.05 mm 舍入，并把精度写成 `0.02~0.05 mm`；一种具体仪器没有唯一分度值 | 明确 10/20/50 分度中的一种，刻度几何、对齐格、最小分度、舍入和读数全部一致 |
| E-24 | 图轴把 n2=50 映射到横轴原点却仍声称“过原点”；负载只改变电流，未显示已计算的功率，也不体现正文所述重载压降 | 横轴包含物理 n2=0 原点或明确截断轴；轻载验证与负载/损耗模型分开，读数、功率和边界一致 |
| E-26 | 读数按 `PV=4000*T/300` 随温度变化，理论 P-V 与 P-1/V 曲线却始终用 300 K 的 `C0`；播放还快速压缩但不模拟温升/等待稳定 | 图线使用当前等温温度对应的常量；快速压缩进入非等温失败态，缓慢移动/等待后才允许记录 |

## 逐节点审核矩阵

| knowledge_id | physics_content | pedagogy_review | interaction_qa | mobile_qa | source/examples | content_approval |
|---|---|---|---|---|---|---|
| E-01 | pass_with_minor | revise_systemic | generic pass | pass | pending / quarantined | pending |
| E-02 | pass_with_minor | revise_systemic | generic pass | pass | pending / quarantined | pending |
| E-03 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| E-04 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-05 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-06 | MAJOR | revise | generic pass / evidence fail | pass | pending / quarantined | pending |
| E-07 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-08 | MAJOR | revise | generic pass / graph-semantic fail | pass | pending / quarantined | pending |
| E-09 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-10 | CRITICAL | revise | generic pass / meter-semantic fail | pass | pending / quarantined | blocked |
| E-11 | pass_with_minor | revise_systemic | generic pass | pass | pending / quarantined | pending |
| E-12 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-13 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-14 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-15 | CRITICAL | revise | generic pass / instrument-semantic fail | pass | pending / quarantined | blocked |
| E-16 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-17 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-18 | CRITICAL | revise | generic pass / graph-semantic fail | pass | pending / quarantined | blocked |
| E-19 | pass_with_minor | revise_systemic | generic pass / evidence review | pass | pending / quarantined | pending |
| E-20 | MAJOR | revise | generic pass / model-boundary fail | pass | pending / quarantined | pending |
| E-21 | MAJOR | revise | generic pass / initial-state fail | pass | pending / quarantined | pending |
| E-22 | MAJOR | revise | generic pass / reading-semantic fail | pass | pending / quarantined | pending |
| E-23 | CRITICAL | revise | generic pass / semantic fail | pass | pending / quarantined | blocked |
| E-24 | MAJOR | revise | generic pass / graph-model fail | pass | pending / quarantined | pending |
| E-25 | CRITICAL | revise | generic pass / comparator-semantic fail | pass | pending / quarantined | blocked |
| E-26 | MAJOR | revise | generic pass / temperature-graph fail | pass | pending / quarantined | pending |

## 工程证据与门禁

| 门禁 | 当前结果 | 审核含义 |
|---|---|---|
| `node scripts/gen-data.js --check` | PASS，目录 229 / 进度 229 | 没有重建或覆盖 id-map/progress |
| `npm run check` | PASS；229 节点、206 页、13 章、0 issues，P0/P1 clean | 工程、编辑覆盖、数学、解答隔离、静态回退通过；现有规则未捕获本报告的实验语义问题 |
| `AUDIT_MODULE=exp ... interaction-audit.spec.js` | 26/26 PASS；score 100；hard_failures=0；mobile 26/26 | 通用播放、控件、复位、重入和 390×844 通过，不等于物理语义通过 |
| E8 专项语义探针 | FAIL | E-03、E-10、E-23、E-25 由真实键盘/点击/拖动复现；E-15、E-18 由画面生成逻辑与物理关系核对失败 |
| 静态教学盘点 | 26 节点 / 26 唯一动画；预测入口 3/26；共享引导 2/26；reduced-motion 2/26 | E-SYS-01/04 未关闭 |
| 公式卡盘点 | 26/26 在 iframe 前；19/26 含 `；text；` | E-SYS-02 未关闭 |
| 来源盘点 | 26/26 静态例题仍为“来源审核中” | 没有伪造题源，但训练内容仍为 pending |

机器证据：

- `audit/results/exp-current-a7385e4.json`：26 个 `anim/exp` 页面，绑定提交 `a7385e4`，生成时记录 `worktree_clean=true`、受测文件哈希和 390×844 结果。
- `audit/results/e8-semantic-probes-a7385e4.json`：真实浏览器键盘、点击、canvas 拖动、reduced-motion 与源码—画面语义核对结果。

## 双轨评分

| 评分轨 | 得分 | 裁决 |
|---|---:|---|
| 工程交互基线 | 100/100 | 26 个实验页在通用定义下可操作，390×844 全部通过 |
| 内容与教学审核 | 39/100 | 6 个 CRITICAL、7 个节点级 MAJOR、4 个系统级 MAJOR，不得批准发布 E8 内容 |

内容与教学分项：物理与模型边界 `16/40`、默认实验教学主线 `4/25`、交互证据真实性 `7/20`、移动端与可访问性 `7/10`、来源与治理 `5/5`。来源治理得分只表示隔离和状态口径诚实，不表示已有可发布真题或教师签署。

## 建议整改顺序与关闭条件

1. 先关闭 E-03、E-10、E-15、E-18、E-23、E-25 六个发布阻断；每个失败态建立专项 Playwright 物理/仪器语义断言，不能只改文案、颜色或限制滑块范围。
2. 再关闭 E-06、E-08、E-20、E-21、E-22、E-24、E-26；正文、画面、原始读数、拟合图和判定必须由同一个实验模型产生。
3. 全章清除 19 个公式卡生成残片，并把默认证据顺序调整为预测/操作在前、规律与自由探索在后。
4. 为 26 个实验逐个建立 apparatus/safety、zero/connect、controlled variables、raw data、graph/fit、conclusion、uncertainty/improvement 状态；模拟数据若来自理想模型必须明确标注，不得冒充独立验证。
5. 普通与 reduced-motion 两条路径均从静止可读初态开始；统一播放、暂停、单步、重播、复位和重新预测语义。
6. 复审同时通过 E8 专项语义、26/26 真实控件、390×844、reduced-motion、`node scripts/gen-data.js --check` 和 `npm run check`；自动化全绿后仍按本矩阵逐项人工确认。
7. 真题与训练保持独立来源门禁；找不到完整可靠来源时继续隔离，不得用聚合题库、不可靠 OCR 或改编题填充。

## 当前审批状态

```yaml
engineering_interaction: pass_26_of_26
physics_content: revise
pedagogy_review: revise
interaction_qa: pass_generic_fail_semantic
mobile_qa: pass_26_of_26
accessibility_reduced_motion: fail_2_of_26_supported
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
development_flow: continue
source_gate: blocked_until_source_verified_and_recalculated
teacher_signoff: pending
```

## 2026-07-18 整改复审（实现提交 `3b4983b`）

```yaml
implementation_commit: 3b4983bf850d7ffb977cb6318818bcd90942a671
review_role: Codex 物理内容 / 高中物理实验教学 / 交互教材总编复审
physics_review: pass
pedagogy_review: pass_for_simulated_experiment_flow
engineering_interaction: pass_26_of_26
semantic_regression: pass_9_of_9
reduced_motion: pass_26_of_26
release_gate: engineering_ready
content_approval: pending_source_review
source_gate: all_static_examples_remain_quarantined
teacher_signoff: pending
```

本复审关闭初审列出的 6 个 CRITICAL、7 个节点级 MAJOR 和 4 个系统级 MAJOR。这里的 `engineering_ready` 表示实验章代码、实验语义与默认教学流程可发布到现有开发 PR；它不把隔离题源变成可发布真题，也不替代教师签署。

| finding | 整改状态 | 复审证据 |
|---|---|---|
| E-03 | RESOLVED | 超限后显示/记录采用同一非线性形变，记录标记“超限排除” |
| E-10 | RESOLVED | 反查常量使用当前表针读数；未达 99% 稳定度时拒绝记录并给出反馈 |
| E-15 | RESOLVED | 欧姆挡改为反向非线性刻度，读数、倍率和短接调零使用同一模型 |
| E-18 | RESOLVED | 横轴 `sin r`、纵轴 `sin i`，斜率与正文统一为 `n` |
| E-23 | RESOLVED | 真实位移/时间计算 `ΔΦ/Δt`，磁极朝向、场线、偏转和记录同源 |
| E-25 | RESOLVED | 光敏电阻、分压电压、比较器极性和滞回阈值使用同一电路模型 |
| E-06 | RESOLVED | 显式记录阻力功并验证 `ΔEp≈ΔEk+|W阻|`，不再把有阻力情形判为机械能守恒 |
| E-08 | RESOLVED | 删除预填答案点/固定对角线，至少三组当前记录后才拟合 |
| E-20 | RESOLVED | 固定分子物性 `D0`，由油酸体积决定理想面积，再由测量面积反推 `d` |
| E-21 | RESOLVED | 初态静止、`Uc=0`、按钮为“播放”；重置回到同一静止初态 |
| E-22 | RESOLVED | 50 分度游标的几何、舍入、对齐格和文案统一为 `0.02 mm` |
| E-24 | RESOLVED | 图轴包含物理 `n2=0` 原点，并显示绕组压降、负载端电压和输出功率 |
| E-26 | RESOLVED | 图线使用当前水浴温度的常量；快速移动后等待热平衡才允许记录 |
| E-SYS-01 | RESOLVED | 26 页统一执行装置/安全→预测→测量→作图/拟合→解释/迁移 |
| E-SYS-02 | RESOLVED | 26 节统一为 iframe→公式边界卡→交互证据→目标/原理；19 个 `；text；` 与库仑式伪标记清零 |
| E-SYS-03 | RESOLVED | 全页明确模拟数据身份；重点节点使用仪器状态、有限稳定度、原始记录或当前数据拟合 |
| E-SYS-04 | RESOLVED | 26/26 支持 `prefers-reduced-motion`，默认不自动越过证据阶段 |

复审门禁：

- `npx playwright test tests/e8-remediation.spec.js --workers=1`：9/9 PASS，覆盖 26 页完整阶段、真实键盘/点击/canvas 拖动和上述物理语义。
- `AUDIT_MODULE=exp AUDIT_REPORT=exp-remediated-3b4983b.json ...`：26/26 PASS，score 100，mobile 26/26，hard failures 0；报告绑定实现提交且 `worktree_clean=true`。
- `node scripts/gen-data.js --check`：229 个目录条目与 229 个进度条目一致；没有重建或覆盖完成状态。
- `npm run check`：229 节点、206 页、13 章、0 issues，编辑覆盖、数学、答案隔离、静态回退与 P0/P1 门禁全部通过。

保留边界：320 个题块继续隔离，26 节静态例题仍为“来源审核中”，`content pending` 与教师签署状态不变。

## 发布前跨章兼容复审（2026-07-18）

GitHub CI 在实现提交发布后发现：E-15 多用电表和 E-21 电容器充放电同时承担 B3-18、B3-23 的引导演示；E8 统一引导替换旧脚本后，B3 的预测—验证 DOM 契约不再存在。实现提交 `3532a65bd5cefe1c6a662a6501736085d0e2dbae` 已用单一控件锁和轻量兼容视图恢复跨章契约，避免两个引导脚本同时禁用同一组实验控件。

兼容修复保持两条真实物理证据：B3-18 把被测电路切为带电后明确显示“不通过”；B3-23 把 `R` 从 20 kΩ 调到 40 kΩ 后显示 `τ=4.00 s`。E8 原有装置检查→预测→测量→分析链路没有被短路，公式和读数仍延迟到相应证据阶段。

发布复验：

- `npx playwright test tests/b3-guided-pedagogy.spec.js --reporter=line`：5/5 PASS，含 B3 27 节逐页物理状态、390×844 和减少动态检查。
- `npx playwright test tests/e8-remediation.spec.js --reporter=line`：9/9 PASS，E8 26 页分阶段流程与节点语义保持通过。
- `AUDIT_MODULE=exp AUDIT_REPORT=exp-remediated-3532a65.json ...`：26/26 PASS，score 100，mobile 26/26，hard failures 0；证据绑定 `3532a65`，生成时 `worktree_clean=true`。
- `npm run check`：229 节点、206 页、13 章、0 issues，P0/P1 门禁通过。

发布判定保持 `engineering_ready`；题源审核和教师签署边界不变。
