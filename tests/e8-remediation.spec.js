const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const expDir = path.join(root, 'anim', 'exp');
const pages = fs.readdirSync(expDir).filter(name => name.endsWith('.html')).sort();

test.describe.configure({ mode: 'serial' });
test.setTimeout(120_000);

const urlFor = file => pathToFileURL(path.join(expDir, file)).href;

async function open(page, file) {
  await page.goto(urlFor(file), { waitUntil: 'load' });
  await page.waitForTimeout(80);
}

async function unlock(page) {
  await page.locator('[data-exp-guide="setup"]').click();
  await page.locator('[data-exp-guide="choice"]').first().click();
  await page.locator('[data-exp-guide="verify"]').click();
  await expect.poll(() => page.evaluate(() => window.__EXP_GUIDE__?.stage)).toBe('measurement');
}

async function pressMany(locator, key, count) {
  for (let i = 0; i < count; i++) await locator.press(key);
}

test('E8 全章均执行装置检查→预测→真实测量→分析，并支持减少动态效果', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const file of pages) {
    const errors = [];
    const onError = error => errors.push(error.message);
    page.on('pageerror', onError);
    await open(page, file);
    expect(await page.evaluate(() => window.__EXP_GUIDE__?.node), file).toMatch(/^E-\d{2}$/);
    expect(await page.evaluate(() => window.__EXP_GUIDE__?.reduced), file).toBe(true);
    expect(await page.locator('canvas').evaluate(node => getComputedStyle(node).pointerEvents), file).toBe('none');
    const readout = page.locator('.readout,[id="readout"]').first();
    expect(await readout.evaluate(node => getComputedStyle(node).display), file).toBe('none');
    await unlock(page);
    expect(await page.locator('canvas').evaluate(node => getComputedStyle(node).pointerEvents), file).not.toBe('none');

    if (file === 'equipotential-line-lab.html') {
      const box = await page.locator('canvas').boundingBox();
      await page.mouse.click(box.x + box.width * 0.5, box.y + box.height * 0.5);
    } else {
      if (file === 'coulomb-force-lab.html') {
        await page.locator('#playBtn').click();
        await page.waitForTimeout(2000);
        await page.locator('#playBtn').click();
      }
      const record = page.locator('#record,#recordBtn').first();
      await expect(record, file).toBeEnabled();
      await record.click();
    }
    await expect(page.locator('[data-exp-guide="analyze"]'), file).toBeVisible({ timeout: 3000 });
    await page.locator('[data-exp-guide="analyze"]').click();
    await expect.poll(() => page.evaluate(() => window.__EXP_GUIDE__?.stage), { message: file }).toBe('complete');
    await expect(readout, file).toBeVisible();
    expect(errors, file).toEqual([]);
    page.off('pageerror', onError);
  }
});

test('E-03 超弹性限度使用非线性实测伸长并排除该点', async ({ page }) => {
  await open(page, 'hooke-law-lab.html'); await unlock(page);
  await page.locator('#k').press('Home');
  await page.locator('#count').press('End');
  const q = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(q.beyond).toBe(true);
  expect(q.actualX).not.toBeCloseTo(q.idealX, 4);
  await page.locator('#recordBtn').click();
  await expect(page.locator('#records')).toContainText('超限排除');
});

test('E-10 只用稳定的当前扭秤读数反查静电力常量', async ({ page }) => {
  await open(page, 'coulomb-force-lab.html'); await unlock(page);
  await expect(page.locator('#status')).toContainText('尚未稳定');
  await page.locator('#recordBtn').click();
  expect(await page.locator('#recordRows tr').count()).toBe(0);
  await page.locator('#playBtn').click();
  await page.waitForTimeout(2000);
  await page.locator('#playBtn').click();
  const q = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(q.settled).toBe(true);
  expect(q.Fread / q.Fsettled).toBeGreaterThanOrEqual(.99);
  expect(q.rel).toBeLessThan(q.leak + 1.1);
  await page.locator('#recordBtn').click();
  expect(await page.locator('#recordRows tr').count()).toBe(1);
});

test('E-15 欧姆挡为反向非线性刻度，E-18 图像斜率定义一致', async ({ page }) => {
  await open(page, 'multimeter-practice-lab.html'); await unlock(page);
  await page.locator('#mode').press('End');
  await page.locator('#value').press('Home');
  const lowR = await page.evaluate(() => window.__EXP_TEST_STATE__);
  await page.locator('#value').press('End');
  const highR = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(lowR.mode).toBe(2);
  expect(lowR.ratio).toBeGreaterThan(highR.ratio);
  expect(lowR.ohmMid).toBe(10);

  await open(page, 'glass-refraction-lab.html'); await unlock(page);
  expect((await page.evaluate(() => window.__EXP_TEST_STATE__)).graph).toEqual({ x: 'sin r', y: 'sin i', slope: 'n' });
});

