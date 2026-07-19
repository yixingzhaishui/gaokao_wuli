(function () {
  'use strict';

  const configs = {
    'ticker-tape-speed.html':['E-01','相邻点间距会怎样变化？',['近似不变','逐渐改变'],'纸带点迹只能代表相等时间间隔内的位移；先确认电源频率。','换一个计数点间隔，速度计算应怎样改？'],
    'uniform-acceleration-lab.html':['E-02','若加速度恒定，连续相等时间的位移差怎样？',['近似相等','忽大忽小'],'只在同一直线上、加速度近似恒定的区间作结论。','换用 v-t 图像，你会用哪个量检验加速度？'],
    'hooke-law-lab.html':['E-03','继续增大拉力，弹簧一定保持线性吗？',['只在限度内线性','始终线性'],'超过弹性限度的数据必须排除，不能继续用 F=kx。','怎样从图像识别并剔除超限点？'],
    'force-parallelogram-lab.html':['E-04','合力方向应由什么决定？',['两分力的矢量和','较大力单独决定'],'结点必须静止、弹簧测力计轴线与拉力方向一致。','若夹角增大而分力不变，合力怎样变化？'],
    'newton-second-lab.html':['E-05','固定质量增大合力，加速度怎样变？',['增大','不变'],'必须补偿摩擦，并区分拉力与小车所受合力。','若固定合力而总质量加倍，a 如何变化？'],
    'mechanical-energy-lab.html':['E-06','有阻力时 ΔEp 与 ΔEk 仍应完全相等吗？',['不相等，还要计阻力功','仍完全相等'],'机械能守恒只适用于重力等保守力做功、非保守功可忽略的过程。','把阻力功计入后，能量关系怎样闭合？'],
    'projectile-motion-lab.html':['E-07','平抛的水平分运动是什么运动？',['匀速直线运动','匀加速运动'],'忽略空气阻力，且用同一时刻的水平、竖直坐标配对。','初速度加倍时，相同下落时间的水平位移怎样变？'],
    'centripetal-force-lab.html':['E-08','固定 m、r，F 与哪个量成正比？',['ω²','ω'],'一次只改变一个量，至少三组实测点后才能拟合。','若线速度不变而半径加倍，向心力怎样变？'],
    'gravitational-constant-lab.html':['E-09','扭秤偏转增大通常表示引力怎样？',['增大','减小'],'微小力测量需隔振、校零并等待扭摆稳定。','距离加倍时，理想引力约变为多少？'],
    'coulomb-force-lab.html':['E-10','距离增大时静电力怎样变？',['按平方反比减小','按正比增大'],'必须等待仪表示值稳定，且点电荷近似和介质条件要满足。','若两电荷量都加倍，力怎样变化？'],
    'equipotential-line-lab.html':['E-11','等势线与电场线应是什么关系？',['处处垂直','处处平行'],'探针必须寻找等电势点；连接的是测得点，不是预画答案。','怎样由等势线疏密判断场强大小？'],
    'resistivity-lab.html':['E-12','同种材料长度增大时电阻怎样变？',['增大','减小'],'截面积、长度和电阻必须来自同一根样品，单位统一为 SI。','直径测量误差为何会被截面积平方关系放大？'],
    'lamp-iv-lab.html':['E-13','灯丝温度升高后电阻通常怎样？',['增大','不变'],'逐点改变电压并记录，不能用一条预设直线代替非线性数据。','冷态与热态电阻为什么不同？'],
    'emf-internal-resistance-lab.html':['E-14','U-I 图线的纵截距代表什么？',['电动势 E','内阻 r'],'开关只在读数时闭合，需多组不同外阻数据再拟合。','短路电流可由图线的哪个截距推断？'],
    'multimeter-practice-lab.html':['E-15','欧姆挡换挡后第一步是什么？',['短接调零','直接测量'],'欧姆刻度非均匀、方向与电流刻度相反；带电电路不能测电阻。','指针靠近两端时为何应换挡？'],
    'momentum-conservation-lab.html':['E-16','碰撞系统总动量近似守恒需什么条件？',['外力冲量可忽略','动能必须守恒'],'速度必须取碰撞前后紧邻时段，方向符号统一。','完全非弹性碰撞中，动能也守恒吗？'],
    'pendulum-period-lab.html':['E-17','小角度下周期主要与哪个量有关？',['摆长','摆球质量'],'摆角应小、摆长量到球心，并测多个周期减小计时误差。','摆长变为四倍时，周期怎样变化？'],
    'glass-refraction-lab.html':['E-18','空气入射玻璃时 sin i / sin r 表示什么？',['玻璃相对空气折射率','其倒数'],'入射角、折射角都相对法线测量，图像轴必须与斜率定义一致。','从玻璃射向空气时如何改写折射定律？'],
    'double-slit-wavelength-lab.html':['E-19','条纹间距与双缝间距怎样相关？',['成反比','成正比'],'屏距、缝距、条纹间距单位统一，条纹间距宜跨多条测量。','换更长波长的光，条纹怎样变化？'],
    'oil-film-molecule-lab.html':['E-20','油酸体积不变而油膜面积增大，估得直径怎样？',['减小','增大'],'假设油膜为单分子层；纯油酸体积由稀释比和滴定体积得到。','面积边界少算会使 d 偏大还是偏小？'],
    'capacitor-charge-discharge-lab.html':['E-21','充电开始后电流怎样变化？',['逐渐减小','保持不变'],'先选择充/放电回路再启动；断开时理想电容电压近似保持。','R 或 C 加倍会怎样改变时间常数？'],
    'length-measurement-lab.html':['E-22','50 分度游标卡尺的分度值是多少？',['0.02 mm','0.05 mm'],'先读主尺再读对齐格，最后减去零误差。','若零误差为正，修正值应增大还是减小？'],
    'induced-current-direction-lab.html':['E-23','感应电流首先阻碍什么？',['磁通量的变化','磁铁本身'],'方向判断必须说明观察方向，并用真实位移/时间计算变化率。','磁极不变而运动反向，偏转怎样变化？'],
    'transformer-turns-voltage-lab.html':['E-24','轻载时 U2/U1 近似等于什么？',['n2/n1','n1/n2'],'匝数比关系针对理想或轻载；重载端电压会因绕组压降下降。','负载电阻减小时，端电压和输出电流怎样变？'],
    'sensor-auto-control-lab.html':['E-25','光照增强时本模型的光敏电阻怎样？',['减小','增大'],'先画清分压点，再按 Us 与 Uref 的实际关系判断比较器输出。','滞回为何能避免阈值附近反复动作？'],
    'isothermal-gas-law-lab.html':['E-26','等温压缩后 P 与 V 的乘积怎样？',['近似不变','持续增大'],'快速压缩时气体未热平衡，必须等待水浴恢复恒温后读数。','改变水浴温度后，P-1/V 斜率怎样变化？']
  };

  // These two experiment benches are also the guided demonstrations for B3.
  // Keep one control lock (the E8 guide) and expose a small compatibility view
  // instead of loading a second guide that would compete for the same controls.
  const b3CompatConfigs = {
    'multimeter-practice-lab.html': {
      id: 'B3-18',
      question: '使用欧姆挡测电阻时，被测电路仍接通电源，能否继续读数？',
      options: [['reject', '不能，必须先断开被测电路电源'], ['allow', '能，读数照常有效']],
      result: '操作不通过：测电阻必须先断开被测电路电源。',
      evidence: '电源状态切为“是”，状态栏显示“不通过”，并明确要求断电。',
      explanation: '欧姆挡内部自带电源，外部带电会破坏测量条件并可能损坏仪表。',
      boundary: '换倍率后仍要重新欧姆调零；测电压并联、测电流串联。',
      transfer: '实验操作题先检查安全与接法，再判断量程和读数。',
      act() { setControlValue('#power', '1'); }
    },
    'capacitor-charge-discharge-lab.html': {
      id: 'B3-23',
      question: '保持 C 不变，把 R 从 20 kΩ 加倍到 40 kΩ，充电快慢怎样变？',
      options: [['slower', '时间常数加倍，充电更慢'], ['faster', '电阻更大，充电更快']],
      result: 'τ=RC 由 2.00 s 增至 4.00 s，达到同一比例所需时间加倍。',
      evidence: 'R 标签显示 40 kΩ，读数显示 τ=4.00 s，Uc 和 I 曲线同步变慢。',
      explanation: 'R 越大，同一电压差下电荷转移速率越小，因此 RC 过程更慢。',
      boundary: '“Uc 从 0 开始”要求初始未充电；一般初态要使用相应初值。',
      transfer: '比较 RC 曲线先比较 τ，再找 0.632 或 0.368 特征点。',
      act() { setControlValue('#r', '40'); document.querySelector('#play')?.click(); }
    }
  };

  function setControlValue(selector, value) {
    const control = document.querySelector(selector);
    if (!control) return;
    control.value = value;
    control.dispatchEvent(new Event('input', { bubbles: true }));
    control.dispatchEvent(new Event('change', { bubbles: true }));
  }

  const file = location.pathname.split('/').pop();
  const config = configs[file];
  if (!config) return;
  const b3Compat = b3CompatConfigs[file] || null;
  const [node, question, choices, boundary, transfer] = config;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.dataset.expGuided = 'true';
  document.documentElement.dataset.reducedMotion = String(reduced);
  if (b3Compat) document.documentElement.dataset.b3Motion = reduced ? 'reduce' : 'full';

  const style = document.createElement('style');
  style.textContent = `
    .exp-guide{margin:10px 12px 0;padding:12px;border:1px solid #b8c9dd;border-left:5px solid #2c7be5;border-radius:9px;background:#f7fbff;color:#102a43;font:13px/1.55 -apple-system,"PingFang SC","Microsoft YaHei",system-ui,sans-serif}
    .exp-guide__title{font-weight:900;font-size:15px}.exp-guide__step{color:#486581;margin:4px 0 8px}.exp-guide__actions{display:flex;flex-wrap:wrap;gap:7px}.exp-guide button,.exp-guide .b3-guide-replay{box-sizing:border-box;width:auto!important;max-width:100%;min-height:34px!important;padding:6px 10px;border:1px solid #9fb3c8;border-radius:7px;background:#fff;color:#102a43;font:inherit;font-weight:800;cursor:pointer;text-decoration:none}.exp-guide button[data-selected=true],.exp-guide button[aria-pressed=true]{background:#2c7be5;color:#fff;border-color:#2c7be5}.exp-guide__note{margin-top:8px;color:#486581}.exp-guide__result{margin-top:8px;padding:8px;border-radius:7px;background:#e6fffa;color:#087f5b;font-weight:700}.exp-guide [hidden]{display:none!important}.exp-guide-locked{opacity:.55;filter:grayscale(.25)}
    .exp-b3-compat{border-left-color:#7c3aed;background:#fbfaff}.b3-guide-veil{margin:6px 0;padding:7px 9px;border-radius:7px;background:#f3e8ff;color:#6b21a8;font-weight:800}.b3-guide-question{margin:5px 0 8px;font-weight:800}.b3-guide-feedback{margin-top:8px;padding:8px;border-radius:7px;background:#f0fdf4;color:#166534}.b3-guide-motion{margin-top:7px;color:#486581;font-size:12px}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important}}
  `;
  document.head.appendChild(style);

  const originalControls = [...document.querySelectorAll('canvas,input,select,button')];
  const revealNodes = [...document.querySelectorAll('.readout,.formula,[id="readout"]')];
  const controlState = new Map();
  originalControls.forEach(el => {
    if ('disabled' in el) controlState.set(el, el.disabled);
    if (el.tagName === 'CANVAS') {
      el.dataset.guidePointerEvents = el.style.pointerEvents;
      el.style.pointerEvents='none';
      if (b3Compat) {
        el.dataset.guideOpacity = el.style.opacity;
        el.style.opacity = '.35';
        el.dataset.guideStage = 'predict';
      }
    }
    else if ('disabled' in el) {
      const resetLike=el.matches('[data-audit-reset]')||/^reset/i.test(el.id)||/重置|复位/.test(el.textContent||'');
      if(!resetLike)el.disabled=true;
    }
    el.classList.add('exp-guide-locked');
  });
  revealNodes.forEach(el => { el.dataset.guideDisplay=el.style.display; el.style.display='none'; });

  const guide=document.createElement('section');
  guide.className='exp-guide'; guide.setAttribute('aria-label',node+' 分阶段实验引导');
  guide.innerHTML=`<div class="exp-guide__title">${node} 分阶段实验</div><div class="exp-guide__step" data-guide-step>1/5 装置与安全：确认量程、连接、零点和控制变量后再操作。</div><div class="exp-guide__actions"><button type="button" data-exp-guide="setup">已检查装置与安全</button><span data-guide-predict hidden><button type="button" data-exp-guide="choice" data-predict="a">${choices[0]}</button><button type="button" data-exp-guide="choice" data-predict="b">${choices[1]}</button></span><button type="button" data-exp-guide="verify" hidden>锁定预测并开始测量</button><button type="button" data-exp-guide="analyze" hidden>分析数据并显示公式</button><button type="button" data-exp-guide="replay" hidden>重新实验</button></div><div class="exp-guide__note">本页数据为理想或含仪器误差的模拟数据，用于实验流程练习；不冒充真实采集。</div><div class="exp-guide__result" data-guide-result hidden></div>`;
  document.body.insertBefore(guide,document.body.firstChild);
  const step=guide.querySelector('[data-guide-step]'),predict=guide.querySelector('[data-guide-predict]'),verify=guide.querySelector('[data-exp-guide="verify"]'),analyze=guide.querySelector('[data-exp-guide="analyze"]'),replay=guide.querySelector('[data-exp-guide="replay"]'),result=guide.querySelector('[data-guide-result]');
  let selected='',unlocked=false,measured=false;

  function unlockControls() {
    originalControls.forEach(el=>{
      el.classList.remove('exp-guide-locked');
      if(el.tagName==='CANVAS') {
        el.style.pointerEvents=el.dataset.guidePointerEvents||'';
        if (b3Compat) {
          el.style.opacity=el.dataset.guideOpacity||'';
          el.dataset.guideStage='explore';
        }
      } else if('disabled' in el) el.disabled=controlState.get(el)||false;
    });
    document.querySelector('.b3-guide-veil')?.remove();
  }

  guide.querySelector('[data-exp-guide="setup"]').addEventListener('click',e=>{e.currentTarget.hidden=true;predict.hidden=false;step.textContent='2/5 预测：'+question;});
  guide.querySelectorAll('[data-exp-guide="choice"]').forEach(btn=>btn.addEventListener('click',()=>{selected=btn.dataset.predict;guide.querySelectorAll('[data-exp-guide="choice"]').forEach(b=>b.dataset.selected=String(b===btn));verify.hidden=false;}));
  verify.addEventListener('click',()=>{
    unlocked=true;predict.hidden=true;verify.hidden=true;
    unlockControls();
    step.textContent='3/5 测量：真实拖动/调节装置并记录至少一组有效数据。预测已锁定：'+(selected==='a'?choices[0]:choices[1]);
  });
  function markMeasured(){if(!unlocked||measured)return;measured=true;analyze.hidden=false;step.textContent='4/5 作图/拟合：检查原始记录、坐标轴、拟合关系与异常数据，再进入分析。';}
  const recordButton=document.querySelector('#record,#recordBtn,[data-record]');
  if(recordButton)recordButton.addEventListener('click',()=>setTimeout(()=>{const rows=[...document.querySelectorAll('tbody tr')].map(r=>r.textContent).join(' ');if(rows&&!/暂无|无记录/.test(rows))markMeasured();},80));
  else {
    document.querySelector('canvas')?.addEventListener('pointerup',markMeasured);
    document.querySelector('input[type="range"]')?.addEventListener('change',markMeasured);
  }
  analyze.addEventListener('click',()=>{revealNodes.forEach(el=>el.style.display=el.dataset.guideDisplay||'');analyze.hidden=true;replay.hidden=false;result.hidden=false;result.textContent='5/5 解释与迁移：'+boundary+' 迁移：'+transfer;step.textContent='完成：用观测证据解释预测，并明确适用边界。';document.dispatchEvent(new CustomEvent('exp-guide-complete',{detail:{node,selected}}));});
  replay.addEventListener('click',()=>location.reload());

  if (b3Compat) {
    const b3Guide = document.createElement('section');
    b3Guide.className = 'exp-guide exp-b3-compat';
    b3Guide.dataset.b3Guide = b3Compat.id;
    b3Guide.setAttribute('aria-label', b3Compat.id + ' 预测—证据引导');
    b3Guide.innerHTML = `<div class="exp-guide__title">${b3Compat.id} 跨章预测—证据引导</div><div class="b3-guide-veil">先完成预测，实验画面随后开放。</div><div class="b3-guide-question">${b3Compat.question}</div><div class="exp-guide__actions">${b3Compat.options.map(([value,label])=>`<button type="button" data-guide-choice="${value}">${label}</button>`).join('')}<button class="b3-guide-verify" type="button" hidden>验证预测并观察</button><a class="b3-guide-replay" href="#" role="button" hidden>重新预测并重置</a></div><div class="b3-guide-motion">${reduced?'已启用减少动态：保留关键状态变化，压缩连续动画。':'支持系统“减少动态”设置。'}</div><div class="b3-guide-feedback" hidden></div>`;
    guide.insertAdjacentElement('afterend', b3Guide);
    const b3Verify = b3Guide.querySelector('.b3-guide-verify');
    const b3Replay = b3Guide.querySelector('.b3-guide-replay');
    const b3Feedback = b3Guide.querySelector('.b3-guide-feedback');
    let b3Selected = '';
    b3Guide.querySelectorAll('[data-guide-choice]').forEach(button=>button.addEventListener('click',()=>{
      b3Selected = button.dataset.guideChoice;
      b3Guide.querySelectorAll('[data-guide-choice]').forEach(item=>item.setAttribute('aria-pressed', String(item===button)));
      b3Verify.hidden = false;
    }));
    b3Verify.addEventListener('click',()=>{
      unlocked = true;
      unlockControls();
      revealNodes.forEach(el=>el.style.display=el.dataset.guideDisplay||'');
      b3Compat.act();
      b3Verify.hidden = true;
      b3Replay.hidden = false;
      b3Feedback.hidden = false;
      const choiceLabel = b3Compat.options.find(([value])=>value===b3Selected)?.[1] || '未选择';
      b3Feedback.innerHTML = `<b>你的预测：</b>${choiceLabel}<br><b>实际结果：</b>${b3Compat.result}<br><b>画面证据：</b>${b3Compat.evidence}<br><b>为什么：</b>${b3Compat.explanation}<br><b>模型边界：</b>${b3Compat.boundary}<br><b>高考迁移：</b>${b3Compat.transfer}`;
    });
    b3Replay.addEventListener('click',event=>{event.preventDefault();location.reload();});
  }

  if(reduced){document.querySelectorAll('button').forEach(btn=>{if(btn.closest('.exp-guide'))return;if(/暂停/.test(btn.textContent)&&!btn.disabled)btn.click();});}
  window.__EXP_GUIDE__={node,get stage(){return !unlocked?'prediction':!measured?'measurement':result.hidden?'analysis':'complete'},get selected(){return selected},get measured(){return measured},reduced};
})();
