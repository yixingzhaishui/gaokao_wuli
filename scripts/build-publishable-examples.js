/* Build-time fail-closed export of policy-2.0 publishable examples. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const inputs = ['data/verified-problems.json', 'data/verified-diagnostic-2024cee.json'];
const all = inputs.flatMap(rel => {
  const data = JSON.parse(fs.readFileSync(path.join(root, rel), 'utf8'));
  return data.problems || [];
});

function publishable(p) {
  const independentB = Array.isArray(p.independent_secondary_sources) && p.independent_secondary_sources.filter(s => s?.tier === 'B').length >= 2;
  const sourceOkay = p.primary_source_tier === 'A' || (independentB && p.no_primary_source_reason);
  return p.source_policy_version === '2.0' && sourceOkay && p.scan_page && p.file_sha256 &&
    p.stem_checked_by && p.answer_checked_by && p.solution_recalculated_by &&
    p.verification_status === 'double_checked' && (!p.diagram_required || p.figure_fidelity_checked_by);
}

const problems = all.filter(publishable);
const byNode = {};
for (const p of problems) {
  for (const id of [...(p.knowledge_ids || []), ...(p.model_ids || [])]) {
    (byNode[id] ||= []).push(p);
  }
}

const output = {
  schema_version: 1,
  source_policy_version: '2.0',
  generated_at: '2026-07-15',
  fail_closed: true,
  publishable_count: problems.length,
  by_node: byNode
};
fs.writeFileSync(path.join(root, 'data/publishable-page-examples.json'), `${JSON.stringify(output, null, 2)}\n`);
console.log(`Built ${problems.length} policy-2.0 publishable examples; ${all.length - problems.length} records remain blocked.`);