test('E-23 真实拖动决定 ΔΦ/Δt，磁极按钮决定朝向线圈的极', async ({ page }) => {
  await open(page, 'induced-current-direction-lab.html'); await unlock(page);
  const canvas = page.locator('canvas'), box = await canvas.boundingBox();
  const before = await page.evaluate(() => window.__EXP_TEST_STATE__);
  const x = box.x + before.x / 900 * box.width, y = box.y + 225 / 620 * box.height;
  await page.mouse.move(x, y); await page.mouse.down();
  await page.mouse.move(x + 110, y, { steps: 8 }); await page.mouse.up();
  const after = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(Math.abs(after.dPhi)).toBeGreaterThan(0);
  expect(after.dt).toBeGreaterThan(0);
  expect(Math.abs(after.e)).toBeGreaterThan(0);
  await page.locator('[data-pole="S"]').click();
  expect((await page.evaluate(() => window.__EXP_TEST_STATE__)).facingPole).toBe('S');
});

test('E-25 光照→光敏电阻→分压→滞回输出同源', async ({ page }) => {
  await open(page, 'sensor-auto-control-lab.html'); await unlock(page);
  await page.locator('#light').press('Home');
  const dark = await page.evaluate(() => window.__EXP_TEST_STATE__);
  await page.locator('#light').press('End');
  const bright = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(dark.Rs).toBeGreaterThan(bright.Rs);
  expect(dark.Us).toBeGreaterThan(bright.Us);
  expect(dark.active).toBe(true);
  expect(bright.active).toBe(false);
  await page.locator('[data-mode="bright"]').click();
  expect((await page.evaluate(() => window.__EXP_TEST_STATE__)).active).toBe(true);
});

test('E-06/E-08/E-20 的记录、拟合和固定真实量不再由答案反推', async ({ page }) => {
  await open(page, 'mechanical-energy-lab.html'); await unlock(page);
  await page.locator('#loss').press('End');
  const energy = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(energy.dep).toBeCloseTo(energy.dek + energy.wDrag, 3);
  expect(energy.residual).toBeLessThan(1);
  await page.locator('#recordBtn').click();
  expect(await page.locator('#records tr').count()).toBe(1);

  await open(page, 'centripetal-force-lab.html'); await unlock(page);
  const omega = page.locator('#omega');
  await omega.press('Home'); await page.locator('#recordBtn').click();
  await pressMany(omega, 'ArrowRight', 15); await page.locator('#recordBtn').click();
  await omega.press('End'); await page.locator('#recordBtn').click();
  const fit = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(fit.recordCount).toBe(3);
  expect(fit.slope).not.toBeNull();

  await open(page, 'oil-film-molecule-lab.html'); await unlock(page);
  const oilA = await page.evaluate(() => window.__EXP_TEST_STATE__);
  await page.locator('#drops').press('End');
  const oilB = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(oilB.trueD).toBe(oilA.trueD);
  expect(oilB.trueArea).not.toBe(oilA.trueArea);
});

test('E-21/E-22/E-24/E-26 的初态、量具、负载和热平衡边界正确', async ({ page }) => {
  await open(page, 'capacitor-charge-discharge-lab.html');
  await expect(page.locator('#play')).toHaveText('播放');

  await open(page, 'length-measurement-lab.html'); await unlock(page);
  await page.locator('[data-tool="vernier"]').click();
  const vernier = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(vernier.precision).toContain('0.02 mm');
  expect(vernier.sub).toBeGreaterThanOrEqual(0); expect(vernier.sub).toBeLessThan(50);
  expect(Math.abs(vernier.raw / .02 - Math.round(vernier.raw / .02))).toBeLessThan(1e-8);

  await open(page, 'transformer-turns-voltage-lab.html'); await unlock(page);
  await page.locator('#load').press('Home');
  const heavy = await page.evaluate(() => window.__EXP_TEST_STATE__);
  await page.locator('#load').press('End');
  const light = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(heavy.lightLoad).toBe(false); expect(light.lightLoad).toBe(true);
  expect(heavy.sag).toBeGreaterThan(light.sag);
  expect(light.graphOrigin).toEqual({ n2: 0, u2: 0 });

  await open(page, 'isothermal-gas-law-lab.html'); await unlock(page);
  await page.locator('#temp').press('End');
  const gas = await page.evaluate(() => window.__EXP_TEST_STATE__);
  expect(gas.C).toBeCloseTo(4000 * 320 / 300, 6);
  await page.locator('#record').click();
  expect(await page.locator('#rows tr').count()).toBe(1);
  await expect(page.locator('#rows')).toContainText('暂无记录');
  await page.waitForTimeout(420);
  await page.locator('#record').click();
  await expect(page.locator('#rows')).not.toContainText('暂无记录');
});

test('experiments.md 的交互证据先于公式解释，且无模板伪标记', () => {
  const content = fs.readFileSync(path.join(root, 'experiments.md'), 'utf8');
  const sections = content.split(/^<h4 id="exp-/m).slice(1);
  expect(sections).toHaveLength(26);
  for (const section of sections) {
    expect(section.indexOf('#### 交互实验')).toBeGreaterThan(-1);
    expect(section.indexOf('#### 交互实验')).toBeLessThan(section.indexOf('#### 原理、变量、单位与适用条件'));
  }
  expect(content).not.toContain('；text；');
  expect(content).not.toContain('：q1q2：');
  expect(content).toContain('|q₁q₂|');
  expect(pages).toHaveLength(26);
  for (const file of pages) expect(fs.readFileSync(path.join(expDir, file), 'utf8')).toContain('guided-experiment.js');
});
