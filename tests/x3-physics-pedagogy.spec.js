const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root=path.resolve(__dirname,'..');
const pageUrl=(file,id)=>`${pathToFileURL(path.join(root,'anim','xb3',file)).href}?lesson=${id}`;
async function completeGuide(page,id,choice){const guide=page.locator(`[data-x3-guide="${id}"]`);await guide.locator(`[data-guide-choice="${choice}"]`).click();await guide.locator('.x3-guide-verify').click();await expect(page.locator('canvas')).toHaveAttribute('data-guide-stage','explore')}
async function setRange(page,selector,value){await page.locator(selector).evaluate((el,v)=>{el.value=String(v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}))},value)}

test.describe.configure({mode:'serial'});test.setTimeout(180_000);

test('X3 正文关闭 11 项物理和结构问题',()=>{
  const md=fs.readFileSync(path.join(root,'xb3.md'),'utf8');
  expect(md).toContain('Wout=面积');expect(md).toContain('F_y=2\\sigma L\\sin\\alpha');expect(md).toContain('随机拒绝抽样');expect(md).toContain('有界核素参考值');
  expect(md).toContain('不再把未标定的等级换算成聚变概率百分数');expect(md).toContain('必要条件满足');expect(md).toContain('72 个随机行走样本');
  expect(md).toContain('5730 年而不是小时轴');expect(md).toContain('本页不输出剂量值或安全阈值');expect(md).toContain('单独改变尺度不会改写');
  expect(md).toContain('θ = 90°：cosθ=0');
});

test('X3-13 W 由同一 p-V 路径积分，能量账闭合',async({page})=>{
  await page.goto(pageUrl('first-law.html','X3-13'));await completeGuide(page,'X3-13','negative');await setRange(page,'#heat',500);await setRange(page,'#volume',3.8);
  const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.W).toBeLessThan(0);expect(s.Wout).toBeCloseTo(s.areaWout,8);expect(s.workError).toBeCloseTo(0,8);expect(s.dU).toBeCloseTo(s.Q+s.W,8);await expect(page.locator('#c')).toHaveAttribute('data-work-model','pv-integral-linear-quasistatic-path');
});

test('X3-18 两条接触线按几何合成竖直支持力',async({page})=>{
  await page.goto(pageUrl('surface-tension.html','X3-18'));await completeGuide(page,'X3-18','components');await setRange(page,'#sigma',.08);await setRange(page,'#length',.3);await setRange(page,'#angle',40);
  const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.Fy).toBeCloseTo(2*s.s*s.L*Math.sin(s.alpha*Math.PI/180),9);await expect(page.locator('#c')).toHaveAttribute('data-support-model','two-contact-lines-vertical-components');
});

test('X3-20 双缝落点由概率分布随机抽样',async({page})=>{
  await page.goto(pageUrl('wave-particle.html','X3-20'));await completeGuide(page,'X3-20','random');await expect(page.locator('#c')).toHaveAttribute('data-hit-model','seeded-random-double-slit-rejection-sampling');await page.locator('#playBtn').click();await expect.poll(async()=>Number((await page.evaluate(()=>window.__ANIM_TEST_STATE__.get())).hitCount),{timeout:5000}).toBeGreaterThan(3);
});

test('X3-29 只用有界核素数据并派生 Eb 和质量亏损',async({page})=>{
  await page.goto(pageUrl('binding-energy.html','X3-29'));await completeGuide(page,'X3-29','average');const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect([2,4,12,16,56,62,235]).toContain(s.A);expect(s.Eb).toBeCloseTo(s.A*s.avg,8);expect(s.dm).toBeCloseTo(s.Eb/931.5,8);await expect(page.locator('#c')).toHaveAttribute('data-binding-data-model','bounded-real-nuclide-reference-values');await expect(page.locator('#status')).toContainText('衰变通道');
});

test('X3-31 聚变等级只给条件趋势，不伪装成概率',async({page})=>{
  await page.goto(pageUrl('nuclear-fusion.html','X3-31'));await completeGuide(page,'X3-31','no');await expect(page.locator('#c')).toHaveAttribute('data-fusion-model','qualitative-condition-trend-not-probability');await expect(page.locator('#readout')).toContainText('不是反应概率');await expect(page.locator('#readout')).not.toContainText('%');
});

test('X3-32 电荷守恒通过只标记必要条件',async({page})=>{
  await page.goto(pageUrl('particle-physics.html','X3-32'));await completeGuide(page,'X3-32','no');await setRange(page,'#particle',2);await setRange(page,'#reaction',1);await expect(page.locator('#status')).toContainText('必要条件满足');await expect(page.locator('#status')).toContainText('不能据此断言通道成立');await expect(page.locator('#c')).toHaveAttribute('data-channel-check','charge-conservation-necessary-not-sufficient');
});

test('X3-34 MSD 来自 72 样本随机行走系综',async({page})=>{
  await page.goto(pageUrl('diffusion-brownian.html','X3-34'));await completeGuide(page,'X3-34','ensemble');await page.locator('#play').click();await expect.poll(async()=>Number((await page.evaluate(()=>window.__ANIM_TEST_STATE__.get())).history),{timeout:5000}).toBeGreaterThan(1);const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.msd).toBeGreaterThan(0);expect(s.samples).toBe(72);await expect(page.locator('#canvas')).toHaveAttribute('data-msd-model','measured-ensemble-random-walk');
});

test('X3-36 θ=90° 是毛细升降临界状态',async({page})=>{
  await page.goto(pageUrl('capillary.html','X3-36'));await completeGuide(page,'X3-36','zero');const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.theta).toBe(90);expect(s.cm).toBeCloseTo(0,8);await expect(page.locator('#canvas')).toHaveAttribute('data-capillary-state','critical-neutral');await expect(page.locator('#status')).toContainText('临界状态');
});

test('X3-37 三种应用使用核素特定时间尺度',async({page})=>{
  await page.goto(pageUrl('radioisotope-applications.html','X3-37'));await completeGuide(page,'X3-37','years');let s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.isotope).toBe('14C');expect(s.unit).toBe('y');expect(s.T).toBe(5730);await page.locator('#med').click();s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.isotope).toBe('99mTc');expect(s.unit).toBe('h');expect(s.T).toBe(6);await expect(page.locator('#canvas')).toHaveAttribute('data-application-model','isotope-specific-timescale');
});

test('X3-38 只给相对响应趋势，不输出剂量或安全判定',async({page})=>{
  await page.goto(pageUrl('radiation-protection.html','X3-38'));await completeGuide(page,'X3-38','no');await expect(page.locator('#canvas')).toHaveAttribute('data-exposure-model','qualitative-relative-trend-no-dose');await expect(page.locator('#readout')).toContainText('相对探测响应趋势');await expect(page.locator('#status')).toContainText('是否安全必须');await expect(page.locator('#status')).not.toContainText('剂量偏高');
});

test('X3-39 对象决定作用，尺度只作自洽检查',async({page})=>{
  await page.goto(pageUrl('fundamental-interactions.html','X3-39'));await completeGuide(page,'X3-39','no');let s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.dom).toBe('弱相互作用');await setRange(page,'#scale',10);s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.dom).toBe('弱相互作用');expect(s.consistent).toBe(false);await page.locator('#context').selectOption('astronomy');s=await page.evaluate(()=>window.__ANIM_TEST_STATE__.get());expect(s.dom).toBe('引力相互作用');await expect(page.locator('#canvas')).toHaveAttribute('data-interaction-model','object-context-plus-scale-consistency');
});
