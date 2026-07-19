# 必修3：静电场、电路、电磁初步与能源

> **模块状态：进行中（P0-3）**
> 学生必须看到"电荷之间通过场作用""电路中能量转化与守恒""电磁场是统一的物质形态"。

## 3.1 静电场 <h3 id="electrostatic-field"></h3>

<h4 id="charge">B3-01 电荷与起电 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-01
- 模块：必修3
- 主题：静电场
- 高考功能：选择题
- 前置知识：初中摩擦起电
- 后续应用：B3-02 库仑定律、B3-03 电场强度

#### 情境与现象
用丝绸摩擦玻璃棒，玻璃棒带正电；用毛皮摩擦橡胶棒，橡胶棒带负电。同种电荷相斥，异种电荷相吸。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="20" y="50" width="120" height="40" fill="#d9e2ec" stroke="#334e68"/>
  <text x="80" y="73" font-size="11" fill="#334e68" text-anchor="middle">丝绸+玻璃棒</text>
  <circle cx="180" cy="70" r="14" fill="#e03131"/>
  <text x="180" y="74" font-size="12" fill="#fff" text-anchor="middle">+</text>
  <text x="180" y="100" font-size="10" fill="#e03131" text-anchor="middle">正电荷</text>
  <rect x="20" y="50" width="120" height="40" fill="none" stroke="#334e68" opacity="0"/>
  <path d="M200 70 L240 70" stroke="#e03131" stroke-width="2" marker-end="url(#ch1)"/>
  <defs><marker id="ch1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <circle cx="260" cy="70" r="14" fill="#e03131"/>
  <text x="260" y="74" font-size="12" fill="#fff" text-anchor="middle">+</text>
  <text x="260" y="100" font-size="10" fill="#e03131" text-anchor="middle">同号相斥</text>
  <path d="M274 70 L294 70" stroke="#e03131" stroke-width="2" marker-end="url(#ch2)"/>
  <defs><marker id="ch2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
</svg>

图中：丝绸摩擦玻璃棒 → 玻璃棒带正电（失去电子）；两个正电荷之间产生斥力。

#### 本页主问题与引导演示
<iframe src="anim/bx3/charge-electrification.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：黄色电子手柄。摩擦起电看电子 A↔B 转移；接触起电看相同金属球的守恒与平分；感应起电按“靠近→接地→先断开接地→再移开带电体”完成全过程；元电荷检查用非整数按钮制造一个明确的错误案例。所有读数都由画面当前状态实时计算。

**证据任务。**



> **公式首次使用卡**：适用边界——电荷代数和守恒以选定封闭系统为对象；q=ne 中 n 为整数、e 为元电荷；摩擦起电只发生电荷转移，不产生净电荷。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 摩擦模式把手柄向右：看电子从 A 到 B，A 失电子带正电、B 得电子带负电，$q_{\text{总}}$仍为 `0`。
- 接触模式：先读接触前 $qA=+6e、qB=-2e$，再播放接触过程，核对 $qA=qB=(+6e-2e)/2=+2e$。
- 感应起电：先只观察“靠近”时导体近侧与远侧的异号分布；再点“接地”，随后必须先点“断开接地”，最后才点“移开带电体”。若接地尚未断开就移走带电体，电子仍可经大地回流，导体不会按本流程保留目标净电荷。全过程不让带电体接触导体。
- 元电荷模式点“非整数尝试”：看 `1.5e` 被标为“不可能”，因为 $q=ne$ 中 `n` 必须是整数。

#### 规律、证据与核心概念
- **起电三种方式**：摩擦起电（电子转移）、接触起电（电荷共享）、感应起电（先由静电感应发生电荷重新分布，再经接地、断地与移开带电体得到净电荷）。只靠近而不接地时只是静电感应，不等于导体已经带上净电荷。
- **电荷守恒**：电荷不会凭空产生或消失，只能从一个物体转移到另一个物体，或从物体的一部分转移到另一部分。
- **元电荷**：e = 1.6×10⁻¹⁹ C，任何带电体的电荷量都是 e 的整数倍。

#### 公式、变量、单位与条件
| 公式/规律 | 图中对应 | 读数含义 |
|---|---|---|
| $q=ne$ | 电子手柄和量子化检查 | 电荷量只能是元电荷的整数倍 |
| $qA+qB=\text{常量}$ | A/B 电荷读数与总电荷 | 起电不是创造电荷 |
| 失去电子带正电 | 电子从 A 向 B 转移 | A 变正、B 变负 |
| 接触平分 | 接触起电模式 | 相同金属球接触后电荷平均分配 |

#### 边界检查与易错点
- 认为摩擦创造了电荷（实际是电子转移，电荷守恒）。
- 认为只要靠近就完成感应起电（只靠近时导体总电荷仍可为零；要得到净电荷，还必须按“接地→断地→移开带电体”的顺序操作）。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-01）

---

---

---

<h4 id="coulomb-law">B3-02 库仑定律 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-02
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 计算题
- 前置知识：B3-01 电荷与起电
- 后续应用：B3-03 电场强度、B3-07 电势能

#### 情境与现象
两个点电荷之间存在相互作用力，力的大小与两个电荷量的乘积成正比，与距离的平方成反比。同种电荷相斥，异种电荷相吸。

**静态表征。**
<svg viewBox="0 0 320 120" width="100%" style="max-width:480px">
  <circle cx="80" cy="60" r="16" fill="#e03131"/>
  <text x="80" y="64" font-size="12" fill="#fff" text-anchor="middle">+</text>
  <text x="80" y="95" font-size="10" fill="#334e68" text-anchor="middle">q₁</text>
  <circle cx="240" cy="60" r="16" fill="#e03131"/>
  <text x="240" y="64" font-size="12" fill="#fff" text-anchor="middle">+</text>
  <text x="240" y="95" font-size="10" fill="#334e68" text-anchor="middle">q₂</text>
  <path d="M64 60 L40 60" stroke="#e03131" stroke-width="2" marker-end="url(#cl1)"/>
  <defs><marker id="cl1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <path d="M256 60 L280 60" stroke="#e03131" stroke-width="2" marker-end="url(#cl2)"/>
  <defs><marker id="cl2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <text x="160" y="45" font-size="11" fill="#486581" text-anchor="middle">r</text>
  <text x="160" y="72" font-size="11" fill="#e03131" text-anchor="middle">F = k|q₁q₂|/r²</text>
</svg>

图中：两个同号正电荷之间产生斥力 F，力沿连线方向，大小由库仑定律决定。

**动态表征。**
自动演示：两个点电荷之间的力随距离和电荷量变化。

#### 本页主问题与引导演示
<iframe src="anim/bx3/coulomb.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：画面里的任一点电荷来改变两电荷中心距离 `r`。下方滑块可辅助调整 `q₁、q₂、r`。实时变化：力的大小和方向（斥力/引力）、公式读数和距离读数。

**证据任务。**



> **公式首次使用卡**：适用边界——真空中（空气中近似适用）；点电荷（带电体尺寸远小于距离）；静止电荷（或可近似为静电）。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 直接拖动画面中的电荷拉大距离：看力如何按 $1/r^{2}$ 快速减小（距离翻倍，力变为 `1/4`）。
- 拖动 q₁ 或 q₂ 看力如何正比变化。
- 把 q₁ 拖到负值，看力从斥力（红色向外）变引力（蓝色向内）。

#### 规律、证据与核心概念
库仑通过扭秤实验（1785 年）精确测量了两个点电荷之间的作用力。力的大小为 $F=k|q_{1}q_{2}|/r^{2}$，其中 $k=9×10^{9}\ \mathrm{N·m^{2}/C^{2}}$ 为静电力常量；电荷正负只用于判断沿连线相斥还是相吸。这是实验定律，不是理论推导。

**概念辨析。**
- **点电荷**：当带电体的尺寸远小于它们之间的距离时，可视为点电荷（类似质点模型）。
- **方向**：沿两电荷连线方向。同号相斥（力指向远离对方），异号相吸（力指向对方）。
- **叠加**：多个电荷对某一电荷的作用力，等于各电荷单独存在时作用力的矢量和。

#### 公式、变量、单位与条件
- $F=k|q_{1}q_{2}|/r^{2}$ → 图中非负的力箭头长度；$q_{1}q_{2}$ 的符号另用于判断相斥或相吸
- k = 9×10⁹ N·m²/C² → 比例系数
- r → 可直接拖动的两电荷中心距离
- q₁、q₂ → 图中两个电荷的值

**适用边界。**
- 真空中（空气中近似适用）。
- 点电荷（带电体尺寸远小于距离）。
- 静止电荷（或可近似为静电）。

#### 应用与迁移
- 选择题：比较两个点电荷间力的大小变化。
- 计算题：多个点电荷的合力（矢量叠加）。
- 综合题：库仑力 + 牛顿定律、库仑力 + 圆周运动。

**解题路径。**
1. 判断是否满足点电荷条件；
2. 确定每个电荷的正负，判断力的方向（斥力或引力）；
3. 用 $F=k|q_{1}q_{2}|/r^{2}$ 算大小，再由电荷正负判断方向；
4. 多个力时用矢量合成（平行四边形或正交分解）。

#### 边界检查与易错点
- 忘记力是矢量，只算大小不标方向。
- 距离 r 是两电荷中心的距离，不是到某个面的距离。
- 多个电荷叠加时用代数和而非矢量和。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-02）

<h4 id="electric-field">B3-03 电场强度 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-03
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 计算题 / 综合题
- 前置知识：B3-02 库仑定律
- 后续应用：B3-04 电场线、B3-06 电势差、B3-08 电场力做功

#### 情境与现象
电荷在空间中产生电场，电场对放入其中的电荷有力的作用。电场强度 E 描述电场的强弱和方向，与试探电荷无关。

**静态表征。**
<svg viewBox="0 0 320 160" width="100%" style="max-width:480px">
  <circle cx="160" cy="80" r="18" fill="#e03131"/>
  <text x="160" y="84" font-size="14" fill="#fff" text-anchor="middle">+</text>
  <text x="160" y="115" font-size="10" fill="#334e68" text-anchor="middle">Q（源电荷）</text>
  <circle cx="260" cy="80" r="6" fill="#f0a500"/>
  <text x="260" y="100" font-size="10" fill="#334e68" text-anchor="middle">试探点</text>
  <path d="M260 80 L300 80" stroke="#e03131" stroke-width="2.5" marker-end="url(#ef1)"/>
  <defs><marker id="ef1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6" fill="#e03131"/></marker></defs>
  <text x="280" y="72" font-size="11" fill="#e03131">E</text>
  <path d="M178 80 L260 80" stroke="#aab8c2" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="219" y="72" font-size="10" fill="#486581" text-anchor="middle">r</text>
</svg>

图中：源电荷 Q 产生电场，在距离 r 处的电场强度 E 方向沿径向（正电荷向外），大小 E = kQ/r²。

**动态表征。**
自动演示：电场线从正电荷向外辐射，试探点处显示 E 矢量。

#### 本页主问题与引导演示
<iframe src="anim/bx3/charges-field.html" width="100%" height="580" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——E = F/q 是普遍定义，适用于任何电场；E = kQ/r² 仅适用于点电荷电场；匀强电场中 E 处处相同。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可直接拖动：画面里的源电荷和黄色试探电荷。可切换场矢量/电场线显示，也可切换试探电荷为 `+q、−q、2q`。实时变化：电场方向 `E`、试探电荷受力 $F=qE$、E 读数、F 方向和大小。

**证据任务。**
- 拖动黄色试探电荷远离源电荷：看 `E` 如何按 $1/r^{2}$ 减小。
- 拖动红/蓝源电荷：看整片场矢量或电场线如何实时重排。
- 把试探电荷从 `+q` 切到 `−q`：看绿色 `E` 箭头不变，但黄色 $F=qE$ 方向反向。
- 把试探电荷从 `+q` 切到 `2q`：看 `E` 读数不变，而 `F` 读数变为 2 倍。

#### 规律、证据与核心概念
库仑定律告诉我们力 F = kQq/r²。把试探电荷 q 除掉，F/q = kQ/r² 只与源电荷和位置有关 → 这就是电场强度 E = F/q = kQ/r²。电场是物质，不依赖试探电荷存在。

**概念辨析。**
- **定义**：E = F/q（q 为试探电荷）。
- **点电荷电场**：E = kQ/r²，方向沿径向（正电荷向外，负电荷向内）。
- **矢量**：E 有方向，多个电荷叠加时用矢量合成。
- **与试探电荷无关**：E 是电场本身的属性，换不同试探电荷 E 不变。

#### 公式、变量、单位与条件
- E = F/q → 图中绿色 E 矢量与黄色 F 矢量对照
- E = kQ/r² → 图中源电荷 Q 和距离 r 决定 E 大小
- 方向：正电荷向外（红色），负电荷向内（蓝色）

**适用边界。**
- E = F/q 是普遍定义，适用于任何电场。
- E = kQ/r² 仅适用于点电荷电场。
- 匀强电场中 E 处处相同。

#### 应用与迁移
- 选择题：判断电场强度大小和方向。
- 计算题：多个点电荷的合场强。
- 综合题：电场中的带电粒子运动。

**解题路径。**
1. 确定源电荷分布；
2. 对每个源电荷用 E = kQ/r² 算大小和方向；
3. 矢量合成（平行四边形或正交分解）；
4. 匀强电场直接用 E = U/d。

#### 边界检查与易错点
- 认为 E 与试探电荷有关（E 是电场属性，与试探电荷无关）。
- 混淆 E 的方向和电荷受力方向（正电荷受力沿 E 方向，负电荷受力反 E 方向）。
- 点电荷公式 E = kQ/r² 只适用于点电荷，不能用于匀强电场。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-03）

