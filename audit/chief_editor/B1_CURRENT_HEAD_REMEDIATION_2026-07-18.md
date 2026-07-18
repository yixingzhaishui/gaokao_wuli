# B1 当前 HEAD 整改验收矩阵

> 基线：`af2032c12acb145b36c9be8405e2af35a04f32cd`
> 受测实现：`2b141c56bc1b3a4f69ce64ce1f277976343585c4`
> 来源：`OPENAI_PRO_B1_CURRENT_HEAD_REVIEW_af2032c.md`
> 状态：VERIFIED — CURRENT FINDINGS CLOSED
> 原则：物理阻断优先；工程 PASS 不替代内容批准；开发继续。

| ID | 原始现象 / 根因 | 修改文件 | 失败态断言 | 通过态断言或证据 | 审批影响 | 状态 |
|---|---|---|---|---|---|---|
| B1-AF-01 | 质点页只有自由探索，判据直接泄露 | `particle.html`、`bx1.md`、专项测试 | 初态直接显示结论，无预测闭环 | 同一列车长途位置/过线对比，先预测后揭示，尺度比仍非阈值 | 教学 PENDING | VERIFIED |
| B1-AF-06 | 最高点读数 `a=-3`，文案却写 `a=-g` | `acceleration.html`、专项测试 | 文字正确但数值不等于 `-g` | 预设满足 `Δv/Δt=-9.8 m/s²`，读数与文案一致 | 物理 BLOCKED | VERIFIED |
| B1-AF-15 | 绝对表述错误；分力首屏占主线 | `gravity.html`、`bx1.md`、专项测试 | 水平地面语义错误；首屏显示分力 | 改为“不随接触面方向改变”；分力/释放默认折叠为拓展 | 物理 BLOCKED | VERIFIED |
| B1-AF-16 | 受重力桌面物块被画成无支持力 | `elastic-force.html`、`bx1.md`、专项测试 | 物块落在桌面却宣称无支持力 | 用外部悬挂维持“刚好轻触、无挤压”，普通落桌显示有支持力 | 物理 BLOCKED | VERIFIED |
| B1-AF-17 | 理想模型点被标作测量数据；无越界预测 | `hooke-law.html`、`bx1.md`、专项测试 | 模型点冒充测量点；自由拖动直接揭示 | 标为理想模型点；越界前预测，越界后显示失效 | 教学 PENDING | VERIFIED |
| B1-AF-19 | 正文承诺两个端点，动画仅拖 `F2`；无预测 | `force-composition.html`、`bx1.md`、专项测试 | 正文与控件不一致 | 明确单变量 `F2`；固定大小扫描前先预测 | 教学 PENDING | VERIFIED |
| B1-AF-20 | 陡坡状态笼统说“摩擦相关量变小” | `force-decomposition.html`、`bx1.md`、专项测试 | 把实际静摩擦无条件写成单调量 | 明确实际静摩擦须结合沿面合力按需要求值 | 内容 PENDING | VERIFIED |
| B1-AF-22 | 快速模式重物固定，却显示非零加速度；无预测反馈 | `dynamic-equilibrium.html`、`bx1.md`、专项测试 | `y` 不变而 `a≠0`；选择不回显 | 显式 `y(t)`、`a_y(t)`、几何角与张力同步；展示预测—证据—原因 | 物理 BLOCKED | VERIFIED |
| B1-AF-25 | 表格损坏 | `bx1.md`、专项测试 | KaTeX/表格断裂 | 表格结构与 KaTeX 完整 | 回归项 | VERIFIED |
| B1-AF-28 | 允许普通高中干摩擦模型进入 `μ_k>μ_s`；首屏变量过多 | `plank-block.html`、`bx1.md`、专项测试 | 系数可越界；全部手柄同时开放 | 默认强制 `μ_k≤μ_s`；按临界—摩擦参数—综合迁移分阶段解锁 | 内容 PENDING | VERIFIED |
| B1-AF-CI | 新增 13 项测试未进入 Actions | `package.json`、`ci.yml` | CI 只跑旧 7 项 | `audit:physics:b1` 在 CI 明确运行 | 证据不完整 | VERIFIED |

## 统一验证

1. `git diff --check`
2. `node scripts/gen-data.js --check`
3. `npm run check`
4. `npm run audit:pedagogy:b1`
5. `npm run audit:physics:b1`
6. 真实点击、拖动、重置、重复进入与 390×844 检查
7. 受影响 B1 动画无 console/page error

## 验证结果

- `git diff --check`：PASS
- `node scripts/gen-data.js --check`：PASS；229 个目录与进度条目一致
- `npm run check`：PASS；`GATE PASS`，P0/P1 与 KaTeX 检查均通过
- `npm run audit:pedagogy:b1`：7/7 PASS
- `npm run audit:physics:b1`：13/13 PASS
- B1 全部动画真实交互回归：32/32 PASS，100 分，`blocked=0`，无 hard failure
- 交互证据：`audit/results/b1-current-head-remediation-2b141c5.json`；记录 `worktree_clean=true` 并绑定受测实现提交
- 真实浏览器抽查：质点预测、重力拓展、板块分阶段解锁均按可见控件完成
- 390×844：无横向溢出；浏览器控制台无 error/warning

本文件只证明本轮 11 项整改已关闭。B1 整章内容批准仍由新的当前 HEAD 物理与教学复审单独裁决，不能用工程与交互 PASS 自动替代。
