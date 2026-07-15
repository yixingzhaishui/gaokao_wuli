/* Record completed AI editorial review separately from physics/source/publishing approval. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const progressPath = path.join(root, 'data/progress.json');
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
for (const item of Object.values(progress)) {
  item.review_axes.editorial_structure = {
    status: 'reviewed_by_codex',
    reviewer: 'Codex AI editorial review',
    evidence: 'data/editorial-review.json'
  };
  item.review_axes.formula_first_use = {
    status: 'reviewed_by_codex',
    reviewer: 'Codex AI editorial review',
    evidence: 'audit/content/formula-first-use-review.md'
  };
}
fs.writeFileSync(progressPath, `${JSON.stringify(progress, null, 2)}\n`);
console.log(`Recorded editorial review for ${Object.keys(progress).length} nodes.`);
