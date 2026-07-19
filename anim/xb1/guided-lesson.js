(function () {
  'use strict';

  function lesson(id, question, options, correct, actions, result, evidence, explanation, boundary, transfer) {
    return { id, question, observe: '先作预测；验证后才开放画面、读数、公式和自由探索。', options, correct, actions, result, evidence, explanation, boundary, transfer };
  }

  const lessons = {
    'X1-01': lesson('X1-01', '同一辆车速度反向而质量不变，动量和动能怎样变？', [['reverse', '动量反向，动能仍为正'], ['both-negative', '动量和动能都变负'], ['both-same', '两者方向都不变']], 'reverse', [{ selector: '#play', after: 120 }], '动量方向随速度反向，动能由速度平方决定而不为负。', '小车、速度箭头、动量箭头和动能柱使用同一组 m、v 数据。', '动量 p=mv 是矢量，动能 Ek=mv²/2 是标量。', '必须先规定正方向；不同参考系中的速度和动量不同。', '遇到方向改变题，分别处理矢量动量和标量动能。'),
    'X1-02': lesson('X1-02', '两段 F-t 图面积相同但力和时间不同，冲量是否相同？', [['same', '相同，冲量看代数面积'], ['larger-force', '力大的冲量一定大'], ['longer-only', '只由时间决定']], 'same', [{ selector: '#mode' }], '冲量相同；缓冲模式保持 Δp，延长时间会降低平均力。', 'F-t 有色面积、I 与 Δp 三个读数保持一致。', '冲量是力对时间的累积，不由某个瞬时力单独决定。', '变力过程应取 F-t 代数面积或积分；Ft 只适合恒力或平均力。', '缓冲题先固定初末动量，再比较作用时间和平均力。'),
    'X1-03': lesson('X1-03', '相同入射速度的鸡蛋都停止且不反弹，缓冲垫延长时间后平均合力怎样？', [['smaller', '变小，合外力冲量不变'], ['same-force', '不变'], ['larger', '变大']], 'smaller', [{ selector: '#mode' }], '平均合力变小，但合外力冲量仍等于相同的 Δp。', '缓冲目标锁定 Δp，延长 t 时力读数下降。', 'I合=Δp；在初末动量相同的前提下，平均力与作用时间成反比。', '若反弹或入射速度不同，Δp 不再相同；实际冲击力通常随时间变化。', '先写初末速度方向，再决定能否比较同一 Δp。'),
    'X1-04': lesson('X1-04', '左车要追上右车发生碰撞，初始速度至少应满足什么关系？', [['catch', 'v₁>v₂'], ['any', '任意参数都会碰撞'], ['equal', 'v₁=v₂ 一定碰撞']], 'catch', [{ selector: '#v1', value: '6' }, { selector: '#v2', value: '-4' }, { selector: '#play-btn', after: 900 }], 'v₁>v₂ 时两车间距缩小并发生碰撞。', '页面先检查追及条件，碰撞后总动量前后读数一致。', '只有发生实际接触且系统外冲量可忽略，才能用本碰撞演示核验守恒。', 'v₁≤v₂ 时左车追不上右车，页面会明确拒绝而不是伪造碰撞。', '碰撞题先检查几何追及和系统边界，再列守恒式。'),
    'X1-05': lesson('X1-05', '等质量、第二车静止的一维弹性正碰，碰后速度怎样？', [['exchange', '速度交换'], ['stick', '粘在一起'], ['both-stop', '两车都停止']], 'exchange', [{ selector: '[data-e="1"]' }, { selector: '#m1', value: '1' }, { selector: '#m2', value: '1' }, { selector: '#v1', value: '6' }, { selector: '#v2', value: '0' }, { selector: '#play-btn', after: 1250 }], '等质量弹性正碰发生速度交换。', '碰后 v₁′≈0、v₂′≈v₁，且动量、动能都守恒。', '一维弹性碰撞同时满足总动量和总动能守恒。', '二维碰撞要分方向列动量；系统外冲量不可忽略时不能直接套守恒。', '看到“等质量、弹性、正碰”可先检验速度交换。'),
    'X1-06': lesson('X1-06', '完全非弹性碰撞比一般非弹性碰撞多了什么条件？', [['common', '碰后粘连并具有共同速度'], ['energy', '动能也守恒'], ['all', '所有碰撞都自动守恒']], 'common', [{ selector: '[data-e="0"]' }, { selector: '#v1', value: '6' }, { selector: '#v2', value: '-2' }, { selector: '#play-btn', after: 1050 }], '两车粘连同速，系统动量守恒而动能减少。', '模式读数、共同速度和碰前后能量读数同步变化。', '共同速度公式只属于完全非弹性特例；动量守恒还要检查外冲量条件。', '一般非弹性碰撞不要求粘连，也不要求共同速度。', '先判碰撞类型，再决定是否能使用共同速度。'),
    'X1-07': lesson('X1-07', '初始静止系统向右喷出物质后，主体向哪边运动？', [['left', '向左反冲'], ['right', '同向向右'], ['still', '保持静止']], 'left', [{ selector: '#fire', after: 220 }], '主体向左、喷出物向右，两部分动量等大反向。', 'MV 与 mv 两条动量条方向相反，总和保持 0。', '系统初动量为零且外冲量可忽略，所以分裂后总动量仍为零。', '连续变质量火箭需使用变质量模型；本页是瞬时分裂近似。', '先规定正方向并区分喷出速度相对地面还是相对主体。'),
    'X1-08': lesson('X1-08', '理想无阻尼简谐振子经过平衡位置时，速度和回复力怎样？', [['vmax', '速度最大，回复力为零'], ['fmax', '速度为零，回复力最大'], ['bothmax', '两者都最大']], 'vmax', [{ selector: '#a', value: '9' }], '经过平衡位置时速度最大，回复力和加速度为零。', '振子、x-t 红点、速度箭头和回复力箭头使用同一相位。', 'F=-kx；x=0 时回复力为零，理想机械能主要表现为动能。', '机械能守恒只限理想无阻尼模型。', '从 x-t 图斜率判断速度，再由 a∝-x 判断加速度。'),
    'X1-09': lesson('X1-09', '把摆角从 5° 增大到 15°，还能宣称与小角度参照摆严格同步吗？', [['no', '不能，大角度周期会略增'], ['yes', '能，任意振幅都等时'], ['mass', '只取决于摆球质量']], 'no', [{ selector: '#th', value: '15' }], '超过 10° 后页面启用大角度周期修正，不再强制同步。', '当前周期、5°参照摆和状态文字共同显示近似边界。', 'T≈2π√(L/g) 来自 sinθ≈θ，只在小角度理想单摆中成立。', '细线、质点摆球、忽略阻力和摆长到质心也都是公式条件。', '看到大摆角先判断小角近似是否仍可用。'),
    'X1-10': lesson('X1-10', 'x-t 图像的最高点表示振子的什么状态？', [['turn', '位移最大、速度为零'], ['track', '空间轨迹最高点'], ['vmax', '速度最大']], 'turn', [{ selector: '#t', value: '3' }], '图像最高点是位移极值和转向点，速度为零。', '图像斜率、振子位置和速度箭头同步。', 'x-t 图是位移随时间关系，斜率才是瞬时速度。', '它不是振子在空间中的运动轨迹。', '读图前先确认横轴、纵轴、单位和初相。'),
    'X1-11': lesson('X1-11', '阻尼比 ζ=1 时属于哪一种阻尼？', [['critical', '临界阻尼'], ['under', '欠阻尼'], ['near', '一段“临界附近”都算临界']], 'critical', [{ selector: '#zeta', value: '1.00' }], 'ζ=1 是临界阻尼，最快无振荡回到平衡。', '分类标签、响应曲线和 canvas 模型标记都切到 critical。', '标准二阶系统严格以 ζ<1、ζ=1、ζ>1 分类。', '欠阻尼指数包络不能套到临界或过阻尼响应。', '先按 ζ 与 1 的关系分类，再选择对应响应方程。'),
    'X1-12': lesson('X1-12', '阻尼增大后，位移振幅峰仍严格位于 f固 吗？', [['shift', '不一定；峰会降低、展宽并向低频移动'], ['fixed', '永远严格相等'], ['frequency', '稳定振动频率改成 f固']], 'shift', [{ selector: '#damping', value: '0.45' }, { selector: '#drive-frequency', value: '1.55' }], '本模型 ζ=0.45 时位移振幅峰约在 1.54 Hz，而 f固=2.00 Hz。', 'f峰读数、绿色峰线、红色驱动线和实际幅值来自同一响应函数。', '稳定频率等于 f驱；弱阻尼时才可近似 f峰≈f固。', '这里讨论位移振幅响应；速度、功率等响应量的峰值条件不同。', '用整条曲线找峰值，不用口号覆盖实际数值。'),
    'X1-13': lesson('X1-13', '机械波向右传播时，介质质点会随波向右迁移吗？', [['no', '不会，只在平衡位置附近振动'], ['yes', '会随波前进'], ['stop', '质点保持静止']], 'no', [{ selector: '#f', value: '1.5' }], '波形向右传播，红色质点仍只上下振动。', '固定空间探针、波形平移和质点速度箭头同时显示。', '机械波传递振动形式和能量，不整体搬运介质。', '机械波需要介质；真空不能传播声波。', '判断横纵波看质点振动方向与传播方向的关系。'),
    'X1-14': lesson('X1-14', '同一介质中把波源频率加倍，v 和 λ 怎样变？', [['fixed', 'v 不变，λ 减半'], ['speed', 'v 加倍，λ不变'], ['all', 'v、λ都加倍']], 'fixed', [{ selector: '#f', value: '2.0' }], '频率由 1.0 增至 2.0 Hz，介质波速保持 120 px/s，波长由 120 减为 60 px。', '频率、波长、介质波速三个独立读数和画面波峰间距一致。', '同一介质中 v 由介质决定，λ=v/f。', '换介质时频率保持，v 和 λ 才随介质改变。', '先判断介质是否改变，再使用 v=λf。'),
    'X1-15': lesson('X1-15', '波形图 y-x 与振动图 y-t 的横轴分别是什么？', [['axes', '位置 x 与时间 t'], ['bothx', '都是位置'], ['botht', '都是时间']], 'axes', [{ selector: '[data-m="vib"]' }], '页面切到单个质点的 y-t 振动图，横轴变为时间。', '模式按钮、横轴标签和周期标尺同步切换。', 'y-x 是同一时刻的空间快照，y-t 是同一点的时间记录。', '不能从 y-t 图直接读波长，也不能把 y-x 图当质点轨迹。', '图像题第一步先读坐标轴，再判断 λ、T 和运动方向。'),
    'X1-16': lesson('X1-16', '两列同频同相波在某点程差为半波长，一定完全相消吗？', [['amplitude', '只有到达该点的振幅相等才完全相消'], ['always', '一定完全相消'], ['enhance', '一定加强']], 'amplitude', [{ selector: '#lam', value: '60' }], '程差决定相位差；完全相消还要求两列波振幅相等。', '测试点程差、相位判据和叠加图样同步。', '稳定干涉还要求频率相同、相位差恒定。', '振幅不等时减弱点仍有剩余振幅。', '先判相干和相位差，再判断合振幅能否为零。'),
    'X1-17': lesson('X1-17', '缝宽 a 与波长 λ 接近时，衍射是否明显？', [['yes', '明显，波在缝后大范围展开'], ['none', '完全不衍射'], ['wide', '只有 a≫λ 才明显']], 'yes', [{ selector: '#a', value: '40' }, { selector: '#lam', value: '40' }], 'a/λ≈1 时衍射明显。', '缝宽、波长、a/λ 读数和缝后波面形状同步。', '所有波都有衍射，a/λ 决定是否容易观察。', 'a≫λ 时只是衍射不明显，不是严格没有衍射。', '比较衍射先无量纲化为 a/λ。'),
    'X1-18': lesson('X1-18', '静止介质中亚声速波源向观察者靠近，前方接收频率怎样？', [['higher', '升高，前方波长被压缩'], ['lower', '降低'], ['source', '波源自身频率改变']], 'higher', [{ selector: '#vs', value: '80' }], '前方波面更密，接收频率升高；波源自身 f0 不变。', '连续运动源不会越界瞬移，发射波面保留各自真实发射位置。', '介质中波速不变，运动波源改变前后方波长。', '公式只适用于静止观察者、运动亚声速波源；光学多普勒需相对论模型。', '区分波源频率、接收频率和介质波速。'),
    'X1-19': lesson('X1-19', '光从空气进入折射率更大的玻璃，折射线偏向还是偏离法线？', [['toward', '偏向法线'], ['away', '偏离法线'], ['same', '方向不变']], 'toward', [{ selector: '#nr', value: '1.80' }], '进入较高折射率介质时，折射角小于入射角。', '入射角、折射角、n 和介质光速读数同时满足斯涅尔定律。', '跨界面频率不变，速度和波长改变。', '角度都相对法线；n=c/v 中 c 是真空光速。', '先比较 n1、n2，再判断偏折方向。'),
    'X1-20': lesson('X1-20', '入射角恰好等于临界角 C 时，是否已经没有折射光？', [['critical', '没有；折射光沿界面传播，是临界态'], ['total', '已经是无折射光的全反射'], ['normal', '折射角为 0°']], 'critical', [{ selector: '#critical-case' }], 'i=C 时折射角为 90°，折射光沿界面；只有 i>C 才全反射。', '专用临界按钮使 i 与 C 使用同一数值，画面和状态进入 critical。', '全反射要求 n1>n2 且 i>C。', '真实材料仍有吸收、散射和倏逝场效应。', '把 i<C、i=C、i>C 三种状态分开作图。'),
    'X1-21': lesson('X1-21', '在远场小角近似下，波长增大时双缝条纹间距怎样？', [['wider', '变宽'], ['narrower', '变窄'], ['same', '不变']], 'wider', [{ selector: '#lamr', value: '650' }], '波长增大，条纹间距增大。', 'λ、d、L、Δx 读数和屏上标尺来自同一计算。', '相干、L≫d 和近轴小角条件下 Δx=Lλ/d。', '超出近似范围应从实际程差和角度关系计算。', '先写适用条件，再判断 λ、L、d 的比例变化。'),
    'X1-22': lesson('X1-22', '单缝变窄时，第一暗纹角和中央亮纹怎样变？', [['wider', '第一暗纹角增大，中央亮纹变宽'], ['narrower', '都变小'], ['same', '都不变']], 'wider', [{ selector: '#ar', value: '0.05' }], '缝宽减小，第一暗纹角增大，中央亮纹变宽。', '缝宽、λ/a、第一暗纹角和屏上中央亮纹同步。', '第一暗纹满足 a sinθ=λ；小角时才有 θ≈λ/a。', '动画的视觉展宽是示意，不能把屏幕像素当实验比例尺。', '区分单缝中央宽亮与双缝等间距条纹。'),
    'X1-23': lesson('X1-23', '理想偏振光通过与其方向正交的检偏器，出射强度怎样？', [['zero', '理想模型中为零'], ['half', '保持一半'], ['same', '不变']], 'zero', [{ selector: '#th', value: '90' }], '理想模型中 θ=90° 时消光。', '检偏器方向、cos²θ、强度读数和亮度同步到 0。', '马吕斯定律 I=I0cos²θ 是拓展模型。', '真实偏振片可能漏光，“全黑”只属于理想模型。', '先分清自然光、起偏器和检偏器。'),
    'X1-24': lesson('X1-24', '同一金属中，入射频率低于截止频率时增大光强能否打出光电子？', [['no', '不能，单个光子能量不足'], ['yes', '能，光强足够大即可'], ['kinetic', '只会提高单个电子最大动能']], 'no', [{ selector: '#nu', value: '4.0' }, { selector: '#int', value: '3' }], '普通单光子模型中仍不发射光电子。', '频率、截止频率、发射状态和最大初动能读数同步。', '光强改变光子数，频率决定单个光子能量 hν。', '这是跨模块复习入口，官方主节点为 X3-19；多光子过程不在本模型。', '先比较 ν 与 ν0，再讨论光强和饱和电流。'),
    'X1-25': lesson('X1-25', '机械波进入波速更小的介质，频率和折射角怎样？', [['slower', '频率不变，折射角变小'], ['frequency', '频率变小'], ['away', '折射角一定变大']], 'slower', [{ selector: '#v2', value: '1.0' }], '频率保持，波速和波长变小，折射线偏向法线。', 'v1、v2、f、λ1、λ2 和角度由同一折射关系计算。', '机械波满足 sinθ1/v1=sinθ2/v2，角度相对法线。', '不要把光学折射率公式无条件搬到任意机械波介质。', '跨界面先守住频率，再联动 v、λ 和折射方向。'),
    'X1-26': lesson('X1-26', '公式 r≈Lθ 中的 θ 应表示全发散角还是半发散角？', [['half', '半发散角，且用弧度'], ['full', '任意定义都一样'], ['degree', '必须用角度制']], 'half', [{ selector: '#divergence', value: '0.5' }], '本页明确使用半发散角 θ，远处光斑半径 r≈Lθ。', '控件、光束两侧边界、轴线、半角读数和光斑半径使用同一定义。', '若题目给全角 Θ，应先取 θ=Θ/2。', '实际光斑还受束腰、衍射和介质影响。', '先确认角度定义和单位，再代入小角近似。'),
    'X1-27': lesson('X1-27', '若包层折射率 n₂ 不小于芯层 n₁，页面应怎样处理？', [['reject', '明确拒绝参数，不能静默改值'], ['clamp', '界面保留输入但内部偷偷改小'], ['guide', '仍宣称可全反射导光']], 'reject', [{ selector: '#n2', value: '1.55' }], '参数被明确拒绝，临界角不定义，也不伪造损耗百分比。', '滑块值、显示值和内部模型保持一致，状态说明 n₁ 必须大于 n₂。', '每次反射还要按弯曲边界局部法线检验 i>C。', '没有材料吸收、散射数据时只能给定性泄漏证据。', '光纤题逐次检查折射率、局部入射角和弯曲边界。')
  };

  const defaults = {
    'momentum.html':'X1-01','impulse.html':'X1-02','momentum-collision.html':'X1-04','recoil.html':'X1-07','shm.html':'X1-08','pendulum.html':'X1-09','damped-vibration.html':'X1-11','forced-resonance.html':'X1-12','wave-basics.html':'X1-13','wave-interference.html':'X1-16','wave-diffraction.html':'X1-17','doppler.html':'X1-18','refraction.html':'X1-19','total-reflection.html':'X1-20','double-slit.html':'X1-21','light-diffraction.html':'X1-22','polarization.html':'X1-23','photoelectric.html':'X1-24','wave-reflection-refraction.html':'X1-25','laser.html':'X1-26','fiber-optic.html':'X1-27'
  };

  const motionStyle=document.createElement('style');
  motionStyle.textContent='@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}}';
  document.head.appendChild(motionStyle);
  const media=window.matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.dataset.x1Motion=media.matches?'reduce':'full';
  if(media.addEventListener)media.addEventListener('change',event=>{document.documentElement.dataset.x1Motion=event.matches?'reduce':'full';});

  const file=decodeURIComponent(location.pathname.split('/').pop()||'');
  const requested=new URLSearchParams(location.search).get('lesson');
  const config=lessons[requested||defaults[file]];
  const canvas=document.querySelector('canvas');
  const host=document.querySelector('.panel')||document.querySelector('.container')||document.querySelector('.wrap')||document.body;
  if(!config||!canvas||!host)return;

  pauseExistingMotion();
  const style=document.createElement('style');
  style.textContent=`
    .x1-guide{border:2px solid #2563eb;background:#eff6ff;color:#1e3a5f;border-radius:10px;padding:10px;display:grid;gap:8px;margin:0 0 10px;min-width:0}
    .x1-guide h2{font-size:15px;line-height:1.45;margin:0;color:#0f172a}.x1-guide p{font-size:12px;line-height:1.55;margin:0}
    .x1-guide-options{display:grid;grid-template-columns:1fr;gap:6px}.x1-guide-options button{min-height:38px;text-align:left;padding:7px 9px;background:#fff}
    .x1-guide-options button[aria-pressed="true"]{border-color:#2563eb;background:#dbeafe;color:#1e3a8a;font-weight:800}
    .x1-guide-verify{min-height:38px;background:#2563eb!important;border-color:#2563eb!important;color:#fff!important;font-weight:800}.x1-guide-verify:disabled{background:#94a3b8!important;border-color:#94a3b8!important}
    .x1-guide-feedback{border-left:4px solid #0f766e;background:#ecfdf5;padding:8px;color:#134e4a;font-size:12px;line-height:1.58}.x1-guide-boundary,.x1-guide-transfer{border-top:1px dashed #5eead4;padding-top:7px;margin-top:6px!important}.x1-guide-transfer{border-color:#93c5fd;color:#334155}
    .x1-guide-replay{min-height:36px;background:#fff!important}.x1-guide-motion{color:#475569;font-size:11px!important}.x1-guide-stage{position:relative;width:100%;min-width:0}
    .x1-guide-veil{position:absolute;inset:0;display:grid;place-items:center;background:rgba(239,246,255,.54);z-index:20;pointer-events:none;border-radius:10px}.x1-guide-veil span{max-width:82%;border:1px solid #60a5fa;background:rgba(255,255,255,.96);border-radius:9px;padding:9px 12px;color:#1e3a8a;font-size:13px;font-weight:800;text-align:center;line-height:1.5}
    [data-x1-guide-answer-hidden]{visibility:hidden!important}[data-x1-guide-locked]{display:none!important}@media(max-width:760px){.x1-guide{padding:9px}.x1-guide h2{font-size:14px}.x1-guide-options button{font-size:13px}}
  `;
  document.head.appendChild(style);

  const guide=document.createElement('section');guide.className='x1-guide';guide.dataset.x1Guide=config.id;guide.setAttribute('aria-label',config.id+' 引导演示');
  guide.innerHTML=`<h2>${escapeHtml(config.question)}</h2><p>${escapeHtml(config.observe)}</p><p class="x1-guide-motion">${media.matches?'已启用减少动态：验证会直接进入静态证据状态。':'先预测；验证后开放画面、读数、公式与自由探索。'}</p><div class="x1-guide-options" role="group" aria-label="请选择预测"></div><button class="x1-guide-verify" type="button" disabled>验证预测</button><div class="x1-guide-feedback" hidden aria-live="polite"></div><button class="x1-guide-replay" type="button" hidden>重新预测并重置</button>`;
  const task=host.querySelector('.task');const heading=host.querySelector('h1,h2');if(task)task.insertAdjacentElement('afterend',guide);else if(heading)heading.insertAdjacentElement('afterend',guide);else host.prepend(guide);

  const options=guide.querySelector('.x1-guide-options'),verify=guide.querySelector('.x1-guide-verify'),feedback=guide.querySelector('.x1-guide-feedback'),replay=guide.querySelector('.x1-guide-replay');let chosen=null;
  config.options.forEach(([value,label])=>{const button=document.createElement('button');button.type='button';button.textContent=label;button.dataset.guideChoice=value;button.setAttribute('aria-pressed','false');button.addEventListener('click',()=>{chosen={value,label};options.querySelectorAll('button').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));verify.disabled=false;});options.appendChild(button);});

  const stage=document.createElement('div');stage.className='x1-guide-stage';canvas.parentNode.insertBefore(stage,canvas);stage.appendChild(canvas);const veil=document.createElement('div');veil.className='x1-guide-veil';veil.innerHTML='<span>先完成预测，再显示清晰画面、读数和公式证据</span>';stage.appendChild(veil);
  canvas.style.filter='blur(5px)';canvas.style.opacity='0.34';canvas.style.pointerEvents='none';canvas.dataset.guideStage='predict';document.documentElement.dataset.x1GuideStage='predict';
  const answerNodes=[...document.querySelectorAll('.formula,.read,.readouts,.readout,.chips,#readout')].filter(node=>!guide.contains(node));answerNodes.forEach(node=>node.setAttribute('data-x1-guide-answer-hidden',''));
  const controls=[...document.querySelectorAll('button,input,select,textarea')].filter(node=>!guide.contains(node));const controlStates=new Map(controls.map(node=>[node,node.disabled]));controls.forEach(node=>{node.disabled=true;node.setAttribute('data-x1-guide-locked','');});

  verify.addEventListener('click',async()=>{if(!chosen||verify.disabled)return;verify.disabled=true;options.querySelectorAll('button').forEach(button=>{button.disabled=true;});try{await runActions(config.actions||[]);}catch(error){console.error(error);feedback.hidden=false;feedback.textContent='引导演示未完成：'+error.message;return;}
    controls.forEach(node=>{node.disabled=controlStates.get(node);node.removeAttribute('data-x1-guide-locked');});answerNodes.forEach(node=>node.removeAttribute('data-x1-guide-answer-hidden'));veil.remove();canvas.style.filter='';canvas.style.opacity='';canvas.style.pointerEvents='';canvas.dataset.guideStage='explore';document.documentElement.dataset.x1GuideStage='explore';feedback.hidden=false;
    feedback.innerHTML=`<b>你的预测：</b>${escapeHtml(chosen.label)}<br><b>实际结果：</b>${escapeHtml(config.result)}<br><b>画面证据：</b>${escapeHtml(config.evidence)}<br><b>为什么：</b>${escapeHtml(config.explanation)}<p class="x1-guide-boundary"><b>模型边界：</b>${escapeHtml(config.boundary)}</p><p class="x1-guide-transfer"><b>高考迁移：</b>${escapeHtml(config.transfer)}</p>`;
    verify.textContent=chosen.value===config.correct?'预测已验证：开放公式与探索':'用证据修正预测：开放公式与探索';replay.hidden=false;guide.dispatchEvent(new CustomEvent('x1-guide-complete',{bubbles:true,detail:{id:config.id,choice:chosen.value}}));
  });
  replay.addEventListener('click',()=>location.reload());

  async function runActions(actions){for(const action of actions){const target=document.querySelector(action.selector);if(!target)throw new Error('缺少动作目标 '+action.selector);target.disabled=false;if(Object.prototype.hasOwnProperty.call(action,'value')){target.value=action.value;target.dispatchEvent(new Event('input',{bubbles:true}));target.dispatchEvent(new Event('change',{bubbles:true}));}else target.click();await wait(action.after||80);}}
  function pauseExistingMotion(){const candidates=[...document.querySelectorAll('#play-btn,#playBtn,#play')];const running=candidates.find(button=>/暂停/.test(button.textContent||''));if(running)running.click();}
  function wait(ms){return media.matches?Promise.resolve():new Promise(resolve=>setTimeout(resolve,ms));}
  function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));}
})();
