const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const lessons = [
  ['G-01', 'skill', 'graph-slope-area.html', 'delta'],
  ['G-02', 'skill', 'experiment-data-processing.html', 'recheck'],
  ['G-03', 'skill', 'instrument-reading.html', 'independent'],
  ['G-04', 'skill', 'error-analysis.html', 'no'],
  ['G-05', 'skill', 'circuit-experiment-design.html', 'outer'],
  ['G-06', 'skill', 'extreme-critical.html', 'zero'],
  ['G-07', 'skill', 'multi-process-motion.html', 'previous'],
  ['G-08', 'skill', 'energy-momentum-combo.html', 'root'],
  ['G-09', 'skill', 'electromagnetic-induction-combo.html', 'chain'],
  ['G-10', 'model', 'compound-field-particle.html', 'equal'],
  ['G-11', 'skill', 'real-world-modeling.html', 'constant'],
  ['G-12', 'skill', 'science-info-problem.html', 'slower']
].map(([id, dir, file, correct]) => ({id, dir, file, correct}));

const pageUrl = lesson => `${pathToFileURL(path.join(root, 'anim', lesson.dir, lesson.file)).href}?lesson=${lesson.id}`;

test.describe.configure({mode: 'serial'});
test.setTimeout(180_000);

test('G-01～G-12 顺序统一、每节单 iframe、预测先于公式', () => {
  const markdown = fs.readFileSync(path.join(root, 'gaokao-skills.md'), 'utf8');
  const sections = markdown.split(/(?=<h4 id=)/).filter(section => section.includes('>G-'));
  expect(sections).toHaveLength(12);
  sections.forEach((section, index) => {
    const id = `G-${String(index + 1).padStart(2, '0')}`;
    expect(section, `${id} order`).toContain(`>${id} `);
    expect(section).toContain('#### 本页主问题与引导演示');
    expect((section.match(/<iframe/g) || []).length, `${id} iframe count`).toBe(1);
    expect(section).toContain(`lesson=${id}`);
    const formula = section.indexOf('公式首次使用卡');
    if (formula >= 0) expect(section.indexOf('<iframe'), `${id} formula delayed`).toBeLessThan(formula);
  });
});

test('12 个节点完成预测—真实状态—证据—解释—边界—迁移', async ({browser}) => {
  for (const lesson of lessons) {
    const page = await browser.newPage({viewport: {width: 1040, height: 940}});
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson));
    const guide = page.locator(`[data-g-guide="${lesson.id}"]`);
    const canvas = page.locator('canvas');
    await expect(guide, `${lesson.id} guide`).toBeVisible();
    await expect(canvas).toHaveAttribute('data-guide-stage', 'predict');
    await expect(page.locator('.g-guide-veil')).toBeVisible();
    expect(Number(await canvas.evaluate(element => getComputedStyle(element).opacity))).toBeLessThan(.5);
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).toBe('none');
    const formula = page.locator('.formula').first();
    if (await formula.count()) await expect(formula, `${lesson.id} delayed formula`).toBeHidden();
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.g-guide-verify').click();
    await expect(canvas).toHaveAttribute('data-guide-stage', 'explore');
    await expect(page.locator('.g-guide-veil')).toHaveCount(0);
    if (await formula.count()) await expect(formula, `${lesson.id} revealed formula`).toBeVisible();
    for (const label of ['你的预测：', '实际结果：', '画面证据：', '为什么：', '模型边界：', '高考迁移：']) {
      await expect(guide.locator('.g-guide-feedback'), `${lesson.id} ${label}`).toContainText(label);
    }
    await expect(guide.locator('.g-guide-replay')).toBeVisible();
    expect(errors, `${lesson.id} runtime errors`).toEqual([]);
    await page.close();
  }
});

test('12 个引导演示在 390×844 减少动态模式可完成且无横向溢出', async ({browser}) => {
  for (const lesson of lessons) {
    const page = await browser.newPage({viewport: {width: 390, height: 844}, reducedMotion: 'reduce'});
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pageUrl(lesson));
    await expect(page.locator('html')).toHaveAttribute('data-g-motion', 'reduce');
    const guide = page.locator(`[data-g-guide="${lesson.id}"]`);
    await expect(guide.locator('.g-guide-motion')).toContainText('减少动态');
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.g-guide-verify').click();
    await expect(guide.locator('.g-guide-feedback')).toBeVisible();
    const widths = await page.evaluate(() => ({scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth}));
    expect(widths.scroll, `${lesson.id} overflow`).toBeLessThanOrEqual(widths.client + 2);
    expect(errors, `${lesson.id} runtime errors`).toEqual([]);
    await page.close();
  }
});

test('11 个 skill 页面和共用 G-10 模型声明统一引导与减少动态', () => {
  for (const lesson of lessons.filter(item => item.dir === 'skill')) {
    expect(fs.readFileSync(path.join(root, 'anim', lesson.dir, lesson.file), 'utf8'), lesson.id).toContain('src="guided-lesson.js"');
  }
  expect(fs.readFileSync(path.join(root, 'anim', 'model', 'compound-field-particle.html'), 'utf8')).toContain('../skill/guided-lesson.js');
  const script = fs.readFileSync(path.join(root, 'anim', 'skill', 'guided-lesson.js'), 'utf8');
  expect(script).toContain("matchMedia('(prefers-reduced-motion: reduce)')");
  expect(script).toContain('animation-duration:.001ms');
});
