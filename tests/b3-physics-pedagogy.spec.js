const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx3', file)).href;

test.describe.configure({ mode: 'serial' });
test.setTimeout(45_000);

async function completeGuide(page, choice) {
  const guide = page.locator('.b3-guide');
  await guide.locator(`[data-guide-choice="${choice}"]`).click();
  await guide.locator('.b3-guide-verify').click();
  await expect(page.locator('canvas')).toHaveAttribute('data-guide-stage', 'explore');
}

test('B3 正文关闭感应起电、库仑力、静电场、电容、电流、焦耳热与能源边界问题', async () => {
  const markdown = fs.readFileSync(path.join(root, 'bx3.md'), 'utf8');
  expect(markdown).toContain('靠近→接地→先断开接地→再移开带电体');
  expect(markdown).not.toContain('靠近→接地→移开');
  expect(markdown).toContain('$F=k|q_{1}q_{2}|/r^{2}$');
  expect(markdown).not.toContain('F = k·q₁q₂/r²');
  expect(markdown).not.toContain('W = qU 适用于任何电场');
  expect(markdown).toContain('时变磁场产生的感生电场一般不是保守场');
  expect(markdown).toContain('填充均匀介质时用 $C=\\varepsilon S/d$');
  expect(markdown).toContain('$\\bar I=\\Delta Q/\\Delta t$ 表示一段时间内的平均电流');
  expect(markdown).toContain('只有纯电阻用电器才有输入电功全部转化为热');
  expect(markdown).not.toContain('焦耳定律**：Q = I²Rt（纯电阻电路）');
  expect(markdown).not.toContain('U=\\varepsilon-Ir \\varepsilon');
  expect(markdown).toContain('给电源充电、电流流入正极时 $U=\\varepsilon+Ir>\\varepsilon$');
  expect(markdown).toContain('核能在发电阶段具有低碳特点，但不能因此称为可再生能源');
  expect(markdown).not.toContain('新能源（太阳能、风能、核能）可再生且清洁');
  expect(markdown).toContain('额定交流电压有效值约为 `220 V`');
  expect(markdown).toContain('若电容器初始未充电');
  expect(markdown).toContain('载波频率和可用带宽不是同一个量');
  expect(markdown).toContain('$F=BIL\\sin\\theta$');
});

test('B3-01 感应起电必须先断地再移开带电体', async ({ page }) => {
  await page.goto(pageUrl('charge-electrification.html'));
  const canvas = page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-induction-sequence', 'approach-ground-disconnect-ground-remove-charge');
  await completeGuide(page, 'disconnect');
  await page.getByRole('button', { name: '静电感应', exact: true }).click();
  const step = page.locator('#inductionStep');
  await expect(step).toHaveText('接地');
  await step.click();
  await expect(step).toHaveText('断开接地');
  await expect(page.locator('#readout')).toContainText('接地未断，不得移开带电体');
  await step.click();
  await expect(step).toHaveText('移开带电体');
  await expect(page.locator('#readout')).toContainText('接地已断开、带电体仍靠近');
  await step.click();
  await expect(page.locator('#readout')).toContainText('带电体移开后');
  await expect(page.locator('#readout')).toContainText('导体保留');
});

test('B3-02 异号电荷只改变方向，库仑力大小保持非负', async ({ page }) => {
  await page.goto(pageUrl('coulomb.html'));
  const canvas = page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-force-magnitude-formula', 'k*abs(q1*q2)/r^2');
  await completeGuide(page, 'same-attract');
  await page.getByRole('button', { name: '异号相吸', exact: true }).click();
  await expect(page.locator('#type-val')).toContainText('引力');
  const forceText = (await page.locator('#f-val').textContent()).trim();
  expect(forceText.startsWith('-')).toBe(false);
  expect(Number.parseFloat(forceText)).toBeGreaterThan(0);
});

