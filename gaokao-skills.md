# 高考能力专题

> **模块状态：partial（正在逐项补齐）**

本页把分散在各章节中的“读图、实验、建模、临界、信息题”等能力集中训练。每个专题按“先看题型信号 → 再操作图像/模型 → 最后迁移到高考题”组织。

## 专题清单

| 编号 | 专题 | 状态 |
|---|---|---|
| G-01 | 图像斜率、面积、截距专题 | interaction passed · content pending |
| G-02 | 实验数据处理专题 | interaction passed · content pending |
| G-03 | 仪器读数专题 | interaction passed · content pending |
| G-04 | 误差分析专题 | interaction passed · content pending |
| G-05 | 电路实验设计专题 | interaction passed · content pending |
| G-06 | 极值与临界专题 | interaction passed · content pending |
| G-07 | 多过程运动专题 | interaction passed · content pending |
| G-08 | 能量与动量综合专题 | interaction passed · content pending |
| G-09 | 电磁感应综合专题 | interaction passed · content pending |
| G-10 | 带电粒子在复合场中运动专题 | interaction passed · content pending |
| G-11 | 真实情境建模专题 | interaction passed · content pending |
| G-12 | 信息题与科技前沿专题 | interaction passed · content pending |

---

<h4 id="graph-slope-area">G-01 图像斜率、面积、截距专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 能力目标
- 先读坐标轴物理量和单位，再判断斜率、面积、截距。
- 能把 `v-t` 图像斜率读成加速度、面积读成位移。
- 能把 `F-x` 图像面积读成功。
- 能识别 `I-U` 图像斜率与电阻倒数的关系。
- 会辨析“所有面积都有物理意义”的常见错解。

**交互探究。**
<iframe src="anim/skill/graph-slope-area.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移




> **公式首次使用卡**：适用边界——图像斜率必须用割线 Δy/Δx 或切线导数，y/x 只用于过原点正比例；面积必须结合横纵轴物理量、方向和符号约定解释；截距先由模型判定。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
第一步：读横轴、纵轴和单位
第二步：割线斜率 = Δy/Δx；曲线某点切线斜率 = dy/dx；只有过原点正比例直线才可写 y/x
第三步：先看带符号面积对应的量纲和物理过程，再解释面积；不能只凭形状套结论
第四步：截距先由模型解释，可能是初值、参数、系统偏置、外推量，也可能没有直接物理意义
第五步：不是所有图像面积都有常用物理意义
```

**专项条件检查。**

| 图像 | 可读出的量 | 必须同时检查 |
|---|---|---|
| `v-t` | 带符号面积为位移 | 时间轴上方为正、下方为负；路程不能直接用正负抵消 |
| `F-x` | 面积为力做的功 | 纵轴必须是沿位移方向的力分量，方向相反时功为负 |
| `I-U` | 斜率为 $1/R$ | 仅限温度等条件稳定的线性欧姆元件；非线性元件需区分割线和切线 |
| `P-t` | 带符号面积为功或能量转移 | 先约定功率正负对应的能量流向 |

截距必须由模型解释：它可能是初始量、参数、系统偏置或外推量，也可能没有直接物理意义。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-01）

<h4 id="experiment-data-processing">G-02 实验数据处理专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 能力目标
- 会把“仪器读数”整理成有效数据表，保留单位和有效数字。
- 会判断是否需要作 `y-x`、`y-1/x` 或“化曲为直”的图像。
- 会从图像读出斜率、截距，并把它们翻译成物理量。
- 会识别异常点、零点误差、坐标轴选择不当等常见失分点。
- 会用相对误差评价实验结论是否可信。

**交互探究。**
<iframe src="anim/skill/experiment-data-processing.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
第一步：原始读数进表，单位不能丢
第二步：先看变量关系，必要时化曲为直
第三步：画线照顾多数点，不追着单个点跑
第四步：斜率、截距要翻译成题目中的物理量
第五步：异常点先找原因，再决定是否剔除
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-02）

<h4 id="instrument-reading">G-03 仪器读数专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 能力目标
- 会先判断仪器量程、最小分度和估读要求。
- 会读游标卡尺、螺旋测微器、刻度尺和电表。
- 会把零误差、倍率、量程换算写进最终答案。
- 会识别“忘量程”“忘零误差”“有效数字乱写”的常见失分点。
- 能把读数结果迁移到实验表格、图像斜率和误差分析。

**交互探究。**
<iframe src="anim/skill/instrument-reading.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
读仪器先看三件事：量程、最小分度、估读位数
卡尺：主尺 + 游标，不忘零误差
测微器：固定尺 + 可动刻度，不漏半毫米
电表：表盘刻度要乘以量程比例
最终答案必须带单位和合理有效数字
```