<h4 id="field-lines">B3-04 电场线 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 编号：B3-04
- 模块：必修3
- 主题：静电场
- 高考功能：选择题
- 前置知识：B3-03 电场强度

#### 情境与现象
电场线是形象化描述电场的假想曲线。从正电荷出发，到负电荷终止。疏密表示场强大小，切线方向表示场强方向。

**静态表征。**
<svg viewBox="0 0 320 160" width="100%" style="max-width:480px">
  <circle cx="80" cy="80" r="14" fill="#e03131"/>
  <text x="80" y="84" font-size="12" fill="#fff" text-anchor="middle">+</text>
  <circle cx="240" cy="80" r="14" fill="#2c7be5"/>
  <text x="240" y="84" font-size="12" fill="#fff" text-anchor="middle">−</text>
  <path d="M80 80 Q160 30 240 80" fill="none" stroke="#e03131" stroke-width="1.5" marker-end="url(#fl1)"/>
  <defs><marker id="fl1" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4" fill="#e03131"/></marker></defs>
  <path d="M80 80 L240 80" fill="none" stroke="#e03131" stroke-width="1.5" marker-end="url(#fl2)"/>
  <defs><marker id="fl2" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4" fill="#e03131"/></marker></defs>
  <path d="M80 80 Q160 130 240 80" fill="none" stroke="#e03131" stroke-width="1.5" marker-end="url(#fl3)"/>
  <defs><marker id="fl3" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4" fill="#e03131"/></marker></defs>
  <text x="160" y="20" font-size="10" fill="#486581" text-anchor="middle">电场线从+出发到−终止</text>
</svg>

图中：电场线从正电荷出发，到负电荷终止。线越密处场强越大。

#### 本页主问题与引导演示
<iframe src="anim/bx3/field-lines.html" width="100%" height="580" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：红/蓝源电荷和黄色试探电荷。默认显示电场线，也可切回场矢量。拖动源电荷时，电场线实时重排；拖动试探电荷时，绿色 `E` 箭头显示该点电场线切线方向。

**证据任务。**
- 拖动红色正电荷：看电场线从正电荷出发。
- 拖动蓝色负电荷：看电场线终止于负电荷。
- 拖动黄色试探电荷到电场线附近：看绿色 `E` 箭头是否沿电场线切线方向。
- 切回“场矢量”：比较箭头密集/颜色更暖处，是否对应电场线更密、场强更大。

#### 规律、证据与核心概念
- **起止**：从正电荷（或无穷远）出发，到负电荷（或无穷远）终止。
- **疏密**：电场线密处场强大，疏处场强小。
- **切线**：电场线上某点的切线方向 = 该点电场强度方向。
- **不相交**：两条电场线不相交（否则一点有两个方向）。
- **匀强电场**：平行等距的直线。

#### 公式、变量、单位与条件
| 规律 | 图中对应 | 读数含义 |
|---|---|---|
| 电场线从正到负 | 红/蓝电荷和连续曲线 | 起点终点由场源正负决定 |
| 切线方向为 E | 黄色试探点处绿色 E 箭头 | 某点场强方向不是整条线方向的口头描述，而是该点切线 |
| 疏密表示强弱 | 线更密、矢量更暖处 | 场强较大 |
| 电场线不相交 | 实验台曲线分布 | 一点只能有一个 E 方向 |

#### 边界检查与易错点
- 认为电场线是真实存在的（实际是假想曲线）。
- 认为电场线就是电荷的运动轨迹（电场线方向是受力方向，不是运动方向）。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-04）

---

---

---

<h4 id="equipotential">B3-05 等势面 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-05
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 综合题
- 前置知识：B3-03 电场强度、B3-04 电场线

#### 情境与现象
把一个小探针放进电场，如果沿某条蓝色虚线拖动时电势表读数始终不变，这条线所在的面就是等势面。电荷在等势面上移动时有受力，但力始终垂直位移，所以电场力不做功。

**静态表征。**
<svg viewBox="0 0 320 160" width="100%" style="max-width:480px">
  <circle cx="160" cy="80" r="16" fill="#e03131"/>
  <text x="160" y="84" font-size="12" fill="#fff" text-anchor="middle">+</text>
  <circle cx="160" cy="80" r="40" fill="none" stroke="#2c7be5" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="160" cy="80" r="65" fill="none" stroke="#2c7be5" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="160" cy="80" r="90" fill="none" stroke="#2c7be5" stroke-width="1.5" stroke-dasharray="4,3"/>
  <path d="M160 80 L220 80" stroke="#e03131" stroke-width="2" marker-end="url(#ep1)"/>
  <defs><marker id="ep1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <text x="225" y="84" font-size="10" fill="#e03131">E ⊥ 等势面</text>
  <text x="160" y="150" font-size="10" fill="#486581" text-anchor="middle">点电荷等势面为同心球面</text>
</svg>

图中：点电荷的等势面是同心球面（虚线），电场线（红色实线）与等势面处处垂直。

**动态表征。**



#### 本页主问题与引导演示
<iframe src="anim/bx3/equipotential.html" width="100%" height="640" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——等势面上任意两点电势差为零；静电场中电场线与等势面正交；W=qU 的正负必须同时使用电荷符号和规定的始末点。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

动画演示：黄色探针被外力先沿同一条等势线缓慢拖动，电势 φ 不变、$\Delta \varphi =0$、$W=q\Delta \varphi =0$；再跨到另一条等势线，电势读数改变，电场力做功不再为零。注意这不是电荷自由释放后的运动轨迹：自由正电荷会沿电场方向加速，而不是自动沿等势线运动。

可直接拖动对象：黄色试探电荷、点电荷模型中的红色源电荷。可切换点电荷电场与匀强电场，可打开“锁定等势面拖动”。锁定模式表示“外力拖着探针沿等势线测量”，不表示真实自由运动。

**证据任务。**
- 打开“锁定等势面拖动”，沿蓝色等势线拖动黄色探针，看 $\varphi$、$\Delta \varphi$、$W=q\Delta \varphi$ 是否保持不变。
- 关闭锁定后跨过不同等势线，看电势读数如何变化。
- 在点电荷模型中拖动红色源电荷，看等势面整体跟着电荷移动；红色 `E` 箭头始终垂直蓝色等势线。
- 切到匀强电场，看等势线为什么变成一组互相平行的直线。

#### 规律、证据与核心概念
- **等势面**：电势相等的点构成的面。
- **与电场线垂直**：如果电场线不垂直等势面，沿等势面移动电荷时电场力做功不为零，但等势面上电势差为零 → 矛盾，所以必须垂直。
- **疏密**：等势面密处场强大，疏处场强小。
- **点电荷等势面**：以点电荷为心的同心球面。
- **匀强电场等势面**：平行等距的平面。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| $\varphi$ | 右侧“探针电势”读数 | 沿同一蓝线移动，φ 不变 |
| $\Delta \varphi = \varphi A - \varphi B$ | 绿色 A 起点到黄色 B 探针 | 同一等势面上 $\Delta \varphi =0$ |
| $W = q\Delta \varphi$ | 右侧做功读数 | 沿等势面移动，W 保持 0 |
| `E ⊥ 等势面` | 红色 E 箭头与蓝色等势线 | 箭头总是穿过蓝线而不是贴着蓝线 |
| 等势面疏密 | 蓝色等势线间距 | 等差等势面越密，场强越大 |

#### 边界检查与易错点
- 认为电荷沿等势面移动不受力（受力但不做功）。
- 认为等势面就是电场线（等势面与电场线垂直，不是同一条线）。
- 认为 $W=0$ 是因为没有位移（其实有位移，只是 `F` 与位移方向垂直）。
- 认为等势面可以相交（一点只能有一个电势值，所以不能相交）。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-05）

---

---

---

---

<h4 id="potential-difference">B3-06 电势差 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-06
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 计算题 / 综合题
- 前置知识：B3-03 电场强度、B3-05 等势面
- 后续应用：B3-07 电势能、B3-08 电场力做功

#### 情境与现象
电场中两点的电势之差叫电势差（电压）。在匀强电场中，沿电场方向相距越远，电势差越大；如果只是横向移动、没有沿电场方向拉开距离，电势差不变。

**静态表征。**
<svg viewBox="0 0 320 160" width="100%" style="max-width:480px">
  <rect x="40" y="30" width="240" height="6" fill="#e03131"/>
  <text x="60" y="25" font-size="10" fill="#e03131">A 板（高电势 φA）</text>
  <rect x="40" y="120" width="240" height="6" fill="#2c7be5"/>
  <text x="60" y="145" font-size="10" fill="#2c7be5">B 板（低电势 φB）</text>
  <path d="M80 36 L80 120" stroke="#7b2cbf" stroke-width="2" marker-end="url(#pd1)"/>
  <defs><marker id="pd1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#7b2cbf"/></marker></defs>
  <path d="M160 36 L160 120" stroke="#7b2cbf" stroke-width="2" marker-end="url(#pd2)"/>
  <defs><marker id="pd2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#7b2cbf"/></marker></defs>
  <path d="M240 36 L240 120" stroke="#7b2cbf" stroke-width="2" marker-end="url(#pd3)"/>
  <defs><marker id="pd3" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#7b2cbf"/></marker></defs>
  <text x="270" y="78" font-size="10" fill="#7b2cbf">E</text>
  <text x="160" y="78" font-size="11" fill="#486581" text-anchor="middle">U = Ed</text>
</svg>

图中：两平行板间为匀强电场，电场线从高电势板 A 指向低电势板 B。U = φA - φB = E·d。

**动态表征。**



#### 本页主问题与引导演示
<iframe src="anim/bx3/potential-difference.html" width="100%" height="580" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——$U=Ed$ 仅适用于匀强静电场；$W=qU$ 用于静电场中电场力做功；$d$ 必须是位移沿电场方向的有向分量。时变磁场产生的感生电场一般不是保守场，不能把本页路径无关结论直接推广过去。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

自动演示：黄色电荷从 A 点移动到 B 点，画面同步显示沿电场方向的距离 `d`、电势差 $UAB=Ed$ 和电场力做功 $WAB=qUAB$。

可直接拖动：蓝色 B 点、紫色 E 箭头端点、底部 q 滑钮。实时变化：沿电场方向距离 `d`、电势差 $UAB=Ed$、电场力做功 $WAB=qUAB$。

**证据任务。**
- 横向拖动 B 点，再沿红色 E 方向拖动 B 点，比较哪一种会改变 `UAB`。
- 拖动紫色 E 箭头端点，看 `E` 变大时同一段 `d` 对应的电势差如何变大。
- 拖动 q 滑钮从正电荷变为负电荷，看 `UAB` 是否变化、$WAB=qUAB$ 的符号如何变化。

#### 规律、证据与核心概念
电势差是两点电势之差 U = φA - φB。在匀强电场中，沿电场方向移动距离 d，电势降低 Ed，所以 U = Ed。电场力做功 W = qU，与路径无关，只与起止点有关。

**概念辨析。**
- **电势差**：UAB = φA - φB，标量，有正负。
- **匀强电场**：U = Ed（d 沿电场方向的距离）。
- **与路径无关**：静电场中的电场力做功只与起止位置有关，静电力是保守力。
- **电势降低方向**：沿电场线方向电势降低。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| `E` | 紫色 E 箭头长度与右侧场强读数 | 箭头越长，场强越大 |
| `d` | A 到 B 沿红色 E 方向的虚线竖距 | 横向距离不进入 $U=Ed$ |
| $UAB=Ed$ | 右侧电势差读数 | E 或沿场距离 d 增大，U 增大 |
| `q` | 底部 q 滑钮和运动电荷颜色 | q 改变不改变 U，只改变 W |
| $WAB=qUAB$ | 右侧做功读数和黄色力箭头 | q 为负时做功符号反向 |

**适用边界。**
- U = Ed 仅适用于匀强电场。
- $W=qU$ 用于静电场中电场力做功；感生电场一般不存在全局单值电势，不能直接套用本页路径无关结论。
- d 必须是沿电场方向的距离。

#### 边界检查与易错点
- U = Ed 只适用于匀强电场，不能用于点电荷电场。
- d 是沿电场方向的距离，不是任意方向的距离。
- 电势差有正负（UAB = -UBA）。
- 改变试探电荷 q 不会改变电势差 U；q 只影响做功 W。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-06）

<h4 id="electric-pe">B3-07 电势能 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-07
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 计算题
- 前置知识：B3-06 电势差

#### 情境与现象



#### 本页主问题与引导演示
<iframe src="anim/bx3/electric-potential-energy.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——电势能等于电荷量与所在点电势的乘积，但数值依赖零电势面选择；真正与做功直接对应的是电势能变化；正负电荷移动时必须保留电荷符号。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

把同一个电荷从 A 点拖到 B 点，如果电场力一路做正功，它自己的电势能就减少；如果电场力做负功，电势能就增加。电势能不是电场单独决定的，还要看电荷量和正负：$E_{p}=q\varphi$。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="40" y="20" width="240" height="6" fill="#e03131"/>
  <text x="60" y="15" font-size="10" fill="#e03131">高电势</text>
  <rect x="40" y="110" width="240" height="6" fill="#2c7be5"/>
  <text x="60" y="130" font-size="10" fill="#2c7be5">低电势</text>
  <path d="M80 26 L80 110" stroke="#7b2cbf" stroke-width="2" marker-end="url(#pe1)"/>
  <defs><marker id="pe1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#7b2cbf"/></marker></defs>
  <text x="90" y="70" font-size="10" fill="#7b2cbf">E</text>
  <circle cx="200" cy="40" r="10" fill="#e03131"/>
  <text x="200" y="44" font-size="10" fill="#fff" text-anchor="middle">+</text>
  <path d="M200 50 L200 100" stroke="#f0a500" stroke-width="2" marker-end="url(#pe2)"/>
  <defs><marker id="pe2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#f0a500"/></marker></defs>
  <text x="215" y="75" font-size="10" fill="#f0a500">+q 下移</text>
  <text x="200" y="125" font-size="10" fill="#486581" text-anchor="middle">Ep 减小，W&gt;0</text>
