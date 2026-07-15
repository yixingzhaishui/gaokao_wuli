# 高频模型专题

> **模块状态：重点升级中**
> 模型专题是复习强化层，不能替代官方模块。重点不是背 15 个名字，而是看到题目信号后，能迅速判断“用哪个模型、第一步怎么列、哪个临界最容易错”。

## 先用模型诊断台

<iframe src="anim/model/model-selector.html" width="100%" height="860" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**观察任务**：先输入或点击题目信号，看系统给出的候选模型；再核对研究对象、过程、真实受力和约束方程。关键词只能帮助初筛，不能代替“对象—约束—过程—边界”的建模判断。

这个诊断台用来训练“第一反应”，现在覆盖 15 个高频模型：

| 题目信号 | 第一反应 | 关键第一步 |
|---|---|---|
| 轻绳、轻杆、弹簧或多个物体相连 | 连接体候选 | 先写约束方程；确认是否共同运动后，才决定能否整体求 `a` |
| 物块在木板上、问是否相对滑动 | 板块 | 假设共同运动，比较 $f_{\text{需}}$ 与 `fₛ,max` |
| 物块放上传送带、问共速/划痕/热量 | 传送带 | 先比较 $v_{\text{物}}$ 与 $v_{\text{带}}$ |
| 剪断绳、撤去支撑、问瞬时加速度 | 弹簧瞬时 | 弹簧力不突变，重画 $t=0+$ 受力 |
| 切割磁感线、导轨、灯泡发光 | 导轨候选 | 先核对磁场、有效长度和速度的几何关系，再选动生电动势表达式 |
| 碰撞、爆炸、反冲 | 碰撞 | 先判断外力冲量是否可忽略 |

---

## 高频模型清单（15 个，逐项开发）

> 清单不是验收结果本身。每个模型必须点进去看到：图、交互、判据、易错点和例题训练。A 档/核心模型按“基础题 + 中档题 + 高综合题”组织，板块模型已补到 4 题闭环。

| 编号 | 模型入口 | 关联知识点 | 例题训练入口 | 状态 |
|---|---|---|---|---|
| M-01 | [连接体模型](models?id=model-connecting-body) | B1-27 | 3 题：整体法、摩擦、内力辨析 | interaction passed · content pending |
| M-02 | [板块模型](models?id=model-plank-block) | B1-28 | [4 题闭环：临界、滑动、误区、滑痕能量](models?id=model-plank-block-training) | interaction passed · content pending |
| M-03 | [传送带模型](models?id=model-conveyor-belt) | B1-29 | [4 题：共速、短带、反向初速、热量](models?id=model-conveyor-belt-training) | interaction passed · content pending |
| M-04 | [弹簧瞬时问题](models?id=model-spring-instant) | B1-30 | 4 题：剪绳、撤支撑、弹簧力不突变 | interaction passed · content pending |
| M-05 | [平抛与类平抛](models?id=model-projectile-like) | B2-03, B3-08 | 3 题：平抛、电场偏转、分区运动 | interaction passed · content pending |
| M-06 | [圆周临界模型](models?id=model-circular-critical) | B2-08, X2-06 | 3 题：绳、杆、轨道临界 | interaction passed · content pending |
| M-07 | [天体运动模型](models?id=model-orbital-motion) | B2-11, B2-13, B2-14 | 3 题：卫星、双星、变轨 | interaction passed · content pending |
| M-08 | [机车启动模型](models?id=model-vehicle-start) | B2-17 | 3 题：恒力、恒功率、图像 | interaction passed · content pending |
| M-09 | [功能关系综合](models?id=model-work-energy) | B2-22, B2-23 | 3 题：守恒、非保守力、能量账本 | interaction passed · content pending |
| M-10 | [碰撞模型](models?id=model-collision) | X1-05, X1-06 | 3 题：粘连、弹碰、能量损失 | interaction passed · content pending |
| M-11 | [导轨模型](models?id=model-rail-rod) | X2-11 | 3 题：电动势、电流、安培力 | interaction passed · content pending |
| M-12 | [交流电综合](models?id=model-ac-transformer) | X2-15, X2-16, X2-17 | 3 题：有效值、变压器、输电 | interaction passed · content pending |
| M-13 | [带电粒子在复合场中运动](models?id=model-compound-field-particle) | X2-05, B3-08 | 3 题：选择器、偏转、圆周 | interaction passed · content pending |
| M-14 | [气体状态变化模型](models?id=model-gas-state-change) | X3-10, X3-11 | 3 题：状态方程、p-V 图、做功 | interaction passed · content pending |
| M-15 | [核反应与质能方程](models?id=model-nuclear-energy) | X3-27, X3-29 | 3 题：守恒、半衰期、质能 | interaction passed · content pending |

> 模型专题正在逐项开发；未完成项仍标为 pending，不冒充完成。

---

<h4 id="model-connecting-body">M-01 连接体模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
连接体模型处理“多个物体被绳、杆、弹簧或接触面联系在一起”的动力学问题。高考里常问加速度关系、绳中张力或接触力、某个物体的受力情况。轻绳不可伸长、轻杆定长、滑轮几何和弹簧伸缩对应不同约束；“相连”本身并不保证加速度大小和方向相同。

核心思路是先写约束方程，再判断哪些物体能作为整体。若它们保持相对静止或由不可伸长轻绳直接约束，才可按相应加速度关系求解；弹簧可伸缩，动滑轮还可能给出不同大小或方向的加速度关系。需要内力时再隔离物体。

#### 情境表征
下面的图展示最常见的水平连接体：外力拉着两个物块一起运动。对整体看，绳张力是内力，会抵消；对单个物块看，张力就是必须保留的外力。

<svg viewBox="0 0 760 280" width="100%" style="max-width:920px">
  <rect x="80" y="194" width="600" height="18" fill="#d9e2ec"></rect>
  <rect x="172" y="132" width="110" height="62" rx="6" fill="#2c7be5"></rect>
  <rect x="378" y="132" width="140" height="62" rx="6" fill="#38b2ac"></rect>
  <line x1="282" y1="162" x2="378" y2="162" stroke="#334e68" stroke-width="5"></line>
  <line x1="518" y1="162" x2="650" y2="162" stroke="#e03131" stroke-width="5" marker-end="url(#m1arrow)"></line>
  <text x="227" y="167" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">m1</text>
  <text x="448" y="167" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">m2</text>
  <text x="330" y="148" font-size="15" fill="#334e68" text-anchor="middle">T</text>
  <text x="590" y="146" font-size="15" fill="#e03131" text-anchor="middle" font-weight="700">外力 F</text>
  <line x1="212" y1="104" x2="482" y2="104" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m1arrow2)"></line>
  <text x="350" y="86" font-size="15" fill="#7b2cbf" text-anchor="middle" font-weight="700">共同加速度 a</text>
  <text x="380" y="244" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">整体：F外=(m1+m2)a；隔离 m1：T=m1a</text>
  <defs>
    <marker id="m1arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m1arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx1/connecting-body.html" width="100%" height="820" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——轻绳不可伸长时，绳两端物体沿绳方向加速度大小相同；轻杆连接时，杆可以传拉力也可以传压力，要看受力方向；若绳跨过轻滑轮，通常绳两端速度和加速度大小相同，但方向要沿各自绳段判断。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可拖动参数：$m_{1}$、$m_{2}$、外力 `F`、摩擦因数 $\mu$、斜面角 $\theta$、重力加速度 `g`，并可切换水平轻绳、粗糙水平、斜面-水平组合、滑轮悬挂。实时变化：共同加速度、绳张力、净外力、摩擦力、重力分量、整体/隔离方程和 `a-F` 图像。

**证据任务。**
- 增大 $m_{1}+m_{2}$：看同样外力下共同加速度如何变小。
- 增大 $m_{1}$：看 $T=m_{1}a$ 中张力为什么会变大。
- 加入摩擦：看整体方程中外力为什么要减去总摩擦。
- 只看 $m_{1}$：确认求张力时不能再把两个物体当整体。
- 切到斜面-水平组合：拖动 $\theta$，看 $m_{1}\ \mathrm{g} \sin \theta$ 如何进入整体外力。
- 切到滑轮悬挂：看悬挂物重力怎样成为系统的驱动力。

#### 模型假设与识别条件
看到以下信号，优先想到连接体模型：

| 题目信号 | 说明 |
|---|---|
| 两个或多个物体用轻绳、轻杆、弹簧连接 | 内力可能需要用隔离法求 |
| 题目问“加速度”和“绳中张力” | 典型先整体后隔离 |
| 物体保持相对静止或绳不可伸长 | 多物体加速度大小相同 |
| 接触力、支持力、压力在物体间传递 | 整体法会消去内部作用 |
| 斜面、滑轮、水平面组合 | 沿约束方向把外力统一到同一条方程里 |

#### 约束方程与求解路线
1. 先画出所有物体，标出共同运动方向。
2. 写约束方程：相对静止、不可伸长绳、定长杆、滑轮几何或弹簧伸缩分别处理，不先验假定加速度相同。
3. 对整体列牛顿第二定律：只保留外力。
4. 求出共同加速度 `a`。
5. 隔离某个物体，列方程求张力或接触力。

#### 公式、变量、单位与条件
无摩擦水平连接体：

```text
整体：F = (m1+m2)a
所以：a = F/(m1+m2)
隔离 m1：T = m1a
隔离 m2：F - T = m2a
```

有摩擦时，以下公式只适用于两物体均在水平面上滑动、滑动摩擦因数相同且 $N_i=m_i g$ 的情形；静摩擦不能直接写成 $\mu mg$：

```text
整体：F - μ(m1+m2)g = (m1+m2)a
隔离 m1：T - μm1g = m1a
```

画面中 `F` 是右侧红色箭头，`a` 是共同运动箭头，`T` 是连接处绳的拉力，摩擦力与运动趋势相反。

**模型失效边界。**
- 轻绳不可伸长时，绳两端物体沿绳方向加速度大小相同。
- 轻杆连接时，杆可以传拉力也可以传压力，要看受力方向。
- 若绳跨过轻滑轮，通常绳两端速度和加速度大小相同，但方向要沿各自绳段判断。
- 若弹簧连接，弹力不能突变，瞬时问题要单独分析。
- 若物体间发生相对滑动，不能简单把它们当共同整体求同一个加速度。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 求共同加速度 | 整体法 |
| 求绳中张力 | 先整体求 `a`，再隔离一端 |
| 求两物体间压力 | 隔离其中一个物体 |
| 斜面连接体 | 沿斜面方向列整体方程 |
| 滑轮连接体 | 沿绳方向写加速度约束 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 整体法中还写绳张力 | 张力是整体内力，会抵消 | 整体只看外力 |
| 求张力时仍用整体 | 内力在整体里看不见 | 隔离单个物体 |
| 忘记两个物体摩擦都要算 | 总外力少减了摩擦 | 整体摩擦为总摩擦 |
| 默认所有连接体加速度相同 | 弹簧或滑动时可能不同 | 先判断约束条件 |
| 张力方向随便画 | 方程符号混乱 | 先假设方向，算出负值再反向 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-01）

<h4 id="model-plank-block">M-02 板块模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
板块模型处理“物块放在木板上，外力拉物块或拉木板”的问题。难点不是套公式，而是判断物块和木板是否保持相对静止；一旦相对滑动，两个物体就要分别列牛顿第二定律。




> **公式首次使用卡**：适用边界——以上公式针对外力拉上方物块且地面光滑的典型情形；若外力拉木板，所需静摩擦对象会改变，临界式也要重列；若地面有摩擦，整体方程要加入地面对木板的摩擦。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

核心链路有两步：先判断静摩擦够不够让两者共同加速；一旦打滑，再用相对位移判断是否滑下木板，并用 $Q=f\Delta x$ 解释摩擦生热。

**题型入口。**

| 题目问法 | 先做什么 | 立刻跳到 |
|---|---|---|
| 能否一起运动、临界外力 | 假设共动，算 $f_{\text{静需}}$ 与 `fₛ,max` | [例题 1](models?id=model-plank-block-example-1) |
| 已经打滑，求两个加速度 | 分别隔离物块和木板 | [例题 2](models?id=model-plank-block-example-2) |
| 静摩擦到底是不是 $\mu mg$ | 先由运动需要求静摩擦 | [例题 3](models?id=model-plank-block-example-3) |
| 给初速度、问滑痕/滑下/热量 | 直接写相对运动，比较 $\Delta x$ 和 `L` | [例题 4](models?id=model-plank-block-example-4) |

**解题检查表**：先判临界，不够才分列；分列后看相对运动；有限长木板必须比较 $\Delta x$ 与 `L`；问热量只用接触面相对位移 $Q=f\Delta x$。

