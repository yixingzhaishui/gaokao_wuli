# B2 教学路径完成复审

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: 1f6baa13bad46a7ca1aaf5841b975ab18c5a4a44
implementation_commit: 9c01839f918545a24dd2fff9e9cfd87592dc2b93
review_date: 2026-07-18
scope: B2-01..B2-27 物理内容、默认教学路径、真实交互、390x844 与整仓门禁
review_role: OpenAI Pro 物理专家 / 高中物理教学设计 / 交互教材总编
```

## 当前裁决

```yaml
B2_physics_content: PASS
B2_pedagogy_review: PASS
B2_interaction_qa: PASS
B2_mobile_qa: PASS
B2_core_content_approval: PASS
B2_core_release_gate: OPEN
B2_example_source_gate: BLOCKED_UNTIL_SOURCE_VERIFIED
development_flow: continue
```

`B2_core_content_approval: PASS` 只批准 B2-01 至 B2-27 的正文物理、模型边界和教学主线，不把隔离题库自动批准为学生可见真题。页面状态继续明确写出 `sources quarantined`；未完成来源核验的例题不得因本报告进入学生端。

## 本轮关闭的 17 个教学节点

| 节点 | 修改前决定 | 修改后决定 | Codex 已执行动作 | 验收证据 |
|---|---|---|---|---|
| B2-01 | REVISE | PASS | 先预测合力与速度垂直时的运动，再显示 `F∥/F⊥` 和轨迹证据 | 预测反馈完整；90° 情境真实改变画面 |
| B2-02 | REVISE | PASS | 先比较水流增大是否改变过河时间，再开放矢量合成公式 | `v水` 改变，过河时间与下游偏移分别验证 |
| B2-03 | REVISE | PASS | 先预测水平初速度增大后的落地时间，再显示频闪与公式 | 水平速度变为 22 m/s，竖直落地时间条件保持 |
| B2-05 | REVISE | PASS | 先比较同周期内、外圈点，再揭示 `v=ωr` | 半径加倍、线速度加倍，角速度保持 |
| B2-07 | REVISE | PASS | 先预测质量变化对周期和拉力的影响 | 周期不变、拉力读数改变 |
| B2-09 | REVISE | PASS | 先预测质心距离加倍的引力倍数 | `r` 加倍、引力变为四分之一 |
| B2-10 | REVISE | PASS | 先比较半长轴增大后的周期，再显示第三定律 | 周期读数改变，中心天体条件明确 |
| B2-11 | REVISE | PASS | 先预测高轨速度和周期，再开放圆轨公式 | 高轨速度降低、周期增长；`r=R+h` 保留 |
| B2-13 | REVISE | PASS | 先预测第一次点火后的轨道类型 | 同一点加速后进入转移椭圆，不伪装成立即高圆 |
| B2-15 | REVISE | PASS | 先判断力与位移垂直时是否做功 | 90° 情境真实显示 `F∥=0`、功为零 |
| B2-16 | REVISE | PASS | 先比较相同功、不同时间的平均功率 | 120 J / 2 s 与 120 J / 8 s 形成四倍对比 |
| B2-17 | REVISE | PASS | 先预测恒功率阶段的牵引力与加速度变化 | 接近最大速度时 `F→f`、`a→0` |
| B2-19 | REVISE | PASS | 先改变零势能面，再比较势能数值、变化量和重力功 | `Ep1/Ep2` 平移，`ΔEp/WG` 不变 |
| B2-20 | REVISE | PASS | 先比较等量压缩和拉伸的弹性势能 | `|x|` 相同时势能相同；弹性限度边界保留 |
| B2-21 | REVISE | PASS | 先选系统并比较光滑/粗糙轨道的能量柱 | 机械能减少、内能等量增加、总能量不变；播放游标已修复 |
| B2-24 | REVISE | PASS | 先比较低速与近光速，再开放相对论公式 | `γ`、时间与运动方向长度同步变化 |
| B2-25 | REVISE | PASS | 先比较所需向心力与最大静摩擦 | 速度提高后显示约束不足，不引入真实离心力 |

## 已由上一批关闭并保持通过的节点

```text
B2-04  平抛、斜抛、类平抛概念边界
B2-06  纯径向合力与速率不变条件
B2-08  竖直圆周能量、绳约束和脱离后的抛体运动
B2-12  同步卫星约 24 h 与恒星日边界
B2-14  双星引力公式、共同角速度和质心关系
B2-18  动能定理推导与斜面摩擦功边界
B2-22  一般功能关系与固定粗糙斜面特例
B2-23  近似封闭系统和相对滑动生热
B2-26  第三宇宙速度的近地、顺行理想条件
B2-27  经典力学、相对论和量子适用边界
```

以上 10 个节点由 `npm run audit:physics:b2` 的 8 项专项测试和上一批提交绑定证据继续覆盖。本轮修改未回滚这些物理边界。

## 统一教学实现

新增 `anim/bx2/guided-lesson.js`，只承担统一教学节奏，不替代各节点物理模型：

```text
主问题
→ 遮蔽会泄露答案的画布读数和公式
→ 三选一预测
→ 真实触发节点情境或参数变化
→ 显示实际结果、画面证据和因果解释
→ 高考迁移
→ 开放公式、控制面板和自由探索
```

每个节点仍使用自己的问题、正确选项、物理证据、原因和高考迁移，不使用同一套空泛文案。正文中的 iframe 已移动到公式首次出现之前，同一节点只保留一个 iframe。

## 提交绑定验收

### 专项教学路径

```text
command: npm run audit:pedagogy:b2
result: 3/3 PASS
coverage:
  - 17 个节点 iframe 位于公式之前
  - 预测前公式面板与答案画布不可读、自由控制锁定
  - 真实点击预测和验证
  - 节点物理状态真实改变
  - 反馈包含预测、实际结果、画面证据、因果解释和高考迁移
  - 390x844 无横向溢出、无 console/page error
```

### 物理回归

```text
command: npm run audit:physics:b2
result: 8/8 PASS
```

### B2 全章真实交互

```text
command: AUDIT_MODULE=bx2 AUDIT_REPORT=b2-pedagogy-9c01839.json playwright test tests/interaction-audit.spec.js --workers=1
tested_commit: 9c01839f918545a24dd2fff9e9cfd87592dc2b93
worktree_clean_at_start: true
result: 27/27 PASS
score: 100
hard_failures: 0
```

机器报告：`audit/results/b2-pedagogy-9c01839.json`

### 数据与整仓门禁

```text
node scripts/gen-data.js --check: PASS (229/229)
npm run check: PASS
editorial coverage: 229/229 PASS
math content: PASS
solution quarantine: PASS
static fallback: PASS
static evaluation: 203 pages / 13 chapters / 0 issues
GATE: PASS (P0/P1 clean; KaTeX lint clean)
```

仓库仍报告一项非发布警告：隔离旧题库中存在待人工清理内容。它们不进入学生端，本报告不把它们误报为已核验真题。

## 剩余 Codex 动作

```yaml
B2_physics_fix: none
B2_guided_pedagogy_fix: none
B2_interaction_fix: none
B2_source_action:
  decision: KEEP_QUARANTINED
  acceptance: 只有可追溯真题来源、独立复算和发布门禁全部通过后才显示
global_progress_action:
  decision: DO_NOT_AUTO_MARK_DONE
  reason: B2 核心内容通过不等于全站来源审核和出版流程完成
```

本轮没有新的 `BLOCKED` 物理或教学节点。B2 核心内容可以进入持续维护状态；后续改动若触及模型、教学顺序或动画交互，必须重新运行 B2 两组专项门禁和全章交互审计。