</svg>

图中：正电荷沿电场方向（从高电势到低电势）移动，电场力做正功，电势能减小。

**动态表征。**
动画演示：黄色电荷从 A 点移到 B 点，右侧同步比较 $EpA=q\varphi A$、$EpB=q\varphi B$ 和 $WAB=EpA-EpB=-\Delta E_{p}$。当 q 变成负值时，电势高低与电势能大小的对应关系会反过来。

可直接拖动：绿色 A 点、黄色 B 电荷、底部 q 滑钮。实时变化：两点电势、两点电势能、电场力做功和能量柱。

**证据任务。**
- 横向拖动 B 电荷，看 $\varphi B$ 不变时 $EpB=q\varphi B$ 是否也不变。
- 沿红色 E 方向拖动正电荷，看它到低电势处时 `EpB` 如何变小、`WAB` 如何变正。
- 把 q 滑钮拖到负值，再重复移动，看“高电势处电势能大”为什么只适用于正电荷。
- 拖动 A 点，观察 $WAB=EpA-EpB$ 只由起止点的电势能差决定。

#### 规律、证据与核心概念
- **电势能**：Ep = qφ（φ 为该点电势）。
- **做功与电势能**：W = -ΔEp = qU（电场力做功 = 电势能的减少量）。
- **正电荷在高电势处电势能大**：Ep = qφ，q > 0 时 φ 越高 Ep 越大。
- **负电荷在低电势处电势能大**：q < 0 时 φ 越低 Ep 越大。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| $\varphi A、\varphi B$ | A 点、B 点所在蓝色等势线与右侧读数 | 横向拖动不改 φ |
| $E_{p}=q\varphi$ | 右侧 EpA/EpB 与能量柱 | q 变号时 Ep 的正负和大小关系翻转 |
| $\Delta E_{p}=EpB-EpA$ | 两根 Ep 能量柱差值 | B 到低电势处，正电荷 Ep 变小 |
| $WAB=-\Delta E_{p}=EpA-EpB$ | 右侧 WAB 读数与紫色能量柱 | 电场力做正功，电势能减少 |
| 力方向 | 黄色电荷旁的金色箭头 | 正电荷受力沿 E，负电荷受力反 E |

**适用边界。**
- $E_{p}=q\varphi$ 中的 φ 取决于零电势面的选择，所以电势能本身可正可负；真正有物理意义的是电势能变化 $\Delta E_{p}$。
- $WAB=-\Delta E_{p}$ 适用于静电力做功；若还有外力做功，要和动能定理、能量守恒一起分析。
- 判断正负时，q 必须带符号代入。

#### 边界检查与易错点
- 混淆电势和电势能（电势是场的属性，电势能还与电荷有关）。
- 忘记 W = -ΔEp 中的负号（电场力做正功 → 电势能减小）。
- 把“高电势处电势能大”错误推广到负电荷。
- 只背 $E_{p}=q\varphi$，但做题时不把 q 的正负号代入。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-07）

---

---

---

---

<h4 id="electric-work">B3-08 电场力做功 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-08
- 模块：必修3
- 主题：静电场
- 高考功能：计算题 / 综合题
- 前置知识：B3-06 电势差、B3-07 电势能
- 后续应用：带电粒子在电场中的运动

#### 情境与现象



#### 本页主问题与引导演示
<iframe src="anim/bx3/electric-work.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——W=qUAB 适用于静电力做功；静电力是保守力；匀强电场中也可写成 W=qEd，但 d 必须取沿电场方向的位移分量；若题目还涉及重力、外力或动能变化，要和动能定理、能量守恒联合使用。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

把同一个电荷从 A 点移到 B 点，可以走直线、折线，也可以绕一条很弯的路线；只要起点和终点不变，静电场中电场力做功相同。电场力做功只看起止点电势差：$W=qUAB$。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <circle cx="60" cy="40" r="8" fill="#e03131"/>
  <text x="60" y="30" font-size="10" fill="#e03131" text-anchor="middle">A</text>
  <circle cx="260" cy="100" r="8" fill="#2c7be5"/>
  <text x="260" y="120" font-size="10" fill="#2c7be5" text-anchor="middle">B</text>
  <path d="M60 40 Q160 80 260 100" fill="none" stroke="#f0a500" stroke-width="2" stroke-dasharray="5,3"/>
  <path d="M60 40 Q120 20 260 100" fill="none" stroke="#aab8c2" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="160" y="60" font-size="10" fill="#f0a500" text-anchor="middle">路径1</text>
  <text x="160" y="35" font-size="10" fill="#aab8c2" text-anchor="middle">路径2</text>
  <text x="160" y="135" font-size="11" fill="#486581" text-anchor="middle">W = qUAB，与路径无关</text>
</svg>

图中：电荷从 A 到 B，无论走哪条路径，电场力做功都等于 W = qUAB。

**动态表征。**
动画演示：黄色电荷沿橙色弯曲路径从 A 到 B，路径可以变长变弯，但直线、折线、弯曲路径的做功读数始终相同。

可直接拖动：A 点、B 点、橙色路径控制点、底部 q 滑钮。实时变化：`UAB`、三条路径做功、橙色路径长度。

**证据任务。**
- 拖动橙色控制点，把路径拉长或拉弯，看 $W_{1}、W_{2}、W_{3}$ 是否改变。
- 拖动 A 或 B 到另一条等势线，看三条路径的 W 是否一起改变。
- 横向拖动 A 或 B，让它留在同一等势线上，观察电势差和做功是否不变。
- 把 q 滑钮拖成负值，看做功符号如何随 q 翻转。

#### 规律、证据与核心概念
- **做功公式**：W = qUAB = q(φA - φB)。
- **与路径无关**：静电力是保守力，做功只与起止位置有关。
- **正负判断**：正电荷沿电场方向移动 → W > 0；逆电场方向 → W < 0。
- **动能定理**：W = ΔEₖ（只有电场力做功时）。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| $UAB=\varphi A-\varphi B$ | A、B 所在蓝色等势线与右侧读数 | 只改路径形状，U 不变 |
| $W=qUAB$ | 三条路径的 W1/W2/W3 | 路径不同，做功相同 |
| 路径长度 | 橙色弯曲路径长度读数 | 路径长度变了，W 不跟着变 |
| q 的符号 | 底部 q 滑钮 | q 变号，W 变号 |
| 闭合路径 | A 和 B 重合或回到同一等势点 | U=0，所以总功为 0 |

**适用边界。**
- $W=qUAB$ 适用于静电力做功；静电力是保守力。
- 匀强电场中也可写成 $W=qEd$，但 `d` 必须取沿电场方向的位移分量。
- 若题目还涉及重力、外力或动能变化，要和动能定理、能量守恒联合使用。

#### 边界检查与易错点
- 认为静电力做功与路径有关（静电力是保守力，与路径无关）；也不要反过来把这个结论推广到时变磁场产生的感生电场。
- 忘记 W = qU 中 q 要带正负号。
- 把路径长度当作 `d` 代入 $W=qEd$。
- 只看电荷运动方向，不先判断 `UAB` 的正负。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-08）

---

---

---

---

<h4 id="capacitor">B3-09 电容器 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-09
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 实验题
- 前置知识：B3-03 电场强度、B3-06 电势差

#### 情境与现象
两个互相绝缘的导体组成电容器。充电后两板带等量异号电荷，板间形成电场，储存电能。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="80" y="30" width="160" height="5" fill="#e03131"/>
  <text x="160" y="25" font-size="10" fill="#e03131" text-anchor="middle">+ + + + +</text>
  <rect x="80" y="100" width="160" height="5" fill="#2c7be5"/>
  <text x="160" y="120" font-size="10" fill="#2c7be5" text-anchor="middle">− − − − −</text>
  <path d="M100 35 L100 100" stroke="#7b2cbf" stroke-width="1.5" marker-end="url(#cap1)"/>
  <defs><marker id="cap1" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4" fill="#7b2cbf"/></marker></defs>
  <path d="M160 35 L160 100" stroke="#7b2cbf" stroke-width="1.5" marker-end="url(#cap2)"/>
  <defs><marker id="cap2" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4" fill="#7b2cbf"/></marker></defs>
  <path d="M220 35 L220 100" stroke="#7b2cbf" stroke-width="1.5" marker-end="url(#cap3)"/>
  <defs><marker id="cap3" markerWidth="6" markerHeight="6" refX="4" refY="2" orient="auto"><path d="M0 0 L4 2 L0 4" fill="#7b2cbf"/></marker></defs>
  <text x="245" y="70" font-size="10" fill="#7b2cbf">E</text>
  <text x="50" y="70" font-size="10" fill="#486581">d</text>
</svg>

图中：平行板电容器，上板带正电，下板带负电，板间为匀强电场。

**动态表征。**
动画演示：电容器接上电源后两板带等量异号电荷；拖开极板时，接电源与断电源两种状态下 `U、Q、E、C` 的变化不同。

#### 本页主问题与引导演示
<iframe src="anim/bx3/capacitor-lab.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：蓝色下极板改变板距 `d`、金色右边缘改变极板面积 `S`、底部滑钮改变电源电压或固定电量。可切换“接电源 U 不变 / 断电源 Q 不变”。

**证据任务。**
- 在“接电源 U 不变”下拖大板距 `d`，看 `C、Q、E` 如何变化。
- 切到“断电源 Q 不变”后再拖大 `d`，看 `U` 如何变化、`E` 为什么近似不变。
- 拖动金色边缘增大 `S`，看两种模式下 `C、Q、U、E` 的联动差别。
- 看两块极板上的正负号是否始终等量异号。

#### 规律、证据与核心概念
- **结构**：两个互相绝缘的导体（极板）。
- **充电**：接电源后，两板带等量异号电荷。
- **储能**：电容器储存的电场能 W = ½CU²。
- **放电**：两板连接后，电荷中和，释放电能。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|



> **公式首次使用卡**：适用边界——C=\varepsilon S/d 适用于理想平行板电容器，忽略边缘效应；动态题先判断是否接电源：接电源 U 不变，断电源 Q 不变；电容器的电量 Q 指一块极板所带电量的绝对值。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| $C=\varepsilon S/d$ | 极板面积 S、板距 d 与右侧 C 读数 | S 大 C 大，d 大 C 小 |
| $Q=CU$ | 极板正负号数量与 Q 读数 | 接电源时 U 不变，C 变则 Q 变 |
| $U=Q/C$ | 断电源模式下 U 读数 | Q 固定，C 变小则 U 变大 |
| $E\approx U/d$ | 板间红色电场线和 E 读数 | 接电源拉大 d，E 变小；断电源拉大 d，E 近似不变 |
| 等量异号 | 两极板上的 +/− 标记 | 电容器“带电量”指一块板上的电量大小 |

**适用边界。**
- $C=\varepsilon S/d$ 适用于理想平行板电容器，忽略边缘效应。
- 动态题先判断是否接电源：接电源 `U` 不变，断电源 `Q` 不变。
- 电容器的电量 `Q` 指一块极板所带电量的绝对值。

#### 边界检查与易错点
- 认为两板电荷量不同（实际等量异号）。
- 混淆电容器的"电量"指一块板的电量，不是两板之和。
- 不先判断接电源还是断电源，直接套 $Q=CU$ 得出错误变化。
- 把断电源拉板距时的 `E` 误判为一定变小。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-09）

---

---

---

---

<h4 id="capacitance">B3-10 电容 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-10
- 模块：必修3
- 主题：静电场
- 高考功能：选择题 / 计算题 / 实验题
- 前置知识：B3-09 电容器

#### 本页主问题与引导演示
<iframe src="anim/bx3/capacitor.html" width="100%" height="580" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——$C=Q/U$ 是定义式，适用于任何电容器；$C=\varepsilon _{0}S/d$ 只用于真空（空气近似）的理想平行板电容器，填充均匀介质时用 $C=\varepsilon S/d$，并忽略边缘效应。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

#### 情境与现象
电容是电容器储存电荷本领的物理量，定义式为 $C=Q/U$。对理想平行板电容器，真空（空气近似）中 $C=\varepsilon _{0}S/d$；填充均匀介质时写成 $C=\varepsilon S/d$。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="60" y="30" width="200" height="5" fill="#e03131"/>
  <rect x="60" y="100" width="200" height="5" fill="#2c7be5"/>
  <text x="160" y="22" font-size="10" fill="#e03131" text-anchor="middle">极板面积 S</text>
  <text x="30" y="70" font-size="10" fill="#486581">d</text>
  <text x="160" y="70" font-size="12" fill="#243b53" text-anchor="middle">C = εS/d</text>
  <text x="160" y="130" font-size="10" fill="#486581" text-anchor="middle">Q = CU</text>
</svg>

图中：平行板电容器电容 C 与极板面积 S 成正比，与板间距 d 成反比。

**动态表征。**
自动演示：拖动板距 `d` 和极板面积 `S` 时，电容 $C=\varepsilon _{0}S/d$ 随结构改变；只拖电源电压或固定电量时，`Q、U` 改变，但同一结构下 `C` 不变。

可直接拖动：蓝色下极板改变板距 `d`、金色右边缘改变面积 `S`、底部滑钮改变电源电压或固定电量。可切换“接电源 U 不变 / 断电源 Q 不变”。实时变化：电容 $C=\varepsilon _{0}S/d$、电量 $Q=CU$、场强 $E\approx U/d$。

