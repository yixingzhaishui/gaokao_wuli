# T06 — 选择性必修三交互审核（批次 02）

审核范围：`anim/xb3` 余下 16 页；每页均以可见控件运行真实交互审核，覆盖播放/暂停、重置、参数改变、记录与重新进入页面。

| 组别 | 页面 | 结果 |
| --- | --- | --- |
| 微观模型 | `avogadro`、`molecular-theory`、`temperature-scale`、`crystal-amorphous`、`materials-microstructure` | 5/5 通过 |
| 热现象 | `capillary`、`surface-tension`、`energy-conservation-thermal`、`second-law`、`pv-graph` | 5/5 通过 |
| 粒子与核应用 | `fundamental-interactions`、`nuclear-structure`、`particle-physics`、`radiation-protection`、`radioisotope-applications` | 5/5 通过 |
| 波粒二象性 | `wave-particle` | 修复完整重置后通过 |

证据报告：

- `audit/results/task-t06-xb3-materials-core.json`
- `audit/results/task-t06-xb3-surface-thermal.json`
- `audit/results/task-t06-xb3-particle-applications.json`
- `audit/results/task-t06-xb3-wave-particle-reset.json`

本批没有混入题库资料变更。`wave-particle` 的“重置”已改为恢复频率、光强和动量默认值，并清除累积命中点与实验记录。
