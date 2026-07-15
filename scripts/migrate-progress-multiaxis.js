/* One-time/idempotent migration from a single ambiguous status to review axes. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const progressPath = path.join(root, 'data/progress.json');
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
const today = '2026-07-15';

for (const [id, item] of Object.entries(progress)) {
  const legacy = item.status || 'pending';
  item.status_scope = 'page_structure_and_interaction_only';
  item.review_axes = {
    curriculum_map: {
      status: ['B3-25', 'B3-26', 'B3-27', 'X3-19'].includes(id) ? 'mapped_pending_teacher_review' : 'pending',
      reviewer: null,
      evidence: ['B3-25', 'B3-26', 'B3-27'].includes(id) ? 'data/curriculum-map.json' : null
    },
    physics_content: {
      status: id === 'B3-16' ? 'corrected_pending_teacher_review' : 'pending',
      reviewer: null,
      evidence: id === 'B3-16' ? 'audit/content/P0-CALC-001.md' : null
    },
    examples_recalculated: {
      status: id === 'B3-16' ? 'partial_known_error_corrected' : 'pending',
      reviewer: null,
      evidence: id === 'B3-16' ? 'audit/content/P0-CALC-001.md' : null
    },
    source_review: { status: 'pending', reviewer: null, evidence: null },
    pedagogy_review: { status: 'pending', reviewer: null, evidence: null },
    interaction_qa: {
      status: legacy === 'done' || legacy === 'review' ? 'passed_existing_audit' : 'pending',
      reviewer: 'automated_interaction_audit',
      evidence: legacy === 'done' || legacy === 'review' ? 'audit/results/interaction-audit.json' : null
    },
    mobile_qa: {
      status: legacy === 'done' || legacy === 'review' ? 'passed_existing_audit' : 'pending',
      reviewer: 'automated_interaction_audit',
      evidence: legacy === 'done' || legacy === 'review' ? 'audit/results/interaction-audit.json' : null
    },
    editorial_structure: {
      status: 'reviewed_by_codex',
      reviewer: 'Codex AI editorial review',
      evidence: 'data/editorial-review.json'
    },
    formula_first_use: {
      status: 'reviewed_by_codex',
      reviewer: 'Codex AI editorial review',
      evidence: 'audit/content/formula-first-use-review.md'
    },
    publish: {
      status: 'blocked',
      reason: 'OpenAI content review P0 gates and teacher sign-off remain open',
      reviewed_at: today
    }
  };
  delete item.score;
  delete item.strict_certified;
}

fs.writeFileSync(progressPath, `${JSON.stringify(progress, null, 2)}\n`);
console.log(`Migrated ${Object.keys(progress).length} progress records to multi-axis review state.`);
