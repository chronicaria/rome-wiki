import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { assessMarkdownPublication } from "../scripts/publication-policy.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(path.join(projectRoot, "app/data/rome.generated.json")));
const searchIndex = JSON.parse(await readFile(path.join(projectRoot, "public/search-index.json")));
const publicationConfig = JSON.parse(
  await readFile(path.join(projectRoot, "content/publish.config.json")),
);
const researchUpdates = JSON.parse(
  await readFile(path.join(projectRoot, "content/research-updates.json")),
);

async function walk(root, relative = "") {
  const entries = await readdir(path.join(root, relative), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(root, child)));
    if (entry.isFile()) files.push(child);
  }
  return files;
}

test("publishes every synced Markdown note exactly once", async () => {
  const snapshot = await walk(path.join(projectRoot, "content/rome"));
  const markdownFiles = snapshot.filter((file) => file.toLowerCase().endsWith(".md"));
  assert.equal(manifest.articles.length, markdownFiles.length);
  assert.equal(manifest.stats.articleCount, markdownFiles.length);
  assert.equal(searchIndex.length, markdownFiles.length);

  const slugs = manifest.articles.map((article) => article.slug);
  assert.equal(new Set(slugs).size, slugs.length, "article slugs must be unique");
  assert.ok(slugs.every((slug) => !slug.startsWith("/") && !slug.endsWith("/")));
});

test("keeps duplicate note titles distinct through path-based slugs", () => {
  const overviews = manifest.articles.filter((article) =>
    article.sourcePath.endsWith("/00 — Overview.md"),
  );
  assert.equal(overviews.length, 27);
  assert.equal(new Set(overviews.map((article) => article.slug)).size, 27);

  const boundaryNotes = manifest.articles.filter(
    (article) => article.title === "Boundary conditions as geometry",
  );
  assert.equal(boundaryNotes.length, 2);
  assert.notEqual(boundaryNotes[0].slug, boundaryNotes[1].slug);
});

test("renders one independently loadable body per article", async () => {
  const contentRoot = path.join(projectRoot, "app/data/article-content");
  const contentFiles = (await readdir(contentRoot)).filter((file) => file.endsWith(".json"));
  assert.equal(contentFiles.length, manifest.articles.length);

  let sawMath = false;
  let sawCallout = false;
  let sawWikiLink = false;
  for (const file of contentFiles) {
    const content = JSON.parse(await readFile(path.join(contentRoot, file)));
    assert.equal(typeof content.html, "string");
    assert.ok(content.html.length > 0);
    sawMath ||= content.html.includes('class="katex"');
    sawCallout ||= content.html.includes('class="callout');
    sawWikiLink ||= content.html.includes('class="wiki-link');
  }
  assert.ok(sawMath, "expected KaTeX output");
  assert.ok(sawCallout, "expected Obsidian callout output");
  assert.ok(sawWikiLink, "expected resolved wikilinks");
});

test("keeps graph references internally consistent", () => {
  const slugs = new Set(manifest.articles.map((article) => article.slug));
  for (const article of manifest.articles) {
    for (const slug of [...article.outgoing, ...article.backlinks, ...article.related]) {
      assert.ok(slugs.has(slug), `${article.slug} references missing article ${slug}`);
    }
  }
  assert.equal(
    manifest.topics.reduce((sum, topic) => sum + topic.count, 0),
    manifest.articles.length,
  );
});

test("copies the one embedded local illustration without the PDF archive", async () => {
  const asset = path.join(
    projectRoot,
    "public/rome-assets/String Theory/Part IV - Branes and Duality/18 D-Branes as Boundary Geometry/strings-on-branes.svg",
  );
  assert.ok((await stat(asset)).isFile());
  const assets = await walk(path.join(projectRoot, "public/rome-assets"));
  assert.equal(assets.filter((file) => file.toLowerCase().endsWith(".pdf")).length, 0);
});

