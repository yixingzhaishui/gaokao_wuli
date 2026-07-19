const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', file)).href;

const lessons = [
  { id: 'B3-01', file: 'bx3/charge-electrification.html', correct: 'disconnect', state: '#status', text: '最后移开带电体' },
  { id: 'B3-02', file: 'bx3/coulomb.html', correct: 'same-attract', state: '#type-val', text: '引力' },
  { id: 'B3-03', file: 'bx3/charges-field.html', correct: 'e-same', state: '#fd', text: '反 E 方向' },
  { id: 'B3-04', file: 'bx3/field-lines.html', correct: 'symmetry', state: '#dir', text: '-90°' },
  { id: 'B3-05', file: 'bx3/equipotential.html', correct: 'zero', state: '#state', text: 'W≈0' },
  { id: 'B3-06', file: 'bx3/potential-difference.html', correct: 'positive', state: '#wv', text: '32.0' },
  { id: 'B3-07', file: 'bx3/electric-potential-energy.html', correct: 'phi-same', state: '#work', text: '12.4' },
  { id: 'B3-08', file: 'bx3/electric-work.html', correct: 'same', state: '#w1', text: '12.8' },
  { id: 'B3-09', file: 'bx3/capacitor-lab.html', correct: 'decay', state: '#statev', text: '正在放电' },
  { id: 'B3-10', file: 'bx3/capacitor.html', correct: 'q-same', active: '[data-mode="isolated"]' },
  { id: 'B3-11', file: 'bx3/current.html', correct: 'rate', state: '#record', text: '累计' },
  { id: 'B3-12', file: 'bx3/resistance-law.html', correct: 'r-up', state: '#resv', text: '0.100' },
  { id: 'B3-13', file: 'bx3/ohm-law.html', correct: 'cannot', state: '#judge', text: '非线性' },
  { id: 'B3-14', file: 'bx3/series-parallel.html', correct: 'smaller', state: '#reqv', text: '2.00' },
  { id: 'B3-15', file: 'bx3/joule-law.html', correct: 'w-greater', active: '[data-mode="motor"]' },
  { id: 'B3-16', file: 'bx3/closed-circuit-law.html', correct: 'u0-imax', state: '#uv', text: '0.00' },
  { id: 'B3-17', file: 'bx3/emf.html', correct: 'nonstatic', state: '#statev', text: '闭合回路' },
  { id: 'B3-18', file: 'exp/multimeter-practice-lab.html', correct: 'reject', state: '#status', text: '不通过' },
  { id: 'B3-19', file: 'bx3/em-wave.html', correct: 'half', state: '#lam-val', text: '75' },
  { id: 'B3-20', file: 'bx3/energy-sustainability.html', correct: 'no', changed: '#co2v' },
  { id: 'B3-21', file: 'bx3/electrostatic-induction.html', correct: 'zero', state: '#readout', text: '静电屏蔽' },
  { id: 'B3-22', file: 'bx3/household-circuit.html', correct: 'current-up', state: '#pLab', text: '7500 W' },
  { id: 'B3-23', file: 'exp/capacitor-charge-discharge-lab.html', correct: 'slower', state: '#readout', text: '4.00 s' },
  { id: 'B3-24', file: 'bx3/em-wave-applications.html', correct: 'medium', state: '#status', text: '光纤通信' },
  { id: 'B3-25', file: 'bx3/magnetic-phenomena.html', correct: 'deflect', state: '#compassValue', text: '+55°' },
  { id: 'B3-26', file: 'bx3/magnetic-field.html', correct: 'zero', state: '#forceValue', text: '0.000 N' },
  { id: 'B3-27', file: 'bx3/magnetic-flux-induction.html', correct: 'none', state: '#fluxValue', text: '0.080 Wb' }
];

test.describe.configure({ mode: 'serial' });
test.setTimeout(180_000);

test('B3-01～B3-27 的默认演示均在公式之前，且正文只有一个对应 iframe', async () => {
  const markdown = fs.readFileSync(path.join(root, 'bx3.md'), 'utf8');
  const sections = markdown.split(/(?=<h4 id=)/);
  for (const lesson of lessons) {
    const section = sections.find(item => item.includes(`>${lesson.id} `));
    expect(section, `${lesson.id} section`).toBeTruthy();
    expect(section).toContain('#### 本页主问题与引导演示');
    expect((section.match(/<iframe/g) || []).length, `${lesson.id} iframe count`).toBe(1);
    const formulaIndex = section.indexOf('公式首次使用卡');
    if (formulaIndex >= 0) expect(section.indexOf('<iframe'), `${lesson.id} guide order`).toBeLessThan(formulaIndex);
  }
});

