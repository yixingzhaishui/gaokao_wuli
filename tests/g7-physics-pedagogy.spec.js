const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = (file, id, dir = 'skill') => `${pathToFileURL(path.join(root, 'anim', dir, file)).href}${id ? `?lesson=${id}` : ''}`;

async function completeGuide(page, id, choice) {
  const guide = page.locator(`[data-g-guide="${id}"]`);
  await guide.locator(`[data-guide-choice="${choice}"]`).click();
  await guide.locator('.g-guide-verify').click();
  await expect(page.locator('canvas')).toHaveAttribute('data-guide-stage', 'explore');
}

async function setControl(page, selector, value) {
  await page.locator(selector).evaluate((element, next) => {
    element.value = String(next);
    element.dispatchEvent(new Event('input', {bubbles: true}));
    element.dispatchEvent(new Event('change', {bubbles: true}));
  }, value);
}

async function state(page) {
  return page.evaluate(() => window.__ANIM_TEST_STATE__);
}

test.describe.configure({mode: 'serial'});
test.setTimeout(120_000);

test('G-01 非零截距仍用 Δy/Δx，不把 y/x 伪装成斜率', async ({page}) => {
  await page.goto(pageUrl('graph-slope-area.html', 'G-01'));
  await completeGuide(page, 'G-01', 'delta');
  const s = await state(page);
  expect(s.mode).toBe('iu');
  expect(s.c).toBe(5);
  expect(s.slope).toBeCloseTo(.45, 8);
  expect((s.c + .45 * s.a) / s.a).not.toBeCloseTo(s.slope, 4);
  await expect(page.locator('.formula')).toContainText('Δy/Δx');
  await expect(page.locator('.formula')).toContainText('仅过原点');
});

test('G-02 异常点须先复测，原记录保留后才允许剔除拟合副本', async ({page}) => {
  await page.goto(pageUrl('experiment-data-processing.html'));
  await expect(page.locator('#toggle')).toBeDisabled();
  const before = await state(page);
  await page.locator('#inspect').click();
  await expect(page.locator('#toggle')).toBeEnabled();
  await page.locator('#toggle').click();
  const after = await state(page);
  expect(after.inspected).toBe(true);
  expect(after.dropped).toBe(true);
  expect(after.fit.n).toBe(5);
  expect(after.fit.k).not.toBeCloseTo(before.fit.k, 6);
  await expect(page.locator('#rows tr')).toHaveCount(6);
  await expect(page.locator('#status')).toContainText('原始值仍保留');
});

test('G-03 量程与零位独立，欧姆表使用非线性刻度和倍率', async ({page}) => {
  await page.goto(pageUrl('instrument-reading.html', 'G-03'));
  await completeGuide(page, 'G-03', 'independent');
  let s = await state(page);
  expect(s.mode).toBe('meter');
  expect(s.range).toBe('15V');
  expect(s.zero).toBe(2);
  expect(s.unit).toBe('V');
  await page.locator('#ohmmeter').click();
  await page.locator('#range').selectOption('100');
  await setControl(page, '#value', 50);
  s = await state(page);
  expect(s.mode).toBe('ohmmeter');
  expect(s.range).toBe('100');
  expect(s.corrected).toBeCloseTo(1000, 6);
  expect(s.unit).toBe('Ω');
  await expect(page.locator('#status')).toContainText('非线性刻度并乘倍率');
});

test('G-04 修正后的误差列与修正读数一致，不用统一可信阈值', async ({page}) => {
  await page.goto(pageUrl('error-analysis.html', 'G-04'));
  await completeGuide(page, 'G-04', 'no');
  const truth = Number(await page.locator('#trueValue').inputValue());
  const s = await state(page);
  expect(s.corrected).toBe(true);
  for (const row of s.rows) expect(row.err).toBeCloseTo(row.fix - truth, 9);
  await expect(page.locator('#status')).toContainText('题设允许误差或不确定度');
  await expect(page.locator('#status')).toContainText('不能套统一 2% 门槛');
});

test('G-05 内外接、仪表负载、量程和滑变器安全来自同一电路', async ({page}) => {
  await page.goto(pageUrl('circuit-experiment-design.html', 'G-05'));
  await completeGuide(page, 'G-05', 'outer');
  let outer = await state(page);
  expect(outer.inner).toBe(false);
  expect(outer.values.rmeas).toBeLessThan(outer.values.rx);
  await page.locator('#inner').click();
  const inner = await state(page);
  expect(inner.inner).toBe(true);
  expect(inner.values.rmeas).toBeGreaterThan(inner.values.rx);
  await setControl(page, '#emf', 12);
  await setControl(page, '#pos', .95);
  await page.locator('#vRange').selectOption('3');
  const unsafe = await state(page);
  expect(unsafe.values.overV || unsafe.values.overA || unsafe.values.overR).toBe(true);
  await expect(page.locator('#status')).toContainText('安全门禁失败');
  await expect(page.locator('#canvas')).toHaveAttribute('data-circuit-model', 'loaded-thevenin-topology-ranges-and-power-safety');
});

