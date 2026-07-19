const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx1', file)).href;
async function dragCanvas(page, fromX, fromY, toX, toY) {
  const canvas = page.locator('#canvas');
  const box = await canvas.boundingBox();
  const size = await canvas.evaluate(el => ({ width: el.width, height: el.height }));
  const point = (x, y) => ({ x: box.x + x / size.width * box.width, y: box.y + y / size.height * box.height });
  const from = point(fromX, fromY), to = point(toX, toY);
  await page.mouse.move(from.x, from.y);
  await page.mouse.down();
  await page.mouse.move(to.x, to.y, { steps: 5 });
  await page.mouse.up();
}

test.describe.configure({ mode: 'serial' });
test.setTimeout(45_000);

test('B1-12 默认演示在共速前预测并运行至相遇', async ({ page }) => {
  await page.goto(pageUrl('pursuit.html'));
  await expect(page.locator('#readout')).toContainText('t=0.00');
  await expect(page.locator('#readout')).not.toContainText('t等');
  await expect(page.locator('#readout')).not.toContainText('相遇=');
  await expect(page.locator('#formulaBox')).toBeHidden();
  await expect(page.locator('#explore')).toBeHidden();
  await expect(page.locator('#app')).toHaveAttribute('data-evidence-revealed','false');
  await expect(page.locator('#app')).toHaveAttribute('data-explore-enabled','false');
  await expect(page.locator('#app')).toHaveAttribute('data-running','false');
  await expect(page.locator('#canvas')).toHaveAttribute('data-distance-graph','observed');
  await page.locator('#play').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','prediction',{ timeout: 8_000 });
  await expect(page.locator('#app')).toHaveAttribute('data-running','false');
  await expect(page.locator('#predictionChoices')).toBeVisible();
  await expect(page.locator('#play')).toBeDisabled();
  await expect(page.locator('#status')).toContainText('预测暂停');
  await page.locator('[data-prediction="max"]').click();
  await expect(page.locator('#app')).toHaveAttribute('data-evidence-revealed','false');
  await expect(page.locator('#canvas')).toHaveAttribute('data-distance-graph','observed');
  await page.locator('#play').click();
  await expect(page.locator('#app')).toHaveAttribute('data-evidence-revealed','true');
  await expect(page.locator('#app')).toHaveAttribute('data-explore-enabled','false');
  await expect(page.locator('#feedback')).toContainText('你的预测：距离达到最大');
  await expect(page.locator('#feedback')).toContainText('实际结果：距离达到最大');
  await expect(page.locator('#feedback')).toContainText('共速前 v后<v前');
  const lockedParams = await page.locator('#app').getAttribute('data-core-params');
  await dragCanvas(page, 160, 164, 260, 164);
  await expect(page.locator('#app')).toHaveAttribute('data-core-params', lockedParams);
  await expect(page.locator('#status')).toContainText('演示完成：Δx=0',{ timeout: 14_000 });
  await expect(page.locator('#readout')).toContainText('Δx=0.00');
  await expect(page.locator('#readout')).toContainText('t等=');
  await expect(page.locator('#formulaBox')).toBeVisible();
  await expect(page.locator('#explore')).toBeVisible();
  await expect(page.locator('#canvas')).toHaveAttribute('data-distance-graph','full');
  await expect(page.locator('#app')).toHaveAttribute('data-explore-enabled','true');
  const handleX = Number(await page.locator('#canvas').getAttribute('data-d-handle-x'));
  const handleY = Number(await page.locator('#canvas').getAttribute('data-d-handle-y'));
  const finalParams = await page.locator('#app').getAttribute('data-core-params');
  await dragCanvas(page, handleX, handleY, handleX + 80, handleY);
  await expect(page.locator('#app')).not.toHaveAttribute('data-core-params', finalParams);
});

