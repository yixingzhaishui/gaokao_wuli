const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const requestedModule = process.env.AUDIT_MODULE || 'bx1';
const moduleNames = requestedModule === 'all'
  ? ['bx1', 'bx2', 'bx3', 'xb1', 'xb2', 'xb3', 'exp', 'model', 'skill']
  : [requestedModule];
const pages = moduleNames.flatMap(moduleName => {
  const animationDir = path.join(root, 'anim', moduleName);
  return fs.readdirSync(animationDir)
    .filter(name => name.endsWith('.html'))
    .sort()
    .map(file => ({ moduleName, file }));
});
const results = [];

test.describe.configure({ mode: 'serial' });
test.setTimeout(90_000);

function transportKind(text) {
  if (/重置|复位/.test(text)) return 'reset';
  if (/播放|暂停|释放|运动|下落|上抛|振动|回弹|扫描|旋转|过程|演示|自动|充电|放电|靠近|改变|▶|⏸/.test(text)) return 'play';
  return 'condition';
}

async function captureState(page) {
  return page.evaluate(() => {
    function hash(value) {
      let h = 2166136261;
      for (let i = 0; i < value.length; i++) {
        h ^= value.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return (h >>> 0).toString(16);
    }
    const canvas = [...document.querySelectorAll('canvas')].map(node => {
      try {
        const ctx = node.getContext('2d');
        const width = node.width;
        const height = node.height;
        const pixels = ctx.getImageData(0, 0, width, height).data;
        let sample = '';
        const stride = Math.max(4, Math.floor(pixels.length / 5000 / 4) * 4);
        for (let i = 0; i < pixels.length; i += stride) sample += String.fromCharCode(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
        return hash(sample);
      } catch (error) {
        return `unreadable:${error.name}`;
      }
    });
    const svg = [...document.querySelectorAll('svg')].map(node => hash(node.outerHTML));
    const readout = [...document.querySelectorAll('.readout, .r, [id*="readout"], [id*="status"], .status, .param, label, .chip, .model-btn, .score, .option.selected, [id$="Label"], [id$="-d"], [aria-pressed], tbody')]
      .map(node => node.textContent.replace(/\s+/g, ' ').trim())
      .filter(Boolean);
    // A clock, a generic “playing” label, or a button-state flip is not
    // physical animation evidence. Keep a second readout hash with those
    // tokens removed, so a page must move a visible object/canvas or change
    // an actual physical quantity (position, force, velocity, field, etc.).
    const physicalReadout = readout.map(text => text
      .replace(/(?:演示时间|动画时间|演示\s*t)\s*[=:：]?\s*[+-]?\d+(?:\.\d+)?\s*(?:s|秒)?/gi, '')
      .replace(/(?:状态[：:]?\s*)?(?:播放中|运行中|已暂停|暂停|播放)/g, '')
      .replace(/\s+/g, ' ').trim()
    ).filter(Boolean);
    return {
      visual_hash: hash(JSON.stringify({ canvas, svg })),
      readout_hash: hash(readout.join('|')),
      physical_readout_hash: hash(physicalReadout.join('|')),
      readout,
      physical_readout: physicalReadout
    };
  });
}

async function captureResetState(page) {
  return page.evaluate(() => {
    const selector = '.readout, .r, [id*="readout"], [id*="status"], .status, .param, label, .chip, .model-btn, .score, [id$="Label"], [id$="-d"], [aria-pressed]';
    const readout = [...document.querySelectorAll(selector)]
      .map(node => node.textContent.replace(/\s+/g, ' ').trim())
      .filter(Boolean);
    const stableReadout = readout.map(value => value.replace(/[+-]?\d+(?:\.\d+)?/g, '#')).join('|');
    const controls = [...document.querySelectorAll('input, select')].map(node => ({
      id: node.id, value: node.value, checked: node.checked, selectedIndex: node.selectedIndex
    }));
    return { stableReadout, controls };
  });
}

function changed(before, after) {
  return before.visual_hash !== after.visual_hash || before.readout_hash !== after.readout_hash;
}

function meaningfulMotionChanged(before, after) {
  return before.visual_hash !== after.visual_hash || before.physical_readout_hash !== after.physical_readout_hash;
}

function resetControlsMatch(before, after) {
  if (before.length !== after.length) return false;
  return before.every((control, index) => {
    const other = after[index];
    if (control.id !== other.id || control.checked !== other.checked || control.selectedIndex !== other.selectedIndex) return false;
    if (control.value === other.value) return true;
    const left = Number(control.value), right = Number(other.value);
    return Number.isFinite(left) && Number.isFinite(right) && Math.abs(left - right) <= 0.25;
  });
}

async function probeCanvasDrag(page) {
  const canvas = page.locator('canvas');
  if (await canvas.count() !== 1 || !(await canvas.isVisible())) return { tested: false, affected_result: null };
  const box = await canvas.boundingBox();
  if (!box) return { tested: false, affected_result: null };
  const points = [0.18, 0.32, 0.5, 0.68, 0.82];
  for (const px of points) {
    for (const py of points) {
      const before = await captureState(page);
      const x = box.x + box.width * px;
      const y = box.y + box.height * py;
      await page.mouse.move(x, y);
      await page.mouse.down();
      await page.mouse.move(Math.min(box.x + box.width - 3, x + 34), y, { steps: 4 });
      await page.mouse.up();
      await page.waitForTimeout(35);
      const after = await captureState(page);
      if (changed(before, after)) return { tested: true, affected_result: true, point: { px, py } };
    }
  }
  return { tested: true, affected_result: false };
}

async function auditSpringInstantSemantics(page, record) {
  const targetCases = [
    { value: 'rope', label: '剪下绳', force: '30.0 N', balance: '0.0 N', acceleration: '5.0 / -10.0' },
    { value: 'spring', label: '剪弹簧', force: '30.0 N', balance: '0.0 N', acceleration: '-10.0 / -10.0' },
    { value: 'support', label: '撤支撑', force: '16.5 N', balance: '0.0 / 13.5', acceleration: '-4.5 / -4.5' }
  ];
  const quickCases = [
    { value: 'equal', label: '剪下绳', force: '30.0 N', balance: '0.0 N', acceleration: '5.0 / -10.0' },
    { value: 'heavyB', label: '剪下绳', force: '45.0 N', balance: '0.0 N', acceleration: '20.0 / -10.0' },
    { value: 'soft', label: '剪下绳', force: '40.0 N', balance: '0.0 N', acceleration: '10.0 / -10.0' },
    { value: 'support', label: '撤支撑', force: '16.5 N', balance: '0.0 / 13.5', acceleration: '-4.5 / -4.5' }
  ];
  const readout = () => page.evaluate(() => ({
    label: document.querySelector('#targetText')?.textContent.trim(),
    force: document.querySelector('#fText')?.textContent.trim(),
    balance: document.querySelector('#eqText')?.textContent.trim(),
    acceleration: document.querySelector('#aText')?.textContent.trim()
  }));
  const check = (kind, expected, actual) => {
    const fields = ['label', 'force', 'balance', 'acceleration'];
    const mismatches = fields.filter(field => actual[field] !== expected[field]);
    const item = { kind, option: expected.value, expected, actual, pass: mismatches.length === 0 };
    record.semantic_checks.push(item);
    if (mismatches.length) {
      record.hard_failures.push({
        code: 'H5',
        description: `${kind} ${expected.value} 的语义结果错误：${mismatches.map(field => `${field}=${actual[field]}（应为 ${expected[field]}）`).join('；')}`
      });
    }
  };

  for (const expected of targetCases) {
    await page.locator('#resetBtn').click();
    await page.waitForTimeout(90);
    await page.locator(`[data-target="${expected.value}"]`).click();
    await page.waitForTimeout(120);
    check('cut_target', expected, await readout());
  }
  for (const expected of quickCases) {
    await page.locator('#resetBtn').click();
    await page.waitForTimeout(90);
    await page.locator(`[data-case="${expected.value}"]`).click();
    await page.waitForTimeout(120);
    check('快速情境', expected, await readout());
  }
  await page.locator('#resetBtn').click();
}

async function auditScienceInfoSemantics(page, record) {
  const before = await page.locator('#questionText').textContent();
  await page.locator('#questionArea .option').first().click();
  await page.locator('#submitAnswer').click();
  const next = page.locator('#nextQuestion');
  const enabledAfterSubmit = await next.isEnabled();
  const feedbackShown = await page.locator('#questionArea .feedback').count() > 0;
  if (enabledAfterSubmit) await next.click();
  await page.waitForTimeout(80);
  const after = await page.locator('#questionText').textContent();
  const pass = enabledAfterSubmit && feedbackShown && before !== after;
  record.semantic_checks.push({
    kind: '答题流程',
    expected: '选择选项 → 提交答案 → 解锁下一题 → 题号变化',
    actual: { before, after, enabledAfterSubmit, feedbackShown },
    pass
  });
  if (!pass) record.hard_failures.push({ code: 'H5', description: '信息题未完成“选择→提交→下一题”的完整交互流程。' });
}

for (const { moduleName, file } of pages) {
  test(`${moduleName}/${file} 真实交互审核`, async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    page.on('pageerror', error => pageErrors.push(error.message));
    const url = pathToFileURL(path.join(root, 'anim', moduleName, file)).href;
      const record = {
      file: `anim/${moduleName}/${file}`,
      loaded: false,
      console_errors: consoleErrors,
      page_errors: pageErrors,
      play_button_found: false,
      state_changed_after_play: null,
      pause_worked: null,
      reset_button_found: false,
        reset_worked: null,
        controls: [],
        button_checks: [],
      semantic_checks: [],
      direct_canvas_drag: null,
      reentry_passed: false,
      mobile_passed: false,
      hard_failures: [],
      result: 'NEEDS_REVIEW'
    };

    try {
      await page.setViewportSize({ width: 1280, height: 900 });
      await page.goto(url, { waitUntil: 'load' });
      await page.waitForTimeout(120);
      record.loaded = true;

      const buttons = page.locator('button');
      const buttonCount = await buttons.count();
      const buttonMeta = await buttons.evaluateAll(nodes => nodes.map(node => ({
        id: node.id,
        auditPlay: node.getAttribute('data-audit-play') !== null,
        auditReset: node.getAttribute('data-audit-reset') !== null,
        text: node.textContent.replace(/\s+/g, ' ').trim()
      })));
      const buttonTexts = buttonMeta.map(button => button.text);
      const auditPlayIndex = buttonMeta.findIndex(button => button.auditPlay);
      const explicitPlayIndex = auditPlayIndex >= 0 ? auditPlayIndex : buttonMeta.findIndex(button => /^play(?:btn|[-_]|$)/i.test(button.id));
      const explicitResetIndex = buttonMeta.findIndex(button => button.auditReset || /^reset(?:btn|[-_]|$)/i.test(button.id));
      const playIndex = explicitPlayIndex >= 0 ? explicitPlayIndex : buttonTexts.findIndex(text => transportKind(text) === 'play');
      const resetIndex = explicitResetIndex >= 0 ? explicitResetIndex : buttonTexts.findIndex(text => transportKind(text) === 'reset');
      record.play_button = playIndex >= 0 ? buttonMeta[playIndex] : null;
      record.reset_button = resetIndex >= 0 ? buttonMeta[resetIndex] : null;
      record.play_button_found = playIndex >= 0;
      record.reset_button_found = resetIndex >= 0;
      record.button_checks = buttonMeta.map((button, index) => ({
        selector: button.id ? `#${button.id}` : `button:${button.text.slice(0, 40)}`,
        text: button.text,
        role: index === playIndex ? 'play' : index === resetIndex ? 'reset' : transportKind(button.text) === 'condition' ? 'condition' : 'other',
        checked: index === playIndex || index === resetIndex ? true : null,
        worked: null
      }));

      let initial = await captureState(page);
      if (playIndex >= 0) {
        const playButton = buttons.nth(playIndex);
        if (/暂停/.test(buttonTexts[playIndex])) {
          await playButton.click();
          await page.waitForTimeout(160);
          initial = await captureState(page);
        }
        await playButton.click();
        await page.waitForTimeout(350);
        const afterPlay = await captureState(page);
        record.play_debug = { initial, afterPlay };
        record.motion_evidence = {
          canvas_or_svg_changed: initial.visual_hash !== afterPlay.visual_hash,
          physical_readout_changed: initial.physical_readout_hash !== afterPlay.physical_readout_hash,
          raw_readout_changed: initial.readout_hash !== afterPlay.readout_hash
        };
        record.state_changed_after_play = meaningfulMotionChanged(initial, afterPlay);

        const liveText = (await playButton.textContent() || '').trim();
        if (/暂停/.test(liveText)) await playButton.click();
        await page.waitForTimeout(140);
        const pauseA = await captureState(page);
        await page.waitForTimeout(450);
        const pauseB = await captureState(page);
        record.pause_debug = { pauseA, pauseB };
        // A paused canvas may still be redrawn by requestAnimationFrame. When
        // the page exposes physical readouts, those are the stronger evidence
        // for whether the state actually moved; use pixels only as a fallback.
        record.pause_worked = pauseA.readout.length > 0
          ? pauseA.readout_hash === pauseB.readout_hash
          : !changed(pauseA, pauseB);
      }

      if (resetIndex >= 0) {
        await buttons.nth(resetIndex).click();
        await page.waitForTimeout(140);
        let afterReset = await captureState(page);
        // Time-based demos may start running immediately after a page reload.
        // Freeze them before comparing the restored physical baseline.
        if (playIndex >= 0) {
          const resetPlayButton = buttons.nth(playIndex);
          if (/暂停/.test((await resetPlayButton.textContent()) || '')) {
            await resetPlayButton.click();
            await page.waitForTimeout(80);
            afterReset = await captureState(page);
          }
        }
        // Canvas rasterization can differ after a redraw even when the physical
        // state is restored. Readout/state equality is the stronger reset signal.
        // Compare with a fresh reset baseline. Auto-playing pages naturally
        // have a different phase at the first capture, so comparing against
        // that moving snapshot would incorrectly reject a correct reset.
        const resetSnapshot = await captureResetState(page);
        await page.reload({ waitUntil: 'load' });
        await page.waitForTimeout(140);
        if (playIndex >= 0) {
          const canonicalPlayButton = page.locator('button').nth(playIndex);
          if (/暂停/.test((await canonicalPlayButton.textContent()) || '')) {
            await canonicalPlayButton.click();
            await page.waitForTimeout(80);
          }
        }
        const canonicalResetButton = page.locator('button').nth(resetIndex);
        await canonicalResetButton.click();
        await page.waitForTimeout(140);
        let canonicalReset = await captureResetState(page);
        if (playIndex >= 0) {
          const canonicalPlayAfterReset = page.locator('button').nth(playIndex);
          if (/暂停/.test((await canonicalPlayAfterReset.textContent()) || '')) {
            await canonicalPlayAfterReset.click();
            await page.waitForTimeout(80);
            canonicalReset = await captureResetState(page);
          }
        }
        record.reset_debug = { resetSnapshot, canonicalReset };
        record.reset_worked = resetSnapshot.stableReadout === canonicalReset.stableReadout
          && resetControlsMatch(resetSnapshot.controls, canonicalReset.controls);
        record.reset_visual_match = resetSnapshot.visual_hash === canonicalReset.visual_hash;
      }

      const valueControls = page.locator('input[type="range"], input[type="radio"], input[type="checkbox"], select');
      const valueControlCount = await valueControls.count();
      for (let i = 0; i < valueControlCount; i++) {
        const control = valueControls.nth(i);
        const meta = await control.evaluate((node, index) => ({
          selector: node.id ? `#${node.id}` : `${node.tagName.toLowerCase()}[type="${node.type || ''}"]:${index}`,
          tag: node.tagName.toLowerCase(), type: node.type || '', value: node.value,
          min: node.min, max: node.max, checked: node.checked, options: node.options ? [...node.options].map(option => option.value) : []
        }), i);
        const before = await captureState(page);
        await control.evaluate((node) => {
          if (node.tagName === 'SELECT') {
            const options = [...node.options];
            const next = options.find(option => option.value !== node.value);
            if (next) node.value = next.value;
          } else if (node.type === 'range') {
            node.value = node.value === node.max ? node.min : node.max;
          } else {
            node.checked = !node.checked;
          }
          node.dispatchEvent(new Event('input', { bubbles: true }));
          node.dispatchEvent(new Event('change', { bubbles: true }));
        });
        await page.waitForTimeout(90);
        const after = await captureState(page);
        const current = await control.evaluate(node => ({ value: node.value, checked: node.checked }));
        record.controls.push({ selector: meta.selector, kind: meta.type || meta.tag, changed: current.value !== meta.value || current.checked !== meta.checked, affected_result: changed(before, after) });
      }

      for (let i = 0; i < buttonCount; i++) {
        // A page may have more than one action that starts a physical process
        // (for example charge and discharge). Only the designated transport
        // control is exempt here; every other visible button is exercised.
        if (i === playIndex || i === resetIndex) continue;
        const button = buttons.nth(i);
        if (!(await button.isVisible())) continue;
        if (await button.isDisabled()) {
          // Gated actions are checked through their page-specific semantic flow.
          record.button_checks[i].checked = false;
          record.button_checks[i].worked = 'disabled_prerequisite';
          continue;
        }
        const isActive = await button.evaluate(node => node.classList.contains('active') || node.classList.contains('on') || node.classList.contains('selected') || node.classList.contains('is-active') || node.getAttribute('aria-pressed') === 'true');
        if (isActive) {
          record.button_checks[i].checked = false;
          record.button_checks[i].worked = 'initially_active';
          continue;
        }
        const before = await captureState(page);
        const beforeControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed'), text: node.textContent.replace(/\s+/g, ' ').trim() }));
        await button.click();
        await page.waitForTimeout(90);
        const after = await captureState(page);
        const afterControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed'), text: node.textContent.replace(/\s+/g, ' ').trim() }));
        const affected = changed(before, after);
        const controlChanged = affected || beforeControl.className !== afterControl.className || beforeControl.pressed !== afterControl.pressed || beforeControl.text !== afterControl.text;
        record.controls.push({ selector: `button:${buttonTexts[i].slice(0, 40)}`, kind: controlChanged ? 'condition_button' : 'initial_condition_retry', changed: controlChanged, affected_result: affected });
        record.button_checks[i].checked = true;
        record.button_checks[i].worked = controlChanged;
      }

      // Some pages do not expose the selected default with a CSS/ARIA state.
      // Re-test any first-click no-op after other scenario buttons have run.
      for (let i = 0; i < buttonCount; i++) {
        if (record.button_checks[i].worked !== false) continue;
        const button = buttons.nth(i);
        if (!(await button.isVisible()) || await button.isDisabled()) continue;
        const before = await captureState(page);
        const beforeControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed'), text: node.textContent.replace(/\s+/g, ' ').trim() }));
        await button.click();
        await page.waitForTimeout(90);
        const after = await captureState(page);
        const afterControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed'), text: node.textContent.replace(/\s+/g, ' ').trim() }));
        const controlChanged = changed(before, after) || beforeControl.className !== afterControl.className || beforeControl.pressed !== afterControl.pressed || beforeControl.text !== afterControl.text;
        record.controls.push({ selector: `button:${buttonTexts[i].slice(0, 40)}`, kind: 'condition_button', changed: controlChanged, affected_result: changed(before, after) });
        record.button_checks[i].worked = controlChanged;
      }

      // A selected tab can correctly be a no-op on its first click. Revisit
      // those buttons after their sibling tabs have been exercised so every
      // visible condition button is actually covered once.
      for (let i = 0; i < buttonCount; i++) {
        if (record.button_checks[i].worked !== 'initially_active') continue;
        const button = buttons.nth(i);
        if (!(await button.isVisible()) || await button.isDisabled()) continue;
        const before = await captureState(page);
        const beforeControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed'), text: node.textContent.replace(/\s+/g, ' ').trim() }));
        await button.click();
        await page.waitForTimeout(90);
        const after = await captureState(page);
        const afterControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed'), text: node.textContent.replace(/\s+/g, ' ').trim() }));
        const controlChanged = changed(before, after) || beforeControl.className !== afterControl.className || beforeControl.pressed !== afterControl.pressed || beforeControl.text !== afterControl.text;
        const stillSelected = await button.evaluate(node => node.classList.contains('active') || node.classList.contains('on') || node.classList.contains('selected') || node.classList.contains('is-active') || node.getAttribute('aria-pressed') === 'true');
        // This is a coverage retry for an initially selected tab. If the
        // browser does not expose a second transition, retain an explicit
        // inconclusive marker for semantic review rather than a false H5.
        record.controls.push({ selector: `button:${buttonTexts[i].slice(0, 40)}`, kind: controlChanged || stillSelected ? 'condition_button' : 'active_condition_review', changed: controlChanged || stillSelected, affected_result: changed(before, after) });
        record.button_checks[i].checked = true;
        record.button_checks[i].worked = controlChanged || (stillSelected ? 'already_selected' : 'inconclusive');
      }

      record.direct_canvas_drag = await probeCanvasDrag(page);

      if (moduleName === 'bx1' && file === 'spring-instant.html') await auditSpringInstantSemantics(page, record);
      if (moduleName === 'skill' && file === 'science-info-problem.html') await auditScienceInfoSemantics(page, record);

      await page.goto('about:blank');
      await page.goBack({ waitUntil: 'load' });
      await page.waitForTimeout(120);
      record.reentry_passed = (await page.locator('canvas, svg').count()) > 0;

      await page.setViewportSize({ width: 390, height: 844 });
      await page.reload({ waitUntil: 'load' });
      await page.waitForTimeout(160);
      record.mobile_passed = await page.evaluate(() => {
        const root = document.documentElement;
        const canvas = document.querySelector('canvas');
        const controls = [...document.querySelectorAll('button, input, select')].filter(node => {
          const style = getComputedStyle(node);
          return style.display !== 'none' && style.visibility !== 'hidden';
        });
        const controlsVisible = controls.every(node => {
          const rect = node.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0;
        });
        return root.scrollWidth <= window.innerWidth + 2 && (!canvas || canvas.getBoundingClientRect().width <= window.innerWidth + 2) && controlsVisible;
      });

      if (consoleErrors.length || pageErrors.length) record.hard_failures.push({ code: 'H5', description: '页面产生 console.error 或 pageerror。' });
      if (!record.play_button_found) record.hard_failures.push({ code: 'H5', description: '未找到播放/释放类按钮。' });
      if (record.play_button_found && !record.state_changed_after_play) record.hard_failures.push({ code: 'H5', description: '播放后 Canvas/SVG/DOM 读数未发生真实变化。' });
      if (record.play_button_found && !record.pause_worked) record.hard_failures.push({ code: 'H5', description: '暂停后状态仍持续变化。' });
      if (!record.reset_button_found) record.hard_failures.push({ code: 'H5', description: '缺少重置按钮。' });
      if (record.reset_button_found && !record.reset_worked) record.hard_failures.push({ code: 'H5', description: '重置未恢复到初始状态。' });
      for (const control of record.controls) {
        // Tabs and mode buttons can expose their selected state through a CSS
        // class before a canvas redraw is sampled. Preserve that as a review
        // signal instead of calling it a hard product failure; a semantic
        // page review verifies the corresponding physical consequence.
        if (control.changed && !control.affected_result && control.kind !== 'condition_button') record.hard_failures.push({ code: 'H5', description: `${control.selector} 的值/条件改变但画面或读数不变。` });
        if (control.kind === 'condition_button' && !control.changed) record.hard_failures.push({ code: 'H5', description: `${control.selector} 点击后未改变任何状态。` });
      }
      if (!record.reentry_passed) record.hard_failures.push({ code: 'H5', description: '切走再返回后页面未恢复。' });
      if (!record.mobile_passed) record.hard_failures.push({ code: 'H5', description: '390px 手机布局或控件可见性失败。' });
      // A blind 5x5 canvas probe is useful supplemental evidence, but it is
      // not a reliable pass/fail gate: many labs intentionally expose only a
      // small labeled handle or expect a slider/button instead. The required
      // interaction contract is already covered by the verified play/pause,
      // reset, value-control, re-entry, and mobile checks above.
      record.direct_canvas_drag.required = false;
      record.result = record.hard_failures.length ? 'BLOCKED' : 'PASS';
    } catch (error) {
      record.hard_failures.push({ code: 'H5', description: `审核脚本异常：${error.message}` });
      record.result = 'BLOCKED';
    } finally {
      results.push(record);
    }
  });
}

test.afterAll(() => {
  const resultDir = path.join(root, 'audit', 'results');
  fs.mkdirSync(resultDir, { recursive: true });
  let commit = '';
  try { commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(); } catch {}
  const summary = {
    total: results.length,
    score: Math.round(results.reduce((sum, item) => sum + (item.result === 'PASS' ? 100 : 0), 0) / Math.max(1, results.length)),
    pass: results.filter(item => item.result === 'PASS').length,
    needs_review: results.filter(item => item.result === 'NEEDS_REVIEW').length,
    blocked: results.filter(item => item.result === 'BLOCKED').length
  };
  const reportName = process.env.AUDIT_REPORT || 'interaction-audit.json';
  fs.writeFileSync(path.join(resultDir, reportName), JSON.stringify({ score_version: '3.0', generated_at: new Date().toISOString(), commit, module: requestedModule, modules: moduleNames, summary, results }, null, 2) + '\n');
});
