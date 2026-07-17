const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx1', file)).href;

test.describe.configure({ mode: 'serial' });
test.setTimeout(45_000);

test('B1-12 默认演示在共速前预测并运行至相遇', async ({ page }) => {
  await page.goto(pageUrl('pursuit.html'));
  await expect(page.locator('#readout')).toContainText('t=0.00');
  await page.locator('#play').click();
  await expect(page.locator('#play')).toHaveText(/验证：共速还是相遇/,{ timeout: 8_000 });
  await expect(page.locator('#status')).toContainText('预测暂停');
  await page.locator('#play').click();
  await expect(page.locator('#status')).toContainText('演示完成：Δx=0',{ timeout: 14_000 });
  await expect(page.locator('#readout')).toContainText('Δx=0.00');
});

test('B1-18 预测先于结果且迁移情境不显示伪精确读数', async ({ page }) => {
  await page.goto(pageUrl('friction.html'));
  await expect(page.locator('#formula')).toBeHidden();
  await expect(page.locator('#playBtn')).toBeDisabled();
  await page.locator('[data-p1="follow"]').click();
  await page.locator('#motionBtn').click();
  await expect(page.locator('#motionBtn')).toContainText('分步');
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','predict-direction');
  await expect(page.locator('#status')).toContainText('第一幕证据');
  await page.locator('[data-p2="right"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','final');
  await expect(page.locator('#formula')).toBeVisible();
  await expect(page.locator('#readout')).toBeHidden();
  await expect(page.locator('#status')).toContainText('自由探索现在才开放');
});

test('B1-24 逐点取证后揭示公式且静摩擦按需求取值', async ({ page }) => {
  await page.goto(pageUrl('newton-second.html'));
  await expect(page.locator('#formula')).toBeHidden();
  await expect(page.locator('#playBtn')).toBeDisabled();
  await page.locator('[data-predict-force="double"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','force-revealed',{ timeout: 7_000 });
  await expect(page.locator('#dataBody tr')).toHaveCount(4);
  await expect(page.locator('#formula')).toBeHidden();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','mass-predict-transform',{ timeout: 7_000 });
  await expect(page.locator('#dataBody tr')).toHaveCount(8);
  await page.locator('[data-predict-mass="inv"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#formula')).toBeVisible();
  await page.locator('[data-surface="static"]').click();
  await expect(page.locator('#roughText')).toContainText('fₛ=F外=6.0 N');
  await expect(page.locator('#roughText')).toContainText('F合=0.0 N');
});
