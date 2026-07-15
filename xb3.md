# 选择性必修3：热学、原子物理与近代物理

> **模块状态：partial（正在逐点开发）**
> 本章节为 P0-6 批次，必须补齐热学和近代物理，不能缺。

## 章节开发目标

学生必须看到“分子热运动的统计性”“气体状态参量之间的关系”“能量转化与守恒的普适性”“原子能级与核反应的能量释放”。

## 知识点清单（待开发）

| 编号 | 知识点 | 档 | 状态 |
|---|---|---|---|
| X3-01 | 分子动理论 | B | interaction passed · content pending |
| X3-02 | 阿伏伽德罗常数 | B | interaction passed · content pending |
| X3-03 | 分子热运动 | B | interaction passed · content pending |
| X3-04 | 分子力 | B | interaction passed · content pending |
| X3-05 | 内能 | B | interaction passed · content pending |
| X3-06 | 温度与温标 | B | interaction passed · content pending |
| X3-07 | 气体状态参量 | A | interaction passed · content pending |
| X3-08 | 玻意耳定律 | A | interaction passed · content pending |
| X3-09 | 查理定律 | A | interaction passed · content pending |
| X3-10 | 理想气体状态方程 | A | interaction passed · content pending |
| X3-11 | p-V 图像 | A | interaction passed · content pending |
| X3-12 | 气体实验定律微观解释 | B | interaction passed · content pending |
| X3-13 | 热力学第一定律 | A | interaction passed · content pending |
| X3-14 | 热力学第二定律 | A | interaction passed · content pending |
| X3-15 | 能量守恒 | A | interaction passed · content pending |
| X3-16 | 热机与效率 | B | interaction passed · content pending |
| X3-17 | 晶体与非晶体 | B | interaction passed · content pending |
| X3-18 | 液体表面张力 | B | interaction passed · content pending |
| X3-19 | 光电效应 | A | interaction passed · content pending |
| X3-20 | 波粒二象性 | A | interaction passed · content pending |
| X3-21 | 原子结构 | B | interaction passed · content pending |
| X3-22 | 玻尔模型与能级 | A | interaction passed · content pending |
| X3-23 | 原子光谱 | B | interaction passed · content pending |
| X3-24 | 原子核结构 | B | interaction passed · content pending |
| X3-25 | 放射性衰变 | A | interaction passed · content pending |
| X3-26 | 半衰期 | A | interaction passed · content pending |
| X3-27 | 核反应 | A | interaction passed · content pending |
| X3-28 | 核能 | A | interaction passed · content pending |
| X3-29 | 结合能与质量亏损 | A | interaction passed · content pending |
| X3-30 | 核裂变 | A | interaction passed · content pending |
| X3-31 | 核聚变 | A | interaction passed · content pending |
| X3-32 | 粒子物理初步 | C | interaction passed · content pending |
| X3-33 | 分子运动速率分布图像 | B | interaction passed · content pending |
| X3-34 | 扩散、布朗运动与温度微观解释 | B | interaction passed · content pending |
| X3-35 | 液晶、半导体与纳米材料 | C | interaction passed · content pending |
| X3-36 | 毛细现象 | B | interaction passed · content pending |
| X3-37 | 放射性同位素的应用 | B | interaction passed · content pending |
| X3-38 | 射线危害与防护 | B | interaction passed · content pending |
| X3-39 | 四种基本相互作用 | C | interaction passed · content pending |

> 此章节已按单知识点闭环开发到 32/32；每个完成项均按“先看见现象 → 再感受变化 → 最后抽象公式”呈现，并记录质量审核分数。

---

## 1. 热学基础

<h4 id="molecular-theory">X3-01 分子动理论 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-01
- 模块：选择性必修3
- 主题：分子动理论与热学基础
- 高考功能：概念判断 / 微观解释 / 气体实验定律铺垫
- 前置知识：物质结构常识、平均值思想、统计思想
- 后续应用：分子热运动、分子力、内能、气体状态方程

#### 情境与现象
一滴香水放在教室前排，后排同学过一会儿也能闻到；显微镜下悬浮颗粒会无规则抖动；压缩气体时，气体对容器壁的压强变大。这些现象背后不是“气体整体有意识地扩散”，而是大量分子在不停做无规则运动，并且分子之间、分子与容器壁之间不断相互作用。

**静态表征。**
<svg viewBox="0 0 620 230" width="100%" style="max-width:820px">
  <defs>
    <marker id="mtArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
    <marker id="mtBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="24" y="36" width="170" height="146" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="109" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">大量分子</text>
  <circle cx="60" cy="74" r="5" fill="#2c7be5"/><circle cx="96" cy="56" r="5" fill="#2c7be5"/><circle cx="142" cy="83" r="5" fill="#2c7be5"/>
  <circle cx="75" cy="120" r="5" fill="#2c7be5"/><circle cx="128" cy="132" r="5" fill="#2c7be5"/><circle cx="164" cy="111" r="5" fill="#2c7be5"/>
  <circle cx="54" cy="157" r="5" fill="#2c7be5"/><circle cx="108" cy="166" r="5" fill="#2c7be5"/><circle cx="158" cy="156" r="5" fill="#2c7be5"/>
  <text x="109" y="204" font-size="12" fill="#486581" text-anchor="middle">物质由大量分子组成</text>

  <rect x="226" y="36" width="170" height="146" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="311" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">无规则运动</text>
  <circle cx="276" cy="96" r="6" fill="#2c7be5"/><path d="M276 96 L304 72" stroke="#e03131" stroke-width="2" marker-end="url(#mtArrow)"/>
  <circle cx="329" cy="126" r="6" fill="#2c7be5"/><path d="M329 126 L297 149" stroke="#e03131" stroke-width="2" marker-end="url(#mtArrow)"/>
  <circle cx="346" cy="74" r="6" fill="#2c7be5"/><path d="M346 74 L369 106" stroke="#e03131" stroke-width="2" marker-end="url(#mtArrow)"/>
  <path d="M263 158 Q294 135 315 158 T369 145" fill="none" stroke="#c92a2a" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="316" cy="157" r="10" fill="#c92a2a"/>
  <text x="311" y="204" font-size="12" fill="#486581" text-anchor="middle">温度越高，平均动能越大</text>

  <rect x="428" y="36" width="170" height="146" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="513" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">分子间作用力</text>
  <circle cx="490" cy="108" r="16" fill="#2c7be5"/><circle cx="540" cy="108" r="16" fill="#e8590c"/>
  <path d="M488 84 L464 84" stroke="#2c7be5" stroke-width="2" marker-end="url(#mtBlue)"/>
  <path d="M542 84 L566 84" stroke="#2c7be5" stroke-width="2" marker-end="url(#mtBlue)"/>
  <path d="M494 136 L515 136" stroke="#e03131" stroke-width="2" marker-end="url(#mtArrow)"/>
  <path d="M536 136 L515 136" stroke="#e03131" stroke-width="2" marker-end="url(#mtArrow)"/>
  <text x="513" y="164" font-size="12" fill="#486581" text-anchor="middle">近斥、远引、很远近似无力</text>
  <text x="513" y="204" font-size="12" fill="#486581" text-anchor="middle">固体液体气体性质的微观基础</text>
</svg>

**动态表征。**
动画把三个微观图景放在同一画面：左侧显示大量分子随机运动和悬浮颗粒的布朗轨迹，右侧显示两分子距离改变时“斥力、平衡、引力、近似无力”的状态。直接拖动红色悬浮颗粒或右侧分子，可以把“无规则热运动”和“分子间作用力”都变成可操作对象。

**交互探究。**
<iframe src="anim/xb3/molecular-theory.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——分子动理论解释的是大量微观粒子的统计行为，不用于描述一个分子的确定轨迹；E_{k}(\text{平均}) \propto T 中的 T 必须是热力学温度，单位为 K；布朗运动用于观察悬浮颗粒，不是直接看到气体分子。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动悬浮颗粒观察布朗运动轨迹，或拖动右侧分子改变分子间距 $r/r_{0}$；也可调节温度 `T`、分子数 `N` 并记录数据。画面同时显示布朗运动俯视、分子力侧视、速率统计图像和数据记录，把平均速率 $\propto \sqrt{T}$、平均动能 $\propto T$ 与可见运动绑定。

**证据任务。**
- 把温度 `T` 调高：看分子运动是否更快，布朗颗粒轨迹是否更剧烈。
- 把分子数 `N` 调大：看容器内碰撞是否更密集。
- 拖动右侧分子改变 $r/r_{0}$：观察 $r<r_{0}$、$r=r_{0}$、$r>r_{0}$、`r` 很大时分子力状态如何变化。
- 对照读数：确认温度反映的是大量分子平均动能，不是某一个分子的固定速度。

#### 规律、证据与核心概念
分子动理论用微观粒子的运动解释宏观热现象。它的基本图像有三条：

```text
1. 物质由大量分子组成；
2. 分子永不停息地做无规则运动；
3. 分子间存在相互作用力。
```

温度升高时，不是每个分子都以同一个速度运动，而是大量分子的平均动能变大：

```text
平均动能 Eₖ(平均) ∝ 热力学温度 T
平均速率量级 v ∝ √T
```

微观运动是随机的，宏观温度、压强、内能等量描述的是大量分子的统计结果。

**概念辨析。**
- “大量分子”：单个分子运动杂乱，宏观规律来自统计平均。
- “无规则运动”：分子速度大小和方向不断变化，温度越高，平均运动越剧烈。
- “布朗运动”：悬浮颗粒的无规则运动，不是分子本身的运动，但间接证明分子在无规则运动。
- “分子力”：分子很近时斥力明显，稍远时引力明显，距离很大时分子力可忽略。
- “温度”：反映分子平均动能的标志，只能用热力学温度 `K` 与平均动能建立正比关系。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式或关系 | 含义 |
|---|---|---|---|
| 蓝色小点运动快慢 | 分子平均速率量级 | $v \propto \sqrt{T}$ | 温度越高，平均速率越大 |
| 读数 $Ek_{\text{比例}}$ | 平均动能 | $E_{k}(\text{平均}) \propto T$ | 温度是平均动能标志 |
| 蓝点数量 | 分子数 `N` | 大量分子统计 | `N` 越多，宏观量越稳定 |
| 红色大颗粒轨迹 | 布朗运动 | 分子撞击不平衡 | 间接反映分子热运动 |
| 两分子间距 | $r/r_{0}$ | 近斥、平衡、远引 | 分子力随距离变化 |

**适用边界。**
- 分子动理论解释的是大量微观粒子的统计行为，不用于描述一个分子的确定轨迹。
- $E_{k}(\text{平均}) \propto T$ 中的 `T` 必须是热力学温度，单位为 K。
- 布朗运动用于观察悬浮颗粒，不是直接看到气体分子。
- 分子力只有在分子间距很小时明显；普通气体分子间距较大时常可近似忽略分子力。
- 本知识点只给出定性微观图像，定量计算会在气体状态方程、内能和热力学定律中展开。

#### 应用与迁移
- 概念判断：温度、平均动能、布朗运动、扩散现象的关系。
- 微观解释：用分子运动解释扩散、压强、温度升高。
- 图像判断：根据温度变化判断平均速率和碰撞强弱。
- 后续铺垫：为内能、气体压强、气体实验定律提供微观解释。

**解题路径。**
1. 判断现象属于哪一类：扩散、布朗运动、压强、分子力或温度。
2. 把宏观现象翻译为微观图景：分子运动、碰撞、平均动能、相互作用。
3. 涉及温度时先换成热力学温度 `K`，再比较平均动能。
4. 涉及分子力时先看间距：近斥、平衡、远引、很远近似无力。
5. 涉及布朗运动时明确主体是悬浮颗粒，不是分子。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “布朗运动就是分子运动” | 看到的是悬浮颗粒运动 | 说成“间接反映分子无规则运动” |
| “温度高，每个分子速度都更大” | 单个分子速度有分布 | 说平均动能更大 |
| “0℃ 时分子停止运动” | 0℃ 不是 0 K | 分子仍在热运动 |
| “分子间只有引力” | 很近时斥力占主导 | 近斥、远引、很远近似无力 |
| “宏观规律来自少数分子” | 热学量是统计平均 | 必须强调大量分子 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-01）

<h4 id="avogadro">X3-02 阿伏伽德罗常数 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-02
- 模块：选择性必修3
- 主题：分子动理论与物质的量
- 高考功能：微观粒子数估算 / 摩尔质量换算 / 气体分子数铺垫
- 前置知识：质量、密度、相对分子质量、科学计数法
- 后续应用：理想气体状态方程、内能估算、气体压强微观解释

#### 情境与现象
一杯水看起来是连续的液体，但它其实由极多水分子组成。直接一个一个数分子不现实，所以物理和化学都用“物质的量”作中间桥梁：先用天平测质量 `m`，再除以摩尔质量 `M` 得到物质的量 `n`，最后乘以阿伏伽德罗常数 `NA` 得到微观粒子数 `N`。

**静态表征。**
<svg viewBox="0 0 660 210" width="100%" style="max-width:840px">
  <defs>
    <marker id="avArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="24" y="56" width="142" height="92" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="95" y="83" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">宏观样品</text>
  <text x="95" y="112" font-size="14" fill="#486581" text-anchor="middle">质量 m</text>
  <text x="95" y="136" font-size="12" fill="#486581" text-anchor="middle">天平能测到</text>
  <path d="M174 102 L248 102" stroke="#2c7be5" stroke-width="3" marker-end="url(#avArrow)"/>
  <text x="211" y="84" font-size="12" fill="#2c7be5" text-anchor="middle">除以 M</text>
  <rect x="256" y="56" width="142" height="92" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="327" y="83" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">物质的量</text>
  <text x="327" y="112" font-size="14" fill="#486581" text-anchor="middle">n = m/M</text>
  <text x="327" y="136" font-size="12" fill="#486581" text-anchor="middle">宏观和微观的桥</text>
  <path d="M406 102 L480 102" stroke="#2c7be5" stroke-width="3" marker-end="url(#avArrow)"/>
  <text x="443" y="84" font-size="12" fill="#2c7be5" text-anchor="middle">乘以 NA</text>
  <rect x="488" y="56" width="148" height="92" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="562" y="83" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">微观粒子数</text>
  <text x="562" y="112" font-size="14" fill="#486581" text-anchor="middle">N = nNA</text>
  <text x="562" y="136" font-size="12" fill="#486581" text-anchor="middle">分子、原子或离子个数</text>
  <text x="330" y="184" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">NA = 6.02×10²³ mol⁻¹：每 1 mol 含有的基本粒子数</text>
</svg>

**动态表征。**
动画把天平称量、物质的量表盘、粒子计数器和 `N-m` 图像放在同一画面。播放时先看到“称出质量 → 除以摩尔质量 → 乘以 `NA` 计数”的转换过程；拖动画面内把手时，所有读数同步变化。

**交互探究。**
<iframe src="anim/xb3/avogadro.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——必须明确计数对象：分子数、原子数、离子数不能混为一谈；质量和摩尔质量单位要统一；阿伏伽德罗常数用于粒子数换算，不直接表示质量、体积或密度。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可直接拖动：蓝色砝码改变样品质量 `m`，橙色摩尔卡改变摩尔质量 `M`，绿色把手改变粒子显示比例；也可用右侧滑块精调。实时变化：天平读数、$n=m/M$ 表盘、粒子计数器、`N-m` 图像游标和数据记录。

**证据任务。**
- 先点“播放”：看质量读数怎样依次转成 `n` 和 `N`，不要直接背公式。
- 拖蓝色砝码并固定 `M`：看 `m` 加倍时，表盘 `n`、计数器 `N` 和图像游标是否同步加倍。
- 拖橙色摩尔卡并固定 `m`：看同样质量下，`M` 越大，$n=m/M$ 与 $N=nNA$ 是否越小。
- 拖绿色显示比例：看小点只是比例模型，真实粒子数仍由右侧 $N=nNA$ 的科学计数法读数决定。

#### 规律、证据与核心概念
阿伏伽德罗常数定义了“1 mol 基本粒子”的数量：

```text
NA = 6.02×10^23 mol^-1
```

如果样品质量为 `m`，摩尔质量为 `M`，则：

```text
n = m/M
N = nNA = (m/M)NA
```

这里 `N` 表示微观粒子数，`n` 表示物质的量，单位是 mol。`NA` 的作用是把“多少 mol”换算成“多少个粒子”。

**概念辨析。**
- `NA` 不是某一种物质专属常数，任何物质 `1 mol` 基本粒子数都相同。
- “基本粒子”要看题目对象：可以是分子、原子、离子、电子等。
- `M` 的单位要和 `m` 匹配。若 `m` 用 g，`M` 常用 g/mol；若 `m` 用 kg，`M` 要用 kg/mol。
- $1\ \mathrm{mol} H_{2}O$ 含 `NA` 个水分子，但含 `3NA` 个原子。
- 粒子数 `N` 很大，通常用科学计数法表示。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 天平读数 | `m` | 样品质量 | 宏观可测量 |
| 摩尔质量滑块 | `M` | 每 1 mol 的质量 | 由物质种类决定 |
| 中间仪表 | `n` | $n=m/M$ | 物质的量 |
| 粒子计数器 | `N` | $N=nNA$ | 微观粒子数 |
| 小点说明 | 显示比例 | 每点代表若干粒子 | 真实粒子数远超画面点数 |

**适用边界。**
- 必须明确计数对象：分子数、原子数、离子数不能混为一谈。
- 质量和摩尔质量单位要统一。
- 阿伏伽德罗常数用于粒子数换算，不直接表示质量、体积或密度。
- 气体题若给出标准状况体积，还可先由气体摩尔体积求 `n`，再乘 `NA`。
- 涉及化学式时，要把每个分子含有多少原子也算进去。

#### 应用与迁移
- 已知质量和摩尔质量，求分子数或原子数。
- 已知粒子数，反求物质的量或质量。
- 气体题：由状态量或体积求物质的量，再求分子数。
- 概念判断：区分 `n`、`N`、`NA`、`M`。

**解题路径。**
1. 先确定题目要数的对象：分子、原子还是离子。
2. 统一单位，保证 `m` 和 `M` 匹配。
3. 用 $n=m/M$ 求物质的量。
4. 用 $N=nNA$ 求粒子数。
5. 若问原子总数，再乘以每个分子中的原子个数。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “NA 是分子质量” | `NA` 是每 mol 粒子数 | 质量由 `M` 表示 |
| “1 mol 水含 NA 个原子” | 1 个 H2O 有 3 个原子 | 1 mol 水含 `NA` 个分子、`3NA` 个原子 |
| “m/M 不看单位” | g 与 kg 混用会差 1000 倍 | 先统一单位 |
| “N 和 n 是同一个量” | `N` 是个数，`n` 是 mol 数 | 用 $N=nNA$ 连接 |
| “画面小点就是真实粒子数” | 真实数量巨大 | 小点只是比例显示 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-02）

<h4 id="molecular-motion">X3-03 分子热运动 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-03
- 模块：选择性必修3
- 主题：分子无规则运动与温度
- 高考功能：扩散 / 布朗运动 / 温度与平均动能判断
- 前置知识：分子动理论、阿伏伽德罗常数、热力学温度
- 后续应用：气体压强微观解释、内能、热力学定律

#### 情境与现象
墨水滴进清水后会慢慢散开；花粉颗粒在显微镜下会抖动；气体温度升高时，撞击容器壁更猛烈。这些现象说明分子不是静止排列的，而是在任何温度下都做永不停息的无规则运动。温度越高，大量分子的平均动能越大，热运动越剧烈。

**静态表征。**
<svg viewBox="0 0 620 220" width="100%" style="max-width:820px">
  <defs>
    <marker id="mmArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <rect x="36" y="36" width="230" height="136" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="151" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">低温：平均速率较小</text>
  <circle cx="76" cy="78" r="5" fill="#2c7be5"/><path d="M76 78 L96 66" stroke="#e03131" stroke-width="2" marker-end="url(#mmArrow)"/>
  <circle cx="132" cy="114" r="5" fill="#2c7be5"/><path d="M132 114 L114 128" stroke="#e03131" stroke-width="2" marker-end="url(#mmArrow)"/>
  <circle cx="204" cy="88" r="5" fill="#2c7be5"/><path d="M204 88 L218 105" stroke="#e03131" stroke-width="2" marker-end="url(#mmArrow)"/>
  <path d="M84 154 Q112 132 142 151 T218 143" fill="none" stroke="#c92a2a" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="142" cy="151" r="10" fill="#c92a2a"/>
  <text x="151" y="196" font-size="12" fill="#486581" text-anchor="middle">布朗颗粒抖动较弱，扩散较慢</text>

  <rect x="354" y="36" width="230" height="136" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="469" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">高温：平均动能较大</text>
  <circle cx="394" cy="78" r="5" fill="#2c7be5"/><path d="M394 78 L438 54" stroke="#e03131" stroke-width="3" marker-end="url(#mmArrow)"/>
  <circle cx="456" cy="118" r="5" fill="#2c7be5"/><path d="M456 118 L410 150" stroke="#e03131" stroke-width="3" marker-end="url(#mmArrow)"/>
  <circle cx="528" cy="84" r="5" fill="#2c7be5"/><path d="M528 84 L566 122" stroke="#e03131" stroke-width="3" marker-end="url(#mmArrow)"/>
  <path d="M392 152 Q430 112 468 150 T558 126" fill="none" stroke="#c92a2a" stroke-width="2.5" stroke-dasharray="5 4"/>
  <circle cx="468" cy="150" r="10" fill="#c92a2a"/>
  <text x="469" y="196" font-size="12" fill="#486581" text-anchor="middle">布朗颗粒抖动更剧烈，扩散更快</text>
</svg>

**动态表征。**
动画显示大量分子在显微镜视野中无规则运动，并用红色大颗粒表示悬浮颗粒的布朗运动。直接拖动红色颗粒可以观察轨迹，拖动温度计或温度滑块后，蓝色分子的平均运动快慢、平均动能读数和红色颗粒轨迹都会同步变化。

**交互探究。**
<iframe src="anim/xb3/molecular-motion.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——比较平均动能必须使用热力学温度 K；布朗运动只适用于悬浮微粒，颗粒太大时不明显；热运动永不停息，温度降低只表示平均动能减小，不表示分子停止。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动红色悬浮颗粒观察布朗轨迹，也可拖动温度计改变 `T` 并记录数据。画面同时显示显微镜俯视、温度计侧视、速率统计图像和数据记录，把平均速率 $\propto \sqrt{T}$、平均动能 $\propto T$ 与可见运动绑定。

**证据任务。**
- 拖动温度计把温度从 `300 K` 降到 `100 K`：看分子运动和布朗颗粒抖动是否减弱。
- 把温度升到 `600 K`：看平均速率比例和平均动能比例如何变化。
- 暂停画面：注意每个分子的方向不同，热运动不是整齐同向运动。
- 看红色颗粒轨迹：确认布朗运动主体是颗粒，不是分子。

#### 规律、证据与核心概念
分子热运动是大量分子永不停息的无规则运动。温度越高，大量分子的平均动能越大：

```text
Eₖ(平均) ∝ T
v(平均量级) ∝ √T
```

扩散和布朗运动都能说明分子在运动。扩散是不同物质的分子彼此进入对方；布朗运动是悬浮颗粒受周围分子不平衡撞击而做无规则运动。

**概念辨析。**
- 热运动：分子的无规则运动，与物体整体机械运动不同。
- 扩散：不同物质分子互相进入对方，温度越高通常越快。
- 布朗运动：微小颗粒的无规则运动，颗粒越小、温度越高越明显。
- 温度：分子平均动能的标志，不表示单个分子的速度。
- 统计性：同一温度下分子速度仍有快慢差异，只是平均水平确定。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 关系 | 含义 |
|---|---|---|---|
| 温度滑块 | `T` | 热力学温度 | 决定平均动能水平 |
| 蓝色分子运动快慢 | 平均速率量级 | $v \propto \sqrt{T}$ | 温度升高，平均运动更快 |
| 读数 `平均动能` | `Eₖ(平均)` | $E_{k} \propto T$ | 温度是平均动能标志 |
| 红色颗粒轨迹 | 布朗运动强弱 | 分子撞击不平衡 | 温度越高越明显 |
| 暂停按钮 | 瞬时速度分布 | 方向杂乱 | 不是整齐同向运动 |

**适用边界。**
- 比较平均动能必须使用热力学温度 `K`。
- 布朗运动只适用于悬浮微粒，颗粒太大时不明显。
- 热运动永不停息，温度降低只表示平均动能减小，不表示分子停止。
- 宏观扩散速度还受浓度差、介质、温度等因素影响。
- 不能把物体整体运动速度等同于分子的热运动速度。

#### 应用与迁移
- 概念题：判断扩散、布朗运动、热运动的主体和原因。
- 比例题：由温度比求平均动能比或平均速率量级比。
- 解释题：用分子热运动解释闻到气味、墨水扩散、颗粒抖动。
- 易错题：判断 0℃、低温、绝对零度附近分子运动状态。

**解题路径。**
1. 先判断题目说的是分子、悬浮颗粒还是物体整体。
2. 涉及温度比时换成 K。
3. 平均动能用 $E_{k} \propto T$，平均速率量级用 $v \propto \sqrt{T}$。
4. 解释布朗运动时写清“分子撞击不平衡”。
5. 解释扩散时写清“分子无规则运动导致互相进入”。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “温度越高，每个分子速度都变大” | 单个分子速度有分布 | 说平均动能变大 |
| “布朗运动是分子运动” | 看到的是颗粒 | 说间接反映分子运动 |
| “0℃ 分子停止运动” | 0℃=273K | 分子仍在运动 |
| “热运动有固定方向” | 分子运动无规则 | 用统计平均描述 |
| “扩散只发生在气体” | 液体和固体中也可发生 | 只是快慢不同 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-03）

<h4 id="molecular-force">X3-04 分子力 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-04
- 模块：选择性必修3
- 主题：分子间相互作用力
- 高考功能：分子力方向判断 / 分子势能判断 / 固液气性质微观解释
- 前置知识：分子动理论、分子热运动、力和势能图像
- 后续应用：内能、晶体与非晶体、液体表面张力、物态变化

#### 情境与现象
固体不容易被压缩，也不容易被拉断；液体表面像一层绷紧的薄膜；气体分子相距较远时几乎彼此不牵制。这些现象说明分子间既有引力又有斥力。距离太近时斥力占主导，距离略大于平衡距离时引力占主导，距离很大时分子力可近似为 0。