**证据任务。**
- 拖动 d 看电容 C 和电量 Q 如何反比变化（d 增大 → C 减小 → Q 减小）。
- 在接电源模式下拖动 U 看 Q 如何正比变化（结构不变，C 不变，Q = CU）。
- 拖动 S 看 C 和 Q 如何正比变化。
- 切到断电源模式后拖动 d，看 Q 不变时 U 如何变化，理解 $C=Q/U$ 是定义式，不表示 C 由 Q、U 决定。

#### 规律、证据与核心概念
电容 $C=Q/U$ 是定义式。理想平行板电容器在真空（空气近似）中有 $C=\varepsilon _{0}S/d$；若极板间填充均匀介质，则用该介质的介电常数 $\varepsilon$，写成 $C=\varepsilon S/d$。电容由结构和介质决定，与是否带电无关。

**概念辨析。**
- **定义**：C = Q/U（Q 为一块板的电量，U 为两板电压）。
- **平行板**：真空（空气近似）中 $C=\varepsilon _{0}S/d$；均匀介质中 $C=\varepsilon S/d$。
- **单位**：法拉 F，1 F = 10⁶ μF = 10¹² pF。
- **由结构决定**：C 与 Q、U 无关，只由 S、d、介质决定。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| $C=Q/U$ | 右侧 C、Q、U 读数 | 结构不变时 Q/U 保持为同一个 C |
| $C=\varepsilon _{0}S/d$ | 极板面积 S、板距 d | S 大 C 大，d 大 C 小 |
| $Q=CU$ | 极板电荷数与 Q 读数 | 接电源 U 固定时，C 变则 Q 变 |
| $U=Q/C$ | 断电源模式下 U 读数 | Q 固定时，C 变小则 U 变大 |
| $E\approx U/d$ | 板间红色电场线与 E 读数 | 接/断电源下拖 d 的 E 变化不同 |

**适用边界。**
- C = Q/U 是定义式，适用于任何电容器。
- $C=\varepsilon _{0}S/d$ 仅适用于真空（空气近似）的理想平行板电容器；均匀介质中应改用 $\varepsilon$。

#### 边界检查与易错点
- 认为 C 与 Q 或 U 有关（C 由结构决定，与 Q、U 无关）。
- 混淆"断开电源"（Q 不变）和"接电源"（U 不变）两种情况。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-10）

## 3.2 电路 <h3 id="circuit-section"></h3>

---

---

<h4 id="current">B3-11 电流 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-11
- 模块：必修3
- 主题：电路
- 高考功能：选择题
- 前置知识：初中电流

#### 情境与现象



#### 本页主问题与引导演示
<iframe src="anim/bx3/current.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——$\bar I=\Delta Q/\Delta t$ 表示一段时间内的平均电流；稳恒电流中它等于任一时刻电流，常简写为 $I=Q/t$，且同一串联支路各截面电流相同。$I=nqSv$ 是稳态微观模型，适用于载流子密度、截面积、漂移速度可近似稳定的导体；金属中载流子是电子，电解液、半导体中的载流子可能不同。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

电荷的定向移动形成电流。不是看单个电荷跑多快，而是看一段时间 $\Delta t$ 内有多少电荷 $\Delta Q$ 穿过某个截面：平均电流 $\bar I=\Delta Q/\Delta t$。本页研究稳恒电流，因此可简写为 $I=Q/t$。金属中实际漂移的是电子，但电流方向规定为正电荷定向移动方向，所以与电子漂移方向相反。

**静态表征。**
<svg viewBox="0 0 320 100" width="100%" style="max-width:400px">
  <rect x="20" y="35" width="280" height="30" fill="#eef2f7" stroke="#334e68"/>
  <circle cx="60" cy="50" r="6" fill="#e03131"/>
  <circle cx="120" cy="50" r="6" fill="#e03131"/>
  <circle cx="180" cy="50" r="6" fill="#e03131"/>
  <circle cx="240" cy="50" r="6" fill="#e03131"/>
  <path d="M280 50 L300 50" stroke="#e03131" stroke-width="2" marker-end="url(#cur1)"/>
  <defs><marker id="cur1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <text x="160" y="25" font-size="11" fill="#e03131" text-anchor="middle">I（电流方向）</text>
  <text x="160" y="85" font-size="10" fill="#486581" text-anchor="middle">I = Q/t</text>
</svg>

图中：正电荷定向移动方向为电流方向，I = Q/t。

**动态表征。**
动画演示：蓝色电子在导线中缓慢向左漂移，每秒穿过绿色截面的电荷量就是 `Q`；红色箭头表示规定电流方向，向右。

可直接拖动：蓝色速度手柄改变漂移速度 `v`、金色管壁改变截面积 `S`、底部滑钮改变载流子密度 `n`。实时变化：1 秒通过截面的电荷量 `Q` 和电流 `I`。

**证据任务。**
- 拖动蓝色速度手柄，看电子穿过截面的频率和 `I` 如何变化。
- 拖动金色管壁加粗导线，看同样速度下更多电荷同时通过截面，`I` 如何变大。
- 拖动底部密度滑钮，看载流子数变多时 `Q/t` 如何变大。
- 对比蓝色电子漂移方向和红色规定电流方向，记住二者相反。

#### 规律、证据与核心概念
- **定义**：I = Q/t（单位时间通过截面的电量）。
- **方向**：正电荷移动方向（金属导体中实际是电子反向移动）。
- **微观**：I = nqSv（n 为载流子密度，v 为定向移动速度）。
- **单位**：安培 A，1 A = 1 C/s。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| `Q` | 1 秒内穿过绿色截面的电荷量读数 | 过截面的电子越多，Q 越大 |
| $I=Q/t$ | 右侧电流读数，取 $t=1\ \mathrm{s}$ | Q 变大，I 同步变大 |
| `v` | 蓝色速度箭头和电子漂移速度 | v 大，穿过截面更快 |
| `S` | 导线粗细和金色管壁 | S 大，同一时刻能通过更多载流子 |
| `n` | 底部密度滑钮和电子密集程度 | n 大，单位体积载流子更多 |
| 电流方向 | 红色箭头 | 与金属中电子漂移方向相反 |

**适用边界。**
- $\bar I=\Delta Q/\Delta t$ 是一段时间内的平均电流；只有稳恒电流中才可直接用 $I=Q/t$ 表示任一时刻电流，且同一串联支路各截面电流相同。
- $I=nqSv$ 是微观模型，适用于载流子密度、截面积、漂移速度可近似稳定的导体。
- 金属中载流子是电子；电解液、半导体中载流子情况可能不同。

#### 边界检查与易错点
- 认为电流方向是电子移动方向（实际相反）。
- 混淆定向移动速度和热运动速度（热运动远快但无定向）。
- 把“电子运动得很快”误认为“漂移速度很大”；实际漂移速度通常很小。
- 忘记 $I=nqSv$ 中的 `q` 是单个载流子的电荷量大小，方向另行判断。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-11）

---

---

---

<h4 id="resistance">B3-12 电阻与电阻定律 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-12
- 模块：必修3
- 主题：电路
- 高考功能：选择题 / 计算题
- 前置知识：B3-11 电流

#### 情境与现象
导体对电流的阻碍作用叫电阻。电阻由导体材料、长度、横截面积决定：R = ρL/S。

**静态表征。**
<svg viewBox="0 0 320 120" width="100%" style="max-width:480px">
  <rect x="60" y="40" width="200" height="30" fill="#d9e2ec" stroke="#334e68"/>
  <text x="160" y="35" font-size="10" fill="#334e68" text-anchor="middle">长度 L</text>
  <text x="40" y="58" font-size="10" fill="#334e68" text-anchor="middle">S</text>
  <path d="M260 55 L290 55" stroke="#e03131" stroke-width="2" marker-end="url(#res1)"/>
  <defs><marker id="res1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <text x="160" y="95" font-size="11" fill="#243b53" text-anchor="middle">R = ρL/S</text>
</svg>

图中：导体电阻 R 与长度 L 成正比，与横截面积 S 成反比，ρ 为电阻率。

**动态表征。**
动画演示：同样接 3V 电压时，导线变长电阻变大、电流变小；导线变粗电阻变小、电流变大；换成电阻率更大的材料时，阻碍作用增强。

#### 本页主问题与引导演示
<iframe src="anim/bx3/resistance-law.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——R=\rho L/S 适用于粗细均匀、材料均匀的导体；金属电阻率随温度升高而增大；若发热明显，R 会变化；R=U/I 是定义式或测量式，不表示 R 由 U、I 决定。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可直接拖动：红色长度手柄改变 `L`、金色管壁改变横截面积 `S`，材料按钮改变电阻率 $\rho$。实时变化：$R=\rho L/S$ 和固定 3V 下的电流 $I=U/R$。

**证据任务。**
- 拖动红色手柄把导线拉长，看 `R` 如何变大、电子漂移如何变慢。
- 拖动金色管壁把导线变粗，看 `R` 如何变小。
- 切换铜、铝、镍铬，看同样 `L、S` 下材料电阻率 $\rho$ 对 `R` 的影响。
- 注意：改变外加电压会改变 `I`，但不改变导体本身的 `R`。

#### 规律、证据与核心概念
- **电阻定律**：R = ρL/S（ρ 为电阻率，由材料决定）。
- **电阻率**：与材料和温度有关。金属电阻率随温度升高而增大。
- **超导体**：温度低于临界温度时电阻率为零。
- **单位**：Ω，ρ 的单位为 Ω·m。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| `L` | 导线长度和绿色长度标尺 | L 变长，R 变大 |
| `S` | 导线粗细和金色管壁 | S 变大，R 变小 |
| $\rho$ | 材料按钮 | 材料不同，同样 L/S 下 R 不同 |
| $R=\rho L/S$ | 右侧电阻读数 | 与 L、ρ 正比，与 S 反比 |
| $I=U/R$ | 固定 3V 下电流读数和电子速度 | R 大，I 小 |

**适用边界。**
- $R=\rho L/S$ 适用于粗细均匀、材料均匀的导体。
- 金属电阻率随温度升高而增大；若发热明显，R 会变化。
- $R=U/I$ 是定义式或测量式，不表示 R 由 U、I 决定。

#### 边界检查与易错点
- 认为 R 与 U 或 I 有关（R 由导体本身决定，与 U、I 无关）。
- 忽略温度对电阻率的影响（金属温度升高 → ρ 增大 → R 增大）。
- 把横截面积 `S` 和直径 `d` 混淆；若给直径，要先算 $S=\pi d^{2}/4$。
- 忘记单位换算：$mm^{2}$ 要换成 $m^{2}$。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-12）

---

---

---

<h4 id="ohm-law">B3-13 欧姆定律 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-13
- 模块：必修3
- 主题：电路
- 高考功能：选择题 / 计算题
- 前置知识：B3-11 电流、B3-12 电阻

#### 情境与现象
通过导体的电流与导体两端的电压成正比，与导体的电阻成反比：I = U/R。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="60" y="50" width="80" height="40" fill="#d9e2ec" stroke="#334e68"/>
  <text x="100" y="73" font-size="11" fill="#334e68" text-anchor="middle">R</text>
  <path d="M30 70 L60 70" stroke="#334e68" stroke-width="2"/>
  <path d="M140 70 L170 70" stroke="#334e68" stroke-width="2"/>
  <path d="M170 50 L170 90 L200 90 L195 85 M200 90 L195 95" fill="none" stroke="#334e68" stroke-width="2"/>
  <path d="M200 50 L200 90 L210 85 L215 90 L210 95 L220 90" fill="none" stroke="#334e68" stroke-width="2"/>
  <text x="185" y="40" font-size="10" fill="#334e68" text-anchor="middle">U</text>
  <path d="M30 70 L20 70" stroke="#e03131" stroke-width="2" marker-end="url(#ohm1)"/>
  <defs><marker id="ohm1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#e03131"/></marker></defs>
  <text x="160" y="125" font-size="12" fill="#243b53" text-anchor="middle">I = U/R</text>
</svg>

图中：电阻 R 两端加电压 U，通过电流 I = U/R。

**动态表征。**
动画演示：线性电阻两端电压 U 逐渐增大时，电流 I 按同一比例增大，I-U 图像上的工作点沿过原点直线滑动。

#### 本页主问题与引导演示
<iframe src="anim/bx3/ohm-law.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：红色电压手柄、金色电阻手柄、I-U 图像上的蓝色工作点。可切换线性电阻与灯泡非线性模式。

**证据任务。**
- 在线性电阻模式下拖动红色 U 手柄，看电流 I 是否随 U 成正比变化。
- 拖动金色 R 手柄，看 R 变大时 I-U 图像斜率 `1/R` 如何变小。
- 拖动图像上的蓝色工作点，观察读数 `U、I` 与图像坐标是否一致。
- 切到灯泡非线性模式，看图线弯曲时为什么不能用一个固定 R 套全程。

#### 规律、证据与核心概念
- **欧姆定律**：I = U/R。
- **适用条件**：金属导体、电解液（线性元件）。不适用于气体、二极管等非线性元件。
- **伏安特性曲线**：I-U 图像为过原点的直线（线性元件），斜率 = 1/R。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| `U` | 红色电压手柄、电池高度和图像横坐标 | U 大，工作点右移 |
| `R` | 金色电阻手柄和右侧 R 读数 | R 大，斜率变小 |



> **公式首次使用卡**：适用边界——欧姆定律适用于温度等条件稳定的线性导体；灯泡、二极管、气体导电等非线性元件要用 I-U 图像或分段分析；R=U/I 可用于求某一工作点的等效电阻，但不一定说明元件是线性的。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| $I=U/R$ | 电荷流速、电流表读数和图像纵坐标 | U 增大 I 增大，R 增大 I 减小 |
| $\text{斜率}=I/U=1/R$ | I-U 图线倾斜程度 | 斜率越大，电阻越小 |
| 非线性元件 | 灯泡模式弯曲图线 | R 随工作点变，不能全程用同一个 R |

