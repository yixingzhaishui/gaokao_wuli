/* Add explicit policy-2.0 review fields without fabricating verification evidence. */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
for (const rel of ['data/verified-problems.json', 'data/verified-diagnostic-2024cee.json']) {
  const full = path.join(root, rel);
  const data = JSON.parse(fs.readFileSync(full, 'utf8'));
  data.source_policy_version = '2.0';
  for (const p of data.problems || []) {
    p.source_policy_version = '2.0';
    p.legacy_source_verified ??= p.source_verified === true;
    if (p.verification_status !== 'double_checked') p.source_verified = false;
    p.primary_source_url ??= Array.isArray(p.source_urls) ? p.source_urls[0] || null : null;
    p.primary_source_tier ??= null;
    p.independent_secondary_sources ??= [];
    p.no_primary_source_reason ??= null;
    p.scan_page ??= null;
    p.file_sha256 ??= null;
    p.answer_source_url ??= null;
    p.answer_source_tier ??= null;
    p.stem_checked_by ??= null;
    p.answer_checked_by ??= null;
    p.solution_recalculated_by ??= null;
    if (p.diagram_required || p.diagram || p.image || p.img || p.figure || p.svg) p.figure_fidelity_checked_by ??= null;
    p.verification_status ??= 'pending_policy_2_review';
  }
  fs.writeFileSync(full, `${JSON.stringify(data, null, 2)}\n`);
  console.log(`Migrated ${(data.problems || []).length} source candidates in ${rel}.`);
}