test("keeps private, operational, and agent-facing notes outside the published snapshot", async () => {
  const publishedPaths = new Set(manifest.articles.map((article) => article.sourcePath));
  for (const excludedPath of publicationConfig.excludePaths) {
    assert.ok(!publishedPaths.has(excludedPath), `${excludedPath} must stay private`);
  }
  for (const prefix of publicationConfig.excludePrefixes) {
    assert.ok(
      [...publishedPaths].every((publishedPath) => !publishedPath.startsWith(prefix)),
      `${prefix} must stay private`,
    );
  }
  const suppressed = new Set(
    publicationConfig.suppressLinkTargets.map((target) => target.toLocaleLowerCase("en-US")),
  );
  assert.ok(
    manifest.wanted.every(
      (entry) => !suppressed.has(entry.term.replace(/\.md$/i, "").toLocaleLowerCase("en-US")),
    ),
    "private link targets must not become public research seeds",
  );
  assert.ok(manifest.articles.every((article) => !["Agent", "Code"].includes(article.topic)));

  const snapshotFiles = (await walk(path.join(projectRoot, "content/rome"))).filter((file) =>
    file.toLowerCase().endsWith(".md"),
  );
  const snapshotRaw = [];
  for (const sourcePath of snapshotFiles) {
    const raw = await readFile(path.join(projectRoot, "content/rome", sourcePath), "utf8");
    snapshotRaw.push(raw);
    const assessment = assessMarkdownPublication(sourcePath, raw, publicationConfig);
    assert.ok(
      assessment.allowed,
      `${sourcePath} crossed the human-facing boundary: ${assessment.reasons.join(", ")}`,
    );
  }
  const rawCorpus = snapshotRaw.join("\n");
  const rawLinkTargets = new Set(
    [...rawCorpus.matchAll(/!?\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/gu)].map(
      (match) => match[1].replace(/\.md$/iu, "").trim().toLocaleLowerCase("en-US"),
    ),
  );
  for (const target of publicationConfig.suppressLinkTargets) {
    assert.ok(
      !rawLinkTargets.has(target.replace(/\.md$/iu, "").trim().toLocaleLowerCase("en-US")),
      `${target} must not survive as a wikilink in the committed public Markdown`,
    );
  }

  assert.ok(
    !publishedPaths.has(
      "Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md",
    ),
    "agent handoff prompts must not be published as articles",
  );
  assert.ok(
    manifest.wanted.every((entry) => entry.term !== "Boss prompt for 30 NBA team research agents"),
    "excluded agent prompts must not reappear as public research seeds",
  );
});

test("uses explicit human-facing signals without treating LLM authorship as private", () => {
  const agentAudience = assessMarkdownPublication(
    "Notes/Worker reference.md",
    "---\ntitle: Worker reference\naudience: agents\n---\nFollow this runbook.",
    publicationConfig,
  );
  assert.equal(agentAudience.allowed, false);
  assert.ok(agentAudience.reasons.includes("frontmatter:audience=agents"));

  const agentTag = assessMarkdownPublication(
    "Notes/Research protocol.md",
    "---\ntitle: Research protocol\ntags: [agent-instructions]\n---\nInstructions.",
    publicationConfig,
  );
  assert.equal(agentTag.allowed, false);
  assert.ok(agentTag.reasons.includes("frontmatter:tag=agent-instructions"));

  const handoffPrompt = assessMarkdownPublication(
    "Basketball/Boss prompt for team research agents.md",
    "---\ntitle: Boss prompt for team research agents\nsource: llm\ntags: [agents]\n---\nA prompt.",
    publicationConfig,
  );
  assert.equal(handoffPrompt.allowed, false);
  assert.ok(handoffPrompt.reasons.some((reason) => reason.startsWith("title:")));

  const humanArticle = assessMarkdownPublication(
    "AI/LLM agent ensembles for forecasting.md",
    "---\ntitle: LLM agent ensembles for forecasting\nsource: llm\ntags: [ai, agents, forecasting]\n---\nA human-readable explanation of ensemble design.",
    publicationConfig,
  );
  assert.equal(humanArticle.allowed, true);
  assert.ok(
    manifest.articles.some(
      (article) => article.sourcePath === "AI/LLM agent ensembles for forecasting.md",
    ),
    "human learning notes about agents should remain published",
  );

  const malformedAgentNote = assessMarkdownPublication(
    "Notes/Broken metadata.md",
    "---\ntitle: [broken\naudience: agent\n---\nA malformed instruction note.",
    publicationConfig,
  );
  assert.equal(malformedAgentNote.allowed, false);
  assert.ok(malformedAgentNote.reasons.includes("frontmatter:parse-error"));

  const headedPrompt = assessMarkdownPublication(
    "Notes/Nightly desk.md",
    "---\ntitle: Nightly desk\nsource: llm\n---\n# Nightly desk\n\nYou are an agent responsible for the nightly run.",
    publicationConfig,
  );
  assert.equal(headedPrompt.allowed, false);
  assert.ok(headedPrompt.reasons.some((reason) => reason.startsWith("content:")));

  const policyExplainer = assessMarkdownPublication(
    "Rome/Publication policy explainer.md",
    "---\ntitle: Publication policy explainer\nsource: llm\n---\nA human guide.\n\n```yaml\npublish: false\n```",
    publicationConfig,
  );
  assert.equal(policyExplainer.allowed, true);
});

