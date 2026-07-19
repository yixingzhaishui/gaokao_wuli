# P0-CALC-001 修正证据

- 日期：2026-07-15
- 定位：B3-16 闭合电路欧姆定律历史例题
- 修改前：$P_2=(3/7)^2\times4=36/49\times4\approx2.94\ \mathrm W$
- 独立复算：$I_2=3/7\ \mathrm A$，故 $P_2=I_2^2R_2=(3/7)^2\times4=36/49\ \mathrm W\approx0.735\ \mathrm W$
- 修改后：$36/49\ \mathrm W\approx0.735\ \mathrm W$
- 隔离证据：`data/quarantine/legacy-markdown-exercises.json`，记录 SHA-256 `8aec4bdcd158ec1ab16c117a76049dee8a6f864039182ea24b7c74701f36ce32`
- 自动测试：`scripts/check.js` 阻断学生内容中的 `2.94 W`；构建期发布门禁要求 `solution_recalculated_by`。
- 审阅状态：已完成确定错误修正；全站其他候选题仍须独立复算，不据此关闭全站复算任务。
