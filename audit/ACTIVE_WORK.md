# 当前连续开发检查点

更新时间：2026-07-12

## 任务状态

- `T01`、`T06`、`T07`、`T08`：进行中。
- 已完成：9 个动画模块、203 个 `anim/*/*.html` 页面的逐页交互审核、修复与复测。
- 唯一未关闭的发布验收：手机 390px 下从学习目录点击知识点后必须真正进入相应路由。

## 最近真实提交

`1f33be0 fix: submit mobile directory routes natively`

## 当前已知现象

在 GitHub Pages 390px 验证中，目录能打开，点“质点模型 B1-01”会关闭目录，但 URL 保持在首页。页面级审核不可因此标记为最终完成。

## 恢复动作

1. 在发布版复现点击，并记录触发事件、目标元素与默认导航是否被取消。
2. 用最小的可运行原型验证手机端侧栏导航机制；只在验证成功后合入 `index.html`。
3. 验证 URL 为 `#/bx1?id=particle`、目标内容加载、目录关闭；再检查图谱与一页动画。
4. 更新 `TASK_SPEC.md` 的 T01/T06/T07/T08 状态并推送。

## 提交边界

只提交 `index.html`、`TASK_SPEC.md` 和 `audit/` 下本任务审核记录；绝不混入 `data/import-batches/`、`data/verified-problems.json` 或其他未归属变更。