#### 情境表征
外力拉上方物块时，物块想相对木板向右滑。静摩擦若足够大，就能拉着木板一起走；静摩擦若不够，就变成滑动摩擦，物块和木板加速度不同。

<svg viewBox="0 0 760 280" width="100%" style="max-width:920px">
  <rect x="90" y="204" width="580" height="16" fill="#d9e2ec"></rect>
  <rect x="210" y="162" width="300" height="42" rx="6" fill="#a7b7c7"></rect>
  <rect x="272" y="104" width="110" height="58" rx="6" fill="#2c7be5"></rect>
  <line x1="382" y1="133" x2="540" y2="133" stroke="#e03131" stroke-width="5" marker-end="url(#m2arrowF)"></line>
  <line x1="272" y1="133" x2="198" y2="133" stroke="#f0a500" stroke-width="4" marker-end="url(#m2arrowL)"></line>
  <line x1="260" y1="184" x2="340" y2="184" stroke="#f0a500" stroke-width="4" marker-end="url(#m2arrowR)"></line>
  <line x1="272" y1="78" x2="510" y2="78" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m2arrowA)"></line>
  <text x="327" y="138" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">m</text>
  <text x="360" y="189" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">M</text>
  <text x="462" y="116" font-size="15" fill="#e03131" text-anchor="middle" font-weight="700">外力 F</text>
  <text x="232" y="116" font-size="14" fill="#f0a500" text-anchor="middle">物块受摩擦</text>
  <text x="314" y="224" font-size="14" fill="#f0a500" text-anchor="middle">木板受摩擦</text>
  <text x="390" y="58" font-size="15" fill="#7b2cbf" text-anchor="middle" font-weight="700">共同或分离的加速度</text>
  <text x="380" y="252" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">判据：假设共同运动，检查 f静需 是否超过 μmg</text>
  <defs>
    <marker id="m2arrowF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m2arrowL" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f0a500"></path></marker>
    <marker id="m2arrowR" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f0a500"></path></marker>
    <marker id="m2arrowA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx1/plank-block.html" width="100%" height="820" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：外力 `F` 或初速度 $v_{0}$、摩擦因数 $\mu$、物块质量 `m`、木板质量 `M`、板长 `L`、时间游标 `t`。实时变化：临界状态、摩擦方向、`am/aM`、相对滑痕 $\Delta x$、是否滑下、摩擦生热 $Q=f\Delta x$，并同时显示侧视实物、俯视滑痕和 $x_{\text{相}}-t / v-t$ 图像。

**证据任务。**
- 缓慢增大 `F`：看系统何时从相对静止变成相对滑动。
- 增大 $\mu$：看临界外力为什么变大。
- 增大木板质量 `M`：看带动木板需要的静摩擦为什么更大。
- 进入相对滑动后：拖动时间游标，比较 `am` 和 `aM`，看 $\Delta x$ 如何增长到板长 `L`。
- 切到“初速度看滑痕”：看摩擦让滑块减速、木板加速，直到共速或滑下。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 物块放在木板、车厢、长木板上 | 先判断是否相对滑动 |
| 问“能否一起运动” | 核心是静摩擦临界 |
| 问“物块是否滑下木板” | 要比较相对位移和板长 |
| 给出 $\mu$、`F`、`m`、`M` | 多半要算临界外力或分段加速度 |

#### 约束方程与求解路线
1. 假设物块与木板相对静止。
2. 把两者当整体，求共同加速度 `a`。
3. 隔离需要被摩擦“带动”的那个物体，求所需静摩擦 $f_{\text{静需}}$。
4. 与最大静摩擦 $fₛ,max=\mu mg$ 比较。
5. 若 $f_{\text{静需}}\le fₛ,max$，相对静止；若超过，进入相对滑动，分别列方程。

#### 公式、变量、单位与条件
外力拉上方物块、水平地面光滑时：

```text
假设共同运动：a = F/(m+M)
木板只能靠摩擦获得加速度：f静需 = M a
最大静摩擦：fₛ,max = μmg
临界条件：M·F/(m+M) = μmg
F临 = μmg(m+M)/M
```

相对滑动后：

```text
物块：F - μmg = m am
木板：μmg = M aM
若 am > aM，物块相对木板向右滑
```

画面中红色箭头是外力 `F`，黄色箭头是摩擦力，读数中的 `am`、`aM` 直接对应两个物体的加速度。

**模型失效边界。**
- 以上公式针对外力拉上方物块且地面光滑的典型情形。
- 若外力拉木板，所需静摩擦对象会改变，临界式也要重列。
- 若地面有摩擦，整体方程要加入地面对木板的摩擦。
- 若木板长度有限，相对滑动后还要比较相对位移与板长。
- 静摩擦不是固定等于 $\mu mg$，只有临界时才达到最大值。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 判断是否一起运动 | 假设共同运动，算 $f_{\text{静需}}$ |
| 求临界外力 | 令 $f_{\text{静需}}=fₛ,max$ |
| 求滑动后加速度 | 对物块和木板分别列方程 |
| 判断是否滑出 | 积分或运动学求相对位移 |
| 求摩擦生热 | $Q=f_{\text{滑}}\cdot \text{相对位移}$ |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 一上来就用 $f=\mu mg$ | 静摩擦未必达到最大 | 先算 $f_{\text{静需}}$ |
| 把相对静止当作静止 | 两者可一起加速 | 看相对位移是否为零 |
| 滑动后仍用共同加速度 | 已经不是同一运动 | 分别列方程 |
| 忘记木板质量影响临界 | 带动木板需要摩擦 | 用 $f_{\text{静需}}=M a$ |
| 把物块位移当相对位移 | 是否滑出取决于相对位移 | 用 $x_{\text{相}}=xm-xM$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-02）

<h4 id="model-conveyor-belt">M-03 传送带模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
传送带模型处理“物块放到运动传送带上”的分段运动问题。它最容易错在摩擦力方向：摩擦力不是固定阻碍物块对地运动，而是阻碍物块相对传送带的运动。




> **公式首次使用卡**：适用边界——水平传送带中，摩擦加速度大小为 \mu g；共速后若没有其他水平力，一般静摩擦为 0；倾斜传送带要加入重力沿斜面分量，不能直接套 a=\mu g。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

核心判断：比较物块速度 $v_{\text{物}}$ 与传送带速度 $v_{\text{带}}$。小于时被加速，大于时被减速，等于时共速，通常无摩擦。

#### 情境表征
物块轻放到向右运动的传送带上，开始时 $v_{\text{物}}=0<v_{\text{带}}$，物块相对传送带向左滑，因此传送带给物块的摩擦力向右，摩擦力在这里是动力。

<svg viewBox="0 0 760 280" width="100%" style="max-width:920px">
  <ellipse cx="150" cy="178" rx="30" ry="22" fill="#eef4ff" stroke="#829ab1" stroke-width="4"></ellipse>
  <ellipse cx="610" cy="178" rx="30" ry="22" fill="#eef4ff" stroke="#829ab1" stroke-width="4"></ellipse>
  <line x1="150" y1="156" x2="610" y2="156" stroke="#829ab1" stroke-width="6"></line>
  <line x1="150" y1="200" x2="610" y2="200" stroke="#829ab1" stroke-width="6"></line>
  <rect x="228" y="108" width="74" height="48" rx="6" fill="#2c7be5"></rect>
  <line x1="302" y1="132" x2="390" y2="132" stroke="#e03131" stroke-width="5" marker-end="url(#m3arrowF)"></line>
  <line x1="190" y1="224" x2="310" y2="224" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m3arrowV)"></line>
  <line x1="228" y1="88" x2="250" y2="88" stroke="#486581" stroke-width="4" marker-end="url(#m3arrowSmall)"></line>
  <text x="265" y="138" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">m</text>
  <text x="344" y="113" font-size="15" fill="#e03131" text-anchor="middle" font-weight="700">摩擦力 f</text>
  <text x="250" y="246" font-size="15" fill="#7b2cbf" text-anchor="middle" font-weight="700">v带 向右</text>
  <text x="252" y="74" font-size="14" fill="#486581" text-anchor="middle">v物 较小</text>
  <text x="380" y="42" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">先比 v物 与 v带，再决定摩擦方向和运动阶段</text>
  <text x="380" y="260" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">划痕长度 = 传送带位移 - 物块位移 的绝对值</text>
  <defs>
    <marker id="m3arrowF" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m3arrowV" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
    <marker id="m3arrowSmall" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#486581"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx1/conveyor-belt.html" width="100%" height="820" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：传送带速度 $v_{\text{带}}$、物块初速度 $v_{0}$（可为反向）、动摩擦因数 $\mu$、传送带长度 `L`、重力加速度 `g`、传送方向 `direction` 和观察时刻 `t`。实时变化：速度、摩擦方向、运动阶段、是否到达末端、共速时间、物块位移、划痕长度和摩擦生热。

**证据任务。**
- 令 $v_{0}=0$：看摩擦力为什么向右，物块如何加速到共速。
- 令 $v_{0}>v_{\text{带}}$：看摩擦力为什么反向，物块如何减速到共速。
- 令 $v_{0}<0$：看物块先与带反向运动时，摩擦力仍由相对速度决定。
- 减小 `L`：看物块是否来不及共速就离开传送带。
- 增大 $\mu$：看共速时间和共速前位移如何减小。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 物块轻放到传送带上 | 先加速到共速 |
| 物块有初速度 | 比较 $v_{0}$ 与 $v_{\text{带}}$ |
| 传送带长度有限 | 要判断是否共速前离开 |
| 问划痕、摩擦生热 | 必须求相对位移 |
| 倾斜传送带 | 摩擦方向还要结合重力分量 |

#### 约束方程与求解路线
1. 选地面为参考系，写出 $v_{0}$ 和 $v_{\text{带}}$。
2. 比较 $v_{0}$ 与 $v_{\text{带}}$，判断相对运动方向。
3. 由相对运动方向确定摩擦力方向。
4. 用 $a=\mu g$ 或沿斜面方向列牛顿第二定律。
5. 先算达到共速所需时间和位移，再与传送带长度比较。
6. 若已共速且无其他力，后续随传送带匀速。

#### 公式、变量、单位与条件
水平传送带、物块轻放、$v_{0}<v_{\text{带}}$：

```text
a = μg
t共 = (v带-v0)/(μg)
x物 = v0 t共 + 1/2 μg t共²
x带 = v带 t共
划痕长度 = |x带 - x物|
```

若 $x_{\text{物}}<L$，物块先共速，再匀速走完剩余长度。若 $x_{\text{物}}\ge L$，物块还没共速就离开传送带，要用位移方程直接求离开时间。

画面中红色箭头是摩擦力，速度读数显示 $v_{\text{物}}$ 与 $v_{\text{带}}$，划痕读数就是相对位移。

**模型失效边界。**
- 水平传送带中，摩擦加速度大小为 $\mu g$。
- 共速后若没有其他水平力，一般静摩擦为 0。
- 倾斜传送带要加入重力沿斜面分量，不能直接套 $a=\mu g$。
- 传送带足够长与长度有限是两类题。
- 划痕和摩擦生热看相对位移，不看物块对地位移。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 求共速时间 | 比速度，列 $t=\Delta v/a$ |
| 判断是否滑出 | 比较共速前物块位移与 `L` |
| 求总运动时间 | 分“共速前 + 共速后” |
| 求划痕长度 | 求相对位移 |
| 求摩擦生热 | $Q=\mu mg\cdot \text{相对位移}$ |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 认为摩擦总是阻碍物块前进 | 摩擦阻碍相对运动 | 先比 $v_{\text{物}}$ 与 $v_{\text{带}}$ |
| 共速后还写滑动摩擦 | 无相对运动时通常无滑动摩擦 | 分阶段 |
| 把传送带位移当物块位移 | 两者速度不同 | 分别算 $x_{\text{带}}$、$x_{\text{物}}$ |
| 忘记长度有限 | 可能未共速就离开 | 先比较 $x_{\text{物}}$ 与 `L` |
| 划痕用物块位移 | 划痕是相对位移 | 用 $\vert x_{\text{带}}-x_{\text{物}}\vert$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-03）

<h4 id="model-spring-instant">M-04 弹簧瞬时问题 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
弹簧瞬时问题处理“剪断绳、撤去支撑、突然释放”之后的一瞬间受力和加速度。它的关键不在复杂计算，而在判断哪些力能立刻改变、哪些力不能立刻改变。




> **公式首次使用卡**：适用边界——“瞬时不变”只针对刚剪断的一瞬间，之后弹簧会运动并改变形变量；轻绳只能拉不能压，剪断后张力为 0；轻杆可拉可压，受力是否突变要看约束是否仍存在。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

核心规则：轻绳、轻杆的力可以突变；弹簧弹力由形变量决定，形变量在瞬间来不及改变，所以弹簧弹力在 $t=0+$ 保持剪断前的数值。

