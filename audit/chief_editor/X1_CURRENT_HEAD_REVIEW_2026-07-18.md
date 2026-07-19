# X1 当前 HEAD 物理、教学、交互审核与整改复审

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: 9928e1d9ef39d6cab1b4fa6bcc1869cf4a4cd20c
remediation_head: 22758f8699957590d1d0375b12e199618b155824
review_date: 2026-07-18
review_role: Codex 物理内容 / 高中物理教学设计 / 交互教材总编复审
scope: X1-01..X1-27 正文、21 个 anim/xb1 动画、当前测试与 CI 门禁
development_flow: continue
physics_review: passed_current_review
pedagogy_review: passed_current_review
content_approval: passed_current_review
release_gate: core_content_passed_sources_quarantined
review_status: remediated
```

> 本文件审核的是第四大章 X1（选择性必修一），不是 B1。初审问题、真实复现证据与整改关闭记录均保留在同一文件中。页面的 `physics + pedagogy passed · sources quarantined` 只代表本轮 X1 物理、教学与交互复审通过；`data/progress.json` 中尚待教师/题源审核的独立轴没有被伪造为完成，隔离题目仍不可见。

## 初审总裁决

```yaml
engineering_interaction:
  result: PASS
  pages: 21/21
  mobile_390x844: 21/21
  hard_failures: 0
physics_CRITICAL:
  - X1-09
  - X1-11
  - X1-12
  - X1-14
  - X1-27
physics_MAJOR:
  - X1-03
  - X1-06
  - X1-13
  - X1-15
  - X1-18
  - X1-20
  - X1-21
  - X1-25
  - X1-26
systemic_MAJOR:
  - X1-SYS-01
  - X1-SYS-02
