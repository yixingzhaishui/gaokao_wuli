const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx1', file)).href;

test.describe.configure({ mode: 'serial' });
test.setTimeout(45_000);

test('B1-12 默认演示在共速前预测并运行至相遇', async ({ page }) => {
  await page.goto(pageUrl('pursuit.html'));
  await expect(page.locator('#readout')).toContainText('t=0.00');
  await expect(page.locator('#readout')).not.toContainText('t等');
  await expect(page.locator('#readout')).not.toContainText('相遇=');
  await expect(page.locator('#formulaBox')).toBeHidden();
  await expect(page.locator('#explore')).toBeHidden();
  await expect(page.locator('#app')).toHaveAttribute('data-revealed','false');
  await page.locator('#play').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','prediction',{ timeout: 8_000 });
  await expect(page.locator('#predictionChoices')).toBeVisible();
  await expect(page.locator('#play')).toBeDisabled();
  await expect(page.locator('#status')).toContainText('预测暂停');
  await page.locator('[data-prediction="max"]').click();
  await expect(page.locator('#app')).toHaveAttribute('data-revealed','false');
  await page.locator('#play').click();
  await expect(page.locator('#status')).toContainText('演示完成：Δx=0',{ timeout: 14_000 });
  await expect(page.locator('#readout')).toContainText('Δx=0.00');
  await expect(page.locator('#readout')).toContainText('t等=');
  await expect(page.locator('#formulaBox')).toBeVisible();
  await expect(page.locator('#explore')).toBeVisible();
});

test('B1-18 预测先于结果且迁移情境不显示伪精确读数', async ({ page }) => {
  await page.goto(pageUrl('friction.html'));
  await expect(page.locator('#formula')).toBeHidden();
  await expect(page.locator('#playBtn')).toBeDisabled();
  await expect(page.locator('#canvas')).toHaveAttribute('data-trend','none');
  await page.locator('[data-p1="follow"]').click();
  await page.locator('#motionBtn').click();
  await expect(page.locator('#motionBtn')).toContainText('分步');
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','static-evidence');
  await expect(page.locator('#fText')).toHaveText('20.0 N');
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','critical-evidence');
  await expect(page.locator('#stateText')).toHaveText('恰要滑动');
  await expect(page.locator('#fText')).toHaveText('25.0 N');
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','slide-evidence');
  await expect(page.locator('#stateText')).toHaveText('已经滑动');
  await expect(page.locator('#frText')).toHaveText('20.0 N');
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','predict-direction');
  await page.locator('[data-p2="right"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','final');
  await expect(page.locator('#formula')).toBeVisible();
  await expect(page.locator('#readout')).toBeHidden();
  await expect(page.locator('#status')).toContainText('自由探索现在才开放');
  await expect(page.locator('#quantitativeControls')).toBeHidden();
  await expect(page.locator('#qualitativeNote')).toBeVisible();
});

test('B1-18 自动模式同样逐段停留在静止、临界和滑动证据', async ({ page }) => {
  await page.goto(pageUrl('friction.html'));
  await page.locator('[data-p1="follow"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','static-evidence',{ timeout: 12_000 });
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','critical-evidence',{ timeout: 5_000 });
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','slide-evidence',{ timeout: 6_000 });
  await expect(page.locator('#stateText')).toHaveText('已经滑动');
});

test('B1-24 逐点取证后揭示公式且静摩擦按需求取值', async ({ page }) => {
  await page.goto(pageUrl('newton-second.html'));
  await expect(page.locator('#formula')).toBeHidden();
  await expect(page.locator('#playBtn')).toBeDisabled();
  await expect(page.locator('#canvas')).toHaveAttribute('data-secondary-axis','mass');
  await expect(page.locator('body')).not.toContainText('实验二：固定 F合，改画 a-1/m');
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
  await expect(page.locator('#canvas')).toHaveAttribute('data-secondary-axis','inverse-mass');
  await page.locator('[data-surface="static"]').click();
  await expect(page.locator('#roughText')).toContainText('fₛ=F外=6.0 N');
  await expect(page.locator('#roughText')).toContainText('F合=0.0 N');
});

test('B1-24 减少动态模式每次点击只增加一个数据点', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(pageUrl('newton-second.html'));
  await page.locator('[data-predict-force="double"]').click();
  for (let count = 1; count <= 4; count += 1) {
    await page.locator('#playBtn').click();
    await expect(page.locator('#dataBody tr')).toHaveCount(count);
  }
  await expect(page.locator('#app')).toHaveAttribute('data-phase','force-revealed');
});

test('完整 bx1.md 页面在第一项预测前不泄露规范答案且正文控件一致', async () => {
  const markdown = fs.readFileSync(path.join(root, 'bx1.md'), 'utf8');
  const section = (id, nextId) => markdown.slice(markdown.indexOf(`<h4 id="${id}">`), markdown.indexOf(`<h4 id="${nextId}">`));
  const checks = [
    { text: section('pursuit','free-fall'), iframe: 'anim/bx1/pursuit.html', forbidden: /距离最远|最终一定会追上|速度相等表示距离变化率|共速处是/ },
    { text: section('friction','force-composition'), iframe: 'anim/bx1/friction.html', forbidden: /0\\le f_s|f_\{s,\\max\}|f_k=|\\mu_sN|真正需要比较的是/ },
    { text: section('newton-second','newton-third'), iframe: 'anim/bx1/newton-second.html', forbidden: /F_\{\\text\{合\}\}=m|F合=ma|a\\propto|1\/m/ }
  ];
  for (const item of checks) {
    const iframeIndex = item.text.indexOf(item.iframe);
    expect(iframeIndex).toBeGreaterThan(0);
    expect(item.text.slice(0, iframeIndex)).not.toMatch(item.forbidden);
  }
  expect(checks[1].text).not.toContain('拖蓝色外力');
  expect(checks[1].text).not.toContain('拖 `m` 旋钮');
  expect(checks[2].text).not.toContain('拖动合力箭头端点');
  expect(checks[2].text).not.toContain('拖动砝码尺');
});