**静态表征。**
<svg viewBox="0 0 660 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="mfRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
    <marker id="mfBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="28" y="42" width="184" height="136" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="120" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">r &lt; r0：斥力主导</text>
  <circle cx="98" cy="104" r="22" fill="#2c7be5"/><circle cx="138" cy="104" r="22" fill="#e8590c"/>
  <path d="M82 70 L50 70" stroke="#e03131" stroke-width="3" marker-end="url(#mfRed)"/>
  <path d="M154 70 L186 70" stroke="#e03131" stroke-width="3" marker-end="url(#mfRed)"/>
  <text x="120" y="158" font-size="12" fill="#486581" text-anchor="middle">压得太近，推开</text>

  <rect x="238" y="42" width="184" height="136" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="330" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">r = r0：合力为零</text>
  <circle cx="300" cy="104" r="22" fill="#2c7be5"/><circle cx="360" cy="104" r="22" fill="#e8590c"/>
  <text x="330" y="104" font-size="15" fill="#087f5b" text-anchor="middle" font-weight="700">F合=0</text>
  <text x="330" y="158" font-size="12" fill="#486581" text-anchor="middle">平衡距离，势能最小</text>

  <rect x="448" y="42" width="184" height="136" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="540" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">r &gt; r0：引力主导</text>
  <circle cx="505" cy="104" r="18" fill="#2c7be5"/><circle cx="575" cy="104" r="18" fill="#e8590c"/>
  <path d="M486 70 L526 70" stroke="#2c7be5" stroke-width="3" marker-end="url(#mfBlue)"/>
  <path d="M594 70 L554 70" stroke="#2c7be5" stroke-width="3" marker-end="url(#mfBlue)"/>
  <text x="540" y="158" font-size="12" fill="#486581" text-anchor="middle">拉得偏远，拉回</text>
  <text x="330" y="212" font-size="13" fill="#486581" text-anchor="middle">距离很大时，引力和斥力都迅速减小，分子力可近似为 0</text>
</svg>

**动态表征。**
动画显示两分子距离 `r` 可调，并在右侧同步画出分子力 `F-r` 曲线和分子势能 `Ep-r` 曲线。直接拖动右侧分子时，受力箭头、合力状态、势能读数和曲线点会同步移动；点“播放”可观察分子在平衡位置附近振动。

**交互探究。**
<iframe src="anim/xb3/molecular-force.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——本知识点讨论两个分子间距离改变时的合力表现；r_{0} 是分子合力为零的位置，不是分子间没有任何相互作用；分子力只在分子尺度近距离明显，宏观距离不能直接套用。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动分子改变间距 $r/r_{0}$，也可播放热扰动下的微小振动并记录数据点。画面同时显示两分子俯视、`F-r` 图像、`Ep-r` 图像和数据记录，把“近斥、平衡零、稍远引、很远近似无力”绑定到箭头和曲线读数。

**证据任务。**
- 直接拖动右侧分子到小于 $r_{0}$：看箭头是否把两分子推开。
- 把 `r` 拖到 $r_{0}$：看合力是否约为 0，势能是否最小。
- 把 `r` 拖到大于 $r_{0}$：看箭头是否把两分子拉回。
- 把 `r` 拖得很大：看分子力是否逐渐接近 0。

#### 规律、证据与核心概念
分子间同时存在引力和斥力，且都随距离增大而减小，但斥力随距离增大衰减得更快。于是合力表现为：

```text
r < r0：斥力大于引力，合力表现为斥力
r = r0：引力等于斥力，合力为 0
r > r0：引力大于斥力，合力表现为引力
r 很大：引力和斥力都很小，分子力近似为 0
```

分子势能在 $r=r_{0}$ 附近最小。无论把分子从 $r_{0}$ 压近还是拉远，都需要外界做功，分子势能都会增大。

**概念辨析。**
- 分子力不是“只有引力”或“只有斥力”，而是引力和斥力共同作用后的合力表现。
- $r_{0}$ 是平衡距离，不是“没有分子力成分”，而是引力与斥力大小相等。
- 分子势能看距离是否偏离 $r_{0}$，偏离越明显，势能通常越高。
- 普通气体分子间距较大，除碰撞瞬间外，分子力常可近似忽略。
- 固体难压缩主要体现近距离斥力，液体表面张力与分子引力有关。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 关系 | 含义 |
|---|---|---|---|
| 距离滑块 | $r/r_{0}$ | 与平衡距离比较 | 决定合力表现 |
| 左侧分子箭头向外 | 斥力 | $r<r_{0}$ | 分子被推开 |
| 左侧分子箭头向内 | 引力 | $r>r_{0}$ | 分子被拉回 |
| 绿色状态 | $F\approx 0$ | $r=r_{0}$ | 引力和斥力平衡 |
| 蓝色势能曲线 | `Ep` | $r_{0}$ 附近最小 | 偏离 $r_{0}$ 势能增大 |

**适用边界。**
- 本知识点讨论两个分子间距离改变时的合力表现。
- $r_{0}$ 是分子合力为零的位置，不是分子间没有任何相互作用。
- 分子力只在分子尺度近距离明显，宏观距离不能直接套用。
- 分子势能判断一般围绕 $r_{0}$：从 $r_{0}$ 压近或拉远，势能都增大。
- 对气体作理想气体近似时，通常忽略分子间相互作用势能。

#### 应用与迁移
- 判断题：给出 `r` 与 $r_{0}$ 的关系，判断引力/斥力/合力方向。
- 势能题：判断分子从某距离移动到另一距离时势能如何变化。
- 概念题：解释固体难压缩、液体表面张力、气体近似理想的原因。
- 图像题：读 `F-r` 或 `Ep-r` 曲线上的状态。

**解题路径。**
1. 先把分子间距与 $r_{0}$ 比较。
2. $r<r_{0}$ 判斥力主导，$r>r_{0}$ 判引力主导，$r=r_{0}$ 判合力为零。
3. 若问势能，先找是否靠近或远离势能最低点 $r_{0}$。
4. 若问宏观现象，把分子力表现翻译成抗压、抗拉或表面收缩。
5. 若题中是理想气体，注意常忽略分子势能。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “r=r0 时没有引力和斥力” | 引力和斥力都存在，只是合力为 0 | 说“合力为零” |
| “r>r0 时一定越远引力越大” | 距离很大时分子力趋近 0 | 只在一定范围内引力主导 |
| “分子势能在 r=0 最小” | 压得太近斥力强，势能高 | $r_{0}$ 附近势能最小 |
| “气体分子间没有力” | 近距离碰撞时仍有相互作用 | 理想气体只是近似忽略 |
| “斥力只存在于固体” | 分子很近时都有斥力 | 看分子间距，不看物态名称 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-04）

<h4 id="internal-energy">X3-05 内能 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-05
- 模块：选择性必修3
- 主题：内能
- 高考功能：概念判断 / 热力学第一定律铺垫 / 理想气体内能判断
- 前置知识：分子动理论、分子热运动、分子力
- 后续应用：热力学第一定律、气体过程、热机效率

#### 情境与现象
同一杯水加热后温度升高，分子运动更剧烈；冰熔化成水时，温度可能暂时不变，但分子间排列和相互作用状态改变。物体的能量不只来自整体运动，还来自内部大量分子的热运动和分子间相互作用。这个由微观热运动和相互作用共同形成的能量，叫内能。

**静态表征。**
<svg viewBox="0 0 640 230" width="100%" style="max-width:820px">
  <rect x="42" y="42" width="180" height="130" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="132" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">分子动能</text>
  <circle cx="92" cy="88" r="6" fill="#2c7be5"/><path d="M92 88 L126 68" stroke="#e03131" stroke-width="3"/>
  <circle cx="150" cy="124" r="6" fill="#2c7be5"/><path d="M150 124 L116 150" stroke="#e03131" stroke-width="3"/>
  <text x="132" y="160" font-size="12" fill="#486581" text-anchor="middle">温度越高，平均动能越大</text>

  <text x="250" y="106" font-size="34" fill="#829ab1" text-anchor="middle">+</text>

  <rect x="282" y="42" width="180" height="130" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="372" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">分子势能</text>
  <circle cx="342" cy="102" r="16" fill="#2c7be5"/><circle cx="402" cy="102" r="16" fill="#e8590c"/>
  <path d="M358 132 L386 132" stroke="#2c7be5" stroke-width="3"/>
  <text x="372" y="160" font-size="12" fill="#486581" text-anchor="middle">由分子间距和作用力决定</text>

  <text x="492" y="106" font-size="34" fill="#829ab1" text-anchor="middle">=</text>

  <rect x="520" y="42" width="90" height="130" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="565" y="86" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">内能 U</text>
  <text x="565" y="116" font-size="13" fill="#486581" text-anchor="middle">分子总动能</text>
  <text x="565" y="140" font-size="13" fill="#486581" text-anchor="middle">+ 势能</text>
  <text x="320" y="206" font-size="14" fill="#102a43" text-anchor="middle" font-weight="700">内能是物体内部所有分子热运动动能和分子势能的总和</text>
</svg>

**动态表征。**
动画把内能拆成两条能量柱：分子总动能随温度和物质的量变化，分子势能随分子间距偏离平衡距离而变化。直接拖动下方两分子的间距或播放分子运动时，能量柱和数据记录同步变化，学生能看到内能不是“温度一个量”能完全代表的。

**交互探究。**
<iframe src="anim/xb3/internal-energy.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——内能讨论的是微观热运动和分子相互作用，不包括宏观机械能；比较分子平均动能时必须使用热力学温度；对理想气体，可近似认为内能只与温度和物质的量有关。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动两分子改变 $r/r_{0}$，也可调节温度 `T`、物质的量 `n` 并记录能量数据。画面同时显示微观分子俯视、分子间距侧视、能量柱图像和数据记录，把 $U=\text{分子总动能}+\text{分子势能}$ 与读数绑定。

**证据任务。**
- 固定 `n` 和 $r/r_{0}$，升高 `T`：看分子动能柱和内能是否增大。
- 固定 `T`，增大 `n`：看分子数更多时总内能是否增大。
- 直接拖动两分子，把 $r/r_{0}$ 从 `1` 压近或拉远：看分子势能是否升高。
- 切换到理想气体近似理解：势能常忽略，内能主要由温度和物质的量决定。

#### 规律、证据与核心概念
内能是物体内所有分子微观能量的总和：

```text
U = 分子热运动总动能 + 分子间相互作用势能
```

温度决定分子平均动能，物质的量决定分子总数，分子间距和物态影响分子势能。对一定量理想气体，分子势能通常忽略，所以内能只与温度有关：

```text
一定量理想气体：T 变，U 变；T 不变，U 不变
```

**概念辨析。**
- 内能属于物体内部微观能量，不包括物体整体平动的机械能。
- 温度越高，分子平均动能越大，但总内能还和物质的量有关。
- 分子势能与分子间距和物态有关，物态变化时内能可能改变。
- 理想气体近似下，分子间势能忽略，内能主要由温度决定。
- 内能是状态量，只由当前状态决定，与到达这个状态的过程无关。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 关系 | 含义 |
|---|---|---|---|
| 温度滑块 | `T` | $E_{k}(\text{平均}) \propto T$ | 决定平均动能 |
| 物质的量滑块 | `n` | 分子总数 $\propto n$ | 分子越多，总能量越大 |
| 红色能量柱 | 分子总动能 | $\propto nT$ | 温度和数量共同影响 |
| 蓝色能量柱 | 分子势能 | 与 $r/r_{0}$ 有关 | 偏离平衡距离升高 |
| 黄色能量柱 | 内能 `U` | 动能 + 势能 | 内部微观能量总和 |

**适用边界。**
- 内能讨论的是微观热运动和分子相互作用，不包括宏观机械能。
- 比较分子平均动能时必须使用热力学温度。
- 对理想气体，可近似认为内能只与温度和物质的量有关。
- 对液体、固体或真实气体，分子势能不能随意忽略。
- 物态变化时即使温度不变，内能也可能改变。

#### 应用与迁移
- 概念题：判断内能是否包含机械能、势能、分子动能。
- 比较题：同温不同质量、同质量不同温度、物态变化时内能比较。
- 理想气体题：一定量理想气体温度不变时内能不变。
- 热力学题：为 $\Delta U=Q+W$ 判断内能变化做铺垫。

**解题路径。**
1. 先判断研究对象和物质的量是否相同。
2. 看温度变化，判断分子平均动能变化。
3. 看物态和体积变化，判断分子势能是否需要考虑。
4. 若题目明确理想气体，重点看温度。
5. 不要把整体速度、高度等机械能混进内能。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “温度高，内能一定大” | 还要看物质的量 | 同一物体或同量物质才可直接比较 |
| “内能包括物体整体动能” | 整体动能是机械能 | 内能只看内部微观能量 |
| “温度不变内能一定不变” | 物态变化时势能可能变 | 理想气体才常这样判断 |
| “分子势能总可忽略” | 固体液体和真实气体不一定 | 看是否理想气体近似 |
| “内能是过程量” | 内能是状态量 | 只由当前状态决定 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-05）

<h4 id="temperature-scale">X3-06 温度与温标 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-06
- 模块：选择性必修3
- 主题：温度、热平衡与温标
- 高考功能：摄氏温度与热力学温度换算 / 平均动能判断 / 热平衡判断
- 前置知识：分子热运动、内能
- 后续应用：气体状态方程、热力学定律、理想气体内能

#### 情境与现象
温度计插入热水后示数升高，插入冷水后示数降低；两个物体接触一段时间后，温度会趋于相同。温度不是“热量多少”，而是描述物体冷热程度的状态量，从微观看，它反映大量分子平均动能的大小。高考计算中必须区分摄氏温度 `t` 和热力学温度 `T`。

**静态表征。**
<svg viewBox="0 0 650 230" width="100%" style="max-width:840px">
  <rect x="44" y="34" width="150" height="150" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="119" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">温度计</text>
  <rect x="108" y="58" width="22" height="92" rx="11" fill="#f7f9fc" stroke="#829ab1"/>
  <rect x="113" y="96" width="12" height="54" rx="6" fill="#e03131"/>
  <circle cx="119" cy="160" r="18" fill="#e03131"/>
  <text x="119" y="204" font-size="12" fill="#486581" text-anchor="middle">宏观冷热程度</text>

  <rect x="250" y="34" width="150" height="150" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="325" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">温标换算</text>
  <text x="325" y="82" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">T = t + 273.15</text>
  <text x="325" y="116" font-size="14" fill="#486581" text-anchor="middle">T 单位：K</text>
  <text x="325" y="144" font-size="14" fill="#486581" text-anchor="middle">t 单位：℃</text>
  <text x="325" y="204" font-size="12" fill="#486581" text-anchor="middle">比例计算必须用 K</text>

  <rect x="456" y="34" width="150" height="150" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="531" y="24" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">微观意义</text>
  <circle cx="500" cy="84" r="5" fill="#2c7be5"/><path d="M500 84 L535 65" stroke="#e03131" stroke-width="3"/>
  <circle cx="540" cy="125" r="5" fill="#2c7be5"/><path d="M540 125 L502 150" stroke="#e03131" stroke-width="3"/>
  <circle cx="565" cy="90" r="5" fill="#2c7be5"/><path d="M565 90 L590 120" stroke="#e03131" stroke-width="3"/>
  <text x="531" y="204" font-size="12" fill="#486581" text-anchor="middle">T 越高，平均动能越大</text>
</svg>

**动态表征。**



> **公式首次使用卡**：适用边界——热学公式中的温度一般使用热力学温度 K；摄氏温度差和热力学温度差数值相同，但温度比不能直接用摄氏温度；比较平均动能时必须使用 T，不能使用 t。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

动画把摄氏温度计、热力学温度读数和分子运动放在同一画面。直接拖动温度计液柱改变摄氏温度 `t`，温度计液柱、$T=t+273.15$、平均动能比例和分子运动快慢同步变化；点“播放”可观察两个物体温度逐渐接近热平衡。

**交互探究。**
<iframe src="anim/xb3/temperature-scale.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可操作内容：直接拖动 A 或 B 的温度计液柱改变摄氏读数，也可播放热平衡过程并记录温标换算。画面同时显示双温度计侧视、分子热运动俯视、温标换算图像和数据记录，把 $T=t+273.15$、$\Delta T=\Delta t$ 与 K 读数绑定。

**证据任务。**
- 拖动温度计把 `t` 从 `0℃` 调到 `100℃`：看 `T` 是否从约 `273 K` 变到约 `373 K`。
- 比较 `0℃` 和 `100℃`：平均动能不是变为无穷大，也不是从 0 开始。
- 把两个物体温度调成相同：看是否显示热平衡。
- 做比例判断时只看 `K`：不要用摄氏温度直接相除。

#### 规律、证据与核心概念
摄氏温度和热力学温度的零点不同，但温度间隔相同：

```text
T = t + 273.15
ΔT = Δt
```

热力学温度 `T` 与分子平均动能成正比：

```text
Eₖ(平均) ∝ T
```

所以比较平均动能大小或气体状态方程中的温度时，必须使用热力学温度 `K`。

**概念辨析。**
- 温度是状态量，描述冷热程度，微观上反映分子平均动能。
- 热量是过程量，只在热传递过程中说“吸收/放出热量”。
- 热平衡：两个物体接触后不再发生净热传递，温度相同。
- 摄氏温度用于日常读数，热力学温度用于热学公式。
- 绝对零度是 `0 K`，约等于 `-273.15℃`，不能达到或低于它。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 摄氏温度滑块 | `t` | ℃ | 日常温度读数 |
| K 读数 | `T` | $T=t+273.15$ | 热力学温度 |
| 液柱高度 | 温度示数 | 与 `t` 同步 | 宏观冷热程度 |
| 分子运动快慢 | 平均动能 | $E_{k}\propto T$ | 温度的微观意义 |
| 两物体状态 | 热平衡 | $TA=TB$ | 温度相同无净热传递 |

**适用边界。**
- 热学公式中的温度一般使用热力学温度 `K`。
- 摄氏温度差和热力学温度差数值相同，但温度比不能直接用摄氏温度。
- 比较平均动能时必须使用 `T`，不能使用 `t`。
- 热量不是状态量，不能说“物体含有多少热量”。
- 热平衡判断的是温度是否相同，不是内能是否相同。

#### 应用与迁移
- 换算题：摄氏温度和热力学温度互换。
- 比例题：由温度比判断平均动能比。
- 判断题：区分温度、热量、内能、热平衡。
- 气体题：在 `pV/T` 中正确使用 `K`。

**解题路径。**
1. 看到摄氏温度先换成 `K`。
2. 比较温度差时可用 $\Delta T=\Delta t$。
3. 比较温度比、平均动能比、气体状态量时必须用 `T`。
4. 判断热平衡看温度是否相同。
5. 遇到“含有热量”这类表述要警惕，热量是过程量。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “0℃ 分子平均动能为 0” | 0℃=273.15K | 平均动能仍不为 0 |
| “100℃ 是 0℃ 的两倍温度” | 温度比要用 K | 比较 373K 和 273K |
| “物体含有热量” | 热量是过程量 | 说物体有内能，传递热量 |
| “温度相同内能一定相同” | 还与物质的量、物态有关 | 热平衡只说明温度相同 |
| “摄氏温差不能等于 K 温差” | 两种温标间隔相同 | $\Delta T=\Delta t$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-06）

## 2. 气体实验定律

<h4 id="gas-state-parameters">X3-07 气体状态参量 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-07
- 模块：选择性必修3
- 主题：气体状态参量
- 高考功能：气体过程建模 / 实验定律前置 / 理想气体状态方程铺垫
- 前置知识：温度与温标、压强、体积、物质的量
- 后续应用：玻意耳定律、查理定律、理想气体状态方程、p-V 图像

#### 情境与现象
注射器口被堵住后，向内压活塞会觉得越来越难推；给密闭气体加热，压力表读数会升高；同样温度和体积下，充入更多气体，压强也会增大。描述一团气体的状态，不能只说“热不热”或“多不多”，要同时看压强 `p`、体积 `V`、温度 `T` 和物质的量 `n`。

**静态表征。**
<svg viewBox="0 0 660 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="gpArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <rect x="54" y="54" width="250" height="120" rx="8" fill="#fff" stroke="#334e68" stroke-width="3"/>
  <rect x="254" y="48" width="24" height="132" fill="#829ab1"/>
  <circle cx="92" cy="92" r="5" fill="#2c7be5"/><circle cx="142" cy="126" r="5" fill="#2c7be5"/><circle cx="198" cy="86" r="5" fill="#2c7be5"/><circle cx="238" cy="132" r="5" fill="#2c7be5"/>
  <path d="M238 110 L272 110" stroke="#e03131" stroke-width="3" marker-end="url(#gpArrow)"/>
  <text x="278" y="108" font-size="13" fill="#e03131">p</text>
  <text x="174" y="202" font-size="14" fill="#486581" text-anchor="middle">体积 V：气体占据的空间</text>
  <text x="80" y="42" font-size="14" fill="#102a43" font-weight="700">n：分子多少</text>
  <text x="228" y="42" font-size="14" fill="#102a43" font-weight="700">T：平均动能</text>
  <rect x="388" y="54" width="210" height="120" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="493" y="86" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">状态参量</text>
  <text x="493" y="120" font-size="15" fill="#486581" text-anchor="middle">p、V、T、n</text>
  <text x="493" y="150" font-size="13" fill="#486581" text-anchor="middle">同一状态必须统一描述</text>
  <text x="493" y="202" font-size="14" fill="#102a43" text-anchor="middle" font-weight="700">理想气体：pV = nRT</text>
</svg>

**动态表征。**
动画展示封闭气缸中的气体。直接拖动活塞可以改变体积 `V`；调节温度 `T` 和物质的量 `n` 时，分子数量/运动快慢、压强箭头、压力表读数和 `p-V` 图像会同步变化。

**交互探究。**
<iframe src="anim/xb3/gas-state-parameters.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——温度必须用热力学温度 K；同一气体状态的 p、V、T、n 要对应同一时刻；封闭气体中 n 通常不变；有漏气、充气、化学反应时要重新判断。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动活塞改变体积 `V`，也可调节温度 `T`、物质的量 `n` 并记录状态点。画面同时显示气缸侧视、压力表、`p-V` 图像和数据记录，把 $p=nRT/V$、$pV/T=nR$ 与状态表读数绑定。

**证据任务。**
- 固定 `T` 和 `n`，拖动活塞减小 `V`：看 `p` 是否增大。
- 固定 `V` 和 `n`，升高 `T`：看 `p` 是否增大。
- 固定 `V` 和 `T`，增大 `n`：看 `p` 是否增大。
- 看 `pV/T`：确认当 `n` 不变时它保持不变，改变 `n` 时它随之改变。

#### 规律、证据与核心概念
气体状态参量是描述气体宏观状态的物理量：

```text
p：压强，来自分子频繁撞击器壁
V：体积，气体占据的空间
T：热力学温度，反映分子平均动能
n：物质的量，反映分子总数
```

对理想气体，这些量由状态方程联系：

```text
pV = nRT
p = nRT/V
```

所以讨论气体问题时，必须明确哪些量不变、哪些量变化。

**概念辨析。**
- 压强 `p`：不是单个分子的力，而是大量分子撞壁的统计效果。
- 体积 `V`：通常由容器或活塞位置决定，必须用统一单位。
- 温度 `T`：气体公式中必须用 K。
- 物质的量 `n`：封闭气体中通常不变；漏气或充气时会变。
- 状态量：`p、V、T、n` 描述某一瞬间的状态，不描述过程路径。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 活塞位置 | `V` | $p=nRT/V$ | 压缩使 V 减小 |
| 分子运动快慢 | `T` | $E_{k}\propto T$ | 温度越高撞壁越猛烈 |
| 分子点数量 | `n` | 分子总数 $\propto n$ | 充入气体使 n 增大 |
| 红色压强箭头 | `p` | $p=nRT/V$ | 撞壁统计效果 |
| 读数 `pV/T` | `nR` | $pV/T=nR$ | n 不变时守恒 |

**适用边界。**
- 温度必须用热力学温度 `K`。
- 同一气体状态的 `p、V、T、n` 要对应同一时刻。
- 封闭气体中 `n` 通常不变；有漏气、充气、化学反应时要重新判断。
- 压强、体积单位要统一，计算时常用 Pa、m³、K、mol。
- 理想气体状态方程适用于气体较稀薄、分子间相互作用可忽略的近似情况。

#### 应用与迁移
- 状态判断：识别一个气体状态需要哪些参量。
- 控制变量：判断等温、等容、等压、定量气体过程。
- 计算铺垫：为 $p_{1}V_{1}/T_{1}=p_{2}V_{2}/T_{2}$ 建立变量表。
- 实验题：读压力表、温度计、活塞刻度并分析误差。

**解题路径。**
1. 画出气体研究对象，确认是否封闭。
2. 列状态表：`p、V、T、n`。
3. 把摄氏温度换成 K。
4. 判断不变量：等温、等容、等压、定量。
5. 再选择玻意耳定律、查理定律或理想气体状态方程。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “气体状态只由 p、V、T 决定” | 充气漏气时 n 会变 | 明确是否定量气体 |
| “气体公式可用摄氏温度” | 温度比必须用 K | 先换算热力学温度 |
| “压强是一个分子的撞击力” | 压强是大量分子统计效果 | 说单位面积平均作用 |
| “pV/T 一定不变” | 只有 n 不变时才不变 | 看是否封闭定量 |
| “不同状态参量可混着用” | 必须对应同一状态 | 建状态表 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-07）

<h4 id="boyle-law">X3-08 玻意耳定律 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-08
- 模块：选择性必修3
- 主题：气体实验定律
- 高考功能：等温过程 / p-V 反比关系 / 气体压强计算
- 前置知识：气体状态参量、温度与温标、压强
- 后续应用：理想气体状态方程、p-V 图像、热力学第一定律

#### 情境与现象
堵住注射器口向内推活塞，气体体积变小，手会感到越来越难推。若这个过程足够慢，并且气体温度基本保持不变，那么体积越小，分子撞击器壁越频繁，气体压强越大。这就是玻意耳定律的直观图像。

**静态表征。**
<svg viewBox="0 0 650 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="blArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <rect x="42" y="56" width="230" height="110" rx="8" fill="#fff" stroke="#334e68" stroke-width="3"/>
  <rect x="220" y="50" width="20" height="122" fill="#829ab1"/>
  <circle cx="76" cy="86" r="5" fill="#2c7be5"/><circle cx="124" cy="124" r="5" fill="#2c7be5"/><circle cx="176" cy="92" r="5" fill="#2c7be5"/>
  <path d="M190 112 L220 112" stroke="#e03131" stroke-width="3" marker-end="url(#blArrow)"/>
  <text x="157" y="200" font-size="13" fill="#486581" text-anchor="middle">V 变小，撞壁更频繁，p 变大</text>
  <rect x="354" y="42" width="230" height="144" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="469" y="74" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">玻意耳定律</text>
  <text x="469" y="112" font-size="18" fill="#102a43" text-anchor="middle">pV = C</text>
  <text x="469" y="146" font-size="14" fill="#486581" text-anchor="middle">一定量气体，温度不变</text>
  <text x="469" y="200" font-size="13" fill="#486581" text-anchor="middle">p 与 V 成反比，p-V 图像是双曲线</text>
</svg>

**动态表征。**
动画固定气体的温度 `T` 和物质的量 `n`，直接拖动活塞改变体积 `V`。活塞位置、压强箭头、压力表和右侧 `p-V` 双曲线上的点会同步变化，并可记录 `pV` 是否保持常量。

**交互探究。**
<iframe src="anim/xb3/boyle-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——气体质量/物质的量不变；温度保持不变，或过程足够慢并与外界充分热交换近似等温；气体近似理想气体。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动等温气缸活塞改变体积 `V`，也可改变等温温度 `T` 并记录状态点。画面同时显示等温气缸侧视、压力表、`p-V` 图像和数据记录，把 $pV=\text{常量}$、$p_{1}V_{1}=p_{2}V_{2}$ 与压力表读数绑定。