test('B3-16 短路和断路由显式边界情境给出', async ({ page }) => {
  await page.goto(pageUrl('closed-circuit-law.html'));
  const canvas = page.locator('#cv');
  await expect(canvas).toHaveAttribute('data-limit-cases', 'explicit-short-and-open');
  await completeGuide(page, 'u0-imax');
  await page.locator('[data-case="short"]').click();
  await expect(canvas).toHaveAttribute('data-circuit-case', 'short');
  expect(Number(await canvas.getAttribute('data-terminal-voltage'))).toBe(0);
  expect(Number(await canvas.getAttribute('data-current'))).toBeGreaterThan(0);
  await page.locator('[data-case="open"]').click();
  await expect(canvas).toHaveAttribute('data-circuit-case', 'open');
  expect(Number(await canvas.getAttribute('data-current'))).toBe(0);
  expect(Number(await canvas.getAttribute('data-terminal-voltage'))).toBeGreaterThan(0);
});

test('B3-21 未接地状态只称静电感应，不冒充感应起电', async ({ page }) => {
  await page.goto(pageUrl('electrostatic-induction.html'));
  await completeGuide(page, 'zero');
  await page.getByRole('button', { name: '感应', exact: true }).click();
  await expect(page.locator('#canvas')).toHaveAttribute('data-induction-state', 'redistribution-no-net-charge');
  await expect(page.locator('#readout')).toContainText('静电感应（未接地）');
  await expect(page.locator('#status')).toContainText('导体总电荷仍为零');
  await expect(page.locator('#readout')).not.toContainText('感应起电');
});

test('B3-22 区分交流有效值和短路示意值', async ({ page }) => {
  await page.goto(pageUrl('household-circuit.html'));
  const canvas = page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-voltage-meaning', '220-V-rms-ac');
  await expect(canvas).toHaveAttribute('data-short-current-meaning', 'schematic-depends-on-loop-impedance');
  await completeGuide(page, 'current-up');
  await page.locator('[data-mode="short"]').click();
  await expect(page.locator('#readout')).toContainText('实际由回路阻抗决定');
  await expect(page.locator('#readout')).not.toContainText('80 A');
  await expect(page.locator('#status')).toContainText('不能固定为某个通用值');
});

test('B3-24 光纤使用介质波速、红外数量级并分离载波与带宽', async ({ page }) => {
  await page.goto(pageUrl('em-wave-applications.html'));
  const canvas = page.locator('#canvas');
  await completeGuide(page, 'medium');
  await page.getByRole('button', { name: '光纤', exact: true }).click();
  await expect(canvas).toHaveAttribute('data-mode', 'fiber');
  expect(Number(await canvas.getAttribute('data-propagation-speed'))).toBe(2e8);
  const frequency = Number(await canvas.getAttribute('data-frequency-hz'));
  const wavelength = Number(await canvas.getAttribute('data-wavelength-m'));
  const delayMs = Number(await canvas.getAttribute('data-delay-ms'));
  expect(frequency).toBeGreaterThan(1e14);
  expect(frequency).toBeLessThan(4e14);
  expect(wavelength).toBeGreaterThan(0.5e-6);
  expect(wavelength).toBeLessThan(2e-6);
  expect(delayMs).toBeCloseTo(0.2, 2);
  await expect(page.locator('#status')).toContainText('不是“频率高”单独决定');
  await expect(page.locator('#readout')).toContainText('结合带宽、信噪比与调制编码');
});

test('B3 本批动画在 390×844 无横向溢出且无运行错误', async ({ browser }) => {
  const files = ['charge-electrification.html', 'coulomb.html', 'closed-circuit-law.html', 'electrostatic-induction.html', 'household-circuit.html', 'em-wave-applications.html', 'joule-law.html'];
  for (const file of files) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(`console: ${msg.text()}`); });
    page.on('pageerror', err => errors.push(`pageerror: ${err.message}`));
    await page.goto(pageUrl(file));
    await page.waitForTimeout(180);
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll, `${file} horizontal overflow`).toBeLessThanOrEqual(widths.client);
    expect(errors, `${file} runtime errors`).toEqual([]);
    await page.close();
  }
});
