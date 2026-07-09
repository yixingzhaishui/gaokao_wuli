// 生成 data/progress.json 和 data/id-map.json
// 运行: node scripts/gen-data.js
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dataDir = path.join(root, 'data');
fs.mkdirSync(dataDir, { recursive: true });

// 知识点清单: [编号, 名称, 档, slug, 文件]
const kp = [
  // 必修1 B1-01~B1-30
  ['B1-01','质点模型','B','particle','bx1'],
  ['B1-02','参考系','B','reference-frame','bx1'],
  ['B1-03','时刻与时间间隔','B','time-instant','bx1'],
  ['B1-04','路程与位移','B','displacement','bx1'],
  ['B1-05','平均速度与瞬时速度','A','velocity','bx1'],
  ['B1-06','加速度','A','acceleration','bx1'],
  ['B1-07','x-t 图像','B','xt-graph','bx1'],
  ['B1-08','v-t 图像','A','vt-graph','bx1'],
  ['B1-09','匀速直线运动','B','uniform-motion','bx1'],
  ['B1-10','匀变速直线运动基本规律','A','uniform-acceleration','bx1'],
  ['B1-11','刹车问题','A','braking','bx1'],
  ['B1-12','追及相遇','A','pursuit','bx1'],
  ['B1-13','自由落体','A','free-fall','bx1'],
  ['B1-14','竖直上抛','A','vertical-throw','bx1'],
  ['B1-15','重力','B','gravity','bx1'],
  ['B1-16','弹力与形变','B','elastic-force','bx1'],
  ['B1-17','胡克定律','A','hooke-law','bx1'],
  ['B1-18','摩擦力','A','friction','bx1'],
  ['B1-19','力的合成','B','force-composition','bx1'],
  ['B1-20','力的分解','A','force-decomposition','bx1'],
  ['B1-21','共点力平衡','A','equilibrium','bx1'],
  ['B1-22','动态平衡','A','dynamic-equilibrium','bx1'],
  ['B1-23','牛顿第一定律','B','newton-first','bx1'],
  ['B1-24','牛顿第二定律','A','newton-second','bx1'],
  ['B1-25','牛顿第三定律','B','newton-third','bx1'],
  ['B1-26','超重与失重','A','overweight','bx1'],
  ['B1-27','连接体模型','A','connecting-body','bx1'],
  ['B1-28','板块模型','A','plank-block','bx1'],
  ['B1-29','传送带模型','A','conveyor-belt','bx1'],
  ['B1-30','弹簧瞬时问题','A','spring-instant','bx1'],
  // 必修2 B2-01~B2-24
  ['B2-01','曲线运动条件','B','curved-motion','bx2'],
  ['B2-02','运动合成与分解','A','motion-composition','bx2'],
  ['B2-03','平抛运动','A','projectile-motion','bx2'],
  ['B2-04','斜抛运动/类平抛','B','oblique-throw','bx2'],
  ['B2-05','圆周运动基本量','A','circular-basics','bx2'],
  ['B2-06','向心加速度与向心力','A','centripetal','bx2'],
  ['B2-07','水平圆周与圆锥摆','A','conical-pendulum','bx2'],
  ['B2-08','竖直圆周临界','A','vertical-circle','bx2'],
  ['B2-09','万有引力定律','A','gravitation','bx2'],
  ['B2-10','开普勒定律','B','kepler-law','bx2'],
  ['B2-11','卫星圆轨道','A','satellite-orbit','bx2'],
  ['B2-12','同步卫星','B','geostationary','bx2'],
  ['B2-13','卫星变轨','A','orbit-transfer','bx2'],
  ['B2-14','双星模型','A','binary-star','bx2'],
  ['B2-15','功','A','work','bx2'],
  ['B2-16','功率','A','power','bx2'],
  ['B2-17','机车启动','A','vehicle-start','bx2'],
  ['B2-18','动能定理','A','kinetic-energy-theorem','bx2'],
  ['B2-19','重力势能','B','gravitational-pe','bx2'],
  ['B2-20','弹性势能','B','elastic-pe','bx2'],
  ['B2-21','机械能守恒','A','mechanical-energy','bx2'],
  ['B2-22','功能关系','A','work-energy','bx2'],
  ['B2-23','能量守恒','A','energy-conservation','bx2'],
  ['B2-24','相对论初步','C','relativity','bx2'],
  // 必修3 B3-01~B3-20
  ['B3-01','电荷与起电','B','charge','bx3'],
  ['B3-02','库仑定律','A','coulomb-law','bx3'],
  ['B3-03','电场强度','A','electric-field','bx3'],
  ['B3-04','电场线','B','field-lines','bx3'],
  ['B3-05','等势面','A','equipotential','bx3'],
  ['B3-06','电势差','A','potential-difference','bx3'],
  ['B3-07','电势能','A','electric-pe','bx3'],
  ['B3-08','电场力做功','A','electric-work','bx3'],
  ['B3-09','电容器','A','capacitor','bx3'],
  ['B3-10','电容','A','capacitance','bx3'],
  ['B3-11','电流','B','current','bx3'],
  ['B3-12','电阻与电阻定律','B','resistance','bx3'],
  ['B3-13','欧姆定律','A','ohm-law','bx3'],
  ['B3-14','串并联电路','A','series-parallel','bx3'],
  ['B3-15','焦耳定律','B','joule-law','bx3'],
  ['B3-16','闭合电路欧姆定律','A','closed-circuit','bx3'],
  ['B3-17','电源电动势','A','emf','bx3'],
  ['B3-18','多用电表','B','multimeter','bx3'],
  ['B3-19','电磁场与电磁波','C','em-wave','bx3'],
  ['B3-20','能源与可持续发展','C','energy','bx3'],
  // 选择性必修1 X1-01~X1-24
  ['X1-01','动量','A','momentum','xb1'],
  ['X1-02','冲量','A','impulse','xb1'],
  ['X1-03','动量定理','A','momentum-theorem','xb1'],
  ['X1-04','动量守恒定律','A','momentum-conservation','xb1'],
  ['X1-05','弹性碰撞','A','elastic-collision','xb1'],
  ['X1-06','非弹性碰撞','A','inelastic-collision','xb1'],
  ['X1-07','反冲运动','B','recoil','xb1'],
  ['X1-08','简谐运动','A','shm','xb1'],
  ['X1-09','单摆','A','pendulum','xb1'],
  ['X1-10','简谐运动图像','A','shm-graph','xb1'],
  ['X1-11','阻尼振动','B','damped-vibration','xb1'],
  ['X1-12','受迫振动与共振','A','forced-vibration','xb1'],
  ['X1-13','机械波的形成','B','wave-formation','xb1'],
  ['X1-14','波长频率波速','A','wave-parameters','xb1'],
  ['X1-15','波的图像','A','wave-graph','xb1'],
  ['X1-16','波的干涉','A','interference','xb1'],
  ['X1-17','波的衍射','B','diffraction','xb1'],
  ['X1-18','多普勒效应','B','doppler','xb1'],
  ['X1-19','光的折射','A','refraction','xb1'],
  ['X1-20','全反射','A','total-reflection','xb1'],
  ['X1-21','光的干涉','A','light-interference','xb1'],
  ['X1-22','光的衍射','B','light-diffraction','xb1'],
  ['X1-23','光的偏振','B','polarization','xb1'],
  ['X1-24','光电效应','A','photoelectric','xb1'],
  // 选择性必修2 X2-01~X2-18
  ['X2-01','磁场与磁感线','B','magnetic-field','xb2'],
  ['X2-02','磁感应强度','A','magnetic-induction','xb2'],
  ['X2-03','安培力','A','ampere-force','xb2'],
  ['X2-04','洛伦兹力','A','lorentz-force','xb2'],
  ['X2-05','带电粒子在磁场中运动','A','charged-particle','xb2'],
  ['X2-06','磁场圆周临界','A','magnetic-critical','xb2'],
  ['X2-07','磁通量','A','magnetic-flux','xb2'],
  ['X2-08','电磁感应现象','A','em-induction','xb2'],
  ['X2-09','楞次定律','A','lenz-law','xb2'],
  ['X2-10','法拉第电磁感应定律','A','faraday-law','xb2'],
  ['X2-11','导轨模型','A','rail-rod','xb2'],
  ['X2-12','自感','B','self-induction','xb2'],
  ['X2-13','互感','B','mutual-induction','xb2'],
  ['X2-14','交流电的产生','A','ac-generation','xb2'],
  ['X2-15','交流电四值','A','ac-values','xb2'],
  ['X2-16','变压器','A','transformer','xb2'],
  ['X2-17','远距离输电','A','power-transmission','xb2'],
  ['X2-18','传感器','B','sensor','xb2'],
  // 选择性必修3 X3-01~X3-32
  ['X3-01','分子动理论','B','kinetic-theory','xb3'],
  ['X3-02','阿伏伽德罗常数','B','avogadro','xb3'],
  ['X3-03','分子热运动','B','thermal-motion','xb3'],
  ['X3-04','分子力','B','molecular-force','xb3'],
  ['X3-05','内能','B','internal-energy','xb3'],
  ['X3-06','温度与温标','B','temperature','xb3'],
  ['X3-07','气体状态参量','A','gas-state','xb3'],
  ['X3-08','玻意耳定律','A','boyle-law','xb3'],
  ['X3-09','查理定律','A','charles-law','xb3'],
  ['X3-10','理想气体状态方程','A','ideal-gas','xb3'],
  ['X3-11','p-V 图像','A','pv-diagram','xb3'],
  ['X3-12','气体实验定律微观解释','B','gas-micro','xb3'],
  ['X3-13','热力学第一定律','A','first-law','xb3'],
  ['X3-14','热力学第二定律','A','second-law','xb3'],
  ['X3-15','能量守恒','A','energy-conservation-th','xb3'],
  ['X3-16','热机与效率','B','heat-engine','xb3'],
  ['X3-17','晶体与非晶体','B','crystal','xb3'],
  ['X3-18','液体表面张力','B','surface-tension','xb3'],
  ['X3-19','光电效应','A','photoelectric-x3','xb3'],
  ['X3-20','波粒二象性','A','wave-particle','xb3'],
  ['X3-21','原子结构','B','atom-structure','xb3'],
  ['X3-22','玻尔模型与能级','A','bohr-model','xb3'],
  ['X3-23','原子光谱','B','atomic-spectrum','xb3'],
  ['X3-24','原子核结构','B','nucleus-structure','xb3'],
  ['X3-25','放射性衰变','A','radioactive-decay','xb3'],
  ['X3-26','半衰期','A','half-life','xb3'],
  ['X3-27','核反应','A','nuclear-reaction','xb3'],
  ['X3-28','核能','A','nuclear-energy','xb3'],
  ['X3-29','结合能与质量亏损','A','binding-energy','xb3'],
  ['X3-30','核裂变','A','nuclear-fission','xb3'],
  ['X3-31','核聚变','A','nuclear-fusion','xb3'],
  ['X3-32','粒子物理初步','C','particle-physics','xb3'],
];