**证据任务。**
- 固定温度，拖动活塞逐渐减小 `V`：看 `p` 是否按反比增大。
- 把 `V` 调成原来一半：看 `p` 是否约变为 2 倍。
- 改变等温温度 `T`：看整条双曲线对应的常量 $pV=nRT$ 是否改变。
- 观察图像：等温线不是直线，而是双曲线。

#### 规律、证据与核心概念
由理想气体状态方程：

```text
pV = nRT
```

当气体物质的量 `n` 不变、温度 `T` 不变时，右侧 `nRT` 为常量：

```text
pV = 常量
p1V1 = p2V2
```

所以压强与体积成反比。体积越小，单位时间内分子撞击器壁次数越多，压强越大。

**概念辨析。**
- 玻意耳定律描述的是等温过程，不是任意压缩过程。
- “一定量气体”表示 `n` 不变，不能漏气或充气。
- `pV` 保持常量，但 `p` 和 `V` 各自会变。
- `p-V` 图像为双曲线，离原点越近表示体积小、压强大。
- 若温度改变，不同温度对应不同的等温线。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 活塞位置 | `V` | $p=C/V$ | 体积由活塞决定 |
| 压力表 | `p` | $p=nRT/V$ | 体积越小压强越大 |
| 读数 `pV` | 常量 `C` | $C=nRT$ | 同一等温过程不变 |
| 图像点 | `(V,p)` | $pV=C$ | 在等温双曲线上移动 |
| 温度滑块 | `T` | $C=nRT$ | 改变 T 会换一条等温线 |

**适用边界。**
- 气体质量/物质的量不变。
- 温度保持不变，或过程足够慢并与外界充分热交换近似等温。
- 气体近似理想气体。
- 压强和体积单位要统一。
- 不能把玻意耳定律用于等容、等压或温度明显变化的过程。

#### 应用与迁移
- 计算题：已知 $p_{1}、V_{1}、V_{2}$ 求 $p_{2}$。
- 判断题：压缩气体时压强变化是否满足反比。
- 图像题：识别等温线、比较不同温度等温线。
- 实验题：用注射器或玻璃管验证 `pV` 是否近似不变。

**解题路径。**
1. 判断是否“一定量、等温”。
2. 写出初末状态 $p_{1}、V_{1}、p_{2}、V_{2}$。
3. 列 $p_{1}V_{1}=p_{2}V_{2}$。
4. 代入单位统一的数据求未知量。
5. 若题中温度改变，改用理想气体状态方程。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “压缩气体都用 pV=常量” | 只有等温定量才成立 | 先判断 T 和 n |
| “V 变小 p 也变小” | 等温下 p 与 V 反比 | V 减小 p 增大 |
| “p-V 图像是直线” | 反比函数是双曲线 | 画 p=C/V |
| “pV 不变说明 p 不变” | 乘积不变不代表单个量不变 | p、V 反向变化 |
| “漏气后仍用同一常量” | n 变了，常量变了 | 重新判断 n |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-08）

<h4 id="charles-law">X3-09 查理定律 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-09
- 模块：选择性必修3
- 主题：气体等容变化
- 高考功能：等容过程 / p-T 正比关系 / 摄氏温度误用纠偏
- 前置知识：气体状态参量、温度与温标、玻意耳定律
- 后续应用：理想气体状态方程、气体图像、热力学过程

#### 情境与现象
密闭硬质容器里的气体体积不能改变。给容器加热时，分子平均动能变大，撞击器壁更猛烈，压力表读数升高；冷却时，压强降低。若气体质量和体积都不变，压强 `p` 与热力学温度 `T` 成正比，这就是查理定律。

**静态表征。**
<svg viewBox="0 0 650 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="clArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <rect x="58" y="52" width="210" height="128" rx="8" fill="#fff" stroke="#334e68" stroke-width="3"/>
  <circle cx="96" cy="86" r="5" fill="#2c7be5"/><path d="M96 86 L132 64" stroke="#e03131" stroke-width="3"/>
  <circle cx="150" cy="130" r="5" fill="#2c7be5"/><path d="M150 130 L112 154" stroke="#e03131" stroke-width="3"/>
  <circle cx="218" cy="90" r="5" fill="#2c7be5"/><path d="M218 90 L250 116" stroke="#e03131" stroke-width="3" marker-end="url(#clArrow)"/>
  <text x="163" y="206" font-size="13" fill="#486581" text-anchor="middle">V 不变：T 越高，撞壁越猛烈，p 越大</text>
  <rect x="366" y="44" width="220" height="146" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="476" y="76" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">查理定律（等容）</text>
  <text x="476" y="114" font-size="18" fill="#102a43" text-anchor="middle">p/T = C</text>
  <text x="476" y="148" font-size="14" fill="#486581" text-anchor="middle">一定量气体，体积不变</text>
  <text x="476" y="206" font-size="13" fill="#486581" text-anchor="middle">p-T(K) 图像是过原点直线</text>
</svg>

**动态表征。**
动画固定容器体积 `V`，直接拖动温度计改变热力学温度 `T`。分子运动快慢、撞壁箭头、压力表和 `p-T` 图像上的点同步变化；同时显示摄氏温度，提醒比例计算不能直接用 ℃。

**交互探究。**
<iframe src="anim/xb3/charles-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——一定量气体，物质的量 n 不变；体积 V 不变，即等容过程；气体近似理想气体。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动温度计改变 `T`，也可调节物质的量 `n` 并记录状态点。画面同时显示等容容器侧视、温度计、压力表、`p-T` 图像和数据记录，把 $p/T=\text{常量}$、$p_{1}/T_{1}=p_{2}/T_{2}$ 与 K 温标读数绑定。

**证据任务。**
- 固定 `n`，拖动温度计把 `T` 从 `300 K` 调到 `600 K`：看 `p` 是否变为 2 倍。
- 看摄氏温度：`300 K` 到 `600 K` 不是“27℃ 到 327℃ 的 327/27 倍”。
- 改变 `n`：看同一温度下压强是否变大，直线斜率是否改变。
- 看图像：`p-T(K)` 是过原点直线，`p-t(℃)` 不是过原点正比例图像。

#### 规律、证据与核心概念
由理想气体状态方程：

```text
pV = nRT
```

当气体物质的量 `n` 不变、体积 `V` 不变时：

```text
p/T = nR/V = 常量
p1/T1 = p2/T2
```

这里 `T` 必须是热力学温度，单位为 K。

**概念辨析。**
- 查理定律描述等容变化，不是任意加热过程。
- 容器体积固定时，温度升高会使分子撞壁更猛烈，压强升高。
- 正比例关系是 `p` 与 `T(K)` 的关系，不是 `p` 与摄氏温度 `t` 的关系。
- 一定量气体表示 `n` 不变；充气会改变比例常量。
- `p-T` 图像斜率与 `n/V` 有关。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 硬质容器 | `V` | 固定不变 | 等容条件 |
| 温度滑块 | `T` | $p=CT$ | 热力学温度 |
| 压力表 | `p` | $p=nRT/V$ | 温度越高压强越大 |
| 读数 `p/T` | 常量 `C` | $C=nR/V$ | n、V 不变时守恒 |
| p-T 图像点 | `(T,p)` | 过原点直线 | 正比例关系 |

**适用边界。**
- 一定量气体，物质的量 `n` 不变。
- 体积 `V` 不变，即等容过程。
- 气体近似理想气体。
- 温度必须使用热力学温度 K。
- 若容器膨胀或漏气，不能直接用 $p/T=\text{常量}$。

#### 应用与迁移
- 计算题：已知 $p_{1}、T_{1}、T_{2}$ 求 $p_{2}$。
- 图像题：识别 `p-T` 直线和 `p-t` 直线的区别。
- 判断题：判断等容加热、冷却时压强变化。
- 实验题：由压力表和温度计数据验证 `p/T` 是否近似不变。

**解题路径。**
1. 判断是否一定量、等容。
2. 将摄氏温度全部换成 K。
3. 列初末状态 $p_{1}、T_{1}、p_{2}、T_{2}$。
4. 用 $p_{1}/T_{1}=p_{2}/T_{2}$ 求未知量。
5. 若体积变化，改用理想气体状态方程。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “p 与摄氏温度成正比” | 正比对象是 K | 用 $T=t+273$ |
| “加热气体都用 p/T=常量” | 必须等容定量 | 先判断 V、n |
| “T 加倍就是 ℃ 加倍” | 温标零点不同 | 温度比用 K |
| “p-T 图像不过原点” | 用 K 作横轴时过原点 | 区分 p-t 图像 |
| “充气后常量不变” | n 增大，常量增大 | 重新计算 `nR/V` |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-09）

<h4 id="ideal-gas-equation">X3-10 理想气体状态方程 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-10
- 模块：选择性必修3
- 主题：理想气体状态方程
- 高考功能：综合气体计算 / 多过程状态比较 / p-V-T 关系建模
- 前置知识：气体状态参量、玻意耳定律、查理定律
- 后续应用：p-V 图像、热力学第一定律、气体综合题

#### 情境与现象



> **公式首次使用卡**：适用边界——气体近似理想气体：温度不太低、压强不太大；气体处于平衡态，状态参量有确定意义；温度必须为热力学温度 K。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

同一团气体可能同时经历体积变化和温度变化：比如气球被加热时体积会变大，封闭气缸被压缩时温度也可能升高。此时只用 $pV=\text{常量}$ 或 $p/T=\text{常量}$ 不够，需要用一个同时连接 `p、V、T、n` 的方程，这就是理想气体状态方程。

**静态表征。**
<svg viewBox="0 0 660 230" width="100%" style="max-width:840px">
  <rect x="42" y="46" width="210" height="120" rx="8" fill="#fff" stroke="#334e68" stroke-width="3"/>
  <rect x="210" y="40" width="20" height="132" fill="#829ab1"/>
  <circle cx="78" cy="88" r="5" fill="#2c7be5"/><circle cx="128" cy="126" r="5" fill="#2c7be5"/><circle cx="176" cy="90" r="5" fill="#2c7be5"/>
  <text x="147" y="196" font-size="13" fill="#486581" text-anchor="middle">同一状态：p、V、T、n 要成套记录</text>
  <rect x="340" y="38" width="260" height="146" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="470" y="72" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">pV = nRT</text>
  <text x="470" y="112" font-size="15" fill="#486581" text-anchor="middle">定量气体：pV/T = 常量</text>
  <text x="470" y="148" font-size="15" fill="#486581" text-anchor="middle">两状态：p1V1/T1 = p2V2/T2</text>
  <text x="470" y="206" font-size="13" fill="#486581" text-anchor="middle">T 必须用 K，n 变时不能用同一常量</text>
</svg>

**动态表征。**
动画展示理想气体状态方程的四个变量。直接拖动活塞改变 `V`，再调节 `T、n` 时，活塞、分子数量、分子运动快慢、压强和 `pV/T` 读数同步变化，让学生看到三条实验定律其实都来自 $pV=nRT$ 的不同控制变量情形。

**交互探究。**
<iframe src="anim/xb3/gas-state-parameters.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可操作内容：直接拖动活塞改变体积 `V`，也可调节温度 `T`、物质的量 `n`。实时变化：压强 $p=nRT/V$、$pV/T=nR$、活塞位置、分子运动、`p-V` 图像和数据记录。

**证据任务。**
- 保持 `n` 不变，任意改变 `V` 和 `T`：看 `pV/T` 是否保持不变。
- 把 `n` 调大：看 `pV/T` 是否随 `nR` 增大。
- 固定 `T`：观察它退化为玻意耳定律 $pV=\text{常量}$。
- 固定 `V`：观察它退化为查理定律 $p/T=\text{常量}$。

#### 规律、证据与核心概念
理想气体状态方程：

```text
pV = nRT
```

其中 `R` 是气体常量，`T` 是热力学温度。对一定量理想气体，`n` 不变：

```text
pV/T = nR = 常量
p1V1/T1 = p2V2/T2
```

特殊情况：

```text
T 不变 → pV = 常量
V 不变 → p/T = 常量
p 不变 → V/T = 常量
```

**概念辨析。**
- 理想气体是假想模型，忽略分子体积和分子间相互作用势能。
- 状态方程连接的是同一平衡状态下的 `p、V、T、n`。
- 若气体物质的量不变，可用两状态比例式。
- 若发生漏气、充气或反应，`n` 变化，必须使用 $pV=nRT$。
- 温度必须用 K，体积和压强要统一单位。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 活塞位置 | `V` | $p=nRT/V$ | 体积改变影响压强 |
| 温度滑块 | `T` | $p\propto T$（定 V、n） | 温度用 K |
| 分子点数量 | `n` | $pV/T=nR$ | 分子数改变常量 |
| 压力表 | `p` | $p=nRT/V$ | 综合结果 |
| 读数 `pV/T` | `nR` | 定量时不变 | 判断是否漏气/充气 |

**适用边界。**
- 气体近似理想气体：温度不太低、压强不太大。
- 气体处于平衡态，状态参量有确定意义。
- 温度必须为热力学温度 K。
- 一定质量的理想气体才能使用 $p_{1}V_{1}/T_{1}=p_{2}V_{2}/T_{2}$。
- 若 `n` 变化，应使用完整式 $pV=nRT$。

#### 应用与迁移
- 两状态计算：由初末 `p、V、T` 求未知量。
- 漏气/充气题：通过 `pV/T` 判断 `n` 变化。
- 图像题：结合等温线、等容线、等压线判断过程。
- 综合题：多个过程分段列状态方程。

**解题路径。**
1. 明确研究对象和是否定量。
2. 列状态表：`p、V、T、n`。
3. 所有摄氏温度先换成 K。
4. 若物质的量 `n` 不变，用 $p_{1}V_{1}/T_{1}=p_{2}V_{2}/T_{2}$。
5. 若 `n` 变，用 $pV=nRT$ 分别求。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “任何气体都严格满足 pV=nRT” | 真实气体有偏离 | 高温低压近似适用 |
| “摄氏温度可直接代入” | 温度比必须用 K | 先换 K |
| “漏气仍用同一常量” | n 变了 | 用完整式 |
| “不同状态的 p、V、T 混着代” | 状态量必须同一状态 | 建状态表 |
| “玻意耳和查理是独立无关公式” | 它们是状态方程特例 | 先看控制变量 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-10）

<h4 id="pv-graph">X3-11 p-V 图像 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-11
- 模块：选择性必修3
- 主题：气体图像
- 高考功能：p-V 图像读过程 / 做功判断 / 等温等压等容辨认
- 前置知识：气体状态方程、玻意耳定律、查理定律
- 后续应用：热力学第一定律、热机循环、气体综合题

#### 情境与现象
气体被活塞压缩或膨胀时，压强和体积会同时变化。把每个状态画成 `p-V` 坐标中的一个点，过程就变成一条线。看线的形状，就能判断过程类型；看曲线下方面积，就能判断气体对外做功大小。

**静态表征。**
<svg viewBox="0 0 660 240" width="100%" style="max-width:840px">
  <line x1="70" y1="190" x2="300" y2="190" stroke="#334e68" stroke-width="3"/>
  <line x1="70" y1="190" x2="70" y2="38" stroke="#334e68" stroke-width="3"/>
  <text x="305" y="206" font-size="13" fill="#486581">V</text>
  <text x="52" y="42" font-size="13" fill="#486581">p</text>
  <path d="M90 72 C126 88 170 120 260 178" fill="none" stroke="#e8590c" stroke-width="3"/>
  <text x="188" y="102" font-size="13" fill="#e8590c">等温线 pV=常量</text>
  <line x1="92" y1="132" x2="260" y2="132" stroke="#2c7be5" stroke-width="3"/>
  <text x="190" y="120" font-size="13" fill="#2c7be5">等压线</text>
  <line x1="170" y1="70" x2="170" y2="182" stroke="#7b2cbf" stroke-width="3"/>
  <text x="180" y="78" font-size="13" fill="#7b2cbf">等容线</text>
  <rect x="382" y="48" width="220" height="132" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"/>
  <text x="492" y="80" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">p-V 图像读法</text>
  <text x="492" y="116" font-size="14" fill="#486581" text-anchor="middle">横轴 V，纵轴 p</text>
  <text x="492" y="144" font-size="14" fill="#486581" text-anchor="middle">面积 ∫p dV 表示气体做功</text>
  <text x="492" y="206" font-size="13" fill="#486581" text-anchor="middle">向右膨胀 W>0，向左压缩 W<0</text>
</svg>

**动态表征。**
动画提供等温、等压、等容三种过程。拖动初末体积和压强后，图像路径、过程箭头、面积阴影和气缸活塞同步变化，帮助学生把“图线形状”和“气体过程”绑定。

**交互探究。**
<iframe src="anim/xb3/pv-graph.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——p-V 图像描述准静态平衡过程，过程中的状态参量可定义；面积表示气体对外做功，不是外界对气体做功；符号要看约定；等温线、等压线、等容线都有各自条件，不能只看局部形状乱套。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作参数：过程类型、初态体积 $V_{1}$、末态体积 $V_{2}$、初态压强 $p_{1}$。实时变化：过程线、末态压强 $p_{2}$、气体做功符号和面积。

**证据任务。**
- 选等温：看图线是否是双曲线，`V` 增大时 `p` 是否减小。
- 选等压：看图线是否水平，面积是否是矩形。
- 选等容：看图线是否竖直，面积是否为 0。
- 把 $V_{2}$ 调小：看过程箭头向左时，气体对外做功是否为负。

#### 规律、证据与核心概念
`p-V` 图像中，一个点代表气体一个平衡状态。横轴是体积 `V`，纵轴是压强 `p`。

```text
等温：pV = 常量，p-V 图像为双曲线
等压：p = 常量，p-V 图像为水平线
等容：V = 常量，p-V 图像为竖直线
```

气体对外做功：

```text
W = ∫p dV
```

在图像中对应过程线下方的面积。膨胀 $dV>0$，气体对外做正功；压缩 $dV<0$，气体对外做负功。

**概念辨析。**
- p-V 图像不是运动轨迹，而是状态变化图像。
- 等容过程没有体积变化，所以气体做功为 0。
- 等压过程面积容易直接算 $W=p(V_{2}-V_{1})$。
- 等温过程面积在高中通常定性判断或用给定条件计算。
- 图像方向很重要：同一条线，正向和反向做功符号相反。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 横坐标 | `V` | 体积 | 向右膨胀，向左压缩 |
| 纵坐标 | `p` | 压强 | 图线高低反映压强大小 |
| 橙色曲线 | 等温过程 | $pV=C$ | 双曲线 |
| 蓝色水平线 | 等压过程 | $p=C$ | 面积为矩形 |
| 紫色竖线 | 等容过程 | $V=C$ | $W=0$ |
| 阴影面积 | 做功 | $W=\int p dV$ | 面积带符号 |

**适用边界。**
- p-V 图像描述准静态平衡过程，过程中的状态参量可定义。
- 面积表示气体对外做功，不是外界对气体做功；符号要看约定。
- 等温线、等压线、等容线都有各自条件，不能只看局部形状乱套。
- 体积轴和压强轴单位会影响面积数值。
- 循环过程的净功等于闭合曲线围成的面积，方向决定正负。

#### 应用与迁移
- 图像识别：判断等温、等压、等容过程。
- 做功判断：由面积和方向判断正负。
- 状态比较：从图上读出哪个状态压强大、体积大、温度高。
- 循环题：判断净功和热机/制冷机方向。

**解题路径。**
1. 先看坐标轴：横轴 V，纵轴 p。
2. 识别图线：水平等压，竖直等容，双曲线等温。
3. 看过程方向：向右膨胀，向左压缩。
4. 用面积判断做功大小和符号。
5. 需要温度时用 $pV=nRT$ 比较 `pV`。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “p-V 图像是气体运动轨迹” | 它是状态图像 | 每个点代表一个状态 |
| “竖直线面积很大” | 等容 dV=0 | 做功为 0 |
| “面积永远为正” | 压缩时 dV<0 | 看过程方向 |
| “等温线是直线” | p 与 V 反比 | p-V 图像是双曲线 |
| “图像高温低温只看 p” | 温度与 pV 有关 | 同 n 时比较 pV |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-11）

<h4 id="gas-law-micro">X3-12 气体实验定律微观解释 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-12
- 模块：选择性必修3
- 主题：气体实验定律的微观解释
- 高考功能：分子撞壁解释 / 控制变量判断 / 定性推理
- 前置知识：分子热运动、气体状态参量、气体实验定律
- 后续应用：理想气体状态方程、热力学过程、气体综合题

#### 情境与现象
同一团气体体积变小时，分子更频繁地撞击容器壁，压强变大；温度升高时，分子平均动能增大，每次撞击更猛烈，压强也可能变大；充入更多气体时，单位时间撞壁的分子数增多，压强同样变大。宏观的 `p、V、T、n` 变化，都可以从分子撞壁的频率和猛烈程度来理解。

**静态表征。**
<svg viewBox="0 0 660 240" width="100%" style="max-width:840px">
  <defs>
    <marker id="gmArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <rect x="38" y="54" width="170" height="118" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="123" y="36" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">V 变小</text>
  <circle cx="76" cy="92" r="5" fill="#2c7be5"/><circle cx="118" cy="124" r="5" fill="#2c7be5"/><circle cx="164" cy="88" r="5" fill="#2c7be5"/>
  <path d="M162 116 L196 116" stroke="#e03131" stroke-width="3" marker-end="url(#gmArrow)"/>
  <text x="123" y="200" font-size="12" fill="#486581" text-anchor="middle">撞壁更频繁</text>
  <rect x="246" y="54" width="170" height="118" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="331" y="36" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">T 变大</text>
  <circle cx="286" cy="94" r="5" fill="#2c7be5"/><path d="M286 94 L330 72" stroke="#e03131" stroke-width="3"/>
  <circle cx="354" cy="124" r="5" fill="#2c7be5"/><path d="M354 124 L398 150" stroke="#e03131" stroke-width="3" marker-end="url(#gmArrow)"/>
  <text x="331" y="200" font-size="12" fill="#486581" text-anchor="middle">撞击更猛烈</text>
  <rect x="454" y="54" width="170" height="118" rx="8" fill="#fff" stroke="#d9e2ec" stroke-width="2"/>
  <text x="539" y="36" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">n 变大</text>
  <circle cx="486" cy="82" r="4" fill="#2c7be5"/><circle cx="518" cy="108" r="4" fill="#2c7be5"/><circle cx="552" cy="86" r="4" fill="#2c7be5"/><circle cx="588" cy="124" r="4" fill="#2c7be5"/><circle cx="500" cy="142" r="4" fill="#2c7be5"/>
  <path d="M584 105 L616 105" stroke="#e03131" stroke-width="3" marker-end="url(#gmArrow)"/>
  <text x="539" y="200" font-size="12" fill="#486581" text-anchor="middle">撞壁分子更多</text>
</svg>

**动态表征。**
动画显示气缸中分子的运动。拖动体积和温度时，分子撞壁频率、撞击强弱和压力箭头同步变化，帮助学生把实验定律从“公式”还原成“分子撞壁”的图像。

**交互探究。**
<iframe src="anim/xb3/gas-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：体积 `V`、温度 `T`。实时变化：分子运动快慢、撞壁箭头、压强 `p`、`pV/T`。

**证据任务。**
- 固定温度，减小体积：看分子撞壁是否更频繁，压强是否变大。
- 固定体积，升高温度：看分子运动是否更快，撞击是否更猛烈。
- 同时改变 `V` 和 `T`：看压强变化要综合两个因素判断。
- 观察 `pV/T`：理解理想气体状态方程是微观撞壁统计结果的宏观表达。

#### 规律、证据与核心概念
气体压强来自大量分子对器壁的频繁碰撞。压强大小受两类因素影响：

```text
撞壁频率：单位时间撞到单位面积的分子数
撞击猛烈程度：单个分子撞壁时动量改变的大小
```

因此：

```text
V 减小 → 分子到器壁距离缩短 → 撞壁更频繁 → p 增大
T 升高 → 分子平均动能增大 → 撞击更猛烈 → p 增大
n 增大 → 分子总数增加 → 撞壁分子更多 → p 增大
```




> **公式首次使用卡**：适用边界——适用于用理想气体模型进行定性解释的情形；讨论压强必须强调大量分子统计平均，不能用单个分子代替；温度变化要用热力学温度理解平均动能变化。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

这些微观解释与宏观方程 $pV=nRT$ 一致。

**概念辨析。**
- 压强不是某一个分子的作用力，而是大量分子撞壁的平均效果。
- 体积影响撞壁频率，温度影响分子平均动能，物质的量影响分子总数。
- 玻意耳定律看的是温度不变时体积对撞壁频率的影响。
- 查理定律看的是体积不变时温度对撞击猛烈程度的影响。
- 理想气体模型忽略分子间作用力和分子自身大小，强调撞壁统计。

#### 公式、变量、单位与条件
| 画面元素 | 微观因素 | 宏观量 | 公式对应 |
|---|---|---|---|
| 活塞压缩 | 撞壁频率增大 | `V` 减小、`p` 增大 | $p\propto 1/V$（T、n 定） |
| 分子速度变快 | 撞击更猛烈 | `T` 增大、`p` 增大 | $p\propto T$（V、n 定） |
| 分子点更多 | 撞壁分子数增多 | `n` 增大、`p` 增大 | $p\propto n$（V、T 定） |
| 压强箭头 | 平均撞壁效果 | `p` | $p=nRT/V$ |
| 读数 `pV/T` | 统计常量 | `nR` | 定量时不变 |

**适用边界。**
- 适用于用理想气体模型进行定性解释的情形。
- 讨论压强必须强调大量分子统计平均，不能用单个分子代替。
- 温度变化要用热力学温度理解平均动能变化。
- 真实气体在低温高压时分子间作用力和分子体积不可忽略，微观解释要修正。
- 不同变量同时变化时，不能只抓一个因素下结论。

#### 应用与迁移
- 定性解释：为什么压缩、加热、充气会使压强变大。
- 控制变量题：判断哪个实验定律对应哪个微观因素。
- 综合判断：体积和温度同时变化时判断压强趋势。
- 概念题：区分撞壁频率、撞击猛烈程度和分子总数。

**解题路径。**
1. 先确定哪些量变化：`V、T、n`。
2. `V` 变看撞壁频率，`T` 变看撞击猛烈程度，`n` 变看分子总数。
3. 单变量变化时直接判断压强趋势。
4. 多变量变化时回到 $p=nRT/V$ 综合比较。
5. 作答时用“频繁”和“猛烈”两个词把微观机制说完整。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “压强来自气体重量” | 容器壁各方向都有压强 | 来自分子撞壁 |
| “温度升高只是撞壁次数变多” | 主要是平均动能增大，撞击更猛烈 | 写清猛烈程度 |
| “体积减小只是分子变大” | 分子大小不变 | 是撞壁更频繁 |
| “分子数增多温度一定升高” | 充气不一定升温 | n 与 T 分开判断 |
| “多个因素变化也凭感觉判断” | 可能相互抵消 | 用 $p=nRT/V$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-12）

## 3. 热力学定律

<h4 id="first-law">X3-13 热力学第一定律 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-13
- 模块：选择性必修3
- 主题：热力学第一定律
- 高考功能：内能变化判断 / 吸放热与做功综合 / 气体过程能量分析
- 前置知识：内能、p-V 图像、气体做功
- 后续应用：能量守恒、热机效率、热力学第二定律

