import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { assessMarkdownPublication } from "./publication-policy.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(projectRoot, "content", "rome");
const configPath = path.join(projectRoot, "content", "publish.config.json");
const isPublicAudit = process.argv.includes("--public");

const credentialRules = [
  { id: "private-key", pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/ },
  { id: "openai-key", pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/ },
  { id: "github-token", pattern: /\b(?:ghp|github_pat)_[A-Za-z0-9_]{20,}\b/ },
  { id: "aws-access-key", pattern: /\bAKIA[0-9A-Z]{16}\b/ },
  { id: "slack-token", pattern: /\bxox[baprs]-[A-Za-z0-9-]{18,}\b/ },
];

async function walk(root, relative = "") {
  const entries = await readdir(path.join(root, relative), { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(root, child)));
    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) files.push(child);
  }
  return files;
}

const config = JSON.parse(await readFile(configPath, "utf8"));
const files = await walk(contentRoot);
const report = {
  files: files.length,
  credentialFindings: [],
  absolutePathFiles: [],
  personalSourceFiles: [],
  operationalFiles: [],
  publishOptOutFiles: [],
  policyViolations: [],
};

for (const relative of files) {
  const text = await readFile(path.join(contentRoot, relative), "utf8");
  const publication = assessMarkdownPublication(relative, text, config);
  if (!publication.allowed) {
    report.policyViolations.push({ path: relative, reasons: publication.reasons });
  }
  for (const rule of credentialRules) {
    if (rule.pattern.test(text)) report.credentialFindings.push({ path: relative, rule: rule.id });
  }
  if (/\/(?:Users|home)\/[A-Za-z0-9._-]+\//.test(text)) report.absolutePathFiles.push(relative);
  if (/^source:\s*me\s*$/m.test(text)) report.personalSourceFiles.push(relative);
  if (/^publish:\s*false\s*$/m.test(text)) report.publishOptOutFiles.push(relative);
  if (
    /^(?:Agent|Code)(?:\/|$)/.test(relative) ||
    /^(?:AGENTS|CLAUDE)\.md$/i.test(relative) ||
    path.basename(relative).startsWith("_")
  ) {
    report.operationalFiles.push(relative);
  }
}

console.log(`Publication audit: ${report.files} Markdown files.`);
console.log(`  Credential-pattern findings: ${report.credentialFindings.length}`);
console.log(`  Files containing absolute local paths: ${report.absolutePathFiles.length}`);
console.log(`  Files marked source: me: ${report.personalSourceFiles.length}`);
console.log(`  Operational/instruction candidates: ${report.operationalFiles.length}`);
console.log(`  Files marked publish: false: ${report.publishOptOutFiles.length}`);
console.log(`  Publication-policy violations: ${report.policyViolations.length}`);
console.log(
  `  Configured exclusions: ${(config.excludePaths || []).length} exact paths, ${(config.excludePrefixes || []).length} path prefixes, and a conservative human-facing content filter.`,
);

if (report.credentialFindings.length > 0) {
  console.error("Public build blocked: possible credential material was detected.");
  for (const finding of report.credentialFindings) {
    console.error(`  ${finding.rule}: ${finding.path}`);
  }
  process.exit(1);
}

if (report.policyViolations.length > 0 || report.publishOptOutFiles.length > 0) {
  console.error("Public snapshot contains material excluded by its publication policy.");
  for (const violation of report.policyViolations) {
    console.error(`  ${violation.path}: ${violation.reasons.join(", ")}`);
  }
  process.exit(3);
}

if (
  isPublicAudit &&
  !config.publicBuildApproved &&
  process.env.ALLOW_UNREVIEWED_PUBLIC !== "1"
) {
  console.error(
    "Public build blocked: content/publish.config.json has not been approved after a privacy review.",
  );
  process.exit(2);
}

if (isPublicAudit && process.env.ALLOW_UNREVIEWED_PUBLIC === "1") {
  console.warn("Public-approval gate bypassed for local build verification.");
}
