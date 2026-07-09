/* anim/common/graph-utils.js — x-t、v-t、F-t、p-V 等图像工具
 * 规格：V1.2.2 §3.6 / §3.4
 * 提供：坐标系、折线、填充面积、动态游标
 */
(function (global) {
  'use strict';

  // 在 ctx 上画一个图像坐标系
  // opts: { ox, oy, w, h, xMin, xMax, yMin, yMax, xLabel, yLabel, xUnit, yUnit, color }
  function makeAxis(ctx, opts) {
    const o = Object.assign({
      ox: 40, oy: 240, w: 300, h: 200,
      xMin: 0, xMax: 10, yMin: 0, yMax: 10,
      xLabel: 'x', yLabel: 'y', color: '#334e68'
    }, opts);
    const sx = o.w / (o.xMax - o.xMin);
    const sy = o.h / (o.yMax - o.yMin);
    // 轴
    ctx.strokeStyle = o.color;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(o.ox, o.oy);
    ctx.lineTo(o.ox + o.w, o.oy);
    ctx.moveTo(o.ox, o.oy);
    ctx.lineTo(o.ox, o.oy - o.h);
    ctx.stroke();
    // 箭头
    ctx.fillStyle = o.color;
    ctx.beginPath();
    ctx.moveTo(o.ox + o.w, o.oy);
    ctx.lineTo(o.ox + o.w - 7, o.oy - 4);
    ctx.lineTo(o.ox + o.w - 7, o.oy + 4);
    ctx.closePath(); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(o.ox, o.oy - o.h);
    ctx.lineTo(o.ox - 4, o.oy - o.h + 7);
    ctx.lineTo(o.ox + 4, o.oy - o.h + 7);
    ctx.closePath(); ctx.fill();
    // 标签
    ctx.fillStyle = '#486581';
    ctx.font = '12px system-ui, sans-serif';
    ctx.fillText(o.xLabel, o.ox + o.w - 4, o.oy + 16);
    ctx.fillText(o.yLabel, o.ox - 28, o.oy - o.h + 10);
    ctx.fillText('O', o.ox - 10, o.oy + 14);
    return { sx: sx, sy: sy, ox: o.ox, oy: o.oy, w: o.w, h: o.h, xMin: o.xMin, xMax: o.xMax, yMin: o.yMin, yMax: o.yMax };
  }

  // 把数据点 (x,y) 转为屏幕坐标
  function toScreen(g, x, y) {
    return { x: g.ox + (x - g.xMin) * g.sx, y: g.oy - (y - g.yMin) * g.sy };
  }

  // 画折线 points: [[x,y],...]，color
  function plot(ctx, g, points, color, width) {
    if (!points.length) return;
    ctx.strokeStyle = color || '#2c7be5';
    ctx.lineWidth = width || 2;
    ctx.setLineDash([]);
    ctx.beginPath();
    const p0 = toScreen(g, points[0][0], points[0][1]);
    ctx.moveTo(p0.x, p0.y);
    for (let i = 1; i < points.length; i++) {
      const p = toScreen(g, points[i][0], points[i][1]);
      ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();
  }

  // 填充曲线与 x 轴之间的面积 points: [[x,y],...]
  function fillArea(ctx, g, points, color) {
    if (!points.length) return;
    ctx.fillStyle = color || 'rgba(44,123,229,0.18)';
    ctx.beginPath();
    const p0 = toScreen(g, points[0][0], 0);
    ctx.moveTo(p0.x, g.oy);
    for (let i = 0; i < points.length; i++) {
      const p = toScreen(g, points[i][0], points[i][1]);
      ctx.lineTo(p.x, p.y);
    }
    const pe = toScreen(g, points[points.length - 1][0], 0);
    ctx.lineTo(pe.x, g.oy);
    ctx.closePath();
    ctx.fill();
  }

  // 游标点：在 (x,y) 处画一个点 + 虚线到轴
  function cursor(ctx, g, x, y, color) {
    const p = toScreen(g, x, y);
    ctx.strokeStyle = color || '#f0a500';
    ctx.setLineDash([4, 3]);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(p.x, g.oy); ctx.lineTo(p.x, p.y);
    ctx.moveTo(g.ox, p.y); ctx.lineTo(p.x, p.y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color || '#f0a500';
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  global.GU = { makeAxis: makeAxis, toScreen: toScreen, plot: plot, fillArea: fillArea, cursor: cursor };
})(window);