#### 情境表征
物块原来静止，弹簧向上拉，下面轻绳向下拉。剪断轻绳后，绳张力立刻变为 0，但弹簧还没来得及伸缩，弹簧弹力仍等于剪断前的 `kx`。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <line x1="170" y1="54" x2="290" y2="54" stroke="#334e68" stroke-width="5"></line>
  <path d="M230 54 L214 70 L246 86 L214 102 L246 118 L214 134 L246 150 L230 166" fill="none" stroke="#334e68" stroke-width="4"></path>
  <rect x="196" y="166" width="68" height="48" rx="6" fill="#2c7be5"></rect>
  <line x1="230" y1="214" x2="230" y2="258" stroke="#829ab1" stroke-width="4"></line>
  <line x1="230" y1="166" x2="230" y2="108" stroke="#e03131" stroke-width="4" marker-end="url(#m4up1)"></line>
  <line x1="212" y1="214" x2="212" y2="260" stroke="#e03131" stroke-width="4" marker-end="url(#m4down1)"></line>
  <text x="230" y="194" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">m</text>
  <text x="230" y="34" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">t=0- 静止</text>
  <text x="266" y="122" font-size="14" fill="#e03131">F弹=kx</text>
  <text x="176" y="244" font-size="14" fill="#e03131">mg 与 T0</text>
  <line x1="470" y1="54" x2="590" y2="54" stroke="#334e68" stroke-width="5"></line>
  <path d="M530 54 L514 70 L546 86 L514 102 L546 118 L514 134 L546 150 L530 166" fill="none" stroke="#334e68" stroke-width="4"></path>
  <rect x="496" y="166" width="68" height="48" rx="6" fill="#38b2ac"></rect>
  <line x1="530" y1="214" x2="530" y2="258" stroke="#b0bcc9" stroke-width="4" stroke-dasharray="7 5"></line>
  <line x1="530" y1="166" x2="530" y2="108" stroke="#e03131" stroke-width="4" marker-end="url(#m4up2)"></line>
  <line x1="512" y1="214" x2="512" y2="250" stroke="#e03131" stroke-width="4" marker-end="url(#m4down2)"></line>
  <line x1="588" y1="198" x2="588" y2="152" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m4a)"></line>
  <text x="530" y="194" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">m</text>
  <text x="530" y="34" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">t=0+ 绳断</text>
  <text x="568" y="122" font-size="14" fill="#e03131">F弹不变</text>
  <text x="604" y="174" font-size="14" fill="#7b2cbf">a</text>
  <text x="380" y="274" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">瞬时判断：先记住剪断前弹簧力，再重画剪断后受力图</text>
  <defs>
    <marker id="m4up1" viewBox="0 0 10 10" refX="5" refY="1" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 10 L5 0 L10 10z" fill="#e03131"></path></marker>
    <marker id="m4down1" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L5 10 L10 0z" fill="#e03131"></path></marker>
    <marker id="m4up2" viewBox="0 0 10 10" refX="5" refY="1" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 10 L5 0 L10 10z" fill="#e03131"></path></marker>
    <marker id="m4down2" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L5 10 L10 0z" fill="#e03131"></path></marker>
    <marker id="m4a" viewBox="0 0 10 10" refX="5" refY="1" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 10 L5 0 L10 10z" fill="#7b2cbf"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx1/spring-instant.html" width="100%" height="900" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：$m_{1}$、$m_{2}$、劲度系数 `k`、弹簧形变量 `x`、重力加速度 `g`；可切换 $cut_target$ 为“剪断 A-B 绳 / 剪断上弹簧 / 撤去下支撑”。画面对比 $t=0-$ 与 $t=0+$ 的受力、平衡差、瞬时加速度。

**证据任务。**
- 增大 $T_{0}$：看剪断后瞬时加速度 $a=T_{0}/m$ 如何变大。
- 切到“剪断 A-B 绳”：看 A 保留 $F_{\text{弹}}=kx$，B 只受重力。
- 切到“剪断上弹簧”：看被剪断的弹簧力为什么立刻消失。
- 切到“撤去下支撑”：看支持力 `N` 立刻变为 0，弹簧形变量仍保持。
- 拖动 `x` 偏离平衡值：看 $t=0-$ 平衡差如何提醒你先用平衡条件求原弹力。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| “剪断绳”“撤去支撑”“突然释放” | 关注 $t=0+$ 瞬时受力 |
| 装置中有弹簧 | 弹簧弹力不能突变 |
| 装置中有轻绳 | 绳张力可突变为 0 |
| 问瞬时加速度 | 重画剪断后受力图，用牛顿第二定律 |
| 问剪断前后比较 | 先写 $t=0-$ 平衡关系 |
| 多个物块用弹簧或绳相连 | 分别对每个物块重画 $t=0+$ 受力 |

#### 约束方程与求解路线
1. 先分析 $t=0-$，利用静止或匀速条件求弹簧原来的弹力。
2. 标出能突变的力：轻绳张力、接触力可能立刻改变。
3. 标出不能突变的量：弹簧形变量、弹簧弹力瞬时不变。
4. 重画 $t=0+$ 的受力图。
5. 对目标物体列 $ΣF=ma$。

#### 公式、变量、单位与条件
图中剪断前物块静止：

```text
t=0-：F弹 = mg + T0
F弹 = kx
```

剪断轻绳后：

```text
t=0+：T = 0
F弹 仍等于 mg + T0
合力 = F弹 - mg = T0
a = T0/m
```

画面中弹簧长度和 $F_{\text{弹}}$ 读数在剪断瞬间不变，虚线绳表示张力已经消失，紫色箭头表示瞬时加速度方向。

**模型失效边界。**
- “瞬时不变”只针对刚剪断的一瞬间，之后弹簧会运动并改变形变量。
- 轻绳只能拉不能压，剪断后张力为 0。
- 轻杆可拉可压，受力是否突变要看约束是否仍存在。
- 接触支持力可能突变为 0，例如物体刚离开接触面。
- 弹簧力不突变的前提是弹簧质量忽略、形变量不能在瞬间改变。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 剪断轻绳 | 绳张力立刻为 0 |
| 剪断弹簧 | 弹簧作用力消失 |
| 撤去支撑 | 支持力可能立刻消失 |
| 问某物瞬时加速度 | 重画 $t=0+$ 受力 |
| 多物体弹簧连接 | 每个物体分别看弹簧力是否保持 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 剪断绳后把弹簧力也改掉 | 弹簧形变量不能突变 | 保留原 `kx` |
| 剪断后仍保留绳张力 | 绳已断，不能传力 | 令 $T=0$ |
| 用剪断前平衡直接说 $a=0$ | 受力已经变了 | 重画 $t=0+$ |
| 忘记方向 | 合力方向决定加速度方向 | 画箭头再列方程 |
| 把瞬时和之后混在一起 | 之后弹簧会伸缩 | 题问瞬时只看 $t=0+$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-04）

<h4 id="model-projectile-like">M-05 平抛与类平抛 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
平抛与类平抛模型处理“一个方向匀速、垂直方向匀加速”的二维运动。普通平抛的恒力是重力；带电粒子在匀强电场中的偏转，恒力可以是电场力。力的来源不同，数学结构相同。

核心方法：先沿恒力方向求时间或偏移，再沿初速度方向求位移。

#### 情境表征



> **公式首次使用卡**：适用边界——空气阻力忽略；平抛要求初速度水平，竖直初速度为 0；类平抛要求加速度恒定，且与初速度方向垂直。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

平抛中，水平方向没有力，速度保持 $v_{0}$；竖直方向受重力，做初速度为 0 的匀加速运动。类平抛只需把“竖直方向”和“重力”换成“受恒力方向”和“恒加速度”。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <rect x="80" y="74" width="90" height="18" fill="#829ab1"></rect>
  <circle cx="184" cy="82" r="10" fill="#2c7be5"></circle>
  <path d="M184 82 C284 98 372 150 470 242" fill="none" stroke="#2c7be5" stroke-width="4"></path>
  <line x1="184" y1="82" x2="286" y2="82" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m5vx)"></line>
  <line x1="184" y1="82" x2="184" y2="170" stroke="#e03131" stroke-width="4" marker-end="url(#m5ay)"></line>
  <line x1="184" y1="250" x2="470" y2="250" stroke="#486581" stroke-width="3"></line>
  <line x1="470" y1="82" x2="470" y2="250" stroke="#486581" stroke-width="3" stroke-dasharray="7 5"></line>
  <text x="236" y="64" font-size="15" fill="#7b2cbf" text-anchor="middle" font-weight="700">x=v0t</text>
  <text x="154" y="132" font-size="15" fill="#e03131" text-anchor="middle" font-weight="700">y=1/2at²</text>
  <text x="326" y="270" font-size="15" fill="#486581" text-anchor="middle">水平位移 x</text>
  <text x="510" y="168" font-size="15" fill="#486581">偏移 y</text>
  <text x="380" y="36" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">共同结构：初速度方向匀速，垂直恒力方向匀加速</text>
  <text x="380" y="284" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">先定坐标轴，再分方向列方程，最后合成位移或速度</text>
  <defs>
    <marker id="m5vx" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
    <marker id="m5ay" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L5 10 L10 0z" fill="#e03131"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx2/projectile.html" width="100%" height="820" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/bx2/oblique-throw.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

可拖动参数：$v_{0}$、`h`、`g`、`q`、`m`、`E`、$plate_length$ 和时间 `t`；可切换“重力平抛 / 电场类平抛”。实时变化：轨迹、水平位移、偏转位移、速度分量、偏角、落地/出场时间和电偏转加速度 $a=qE/m$。下方斜抛实验台可作为拓展对照。

**证据任务。**
- 在“重力平抛”中改变 $v_{0}$：看落地时间是否不变、水平射程是否改变。
- 在“重力平抛”中改变高度 `h` 或 `g`：看公共时间为什么由加速方向决定。
- 在“电场类平抛”中改变 `q` 的正负：看偏转方向为什么反过来。
- 改变 `E`、`m`、$plate_length$：看 $a=qE/m$ 和出场时间如何共同决定偏移。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 初速度水平，只受重力 | 标准平抛 |
| 一个方向不受力，另一个方向受恒力 | 类平抛 |
| 带电粒子垂直进入匀强电场 | 电场偏转类平抛 |
| 问落点、偏移、速度方向 | 分方向列方程 |
| 问穿出极板 | 先用水平方向确定飞行时间 |

#### 约束方程与求解路线
1. 选坐标轴：一轴沿初速度方向，一轴沿恒力方向。
2. 沿初速度方向写匀速方程。
3. 沿恒力方向写匀加速方程。
4. 先用已知长度或高度求时间。
5. 再求另一个方向位移、偏移或速度分量。
6. 最后用矢量合成求速度大小和方向。

#### 公式、变量、单位与条件
普通平抛：

```text
x = v0t
y = 1/2 gt²
vy = gt
t落 = √(2h/g)
R = v0√(2h/g)
tanθ = vy/vx = gt/v0
```

电场类平抛，粒子以 $v_{0}$ 垂直进入匀强电场：

```text
x = v0t
a = qE/m
y = 1/2 at² = qE t²/(2m)
vy = at
tanθ = vy/vx
若极板长度为 l：t = l/v0
偏移 y = qE l²/(2m v0²)
```

画面中的水平位移对应 $x=v_{0}t$，竖直偏移对应 $y=1/2at^{2}$，速度方向角由两个速度分量的比值决定。

**模型失效边界。**
- 空气阻力忽略。
- 平抛要求初速度水平，竖直初速度为 0。
- 类平抛要求加速度恒定，且与初速度方向垂直。
- 带电粒子题常忽略重力，但题目若给质量大、速度小或要求考虑重力，要同时受力分析。
- 若粒子未能穿出极板，要用边界条件判断是否打到极板。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 求落地时间 | 竖直方向先求 |
| 求水平射程 | $x=v_{0}t$ |
| 求落地速度方向 | $\tan \theta =vy/vx$ |
| 电场偏转偏移 | 先 $t=l/v_{0}$，再 $y=1/2at^{2}$ |
| 判断是否出极板 | 比较偏移 `y` 与极板半间距 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 用水平速度求落地时间 | 时间由竖直方向高度决定 | 先看受恒力方向 |
| 把速度大小直接相加 | 速度是矢量 | 分量合成 |
| 忘记电场力方向 | 偏转方向由 `qE` 决定 | 先判电荷正负 |
| 类平抛仍写 `g` | 恒加速度不一定是重力 | 用 $a=F/m$ |
| 极板题不判是否打板 | 公式默认能穿出 | 比较偏移与板间距 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-05）