#### 情境与现象
给气缸中的气体加热，气体内能可能增加；压缩气体，外界对气体做功，气体内能也可能增加；如果气体一边吸热一边对外膨胀做功，吸收的能量不一定全变成内能。热力学第一定律把“热传递”和“做功”统一到内能变化中。

**静态表征。**
<svg viewBox="0 0 660 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="flRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
    <marker id="flBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="246" y="62" width="170" height="96" rx="8" fill="#fff" stroke="#334e68" stroke-width="3"/>
  <text x="331" y="111" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">系统内能 U</text>
  <path d="M112 110 L236 110" stroke="#e03131" stroke-width="4" marker-end="url(#flRed)"/>
  <text x="166" y="88" font-size="14" fill="#e03131" text-anchor="middle">吸热 Q>0</text>
  <path d="M550 110 L426 110" stroke="#2c7be5" stroke-width="4" marker-end="url(#flBlue)"/>
  <text x="492" y="88" font-size="14" fill="#2c7be5" text-anchor="middle">外界做功 W>0</text>
  <rect x="236" y="178" width="190" height="34" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="331" y="195" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">ΔU = Q + W</text>
  <text x="331" y="36" font-size="14" fill="#486581" text-anchor="middle">本页约定：Q 为系统吸热，W 为外界对系统做功</text>
</svg>

**动态表征。**



> **公式首次使用卡**：适用边界——热力学第一定律只用于边界明确的热力学系统；本页规定 W 为外界对系统做功，吸热 Q 为正；若题目采用气体对外做功为正，必须先转换符号约定。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

动画把气体系统画成一个可操作气缸。拖动活塞、热量手柄 `Q` 和做功手柄 `W`，气体装置、p-V 图像面积、能量账本和内能槽会同步变化，并实时显示 $\Delta U=Q+W$ 的正负。

**交互探究。**
<iframe src="anim/xb3/first-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：热量 `Q`、外界对系统做功 `W`、活塞位置 `V`；也可以直接拖动画面里的活塞和能量手柄。实时变化：内能变化 $\Delta U$、能量流向、p-V 面积、压力/体积/温度读数、状态判断和数据记录。

**证据任务。**
- 让 $Q>0、W=0$：看吸热是否使内能增加。
- 让 $Q=0、W>0$：看绝热压缩是否也能使内能增加。
- 让 $Q>0、W<0$：看气体吸热同时对外做功时，内能变化取决于两者代数和。
- 调到 $Q+W=0$：看内能是否不变。
- 拖动活塞：看 p-V 图像中的面积表示气体对外做功，而本页 `W` 是外界对系统做功，符号相反。

#### 规律、证据与核心概念
热力学第一定律是能量守恒在热现象中的表达。本页采用高中常用符号约定：

```text
Q > 0：系统吸热
W > 0：外界对系统做功
ΔU = Q + W
```

若气体对外做功，则外界对气体做功为负，即 $W<0$。内能增加、减少还是不变，看 `Q` 与 `W` 的代数和。

**概念辨析。**
- $\Delta U$ 是状态量的变化，只与初末状态有关。
- `Q` 和 `W` 是过程量，依赖过程路径。
- 吸热不一定内能增加，因为系统可能同时对外做功。
- 外界压缩气体做正功，可能使气体内能增加。
- 绝热过程 $Q=0$，内能变化由做功决定。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 符号约定 | 含义 |
|---|---|---|---|
| 红色热箭头 | `Q` | 吸热为正，放热为负 | 热传递带来的能量 |
| 蓝色做功箭头 | `W` | 外界对系统做功为正 | 做功带来的能量 |
| 黄色能量槽 | `U` | 内能状态量 | 系统内部能量 |
| 读数 $\Delta U$ | 内能变化 | $\Delta U=Q+W$ | 两种能量交换的代数和 |
| 状态提示 | 增/减/不变 | 看 `Q+W` | 判断内能变化方向 |
| p-V 图像面积 | 气体对外做功 | 本页 $W=-Wout$ | 从图像换算做功符号 |

**适用边界。**
- 适用于封闭热力学系统的能量变化分析。
- 使用公式前必须统一符号约定。
- 本页 `W` 指外界对系统做功；若题目用“气体对外做功”记为 `Wout`，则 $\Delta U=Q-Wout$。
- `Q` 和 `W` 都是过程量，不能说系统“含有热量”。
- 对循环过程，系统回到初态，$\Delta U=0$。

#### 应用与迁移
- 判断题：吸热、放热、压缩、膨胀时内能如何变化。
- 计算题：已知 `Q、W` 求 $\Delta U$。
- p-V 图像题：先由面积求气体对外做功，再换成本页符号。
- 循环题：用 $\Delta U=0$ 判断总吸热和总做功关系。

**解题路径。**
1. 先写清符号约定：`Q` 吸热为正，`W` 外界对系统做功为正。
2. 判断热量正负：吸热正，放热负。
3. 判断做功正负：压缩正，膨胀负。
4. 代入 $\Delta U=Q+W$。
5. 根据 $\Delta U$ 正负判断温度/内能趋势；理想气体还可联系温度。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “吸热内能一定增加” | 可能同时对外做功 | 看 `Q+W` |
| “做功 W 总是气体对外做功” | 符号约定不同 | 先读题约定 |
| “Q 是状态量” | 热量只在传递过程中出现 | Q 是过程量 |
| “循环过程 ΔU 不一定为 0” | 回到初态内能相同 | 循环 $\Delta U=0$ |
| “绝热过程内能不变” | 绝热只表示 Q=0 | 还要看 W |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-13）

<h4 id="second-law">X3-14 热力学第二定律 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-14
- 模块：选择性必修3
- 主题：热力学第二定律
- 高考功能：自发过程方向 / 热机效率判断 / 第二类永动机辨析
- 前置知识：热力学第一定律、热机与效率、温度与热平衡
- 后续应用：热机效率、能量耗散、不可逆过程

#### 情境与现象
热茶放在桌上会自发变凉，但不会自发从空气中吸热变得更烫；冰箱能把热量从低温处送到高温处，但必须消耗电功；热机能把一部分热量转化为机械功，但总要向低温热库放出一部分热量。热力学第二定律说明了热过程的方向性。

**静态表征。**
<svg viewBox="0 0 660 240" width="100%" style="max-width:840px">
  <defs>
    <marker id="slRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
    <marker id="slBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="64" y="34" width="150" height="54" rx="8" fill="#ffe6e6" stroke="#ff6b6b"/>
  <text x="139" y="61" font-size="15" fill="#b30000" text-anchor="middle" font-weight="700">高温热库 TH</text>
  <rect x="92" y="116" width="94" height="56" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="139" y="144" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">热机</text>
  <rect x="64" y="198" width="150" height="34" rx="8" fill="#e6f4ff" stroke="#2c7be5"/>
  <text x="139" y="215" font-size="14" fill="#2c7be5" text-anchor="middle" font-weight="700">低温热库 TC</text>
  <path d="M139 88 L139 112" stroke="#e03131" stroke-width="4" marker-end="url(#slRed)"/>
  <text x="160" y="100" font-size="13" fill="#e03131">QH</text>
  <path d="M139 172 L139 196" stroke="#2c7be5" stroke-width="4" marker-end="url(#slBlue)"/>
  <text x="160" y="185" font-size="13" fill="#2c7be5">QC</text>
  <path d="M186 144 L254 144" stroke="#102a43" stroke-width="4" marker-end="url(#slBlue)"/>
  <text x="224" y="126" font-size="13" fill="#102a43">W</text>
  <rect x="352" y="54" width="238" height="134" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="471" y="86" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">第二定律要点</text>
  <text x="471" y="120" font-size="14" fill="#486581" text-anchor="middle">热量不会自发从低温传到高温</text>
  <text x="471" y="148" font-size="14" fill="#486581" text-anchor="middle">热机效率不能达到 100%</text>
  <text x="471" y="210" font-size="13" fill="#486581" text-anchor="middle">能量守恒不保证过程一定能自发发生</text>
</svg>

**动态表征。**
动画展示热量包从高温热库流入热机，再分成有用功 `W` 和排给低温热库的 `QC`。播放时先看“热流方向”和“排热不可少”；拖动高低温热库和效率阀时，画面会同步显示卡诺效率上限，并判断设定效率是否违背第二定律。

**交互探究。**
<iframe src="anim/xb3/second-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——热机效率公式中的温度必须使用 K；卡诺效率是理想可逆热机上限，真实热机效率更低；第二定律讨论的是宏观热过程方向，不是单个分子偶然运动。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可直接拖动：红色热库温度 `TH`、蓝色热库温度 `TC`、黑色效率阀 $\eta$；也可用右侧滑块精调。实时变化：热流箭头粗细、`W` 与 `QC` 读数、$\eta max=1-TC/TH$ 图像游标、数据记录和可行性判断。

**证据任务。**
- 先点“播放”：看 `QH` 进入热机后不是全部变成功，而是分成 `W` 和 `QC`。
- 拖蓝色低温热库并固定 `TH`：看 `TC` 升高时，最大效率 $\eta max$ 是否降低。
- 拖红色高温热库并固定 `TC`：看 `TH` 升高时，最大效率 $\eta max$ 是否升高。
- 拖黑色效率阀到 100% 或超过绿色上限：看为什么能量守恒还不够，还必须满足方向性限制。

#### 规律、证据与核心概念
热力学第一定律说明能量守恒，第二定律说明热过程方向。常见表述：

```text
热量不能自发地从低温物体传到高温物体。
不可能从单一热库吸收热量，使之完全变成功而不产生其他影响。
```

热机效率：

```text
η = W/QH = 1 - QC/QH
```

理想可逆热机的最大效率由高低温热库温度决定：

```text
ηmax = 1 - TC/TH
```

其中温度必须用 K。

**概念辨析。**
- 第二定律不是否定能量守恒，而是在能量守恒之外增加“方向性”限制。
- 自发热传递方向是从高温到低温。
- 冰箱能把热量从低温处送到高温处，但必须消耗外界功。
- 热机不可能把从单一热库吸收的热量全部变成功。
- 第二类永动机不违反第一定律，但违反第二定律。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 高温热库 | `TH` | K | 热机吸热来源 |
| 低温热库 | `TC` | K | 必须排热去处 |
| 红色热箭头 | `QH` | 输入热量 | 热机吸热 |
| 黑色功箭头 | `W` | $W=\eta QH$ | 对外输出功 |
| 蓝色排热箭头 | `QC` | $QC=QH-W$ | 不能为 0 |
| 效率上限 | $\eta max$ | `1-TC/TH` | 可逆热机极限 |

**适用边界。**
- 热机效率公式中的温度必须使用 K。
- 卡诺效率是理想可逆热机上限，真实热机效率更低。
- 第二定律讨论的是宏观热过程方向，不是单个分子偶然运动。
- 热量可从低温传到高温，但必须有外界做功或产生其他影响。
- 判断“是否可能”不能只看能量是否守恒，还要看是否违反第二定律。

#### 应用与迁移
- 判断题：热量自发方向、冰箱与热机、第二类永动机。
- 计算题：用 $\eta =W/QH$ 或 $\eta max=1-TC/TH$ 判断效率。
- 概念题：区分第一定律和第二定律的作用。
- 图像/流程题：识别热机的吸热、做功和排热。

**解题路径。**
1. 先判断是否涉及热过程方向或热机效率。
2. 若是热机，标出 `QH、W、QC`。
3. 用第一定律写 $QH=W+QC$。
4. 用第二定律判断 `QC` 不能为 0，效率不能超过上限。
5. 温度一律换成 K 后再算效率上限。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “能量守恒就一定能实现” | 还要满足方向性 | 同时检查第二定律 |
| “热机效率可达 100%” | 必须向低温热库排热 | `QC` 不能为 0 |
| “冰箱违反第二定律” | 冰箱消耗外界功 | 非自发转移可发生 |
| “卡诺效率可用摄氏温度” | 温度比必须用 K | 先换 K |
| “第二类永动机违反第一定律” | 它主要违反第二定律 | 说明方向性不可能 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-14）

<h4 id="energy-conservation-thermal">X3-15 能量守恒 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-15
- 模块：选择性必修3
- 主题：能量守恒与能量转化
- 高考功能：能量账本 / 热现象能量转化 / 永动机辨析
- 前置知识：机械能守恒、内能、热力学第一定律、第二定律
- 后续应用：热机效率、核能、综合能量题

#### 情境与现象
电热水壶把电能转化为水的内能；汽车发动机把燃料化学能的一部分转化为机械能，另一部分以废热形式排出；摩擦使机械能转化为内能。能量不会凭空产生，也不会凭空消失，只会从一种形式转化为另一种形式，或从一个物体转移到另一个物体。

**静态表征。**
<svg viewBox="0 0 660 240" width="100%" style="max-width:840px">
  <defs>
    <marker id="ecArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="38" y="82" width="150" height="70" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="113" y="116" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">输入能量</text>
  <path d="M196 116 L270 116" stroke="#2c7be5" stroke-width="4" marker-end="url(#ecArrow)"/>
  <rect x="278" y="58" width="130" height="116" rx="8" fill="#fff" stroke="#d9e2ec"/>
  <text x="343" y="94" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">能量转化</text>
  <text x="343" y="126" font-size="13" fill="#486581" text-anchor="middle">机械能</text>
  <text x="343" y="150" font-size="13" fill="#486581" text-anchor="middle">内能/电能/化学能</text>
  <path d="M416 96 L494 70" stroke="#2c7be5" stroke-width="4" marker-end="url(#ecArrow)"/>
  <path d="M416 136 L494 164" stroke="#2c7be5" stroke-width="4" marker-end="url(#ecArrow)"/>
  <rect x="502" y="42" width="126" height="52" rx="8" fill="#e6fffa" stroke="#38b2ac"/>
  <text x="565" y="68" font-size="14" fill="#087f5b" text-anchor="middle" font-weight="700">有用输出</text>
  <rect x="502" y="146" width="126" height="52" rx="8" fill="#ffe6e6" stroke="#ff6b6b"/>
  <text x="565" y="172" font-size="14" fill="#b30000" text-anchor="middle" font-weight="700">内能/废热</text>
  <text x="330" y="218" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">输入能量 = 有用输出 + 内能增加 + 散失能量</text>
</svg>

**动态表征。**
动画把能量账本做成一座能量转化实验台。拖动输入能量包和分流阀时，能量流、去向柱图、账本公式和数据记录同步变化；若试图让输出和储存超过输入，动画会提示账本不可能。

**交互探究。**
<iframe src="anim/xb3/energy-conservation-thermal.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：输入能量、有效输出比例、内能增加比例；也可以直接拖动画面中的输入能量包和分流阀。实时变化：有用输出、内能增加、散失能量、能量流动画、守恒检查和数据记录。

**证据任务。**
- 增大有用输出比例：看散失能量是否减少，但总和是否不变。
- 同时增大有用输出和内能增加：看是否会超过输入能量。
- 把输入能量调大：看各部分能量是否按比例放大。
- 点击“播放”：看能量包从输入端流向三个去向，理解散失不是消失。
- 注意“散失”不是消失，而是转化为较难利用的内能。

#### 规律、证据与核心概念
能量守恒定律：

```text
能量既不会凭空产生，也不会凭空消失；
只能从一种形式转化为另一种形式，
或从一个物体转移到另一个物体。
```

在热学问题中常写成能量账本：