// 实验 E-01~E-20
const exp = [
  ['E-01','测直线运动速度','experiments'],
  ['E-02','探究匀变速直线运动规律','experiments'],
  ['E-03','探究弹簧弹力与形变量关系','experiments'],
  ['E-04','验证平行四边形定则','experiments'],
  ['E-05','探究加速度与力质量关系','experiments'],
  ['E-06','验证机械能守恒','experiments'],
  ['E-07','探究平抛运动特点','experiments'],
  ['E-08','探究向心力大小表达式','experiments'],
  ['E-09','测万有引力常数','experiments'],
  ['E-10','探究库仑力','experiments'],
  ['E-11','描绘电场等势线','experiments'],
  ['E-12','测电阻率','experiments'],
  ['E-13','描绘小灯泡伏安特性曲线','experiments'],
  ['E-14','测电源电动势和内阻','experiments'],
  ['E-15','练习使用多用电表','experiments'],
  ['E-16','验证动量守恒','experiments'],
  ['E-17','探究单摆周期公式','experiments'],
  ['E-18','测玻璃折射率','experiments'],
  ['E-19','双缝干涉测波长','experiments'],
  ['E-20','用油膜法估测分子大小','experiments'],
];

// 模型 M-01~M-15
const models = [
  ['M-01','连接体模型','models'],
  ['M-02','板块模型','models'],
  ['M-03','传送带模型','models'],
  ['M-04','弹簧瞬时问题','models'],
  ['M-05','平抛与类平抛','models'],
  ['M-06','圆周临界模型','models'],
  ['M-07','天体运动模型','models'],
  ['M-08','机车启动模型','models'],
  ['M-09','功能关系综合','models'],
  ['M-10','碰撞模型','models'],
  ['M-11','导轨模型','models'],
  ['M-12','交流电综合','models'],
  ['M-13','带电粒子在复合场中运动','models'],
  ['M-14','气体状态变化模型','models'],
  ['M-15','核反应与质能方程','models'],
];

