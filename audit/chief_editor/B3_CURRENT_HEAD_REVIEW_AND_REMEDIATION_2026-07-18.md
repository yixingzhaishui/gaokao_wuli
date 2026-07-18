# B3 当前 HEAD 物理、教学与交互审核及整改矩阵

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_reviewed_head: 1f6baa13bad46a7ca1aaf5841b975ab18c5a4a44
implementation_commit: da4f3d969b5ffb411423e5f095b8d14509214982
final_verification_head: da4f3d969b5ffb411423e5f095b8d14509214982
review_date: 2026-07-18
review_role: OpenAI Pro 物理专家 / 高中物理教学设计 / 交互教材总编
scope: B3-01..B3-27 正文、25 个既有及 3 个新增 bx3 动画、2 个实验动画、测试与 CI
content_approval: pass
```

> 本文件先建立修改前验收矩阵，再实施整改。旧交互报告的 `PASS` 只证明既有定义下控件可操作，不代表物理内容或默认教学路径获批。B3-25～B3-27 没有专属交互，不能被 25 个 `anim/bx3` 文件的通过数覆盖。

## 初审总裁决（整改前）

```yaml
physics_P0:
  - B3-01
  - B3-20
physics_P1:
  - B3-02
  - B3-06
  - B3-10
  - B3-11
  - B3-15
  - B3-16
  - B3-17
  - B3-21
  - B3-22
  - B3-24
pedagogy_major:
  - B3-SYS-01
  - B3-25
  - B3-26
  - B3-27
