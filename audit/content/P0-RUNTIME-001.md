# P0-RUNTIME-001 静态隔离与失败关闭

- 原状：浏览器加载成功后才隐藏旧题，禁用脚本、请求失败或打印时可能泄漏。
- 修改：320 个 Markdown 例题/训练块物理移入隔离区；学生源只保留审核中占位；构建导出默认为空且 `fail_closed=true`；网络请求前先隐藏，超时、HTTP 错误和解析错误均保持隐藏；`papers.md`、`errors.md` 增加静态摘要和 `noscript`。
- 依据：OpenAI 审核优先方案。
- 复测：`scripts/check-static-fallback.js` 和 `scripts/check.js` 检查学生源、无脚本回退、隔离哈希与失败关闭。
- 状态：结构性修复完成。
