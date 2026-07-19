# X2 当前 HEAD 物理、教学与交互初审

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: 6b2595c0aa37a1a09e0c50ed5a406bc031f87021
remediation_head: 493915057b85e2cbe5fedd1650ccc6f9949741c5
review_date: 2026-07-18
remediation_date: 2026-07-18
review_role: Codex 物理内容 / 高中物理教学设计 / 交互教材总编初审
scope: X2-01..X2-24 正文、22 个 anim/xb2 动画、当前交互与移动端门禁
chapter_mapping: 第五大章 = X2 = 选择性必修2
development_flow: continue
physics_review: pass_after_remediation
pedagogy_review: pass_after_remediation
content_approval: pending
release_gate: pass_for_code_publication
review_status: remediation_complete_pending_source_and_teacher_signoff
```

> 本文件审核的是第五大章 X2（选择性必修二），不是 B1/B2/B3，也不是 X1。报告绑定上面的精确 HEAD；本轮只形成审核基线和机器证据，没有修改教学实现，没有把任何 `interaction passed · content pending` 擅自改成完成。

## 初审总裁决

```yaml
engineering_interaction:
  result: PASS
  pages: 22/22
  mobile_390x844: 22/22
  hard_failures: 0
physics_CRITICAL:
  - X2-05
  - X2-06
  - X2-11
  - X2-12
  - X2-17
  - X2-21
  - X2-24
physics_or_content_MAJOR:
  - X2-04
  - X2-07
  - X2-15
  - X2-19
  - X2-22
systemic_MAJOR:
  - X2-SYS-01
  - X2-SYS-02