**适用边界。**
- 欧姆定律适用于温度等条件稳定的线性导体。
- 灯泡、二极管、气体导电等非线性元件要用 I-U 图像或分段分析。
- $R=U/I$ 可用于求某一工作点的等效电阻，但不一定说明元件是线性的。

#### 边界检查与易错点
- 把欧姆定律用于非线性元件（如二极管、气体导电）。
- 混淆 I-U 图像斜率与 R 的关系（斜率 = 1/R，斜率越大 R 越小）。
- 把 U-I 图像与 I-U 图像的斜率含义弄反。
- 认为电压变大导致电阻必然变大；线性电阻在条件稳定时 R 不随 U、I 变。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-13）

---

---

---

---

<h4 id="series-parallel">B3-14 串并联电路 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-14
- 模块：必修3
- 主题：电路
- 高考功能：选择题 / 计算题 / 实验题
- 前置知识：B3-13 欧姆定律

#### 情境与现象
串联电路中电流处处相等，电压分配；并联电路中电压相等，电流分配。

**静态表征。**
<svg viewBox="0 0 320 160" width="100%" style="max-width:480px">
  <text x="80" y="20" font-size="11" fill="#334e68" text-anchor="middle">串联</text>
  <rect x="30" y="40" width="40" height="20" fill="#d9e2ec" stroke="#334e68"/>
  <text x="50" y="54" font-size="9" fill="#334e68" text-anchor="middle">R₁</text>
  <rect x="90" y="40" width="40" height="20" fill="#d9e2ec" stroke="#334e68"/>
  <text x="110" y="54" font-size="9" fill="#334e68" text-anchor="middle">R₂</text>
  <rect x="150" y="40" width="40" height="20" fill="#d9e2ec" stroke="#334e68"/>
  <text x="170" y="54" font-size="9" fill="#334e68" text-anchor="middle">R₃</text>
  <path d="M10 50 L30 50" stroke="#334e68" stroke-width="1.5"/>
  <path d="M70 50 L90 50" stroke="#334e68" stroke-width="1.5"/>
  <path d="M130 50 L150 50" stroke="#334e68" stroke-width="1.5"/>
  <path d="M190 50 L210 50" stroke="#334e68" stroke-width="1.5"/>
  <text x="110" y="80" font-size="9" fill="#486581" text-anchor="middle">I 相同，U = U₁+U₂+U₃</text>
  <text x="240" y="20" font-size="11" fill="#334e68" text-anchor="middle">并联</text>
  <rect x="220" y="100" width="40" height="20" fill="#d9e2ec" stroke="#334e68"/>
  <text x="240" y="114" font-size="9" fill="#334e68" text-anchor="middle">R₁</text>
  <rect x="270" y="100" width="40" height="20" fill="#d9e2ec" stroke="#334e68"/>
  <text x="290" y="114" font-size="9" fill="#334e68" text-anchor="middle">R₂</text>
  <text x="265" y="140" font-size="9" fill="#486581" text-anchor="middle">U 相同，I = I₁+I₂</text>
</svg>

图中：串联电流相同电压相加；并联电压相同电流相加。

**动态表征。**
动画演示：串联时同一批电荷依次通过 R1、R2，电流处处相同，电压按电阻分配；并联时电流在节点分流，两支路电压相同，电阻小的支路电流更大。

#### 本页主问题与引导演示
<iframe src="anim/bx3/series-parallel.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：电源 U 手柄、R1/R2 金色电阻手柄；可切换串联/并联。实时变化：等效电阻、总电流、串联分压或并联分流。

**证据任务。**
- 串联模式下拖大 R1，看总电阻、总电流、U1/U2 如何变化。
- 并联模式下拖小 R1，看 I1 是否变大、等效电阻是否小于任一支路。
- 拖动电源 U，看串联的各段电压和并联各支路电流如何随 U 同比例变化。
- 对比两种模式：串联“同流分压”，并联“同压分流”。

#### 规律、证据与核心概念
- **串联**：I 相同，U = U₁+U₂+...，R = R₁+R₂+...。
- **并联**：U 相同，I = I₁+I₂+...，1/R = 1/R₁+1/R₂+...。
- **串联分压**：U₁/U₂ = R₁/R₂（电阻越大分压越多）。
- **并联分流**：I₁/I₂ = R₂/R₁（电阻越大分流越少）。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| 串联 `I` 相同 | 串联回路中同一电荷流 | 所有元件读同一总电流 |



> **公式首次使用卡**：适用边界——理想导线电阻忽略不计，电表理想化时成立；复杂混联电路要先识别哪些元件真的串联、哪些真的并联；若元件非线性，不能只用固定电阻等效，要结合伏安特性。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| 串联 $R=R_{1}+R_{2}$ | R1/R2 手柄和等效电阻读数 | 任一 R 变大，总 R 变大 |
| 串联分压 $U_{1}/U_{2}=R_{1}/R_{2}$ | 右侧 U1/U2 柱状图 | 电阻大分压大 |
| 并联 `U` 相同 | 两支路跨接同两节点 | R1、R2 两端电压都等于电源 U |
| 并联 $1/R=1/R_{1}+1/R_{2}$ | 等效电阻读数 | 总 R 小于任一支路 |
| 并联分流 $I_{1}/I_{2}=R_{2}/R_{1}$ | 右侧 I1/I2 柱状图 | 电阻小分流大 |

**适用边界。**
- 理想导线电阻忽略不计，电表理想化时成立。
- 复杂混联电路要先识别哪些元件真的串联、哪些真的并联。
- 若元件非线性，不能只用固定电阻等效，要结合伏安特性。

#### 边界检查与易错点
- 并联总电阻公式写成 R = R₁+R₂（应为 1/R = 1/R₁+1/R₂）。
- 认为并联后总电阻变大（实际并联后总电阻比任何一个都小）。
- 把“串联电流相同”和“并联电压相同”混反。
- 看到图上挨得近就认为串联；判断要看是否同一电流路径、是否接在同两节点。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-14）

---

---

---

---

<h4 id="joule-law">B3-15 焦耳定律 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-15
- 模块：必修3
- 主题：电路
- 高考功能：选择题 / 计算题
- 前置知识：B3-13 欧姆定律

#### 情境与现象
电流通过导体产生热量：Q = I²Rt。这是电流的热效应。

**静态表征。**
<svg viewBox="0 0 320 120" width="100%" style="max-width:400px">
  <rect x="80" y="40" width="160" height="30" fill="#e03131" opacity="0.3" stroke="#e03131"/>
  <text x="160" y="58" font-size="11" fill="#e03131" text-anchor="middle">R（发热）</text>
  <path d="M40 55 L80 55" stroke="#334e68" stroke-width="2" marker-end="url(#j1)"/>
  <defs><marker id="j1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#334e68"/></marker></defs>
  <text x="60" y="48" font-size="10" fill="#334e68" text-anchor="middle">I</text>
  <path d="M240 55 L280 55" stroke="#334e68" stroke-width="2"/>
  <text x="160" y="95" font-size="12" fill="#243b53" text-anchor="middle">Q = I²Rt</text>
</svg>

图中：电流 I 通过电阻 R 产生热量 Q = I²Rt。

**动态表征。**
动画演示：电流通过电阻丝时电阻丝变热；同样 R 和 t 下，电流加倍，热量变为 4 倍。切到电动机时，输入电能分成线圈发热和机械输出。

#### 本页主问题与引导演示
<iframe src="anim/bx3/joule-law.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>




> **公式首次使用卡**：适用边界——Q=I^{2}Rt 是电流热效应公式，可用于电阻发热；纯电阻电路中 W=Q，可用 UI、I^{2}R、U^{2}/R 任一功率式；非纯电阻中总电功用 W=UIt，发热只用 Q=I^{2}Rt，不能用 U^{2}/R 算总功率。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

可直接拖动：电流 `I`、电阻 `R`、时间 `t` 三个手柄；可切换纯电阻/电动机。实时变化：电热 $Q=I^{2}Rt$、输入电能 $W=UIt$ 和其他能量。

**证据任务。**
- 拖动 `I` 手柄，看电流变为 2 倍时热量是否约变为 4 倍。
- 拖动 `R`、`t` 手柄，看热量是否按正比变化。
- 切到电动机模式，看 $W=UIt$ 为什么大于线圈热量 $Q=I^{2}Rt$。
- 对比纯电阻模式：电能全部转化为热，$W=Q$。

#### 规律、证据与核心概念
- **焦耳定律**：电流和电阻近似恒定时，电阻元件产生的热量 $Q=I^{2}Rt$；电动机线圈等非纯电阻用电器的线圈热也按此计算。
- **电功率**：P = UI = I²R = U²/R（纯电阻）。
- **纯电阻**：电能全部转化为热能，W = Q = I²Rt = UIt。
- **非纯电阻**：如电动机，W = UIt > Q = I²Rt（部分转化为机械能）。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| `I` | 红色 I 手柄 | Q 随 I 的平方变 |
| `R` | 金色 R 手柄和电阻丝 | Q 随 R 正比变 |
| `t` | 蓝色 t 手柄 | Q 随时间正比积累 |
| $Q=I^{2}Rt$ | 红色热量柱 | 任何电路中线圈/电阻发热都这样算 |
| $W=UIt$ | 蓝色输入电能柱 | 非纯电阻中 W 不全等于 Q |
| `W-Q` | 绿色其他能量柱 | 电动机输出机械能等其他能量 |

**适用边界。**
- $Q=I^{2}Rt$ 是恒定电流、恒定电阻条件下的电流热效应公式，可用于电阻元件发热；只有纯电阻用电器才有输入电功全部转化为热，即 $W=Q$。
- 纯电阻电路中 $W=Q$，可用 $UI、I^{2}R、U^{2}/R$ 任一功率式。
- 非纯电阻中总电功用 $W=UIt$，发热只用 $Q=I^{2}Rt$，不能用 $U^{2}/R$ 算总功率。

#### 边界检查与易错点
- 在非纯电阻电路中用 W = U²/R 或 W = I²R 算总功（只适用于纯电阻）。
- 混淆电功 W = UIt 和电热 Q = I²Rt（纯电阻时相等，非纯电阻时 W > Q）。
- 忽略电流平方：I 加倍，热量不是加倍而是变 4 倍。
- 时间单位未统一，分钟要换成秒。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-15）

---

---

---

<h4 id="closed-circuit">B3-16 闭合电路欧姆定律 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-16
- 模块：必修3
- 主题：电路
- 高考功能：选择题 / 计算题 / 实验题 / 综合题
- 前置知识：B3-13 欧姆定律（本页先给出所需的电动势定义，B3-17 再专门深化）
- 后续应用：电学实验、电路动态分析

#### 本页主问题与引导演示
<iframe src="anim/bx3/closed-circuit-law.html" width="100%" height="620" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：先备概念——电动势 $\varepsilon$ 表示电源内非静电力对单位正电荷所做的功，单位为伏特，B3-17 将专门深化。本页使用电动势和内阻近似恒定的直流电源；外电路按纯电阻等效，电源有内阻 $r$，理想电源才取 $r=0$。短路和断路必须作为 $R=0$ 与 $I=0$ 的显式边界处理，不能用普通滑块端点冒充。其余符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

#### 情境与现象
闭合电路中，电流 I = ε/(R+r)，路端电压 U = ε - Ir。外阻 R 变大时，I 减小，U 增大（反向变化）。

**静态表征。**
<svg viewBox="0 0 320 160" width="100%" style="max-width:480px">
  <rect x="40" y="40" width="240" height="80" fill="none" stroke="#334e68" stroke-width="2"/>
  <path d="M40 70 L40 60 M44 65 L44 75" stroke="#334e68" stroke-width="2"/>
  <text x="30" y="70" font-size="10" fill="#334e68" text-anchor="end">ε,r</text>
  <rect x="200" y="70" width="40" height="20" fill="#d9e2ec" stroke="#334e68"/>
  <text x="220" y="84" font-size="10" fill="#334e68" text-anchor="middle">R</text>
  <path d="M280 40 L280 120" stroke="#e03131" stroke-width="0" />
  <path d="M260 80 L280 80" stroke="#f0a500" stroke-width="2" marker-end="url(#cc1)"/>
  <defs><marker id="cc1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L5 3 L0 6" fill="#f0a500"/></marker></defs>
  <text x="160" y="30" font-size="10" fill="#f0a500" text-anchor="middle">I = ε/(R+r)</text>
  <text x="160" y="145" font-size="10" fill="#486581" text-anchor="middle">U = ε - Ir</text>
</svg>

图中：电源电动势 ε、内阻 r、外阻 R 组成闭合电路。I = ε/(R+r)，路端电压 U = ε - Ir。

**动态表征。**
自动演示：改变外阻 R，看电流 I 和路端电压 U 如何反向变化，U-I 图像上的工作点如何滑动。

可直接拖动：外阻 R、电动势 ε、内阻 r、U-I 图像工作点。实时变化：电流 I、路端电压 U、内压降 Ir、U-I 图像截距与斜率。

**证据任务。**
- 拖动金色 R 手柄，看路端电压 U 和电流 I 如何反向变化（R↑ → I↓ → U↑）。
- 点“短路 $R=0$”时，动画应给出 $U=0、I=\varepsilon/r$；普通滑块的最小正电阻不能冒充短路。
- 点“断路 $I=0$”时，动画应给出 $U=\varepsilon、I=0$；普通滑块的有限大电阻只能表示趋近断路。
- 拖 U-I 图像上的蓝色工作点，看它沿 $U=\varepsilon -Ir$ 直线滑动，并等价于改变外阻 R。

#### 规律、证据与核心概念
电源内部有非静电力做功（电动势 ε），但内阻 r 上有电压降 Ir。所以路端电压 U = ε - Ir。结合欧姆定律 U = IR，得 I = ε/(R+r)。这是闭合电路欧姆定律。

