# 内容终审证据目录

本目录保存 V3 内容终审的可复核证据，不把静态代理分当作发布结论。

## 目录

- `baseline.json`：开始审核时的仓库、内容和旧检查器基线。
- `results/formula-audit.json`：公式格式与渲染风险候选。
- `results/missing-diagrams.json`：题干引用图示但缺少图字段或资源的候选。
- `results/interaction-audit.json`：Playwright 真实点击、状态变化、控件和手机测试结果。
- `reports/bx1-content-audit.md`：必修 1 首轮内容审核与评分。

## 执行命令

```bash
node scripts/check.js --audit-write
node scripts/anim-audit.js bx1
npm run audit:interaction -- --project=chromium
```

`scripts/anim-audit.js` 只输出静态预筛选分。最终状态必须结合 JSON 行为证据和人工物理复核。

## 状态约定

- `passed`：该项已有行为或人工证据通过。
- `blocked`：存在 H1–H6 或 P0/P1。
- `needs_review`：自动检查只能给出候选，需要人工复核。
- `not_tested`：尚无证据，不得按通过处理。

