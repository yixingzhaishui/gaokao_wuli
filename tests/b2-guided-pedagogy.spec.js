const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = file => pathToFileURL(path.join(root, 'anim', 'bx2', file)).href;

const lessons = [
  { id: 'B2-01', file: 'curved-condition.html', correct: 'turn', state: '#angleText', text: '90°' },
  { id: 'B2-02', file: 'motion-composition.html', correct: 'same', state: '#vxText', text: '4.00' },
  { id: 'B2-03', file: 'projectile.html', correct: 'same', state: '#vText', text: '22.0' },
  { id: 'B2-05', file: 'circular-basics.html', correct: 'double', state: '#vText', text: '6.28' },
  { id: 'B2-07', file: 'conical-pendulum.html', correct: 'same', changed: '#tensionText' },
  { id: 'B2-09', file: 'gravitation.html', correct: 'quarter', changed: '#rText' },
  { id: 'B2-10', file: 'kepler-law.html', correct: 'longer', changed: '#periodText' },
  { id: 'B2-11', file: 'satellite.html', correct: 'slower', changed: '#rText' },
  { id: 'B2-13', file: 'orbit-transfer.html', correct: 'ellipse', state: '#status', text: '转移椭圆' },
  { id: 'B2-15', file: 'work.html', correct: 'zero', state: '#status', text: '零功' },
  { id: 'B2-16', file: 'power.html', correct: 'quadruple', state: '#avgText', text: '60.0 W' },
  { id: 'B2-17', file: 'vehicle-start.html', correct: 'decrease', state: '#status', text: '接近最大速度' },
  { id: 'B2-19', file: 'gravitational-potential.html', correct: 'unchanged', state: '#h0Text', text: '5.0 m' },
  { id: 'B2-20', file: 'elastic-potential.html', correct: 'same', state: '#status', text: '同势能' },
  { id: 'B2-21', file: 'mechanical-energy.html', correct: 'internal', state: '#status', text: '机械能不守恒' },
  { id: 'B2-24', file: 'relativity.html', correct: 'relativistic', state: '#status', text: '接近光速' },
  { id: 'B2-25', file: 'centrifugal-phenomenon.html', correct: 'insufficient', state: '#status', text: '向心力不足' }
];

test.describe.configure({ mode: 'serial' });
test.setTimeout(120_000);

test('B2 剩余教学节点的引导演示位于公式之前', async () => {
  const markdown = fs.readFileSync(path.join(root, 'bx2.md'), 'utf8');
  const sections = markdown.split(/(?=<h4 id=)/);
  for (const lesson of lessons) {
    const section = sections.find(item => item.includes(`>${lesson.id} `));
    expect(section, `${lesson.id} section`).toBeTruthy();
    expect((section.match(/<iframe/g) || []).length, `${lesson.id} iframe count`).toBe(1);
    expect(section.indexOf('<iframe'), `${lesson.id} guide order`).toBeLessThan(section.indexOf('公式首次使用卡'));
    expect(section).toContain('本页主问题与引导演示');
  }
});

test('B2 17 个节点完成预测—证据—解释—迁移并真实改变画面状态', async ({ browser }) => {
  for (const lesson of lessons) {
    const page = await browser.newPage({ viewport: { width: 980, height: 900 } });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson.file));

    const canvas = page.locator('canvas');
    const formula = page.locator('.formula').first();
    const guide = page.locator(`[data-b2-guide="${lesson.id}"]`);
    await expect(guide, `${lesson.id} guide`).toBeVisible();
    await expect(canvas).toHaveAttribute('data-guide-stage', 'predict');
    await expect(formula, `${lesson.id} formula delayed`).toBeHidden();
    await expect(page.locator('.b2-guide-veil'), `${lesson.id} answer veil`).toBeVisible();
    expect(Number(await canvas.evaluate(element => getComputedStyle(element).opacity))).toBeLessThan(0.5);
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).toBe('none');

    const before = lesson.changed ? await page.locator(lesson.changed).textContent() : null;
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.b2-guide-verify').click();

    await expect(canvas).toHaveAttribute('data-guide-stage', 'explore');
    await expect(formula, `${lesson.id} formula revealed`).toBeVisible();
    await expect(page.locator('.b2-guide-veil')).toHaveCount(0);
    expect(Number(await canvas.evaluate(element => getComputedStyle(element).opacity))).toBe(1);
    await expect(guide.locator('.b2-guide-feedback')).toContainText('你的预测：');
    await expect(guide.locator('.b2-guide-feedback')).toContainText('实际结果：');
    await expect(guide.locator('.b2-guide-feedback')).toContainText('画面证据：');
    await expect(guide.locator('.b2-guide-feedback')).toContainText('为什么：');
    await expect(guide.locator('.b2-guide-feedback')).toContainText('高考迁移：');
    expect(await canvas.evaluate(element => getComputedStyle(element).pointerEvents)).not.toBe('none');

    if (lesson.changed) {
      await expect.poll(() => page.locator(lesson.changed).textContent(), { message: `${lesson.id} evidence changed` }).not.toBe(before);
    } else {
      await expect(page.locator(lesson.state), `${lesson.id} evidence state`).toContainText(lesson.text);
    }
    expect(errors, `${lesson.id} runtime errors`).toEqual([]);
    await page.close();
  }
});

test('B2 17 个引导演示在 390×844 可完成且无横向溢出', async ({ browser }) => {
  for (const lesson of lessons) {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    const errors = [];
    page.on('console', message => { if (message.type() === 'error') errors.push(`console: ${message.text()}`); });
    page.on('pageerror', error => errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson.file));
    const guide = page.locator(`[data-b2-guide="${lesson.id}"]`);
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.b2-guide-verify').click();
    await expect(guide.locator('.b2-guide-feedback')).toBeVisible();
    const widths = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
    expect(widths.scroll, `${lesson.id} horizontal overflow`).toBeLessThanOrEqual(widths.client);
    expect(errors, `${lesson.id} mobile runtime errors`).toEqual([]);
    await page.close();
  }
});
