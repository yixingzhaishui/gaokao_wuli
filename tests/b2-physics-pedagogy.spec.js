const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx2', file)).href;

test.describe.configure({ mode: 'serial' });
test.setTimeout(45_000);

test('B2 正文关闭平抛、向心力、同步卫星、双星和动能定理边界问题', async () => {
  const markdown = fs.readFileSync(path.join(root, 'bx2.md'), 'utf8');
  expect(markdown).toContain('在同一地点、同一高度、忽略空气阻力且竖直初速度为零时');
  expect(markdown).not.toContain('类平抛是斜抛的特殊情况');
  expect(markdown).toContain('平抛可以看成重力场斜抛模型中“发射角为零、初速度水平”的特殊情况');
  expect(markdown).toContain('一般曲线运动若还存在切向合力，速度大小也会改变');
  expect(markdown).toContain('严格为一个恒星日');
  expect(markdown).toContain('$Gm_{1}m_{2}/L^{2}$');
  expect(markdown).not.toContain('$Gm_{1}\\ \\mathrm{m}2/L^{2}$');
  expect(markdown).not.toContain('两式相乘整理');
  expect(markdown).toContain('把 $a=(v_{2}^{2}-v_{1}^{2})/(2s)$ 代入');
  expect(markdown).toContain('仅限本页固定粗糙斜面、持续相对滑动');
});

test('B2-04 不再把水平抛出和类平抛混为一谈', async ({ page }) => {
  await page.goto(pageUrl('oblique-throw.html'));
  await expect(page.locator('[data-case="flat"]')).toHaveText('水平抛出');
  await page.locator('[data-case="flat"]').click();
  await expect(page.locator('#status')).toContainText('重力场斜抛模型中的水平抛出');
  await expect(page.locator('#status')).toContainText('类平抛');
});

test('B2-06 只在纯径向合力条件下声称速率不变', async ({ page }) => {
  await page.goto(pageUrl('centripetal.html'));
  await expect(page.locator('#status')).toContainText('合力纯径向、切向合力为 0');
  await expect(page.locator('#status')).toContainText('一般曲线运动若有切向合力，速率也会变');
});

test('B2-08 用机械能计算整圈速度并在任意位置检查绳张力', async ({ page }) => {
  await page.goto(pageUrl('vertical-circle.html'));
  const canvas = page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-speed-model', 'energy-from-top');
  await expect(canvas).toHaveAttribute('data-rope-check', 'all-angles');
  await expect(canvas).toHaveAttribute('data-timestep', 'real-dt');
  await expect(page.locator('#formulaCard')).toBeHidden();
  await expect(page.locator('#playBtn')).toBeDisabled();
  await page.locator('[data-predict="slack"]').click();
  await expect(page.locator('#feedback')).toContainText('你的预测：绳会松弛');
  await expect(page.locator('#feedback')).toContainText('绳不能提供负张力');
  await expect(page.locator('#formulaCard')).toBeVisible();
  await expect(canvas).toHaveAttribute('data-constraint-valid', 'false');
  await expect(page.locator('#status')).toContainText('绳会松弛');

  await page.locator('[data-case="critical"]').click();
  await expect(canvas).toHaveAttribute('data-constraint-valid', 'true');
  const topSpeed = Number(await canvas.getAttribute('data-local-speed'));
  await page.locator('#playBtn').click();
  await page.waitForTimeout(450);
  const lowerSpeed = Number(await canvas.getAttribute('data-local-speed'));
  expect(lowerSpeed).toBeGreaterThan(topSpeed);
  await page.locator('#playBtn').click();

  await page.locator('#rodBtn').click();
  await page.locator('[data-case="slow"]').click();
  await expect(page.locator('#status')).toContainText('恰好到达最高点');
  await expect(page.locator('#status')).toContainText('连续通过需要 v_top>0');
});

test('B2-22 功能关系先选系统且不把摩擦功普遍等同生热', async ({ page }) => {
  const markdown = fs.readFileSync(path.join(root, 'bx2.md'), 'utf8');
  expect(markdown).toContain('摩擦力可以做正功、负功或零功');
  expect(markdown).toContain('$Q=f_{k}s_{\\text{相对}}$');
  expect(markdown).toContain('这不是摩擦力在所有情境中的通式');
  await page.goto(pageUrl('work-energy-relation.html'));
  await expect(page.locator('#canvas')).toHaveAttribute('data-model-boundary', 'fixed-rough-incline-block-dynamic-friction-only-other-force');
  await expect(page.locator('#canvas')).toHaveAttribute('data-friction-work-is-universal-heat', 'false');
  await page.locator('[data-case="rough"]').click();
  await expect(page.locator('#status')).toContainText('本模型限定');
  await expect(page.locator('#status')).toContainText('Wf=ΔE机');
});

test('B2-23 能量守恒明确系统边界和相对滑动生热', async ({ page }) => {
  const markdown = fs.readFileSync(path.join(root, 'bx2.md'), 'utf8');
  expect(markdown).toContain('“滑块 + 斜面 + 地球”近似封闭系统');
  expect(markdown).toContain('相对滑动生热：E内 = Q = fk·s相对');
  await page.goto(pageUrl('energy-conservation.html'));
  const canvas = page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-system-boundary', 'block-fixed-ramp-earth-approximately-closed');
  await expect(canvas).toHaveAttribute('data-heat-relation', 'Q=fk*s_relative');
  await expect(page.locator('body')).toContainText('本固定斜面特例才有 Q=-Wf');
});

test('B2-26 第三宇宙速度绑定近地顺行发射条件', async ({ page }) => {
  await page.goto(pageUrl('cosmic-velocity.html'));
  const canvas = page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-launch-direction', 'local-tangent-prograde-for-third-cosmic-speed');
  await expect(canvas).toHaveAttribute('data-third-cosmic-speed-conditional', 'true');
  await page.locator('#height').fill('100');
  await page.locator('#speed').fill('17');
  await expect(canvas).toHaveAttribute('data-third-cosmic-speed-conditional', 'false');
  await expect(page.locator('#status')).toContainText('第三宇宙速度不能继续用固定 16.7 km/s 判定');
});

test('B2 本批动画在 390×844 无横向溢出且无运行错误', async ({ browser }) => {
  const files = ['oblique-throw.html', 'centripetal.html', 'vertical-circle.html', 'geostationary.html', 'work-energy-relation.html', 'energy-conservation.html', 'cosmic-velocity.html'];
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