<h4 id="model-circular-critical">M-06 圆周临界模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
圆周临界模型处理“刚好能通过、刚好不脱离、刚好相切、刚好打到边界”的问题。它的本质不是某个固定公式，而是把临界条件翻译成受力或几何边界。

竖直圆周最常见：最高点速度太小，绳会松或轨道会脱离；速度刚好时，约束力为 0。磁场圆周临界则常表现为轨迹圆刚好与边界相切。

#### 情境表征



> **公式首次使用卡**：适用边界——最高点最小速度等于 √(gr) 只适用于轻绳或内轨道恰好不松弛、不脱离的边界；轻杆或圆管可以提供双向约束，必须重新判断最高点约束力方向。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

最高点是竖直圆周的关键位置，因为此时圆心在下方，向心方向向下。绳只能向下拉，不能向上推，所以绳模型要求最高点速度至少达到 $\sqrt{gr}$。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <circle cx="250" cy="154" r="90" fill="none" stroke="#829ab1" stroke-width="4"></circle>
  <circle cx="250" cy="64" r="13" fill="#2c7be5"></circle>
  <line x1="250" y1="64" x2="250" y2="154" stroke="#334e68" stroke-width="3"></line>
  <line x1="250" y1="64" x2="250" y2="128" stroke="#e03131" stroke-width="4" marker-end="url(#m6down1)"></line>
  <line x1="276" y1="64" x2="340" y2="64" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m6v)"></line>
  <text x="216" y="102" font-size="14" fill="#e03131">mg + T</text>
  <text x="310" y="50" font-size="14" fill="#7b2cbf">v_top</text>
  <text x="250" y="274" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">绳模型临界：T=0，mg=mv²/r</text>
  <rect x="470" y="80" width="180" height="130" fill="#eef4ff" stroke="#2c7be5" stroke-width="3"></rect>
  <path d="M500 190 A76 76 0 0 1 644 118" fill="none" stroke="#7b2cbf" stroke-width="4"></path>
  <circle cx="644" cy="118" r="6" fill="#7b2cbf"></circle>
  <line x1="644" y1="118" x2="666" y2="118" stroke="#e03131" stroke-width="4" marker-end="url(#m6tan)"></line>
  <text x="560" y="66" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">磁场边界临界</text>
  <text x="594" y="238" font-size="15" fill="#102a43" text-anchor="middle">轨迹刚好相切或刚好打到边界</text>
  <text x="380" y="34" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">临界 = 约束力刚好为 0，或轨迹刚好碰到边界</text>
  <defs>
    <marker id="m6down1" viewBox="0 0 10 10" refX="5" refY="9" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L5 10 L10 0z" fill="#e03131"></path></marker>
    <marker id="m6v" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
    <marker id="m6tan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx2/vertical-circle.html" width="100%" height="820" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：质量 `m`、半径 `r`、速度 `v`、重力加速度 `g`、位置角 $position_angle$，并可切换 $type_rope_or_rod$。实时变化：径向合力 $ΣF_{\text{径}}=mv^{2}/r$、约束力、最高点临界速度 $\sqrt{gr}$、最低点支持/拉力和磁场迁移半径 $r=mv/qB$。

**证据任务。**
- 在绳模型下降低 $v_top$：看何时提示绳松弛。
- 切到杆模型：看低速过顶时杆为什么可以向上托。
- 拖动 $position_angle$：看同一速度在不同位置时，重力径向分量如何改变约束力。
- 增大半径 `r` 或 `g`：看临界速度 $\sqrt{gr}$ 如何变大。
- 看磁场迁移读数：理解“刚好相切”对应的是轨迹半径 $r=mv/qB$ 的几何临界。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| “恰好通过最高点” | 约束力常为 0 |
| “不脱离轨道” | 法向压力临界为 0 |
| “轻绳、轻杆、圆管” | 约束力方向限制不同 |
| “最低点至少多快” | 最高点临界 + 机械能 |
| 磁场中“刚好不射出/刚好相切” | 用轨迹圆半径和边界几何 |

#### 约束方程与求解路线
1. 找临界位置：竖直圆周多在最高点，磁场题多在边界相切点。
2. 明确向心方向。
3. 只画真实力，不额外画“向心力”。
4. 沿向心方向列 $ΣF=mv^{2}/r$。
5. 把临界条件代入：绳 $T=0$，轨道压力 $N=0$，磁场轨迹相切。
6. 若已知最低点或其他位置速度，用机械能或几何先换到临界位置。

#### 公式、变量、单位与条件
绳模型最高点：

```text
mg + T = mv_top²/r
T ≥ 0
临界：T=0
v_top,min = √(gr)
```

从最低点恰好完成完整圆周：

```text
最高点：v_top² = gr
能量：1/2mv_bottom² = 1/2mv_top² + mg·2r
v_bottom,min = √(5gr)
```

磁场圆周迁移：

```text
qvB = mv²/R
R = mv/(qB)
临界常由“轨迹圆刚好与边界相切”给出 R 的几何关系
```

画面中最高点约束力读数若为 0，就是绳模型临界；若为负，说明绳模型不成立，杆模型则表示杆向上托。

**模型失效边界。**
- $v_top,min=\sqrt{gr}$ 只适用于绳或内轨道最高点刚好不松、不脱离。
- 轻杆、圆管可推可拉，最高点可以低速通过，但约束力方向会改变。
- 最低点临界速度 $\sqrt{5gr}$ 来自“最高点临界 + 能量守恒”，不能直接套到最高点。
- 有摩擦或非保守力时，机械能关系要改用能量守恒或动能定理。
- 磁场临界题的关键是画轨迹圆，不是把竖直圆周公式搬过去。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 绳球恰好过顶 | 令最高点 $T=0$ |
| 内轨道不脱离 | 令最高点 $N=0$ |
| 杆球低速过顶 | 允许约束力为负 |
| 最低点至少速度 | 最高点临界 + 能量 |
| 磁场边界临界 | 画圆心，找相切几何 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 所有圆周都套 $\sqrt{gr}$ | 杆和圆管不一样 | 先看约束能否推 |
| 最高点向心方向画反 | 最高点圆心在下方 | 向心方向向下 |
| 受力图多画向心力 | 向心力是合力效果 | 只画真实力 |
| 最低点直接用 $\sqrt{gr}$ | $\sqrt{gr}$ 是最高点临界 | 用能量换位置 |
| 磁场题不画圆心 | 边界临界看几何 | 先画轨迹圆 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-06）

<h4 id="model-orbital-motion">M-07 天体运动模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
天体运动模型处理卫星圆轨道、变轨、同步卫星、双星等问题。它的共同核心是：万有引力提供向心力；但不同题型的比较对象不同，不能把圆轨道公式、椭圆轨道同点变速、双星关系混在一起。

最重要的第一问不是“套哪个公式”，而是先判断：这是圆轨道、变轨同一点，还是双星绕共同质心。

#### 情境表征
圆轨道比较看轨道半径 `r`；变轨比较看同一点加速或减速；双星比较看两星到共同质心的距离。三类题都用向心思想，但对象不同。

<svg viewBox="0 0 760 300" width="100%" style="max-width:920px">
  <circle cx="160" cy="158" r="38" fill="#2c7be5" opacity=".18" stroke="#2c7be5" stroke-width="3"></circle>
  <circle cx="160" cy="158" r="80" fill="none" stroke="#829ab1" stroke-width="3"></circle>
  <circle cx="240" cy="158" r="9" fill="#f0a500"></circle>
  <line x1="240" y1="158" x2="160" y2="158" stroke="#e03131" stroke-width="4" marker-end="url(#m7g)"></line>
  <text x="160" y="266" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">圆轨道：GMm/r²=mv²/r</text>
  <circle cx="380" cy="158" r="42" fill="#2c7be5" opacity=".18" stroke="#2c7be5" stroke-width="3"></circle>
  <ellipse cx="380" cy="158" rx="126" ry="70" fill="none" stroke="#7b2cbf" stroke-width="3"></ellipse>
  <circle cx="506" cy="158" r="9" fill="#f0a500"></circle>
  <line x1="506" y1="158" x2="560" y2="158" stroke="#e03131" stroke-width="4" marker-end="url(#m7burn)"></line>
  <text x="380" y="266" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">变轨：同一点加速升轨</text>
  <circle cx="620" cy="158" r="5" fill="#e03131"></circle>
  <circle cx="576" cy="158" r="16" fill="#2c7be5"></circle>
  <circle cx="670" cy="158" r="10" fill="#f0a500"></circle>
  <circle cx="620" cy="158" r="44" fill="none" stroke="#2c7be5" stroke-dasharray="6 5"></circle>
  <circle cx="620" cy="158" r="50" fill="none" stroke="#f0a500" stroke-dasharray="6 5"></circle>
  <text x="620" y="266" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">双星：同周期，同角速度</text>
  <text x="380" y="38" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">天体题先分类：圆轨道比较、变轨同点比较、双星质心关系</text>
  <defs>
    <marker id="m7g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m7burn" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx2/satellite.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/bx2/orbit-transfer.html" width="100%" height="570" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

<iframe src="anim/bx2/binary-star.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

可拖动参数：轨道半径、变轨轨道、双星质量。实时变化：圆轨道速度/周期、近地点远地点速度、双星半径、角速度和周期。

**证据任务。**
- 增大圆轨道半径 `r`：看速度变小、周期变大。
- 看变轨同一点：加速后进入更高的椭圆转移轨道，不是立刻变成高圆速度。
- 改变双星质量：看质量大的星离共同质心更近。
- 对比三类图：确认“圆轨道不同半径比较”和“同一点变轨前后比较”不是一回事。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| “绕地做匀速圆周运动” | 用圆轨道公式 |
| “轨道半径越大比较 v、ω、T、a” | 高轨低速长周期 |
| “点火加速/减速变轨” | 同一点速度突变，之后走椭圆 |
| “近地点/远地点” | 椭圆轨道中同一机械能下近地点更快 |
| “两星绕共同质心” | 双星模型，同周期同角速度 |

#### 约束方程与求解路线
1. 先分类：圆轨道、变轨、双星。



> **公式首次使用卡**：适用边界——圆轨道公式只适用于稳定圆轨道，不可直接套到椭圆轨道所有位置；变轨同一点比较时，引力大小由位置决定，点火前后同一点引力不突变；高圆轨道速度小于低圆轨道速度，但在转移轨道近地点速度可大于低圆轨道速度。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

2. 圆轨道：写 $GMm/r^{2}=mv^{2}/r$。
3. 变轨：先看同一点点火前后速度变化，再看转移轨道远近点。
4. 双星：先找共同质心，写 $r_{1}+r_{2}=L$、$m_{1}r_{1}=m_{2}r_{2}$。
5. 比较题必须说明比较对象：同一轨道、不同圆轨道，还是同一点不同轨道。

#### 公式、变量、单位与条件
圆轨道：

```text
GMm/r² = mv²/r
v = √(GM/r)
ω = √(GM/r³)
T = 2π√(r³/GM)
a = GM/r²
```

变轨：

```text
同一点加速：速度瞬间增大，进入更高转移轨道
同一点减速：速度瞬间减小，进入更低转移轨道
椭圆轨道：近地点速度大，远地点速度小
```

双星：

```text
r1 + r2 = L
m1r1 = m2r2
ω1 = ω2
Gm1m2/L² = m1ω²r1 = m2ω²r2
```

画面中圆轨道半径对应 `r`，变轨箭头对应同一点速度改变，双星中红点是共同质心。

**模型失效边界。**
- 圆轨道公式只适用于稳定圆轨道，不可直接套到椭圆轨道所有位置。
- 变轨同一点比较时，引力大小由位置决定，点火前后同一点引力不突变。
- 高圆轨道速度小于低圆轨道速度，但在转移轨道近地点速度可大于低圆轨道速度。
- 同步卫星还要求周期为 24 h、赤道平面、同向绕行。
- 双星不是一个星静止、另一个绕它转，而是两星都绕共同质心转。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 圆轨道比较 | 看 `r`，高轨低速长周期 |
| 同步卫星 | 先写 $T=24h$ |
| 升轨变轨 | 近地点加速、远地点再加速 |
| 降轨变轨 | 远地点减速、近地点再减速 |
| 双星比较 | 同周期同角速度，半径与质量反比 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 高轨速度一定更大 | 圆轨道中 $v=\sqrt{GM/r}$ | 高轨圆速度更小 |
| 点火后立刻套高圆速度 | 点火后先进入椭圆 | 区分转移轨道和圆轨道 |
| 同一点变轨前后引力变了 | 位置没变，引力大小不变 | 引力看 `r` |
| 双星认为大质量星不动 | 两星都绕质心转 | 写 $m_{1}r_{1}=m_{2}r_{2}$ |
| 比较题不说明对象 | 容易得出相反结论 | 先写比较对象 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-07）

<h4 id="model-vehicle-start">M-08 机车启动模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象



