# B2 第一批物理与教学整改证据

```yaml
repository: yixingzhaishui/gaokao_wuli
branch: codex/repository-fixes
baseline_head: d93a022ff904750ae89c0beeb827a9fe33918dfc
implementation_commit: 48fe103f711b69cb65767c2f3b3ea96c7c000b95
evidence_date: 2026-07-18
implementation_worktree_at_interaction_start: clean
git_diff_sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

## 当前裁决

```yaml
physics_P0: PASS
physics_P1_in_remediation_batch: PASS
targeted_physics_and_pedagogy: PASS
full_B2_interaction: PASS
mobile_390x844: PASS
repository_gate: PASS
B2_chapter_decision: REVISE
B2_content_approval: PENDING
B2_release_gate: PENDING_REMAINING_PEDAGOGY_REVIEW
```

`B2_chapter_decision: REVISE` 不与测试通过矛盾：本批已经关闭已发现的确定物理错误和模型边界，但逐节点矩阵中的 `DEFERRED` 页面仍需完成默认演示、预测节点、公式延迟揭示和高考迁移的教学终审。

## 节点复审结果

| 节点 | 修复后决定 | 物理与教学证据 |
|---|---|---|
| B2-03 | PASS | 平抛落地时间结论已限定同一地点、同一高度、同一重力场、竖直初速度为零并忽略空气阻力 |
| B2-04 | PASS | 平抛、斜抛、类平抛概念分离；动画按钮改为“水平抛出” |
| B2-06 | PASS | 只有合力纯径向且切向合力为零时才声称速率不变 |
| B2-08 | PASS | 最高点预测先于公式；播放用机械能计算各位置速度；绳在任意位置检查张力；失效后演示抛体而非继续伪圆周；真实时间步长 |
| B2-12 | PASS | 24 h 明确为高中近似，严格周期为一个恒星日 |
| B2-14 | PASS | 双星引力公式排版恢复为 `Gm1m2/L²` |
| B2-18 | PASS | 推导改为代入消元；斜面摩擦功限定动摩擦、固定粗糙斜面和法向力条件 |
| B2-22 | PASS_WITH_MODEL_BOUNDARY | 一般关系与固定斜面特例分离；摩擦功不再普遍等同机械能损失或生热 |
| B2-23 | PASS_WITH_MODEL_BOUNDARY | 明确“滑块 + 固定斜面 + 地球”近似封闭系统；相对滑动生热使用 `Q=fk·s相对` |
| B2-26 | PASS_WITH_IDEAL_DIRECTION_BOUNDARY | 16.7 km/s 只在近地、沿地球公转方向等教材理想条件下作为第三宇宙速度最小值 |

## 自动化与真实交互证据

### 1. B2 专项物理与教学测试

```text
command: npm run audit:physics:b2
result: 8/8 PASS
coverage:
  - 正文物理边界与公式修复
  - B2-04 概念区分
  - B2-06 纯径向条件
  - B2-08 预测、能量一致速度、全位置绳约束、杆模型极限
  - B2-22 系统边界
  - B2-23 相对滑动生热
  - B2-26 第三宇宙速度条件
  - 受影响动画 390×844、console/page error
```

### 2. B2 全章真实交互

```text
command: AUDIT_MODULE=bx2 AUDIT_REPORT=b2-interaction-48fe103.json npx playwright test tests/interaction-audit.spec.js --workers=1
result: 27/27 PASS
score: 100
hard_failures: 0
worktree_clean: true
tested_commit: 48fe103f711b69cb65767c2f3b3ea96c7c000b95
```

机器可读报告：`audit/results/b2-interaction-48fe103.json`

### 3. 数据与整仓门禁

```text
node scripts/gen-data.js --check: PASS
npm run check: PASS
editorial coverage: 229/229 PASS
math content: PASS
solution quarantine hashes: PASS
static fallback: PASS
static evaluation: 203 pages, 13 chapters, 0 issues
GATE: PASS (P0/P1 clean; KaTeX formula lint clean)
```

仓库仍报告一项非发布警告：隔离旧题库中存在待人工清理项；这些内容不会进入学生端，本批没有把它误报为已完成。

## 文件哈希

```text
97bf0053346370b2d2e392e78b4470af8a3e7739f822d9dc6a3d25a812da01b5  audit/results/b2-interaction-48fe103.json
7f7d34ee777703e43d0d1fdc372307ca04ddd8e864db22361acc03fa9d4617b8  bx2.md
173e8ce0394297f283cbba0c373f77e8a5383d56bbba731c828f342cbf43c0f0  anim/bx2/vertical-circle.html
caa99d079374d81fc3ec646075e269f42aa8fb0cf1bab9bf3d6d99589ebe8628  anim/bx2/work-energy-relation.html
7a20257078e55342e8b68de2f313f13cb418647aa5f2b9cf356599a244405756  anim/bx2/energy-conservation.html
5022f8507594cf882898d938220f0264cf4f3fb571be73f2f378d48379aad88e  anim/bx2/cosmic-velocity.html
3decfdcc2ef2694fc296e7a9b7c0d7814bd4765a9ef37d9296e78dbf36947996  tests/b2-physics-pedagogy.spec.js
```

## 下一轮 Codex 动作

继续按 `audit/chief_editor/B2_CURRENT_HEAD_REVIEW_AND_REMEDIATION_2026-07-18.md` 的 `DEFERRED` 队列逐页精修，不回滚本批物理边界：

1. 优先 B2-01、B2-02、B2-03、B2-05、B2-07：把控制台式首屏压缩为短演示，补一次预测和证据对比；
2. 再处理 B2-09、B2-10、B2-11、B2-13：统一天体运动的“半径—速度—周期—能量”迁移链；
3. 最后处理 B2-15、B2-16、B2-17、B2-19、B2-20、B2-21、B2-24、B2-25：延迟公式和自由探索，补足高考迁移；
4. 每批仍需专项真实交互、390×844 和干净提交证据，不因工程 PASS 提前把内容状态改为 `done`。
