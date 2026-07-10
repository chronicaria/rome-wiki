import path from "node:path";

import matter from "gray-matter";

export function normalizePublicationPath(value) {
  return String(value).replaceAll("\\", "/").replace(/^\.\//, "").replace(/^\/+/, "");
}

function asStrings(value) {
  if (Array.isArray(value)) return value.map(String);
  if (value == null || value === "") return [];
  return [String(value)];
}

function normalizedValues(value) {
  return asStrings(value).map((entry) => entry.trim().toLocaleLowerCase("en-US"));
}

function configuredValues(values) {
  return new Set(normalizedValues(values));
}

function parseNote(raw) {
  try {
    return { ...matter(raw), parseFailed: false };
  } catch {
    const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    return {
      data: {},
      content: match ? raw.slice(match[0].length) : raw,
      parseFailed: true,
    };
  }
}

function matchingPattern(value, patterns) {
  for (const [index, pattern] of (patterns || []).entries()) {
    if (new RegExp(pattern, "iu").test(value)) return index;
  }
  return -1;
}

export function assessPublicationPath(relPath, config) {
  const normalized = normalizePublicationPath(relPath);
  const reasons = [];
  const excludedPaths = new Set(
    (config.excludePaths || []).map((entry) => normalizePublicationPath(entry)),
  );
  const excludedPrefixes = (config.excludePrefixes || []).map((entry) => {
    const prefix = normalizePublicationPath(entry);
    return prefix.endsWith("/") ? prefix : `${prefix}/`;
  });
  const humanFilter = config.humanFacingFilter || {};
  const basename = path.posix.basename(normalized).toLocaleLowerCase("en-US");
  const excludedBasenames = configuredValues(humanFilter.excludeBasenames);
  const excludedSegments = configuredValues(humanFilter.excludePathSegments);
  const pathSegments = normalized
    .split("/")
    .slice(0, -1)
    .map((segment) => segment.toLocaleLowerCase("en-US"));

  if (excludedPaths.has(normalized)) reasons.push("path:explicit");
  if (excludedPrefixes.some((prefix) => normalized.startsWith(prefix))) {
    reasons.push("path:prefix");
  }
  if (excludedBasenames.has(basename)) reasons.push("path:instruction-basename");
  if (pathSegments.some((segment) => excludedSegments.has(segment))) {
    reasons.push("path:agent-directory");
  }

  return { allowed: reasons.length === 0, normalized, reasons };
}

export function assessMarkdownPublication(relPath, raw, config) {
  const pathAssessment = assessPublicationPath(relPath, config);
  const parsed = parseNote(raw);
  const humanFilter = config.humanFacingFilter || {};
  const reasons = [...pathAssessment.reasons];
  const data = parsed.data || {};
  const title = String(
    data.title ||
      parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim() ||
      path.posix.basename(pathAssessment.normalized, path.posix.extname(pathAssessment.normalized)),
  );

  if (parsed.parseFailed) reasons.push("frontmatter:parse-error");

  if (data.publish === false) {
    reasons.push("frontmatter:publish=false");
  }

  for (const [field, configKey] of [
    ["audience", "excludeAudienceValues"],
    ["visibility", "excludeVisibilityValues"],
    ["status", "excludeStatusValues"],
  ]) {
    const excluded = configuredValues(humanFilter[configKey]);
    const match = normalizedValues(data[field]).find((value) => excluded.has(value));
    if (match) reasons.push(`frontmatter:${field}=${match}`);
  }

  const excludedTags = configuredValues(humanFilter.excludeTags);
  const excludedTag = normalizedValues(data.tags).find((tag) => excludedTags.has(tag));
  if (excludedTag) reasons.push(`frontmatter:tag=${excludedTag}`);

  const titlePattern = matchingPattern(title, humanFilter.excludeTitlePatterns);
  if (titlePattern >= 0) reasons.push(`title:agent-facing-pattern-${titlePattern + 1}`);

  const contentLimit = Number(humanFilter.contentScanCharacters) || 1800;
  const intro = parsed.content
    .slice(0, contentLimit)
    .trimStart()
    .replace(/^#\s+.+(?:\r?\n)+/, "")
    .trimStart();
  const contentPattern = matchingPattern(intro, humanFilter.excludeContentPatterns);
  if (contentPattern >= 0) reasons.push(`content:agent-facing-pattern-${contentPattern + 1}`);

  return {
    allowed: reasons.length === 0,
    normalized: pathAssessment.normalized,
    reasons: [...new Set(reasons)],
    title,
    aliases: asStrings(data.aliases || data.alias),
  };
}
