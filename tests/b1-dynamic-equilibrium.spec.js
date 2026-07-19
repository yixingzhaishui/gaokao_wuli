const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const url = pathToFileURL(path.resolve(__dirname, '..', 'anim', 'bx1', 'dynamic-equilibrium.html')).href;

test('B1-22 默认准静态演示按 dt 推进并在水平绳前暂停预测', async ({ page }) => {
  await page.goto(url);
  await expect(page.locator('#app')).toHaveAttribute('data-mode', 'quasistatic');
  await expect(page.locator('#app')).toHaveAttribute('data-equilibrium', 'true');
  await expect(page.locator('#formulaCard')).toBeHidden();
  await page.locator('#playBtn').click();
  await expect(page.locator('#predictCard')).toBeVisible({ timeout: 3_000 });
  const dt = await page.locator('#app').getAttribute('data-dt-seconds');
  expect(Number(dt)).toBeGreaterThan(0);
  await expect(page.locator('#status')).toContainText('接近水平前暂停');
  await page.locator('[data-predict="increase"]').click();
  await expect(page.locator('#app')).toHaveAttribute('data-guided-complete', 'true', { timeout: 3_000 });
  await expect(page.locator('#feedbackCard')).toBeVisible();
  await expect(page.locator('#feedbackCard')).toContainText('你的预测：增大');
  await expect(page.locator('#feedbackCard')).toContainText('实际结果');
  await expect(page.locator('#app')).toHaveAttribute('data-prediction-feedback', 'visible');
  await expect(page.locator('#formulaCard')).toBeVisible();
  await expect(page.locator('#exploreCard')).toBeVisible();
  await expect(page.locator('#aText')).toContainText('≈ 0');
  await expect(page.locator('#sumText')).toContainText('≈ 0');
});

test('B1-22 快速模式不再显示平衡成立', async ({ page }) => {
  await page.goto(url);
  await page.locator('#playBtn').click();
  await expect(page.locator('#predictCard')).toBeVisible({ timeout: 3_000 });
  await page.locator('[data-predict="increase"]').click();
  await expect(page.locator('#exploreCard')).toBeVisible({ timeout: 3_000 });
  await page.locator('#fastBtn').click();
  const yBefore = Number(await page.locator('#app').getAttribute('data-motion-y'));
  await page.waitForTimeout(180);
  const yAfter = Number(await page.locator('#app').getAttribute('data-motion-y'));
  await expect(page.locator('#app')).toHaveAttribute('data-mode', 'fast');
  await expect(page.locator('#app')).toHaveAttribute('data-equilibrium', 'false');
  await expect(page.locator('#app')).toHaveAttribute('data-motion-consistent', 'true');
  expect(Math.abs(yAfter-yBefore)).toBeGreaterThan(0.001);
  expect(Math.abs(Number(await page.locator('#app').getAttribute('data-motion-ay')))).toBeGreaterThan(0.01);
  await expect(page.locator('#status')).toContainText('ΣF=ma≠0');
  await expect(page.locator('#status')).toContainText('不得继续强制显示平衡成立');
  await expect(page.locator('#sumText')).not.toContainText('≈ 0');
});

test('B1-22 真实拖动、390×844 与 console 均通过', async ({ browser }) => {
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(url);
  await page.locator('#playBtn').click();
  await expect(page.locator('#predictCard')).toBeVisible({ timeout: 3_000 });
  await page.locator('[data-predict="increase"]').click();
  await expect(page.locator('#exploreCard')).toBeVisible({ timeout: 3_000 });
  await expect(page.locator('#feedbackCard')).toContainText('你的预测：增大');
  const canvas = page.locator('#canvas');
  const box = await canvas.boundingBox();
  await page.mouse.move(box.x + box.width * 0.2, box.y + box.height * 0.2);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.38, box.y + box.height * 0.35, { steps: 8 });
  await page.mouse.up();
  const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
  expect(widths.scroll).toBeLessThanOrEqual(widths.client);
  expect(errors).toEqual([]);
});
