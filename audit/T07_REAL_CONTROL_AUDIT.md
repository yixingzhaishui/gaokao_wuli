# T07 — 真实控件审核门禁（第一批）

日期：2026-07-12

## 修正原因

旧的交互审核器会直接设置 `input.value` 并手动派发事件。这能验证页面的计算函数，却不能验证学生实际拖动滑块、点击原生控件时会不会生效。因此旧报告不能作为范围控件的最终通过依据。

审核器已改为：范围控件用浏览器鼠标拖拽到相反端；下拉框用真实选择；复选框用真实勾选；单选框用真实选择。动态出现的控件必须进入所属情境后再单独执行。

## 已重新取证页面

| 页面 | 真实操作 | 结果 |
| --- | --- | --- |
| `anim/bx3/charge-electrification.html` | 拖动 `n`；摩擦、接触、静电感应、元电荷检查及其全部模式按钮；播放、重置；感应模式内“接地 → 移开带电体” | PASS。所有按钮和分步操作均实际改变状态；390px 检查通过。 |
| `anim/bx3/series-parallel.html` | 实际拖 R1、R2、U；切换串联/并联；播放、暂停、重置 | PASS。每个滑块都改变读数与画面；独立 Chromium 桌面鼠标及 390×844 触摸配置均通过。 |

## 可复现命令

```sh
AUDIT_MODULE=bx3 AUDIT_REPORT=charge-electrification-real-controls.json \
  npx playwright test tests/interaction-audit.spec.js --workers=1 --grep 'bx3/charge-electrification.html'

AUDIT_MODULE=bx3 AUDIT_REPORT=series-parallel-real-controls.json \
  npx playwright test tests/interaction-audit.spec.js --workers=1 --grep 'bx3/series-parallel.html'
```

这两个报告均为 `PASS`，无硬失败。后续页面必须以同一真实控件规则复审；本文件不把旧报告自动升级为最终通过。

## B3 第一批重新审核（20 页）

以下页面均已在新规则下逐页运行，所有暴露的滑块由真实拖拽改变；所有可见按钮逐一点击；播放、暂停、重置、重入和 390px 布局均已检查。结果均为 `PASS`、无硬失败：

- `capacitor-lab`、`capacitor`、`charge-electrification`、`charges-field`
- `closed-circuit-law`、`closed-circuit`、`coulomb`、`current`、`dc-circuit`
- `electric-field`、`electric-potential-energy`、`electric-work`、`electrostatic-induction`
- `em-wave-applications`、`em-wave`、`emf`、`energy-sustainability`
- `equipotential`、`field-lines`、`series-parallel`

其中 `charge-electrification` 的动态分步按钮“接地 → 移开带电体”已作为专项语义流程核对；`series-parallel` 同时在独立 Chromium 桌面鼠标与 390×844 触摸配置中验证 R1、R2、U 三个真实拖拽。

## B3 全模块复审结论（25/25）

首批 20 页后，余下 `household-circuit`、`joule-law`、`ohm-law`、`potential-difference`、`resistance-law` 亦按同一规则逐页通过。

随后执行全模块串行复审：

```sh
AUDIT_MODULE=bx3 AUDIT_REPORT=real-control-bx3-full.json \
  npx playwright test tests/interaction-audit.spec.js --workers=1
```

结果：`25/25 PASS`、`0 BLOCKED`、评分 `100`。这仅关闭 B3 的**交互功能与移动端**复审；全站 T06/T07/T08 仍然进行中，不能据此声称全部网站完成。

## 下一批

继续 `anim/xb2`：带电粒子磁场、互感、楞次/法拉第、变压器和交流电页面按同一真实控件规则逐页复审。

## XB2 已修复的真实缺陷

| 页面 | 缺陷 | 修复与复测 |
| --- | --- | --- |
| `anim/xb2/lorentz-force.html` | 拖动磁感应强度 B 后，内部力和画面会变，但 `#bf` 滑块被错误键名写回默认值，学生会看到手柄跳回。 | 将回写映射从错误的 `B` 键改为 `bf: B`；真实拖拽 B、v、q、θ，以及正/负电荷、播放、重置和 390px 复测均通过。 |

审核器同时新增硬门禁：范围滑块、下拉框或复选框若不能通过真实浏览器操作改变自身控件值，必须判为 `H5`，不能仅因画面发生其它变化而通过。

圆周运动页 `magnetic-circle` 的入射角初值恰在范围上端。审核器曾从控件外沿抓取原生手柄，形成假失败；现改为从手柄/轨道内侧抓取并重测，α 与 v、B、m 都真实改变并联动，所有模式按钮、单步、播放、重置、画布拖拽和 390px 均通过。该几何修正适用于所有处于滑块端点的页面。

## XB2 第二批重新审核（20/22）

以下 20 页均已用新门禁逐页复审，结果均为 `PASS`、无硬失败：

- `ac-generation`、`ac-values`、`ampere-force`、`eddy-current`
- `em-spectrum`、`em-wave-transmission`、`faraday-law`、`generator-motor`、`lc-oscillation`
- `lenz-law`、`lorentz-force`、`magnetic-circle`、`magnetic-critical`、`magnetic-field`、`magnetic-flux`、`maxwell-em-theory`
- `mutual-induction`、`rail-rod`、`self-induction`、`transformer`

每页均覆盖真实滑块拖拽、可见按钮、播放/暂停、重置、重新进入和 390px 布局；有直接画布操作的页面还执行了拖拽。余下 `power-transmission` 与 `sensor` 后进入 XB2 全模块复审。

## XB2 全模块复审结论（22/22）

