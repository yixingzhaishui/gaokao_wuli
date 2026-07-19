const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root=path.resolve(__dirname,'..');
const pageUrl=lesson=>`${pathToFileURL(path.join(root,'anim',lesson.dir||'xb3',lesson.file)).href}?lesson=${lesson.id}`;
const lessons=[
  ['X3-01','molecular-theory.html','faster'],['X3-02','avogadro.html','double'],['X3-03','molecular-motion.html','collisions'],
  ['X3-04','molecular-force.html','switch'],['X3-05','internal-energy.html','up'],['X3-06','temperature-scale.html','equilibrium'],
  ['X3-07','gas-state-parameters.html','up'],['X3-08','boyle-law.html','temp'],['X3-09','charles-law.html','up'],
  ['X3-10','gas-state-parameters.html','up'],['X3-11','pv-graph.html','area'],['X3-12','gas-law.html','state'],
  ['X3-13','first-law.html','negative'],['X3-14','second-law.html','no'],['X3-15','energy-conservation-thermal.html','no'],
  ['X3-16','second-law.html','no'],['X3-17','crystal-amorphous.html','order'],['X3-18','surface-tension.html','components'],
  ['X3-19','photoelectric.html','no','xb1'],['X3-20','wave-particle.html','random'],['X3-21','atomic-structure.html','nucleus'],
  ['X3-22','bohr-energy-level.html','emit'],['X3-23','atomic-spectrum.html','levels'],['X3-24','nuclear-structure.html','sum'],
  ['X3-25','radioactive-decay.html','rule'],['X3-26','half-life.html','quarter'],['X3-27','nuclear-reaction.html','az'],
  ['X3-28','nuclear-energy.html','einstein'],['X3-29','binding-energy.html','average'],['X3-30','nuclear-fission.html','neutrons'],
  ['X3-31','nuclear-fusion.html','no'],['X3-32','particle-physics.html','no'],['X3-33','molecular-speed-distribution.html','spread'],
  ['X3-34','diffusion-brownian.html','ensemble'],['X3-35','materials-microstructure.html','structure'],['X3-36','capillary.html','zero'],
  ['X3-37','radioisotope-applications.html','years'],['X3-38','radiation-protection.html','no'],['X3-39','fundamental-interactions.html','no']
].map(([id,file,correct,dir])=>({id,file,correct,dir}));

test.describe.configure({mode:'serial'});
test.setTimeout(300_000);

test('X3-01～X3-39 顺序统一、每节单 iframe、主问题在公式前',()=>{
  const markdown=fs.readFileSync(path.join(root,'xb3.md'),'utf8'),sections=markdown.split(/(?=<h4 id=)/).filter(s=>s.includes('>X3-'));
  expect(sections).toHaveLength(39);
  sections.forEach((section,index)=>{
    const id=`X3-${String(index+1).padStart(2,'0')}`;
    expect(section,`${id} order`).toContain(`>${id} `);
    expect(section).toContain('#### 本页主问题与引导演示');
    expect((section.match(/<iframe/g)||[]).length,`${id} iframe count`).toBe(1);
    expect(section).toContain(`lesson=${id}`);
    const formula=section.indexOf('公式首次使用卡');if(formula>=0)expect(section.indexOf('<iframe'),`${id} formula delayed`).toBeLessThan(formula);
  });
});

test('X3 39 个节点完成预测—真实状态—证据—解释—边界—迁移',async({browser})=>{
  for(const lesson of lessons){
    const page=await browser.newPage({viewport:{width:1040,height:940}}),errors=[];
    page.on('console',m=>{if(m.type()==='error')errors.push(`console: ${m.text()}`)});page.on('pageerror',e=>errors.push(`pageerror: ${e.message}`));
    await page.goto(pageUrl(lesson));const guide=page.locator(`[data-x3-guide="${lesson.id}"]`),canvas=page.locator('canvas');
    await expect(guide,`${lesson.id} guide`).toBeVisible();await expect(canvas).toHaveAttribute('data-guide-stage','predict');await expect(page.locator('.x3-guide-veil')).toBeVisible();
    expect(Number(await canvas.evaluate(el=>getComputedStyle(el).opacity))).toBeLessThan(.5);expect(await canvas.evaluate(el=>getComputedStyle(el).pointerEvents)).toBe('none');
    const formula=page.locator('.formula').first();if(await formula.count())await expect(formula,`${lesson.id} delayed formula`).toBeHidden();
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();await guide.locator('.x3-guide-verify').click();await expect(canvas).toHaveAttribute('data-guide-stage','explore');
    await expect(page.locator('.x3-guide-veil')).toHaveCount(0);if(await formula.count())await expect(formula,`${lesson.id} revealed formula`).toBeVisible();
    for(const label of ['你的预测：','实际结果：','画面证据：','为什么：','模型边界：','高考迁移：'])await expect(guide.locator('.x3-guide-feedback'),`${lesson.id} ${label}`).toContainText(label);
    await expect(guide.locator('.x3-guide-replay')).toBeVisible();expect(errors,`${lesson.id} runtime errors`).toEqual([]);await page.close();
  }
});

test('X3 39 个引导演示在 390×844 减少动态模式可完成且无横向溢出',async({browser})=>{
  for(const lesson of lessons){
    const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'}),errors=[];
    page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});page.on('pageerror',e=>errors.push(e.message));await page.goto(pageUrl(lesson));
    await expect(page.locator('html')).toHaveAttribute('data-x3-motion','reduce');const guide=page.locator(`[data-x3-guide="${lesson.id}"]`);await expect(guide.locator('.x3-guide-motion')).toContainText('减少动态');
    await guide.locator(`[data-guide-choice="${lesson.correct}"]`).click();await guide.locator('.x3-guide-verify').click();await expect(guide.locator('.x3-guide-feedback')).toBeVisible();
    const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));expect(widths.scroll,`${lesson.id} overflow`).toBeLessThanOrEqual(widths.client+2);expect(errors,`${lesson.id} runtime errors`).toEqual([]);await page.close();
  }
});

test('全部 36 个 xb3 动画和共用光电页声明 X3 引导',()=>{
  const dir=path.join(root,'anim','xb3'),files=fs.readdirSync(dir).filter(file=>file.endsWith('.html')).sort();expect(files).toHaveLength(36);
  for(const file of files)expect(fs.readFileSync(path.join(dir,file),'utf8'),file).toContain('src="guided-lesson.js"');
  expect(fs.readFileSync(path.join(root,'anim','xb1','photoelectric.html'),'utf8')).toContain('../xb3/guided-lesson.js');
  const script=fs.readFileSync(path.join(dir,'guided-lesson.js'),'utf8');expect(script).toContain("matchMedia('(prefers-reduced-motion: reduce)')");expect(script).toContain('animation-duration:.001ms');
});
