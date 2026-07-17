const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx1', file)).href;

test.describe.configure({ mode: 'serial' });
test.setTimeout(45_000);

test('B1-01 固定 0.01 阈值不再决定质点结论', async ({ page }) => {
  await page.goto(pageUrl('particle.html'));
  await expect(page.locator('#canvas')).toHaveAttribute('data-ratio-is-threshold', 'false');
  await expect(page.locator('#readout')).toContainText('可质点化');
  await page.locator('#len').fill('20');
  await page.locator('#dist').fill('5');
  await expect(page.locator('#readout')).toContainText('可质点化');
  await page.locator('#modePass').click();
  await expect(page.locator('#readout')).toContainText('不可质点化');
  await expect(page.locator('#canvas')).toHaveAttribute('data-verdict-source', 'research-question');
});

test('B1-06 用上抛最高点建立 v=0 但 a=-g 的反例', async ({ page }) => {
  await page.goto(pageUrl('acceleration.html'));
  await page.locator('#zeroBtn').click();
  await expect(page.locator('#status')).toContainText('竖直上抛最高点');
  await expect(page.locator('#status')).toContainText('a=-g');
});

test('B1-15 斜面释放显式限定为光滑且无其他沿面力', async ({ page }) => {
  await page.goto(pageUrl('gravity.html'));
  await page.locator('#play').click();
  await expect(page.locator('#canvas')).toHaveAttribute('data-release-model', 'smooth-incline-no-other-along-force');
  await expect(page.locator('#status')).toContainText('光滑斜面');
  await expect(page.locator('#status')).toContainText('忽略摩擦和其他沿斜面力');
});

test('B1-16 桌面和绳不再显示通用 kx，松弛绳有可见余绳语义', async ({ page }) => {
  await page.goto(pageUrl('elastic-force.html'));
  await expect(page.locator('#app')).toHaveAttribute('data-universal-kx', 'false');
  await expect(page.locator('#readout')).not.toContainText('k=');
  await expect(page.locator('#readout')).not.toContainText('F=kx');
  await page.locator('[data-mode="rope"]').click();
  await page.locator('#zero').click();
  await expect(page.locator('#canvas')).toHaveAttribute('data-rope-state', 'slack-visible-sag');
  await expect(page.locator('#status')).toContainText('弹力不存在');
});

test('B1-17 弹性限度外不输出 kx 精确值且理论线终止于限度', async ({ page }) => {
  await page.goto(pageUrl('hooke-law.html'));
  await page.locator('#outside').click();
  await expect(page.locator('#app')).toHaveAttribute('data-model-valid', 'false');
  await expect(page.locator('#app')).toHaveAttribute('data-force-value', 'unknown');
  await expect(page.locator('#readout')).toContainText('关系未知');
  await expect(page.locator('#status')).toContainText('当前模型失效');
  await expect(page.locator('#canvas')).toHaveAttribute('data-theory-line', '-7:7');
  await expect(page.locator('#canvas')).toHaveAttribute('data-point-kind', 'invalid-no-force-value');
});

test('B1-19 单调结论包含固定 F1、F2 条件且自动扫描锁定大小', async ({ page }) => {
  await page.goto(pageUrl('force-composition.html'));
  const before = await page.locator('#app').evaluate(el => [el.dataset.f1, el.dataset.f2]);
  await page.locator('#play').click();
  await page.waitForTimeout(500);
  const after = await page.locator('#app').evaluate(el => [el.dataset.f1, el.dataset.f2]);
  expect(after).toEqual(before);
  await expect(page.locator('#status')).toContainText('F1、F2 大小保持不变');
  await expect(page.locator('#app')).toHaveAttribute('data-resultant-is-third-force', 'false');
  await page.locator('[data-case="free"]').click();
  await expect(page.locator('#status')).toContainText('不能声称');
});

test('B1-20 mg sinθ 只表示下滑趋势并可切换另一组分解方向', async ({ page }) => {
  await page.goto(pageUrl('force-decomposition.html'));
  await expect(page.locator('#status')).toContainText('产生下滑趋势');
  await expect(page.locator('#status')).toContainText('沿面合力');
  await page.locator('#basisGround').click();
  await expect(page.locator('#canvas')).toHaveAttribute('data-basis', 'ground');
  await expect(page.locator('#parallelLabel')).toHaveText('水平分量 Gx');
  await expect(page.locator('#perpLabel')).toHaveText('竖直分量 Gy');
  await expect(page.locator('#status')).toContainText('分力不同但合成仍是原重力');
  await expect(page.locator('#canvas')).toHaveAttribute('data-components-are-extra-forces', 'false');
});

test('B1-25 Markdown 表格行与 KaTeX 语法完整', async () => {
  const markdown = fs.readFileSync(path.join(root, 'bx1.md'), 'utf8');
  const section = markdown.slice(markdown.indexOf('<h4 id="newton-third">'), markdown.indexOf('<h4 id="overweight">'));
  const row = section.split('\n').find(line => line.includes('两箭头等长'));
  expect(row).toBeTruthy();
  expect((row.match(/\|/g) || []).length).toBe(4);
  expect(row).toContain('$\\lvert F_{12}\\rvert=\\lvert F_{21}\\rvert$');
  expect(row).toContain('大小相等');
  expect(row).not.toContain('| `');
});

test('B1-28 静动摩擦参数分离且 Q 只在相对滑动阶段使用', async ({ page }) => {
  await page.goto(pageUrl('plank-block.html'));
  await expect(page.locator('#canvas')).toHaveAttribute('data-friction-parameters', 'separate-mus-muk');
  await expect(page.locator('#canvas')).toHaveAttribute('data-analysis-step', 'compare-required-static-to-maximum');
  await expect(page.locator('#status')).toContainText('不使用 Q=fₖ·s相对');
  await expect(page.locator('body')).toContainText('μₛ');
  await expect(page.locator('body')).toContainText('μₖ');
  await page.locator('[data-case="fall"]').click();
  await expect(page.locator('#canvas')).toHaveAttribute('data-analysis-step', 'kinetic-friction');
  await expect(page.locator('#status')).toContainText('相对滑动累计生热');
});

test('本批动画在 390×844 无横向溢出且无 console/page error', async ({ browser }) => {
  const files = ['particle.html','acceleration.html','gravity.html','elastic-force.html','hooke-law.html','force-composition.html','force-decomposition.html','plank-block.html'];
  for (const file of files) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = [];
    page.on('console', msg => { if (msg.type() === 'error') errors.push(`console: ${msg.text()}`); });
    page.on('pageerror', err => errors.push(`pageerror: ${err.message}`));
    await page.goto(pageUrl(file));
    await page.waitForTimeout(150);
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll, `${file} horizontal overflow`).toBeLessThanOrEqual(widths.client);
    expect(errors, `${file} runtime errors`).toEqual([]);
    await page.close();
  }
});