test("publishes the reorganized NBA corpus without individual roster audits", () => {
  const teamBriefings = manifest.articles.filter(
    (article) =>
      article.sourcePath.startsWith("Basketball/NBA team briefings 2026-27/") &&
      /\/[A-Z]{3}_2026_27_briefing\.md$/.test(article.sourcePath),
  );
  assert.equal(teamBriefings.length, 30);
  assert.ok(manifest.articles.every((article) => !article.sourcePath.startsWith("Code/")));
  assert.ok(
    manifest.articles.every(
      (article) =>
        !/Basketball\/NBA multi-agent forecasting company\/[A-Z]{3} .*roster audit.*\.md$/i.test(
          article.sourcePath,
        ),
    ),
  );
});

test("supports an expanding top-100 Crypto universe without publishing private capital decisions", () => {
  const cryptoPaths = new Set(manifest.articles
    .filter((article) => article.topic === "Crypto")
    .map((article) => article.sourcePath));
  const required = [
    "Crypto/AERO deep memo.md",
    "Crypto/AERO memo.md",
    "Crypto/Briefings/081 JUP briefing.md",
    "Crypto/Briefings/092 PUMP briefing.md",
    "Crypto/Briefings/098 AERO briefing.md",
    "Crypto/Briefings/148 PENDLE briefing.md",
    "Crypto/Briefings/166 SYRUP briefing.md",
    "Crypto/Crypto non-major bull market research.md",
    "Crypto/Crypto top 200 interview database.md",
    "Crypto/Crypto top 100 research universe.md",
    "Crypto/Crypto.md",
    "Crypto/PENDLE deep memo.md",
    "Crypto/PENDLE memo.md",
    "Crypto/SYRUP deep memo.md",
    "Crypto/SYRUP memo.md",
  ];
  for (const sourcePath of required) {
    assert.ok(cryptoPaths.has(sourcePath), `${sourcePath} must remain published`);
  }
  for (const sourcePath of [
    "Crypto/Crypto anti-hype risk filter.md",
    "Crypto/Crypto execution risk checklist.md",
    "Crypto/Crypto final investment verdict.md",
    "Crypto/Crypto top three decision memo.md",
  ]) {
    assert.ok(!cryptoPaths.has(sourcePath), `${sourcePath} must remain private`);
  }
  assert.ok(
    cryptoPaths.size >= required.length,
    "new top-100 dossiers must be able to expand the Crypto reading room",
  );
});

test("ships a structured research and revision ledger", () => {
  assert.equal(researchUpdates.schemaVersion, 1);
  assert.ok(researchUpdates.entries.length > 0);
  const timestamps = researchUpdates.entries.map((entry) => Date.parse(entry.publishedAt));
  assert.ok(
    timestamps.every((timestamp, index) => index === 0 || timestamp <= timestamps[index - 1]),
    "research ledger entries must remain newest-first",
  );
  for (const entry of researchUpdates.entries) {
    assert.ok(["research", "revision"].includes(entry.kind));
    assert.ok(Array.isArray(entry.topics) && entry.topics.length > 0);
    assert.ok(Array.isArray(entry.agents) && entry.agents.length > 0);
    for (const field of [
      "articlesAdded",
      "articlesRevised",
      "articlesRetired",
      "articlesRelocated",
    ]) {
      assert.equal(typeof entry[field], "number");
      assert.ok(entry[field] >= 0);
    }
  }
});
