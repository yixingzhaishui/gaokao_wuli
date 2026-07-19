const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root=path.resolve(__dirname,'..');
const pageUrl=(file,id)=>`${pathToFileURL(path.join(root,'anim','xb2',file)).href}?lesson=${id}`;
async function completeGuide(page,id,choice){const guide=page.locator(`[data-x2-guide="${id}"]`);await guide.locator(`[data-guide-choice="${choice}"]`).click();await guide.locator('.x2-guide-verify').click();await expect(page.locator('canvas')).toHaveAttribute('data-guide-stage','explore');}
async function setRange(page,selector,value){await page.locator(selector).evaluate((el,v)=>{el.value=String(v);el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}))},value)}

test.describe.configure({mode:'serial'});test.setTimeout(120_000);

test('X2 正文关闭电荷大小、磁通定义、平均值、模型边界与风险表述',()=>{
  const md=fs.readFileSync(path.join(root,'xb2.md'),'utf8');
  expect(md).toContain('F = |q|vB·sinθ');expect(md).toContain('R = mv/(|q|B)');expect(md).toContain('\\Phi=\\int_S\\mathbf B\\cdot d\\mathbf S');
  expect(md).toContain('完整正弦周期的有符号平均值为 0');expect(md).toContain('q=N|\\Delta\\Phi|/R_{总}');
  expect(md).toContain('闭合、被动、无外加电源');expect(md).toContain('线圈—二极管—指示灯仍闭合');expect(md).toContain('NTC 随温度升高阻值减小，PTC');
  expect(md).toContain('已调谐但传播衰减');expect(md).toContain('辐照强度、剂量、时间、距离和防护条件');expect(md).toContain('负载开路：I=0');
});

test('X2-05 正电荷在入屏磁场中视觉逆时针且叉乘一致',async({page})=>{
  await page.goto(pageUrl('magnetic-circle.html','X2-05'));await completeGuide(page,'X2-05','ccw');const canvas=page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-magnetic-field-direction','into-page');await expect(canvas).toHaveAttribute('data-positive-charge-direction','counter-clockwise');
  await page.locator('#resetBtn').click();const before=(await page.evaluate(()=>window.__ANIM_TEST_STATE__)).phase;await page.locator('#stepBtn').click();const after=await page.evaluate(()=>window.__ANIM_TEST_STATE__);expect(after.phase).toBeLessThan(before);expect(after.visualDirection).toBe('counter-clockwise');
});

test('X2-06 R<L 走 180° 半圆并返回左边界',async({page})=>{
  await page.goto(pageUrl('magnetic-critical.html','X2-06'));await completeGuide(page,'X2-06','left');const canvas=page.locator('#cv');
  await expect(canvas).toHaveAttribute('data-path-outcome','return-left-boundary');await expect(canvas).toHaveAttribute('data-sweep-angle-deg','180');
  const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__);expect(s.endX).toBeCloseTo(170,5);expect(s.endY).toBeLessThan(300);
});

test('X2-11 导体棒到端点后速度、电磁量和功率归零并可反向恢复',async({page})=>{
  await page.goto(pageUrl('rail-rod.html','X2-11'));await completeGuide(page,'X2-11','oppose');const canvas=page.locator('#canvas');
  await expect.poll(()=>canvas.getAttribute('data-boundary-state'),{timeout:4000}).toBe('left');for(const attr of ['data-rod-velocity','data-emf','data-current','data-power'])expect(Number(await canvas.getAttribute(attr))).toBeCloseTo(0,6);
  await page.locator('#reverse-v').click();expect(Number(await canvas.getAttribute('data-rod-velocity'))).toBeGreaterThan(0);
});

test('X2-12 断电后只经闭合二极管灯支路续流并衰减',async({page})=>{
  await page.goto(pageUrl('self-induction.html','X2-12'));await completeGuide(page,'X2-12','no');const canvas=page.locator('#cv');await page.waitForTimeout(350);
  const beforeOpen=Number(await canvas.getAttribute('data-current'));await page.locator('#toggle').click();await expect(canvas).toHaveAttribute('data-circuit-state','source-disconnected');await expect(canvas).toHaveAttribute('data-discharge-path','closed-diode-lamp-loop');
  expect(Number(await canvas.getAttribute('data-indicator-brightness'))).toBeGreaterThan(0);await page.waitForTimeout(450);expect(Number(await canvas.getAttribute('data-current'))).toBeLessThan(beforeOpen);
});

