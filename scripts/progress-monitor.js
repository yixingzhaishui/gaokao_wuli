#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const statePath = path.join(root, '.codex-progress.json');
const bankPath = path.join(root, 'data/verified-problems.json');
const diagnosticPath = path.join(root, 'data/verified-diagnostic-2024cee.json');
const STALE_MS = 30 * 60 * 1000;

function loadJson(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (_) {
    return fallback;
  }
}

function counts() {
  const bank = loadJson(bankPath, { problems: [] });
  const diagnostic = loadJson(diagnosticPath, { problems: [] });
  const bankCount = Array.isArray(bank.problems) ? bank.problems.length : 0;
  const diagnosticCount = Array.isArray(diagnostic.problems) ? diagnostic.problems.length : 0;
  return {
    bank: bankCount,
    diagnostic: diagnosticCount,
    student: bankCount + diagnosticCount
  };
}

function loadState() {
  return loadJson(statePath, null);
}

function saveState(state) {
  fs.writeFileSync(statePath, `${JSON.stringify(state, null, 2)}\n`);
}

function nowIso() {
  return new Date().toISOString();
}

function minutes(ms) {
  return Math.floor(ms / 60000);
}

const command = process.argv[2] || 'status';
const note = process.argv.slice(3).join(' ').trim();
const current = counts();
const now = Date.now();

if (command === 'start') {
  const state = {
    started_at: nowIso(),
    last_progress_at: nowIso(),
    last_report_at: nowIso(),
    last_student_count: current.student,
    last_task: note || 'started progress monitoring'
  };
  saveState(state);
  console.log(`monitor started: student=${current.student}`);
  process.exit(0);
}

let state = loadState();
if (!state) {
  state = {
    started_at: nowIso(),
    last_progress_at: nowIso(),
    last_report_at: nowIso(),
    last_student_count: current.student,
    last_task: 'implicit start'
  };
}

const previousCount = Number(state.last_student_count || 0);
const changed = current.student !== previousCount;
const lastProgressMs = Date.parse(state.last_progress_at || state.started_at || nowIso());
const elapsedNoProgress = Number.isFinite(lastProgressMs) ? now - lastProgressMs : 0;

if (command === 'mark') {
  state.last_report_at = nowIso();
  state.last_task = note || state.last_task || 'progress mark';
  if (changed || note) {
    state.last_progress_at = nowIso();
    state.last_student_count = current.student;
  }
  saveState(state);
  console.log(`mark: student=${current.student}, delta=${current.student - previousCount}, task=${state.last_task}`);
  process.exit(0);
}

if (command === 'check') {
  const stale = elapsedNoProgress >= STALE_MS;
  state.last_report_at = nowIso();
  saveState(state);
  console.log(JSON.stringify({
    student: current.student,
    bank: current.bank,
    diagnostic: current.diagnostic,
    last_student_count: previousCount,
    minutes_without_progress: minutes(elapsedNoProgress),
    stale,
    action_required: stale ? 'check reason and report before continuing' : 'continue'
  }, null, 2));
  process.exit(stale ? 2 : 0);
}

console.log(JSON.stringify({
  student: current.student,
  bank: current.bank,
  diagnostic: current.diagnostic,
  last_student_count: previousCount,
  minutes_without_progress: minutes(elapsedNoProgress),
  command_help: [
    'node scripts/progress-monitor.js start "<task>"',
    'node scripts/progress-monitor.js mark "<task completed>"',
    'node scripts/progress-monitor.js check'
  ]
}, null, 2));
