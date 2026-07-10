const { test } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const { execFileSync } = require('child_process');

const root = path.resolve(__dirname, '..');
const moduleName = process.env.AUDIT_MODULE || 'bx1';
const animationDir = path.join(root, 'anim', moduleName);
const files = fs.readdirSync(animationDir).filter(name => name.endsWith('.html')).sort();
const results = [];

test.describe.configure({ mode: 'serial' });
test.setTimeout(90_000);

function transportKind(text) {
  if (/重置|复位/.test(text)) return 'reset';
  if (/播放|暂停|释放|运动|下落|上抛|振动|回弹|扫描|旋转|过程|演示/.test(text)) return 'play';
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
    const readout = [...document.querySelectorAll('.readout, [id*="readout"], [id*="status"], .status')]
      .map(node => node.textContent.replace(/\s+/g, ' ').trim())
      .filter(Boolean);
    return { visual_hash: hash(JSON.stringify({ canvas, svg })), readout_hash: hash(readout.join('|')), readout };
  });
}

function changed(before, after) {
  return before.visual_hash !== after.visual_hash || before.readout_hash !== after.readout_hash;
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

for (const file of files) {
  test(`${moduleName}/${file} 真实交互审核`, async ({ page }) => {
    const consoleErrors = [];
    const pageErrors = [];
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    page.on('pageerror', error => pageErrors.push(error.message));
    const url = pathToFileURL(path.join(animationDir, file)).href;
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
      const buttonTexts = (await buttons.allTextContents()).map(text => text.replace(/\s+/g, ' ').trim());
      const playIndex = buttonTexts.findIndex(text => transportKind(text) === 'play');
      const resetIndex = buttonTexts.findIndex(text => transportKind(text) === 'reset');
      record.play_button_found = playIndex >= 0;
      record.reset_button_found = resetIndex >= 0;

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
        record.state_changed_after_play = changed(initial, afterPlay);

        const liveText = (await playButton.textContent() || '').trim();
        if (/暂停/.test(liveText)) await playButton.click();
        await page.waitForTimeout(140);
        const pauseA = await captureState(page);
        await page.waitForTimeout(450);
        const pauseB = await captureState(page);
        record.pause_worked = !changed(pauseA, pauseB);
      }

      if (resetIndex >= 0) {
        await buttons.nth(resetIndex).click();
        await page.waitForTimeout(140);
        const afterReset = await captureState(page);
        // Canvas rasterization can differ after a redraw even when the physical
        // state is restored. Readout/state equality is the stronger reset signal.
        record.reset_worked = afterReset.readout_hash === initial.readout_hash;
        record.reset_visual_match = afterReset.visual_hash === initial.visual_hash;
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
        if (i === playIndex || i === resetIndex || transportKind(buttonTexts[i]) !== 'condition') continue;
        const button = buttons.nth(i);
        if (!(await button.isVisible())) continue;
        const isActive = await button.evaluate(node => node.classList.contains('active') || node.getAttribute('aria-pressed') === 'true');
        if (isActive) continue;
        const before = await captureState(page);
        const beforeControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed') }));
        await button.click();
        await page.waitForTimeout(90);
        const after = await captureState(page);
        const afterControl = await button.evaluate(node => ({ className: node.className, pressed: node.getAttribute('aria-pressed') }));
        const affected = changed(before, after);
        const controlChanged = affected || beforeControl.className !== afterControl.className || beforeControl.pressed !== afterControl.pressed;
        record.controls.push({ selector: `button:${buttonTexts[i].slice(0, 40)}`, kind: 'condition_button', changed: controlChanged, affected_result: affected });
      }

      record.direct_canvas_drag = await probeCanvasDrag(page);

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
        const controls = [...document.querySelectorAll('button, input, select')];
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
        if (control.changed && !control.affected_result) record.hard_failures.push({ code: 'H5', description: `${control.selector} 的值/条件改变但画面或读数不变。` });
      }
      if (!record.reentry_passed) record.hard_failures.push({ code: 'H5', description: '切走再返回后页面未恢复。' });
      if (!record.mobile_passed) record.hard_failures.push({ code: 'H5', description: '390px 手机布局或控件可见性失败。' });
      record.result = record.hard_failures.length ? 'BLOCKED' : (record.direct_canvas_drag?.affected_result ? 'PASS' : 'NEEDS_REVIEW');
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
    pass: results.filter(item => item.result === 'PASS').length,
    needs_review: results.filter(item => item.result === 'NEEDS_REVIEW').length,
    blocked: results.filter(item => item.result === 'BLOCKED').length
  };
  fs.writeFileSync(path.join(resultDir, 'interaction-audit.json'), JSON.stringify({ score_version: '3.0', generated_at: new Date().toISOString(), commit, module: moduleName, summary, results }, null, 2) + '\n');
});