**专项条件检查。**

1. 测量前先检查指针并完成机械调零。
2. 选择合适欧姆挡，短接两表笔进行欧姆调零；每次换挡后都必须重新欧姆调零。
3. 被测电路必须断电，被测元件至少断开一端，避免其他支路影响；手不要同时接触两表笔金属端。
4. 接入元件后读取非线性的欧姆刻度并乘倍率；尽量让指针落在刻度中部附近，偏转太小或太大时换挡后重新调零再测。
5. 测量结束将选择开关置于交流高压挡或关闭位置，并拔出表笔。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-03）

<h4 id="error-analysis">G-04 误差分析专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 能力目标
- 会区分偶然误差、系统误差和过失误差。
- 会用平均值减小偶然误差，但知道平均不能消除系统误差。
- 会根据零误差、摩擦、内阻、视差等原因判断偏大偏小。
- 会计算绝对误差、相对误差，并评价实验结论可信度。
- 会提出有效改进方案，而不是泛泛写“多测几次”。

**交互探究。**
<iframe src="anim/skill/error-analysis.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
散点乱跳多为偶然误差，多次平均能变稳
整体偏上或偏下多为系统误差，要校准或修正
算误差先定标准值，再算绝对误差和相对误差
分析偏大偏小，要沿公式看每个量的影响
改进方案必须对准误差来源
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-04）

<h4 id="circuit-experiment-design">G-05 电路实验设计专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 能力目标
- 会根据待测电阻大小选择电流表内接或外接。
- 会根据调节范围和安全性选择滑动变阻器分压式或限流式。
- 会检查电压表、电流表量程是否合适。
- 会判断电压表分流、电流表分压导致的测量值偏大或偏小。
- 会把电路图、实物连线、读数表格和 `U-I` 图像统一起来。

**交互探究。**
<iframe src="anim/skill/circuit-experiment-design.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移