> **公式首次使用卡**：适用边界——阻力常按恒定处理，若题目给 f=kv 或空气阻力变化，不能直接用恒阻模型；恒功率启动不能从 v=0 直接套 F=P/v，真实车辆起步通常先有限牵引力；最大速度是加速度为 0 的稳定速度，不是发动机停止工作。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

机车启动模型处理牵引力、功率、速度、阻力和加速度之间的联动。它不是单独的功率题，也不是单独的牛顿第二定律题，而是把 $P=Fv$ 与 $F-f=ma$ 连在一起。

核心判断：牵引力大于阻力时加速；速度增大后若功率恒定，则牵引力 $F=P/v$ 变小，加速度逐渐减小；当 $F=f$ 时达到最大速度。

#### 情境表征
机车向右运动，牵引力向右，阻力向左。功率关系决定牵引力能有多大，牛顿第二定律决定加速度。

<svg viewBox="0 0 760 280" width="100%" style="max-width:920px">
  <rect x="120" y="168" width="520" height="14" fill="#d9e2ec"></rect>
  <rect x="260" y="112" width="150" height="56" rx="8" fill="#829ab1"></rect>
  <circle cx="292" cy="172" r="13" fill="#102a43"></circle>
  <circle cx="378" cy="172" r="13" fill="#102a43"></circle>
  <line x1="410" y1="140" x2="560" y2="140" stroke="#e03131" stroke-width="5" marker-end="url(#m8F)"></line>
  <line x1="260" y1="150" x2="150" y2="150" stroke="#7b2cbf" stroke-width="5" marker-end="url(#m8f)"></line>
  <line x1="314" y1="204" x2="470" y2="204" stroke="#2c7be5" stroke-width="4" marker-end="url(#m8v)"></line>
  <text x="485" y="120" font-size="15" fill="#e03131" text-anchor="middle" font-weight="700">牵引力 F</text>
  <text x="196" y="130" font-size="15" fill="#7b2cbf" text-anchor="middle" font-weight="700">阻力 f</text>
  <text x="392" y="230" font-size="15" fill="#2c7be5" text-anchor="middle" font-weight="700">速度 v</text>
  <text x="335" y="145" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">机车</text>
  <text x="380" y="44" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">功率决定牵引力：P=Fv；合力决定加速度：F-f=ma</text>
  <text x="380" y="260" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">最大速度条件：F=f，所以 vmax=P额/f</text>
  <defs>
    <marker id="m8F" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m8f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
    <marker id="m8v" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#2c7be5"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx2/vehicle-start.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：启动方式、额定功率、阻力、质量、恒牵引力、当前速度。实时变化：牵引力、输出功率、加速度、最大速度和阶段判断。

**证据任务。**
- 选择恒功率启动：增大速度，看 $F=P/v$ 如何变小。
- 选择恒牵引力启动：看达到额定功率前为什么是匀加速。
- 增大阻力 `f`：看最大速度 $vmax=P_{\text{额}}/f$ 如何变小。
- 增大质量 `m`：看同样合力下加速度如何变小。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 给额定功率 $P_{\text{额}}$ 和阻力 `f` | 常求最大速度 |
| “恒定功率启动” | 用 $F=P/v$，加速度变小 |
| “恒定牵引力启动” | 先用 $F_{0}-f=ma$ |
| “达到额定功率” | 临界速度 $v_{1}=P_{\text{额}}/F_{0}$ |
| “最大速度” | 条件 $F=f$ |

#### 约束方程与求解路线
1. 判断启动方式：恒功率还是恒牵引力。
2. 写功率关系 $P=Fv$。
3. 写动力学关系 $F-f=ma$。
4. 恒牵引力阶段先求 $a=(F_{0}-f)/m$ 和 $v_{1}=P_{\text{额}}/F_{0}$。
5. 恒功率阶段用 $F=P_{\text{额}}/v$，判断加速度随速度变化。
6. 最大速度令 $a=0$，即 $F=f$。

#### 公式、变量、单位与条件
恒功率启动：

```text
P=P额
F=P额/v
a=(P额/v - f)/m
vmax=P额/f
```

恒牵引力到额定功率：

```text
F=F0
a=(F0-f)/m
P=F0v
达到额定功率：v1=P额/F0
之后转入恒功率阶段
```

画面中红色箭头对应牵引力 `F`，紫色箭头对应阻力 `f`，蓝色箭头对应速度 `v`，读数直接显示 $a=(F-f)/m$。

**模型失效边界。**
- 阻力常按恒定处理，若题目给 $f=kv$ 或空气阻力变化，不能直接用恒阻模型。
- 恒功率启动不能从 $v=0$ 直接套 $F=P/v$，真实车辆起步通常先有限牵引力。
- 最大速度是加速度为 0 的稳定速度，不是发动机停止工作。
- 恒牵引力阶段达到额定功率后，牵引力不能继续保持 $F_{0}$。
- 下坡、上坡要把重力沿坡面分量计入阻力或动力。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 求最大速度 | $vmax=P_{\text{额}}/f$ |
| 求达到额定功率速度 | $v_{1}=P_{\text{额}}/F_{0}$ |
| 求恒牵引力阶段时间 | $a=(F_{0}-f)/m$，再用运动学 |
| 判断加速度变化 | 看 $F=P/v$ 是否变小 |
| 求某速度下加速度 | 先 $F=P/v$，再 $a=(F-f)/m$ |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 恒功率阶段认为牵引力不变 | $F=P/v$ 随 v 变 | 速度越大牵引力越小 |
| 最大速度时功率为 0 | 仍有功率克服阻力 | $F=f$，$P=fvmax$ |
| 恒牵引力阶段超过额定功率 | 发动机受额定功率限制 | 到 $v_{1}$ 后转恒功率 |
| 忘记阻力 | 合力不是牵引力 | 用 $F-f=ma$ |
| 把平均速度当瞬时速度 | $P=Fv$ 用瞬时速度 | 看题目要求时刻 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-08）

<h4 id="model-work-energy">M-09 功能关系综合 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
功能关系综合处理“力做功和能量变化怎么对应”的问题。它不是把所有能量公式堆在一起，而是先问：哪个力做功？题目问哪种能量变化？

核心对应：合力总功改变动能；重力做功改变重力势能；弹力做功改变弹性势能；摩擦等非保守力做功改变机械能，并常转化为内能。

#### 情境表征
物体从高处下滑，重力做正功，摩擦力做负功。动能增加多少，要看合力总功；机械能减少多少，要看摩擦力做了多少负功。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <path d="M140 214 L510 92" stroke="#829ab1" stroke-width="8"></path>
  <rect x="272" y="137" width="62" height="38" rx="6" fill="#2c7be5" transform="rotate(-18 303 156)"></rect>
  <line x1="304" y1="156" x2="384" y2="130" stroke="#e03131" stroke-width="4" marker-end="url(#m9g)"></line>
  <line x1="304" y1="156" x2="230" y2="180" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m9f)"></line>
  <line x1="520" y1="92" x2="520" y2="214" stroke="#486581" stroke-width="3" stroke-dasharray="6 5"></line>
  <text x="550" y="154" font-size="15" fill="#486581">高度 h</text>
  <text x="388" y="112" font-size="14" fill="#e03131" font-weight="700">WG=mgh</text>
  <text x="214" y="192" font-size="14" fill="#7b2cbf" font-weight="700">Wf<0</text>
  <rect x="560" y="92" width="34" height="118" fill="#f0a500" opacity=".8"></rect>
  <rect x="604" y="142" width="34" height="68" fill="#2c7be5" opacity=".8"></rect>
  <rect x="648" y="174" width="34" height="36" fill="#7b2cbf" opacity=".8"></rect>
  <text x="577" y="228" font-size="13" fill="#102a43" text-anchor="middle">Ep</text>
  <text x="621" y="228" font-size="13" fill="#102a43" text-anchor="middle">Eₖ</text>
  <text x="665" y="228" font-size="13" fill="#102a43" text-anchor="middle">E内</text>
  <text x="380" y="42" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">先找做功的力，再找对应变化的能量</text>
  <text x="380" y="270" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">W合=ΔEₖ；W非保守=ΔE机械；E总守恒</text>
  <defs>
    <marker id="m9g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m9f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/bx2/work-energy-relation.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/bx2/energy-conservation.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

可拖动参数：高度、摩擦因数、质量等。实时变化：重力做功、摩擦做功、动能变化、机械能变化、内能和总能量。

**证据任务。**
- 把摩擦调为 0：看机械能是否守恒。
- 增大摩擦：看机械能减少量是否等于摩擦力做功的绝对值。
- 增大高度：看重力势能和可转化能量如何增大。
- 对比两张能量图：区分“机械能不守恒”和“总能量守恒”。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|



> **公式首次使用卡**：适用边界——动能定理适用于任何过程，但必须用所有力做功的代数和；机械能守恒要求只有重力或弹力做功，或其他力做功代数和为 0；支持力、绳拉力不一定破坏机械能，关键看是否做功。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| 问速度、动能变化 | 优先动能定理 $W_{\text{合}}=\Delta E_{k}$ |
| 问机械能减少 | 看非保守力做功 |
| 有摩擦、阻力、碰撞 | 机械能通常不守恒 |
| 只有重力或弹力做功 | 可用机械能守恒 |
| 问热量、内能 | 常用 $Q=f\cdot \text{相对位移}$ 或机械能损失 |

#### 约束方程与求解路线
1. 明确研究对象和过程。
2. 列出做功的力：重力、弹力、摩擦力、拉力、支持力等。
3. 判断题目问动能、机械能、势能还是内能。
4. 选择对应关系：$W_{\text{合}}=\Delta E_{k}$、$WG=-\Delta E_{p}$、$W_{\text{非保守}}=\Delta E_{\text{机械}}$。
5. 写能量方程，并检查正负号。

#### 公式、变量、单位与条件
常用关系：

```text
合力做功：W合 = ΔEₖ
重力做功：WG = -ΔEp
弹力做功：W弹 = -ΔEp弹
除重力和弹力外其他力做功：W其他 = ΔE机械
总能量守恒：E机械初 = E机械末 + E内 + 其他形式能
```

粗糙斜面下滑：

```text
WG = mgh
Wf = -fs
ΔEₖ = WG + Wf
ΔE机械 = Wf
E内 = -Wf
```

画面中红色箭头对应重力做功，紫色箭头对应摩擦做功，能量柱显示动能、势能、内能之间的转化。

**模型失效边界。**
- 动能定理适用于任何过程，但必须用所有力做功的代数和。
- 机械能守恒要求只有重力或弹力做功，或其他力做功代数和为 0。
- 支持力、绳拉力不一定破坏机械能，关键看是否做功。
- 摩擦生热通常看相对位移，不一定等于物体对地位移。
- 碰撞、爆炸、非弹性过程要特别区分动量守恒与机械能是否守恒。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 求末速度 | 动能定理或机械能守恒 |
| 求摩擦做功 | $Wf=\Delta E_{k}-WG$ |
| 求机械能减少 | 看非保守力做功 |
| 求热量 | 摩擦力乘相对位移 |
| 能量综合 | 先画能量流向图 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 某个力做功等于动能变化 | 动能变化对应合力总功 | 求 `ΣW` |
| 有支持力就说机械能不守恒 | 支持力可能不做功 | 看做功而不是看受力 |
| 摩擦力做功正负号乱 | 摩擦通常做负功 | 按位移方向定符号 |
| 机械能不守恒就不能用能量 | 总能量仍守恒 | 加上内能 |
| 热量用物块位移 | 摩擦生热看相对位移 | 用 $Q=f\cdot s_{\text{相对}}$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-09）

<h4 id="model-collision">M-10 碰撞模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
碰撞模型处理两个物体短时间强相互作用后的速度、动能损失和类型判断。碰撞题的第一原则是动量守恒，前提是系统所受合外力为零，或碰撞时间极短、内力远大于外力。

核心分类：弹性碰撞动量和动能都守恒；完全非弹性碰撞碰后粘在一起同速，动能损失最大；一般非弹性碰撞动量守恒但动能减少。

#### 情境表征
两车相撞，内力成对出现，给彼此的冲量大小相等、方向相反，所以系统总动量不变。但车身形变、发热、声音会消耗机械能，因此动能不一定守恒。