chapter_decision: REVISE
development_flow: continue
initial_content_approval: pending
initial_release_gate: blocked_by_B3_01_and_B3_20
```

## 逐节点验收矩阵

| Review ID | 原始现象 | 根因 | 修改文件 | 失败态断言 | 通过态断言 / 真实浏览器证据 | 审批影响 | 基线状态 |
|---|---|---|---|---|---|---|---|
| B3-01 | 感应起电流程写成并演示为“靠近→接地→移开带电体”，接地尚未断开就声称导体留下异号净电荷 | 把“断开接地”这一决定最终电荷的步骤漏掉 | `bx3.md`、`anim/bx3/charge-electrification.html`、专项测试、全章交互语义检查 | 页面或测试仍接受“接地→直接移开” | 必须依次完成“接地→断开接地→移开带电体”；每步状态和读数变化；未断地时不得宣称净电荷被保留 | `CRITICAL`，阻止 B3-01 内容审批和整章发布门禁 | OPEN |
| B3-02 | 把 `F=kq₁q₂/r²` 直接写成力的大小，异号时右端为负 | 大小与方向没有分离 | `bx3.md`、`anim/bx3/coulomb.html` | 力的“大小”公式含带符号乘积 | 大小统一为 `F=k|q₁q₂|/r²`；同号/异号只决定斥/引方向；浏览器切换异号后大小仍非负 | `MAJOR`，内容审批 pending | OPEN |
| B3-03 | `E` 与试探电荷独立、`F=qE` 的正负方向演示正确；但正文以结论和公式开场 | 正确模型沿用旧“公式台”结构 | 后续教学精修 | 不得把交互 PASS 当教学 PASS | 正负试探电荷切换后 E 不变、F 反向；补预测后再终审 | 不阻断物理使用；教学 pending | DEFERRED |
| B3-04 | 电场线起止、切线、不相交和非轨迹边界正确；没有默认预测暂停 | 旧自由控制交互 | 后续教学精修 | 只证明按钮/拖拽可用 | 学生先预测某点 E 方向，再以切线证据验证 | 教学 pending | DEFERRED |
| B3-05 | 等势线、电场正交与沿等势面做功为零正确；公式先于默认证据链 | 旧自由探索结构 | 后续教学精修 | 公式可见不能替代证据形成 | 沿等势面/跨等势面均有正负对照和解释 | 教学 pending | DEFERRED |
| B3-06 | 公式卡声称 `W=qU` “适用于任何电场”，同时又把电场力普遍称为保守力 | 把静电场结论推广到时变感生电场 | `bx3.md` | 仍出现“适用于任何电场” | 明确限定静电场；`U=Ed` 另限匀强静电场且 d 为沿场位移分量 | `MAJOR`，内容审批 pending | OPEN |
| B3-07 | 零电势面、电势能变化和正负电荷判断正确；缺预测后揭示 | 旧自由控制结构 | 后续教学精修 | 只显示能量柱不算教学闭环 | q 变号前先预测 Ep 大小关系，再显示证据 | 教学 pending | DEFERRED |
| B3-08 | 路径无关演示正确，但保守力结论未在所有首次表述处限定静电场 | 省略场的时间条件 | `bx3.md` | 把一般电场都称为保守场 | 路径无关、`W=qUAB` 和闭合路径零功均明确限静电场 | `MAJOR`，内容审批 pending | OPEN |
| B3-09 | 接电源 U 不变、断电源 Q 不变及平行板联动正确 | 现有资产可复用 | 后续教学精修 | 不得从控件可用推断内容终审 | 两模式真实拖板距/面积后 C、Q、U、E 与独立计算一致 | 物理可用；教学 pending | VERIFIED_WITH_MINOR |
| B3-10 | 一处写 `C=εS/d`，另一处写 `C=ε₀S/d` 却未说明真空/空气与介质区别 | 介电常量符号和适用条件不统一 | `bx3.md`、专项测试 | `ε₀` 公式仍被称为任意平行板通式 | 真空/空气近似用 `ε₀S/d`；填充均匀介质用 `εS/d` | `MAJOR`，内容审批 pending | OPEN |
| B3-11 | 公式卡把 `I=Q/t` 写成无条件定义式 | 平均电流与瞬时电流未分层 | `bx3.md` | 对变化电流仍无条件使用 `Q/t` | 明确 `I=Q/t` 为时间 t 内平均电流，稳恒电流时等于瞬时值；拓展可写 `I=ΔQ/Δt` 极限 | `MAJOR`，内容审批 pending | OPEN |
| B3-12 | 电阻定律、温度和单位边界基本正确 | 正确资产沿用旧控制台布局 | 后续教学精修 | 不得把图上数字变化当规律形成 | 同材料控制变量比较 L、S；补温度/超导边界预测 | 教学 pending | DEFERRED |
| B3-13 | 线性/非线性及 I-U 斜率边界基本正确 | 旧自由探索结构 | 后续教学精修 | 不把所有电解液无条件归为线性元件 | 只在工作条件稳定且伏安特性线性时使用欧姆定律 | 教学 pending | VERIFIED_WITH_MINOR |
| B3-14 | 串并联关系和真实拖拽数值正确 | 正确资产沿用旧控制台布局 | 后续教学精修 | 控件通过不等于会识别节点 | 增加“看起来相邻但不串联”的反例后终审 | 教学 pending | DEFERRED |
| B3-15 | 一处写焦耳定律只适用于纯电阻，另一处又正确写电动机线圈发热也用 `I²Rt` | 把“焦耳热公式”和“电功全部转热的条件”混为一谈；还漏恒定 I、R 条件 | `bx3.md`、`anim/bx3/joule-law.html`、专项测试 | 仍出现“焦耳定律（纯电阻电路）” | `Q=I²Rt` 用于恒定 I、R 的电阻发热；只有纯电阻用电器才有 `W=Q` | `MAJOR`，内容审批 pending | OPEN |
| B3-16 | 正文要求把 R 调到最小观察“U≈0 短路”，但动画 R 最小 1 Ω，并未给 R=0；同时先修 B3-16 后学 B3-17 形成循环 | 极限状态被普通滑块端点冒充，课程顺序未校对 | `bx3.md`、`anim/bx3/closed-circuit-law.html`、专项测试 | R=1 Ω 仍标作短路或断路 | 增加显式短路 R=0 与断路 I=0 情境，或只把现有端点称为趋近；先学电动势再学闭合电路 | `MAJOR`，内容审批 pending | OPEN |
| B3-17 | 公式卡含损坏文本 `U=ε-Ir ε`；前置知识又反向指向 B3-16 | 编辑拼接错误和课程依赖循环 | `bx3.md`、专项测试 | 损坏公式或循环前置仍存在 | 放电 `U=ε-Ir`、充电 `U=ε+Ir`、断路近似条件完整；B3-17 指向 B3-16 为后续 | `MAJOR`，内容审批 pending | OPEN |
| B3-18 | V/A/Ω 接法、欧姆调零、断电和倍率规则正确 | 现有虚拟实验可复用 | 后续教学精修 | 只切模式不执行错误接法不算实验验收 | 对带电测阻、未调零、超量程做负向拒绝；正确流程有正向结果 | 物理可用；教学 pending | VERIFIED_WITH_MINOR |
| B3-19 | 真空电磁波、E/B/k 方向和频谱顺序正确；介质中的一般波速关系未在本页突出 | 使用 `c=λf` 作为唯一关系 | `bx3.md` | 在介质中仍把速度固定为 c | 一般写 `v=λf`，真空/空气近似才取 `c` | `MINOR`，与 B3-24 联动整改 | OPEN |
| B3-20 | 首段写“太阳能、风能、核能可再生且清洁”，后文又正确写核燃料不可再生 | 把“低碳”“清洁”“可再生”三个维度合并 | `bx3.md`、专项测试 | 任一处把核能列为可再生，或声称新能源无环境代价 | 核能写为低碳但核燃料不可再生；所有能源比较注明生命周期和系统边界 | `CRITICAL`，阻止 B3-20 内容审批和整章发布门禁 | OPEN |
| B3-21 | 动画把未接地的电荷重新分布命名为“感应起电”；正文把净电荷无条件限定在外表面 | 混淆静电感应与感应起电；漏掉含空腔/内置电荷边界 | `bx3.md`、`anim/bx3/electrostatic-induction.html`、专项测试 | 只极化即显示“感应起电” | 未接地称“静电感应”；只有完成接地顺序才称感应起电；外表面结论注明导体内部无带电体等高中模型条件 | `MAJOR`，内容审批 pending | OPEN |
| B3-22 | 家庭电压未注明 220 V 为交流有效值；动画短路电流固定写 80 A，易被误读为计算值 | 安全示意和定量模型未区分 | `bx3.md`、`anim/bx3/household-circuit.html`、专项测试 | 把 80 A 当通用短路电流或把 220 V 当瞬时恒压 | 明确 220 V 是额定交流有效值；短路只显示“示意大电流，实际由回路阻抗决定” | `MAJOR`，安全内容审批 pending | OPEN |
| B3-23 | RC 指数模型和时间常数正确，但“接上电源时 Uc 从 0”漏初始未充电条件 | 特定初态写成普遍过程 | `bx3.md` | 已带电电容也被描述为从 0 充电 | 明确初始未充电、线性 R、恒定 C、理想阶跃；图像读数与 RC 独立计算一致 | `MINOR`，内容审批 pending | OPEN |
| B3-24 | 光纤模式仍用真空光速计算延迟与波长，频率预设只有 100 GHz 却标为红外光；正文把高频与大带宽写成简单因果 | 真空/介质模型未切换，频谱数量级错误，载频和带宽概念混淆 | `bx3.md`、`anim/bx3/em-wave-applications.html`、专项测试 | 光纤仍取 `3.0×10⁸ m/s`，或 100 GHz 标作红外光 | 光纤用约 `2.0×10⁸ m/s` 教学近似；红外载频约 `2×10¹⁴ Hz`；容量由可用带宽、信噪比和调制共同决定 | `MAJOR`，内容审批 pending | OPEN |
| B3-25 | 磁现象基本事实正确，但无锚定问题、演示、预测、迁移和专属交互 | 新增节点只补了文字骨架 | 后续 B3 教学建设 | 不得以 `PENDING` 伪装 `BLOCKED`，也不得因正文存在就写 PASS | 完成“指南针→电流磁效应→应用机制”默认证据链和手机验收 | 教学终审 pending | PENDING |
| B3-26 | 磁场、磁感线和 B 的文字基本正确；`B=F/(IL)` 只在导线垂直场时成立，尚无演示验证 | 定量特例缺方向对照，节点仍为文字骨架 | `bx3.md`；后续专属交互 | 平行/斜交仍直接套 `F=BIL` | 明确 `F=BIL sinθ` 的方向边界或在必修层级只保留垂直特例；补小磁针探测演示 | 物理边界需修；教学终审 pending | OPEN |
| B3-27 | 磁通量和感应条件正确，但无实验动画、预测和负向证据 | 新增节点只补了文字骨架 | 后续 B3 教学建设 | 只给公式不能证明学生理解“通量大但不变无持续感应电流” | 真实切换 B、S、夹角和开闭回路；同时验证“不变化/不闭合”两种失败态 | 教学终审 pending | PENDING |

## 系统级 finding

### B3-SYS-01 默认教学路径未达到 2026-07-17 规范

```yaml
original_symptom: 25 个 bx3 动画均未声明 prefers-reduced-motion；多数页面默认展示公式和多项自由控件，没有“预测暂停→证据→解释→边界”的引导演示
root_cause: 存量交互按控制台和自由实验台标准建设，新教学/动画规范后尚未逐页升级
files: bx3.md, anim/bx3/*.html, anim/exp/capacitor-charge-discharge-lab.html, anim/exp/multimeter-practice-lab.html
failure_assertion: 控件和移动端通过即被宣称 pedagogy PASS
pass_assertion: 每页有主问题、默认演示、1 至 3 个有效预测点、证据反馈、边界/反例、重置/重播和 reduced-motion 路径
approval_impact: chapter content approval remains pending after the physics remediation batch
```

第一批先关闭确定物理错误、正文—动画矛盾和安全边界；第二批再按下表逐页关闭 B3-SYS-01，不用统一外壳或自动化绿灯批量代替节点证据。

## 第二批完成态验收矩阵（修改前建立）

本矩阵把 `B3-SYS-01` 拆到每个知识节点。每行必须由真实点击后的页面状态、因果反馈、390×844 和减少动态路径共同关闭；只出现统一面板或统一文案不算通过。

| Review ID | 主问题 / 学生预测 | 实际条件变化与核心证据 | 失败态断言 | 完成态断言 | 修改前状态 |
|---|---|---|---|---|---|
| B3-01 | 感应起电应先断地还是先移开带电体 | 真实执行接地、断地、移开三次点击；最终导体 `q=-6e` | 两步流程仍可被接受 | 三步顺序、读数和因果反馈一致 | PASS |
| B3-02 | `q₂` 变号后力的大小与方向怎样变 | 点击异号情境；大小不变且方向改为引力 | 把负号当负的“大小” | 非负大小与吸引方向分离 | PASS |
| B3-03 | 试探电荷变号会不会改变 E | 切换 `−q`；E 不变、F 反向 | 把 E 当试探电荷属性 | 同一位置 E 不变、受力反向 | PASS |
| B3-04 | 等量同号电荷中垂线上 E 指向哪里 | 切换同号双电荷；探针方向变为对称合成方向 | 把场线当粒子轨迹 | 切线方向与矢量合成一致 | PASS |
| B3-05 | 沿等势面移动时电场力是否做功 | 切换匀强场并沿等势面演示；`Δφ≈0、W≈0` | 只背“等势”名称 | 读数与路径方向共同给出零功证据 | PASS |
| B3-06 | 正电荷从高电势到低电势时电场力做功正负 | 真实播放 A→B；U、q、W 同步 | 只按路径长度判断功 | 用始末电势差判断正功 | PASS |
| B3-07 | 正负电荷在同一点的电势能关系 | 播放 A→B 并比较 `Ep=qφ`、电场力做功 | 混淆电势与电势能 | q 变号只改变 Ep 关系，不改变 φ | PASS |
| B3-08 | 三条不同路径的静电力功是否相同 | 播放一条路径并并列 `W₁=W₂=W₃` | 用路程决定静电力功 | 始末点相同即功相同，明确限静电场 | PASS |
| B3-09 | RC 放电时电流与电容电压怎样变化 | 先充电再放电；状态和 Uc/I 同步 | 把电荷瞬间放完 | 连续衰减且有时间常量证据 | PASS |
| B3-10 | 断开电源后改变板距，Q 是否改变 | 切换 `Q 不变` 并改变板距 | 接电源/断电源条件混写 | 模式、Q、U、E 联动正确 | PASS |
| B3-11 | 漂移速度或载流子数改变会怎样影响电流 | 重置后播放；累计电荷与电流读数变化 | 把单个电子速度等同信号速度 | `I=nqSv` 与截面计数对应 | PASS |
| B3-12 | 同尺寸导体换高电阻率材料，R 怎样变 | 切换镍铬；R 增大、I 减小 | 忘记控制 L、S | 材料、R、I 三表征同步 | PASS |
| B3-13 | 灯泡的 I-U 图像是否仍为直线 | 切换灯泡；工作点电阻变化、判据改为非线性 | 用单个 `R=U/I` 证明线性 | 曲线与工作点共同判定 | PASS |
| B3-14 | 同两电阻由串联改并联，总电阻怎样变 | 切换并联；等效电阻与支路读数同步 | 只看元件相邻关系 | 节点连接和电流分配共同验证 | PASS |
| B3-15 | 电动机输入电能是否全部变成焦耳热 | 切换电动机并播放；显示 `W>Q` 与输出能 | 把 `Q=I²Rt` 等同总电功 | 焦耳热和总电功边界分离 | PASS |
| B3-16 | 短路时路端电压和电流如何变化 | 点击显式 `R=0`；`U=0、I=ε/r` | 用有限滑块端点冒充短路 | 极限按钮与精确读数一致 | PASS |
| B3-17 | 电源内部谁把电荷从低电势搬到高电势 | 播放电荷搬运；非静电力做功和回路电流同步 | 把电动势当路端电压 | 能量来源、ε、U 条件分开 | PASS |
| B3-18 | 带电测电阻能否得到有效读数 | 真实切换“电源接通”；操作被明确拒绝 | 只显示错误但仍给合格结论 | 安全拒绝、原因和改法同时出现 | PASS |
| B3-19 | 频率加倍时真空波长怎样变 | 把频率 2→4；波长 150→75 | 把频率高误判为波速快 | `v` 不变、λ 反比的读数证据 | PASS |
| B3-20 | 减少化石能源是否等于违反能量守恒 | 播放能源转型；效率、投入和排放同步 | 混淆守恒、可再生、低碳 | 能量守恒与可持续评价分层 | PASS |
| B3-21 | 静电屏蔽时导体内部场强怎样 | 切换屏蔽；内部场强约零、表面重排 | 把未接地极化称为感应起电 | 模式名、总电荷和内部场一致 | PASS |
| B3-22 | 总功率过大时保护装置为何动作 | 提高功率并切换过载；电流与保护状态同步 | 把示意电流当通用定值 | 220 V 有效值、回路阻抗与保护边界完整 | PASS |
| B3-23 | R 加倍后 RC 充电快慢怎样变 | `R:20→40 kΩ` 并充电；`τ:2→4 s` | 只看最终电压 | 时间常量和曲线快慢同步 | PASS |
| B3-24 | 光纤传播延迟应使用 c 还是介质速度 | 切换光纤；`v≈2.0×10⁸ m/s`、40 km≈0.20 ms | 使用真空 c 或把载频当带宽 | 速度、波长、延迟、容量边界分开 | PASS |
| B3-25 | 直导线通电后旁边指南针是否偏转 | 新交互真实接通/反向电流；指南针偏转并反向 | 只列举设备名称 | “电流产生磁场”有可观察证据与应用迁移 | PASS |
| B3-26 | 导线平行磁场时是否仍受安培力 | 新交互切换平行/垂直；`F=BILsinθ` 显示 0/最大 | 把 `F=BIL` 当任意夹角通式 | B 方向、小磁针方向和安培力方向分离 | PASS |
| B3-27 | 磁通量很大但不变时是否有持续感应电流 | 新交互分别验证恒定磁通、变化磁通和开路 | 只要 Φ 大就宣称有电流 | `ΔΦ≠0` 与闭合回路两个条件均有正反证据 | PASS |
| B3-SYS-01 | 学生不自由调参能否完成主线 | 27 节均先预测，再触发各自真实状态，最后显示证据、解释、边界和迁移 | 统一外壳、公式抢答、无减少动态 | 逐节文案/动作、重播、控制解锁、reduced-motion、手机端均通过 | PASS |

## 直接整改范围

```text
bx3.md
anim/bx3/charge-electrification.html
anim/bx3/coulomb.html
anim/bx3/closed-circuit-law.html
anim/bx3/electrostatic-induction.html
anim/bx3/household-circuit.html
anim/bx3/em-wave-applications.html
anim/bx3/joule-law.html
anim/bx3/guided-lesson.js
anim/bx3/magnetic-phenomena.html
anim/bx3/magnetic-field.html
anim/bx3/magnetic-flux-induction.html
anim/bx3/*.html（统一减少动态入口）
anim/exp/capacitor-charge-discharge-lab.html
anim/exp/multimeter-practice-lab.html
tests/interaction-audit.spec.js
tests/b3-physics-pedagogy.spec.js
tests/b3-guided-pedagogy.spec.js
package.json
.github/workflows/ci.yml
```

## 验收门槛

- `git diff --check`
- `node scripts/gen-data.js --check`
- `npm run audit:physics:b3`
- B3-01 四阶段感应起电、B3-02 异号库仑力、B3-16 短路/断路、B3-21 名称边界、B3-22 安全示意、B3-24 光纤介质模型的真实浏览器验收
- 390×844 无横向溢出、无 console/page error
- `AUDIT_MODULE=bx3` 全章交互审计无 hard failure
- `npm run check`

## 整改前审批状态

```yaml
engineering_baseline: running_current_head_retest
physics_review: changes_required
pedagogy_review: changes_required
initial_B3_content_approval: pending
initial_B3_release_gate: blocked_by_B3_01_and_B3_20
development_flow: continue
```

## 完成修改后的提交复审

```yaml
remediation_state: implemented_committed_and_tested
baseline_head: 1f6baa13bad46a7ca1aaf5841b975ab18c5a4a44
implementation_commit: da4f3d969b5ffb411423e5f095b8d14509214982
final_verification_head: da4f3d969b5ffb411423e5f095b8d14509214982
parallel_head_advance: fce839b docs(B2): approve guided pedagogy at 9c01839
unrelated_B2_worktree_changes_present_at_handoff: false
physics_P0_open: 0
physics_P1_open_in_this_batch: 0
targeted_physics_boundaries: 8/8 PASS
targeted_guided_pedagogy: 5/5 PASS
full_B3_interaction: 28/28 PASS
hard_failures: 0
mobile_all_B3_animations: 28/28 PASS
repository_gate: PASS
static_evaluation: 206 pages / 13 chapters / 0 issues
content_approval: pass
release_gate: open
example_source_gate: blocked_until_source_verified
development_flow: continue
worktree_clean: true
final_machine_report: audit/results/b3-complete-da4f3d9.json
```

本轮 B3 实现已提交为 `da4f3d9`。最终全量交互报告在该提交且工作树完全干净时生成，记录 `28/28 PASS`、`worktree_clean: true` 和提交全 SHA。提交前基于 `fce839b` 的 worktree 报告只保留为过程追踪，不再作为最终绑定证据。

### Review ID 复审状态

| Review ID | 整改后状态 | 复审证据 |
|---|---|---|
| B3-01 | PASS | 浏览器必须依次点击“接地→断开接地→移开带电体”；三步标签、状态和物理读数都变化，旧两步流程不再被语义审计接受 |
| B3-02 | PASS | 正文、静态图和动画统一使用 `F=k|q₁q₂|/r²`；点击“异号相吸”后力大小非负、方向变为引力 |
| B3-03 | PASS | 先预测试探电荷变号的影响，再真实切换 `−q`；E 不变、F 反向，公式与控制随后开放 |
| B3-04 | PASS | 同号双电荷中垂线方向由真实场景切换验证，场线非轨迹边界进入反馈 |
| B3-05 | PASS | 沿等势面零功先预测后验证，匀强场读数、因果与感生电场反边界完整 |
| B3-06 | PASS | `W=qU` 和路径无关限静电场；A→B 的 U、q、W 证据在公式前形成 |
| B3-07 | PASS | 电势与电势能先预测后比较，零点选择边界和正负电荷迁移完整 |
| B3-08 | PASS | 三条路径做功相同有真实播放证据，并明确排除感生电场 |
| B3-09 | PASS | 先充电再放电，Uc/I 连续衰减、时间常量和模型边界进入默认主线 |
| B3-10 | PASS | 真空/空气的 `ε₀` 与均匀介质的 `ε` 已分开，公式卡前移并通过编辑门禁 |
| B3-11 | PASS | 平均电流 `ΔQ/Δt` 与稳恒电流 `Q/t` 已分层 |
| B3-12 | PASS | 控制 L、S 后切换镍铬，R 增大与 I 减小同步，温度边界进入反馈 |
| B3-13 | PASS | 单工作点 `R=U/I` 不能证明线性的误区，由灯泡曲线真实切换验证 |
| B3-14 | PASS | 串改并后 Req 与支路读数同步，节点连接而非图形相邻作为判据 |
| B3-15 | PASS | 焦耳热不再限于纯电阻用电器；恒定 I、R 条件与“仅纯电阻 W=Q”已分开，动画暴露专项边界元数据 |
| B3-16 | PASS | 动画增加显式 `R=0` 短路和 `I=0` 断路按钮；正文不再把有限滑块端点冒充极限；电动势必要定义在首次公式前给出 |
| B3-17 | PASS | 损坏公式删除；放电、充电、断路三种路端电压关系完整；循环前置关系解除 |
| B3-18 | PASS | 带电测阻由真实错误操作触发拒绝，原因、改法、倍率与调零边界完整 |
| B3-19 | PASS | `v=λf` 的 2→4 GHz、150→75 mm 对照在公式前验证，介质边界完整 |
| B3-20 | PASS | 核能、低碳、可再生和生命周期边界正确；能源转型读数形成默认因果链 |
| B3-21 | PASS | 未接地静电感应、屏蔽内部 E≈0、总电荷与空腔边界均进入引导反馈 |
| B3-22 | PASS | 220 V 有效值、过载保护和短路阻抗边界由真实功率/模式切换验证 |
| B3-23 | PASS | R 加倍使 τ 加倍有曲线和读数证据，初始未充电与 RC 模型边界完整 |
| B3-24 | PASS | 光纤介质速度、红外数量级、延迟、载频与带宽边界在默认主线形成 |
| B3-25 | PASS | 新增电流磁效应证据台；通电连续偏转、反向电流、磁体截断和应用机制均通过手机验收 |
| B3-26 | PASS | 新增磁场方向与安培力边界台；平行零力、垂直最大、B/I/F 三方向分离 |
| B3-27 | PASS | 新增磁通与感应条件台；恒定大 Φ、变化且闭合、变化但开路三组正反证据完整 |
| B3-SYS-01 | PASS | 27 节逐页问题、预测、真实条件变化、证据、因果、边界、迁移、重播和 reduced-motion 均通过；28 页 390×844 通过 |

### 双轨评分

| 评分轨 | 得分 | 含义 |
|---|---:|---|
| 工程交互终审 | 100/100 | 28 个 bx3 动画加载、真实控件、播放/暂停、重置、重入和移动端均通过 |
| 内容与教学终审 | 97/100 | 27 节核心物理、默认教学证据链、边界和迁移通过；隔离题目来源不在本分数中获批 |

内容与教学终审分项：物理与模型边界 `39/40`、教学主线 `24/25`、交互证据 `20/20`、移动端与可访问性 `9/10`、来源与治理 `5/5`。第三章核心内容审批为 `PASS`，核心发布门禁 `OPEN`；历史例题继续隔离，只有来源政策、独立复算和发布门禁全部通过后才能显示。

完整证据：`audit/results/B3_REVIEW_AND_REMEDIATION_WORKTREE_2026-07-18.md`；最终机器报告：`audit/results/b3-complete-da4f3d9.json`。
