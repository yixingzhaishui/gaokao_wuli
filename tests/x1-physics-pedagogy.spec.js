const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const root=path.resolve(__dirname,'..');
const pageUrl=(file,id)=>`${pathToFileURL(path.join(root,'anim','xb1',file)).href}?lesson=${id}`;
async function completeGuide(page,id,choice){const guide=page.locator(`[data-x1-guide="${id}"]`);await guide.locator(`[data-guide-choice="${choice}"]`).click();await guide.locator('.x1-guide-verify').click();await expect(page.locator('canvas')).toHaveAttribute('data-guide-stage','explore');}

test.describe.configure({mode:'serial'});test.setTimeout(90_000);

test('X1 正文关闭动量、振动、波与光学边界问题', () => {
  const markdown=fs.readFileSync(path.join(root,'xb1.md'),'utf8');
  expect(markdown).toContain('入射速度相同、都最终停止且都不反弹');
  expect(markdown).toContain('$I_{\\text{合}}=\\int_{t_1}^{t_2}F_{\\text{合}}');
  expect(markdown).not.toContain('2\\ \\mathrm{m}_{1}');
  expect(markdown).not.toContain('动量守恒**（所有碰撞都成立）');
  expect(markdown).toContain('$\\zeta<1$ 为欠阻尼、$\\zeta=1$ 才是临界阻尼、$\\zeta>1$ 为过阻尼');
  expect(markdown).toContain('$f_{\\text{峰}}=f_{\\text{固}}\\sqrt{1-2\\zeta^2}$');
  expect(markdown).not.toContain('共振筛、微波炉');
  expect(markdown).toContain('波速保持不变');
  expect(markdown).toContain('光学多普勒需使用相对论模型');
  expect(markdown).toContain('$θ_1=C$ 是折射光沿界面传播的临界状态');
  expect(markdown).toContain('$L\\gg d$');
  expect(markdown).toContain('$a\\sin\\theta=\\lambda$');
  expect(markdown).toContain('$\\sin\\theta_{1}/v_{1}=\\sin\\theta_{2}/v_{2}$');
  expect(markdown).toContain('$\\sin C=n_{2}/n_{1}$');
  expect(markdown).toContain('不伪造材料损耗百分比');
});

test('X1-09 大角度不伪造同步，复位统一控件与内部状态', async ({page}) => {
  await page.goto(pageUrl('pendulum.html','X1-09'));await completeGuide(page,'X1-09','no');
  await expect(page.locator('#canvas')).toHaveAttribute('data-period-model','large-angle-corrected');await expect(page.locator('#canvas')).toHaveAttribute('data-physical-angle-deg','15');
  await expect(page.locator('#iso')).toContainText('不再严格同步');await page.locator('#reset-btn').click();
  await expect(page.locator('#th')).toHaveValue('10');await expect(page.locator('#th-d')).toHaveText('10');await expect(page.locator('#canvas')).toHaveAttribute('data-physical-angle-deg','10');
});

test('X1-11 严格按 ζ 与 1 分类并使用对应响应', async ({page}) => {
  await page.goto(pageUrl('damped-vibration.html','X1-11'));await completeGuide(page,'X1-11','critical');
  await expect(page.locator('#cv')).toHaveAttribute('data-damping-class','critical');await expect(page.locator('#stateout')).toContainText('临界阻尼');
  await page.locator('#zeta').press('ArrowLeft');await page.locator('#zeta').press('ArrowLeft');await page.locator('#zeta').press('ArrowLeft');await page.locator('#zeta').press('ArrowLeft');await expect(page.locator('#cv')).toHaveAttribute('data-damping-class','underdamped');await expect(page.locator('#stateout')).toContainText('欠阻尼');
  for(let i=0;i<8;i++)await page.locator('#zeta').press('ArrowRight');await expect(page.locator('#cv')).toHaveAttribute('data-damping-class','overdamped');await expect(page.locator('#stateout')).toContainText('过阻尼');
});