<svg viewBox="0 0 760 280" width="100%" style="max-width:920px">
  <rect x="116" y="168" width="530" height="16" fill="#d9e2ec"></rect>
  <rect x="188" y="116" width="94" height="52" rx="7" fill="#2c7be5"></rect>
  <rect x="440" y="116" width="110" height="52" rx="7" fill="#38b2ac"></rect>
  <circle cx="212" cy="172" r="11" fill="#102a43"></circle>
  <circle cx="258" cy="172" r="11" fill="#102a43"></circle>
  <circle cx="466" cy="172" r="11" fill="#102a43"></circle>
  <circle cx="526" cy="172" r="11" fill="#102a43"></circle>
  <line x1="282" y1="142" x2="382" y2="142" stroke="#e03131" stroke-width="5" marker-end="url(#m10v1)"></line>
  <line x1="440" y1="142" x2="392" y2="142" stroke="#7b2cbf" stroke-width="5" marker-end="url(#m10v2)"></line>
  <text x="235" y="147" font-size="17" fill="#fff" text-anchor="middle" font-weight="700">m1</text>
  <text x="495" y="147" font-size="17" fill="#fff" text-anchor="middle" font-weight="700">m2</text>
  <text x="332" y="122" font-size="14" fill="#e03131" text-anchor="middle">v1</text>
  <text x="416" y="122" font-size="14" fill="#7b2cbf" text-anchor="middle">v2</text>
  <path d="M360 104 L376 132 L346 132 L366 168 L330 124 L360 124 Z" fill="#f0a500" opacity=".8"></path>
  <text x="380" y="42" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">碰撞先写动量守恒，再判断动能是否守恒</text>
  <text x="380" y="240" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">m1v1+m2v2 = m1v1′+m2v2′；完全非弹性：v1′=v2′</text>
  <defs>
    <marker id="m10v1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m10v2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/xb1/momentum-collision.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：两物体质量、碰前速度、碰撞类型。实时变化：碰前后总动量、碰前后总动能、碰后速度和是否粘连。

**证据任务。**
- 切换弹性碰撞：看总动量和总动能是否都守恒。
- 切换完全非弹性：看两车是否粘在一起同速，总动能是否减少。
- 改变质量比：看轻重物体碰后速度变化差异。
- 改变速度正负：看一维动量必须带方向。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| “碰撞时间极短” | 可近似动量守恒 |
| “光滑水平面” | 外力合力为零，动量守恒 |
| “弹性碰撞” | 动量和动能都守恒 |
| “粘在一起/嵌入” | 完全非弹性碰撞 |
| “损失机械能” | 比较碰前后动能 |

#### 约束方程与求解路线
1. 选系统：通常选两个碰撞物体。
2. 规定正方向，一维速度带正负号。
3. 判断动量守恒条件是否满足。
4. 写动量守恒方程。
5. 根据题目类型补第二个条件：弹性用动能守恒，完全非弹性用共同速度。



> **公式首次使用卡**：适用边界——动量守恒是矢量关系，一维必须规定正方向；碰撞过程中外力冲量可忽略时，系统动量近似守恒；弹性碰撞不是“速度交换”的同义词；只有等质量、一动一静等特殊情况才交换速度。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

6. 若问损失能量，再算 $\Delta E_{k}$。

#### 公式、变量、单位与条件
动量守恒：

```text
m1v1 + m2v2 = m1v1' + m2v2'
```

弹性碰撞还满足：

```text
1/2m1v1² + 1/2m2v2² = 1/2m1v1'² + 1/2m2v2'²
```

完全非弹性碰撞：

```text
v1' = v2' = v共
v共 = (m1v1+m2v2)/(m1+m2)
损失动能 = Eₖ前 - Eₖ后
```

画面中两个“总动量”读数用于检查守恒；两个“总动能”读数用于区分弹性与非弹性。

**模型失效边界。**
- 动量守恒是矢量关系，一维必须规定正方向。
- 碰撞过程中外力冲量可忽略时，系统动量近似守恒。
- 弹性碰撞不是“速度交换”的同义词；只有等质量、一动一静等特殊情况才交换速度。
- 非弹性碰撞动量仍可守恒，减少的是机械能。
- 爆炸、反冲与碰撞同属动量守恒应用，但能量来源可能不同。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 粘连同速 | 完全非弹性，先求 $v_{\text{共}}$ |
| 弹性碰撞 | 动量 + 动能两式联立 |
| 子弹打木块 | 完全非弹性，动量求共速，能量求损失 |
| 速度方向相反 | 规定正方向带符号 |
| 判断碰撞是否可能 | 检查动量守恒和动能不增加 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 非弹性碰撞说动量不守恒 | 合外力可忽略时动量仍守恒 | 区分动量和动能 |
| 用动能守恒解粘连题 | 粘连一定损失动能 | 用共同速度条件 |
| 忘记速度方向 | 动量是矢量 | 先规定正方向 |
| 一个方程解弹性碰撞两个未知量 | 条件不够 | 加动能守恒 |
| 认为动能可以增加 | 普通碰撞不会凭空增加机械能 | 检查 $Ek_{\text{后}}\le Ek_{\text{前}}$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-10）

<h4 id="model-rail-rod">M-11 导轨模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
导轨模型处理导体棒在磁场中运动、切割磁感线产生感应电动势的问题。它同时考电磁感应、电路、安培力、动力学和能量守恒，是电磁感应大题的标准骨架。

核心链条：导体棒运动产生电源，电源推动电流，电流在磁场中受安培力，安培力通常阻碍运动并把机械能转化为焦耳热。

#### 情境表征
导体棒向右运动，磁场垂直纸面向里。棒切割磁感线产生动生电动势，闭合回路中出现感应电流；电流棒受到向左的安培阻力。

<svg viewBox="0 0 760 280" width="100%" style="max-width:920px">
  <line x1="120" y1="98" x2="620" y2="98" stroke="#829ab1" stroke-width="6"></line>
  <line x1="120" y1="190" x2="620" y2="190" stroke="#829ab1" stroke-width="6"></line>
  <line x1="236" y1="92" x2="236" y2="196" stroke="#e8590c" stroke-width="8"></line>
  <rect x="430" y="86" width="62" height="116" fill="none" stroke="#334e68" stroke-width="4"></rect>
  <text x="461" y="148" font-size="16" fill="#334e68" text-anchor="middle" font-weight="700">R</text>
  <line x1="236" y1="144" x2="342" y2="144" stroke="#2c7be5" stroke-width="5" marker-end="url(#m11v)"></line>
  <line x1="236" y1="70" x2="150" y2="70" stroke="#7b2cbf" stroke-width="5" marker-end="url(#m11f)"></line>
  <text x="300" y="124" font-size="14" fill="#2c7be5" font-weight="700">v</text>
  <text x="184" y="52" font-size="14" fill="#7b2cbf" font-weight="700">F安阻</text>
  <g fill="#486581" font-size="18" text-anchor="middle">
    <text x="150" y="132">⊗</text><text x="190" y="132">⊗</text><text x="270" y="132">⊗</text><text x="330" y="132">⊗</text><text x="390" y="132">⊗</text><text x="540" y="132">⊗</text>
    <text x="150" y="170">⊗</text><text x="190" y="170">⊗</text><text x="270" y="170">⊗</text><text x="330" y="170">⊗</text><text x="390" y="170">⊗</text><text x="540" y="170">⊗</text>
  </g>
  <text x="380" y="38" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">导轨题骨架：E=BLv → I=E/R → F安=BIL</text>
  <text x="380" y="248" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">安培力阻碍相对运动，机械能减少转化为焦耳热</text>
  <defs>
    <marker id="m11v" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#2c7be5"></path></marker>
    <marker id="m11f" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/xb2/rail-rod.html" width="100%" height="640" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：磁感应强度 `B`、导体棒长度 `L`、速度 `v`、电阻 `R`。实时变化：动生电动势、电流、安培阻力和运动状态。

**证据任务。**



> **公式首次使用卡**：适用边界——E=BLv 要求 B、L、v 两两垂直；若有夹角要取垂直分量；回路总电阻包括外电阻、导体棒电阻和导轨电阻，题目若给内阻不能漏；安培力方向由楞次定律判断，结果总是阻碍磁通量变化，不一定总是向左。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 增大 `v`：看 `E`、`I`、$F_{\text{安}}$ 是否同步增大。
- 增大 `R`：看电流和安培阻力为什么变小。
- 增大 `B` 或 `L`：看 $F_{\text{安}}=B^{2}L^{2}v/R$ 为什么变化更明显。
- 观察力方向：确认安培力阻碍棒的运动。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 导体棒在导轨上运动 | 动生电动势模型 |
| 匀强磁场、直导体有效长度 `L`，且 `B`、`L`、`v` 两两垂直 | 可用特例 $E=BLv$ |
| 闭合回路有电阻 `R` | 用 $I=E/R$ |
| 问棒受力或速度变化 | 安培力进入动力学 |
| 问热量或能量损失 | 用焦耳热和能量守恒 |

#### 约束方程与求解路线
1. 判断棒是否切割磁感线，确认匀强磁场、直导体有效长度及 `B`、`L`、`v` 的几何关系；垂直特例才直接写 $E=BLv$，一般情形取有效垂直分量。
2. 判断回路是否闭合，求 $I=E/R_{\text{总}}$。
3. 用右手定则或楞次定律判断电流方向。
4. 用左手定则判断安培力方向。
5. 动力学题写 $F_{\text{外}}-F_{\text{安}}=ma$。
6. 能量题写外力做功、动能变化、焦耳热之间的关系。

#### 公式、变量、单位与条件
基本链条：

```text
E = BLv
I = E/R = BLv/R
F安 = BIL = B²L²v/R
P电 = I²R
匀速拉动时：F外 = F安
外力功率：P外 = F外 v = I²R
```

若撤去外力，安培力做负功，棒减速：

```text
Q = 初动能 - 末动能
若最终停下：Q = 1/2mv0²
```

画面中红色棒是等效电源，蓝色箭头是速度，绿色/紫色力箭头是安培阻力，电阻框对应外电路。

**模型失效边界。**
- $E=BLv$ 要求 `B`、`L`、`v` 两两垂直；若有夹角要取垂直分量。
- 回路总电阻包括外电阻、导体棒电阻和导轨电阻，题目若给内阻不能漏。
- 安培力方向由楞次定律判断，结果总是阻碍磁通量变化，不一定总是向左。
- 变速运动中 $E、I、F_{\text{安}}$ 都随 `v` 变化。
- 有外力匀速拉动时，外力做功最终转化为焦耳热。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 匀速拉棒 | $F_{\text{外}}=F_{\text{安}}$ |
| 撤去外力减速 | 安培阻力做负功 |
| 求电量 | $q=It$ 或 $q=\Delta \Phi /R$ |
| 求热量 | 焦耳热等于机械能损失或外力功 |
| 双棒导轨 | 写两个棒的电动势和回路电流 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 只写 $E=BLv$ 不求电流 | 闭合回路才有安培力 | 接着写 $I=E/R$ |
| 安培力方向乱判 | 左右手混用 | 先右手定电流，再左手定力 |
| 漏掉总电阻 | 电流算大 | 用 $R_{\text{总}}$ |
| 把安培力当恒力 | $F_{\text{安}}\propto v$ | 变速题不能直接用恒力运动学 |
| 能量题只算动能 | 还有焦耳热 | 写能量流向 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-11）

<h4 id="model-ac-transformer">M-12 交流电综合 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
交流电综合处理正弦交流的瞬时值、峰值、有效值、平均值，以及变压器和远距离输电。高考常见错误是把峰值当有效值、把变压器当成能量放大器，或在输电损耗中用错电压侧。

核心链条：交流电先分清“用哪个值”；变压器用有效值和匝数比；远距离输电用高压侧电流算线路损耗。

#### 情境表征
正弦交流电压在正负峰值之间变化，家用 `220 V` 是有效值，不是峰值。理想变压器改变电压和电流，但不凭空增加功率。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <line x1="90" y1="150" x2="350" y2="150" stroke="#829ab1" stroke-width="2"></line>
  <path d="M90 150 C125 70 165 70 200 150 S275 230 310 150 S350 70 386 150" fill="none" stroke="#2c7be5" stroke-width="4"></path>
  <line x1="90" y1="94" x2="386" y2="94" stroke="#e03131" stroke-dasharray="6 5" stroke-width="2"></line>
  <line x1="90" y1="110" x2="386" y2="110" stroke="#f0a500" stroke-width="3"></line>
  <text x="394" y="94" font-size="13" fill="#e03131">峰值 Um</text>
  <text x="394" y="110" font-size="13" fill="#f0a500">有效值 U=Um/√2</text>
  <rect x="500" y="84" width="34" height="132" fill="none" stroke="#334e68" stroke-width="4"></rect>
  <rect x="604" y="112" width="34" height="76" fill="none" stroke="#334e68" stroke-width="4"></rect>
  <line x1="534" y1="150" x2="604" y2="150" stroke="#829ab1" stroke-width="10"></line>
  <text x="517" y="232" font-size="14" fill="#102a43" text-anchor="middle">n1</text>
  <text x="621" y="232" font-size="14" fill="#102a43" text-anchor="middle">n2</text>
  <text x="568" y="68" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">U1/U2=n1/n2</text>
  <text x="568" y="254" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">理想：P1=P2</text>
  <text x="380" y="36" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">交流电先分清四值，变压器再用有效值计算</text>