test('G-06 内轨最高点约束力指向圆心且不出现负支持力', async ({page}) => {
  await page.goto(pageUrl('extreme-critical.html', 'G-06'));
  await completeGuide(page, 'G-06', 'zero');
  let s = await state(page);
  expect(s.values.N).toBeCloseTo(0, 2);
  await setControl(page, '#main', 3);
  s = await state(page);
  expect(s.values.required).toBeLessThan(0);
  expect(s.values.N).toBe(0);
  expect(s.values.state).toContain('脱离');
  await expect(page.locator('#canvas')).toHaveAttribute('data-constraint-model', 'inner-track-top-inward-nonnegative-contact');
});

test('G-07 相邻阶段共享同一边界速度和位置', async ({page}) => {
  await page.goto(pageUrl('multi-process-motion.html', 'G-07'));
  await completeGuide(page, 'G-07', 'previous');
  let s = await state(page);
  expect(s.time).toBeCloseTo(s.values.t1, 8);
  expect(s.v).toBeCloseTo(s.values.v1, 8);
  expect(s.x).toBeCloseTo(s.values.x1, 8);
  await page.locator('#step').click();
  s = await state(page);
  expect(s.stage).toBe('匀速');
  expect(s.v).toBeCloseTo(s.values.v1, 8);
  expect(s.x).toBeCloseTo(s.values.x1 + s.values.v1 * .25, 8);
});

test('G-08 压缩几何使用能量比例平方根，碰撞与压簧分账', async ({page}) => {
  await page.goto(pageUrl('energy-momentum-combo.html', 'G-08'));
  await completeGuide(page, 'G-08', 'root');
  const s = await state(page);
  expect(s.time).toBeCloseTo(6, 8);
  expect(s.Ep / s.values.KAfter).toBeCloseTo(.5, 8);
  expect(s.compressionRatio).toBeCloseTo(Math.sqrt(.5), 8);
  expect(s.values.pBefore).toBeCloseTo(s.values.pAfter, 9);
  await expect(page.locator('canvas')).toHaveAttribute('data-compression-model', 'x-over-xmax-equals-sqrt-Ep-over-Epmax');
});

test('G-09 同一物理坐标驱动磁通斜率、电动势和反向安培力', async ({page}) => {
  await page.goto(pageUrl('electromagnetic-induction-combo.html', 'G-09'));
  await completeGuide(page, 'G-09', 'chain');
  const s = await state(page);
  expect(s.position).toBeCloseTo(1.87, 6);
  expect(Math.abs(s.fluxRate)).toBeCloseTo(Math.abs(s.eps), 9);
  expect(s.F * s.actualV).toBeLessThanOrEqual(0);
  expect(s.P).toBeGreaterThanOrEqual(0);
  await expect(page.locator('canvas')).toHaveAttribute('data-induction-model', 'x-drives-flux-emf-current-force-power');
});

test('G-10 只把精确力平衡判为理论直线通过', async ({page}) => {
  await page.goto(pageUrl('compound-field-particle.html', 'G-10', 'model'));
  await completeGuide(page, 'G-10', 'equal');
  let s = await state(page);
  expect(s.exact).toBe(true);
  await setControl(page, '#speed', 5.2);
  s = await state(page);
  expect(s.exact).toBe(false);
  await expect(page.locator('#status')).toContainText('未严格直线通过');
  await expect(page.locator('#status')).toContainText('实验容差需另给');
  await expect(page.locator('#c')).toHaveAttribute('data-selector-model', 'exact-force-balance-no-undeclared-tolerance');
});

test('G-11 无阻力投放不保留伪风控件，水平速度等于释放速度', async ({page}) => {
  await page.goto(pageUrl('real-world-modeling.html', 'G-11'));
  await completeGuide(page, 'G-11', 'constant');
  let s = await state(page);
  expect(s.mode).toBe('drop');
  expect(s.horizontal).toBe(Number(await page.locator('#v').inputValue()));
  await expect(page.locator('#p2').locator('xpath=..')).toBeHidden();
  const range = s.result;
  await setControl(page, '#p2', 1.2);
  s = await state(page);
  expect(s.result).toBeCloseTo(range, 9);
  await expect(page.locator('canvas')).toHaveAttribute('data-model-boundary', 'ground-frame-no-air-resistance-no-wind-control');
});

test('G-12 圆轨道速度与周期由高度和引力模型派生，答题需显式提交', async ({page}) => {
  await page.goto(pageUrl('science-info-problem.html', 'G-12'));
  await completeGuide(page, 'G-12', 'slower');
  let s = await state(page);
  const mu = 3.986004418e14;
  expect(s.mode).toBe('orbit');
  expect(s.values.a).toBe(2000);
  expect(s.values.v).toBeCloseTo(Math.sqrt(mu / s.values.r), 6);
  expect(s.values.T).toBeCloseTo(2 * Math.PI * Math.sqrt(s.values.r ** 3 / mu) / 60, 6);
  await expect(page.locator('#b')).toBeDisabled();
  await page.locator('.option').nth(1).click();
  expect((await state(page)).score).toBe(0);
  await page.locator('#submitAnswer').click();
  expect((await state(page)).score).toBe(1);
  await page.locator('#solar').click();
  s = await state(page);
  expect(s.mode).toBe('solar');
  await expect(page.locator('#b')).toBeEnabled();
  await expect(page.locator('#eta').locator('xpath=..')).toBeVisible();
  await expect(page.locator('canvas')).toHaveAttribute('data-information-model', 'solar-input-efficiency-output');
});