test('B1-12 三种预测都进入完整反馈闭环', async ({ page }) => {
  for (const [choice, label] of [['meet','两车相遇'],['max','距离达到最大'],['min','距离达到最小']]) {
    await page.goto(pageUrl('pursuit.html'));
    await page.locator('#play').click();
    await expect(page.locator('#app')).toHaveAttribute('data-phase','prediction',{ timeout: 8_000 });
    await page.locator(`[data-prediction="${choice}"]`).click();
    await page.locator('#play').click();
    await expect(page.locator('#feedback')).toContainText(`你的预测：${label}`);
    await expect(page.locator('#feedback')).toContainText('实际结果：距离达到最大');
    await expect(page.locator('#feedback')).toContainText('距离变化率 v前−v后 在共速处由正变负');
  }
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
  await expect(page.locator('#app')).toHaveAttribute('data-running','false');
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
  await expect(page.locator('[data-mode="belt"]')).toHaveClass(/active/);
  await page.locator('[data-mode="push"]').click();
  await page.locator('#forceRange').fill('47');
  await page.locator('#musRange').fill('0.45');
  await page.locator('#mukRange').evaluate(el => { el.value = '0.40'; el.dispatchEvent(new Event('input', { bubbles: true })); });
  await page.locator('#musRange').fill('0.1');
  await expect(page.locator('#mukRange')).toHaveAttribute('max','0.1');
  await expect(page.locator('#mukRange')).toHaveValue('0.1');
  await expect(page.locator('#mukOut')).toHaveText('0.10');
  await page.locator('#resetBtn').click();
  await expect(page.locator('#forceRange')).toHaveValue('0');
  await expect(page.locator('#forceOut')).toHaveText('0');
  await expect(page.locator('#musRange')).toHaveValue('0.25');
  await expect(page.locator('#musOut')).toHaveText('0.25');
  await expect(page.locator('#mukRange')).toHaveAttribute('max','0.25');
  await expect(page.locator('[data-mode="push"]')).toHaveClass(/active/);
});

test('B1-18 自动模式同样逐段停留在静止、临界和滑动证据', async ({ page }) => {
  await page.goto(pageUrl('friction.html'));
  await page.locator('[data-p1="follow"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','static-evidence',{ timeout: 12_000 });
  await expect(page.locator('#app')).toHaveAttribute('data-running','false');
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','critical-evidence',{ timeout: 5_000 });
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','slide-evidence',{ timeout: 6_000 });
  await expect(page.locator('#stateText')).toHaveText('已经滑动');
});

test('B1-24 逐点取证后揭示公式且静摩擦按需求取值', async ({ page }) => {
  await page.goto(pageUrl('newton-second.html'));
  await expect(page.locator('#formula')).toBeHidden();
  await expect(page.locator('#simulationNote')).toContainText('理想仿真');
  await expect(page.locator('#simulationNote')).toContainText('不是独立实测数据');
  await expect(page.locator('#playBtn')).toBeDisabled();
  await expect(page.locator('#canvas')).toHaveAttribute('data-secondary-axis','mass');
  await expect(page.locator('body')).not.toContainText('实验二：固定 F合，改画 a-1/m');
  await page.locator('[data-predict-force="double"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','force-revealed',{ timeout: 7_000 });
  await expect(page.locator('#dataBody tr')).toHaveCount(4);
  await expect(page.locator('#canvas')).toHaveAttribute('data-force-origin','physical-boundary-not-measured');
  await expect(page.locator('#formula')).toBeHidden();
  await page.locator('#playBtn').click();
  await expect(page.locator('#app')).toHaveAttribute('data-phase','mass-predict-transform',{ timeout: 7_000 });
  await expect(page.locator('#dataBody tr')).toHaveCount(8);
  await page.locator('[data-predict-mass="inv"]').click();
  await page.locator('#playBtn').click();
  await expect(page.locator('#formula')).toBeVisible();
  await expect(page.locator('#canvas')).toHaveAttribute('data-secondary-axis','inverse-mass');
  await expect(page.locator('#canvas')).toHaveAttribute('data-mass-origin','model-limit-extrapolated-not-measured');
  await expect(page.locator('#task')).toContainText('原点对应无限质量极限，不是测量点');
  await expect(page.locator('#roughText')).toContainText('光滑面：无摩擦');
  await page.locator('[data-surface="static"]').click();
  await expect(page.locator('#roughText')).toContainText('fₛ=F外=6.0 N');
  await expect(page.locator('#roughText')).toContainText('F合=0.0 N');
  await page.locator('#resetBtn').click();
  await expect(page.locator('[data-surface="smooth"]')).toHaveClass(/active/);
  await expect(page.locator('#roughText')).toContainText('光滑面：无摩擦');
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
  const ci = fs.readFileSync(path.join(root, '.github', 'workflows', 'ci.yml'), 'utf8');
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
  expect(checks[1].text).not.toContain('连续播放人走路和传送带');
  expect(checks[2].text).toContain('理想仿真说明');
  expect(checks[2].text).toContain('3、6、9、12 N` 四档');
  expect(checks[2].text).toContain('约 15～30 秒');
  expect(checks[2].text).not.toContain('质量和加速度是"原因→结果"关系');
  expect(checks[2].text).toContain('一般情形必须按矢量或正交分量求和');
  expect(ci).toContain('name: Run full repository gate');
  expect(ci).toContain('run: npm run check');
  expect(ci).not.toContain('run: node scripts/check.js --strict');
});