chapter_decision: REVISE
development_flow: continue
content_approval: pending
release_gate: blocked_by_X1_09_X1_11_X1_12_X1_14_X1_27
```

工程门禁的 100 分只证明页面能够加载、播放、暂停、复位、重入并适配手机；本轮真实操作复现出单摆复位错位、阻尼分类错误、共振峰与标签矛盾、同一介质中波速被频率滑块随意改变、光纤参数静默篡改等问题。因此不能沿用工程分数批准内容。

## 系统级 finding

### X1-SYS-01 默认教学路径未达到现行教学规范

```yaml
severity: MAJOR
original_symptom: 21 个动画都有观察任务，但 0 个形成“主问题→预测暂停→实际条件变化→证据→解释→边界→迁移”的默认路径；公式或全部自由控件通常在证据形成前可见
root_cause: 存量动画按自由控制台建设，尚未逐节点升级为引导式证据链
affected_nodes: X1-01..X1-27
failure_assertion: 控件可用、数字刷新或出现观察任务即被记为 pedagogy PASS
pass_assertion: 每个节点有锚定问题、1 至 3 个有效预测点、真实状态变化、证据反馈、因果解释、边界或反例、迁移与重播；默认主线完成前不让公式抢答
approval_impact: all X1 pedagogy_review remain pending
```

### X1-SYS-02 减少动态与重播路径缺失

```yaml
severity: MAJOR
original_symptom: prefers-reduced-motion 0/21，明确重播入口 0/21；20/21 有暂停控件，但多数页面载入时已经运动，按钮初态显示“暂停”
root_cause: 动画只实现普通连续播放状态，没有可访问性分支和可重复的分步演示状态机
affected_nodes: X1-01..X1-27
failure_assertion: 只有暂停/复位就视为满足动画规范
pass_assertion: 390x844 下同时验证普通路径和 reduced-motion 路径；初态、播放、暂停、重播、复位语义一致，不依赖持续运动传递唯一证据
approval_impact: mobile layout may pass, but accessibility and pedagogy approval remain pending
```

静态盘点：观察任务 `21/21`，公式—图像绑定标记 `8/21`，暂停控件 `20/21`，引导演示/预测点 `0/21`，明确重播 `0/21`，`prefers-reduced-motion` `0/21`。

## 逐节点审核矩阵

共同状态：所有节点 `development_flow=continue`。表中“交互/手机 PASS”只指当前通用 Playwright 定义；“章阻断”表示该节点不是单独 CRITICAL，但 X1 整章仍因本报告所列 CRITICAL 与系统级 MAJOR 不得发布。

| ID | concrete_findings / physics_content | pedagogy_review | interaction_qa / mobile_qa | approval / gate / review_status | acceptance_checks |
|---|---|---|---|---|---|
| X1-01 动量 | 核心定义、矢量性和单位正确，`physics_content=pass_with_minor` | `MAJOR`：直接给结论和自由控制，缺预测后揭示 | 通用交互 PASS；390×844 PASS | content pending / 章阻断 / revise | 先预测质量或速度变号对 p 的影响，再用矢量证据验证；补系统边界与迁移 |
| X1-02 冲量 | 冲量与力—时间面积主线基本正确；需明确变力冲量与平均力层级，`pass_with_minor` | `MAJOR`：无默认预测暂停 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 先比较同面积不同 F-t 过程，再形成 `I=Δp`；平均力不得冒充全过程恒力 |
| X1-03 动量定理 | `MAJOR`：鸡蛋/缓冲对比称“动量变化相同”，却未限定相同入射速度、均停止且不反弹；动画用恒定 F 代表实际变力冲击 | `MAJOR`：结论和公式先于条件证据 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 明确合外力冲量和平均力；只有相同初末动量才比较作用时间；反弹情境必须改变 Δp |
| X1-04 动量守恒定律 | 守恒条件基本正确；共用碰撞台允许选出物体相互远离、永不碰撞的参数却无拒绝，`pass_with_minor` | `MAJOR`：缺“系统选择/外冲量”预测关卡 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 非碰撞参数给明确拒绝；以系统总动量前后读数验证，不用两车动画存在代替守恒证据 |
| X1-05 弹性碰撞 | 主模型正确；正文公式含 `v₂′ = 2\ \mathrm{m}_{1}/...` 的变量排版错误，`MINOR` | `MAJOR`：缺守恒量对照预测 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 修正变量为 `m_1`；同时展示动量和动能前后守恒，加入非弹性反例 |
| X1-06 非弹性碰撞 | `MAJOR`：正文称“动量守恒（所有碰撞都成立）”，漏系统外冲量条件；一般非弹性与完全非弹性共同速度公式混写 | `MAJOR`：没有先判碰撞类型再选模型 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 改为在系统合外冲量可忽略时守恒；只在完全非弹性时使用共同速度，分别核验动能损失 |
| X1-07 反冲运动 | 理想系统内动量交换与方向关系基本正确，`pass_with_minor` | `MAJOR`：缺初始总动量不为零及外力不可忽略的反例 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 先预测质量比改变后的速度比，再显示总动量；明确火箭连续变质量不等同两物体瞬时反冲模型 |
| X1-08 简谐运动 | 恢复力、位移和相位主线基本正确；机械能守恒表述需立即限定理想无阻尼系统，`MINOR` | `MAJOR`：公式台先于可观察证据 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 用 x、v、a、E 的同步状态形成证据，并以阻尼情境作边界；不得无条件写机械能守恒 |
| X1-09 单摆 | `CRITICAL`：第二摆按 `1.4θ₀` 绘制，默认已为 14°，却强制同周期并标注“大振幅（同步！）”；复位把不存在的 `theta` 设为 10，控制读数复位而物理角度仍停在用户值 | `MAJOR`：错误默认演示直接生成错误证据 | 通用脚本 PASS，但真实复位 FAIL；手机布局 PASS | pending / node blocked / revise | 小角度对照须两摆均满足近似；大角度必须用非线性周期或明确不再同步；复位后控件、状态、画面和内部 `th0` 一致 |
| X1-10 简谐运动图像 | x-t 图像与周期参数基本正确，`physics_content=pass_with_minor` | `MAJOR`：缺“图上一点对应实际状态”的预测—证据链 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 先在图像选相位预测 x/v/a，再播放到该时刻验证；区分轨迹图与 x-t 图 |
| X1-11 阻尼振动 | `CRITICAL`：把 `ζ<0.75` 才称欠阻尼、`0.75≤ζ≤1.15` 称“临界附近”；`ζ=0.80` 实际仍走振荡分支却显示“临界附近：最快平复”；过阻尼曲线和包络采用非标准拼接 | `MAJOR`：分类标签和图像矛盾，不能形成可靠证据 | 通用脚本 PASS；真实 ζ=0.80 语义 FAIL；手机 PASS | pending / node blocked / revise | 严格按 `ζ<1、ζ=1、ζ>1` 分类并采用对应解；临界阻尼只在 ζ=1；包络公式限定欠阻尼，三类各有可核验响应 |
| X1-12 受迫振动与共振 | `CRITICAL`：模型含阻尼且峰值随阻尼偏移，却无条件写 `f驱=f固` 和“加大阻尼不会改变共振条件”；高阻尼时浏览器实测 f=1.5 的幅值 1.2 大于 f=2.0 的 1.1，但后者仍标“振幅最大”；微波炉被列为机械共振例子 | `MAJOR`：错误标签覆盖实际数值证据 | 通用脚本 PASS；真实高阻尼比较 FAIL；手机 PASS | pending / node blocked / revise | 明确位移振幅峰值与固有频率相等仅属弱阻尼近似；标签必须取真实峰值；删除或重写微波炉例子 |
| X1-13 机械波的形成 | `MAJOR`：共用 `wave-basics` 允许 λ、f 独立变化并把 v 随之改写，破坏“介质决定波速”的默认模型，也污染波的形成证据 | `MAJOR`：未先演示质点振动与波形传播的区别 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 固定介质时改变源频率应由 λ 联动以保持 v；质点只在平衡位置附近振动，不随波迁移 |
| X1-14 波长、频率、波速 | `CRITICAL`：正文正确写同一介质 v 由介质决定，观察任务却要求“拖动频率→v 增大”；实测 λ=120 保持不变、f=1→2、v=120→240，未改变介质 | `MAJOR`：错误控制关系成为默认观察结论 | 通用脚本 PASS；真实键盘操作语义 FAIL；手机 PASS | pending / node blocked / revise | 固定介质改变 f 时 v 不变、λ=v/f 联动；改变介质才改变 v，并同步显示 λ 变化 |
| X1-15 波的图像 | `MAJOR`：与 X1-13/14 共用错误的独立 λ/f 控制，容易把波形快慢、质点振动和介质波速混为一谈 | `MAJOR`：缺固定时刻波形与固定位置振动图像的对照预测 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 分开 y-x 与 y-t；同一介质保持 v；同一点相位随时间和同一时刻空间相位分别核验 |
| X1-16 波的干涉 | 叠加主线基本正确；“加强/减弱”和完全相消需限定相干、频率相同及振幅条件，`MINOR` | `MAJOR`：自由调参代替相位差预测 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 用程差/相位差先预测，再显示合振幅；振幅不等时不得称完全相消 |
| X1-17 波的衍射 | 障碍物/孔宽与波长尺度关系基本正确，`physics_content=pass_with_minor` | `MAJOR`：缺 `a/λ` 对照预测和几何光学边界 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 固定 λ 比较至少三档 a/λ；把“明显衍射”和“任何波都有衍射”分开表述 |
| X1-18 多普勒效应 | `MAJOR`：动画源越界后用 modulo 瞬移回左侧，旧波面仍保留，产生非物理不连续；公式只适合介质中静止观察者、运动且亚声速声源，却被扩展到一般源/观察者和光的红蓝移 | `MAJOR`：未先区分源动、观察者动和光学情形 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 移动源不得瞬移穿越波场；给出公式适用条件和马赫数边界；光学多普勒另作定性或正确模型 |
| X1-19 光的折射 | 斯涅尔定律和 `n=c/v` 物理主线正确；关键公式以普通文本出现，公式首次使用门禁未实际覆盖，`editorial MAJOR` | `MAJOR`：无预测后揭示，公式卡缺失 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 用角度或波速变化先预测偏折方向，再展示公式；首次公式需规范渲染并说明频率不变 |
| X1-20 全反射 | `MAJOR`：正文同时使用物理条件 `i>C`、临界态 `i=C`，又称考试统一写 `i≥C`；动画采用容差并混用 `>`/`≥`，临界点定义不一致 | `MAJOR`：控制边界没有独立临界态证据 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 统一为 `i<C` 折射、`i=C` 折射角 90°临界态、`i>C` 全反射；若说明教材约定，必须与物理状态分栏 |
| X1-21 光的干涉 | `MAJOR`：双缝条纹间距 `Δx=Lλ/d` 被写成无条件通式，缺远场和小角近似；公式仍以普通文本出现 | `MAJOR`：直接调参读数，没有先判比例关系 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 明确相干、近轴、`L≫d` 等条件；先预测 λ/L/d 改变的方向，再用条纹读数验证 |
| X1-22 光的衍射 | 中央亮纹定性趋势与“视觉展宽”标注诚实；`sinθ≈λ/a` 混淆精确第一暗纹关系与小角近似，`MINOR` | `MAJOR`：没有从单缝宽度预测第一暗纹位置 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 写为第一暗纹 `a sinθ=λ`，小角时才有 `θ≈λ/a`；视觉展宽继续明确非比例尺 |
| X1-23 光的偏振 | 马吕斯定律已标拓展，横波证据基本正确；“全黑”需限定理想偏振片，`pass_with_minor` | `MAJOR`：缺非偏振光—起偏—检偏的分步证据 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 先预测检偏器转角对强度影响；理想模型和现实漏光分开，公式只在拓展环节显示 |
| X1-24 光电效应 | 作为跨模块复习入口映射到 X3-19 的治理关系正确，不计入 X1 课标覆盖率；内容条件已基本限定，`pass_with_minor` | `MAJOR`：复习入口仍沿用无预测的自由动画 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 保持 `official_main_node=X3-19`；用频率阈值和光强对照先预测，X1 入口不得重复计数或单独获批 |
| X1-25 波的反射与折射 | `MAJOR`：机械波节点的“公式首次使用”卡误写光学 `n₁ sin i=n₂ sin r`；正文另有损坏公式 `sin θ 1/v₁ = sin θ 2/v₂`，下方代码块才写对 | `MAJOR`：错误公式卡先于证据，强化跨模型混淆 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 机械波斜折射使用规范下标和 `sinθ₁/v₁=sinθ₂/v₂`；法线、频率不变、波速/波长变化同步验证 |
| X1-26 激光的特性与应用 | `MAJOR`：正文已说明 `θ` 为半角，但动画控件只写“发散角 θ”并计算 `r=Lθ`，未告知全角/半角，存在 2 倍歧义 | `MAJOR`：测量量定义未在操作前出现 | 通用交互 PASS；手机 PASS | pending / 章阻断 / revise | 控件明确写“半发散角 θ”或若用全角则计算 `r=Lθ/2`；画面同时标轴线、半角和光斑半径 |
| X1-27 光纤通信与全反射应用 | `CRITICAL`：当 n₂≥n₁ 时内部静默改成 `n₁-0.01`，实测滑块 1.55 而显示 1.49；光路固定锯齿且未使用所选角度，弯曲阈值与“估计损耗%”为任意数，却作为定量证据；公式又混用 `i≥C` | `MAJOR`：伪测量和静默改参破坏预测—证据关系 | 通用脚本 PASS；真实无效参数操作 FAIL；手机 PASS | pending / node blocked / revise | 对 `n₂≥n₁` 明确拒绝而非静默篡改；由几何光线和局部法线计算每次入射；无可信模型时只做定性泄漏，不显示伪精确损耗百分比 |

## CRITICAL / MAJOR 可复现证据

| Review ID | 真实操作 | 当前观测 | 应有验收断言 |
|---|---|---|---|
| X1-09 | 把单摆角度改为 15°后点击复位 | 控件和显示回到 10°，物理内部角度仍为 15°；状态仍提示角度偏大 | 复位后控件、显示、内部模型与画面统一为同一标准初态 |
| X1-11 | 键盘把阻尼比调到 ζ=0.80 | 显示“临界附近：最快平复”，代码仍用欠阻尼振荡分支 | ζ=0.80 必须归为欠阻尼；只有 ζ=1 为临界阻尼 |
| X1-12 | 高阻尼条件比较 f=2.0 与 f=1.5 | f=2.0 显示幅值 1.1 且称最大，f=1.5 实际幅值 1.2 | “共振峰”标签必须与同一模型的实际最大值一致，并说明弱阻尼近似 |
| X1-14 | 固定介质，把频率从 1.0 调至 2.0 | λ 保持 120，v 从 120 变为 240 | 固定介质 v 不变，λ 随 f 反比联动 |
| X1-27 | 把包层折射率滑块调到 1.55，而芯层 n₁=1.50 | 输入滑块仍为 1.55，显示被静默改成 1.49 | 非法参数必须显式拒绝，界面值与模型值不得分裂 |

## 当前自动化证据

| 命令 | 结果 | 审核含义 |
|---|---|---|
| `node scripts/gen-data.js --check` | PASS；229 entries；`review=32, done=175, pending=3, partial=19` | 生成数据未漂移，不改变 X1 内容审批状态 |
| `npm run check` | PASS；229 节点编辑门禁、数学门禁、来源隔离哈希、206 页/13 章静态检查均通过 | 仓库工程门禁通过；现有规则没有捕获本报告的语义与教学问题 |
| `AUDIT_MODULE=xb1 AUDIT_REPORT=xb1-current-9928e1d.json npx playwright test tests/interaction-audit.spec.js --workers=1` | 21/21 PASS，约 1.4 min；每页 `hard_failures=[]`；每页 `mobile_passed=true` | 通用真实控件/播放/暂停/复位/重入与手机布局通过，不等于物理语义通过 |

机器报告：`audit/results/xb1-current-9928e1d.json`。该报告绑定 `9928e1d9ef39d6cab1b4fa6bcc1869cf4a4cd20c`，生成时记录 `worktree_clean=true`。

## 双轨评分

| 评分轨 | 得分 | 裁决 |
|---|---:|---|
| 工程交互基线 | 100/100 | 21 个动画在通用定义下全部可操作，手机布局通过 |
| 内容与教学审核 | 52/100 | 5 个 CRITICAL、9 个节点级 MAJOR、2 个系统级 MAJOR，不能发布 |

内容与教学分项：物理与模型边界 `25/40`、默认教学主线 `5/25`、交互证据真实性 `11/20`、移动端与可访问性 `6/10`、来源与治理 `5/5`。来源与治理得分只表示历史自由文本题已隔离、X1-24 跨模块映射正确；`source_verified` 门禁仍未开放，隔离题目不得学生可见。

## 建议整改顺序与关闭条件

1. 先关闭发布阻断：X1-09、X1-11、X1-12、X1-14、X1-27，并建立可直接复现上述失败态的专项 Playwright 断言。
2. 再关闭物理/编辑 MAJOR：X1-03、X1-06、X1-13、X1-15、X1-18、X1-20、X1-21、X1-25、X1-26。
3. 最后逐节点关闭 X1-SYS-01/02：不是加统一外壳，而是为 27 节分别补主问题、有效预测、真实条件变化、证据、解释、边界、迁移、重播和减少动态路径。
4. 复审必须同时通过专项物理语义、21 个动画真实交互、390×844、`prefers-reduced-motion`、`node scripts/gen-data.js --check` 与 `npm run check`；自动化全绿后仍按本矩阵逐项人工确认。

## 整改复审与逐项关闭

### 发布阻断项

| Review ID | 修正 | 关闭证据 | 状态 |
|---|---|---|---|
| X1-09 | 小角度参考摆固定为 5°；当前摆的大角度周期采用级数修正；复位同步控件、显示和内部振幅 | 专项测试比较 5° 与大角度周期，并验证 15° 后复位恢复 10° | CLOSED |
| X1-11 | 严格按 `ζ<1` 欠阻尼、`ζ=1` 临界、`ζ>1` 过阻尼分类；三类分别采用对应响应式 | 专项测试验证 0.80、1.00、1.20 三个边界状态 | CLOSED |
| X1-12 | 位移振幅峰值由同一阻尼模型计算；`f₀` 与实际峰值分线标注；正文限定弱阻尼近似并删除微波炉机械共振例 | 专项测试改变阻尼后核验 `data-peak-frequency` 与状态文案 | CLOSED |
| X1-14 | 波速改为介质控件，固定介质时由 `λ=v/f` 联动波长 | 专项测试改变频率后验证 `v` 不变、`λ` 改变 | CLOSED |
| X1-27 | `n₂≥n₁` 明确拒绝且输入/显示/模型一致；光线按弯曲边界局部法线逐次反射；删除伪损耗百分比 | 专项测试验证非法参数、局部光线模型和定性泄漏状态 | CLOSED |

### 节点级 MAJOR 与其余内容问题

| 节点 | 修正摘要 | 状态 |
|---|---|---|
| X1-03 | 补“相同初末动量”比较条件，变力用合外力冲量积分与平均合力表述 | CLOSED |
| X1-04～06 | 非碰撞初态显式拒绝；修正变量排版；碰撞动量守恒补系统外冲量条件，并分开一般/完全非弹性 | CLOSED |
| X1-08 | 机械能守恒限定理想无阻尼系统 | CLOSED |
| X1-13～15 | 共用波动画改为介质决定波速、频率决定波长，并用三个独立引导区分形成、参数和波形图 | CLOSED |
| X1-16 | 完全相消补相干与到达点振幅相等条件 | CLOSED |
| X1-18 | 取消越界 modulo 瞬移；源运动到边界后停止；补静止介质/观察者、亚声速源与光学相对论边界 | CLOSED |
| X1-19～20 | 折射公式卡移到证据后首次使用；全反射严格区分 `i<C`、`i=C`、`i>C` | CLOSED |
| X1-21～23 | 双缝公式补远场近轴条件；单缝写成精确 `a sinθ=λ` 后再给小角近似；偏振消光限定理想模型 | CLOSED |
| X1-24 | 保持跨模块映射；低频高光强形成“光子仍到达、无电子逸出”的动态反证 | CLOSED |
| X1-25 | 机械波折射统一为 `sinθ₁/v₁=sinθ₂/v₂`，并说明频率跨界面不变与模型边界 | CLOSED |
| X1-26 | 控件、画面与公式统一为半发散角；若给全角必须先除以二 | CLOSED |

### 系统级教学与可访问性

| Review ID | 修正 | 验收结果 | 状态 |
|---|---|---|---|
| X1-SYS-01 | 27 个节点分别配置主问题、预测、真实控件操作、证据、解释、边界、迁移和重新预测；同一动画通过 `lesson=X1-NN` 保持节点语义独立 | `npm run audit:pedagogy:x1`：27/27 完成完整证据链 | CLOSED |
| X1-SYS-02 | 默认先暂停并锁定实验台；完成预测验证后开放自由探索；提供重播；支持 `prefers-reduced-motion` | 21/21 动画声明支持；27/27 在 390×844 减少动态模式完成且无横向溢出 | CLOSED |

## 整改后自动化证据

| 命令 | 结果 |
|---|---|
| `node scripts/gen-data.js --check` | PASS；229 条目；现有进度状态计数未被生成器改写 |
| `npm run check` | PASS；229 节点编辑/数学/来源隔离/静态门禁通过；206 页、13 章、0 issues |
| `npm run audit:physics:x1` | 11/11 PASS；覆盖 5 个原 CRITICAL、关键边界、移动端与正文条件 |
| `npm run audit:pedagogy:x1` | 4/4 PASS；27 个节点完整证据链、21 个动画统一引导、390×844 减少动态 |
| `AUDIT_MODULE=xb1 AUDIT_REPORT=x1-remediation-worktree-final.json npx playwright test tests/interaction-audit.spec.js --workers=1` | 21/21 PASS；score 100；0 BLOCKED；0 hard failure |
| `AUDIT_MODULE=xb1 AUDIT_REPORT=x1-complete-22758f8.json npx playwright test tests/interaction-audit.spec.js --workers=1` | 干净实现提交 `22758f8` 上 21/21 PASS；`worktree_clean=true`；差异哈希为空树 SHA-256 |

工作树复审报告：`audit/results/x1-remediation-worktree-final.json`。它绑定基线提交与本次差异哈希，并如实记录 `worktree_clean=false`。最终发布证据：`audit/results/x1-complete-22758f8.json`，绑定完整实现提交 `22758f8699957590d1d0375b12e199618b155824`，记录 `worktree_clean=true`、21/21 PASS、0 BLOCKED。

## 整改后双轨评分

| 评分轨 | 得分 | 裁决 |
|---|---:|---|
| 工程交互 | 100/100 | 21 个动画真实播放、暂停、复位、控件、重入与手机布局全部通过 |
| 物理与教学 | 97/100 | 原 5 个 CRITICAL、9 个节点 MAJOR、2 个系统 MAJOR 已关闭；题源与教师终审继续保持独立门禁 |

未给满分的 3 分不是已知物理错误，而是发布治理余量：结构化真题的来源核验、独立复算和教师签署尚未完成。它们不阻断 X1 核心讲解和动画整改通过，但继续阻断隔离题目进入学生端。

## 当前审批状态

```yaml
engineering_interaction: pass
physics_content: passed_current_review
pedagogy_review: passed_current_review
interaction_qa: pass_21_of_21
mobile_qa: pass_including_reduced_motion
content_approval: passed_current_review
release_gate: core_content_passed_sources_quarantined
review_status: remediated
development_flow: continue
source_gate: blocked_until_source_verified_and_recalculated
teacher_signoff: pending
```