> **公式首次使用卡**：适用边界——能量守恒针对边界明确的封闭系统；机械能不守恒不等于总能量不守恒；热、功和内能的正负按统一系统约定处理。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
输入能量 = 有用输出 + 内能增加 + 散失能量
```

热力学第一定律 $\Delta U=Q+W$ 是能量守恒在热现象中的一种表达。

**概念辨析。**
- 能量守恒说明“总量不变”，第二定律说明“转化有方向和品质限制”。
- 散失能量没有消失，而是转化为环境内能，难以完全回收。
- 永动机若声称无输入而持续输出能量，违反能量守恒。
- 热机效率低不表示能量丢失，而是部分能量以废热形式排出。
- 做题时要明确系统边界，哪些能量算输入，哪些算输出。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 关系 | 含义 |
|---|---|---|---|
| 输入柱 | `Ein` | 总输入 | 外界给系统的能量 |
| 绿色柱 | `Euse` | 有用输出 | 可利用部分 |
| 黄色柱 | $\Delta U$ | 内能增加 | 系统内部储存 |
| 红色柱 | `Eloss` | 散失能量 | 转到环境内能等 |
| 守恒提示 | 账本检查 | $Ein=Euse+\Delta U+Eloss$ | 总量守恒 |
| 分流阀与能量流 | 能量去向 | 同一账本分流 | 画面中能量包只是换去向 |

**适用边界。**
- 先明确系统边界，否则输入输出会数错。
- 能量守恒适用于所有物理过程，但不同能量形式要正确识别。
- 若题目涉及热机或制冷机，还要同时满足热力学第二定律。
- “损失”“耗散”不表示能量消失，只表示可利用性降低。
- 非保守力做功时，机械能不守恒，但总能量仍守恒。

#### 应用与迁移
- 能量转化题：判断能量从哪种形式转到哪种形式。
- 账本计算题：由输入、输出、散失求未知能量。
- 永动机辨析：判断是否违反第一定律或第二定律。
- 综合题：把机械能变化、内能变化和热量交换放在同一账本中。

**解题路径。**
1. 先画系统边界。
2. 列出输入能量和输出能量。
3. 判断是否有内能增加或环境散失。
4. 写能量账本：输入 = 输出 + 储存 + 散失。
5. 再检查是否违反第二定律的方向性和效率限制。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “摩擦使能量消失” | 机械能转化为内能 | 总能量守恒 |
| “效率低说明能量不守恒” | 废热仍是能量 | 区分守恒和可利用性 |
| “机械能不守恒就是能量不守恒” | 只是机械能转成其他能 | 看总能量 |
| “永动机只要设计巧妙就可能” | 无输入持续输出违反守恒 | 建能量账本 |
| “系统边界无所谓” | 边界决定输入输出 | 先选系统 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-15）

<h4 id="heat-engine-efficiency">X3-16 热机与效率 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-16
- 模块：选择性必修3
- 主题：热机与效率
- 高考功能：热机能流计算 / 效率判断 / 排热与有用功区分
- 前置知识：热力学第一定律、热力学第二定律、能量守恒
- 后续应用：循环过程、能源利用、热力学综合题

#### 情境与现象
汽车发动机燃烧燃料获得热量，但只有一部分变成推动汽车前进的机械功，另一部分随废气、冷却水和机体散热排到环境中。热机效率描述的就是“吸收的热量中有多少变成有用功”。

**静态表征。**
<svg viewBox="0 0 650 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="heArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"/></marker>
  </defs>
  <rect x="52" y="58" width="142" height="56" rx="8" fill="#ffe6e6" stroke="#ff6b6b"/>
  <text x="123" y="86" font-size="14" fill="#b30000" text-anchor="middle" font-weight="700">吸热 QH</text>
  <path d="M202 86 L286 116" stroke="#e03131" stroke-width="4" marker-end="url(#heArrow)"/>
  <rect x="294" y="78" width="118" height="78" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="353" y="117" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">热机</text>
  <path d="M420 104 L540 72" stroke="#102a43" stroke-width="4" marker-end="url(#heArrow)"/>
  <text x="485" y="66" font-size="14" fill="#102a43" text-anchor="middle">有用功 W</text>
  <path d="M420 138 L540 178" stroke="#2c7be5" stroke-width="4" marker-end="url(#heArrow)"/>
  <text x="488" y="190" font-size="14" fill="#2c7be5" text-anchor="middle">排热 QC</text>
  <text x="325" y="210" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">η = W/QH = 1 - QC/QH</text>
</svg>

**动态表征。**
动画显示热机从高温热库吸热 `QH`，输出功 `W`，并向低温热库排热 `QC`。播放时可以看到热量包分流；拖动效率阀时，`W` 增大、`QC` 减小，同时与卡诺效率上限比较。

**交互探究。**
<iframe src="anim/xb3/second-law.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——热机效率必须区分从高温热源吸收的热量和向低温热源放出的热量；循环结束系统内能回到初值；涉及卡诺效率时温度必须使用开尔文。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可直接拖动：红色高温热库 `TH`、蓝色低温热库 `TC`、黑色效率阀 $\eta$。实时变化：输出功 $W=\eta QH$、排热 $QC=QH-W$、理论最大效率、能流图像和数据记录。

**证据任务。**
- 先点“播放”：看 $QH=1000\ \mathrm{J}$ 的热量包怎样分成黑色功流和蓝色废热流。
- 拖效率阀提高效率：看 `W` 增大、`QC` 减小，但不能越过 $\eta max$。
- 把效率拖到 100%：看为什么 $QC=0$ 会被判为不可能。
- 改变 `TH` 和 `TC`：看热机效率上限如何变化；确认效率低不是能量消失，而是更多能量排给低温热库。

#### 规律、证据与核心概念
热机工作循环后回到初态，内能变化为 0。由能量守恒：

```text
QH = W + QC
```

热机效率定义为有用功占吸收热量的比例：

```text
η = W/QH = 1 - QC/QH
```

由于第二定律限制，热机必须向低温热库排热，`QC` 不能为 0，所以真实热机效率小于 100%。

**概念辨析。**
- 热机不是把热量全部变成功的机器。
- `QH` 是从高温热源吸收的热量，`QC` 是排给低温热源的热量。
- 效率低不表示能量消失，而是废热比例大。
- 卡诺效率给出理想可逆热机上限，真实热机还会更低。
- 提高高温热库温度、降低低温热库温度，可以提高理论效率上限。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 红色吸热箭头 | `QH` | 输入热量 | 热机从高温热源吸热 |
| 黑色功箭头 | `W` | $W=\eta QH$ | 有用输出 |
| 蓝色排热箭头 | `QC` | $QC=QH-W$ | 排给低温热库 |
| 效率读数 | $\eta$ | $\eta =W/QH$ | 热量转功比例 |
| 上限读数 | $\eta max$ | `1-TC/TH` | 可逆热机极限 |

**适用边界。**
- 效率计算要区分吸热 `QH` 和放热 `QC`。
- 循环热机回到初态，整体 $\Delta U=0$。
- 温度进入卡诺效率时必须使用 K。
- 真实热机效率不可能超过卡诺效率。
- 若题目给的是燃料放热，还要看有多少真正被热机吸收。

#### 应用与迁移
- 已知 `QH、W` 求效率和排热。
- 已知效率和吸热求输出功。
- 已知热库温度判断效率是否可能。
- 概念题：判断第二类永动机和效率 100% 的说法。

**解题路径。**
1. 标出热机能流：`QH` 输入，`W` 输出，`QC` 排出。
2. 用 $QH=W+QC$ 建账本。
3. 用 $\eta =W/QH$ 求效率。
4. 若涉及理论上限，用 $\eta max=1-TC/TH$。
5. 比较实际效率与上限，判断是否可能。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “效率=W/QC” | 效率定义用吸热 QH 作分母 | $\eta =W/QH$ |
| “排热是能量损失消失了” | 排热仍是能量 | 只是变成废热 |
| “热机可 100% 转化” | 违反第二定律 | 必须有 QC |
| “卡诺效率用摄氏温度” | 温度比必须用 K | 先换 K |
| “循环后内能一直增加” | 循环回到初态 | 一个循环 $\Delta U=0$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-16）

## 4. 固体与液体

<h4 id="crystal-amorphous">X3-17 晶体与非晶体 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 编号：X3-17
- 模块：选择性必修3
- 主题：固体结构与熔化特点
- 高考功能：晶体/非晶体判断 / 熔化曲线识别 / 各向异性理解
- 前置知识：分子力、内能、温度与物态变化
- 后续应用：物态变化、材料性质、液体表面张力

#### 情境与现象
冰在熔化时温度保持在 `0℃` 附近，直到全部变成水；玻璃受热时会逐渐软化，没有一个清晰固定的熔点。食盐晶体外形规则，而松香、玻璃等非晶体没有规则几何外形。这些差异来自微观粒子排列方式不同。

**静态表征。**
<svg viewBox="0 0 650 240" width="100%" style="max-width:840px">
  <rect x="46" y="44" width="230" height="140" rx="8" fill="#fff" stroke="#d9e2ec"/>
  <text x="161" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">晶体：有规则排列</text>
  <g fill="#2c7be5">
    <circle cx="92" cy="78" r="7"/><circle cx="132" cy="78" r="7"/><circle cx="172" cy="78" r="7"/><circle cx="212" cy="78" r="7"/>
    <circle cx="92" cy="118" r="7"/><circle cx="132" cy="118" r="7"/><circle cx="172" cy="118" r="7"/><circle cx="212" cy="118" r="7"/>
    <circle cx="92" cy="158" r="7"/><circle cx="132" cy="158" r="7"/><circle cx="172" cy="158" r="7"/><circle cx="212" cy="158" r="7"/>
  </g>
  <text x="161" y="212" font-size="13" fill="#486581" text-anchor="middle">固定熔点，可能各向异性</text>
  <rect x="374" y="44" width="230" height="140" rx="8" fill="#fff" stroke="#d9e2ec"/>
  <text x="489" y="28" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">非晶体：无长程规则</text>
  <g fill="#e8590c">
    <circle cx="418" cy="82" r="7"/><circle cx="464" cy="70" r="7"/><circle cx="520" cy="90" r="7"/><circle cx="568" cy="76" r="7"/>
    <circle cx="438" cy="130" r="7"/><circle cx="492" cy="118" r="7"/><circle cx="552" cy="138" r="7"/>
    <circle cx="414" cy="164" r="7"/><circle cx="480" cy="160" r="7"/><circle cx="530" cy="170" r="7"/><circle cx="578" cy="154" r="7"/>
  </g>
  <text x="489" y="212" font-size="13" fill="#486581" text-anchor="middle">无固定熔点，逐渐软化</text>
</svg>

**动态表征。**
动画左侧显示晶体规则点阵和非晶体无规则排列，右侧显示加热曲线。拖动曲线上的红点或点“播放”加热，能看到晶体曲线出现熔化平台，而非晶体曲线连续上升并逐渐软化。

**交互探究。**
<iframe src="anim/xb3/crystal-amorphous.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可操作内容：直接拖动加热曲线上的红点改变吸热进度，也可切换材料类型、播放连续加热并记录温度点。画面同时显示微观结构俯视、加热曲线图像、温度计和数据记录，把“固定熔点平台”与“逐渐软化”对应到曲线读数。

**证据任务。**
- 选“晶体”：拖动曲线红点，看温度是否出现平台。
- 选“非晶体”：拖动曲线红点，看温度是否连续变化、逐渐软化。
- 点“播放”：看连续加热过程中，晶体平台段与非晶体软化段的差异。
- 对比微观图：看规则排列和无规则排列如何对应宏观性质。
- 注意：单晶体可能各向异性，多晶体整体常表现为各向同性。

#### 规律、证据与核心概念
晶体内部粒子按一定规则排列，具有空间周期性。熔化时，吸收的热量用于破坏规则结构，温度在熔点附近保持不变。非晶体内部粒子没有长程规则排列，受热时结构逐渐松动，所以没有固定熔点。

```text
晶体：规则排列，有固定熔点
非晶体：无长程规则，无固定熔点
```

**概念辨析。**
- 单晶体：粒子排列规则，某些物理性质随方向不同，表现为各向异性。
- 多晶体：由许多小晶粒组成，整体常表现为各向同性。
- 非晶体：没有长程有序结构，没有固定熔点。
- 熔点平台：晶体熔化时吸热但温度不变。
- 软化区：非晶体随温度升高逐渐变软。

#### 公式、变量、单位与条件
| 画面元素 | 物理量/性质 | 对应关系 | 含义 |
|---|---|---|---|
| 规则点阵 | 晶体结构 | 长程有序 | 解释固定熔点 |
| 无规则点 | 非晶体结构 | 无长程有序 | 解释逐渐软化 |
| 加热曲线平台 | 熔点 | `T` 不变 | 晶体熔化吸热 |
| 连续曲线 | 软化过程 | `T` 持续变化 | 非晶体无固定熔点 |
| 方向箭头 | 各向异性 | 性质随方向变 | 单晶体常见 |

**适用边界。**
- “有无固定熔点”是判断晶体和非晶体的重要依据。
- 晶体不一定都有规则外形，外形还受生长条件影响。
- 单晶体常各向异性，多晶体整体可近似各向同性。
- 非晶体不是液体，它仍有固体形状，但受热逐渐软化。
- 判断熔化曲线时要看是否存在温度平台。

#### 应用与迁移
- 图像题：由加热曲线判断晶体或非晶体。
- 概念题：固定熔点、各向异性、单晶体/多晶体。
- 材料题：识别食盐、石英、玻璃、松香等。
- 解释题：从微观排列解释宏观性质差异。

**解题路径。**
1. 看是否有固定熔点或加热平台。
2. 看是否有规则几何外形或微观有序结构。
3. 判断各向异性时先分单晶体和多晶体。
4. 不把“透明、硬、脆”等单一性质当作判断标准。
5. 用结构解释性质：规则排列对应晶体特征。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “有规则外形才是晶体” | 外形受生长条件影响 | 固定熔点和微观有序更关键 |
| “非晶体没有固定形状” | 非晶体仍是固体 | 只是无固定熔点 |
| “所有晶体都各向异性” | 多晶体整体常各向同性 | 区分单晶体/多晶体 |
| “熔化吸热温度一定升高” | 晶体熔化温度不变 | 平台表示吸热破坏结构 |
| “玻璃有固定熔点” | 玻璃逐渐软化 | 属于非晶体 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-17）

<h4 id="surface-tension">X3-18 液体表面张力 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-18
- 模块：选择性必修3
- 主题：液体表面张力
- 高考功能：表面收缩趋势 / 表面张力方向 / 简单计算
- 前置知识：分子力、液体分子运动、能量观点
- 后续应用：毛细现象、液滴形状、生活现象解释

#### 情境与现象
水黾能站在水面上，细针小心放置也可能浮在水面；荷叶上的水滴趋向球形；肥皂膜会收缩。液体表面像一张被拉紧的弹性薄膜，这是因为表面层分子受力不对称，液体表面有自动收缩的趋势。

**静态表征。**
<svg viewBox="0 0 650 230" width="100%" style="max-width:840px">
  <defs>
    <marker id="stArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <rect x="56" y="88" width="250" height="84" fill="#d8f3ff" stroke="#2c7be5"/>
  <line x1="56" y1="88" x2="306" y2="88" stroke="#2c7be5" stroke-width="4"/>
  <circle cx="96" cy="86" r="6" fill="#2c7be5"/><circle cx="146" cy="86" r="6" fill="#2c7be5"/><circle cx="196" cy="86" r="6" fill="#2c7be5"/>
  <circle cx="96" cy="132" r="6" fill="#2c7be5"/><circle cx="146" cy="132" r="6" fill="#2c7be5"/><circle cx="196" cy="132" r="6" fill="#2c7be5"/>
  <path d="M146 86 L146 116" stroke="#e03131" stroke-width="3" marker-end="url(#stArrow)"/>
  <text x="181" y="54" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">表面分子受向内合力</text>
  <path d="M90 58 L242 58" stroke="#e03131" stroke-width="3" marker-end="url(#stArrow)"/>
  <path d="M242 68 L90 68" stroke="#e03131" stroke-width="3" marker-end="url(#stArrow)"/>
  <text x="181" y="202" font-size="13" fill="#486581" text-anchor="middle">表面张力沿液面切线方向，使表面积收缩</text>
  <rect x="384" y="62" width="210" height="118" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="489" y="96" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">表面张力</text>
  <text x="489" y="130" font-size="18" fill="#102a43" text-anchor="middle">F = σL</text>
  <text x="489" y="160" font-size="13" fill="#486581" text-anchor="middle">σ：表面张力系数，L：边界长度</text>
</svg>

**动态表征。**



> **公式首次使用卡**：适用边界——F=\sigma L 是简单边界模型，复杂曲面和接触角问题需更细分析；表面张力方向沿液面切线，不应画成任意竖直力；细针浮起不是因为密度小于水，而是液面形变和表面张力提供支持。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

动画显示液面表面分子受力不平衡、细针压弯液面、切向张力和张力计读数。拖动画面中的细针或边界长度尺，液面形变、张力箭头、$F=\sigma L$ 读数和临界状态会同步变化。

**交互探究。**
<iframe src="anim/xb3/surface-tension.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：表面张力系数 $\sigma$、边界长度 `L`、压在液面的物体重力 `G`；也可以直接拖动画面中的细针和边界尺。实时变化：表面张力 `F`、液面形变、张力计读数、能否托住物体和数据记录。

**证据任务。**
- 增大 $\sigma$：看表面张力箭头是否变长。
- 增大 `L`：看总张力是否增大。
- 增大 `G`：看物体什么时候压破液面。
- 拖动细针：看液面下凹时，切向张力如何产生向上的合效果。
- 观察张力方向：它沿液面切线方向，不是竖直向上凭空作用。

#### 规律、证据与核心概念
液体内部的分子受到周围分子的引力大致平衡；表面层分子上方分子少，受力不对称，合力指向液体内部。因此液体表面有收缩趋势，表现为沿表面切线方向的张力。

简单情况下，边界上表面张力大小可写为：

```text
F = σL
```

其中 $\sigma$ 是表面张力系数，`L` 是受张力作用的边界长度。

**概念辨析。**
- 表面张力不是液体表面给物体的普通浮力。
- 表面张力沿液面切线方向，效果是使液面收缩。
- 液滴趋向球形，是因为同体积下球形表面积最小。
- 温度、杂质、表面活性剂会改变表面张力系数。
- 细针能浮在水面上，是表面张力和液面形变共同托住它。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 液面切向箭头 | 表面张力方向 | 沿液面切线 | 使表面收缩 |
| σ 滑块 | 表面张力系数 | $\sigma$ | 液体种类和温度影响 |
| L 滑块 | 边界长度 | `L` | 受力边界越长总张力越大 |
| 读数 F | 总张力 | $F=\sigma L$ | 简单模型估算 |
| 物体重力 | `G` | 与 F 比较 | 判断能否被托住 |
| 液面形变 | 合力方向 | 切向力的竖直分量 | 解释细针浮水 |

**适用边界。**
- $F=\sigma L$ 是简单边界模型，复杂曲面和接触角问题需更细分析。
- 表面张力方向沿液面切线，不应画成任意竖直力。
- 细针浮起不是因为密度小于水，而是液面形变和表面张力提供支持。
- 表面张力大小与液体种类、温度和杂质有关。
- 肥皂膜有两个表面时，有效边界长度可能要乘以 2。

#### 应用与迁移
- 解释题：水黾、细针浮水、水滴成球、肥皂膜收缩。
- 方向题：判断表面张力方向。
- 计算题：用 $F=\sigma L$ 估算张力大小。
- 概念题：区分表面张力、浮力、支持力。

**解题路径。**
1. 找液体表面或膜的边界。
2. 沿液面切线画表面张力方向。
3. 确定有效边界长度 `L`，注意单面/双面。
4. 用 $F=\sigma L$ 求张力大小。
5. 与重力或外力比较，判断是否能维持形状。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “表面张力竖直向上” | 张力沿液面切线 | 竖直效果来自液面弯曲后的合力 |
| “针浮起是浮力大” | 针密度可大于水 | 表面张力参与托住 |
| “水滴成球是重力造成” | 主要是表面收缩趋势 | 球形表面积最小 |
| “σ 永远不变” | 受温度和杂质影响 | 看条件 |
| “肥皂膜只算一面” | 膜有两个表面 | 有时有效长度乘 2 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-18）

## 5. 近代物理初步

<h4 id="photoelectric-x3">X3-19 光电效应 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-19
- 模块：选择性必修3
- 主题：光电效应与光量子
- 高考功能：截止频率 / 光电效应方程 / 光强与频率辨析
- 前置知识：能量守恒、功、动能、波动光学基础
- 后续应用：波粒二象性、原子能级、光谱

#### 情境与现象
用紫外光照射某些金属，电子会几乎立刻逸出；但如果换成频率较低的红光，即使光再强，也可能一个电子都打不出来。这个现象说明光的能量不是只由总强度决定，而是一份一份的光子携带能量，每个光子的能量由频率决定。

**静态表征。**
<svg viewBox="0 0 660 240" width="100%" style="max-width:840px">
  <defs>
    <marker id="peArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker>
  </defs>
  <path d="M64 80 L210 116" stroke="#f0a500" stroke-width="4" marker-end="url(#peArrow)"/>
  <text x="124" y="62" font-size="14" fill="#f0a500" text-anchor="middle">入射光 hν</text>
  <rect x="232" y="70" width="28" height="120" fill="#829ab1"/>
  <text x="246" y="210" font-size="13" fill="#486581" text-anchor="middle">金属</text>
  <path d="M260 118 L418 82" stroke="#e03131" stroke-width="4" marker-end="url(#peArrow)"/>
  <circle cx="422" cy="80" r="6" fill="#e03131"/>
  <text x="360" y="62" font-size="14" fill="#e03131" text-anchor="middle">光电子 Eₖ</text>
  <rect x="448" y="58" width="170" height="132" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="533" y="92" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">光电效应方程</text>
  <text x="533" y="128" font-size="18" fill="#102a43" text-anchor="middle">Eₖ = hν - W0</text>
  <text x="533" y="160" font-size="13" fill="#486581" text-anchor="middle">ν0 = W0/h</text>
  <text x="330" y="228" font-size="13" fill="#486581" text-anchor="middle">频率决定能否逸出和最大初动能；光强主要决定单位时间逸出电子数</text>
</svg>

**动态表征。**
动画把入射光、金属板、逸出电子和能量条放在一起。拖动光频率、逸出功和光强，可以看到“频率不够无论多强都不逸出”“频率越高最大初动能越大”“光强只改变电子数量”的规律。

**交互探究。**
<iframe src="anim/xb1/photoelectric.html" width="100%" height="640" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——方程中的 \nu 是光频率，不是光强；Eₖ 是最大初动能，实际逸出电子动能可能更小；低于截止频率时，增加光强不能使电子逸出。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可拖动参数：光频率 $\nu$、逸出功 $W_{0}$、光强。实时变化：截止频率 $\nu_{0}$、最大初动能 $E_{k,\max}$、逸出电子数量。

**证据任务。**
- 把 $\nu$ 调到低于 $\nu_{0}$：看是否没有电子逸出。
- 在 $\nu <\nu_{0}$ 时提高光强：看是否仍不能逸出电子。
- 把 $\nu$ 调高：看 $E_{k}=h\nu -W_{0}$ 是否增大。
- 提高光强：看电子数量增加，但最大初动能不变。

#### 规律、证据与核心概念
爱因斯坦光电效应方程来自能量守恒。一个光子的能量为：

```text
E = hν
```

电子逸出金属至少需要克服逸出功 $W_{0}$，剩余能量转化为电子最大初动能：

```text
Eₖ = hν - W0
```

若 $h\nu <W_{0}$，电子无法逸出。截止频率：

```text
ν0 = W0/h
```

**概念辨析。**
- 光电效应支持光具有粒子性，光能量以光子为单位传递。
- 是否发生光电效应取决于频率是否超过截止频率。
- 最大初动能取决于频率和金属逸出功，与光强无关。
- 光强增大表示单位时间光子数增多，会使光电流增大。
- 不同金属逸出功不同，对应不同截止频率。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 入射光颜色/频率 | $\nu$ | $E=h\nu$ | 决定单个光子能量 |
| 金属材料滑块 | $W_{0}$ | 逸出功 | 电子离开金属的最低能量 |
| 截止频率读数 | $\nu_{0}$ | $\nu_{0}=W_{0}/h$ | 低于它不逸出 |
| 电子速度/能量条 | `Eₖ` | $E_{k}=h\nu -W_{0}$ | 最大初动能 |
| 光强滑块 | 光子数密度 | 改变电子数量 | 不改变 `Ekmax` |

**适用边界。**
- 方程中的 $\nu$ 是光频率，不是光强。
- `Eₖ` 是最大初动能，实际逸出电子动能可能更小。
- 低于截止频率时，增加光强不能使电子逸出。
- 频率高于截止频率后，光强影响饱和光电流大小。
- 逸出功由金属材料决定。

#### 应用与迁移
- 判断题：光强、频率、逸出功对光电效应的影响。
- 计算题：由 $E_{k}=h\nu -W_{0}$ 求频率、逸出功或最大初动能。
- 图像题：读 $E_{k}-\nu$ 直线的斜率、截距和截止频率。
- 实验题：由遏止电压求最大初动能。

**解题路径。**
1. 先算或判断截止频率 $\nu_{0}=W_{0}/h$。
2. 比较入射光频率 $\nu$ 与 $\nu_{0}$。
3. 若 $\nu <\nu_{0}$，不发生光电效应。
4. 若 $\nu \ge \nu_{0}$，用 $E_{k,\max}=h\nu-W_{0}$。
5. 光强只放在“电子数/光电流”上，不放进 `Eₖ` 公式。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “光强足够大就能打出电子” | 单个光子能量不足仍不行 | 先看频率 |
| “光强越大 Eₖ 越大” | Eₖ 由频率决定 | 光强影响电子数 |
| “频率低时多照一会儿会积累能量” | 光子能量逐份吸收 | 不满足截止频率不逸出 |
| “所有金属截止频率相同” | $W_{0}$ 不同 | 材料决定 $\nu_{0}$ |
| “Eₖ 可为负” | 负值表示不逸出 | 取不发生光电效应 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-19）

<h4 id="wave-particle-duality">X3-20 波粒二象性 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-20
- 模块：选择性必修3
- 主题：光和实物粒子的波粒二象性
- 高考功能：光子能量 / 德布罗意波长 / 实验现象辨析
- 前置知识：光电效应、干涉衍射、动量
- 后续应用：原子结构、电子显微镜、量子观念

#### 情境与现象
光能发生干涉和衍射，表现出波动性；光电效应中，光又像一份一份的粒子，把能量交给电子。电子本来被看作粒子，但电子束也能发生衍射，说明实物粒子也具有波动性。微观世界中，同一个对象可能在不同实验中表现出波动性或粒子性。

**静态表征。**
<svg viewBox="0 0 660 240" width="100%" style="max-width:840px">
  <path d="M56 88 C86 40 116 136 146 88 S206 40 236 88 S296 136 326 88" fill="none" stroke="#2c7be5" stroke-width="4"/>
  <text x="190" y="52" font-size="15" fill="#2c7be5" text-anchor="middle" font-weight="700">波动性：干涉、衍射</text>
  <circle cx="92" cy="158" r="8" fill="#f0a500"/><circle cx="142" cy="158" r="8" fill="#f0a500"/><circle cx="192" cy="158" r="8" fill="#f0a500"/><circle cx="242" cy="158" r="8" fill="#f0a500"/>
  <text x="190" y="198" font-size="15" fill="#f0a500" text-anchor="middle" font-weight="700">粒子性：光子 E=hν</text>
  <rect x="402" y="58" width="200" height="116" rx="8" fill="#fff7e6" stroke="#f0a500"/>
  <text x="502" y="92" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">德布罗意波</text>
  <text x="502" y="128" font-size="20" fill="#102a43" text-anchor="middle">λ = h / p</text>
  <text x="502" y="160" font-size="13" fill="#486581" text-anchor="middle">动量越大，物质波波长越短</text>
  <text x="330" y="226" font-size="13" fill="#486581" text-anchor="middle">不是“有时是波有时是粒子”，而是微观对象具有统一的量子属性</text>
</svg>

**动态表征。**



> **公式首次使用卡**：适用边界——E=h\nu 用于单个光子的能量；\lambda =h/p 用于实物粒子的德布罗意波长；光强不等于频率，不能用光强代替光子能量。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

动画左侧显示光子束和金属屏，右侧显示实物粒子双缝累积和德布罗意波。拖动频率探针、光强和动量探针，能同时看到光子能量 $E=h\nu$、光子数量、物质波波长 $\lambda =h/p$ 和屏幕记录点的变化。

**交互探究。**
<iframe src="anim/xb3/wave-particle.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：光频率 $\nu$、光强、粒子动量 `p`；也可以直接拖动画面里的频率探针和动量探针。实时变化：光子能量、光子数量、德布罗意波长、双缝累积点和仪表读数。

**证据任务。**
- 提高光频率：看每个光子的能量是否增大。
- 提高光强：看光子数量增多，但单个光子能量不因此改变。
- 增大粒子动量：看德布罗意波长是否变短。
- 点击“播放”：看单个粒子逐点到达屏幕，累积后呈现波动条纹。
- 对照光电效应和干涉衍射：理解同一对象有波粒二象性。

#### 规律、证据与核心概念
光的能量以光子为单位：

```text
E = hν
```

光的干涉、衍射体现波动性；光电效应体现粒子性。德布罗意提出实物粒子也有波动性：

```text
λ = h/p
```

其中 `p` 是粒子动量。动量越大，波长越短，波动性越不容易在宏观尺度观察到。

**概念辨析。**
- 波粒二象性不是经典波和经典粒子的简单拼接，而是量子对象的两类表现。
- 光强影响光子数，频率影响单个光子能量。
- 实物粒子的波长由动量决定，动量越大波长越小。
- 干涉、衍射是波动性的证据；光电效应是粒子性的证据。
- 宏观物体动量很大，德布罗意波长极小，波动性难以观察。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 光波疏密 | 频率 $\nu$ | $E=h\nu$ | 频率越高光子能量越大 |
| 光子点数量 | 光强 | 光子数密度 | 光强越大光子越多 |
| 右侧物质波 | 波长 $\lambda$ | $\lambda =h/p$ | 动量越大波长越短 |
| 动量滑块 | `p` | $\lambda \propto 1/p$ | 控制实物粒子波动性显著程度 |
| 读数面板 | $E、\lambda$ | 量子关系 | 把现象和公式绑定 |
| 屏幕记录点 | 粒子到达位置 | 概率分布 | 单个到达、整体呈波 |

**适用边界。**
- $E=h\nu$ 用于单个光子的能量。
- $\lambda =h/p$ 用于实物粒子的德布罗意波长。
- 光强不等于频率，不能用光强代替光子能量。
- 波粒二象性在微观尺度显著，宏观物体波长通常极小。
- 判断现象性质要看实验：干涉衍射看波动性，光电效应看粒子性。

#### 应用与迁移
- 概念题：判断哪些现象体现波动性或粒子性。
- 计算题：用 $E=h\nu$ 或 $\lambda =h/p$ 求能量、频率、波长、动量。
- 比较题：动量变化对德布罗意波长的影响。
- 易错题：区分光强和频率的作用。

**解题路径。**
1. 先判断对象是光子还是实物粒子。
2. 光子能量用 $E=h\nu$。
3. 实物粒子波长用 $\lambda =h/p$。
4. 判断现象证据：干涉/衍射对应波动性，光电效应对应粒子性。
5. 涉及光强时只联系光子数或光电流，不直接改 `E`。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “光强越大单个光子能量越大” | 单个光子能量由频率决定 | $E=h\nu$ |
| “电子只有粒子性” | 电子可发生衍射 | 实物粒子也有波动性 |
| “宏观物体没有物质波” | 只是波长极小难观察 | $\lambda =h/p$ 仍成立 |
| “波粒二象性是两种东西混在一起” | 是量子对象的统一属性 | 看实验表现 |
| “λ 与 p 成正比” | 德布罗意关系是反比 | $\lambda =h/p$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-20）

<h4 id="atomic-structure">X3-21 原子结构 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-21
- 模块：选择性必修3
- 主题：原子核式结构与原子尺度
- 高考功能：散射实验现象判断 / 核式结构理解 / 原子尺度辨析
- 前置知识：库仑力、带电粒子运动、波粒二象性
- 后续应用：玻尔模型、原子光谱、原子核结构

#### 情境与现象
用带正电的 α 粒子轰击很薄的金箔，大多数 α 粒子几乎不偏转直接穿过，少数发生明显偏转，极少数甚至被反弹回来。这个现象不能用“正电均匀分布在整个原子中”的模型解释，它说明原子的正电荷和大部分质量集中在一个很小的区域，这个区域就是原子核。

**静态表征。**
<svg viewBox="0 0 680 250" width="100%" style="max-width:860px">
  <defs>
    <marker id="atomArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <rect x="46" y="42" width="96" height="166" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></rect>
  <text x="94" y="32" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">薄金箔</text>
  <circle cx="94" cy="88" r="5" fill="#f0a500"></circle>
  <circle cx="94" cy="126" r="5" fill="#f0a500"></circle>
  <circle cx="94" cy="164" r="5" fill="#f0a500"></circle>
  <path d="M178 92 L520 92" stroke="#2c7be5" stroke-width="4" marker-end="url(#atomArrow)"></path>
  <text x="342" y="75" font-size="13" fill="#2c7be5" text-anchor="middle">多数：几乎直穿，说明原子内部大部分是空的</text>
  <path d="M178 126 Q300 126 430 42" fill="none" stroke="#e03131" stroke-width="4" marker-end="url(#atomArrow)"></path>
  <text x="382" y="38" font-size="13" fill="#e03131">少数：明显偏转</text>
  <path d="M178 164 Q252 164 222 212 Q188 230 150 206" fill="none" stroke="#7b2cbf" stroke-width="4" marker-end="url(#atomArrow)"></path>
  <text x="252" y="222" font-size="13" fill="#7b2cbf">极少数：大角反弹</text>
  <circle cx="560" cy="132" r="66" fill="none" stroke="#829ab1" stroke-dasharray="6 5" stroke-width="2"></circle>
  <circle cx="560" cy="132" r="11" fill="#e03131"></circle>
  <circle cx="600" cy="92" r="5" fill="#2c7be5"></circle>
  <circle cx="520" cy="176" r="5" fill="#2c7be5"></circle>
  <text x="560" y="220" font-size="13" fill="#486581" text-anchor="middle">原子核很小、带正电、集中了几乎全部质量；电子在核外</text>
</svg>

**动态表征。**
动画把金箔、原子核和 α 粒子轨迹放在同一画面。直接拖动入射 α 粒子可以改变碰撞参数 `b`，点“播放”可观察轨迹穿过、偏转或反弹；离原子核越近，库仑斥力越强，偏转越大。电子云范围很大，但真正造成大角散射的是很小的正电原子核。

**交互探究。**
<iframe src="anim/xb3/atomic-structure.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——核式结构模型用于解释 α 粒子散射、原子尺度和原子内部结构；本页动画是定性模型，重点看趋势，不用于精确计算散射角；讨论原子整体电性时，要同时考虑带正电的原子核和带负电的电子。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动入射 α 粒子改变碰撞参数 `b`，也可调节核电荷量等级 `Z`、电子云半径并记录偏转数据。画面同时显示 α 散射俯视、原子截面、偏转角图像和数据记录，把 $F\propto Z/b^{2}$ 与“直穿/偏转/反弹”判断绑定。

**证据任务。**
- 拖动 α 粒子把 `b` 调大：看它是否几乎直线穿过。
- 拖动 α 粒子把 `b` 调小：看轨迹是否靠近原子核后发生大偏转。
- 提高 `Z`：看同样的入射位置下偏转是否更明显。
- 改变电子云半径：比较原子大小和原子核大小的差距，理解“原子大部分是空的”。

#### 规律、证据与核心概念
α 粒子带正电，原子核也带正电，二者靠近时受到库仑斥力：

```text
F = kQq/r²
```

如果正电荷均匀分布在整个原子中，α 粒子受到的斥力不会集中到足以产生大角反弹。实验中出现少数大偏转，说明正电荷和质量必须集中在很小的原子核内；多数 α 粒子直穿，说明原子内部绝大部分空间没有集中的正电荷阻挡。

**概念辨析。**
- 原子由原子核和核外电子组成。
- 原子核带正电，半径远小于原子半径，却集中了几乎全部质量。
- 核外电子带负电，分布在原子核周围，使整个原子通常呈电中性。
- α 粒子散射实验是建立核式结构模型的关键证据。
- “多数直穿”和“极少数大偏转”必须同时解释，才是完整理解。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| α 粒子与原子核距离 | `r` | $F=kQq/r^{2}$ | 越靠近原子核，斥力越大 |
| 核电荷滑块 | `Q` 或 `Z` | $F\propto Q$ | 核电荷越大，同距斥力越强 |
| 入射位置滑块 | `b` | 最近距离改变 | `b` 小更容易大角偏转 |
| 电子云半径 | 原子半径量级 | $R_{\text{原子}} >> R_{\text{核}}$ | 原子大部分空间不是原子核 |
| 轨迹弯曲角 | 偏转角 | 库仑斥力积累效果 | 偏转角是核式结构的证据 |

**适用边界。**
- 核式结构模型用于解释 α 粒子散射、原子尺度和原子内部结构。
- 本页动画是定性模型，重点看趋势，不用于精确计算散射角。
- 讨论原子整体电性时，要同时考虑带正电的原子核和带负电的电子。
- 不能把原子核看成整个原子那么大；原子核只占极小体积。
- 原子结构的能级、光谱问题需要进一步使用玻尔模型和量子理论。

#### 应用与迁移
- 实验现象题：由“多数直穿、少数偏转、极少反弹”判断核式结构。
- 概念辨析题：判断原子核大小、质量集中、电荷分布和电中性。
- 模型题：比较汤姆孙模型和卢瑟福核式结构模型。
- 综合题：把库仑力方向和散射轨迹联系起来。

**解题路径。**
1. 先抓实验事实：多数直穿，少数偏转，极少反弹。
2. 多数直穿说明原子内部大部分空间空旷。
3. 少数大偏转说明正电荷和质量集中在极小区域。
4. α 粒子带正电，靠近正核受到斥力，轨迹背离原子核弯曲。
5. 得出核式结构：小而重的正电原子核，核外有电子。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “原子核大小接近原子大小” | 原子核半径远小于原子半径 | 原子大部分是空的 |
| “电子决定原子质量” | 电子质量远小于核内质子、中子 | 质量主要集中在原子核 |
| “大多数 α 粒子反弹” | 实验事实是大多数直穿 | 极少数才大角反弹 |
| “偏转由电子吸引造成” | α 粒子大角偏转主要来自正核斥力 | 看正电荷集中 |
| “原子一定带电” | 普通原子质子数等于电子数 | 原子通常呈电中性 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-21）

<h4 id="bohr-energy-level">X3-22 玻尔模型与能级 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-22
- 模块：选择性必修3
- 主题：玻尔原子模型、定态、能级和跃迁
- 高考功能：能级差计算 / 吸收发射判断 / 光谱线理解



> **公式首次使用卡**：适用边界——氢原子能级公式 En=-13.6/n^{2} eV 主要用于氢原子或类氢离子的基础模型；判断吸收/发射要比较初末能级高低，不只比较 n 的数字大小；能级图的纵轴表示能量，越往上能量越大，越接近 0 eV。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 前置知识：原子结构、光子能量 $E=h\nu$、机械能
- 后续应用：原子光谱、氢原子能级图、近代物理综合题

#### 情境与现象
氢原子不会连续发出所有颜色的光，而是只发出某些特定频率的光。这个事实说明原子内部的能量不是任意连续变化的。玻尔模型把电子允许存在的状态看成一层一层的能级：电子在稳定能级上不辐射能量，只有从一个能级跃迁到另一个能级时，才吸收或发射一个光子。

**静态表征。**
<svg viewBox="0 0 680 250" width="100%" style="max-width:860px">
  <defs>
    <marker id="bohrArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
    <marker id="bohrBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#2c7be5"></path></marker>
  </defs>
  <circle cx="140" cy="126" r="13" fill="#e03131"></circle>
  <text x="140" y="130" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">核</text>
  <circle cx="140" cy="126" r="40" fill="none" stroke="#829ab1" stroke-width="2"></circle>
  <circle cx="140" cy="126" r="72" fill="none" stroke="#829ab1" stroke-width="2"></circle>
  <circle cx="140" cy="126" r="102" fill="none" stroke="#829ab1" stroke-width="2"></circle>
  <circle cx="212" cy="126" r="6" fill="#2c7be5"></circle>
  <text x="140" y="238" font-size="13" fill="#486581" text-anchor="middle">允许轨道：n=1,2,3...</text>
  <line x1="356" y1="202" x2="592" y2="202" stroke="#334e68" stroke-width="3"></line>
  <line x1="356" y1="154" x2="592" y2="154" stroke="#334e68" stroke-width="3"></line>
  <line x1="356" y1="120" x2="592" y2="120" stroke="#334e68" stroke-width="3"></line>
  <line x1="356" y1="94" x2="592" y2="94" stroke="#334e68" stroke-width="3"></line>
  <text x="604" y="206" font-size="13" fill="#486581">n=1, E1=-13.6 eV</text>
  <text x="604" y="158" font-size="13" fill="#486581">n=2, E2=-3.40 eV</text>
  <text x="604" y="124" font-size="13" fill="#486581">n=3, E3=-1.51 eV</text>
  <text x="604" y="98" font-size="13" fill="#486581">n=4</text>
  <path d="M420 118 L420 196" stroke="#e03131" stroke-width="4" marker-end="url(#bohrArrow)"></path>
  <path d="M452 154 C492 144 520 128 548 96" fill="none" stroke="#2c7be5" stroke-width="4" marker-end="url(#bohrBlue)"></path>
  <text x="432" y="164" font-size="13" fill="#e03131">向低能级：发射光子</text>
  <text x="500" y="78" font-size="13" fill="#2c7be5">向高能级：吸收光子</text>
  <text x="474" y="232" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">hν = |E高 - E低|</text>
</svg>

**动态表征。**
动画左侧显示玻尔轨道，右侧显示氢原子能级图。拖动能级图上的初态和末态手柄，可以看到电子从高能级落到低能级时发射光子，从低能级跃迁到高能级时吸收光子；点“播放”可观察电子跃迁和光子波形，光子的能量始终等于两能级的能量差。

**交互探究。**
<iframe src="anim/xb3/bohr-energy-level.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可操作内容：直接拖动蓝色初态或红色末态手柄选择 `ni、nf`，也可播放跃迁过程并记录数据。画面同时显示轨道俯视、能级图像、光子波形和数据记录，把 $En=-13.6/n^{2} eV$、$h\nu =\vert \Delta E\vert$ 与跃迁箭头绑定。

**证据任务。**
- 拖动手柄让 $ni>nf$：看电子向内层跃迁，是否发射光子。
- 拖动手柄让 $ni<nf$：看电子向外层跃迁，是否需要吸收光子。
- 改变两个能级的间隔：看 $\Delta E$ 越大，光子能量和频率是否越大。
- 把初态和末态设为相同：看没有跃迁时是否没有光子吸收或发射。

#### 规律、证据与核心概念
玻尔模型用三个关键假设解释氢原子光谱：

```text
1. 电子只能处在某些允许的稳定状态，称为定态。
2. 定态有确定能量，能量只取离散值，称为能级。
3. 原子跃迁时吸收或发射光子，光子能量等于能级差。
```

对氢原子，常用能级公式为：

```text
En = -13.6/n² eV   (n=1,2,3...)
hν = |Em - En|
```

能量越低越稳定，$n=1$ 是基态；`n` 越大，能级越高，越接近电离状态。

**概念辨析。**
- 定态不是电子静止，而是原子处在稳定能量状态。
- 电子在同一定态中不连续辐射能量。
- 向高能级跃迁需要吸收能量，向低能级跃迁会发射光子。
- 发射或吸收的光子频率由能级差决定，不由学生随意指定。
- 氢原子能级是负值，越接近 `0 eV` 表示能级越高。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 右侧水平线 | `En` | $En=-13.6/n^{2} eV$ | 每条线是一个允许能级 |
| 初态滑块 | `ni` | $Ei=-13.6/ni^{2}$ | 电子跃迁前所在能级 |
| 末态滑块 | `nf` | $Ef=-13.6/nf^{2}$ | 电子跃迁后所在能级 |
| 跃迁箭头 | $\Delta E$ | $\Delta E=Ef-Ei$ | 正值吸收，负值发射 |
| 光子读数 | $h\nu$ | $h\nu =\vert \Delta E\vert$ | 光子能量等于能级差绝对值 |

**适用边界。**
- 氢原子能级公式 $En=-13.6/n^{2} eV$ 主要用于氢原子或类氢离子的基础模型。
- 判断吸收/发射要比较初末能级高低，不只比较 `n` 的数字大小。
- 能级图的纵轴表示能量，越往上能量越大，越接近 `0 eV`。
- 只有光子能量恰好等于能级差时，原子才能发生对应吸收跃迁。
- 玻尔模型能解释氢原子线状光谱，但不是完整量子力学模型。

#### 应用与迁移
- 计算题：由 $En=-13.6/n^{2}$ 求某次跃迁的光子能量或频率。
- 判断题：判断跃迁是吸收还是发射。
- 图像题：从能级图读出可能的光谱线条数和能量差。
- 综合题：结合光电效应、光谱和能量守恒判断光子作用。

**解题路径。**
1. 在能级图上标出初态 `ni` 和末态 `nf`。
2. 算出或读出 `Ei`、`Ef`。
3. 计算 $\Delta E=Ef-Ei$。
4. 若 $\Delta E>0$，原子吸收光子；若 $\Delta E<0$，原子发射光子。
5. 用 $h\nu =\vert \Delta E\vert$ 求光子能量或频率。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “电子在轨道上运动就不断辐射” | 玻尔定态假设：定态不辐射 | 只有跃迁才吸收/发射 |
| “能级负值越大越低” | 能量轴上 `-1.51 eV` 高于 `-13.6 eV` | 越接近 0 能级越高 |
| “任意频率光都能被吸收” | 吸收光子能量必须等于能级差 | 先算 $\Delta E$ |
| “向外层跃迁会放光” | 向高能级需要吸收能量 | $Ef>Ei$ 为吸收 |
| “发射光子能量等于末态能量” | 光子能量等于能级差 | $h\nu =\vert Ei-Ef\vert$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-22）

<h4 id="atomic-spectrum">X3-23 原子光谱 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-23
- 模块：选择性必修3
- 主题：发射光谱、吸收光谱与光谱分析
- 高考功能：线状光谱判断 / 元素鉴别 / 能级跃迁联系
- 前置知识：玻尔模型与能级、光的色散、光子能量
- 后续应用：天体成分分析、能级图综合、近代物理实验判断

#### 情境与现象
把氢气放电管发出的光通过狭缝和棱镜后，屏上不是连续的彩带，而是几条固定位置的亮线。换成钠蒸气，亮线位置又变了。原子光谱说明原子只发出或吸收某些特定频率的光，这些频率对应原子内部特定能级差，所以光谱像元素的“指纹”。

**静态表征。**
<svg viewBox="0 0 690 250" width="100%" style="max-width:870px">
  <defs>
    <linearGradient id="specGrad" x1="0" x2="1">
      <stop offset="0%" stop-color="#7b2cbf"></stop>
      <stop offset="18%" stop-color="#2c7be5"></stop>
      <stop offset="42%" stop-color="#38b2ac"></stop>
      <stop offset="66%" stop-color="#f0a500"></stop>
      <stop offset="100%" stop-color="#e03131"></stop>
    </linearGradient>
  </defs>
  <rect x="40" y="76" width="92" height="92" rx="10" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></rect>
  <text x="86" y="70" font-size="14" fill="#102a43" text-anchor="middle" font-weight="700">放电管</text>
  <path d="M60 122 C78 92 94 152 112 122" fill="none" stroke="#f0a500" stroke-width="4"></path>
  <rect x="170" y="52" width="18" height="150" fill="#334e68"></rect>
  <rect x="176" y="102" width="6" height="46" fill="#fff"></rect>
  <polygon points="248,74 310,126 248,178" fill="#e6fffa" stroke="#38b2ac" stroke-width="2"></polygon>
  <rect x="370" y="58" width="270" height="36" rx="6" fill="url(#specGrad)" opacity="0.9"></rect>
  <text x="505" y="48" font-size="14" fill="#486581" text-anchor="middle">连续光谱：所有颜色连续分布</text>
  <rect x="370" y="132" width="270" height="62" rx="6" fill="#101820"></rect>
  <line x1="418" y1="132" x2="418" y2="194" stroke="#7b2cbf" stroke-width="4"></line>
  <line x1="482" y1="132" x2="482" y2="194" stroke="#2c7be5" stroke-width="4"></line>
  <line x1="538" y1="132" x2="538" y2="194" stroke="#38b2ac" stroke-width="4"></line>
  <line x1="606" y1="132" x2="606" y2="194" stroke="#e03131" stroke-width="4"></line>
  <text x="505" y="214" font-size="14" fill="#486581" text-anchor="middle">线状光谱：只在特定波长出现亮线</text>
  <text x="345" y="235" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">每条谱线对应一次跃迁：hν = |E高 - E低|，λ = c/ν</text>
</svg>

**动态表征。**
动画把“原子放光、棱镜分光、屏上出现谱线”连起来。拖动屏幕上的谱线探针可以读出波长；点“播放”能看到光子从放电管经棱镜到达屏幕。切换元素时，谱线位置会变成不同“指纹”，激发强度主要改变亮度，不会把线状光谱变成连续彩带。

**交互探究。**
<iframe src="anim/xb3/atomic-spectrum.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——线状光谱主要来自稀薄气体或蒸气中原子的能级跃迁；固体、液体或高压气体常产生连续光谱或带状光谱，本页不作复杂展开；判断谱线位置要看波长或频率，不只看“红黄蓝”的口头描述。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动谱线屏幕上的探针读取 $\lambda$，也可切换元素、激发强度和吸收/发射模式。画面同时显示光路侧视、谱线屏幕、能级图像和数据记录，把 $\nu =c/\lambda$、$h\nu =hc/\lambda$ 与谱线读数绑定。

**证据任务。**
- 拖动谱线探针：看不同谱线对应的波长 $\lambda$、频率 $\nu$ 和光子能量 $h\nu$。
- 切换元素：看谱线位置是否整体改变，理解“光谱指纹”。
- 提高激发强度：看亮度增强、弱线出现，但谱线位置不乱跑。
- 打开吸收光谱：看连续背景上出现暗线，暗线位置与该元素可吸收的频率对应。
- 对照能级差：理解一条谱线不是一段连续颜色，而是一个确定跃迁能量。

#### 规律、证据与核心概念
原子内部能级是离散的，电子从高能级跃迁到低能级时发射光子：

```text
hν = E高 - E低
```

光的频率与波长满足：

```text
c = λν
```

因此每一个允许跃迁对应一个确定频率和波长，屏上就出现一条固定位置的谱线。不同元素能级结构不同，允许跃迁不同，所以谱线组合不同，可以用来鉴别元素。

**概念辨析。**
- 发射光谱：稀薄气体或蒸气受激后发光，通过分光得到的亮线光谱。
- 吸收光谱：连续光通过较冷气体后，特定频率被吸收，连续背景上出现暗线。
- 线状光谱说明原子能量变化是离散的。
- 同一种元素的发射线和吸收线在频率位置上有对应关系。
- 光谱分析可以判断物质成分，例如分析恒星大气中的元素。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 亮线或暗线位置 | 波长 $\lambda$ | $c=\lambda \nu$ | 位置对应特定波长 |
| 谱线颜色 | 频率 $\nu$ | $\nu =c/\lambda$ | 颜色由频率决定 |
| 能级跃迁 | 能级差 $\Delta E$ | $h\nu =\Delta E$ | 一条谱线对应一次跃迁 |
| 元素滑块 | 能级结构 | 允许跃迁集合 | 不同元素谱线不同 |
| 激发强度 | 亮度 | 光子数变化 | 强度影响亮度，不随意改变波长 |

**适用边界。**
- 线状光谱主要来自稀薄气体或蒸气中原子的能级跃迁。
- 固体、液体或高压气体常产生连续光谱或带状光谱，本页不作复杂展开。
- 判断谱线位置要看波长或频率，不只看“红黄蓝”的口头描述。
- 吸收光谱需要连续光源通过较冷的吸收物质。
- 光谱分析识别的是元素特征谱线组合，通常要多条线共同判断。

#### 应用与迁移
- 概念题：判断发射光谱、吸收光谱、连续光谱。
- 识别题：由谱线位置判断元素种类。
- 计算题：用 $h\nu =\Delta E$、$c=\lambda \nu$ 求光子能量、频率或波长。
- 综合题：把能级跃迁和光谱线条数联系起来。

**解题路径。**
1. 先判断题目给的是亮线、暗线还是连续彩带。
2. 亮线通常对应发射光谱，暗线通常对应吸收光谱。
3. 找谱线位置对应的 $\lambda$ 或 $\nu$。
4. 若涉及能级，用 $h\nu =\vert E_{\text{高}}-E_{\text{低}}\vert$。
5. 识别元素时比较多条谱线位置，而不是只看一条颜色。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “线状光谱是连续彩带的一部分” | 线状光谱只在特定波长有线 | 看是否连续 |
| “激发越强谱线位置会移动” | 位置由能级差决定 | 强度主要改亮度 |
| “不同元素光谱都一样” | 能级结构不同 | 光谱是元素指纹 |
| “吸收线和发射线无关” | 同一元素对应频率可相同 | 看相同跃迁 |
| “一条红线就一定是某元素” | 不同元素可能有近似颜色线 | 用多条谱线组合判断 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-23）

<h4 id="nuclear-structure">X3-24 原子核结构 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-24
- 模块：选择性必修3
- 主题：原子核组成、核电荷数、质量数和同位素
- 高考功能：核素符号识读 / 质子中子电子数判断 / 同位素辨析
- 前置知识：原子结构、电荷守恒、质量近似
- 后续应用：放射性衰变、核反应、质量亏损与核能

#### 情境与现象
同样叫“碳”，有的原子核里有 6 个质子和 6 个中子，叫碳-12；有的有 6 个质子和 8 个中子，叫碳-14。它们质子数相同，所以都是碳元素；中子数不同，所以质量数不同，是同位素。原子核结构题的核心不是背名字，而是会从核素符号中读出质子数、中子数和质量数。

**静态表征。**
<svg viewBox="0 0 690 250" width="100%" style="max-width:870px">
  <circle cx="160" cy="124" r="82" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></circle>
  <circle cx="128" cy="104" r="17" fill="#e03131"></circle>
  <circle cx="166" cy="104" r="17" fill="#2c7be5"></circle>
  <circle cx="146" cy="138" r="17" fill="#e03131"></circle>
  <circle cx="188" cy="138" r="17" fill="#2c7be5"></circle>
  <circle cx="118" cy="148" r="17" fill="#2c7be5"></circle>
  <text x="128" y="109" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">p</text>
  <text x="166" y="109" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">n</text>
  <text x="146" y="143" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">p</text>
  <text x="188" y="143" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">n</text>
  <text x="118" y="153" font-size="13" fill="#fff" text-anchor="middle" font-weight="700">n</text>
  <text x="160" y="228" font-size="13" fill="#486581" text-anchor="middle">原子核由质子 p 和中子 n 组成</text>
  <text x="410" y="82" font-size="54" fill="#102a43" font-weight="700">A</text>
  <text x="410" y="172" font-size="54" fill="#102a43" font-weight="700">Z</text>
  <text x="470" y="128" font-size="64" fill="#102a43" font-weight="700">X</text>
  <text x="552" y="90" font-size="17" fill="#486581">A：质量数 = 质子数 + 中子数</text>
  <text x="552" y="140" font-size="17" fill="#486581">Z：核电荷数 = 质子数</text>
  <text x="552" y="190" font-size="17" fill="#486581">中性原子：电子数 = Z</text>
  <text x="450" y="226" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">核素符号： ᵃᶻX，N = A - Z</text>
</svg>

**动态表征。**
动画把质子、中子、核素符号和核外电子轨道放在同一个实验台。拖动画面里的质子/中子卡片进核，或调节 `Z、N`，可以看到元素名称、质量数 `A`、中子数 `N`、核电荷数 `Z`、电子数和核素符号同步变化。

**交互探究。**
<iframe src="anim/xb3/nuclear-structure.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：质子数 `Z`、中子数 `N`、电离状态；也可以直接拖动画面中的质子/中子卡片。实时变化：质量数 `A`、核素符号、元素名称、电子数、净电荷和同位素记录。

**证据任务。**
- 固定 `Z`，改变 `N`：看元素名称不变但质量数改变，理解同位素。
- 改变 `Z`：看元素名称改变，理解质子数决定元素种类。
- 改变电离状态：看原子核不变，电子数改变，理解离子不改变核素。



> **公式首次使用卡**：适用边界——核素符号题默认左上角是质量数 A，左下角是核电荷数 Z；质量数不是精确质量，精确核质量还涉及质量亏损；同位素化学性质相近，是因为电子结构主要由 Z 决定。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 拖动质子/中子卡片进核：看 $A=Z+N$ 和核素符号如何立刻改变。
- 对照读数：用 $A=Z+N$ 和 $N=A-Z$ 检查每一次变化。

#### 规律、证据与核心概念
原子核由质子和中子组成。质子带正电，中子不带电，因此原子核电荷由质子数决定：

```text
Z = 质子数
A = 质子数 + 中子数 = Z + N
N = A - Z
```

普通中性原子中，核外电子数等于质子数；如果失去或得到电子，就成为离子，但原子核中的 `Z` 和 `N` 不因此改变。

**概念辨析。**
- `Z` 是核电荷数，也是质子数，决定元素种类。
- `A` 是质量数，近似表示原子核内核子总数。
- `N` 是中子数，满足 $N=A-Z$。
- 质子和中子统称核子。
- 质子数相同、中子数不同的原子互为同位素。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 红色质子 | `Z` | $Z=\text{质子数}$ | 决定元素和核电荷 |
| 蓝色中子 | `N` | $N=A-Z$ | 改变同位素质量 |
| 核素符号左上角 | `A` | $A=Z+N$ | 质量数等于核子总数 |
| 核素符号左下角 | `Z` | 核电荷数 | 同一元素 `Z` 相同 |
| 电子读数 | `e` | 中性时 $e=Z$ | 电离只改电子数，不改核 |
| 核素记录表 | 同位素 | 固定 `Z` 比较 `N` | 同元素不同中子数 |

**适用边界。**
- 核素符号题默认左上角是质量数 `A`，左下角是核电荷数 `Z`。
- 质量数不是精确质量，精确核质量还涉及质量亏损。
- 同位素化学性质相近，是因为电子结构主要由 `Z` 决定。
- 离子题要分清“核内质子数”和“核外电子数”。
- 核反应和衰变中要分别守恒质量数和电荷数。

#### 应用与迁移
- 识读题：由 `ᵃᶻX` 求质子数、中子数、电子数。
- 同位素题：判断哪些核素互为同位素。
- 离子题：由电荷数判断电子数。
- 核反应铺垫题：配平质量数和电荷数。

**解题路径。**
1. 先读核素符号左下角 `Z`，得到质子数。
2. 读左上角 `A`，得到质量数。
3. 用 $N=A-Z$ 求中子数。
4. 若是中性原子，电子数等于 `Z`。
5. 若是离子，按失电子减少、得电子增加计算电子数。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “质量数就是中子数” | 质量数是质子数加中子数 | $A=Z+N$ |
| “同位素质子数不同” | 同位素质子数相同 | 中子数不同 |
| “离子改变原子核” | 普通电离只改变核外电子 | `Z、N` 不变 |
| “核电荷数等于电子数” | 只对中性原子成立 | 离子要另算 |
| “元素由中子数决定” | 元素由质子数决定 | 看 `Z` |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-24）

<h4 id="radioactive-decay">X3-25 放射性衰变 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-25
- 模块：选择性必修3
- 主题：天然放射性、α 衰变、β 衰变、γ 衰变
- 高考功能：衰变方程配平 / 射线性质判断 / 核素变化辨析
- 前置知识：原子核结构、核素符号、电荷守恒
- 后续应用：半衰期、核反应、核能、质量亏损

#### 情境与现象
某些原子核不稳定，会自发放出射线并变成另一种原子核。比如铀-238 放出一个 α 粒子后，质量数减少 4，核电荷数减少 2，变成钍-234。放射性衰变不是核外电子重新排列，而是原子核本身发生变化，所以要盯住核素符号左上角 `A` 和左下角 `Z` 的变化。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <defs>
    <marker id="decayArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <circle cx="104" cy="126" r="54" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></circle>
  <text x="104" y="118" font-size="20" fill="#102a43" text-anchor="middle" font-weight="700">母核</text>
  <text x="104" y="148" font-size="15" fill="#486581" text-anchor="middle">A, Z</text>
  <path d="M174 126 L274 126" stroke="#e03131" stroke-width="4" marker-end="url(#decayArrow)"></path>
  <text x="224" y="104" font-size="14" fill="#e03131" text-anchor="middle">自发衰变</text>
  <circle cx="350" cy="126" r="48" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></circle>
  <text x="350" y="118" font-size="20" fill="#102a43" text-anchor="middle" font-weight="700">子核</text>
  <text x="350" y="148" font-size="15" fill="#486581" text-anchor="middle">A', Z'</text>
  <path d="M398 104 L500 58" stroke="#e03131" stroke-width="4" marker-end="url(#decayArrow)"></path>
  <path d="M398 126 L500 126" stroke="#2c7be5" stroke-width="4" marker-end="url(#decayArrow)"></path>
  <path d="M398 150 C442 190 476 194 516 174" fill="none" stroke="#7b2cbf" stroke-width="4" marker-end="url(#decayArrow)"></path>
  <text x="556" y="62" font-size="15" fill="#e03131">α：⁴₂He，A-4，Z-2</text>
  <text x="556" y="130" font-size="15" fill="#2c7be5">β⁻：电子，A 不变，Z+1</text>
  <text x="556" y="182" font-size="15" fill="#7b2cbf">γ：光子，A、Z 不变</text>
  <text x="350" y="226" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">衰变方程左右两边：质量数守恒，电荷数守恒</text>
</svg>

**动态表征。**
动画把母核、子核、放出射线、探测器和守恒账本放在同一座实验台中。播放衰变过程或拖动探测器，可以看到 α、β⁻、γ 衰变中 `A`、`Z` 的变化规则、射线穿透/电离特点和守恒检查。

**交互探究。**
<iframe src="anim/xb3/radioactive-decay.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：衰变类型、母核质子数 `Z`、母核中子数 `N`；也可以直接拖动画面中的射线探测器。实时变化：母核 `A/Z`、子核 `A'/Z'`、放出粒子、守恒检查、穿透/电离特点、偏转提示和数据记录。

**证据任务。**
- 选择 α 衰变：看子核质量数是否 `A-4`、核电荷数是否 `Z-2`。
- 选择 β⁻ 衰变：看质量数是否不变、核电荷数是否增加 1。
- 选择 γ 衰变：看核素种类是否不变，只放出高能光子。
- 改变母核 `Z` 和 `N`：用左右两边 `A`、`Z` 总和检查守恒。
- 拖动探测器：比较 α、β、γ 的电离能力、穿透能力和偏转特点。

#### 规律、证据与核心概念
放射性衰变遵守质量数守恒和电荷数守恒。常见规则：

```text
α 衰变：  A_ZX → A-4_{Z-2}Y + 4_2He
β⁻ 衰变： A_ZX → A_{Z+1}Y + 0_-1e
γ 衰变：  A_ZX* → A_ZX + γ
```

α 粒子是氦核，带正电，电离能力强、穿透能力弱；β 射线是高速电子流，穿透能力中等；γ 射线是高频电磁波，不带电，穿透能力强。

**概念辨析。**
- 放射性衰变是原子核自发变化，不是化学反应。
- 衰变前后总质量数和总电荷数守恒。
- α 衰变会改变元素种类，且 `A` 减少 4、`Z` 减少 2。
- β⁻ 衰变也会改变元素种类，`A` 不变、`Z` 增加 1。
- γ 衰变通常只释放能量，核素的 `A`、`Z` 不变。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|



> **公式首次使用卡**：适用边界——衰变方程配平时必须同时守恒质量数和电荷数；β 衰变中的电子来自原子核内部变化，不是核外电子直接掉出来；γ 射线不带电，不能用电场磁场偏转判断为带电粒子。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| 母核左上角 | `A` | $A=Z+N$ | 衰变前质量数 |
| 母核左下角 | `Z` | 核电荷数 | 衰变前元素种类 |
| α 粒子 | $^{4}_{2}He$ | $A' = A-4, Z'=Z-2$ | 放出氦核 |
| β⁻ 粒子 | $^{0}_{-1}e$ | $A'=A, Z'=Z+1$ | 中子转化为质子并放出电子 |
| γ 光子 | $\gamma$ | $A'=A, Z'=Z$ | 核退激，不改核素 |
| 探测器读数 | 电离/穿透 | 射线性质 | 区分 α、β、γ |

**适用边界。**
- 衰变方程配平时必须同时守恒质量数和电荷数。
- β 衰变中的电子来自原子核内部变化，不是核外电子直接掉出来。
- γ 射线不带电，不能用电场磁场偏转判断为带电粒子。
- 本页以 β⁻ 衰变为主，高考基础题常按 `Z+1` 处理。
- 衰变是否发生由原子核稳定性决定，不由普通化学条件决定。

#### 应用与迁移
- 配平方程题：补出未知子核或放出粒子。
- 判断题：识别 α、β、γ 射线性质。
- 概念题：判断衰变是否改变元素种类。
- 综合题：连续多次衰变后求最终 `A`、`Z`。

**解题路径。**
1. 先写出衰变前母核的 `A` 和 `Z`。
2. 判断放出的是 α、β⁻ 还是 γ。
3. 按规则求子核 `A'`、`Z'`。
4. 用左右质量数总和检查一次。
5. 用左右电荷数总和再检查一次。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “α 粒子是电子” | α 粒子是氦核 | $^{4}_{2}He$ |
| “β⁻ 衰变质量数减 1” | β 粒子质量数记为 0 | `A` 不变 |
| “γ 衰变改变元素” | γ 只放出光子 | `A、Z` 不变 |
| “β 电子来自核外电子层” | β⁻ 来自核内中子转化 | 原子核变化 |
| “只守恒质量数就够” | 电荷数也必须守恒 | 两个都配平 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-25）

<h4 id="half-life">X3-26 半衰期 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-26
- 模块：选择性必修3
- 主题：半衰期、衰变规律和放射性活度
- 高考功能：剩余核数计算 / 图像读数 / 半衰期概念辨析
- 前置知识：放射性衰变、指数变化、比例思想
- 后续应用：放射性测年、核医学、衰变链计算

#### 情境与现象
一块放射性样品中有大量不稳定原子核。无法预言某一个原子核什么时候衰变，但可以预言大量原子核的统计规律：每经过一个半衰期，剩余未衰变的原子核数约变为原来的一半。半衰期描述的是大量原子核整体衰变快慢，不是“每个原子核活到半衰期就一定衰变”。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <line x1="70" y1="202" x2="620" y2="202" stroke="#334e68" stroke-width="3"></line>
  <line x1="70" y1="202" x2="70" y2="38" stroke="#334e68" stroke-width="3"></line>
  <text x="630" y="220" font-size="13" fill="#486581">时间 t</text>
  <text x="42" y="42" font-size="13" fill="#486581">剩余核数 N</text>
  <path d="M70 54 C160 96 242 122 328 150 S500 188 620 196" fill="none" stroke="#e03131" stroke-width="4"></path>
  <line x1="70" y1="126" x2="210" y2="126" stroke="#829ab1" stroke-dasharray="6 5"></line>
  <line x1="210" y1="202" x2="210" y2="126" stroke="#829ab1" stroke-dasharray="6 5"></line>
  <line x1="70" y1="164" x2="350" y2="164" stroke="#829ab1" stroke-dasharray="6 5"></line>
  <line x1="350" y1="202" x2="350" y2="164" stroke="#829ab1" stroke-dasharray="6 5"></line>
  <text x="210" y="222" font-size="13" fill="#486581" text-anchor="middle">1T</text>
  <text x="350" y="222" font-size="13" fill="#486581" text-anchor="middle">2T</text>
  <text x="58" y="130" font-size="13" fill="#486581" text-anchor="end">N0/2</text>
  <text x="58" y="168" font-size="13" fill="#486581" text-anchor="end">N0/4</text>
  <rect x="420" y="46" width="220" height="88" rx="8" fill="#eef4ff" stroke="#2c7be5"></rect>
  <text x="530" y="82" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">N = N0(1/2)^(t/T)</text>
  <text x="530" y="112" font-size="14" fill="#486581" text-anchor="middle">每过一个半衰期，剩余量乘 1/2</text>
</svg>

**动态表征。**
动画左侧显示一批原子核格点，右侧显示指数衰减曲线和计数器。播放时原子核随机衰变；拖动时间游标到 `T、2T、3T`，可以看到剩余核数、已衰变核数、剩余比例和曲线点同步变化。

**交互探究。**
<iframe src="anim/xb3/half-life.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——半衰期公式适用于大量同种放射性原子核的统计衰变；若题目给的是质量、物质的量或活度，比例变化仍可按半衰期处理；不要把半衰期理解为“所有原子核平均寿命的一半”。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可拖动参数：初始核数 $N_{0}$、半衰期 `T`、经过时间 `t`；也可以直接拖动画面中的时间游标。实时变化：剩余核数 `N`、剩余比例、已衰变比例、随机衰变点阵、图像位置和数据记录。

**证据任务。**
- 把时间调到 `T`：看剩余量是否约为 $N_{0}/2$。
- 把时间调到 `2T`：看剩余量是否约为 $N_{0}/4$。
- 改变 `T`：看半衰期越长，同样时间内衰变是否越少。
- 改变 $N_{0}$：看剩余比例不变，但剩余核数随初始量改变。
- 点击“播放”：看单个核衰变带有随机性，但大量核的统计比例接近指数规律。

#### 规律、证据与核心概念
半衰期 `T` 是放射性原子核数减少到原来一半所需的时间。若经过 `n` 个半衰期：

```text
N = N0(1/2)^n
n = t/T
```

所以：

```text
N = N0(1/2)^(t/T)
```

它是大量原子核的统计规律，单个原子核的衰变时刻具有随机性。

**概念辨析。**
- 半衰期由原子核本身决定，一般不受温度、压强、化学状态影响。
- 半衰期不是全部衰变完所需时间，而是剩余量减半所需时间。
- 每过一个半衰期，剩余量乘以 `1/2`，不是减去同一个固定数量。
- 活度随未衰变核数减少而减小。
- 半衰期适合描述大量放射性核的统计行为。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 初始格点总数 | $N_{0}$ | 初始量 | 衰变前未衰变核数 |
| 时间滑块 | `t` | $n=t/T$ | 已经过多少个半衰期 |
| 半衰期滑块 | `T` | $N=N_{0}(1/2)^(t/T)$ | 控制衰变快慢 |
| 亮色剩余格点 | `N` | 剩余量 | 未衰变核数 |
| 曲线上的点 | `(t,N)` | 指数衰减曲线 | 把读数和图像对应 |
| 时间游标 | 测量时刻 | 曲线读数 | 拖到 `T、2T、3T` 做比例检查 |

**适用边界。**
- 半衰期公式适用于大量同种放射性原子核的统计衰变。
- 若题目给的是质量、物质的量或活度，比例变化仍可按半衰期处理。
- 不要把半衰期理解为“所有原子核平均寿命的一半”。
- 普通物理条件通常不能显著改变半衰期。
- 连续衰变链问题要逐步处理每一次衰变或按题目模型处理。

#### 应用与迁移
- 计算题：给 $N_{0}、T、t$ 求剩余量或剩余比例。
- 图像题：从衰减曲线读半衰期。
- 概念题：判断半衰期是否受外界条件影响。
- 测年题：由剩余比例倒推经过时间。

**解题路径。**
1. 找到初始量 $N_{0}$ 或初始比例。
2. 找半衰期 `T` 和经过时间 `t`。
3. 计算经过了几个半衰期 $n=t/T$。
4. 用 $N=N_{0}(1/2)^n$。
5. 若问已衰变量，用 $N_{0}-N$。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “两个半衰期后剩余 0” | 每次减半，不是减完 | 剩余 `1/4` |
| “半衰期由样品多少决定” | 半衰期由核素决定 | 样品多只改总数 |
| “升温能明显改变半衰期” | 核衰变通常不受普通外界条件影响 | 看核自身 |
| “每个核到 T 时必衰变” | 单个核随机，整体统计减半 | 大量统计规律 |
| “已衰变比例等于剩余比例” | 已衰变量是 $N_{0}-N$ | 分清剩余和衰变 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-26）

<h4 id="nuclear-reaction">X3-27 核反应 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-27
- 模块：选择性必修3
- 主题：核反应方程、人工转变和守恒关系
- 高考功能：核反应方程配平 / 未知粒子判断 / 衰变与核反应辨析
- 前置知识：原子核结构、放射性衰变、质量数与电荷数守恒
- 后续应用：核能、结合能与质量亏损、裂变和聚变

#### 情境与现象
用 α 粒子轰击氮原子核，可以产生氧原子核和质子。这个过程不是核外电子重排，而是原子核发生了转变。核反应题最重要的动作，是把反应前后所有核素和粒子的左上角质量数、左下角电荷数分别相加，保证两边守恒。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <defs>
    <marker id="nrArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <circle cx="86" cy="126" r="28" fill="#e03131"></circle>
  <text x="86" y="132" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">α</text>
  <path d="M120 126 L210 126" stroke="#e03131" stroke-width="4" marker-end="url(#nrArrow)"></path>
  <circle cx="260" cy="126" r="48" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></circle>
  <text x="260" y="122" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">靶核</text>
  <text x="260" y="148" font-size="14" fill="#486581" text-anchor="middle">¹⁴₇N</text>
  <path d="M314 126 L400 126" stroke="#334e68" stroke-width="4" marker-end="url(#nrArrow)"></path>
  <circle cx="470" cy="104" r="42" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></circle>
  <text x="470" y="110" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">¹⁷₈O</text>
  <circle cx="540" cy="166" r="24" fill="#e03131"></circle>
  <text x="540" y="172" font-size="15" fill="#fff" text-anchor="middle" font-weight="700">¹₁p</text>
  <text x="350" y="224" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H：质量数与电荷数两边都相等</text>
</svg>

**动态表征。**
动画把入射粒子、靶核、产物核和未知粒子放在同一座反应实验台中。拖动未知粒子卡片或调节 `A/Z` 猜测，可以看到反应装置、质量数账本、电荷数账本、差值图像和数据记录同步变化。

**交互探究。**
<iframe src="anim/xb3/nuclear-reaction.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：反应模板、未知粒子位置、未知粒子的 `A` 和 `Z`；也可以直接拖动画面里的未知粒子卡片。实时变化：方程、左右质量数、电荷数、未知粒子判断、守恒差值图像、反应类型说明和数据记录。

**证据任务。**
- 切换反应模板：看左右两边 `A` 总和是否相等。
- 再看左右两边 `Z` 总和是否相等。
- 拖动未知粒子卡片或调节 `A/Z`：看如何由守恒反推未知粒子的 `A` 和 `Z`，并让差值图像回到 0。
- 点击“记录”：保存一次配平结果，比较哪些猜测只守恒了质量数、哪些两张账都守恒。
- 对照衰变：理解核反应通常有入射粒子或核碰撞，衰变是原子核自发变化。

#### 规律、证据与核心概念
核反应中，核素种类可以改变，但基本守恒关系必须满足：




> **公式首次使用卡**：适用边界——本页核反应配平只使用质量数和电荷数守恒，动量能量细节放到后续专题；质量数守恒不等于静止质量完全相等，核反应能量与质量亏损有关；未知粒子识别要用 A、Z 两个数共同判断。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
反应前质量数总和 = 反应后质量数总和
反应前电荷数总和 = 反应后电荷数总和
```