> **公式首次使用卡**：适用边界——电路实验先满足电表量程和安全，再优化偏转精度；内外接选择依据电表内阻与待测电阻的相对误差；任何近似均需写明仪表模型。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
先看实验目标，再估待测电阻
比较两种接法的相对误差；量级判断可用临界电阻 Rx≈√(RA RV)，Rx 较大常选内接、较小常选外接
要求电压从零起调，优先分压式
只需保护电路且范围要求不高，可考虑限流式
最后检查量程、滑变器额定值和误差方向
```

**专项条件检查。**

- 电流表内接时，电压表读数包含电流表分压，$R_{\text{测}}=R_x+R_A$，相对误差约为 $R_A/R_x$。
- 电流表外接时，电流表读数包含电压表分流，测量结果偏小；其影响随 $R_x/R_V$ 增大而增大。
- 比较两类误差可得到量级判据 $R_x\approx\sqrt{R_A R_V}$：$R_x$ 较大时常选内接，较小时常选外接；已知具体内阻时应直接比较误差，不能只背口诀。
- 量程选择先保证任何调节状态下不过载并留有安全裕量，再尽量让正常读数达到满量程的较大比例，以兼顾读数精度。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-05）

<h4 id="extreme-critical">G-06 极值与临界专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 能力目标
- 会识别“刚好、恰能、至少、至多、最大、最小”等临界信号。
- 会先识别绳、杆、内轨、外轨和接触面的约束类型与允许受力方向，再把边界翻译为相应的零值或极值条件。
- 会用图像顶点、判别式、导数或配方法求极值。
- 会区分数学极值和物理可行范围。
- 会在综合题中先画临界状态，再列方程。

**交互探究。**
<iframe src="anim/skill/extreme-critical.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
看到“刚好”先画临界状态
先识别约束类型和约束力允许方向，再判断边界量是否取 0 或极值
看到“最大/最小”先找变量和约束
图像题找顶点，方程题看判别式，函数题可配方
最后检查物理范围，不能只看数学答案
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-06）

<h4 id="multi-process-motion">G-07 多过程运动专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 能力目标
- 会把“先加速、再匀速、最后制动”等情境拆成多个阶段。
- 会用前一段末速度、末位置作为后一段初条件。
- 会用 `v-t` 图像面积快速累加位移。
- 会区分总时间、分段时间、总位移和每段位移。
- 会识别多过程题中“一个公式套到底”的错解。

**交互探究。**
<iframe src="anim/skill/multi-process-motion.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移




> **公式首次使用卡**：适用边界——多过程问题必须逐段确定研究对象、受力、约束和状态衔接；上一过程末状态是下一过程初状态；跨过程守恒关系只能用于所选系统和适用时段。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
先按受力或运动性质分段
每段单独列公式
前段末速度 = 后段初速度
前段末位置 = 后段初位置
能画 v-t 图像时，优先用面积求总位移
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-07）

<h4 id="energy-momentum-combo">G-08 能量与动量综合专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 能力目标
- 会先确定研究对象和过程，再决定用动量还是能量。
- 会识别碰撞、爆炸、反冲等短时过程中的动量守恒。
- 会在碰后上坡、压弹簧、竖直上升等过程中使用能量关系。
- 会区分动量守恒和机械能守恒的适用条件。
- 会把多阶段题拆成“碰撞阶段 + 能量转化阶段”。

#### 情境与现象
先看碰撞瞬间：蓝色小车和金色木块接触后，读数中的**碰前动量与碰后动量相等**，但动能已经减少；再看压缩弹簧阶段，动能柱下降、弹性势能柱上升，二者之和保持不变。拖动画面里的蓝色小车改变 `v₀`，观察动量、碰后速度和最大压缩量同步变化。

**交互探究。**
<iframe src="anim/skill/energy-momentum-combo.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
碰撞瞬间先看动量
碰后转化再看能量
动量守恒看外力冲量是否可忽略
机械能守恒看是否只有重力、弹力做功
有摩擦或外力做功，用功能关系补账
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-08）

<h4 id="electromagnetic-induction-combo">G-09 电磁感应综合专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 能力目标
- 会从磁通量变化判断是否产生感应电流。
- 会用楞次定律判断感应电流方向。
- 会计算导体棒切割磁感线的感应电动势、电流和安培力。
- 会把机械功率、安培力功率和电热功率联系起来。



> **公式首次使用卡**：适用边界——电磁感应综合题先判断磁通量变化和感应方向，再在指定匀强场、有效长度及电路模型下列 E、I、安培力和能量关系；几何改变时重新求有效量。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 会在图像题中用 $\Phi -t$ 斜率判断感应电动势。

#### 情境与现象
先看一根导体棒在磁场中的闭合导轨上移动：回路面积 `S` 和磁通量 $\Phi =B\cdot S$ 改变，电流表才偏转；把导体棒拖向相反方向，电流方向和安培力方向都会反转。再看底部记录，确认 $\varepsilon =BLv$、$I=\varepsilon /R$ 和 $P_{\text{机械}}=P_{\text{热}}$ 是同一条链上的读数。

**交互探究。**
<iframe src="anim/skill/electromagnetic-induction-combo.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
先看磁通量有没有变
再用楞次定律判方向
导体棒切割常用 ε=BLv
闭合回路再算 I=ε/R
安培力 F=BIL，能量看机械功转电热
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-09）

<h4 id="compound-field-particle-skill">G-10 带电粒子在复合场中运动专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 能力目标
- 会画出电场力、洛伦兹力、重力的方向。
- 会识别速度选择器、质谱仪、回旋运动、复合场平衡等模型。



> **公式首次使用卡**：适用边界——复合场中必须分别写电场力和洛伦兹力方向；速度选择器要求两力反向且 qE=qvB；磁场圆周运动还要求速度垂直磁场且其他力可忽略。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 会用 $qvB=qE$ 判断匀速直线通过条件。
- 会用 $qvB=mv^{2}/r$ 求半径、周期和比荷。
- 会把“先加速、再偏转、再匀速圆周”拆成多过程。

**交互探究。**
<iframe src="anim/model/compound-field-particle.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
先定粒子正负，再判力的方向
电场力 F=qE，洛伦兹力 F=qvB
匀速直线：合力为 0
圆周偏转：洛伦兹力提供向心力
复杂装置按区域分段处理
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-10）

<h4 id="real-world-modeling">G-11 真实情境建模专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 能力目标
- 会从生活、科技、交通、体育等文字情境中提取物理对象。
- 会判断哪些因素可忽略，哪些变量必须保留。
- 会把真实过程抽象为质点、匀变速、圆周、能量或电路模型。
- 会用图像、受力图和方程把文字条件翻译成可计算关系。
- 会检查答案单位、数量级和实际意义是否合理。

#### 情境与现象
先切换真实场景：汽车制动不是一个公式，而是“反应阶段匀速 + 制动阶段匀减速”；无人机投放不是斜抛的黑箱，而是“水平匀速 + 竖直自由落体”。拖动画面中的汽车或无人机改变初速度，观察过程图像、模型假设和最终结果怎样一起变化。

**交互探究。**
<iframe src="anim/skill/real-world-modeling.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
读情境：先找对象和目标量
做抽象：复杂物体先看能否当质点
分过程：运动性质变了就分段
列模型：受力图、图像、方程三选一或组合
验答案：单位、数量级、方向、正负都要检查
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-11）

<h4 id="science-info-problem">G-12 信息题与科技前沿专题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 能力目标
- 会把新名词翻译成熟悉的物理量，如辐照度、效率、轨道高度、比荷。
- 会从长材料中圈出有效数据，识别冗余信息。
- 会完成单位换算、比例换算和数量级判断。
- 会把科技前沿情境还原到力学、电磁学、热学、原子物理旧模型。
- 会识别信息题中的“照抄材料、不建模”的错解。

#### 情境与现象



> **公式首次使用卡**：适用边界——科技信息题只使用材料明确给出的模型、数据和适用范围；先完成单位换算和数量级检查；类比关系必须说明对应量，不能把背景宣传语当作物理条件。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

信息题不是“看见科技名词就套公式”。先在航天或光伏材料中圈出数据、单位和效率，再把它们翻译成 `r、v、T` 或 $P_{\text{入}}、\eta 、P_{\text{出}}$。动画播放/暂停只影响装置画面；每道题必须选择后点击“提交答案”，系统才计分并给出解析。

**交互探究。**
<iframe src="anim/skill/science-info-problem.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

#### 方法、条件与迁移

```text
新名词先别怕，先翻译成物理量
所有数据先统一 SI 单位
效率、比例、斜率、面积是信息题入口
科技情境最后都要回到旧模型
答案要做数量级和单位检查
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：G-12）

<style>
.status { font-size: 12px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
.status.done { background: #d4edda; color: #155724; }
.status.partial { background: #fff3cd; color: #856404; }
.status.pending { background: #f8d7da; color: #721c24; }
</style>