**概念辨析。**
- **公式**：I = ε/(R+r)，U = ε - Ir。
- **路端电压**：外电路两端的电压 U。
- **短路**：R = 0 → U = 0，I = ε/r（最大电流，危险）。
- **断路**：R → ∞ → I = 0，U = ε（路端电压等于电动势）。
- **U-I 图像**：直线，纵截距 = ε，斜率 = -r。

#### 公式、变量、单位与条件
- I = ε/(R+r) → 图中电流读数
- U = ε - Ir → 图中路端电压读数
- U-I 图像斜率 = -r → 图中直线斜率
- U-I 图像纵截距 = ε → 图中直线与 U 轴交点

**适用边界。**
- 纯电阻外电路。
- 电源有内阻 r（理想电源 r = 0）。

#### 应用与迁移
- 选择题：电路动态分析（R 变化 → I、U 如何变）。
- 计算题：求电流、电压、功率。
- 实验题：测电源电动势和内阻（U-I 图像法）。
- 综合题：含电容器的电路。

**解题路径。**
1. 识别电源 ε、内阻 r、外阻 R；
2. 用 I = ε/(R+r) 求总电流；
3. 用 U = ε - Ir 求路端电压；
4. 动态分析：R↑ → I↓ → U↑，反之亦然；
5. U-I 图像法：纵截距 = ε，斜率绝对值 = r。

#### 边界检查与易错点
- 忘记内阻 r（把 U 当成 ε）。
- 动态分析方向判断错误（R 变大 → I 变小 → U 变大）。
- 短路时认为 U = ε（实际 U = 0）。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-16）

<h4 id="emf">B3-17 电源电动势 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-17
- 模块：必修3
- 主题：电路
- 高考功能：选择题 / 实验题
- 前置知识：B3-11 电流、B3-13 欧姆定律
- 关联应用：B3-16 闭合电路欧姆定律

#### 情境与现象
电源电动势是电源把非电能转化为电能的本领。在稳态断路、用理想电压表测量的近似条件下，其数值等于电源两端电压。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="100" y="40" width="120" height="60" fill="#eef2f7" stroke="#334e68" stroke-width="2"/>
  <path d="M100 60 L100 50 M104 55 L104 65" stroke="#334e68" stroke-width="2"/>
  <path d="M100 80 L100 70 M104 75 L104 85" stroke="#334e68" stroke-width="2"/>
  <text x="160" y="75" font-size="11" fill="#334e68" text-anchor="middle">电源</text>
  <text x="160" y="30" font-size="11" fill="#e03131" text-anchor="middle">ε（电动势）</text>
  <path d="M100 100 L100 120 L220 120 L220 100" fill="none" stroke="#aab8c2" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="160" y="135" font-size="10" fill="#486581" text-anchor="middle">稳态断路、理想测量：U = ε</text>
</svg>




#### 本页主问题与引导演示
<iframe src="anim/bx3/emf.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——电动势由电源本身决定，和外电路是否接通无关；路端电压取决于外电路和内阻。电源放电、约定电流从正极流出时 $U=\varepsilon-Ir<\varepsilon$；给电源充电、电流流入正极时 $U=\varepsilon+Ir>\varepsilon$；$U=\varepsilon$ 对应稳态断路或测量电流可忽略的理想化条件，实际电压表仍会取微小电流。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

图中：电源符号；稳态断路且电压表可视为理想时，两端电压 $U=\varepsilon$。电动势是电源的本领，由电源本身决定。

**动态表征。**
动画演示：电源内部的非静电力把正电荷从负极搬到正极，每搬运 1C 电荷做功 ε 焦耳；接上外电路后，由于内阻分压，路端电压 U 小于 ε。

可直接拖动：电动势 ε、电荷量 q、外阻 R。实时变化：非静电力做功 $W_{\text{非}}=q\varepsilon$、闭合电路电流、路端电压 $U=\varepsilon -Ir$。

**证据任务。**
- 拖动 q，看 $W_{\text{非}}$ 随 q 成正比，但 $\varepsilon =W_{\text{非}}/q$ 不变。
- 拖动 ε，看每库仑电荷获得的能量如何变大。
- 拖动 R，看接外电路后路端电压 U 如何接近或低于 ε。
- 对比断路极限：I=0 时 U=ε；闭合有电流时 U=ε-Ir。

#### 规律、证据与核心概念
- **电动势**：非静电力把单位正电荷从负极搬到正极所做的功。ε = W非/q。
- **物理意义**：电源把其他形式能量转化为电能的本领。
- **断路电压**：稳态断路、测量电流可忽略时 $U\approx\varepsilon$；理想电压表模型下取等号。
- **与电压的区别**：电动势是电源属性，电压是电路中两点电势差。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| $\varepsilon =W_{\text{非}}/q$ | 绿色非静电力箭头与 W非/q 读数 | q 变，W非 变，ε 不随 q 变 |
| $W_{\text{非}}=q\varepsilon$ | 绿色能量柱 | ε 或 q 变大，非静电力做功变大 |
| $U=\varepsilon -Ir$ | 路端电压读数与蓝色 qU 能量柱 | 接外电路时 U 小于 ε |
| $I=\varepsilon /(R+r)$ | 闭合时电流读数 | R 大，I 小，U 更接近 ε |
| 断路 $U=\varepsilon$ | R 很大、I 接近 0 的极限 | 路端电压才等于电动势 |

**适用边界。**
- 电动势由电源本身决定，和外电路是否接通无关。
- 路端电压取决于外电路和内阻。电源放电、约定电流从正极流出时 $U=\varepsilon-Ir<\varepsilon$；充电时电流流入正极，$U=\varepsilon+Ir>\varepsilon$。
- $U=\varepsilon$ 对应稳态断路或测量电流可忽略的理想化条件；实际电压表仍会取微小电流。
- 测电动势和内阻常用 $U=\varepsilon -Ir$ 的 U-I 图像。

#### 边界检查与易错点
- 混淆电动势和电压（电动势是电源属性，电压是两点电势差）。
- 认为接外电路后电动势变小（电动势不变，是路端电压变小）。
- 认为电动势就是“电源两端任何时候的电压”（只有断路理想测量时 U=ε）。
- 忘记电动势单位 V 也可理解为 J/C。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-17）

---

---

---

---

<h4 id="multimeter">B3-18 多用电表 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-18
- 模块：必修3
- 主题：电路
- 高考功能：实验题
- 前置知识：B3-13 欧姆定律、B3-16 闭合电路欧姆定律

#### 情境与现象
多用电表可以测电压、电流和电阻。测电阻时用内部电源，利用闭合电路欧姆定律。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:400px">
  <rect x="100" y="30" width="120" height="80" fill="#f7f9fc" stroke="#334e68" stroke-width="2" rx="8"/>
  <circle cx="160" cy="60" r="25" fill="#fff" stroke="#334e68" stroke-width="1.5"/>
  <path d="M160 60 L175 50" stroke="#e03131" stroke-width="2"/>
  <text x="160" y="105" font-size="10" fill="#334e68" text-anchor="middle">多用电表</text>
  <text x="160" y="125" font-size="9" fill="#486581" text-anchor="middle">测 V / A / Ω</text>
</svg>

图中：多用电表，可测电压（并联）、电流（串联）、电阻（内部电源）。

**动态表征。**
动画演示：切换 V/A/Ω 挡位时，表笔接法、表盘刻度和读数规则同时改变；欧姆挡若未调零或被测电路带电，会直接判为不合格。

#### 本页主问题与引导演示
<iframe src="anim/exp/multimeter-practice-lab.html" width="100%" height="650" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可调对象：测量模式、量程/倍率、被测量大小、欧姆调零、被测电路是否带电。实时变化：指针偏转、读数、接法提示和通过/不通过诊断。

**证据任务。**
- 切换到电压挡，看提示是否要求并联接入。
- 切换到电流挡，看提示是否要求串联接入。
- 切换到欧姆挡，故意把“被测电路带电”设为“是”，看为什么测电阻必须断电。
- 改变倍率和欧姆调零，看读数为什么要“刻度值 × 倍率”，以及换挡后为什么要重新调零。

#### 规律、证据与核心概念
- **测电压**：并联接入，内阻很大。
- **测电流**：串联接入，内阻很小。
- **测电阻**：内部有电源，调零后 I = ε/(Rg+r+Rx)，表盘刻度不均匀。
- **欧姆表原理**：红黑表笔间接被测电阻 Rx，I = ε/(R内+Rx)，I 与 Rx 一一对应。

#### 公式、变量、单位与条件
| 公式或量 | 画面对应 | 调节时看什么 |
|---|---|---|
| 电压表并联 | V 挡接法提示 | 红表笔接高电势端 |
| 电流表串联 | A 挡接法提示 | 超量程会提示可能损坏表头 |



> **公式首次使用卡**：适用边界——测电压必须并联，测电流必须串联；测电阻必须断开被测电路电源，且换倍率后要重新欧姆调零；指针应尽量落在中间区域，太靠左/靠右都应换挡。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| $Rx=\text{刻度}\times \text{倍率}$ | 欧姆挡读数结果 | 倍率变，最终电阻读数成倍变 |
| 欧姆挡 $I=\varepsilon /(R_{\text{内}}+Rx)$ | 表针偏转与非均匀刻度 | Rx 越大，电流越小，指针越靠左 |
| 欧姆调零 | zero 调节与状态提示 | 换倍率后未调零，读数不可靠 |

**适用边界。**
- 测电压必须并联，测电流必须串联。
- 测电阻必须断开被测电路电源，且换倍率后要重新欧姆调零。
- 指针应尽量落在中间区域，太靠左/靠右都应换挡。

#### 边界检查与易错点
- 测电阻时不调零（每次换档都要欧姆调零）。
- 测电阻时带电测量（必须断电）。
- 电流挡并联接入，容易烧表。
- 欧姆挡读数忘记乘倍率。
- 手同时接触两表笔金属部分，人体电阻会并入被测电阻。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-18）

---

## 3.3 电磁波与能源 <h3 id="em-energy"></h3>

---

---

<h4 id="em-wave">B3-19 电磁场与电磁波 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: stse-extension; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标
- 编号：B3-19
- 模块：必修3
- 主题：电磁波
- 高考功能：选择题
- 前置知识：B3-03 电场强度
- 后续应用：选必2 电磁感应

#### 技术与社会情境
变化的电场产生磁场，变化的磁场产生电场（麦克斯韦理论）。变化的电场和磁场交替产生，以波的形式传播 → 电磁波。E ⊥ B ⊥ 传播方向。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <path d="M20 70 L300 70" stroke="#aab8c2" stroke-width="1" stroke-dasharray="4,3"/>
  <path d="M20 70 Q60 30 100 70 Q140 110 180 70 Q220 30 260 70 Q280 50 300 70" fill="none" stroke="#e03131" stroke-width="2"/>
  <text x="160" y="25" font-size="10" fill="#e03131" text-anchor="middle">E（电场）</text>
  <path d="M300 70 L290 65 L290 75 Z" fill="#2c7be5"/>
  <text x="280" y="90" font-size="10" fill="#2c7be5" text-anchor="middle">k（传播方向）</text>
  <text x="160" y="130" font-size="10" fill="#486581" text-anchor="middle">v = λf；真空中 v = c</text>
</svg>

图中：电磁波中 E 场（红色）垂直于传播方向 k（蓝色），B 场垂直于 E 和 k。

**动态表征。**
自动演示：E 场和 B 场同频同相振动，沿传播方向 k 传播。

#### 本页主问题与引导演示
<iframe src="anim/bx3/em-wave.html" width="100%" height="560" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可拖动参数：频率 f、振幅，也可直接拖动画面里的 λ 手柄。实时变化：E 场（红色竖直）、B 场（蓝色为垂直纸面方向的投影）、波长 λ = c/f。

**证据任务。**
- 看 E 场（红色竖直）和 B 场（蓝色垂直纸面方向投影）如何同频同相振动。
- 看 E ⊥ B ⊥ 传播方向 k（三者互相垂直）。
- 拖动 f 或 λ 手柄，看波长 λ 如何反比变化（f 越大 λ 越短）。

#### 核心物理机制与证据
麦克斯韦电磁场理论：变化的电场在周围空间产生磁场，变化的磁场在周围空间产生电场。这种交替变化的场以波的形式传播 → 电磁波。赫兹实验（1888 年）证实了电磁波的存在。

**概念辨析。**
- **传播速度**：真空中 c = 3×10⁸ m/s（光速）。
- **波长频率关系**：同一介质中 $v=\lambda f$；真空中 $v=c=3×10^{8}\ \mathrm{m/s}$，空气中可近似取 c。
- **电磁波谱**：无线电波 → 微波 → 红外线 → 可见光 → 紫外线 → X 射线 → γ 射线。
- **不需要介质**：电磁波可在真空中传播。
- **E ⊥ B ⊥ k**：三者互相垂直。

#### 定量关系、变量、单位与边界
- $v=\lambda f$ → 图中波长和频率；本动画的真空/空气模式取 $v=c$
- c = 3×10⁸ m/s → 图中传播速度
- E ⊥ B ⊥ k → 图中三个方向的关系

#### 证据限制与常见误区
- 认为电磁波需要介质传播（不需要，可在真空中传播）。
- 混淆电磁波谱的顺序（频率从低到高：无线电 → 微波 → 红外 → 可见光 → 紫外 → X → γ）。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-19）

---

---

---

<h4 id="energy">B3-20 能源与可持续发展 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: stse-extension; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 编号：B3-20
- 模块：必修3
- 主题：能源
- 高考功能：选择题（背景知识）
- 前置知识：能量守恒

#### 技术与社会情境
能源是人类社会发展的基础。煤、石油、天然气和核燃料都属于不可再生资源；太阳能、风能、水能等属于可再生能源。核能在发电阶段具有低碳特点，但不能因此称为可再生能源；任何能源方案都要结合安全、资源补给、储能输电和全生命周期环境影响评价。