例如：

```text
14_7N + 4_2He → 17_8O + 1_1H
```

左边质量数 $14+4=18$，右边 $17+1=18$；左边电荷数 $7+2=9$，右边 $8+1=9$，所以方程配平。

**概念辨析。**
- 核反应是原子核之间或粒子与原子核之间发生的转变。
- 核反应会改变核素，不是普通化学反应。
- 配平方程时，质量数和电荷数必须分别守恒。
- 质子可写作 $^{1}_{1}H$ 或 $^{1}_{1}p$，中子写作 $^{1}_{0}n$，电子写作 $^{0}_{-1}e$。
- 核反应中的能量变化来自核能，后续用质量亏损和结合能解释。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 每个核素左上角 | `A` | $ΣA_{\text{左}}=ΣA_{\text{右}}$ | 质量数守恒 |
| 每个核素左下角 | `Z` | $ΣZ_{\text{左}}=ΣZ_{\text{右}}$ | 电荷数守恒 |
| 入射粒子 | `a` | 参与反应 | 区分核反应和自发衰变 |
| 未知粒子 | `x` | 由守恒求 `A、Z` | 先算上标，再算下标 |
| 能量提示 | `Q` | 反应能 | 质量亏损对应能量释放或吸收 |
| 差值图像 | $\Delta A、\Delta Z$ | $\Delta A=0、\Delta Z=0$ | 两张账都归零才配平 |