// P0-1 MVP A 档知识点（已完成）
const mvpDone = new Set(['B1-08','B1-10','B1-18','B1-24','B1-27','B1-28','B1-29']);
// P0-floor 条目（必修1 其余知识点，有先看现象+由来+理解+应用+解题思路+示意图，但未达 B 档完整标准）
const b1Floor = new Set();
for (let i = 1; i <= 30; i++) {
  const id = 'B1-' + String(i).padStart(2,'0');
  if (!mvpDone.has(id)) b1Floor.add(id);
}

const progress = {};
const idMap = {};
const today = '2026-07-06';

kp.forEach(([id, title, level, slug, file]) => {
  let status = 'pending';
  if (mvpDone.has(id)) status = 'done';
  else if (b1Floor.has(id)) status = 'partial';
  progress[id] = { status, level, date: status === 'done' ? today : undefined };
  delete progress[id].date;
  if (status === 'done') progress[id].date = today;
  idMap[id] = { slug, title, file, level };
});
exp.forEach(([id, title, file]) => {
  progress[id] = { status: 'pending', level: 'exp' };
  idMap[id] = { slug: id.toLowerCase().replace('-',''), title, file, level: 'exp' };
});
models.forEach(([id, title, file]) => {
  progress[id] = { status: 'pending', level: 'model' };
  idMap[id] = { slug: id.toLowerCase().replace('-',''), title, file, level: 'model' };
});

fs.writeFileSync(path.join(dataDir, 'progress.json'), JSON.stringify(progress, null, 2));
fs.writeFileSync(path.join(dataDir, 'id-map.json'), JSON.stringify(idMap, null, 2));

const counts = { done: 0, partial: 0, pending: 0 };
Object.values(progress).forEach(v => counts[v.status]++);
console.log('progress.json:', Object.keys(progress).length, 'units');
console.log('  done:', counts.done, 'partial:', counts.partial, 'pending:', counts.pending);
console.log('id-map.json:', Object.keys(idMap).length, 'entries');
