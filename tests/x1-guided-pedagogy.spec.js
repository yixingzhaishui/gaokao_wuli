const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root = path.resolve(__dirname, '..');
const pageUrl = lesson => `${pathToFileURL(path.join(root, 'anim', 'xb1', lesson.file)).href}?lesson=${lesson.id}`;
const lessons = [
  ['X1-01','momentum.html','reverse'],['X1-02','impulse.html','same'],['X1-03','impulse.html','smaller'],
  ['X1-04','momentum-collision.html','catch'],['X1-05','momentum-collision.html','exchange'],['X1-06','momentum-collision.html','common'],
  ['X1-07','recoil.html','left'],['X1-08','shm.html','vmax'],['X1-09','pendulum.html','no'],['X1-10','shm.html','turn'],
  ['X1-11','damped-vibration.html','critical'],['X1-12','forced-resonance.html','shift'],['X1-13','wave-basics.html','no'],
  ['X1-14','wave-basics.html','fixed'],['X1-15','wave-basics.html','axes'],['X1-16','wave-interference.html','amplitude'],
  ['X1-17','wave-diffraction.html','yes'],['X1-18','doppler.html','higher'],['X1-19','refraction.html','toward'],
  ['X1-20','total-reflection.html','critical'],['X1-21','double-slit.html','wider'],['X1-22','light-diffraction.html','wider'],
  ['X1-23','polarization.html','zero'],['X1-24','photoelectric.html','no'],['X1-25','wave-reflection-refraction.html','slower'],
  ['X1-26','laser.html','half'],['X1-27','fiber-optic.html','reject']
].map(([id,file,correct])=>({id,file,correct}));

test.describe.configure({ mode: 'serial' });
test.setTimeout(240_000);

test('X1-01～X1-27 正文均只有一个对应 iframe，且引导演示在公式前', () => {
  const markdown=fs.readFileSync(path.join(root,'xb1.md'),'utf8');
  const sections=markdown.split(/(?=<h4 id=)/);
  for(const lesson of lessons){
    const section=sections.find(item=>item.includes(`>${lesson.id} `));
    expect(section,`${lesson.id} section`).toBeTruthy();
    expect(section).toContain('#### 本页主问题与引导演示');
    expect((section.match(/<iframe/g)||[]).length,`${lesson.id} iframe count`).toBe(1);
    expect(section).toContain(`lesson=${lesson.id}`);
    const formulaIndex=section.indexOf('公式首次使用卡');
    if(formulaIndex>=0)expect(section.indexOf('<iframe'),`${lesson.id} guide before formula`).toBeLessThan(formulaIndex);
  }
});

test('X1 27 个节点完成预测—真实状态—证据—解释—边界—迁移', async ({ browser }) => {
  for(const lesson of lessons){
    const page=await browser.newPage({viewport:{width:1040,height:940}});
    const errors=[];page.on('console',message=>{if(message.type()==='error')errors.push(`console: ${message.text()}`);});page.on('pageerror',error=>errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson));
    const guide=page.locator(`[data-x1-guide="${lesson.id}"]`),canvas=page.locator('canvas');
    await expect(guide,`${lesson.id} guide`).toBeVisible();
    await expect(canvas).toHaveAttribute('data-guide-stage','predict');
    await expect(page.locator('.x1-guide-veil')).toBeVisible();
    expect(Number(await canvas.evaluate(element=>getComputedStyle(element).opacity))).toBeLessThan(.5);
    expect(await canvas.evaluate(element=>getComputedStyle(element).pointerEvents)).toBe('none');
    const formula=page.locator('.formula').first();if(await formula.count())await expect(formula,`${lesson.id} delayed formula`).toBeHidden();
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();
    await guide.locator('.x1-guide-verify').click();
    await expect(canvas).toHaveAttribute('data-guide-stage','explore');
    await expect(page.locator('.x1-guide-veil')).toHaveCount(0);
    if(await formula.count())await expect(formula,`${lesson.id} revealed formula`).toBeVisible();
    for(const label of ['你的预测：','实际结果：','画面证据：','为什么：','模型边界：','高考迁移：'])await expect(guide.locator('.x1-guide-feedback'),`${lesson.id} ${label}`).toContainText(label);
    await expect(guide.locator('.x1-guide-replay')).toBeVisible();
    expect(errors,`${lesson.id} runtime errors`).toEqual([]);
    await page.close();
  }
});

test('X1 27 个引导演示在 390×844 减少动态模式可完成且无横向溢出', async ({ browser }) => {
  for(const lesson of lessons){
    const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});
    const errors=[];page.on('console',message=>{if(message.type()==='error')errors.push(`console: ${message.text()}`);});page.on('pageerror',error=>errors.push(`pageerror: ${error.message}`));
    await page.goto(pageUrl(lesson));
    await expect(page.locator('html')).toHaveAttribute('data-x1-motion','reduce');
    const guide=page.locator(`[data-x1-guide="${lesson.id}"]`);
    await expect(guide.locator('.x1-guide-motion')).toContainText('减少动态');
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();await guide.locator('.x1-guide-verify').click();await expect(guide.locator('.x1-guide-feedback')).toBeVisible();
    const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));
    expect(widths.scroll,`${lesson.id} horizontal overflow`).toBeLessThanOrEqual(widths.client+2);expect(errors,`${lesson.id} reduced-motion errors`).toEqual([]);await page.close();
  }
});

test('全部 21 个 xb1 动画声明统一引导与减少动态支持', () => {
  const dir=path.join(root,'anim','xb1');const files=fs.readdirSync(dir).filter(file=>file.endsWith('.html')).sort();expect(files.length).toBe(21);
  for(const file of files)expect(fs.readFileSync(path.join(dir,file),'utf8'),file).toContain('guided-lesson.js');
  const script=fs.readFileSync(path.join(dir,'guided-lesson.js'),'utf8');expect(script).toContain("matchMedia('(prefers-reduced-motion: reduce)')");expect(script).toContain('animation-duration:.001ms');
});