test('X1-12 位移振幅峰标签与阻尼响应实际最大值一致', async ({page}) => {
  await page.goto(pageUrl('forced-resonance.html','X1-12'));await completeGuide(page,'X1-12','shift');
  const peak=Number(await page.locator('#cv').getAttribute('data-peak-frequency'));expect(peak).toBeCloseTo(1.543,2);await expect(page.locator('#stateout')).toContainText('峰附近');
  const atPeak=Number(await page.locator('#cv').getAttribute('data-current-amplitude'));for(let i=0;i<9;i++)await page.locator('#drive-frequency').press('ArrowRight');const atNatural=Number(await page.locator('#cv').getAttribute('data-current-amplitude'));expect(atPeak).toBeGreaterThan(atNatural);
});

test('X1-14 固定介质调频只联动波长，不改变波速', async ({page}) => {
  await page.goto(pageUrl('wave-basics.html','X1-14'));await completeGuide(page,'X1-14','fixed');const canvas=page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-medium-speed','120');await expect(canvas).toHaveAttribute('data-wavelength','60.0');
  for(let i=0;i<12;i++)await page.locator('#medium-v').press('ArrowRight');await expect(canvas).toHaveAttribute('data-medium-speed','180');await expect(canvas).toHaveAttribute('data-wavelength','90.0');
});

test('X1-04 非碰撞参数被明确拒绝', async ({page}) => {
  await page.goto(pageUrl('momentum-collision.html','X1-04'));await completeGuide(page,'X1-04','catch');await page.locator('#v1').press('Home');await page.locator('#v2').press('End');
  await expect(page.locator('#canvas')).toHaveAttribute('data-collision-scenario','rejected-no-collision');await page.locator('#play-btn').click();await expect(page.locator('#play-btn')).toContainText('无法碰撞');
});

test('X1-18 波源连续运动到边界后停止，不带旧波面瞬移', async ({page}) => {
  await page.goto(pageUrl('doppler.html','X1-18'));await completeGuide(page,'X1-18','higher');await page.locator('#reset-btn').click();await page.locator('#vs').press('End');
  await expect.poll(()=>page.locator('#canvas').getAttribute('data-motion-ended'),{timeout:7000}).toBe('true');expect(Number(await page.locator('#canvas').getAttribute('data-source-x'))).toBeCloseTo(600,0);
});

test('X1-20 临界状态与全反射严格分开', async ({page}) => {
  await page.goto(pageUrl('total-reflection.html','X1-20'));await completeGuide(page,'X1-20','critical');const canvas=page.locator('#canvas');
  await expect(canvas).toHaveAttribute('data-optical-state','critical');await expect(page.locator('#st-v')).toContainText('临界');await page.locator('#i').press('ArrowRight');await expect(canvas).toHaveAttribute('data-optical-state','total-reflection');
});

test('X1-26 半发散角定义与 r=Lθ 绑定', async ({page}) => {
  await page.goto(pageUrl('laser.html','X1-26'));await completeGuide(page,'X1-26','half');await expect(page.locator('#canvas')).toHaveAttribute('data-divergence-angle','half-angle-radians-in-r-equals-L-theta');await expect(page.locator('#readout')).toContainText('半发散角');
});

test('X1-27 非法折射率不静默改写，弯曲光路按局部法线追迹', async ({page}) => {
  await page.goto(pageUrl('fiber-optic.html','X1-27'));await completeGuide(page,'X1-27','reject');const canvas=page.locator('#canvas');
  await expect(page.locator('#n2')).toHaveValue('1.55');await expect(page.locator('#n2Label')).toHaveText('1.55');await expect(canvas).toHaveAttribute('data-parameter-validity','invalid-n1-must-exceed-n2');await expect(page.locator('#status')).toContainText('明确拒绝');await expect(page.locator('#readout')).not.toContainText('估计损耗');
  await page.locator('#n2').press('Home');await expect(canvas).toHaveAttribute('data-parameter-validity','valid');await expect(canvas).toHaveAttribute('data-trace-model','local-normal-ray-reflection');
});

test('X1 关键整改页在 390×844 无溢出且无运行错误', async ({browser}) => {
  const pages=[['pendulum.html','X1-09'],['damped-vibration.html','X1-11'],['forced-resonance.html','X1-12'],['wave-basics.html','X1-14'],['fiber-optic.html','X1-27']];
  for(const [file,id] of pages){const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});const errors=[];page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});page.on('pageerror',e=>errors.push(e.message));await page.goto(pageUrl(file,id));const widths=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth}));expect(widths.scroll,id).toBeLessThanOrEqual(widths.client+2);expect(errors,id).toEqual([]);await page.close();}
});
