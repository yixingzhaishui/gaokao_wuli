const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = (file, id) => {
  const url = new URL(pathToFileURL(path.join(root, file)).href);
  if (id) url.searchParams.set('lesson', id);
  return url.href;
};

const lessons = [
  ['M-01', 'anim/bx1/connecting-body.html', 'constraint'],
  ['M-02', 'anim/bx1/plank-block.html', 'compare'],
  ['M-03', 'anim/bx1/conveyor-belt.html', 'right'],
  ['M-04', 'anim/bx1/spring-instant.html', 'same'],
  ['M-05', 'anim/bx2/projectile.html', 'same'],
  ['M-06', 'anim/bx2/vertical-circle.html', 'zero'],
  ['M-07', 'anim/bx2/satellite.html', 'slower'],
  ['M-08', 'anim/bx2/vehicle-start.html', 'decrease'],
  ['M-09', 'anim/bx2/work-energy-relation.html', 'depends'],
  ['M-10', 'anim/xb1/momentum-collision.html', 'exchange'],
  ['M-11', 'anim/xb2/rail-rod.html', 'chain'],
  ['M-12', 'anim/xb2/transformer.html', 'half'],
  ['M-13', 'anim/model/compound-field-particle.html', 'equal'],
  ['M-14', 'anim/xb3/pv-graph.html', 'path'],
  ['M-15', 'anim/xb3/nuclear-energy.html', 'absorb']
];

test.describe.configure({ mode: 'serial' });
test.setTimeout(180_000);

test('第9章15节均为一个主交互，且引导先于公式和自由探索', async () => {
  const markdown = fs.readFileSync(path.join(root, 'models.md'), 'utf8');
  const sections = markdown.split(/(?=<h4 id="model-)/).slice(1);
  expect(sections).toHaveLength(15);
  for (const [id] of lessons) {
    const section = sections.find(item => item.includes(`>${id} `));
    expect(section, `${id} section`).toBeTruthy();
    expect((section.match(/<iframe/g) || []).length, `${id} primary iframe`).toBe(1);
    expect(section).toContain(`?lesson=${id}`);
    expect(section).toContain('#### 本页主问题与引导演示');
    expect(section.indexOf('<iframe'), `${id} evidence before formula`).toBeLessThan(section.indexOf('公式首次使用卡'));
    expect(section).toContain('来源审核中');
  }
  expect(markdown).not.toContain('```text');
  expect(markdown).not.toMatch(/\b[34]\s*题[:：]/);
  expect(markdown).toContain('0题可发布；来源复核中');

  const anchors = new Set([...markdown.matchAll(/<h4 id="([^"]+)"/g)].map(match => match[1]));
  const links = [...markdown.matchAll(/models\?id=([^)]+)/g)].map(match => match[1]);
  expect(links.filter(anchor => !anchors.has(anchor)), 'chapter fragment links').toEqual([]);
});

test('第9章15个主交互真实完成预测—证据—解释—边界—迁移', async ({ browser }) => {
  for (const [id, file, correct] of lessons) {
    const page = await browser.newPage({ viewport: { width: 1000, height: 920 } });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(file, id));

    const guide = page.locator(`[data-model-guide="${id}"]`);
    const canvas = page.locator('canvas').first();
    await expect(guide, `${id} guide`).toBeVisible();
    await expect(canvas).toHaveAttribute('data-guide-stage', 'predict');
    await expect(page.locator('.model-guide-veil')).toBeVisible();
    expect(Number(await canvas.evaluate(element => getComputedStyle(element).opacity))).toBeLessThan(0.5);
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).toBe('none');

    await guide.locator(`[data-guide-choice="${correct}"]`).click();
    await guide.locator('.model-guide-verify').click();
    await expect(canvas).toHaveAttribute('data-guide-stage', 'explore');
    await expect(page.locator('.model-guide-veil')).toHaveCount(0);
    const feedback = guide.locator('.model-guide-feedback');
    for (const label of ['你的预测：', '实际结果：', '画面证据：', '为什么：', '模型边界：', '高考迁移：']) {
      await expect(feedback, `${id} ${label}`).toContainText(label);
    }
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).not.toBe('none');
    expect(errors, `${id} runtime errors`).toEqual([]);
    await page.close();
  }
});

test('第9章15个主交互在390×844减少动态模式可完成且无横向溢出', async ({ browser }) => {
  for (const [id, file, correct] of lessons) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(file, id));
    const guide = page.locator(`[data-model-guide="${id}"]`);
    await expect(page.locator('html')).toHaveAttribute('data-model-motion', 'reduce');
    await expect(guide.locator('.model-guide-motion')).toContainText('减少动态');
    await guide.locator(`[data-guide-choice="${correct}"]`).click();
    await guide.locator('.model-guide-verify').click();
    await expect(guide.locator('.model-guide-feedback')).toBeVisible();
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll, `${id} horizontal overflow`).toBeLessThanOrEqual(widths.client);
    expect(errors, `${id} mobile runtime errors`).toEqual([]);
    await context.close();
  }
});

test('结构化诊断台拒绝信息不足，并在唯一候选后才显示公式', async ({ page }) => {
  await page.goto(pageUrl('anim/model/model-selector.html'));
  await expect(page.locator('#recommend')).toHaveText('尚未诊断');
  await expect(page.locator('#formula')).toBeHidden();
  await expect(page.locator('#playBtn')).toBeDisabled();

  await page.selectOption('#factObject', 'particle');
  await page.click('#diagnoseBtn');
  await expect(page.locator('#recommend')).toContainText('信息不足');
  await expect(page.locator('#formula')).toBeHidden();

  await page.selectOption('#factObject', 'gas');
  await page.selectOption('#factProcess', 'state-change');
  await page.selectOption('#factConstraint', 'path-specified');
  await page.selectOption('#factTarget', 'work');
  await page.click('#diagnoseBtn');
  await expect(page.locator('#recommend')).toHaveText('M-14 气体状态变化模型');
  await expect(page.locator('#formula')).toBeVisible();
  await expect(page.locator('#formula')).toContainText('有向面积');
  await expect(page.locator('#stateBox')).toContainText('直线路径 W=');
});

test('M06/M09/M12-M15 的关键物理边界已写入当前实现', async () => {
  const read = file => fs.readFileSync(path.join(root, file), 'utf8');
  const vertical = read('anim/bx2/vertical-circle.html');
  expect(vertical).toContain('r=mv/(|q|B)');
  expect(vertical).not.toContain('r=mv/qB');

  const workEnergy = read('anim/bx2/work-energy-relation.html');
  expect(workEnergy).toContain('本固定斜面中摩擦力做负功');
  expect(workEnergy).toContain('仅在本固定斜面特例中');

  const transformer = read('anim/xb2/transformer.html');
  expect(transformer).toContain('理想变压器、副边纯电阻负载');

  const selector = read('anim/model/model-selector.html');
  expect(selector).not.toContain('.includes(');
  expect(selector).toContain("R=mv/(|q|B)");
  expect(selector).toContain('直线路径 W=');

  const nuclear = read('anim/model/nuclear-mass-energy.html');
  expect(nuclear).toContain('NUCLIDES');
  expect(nuclear).toContain('离散实核素平均结合能');
  expect(nuclear).not.toContain('bindingAt');
});
