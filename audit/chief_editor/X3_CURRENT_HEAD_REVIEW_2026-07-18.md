# X3 当前 HEAD 物理、教学与交互初审

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: 9acbf51f540b0ade94638c6e796bf62cab86d64a
review_date: 2026-07-18
review_role: Codex 物理内容 / 高中物理教学设计 / 交互教材总编初审
scope: X3-01..X3-39 正文、36 个 anim/xb3 页面、共享 anim/xb1/photoelectric.html、当前交互与移动端门禁
chapter_mapping: 第六大章 = X3 = 选择性必修3
development_flow: continue
physics_review: revise
pedagogy_review: revise
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
```

> 本文件审核的是第六大章 X3（选择性必修三），不是 B1/B2/B3、X1 或 X2。报告绑定上面的精确 HEAD；本轮形成审核基线和机器证据，没有修改教学实现，没有把任何 `interaction passed · content pending` 擅自改成完成，也没有提交或推送。

## 初审总裁决

```yaml
engineering_interaction:
  result: PASS
  xb3_pages: 36/36
  shared_photoelectric: 1/1
  mobile_390x844: 37/37
  hard_failures: 0
physics_CRITICAL:
  - X3-13
  - X3-18
  - X3-29
  - X3-37
physics_or_content_MAJOR:
  - X3-20
  - X3-31
  - X3-32
  - X3-34
  - X3-38
  - X3-39
systemic_MAJOR:
  - X3-SYS-01
  - X3-SYS-02
  - X3-SYS-03
