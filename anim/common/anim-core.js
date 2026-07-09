/* anim/common/anim-core.js — 动画公共框架核心
 * 规格：V1.2.2 §3.6 统一 API: init/simulate/render/reset/onParamChange/getState/setState
 *
 * 用法（知识点动画 HTML）：
 *   <script src="../common/anim-core.js"></script>
 *   <script>
 *     Anim.register({
 *       params: { v0: {label:'初速度 v0', min:0, max:20, step:0.1, value:4, unit:'m/s'},
 *                 a:  {label:'加速度 a', min:-5, max:5, step:0.1, value:2, unit:'m/s²'} },
 *       state: { x:0, v:0, t:0 },
 *       init: function(s){ s.x=0; s.v=s.v0; s.t=0; },
 *       simulate: function(s, dt, p){ s.v = s.v0 + p.a*s.t; s.x = s.v0*s.t + 0.5*p.a*s.t*s.t; s.t += dt; },
 *       render: function(ctx, s, p){ /* 画图 *\/ },
 *       readout: function(s, p){ return { v: s.v.toFixed(2)+' m/s', x: s.x.toFixed(2)+' m', t: s.t.toFixed(2)+' s' }; },
 *       formula: function(s, p){ return 'v=v0+at, x=v0t+½at²'; },
 *       alert: function(s, p){ return null; } // 返回 {type:'warn'|'err'|'ok', text:'...'}
 *     });
 *   </script>
 *
 * Anim 暴露：register / build / autoStart
 * 每个动画实例对外接口：init/simulate/render/reset/onParamChange/getState/setState
 */
