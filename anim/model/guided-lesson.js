(function () {
  'use strict';

  function lesson(id, question, options, correct, actions, result, evidence, explanation, boundary, transfer) {
    return {id, question, options, correct, actions, result, evidence, explanation, boundary, transfer};
  }

  const lessons = {
    'M-01': lesson('M-01', '轻绳连接的两个物体能否直接当成同一整体？', [
      ['constraint', '先检查绳长约束和共同运动，再决定整体法'], ['always', '只要相连就一定同加速度'], ['tension', '先把张力写进整体方程']
    ], 'constraint', [{selector: '[data-mode="horizontal"]'}, {selector: '#playBtn', after: 140}],
    '水平轻绳情境中两物体满足共同加速度，整体方程只保留外力；求张力时再隔离。', '整体加速度、连接处张力和整体/隔离方程由同一组质量与外力计算。',
    '整体法成立来自约束，不来自“物体相连”这个词。', '弹簧可伸缩、绳松弛或物体相对滑动时，不能先验指定同一加速度。', '先写约束，再选整体，最后隔离求内力。'),
    'M-02': lesson('M-02', '水平拉动上层物块时，怎样判断物块和木板能否一起运动？', [
      ['compare', '先假设共动，再比较所需静摩擦与最大静摩擦'], ['kinetic', '一开始就使用滑动摩擦'], ['mass', '只比较两个质量大小']
    ], 'compare', [{selector: '[data-case="safe"]'}],
    '安全参数下所需静摩擦不超过最大静摩擦，物块和木板共同运动。', '页面同时显示共同加速度、所需静摩擦、最大静摩擦和是否打滑。',
    '静摩擦先按运动需要取值，只有超过上限后才转为相对滑动。', '拉力作用对象、地面是否粗糙和静/动摩擦因数改变都会改写临界式。', '板块题先做共动假设，再用临界不等式验算。'),
    'M-03': lesson('M-03', '物块速度小于向右运动的传送带速度时，摩擦力指向哪里？', [
      ['right', '向右，阻碍物块相对传送带向左滑'], ['left', '向左，因为摩擦总阻碍对地运动'], ['zero', '始终为零']
    ], 'right', [{selector: '[data-case="slow"]'}, {selector: '#playBtn', after: 160}],
    '物块先受向右滑动摩擦而加速，达到带速后相对滑动消失。', '速度箭头、摩擦方向、共速时刻和相对位移同步变化。',
    '摩擦阻碍接触面的相对滑动，不一定阻碍物体对地运动。', '倾斜传送带还要加入重力沿斜面分量；带长有限时可能未共速就离开。', '先比较相对速度，再分共速前后两阶段。'),
    'M-04': lesson('M-04', '剪断轻绳后的瞬间，未被剪断的理想轻弹簧弹力怎样？', [
      ['same', '形变量来不及改变，弹力保持剪断前数值'], ['zero', '所有连接力都瞬间变为零'], ['double', '弹力瞬间加倍']
    ], 'same', [{selector: '[data-target="rope"]'}, {selector: '#playBtn', after: 150}],
    '轻绳张力立即消失，弹簧形变量和弹力在 t=0+ 保持原值，合力因此改变。', '剪断前后受力图、弹簧长度、弹力读数和瞬时加速度同屏对比。',
    '弹簧力由形变量决定，而位置不能在有限力作用下瞬间跳变。', '若弹簧本身被剪断，其作用力立即消失；“不突变”只指 t=0+ 瞬间。', '先由 t=0- 求原弹力，再重画 t=0+ 受力图。'),
    'M-05': lesson('M-05', '同一高度平抛，只增大水平初速度，落地时间怎样变化？', [
      ['same', '不变，但水平射程增大'], ['shorter', '变短'], ['longer', '变长']
    ], 'same', [{selector: '[data-case="fast"]'}],
    '落地时间不变，水平射程增大。', '竖直频闪点和落地时刻不变，水平点距和射程增大。',
    '忽略阻力时，竖直运动由高度、竖直初速度和重力加速度独立决定。', '类平抛还要求恒加速度与初速度垂直；若打到极板等边界，要先检查可达性。', '沿初速度与恒力方向分解，再用共同时间合成。'),
    'M-06': lesson('M-06', '轻绳小球恰好通过竖直圆周最高点时，绳张力怎样？', [
      ['zero', 'T=0，重力独自提供向心力'], ['up', '绳向上推小球'], ['negative', '张力取负值仍表示绳绷紧']
    ], 'zero', [{selector: '[data-case="critical"]'}, {selector: '[data-predict="track"]'}, {selector: '#playBtn', after: 180}],
    '临界状态 T=0；再降低速度，轻绳松弛而不再维持圆周。', '最高点真实力、向心方向、张力读数和轨迹判定同步。',
    '轻绳只能拉不能推，临界来自允许张力的下界。', '轻杆或圆管可提供双向约束；杆球到达最高点速度为零时可能反向，不能称为持续过顶。', '先判断约束能否推拉，再把“恰好”翻译为边界条件。'),
    'M-07': lesson('M-07', '同一中心天体的圆轨道半径增大后，速度和周期怎样？', [
      ['slower', '速度减小，周期增大'], ['faster', '速度增大，周期减小'], ['free', '速度可独立任意选择']
    ], 'slower', [{selector: '[data-type="high"]'}],
    '高圆轨道速度更小、周期更长。', '轨道半径、速度、周期和万有引力向心条件使用同一状态。',
    '由万有引力提供向心力可得 v 与 r 的反平方根关系、T 与 r 的三次方平方根关系。', '该比较只适用于同一中心天体的稳定圆轨道；同步卫星周期按地球自转周期，高中题常近似 24 h。', '先分类圆轨、变轨或双星，再选关系。'),
    'M-08': lesson('M-08', '恒功率阶段速度继续增大时，牵引力和加速度怎样？', [
      ['decrease', '牵引力减小，加速度减小'], ['same', '都保持不变'], ['increase', '都增大']
    ], 'decrease', [{selector: '[data-case="nearMax"]'}],
    '牵引力随速度增大而减小，最终接近阻力，加速度趋近 0。', 'F=P/v、阻力、合力、加速度和最大速度读数同步。',
    '恒功率不等于恒牵引力；相同功率下速度越大，对应牵引力越小。', 'v=0 不能直接代入 P/v；真实起步通常先受最大牵引力或额定功率约束。', '先判恒牵引力或恒功率阶段，再列动力学方程。'),
    'M-09': lesson('M-09', '摩擦力对一个物体一定做负功吗？', [
      ['depends', '不一定，要看该物体位移与摩擦力方向'], ['negative', '一定做负功'], ['heat', '摩擦功总等于摩擦生热']
    ], 'depends', [{selector: '[data-case="rough"]'}],
    '固定粗糙斜面上摩擦做负功；但传送带可对物块做正功，纯滚动中静摩擦也可能不做功。', '本情境的位移、摩擦功、机械能变化和内能账本分别显示。',
    '功的正负由力与研究对象位移夹角决定；摩擦生热取接触面的相对位移。', '系统选择不同，摩擦可能是内力或外力，Wf 与 Q=f s相对不能混写。', '先选对象和初末态，再分别列机械功与内能账。'),
    'M-10': lesson('M-10', '等质量、一动一静的一维弹性正碰，碰后速度怎样？', [
      ['exchange', '速度交换'], ['stick', '粘在一起'], ['increase', '两车动能都增加']
    ], 'exchange', [{selector: '[data-e="1"]'}, {selector: '#m1', value: '1'}, {selector: '#m2', value: '1'}, {selector: '#v1', value: '5'}, {selector: '#v2', value: '0'}, {selector: '#play-btn', after: 180}],
    '两物体交换速度，总动量和总动能同时守恒。', '碰前后速度、动量条和动能条使用同一碰撞状态。',
    '速度交换只属于等质量、一动一静、正碰且弹性的特例。', '被动碰撞中动能不增加；爆炸、反冲或超弹性过程需把内部能量释放单独入账。', '先检查追及和外冲量，再按碰撞类型补第二条件。'),
    'M-11': lesson('M-11', '导体棒速度反向时，感应电动势、电流和安培力怎样联动？', [
      ['chain', '电动势和电流反向，安培力仍阻碍相对运动'], ['force', '只有速度反向'], ['heat', '焦耳热功率变成负值']
    ], 'chain', [{selector: '#reverse-v'}],
    '速度反向后感应电动势和电流反向，安培力随之反向而继续阻碍运动；I²R 仍非负。', '速度、磁通变化率、电动势、电流、安培力和功率由同一几何状态计算。',
    '楞次定律确定方向，能量账用于复核而不是代替方向判断。', 'E=BLv 只适用于有效长度、速度和磁场两两垂直的特例，回路还必须闭合才有持续电流。', '沿 Φ→E→I→F→能量逐环核对。'),
    'M-12': lesson('M-12', '理想变压器副线圈匝数减半时，副边有效电压怎样？', [
      ['half', '减半'], ['double', '加倍'], ['same', '不变']
    ], 'half', [{selector: '#n1', value: '1000'}, {selector: '#n2', value: '500'}, {selector: '#u1', value: '220'}],
    '副边有效电压变为原边的一半。', '原副线圈匝数、电压有效值、电流和理想功率账同步。',
    '理想变压器同一磁通变化率使电压比等于匝数比。', '只处理交流；P=UI、U²/R、I²R 在本节只用于正弦交流纯电阻负载。', '先分清峰值/有效值，再使用匝数比和功率边界。'),
    'M-13': lesson('M-13', '速度选择器中粒子严格直线通过的条件是什么？', [
      ['equal', '电场力与洛伦兹力等大反向'], ['near', '两力接近即可严格直线'], ['charge', '只由电荷正负决定']
    ], 'equal', [{selector: '#electric', value: '4'}, {selector: '#magnetic', value: '0.8'}, {selector: '#speed', value: '5'}],
    'E/B=5.00×10³ m/s 时两力严格平衡，粒子直线通过。', '力箭头、轨迹、F-v 图和纯磁场半径尺使用同一精确状态。',
    '电荷正负会同时反转两力方向，但平衡速度大小仍为 E/B。', '纯磁场半径是正的几何量，必须写 R=mv/(|q|B)，并要求速度垂直磁场。', '先判方向，再判平衡，出场后分段列圆周。'),
    'M-14': lesson('M-14', 'p-V 图中气体对外做功由什么决定？', [
      ['path', '由过程路径下的有向面积决定'], ['endpoints', '只由初末状态决定'], ['vertical', '等容竖线也有非零体积功']
    ], 'path', [{selector: '[data-mode="isoP"]'}, {selector: '#v1', value: '1'}, {selector: '#v2', value: '2'}, {selector: '#p1', value: '2'}],
    '等压膨胀时做功是矩形面积 pΔV；一般过程必须按实际路径求面积。', '过程曲线、阴影面积、方向和做功读数来自同一 p-V 路径。',
    '体积功是过程量，仅给初末态不能确定一般过程的功。', '等容过程 ΔV=0、做功为 0；直线路径用梯形面积，不能误用 p1ΔV。', '先判过程路径，再读面积和正负。'),
    'M-15': lesson('M-15', '若反应后总静止质量大于反应前，质量亏损 Δm 和能量怎样？', [
      ['absorb', 'Δm<0，需要吸收能量'], ['release', 'Δm<0 仍释放能量'], ['az', 'A、Z 守恒就说明静止质量相等']
    ], 'absorb', [{selector: '#dm', value: '-0.05'}, {selector: '#count', value: '12'}],
    'Δm<0 时能量读数为负，表示该反应需要外界输入能量。', '质量天平、E-Δm 图、单次能量和总能量同步改变。',
    '质量数和电荷数守恒不等于反应前后精确静止质量相等。', '931.5 MeV 换算要求 Δm 以 u 为单位；比较核子结合紧密程度应使用有来源的核素 Eb/A 数据。', '先配平 A、Z，再算精确质量差，最后判断放能或吸能。')
  };

  const id = new URLSearchParams(location.search).get('lesson');
  const config = lessons[id];
  if (!config) return;

  const canvas = document.querySelector('canvas');
  const host = document.querySelector('.panel') || document.querySelector('.controls') || document.querySelector('.wrap') || document.body;
  if (!canvas || !host) return;
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.dataset.modelMotion = media.matches ? 'reduce' : 'normal';
  document.documentElement.dataset.modelGuideStage = 'predict';
  pauseExistingMotion();

  const style = document.createElement('style');
  style.textContent = `
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}}
    .model-guide{border:2px solid #7c3aed;background:#f5f3ff;color:#312e81;border-radius:10px;padding:10px;display:grid;gap:8px;margin-bottom:10px;min-width:0}.model-guide h2,.model-guide p{margin:0}.model-guide h2{font-size:15px;line-height:1.45}.model-guide p{font-size:12px;line-height:1.55}.model-guide-options{display:grid;gap:6px}.model-guide-options button,.model-guide-verify,.model-guide-replay{min-height:38px;border:1px solid #8b5cf6!important;border-radius:7px!important;background:#fff!important;color:#4c1d95!important;font-weight:800!important;padding:7px 9px!important;cursor:pointer}.model-guide-options button[aria-pressed="true"]{background:#ede9fe!important}.model-guide-verify{background:#7c3aed!important;color:#fff!important}.model-guide-verify:disabled{background:#94a3b8!important;border-color:#94a3b8!important}.model-guide-feedback{border-left:4px solid #0f766e;background:#ecfdf5;padding:8px;color:#134e4a;font-size:12px;line-height:1.58}.model-guide-boundary,.model-guide-transfer{border-top:1px dashed #5eead4;padding-top:7px;margin-top:6px!important}.model-guide-transfer{border-color:#c4b5fd;color:#334155}.model-guide-motion{color:#475569}.model-guide-stage{position:relative;width:100%;min-width:0}.model-guide-veil{position:absolute;inset:0;display:grid;place-items:center;background:rgba(245,243,255,.62);z-index:20;pointer-events:none;border-radius:10px}.model-guide-veil span{max-width:82%;border:1px solid #a78bfa;background:rgba(255,255,255,.97);border-radius:9px;padding:9px 12px;color:#5b21b6;font-size:13px;font-weight:800;text-align:center;line-height:1.5}[data-model-answer-hidden]{visibility:hidden!important}[data-model-locked]{display:none!important}@media(max-width:760px){.model-guide{padding:9px}.model-guide h2{font-size:14px}}
  `;
  document.head.appendChild(style);

  const guide = document.createElement('section');
  guide.className = 'model-guide';
  guide.dataset.modelGuide = config.id;
  guide.setAttribute('aria-label', `${config.id} 模型引导演示`);
  guide.innerHTML = `<h2>${esc(config.question)}</h2><p>先按研究对象、约束和过程作预测；验证后才开放公式、读数和自由探索。</p><p class="model-guide-motion">${media.matches ? '已启用减少动态：验证后直接进入静态证据状态。' : '先预测，再观察真实状态变化。'}</p><div class="model-guide-options" role="group" aria-label="请选择预测"></div><button class="model-guide-verify" type="button" disabled>验证预测</button><div class="model-guide-feedback" hidden aria-live="polite"></div><button class="model-guide-replay" type="button" hidden>重新预测并重置</button>`;
  const task = host.querySelector('.task,.hint');
  if (task) task.insertAdjacentElement('afterend', guide);
  else host.prepend(guide);

  const options = guide.querySelector('.model-guide-options');
  const verify = guide.querySelector('.model-guide-verify');
  const feedback = guide.querySelector('.model-guide-feedback');
  const replay = guide.querySelector('.model-guide-replay');
  let chosen = null;
  config.options.forEach(([value, label]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.dataset.guideChoice = value;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      chosen = {value, label};
      options.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      verify.disabled = false;
    });
    options.appendChild(button);
  });

  const stage = document.createElement('div');
  stage.className = 'model-guide-stage';
  canvas.parentNode.insertBefore(stage, canvas);
  stage.appendChild(canvas);
  const veil = document.createElement('div');
  veil.className = 'model-guide-veil';
  veil.innerHTML = '<span>先完成预测，再显示清晰画面、读数和公式证据</span>';
  stage.appendChild(veil);
  canvas.style.filter = 'blur(5px)';
  canvas.style.opacity = '.34';
  canvas.style.pointerEvents = 'none';
  canvas.dataset.guideStage = 'predict';

  const answers = [...document.querySelectorAll('.formula,.read,.readout,.readouts,.status,#readout')].filter(node => !guide.contains(node));
  answers.forEach(node => node.setAttribute('data-model-answer-hidden', ''));
  const controls = [...document.querySelectorAll('button,input,select,textarea')].filter(node => !guide.contains(node));
  const states = new Map(controls.map(node => [node, node.disabled]));
  const acted = new Set();
  controls.forEach(node => { node.disabled = true; node.setAttribute('data-model-locked', ''); });

  verify.addEventListener('click', async () => {
    if (!chosen || verify.disabled) return;
    verify.disabled = true;
    options.querySelectorAll('button').forEach(button => { button.disabled = true; });
    try {
      await run(config.actions || []);
    } catch (error) {
      feedback.hidden = false;
      feedback.textContent = `引导演示未完成：${error.message}`;
      return;
    }
    controls.forEach(node => { if (!acted.has(node)) node.disabled = states.get(node); node.removeAttribute('data-model-locked'); });
    answers.forEach(node => node.removeAttribute('data-model-answer-hidden'));
    veil.remove();
    canvas.style.filter = '';
    canvas.style.opacity = '';
    canvas.style.pointerEvents = '';
    canvas.dataset.guideStage = 'explore';
    document.documentElement.dataset.modelGuideStage = 'explore';
    feedback.hidden = false;
    feedback.innerHTML = `<b>你的预测：</b>${esc(chosen.label)}<br><b>实际结果：</b>${esc(config.result)}<br><b>画面证据：</b>${esc(config.evidence)}<br><b>为什么：</b>${esc(config.explanation)}<p class="model-guide-boundary"><b>模型边界：</b>${esc(config.boundary)}</p><p class="model-guide-transfer"><b>高考迁移：</b>${esc(config.transfer)}</p>`;
    verify.textContent = chosen.value === config.correct ? '预测已验证：开放公式与探索' : '用证据修正预测：开放公式与探索';
    replay.hidden = false;
    guide.dispatchEvent(new CustomEvent('model-guide-complete', {bubbles: true, detail: {id: config.id, choice: chosen.value}}));
  });
  replay.addEventListener('click', () => location.reload());

  async function run(actions) {
    for (const action of actions) {
      const target = document.querySelector(action.selector);
      if (!target) throw new Error(`缺少动作目标 ${action.selector}`);
      acted.add(target);
      target.disabled = false;
      target.removeAttribute('data-model-locked');
      if (Object.prototype.hasOwnProperty.call(action, 'value')) {
        target.value = action.value;
        target.dispatchEvent(new Event('input', {bubbles: true}));
        target.dispatchEvent(new Event('change', {bubbles: true}));
      } else target.click();
      await wait(action.after || 70);
    }
  }
  function pauseExistingMotion() {
    const running = [...document.querySelectorAll('button')].find(button => /暂停|冻结/.test(button.textContent || ''));
    if (running) running.click();
  }
  function wait(ms) { return media.matches ? Promise.resolve() : new Promise(resolve => setTimeout(resolve, ms)); }
  function esc(value) { return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])); }
})();