chapter_decision: REVISE
development_flow: continue
content_approval: pending
release_gate: blocked_by_X3_13_X3_18_X3_29_X3_37
source_gate: X3_39_formal_source_upgrade_pending
```

工程交互的 100 分只证明页面能够加载、播放、暂停、复位、改变控件、重入并通过 390×844 的通用布局检查。真实键盘操作和按钮点击已经复现做功—活塞脱耦、错误表面张力判据、非物理结合能、小时级古木测年等问题，因此工程 PASS 不能替代物理、教学或内容批准。

## 系统级 finding

### X3-SYS-01 默认教学路径没有形成“预测—观察—解释—迁移”

```yaml
severity: MAJOR
original_symptom: X3-01..X3-39 均有交互/证据任务，但 39/39 没有先锁定预测再揭示证据的默认路径；36 个 X3 动画仍以自由控制台为主
formula_leakage: X3-06,X3-10,X3-13,X3-18,X3-20,X3-22,X3-28,X3-36 的公式首次使用卡位于 iframe 之前
root_cause: 存量页面把可调参数和实时读数当成教学闭环，尚未逐节点建立证据状态机
affected_nodes: X3-01..X3-39
failure_assertion: 有观察任务、公式绑定和可动控件就记为 pedagogy PASS
pass_assertion: 每个节点都有主问题、1至3个有效预测点、真实状态变化、可读证据、因果解释、边界或反例、迁移与重新预测；公式不在默认证据形成前抢答
approval_impact: all X3 pedagogy_review remain pending
```

### X3-SYS-02 减少动态和统一重播路径缺失

```yaml
severity: MAJOR
original_symptom: prefers-reduced-motion 0/36；多数页面载入即持续运动；重播、复位、重新预测的语义不统一
root_cause: 动画只有普通连续播放/暂停或页面重载复位，没有减少动态分支和可重复的分步证据状态
affected_animations: anim/xb3/*.html
failure_assertion: 手机无横向溢出且有暂停/重置就视为动画规范通过
pass_assertion: 普通与 reduced-motion 两条路径均可完成；初态、播放、暂停、单步、重播、复位语义一致；唯一证据不依赖持续运动
approval_impact: mobile layout passes, accessibility and pedagogy approval remain pending
```

### X3-SYS-03 正文节点顺序在 X3-32 后倒置

```yaml
severity: MAJOR
original_sequence: X3-01..X3-32,X3-39,X3-38,X3-37,X3-36,X3-35,X3-34,X3-33
expected_sequence: X3-01..X3-39
root_cause: X3-33..X3-39 作为后补节点按逆序追加到正文
affected_nodes: X3-33..X3-39
failure_assertion: 目录表按编号排序就认为正文学习顺序正确
pass_assertion: 正文、页内导航、学习进度和审核矩阵都按 X3-01..X3-39 单调递增；相邻节点的前置/后续关系同步复核
approval_impact: chapter structure remains pending
```

### 来源与完成度边界

X3-01..X3-39 的静态“例题与训练”均明确处于“来源审核中”并隔离，不能把本轮动画审核写成训练内容完成。`audit/results/source-missing-gaps.json` 还明确记录 X3-39 只有已发布模拟题覆盖，正式大陆高考、区域考试或大型联考题源升级仍为 pending。整改时不得伪造题源、把题库聚合页当正式来源，或把未可靠 OCR 的扫描题猜成原题。

## 发布阻断：CRITICAL

### X3-13 热力学第一定律：p-V 做功和能量账本来自互不相干的控制量

```yaml
severity: CRITICAL
student_visible_failure: 活塞从 V=1.0 L 拖到 4.0 L 时，p-V 路径与面积改变，但 W 固定为 200 J，delta_U 固定为 700 J
implementation_cause: W 是独立滑块；P=max(0.45,3.2/V+经验偏置)，T=300+delta_U/8；p-V 面积没有积分回写到 W
physics_impact: 页面声称装置、p-V 面积、做功和能量账本同步，实际把同一过程显示成互相矛盾的两份证据
pass_assertion: 选定准静态路径后由同一 p(V) 计算 W_out=integral(p dV)，本页 W=-W_out，再由 delta_U=Q+W 更新状态；或删除 p-V 定量装置，改成不声称路径绑定的抽象能量账本
```

### X3-18 液体表面张力：把切向张力总大小直接和重力比较

```yaml
severity: CRITICAL
student_visible_failure: 默认状态显示 sigma*L=0.0140 N、G=0.0100 N，直接判定液面可托住物体
implementation_cause: ok = sigma*L >= G；模型没有定义接触线数量、液面斜率或接触角、竖直分量和浮力
physics_impact: 正文一面强调张力沿液面切线、竖直效果来自液面弯曲，动画却用总切向大小代替竖直支持力
pass_assertion: 明确定义每条接触线和液面几何，用所有表面张力竖直分量与浮力共同列平衡；未定义几何时不得输出能否托住或压破的定量判决
```

### X3-29 结合能与质量亏损：任意 A、Eb 组合被判为真实原子核

```yaml
severity: CRITICAL
student_visible_failure: 真实键盘输入 A=2、Eb=2000 MeV 后，页面显示 Eb/A=1000.00 MeV/核子、delta_m=2.147 u，并判当前核更稳定
implementation_cause: A 与总结合能 Eb 是互相独立的任意滑块，探针也可离开绘制的经验曲线；稳定性只比较任意 Eb/A
physics_impact: 不可能的核数据被转成精确质量亏损和稳定性结论，破坏结合能曲线和核稳定性主概念
pass_assertion: 使用有来源的真实核素或有边界的示例数据；A 改变时 Eb 必须来自同一数据模型；不允许用任意组合生成核素稳定性判决
```

### X3-37 放射性同位素应用：古木测年被压缩为小时量级

```yaml
severity: CRITICAL
student_visible_failure: 点击“测年”后显示古木样品、T=80 h、t=160 h、剩余25%
implementation_cause: 所有场景共用 1..100 h 半衰期和 0..300 h 时间轴，考古预设硬编码为 80 h/160 h
physics_impact: 中心应用无法表示碳-14 约5730年的半衰期和考古年代量级，学生会把核素选择与时间尺度建立成错误联系
pass_assertion: 医学、工业、考古使用各自核素/射线/时间单位和有来源的典型量级；切换场景时坐标轴、单位、半衰期、屏蔽和适用边界一起切换
```

## 节点级 MAJOR / MINOR

| ID | 严重度 | 具体问题 | 关闭条件 |
|---|---:|---|---|
| X3-20 波粒二象性 | MAJOR | 双缝命中点由 `sin(命中序号)` 的确定性曲线生成，不是按双缝强度概率逐点抽样；“单个随机到达、累积成干涉条纹”的证据是伪造的 | 每个事件独立随机到达，概率密度来自明确的双缝干涉与单缝包络模型；样本少时随机、样本多时统计收敛 |
| X3-31 核聚变 | MAJOR | “聚变概率≈94%”由无单位线性经验式和 50% 阈值生成，温度只叫等级，约束强度没有密度/时间意义 | 改成诚实的定性可行性指标，或采用有单位、有来源、有边界的温度—密度—约束时间模型；不得显示伪精确概率百分比 |
| X3-32 粒子物理初步 | MAJOR | 动画只比较一个粒子电荷和“目标电荷”；正文证据任务却据此判断反应通道是否成立 | 明确“电荷守恒只是必要条件、通过不等于反应可发生”；若要判断通道，必须给完整反应前后态并检查能量、动量及相关量子数 |
| X3-34 扩散与布朗运动 | MAJOR | 标题为“均方位移记录”的曲线直接画 `u*brown+sin(...)`，没有从花粉轨迹或粒子系综计算 MSD | 保存初始位置和时间，按系综计算平均平方位移并展示有限样本波动；若只做趋势示意，删除“记录/均方位移”伪测量标签 |
| X3-38 射线危害与防护 | MAJOR | 穿透/电离百分比、衰减系数、0.15 高低阈值均为硬编码；同一 mm 厚度未指定材料和射线能量，却输出“当前剂量偏高”的安全判定 | 要么只展示明确标注的相对趋势，不作安全结论；要么绑定核素能量、源活度、材料、剂量单位、校准来源和适用边界 |
| X3-39 四种基本相互作用 | MAJOR | “主导作用”仅按尺度分段，`电荷/质量情境`滑块完全不参与判断；在 10^-18 m 固定判弱相互作用，忽略同尺度下过程对象决定强/弱相互作用 | 用“对象/过程 + 尺度”联合判定，允许同尺度多种作用共存；让情境控件真实参与结果，不把尺度带当唯一分类器 |
| X3-36 毛细现象 | MINOR | `theta=90°` 时公式给 h=0，界面仍归类为“不浸润下降”，文案又写“接触角大于90°” | 90° 单列为无毛细升降临界态；小于/大于判断与公式、状态、记录一致 |

## 逐节点审核矩阵

共同状态：所有节点 `development_flow=continue`，所有节点 `content_approval=pending`；39/39 仍受 X3-SYS-01，36 个 X3 动画仍受 X3-SYS-02。表中“未发现节点级硬错误”不等于内容批准。

| ID | 本轮节点结论 | 工程交互 / 手机 | 审批状态 |
|---|---|---|---|
| X3-01 分子动理论 | 核心定性关系未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-02 阿伏伽德罗常数 | `n=m/M`、`N=nNA` 和单位主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-03 分子热运动 | 温度、平均动能和布朗运动主体边界未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-04 分子力 | 相对距离下的斥力/引力/势能示意有明确模型语境 | PASS / PASS | pending / 系统阻断 |
| X3-05 内能 | 动能加势能的定性账本标为示意量，未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-06 温度与温标 | K/℃换算和热平衡主线正确；公式卡提前 | PASS / PASS | pending / 系统阻断 |
| X3-07 气体状态参量 | `pV/T=nR`、单位和定量气体边界未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-08 玻意耳定律 | 等温 `pV` 主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-09 查理定律 | 按当前大陆高中教材约定，等容 `p/T` 主线正确 | PASS / PASS | pending / 系统阻断 |
| X3-10 理想气体状态方程 | 状态方程主线正确；与 X3-07 共页且公式卡提前 | PASS / PASS | pending / 系统阻断 |
| X3-11 p-V 图像 | 三类过程和 `integral(p dV)` 符号主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-12 气体定律微观解释 | 撞壁频率/猛烈程度与状态量关系未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-13 热力学第一定律 | **CRITICAL**：做功、活塞和 p-V 面积脱耦 | PASS / PASS | node blocked |
| X3-14 热力学第二定律 | Carnot 上限与不可能态拒绝主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-15 能量守恒 | 对输出和储存超过输入的非法状态显式拒绝 | PASS / PASS | pending / 系统阻断 |
| X3-16 热机与效率 | 与 X3-14 共页；能流和效率上限主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-17 晶体与非晶体 | 固定熔点/平台与微观有序主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-18 液体表面张力 | **CRITICAL**：切向张力大小被直接当竖直支持力 | PASS / PASS | node blocked |
| X3-19 光电效应 | 共享页单独真实交互通过；截止频率、光强/频率边界未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-20 波粒二象性 | **MAJOR**：双缝统计命中为确定性伪证据 | PASS / PASS | pending / node repair |
| X3-21 原子结构 | 卢瑟福散射为定性指数模型，核心结论未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-22 玻尔模型与能级 | 氢能级、跃迁吸收/发射和频率计算正确；公式卡提前 | PASS / PASS | pending / 系统阻断 |
| X3-23 原子光谱 | 氢/氦/钠离散谱线与 `hnu=hc/lambda` 主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-24 原子核结构 | `A=Z+N`、元素由 Z 决定和电离不改核主线正确 | PASS / PASS | pending / 系统阻断 |
| X3-25 放射性衰变 | alpha、beta-minus、gamma 的 A/Z 变化规则未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-26 半衰期 | 大量核统计边界明确，指数衰减主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-27 核反应 | 三个模板的 A/Z 配平主线未发现节点级硬错误 | PASS / PASS | pending / 系统阻断 |
| X3-28 核能 | `E=delta_m*c^2` 与 931.5 MeV/u 主线正确；公式卡提前 | PASS / PASS | pending / 系统阻断 |
| X3-29 结合能与质量亏损 | **CRITICAL**：任意非物理数据被判稳定 | PASS / PASS | node blocked |
| X3-30 核裂变 | 有效中子数为趋势模型且正文声明不替代工程计算 | PASS / PASS | pending / 系统阻断 |
| X3-31 核聚变 | **MAJOR**：伪精确概率百分比和阈值 | PASS / PASS | pending / node repair |
| X3-32 粒子物理初步 | **MAJOR**：电荷单项检查被用于通道成立任务 | PASS / PASS | pending / node repair |
| X3-33 分子速率分布 | Maxwell 分布、峰位和数值归一化主线未发现节点级硬错误 | PASS / PASS | pending / 结构+系统阻断 |
| X3-34 扩散与布朗运动 | **MAJOR**：标称 MSD 图未由轨迹计算 | PASS / PASS | pending / node repair |
| X3-35 材料微观结构 | 相对量示意边界基本清楚，未发现节点级硬错误 | PASS / PASS | pending / 结构+系统阻断 |
| X3-36 毛细现象 | **MINOR**：90° 临界态误报下降；公式卡提前 | PASS / PASS | pending / node repair |
| X3-37 放射性同位素应用 | **CRITICAL**：古木测年使用小时量级 | PASS / PASS | node blocked |
| X3-38 射线危害与防护 | **MAJOR**：无标定相对剂量产生安全判决 | PASS / PASS | pending / node repair |
| X3-39 四种基本相互作用 | **MAJOR**：尺度单变量分类且情境滑块无效；正式题源升级 pending | PASS / PASS | pending / node+source repair |

## CRITICAL / MAJOR 可复现证据

| Review ID | 真实操作或静态边界 | 当前观测 | 应有验收断言 |
|---|---|---|---|
| X3-13 | 键盘把 V 从 1.0 L 调到 4.0 L，保持 Q=500 J、W=200 J | 两态都显示 W=200 J、delta_U=700 J；画布 p-V 路径/面积却改变 | 同一过程的 W 必须等于负的 p-V 积分，能量账本和状态读数同源 |
| X3-18 | 加载默认状态 | `sigma*L=0.0140 N > G=0.0100 N`，判“可托住” | 未给接触线/角度/浮力不得输出托住判决；定义后比较竖直合力 |
| X3-29 | A 按 Home、Eb 按 End、对比线按 Home | `A=2,Eb=2000 MeV,Eb/A=1000`，判当前更稳定 | 输入必须是有来源的真实核素/受约束模型，不允许非物理组合进入稳定性判决 |
| X3-37 | 点击暂停，再点击“测年” | 古木样品 `T=80 h,t=160 h` | 碳年代学使用真实核素和年尺度；场景切换必须同步单位与范围 |
| X3-20 | 播放并积累双缝命中 | 命中纵坐标按命中序号正弦函数生成 | 单次随机、累积服从明确干涉概率分布，并能用统计检验复核 |
| X3-31 | 温度、约束均按 End | 显示“聚变概率指标≈94%”和“条件较充分” | 无校准模型不得显示百分比；若保留定量必须给物理量、单位、来源与有效域 |
| X3-32 | 默认质子与目标电荷 +1e | 电荷差 0，显示检查通过；章节任务要求判断通道成立 | 通过电荷检查只能标“必要条件之一通过”，不能标反应可发生 |
| X3-34 | 对照轨迹代码与“均方位移记录”曲线 | 曲线来自预设斜线加正弦扰动，不读取轨迹 | MSD 必须由位移样本计算，或改成不冒充测量的趋势示意 |
| X3-38 | 暂停后切换 gamma | 相对剂量 1.919、穿透100%、电离22%，判“剂量偏高” | 安全判决必须基于有单位、有材料、有源项和有来源的模型；否则只讲相对趋势 |
| X3-39 | 改变“电荷/质量情境”滑块 | 显示数值变化，但主导作用完全不变；结果只由尺度分段 | 对象/过程和尺度共同决定结论，所有对外控件必须真实影响模型或删除 |

## 关键实现证据定位

- `anim/xb3/first-law.html:47,58,63`：W 独立于 V；P、T 为经验式；p-V 面积未参与账本。
- `anim/xb3/surface-tension.html:37,47,51`：`ok=F>=G`，其中 `F=sigma*L`，没有竖直分量或浮力。
- `anim/xb3/binding-energy.html:16-18,27-28,38`：A、Eb 独立任意；经验曲线与探针输入脱耦；稳定性直接比较任意 Eb/A。
- `anim/xb3/wave-particle.html:44`：命中点由 `sin(hits.length*.73)` 确定性生成。
- `anim/xb3/nuclear-fusion.html:83-94,191-196,248-257`：概率百分比来自无单位线性经验式。
- `anim/xb3/particle-physics.html:45,58-59`：结果只检查 `q-target`；正文 `xb3.md:3855` 用它判断通道是否成立。
- `anim/xb3/diffusion-brownian.html:40,44`：已有真实花粉轨迹，但“均方位移”曲线不读取轨迹。
- `anim/xb3/radioisotope-applications.html:20-21,38,45,47`：统一小时轴，考古预设 80 h/160 h。
- `anim/xb3/radiation-protection.html:38,42-45`：穿透/电离/衰减系数和剂量阈值均硬编码。
- `anim/xb3/fundamental-interactions.html:19-20,37,43-44`：情境滑块值未参与判定，尺度被硬切成四个主导区间。
- `anim/xb3/capillary.html:37,44-45`：90° 落入“不浸润下降”分支。
- `xb3.md:3926-4143`：正文实际顺序为 X3-39 到 X3-33。

## 当前自动化与真实操作证据

| 命令 / 操作 | 结果 | 审核含义 |
|---|---|---|
| `npm run check` | PASS；229 节点编辑/数学/解答隔离/静态回退门禁通过；206 页、13 章、0 issues | 仓库工程与发布隔离门禁通过；现有规则没有捕获本报告的物理语义和教学问题 |
| `node scripts/gen-data.js --check` | PASS；目录 229、进度 229；未重写 id-map 或完成状态 | 审核报告没有破坏目录/进度映射，也没有把 review/partial 擅自升级为 done |
| `AUDIT_MODULE=xb3 AUDIT_REPORT=xb3-current-9acbf51.json npx playwright test tests/interaction-audit.spec.js --workers=1` | 36/36 PASS；score 100；0 blocked；0 hard failure；36/36 mobile PASS | X3 自有页面通用播放、暂停、复位、控件、重入和 390×844 布局通过，不等于物理语义通过 |
| `AUDIT_MODULE=xb1 ... --grep photoelectric` | 共享 `anim/xb1/photoelectric.html` 1/1 PASS；mobile PASS | X3-19 共享页单独纳入了本章工程证据，没有漏审 |
| Playwright 真实键盘和按钮语义探针 | 复现 X3-13、18、29、31、32、37、38 的学生可见失败态 | 证据来自真实输入事件，不是直接改 DOM 值；机器记录见 `audit/results/x3-semantic-probes-9acbf51.json` |
| X3 静态教学盘点 | 39 节点、39 iframe、37 个唯一页面；预测暂停 0/39；36 个 X3 动画 `prefers-reduced-motion` 0/36；8 个公式卡位于 iframe 前 | X3-SYS-01/02 尚未关闭 |
| 正文顺序盘点 | X3-01..32 后接 X3-39..33 | X3-SYS-03 尚未关闭 |
| 来源盘点 | 39/39 静态例题区保持“来源审核中”；X3-39 正式来源升级 pending | 没有伪造题源，但题源与训练完成度仍为 pending |

机器报告：

- `audit/results/xb3-current-9acbf51.json`：36 个 X3 自有页面，绑定提交 `9acbf51`，生成时记录 `worktree_clean=true` 和受测文件哈希。
- `audit/results/x3-shared-photoelectric-9acbf51.json`：X3-19 共享光电效应页。
- `audit/results/x3-semantic-probes-9acbf51.json`：真实键盘/按钮语义复现。

## 双轨评分

| 评分轨 | 得分 | 裁决 |
|---|---:|---|
| 工程交互基线 | 100/100 | 37 个唯一页面在通用定义下可操作，390×844 全部通过 |
| 内容与教学审核 | 44/100 | 4 个 CRITICAL、6 个节点级 MAJOR、3 个系统级 MAJOR，不得批准发布 X3 内容 |

内容与教学分项：物理与模型边界 `21/40`、默认教学主线 `3/25`、交互证据真实性 `8/20`、移动端与可访问性 `7/10`、来源与治理 `5/5`。来源治理得分只表示隔离和缺口记录诚实，不表示已有可发布真题或教师签署。

## 建议整改顺序与关闭条件

1. 先关闭 4 个发布阻断：X3-13、X3-18、X3-29、X3-37；每个失败态建立专项 Playwright 物理语义断言，不能只改标签或限制滑块到不易触发的区域。
2. 再关闭节点 MAJOR：X3-20、X3-31、X3-32、X3-34、X3-38、X3-39；所有百分比、剂量、概率和“成立/可行”判决必须有同源模型、单位、来源与有效域。
3. 修正 X3-33..X3-39 正文顺序和 X3-36 的 90° 临界态，再复核目录、锚点、上下节导航和进度映射。
4. 逐节点关闭 X3-SYS-01/02：为 39 个节点建立预测、真实变化、证据、解释、边界、迁移、重播和减少动态路径；不是只加一个统一说明框。
5. 复审需同时通过专项 X3 物理语义、37 个唯一页面真实控件、390×844、reduced-motion、`node scripts/gen-data.js --check` 和 `npm run check`；自动化全绿后仍按本矩阵逐项人工确认。
6. 真题与训练保持独立来源门禁；X3-39 找不到可完整核验正式题时继续诚实隔离，不得用聚合题库或不可靠 OCR 填空。

## 当前审批状态

```yaml
engineering_interaction: pass_37_of_37_unique_pages
physics_content: revise
pedagogy_review: revise
interaction_qa: pass_generic_fail_semantic
mobile_qa: pass_37_of_37
accessibility_reduced_motion: fail_0_of_36_xb3_pages
content_approval: pending
release_gate: blocked
review_status: initial_review_complete
development_flow: continue
source_gate: X3_39_formal_upgrade_pending_and_all_static_examples_quarantined
teacher_signoff: pending
```
