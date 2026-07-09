/* anim/common/vector-utils.js — 箭头、矢量、坐标轴工具
 * 规格：V1.2.2 §3.4 视觉规范
 *   位移/轨迹 深灰实线；速度 蓝；加速度 紫；力 红；辅助线 浅灰虚线
 */
(function (global) {
  'use strict';

  const COLORS = {
    trail: '#334e68',
    velocity: '#2c7be5',
    acceleration: '#7b2cbf',
    force: '#e03131',
    field: '#f08c00',
    magnetic: '#5f3dc4',
    current: '#e03131',
    guide: '#aab8c2',
    critical: '#f0a500',
    error: '#ff5252',
    ok: '#2ecc40'
  };

  // 画箭头 (ctx, x1, y1, x2, y2, color, headSize)
  function arrow(ctx, x1, y1, x2, y2, color, headSize) {
    headSize = headSize == null ? 8 : headSize;
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len < 1) return;
    const ux = dx / len, uy = dy / len;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2 - ux * headSize * 0.6, y2 - uy * headSize * 0.6);
    ctx.stroke();
    // 箭头三角
    const a = Math.atan2(dy, dx);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headSize * Math.cos(a - 0.4), y2 - headSize * Math.sin(a - 0.4));
    ctx.lineTo(x2 - headSize * Math.cos(a + 0.4), y2 - headSize * Math.sin(a + 0.4));
    ctx.closePath();
    ctx.fill();
  }

  // 带标签的箭头
  function labeledArrow(ctx, x1, y1, x2, y2, label, color, headSize) {
    arrow(ctx, x1, y1, x2, y2, color, headSize);
    if (label) {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      ctx.fillStyle = color;
      ctx.font = '13px system-ui, sans-serif';
      ctx.fillText(label, mx + 6, my - 4);
    }
  }

  // 坐标轴 (origin x,y, x轴长, y轴长, xLabel, yLabel)
  function axes(ctx, ox, oy, xlen, ylen, xLabel, yLabel) {
    ctx.strokeStyle = COLORS.guide;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    // x 轴
    arrow(ctx, ox, oy, ox + xlen, oy, COLORS.guide, 7);
    // y 轴（向上为正，屏幕 y 向下，故 oy-ylen）
    arrow(ctx, ox, oy, ox, oy - ylen, COLORS.guide, 7);
    ctx.fillStyle = '#486581';
    ctx.font = '13px system-ui, sans-serif';
    if (xLabel) ctx.fillText(xLabel, ox + xlen - 6, oy + 16);
    if (yLabel) ctx.fillText(yLabel, ox + 6, oy - ylen + 4);
    ctx.fillText('O', ox - 12, oy + 14);
  }

  // 虚线辅助线
  function dashed(ctx, x1, y1, x2, y2, color) {
    ctx.strokeStyle = color || COLORS.guide;
    ctx.setLineDash([5, 4]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // 文字标签
  function label(ctx, text, x, y, color, font) {
    ctx.fillStyle = color || '#243b53';
    ctx.font = font || '13px system-ui, sans-serif';
    ctx.fillText(text, x, y);
  }

  // 矩形物体
  function box(ctx, x, y, w, h, fill, stroke) {
    ctx.fillStyle = fill || '#d9e2ec';
    ctx.strokeStyle = stroke || '#334e68';
    ctx.lineWidth = 1.5;
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
  }

  // 圆形物体
  function ball(ctx, cx, cy, r, fill, stroke) {
    ctx.fillStyle = fill || '#2c7be5';
    ctx.strokeStyle = stroke || '#102a43';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  global.VU = {
    COLORS: COLORS,
    arrow: arrow,
    labeledArrow: labeledArrow,
    axes: axes,
    dashed: dashed,
    label: label,
    box: box,
    ball: ball
  };
})(window);
