(function () {
  'use strict';

  function lesson(id, question, options, correct, actions, result, evidence, explanation, boundary, transfer) {
    return {id, question, options, correct, actions, result, evidence, explanation, boundary, transfer};
  }

  const lessons = {
    'G-01': lesson('G-01', '一条不过原点的 I-U 直线，斜率应怎样计算？', [
      ['delta', '取两点，计算 ΔI/ΔU'], ['ratio', '任取一点，计算 I/U'], ['area', '计算图线下方面积']
    ], 'delta', [{selector: '#iu'}, {selector: '#c', value: '5'}, {selector: '#a', value: '1'}, {selector: '#b', value: '6'}],
    '页面得到斜率 0.45 A/V；I/U 会随所取点变化。', '非零截距图线把 ΔI/ΔU 与 I/U 明确分开。',
    '斜率描述纵量变化与横量变化的比，只有过原点正比例直线才可用 y/x。', '面积的物理意义也必须同时由坐标轴量纲与过程确定。',
    '图像题先写坐标轴，再写割线或切线斜率，最后解释单位。'),
    'G-02': lesson('G-02', '图线上出现一个偏离多数点的数据，应立即删除吗？', [
      ['recheck', '先复测并查记录或装置原因'], ['delete', '只要离直线远就删除'], ['keep', '任何数据都绝不能删除']
    ], 'recheck', [{selector: '#inspect'}, {selector: '#toggle'}],
    '复测第 5 点未复现原偏差，页面才允许把它标为可剔除记录。', '原始值、复测值、残差和拟合变化保留在同一证据链中。',
    '异常点处理需要原因和复测证据，不能按想要的结论挑数据。', '本页是理想仿真；真实实验还要按实验规范和不确定度处理。',
    '实验题写清原始数据、异常依据、处理决定以及处理前后结论。'),
    'G-03': lesson('G-03', '仪器的零误差和量程是什么关系？', [
      ['independent', '相互独立，必须分别选择和修正'], ['same', '同一个滑块可同时代表二者'], ['ignore', '只看指针位置即可']
    ], 'independent', [{selector: '#meter'}, {selector: '#range', value: '15V'}, {selector: '#zero', value: '2'}],
    '量程保持 15 V，机械零位偏差只改变刻度修正，不再改变仪器单位。', '表盘刻度、独立量程、零位偏差、修正读数和单位同步。',
    '量程决定每格代表多少，零误差决定是否需从示值中扣除，两者不能混用。', '游标卡尺、测微器、线性电表与欧姆表的刻度规律不同。',
    '读数题按“仪器—量程—分度—示值—零误差—单位”逐项作答。'),
    'G-04': lesson('G-04', '多测几次取平均能消除固定零点偏差吗？', [
      ['no', '不能，需校准或修正'], ['yes', '次数足够多就一定消失'], ['random', '会自动变成偶然误差']
    ], 'no', [{selector: '#sys', value: '1.00'}, {selector: '#correct'}],
    '修正前平均值整体偏移；扣除零误差后，表格与误差列同时更新。', '真实线、平均线、修正读数和剩余误差来自同一组数据。',
    '平均主要减小偶然误差，固定系统偏差要靠校准、修正或改进装置。', '是否“可信”取决于任务允许误差或不确定度，不存在跨实验通用 2% 门槛。',
    '误差分析必须把来源、方向、公式影响和改进措施一一对应。'),
    'G-05': lesson('G-05', '待测电阻较小且需要测 U-I，通常先比较哪种接法？', [
      ['outer', '电流表外接，检查电压表分流误差'], ['inner', '一律电流表内接'], ['range', '不看接法，只换大量程']
    ], 'outer', [{selector: '#outer'}, {selector: '#divider'}, {selector: '#rx', value: '10'}],
    '外接拓扑中电流表读总电流，R测偏小；页面同时显示支路和安全检查。', '实际接线拓扑、RA/RV 负载、表头读数、R测和过载提示由同一电路求解。',
    '内外接选择要比较两类相对误差，不能只背“大内小外”。', '量程和滑变器额定值是安全边界；分压与限流也必须真实改变拓扑。',
    '设计题按目标、估值、接法、调节方式、量程、安全、误差方向作答。'),
    'G-06': lesson('G-06', '内轨最高点恰好不断轨时，支持力方向和大小怎样？', [
      ['zero', '指向圆心且临界时 N=0'], ['out', '沿半径向外且不为零'], ['up', '始终竖直向上']
    ], 'zero', [{selector: '#main', value: '5.42'}],
    '临界速度附近 N→0；高于临界时 N 指向圆心，低于临界时物体脱离。', '最高点受力箭头、N/m=v²/R-g、临界判定和脱离轨迹一致。',
    '约束力只能按具体绳、杆、内轨、外轨模型确定方向和允许范围。', '本页固定研究内轨最高点，不把同一个最高点公式套到整圈。',
    '临界题先画边界状态，再写允许受力方向与 N=0 条件。'),
    'G-07': lesson('G-07', '后一阶段的初速度应从哪里得到？', [
      ['previous', '前一阶段的末速度'], ['zero', '每一段都重新取 0'], ['average', '全程平均速度']
    ], 'previous', [{selector: '#a1', value: '3'}, {selector: '#t1', value: '3'}, {selector: '#step', repeat: 12}],
    '第一段末速度自动成为匀速段速度，后续制动从同一速度接续。', '小车、阶段条、v-t 游标、分段面积和累计位移同步。',
    '分段不等于割裂；状态量必须在相邻阶段边界连续接续。', '只有研究对象和适用时段满足条件时，守恒关系才能跨段使用。',
    '多过程题先画时间线，并把每段末状态抄到下一段初态。'),
    'G-08': lesson('G-08', '弹性势能达到最大值一半时，压缩量是最大值的多少？', [
      ['root', '√(1/2)'], ['half', '1/2'], ['quarter', '1/4']
    ], 'root', [{selector: '#step', repeat: 24}],
    't=6 s 时 Ep/K碰后=1/2，画面压缩量为 x/xmax=√(1/2)。', '动量账、能量柱、弹簧几何和小车位置使用同一状态。',
    'Ep=1/2 kx²，所以能量比例与压缩比例不是线性关系。', '碰撞阶段与压簧阶段选择的系统不同，守恒条件也不同。',
    '综合题分成“碰撞动量”与“碰后能量”两张账。'),
    'G-09': lesson('G-09', '导体棒反向运动时，哪些量必须同时反向？', [
      ['chain', 'dΦ/dt、ε、I 和安培力方向'], ['force', '只有速度，安培力不变'], ['heat', '电热功率也变成负值']
    ], 'chain', [{selector: '#step'}],
    '单步 0.25 s 后，ΔΦ/Δt、BLv 与 |ε| 数值相等，安培力与速度反向。', '有单位的位置 x 唯一驱动 Φ=BLx、差分斜率、ε、I、F 和功率。',
    '楞次定律决定方向；电热功率 I²R 始终非负。', '公式成立需匀强场、有效长度垂直速度且回路模型明确。',
    '电磁感应综合题沿“Φ→ε→I→F→能量”逐环核对。'),
    'G-10': lesson('G-10', '速度选择器中粒子严格直线通过的条件是什么？', [
      ['equal', 'qE 与 qvB 等大反向'], ['near', '相差 4% 也必定是直线'], ['charge', '只要是正电荷']
    ], 'equal', [{selector: '#electric', value: '4'}, {selector: '#magnetic', value: '0.8'}, {selector: '#speed', value: '5'}],
    '默认 E/B=5.00×10³ m/s，只有合力为零时判为严格直线通过。', '电场力、洛伦兹力、轨迹、速度图线和记录表使用同一精确判据。',
    '若实验要允许容差，必须另给狭缝宽度或探测器分辨率，不能改写物理条件。', '磁场圆周运动还要求速度垂直磁场且其他力可忽略。',
    '先判电荷正负和两力方向，再列 qE=qvB。'),
    'G-11': lesson('G-11', '忽略空气阻力的水平投放，包裹水平速度怎样变化？', [
      ['constant', '等于释放瞬间地面参考系速度并保持不变'], ['wind', '释放后继续直接加上任意风速'], ['zero', '立即变为 0']
    ], 'constant', [{selector: '#drop'}],
    '页面删除无阻力模型中的风控件，使用 x=v0t、h=1/2gt²。', '初速度、下落时间、轨迹、x-t 图和落点来自同一地面参考系。',
    '无空气阻力时风不能在释放后继续改变包裹；若研究风必须显式加入空气力。', '汽车制动中的 a=μg 仅表示水平路面上的极限制动简化。',
    '真实情境建模要先写参考系、保留因素和忽略因素。'),
    'G-12': lesson('G-12', '地球圆轨道半径增大时，圆轨道速度和周期怎样？', [
      ['slower', '速度减小，周期增大'], ['faster', '速度和周期都增大'], ['free', '速度可任意独立选择']
    ], 'slower', [{selector: '#a', value: '2000'}],
    '速度由 v=√(GM/r) 派生，不再允许与高度任意组合；周期由同一引力模型计算。', '高度、半径、圆轨道速度、周期和数量级检查同步。',
    '引力圆轨道必须同时满足向心力条件，不能只用周长除以任意速度冒充可行轨道。', '若材料明确给定受约束的匀速圆周运动，才可单独使用 T=2πr/v。',
    '信息题先提取模型条件，再做单位、数量级和可行性检查。')
  };

  const id = new URLSearchParams(location.search).get('lesson');
  const config = lessons[id];
  if (!config) return;

  const media = matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.dataset.gMotion = media.matches ? 'reduce' : 'normal';
  document.documentElement.dataset.gGuideStage = 'predict';
  pauseExistingMotion();

  const style = document.createElement('style');
  style.textContent = `
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}}
    .g-guide{border:1px solid #a78bfa;border-left:5px solid #7c3aed;border-radius:10px;background:#f5f3ff;padding:10px;display:grid;gap:8px;color:#312e81}
    .g-guide h2,.g-guide p{margin:0}.g-guide h2{font-size:15px}.g-guide-options{display:grid;gap:6px}.g-guide-options button,.g-guide-verify,.g-guide-replay{min-height:38px;border:1px solid #8b5cf6!important;border-radius:7px!important;background:#fff!important;color:#4c1d95!important;font-weight:800!important;padding:7px 9px!important;cursor:pointer}
    .g-guide-options button[aria-pressed="true"]{background:#ede9fe!important}.g-guide-verify{background:#7c3aed!important;color:#fff!important}.g-guide-verify:disabled{background:#94a3b8!important;border-color:#94a3b8!important}.g-guide-feedback{border-left:4px solid #0f766e;background:#ecfdf5;padding:8px;color:#134e4a;font-size:12px;line-height:1.58}.g-guide-boundary,.g-guide-transfer{border-top:1px dashed #5eead4;padding-top:7px;margin-top:6px!important}.g-guide-transfer{border-color:#c4b5fd;color:#334155}.g-guide-motion{color:#475569;font-size:11px!important}.g-guide-stage{position:relative;width:100%;min-width:0}.g-guide-stage>canvas{width:100%!important}.g-guide-veil{position:absolute;inset:0;display:grid;place-items:center;background:rgba(245,243,255,.62);z-index:20;pointer-events:none;border-radius:10px}.g-guide-veil span{max-width:82%;border:1px solid #a78bfa;background:rgba(255,255,255,.97);border-radius:9px;padding:9px 12px;color:#5b21b6;font-size:13px;font-weight:800;text-align:center;line-height:1.5}[data-g-answer-hidden]{visibility:hidden!important}[data-g-locked]{display:none!important}@media(max-width:760px){.g-guide{padding:9px}.g-guide h2{font-size:14px}}
  `;
  document.head.appendChild(style);

  const guide = document.createElement('section');
  guide.className = 'g-guide';
  guide.dataset.gGuide = config.id;
  guide.setAttribute('aria-label', `${config.id} 引导演示`);
  guide.innerHTML = `<h2>${escapeHtml(config.question)}</h2><p>先作预测；验证后才开放清晰画面、读数、公式和自由探索。</p><p class="g-guide-motion">${media.matches ? '已启用减少动态：验证会直接进入静态证据状态。' : '先预测，再用装置证据修正或确认。'}</p><div class="g-guide-options" role="group" aria-label="请选择预测"></div><button class="g-guide-verify" type="button" disabled>验证预测</button><div class="g-guide-feedback" hidden aria-live="polite"></div><button class="g-guide-replay" type="button" hidden>重新预测并重置</button>`;

  const panel = document.querySelector('.panel');
  const task = panel && panel.querySelector('.task,.hint');
  if (task) task.insertAdjacentElement('afterend', guide);
  else if (panel) panel.prepend(guide);
  else document.body.prepend(guide);

  const options = guide.querySelector('.g-guide-options');
  const verify = guide.querySelector('.g-guide-verify');
  const feedback = guide.querySelector('.g-guide-feedback');
  const replay = guide.querySelector('.g-guide-replay');
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

  const canvas = document.querySelector('canvas');
  const stage = document.createElement('div');
  stage.className = 'g-guide-stage';
  canvas.parentNode.insertBefore(stage, canvas);
  stage.appendChild(canvas);
  const veil = document.createElement('div');
  veil.className = 'g-guide-veil';
  veil.innerHTML = '<span>先完成预测，再显示清晰画面、读数和公式证据</span>';
  stage.appendChild(veil);
  canvas.style.filter = 'blur(5px)';
  canvas.style.opacity = '.34';
  canvas.style.pointerEvents = 'none';
  canvas.dataset.guideStage = 'predict';

  const answers = [...document.querySelectorAll('.formula,.readout,.status')].filter(node => !guide.contains(node));
  answers.forEach(node => node.setAttribute('data-g-answer-hidden', ''));
  const controls = [...document.querySelectorAll('button,input,select,textarea')].filter(node => !guide.contains(node));
  const states = new Map(controls.map(node => [node, node.disabled]));
  const actedControls = new Set();
  controls.forEach(node => { node.disabled = true; node.setAttribute('data-g-locked', ''); });

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
    controls.forEach(node => { if (!actedControls.has(node)) node.disabled = states.get(node); node.removeAttribute('data-g-locked'); });
    answers.forEach(node => node.removeAttribute('data-g-answer-hidden'));
    veil.remove();
    canvas.style.filter = '';
    canvas.style.opacity = '';
    canvas.style.pointerEvents = '';
    canvas.dataset.guideStage = 'explore';
    document.documentElement.dataset.gGuideStage = 'explore';
    feedback.hidden = false;
    feedback.innerHTML = `<b>你的预测：</b>${escapeHtml(chosen.label)}<br><b>实际结果：</b>${escapeHtml(config.result)}<br><b>画面证据：</b>${escapeHtml(config.evidence)}<br><b>为什么：</b>${escapeHtml(config.explanation)}<p class="g-guide-boundary"><b>模型边界：</b>${escapeHtml(config.boundary)}</p><p class="g-guide-transfer"><b>高考迁移：</b>${escapeHtml(config.transfer)}</p>`;
    verify.textContent = chosen.value === config.correct ? '预测已验证：开放公式与探索' : '用证据修正预测：开放公式与探索';
    replay.hidden = false;
    guide.dispatchEvent(new CustomEvent('g-guide-complete', {bubbles: true, detail: {id: config.id, choice: chosen.value}}));
  });
  replay.addEventListener('click', () => location.reload());

  async function run(actions) {
    for (const action of actions) {
      const target = document.querySelector(action.selector);
      if (!target) throw new Error(`缺少动作目标 ${action.selector}`);
      actedControls.add(target);
      target.disabled = false;
      const count = action.repeat || 1;
      for (let i = 0; i < count; i += 1) {
        if (Object.prototype.hasOwnProperty.call(action, 'value')) {
          target.value = action.value;
          target.dispatchEvent(new Event('input', {bubbles: true}));
          target.dispatchEvent(new Event('change', {bubbles: true}));
        } else target.click();
        await wait(action.after || 50);
      }
    }
  }

  function pauseExistingMotion() {
    const running = [...document.querySelectorAll('button')].find(button => /暂停|冻结/.test(button.textContent || ''));
    if (running) running.click();
  }
  function wait(ms) { return media.matches ? Promise.resolve() : new Promise(resolve => setTimeout(resolve, ms)); }
  function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[char])); }
})();
