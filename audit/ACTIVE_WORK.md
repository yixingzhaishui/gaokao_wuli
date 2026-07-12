# 当前连续开发检查点

更新时间：2026-07-12

## 任务状态

- `T01`、`T06`、`T07`、`T08`：进行中。
- 已完成：9 个动画模块、203 个 `anim/*/*.html` 页面的逐页交互审核、修复与复测。
- 唯一未关闭的发布验收：手机 390px 下从学习目录点击知识点后必须真正进入相应路由。

## 最近真实提交

`1f33be0 fix: submit mobile directory routes natively`

## 当前验证结果

- 根因已定位：`.mobile-nav-scrim` 在实际手机叠层中覆盖了侧栏按钮；点击命中遮罩，因此只关闭目录、不触发路由。
- 本地 390×844 验证已通过：点击“质点模型 B1-01”后 URL 为 `#/bx1?id=particle`，32 个互动嵌入加载，目录关闭且无控制台错误。
- 下一步只剩把相同验证在 GitHub Pages 发布版重复一次。

## 恢复动作

1. 推送遮罩修复和明确路由提交处理。
2. 在 GitHub Pages 390×844 下验证 URL 为 `#/bx1?id=particle`、目标内容加载、目录关闭。
3. 再检查图谱与一页动画，更新 `TASK_SPEC.md` 的 T01/T06/T07/T08 状态并推送。

## 提交边界

只提交 `index.html`、`TASK_SPEC.md` 和 `audit/` 下本任务审核记录；绝不混入 `data/import-batches/`、`data/verified-problems.json` 或其他未归属变更。