(function (global) {
  'use strict';

  const SPEEDS = { slow: 0.25, normal: 1, fast: 2 };

  function register(config) {
    return new Animation(config);
  }

  function Animation(config) {
    this.cfg = config;
    this.params = {};
    const p = config.params || {};
    Object.keys(p).forEach(k => { this.params[k] = p[k].value; });
    this.state = Object.assign({}, config.state || {});
    this.running = false;
    this.speed = 1;
    this.lastTs = 0;
    this._raf = 0;
  }

  // 统一 API
  Animation.prototype.init = function () {
    const s = this.state;
    Object.keys(this.cfg.state || {}).forEach(k => { s[k] = this.cfg.state[k]; });
    if (this.cfg.init) this.cfg.init(s, this.params);
    this.render();
  };
  Animation.prototype.simulate = function (dt) {
    if (this.cfg.simulate) this.cfg.simulate(this.state, dt * this.speed, this.params);
  };
  Animation.prototype.render = function () {
    const ctx = this.ctx;
    if (!ctx) return;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if (this.cfg.render) this.cfg.render(ctx, this.state, this.params, this);
    this._updateReadout();
  };
  Animation.prototype.reset = function () {
    this.pause();
    this.init();
  };
  Animation.prototype.onParamChange = function (name, value) {
    this.params[name] = value;
    if (this.cfg.onParamChange) this.cfg.onParamChange(name, value, this.state, this.params);
    // 参数改变后重新初始化状态（保持物理一致）
    this.init();
  };
  Animation.prototype.getState = function () { return Object.assign({}, this.state); };
  Animation.prototype.setState = function (next) { this.state = Object.assign(this.state, next); this.render(); };

  // 播放控制
  Animation.prototype.play = function () {
    if (this.running) return;
    this.running = true;
    this.lastTs = performance.now();
    const self = this;
    function loop(ts) {
      if (!self.running) return;
      const dt = Math.min(0.05, (ts - self.lastTs) / 1000);
      self.lastTs = ts;
      self.simulate(dt);
      self.render();
      self._raf = requestAnimationFrame(loop);
    }
    this._raf = requestAnimationFrame(loop);
  };
  Animation.prototype.pause = function () {
    this.running = false;
    if (this._raf) cancelAnimationFrame(this._raf);
  };
  Animation.prototype.setSpeed = function (sp) { this.speed = SPEEDS[sp] || 1; };

  Animation.prototype._updateReadout = function () {
    if (this.readoutEl && this.cfg.readout) {
      const r = this.cfg.readout(this.state, this.params) || {};
      let html = '';
      Object.keys(r).forEach(k => { html += '<span class="k">'+k+'</span>=<span class="v">'+r[k]+'</span>  '; });
      this.readoutEl.innerHTML = html;
    }
    if (this.formulaEl && this.cfg.formula) {
      this.formulaEl.textContent = this.cfg.formula(this.state, this.params) || '';
    }
    if (this.alertEl && this.cfg.alert) {
      const a = this.cfg.alert(this.state, this.params);
      this.alertEl.className = 'anim-alert';
      if (a) { this.alertEl.classList.add(a.type || 'warn'); this.alertEl.textContent = a.text; }
    }
  };

  // 构建 DOM 并挂载到 mount
  Animation.prototype.mount = function (mount) {
    const self = this;
    const root = document.createElement('div');
    root.className = 'anim-root';

    const stage = document.createElement('div');
    stage.className = 'anim-stage';
    const title = document.createElement('div');
    title.className = 'anim-title';
    title.textContent = this.cfg.title || '动画';
    const task = document.createElement('div');
    task.className = 'anim-task';
    task.innerHTML = '<b>观察任务：</b>' + (this.cfg.task || '拖动参数，观察画面变化');
    const canvas = document.createElement('canvas');
    canvas.width = (this.cfg.width || 480);
    canvas.height = (this.cfg.height || 320);
    stage.appendChild(title);
    stage.appendChild(task);
    stage.appendChild(canvas);
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    const panel = document.createElement('div');
    panel.className = 'anim-panel';
    panel.innerHTML = '<h4>播放控制</h4>';
    const ctrl = document.createElement('div');
    ctrl.className = 'anim-controls';
    ['play','pause','reset'].forEach(act => {
      const b = document.createElement('button');
      b.className = 'anim-btn';
      b.textContent = {play:'▶ 播放', pause:'⏸ 暂停', reset:'⟲ 重置'}[act];
      b.addEventListener('click', () => {
        if (act === 'play') self.play();
        if (act === 'pause') self.pause();
        if (act === 'reset') self.reset();
      });
      ctrl.appendChild(b);
    });
    const sp = document.createElement('select');
    sp.className = 'anim-btn';
    [['slow','慢速 ×0.25'],['normal','正常 ×1'],['fast','快速 ×2']].forEach(o => {
      const op = document.createElement('option');
      op.value = o[0]; op.textContent = o[1]; sp.appendChild(op);
    });
    sp.value = 'normal';
    sp.addEventListener('change', () => self.setSpeed(sp.value));
    ctrl.appendChild(sp);
    panel.appendChild(ctrl);

    panel.appendChild(document.createElement('hr'));

    const pH = document.createElement('h4');
    pH.textContent = '参数';
    panel.appendChild(pH);
    Object.keys(this.cfg.params || {}).forEach(name => {
      const def = this.cfg.params[name];
      const wrap = document.createElement('div');
      wrap.className = 'anim-param';
      const lab = document.createElement('div');
      lab.className = 'anim-param-label';
      lab.innerHTML = '<span>'+def.label+'</span><span class="val">'+def.value+' '+(def.unit||'')+'</span>';
      const inp = document.createElement('input');
      inp.type = 'range';
      inp.min = def.min; inp.max = def.max; inp.step = def.step; inp.value = def.value;
      inp.addEventListener('input', () => {
        const v = parseFloat(inp.value);
        lab.querySelector('.val').textContent = v + ' ' + (def.unit||'');
        self.onParamChange(name, v);
      });
      wrap.appendChild(lab); wrap.appendChild(inp);
      panel.appendChild(wrap);
    });

    panel.appendChild(document.createElement('hr'));
    const rH = document.createElement('h4'); rH.textContent = '实时读数';
    panel.appendChild(rH);
    this.readoutEl = document.createElement('div');
    this.readoutEl.className = 'anim-readout';
    panel.appendChild(this.readoutEl);

    const fH = document.createElement('h4'); fH.textContent = '公式';
    panel.appendChild(fH);
    this.formulaEl = document.createElement('div');
    this.formulaEl.className = 'anim-formula';
    panel.appendChild(this.formulaEl);

    this.alertEl = document.createElement('div');
    this.alertEl.className = 'anim-alert';
    panel.appendChild(this.alertEl);

    root.appendChild(stage);
    root.appendChild(panel);
    mount.appendChild(root);
    this.init();
    return this;
  };

  function autoStart(config) {
    function go() {
      const mounts = document.querySelectorAll('[data-anim]');
      mounts.forEach(m => {
        if (m.__anim) return;
        m.__anim = register(config).mount(m);
      });
    }
    if (document.readyState !== 'loading') go();
    else document.addEventListener('DOMContentLoaded', go);
  }

  global.Anim = { register: register, autoStart: autoStart, Animation: Animation };
})(window);