**适用边界。**
- 本页核反应配平只使用质量数和电荷数守恒，动量能量细节放到后续专题。
- 质量数守恒不等于静止质量完全相等，核反应能量与质量亏损有关。
- 未知粒子识别要用 `A、Z` 两个数共同判断。
- 化学反应不改变原子核，核反应才改变核素。
- 连续核反应要逐步配平，不要跳步猜最终粒子。

#### 应用与迁移
- 配平题：补出未知核素或粒子。
- 判断题：区分核反应、衰变和化学反应。
- 识别题：由 `A、Z` 判断未知粒子名称。
- 综合题：结合质量亏损判断反应能。

**解题路径。**
1. 把方程中已知粒子的 `A` 和 `Z` 写在对应位置。
2. 分别求左边 `ΣA、ΣZ`。
3. 分别求右边已知项 `ΣA、ΣZ`。
4. 用差值求未知粒子的 `A、Z`。
5. 根据 `A、Z` 判断粒子或核素。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “只配平质量数即可” | 电荷数也必须守恒 | `A、Z` 都检查 |
| “核反应就是化学反应” | 核反应改变原子核 | 看核素是否改变 |
| “中子电荷数是 1” | 中子不带电 | $^{1}_{0}n$ |
| “电子质量数是 1” | β 电子质量数记 0 | $^{0}_{-1}e$ |
| “质量数守恒说明没有能量变化” | 静止质量可亏损 | 后续用 $E=mc^{2}$ |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-27）

<h4 id="nuclear-energy">X3-28 核能 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: stse-extension; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-28
- 模块：选择性必修3
- 主题：核能、质能方程与核反应能量



> **公式首次使用卡**：适用边界——质能关系中的质量差必须取反应前后各粒子总静止质量之差；使用每原子质量单位对应 931.5 MeV 的换算时质量单位必须是 u；正质量亏损对应释放能量。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 高考功能：核能来源判断 / $E=mc^{2}$ 计算 / 裂变聚变能量比较
- 前置知识：核反应、质量数守恒、电荷数守恒、能量守恒
- 后续应用：结合能与质量亏损、核裂变、核聚变

#### 技术与社会情境
少量核燃料释放的能量远大于同质量化学燃料。原因不是“质量数不守恒”，而是核反应前后原子核和粒子的静止质量可以有微小差别。若反应后总静止质量小于反应前，减少的质量以能量形式释放出来。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <defs>
    <marker id="neArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <rect x="48" y="74" width="170" height="92" rx="8" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></rect>
  <text x="133" y="106" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">反应前</text>
  <text x="133" y="136" font-size="14" fill="#486581" text-anchor="middle">总静止质量 m前</text>
  <path d="M234 120 L316 120" stroke="#e03131" stroke-width="4" marker-end="url(#neArrow)"></path>
  <rect x="334" y="74" width="170" height="92" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></rect>
  <text x="419" y="106" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">反应后</text>
  <text x="419" y="136" font-size="14" fill="#486581" text-anchor="middle">总静止质量 m后</text>
  <path d="M506 80 C558 48 606 54 642 92" fill="none" stroke="#f0a500" stroke-width="4" marker-end="url(#neArrow)"></path>
  <path d="M506 128 C562 132 600 162 640 198" fill="none" stroke="#e03131" stroke-width="4" marker-end="url(#neArrow)"></path>
  <text x="604" y="72" font-size="15" fill="#f0a500">光、热、动能</text>
  <text x="596" y="210" font-size="15" fill="#e03131">释放核能</text>
  <text x="350" y="220" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">ΔE = Δmc²，若 Δm=m前-m后>0，则释放能量</text>
</svg>

**动态表征。**
动画把反应前质量、反应后质量、质量亏损和释放能量做成同一条能量账本。拖动质量亏损和反应次数，可以看到每次反应释放的 MeV 能量和总能量同步变化。

**交互探究。**
<iframe src="anim/xb3/nuclear-energy.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：质量亏损 $\Delta m$、反应次数、反应类型。实时变化：单次能量、总能量、质量转化比例和能量流向。

**证据任务。**
- 增大 $\Delta m$：看释放能量是否按比例增大。
- 把反应次数调大：看总能量随次数累加。
- 切换裂变/聚变：看核能来源都可以用质能方程描述。
- 对照读数：理解质量数守恒和静止质量亏损不是同一件事。

#### 核心物理机制与证据
爱因斯坦质能方程表明质量和能量等价：

```text
E = mc²
ΔE = Δmc²
```

核反应中，若反应前后静止质量差为 $\Delta m=m_{\text{前}}-m_{\text{后}}$，且 $\Delta m>0$，则释放能量：

```text
E释放 = Δmc²
```

核物理中常用：

```text
1 u c² ≈ 931.5 MeV
```

所以很小的质量亏损也能对应很大的能量。

**概念辨析。**
- 核能来自原子核结构变化，不是电子层化学反应。
- 质量数守恒表示核子数守恒，不表示静止质量没有变化。
- 裂变和聚变都可能释放核能，关键看反应前后总静止质量差。
- 释放能量常表现为产物粒子动能、光子能量和热能。
- 核能计算要注意单位：`kg` 配 $c^{2}$ 得焦耳，`u` 配 `931.5 MeV` 得兆电子伏。

#### 定量关系、变量、单位与边界
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 质量亏损滑块 | $\Delta m$ | $E=\Delta mc^{2}$ | 决定单次释放能量 |
| 反应类型 | 裂变/聚变 | 核反应能 | 核结构改变释放能量 |
| 单次能量读数 | $E_{1}$ | $E_{1}=\Delta m\times 931.5\ \mathrm{MeV}$ | 用 `u` 计算核能 |
| 反应次数滑块 | `N` | $E_{\text{总}}=N E_{1}$ | 大量反应能量累加 |
| 能量箭头 | 光、热、动能 | 能量转化 | 静止质量差转为其他能量 |

**适用边界。**
- 用 $E=\Delta mc^{2}$ 时，$\Delta m$ 必须是反应前后总静止质量差。
- 用 `931.5 MeV` 时，质量单位是 `u`。
- 释放能量要求 $m_{\text{前}}>m_{\text{后}}$；若 $m_{\text{前}}<m_{\text{后}}$，反应需要吸收能量。
- 核电站释放的是核能，但最终常通过热能推动汽轮机发电。
- 核能大小还要结合反应是否可控、是否链式进行和工程条件。

#### 系统影响与权衡
- 计算题：由质量亏损求释放能量。
- 判断题：区分质量数守恒和质量亏损。
- 概念题：判断裂变、聚变、化学反应的能量来源。
- 综合题：由单次反应能量和反应次数求总能量。

**解题路径。**
1. 找出反应前总静止质量 $m_{\text{前}}$ 和反应后总静止质量 $m_{\text{后}}$。
2. 计算质量亏损 $\Delta m=m_{\text{前}}-m_{\text{后}}$。
3. 判断 $\Delta m$ 正负，正值释放能量，负值吸收能量。
4. 若用 SI 单位，代入 $E=\Delta mc^{2}$。
5. 若用原子质量单位，代入 $E=\Delta m\times 931.5\ \mathrm{MeV}$。

#### 证据限制与常见误区
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “质量数守恒所以没有质量亏损” | 质量数不是精确质量 | 区分核子数和静止质量 |
| “核能来自燃烧” | 燃烧是化学反应 | 核能来自原子核变化 |
| “只有裂变能放能” | 聚变也能释放核能 | 看质量亏损 |
| “Δm 用 g 可直接乘 931.5” | 931.5 对应单位 u | 单位必须匹配 |
| “释放能量就是凭空产生” | 质量减少等价为能量增加 | 质能守恒 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-28）

<h4 id="binding-energy-mass-defect">X3-29 结合能与质量亏损 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-29
- 模块：选择性必修3
- 主题：质量亏损、结合能、平均结合能
- 高考功能：结合能计算 / 稳定性判断 / 裂变聚变能量来源解释
- 前置知识：核能、质能方程、原子核结构
- 后续应用：核裂变、核聚变、核能释放条件

#### 情境与现象
把若干个自由质子和中子结合成一个原子核后，原子核的静止质量小于这些自由核子静止质量之和。少掉的质量不是消失了，而是以能量形式释放出来。若要把这个原子核完全拆散成自由核子，就至少要补回同样多的能量，这个能量叫结合能。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <defs>
    <marker id="beArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <circle cx="70" cy="100" r="13" fill="#e03131"></circle><circle cx="110" cy="100" r="13" fill="#2c7be5"></circle>
  <circle cx="90" cy="140" r="13" fill="#e03131"></circle><circle cx="132" cy="140" r="13" fill="#2c7be5"></circle>
  <text x="104" y="190" font-size="13" fill="#486581" text-anchor="middle">自由核子质量和</text>
  <text x="104" y="212" font-size="13" fill="#486581" text-anchor="middle">Zmp + Nmn</text>
  <path d="M172 122 L280 122" stroke="#e03131" stroke-width="4" marker-end="url(#beArrow)"></path>
  <text x="226" y="98" font-size="14" fill="#e03131" text-anchor="middle">结合成核，释放能量</text>
  <circle cx="350" cy="122" r="58" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></circle>
  <circle cx="332" cy="106" r="14" fill="#e03131"></circle><circle cx="366" cy="106" r="14" fill="#2c7be5"></circle>
  <circle cx="346" cy="138" r="14" fill="#e03131"></circle><circle cx="382" cy="138" r="14" fill="#2c7be5"></circle>
  <text x="350" y="210" font-size="13" fill="#486581" text-anchor="middle">原子核质量 m核 更小</text>
  <rect x="470" y="64" width="190" height="116" rx="8" fill="#eef4ff" stroke="#2c7be5"></rect>
  <text x="565" y="98" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">质量亏损</text>
  <text x="565" y="128" font-size="15" fill="#486581" text-anchor="middle">Δm = Zmp + Nmn - m核</text>
  <text x="565" y="158" font-size="15" fill="#486581" text-anchor="middle">Eb = Δmc²</text>
  <text x="350" y="236" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">平均结合能 Eb/A 越大，通常表示原子核越稳定</text>
</svg>

**动态表征。**
动画把核子模型、结合能曲线、质量亏损仪表和平均结合能比较放在同一座实验台中。拖动结合能曲线上的探针，可以看到总结合能、平均结合能、质量亏损和稳定性提示同步变化。

**交互探究。**
<iframe src="anim/xb3/binding-energy.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：核子数 `A`、总结合能 `Eb`、对比核的平均结合能；也可以直接拖动画面中的结合能曲线探针。实时变化：平均结合能、质量亏损、稳定性比较、能量账本和数据记录。

**证据任务。**
- 增大总结合能：看质量亏损是否增大。
- 固定总结合能、增大 `A`：看平均结合能是否变小。
- 比较两个核的 `Eb/A`：看平均结合能大的核是否更稳定。
- 拖动曲线探针：看不同 `A` 的平均结合能读数如何变化。
- 对照 X3-28：理解核能释放来自反应后总结合能更大、总静止质量更小。

#### 规律、证据与核心概念
自由核子结合成原子核时，总静止质量减少：