**静态表征。**
<svg viewBox="0 0 320 140" width="100%" style="max-width:480px">
  <rect x="20" y="40" width="60" height="60" fill="#d9e2ec" stroke="#334e68"/>
  <text x="50" y="75" font-size="9" fill="#334e68" text-anchor="middle">化石</text>
  <text x="50" y="88" font-size="8" fill="#e03131" text-anchor="middle">不可再生</text>
  <rect x="130" y="40" width="60" height="60" fill="#d4edda" stroke="#334e68"/>
  <text x="160" y="75" font-size="9" fill="#334e68" text-anchor="middle">太阳能</text>
  <text x="160" y="88" font-size="8" fill="#1a7a1a" text-anchor="middle">可再生</text>
  <rect x="240" y="40" width="60" height="60" fill="#d4edda" stroke="#334e68"/>
  <text x="270" y="75" font-size="9" fill="#334e68" text-anchor="middle">核能</text>
  <text x="270" y="88" font-size="8" fill="#f0a500" text-anchor="middle">高效</text>
  <text x="160" y="125" font-size="10" fill="#486581" text-anchor="middle">能量守恒，能量品质降低</text>
</svg>

图中：化石能源不可再生，太阳能/风能可再生，核能高效。能量转化过程中总能量守恒但能量品质降低（热力学第二定律）。

**动态表征。**
动画演示：一次能源输入转化为有用电能和废热。总能量守恒，但废热属于低品质能量，难以继续完全利用；能源结构中化石占比越高，碳排越大。

#### 本页主问题与引导演示
<iframe src="anim/bx3/energy-sustainability.html" width="100%" height="610" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

可直接拖动：用电量、化石能源占比、平均发电效率。实时变化：一次能源输入、有用电能、废热和碳排估算。

**证据任务。**
- 拖动化石能源占比，看同样用电量下碳排如何变化。
- 拖动效率，看输入能量如何分成有用电能和废热。
- 拖动用电量，看能源需求和排放如何同步放大。
- 观察“能量守恒”和“能源危机”为什么不矛盾：总量守恒，但可用能品质降低。

#### 核心物理机制与证据
- **能量守恒**：能量不会凭空产生或消失，只能从一种形式转化为另一种形式。
- **能量品质**：能量转化过程中，有用能减少（热力学第二定律的方向性）。
- **可再生能源**：太阳能、风能、水能、生物质能。
- **不可再生能源**：煤、石油、天然气、核燃料。

#### 定量关系、变量、单位与边界
| 公式或量 | 画面对应 | 拖动时看什么 |
|---|---|---|
| 输入能量 = 有用电能 + 废热 | 柱状图三根能量柱 | 总量守恒，但废热难以再利用 |



> **公式首次使用卡**：适用边界——页面中的碳排为教学估算，真实排放取决于地区能源结构和全生命周期；可再生不一定等于完全无环境影响；核能低碳但核燃料不可再生；能量守恒讨论总量，能源可持续讨论可用能、环境和资源补给速度。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

| 效率 $\eta =E_{\text{有用}}/E_{\text{输入}}$ | 效率手柄与输入/废热读数 | η 越高，同样用电所需输入越少 |
| 化石占比 | 化石占比手柄和 CO₂ 柱 | 化石占比越高，排放越大 |
| 用电量 | 用电量手柄 | 需求越大，输入和排放同步放大 |
| 能量品质降低 | 废热柱 | 能源危机是可用能问题，不是总能量消失 |

**适用边界。**
- 页面中的碳排为教学估算，真实排放取决于地区能源结构和全生命周期。
- 可再生不一定等于完全无环境影响；核能低碳但核燃料不可再生。
- 能量守恒讨论总量，能源可持续讨论可用能、环境和资源补给速度。

#### 证据限制与常见误区
- 认为能量守恒意味着能量危机不存在（能量守恒但可用能减少）。
- 混淆可再生能源和清洁能源（核能清洁但不可再生）。
- 认为“新能源”完全没有环境代价。
- 只看发电端，不看效率、储能、输电和全生命周期影响。

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-20）

---
---

---

<h4 id="electrostatic-induction-protection">B3-21 静电感应、静电利用与防护 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 理解导体静电平衡时内部电场为零，净电荷分布在外表面。
- 会解释带电体靠近导体时的静电感应与感应起电。
- 会分析接地、验电器、法拉第笼、避雷针等应用。
- 会区分静电利用和静电防护。

#### 情境与现象
带正电的棒靠近中性导体，导体内自由电子被吸引到近端，远端相对显正电。导体总电荷仍可为零，但两端电荷分布已经改变。若接地，电子可以流入或流出，导体最终可能带电。

#### 本页主问题与引导演示
<iframe src="anim/bx3/electrostatic-induction.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

**证据任务。**
- 拖动带电棒靠近导体：看近端、远端电荷如何重新分布。
- 切换“接地”：看电子为什么能从大地流入或流出。
- 切换“屏蔽”：看法拉第笼内部电场为什么近似为零。
- 切换“避雷针”：看尖端放电如何把强电场风险引走。

#### 规律、证据与核心概念
导体静电平衡有三个关键结论：




> **公式首次使用卡**：适用边界——静电感应结论针对导体达到静电平衡后的状态；导体内部场强为零、净电荷分布在表面；接地、断地和移走带电体的操作顺序会改变结果。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

```text
导体内部电场 E = 0
在导体内部没有带电体、且没有封闭空腔内置电荷的高中常用模型中，净电荷分布在导体外表面
导体表面附近电场方向垂直表面
```

静电感应不一定让物体带净电；只有经过接地、分离等步骤，才可能把感应分布转化为净带电。

#### 应用与防护
| 场景 | 物理机制 | 判断要点 |
|---|---|---|
| 验电器张角 | 同种电荷排斥 | 看是否有净电荷或感应分布 |
| 接地感应起电 | 大地提供电子库 | 带电体靠近后接地，必须先断开接地，再移走带电体 |
| 法拉第笼 | 导体壳外表面重排电荷 | 内部电场近似为零 |
| 避雷针 | 尖端电场强，优先放电 | 引导电荷安全入地 |

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “感应后导体一定带净电” | 可能只是电荷重新分布 | 看是否接地/分离 |
| “导体内部有很强电场” | 静电平衡时内部 $E=0$ | 用电荷重排抵消外场 |
| “法拉第笼挡住所有物理影响” | 主要是静电屏蔽 | 区分静电、电磁波、机械影响 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-21）

<h4 id="household-circuit-safety">B3-22 家庭电路、安全用电与节约用电 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 理解家庭电路中的火线、零线、地线、开关、保险丝/空气开关和漏电保护器。
- 会判断短路、过载、漏电和触电路径。



#### 本页主问题与引导演示
<iframe src="anim/bx3/household-circuit.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——家庭电路按额定交流电压和正确火线、零线、保护接地连接分析；P=UI 用于相应稳态用电器，电能计算还需明确时间和计费单位；安全操作优先于计算。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 会用 $I=P/U$ 估算家庭电路电流。
- 会提出安全用电和节约用电方案。

#### 情境与现象
我国居民家庭低压供电的额定交流电压有效值约为 `220 V`，不是任一时刻都恒定为 220 V。正常情况下电流从火线经过开关、用电器回到零线；保护地线连接用电器金属外壳，一旦漏电可提供低阻故障通路，并配合漏电保护器或过流保护切断电源。

**证据任务。**
- 切换“正常”：看开关为什么应接在火线上。
- 切换“过载”：看总功率变大时电流如何超过安全值。
- 切换“短路”：看电流为什么突然很大。
- 切换“漏电”：看漏电保护器为什么比较火线和零线电流差。

#### 规律、证据与核心概念
家庭电路常用关系：

```text
U ≈ 220 V
I = P / U
过载：总功率过大，电流过大
短路：电阻极小，电流极大
漏电：火线电流与零线电流不相等
```

保护装置各司其职：保险丝/空气开关主要防过流，漏电保护器主要防漏电触电，地线为金属外壳提供低阻安全通路。

#### 安全与节能
| 情境 | 危险/浪费原因 | 正确做法 |
|---|---|---|
| 多个大功率电器同插座 | 过载发热 | 分路使用，估算总功率 |
| 湿手触摸开关 | 人体电阻降低 | 保持干燥，先断电 |
| 金属外壳未接地 | 漏电时外壳带电 | 三孔插座接地 |
| 长时间待机 | 无效耗电 | 关闭电源或用智能插座 |

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “开关接零线也一样” | 断开后用电器仍可能带火线电位 | 开关接火线 |
| “保险丝越粗越安全” | 过流时不易熔断 | 选额定电流合适的保险 |
| “地线平时没电流就没用” | 漏电时提供保护通路 | 金属外壳必须接地 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-22）

<h4 id="capacitor-charge-discharge-graph">B3-23 电容器充放电实验与图像 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标
- 能说清电容器充电、放电时电压和电流的变化方向。



#### 本页主问题与引导演示
<iframe src="anim/exp/capacitor-charge-discharge-lab.html" width="100%" height="730" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——指数充放电和时间常量 τ=RC 只用于线性电阻、恒定电容和理想直流阶跃的 RC 电路；电流方向按预先约定；测量仪表内阻不可忽略时需修正模型。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 会从 `U-t`、`I-t` 图像读出时间常数 $\tau =RC$。
- 能把图像面积、斜率和电路实物读数联系起来。
- 会用电容充放电解释延时电路、闪光灯和传感器采样。

#### 情境与现象
在线性电阻、恒定电容和理想直流阶跃模型中，若电容器初始未充电，接上电源后极板电荷逐渐积累，电容器电压 `Uc` 从 0 升高到接近电源电压，充电电流从最大逐渐减小；放电时，`Uc` 和电流都按指数规律衰减，电流方向与充电相反。若初始已经带电，起始电压不再是 0。

**证据任务。**
- 拖动三挡开关到“充电”：看 `Uc` 如何上升，`I` 如何衰减。
- 把电阻 `R` 调大：看图像变“慢”，时间常数 $\tau =RC$ 变大。
- 把电容 `C` 调大：看达到同一电压需要更久。
- 点击“记录点”：用数据表判断 $Uc\approx 0.632E$ 对应的时间是否约为 `RC`。

#### 规律、证据与核心概念

```text
充电：Uc = E(1 - e^(-t/RC))，I = (E/R)e^(-t/RC)
放电：Uc = U0 e^(-t/RC)，I = -(U0/R)e^(-t/RC)
时间常数：τ = RC
t = τ 时，充电电压 Uc ≈ 0.632E
I-t 图像面积表示通过电路的电荷量
```

公式要绑定图像读数：横轴读时间 `t`，纵轴读 `Uc` 或 `I`，`R` 与 `C` 决定曲线快慢，电流方向由开关连接方式决定。

#### 图像判读
| 图像/读数 | 物理含义 | 常见考法 |
|---|---|---|
| `Uc-t` 上升并逐渐变平 | 电容器逐渐接近电源电压 | 读 `0.632E` 找 $\tau$ |
| `I-t` 从最大值衰减到 0 | 电荷移动越来越慢 | 由初值求 `R` 或判断方向 |
| `I-t` 面积 | 通过电荷量 `Q` | 与 $Q=CU$ 对照 |
| 放电电流为负 | 方向与充电相反 | 判断电流表指针偏转方向 |

#### 边界检查与易错点
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “电容器接上电源瞬间电压就是 E” | 电压需要按指数规律上升 | 先看 $t=0$ 与 $t\to \infty$ |
| “R 只影响电流，不影响充电时间” | $\tau =RC$，R 越大过程越慢 | 同时判断初始电流和曲线快慢 |
| “放电时电流大小不变” | 电压衰减，电流也衰减 | 用 $I=Uc/R$ 动态判断 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-23）

<h4 id="em-wave-applications-communication">B3-24 电磁波应用与现代通信 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: stse-extension; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标



#### 本页主问题与引导演示
<iframe src="anim/bx3/em-wave-applications.html" width="100%" height="730" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>


> **公式首次使用卡**：适用边界——真空中电磁波速率取 c，满足 c=λf；进入介质时频率由波源决定而保持不变，传播速度和波长随介质改变；通信结论还受带宽、衰减和噪声限制。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

- 理解电磁波能在真空和空气中传播，满足 $c=\lambda f$。
- 能区分广播、雷达、卫星通信、光纤通信的核心物理量。
- 会用传播延迟 $t=d/c$ 和雷达测距 $s=ct/2$ 做基础判断。
- 能把频率、波长、带宽、能量和通信效果联系起来。

#### 技术与社会情境
现代通信的共同底层是“把信息加载到电磁波上，再让接收端还原信息”。频率决定波长，带宽影响可传信息量，距离带来传播延迟和信号衰减。雷达多看回波时间，卫星通信多看远距离延迟，光纤通信多利用高频光波和大带宽。

**证据任务。**
- 切换“广播”：看调制波形如何携带声音信息。
- 切换“卫星”：看距离变大时传播延迟如何明显增大。
- 切换“雷达”：看发射波和回波为什么对应往返时间。
- 切换“光纤”：看红外光进入介质后传播速度和波长如何改变，并区分“载波频率高”与“系统可用带宽大”这两个不同概念。

#### 核心物理机制与证据

```text
一般波速关系：v = λf
真空中：c = 3.0×10^8 m/s；空气中近似取 c，光纤中 v<c
传播延迟：t = d / v（空气中近似取 v=c）
雷达测距：s = ct / 2
光子能量：E = hf
```

同一介质中频率升高时波长变短；传播速度主要由介质决定，不是“频率越高传播越快”。载波频率和可用带宽不是同一个量，通信容量还取决于可用带宽、信噪比、调制编码、发射功率、接收条件和距离。