</svg>

**交互模型。**
<iframe src="anim/xb2/ac-generation.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/xb2/transformer.html" width="100%" height="620" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

可拖动参数：线圈转速、磁场、匝数、原副线圈匝数等。实时变化：交流电瞬时值、峰值、有效值、变压器电压比、电流比和功率关系。

**证据任务。**
- 看正弦波：区分瞬时值 `u` 和峰值 `Um`。
- 对照有效值：确认 `220 V` 对应峰值约 `311 V`。
- 拖动变压器匝数：看电压比如何随匝数比改变。
- 看升压变压器：确认升压同时降流，理想情况下功率不变。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|



> **公式首次使用卡**：适用边界——有效值等于峰值除以 √2 只适用于正弦交流；理想变压器忽略铜损、铁损和漏磁且只处理交流；实际输电还要计入线路电阻和功率损耗。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| $u=Umsin\omega t$ | 读峰值、角频率、周期 |
| 电器铭牌、电表读数、功率热量 | 用有效值 |
| 求电荷量 | 常用平均值 |
| 变压器匝数比 | 用 $U_{1}/U_{2}=n_{1}/n_{2}$ |
| 远距离输电损耗 | 用输电线电流算 $I^{2}r$ |

#### 约束方程与求解路线
1. 看到交流电表达式，先读出峰值 `Um` 和角频率 $\omega$。
2. 判断题目要瞬时值、峰值、有效值还是平均值。
3. 正弦交流功率热量计算统一用有效值。
4. 变压器题先把电压都化成有效值。
5. 输电题先确定升压后输送电压和输送功率，再算线路电流。

#### 公式、变量、单位与条件
正弦交流：

```text
u = Um sin(ωt)
T = 2π/ω
f = 1/T
U = Um/√2
I = Im/√2
P = UI = U²/R = I²R
```

理想变压器：

```text
U1/U2 = n1/n2
P1 = P2
U1I1 = U2I2
I1/I2 = n2/n1
```

远距离输电：

```text
I线 = P输/U高
P损 = I线²r
P用户 = P输 - P损
```

画面中正弦曲线显示瞬时值，水平有效值线用于功率计算；变压器线圈匝数对应电压比。

**模型失效边界。**
- $U=Um/\sqrt{2}$ 只适用于正弦交流。
- 变压器只能改变交流电压，直流稳定后磁通不变，不能持续变压。
- 理想变压器忽略损耗，实际变压器有铜损、铁损。
- 远距离输电的损耗发生在线路电阻上，要用输电线电流。
- 平均值常用于感应电荷量，不用于普通电阻功率计算。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 读表达式 | 读 $Um、\omega 、T、f$ |
| 算电热功率 | 先转有效值 |
| 变压器输出电压 | 用匝数比 |
| 变压器输入电流 | 用功率守恒 |
| 输电损耗 | 用高压侧电流算 $I^{2}r$ |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 把 220 V 当峰值 | 220 V 是有效值 | 峰值约 311 V |
| 功率用峰值直接算 | 热效应用有效值 | 先除以 √2 |
| 变压器认为升压增功率 | 理想变压器功率守恒 | 升压必降流 |
| 变压器接直流也能变压 | 稳定直流无磁通变化 | 只能变交流 |
| 输电损耗用用户电流 | 损耗在线路上 | 用输电线电流 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-12）

<h4 id="model-compound-field-particle">M-13 带电粒子在复合场中运动 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
复合场粒子模型处理带电粒子同时受到电场力和磁场力时的运动。高考常见装置是速度选择器、质谱仪、电偏转后进磁场等。




> **公式首次使用卡**：适用边界——洛伦兹力公式要求速度与磁场垂直时取 qvB；有夹角要乘 \sin \theta；v=E/B 是直线通过复合场的条件，不是所有复合场题都能直接套；电场力会改变动能，磁场力不改变动能。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

核心判断：电场力可能做功并改变速率；洛伦兹力始终垂直速度，不做功，只改变方向。速度选择器的直线条件是 $qE=qvB$，即 $v=E/B$。

#### 情境表征
下面这张图把速度选择器和后续纯磁场半径测量放在同一条路径上：左侧复合场中，红色 `qE` 与紫色 `qvB` 必须等大反向，粒子才直线穿出；右侧纯磁场中，洛伦兹力提供向心力，轨迹半径就是 $R=mv/(\vert q\vert B)$。

<svg viewBox="0 0 860 330" width="100%" style="max-width:980px">
  <rect x="56" y="72" width="420" height="184" rx="8" fill="#f2f7ff" stroke="#2c7be5" stroke-width="2"></rect>
  <rect x="528" y="72" width="250" height="184" rx="8" fill="#f7fbfb" stroke="#38b2ac" stroke-width="2"></rect>
  <text x="266" y="48" font-size="18" fill="#2c7be5" text-anchor="middle" font-weight="700">复合场速度选择器</text>
  <text x="653" y="48" font-size="18" fill="#38b2ac" text-anchor="middle" font-weight="700">纯磁场半径测量</text>
  <g fill="#52606d" font-size="22" text-anchor="middle">
    <text x="106" y="122">⊗</text><text x="166" y="122">⊗</text><text x="226" y="122">⊗</text><text x="286" y="122">⊗</text><text x="346" y="122">⊗</text><text x="406" y="122">⊗</text>
    <text x="106" y="176">⊗</text><text x="166" y="176">⊗</text><text x="226" y="176">⊗</text><text x="286" y="176">⊗</text><text x="346" y="176">⊗</text><text x="406" y="176">⊗</text>
    <text x="106" y="230">⊗</text><text x="166" y="230">⊗</text><text x="226" y="230">⊗</text><text x="286" y="230">⊗</text><text x="346" y="230">⊗</text><text x="406" y="230">⊗</text>
  </g>
  <g stroke="#f0a500" stroke-width="3" marker-end="url(#m13-arrow-orange)">
    <line x1="86" y1="92" x2="86" y2="128"></line><line x1="146" y1="92" x2="146" y2="128"></line><line x1="206" y1="92" x2="206" y2="128"></line><line x1="266" y1="92" x2="266" y2="128"></line>
  </g>
  <text x="130" y="82" font-size="14" fill="#f0a500" font-weight="700">E 向下</text>
  <text x="430" y="82" font-size="14" fill="#52606d" font-weight="700">B 向里</text>
  <line x1="28" y1="166" x2="820" y2="166" stroke="#2c7be5" stroke-width="4" marker-end="url(#m13-arrow-blue)"></line>
  <circle cx="242" cy="166" r="15" fill="#e03131"></circle>
  <text x="242" y="172" font-size="18" fill="#fff" text-anchor="middle" font-weight="700">+</text>
  <line x1="242" y1="166" x2="310" y2="166" stroke="#2c7be5" stroke-width="4" marker-end="url(#m13-arrow-blue)"></line>
  <text x="324" y="171" font-size="15" fill="#2c7be5" font-weight="700">v</text>
  <line x1="222" y1="166" x2="222" y2="216" stroke="#e03131" stroke-width="4" marker-end="url(#m13-arrow-red)"></line>
  <text x="191" y="194" font-size="15" fill="#e03131" font-weight="700">qE</text>
  <line x1="264" y1="166" x2="264" y2="116" stroke="#7b2cbf" stroke-width="4" marker-end="url(#m13-arrow-purple)"></line>
  <text x="285" y="136" font-size="15" fill="#7b2cbf" font-weight="700">qvB</text>
  <path d="M604 214 A78 78 0 0 1 704 106" fill="none" stroke="#38b2ac" stroke-width="4"></path>
  <line x1="656" y1="166" x2="724" y2="126" stroke="#38b2ac" stroke-width="3" marker-end="url(#m13-arrow-green)"></line>
  <text x="707" y="157" font-size="15" fill="#38b2ac" font-weight="700">R</text>
  <text x="430" y="296" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">直线通过：qE=qvB → v=E/B；出场圆周：qvB=mv²/R → R=mv/(|q|B)</text>
  <defs>
    <marker id="m13-arrow-blue" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#2c7be5"></path></marker>
    <marker id="m13-arrow-red" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m13-arrow-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#7b2cbf"></path></marker>
    <marker id="m13-arrow-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f0a500"></path></marker>
    <marker id="m13-arrow-green" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#38b2ac"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/model/compound-field-particle.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：电荷正负、电场强度、磁感应强度、入射速度、质量；也可以直接拖动画面里的蓝色速度手柄。实时变化：`qE`、`qvB`、选择速度、偏转方向、轨迹频闪点、力表盘、`F-v` 图像游标、数据记录和进入纯磁场后的半径标尺。

**证据任务。**
- 拖动画面里的蓝色速度手柄：看何时 `qE` 与 `qvB` 等大反向，轨迹从偏转变成直线。
- 点击“播放”：看粒子经过复合场、出场进入纯磁场时，速度方向和半径尺如何联动。
- 点击“记录”：比较不同 `v` 的偏差数据，找到最接近 $v=E/B$ 的一次。
- 改变电荷正负：看两个力方向是否同时反向，直线条件是否仍为 $v=E/B$。
- 增大 `B`：看选择速度和磁场圆周半径如何改变。
- 增大质量 `m`：看进入纯磁场后的半径如何变大。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 电场和磁场同时存在 | 先分别画 `qE` 与 `qvB` |
| 粒子直线通过 | 合力为零，常用 $v=E/B$ |
| 进入纯磁场区域 | 做匀速圆周，$R=mv/(qB)$ |
| 进入纯电场区域 | 类平抛或匀加速偏转 |
| 质谱仪、速度选择器 | 先选速度，再用磁场半径分离 |

#### 约束方程与求解路线
1. 判断粒子电性，确定电场力方向。
2. 用左手定则判断洛伦兹力方向，负电荷方向相反。
3. 若题目说直线通过，令 $qE=qvB$。
4. 若进入纯磁场，写 $qvB=mv^{2}/R$。
5. 若进入纯电场，写 $a=qE/m$，按类平抛处理。

#### 公式、变量、单位与条件
速度选择器：

```text
qE = qvB
v = E/B
```

纯磁场圆周：

```text
qvB = mv²/R
R = mv/(|q|B)
T = 2πm/(|q|B)
```

纯电场偏转：

```text
a = qE/m
x = v0t
y = 1/2at²
```

图中红色箭头对应 `qE`，紫色箭头对应 `qvB`，蓝色轨迹和频闪点显示偏转方向；动画右侧的 `F-v` 图像用水平线表示 `qE`，用斜线表示 `qvB`，二者交点的竖线就是 $v_{0}=E/B$。半径标尺读出的 `R` 对应 $R=mv/(\vert q\vert B)$。

**模型失效边界。**
- 洛伦兹力公式要求速度与磁场垂直时取 `qvB`；有夹角要乘 $\sin \theta$。
- $v=E/B$ 是直线通过复合场的条件，不是所有复合场题都能直接套。
- 电场力会改变动能，磁场力不改变动能。
- 若重力不能忽略，要把 `mg` 一并画入受力图。
- 进入不同区域要分段处理，不能用一个方程覆盖全过程。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 速度选择器 | $v=E/B$ |
| 质谱仪半径 | $R=mv/(qB)$ |
| 电偏转后入磁场 | 先电场求速度，再磁场求半径 |
| 判断偏转方向 | 分别判 `qE` 与 `qvB` |
| 选择粒子种类 | 比荷 `q/m` 决定半径和周期 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 负电荷仍按正电荷判力 | 方向相反 | 先判电性 |
| 认为磁场力做功 | 洛伦兹力垂直速度 | 磁场只改方向 |
| 直线通过还写圆周 | 合力为零时不偏转 | 用 $qE=qvB$ |
| 进入纯磁场忘记速度来源 | 速度可能由电场加速得到 | 分段求 |
| 把 `q` 符号带进半径大小 | 半径取正值 | 用 `|q|` |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-13）

<h4 id="model-gas-state-change">M-14 气体状态变化模型 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
气体状态变化模型处理一定量理想气体在等温、等容、等压或综合过程中的 `p、V、T` 关系，以及 p-V 图像中的做功判断。它的第一步永远不是代公式，而是确认：气体是否定量，温度是否用 K，过程是哪一种。

核心链条：状态方程定状态，p-V 图像读过程，图线下方面积读气体对外做功。

#### 情境表征



> **公式首次使用卡**：适用边界——状态方程适用于理想气体近似：高温、低压、分子间作用可忽略；p_{1}V_{1}/T_{1}=p_{2}V_{2}/T_{2} 要求物质的量不变；漏气、充气要用 pV=nRT；温度必须用 K，不能直接用摄氏温度比。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