chapter_decision: REVISE
development_flow: continue
content_approval: pending
release_gate: blocked_by_X2_05_X2_06_X2_11_X2_12_X2_17_X2_21_X2_24
source_gate: 24_of_24_examples_quarantined_pending_source_review
```

工程门禁的 100 分只证明页面能够加载、播放、暂停、复位、改变控件、重入并通过 390×844 的通用布局检查。真实操作已经复现正电荷转向、临界轨迹、导轨端点、自感断路和能量流等物理错误，因此工程 PASS 不能替代内容批准。

## 系统级 finding

### X2-SYS-01 默认教学路径没有形成“预测—观察—解释—迁移”

```yaml
severity: MAJOR
original_symptom: X2-01..X2-24 均有观察/证据任务，但 24/24 没有先锁定预测再揭示证据的默认路径；22 个动画均以自由控制台为主
root_cause: 存量页面把“可调参数 + 实时读数”当成教学闭环，尚未逐节点建立证据状态机
affected_nodes: X2-01..X2-24
failure_assertion: 有观察任务、公式绑定和可动控件就记为 pedagogy PASS
pass_assertion: 每个节点都有主问题、1至3个有效预测点、真实状态变化、可读证据、因果解释、边界/反例、迁移与重新预测；公式不在默认证据形成前抢答
approval_impact: all X2 pedagogy_review remain pending
```

公式顺序静态检查还发现 X2-13、X2-20、X2-21、X2-23 的“公式首次使用卡”位于现象或交互证据之前。X2-22、X2-24 虽未被简单位置脚本判中，但公式卡也插在证据任务尚未完成的位置，整改时必须按实际教学顺序复核，不能只移动标题。

### X2-SYS-02 减少动态和明确重播路径缺失

```yaml
severity: MAJOR
original_symptom: prefers-reduced-motion 0/22；明确教学重播入口 0/22；多数页面载入即连续运动或把复位当作重播
root_cause: 动画只有普通连续播放/暂停状态，没有减少动态分支和可重复的分步证据状态
affected_animations: anim/xb2/*.html
failure_assertion: 390x844 无横向溢出且有暂停/重置就视为动画规范通过
pass_assertion: 普通与 reduced-motion 两条路径均可完成；初态、播放、暂停、单步、重播、复位语义一致；唯一证据不依赖持续运动
approval_impact: mobile layout passes, accessibility and pedagogy approval remain pending
```

### 来源与完成度边界

X2-01..X2-24 的“例题与训练”均明确处于“来源审核中”，当前学生可见真题数为 0。隔离策略是正确的发布治理，但它也意味着本章尚不能宣称题源和训练内容完成；修物理动画时不得伪造题源、改编成“真题”或把来源隔离状态改成完成。

## 逐节点审核矩阵

共同状态：所有节点 `development_flow=continue`，所有节点 `content_approval=pending`。表中“通用 PASS”只指 `interaction-audit.spec.js` 的工程断言，“章阻断”表示该节点本身未发现 CRITICAL，但整章仍不能发布。

| ID | concrete_findings / physics_content | pedagogy_review | interaction_qa / mobile_qa | approval / gate | acceptance_checks |
|---|---|---|---|---|---|
| X2-01 磁场与磁感线 | 核心定性关系基本正确；探针 `|B|` 显示无单位的模型数值，需明确“相对强度”而非实测特斯拉值，`MINOR` | `MAJOR`：自由拖动，没有预测暂停 | 通用 PASS；390×844 PASS | pending / 章阻断 | 先预测磁针方向，再拖探针验证；定量读数必须给单位和模型，或改称相对强度 |
| X2-02 磁感应强度 | 定义式及垂直条件基本正确；与 X2-03 共用同一动画，需确保本节点只突出 B 的测量定义，`pass_with_minor` | `MAJOR`：公式和全控件先于证据 | 通用 PASS；手机 PASS | pending / 章阻断 | 先固定 I、L 比较 F，再在 θ=90° 推出定义；θ=0 时明确不能据该次受力测 B |
| X2-03 安培力 | `F=BILsinθ`、最大/零值和左手定则主线基本正确，`pass_with_minor` | `MAJOR`：无方向预测关卡 | 通用 PASS；手机 PASS | pending / 章阻断 | 用 I/B 反向形成四组预测；大小证据和方向证据分开核验 |
| X2-04 洛伦兹力 | `MAJOR`：正文把力的大小写成 `qvBsinθ` 而非 `|q|vBsinθ`，负电荷会产生“负的大小”；正文还称光点只沿速度方向运动，与当前三维轨迹证据不一致 | `MAJOR`：负电荷反向没有先预测 | 通用 PASS；手机 PASS | pending / 章阻断 | 大小统一用 `|q|`，方向单独由符号判断；正文与动画的直线/圆周/螺旋状态一致 |
| X2-05 带电粒子在磁场中运动 | `CRITICAL`：B 向里时，正电荷在画布上按顺时针运动，却标“逆时针”；速度箭头与始终指向圆心的力箭头不满足 `F=qv×B`。正文半径、周期也应使用 `|q|` | `MAJOR`：错误方向成为默认演示证据 | 通用脚本 PASS；真实单步物理 FAIL；手机 PASS | pending / node blocked | 正电荷 B 向里必须逆时针、负电荷反向；每个相位验证 `v⊥F`、F 指向圆心且符号符合叉乘 |
| X2-06 磁场圆周临界 | `CRITICAL`：`R<L` 时轨迹只画到圆的右端 90°转折点并停止，界面却称“返回左侧”；圆心角固定报 90°，导致时间证据错误 | `MAJOR`：错误轨迹直接承担临界和时间教学 | 通用脚本 PASS；真实拖轨迹物理 FAIL；手机 PASS | pending / node blocked | `R<L` 必须继续完整半圆回到左边界并报告 180°；`R≥L` 再按交点几何计算出射角和时间 |
| X2-07 磁通量 | `MAJOR`：把磁通量直接定义成“磁感线条数”，易把人为辅助线当实体计数；`Φ=BScosθ` 未紧邻限定匀强磁场、平面面积及有向法线 | `MAJOR`：先给结论后转线圈 | 通用 PASS；手机 PASS | pending / 章阻断 | 将“条数”降为直观类比；给出均匀场/平面/有向面积边界，并用非均匀场提示积分拓展而不硬套 |
| X2-08 电磁感应现象 | 闭合回路且磁通量变化才有感应电流、开路仍可有感应电动势的主线正确，`pass_with_minor` | `MAJOR`：与 X2-09 共用控制台且无先判“有/无电流” | 通用 PASS；手机 PASS | pending / 章阻断 | 先判回路闭合和 Φ 是否变化，再揭示电流计；增加开路有电动势无电流的反例 |
| X2-09 楞次定律 | “阻碍变化而非阻止变化”、增反减同主线基本正确，`pass_with_minor` | `MAJOR`：口诀先于逐步方向证据 | 通用 PASS；手机 PASS | pending / 章阻断 | 分别锁定原磁通变化、感应 B、线圈磁极、电流方向四步；N/S 靠近/远离四态均验证 |
| X2-10 法拉第定律 | 平均电动势、瞬时变化率和匝数主线正确；动画把拖动事件间隔直接当物理 `Δt`，读数依赖指针事件采样，`MINOR` | `MAJOR`：公式先于定量比较 | 通用 PASS；手机 PASS | pending / 章阻断 | 用明确物理时间或受控变化速度生成 `ΔΦ/Δt`；比较同一 ΔΦ 不同 Δt，再显示公式 |
| X2-11 导轨模型 | `CRITICAL`：导体棒顶到导轨端点后位置被钳住，速度控件仍为 5 m/s，E、I、F、P 仍非零；“安培阻力总是阻碍棒运动”还缺闭合无源被动回路边界 | `MAJOR`：静止画面和非零动生电动势互相矛盾 | 通用脚本 PASS；真实端点状态物理 FAIL；手机 PASS | pending / node blocked | 到端点须停止并令 v/E/I/F/P 一致归零，或实现真实反弹/继续导轨；外加电源情形不得套“总是阻碍” |
| X2-12 自感 | `CRITICAL`：画面是灯泡、线圈、开关单串联回路；开关断开后没有闭合续流路径，却仍让电流按 `τ=L/R` 衰减并人为把灯泡点得更亮。正文把“断电灯必闪亮”写成普遍结论 | `MAJOR`：虚构现象承担核心证据 | 通用脚本 PASS；真实拨动开关物理 FAIL；手机 PASS | pending / node blocked | 重画有明确闭合放电支路的电路并据总电阻计算，或在单串联断路模型中展示开关电弧/高压；不得无回路点亮灯泡 |
| X2-13 互感 | 四步因果链和稳恒直流无持续副边电动势基本正确，`pass_with_minor` | `MAJOR`：公式卡位于现象/证据前，尽管正文又要求“不要先背” | 通用 PASS；手机 PASS | pending / 章阻断 | 先完成 I₁→B→Φ₂→E₂ 证据链，再揭示互感式；绕向和参考正方向决定符号 |
| X2-14 交流电的产生 | 正弦相位、峰值和频率主线基本正确；“匀速转动就输出标准正弦”需限定线圈在匀强磁场、固定轴和理想几何中，`MINOR` | `MAJOR`：缺 Φ/e 相位预测 | 通用 PASS；手机 PASS | pending / 章阻断 | 先预测 Φ 最大/过零处 e，再用斜率验证；补理想正弦产生条件 |
| X2-15 交流电四值 | `MAJOR`：把 `2U_m/π` 泛称“平均值”，没有先说明完整周期有符号平均值为 0；“求电荷量用平均值”缺具体时间区间、磁通变化和总电阻条件 | `MAJOR`：动画虽写“半周期平均值”，正文未建立边界 | 通用 PASS；手机 PASS | pending / 章阻断 | 明确全周期有符号平均为 0；半周期/整流平均分别命名；`q=N|ΔΦ|/R总` 写清过程、方向/大小和区间 |
| X2-16 变压器 | 理想变压器电压比、电流比和功率关系正确；“只能变交流”应收窄为稳恒直流不能持续变压，理想源/负载极值需明确不含内阻与容量限制，`MINOR` | `MAJOR`：没有先由互感证据判断副边响应 | 通用 PASS；手机 PASS | pending / 章阻断 | 稳恒 DC、通断瞬间和 AC 分态；极端负载显示理想模型边界，不能暗示实际设备可无限供能 |
| X2-17 远距离输电 | `CRITICAL`：允许 `P=500 kW,U=1 kV,r=50Ω`，按当前公式得到 500 A、线路损耗 12500 kW、压降 25 kV，均超过输入；只把用户功率钳到 0，仍显示不自洽读数 | `MAJOR`：无效状态被当成定量证据 | 通用脚本 PASS；真实拖到 1 kV 已到 100% 损耗边界；手机 PASS | pending / node blocked | 参数必须保证 `P损<P`、`ΔU<U`，否则显式拒绝；或改用自洽的发送端—线路—负载电路求解，不得静默钳位 |
| X2-18 传感器 | 分压链条正确；热敏电阻只模拟 NTC，应明确“本例为 NTC”，不能把所有热敏元件概括为温升阻降，`MINOR` | `MAJOR`：直接操作而无取样端预测 | 通用 PASS；手机 PASS | pending / 章阻断 | 先选取样端并预测 Uout 方向；区分 NTC/PTC，阈值逻辑与执行器的高/低有效必须写清 |
| X2-19 涡流、电磁阻尼与驱动 | `MAJOR`：“电磁驱动”模式称旋转磁场驱动，代码却让金属盘中心左右平移并复用阻尼盘图形，没有形成旋转磁场、转差和转矩证据；百分比读数是无量纲示意模型 | `MAJOR`：伪驱动动画替代机制解释 | 通用 PASS；手机 PASS | pending / 章阻断 | 驱动模式必须展示移动/旋转磁场与导体的相对运动、涡流和同向追随转矩；无定量模型时删除伪精确百分比 |
| X2-20 LC 电磁振荡 | 理想 LC 方程和能量守恒模型基本正确，`pass_with_minor` | `MAJOR`：周期公式卡位于现象和交互之前 | 通用 PASS；手机 PASS | pending / 章阻断 | 先预测 q 最大时 i/能量，再用相位探针验证；证据后揭示公式，并以实际阻尼作边界 |
| X2-21 麦克斯韦电磁场理论 | `CRITICAL`：底部同一坐标图把蓝 E 画为 `gy-val`、红 B 画为 `gy+val`，视觉上反相，却标“E、B 同相”；读数又把不同量纲的 E、B 显示成同一无单位数值 | `MAJOR`：错误图像承担相位证据 | 通用脚本 PASS；手机 PASS | pending / node blocked | 同一符号约定下 E/B 波峰与过零必须同步；若归一化须标相对量，并说明真空振幅关系 `E=cB`；同时核验 `E×B` 传播方向 |
| X2-22 电磁波发射、传播与接收 | `MAJOR`：状态只按合成强度判断原因；当 `f₀=fᵣ` 但距离大时强度可低于阈值，仍错误提示“调谐偏离”，把传播衰减误诊为频率失配 | `MAJOR`：原因标签覆盖实际参数证据 | 通用 PASS；手机 PASS | pending / 章阻断 | 独立判断频差和距离衰减；同频远距显示“已调谐但传播衰减”，失谐近距显示“频率失配” |
| X2-23 电磁波谱 | `c=λf`、`E=hf` 和波段顺序基本正确；波段边界为约定近似，应在界面注明而非表现为精确硬边界，`MINOR` | `MAJOR`：公式卡位于技术情境/证据前 | 通用 PASS；手机 PASS | pending / 章阻断 | 先比较频率、波长和能量趋势，再揭示公式；边界标“约”，防护提示区分强度、剂量和光子能量 |
| X2-24 发电机、电动机与能量转化 | `CRITICAL`：能量流数值由彼此无关的经验式拼出，无单位也不守恒；真实设置负载 0%、线圈到峰值相位时显示“机械能输入 0.0、电能输出 2.9” | `MAJOR`：伪能量读数直接违背本节点主问题 | 通用脚本 PASS；真实拖线圈物理 FAIL；手机 PASS | pending / node blocked | 以同一电路/力矩模型计算输入、输出、损耗并守恒；发电机开路可有电动势但电功率为 0，带载后机械功率不得小于电输出 |

## CRITICAL / MAJOR 可复现证据

| Review ID | 真实操作或静态边界 | 当前观测 | 应有验收断言 |
|---|---|---|---|
| X2-05 | B 保持向里、正电荷，点击“单步” | 粒子沿画布顺时针前进；界面写“正电荷：逆时针”，v、F 与 `qv×B` 不一致 | 正电荷逆时针、负电荷顺时针；逐相位核验叉乘方向、垂直性和向心性 |
| X2-06 | 真实拖虚线轨道到 `R=6.5 cm<L=9.0 cm` | 红色轨迹停在圆的右端，读数 `θ=90°`，文字却称“返回左侧” | 轨迹继续到左边界，回返半圆 `θ=180°`，时间与实际弧长一致 |
| X2-11 | 保持 `v=5.0 m/s` 播放，等待棒到右端 | 棒画在端点不再位移，仍显示 `E=1.74 V,I=0.87 A,F=0.30 N,P=1.51 W` | 端点约束与速度/电磁量一致，或实现有物理依据的后续运动 |
| X2-12 | 暂停自动通断，闭合 1.2 s 后真实点击断开，约 0.12 s 读取 | 开关画面断开，唯一串联回路开路，仍显示 `I=2.04 A` 且灯泡发亮 | 没有闭合路径不得让灯泡承载续流；电路拓扑、微分方程和画面一致 |
| X2-17 | 真实把电压点拖到 `U=1.0 kV`；再审查页面允许的 P/r 上限 | 默认已到 `P损=P=100 kW,ΔU=U=1 kV,用户功率=0`；上限组合进一步得到损耗 12500 kW、压降 25 kV | 触及或越过可行边界时拒绝参数或采用自洽电路求解，不输出超输入功率 |
| X2-21 | 对照同一底图中的蓝 E、红 B 曲线和“同相”标题 | 蓝色波峰同时对应红色波谷，视觉为反相；文字与读数称同相 | 同一符号/坐标约定下峰、谷和零点同步，并标归一化或物理单位 |
| X2-24 | 把负载控件设为 0%，真实拖线圈到 `θ≈1.55 rad` | `e=2.88 V`，能量流写“机械能输入 0.0、电能输出 2.9” | 开路时输出电功率为 0；带载时同一模型满足输入=输出+损耗 |
| X2-19 | 切到“电磁驱动”并播放 | 代码仅令圆盘中心 `x=260+sin(t)·34` 左右平移，未显示旋转磁场或驱动转矩 | 驱动页必须有相对磁场运动、感应电流与追随转矩的可观察因果链 |
| X2-22 | 设置 `f₀=fᵣ=100 MHz,d=100 km` | 合成强度约 55%，状态错误归因为“调谐偏离” | 同频但远距应判“调谐成功、传播衰减”；原因标签由独立变量决定 |

## 关键实现证据定位

- `anim/xb2/magnetic-circle.html:125-127,157,162`：正电荷标签、速度切向量、单步和连续相位方向不一致。
- `anim/xb2/magnetic-critical.html:54,68-69`：`R<L` 强制 `θ=90°`，终点固定为圆的右端。
- `anim/xb2/rail-rod.html:61,139`：E 只看速度控件，位置到端点仅钳位 `xRod`，没有把 v 归零。
- `anim/xb2/self-induction.html:48-55,65-97`：断路后仍按 `τ=L/R` 衰减并人为增加灯泡 `flash`，画面没有续流支路。
- `anim/xb2/power-transmission.html:27-29,51-55`：参数范围允许不可行组合，`userP()` 仅用 `max(0,...)` 隐藏负功率。
- `anim/xb2/maxwell-em-theory.html:40-41`：红/蓝曲线的屏幕 y 符号相反，文案却称同相。
- `anim/xb2/em-wave-transmission.html:35,41`：状态把频差和距离合成后只归因为调谐。
- `anim/xb2/generator-motor.html:38,47-48`：能量输入输出由无关经验式生成，并作为能量流显示。

## 当前自动化与真实操作证据

| 命令 / 操作 | 结果 | 审核含义 |
|---|---|---|
| `npm run check` | PASS；229 节点编辑/数学/解答隔离/静态回退门禁通过；206 页、13 章、0 issues | 仓库工程与发布隔离门禁通过；现有规则没有捕获本报告的物理语义和教学问题 |
| `AUDIT_MODULE=xb2 AUDIT_REPORT=xb2-current-6b2595c.json npx playwright test tests/interaction-audit.spec.js --workers=1` | 22/22 PASS；score 100；0 blocked；0 hard failure；22/22 `mobile_passed=true` | 通用播放、暂停、复位、控件、重入和 390×844 布局通过，不等于物理语义通过 |
| in-app browser 真实点击/拖动 | 复现 X2-05、06、11、12、17、24 的方向、轨迹、回路、边界和能量错误 | 证明错误存在于学生实际可见路径，不是纯代码猜测 |
| X2 静态教学盘点 | 24 节点、24 iframe；预测暂停 0/24；22 动画 `prefers-reduced-motion` 0/22；明确教学重播 0/22 | X2-SYS-01/02 尚未关闭 |
| 来源盘点 | 24/24 节点例题均为“来源审核中”并隔离 | 没有伪造题源，但题源与训练完成度仍为 pending |

机器报告：`audit/results/xb2-current-6b2595c.json`。它绑定提交 `6b2595c0aa37a1a09e0c50ed5a406bc031f87021`，生成时记录 `worktree_clean=true`、测试命令和受测文件哈希。

## 双轨评分

| 评分轨 | 得分 | 裁决 |
|---|---:|---|
| 工程交互基线 | 100/100 | 22 个动画在通用定义下可操作，390×844 全部通过 |
| 内容与教学审核 | 41/100 | 7 个 CRITICAL、5 个节点级 MAJOR、2 个系统级 MAJOR，不得发布 |

内容与教学分项：物理与模型边界 `17/40`、默认教学主线 `4/25`、交互证据真实性 `8/20`、移动端与可访问性 `7/10`、来源与治理 `5/5`。来源治理得分只表示历史自由文本题被诚实隔离，不表示已有可发布真题。

## 建议整改顺序与关闭条件

1. 先关闭 7 个发布阻断：X2-05、X2-06、X2-11、X2-12、X2-17、X2-21、X2-24；每个失败态都建立专项 Playwright 语义断言，不能只改标签。
2. 再关闭节点 MAJOR：X2-04、X2-07、X2-15、X2-19、X2-22；同时处理矩阵中各节点的模型边界和正文—动画一致性。
3. 最后逐节点关闭 X2-SYS-01/02：为 24 个节点分别补预测、真实变化、证据、解释、边界、迁移、重播和减少动态路径，而不是只加一个统一说明框。
4. 复审需同时通过专项物理语义、22 个动画真实控件、390×844、`prefers-reduced-motion`、`node scripts/gen-data.js --check`、`npm run check`；自动化全绿后仍按本矩阵逐项人工确认。
5. 真题和训练保持独立来源门禁：只有可靠来源、原题文本、答案独立复算和教师签署完成后，才可从隔离区发布。

## 当前审批状态

```yaml
engineering_interaction: pass_22_of_22
physics_content: revise
pedagogy_review: revise
interaction_qa: pass_generic_fail_semantic
mobile_qa: pass_22_of_22
accessibility_reduced_motion: fail_0_of_22
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
development_flow: continue
source_gate: blocked_until_source_verified_and_recalculated
teacher_signoff: pending
```

## 整改复审与逐项关闭（绑定实现提交 4939150）

> 上文保留 `6b2595c` 初审时的失败现场和评分，作为可追溯基线；本节是当前裁决。实现提交为 `493915057b85e2cbe5fedd1650ccc6f9949741c5`，完整交互机器报告为 `audit/results/xb2-complete-4939150.json`。报告生成时 `worktree_clean=true`，受测模块为 `xb2`，22/22 PASS、score 100、0 blocked、0 hard failure。

### 系统级 finding 关闭

| Review ID | 状态 | 整改与验收证据 |
|---|---|---|
| X2-SYS-01 | **RESOLVED** | X2-01..X2-24 各自配置主问题、1—3 个预测点、真实控件动作、结果、画面证据、因果解释、模型边界、高考迁移和重新预测；默认先遮罩画面/读数/公式，验证后开放。`tests/x2-guided-pedagogy.spec.js` 验证 24/24。 |
| X2-SYS-02 | **RESOLVED** | 22 个 `anim/xb2/*.html` 全部接入 `guided-lesson.js`；统一减少动态媒体查询、明确“重新预测并重置”入口，390×844 reduced-motion 路径 24/24 可完成且无横向溢出。 |

X2-13、X2-20、X2-21、X2-23 的公式首次使用卡已经移到对应 iframe 之后且紧邻首次公式；X2-22、X2-24 也保持“先引导证据、再揭示公式”的顺序。编辑覆盖门禁重新通过 229/229 节点。

### CRITICAL / MAJOR 逐项关闭

| Review ID | 原级别 | 当前状态 | 关闭说明 |
|---|---:|---|---|
| X2-04 | MAJOR | **RESOLVED** | 力的大小统一为 `|q|vBsinθ`，电荷符号只负责方向；正文改为与圆周/螺旋轨迹证据一致。 |
| X2-05 | CRITICAL | **RESOLVED** | B 入屏时正电荷相位递减并在画布上逆时针，负电荷反向；单步与连续播放统一，canvas 声明磁场、视觉转向和叉乘证据。 |
| X2-06 | CRITICAL | **RESOLVED** | `R<L` 画完整右半圆，终点回到左边界，扫角 180°；`R≥L` 仍按右边界交点计算。 |
| X2-07 | MAJOR | **RESOLVED** | 用有向面积分定义磁通量；`BS cosθ` 仅作为均匀 B、平面 S 的特例，“磁感线条数”降为直观比喻。 |
| X2-11 | CRITICAL | **RESOLVED** | 棒到左右端点后同时令 v、E、I、F、P 归零并停止；“速度反向/播放”可向内恢复；安培阻力限定闭合、被动、无源回路。 |
| X2-12 | CRITICAL | **RESOLVED** | 重画反向二极管—续流指示灯闭合支路；通电、续流分别使用 `L/RL` 与 `L/(RL+R灯)`；删除人为 `flash`。复审还发现“暂停只停自动通断”的语义问题，已改成冻结整个暂态并通过真实暂停门禁。 |
| X2-15 | MAJOR | **RESOLVED** | 明确完整周期有符号平均为 0、`2Um/π` 是半周期平均大小；电荷量写为指定区间的 `N|ΔΦ|/R总`，方向另判。 |
| X2-17 | CRITICAL | **RESOLVED** | 显式检查 `U>√(Pr/1000)`；无效组合隐藏 I/损耗/压降/用户功率/效率并显示所需最低电压，不再钳出伪功率。 |
| X2-19 | MAJOR | **RESOLVED** | 电磁驱动改为固定圆盘中心、旋转磁场角与较慢圆盘角、转差率和切向驱动转矩；伪精确百分比改成弱/中/强相对量。 |
| X2-21 | CRITICAL | **RESOLVED** | E/E₀、B/B₀ 两曲线改成同峰同谷；补 `E₀=cB₀` 和 `E×B→+x`，不再把不同量纲的 E、B 写成未标定相同数值。 |
| X2-22 | MAJOR | **RESOLVED** | 调谐判据与距离衰减独立计算；同频远距显示“已调谐，但距离导致传播衰减”，失谐状态单独提示频率失配。 |
| X2-24 | CRITICAL | **RESOLVED** | 发电机采用电动势—内阻—负载模型，电动机采用转矩功率、机械损耗和铜耗模型；所有功率统一为 W 且逐帧守恒，开路 I/输入功率/输出功率均为 0。 |

### 其余边界整改

- X2-01 将探针 `|B|` 明确为相对强度；X2-10 说明拖拽是受控速度与离散导数近似。
- X2-14 补齐匀强磁场、固定轴、刚性线圈、匀角速度等正弦条件；X2-16 区分稳定直流、变化/脉冲直流和交流。
- X2-18 明确本页为 NTC 并区分 PTC；X2-23 把波段边界标为约定近似，安全判断加入强度、剂量、时间、距离和防护条件。
- 24/24 例题仍保持“来源审核中”并隔离；本轮没有伪造真题，也没有把题源完成度改成 done。

### 复审门禁

| 命令 / 证据 | 当前结果 |
|---|---|
| `npm run audit:physics:x2` | 10/10 PASS；覆盖方向、轨迹、端点、续流、输电有效域、转差、E/B 相位、调谐归因和能量守恒 |
| `npm run audit:pedagogy:x2` | 4/4 PASS；24/24 完整引导，24/24 手机减少动态，22/22 动画统一接入 |
| `AUDIT_MODULE=xb2 AUDIT_REPORT=xb2-complete-4939150.json playwright test tests/interaction-audit.spec.js --workers=1` | 22/22 PASS；score 100；0 hard failure；22/22 mobile PASS；报告绑定 `4939150` 且生成时工作区干净 |
| `npm run check` | PASS；229 节点编辑覆盖，数学、解答隔离、静态回退、206 页/13 章静态门禁全通过 |
| `node scripts/gen-data.js --check` | PASS；目录 229、进度 229，未重写 id-map 或进度状态 |

### 当前裁决

```yaml
engineering_interaction: pass_22_of_22
physics_content: pass_after_remediation
pedagogy_review: pass_24_of_24
interaction_qa: pass_generic_and_semantic
mobile_qa: pass_22_of_22
accessibility_reduced_motion: pass_22_of_22
code_publication: approved
content_approval: pending_teacher_signoff
source_gate: pending_24_of_24_examples_remain_quarantined
teacher_signoff: pending
review_status: remediation_complete
development_flow: continue
```

本裁决允许发布本轮代码与审核证据；它不把隔离中的题源或教师签署误报为完成。后续若发布真题/训练内容，仍必须另过来源政策 2.0、答案独立复算和教师签署门禁。