#### 应用归纳
| 应用 | 看见的物理过程 | 高考常考判断 |
|---|---|---|
| 广播通信 | 声音信号调制到电磁波 | 载波传信息，接收端解调 |
| 雷达测距 | 发射脉冲，接收回波 | 距离用 $s=ct/2$，不能漏掉往返 |
| 卫星通信 | 地面站、卫星、接收端之间传播 | 远距离带来延迟 |
| 光纤通信 | 红外光脉冲在介质中以小于 c 的速度传播 | 光纤系统可提供很大的可用带宽，且抗外界电磁干扰 |

#### 证据限制与常见误区
| 易错说法 | 为什么错 | 改法 |
|---|---|---|
| “频率越高，传播越快” | 同一介质中波速近似由介质决定 | 用 $v=\lambda f$ 判断波长改变；真空/空气近似时才令 $v=c$ |
| “载波频率高就必然传得更多” | 载波频率和可用带宽不是同一个量 | 结合带宽、信噪比和调制编码判断通信容量 |
| “雷达时间就是单程时间” | 信号经历发射到目标再返回 | 距离公式用 `ct/2` |
| “光纤通信不是电磁波” | 光也是电磁波 | 把光纤看作高频电磁波通信 |

#### 例题与训练（来源审核中）

> 本节点的历史自由文本例题已移入隔离区。仅当结构化题目通过来源政策 2.0、答案独立复算和发布门禁后，才会在此生成学生可见的静态例题。（节点：B3-24）

## 必修3课标基础链路：磁场与电磁感应初步

> 课标依据：必修3“电磁场与电磁波初步”3.3.1—3.3.3。本节建立必修层级的定性基础；安培力、洛伦兹力、法拉第电磁感应定律、自感和交变电流等定量深化内容仍在选择性必修2。

<h4 id="magnetic-phenomena-foundation">B3-25 磁现象及其应用 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->

#### 课标定位与学习目标

- 官方模块：必修3
- 课标条款：3.3.1
- 内容要求：能列举磁现象在生产生活中的应用，了解我国古代磁学成果，关注现代磁技术发展。
- 本页主问题：一根没有接触指南针的导线，为什么一通电就能使指南针偏转？
- 学习结果：能用可观察证据说明“电流周围存在磁场”，并解释一种磁技术中磁场承担的作用。

#### 本页主问题与引导演示

<iframe src="anim/bx3/magnetic-phenomena.html" width="100%" height="720" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

先预测通电后指南针是否偏转，再由动画真实接通电流。完成主线后反向电流，检查指南针偏转方向是否随之反向；最后截断条形磁体，观察每一段是否仍同时具有南、北两极。

> **概念判据卡**：磁效应的证据不是“设备名称里有一个磁字”，而是磁体、电流或运动电荷在周围建立磁场，并通过指南针方向、受力或其他可测效应表现出来。磁极不能像正负电荷那样被单独分离。

#### 观察证据

1. 未通电时，指南针只在地磁场作用下指向南北。
2. 接通正向电流后，指南针从 `0°` 偏转到约 `+55°`，导线周围出现环形磁场表征。
3. 反向电流后，环形磁场和指南针偏转方向同时反向。
4. 截断条形磁体后，每一段仍同时标有 N、S 两极，没有出现孤立磁极。

#### 规律、证据与核心概念

磁体有南、北两极；同名磁极相斥、异名磁极相吸。指南针的偏转说明：除了地磁场外，通电导线在周围产生了新的磁场。电流方向反向时，磁场方向随之反向，这是“电流产生磁场”的可检验证据，而不是只靠定义得出的口号。

奥斯特实验把电与磁联系起来。指南针、扬声器、电动机、磁悬浮和磁存储都涉及磁现象，但解释应用时必须写出磁场的具体作用：是电流产生磁场，还是电流在磁场中受力，或是材料的磁化状态被读写。

#### 因果解释与应用迁移

- **指南针**：地球周围存在磁场，小磁针北极沿当地地磁场方向静止。
- **电流磁效应**：导线中的定向电荷运动在周围产生磁场；该磁场与地磁场矢量叠加，改变指南针静止方向。
- **扬声器和电动机**：电流不是“自己转动”，而是载流导体在外磁场中受力并产生机械运动。
- **磁存储**：利用材料局部磁化状态记录信息；读取和写入机制还要结合具体器件分析。
- **我国古代磁学**：指南针应用体现了对磁体指向性的长期观察，但现代物理解释要落到地磁场与磁针受力。

#### 边界检查与易错点

- 磁极不能像正、负电荷那样被单独分离；把磁体截断后，每一段仍有南、北两极。
- “有磁性材料”不等于任何状态下都表现为强磁体，材料磁化状态和外界条件会影响表现。
- 指南针偏转只能证明当地合磁场方向改变，不能直接给出通电导线受力方向。
- 列举“电动机、扬声器”不算解释；必须指出磁场与电流怎样产生可见效果。

#### 学习收束

- 我看见了什么：通电使指南针偏转，反向电流使偏转反向。
- 我为什么能解释：电流在周围产生磁场，与地磁场叠加后改变小磁针方向。
- 条件改变后我能预测什么：断电后指南针回到地磁方向；电流反向时偏转反向。

<h4 id="magnetic-field-induction-foundation">B3-26 磁场、磁感线与磁感应强度 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标

- 官方模块：必修3
- 课标条款：3.3.2
- 内容要求：通过实验认识磁场，了解磁感应强度，会用磁感线描述磁场。
- 本页主问题：磁场方向、通电导线方向和导线受力方向是同一个方向吗？
- 学习结果：能用小磁针规定磁场方向，并用夹角反例说明 `F=BIL` 不是任意方向下的通式。

#### 本页主问题与引导演示

<iframe src="anim/bx3/magnetic-field.html" width="100%" height="700" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

先预测导线与磁场平行时是否仍有安培力。验证后把夹角从 `0°` 调到 `90°`，比较导线方向、磁场箭头、受力符号和数值，检查它们是否同步。

> **公式首次使用卡**：适用边界——磁感应强度方向按小磁针北极静止时的指向规定。用 $B=F/(IL)$ 定量描述时，只取通电直导线与磁场垂直的特例，且试探电流不显著改变原磁场；若导线与磁场夹角为 $\theta$，安培力大小为 $F=BIL\sin\theta$，平行时力为零。磁场方向不是通电导线受力方向。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

#### 观察证据

1. 画面中蓝色箭头向右表示匀强磁场方向；小磁针北极沿当地磁场方向。
2. 导线与磁场平行时，读数为 $\theta=0^\circ$、$F=0.000\ \mathrm{N}$，没有非零受力方向。
3. 导线与磁场垂直时，读数为 $\theta=90^\circ$、$F=0.240\ \mathrm{N}$，安培力达到本组参数下最大值。
4. 斜交时，读数按 $\sin\theta$ 连续变化；不是把 `F=BIL` 无条件套到任意夹角。

#### 规律、证据与核心概念

磁场是存在于磁体、电流和运动电荷周围的一种物质。可用小磁针的受力方向或通电导线的受力效应探测磁场。磁感应强度 $\boldsymbol B$ 描述磁场的强弱和方向；某点的方向规定为小磁针北极静止时的指向。

磁感线是描述磁场的模型：曲线上每一点的切线方向表示该点磁场方向，疏密定性表示磁场强弱。磁感线不是真实存在的细线，不相交，也不在空间中突然中断。

通电直导线的受力提供一种比较磁场强弱的办法，但必须控制电流、有效长度和方向。导线与磁场垂直时，$B=F/(IL)$；一般夹角下，只有垂直于磁场的电流分量产生该受力效应，因此 $F=BIL\sin\theta$。

#### 因果解释

- 小磁针给出的是磁场方向，不是任意带电粒子的运动方向。
- 受力方向必须同时依据 $\boldsymbol B$ 和电流方向判断；它通常与二者都垂直。
- 平行时安培力为零，并不表示该处没有磁场。此时磁场仍能使小磁针定向，只是所选通电导线没有产生可测安培力。

#### 课标边界与迁移

必修3要求建立磁场、磁感线和磁感应强度的基本认识。通电导线所受安培力的定量计算、运动电荷所受洛伦兹力及磁场圆周运动属于选择性必修2深化内容，可转到 [X2-03 安培力](xb2?id=ampere-force) 和 [X2-04 洛伦兹力](xb2?id=lorentz-force)。

#### 边界检查与易错点

- 磁感线切线方向是 $\boldsymbol B$ 的方向，不是带电粒子必然运动的方向。
- 磁感线越密只表示磁场越强，不表示那里“磁感线条数更多”这一实体事实。
- $F=0$ 不能单独推出 $B=0$；还可能是导线与磁场平行，或没有电流。
- 磁场方向不是通电导线受力方向，二者不能共用同一箭头。

#### 学习收束

- 我看见了什么：夹角从垂直变为平行时，安培力从最大连续降到零。
- 我为什么能解释：只有电流的垂直于磁场的分量参与该受力效应。
- 条件改变后我能预测什么：已知 B、I、L 与夹角，可以先判断零力/最大力边界，再估计中间值。

<h4 id="magnetic-flux-induction-foundation">B3-27 磁通量与电磁感应现象初步 <span class="status review">physics + pedagogy passed · sources quarantined</span></h4>
<!-- content-template: concept-law; editorial-review: P1-EDITOR-002/003 -->


#### 课标定位与学习目标

- 官方模块：必修3
- 课标条款：3.3.3
- 内容要求：知道磁通量；通过实验了解电磁感应现象和产生感应电流的条件；知道其应用及社会影响。
- 本页主问题：磁通量很大就一定有感应电流吗？
- 学习结果：能分两步判断“磁通量是否变化”和“回路是否闭合”，并用正反证据说明两个条件的作用。

#### 本页主问题与引导演示

<iframe src="anim/bx3/magnetic-flux-induction.html" width="100%" height="760" frameborder="0" style="border:1px solid #d9e2ec;border-radius:8px"></iframe>

先建立 `Φ=0.080 Wb` 的较大磁通量并保持不变，观察是否有持续电流；随后分别点击“改变磁通量”和“开路并改变 Φ”，比较感应电动势与感应电流是否同时存在。

> **公式首次使用卡**：适用边界——Φ=BS cosθ 只用于匀强磁场和平面线圈，θ 是磁场与面积法线夹角；产生感应电流还要求闭合回路且磁通量发生变化。符号含义在紧邻公式的正文、图注或表格中定义；除题目另有单位外，代入前统一为 SI，结果保留单位并做量纲检查。

#### 观察证据

| 实验状态 | 磁通量变化 | 回路 | 观察结果 |
|---|---|---|---|
| $\Phi=0.080\ \mathrm{Wb}$ 且保持不变 | $\Delta\Phi=0$ | 闭合 | $\varepsilon=0$、$I=0$，磁通量大并不够 |
| 改变 B 或夹角 | `ΔΦ≠0` | 闭合 | 出现感应电动势和感应电流；变化结束后电流回到零 |
| 开路并改变 Φ | $\Delta\Phi\ne 0$ | 开路 | 可有感应电动势，但 $I=0$ |

三组状态分别提供“变化条件”的反例与正例，以及“闭合条件”的反例。不能只看一次指针偏转就省略条件。

#### 规律、证据与核心概念

磁通量 $\Phi$ 描述穿过某一面积的磁场。在匀强磁场中，若平面面积为 $S$，其法线与磁场夹角为 $\theta$，则：

$$
\Phi=BS\cos\theta
$$

这里 $S\cos\theta$ 是垂直于磁场方向的有效面积。只说“磁场强”不足以判断磁通量，还要看面积和方向。

#### 电磁感应的证据与条件

闭合回路中的磁通量发生变化时，回路中产生感应电流。造成变化的方式可以是改变 $B$、改变回路面积、改变回路与磁场的夹角，或让回路进出磁场区域。磁通量很大但保持不变，并不产生持续感应电流。

因果链是：外界操作改变穿过回路的磁通量 → 回路中出现感应电动势；若回路闭合，感应电动势驱动感应电流。变化停止后，磁通量重新恒定，感应电动势与电流回到零。这里的电能来自外界改变磁场或回路状态时所做的功，不是凭空产生。

#### 课标边界与迁移

本节只要求定性判断磁通量是否变化以及是否发生电磁感应。感应电流方向、楞次定律和法拉第电磁感应定律的定量计算属于选择性必修2，可继续学习 [X2-08 电磁感应现象](xb2?id=electromagnetic-induction) 与 [X2-09 楞次定律](xb2?id=lenz-law)。

#### 应用与迁移

发电机、无线充电、感应式传感器等都利用电磁感应。分析应用时应写清能量从何种形式转化为何种形式，不能把“产生电流”理解为凭空产生能量。

#### 边界检查与易错点

- `Φ` 大不等于 `ΔΦ` 大；只有磁通量发生变化才产生感应电动势。
- 有感应电动势不等于一定有感应电流；开路时没有持续电流通路。
- θ 是磁场与面积法线的夹角，不是磁场与线圈平面的夹角。
- 本节只作定性条件判断；方向和定量法拉第定律在选择性必修2深化。

#### 学习收束

- 我看见了什么：恒定大磁通时无电流；变化且闭合时有电流；变化但开路时仍无电流。
- 我为什么能解释：磁通量变化先产生感应电动势，闭合条件再决定能否形成电流。
- 条件改变后我能预测什么：改变 B、S、夹角或进出磁场时，能逐项判断 `ΔΦ` 与回路状态。

---


<style>
.status { font-size: 12px; padding: 2px 8px; border-radius: 10px; font-weight: 600; }
.status.done { background: #d4edda; color: #155724; }
.status.partial { background: #fff3cd; color: #856404; }
.status.pending { background: #f8d7da; color: #721c24; }
</style>