test('B3 27 个节点完成逐页预测—证据—解释—边界—迁移，并改变真实物理状态', async ({ browser }) => {
  for (const lesson of lessons) {
    const page = await browser.newPage({ viewport: { width: 1040, height: 940 } });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson.file));

    const guide = page.locator(`[data-b3-guide="${lesson.id}"]`);
    const canvas = page.locator('canvas');
    await expect(guide, `${lesson.id} guide`).toBeVisible();
    await expect(canvas).toHaveAttribute('data-guide-stage', 'predict');
    await expect(page.locator('.b3-guide-veil')).toBeVisible();
    expect(Number(await canvas.evaluate(element => getComputedStyle(element).opacity))).toBeLessThan(0.5);
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).toBe('none');
    const formula = page.locator('.formula').first();
    if (await formula.count()) await expect(formula, `${lesson.id} formula delayed`).toBeHidden();
    const before = lesson.changed ? await page.locator(lesson.changed).textContent() : null;

    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.b3-guide-verify').click();

    await expect(canvas).toHaveAttribute('data-guide-stage', 'explore');
    await expect(page.locator('.b3-guide-veil')).toHaveCount(0);
    expect(Number(await canvas.evaluate(element => getComputedStyle(element).opacity))).toBe(1);
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).not.toBe('none');
    if (await formula.count()) await expect(formula, `${lesson.id} formula revealed`).toBeVisible();
    for (const label of ['你的预测：', '实际结果：', '画面证据：', '为什么：', '模型边界：', '高考迁移：']) {
      await expect(guide.locator('.b3-guide-feedback'), `${lesson.id} ${label}`).toContainText(label);
    }
    await expect(guide.locator('.b3-guide-replay')).toBeVisible();

    if (lesson.state) await expect(page.locator(lesson.state), `${lesson.id} evidence state`).toContainText(lesson.text);
    if (lesson.active) await expect(page.locator(lesson.active), `${lesson.id} active condition`).toHaveClass(/(?:on|active)/);
    if (lesson.changed) await expect.poll(() => page.locator(lesson.changed).textContent(), { message: `${lesson.id} evidence changed` }).not.toBe(before);
    expect(errors, `${lesson.id} runtime errors`).toEqual([]);
    await page.close();
  }
});

test('B3-25～B3-27 的正反条件均真实改变读数', async ({ page }) => {
  await page.goto(pageUrl('bx3/magnetic-phenomena.html'));
  await page.locator('[data-guide-choice="deflect"]').click();
  await page.locator('.b3-guide-verify').click();
  await page.locator('#reverse').click();
  await expect(page.locator('#compassValue')).toContainText('−55°');

  await page.goto(pageUrl('bx3/magnetic-field.html'));
  await page.locator('[data-guide-choice="zero"]').click();
  await page.locator('.b3-guide-verify').click();
  await page.locator('#perpendicular').click();
  await expect(page.locator('#forceValue')).toHaveText('0.240 N');

  await page.goto(pageUrl('bx3/magnetic-flux-induction.html'));
  await page.locator('[data-guide-choice="none"]').click();
  await page.locator('.b3-guide-verify').click();
  await page.locator('#changeFlux').click();
  await expect.poll(async () => Number((await page.locator('#currentValue').textContent()).replace(' A', '')), { message: 'closed changing flux current' }).not.toBe(0);
  await page.locator('#openCircuit').click();
  await expect(page.locator('#emfValue')).not.toHaveText('0.000 V');
  await expect(page.locator('#currentValue')).toHaveText('0.000 A');
});

test('B3 27 个引导演示在 390×844 减少动态模式可完成且无溢出', async ({ browser }) => {
  for (const lesson of lessons) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson.file));
    await expect(page.locator('html')).toHaveAttribute('data-b3-motion', 'reduce');
    const guide = page.locator(`[data-b3-guide="${lesson.id}"]`);
    await expect(guide.locator('.b3-guide-motion')).toContainText('减少动态');
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.b3-guide-verify').click();
    await expect(guide.locator('.b3-guide-feedback')).toBeVisible();
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll, `${lesson.id} horizontal overflow`).toBeLessThanOrEqual(widths.client + 2);
    expect(errors, `${lesson.id} reduced-motion runtime errors`).toEqual([]);
    await page.close();
  }
});

test('全部 25 个原 bx3 页面与 3 个新增页面均声明统一减少动态支持', () => {
  const dir = path.join(root, 'anim', 'bx3');
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.html')).sort();
  expect(files.length).toBe(28);
  for (const file of files) {
    const html = fs.readFileSync(path.join(dir, file), 'utf8');
    expect(html, file).toContain('guided-lesson.js');
  }
  const script = fs.readFileSync(path.join(dir, 'guided-lesson.js'), 'utf8');
  expect(script).toContain("matchMedia('(prefers-reduced-motion: reduce)')");
  expect(script).toContain('animation-duration: .001ms');
});
