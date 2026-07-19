(function () {
  'use strict';

  const requestedLesson = new URLSearchParams(window.location.search).get('lesson');
  if (requestedLesson && requestedLesson.startsWith('M-')) return;

  const config = window.B2_GUIDE;
  if (!config) return;

  const panel = document.querySelector('.panel');
  const canvas = document.querySelector('canvas');
  if (!panel || !canvas) return;

  const style = document.createElement('style');
  style.textContent = `
    .b2-guide{border:2px solid #2563eb;background:#eff6ff;color:#1e3a5f;border-radius:9px;padding:10px;display:grid;gap:8px}
    .b2-guide h2{font-size:15px;line-height:1.4;margin:0;color:#0f172a}
    .b2-guide p{font-size:12px;line-height:1.55;margin:0}
    .b2-guide-options{display:grid;grid-template-columns:1fr;gap:6px}
    .b2-guide-options button{min-height:36px;text-align:left;padding:7px 9px;background:#fff}
    .b2-guide-options button[aria-pressed="true"]{border-color:#2563eb;background:#dbeafe;color:#1e3a8a;font-weight:800}
    .b2-guide-verify{min-height:36px;background:#2563eb!important;border-color:#2563eb!important;color:#fff!important;font-weight:800}
    .b2-guide-verify:disabled{background:#94a3b8!important;border-color:#94a3b8!important;cursor:not-allowed}
    .b2-guide-feedback{border-left:4px solid #0f766e;background:#ecfdf5;padding:8px;color:#134e4a;font-size:12px;line-height:1.55}
    .b2-guide-transfer{border-top:1px dashed #93c5fd;padding-top:7px;color:#334155}
    .b2-guide-veil{position:absolute;inset:0;display:grid;place-items:center;background:rgba(239,246,255,.42);z-index:3;pointer-events:none}
    .b2-guide-veil span{max-width:78%;border:1px solid #60a5fa;background:rgba(255,255,255,.95);border-radius:9px;padding:9px 12px;color:#1e3a8a;font-size:13px;font-weight:800;text-align:center;line-height:1.5}
    [data-b2-guide-locked]{display:none!important}
    @media(max-width:760px){.b2-guide{padding:9px}.b2-guide h2{font-size:14px}}
  `;
  document.head.appendChild(style);

  const guide = document.createElement('section');
  guide.className = 'b2-guide';
  guide.dataset.b2Guide = config.id;
  guide.setAttribute('aria-label', `${config.id} 引导演示`);
  guide.innerHTML = `
    <h2>${escapeHtml(config.question)}</h2>
    <p>${escapeHtml(config.observe)}</p>
    <div class="b2-guide-options" role="group" aria-label="请选择预测"></div>
    <button class="b2-guide-verify" type="button" disabled>验证预测</button>
    <div class="b2-guide-feedback" hidden aria-live="polite"></div>
  `;

  const task = panel.querySelector('.task');
  if (task) task.insertAdjacentElement('afterend', guide);
  else panel.prepend(guide);

  const options = guide.querySelector('.b2-guide-options');
  const verify = guide.querySelector('.b2-guide-verify');
  const feedback = guide.querySelector('.b2-guide-feedback');
  let chosen = null;

  config.options.forEach(option => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option.label;
    button.dataset.guideChoice = option.value;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      chosen = option;
      options.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      verify.disabled = false;
    });
    options.appendChild(button);
  });

  const locked = [...panel.children].filter(node => node !== task && node !== guide);
  locked.forEach(node => node.setAttribute('data-b2-guide-locked', ''));
  const stage = canvas.parentElement;
  const stageExtras = [...stage.children].filter(node => node !== canvas);
  stageExtras.forEach(node => node.setAttribute('data-b2-guide-locked', ''));
  const veil = document.createElement('div');
  veil.className = 'b2-guide-veil';
  veil.innerHTML = '<span>先完成预测，再显示清晰画面、读数和公式证据</span>';
  stage.style.position = 'relative';
  stage.appendChild(veil);
  canvas.style.filter = 'blur(5px)';
  canvas.style.opacity = '0.36';
  canvas.style.pointerEvents = 'none';
  canvas.setAttribute('data-guide-stage', 'predict');
  document.documentElement.dataset.b2GuideStage = 'predict';

  verify.addEventListener('click', async () => {
    if (!chosen || verify.disabled) return;
    verify.disabled = true;
    options.querySelectorAll('button').forEach(button => { button.disabled = true; });
    await runActions(config.actions || []);
    locked.forEach(node => node.removeAttribute('data-b2-guide-locked'));
    stageExtras.forEach(node => node.removeAttribute('data-b2-guide-locked'));
    veil.remove();
    canvas.style.filter = '';
    canvas.style.opacity = '';
    canvas.style.pointerEvents = '';
    canvas.setAttribute('data-guide-stage', 'explore');
    document.documentElement.dataset.b2GuideStage = 'explore';
    feedback.hidden = false;
    feedback.innerHTML = `
      <b>你的预测：</b>${escapeHtml(chosen.label)}<br>
      <b>实际结果：</b>${escapeHtml(config.result)}<br>
      <b>画面证据：</b>${escapeHtml(config.evidence)}<br>
      <b>为什么：</b>${escapeHtml(config.explanation)}
      <p class="b2-guide-transfer"><b>高考迁移：</b>${escapeHtml(config.transfer)}</p>
    `;
    verify.textContent = chosen.value === config.correct ? '预测已验证：开放公式与探索' : '用证据修正预测：开放公式与探索';
    guide.dispatchEvent(new CustomEvent('b2-guide-complete', { bubbles: true, detail: { id: config.id, choice: chosen.value } }));
  });

  async function runActions(actions) {
    for (const action of actions) {
      if (action.wait) {
        await wait(action.wait);
        continue;
      }
      const target = document.querySelector(action.selector);
      if (!target) continue;
      if (Object.prototype.hasOwnProperty.call(action, 'value')) {
        target.value = action.value;
        target.dispatchEvent(new Event('input', { bubbles: true }));
        target.dispatchEvent(new Event('change', { bubbles: true }));
      } else {
        target.click();
      }
      await wait(action.after || 80);
    }
  }

  function wait(ms) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return Promise.resolve();
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);
  }
})();
