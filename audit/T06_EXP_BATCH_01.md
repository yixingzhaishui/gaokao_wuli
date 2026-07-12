# T06 — 交互实验审核（批次 01）

审核范围：20 个独立实验页。每页均实际执行可见播放/暂停、重置、参数改变、记录，以及重新进入页面的交互检查；不以静态代码存在按钮作为通过条件。

| 类别 | 已审核页面 | 结果 |
| --- | --- | --- |
| 电学与电磁 | `capacitor-charge-discharge-lab`、`coulomb-force-lab`、`emf-internal-resistance-lab`、`induced-current-direction-lab`、`lamp-iv-lab` | 5/5 通过 |
| 力学基础 | `centripetal-force-lab`、`force-parallelogram-lab`、`hooke-law-lab`、`newton-second-lab`、`pendulum-period-lab` | 5/5 通过 |
| 测量与运动 | `length-measurement-lab`、`ticker-tape-speed`、`uniform-acceleration-lab` | 3/3 通过 |
| 运动、能量与动量 | `projectile-motion-lab`、`mechanical-energy-lab`、`momentum-conservation-lab`、`gravitational-constant-lab`、`resistivity-lab` | 5/5 通过 |
| 光学 | `double-slit-wavelength-lab`、`glass-refraction-lab` | 2/2 通过 |

本批修复了 12 个页面的完整重置路径：恢复参数与动画状态，并清空不再属于当前实验条件的记录表。其余页面的重置已在本次交互运行中确认完整。

执行证据：

- `audit/results/task-t06-exp-electric-core.json`
- `audit/results/task-t06-exp-mechanics-core.json`
- `audit/results/task-t06-exp-measurement-motion.json`
- `audit/results/task-t06-exp-energy-momentum.json`
- `audit/results/task-t06-exp-optics-core.json`

本批不包含题库资料改动。