test('X2-17 无效输电参数拒绝伪读数，有效区保持能量边界',async({page})=>{
  await page.goto(pageUrl('power-transmission.html','X2-17'));await completeGuide(page,'X2-17','current');const canvas=page.locator('#cv');
  await setRange(page,'#pr',500);await setRange(page,'#ur',1);await setRange(page,'#rr',50);await expect(canvas).toHaveAttribute('data-transmission-validity','invalid');await expect(page.locator('#iv')).toHaveText('—');await expect(page.locator('#lossv')).toHaveText('—');await expect(page.locator('#statev')).toContainText('无效');
  await setRange(page,'#ur',20);await expect(canvas).toHaveAttribute('data-transmission-validity','valid');const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__);expect(s.loss).toBeLessThan(s.P);expect(s.dU).toBeLessThan(s.U);
});

test('X2-19 旋转磁场固定中心并以转差产生驱动转矩',async({page})=>{
  await page.goto(pageUrl('eddy-current.html','X2-19'));await completeGuide(page,'X2-19','slip');const canvas=page.locator('#canvas');await expect(canvas).toHaveAttribute('data-drive-model','rotating-field-slip-torque');await page.waitForTimeout(120);
  const s=await page.evaluate(()=>window.__ANIM_TEST_STATE__);expect(s.fieldAngle).toBeGreaterThan(s.diskAngle);expect(s.slipRate).toBeGreaterThan(0);await expect(page.locator('#readout')).not.toContainText('%');
});

test('X2-21 E/B 归一化同相且 E×B 指向 +x',async({page})=>{
  await page.goto(pageUrl('maxwell-em-theory.html','X2-21'));await completeGuide(page,'X2-21','same');const canvas=page.locator('#canvas');await expect(canvas).toHaveAttribute('data-phase-relation','in-phase');await expect(canvas).toHaveAttribute('data-amplitude-relation','E0=cB0');await expect(canvas).toHaveAttribute('data-poynting-direction','E-cross-B-plus-x');await expect(page.locator('#readout')).toContainText('E/E₀');
});

test('X2-22 已调谐弱信号与频率失配分开',async({page})=>{
  await page.goto(pageUrl('em-wave-transmission.html','X2-22'));await completeGuide(page,'X2-22','no');const canvas=page.locator('#canvas');await expect(canvas).toHaveAttribute('data-tuning-state','matched');await expect(canvas).toHaveAttribute('data-propagation-state','attenuated');await expect(page.locator('#status')).toContainText('已调谐，但距离导致传播衰减');
  await setRange(page,'#tune',115);await expect(canvas).toHaveAttribute('data-tuning-state','mismatched');await expect(page.locator('#status')).toContainText('频率失配');
});

test('X2-24 发电机开路功率为零且发电/电动两模式能量守恒',async({page})=>{
  await page.goto(pageUrl('generator-motor.html','X2-24'));await completeGuide(page,'X2-24','zero');const canvas=page.locator('#canvas'),box=await canvas.boundingBox();await page.mouse.move(box.x+box.width*304/920,box.y+box.height*250/610);await page.mouse.down();await page.mouse.move(box.x+box.width*304/920,box.y+box.height*164/610);await page.mouse.up();await expect(canvas).toHaveAttribute('data-open-circuit','true');
  let s=await page.evaluate(()=>window.__ANIM_TEST_STATE__);expect(Math.abs(s.e)).toBeGreaterThan(0.5);expect(s.I).toBe(0);expect(s.mechIn).toBe(0);expect(s.elecOut).toBe(0);expect(Math.abs(s.energyError)).toBeLessThan(1e-9);
  await page.locator('#mot').click();await setRange(page,'#i',6);s=await page.evaluate(()=>window.__ANIM_TEST_STATE__);expect(s.elecIn).toBeCloseTo(s.mechOut+s.mechLoss+s.copper,8);expect(Math.abs(s.energyError)).toBeLessThan(1e-9);await expect(page.locator('#readout')).toContainText('W');
});