一个气缸中的气体有三个状态参量：压强 `p`、体积 `V`、热力学温度 `T`。如果气体物质的量不变，就有 $pV/T=\text{常量}$。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <rect x="92" y="92" width="250" height="116" fill="#eef4ff" stroke="#334e68" stroke-width="4"></rect>
  <rect x="306" y="82" width="22" height="136" fill="#829ab1"></rect>
  <g fill="#2c7be5"><circle cx="134" cy="122" r="4"></circle><circle cx="176" cy="154" r="4"></circle><circle cx="220" cy="130" r="4"></circle><circle cx="264" cy="184" r="4"></circle><circle cx="292" cy="112" r="4"></circle><circle cx="150" cy="188" r="4"></circle></g>
  <line x1="328" y1="150" x2="390" y2="150" stroke="#e03131" stroke-width="5" marker-end="url(#m14piston)"></line>
  <text x="216" y="236" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">pV=nRT</text>
  <line x1="480" y1="224" x2="690" y2="224" stroke="#334e68" stroke-width="3"></line>
  <line x1="480" y1="224" x2="480" y2="72" stroke="#334e68" stroke-width="3"></line>
  <path d="M500 92 C548 122 602 174 672 210" fill="none" stroke="#e8590c" stroke-width="4"></path>
  <path d="M500 224 L500 92 C548 122 602 174 672 210 L672 224 Z" fill="#f0a500" opacity=".22"></path>
  <text x="690" y="242" font-size="13" fill="#486581">V</text>
  <text x="462" y="78" font-size="13" fill="#486581">p</text>
  <text x="588" y="250" font-size="14" fill="#102a43" text-anchor="middle">面积表示气体做功</text>
  <text x="380" y="38" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">状态方程看点，p-V 图像看过程和做功</text>
  <defs><marker id="m14piston" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker></defs>
</svg>

**交互模型。**
<iframe src="anim/xb3/gas-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/xb3/pv-graph.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

可直接拖动：气缸活塞改变体积 `V`，温度表改变 `T`，p-V 图像中的状态点改变初末状态；右侧控件可切换等温、等压、等容过程。实时变化：分子运动快慢、压强箭头、$p=nRT/V$、`pV/T`、p-V 图线、面积做功 $W=\int p dV$ 和数据记录。

**证据任务。**
- 拖气缸活塞并固定温度：看 `pV` 是否保持常量，压强箭头是否随体积减小而变密。
- 拖温度表并固定体积：看分子运动变快时 `p/T` 是否保持常量。
- 拖 p-V 图中的状态点 2 让体积增大：看曲线下面积为什么表示气体对外做正功。
- 切换等容过程：看图线竖直时面积和做功是否为 0。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 一定量理想气体 | 可用 $pV/T=\text{常量}$ |
| 温度不变 | 等温，$pV=\text{常量}$ |
| 体积不变 | 等容，$p/T=\text{常量}$ |
| 压强不变 | 等压，$V/T=\text{常量}$ |
| p-V 图像 | 面积对应气体对外做功 |

#### 约束方程与求解路线
1. 判断气体是否封闭定量。
2. 把摄氏温度换成热力学温度 K。
3. 列初末状态表：`p、V、T`。
4. 判断过程类型：等温、等容、等压或一般过程。
5. 用状态方程求未知量。
6. 若涉及做功，回到 p-V 图像看面积和方向。

#### 公式、变量、单位与条件
一定量理想气体：

```text
pV/T = 常量
p1V1/T1 = p2V2/T2
```

特殊过程：

```text
等温：pV=常量
等容：p/T=常量
等压：V/T=常量
```

p-V 图像做功：

```text
W = ∫p dV
膨胀：dV>0，气体对外做正功
压缩：dV<0，气体对外做负功
等容：dV=0，W=0
```

动画中活塞位置对应体积，压力表对应压强，分子速度对应温度，p-V 图像阴影面积对应做功。

**模型失效边界。**
- 状态方程适用于理想气体近似：高温、低压、分子间作用可忽略。
- $p_{1}V_{1}/T_{1}=p_{2}V_{2}/T_{2}$ 要求物质的量不变；漏气、充气要用 $pV=nRT$。
- 温度必须用 K，不能直接用摄氏温度比。
- p-V 图像不是空间轨迹，每个点代表一个平衡状态。
- 图像面积表示气体对外做功，外界对气体做功符号相反。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 初末状态求压强 | 列状态表，用 `pV/T` |
| 等温压缩 | `p` 与 `V` 反比 |
| 等容升温 | `p` 与 `T(K)` 正比 |
| p-V 图像做功 | 看面积和过程方向 |
| 漏气充气 | 用 $pV=nRT$ 判断 `n` |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 用摄氏温度代入比例 | 温度零点错 | 先换 K |
| 任意压缩都用玻意耳 | 玻意耳要求等温 | 先判过程 |
| 漏气仍用定量公式 | `n` 变了 | 用 $pV=nRT$ |
| p-V 图像当运动轨迹 | 它是状态图像 | 点代表状态 |
| 面积符号不看方向 | 膨胀压缩符号相反 | 看 `dV` 正负 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-14）

<h4 id="model-nuclear-energy">M-15 核反应与质能方程 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: model; editorial-review: P1-EDITOR-002/003 -->


#### 模型任务与研究对象
核反应与质能方程模型处理核反应方程配平、质量亏损、结合能、裂变和聚变放能原因。它的核心不是“质量数不守恒”，而是：质量数和电荷数守恒，但反应前后精确静止质量可以有微小差别，这个差别对应能量。




> **公式首次使用卡**：适用边界——质量数守恒是核子数守恒，不表示精确静止质量完全相等；931.5MeV 换算要求质量亏损单位为 u；平均结合能用于比较核稳定性，总结合能不能直接比较不同大小核的稳定性。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

第一步配平 `A` 和 `Z`，第二步算质量亏损，第三步用 $E=\Delta mc^{2}$ 或 $\Delta m\times 931.5\ \mathrm{MeV}$ 求能量。

#### 情境表征
核反应方程左右两边的质量数和电荷数要分别守恒。若产物总静止质量更小，减少的质量以能量形式释放。

<svg viewBox="0 0 760 290" width="100%" style="max-width:920px">
  <circle cx="140" cy="138" r="42" fill="#2c7be5" opacity=".22" stroke="#2c7be5" stroke-width="3"></circle>
  <circle cx="238" cy="138" r="18" fill="#f0a500" opacity=".8"></circle>
  <line x1="170" y1="138" x2="214" y2="138" stroke="#e03131" stroke-width="4" marker-end="url(#m15in)"></line>
  <text x="190" y="116" font-size="14" fill="#e03131" text-anchor="middle">入射粒子</text>
  <line x1="286" y1="138" x2="358" y2="138" stroke="#334e68" stroke-width="4" marker-end="url(#m15out)"></line>
  <circle cx="420" cy="108" r="32" fill="#38b2ac" opacity=".8"></circle>
  <circle cx="444" cy="176" r="24" fill="#7b2cbf" opacity=".75"></circle>
  <line x1="470" y1="106" x2="560" y2="70" stroke="#f0a500" stroke-width="4" marker-end="url(#m15e)"></line>
  <text x="530" y="54" font-size="14" fill="#f0a500" font-weight="700">能量 Q</text>
  <rect x="560" y="120" width="120" height="68" fill="#fff7e6" stroke="#f0a500" stroke-width="3"></rect>
  <text x="620" y="146" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">Δm</text>
  <text x="620" y="172" font-size="15" fill="#102a43" text-anchor="middle">E=Δmc²</text>
  <text x="380" y="38" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">核反应：A、Z 守恒；核能：精确质量差对应能量</text>
  <text x="380" y="252" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">质量数守恒 ≠ 静止质量完全相等；放能看质量亏损或结合能增加</text>
  <defs>
    <marker id="m15in" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e03131"></path></marker>
    <marker id="m15out" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#334e68"></path></marker>
    <marker id="m15e" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#f0a500"></path></marker>
  </defs>
</svg>

**交互模型。**
<iframe src="anim/model/nuclear-mass-energy.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/xb3/nuclear-reaction.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

<iframe src="anim/xb3/nuclear-energy.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

<iframe src="anim/xb3/binding-energy.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px;margin-top:12px"></iframe>

可拖动参数：核反应模板、未知粒子的 `A/Z`、质量亏损、反应次数、质量数、结合能；也可以直接拖动画面里的未知粒子卡片、$\Delta m$ 砝码和结合能曲线探针。实时变化：质量数/电荷数守恒检查、释放或吸收能量、总能量、平均结合能、稳定性判断、图像游标和数据记录。新版模型总控台把“配平 → 质量亏损 → 质能换算 → 结合能稳定性 → 数据记录”放在同一个画面内，便于从高考题干一步迁移到计算。

**证据任务。**
- 切换核反应模板并拖动未知粒子卡片：看左右两边 `A`、`Z` 是否同时守恒，差值图像是否回到 0。
- 拖动 $\Delta m$ 砝码：看质量天平、能量计和 $E-\Delta m$ 图像怎样同步变化；$\Delta m<0$ 时看状态如何变成吸能。
- 增大反应次数：看总能量如何累加。
- 拖动结合能曲线探针：比较 `Eb/A` 与对比线，看为什么产物更稳定时会释放能量。

#### 模型假设与识别条件
| 题目信号 | 说明 |
|---|---|
| 核反应方程缺粒子 | 配平质量数和电荷数 |
| 给质量亏损 $\Delta m$ | 用质能方程求能量 |
| 单位是 `u` | 常用 $1\ \mathrm{u}\approx 931.5\ \mathrm{MeV}/c^{2}$ |
| 问稳定性 | 比平均结合能 |
| 裂变或聚变放能 | 看反应后总静止质量是否更小 |

#### 约束方程与求解路线
1. 写出反应前后所有粒子的 `A` 和 `Z`。
2. 分别列质量数守恒、电荷数守恒。
3. 若问能量，计算精确质量亏损 $\Delta m=m_{\text{前}}-m_{\text{后}}$。
4. 若 $\Delta m>0$，反应释放能量；若 $\Delta m<0$，反应吸收能量。
5. 用 $E=\Delta mc^{2}$ 或 $E=\Delta m\times 931.5\ \mathrm{MeV}$。
6. 若比较稳定性，算平均结合能 `Eb/A`。

#### 公式、变量、单位与条件
核反应配平：

```text
ΣA反应前 = ΣA反应后
ΣZ反应前 = ΣZ反应后
```

质能方程：

```text
E = Δmc²
Δm = m前 - m后
Δm>0：释放能量
Δm<0：吸收能量
```

用原子质量单位：

```text
E/MeV ≈ Δm/u × 931.5
```

结合能：

```text
Eb = Δmc²
平均结合能 = Eb/A
平均结合能越大，通常原子核越稳定
```

动画中核反应实验台的守恒账本显示 `ΣA`、`ΣZ` 差值；质能实验台的质量天平和能量计对应 $E=\Delta mc^{2}$ 与 $E/MeV\approx \Delta m/u\times 931.5$；结合能实验台的曲线探针对应 `Eb/A`，用于比较稳定性。

**模型失效边界。**
- 质量数守恒是核子数守恒，不表示精确静止质量完全相等。
- `931.5MeV` 换算要求质量亏损单位为 `u`。
- 平均结合能用于比较核稳定性，总结合能不能直接比较不同大小核的稳定性。
- 裂变和聚变都可能放能，关键看反应后总静止质量是否减小。
- 化学反应改变电子层，核反应改变原子核，二者能量来源不同。

#### 迁移情境
| 题型 | 第一反应 |
|---|---|
| 方程缺粒子 | 配平 `A` 和 `Z` |
| 质量亏损求能量 | $\Delta m\times 931.5\ \mathrm{MeV}$ |
| 判断释放或吸收 | 看 $m_{\text{前}}-m_{\text{后}}$ 符号 |
| 比较稳定性 | 算 `Eb/A` |
| 裂变聚变辨析 | 看重核裂开还是轻核结合 |

#### 边界检查与易错点
| 易错做法 | 问题 | 改法 |
|---|---|---|
| 只守恒质量数 | 电荷数也要守恒 | 两张账都列 |
| 质量数守恒就否认质量亏损 | 质量数不是精确质量 | 区分 `A` 和静止质量 |
| `u` 直接当 kg 用 | 单位错 | 用 931.5MeV 或换 kg |
| 总结合能大就更稳定 | 大核总结合能天然大 | 比 `Eb/A` |
| 认为只有裂变放能 | 聚变也可放能 | 看质量亏损 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：M-15）

<style>
.status { font-size: 12px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
.status.done { background: #d4edda; color: #155724; }
.status.pending { background: #f8d7da; color: #721c24; }
</style>
