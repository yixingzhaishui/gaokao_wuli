// GKWL-EVAL v1.0 — Pipeline B: real-browser harness.
// Injected into a tab on the published Pages origin; iframes each anim page (same-origin),
// exercises controls through the page's own event handlers, and captures evidence.
// Range inputs: value + input/change events (page handler path). Canvas drags: full
// pointerdown/move/up sequences. Buttons/selects: real click/change events.
(() => {
  if (window.__GKWL) return 'already-installed';
  const G = window.__GKWL = { results: {}, version: '1.0' };

  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const canvasSig = (doc) => {
    let sig = '';
    for (const c of doc.querySelectorAll('canvas')) {
      try {
        const ctx = c.getContext('2d');
        if (!ctx) { sig += '|3d'; continue; }
        const w = c.width, h = c.height;
        if (!w || !h) { sig += '|0'; continue; }
        const d = ctx.getImageData(0, 0, w, h).data;
        let acc = 0;
        const step = Math.max(4, (d.length >> 12) & ~3); // ~1024 samples
        for (let i = 0; i < d.length; i += step) acc = (acc * 31 + d[i] + d[i + 1] * 7 + d[i + 2] * 13) >>> 0;
        sig += '|' + acc;
      } catch (e) { sig += '|err'; }
    }
    return sig;
  };
  const textSig = (doc) => {
    const sel = doc.querySelectorAll('.readout,[id*=readout],[id*=status],.status,output,[class*=readout]');
    let t = '';
    sel.forEach(e => t += e.textContent);
    return t.replace(/\s+/g, ' ').trim();
  };
  const svgSig = (doc) => {
    let s = '';
    doc.querySelectorAll('svg [transform],svg [x1],svg [cx],svg [d],svg text').forEach((e, i) => {
      if (i > 400) return;
      s += (e.getAttribute('transform') || '') + (e.getAttribute('x1') || '') + (e.getAttribute('cx') || '') + ((e.getAttribute('d') || '').length) + (e.tagName === 'text' ? e.textContent : '');
    });
    let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return String(h);
  };
  const stateSig = (doc) => canvasSig(doc) + '§' + svgSig(doc) + '§' + textSig(doc);

  const loadFrame = (url, width) => new Promise((resolve) => {
    const f = document.createElement('iframe');
    f.style.cssText = `position:fixed;left:0;top:0;width:${width}px;height:760px;z-index:99999;background:#fff;border:2px solid #f00;`;
    let errs = [];
    const timer = setTimeout(() => resolve({ frame: f, errs, timeout: true }), 12000);
    f.onload = async () => {
      try {
        const w = f.contentWindow;
        w.addEventListener('error', e => errs.push(String(e.message).slice(0, 200)));
        const origErr = w.console.error.bind(w.console);
        w.console.error = (...a) => { errs.push(a.map(String).join(' ').slice(0, 200)); origErr(...a); };
      } catch (e) { errs.push('hook-fail:' + e.message); }
      clearTimeout(timer);
      await sleep(800); // allow first render
      resolve({ frame: f, errs });
    };
    f.src = url;
    document.body.appendChild(f);
  });

  const fire = (el, type, opts = {}) => el.dispatchEvent(new (el.ownerDocument.defaultView.PointerEvent || PointerEvent)(type, { bubbles: true, cancelable: true, pointerId: 1, isPrimary: true, ...opts }));

  const dragCanvas = async (doc, cv) => {
    const r = cv.getBoundingClientRect();
    const x0 = r.left + r.width * 0.45, y0 = r.top + r.height * 0.5;
    fire(cv, 'pointerdown', { clientX: x0, clientY: y0, buttons: 1 });
    for (let i = 1; i <= 6; i++) { fire(cv, 'pointermove', { clientX: x0 + i * 12, clientY: y0 - i * 4, buttons: 1 }); await sleep(30); }
    fire(cv, 'pointerup', { clientX: x0 + 72, clientY: y0 - 24 });
    await sleep(250);
  };

  G.evalPage = async (url) => {
    const R = { url, errors: [], controls: {}, flags: [] };
    // desktop pass
    const { frame, errs, timeout } = await loadFrame(url, 1000);
    R.errors = errs;
    if (timeout) { R.flags.push('F1:load-timeout'); frame.remove(); return R; }
    const doc = frame.contentDocument;
    try {
      R.title = doc.title;
      R.canvases = doc.querySelectorAll('canvas').length;
      R.svgs = doc.querySelectorAll('svg').length;
      const sig0 = stateSig(doc);
      await sleep(400);
      const sigIdle = stateSig(doc);
      R.idleAnimating = sigIdle !== sig0;

      // buttons (includes dynamically created)
      const btns = [...doc.querySelectorAll('button')].filter(b => b.offsetParent !== null);
      R.buttonCount = btns.length;
      let playBtn = btns.find(b => /播放|▶|开始|发射|运行|start|play/i.test(b.textContent)) || null;
      let resetBtn = btns.find(b => /重置|复位|reset|↺/i.test(b.textContent)) || null;

      // play test
      if (playBtn) {
        const a = stateSig(doc);
        playBtn.click();
        await sleep(900);
        const b = stateSig(doc);
        R.playChanged = b !== a;
        if (!R.playChanged && !R.idleAnimating) R.flags.push('F3:play-no-visual-change');
        // pause check
        const pauseBtn = [...doc.querySelectorAll('button')].find(x => /暂停|pause|⏸/i.test(x.textContent));
        if (pauseBtn) {
          pauseBtn.click(); await sleep(120);
          const p1 = stateSig(doc); await sleep(450); const p2 = stateSig(doc);
          R.pauseStops = p1 === p2;
        }
      } else R.playChanged = null;

      // every other visible button
      let effective = 0, dead = [];
      const others = [...doc.querySelectorAll('button')].filter(b => b.offsetParent !== null && b !== playBtn && b !== resetBtn);
      R.otherButtons = others.length;
      for (const b of others.slice(0, 24)) {
        const before = stateSig(doc) + '§' + b.className + doc.body.className;
        b.click(); await sleep(220);
        const after = stateSig(doc) + '§' + b.className + doc.body.className;
        if (after !== before) effective++; else dead.push((b.id || b.textContent.trim()).slice(0, 24));
      }
      R.controls.buttonsEffective = effective;
      R.controls.buttonsDead = dead;
      if (dead.length) R.flags.push('F4?:dead-buttons:' + dead.join(','));

      // ranges
      const ranges = [...doc.querySelectorAll('input[type=range]')].filter(x => x.offsetParent !== null);
      R.rangeCount = ranges.length; let rEff = 0, rDead = [];
      for (const s of ranges.slice(0, 12)) {
        const before = stateSig(doc);
        const min = +s.min || 0, max = +s.max || 100, cur = +s.value;
        s.value = String(cur < (min + max) / 2 ? max : min);
        s.dispatchEvent(new Event('input', { bubbles: true }));
        s.dispatchEvent(new Event('change', { bubbles: true }));
        await sleep(220);
        if (stateSig(doc) !== before) rEff++; else rDead.push(s.id || 'range');
      }
      R.controls.rangesEffective = rEff; R.controls.rangesDead = rDead;
      if (rDead.length) R.flags.push('F4?:dead-ranges:' + rDead.join(','));

      // selects & checkboxes
      const sels = [...doc.querySelectorAll('select')].filter(x => x.offsetParent !== null);
      let sEff = 0, sDead = [];
      for (const s of sels.slice(0, 6)) {
        const before = stateSig(doc);
        s.selectedIndex = (s.selectedIndex + 1) % s.options.length;
        s.dispatchEvent(new Event('change', { bubbles: true }));
        await sleep(220);
        if (stateSig(doc) !== before) sEff++; else sDead.push(s.id || 'select');
      }
      R.controls.selectsEffective = sEff; R.controls.selectsDead = sDead;

      // canvas drag interactivity
      const cv = doc.querySelector('canvas');
      if (cv) {
        const before = stateSig(doc);
        await dragCanvas(doc, cv);
        R.canvasDragChanged = stateSig(doc) !== before;
      }

      // reset
      if (resetBtn) {
        resetBtn.click(); await sleep(500);
        // compare to a fresh load below (re-entry) instead of sig0 when idle animation exists
        R.resetClicked = true;
        R.resetSig = stateSig(doc);
      }
      R.finalErrors = errs.length;
    } catch (e) { R.flags.push('harness-error:' + String(e).slice(0, 120)); }
    frame.remove();

    // re-entry + reset comparison + mobile pass
    try {
      const second = await loadFrame(url, 1000);
      const d2 = second.frame.contentDocument;
      await sleep(300);
      R.reentryOk = !!d2.querySelector('canvas,svg') && second.errs.length === 0;
      const freshSig = stateSig(d2);
      if (R.resetSig) {
        // canvas part only (text may include timers)
        R.resetMatchesFresh = R.resetSig.split('§')[0] === freshSig.split('§')[0];
        if (R.resetMatchesFresh === false && !R.idleAnimating) R.flags.push('F5?:reset-differs-from-fresh');
      }
      second.frame.remove();
      const mob = await loadFrame(url, 390);
      const d3 = mob.frame.contentDocument;
      await sleep(400);
      const de = d3.documentElement;
      R.mobileScrollW = de.scrollWidth;
      R.mobileOverflow = de.scrollWidth > 395;
      if (R.mobileOverflow) R.flags.push('F6?:mobile-overflow:' + de.scrollWidth);
      mob.frame.remove();
    } catch (e) { R.flags.push('phase2-error:' + String(e).slice(0, 120)); }
    return R;
  };

  G.runBatch = async (urls) => {
    const summary = [];
    for (const u of urls) {
      const r = await G.evalPage(u);
      G.results[u] = r;
      summary.push(`${u.split('/anim/')[1] || u} :: ${r.flags.length ? r.flags.join(' | ') : 'CLEAN'} errs=${(r.errors || []).length}`);
      try { localStorage.setItem('__GKWL_RESULTS', JSON.stringify(G.results)); } catch (e) {}
    }
    return summary.join('\n');
  };
  return 'installed';
})();
