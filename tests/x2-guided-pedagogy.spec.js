const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root=path.resolve(__dirname,'..');
const pageUrl=lesson=>`${pathToFileURL(path.join(root,'anim','xb2',lesson.file)).href}?lesson=${lesson.id}`;
const lessons=[
  ['X2-01','magnetic-field.html','b'],['X2-02','ampere-force.html','up'],['X2-03','ampere-force.html','down'],
  ['X2-04','lorentz-force.html','flip'],['X2-05','magnetic-circle.html','ccw'],['X2-06','magnetic-critical.html','left'],
  ['X2-07','magnetic-flux.html','zero'],['X2-08','lenz-law.html','no'],['X2-09','lenz-law.html','oppose'],
  ['X2-10','faraday-law.html','larger'],['X2-11','rail-rod.html','oppose'],['X2-12','self-induction.html','no'],
  ['X2-13','mutual-induction.html','no'],['X2-14','ac-generation.html','projection'],['X2-15','ac-values.html','zero'],
  ['X2-16','transformer.html','no'],['X2-17','power-transmission.html','current'],['X2-18','sensor.html','types'],
  ['X2-19','eddy-current.html','slip'],['X2-20','lc-oscillation.html','zero'],['X2-21','maxwell-em-theory.html','same'],
  ['X2-22','em-wave-transmission.html','no'],['X2-23','em-spectrum.html','context'],['X2-24','generator-motor.html','zero']
].map(([id,file,correct])=>({id,file,correct}));

test.describe.configure({mode:'serial'});
test.setTimeout(240_000);

test('X2-01～X2-24 正文均只有一个对应 iframe，且引导演示在公式前',()=>{
  const markdown=fs.readFileSync(path.join(root,'xb2.md'),'utf8'),sections=markdown.split(/(?=<h4 id=)/);
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

test('X2 24 个节点完成预测—真实状态—证据—解释—边界—迁移',async({browser})=>{
  for(const lesson of lessons){
    const page=await browser.newPage({viewport:{width:1040,height:940}});
    const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push(`console: ${m.text()}`)});page.on('pageerror',e=>errors.push(`pageerror: ${e.message}`));
    await page.goto(pageUrl(lesson));
    const guide=page.locator(`[data-x2-guide="${lesson.id}"]`),canvas=page.locator('canvas');
    await expect(guide,`${lesson.id} guide`).toBeVisible();await expect(canvas).toHaveAttribute('data-guide-stage','predict');await expect(page.locator('.x2-guide-veil')).toBeVisible();
    expect(Number(await canvas.evaluate(el=>getComputedStyle(el).opacity))).toBeLessThan(.5);expect(await canvas.evaluate(el=>getComputedStyle(el).pointerEvents)).toBe('none');
    const formula=page.locator('.formula').first();if(await formula.count())await expect(formula,`${lesson.id} delayed formula`).toBeHidden();
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();await guide.locator('.x2-guide-verify').click();
    await expect(canvas).toHaveAttribute('data-guide-stage','explore');await expect(page.locator('.x2-guide-veil')).toHaveCount(0);if(await formula.count())await expect(formula,`${lesson.id} revealed formula`).toBeVisible();
    for(const label of ['你的预测：','实际结果：','画面证据：','为什么：','模型边界：','高考迁移：'])await expect(guide.locator('.x2-guide-feedback'),`${lesson.id} ${label}`).toContainText(label);
    await expect(guide.locator('.x2-guide-replay')).toBeVisible();expect(errors,`${lesson.id} runtime errors`).toEqual([]);await page.close();
  }
});

test('X2 24 个引导演示在 390×844 减少动态模式可完成且无横向溢出',async({browser})=>{
  for(const lesson of lessons){
    const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'}),errors=[];
    page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});page.on('pageerror',e=>errors.push(e.message));await page.goto(pageUrl(lesson));
    await expect(page.locator('html')).toHaveAttribute('data-x2-motion','reduce');const guide=page.locator(`[data-x2-guide="${lesson.id}"]`);await expect(guide.locator('.x2-guide-motion')).toContainText('减少动态');
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();await guide.locator('.x2-guide-verify').click();await expect(guide.locator('.x2-guide-feedback')).toBeVisible();
    const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));expect(widths.scroll,`${lesson.id} overflow`).toBeLessThanOrEqual(widths.client+2);expect(errors,`${lesson.id} runtime errors`).toEqual([]);await page.close();
  }
});

test('全部 22 个 xb2 动画声明统一引导与减少动态支持',()=>{
  const dir=path.join(root,'anim','xb2'),files=fs.readdirSync(dir).filter(file=>file.endsWith('.html')).sort();expect(files.length).toBe(22);
  for(const file of files)expect(fs.readFileSync(path.join(dir,file),'utf8'),file).toContain('guided-lesson.js');
  const script=fs.readFileSync(path.join(dir,'guided-lesson.js'),'utf8');expect(script).toContain("matchMedia('(prefers-reduced-motion: reduce)')");expect(script).toContain('animation-duration:.001ms');
});
