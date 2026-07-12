# T06 — 建模模块交互审核

审核范围：`anim/model` 全部 3 页；每页运行可见按钮、参数交互、拖动和重新进入页面的真实检查。

| 页面 | 结果 | 修复 |
| --- | --- | --- |
| `compound-field-particle` | 通过 | 重置恢复电荷、场强、速度、质量与记录表 |
| `model-selector` | 通过 | 模型筛选、候选选择、参数拖动、播放与完整重载重置均可用 |
| `nuclear-mass-energy` | 通过 | 重置停止播放、恢复默认反应参数并清空记录 |

证据：`audit/results/task-t06-model-all.json`。本批不含题库资料改动。