`power-transmission` 的重置曾在下一帧自动演示中把 U 从默认 10kV 改写为非默认值。已改为“重置后暂停在 100kW、10kV、10Ω”，再执行完整模块复审：

```sh
AUDIT_MODULE=xb2 AUDIT_REPORT=real-control-xb2-full-fixed.json \
  npx playwright test tests/interaction-audit.spec.js --workers=1
```

结果：`22/22 PASS`、`0 BLOCKED`、评分 `100`。这关闭 XB2 的交互功能与移动端复审；全站任务仍进行中。

## XB1 全模块复审结论（21/21）

完成动量、振动、波动、光学全部 21 页的真实控件逐页审核后，执行：

```sh
AUDIT_MODULE=xb1 AUDIT_REPORT=real-control-xb1-full.json \
  npx playwright test tests/interaction-audit.spec.js --workers=1
```

结果：`21/21 PASS`、`0 BLOCKED`、评分 `100`。范围控件、模式按钮、播放/暂停、重置、重入和 390px 均已覆盖；全站任务仍进行中。

## BX2 第一批重新审核（20/27）

已逐页通过：`projectile`、`oblique-throw`、`circular-basics`、`centripetal`、`vertical-circle`、`work-energy-relation`、`mechanical-energy`、`energy-conservation`、`gravitation`、`kepler-law`、`cosmic-velocity`、`satellite`、`geostationary`、`orbit-transfer`、`binary-star`、`centrifugal-phenomenon`、`power`、`kinetic-energy`、`elastic-potential`、`work`。

每页均在真实拖拽、全部可见按钮、播放/暂停、重置、重入和 390px 条件下通过。余下 7 页后执行 BX2 全模块复审。

## BX2 全模块复审结论（27/27）

执行 `AUDIT_MODULE=bx2 AUDIT_REPORT=real-control-bx2-full.json npx playwright test tests/interaction-audit.spec.js --workers=1` 后，结果为 `27/27 PASS`、`0 BLOCKED`、评分 `100`。这关闭 BX2 的交互功能与移动端复审；全站任务仍进行中。

## BX1 第一批重新审核（20/32）

已逐页通过：`spring-instant`、`connecting-body`、`elastic-force`、`hooke-law`、`friction`、`newton-second`、`newton-third`、`free-fall`、`acceleration`、`uniform-motion`、`uniform-acceleration`、`vt-graph`、`xt-graph`、`time-instant`、`vertical-throw`、`braking`、`displacement`、`dynamic-equilibrium`、`equilibrium`、`force-composition`。

其中 `spring-instant` 另行核对了剪下绳、剪弹簧、撤支撑以及质量/劲度变化后的受力、合力、加速度语义。余下 12 页后执行 BX1 全模块复审。

## BX1 全模块复审结论（32/32）

执行 `AUDIT_MODULE=bx1 AUDIT_REPORT=real-control-bx1-full.json npx playwright test tests/interaction-audit.spec.js --workers=1` 后，结果为 `32/32 PASS`、`0 BLOCKED`、评分 `100`。该运行包含弹簧瞬时专项物理语义，以及两车一维的地面/车A/车B动态参考系切换。全站任务仍进行中。

## EXP 第一批重新审核（20/26）

已逐页通过电磁感应、变压器、库仑、电容、闭合电路、等势线、力合成、胡克定律、机械能、动量、牛顿第二定律、单摆、平抛、电阻率、灯泡伏安、双缝、打点计时器、匀变速、长度测量、玻璃折射实验。所有滑块、记录按钮、模式、播放/重置、重入和 390px 均为真实操作证据；余下 6 页后进行 EXP 全模块复审。

## EXP 全模块复审结论（26/26）

执行 `AUDIT_MODULE=exp AUDIT_REPORT=real-control-exp-full.json npx playwright test tests/interaction-audit.spec.js --workers=1` 后，结果为 `26/26 PASS`、`0 BLOCKED`、评分 `100`。这关闭实验模块的交互功能与移动端复审；全站任务仍进行中。

## MODEL 全模块复审结论（3/3）

修复审核器下拉选项的真实选择路径后，执行 `AUDIT_MODULE=model AUDIT_REPORT=real-control-model-full.json npx playwright test tests/interaction-audit.spec.js --workers=1`，结果为 `3/3 PASS`、`0 BLOCKED`。下拉模型、参数、记录、播放/重置和手机端均已实际操作。

## SKILL 综合专题全模块复审结论（11/11）

G-07 至 G-12 相关技能页全部以真实浏览器输入逐页执行：`multi-process-motion`、`energy-momentum-combo`、`electromagnetic-induction-combo`、`real-world-modeling`、`science-info-problem`，以及电路实验设计、误差分析、数据处理、极值临界、图像斜率面积、仪器读数。G-12 额外覆盖“选项 → 提交 → 下一题”的完整作答流。

在 `graph-slope-area` 中发现并修复了真实缺陷：点 B 拖到点 A 左侧时，页面仅在内部临时替换坐标，导致学生拖动 B 后可见读数没有变化。现改为同步修正实际的另一探针位置，确保 A、B 始终有明确顺序且每次拖动都更新图像、斜率、面积和读数。

修复后执行：

```sh
AUDIT_MODULE=skill AUDIT_REPORT=real-control-skill-full-fixed.json \
  npx playwright test tests/interaction-audit.spec.js --workers=1
```

结果：`11/11 PASS`、`0 BLOCKED`、评分 `100`。至此所有模块的真实控件复审记录累计为 `203/203`；最终发布版验收仍单列进行。
