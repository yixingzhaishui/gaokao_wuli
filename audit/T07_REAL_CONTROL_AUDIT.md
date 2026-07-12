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

## 下一批

继续 `anim/bx3` 余下 5 页：`household-circuit`、`joule-law`、`ohm-law`、`potential-difference`、`resistance-law`。完成 B3 全模块后再更新模块状态，不提前宣布全量任务完成。