> **公式首次使用卡**：适用边界——比较稳定性时优先比较平均结合能，而不是只比较总结合能；结合能越大表示核子结合越紧，但不同 A 的核要看 Eb/A；用 931.5 MeV 时质量亏损单位必须是 u。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
Δm = Zmp + Nmn - m核
```

这部分质量对应的能量为结合能：

```text
Eb = Δmc²
```

如果用原子质量单位：

```text
Eb(MeV) = Δm(u) × 931.5
```

为了比较不同大小原子核的稳定性，常用平均结合能：

```text
平均结合能 = Eb/A
```

**概念辨析。**
- 结合能是把原子核完全拆成自由核子所需的最小能量。
- 结合能越大不一定表示更稳定，因为大核核子数也多。
- 比较不同原子核稳定性时，通常看平均结合能 `Eb/A`。
- 质量亏损不是质量数亏损，质量数仍表示核子数。
- 裂变和聚变释放能量，本质上都与产物平均结合能更大有关。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 自由核子 | `Zmp+Nmn` | 反应前质量和 | 未结合时的总质量 |
| 原子核 | $m_{\text{核}}$ | 结合后质量 | 小于自由核子质量和 |
| 质量亏损读数 | $\Delta m$ | $\Delta m=Zmp+Nmn-m_{\text{核}}$ | 对应释放或需要补回的质量差 |
| 结合能读数 | `Eb` | $Eb=\Delta mc^{2}$ | 拆核所需能量 |
| 平均结合能 | `Eb/A` | 稳定性指标 | 常用于比较核稳定性 |
| 曲线探针 | `A、Eb/A` | 平均结合能曲线 | 找更稳定区域 |

**适用边界。**
- 比较稳定性时优先比较平均结合能，而不是只比较总结合能。
- 结合能越大表示核子结合越紧，但不同 `A` 的核要看 `Eb/A`。
- 用 `931.5 MeV` 时质量亏损单位必须是 `u`。
- 质量亏损是精确质量差，不是核素符号上标的整数差。
- 核能释放通常对应产物总结合能增加。

#### 应用与迁移
- 计算题：由质量亏损求结合能。
- 比较题：由平均结合能判断稳定性。
- 概念题：区分结合能、平均结合能、核能释放。
- 综合题：解释裂变或聚变为什么能放能。

**解题路径。**
1. 明确题目要求总结合能还是平均结合能。
2. 若给质量亏损，用 $Eb=\Delta m\times 931.5\ \mathrm{MeV}$。
3. 若给总结合能和质量数，用 `Eb/A`。
4. 比较稳定性时比较 `Eb/A`。
5. 判断放能时，看反应后总结合能是否增加。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “总结合能大就一定更稳定” | 大核总结合能自然大 | 比较 `Eb/A` |
| “质量亏损就是质量数减少” | 质量数仍守恒 | 看精确静止质量 |
| “结合能是原子核已经拥有的动能” | 结合能是拆开所需能量 | 与核子结合强弱有关 |
| “平均结合能单位是 MeV” | 应为每个核子的能量 | 常写 MeV/核子 |
| “放能一定来自总结合能减小” | 放能对应产物更稳定，总结合能增加 | 看结合能账 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-29）

<h4 id="nuclear-fission">X3-30 核裂变 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-30
- 模块：选择性必修3
- 主题：重核裂变、链式反应和核电站基本原理
- 高考功能：裂变方程识别 / 链式反应理解 / 可控与不可控裂变辨析
- 前置知识：核反应、核能、结合能与质量亏损
- 后续应用：核电、核安全、能源综合题

#### 情境与现象
铀-235 吸收一个慢中子后可能变得不稳定，裂成两个中等质量的原子核，同时放出 2 到 3 个中子并释放大量能量。如果这些中子继续打中其他铀核，就会引发更多裂变，这就是链式反应。核电站的核心不是“让裂变随便爆发”，而是用控制棒和慢化剂让链式反应稳定可控。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <defs>
    <marker id="fisArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <circle cx="72" cy="126" r="10" fill="#2c7be5"></circle>
  <text x="72" y="106" font-size="13" fill="#486581" text-anchor="middle">慢中子</text>
  <path d="M92 126 L172 126" stroke="#2c7be5" stroke-width="4" marker-end="url(#fisArrow)"></path>
  <circle cx="238" cy="126" r="54" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></circle>
  <text x="238" y="132" font-size="17" fill="#102a43" text-anchor="middle" font-weight="700">²³⁵U</text>
  <path d="M296 126 L382 126" stroke="#e03131" stroke-width="4" marker-end="url(#fisArrow)"></path>
  <circle cx="454" cy="94" r="38" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></circle>
  <circle cx="454" cy="160" r="38" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></circle>
  <text x="454" y="99" font-size="14" fill="#102a43" text-anchor="middle" font-weight="700">碎片1</text>
  <text x="454" y="165" font-size="14" fill="#102a43" text-anchor="middle" font-weight="700">碎片2</text>
  <path d="M494 112 L620 70" stroke="#2c7be5" stroke-width="3" marker-end="url(#fisArrow)"></path>
  <path d="M494 126 L630 126" stroke="#2c7be5" stroke-width="3" marker-end="url(#fisArrow)"></path>
  <path d="M494 146 L620 188" stroke="#2c7be5" stroke-width="3" marker-end="url(#fisArrow)"></path>
  <text x="614" y="50" font-size="13" fill="#486581">新中子</text>
  <text x="350" y="224" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">重核裂变：重核 + 中子 → 两个中等质量核 + 若干中子 + 能量</text>
</svg>

**动态表征。**
动画显示中子打中重核、重核裂成两个碎片并释放新中子。拖动画面里的控制棒可以改变中子吸收比例；点“播放”后会看到裂变逐代传递，并在代数图像和数据记录中判断链式反应是增长、稳定还是衰减。

**交互探究。**
<iframe src="anim/xb3/nuclear-fission.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——链式反应需要足够多可裂变材料和合适几何条件；核电站追求可控链式反应，不是失控爆炸；控制棒吸收中子，慢化剂降低中子速度，二者作用不同。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动红色控制棒改变吸收比例，也可调节每次裂变释放的中子数和最大代数。画面同时显示反应堆俯视、控制棒侧视、代数图像和数据记录，把 $k=\text{每次产生中子数}\times (1-\text{吸收率})$、$E=\Delta mc^{2}$ 与链式反应状态绑定。

**证据任务。**
- 提高每次释放中子数：看链式反应是否更容易增长。
- 拖深控制棒、提高吸收比例：看有效中子数是否减少。
- 点“播放”：看裂变不是一个静态数量，而是按代数逐步传递。
- 调到有效增殖系数约为 1：看反应是否稳定。
- 对照核电站：理解可控裂变要让链式反应不过快也不熄灭。

#### 规律、证据与核心概念
核裂变释放能量，是因为重核裂成中等质量核后，产物平均结合能更大，总静止质量更小。链式反应的关键是中子增殖：

```text
k = 每次裂变产生的有效中子数
```

若 $k>1$，反应增长；若 $k=1$，反应稳定；若 $k<1$，反应逐渐熄灭。

**概念辨析。**
- 裂变通常指重核分裂成两个中等质量核并释放能量。
- 慢中子更容易使铀-235 发生裂变。
- 链式反应来自裂变释放的新中子继续引发裂变。
- 控制棒吸收中子，用来调节反应速率。
- 核电站把裂变释放的能量转化为热，再通过汽轮机发电。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 入射中子 | 慢中子 | 诱发裂变 | 触发铀-235 裂变 |
| 裂变碎片 | 产物核 | 结合能增加 | 释放核能 |
| 新中子箭头 | 中子数 | 链式反应 | 引发下一代裂变 |
| 控制棒滑块 | 吸收比例 | 有效中子减少 | 调节 `k` |
| 增殖系数读数 | `k` | $k>1、=1、<1$ | 判断增长、稳定、衰减 |

**适用边界。**
- 链式反应需要足够多可裂变材料和合适几何条件。
- 核电站追求可控链式反应，不是失控爆炸。
- 控制棒吸收中子，慢化剂降低中子速度，二者作用不同。
- 裂变方程仍要满足质量数和电荷数守恒。
- 本页动画是趋势模型，不代替真实反应堆工程计算。

#### 应用与迁移
- 方程题：识别裂变反应和配平未知粒子。
- 概念题：判断链式反应、慢中子、控制棒作用。
- 能量题：用质量亏损或结合能解释裂变放能。
- 综合题：比较可控裂变与不可控链式反应。

**解题路径。**
1. 判断是否为重核分裂成中等质量核。
2. 检查是否有中子诱发和新中子产生。
3. 用质量数、电荷数守恒配平方程。
4. 用结合能或质量亏损解释能量来源。
5. 涉及反应堆时，区分控制棒吸收中子和慢化剂减速中子。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “裂变就是化学燃烧” | 裂变改变原子核 | 核反应 |
| “控制棒让中子变慢” | 控制棒主要吸收中子 | 慢化剂减速 |
| “链式反应一定失控” | $k=1$ 可稳定 | 核电站控制 `k` |
| “裂变不需要守恒方程” | 仍是核反应 | `A、Z` 都守恒 |
| “裂变产物质量更大所以放能” | 放能对应反应后总静止质量更小 | 看质量亏损 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-30）

<h4 id="nuclear-fusion">X3-31 核聚变 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-31
- 模块：选择性必修3
- 主题：轻核聚变、太阳能量来源和受控聚变
- 高考功能：聚变方程识别 / 放能原因解释 / 聚变条件判断
- 前置知识：核反应、核能、结合能、核裂变
- 后续应用：能源综合、恒星能量、粒子物理初步

#### 情境与现象
太阳能量主要来自轻核聚变：轻原子核在极高温高压条件下克服电斥力，结合成较重的原子核，并释放巨大能量。常见模型是氘核和氚核聚变生成氦核和中子：

```text
²₁H + ³₁H → ⁴₂He + ¹₀n + 能量
```

聚变不是“两个普通原子粘在一起”，而是原子核靠得足够近后发生核反应。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <defs>
    <marker id="fuArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"></path></marker>
  </defs>
  <circle cx="104" cy="126" r="32" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></circle>
  <text x="104" y="132" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">²H</text>
  <circle cx="214" cy="126" r="36" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></circle>
  <text x="214" y="132" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">³H</text>
  <path d="M138 126 L176 126" stroke="#e03131" stroke-width="4" marker-end="url(#fuArrow)"></path>
  <path d="M250 126 L330 126" stroke="#e03131" stroke-width="4" marker-end="url(#fuArrow)"></path>
  <circle cx="404" cy="126" r="48" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></circle>
  <text x="404" y="132" font-size="16" fill="#102a43" text-anchor="middle" font-weight="700">⁴He</text>
  <circle cx="520" cy="88" r="13" fill="#2c7be5"></circle>
  <text x="520" y="68" font-size="13" fill="#486581" text-anchor="middle">n</text>
  <path d="M446 106 L506 90" stroke="#2c7be5" stroke-width="3" marker-end="url(#fuArrow)"></path>
  <path d="M446 142 C500 174 558 176 620 146" fill="none" stroke="#f0a500" stroke-width="4" marker-end="url(#fuArrow)"></path>
  <text x="588" y="132" font-size="14" fill="#f0a500">能量</text>
  <text x="350" y="224" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">轻核聚变：轻核结合成较重核，产物平均结合能更大，释放能量</text>
</svg>

**动态表征。**
动画显示两个带正电轻核从远处靠近。拖动画面里的轻核可以直接改变接近距离；点“播放”后可看到高温热运动推动轻核碰撞，并用约束侧视、能垒图像和能量读数判断聚变条件是否充分。

**交互探究。**
<iframe src="anim/xb3/nuclear-fusion.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——聚变反应需要轻核在极高温度下靠近到核力作用范围；高温不是为了“点燃燃料”那么简单，而是为了克服库仑斥力；受控聚变需要温度、密度和约束时间共同满足条件。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可操作内容：直接拖动氘核或氚核改变接近距离，也可调节温度、约束强度和反应次数。画面同时显示粒子轨迹俯视、约束侧视、能垒图像和数据记录，把 $^{2}H+^{3}H\to ^{4}He+n+17.6\ \mathrm{MeV}$、$E=\Delta mc^{2}$ 与聚变概率绑定。

**证据任务。**
- 拖动两个轻核：看距离变小时，只有温度和约束足够时才可能越过电斥能垒。
- 点“播放”：看高温热运动如何推动轻核反复接近并发生聚变。
- 提高温度：看轻核是否更容易克服电斥力靠近。
- 提高约束强度：看粒子停留时间和反应概率是否提高。
- 增加反应次数：看总能量如何累加。
- 对照裂变：理解聚变和裂变都可放能，但反应对象和条件不同。

#### 规律、证据与核心概念
轻核都带正电，靠近时受到库仑斥力；只有在高温下核具有足够大的动能，并且被足够长时间约束，才可能靠近到核力起作用的范围。聚变放能来自产物平均结合能增加：

```text
²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV
```

反应前后质量数和电荷数守恒，同时反应后总静止质量略小，质量亏损转化为能量。

**概念辨析。**
- 聚变是轻原子核结合成较重原子核的核反应。
- 聚变需要高温，使轻核具有足够动能克服电斥力。
- 受控聚变还需要足够约束，让粒子有足够机会发生反应。
- 太阳和恒星能量主要来自核聚变。
- 聚变放能可用质量亏损或结合能增加解释。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| 两个轻核 | $^{2}H、^{3}H$ | 聚变反应物 | 带正电，彼此排斥 |
| 温度滑块 | 热运动动能 | 高温条件 | 温度越高越易靠近 |
| 约束滑块 | 约束时间/密度 | 反应概率 | 提高聚变机会 |
| 产物核和中子 | $^{4}He、^{1}n$ | 守恒方程 | `A、Z` 守恒 |
| 能量读数 | `17.6 MeV` | 质量亏损 | 单次 D-T 聚变释放能量 |

**适用边界。**
- 聚变反应需要轻核在极高温度下靠近到核力作用范围。
- 高温不是为了“点燃燃料”那么简单，而是为了克服库仑斥力。
- 受控聚变需要温度、密度和约束时间共同满足条件。
- 聚变方程仍必须满足质量数和电荷数守恒。
- 本页用 D-T 聚变作为高考常见模型，不展开完整恒星核反应链。

#### 应用与迁移
- 方程题：配平 D-T 聚变方程。
- 概念题：判断太阳能量来源和聚变条件。
- 比较题：比较裂变和聚变的反应对象、条件和放能原因。
- 能量题：由单次聚变能量和反应次数求总能量。

**解题路径。**
1. 先判断是否为轻核结合成较重核。
2. 写出反应方程并检查 `A、Z` 守恒。
3. 解释条件时抓高温和约束。
4. 解释放能时抓平均结合能增加或质量亏损。
5. 求总能量时用单次能量乘反应次数。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “聚变是重核裂开” | 那是裂变 | 聚变是轻核结合 |
| “高温只是让反应快一点” | 高温帮助克服库仑斥力 | 看正电核排斥 |
| “聚变不满足守恒” | 仍是核反应 | `A、Z` 都守恒 |
| “太阳靠燃烧煤发光” | 太阳主要靠核聚变 | 恒星核反应 |
| “聚变必然已经工程可控” | 受控聚变工程很难 | 需高温和约束 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-31）

<h4 id="particle-physics-intro">X3-32 粒子物理初步 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：X3-32
- 模块：选择性必修3
- 主题：基本粒子、夸克、轻子和相互作用初步
- 高考功能：粒子分类辨析 / 守恒观念 / 近代物理综合理解
- 前置知识：原子核结构、核反应、放射性衰变
- 后续应用：大学物理和现代物理科普拓展

#### 情境与现象
质子、中子曾经被看作基本粒子，但进一步研究发现它们还可以由更小的夸克组成。电子属于轻子，目前看作基本粒子。粒子物理初步不是要求学生背完整“粒子大全”，而是建立一个清晰框架：哪些粒子是复合粒子，哪些粒子更基本；粒子反应中哪些量需要守恒。

**静态表征。**
<svg viewBox="0 0 700 250" width="100%" style="max-width:880px">
  <rect x="48" y="48" width="170" height="146" rx="8" fill="#eef4ff" stroke="#2c7be5" stroke-width="2"></rect>
  <text x="133" y="80" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">轻子</text>
  <text x="133" y="116" font-size="15" fill="#486581" text-anchor="middle">电子 e</text>
  <text x="133" y="146" font-size="15" fill="#486581" text-anchor="middle">中微子 ν</text>
  <text x="133" y="176" font-size="13" fill="#486581" text-anchor="middle">目前看作基本粒子</text>
  <rect x="266" y="48" width="170" height="146" rx="8" fill="#fff7e6" stroke="#f0a500" stroke-width="2"></rect>
  <text x="351" y="80" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">夸克</text>
  <text x="351" y="116" font-size="15" fill="#486581" text-anchor="middle">u、d 等</text>
  <text x="351" y="146" font-size="15" fill="#486581" text-anchor="middle">带分数电荷</text>
  <text x="351" y="176" font-size="13" fill="#486581" text-anchor="middle">组成强子</text>
  <rect x="484" y="48" width="170" height="146" rx="8" fill="#f8f0ff" stroke="#7b2cbf" stroke-width="2"></rect>
  <text x="569" y="80" font-size="18" fill="#102a43" text-anchor="middle" font-weight="700">强子</text>
  <text x="569" y="116" font-size="15" fill="#486581" text-anchor="middle">质子 p = uud</text>
  <text x="569" y="146" font-size="15" fill="#486581" text-anchor="middle">中子 n = udd</text>
  <text x="569" y="176" font-size="13" fill="#486581" text-anchor="middle">由夸克组成的复合粒子</text>
  <text x="350" y="226" font-size="15" fill="#102a43" text-anchor="middle" font-weight="700">粒子反应仍要遵守电荷、能量、动量等守恒思想</text>
</svg>

**动态表征。**
动画把电子、质子、中子、夸克和中微子放进探测器实验台。拖动粒子卡进入反应室，可以看到轨迹弯曲、分类面板、夸克组成、电荷表和守恒差值图像同步变化。

**交互探究。**
<iframe src="anim/xb3/particle-physics.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：粒子类型、反粒子开关、反应室目标电荷；也可以直接拖动画面里的粒子卡。实时变化：分类、电荷、组成、探测轨迹、守恒差值、状态判断和数据记录。

**证据任务。**
- 切换电子、质子、中子、夸克：看哪些是基本粒子，哪些是复合粒子。
- 打开反粒子：看电荷是否变为相反数。



> **公式首次使用卡**：适用边界——高中阶段只要求粒子物理初步认识，不要求完整标准模型计算；夸克自由电荷是分数电荷，但通常不能单独作为自由粒子被直接取出；判断粒子反应时，优先检查电荷守恒和能量动量守恒。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 查看质子和中子组成：理解 $p=uud$、$n=udd$。
- 拖动粒子卡进入反应室：看电荷守恒差值是否归零，判断这个反应通道是否成立。
- 对照核反应：理解更深层粒子反应仍离不开守恒思想。

#### 规律、证据与核心概念
现代粒子物理把粒子按结构和相互作用分类。高中阶段只需建立初步框架：

```text
轻子：如电子、中微子，目前看作基本粒子
夸克：组成强子的基本成分，带分数电荷
强子：由夸克组成，如质子、中子
```

常见组成：

```text
质子 p = uud
中子 n = udd
```

电荷可以检验组成是否合理：`u` 夸克电荷 `+2/3e`，`d` 夸克电荷 `-1/3e`，所以质子总电荷 `+1e`，中子总电荷 `0`。

**概念辨析。**
- 基本粒子是目前不能再分成更小组成的粒子，不等于“永远不可分”的绝对结论。
- 质子和中子不是基本粒子，它们是由夸克组成的强子。
- 电子属于轻子，目前看作基本粒子。
- 反粒子通常质量相同、电荷相反。
- 粒子反应中仍要遵守电荷守恒、能量守恒、动量守恒等基本规律。

#### 公式、变量、单位与条件
| 画面元素 | 物理量 | 公式对应 | 含义 |
|---|---|---|---|
| u 夸克 | 电荷 `+2/3e` | 分数电荷 | 组成质子和中子 |
| d 夸克 | 电荷 `-1/3e` | 分数电荷 | 组成质子和中子 |
| 质子组成 | `uud` | $2/3+2/3-1/3=1$ | 质子带 `+e` |
| 中子组成 | `udd` | $2/3-1/3-1/3=0$ | 中子不带电 |
| 反粒子开关 | 电荷反号 | $q_{\text{反}}=-q$ | 反粒子电荷相反 |
| 守恒差值图像 | 电荷差 | $Σq_{\text{前}}=Σq_{\text{后}}$ | 差值为 0 才通过 |

**适用边界。**
- 高中阶段只要求粒子物理初步认识，不要求完整标准模型计算。
- 夸克自由电荷是分数电荷，但通常不能单独作为自由粒子被直接取出。
- 判断粒子反应时，优先检查电荷守恒和能量动量守恒。
- 反粒子不等于“负粒子”，例如中子的反粒子总电荷仍为 0。
- 粒子分类要区分“组成结构”和“所受相互作用”两个视角。

#### 应用与迁移
- 概念题：判断轻子、夸克、强子、反粒子。
- 电荷题：由夸克组成求质子或中子电荷。
- 守恒题：判断某个粒子反应是否可能。
- 综合题：把核反应、β 衰变和粒子分类联系起来。

**解题路径。**
1. 先判断粒子是基本粒子还是复合粒子。
2. 若是强子，尝试看夸克组成。
3. 用夸克电荷求总电荷。
4. 若涉及反粒子，电荷取相反数。
5. 若涉及反应，先查电荷守恒，再考虑能量动量等条件。

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “质子是基本粒子” | 质子由夸克组成 | $p=uud$ |
| “中子没有组成” | 中子也是强子 | $n=udd$ |
| “反粒子一定带负电” | 中性粒子的反粒子也可中性 | 看电荷反号 |
| “夸克电荷必须是整数” | 夸克带分数电荷 | $u=+2/3e, d=-1/3e$ |
| “粒子反应不用守恒” | 守恒仍是基本约束 | 先查电荷守恒 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-32）

<h4 id="four-fundamental-interactions">X3-39 四种基本相互作用 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 知道自然界常说的四种基本相互作用：引力、电磁、强相互作用、弱相互作用。
- 能区分它们的主要作用对象、作用范围和典型场景。
- 理解宏观天体、原子分子、原子核和衰变问题分别常由不同相互作用主导。
- 能在近代物理信息题中用“对象 + 尺度”判断相互作用。

#### 情境与现象
行星绕太阳运动主要看引力；原子中电子与原子核相互吸引主要看电磁相互作用；原子核内质子带同种电荷却能被束缚，需要强相互作用；β 衰变等过程与弱相互作用有关。不同场景的“力”不是一套话，而要看作用对象和尺度。

**交互探究。**
<iframe src="anim/xb3/fundamental-interactions.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 拖动尺度探针：从原子核尺度到宇宙尺度，观察主导作用变化。
- 对照卡片：比较作用对象和作用范围。
- 看原子核场景：理解强相互作用为什么只在很短距离内重要。
- 看 β 衰变场景：把弱相互作用和衰变联系起来。

#### 规律、证据与核心概念

```text
引力：作用于有质量物体，长程，宏观天体中明显
电磁：作用于带电粒子，长程，原子分子和电路中重要
强相互作用：束缚夸克和核子，短程，原子核内重要
弱相互作用：参与 β 衰变等过程，极短程
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-39）

<h4 id="radiation-hazards-protection">X3-38 射线危害与防护 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 比较 α、β、γ 射线的穿透能力和电离能力。
- 理解射线危害与剂量、时间、距离、屏蔽有关。
- 掌握辐射防护三原则：缩短时间、增大距离、增加屏蔽。
- 能根据射线类型选择合理屏蔽材料。

#### 情境与现象
α 射线电离能力强但穿透能力弱，一张纸或皮肤表层就能阻挡；β 射线穿透中等，常用薄铝板屏蔽；γ 射线穿透能力强，需要厚铅板或混凝土。防护题不能只说“远离射线”，还要同时考虑暴露时间、距离和屏蔽。

**交互探究。**
<iframe src="anim/xb3/radiation-protection.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 切换 α、β、γ：比较穿透和电离能力表盘。
- 拖动探测器：看距离增大后剂量下降。
- 拖动屏蔽厚度：看不同射线被削弱程度不同。
- 调暴露时间：理解时间越长，累计剂量越大。

#### 规律、证据与核心概念

```text
防护三原则：时间短、距离远、屏蔽强
粗略模型：剂量 ∝ t/d² × e^(-μx)
α：电离强，穿透弱
β：中等穿透
γ：穿透强，需厚屏蔽
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-38）

<h4 id="radioisotope-applications">X3-37 放射性同位素的应用 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 了解放射性同位素在医学示踪、工业探伤、考古测年中的应用。
- 能根据应用场景选择合适的射线类型和半衰期。
- 会用半衰期公式判断剩余比例与经历时间。
- 理解应用必须同时考虑探测效果和辐射安全。

#### 情境与现象
医学中可用少量放射性同位素作为示踪剂，观察器官代谢；工业中可用穿透能力强的射线检查焊缝内部缺陷；考古中可利用放射性核素剩余比例估算年代。它们的共同点是：放射性不是“只有危害”，关键在于选择合适核素、控制剂量并匹配应用目标。

**交互探究。**
<iframe src="anim/xb3/radioisotope-applications.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 切换医学示踪、工业探伤、考古测年：看应用目标如何变化。
- 拖动探测器：看强度随位置和屏蔽变化。
- 拖动时间手柄：看剩余比例按半衰期衰减。
- 对照场景：理解半衰期过短或过长都可能不合适。

#### 规律、证据与核心概念




> **公式首次使用卡**：适用边界——放射性活度和半衰期关系针对大量同种核素的统计衰变；单个原子核衰变时刻不可预测；医学和示踪应用必须同时考虑剂量、防护和生物清除。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
N/N0 = (1/2)^(t/T)
医学示踪：半衰期适中，剂量可控，便于探测
工业探伤：重视射线穿透能力
考古测年：重视半衰期足够长且剩余量可测
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-37）

<h4 id="capillary-phenomenon">X3-36 毛细现象 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 理解浸润和不浸润由液体与管壁相互作用决定。



> **公式首次使用卡**：适用边界——毛细上升近似要求细管均匀、液体润湿关系稳定并达到静力平衡；高度关系还取决于表面张力、接触角、液体密度和管半径。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 知道接触角小于 $90^{\circ}$ 时常出现毛细上升，大于 $90^{\circ}$ 时可出现毛细下降。
- 理解管径越小，毛细升降越明显。
- 能用表面张力、接触角和半径解释生活中的毛细现象。

#### 情境与现象
细玻璃管插入水中，管内水面会上升；插入水银中，管内液面反而下降。纸巾吸水、植物根部吸水、土壤保水，都和液体在细小缝隙中的毛细作用有关。关键不是“液体自动往上爬”，而是表面张力、浸润性和细管半径共同决定液面形状与高度。

**交互探究。**
<iframe src="anim/xb3/capillary.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 拖动管径手柄：看半径越小，液柱高度变化越明显。
- 拖动接触角手柄：看 $\theta <90^{\circ}$ 与 $\theta >90^{\circ}$ 时液面升降反向。
- 调表面张力：看表面张力越大，毛细效应越强。
- 对照 `h-r` 图像：理解 `h` 与 `r` 近似反比。

#### 规律、证据与核心概念

```text
h = 2σcosθ/(ρgr)
θ < 90°：浸润，上升
θ > 90°：不浸润，下降
r 越小，|h| 越大
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-36）

<h4 id="liquid-crystal-semiconductor-nanomaterial">X3-35 液晶、半导体与纳米材料 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 了解液晶分子取向可被外电场调控，并影响透光状态。
- 知道半导体导电性介于导体和绝缘体之间，可由温度、光照、掺杂调节。
- 理解纳米材料因尺度小、比表面积大而常表现特殊性质。
- 能在科技情境题中从“微观结构”迁移到“宏观性质”。

#### 情境与现象
液晶显示屏能通过电压控制明暗；半导体芯片能在小小的结构中完成电信号控制；纳米催化剂少量材料就能提供很大反应表面。这些并不是孤立事实，而是同一个思路：材料的宏观性质往往由微观结构、粒子排列和尺度决定。

**交互探究。**
<iframe src="anim/xb3/materials-microstructure.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 切换液晶：拖外场手柄，看分子取向和透光率变化。
- 切换半导体：调掺杂/温度，看载流子数和导电性变化。
- 切换纳米：拖尺度手柄，看尺寸越小，比表面积越大。
- 对照“性质-参数图像”：用结构变化解释宏观应用。

#### 规律、证据与核心概念

```text
液晶：分子取向可被电场调控，影响透光状态
半导体：导电性可被温度、光照、掺杂调节
纳米材料：尺寸小，比表面积大，表面效应明显
科技情境题：先找结构变化，再连到性质变化
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-35）

<h4 id="diffusion-brownian-temperature">X3-34 扩散、布朗运动与温度微观解释 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 能用分子无规则运动解释扩散现象。
- 理解布朗运动是悬浮颗粒受液体分子不平衡碰撞造成的。
- 知道温度越高，分子热运动越剧烈，扩散和布朗运动越明显。
- 能区分“布朗运动的对象是颗粒”与“分子运动本身不可直接看见”。

#### 情境与现象
一滴墨水滴入水中，即使不搅拌也会逐渐散开；显微镜下花粉小颗粒会不停抖动。这些现象不是液体整体在有方向地推动颗粒，而是大量水分子无规则运动并不断碰撞。温度升高时，分子平均动能增大，宏观上表现为扩散更快、布朗运动更明显。

**交互探究。**
<iframe src="anim/xb3/diffusion-brownian.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 拖动花粉颗粒：看轨迹如何由周围分子碰撞继续变弯。
- 调高温度：看染料扩散剖面变平更快。
- 减小花粉半径：看布朗运动是否更明显。
- 对照轨迹图：理解布朗运动是颗粒运动，不是分子本身被显微镜直接看到。

#### 规律、证据与核心概念

```text
扩散：大量分子无规则运动导致物质逐渐混合
布朗运动：悬浮颗粒受液体分子不平衡碰撞而无规则运动
温度越高，分子热运动越剧烈
颗粒越小，布朗运动越明显
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-34）

<h4 id="molecular-speed-distribution">X3-33 分子运动速率分布图像 <span class="status review">interaction passed · content pending</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 理解速率分布图像表示不同速率范围内的分子比例。
- 知道温度升高时曲线峰值降低、峰位右移、分布变宽。
- 理解归一化分布曲线下面积表示全部分子比例，面积保持不变。
- 能用图像判断气体温度高低和快慢分子比例变化。

#### 情境与现象
同一杯气体里，分子并不是都以同一速率运动，而是有快有慢。温度升高后，不是每个分子速率都同样增加，而是高速分子比例增大、分布范围变宽；因为总分子数不变，分布曲线下的总面积仍表示 100% 的分子。

**交互探究。**
<iframe src="anim/xb3/molecular-speed-distribution.html" width="100%" height="820" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 拖动画布底部的温度探针或右侧温度 `T`：看容器中箭头长短和红色快分子比例怎样变化。
- 看直方图：温度升高后高速率段的柱子整体向右展开，不是所有分子都变成同一个速率。
- 看分布曲线：当前红线与低温/高温虚线对照，核对峰值降低、峰位右移、分布变宽。
- 对照右侧的数值积分面积：它由当前曲线计算，接近 `1` 才能说明归一化后的总分子比例不变。

#### 规律、证据与核心概念




> **公式首次使用卡**：适用边界——分子速率分布是大量分子的统计规律，曲线面积表示粒子数比例并按同一温度和粒子质量比较；不能用单个分子速度解释峰值移动。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
温度越高，分子平均动能越大
升温后：峰值降低，峰位右移，分布变宽
曲线下面积 = 全部分子比例 = 1
速率为零或极大的分子都很少
```

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：X3-33）

<style>
.status { font-size: 12px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
.status.done { background: #d4edda; color: #155724; }
.status.partial { background: #fff3cd; color: #856404; }
.status.pending { background: #f8d7da; color: #721c24; }
</style>
