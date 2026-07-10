import { createHash } from "node:crypto";
import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

import {
  assessMarkdownPublication,
  assessPublicationPath,
} from "./publication-policy.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vaultRoot = path.resolve(
  process.env.ROME_VAULT_PATH || path.join(projectRoot, "..", "..", "Rome"),
);
const snapshotRoot = path.join(projectRoot, "content", "rome");
const generatedRoot = path.join(projectRoot, "app", "data");
const generatedPath = path.join(generatedRoot, "rome.generated.json");
const contentRoot = path.join(generatedRoot, "article-content");
const contentLoaderPath = path.join(generatedRoot, "rome-content.generated.ts");
const searchPath = path.join(projectRoot, "public", "search-index.json");
const mediaRoot = path.join(projectRoot, "public", "rome-assets");
const publicationConfigPath = path.join(projectRoot, "content", "publish.config.json");

const mediaExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);

const topicDescriptions = {
  AI: "Agent systems, model landscapes, forecasting, and the craft of machine intelligence.",
  Agent: "The working methods and publishing conventions behind Rome itself.",
  Basketball: "Player development, NBA forecasting, roster research, and the game in motion.",
  Code: "Technical research artifacts and analytical project notes.",
  Crypto: "Top-100 token research, market structure, execution guardrails, and risk-aware conviction.",
  Health: "Practical notes for caring for the body that carries the mind.",
  History: "Korean history, political crises, sovereignty, and counterfactual judgment.",
  Investing: "Portfolio construction, asymmetric research, and long-horizon wealth decisions.",
  Markets: "US markets, commodities, quantitative research, prediction markets, and evidence under uncertainty.",
  Mathematics: "Applied mathematics, partial differential equations, computation, and physical modeling.",
  Piano: "A small but growing desk for music and deliberate practice.",
  Politics: "Elections, institutions, coalitions, polling, and political forecasting.",
  Physics: "Doorways into the physical ideas that support deeper study.",
  Rome: "Maintenance logs, maps, and reflections on building an external brain.",
  Sports: "Team-focused news, tactics, roster construction, and forecasting across leagues.",
  "String Theory": "A 27-module course from action principles to branes, duality, and quantum gravity.",
  "Classical Music": "Romantic piano and violin repertoire through history, scores, listening, and performance.",
  Weather: "Forecasts, uncertainty, urban climate, and atmospheric predictability.",
  "Front Page": "The maps and instructions at the entrance to the vault.",
};

function shortHash(value) {
  return createHash("sha256").update(value).digest("hex").slice(0, 8);
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function normalizeLookup(value) {
  return value
    .normalize("NFC")
    .replaceAll("\\", "/")
    .replace(/^\.\//, "")
    .replace(/\.md$/i, "")
    .replace(/^\/+|\/+$/g, "")
    .toLocaleLowerCase("en-US");
}

function sanitizeSuppressedWikiLinkLines(raw, suppressedTargets) {
  const lines = raw.split(/\r?\n/u);
  const sanitized = lines.filter((line) => {
    const links = line.matchAll(/!?\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/gu);
    for (const match of links) {
      if (suppressedTargets.has(normalizeLookup(match[1]))) return false;
    }
    return true;
  }).map((line) => line.replace(/[ \t]+$/u, ""));
  while (sanitized.at(-1) === "") sanitized.pop();
  return `${sanitized.join("\n")}\n`;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase() || "article";
}

function encodedPath(value) {
  return value.split("/").map(encodeURIComponent).join("/");
}

function titleCase(value) {
  return value.replace(/(^|[-_\s])\S/g, (letter) => letter.toUpperCase());
}

function asArray(value) {
  if (Array.isArray(value)) return value.map(String);
  if (value == null || value === "") return [];
  return [String(value)];
}

function asIsoDate(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(String(value));
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toISOString().slice(0, 10);
}

function nodeText(node) {
  if (!node) return "";
  if (node.type === "code" || node.type === "inlineCode") return "";
  if (typeof node.value === "string") return node.value;
  if (!Array.isArray(node.children)) return "";
  return node.children.map(nodeText).join(" ").replace(/\s+/g, " ").trim();
}

function fallbackMatter(raw) {
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
  return { data: {}, content: match ? raw.slice(match[0].length) : raw };
}

function parseMatter(raw, relPath) {
  try {
    return matter(raw);
  } catch (error) {
    console.warn(`Warning: could not parse frontmatter in ${relPath}: ${error.message}`);
    return fallbackMatter(raw);
  }
}

async function walkDirectory(root, relative = "") {
  const absolute = path.join(root, relative);
  const entries = await readdir(absolute, { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    if (entry.isSymbolicLink()) continue;

    const child = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...(await walkDirectory(root, child)));
    if (entry.isFile()) files.push(toPosix(child));
  }

  return files;
}

function makeUniqueSlug(relPath, usedSlugs) {
  const segments = relPath.replace(/\.md$/i, "").split("/").map(slugify);
  let candidate = segments.join("/");
  if (usedSlugs.has(candidate)) candidate = `${candidate}-${shortHash(relPath)}`;
  usedSlugs.add(candidate);
  return candidate;
}

function buildLookups(articles) {
  const byPath = new Map();
  const byName = new Map();

  const addName = (key, article) => {
    const normalized = normalizeLookup(key);
    if (!normalized) return;
    const list = byName.get(normalized) || [];
    if (!list.some((item) => item.id === article.id)) list.push(article);
    byName.set(normalized, list);
  };

  for (const article of articles) {
    byPath.set(normalizeLookup(article.id), article);
    addName(path.posix.basename(article.id), article);
    addName(article.title, article);
    for (const alias of article.aliases) addName(alias, article);
  }

  return { byPath, byName };
}

function commonPrefixLength(left, right) {
  const a = left.split("/");
  const b = right.split("/");
  let count = 0;
  while (count < a.length && count < b.length && a[count] === b[count]) count += 1;
  return count;
}

function resolveArticleTarget(source, rawTarget, lookups) {
  const target = rawTarget.split("#", 1)[0].split("^", 1)[0].trim();
  if (!target) return null;
  const normalizedTarget = normalizeLookup(target);

  const exact = lookups.byPath.get(normalizedTarget);
  if (exact) return exact;

  const relative = normalizeLookup(path.posix.join(source.dir || ".", target));
  const relativeMatch = lookups.byPath.get(relative);
  if (relativeMatch) return relativeMatch;

  const suffixMatches = [...lookups.byPath.entries()]
    .filter(([candidate]) => candidate === normalizedTarget || candidate.endsWith(`/${normalizedTarget}`))
    .map(([, article]) => article);
  if (suffixMatches.length === 1) return suffixMatches[0];

  const named = lookups.byName.get(normalizedTarget) || [];
  const candidates = suffixMatches.length > 1 ? suffixMatches : named;
  if (candidates.length === 1) return candidates[0];
  if (candidates.length > 1) {
    const ranked = candidates
      .map((article) => ({
        article,
        score: commonPrefixLength(source.dir, article.dir),
      }))
      .sort((a, b) => b.score - a.score);
    if (ranked.length === 1 || ranked[0].score > ranked[1].score) return ranked[0].article;
  }

  return null;
}

function buildAssetLookups(mediaFiles) {
  const byPath = new Map();
  const byName = new Map();
  for (const relPath of mediaFiles) {
    byPath.set(normalizeLookup(relPath), relPath);
    const basename = normalizeLookup(path.posix.basename(relPath));
    const matches = byName.get(basename) || [];
    matches.push(relPath);
    byName.set(basename, matches);
  }
  return { byPath, byName };
}

function resolveAssetTarget(source, rawTarget, lookups) {
  const clean = rawTarget.split("#", 1)[0].trim();
  const exact = lookups.byPath.get(normalizeLookup(clean));
  if (exact) return exact;
  const relative = lookups.byPath.get(normalizeLookup(path.posix.join(source.dir || ".", clean)));
  if (relative) return relative;
  const named = lookups.byName.get(normalizeLookup(path.posix.basename(clean))) || [];
  return named.length === 1 ? named[0] : null;
}

function splitWikiText(
  value,
  source,
  articleLookups,
  assetLookups,
  wantedRegistry,
  suppressedWantedTargets,
  outgoing,
) {
  const regex = /(!)?\[\[([^\]]+)\]\]/g;
  const nodes = [];
  let cursor = 0;
  let match;

  while ((match = regex.exec(value))) {
    if (match.index > cursor) nodes.push({ type: "text", value: value.slice(cursor, match.index) });
    const isEmbed = Boolean(match[1]);
    const [targetWithHeading, alias] = match[2].split("|", 2);
    const [rawTarget, heading] = targetWithHeading.split("#", 2);
    const target = rawTarget.trim();
    const label = (alias || heading || path.posix.basename(target)).trim();
    const asset = isEmbed ? resolveAssetTarget(source, target, assetLookups) : null;

    if (asset) {
      nodes.push({
        type: "image",
        url: `__BASE_PATH__/rome-assets/${encodedPath(asset)}`,
        alt: alias || path.posix.basename(asset, path.posix.extname(asset)),
        data: { hProperties: { className: ["wiki-embed"] } },
      });
    } else {
      const resolved = resolveArticleTarget(source, target, articleLookups);
      if (resolved) {
        outgoing.add(resolved.slug);
        const anchor = heading ? `#${slugify(heading)}` : "";
        nodes.push({
          type: "link",
          url: `__BASE_PATH__/articles/${resolved.slug}/${anchor}`,
          children: [{ type: "text", value: label }],
          data: {
            hProperties: {
              className: isEmbed ? ["wiki-link", "wiki-note-embed"] : ["wiki-link"],
            },
          },
        });
      } else if (
        suppressedWantedTargets.has(normalizeLookup(target)) ||
        suppressedWantedTargets.has(normalizeLookup(path.posix.basename(target)))
      ) {
        nodes.push({ type: "text", value: label });
      } else {
        const wanted = wantedRegistry.register(target, source);
        nodes.push({
          type: "link",
          url: `__BASE_PATH__/wanted/${wanted.slug}/`,
          children: [
            { type: "text", value: label },
            {
              type: "text",
              value: " +",
              data: { hProperties: { className: ["visually-hidden"] } },
            },
          ],
          data: {
            hProperties: {
              className: ["wiki-link", "wiki-link-missing"],
              title: "Unwritten article — a research thread waiting to be followed",
            },
          },
        });
      }
    }
    cursor = regex.lastIndex;
  }

  if (cursor < value.length) nodes.push({ type: "text", value: value.slice(cursor) });
  return nodes.length ? nodes : [{ type: "text", value }];
}

function transformCallouts(tree) {
  visit(tree, "blockquote", (node) => {
    const first = node.children?.[0];
    const firstText = first?.children?.[0];
    if (first?.type !== "paragraph" || firstText?.type !== "text") return;

    const match = firstText.value.match(/^\[!([\w-]+)\]([+-])?[ \t]*/);
    if (!match) return;
    const [, type, fold] = match;
    const remainder = firstText.value.slice(match[0].length);
    const newlineIndex = remainder.indexOf("\n");
    const firstLine = (newlineIndex >= 0 ? remainder.slice(0, newlineIndex) : remainder).trim();
    const laterLines = newlineIndex >= 0 ? remainder.slice(newlineIndex + 1).trimStart() : "";

    if (fold) {
      const label = firstLine || titleCase(type);
      firstText.value = laterLines;
      if (!firstText.value) first.children.shift();
      if (first.children.length === 0) node.children.shift();
      node.data = {
        hName: "details",
        hProperties: {
          className: ["callout", `callout-${type}`],
          ...(fold === "+" ? { open: true } : {}),
        },
      };
      node.children.unshift({
        type: "paragraph",
        children: [{ type: "text", value: label }],
        data: { hName: "summary", hProperties: { className: ["callout-title"] } },
      });
      return;
    }

    firstText.value = remainder;
    if (!firstText.value) first.children.shift();
    if (first.children.length === 0) node.children.shift();
    node.data = {
      hName: "aside",
      hProperties: { className: ["callout", `callout-${type}`] },
    };
    node.children.unshift({
      type: "paragraph",
      children: [{ type: "text", value: titleCase(type) }],
      data: { hName: "p", hProperties: { className: ["callout-title"] } },
    });
  });
}

function addHeadingIds(tree, toc) {
  const slugger = new GithubSlugger();
  visit(tree, "heading", (node) => {
    if (node.depth === 1) node.depth = 2;
    const text = nodeText(node);
    const id = slugger.slug(text);
    node.data = {
      ...(node.data || {}),
      hProperties: { ...(node.data?.hProperties || {}), id },
    };
    if (node.depth === 2 || node.depth === 3) toc.push({ depth: node.depth, id, text });
  });
}

function rewriteHast(source, assetLookups, articleLookups) {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "a" && typeof node.properties?.href === "string") {
        const href = node.properties.href;
        if (/^https?:\/\//i.test(href)) {
          node.properties.target = "_blank";
          node.properties.rel = ["noopener", "noreferrer"];
        } else if (/\.md(?:#.*)?$/i.test(href)) {
          const [target, heading] = href.split("#", 2);
          const resolved = resolveArticleTarget(source, target, articleLookups);
          if (resolved) {
            node.properties.href = `__BASE_PATH__/articles/${resolved.slug}/${heading ? `#${slugify(heading)}` : ""}`;
            node.properties.className = [...(node.properties.className || []), "wiki-link"];
          }
        }
      }

      if (node.tagName === "img" && typeof node.properties?.src === "string") {
        const src = node.properties.src;
        if (!/^(?:https?:|data:|__BASE_PATH__)/i.test(src)) {
          const asset = resolveAssetTarget(source, src, assetLookups);
          if (asset) node.properties.src = `__BASE_PATH__/rome-assets/${encodedPath(asset)}`;
        }
        node.properties.loading = "lazy";
        node.properties.decoding = "async";
      }
    });
  };
}

function createWantedRegistry() {
  const entries = new Map();
  const slugs = new Set();
  return {
    register(term, source) {
      const key = normalizeLookup(term);
      let entry = entries.get(key);
      if (!entry) {
        let slug = slugify(term);
        if (slugs.has(slug)) slug = `${slug}-${shortHash(key)}`;
        slugs.add(slug);
        entry = { term: term.trim(), slug, references: [] };
        entries.set(key, entry);
      }
      if (!entry.references.some((reference) => reference.slug === source.slug)) {
        entry.references.push({
          slug: source.slug,
          title: source.title,
          topic: source.topic,
        });
      }
      return entry;
    },
    values() {
      return [...entries.values()]
        .map((entry) => ({
          ...entry,
          references: entry.references.sort((a, b) => a.title.localeCompare(b.title)),
        }))
        .sort((a, b) => b.references.length - a.references.length || a.term.localeCompare(b.term));
    },
  };
}

async function renderArticle(
  article,
  articleLookups,
  assetLookups,
  wantedRegistry,
  suppressedWantedTargets,
) {
  const outgoing = new Set();
  const toc = [];
  let deck = typeof article.metadata.summary === "string" ? article.metadata.summary : "";
  let searchableText = "";

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(function romeMarkdown() {
      return (tree) => {
        searchableText = nodeText(tree);
        visit(tree, "text", (node, index, parent) => {
          if (!parent || typeof index !== "number" || !node.value.includes("[[")) return;
          parent.children.splice(
            index,
            1,
            ...splitWikiText(
              node.value,
              article,
              articleLookups,
              assetLookups,
              wantedRegistry,
              suppressedWantedTargets,
              outgoing,
            ),
          );
        });

        const firstHeading = tree.children.findIndex((node) => node.type === "heading");
        const firstParagraph = tree.children.findIndex((node) => node.type === "paragraph");
        if (firstHeading >= 0 && tree.children[firstHeading].depth === 1 && firstHeading < firstParagraph) {
          tree.children.splice(firstHeading, 1);
        }
        if (!deck) {
          const paragraphIndex = tree.children.findIndex((node) => node.type === "paragraph");
          if (paragraphIndex >= 0) {
            deck = nodeText(tree.children[paragraphIndex]);
            tree.children.splice(paragraphIndex, 1);
          }
        }

        transformCallouts(tree);
        addHeadingIds(tree, toc);
      };
    })
    .use(remarkRehype)
    .use(rehypeKatex, { strict: false, trust: false })
    .use(rehypeSlug)
    .use(function romeHtml() {
      return rewriteHast(article, assetLookups, articleLookups);
    })
    .use(rehypeStringify);

  const html = String(await processor.process(article.body));
  const words = searchableText.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || [];
  return {
    ...article,
    deck: deck.replace(/\s+/g, " ").trim(),
    html,
    toc,
    outgoing: [...outgoing],
    searchText: searchableText.replace(/\s+/g, " ").trim(),
    wordCount: words.length,
    readingMinutes: Math.max(1, Math.ceil(words.length / 220)),
  };
}

function computeRelated(article, articlesBySlug) {
  const outgoing = new Set(article.outgoing);
  const backlinks = new Set(article.backlinks);
  return [...articlesBySlug.values()]
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      let score = 0;
      if (outgoing.has(candidate.slug)) score += 100;
      if (backlinks.has(candidate.slug)) score += 70;
      if (candidate.topic === article.topic) score += 20;
      if (candidate.dir === article.dir) score += 16;
      score += candidate.tags.filter((tag) => article.tags.includes(tag)).length * 8;
      return { candidate, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.candidate.title.localeCompare(b.candidate.title))
    .slice(0, 6)
    .map(({ candidate }) => candidate.slug);
}

async function main() {
  const publicationConfig = JSON.parse(await readFile(publicationConfigPath, "utf8"));
  const vaultStats = await stat(vaultRoot).catch(() => null);
  const snapshotStats = await stat(snapshotRoot).catch(() => null);
  const sourceRoot = vaultStats?.isDirectory() ? vaultRoot : snapshotRoot;
  const usingSnapshot = sourceRoot === snapshotRoot;
  if (!vaultStats?.isDirectory() && !snapshotStats?.isDirectory()) {
    throw new Error(
      `Rome vault not found at ${vaultRoot}, and no synced content snapshot exists. Set ROME_VAULT_PATH to the vault location.`,
    );
  }

  const allFiles = await walkDirectory(sourceRoot);
  const allMarkdownFiles = allFiles.filter((file) => file.toLowerCase().endsWith(".md"));
  const markdownFiles = [];
  const excludedMarkdown = [];
  for (const relPath of allMarkdownFiles) {
    const raw = await readFile(path.join(sourceRoot, ...relPath.split("/")), "utf8");
    const assessment = assessMarkdownPublication(relPath, raw, publicationConfig);
    if (assessment.allowed) markdownFiles.push(relPath);
    else excludedMarkdown.push(assessment);
  }
  const mediaFiles = allFiles.filter(
    (file) =>
      mediaExtensions.has(path.extname(file).toLowerCase()) &&
      assessPublicationPath(file, publicationConfig).allowed,
  );
  const excludedMarkdownCount = excludedMarkdown.length;
  const suppressedWantedTargets = new Set(
    (publicationConfig.suppressLinkTargets || []).map((target) => normalizeLookup(target)),
  );
  for (const excluded of excludedMarkdown) {
    for (const target of [
      excluded.normalized,
      path.posix.basename(excluded.normalized),
      excluded.title,
      ...excluded.aliases,
    ]) {
      suppressedWantedTargets.add(normalizeLookup(target));
    }
  }

  if (!usingSnapshot) await rm(snapshotRoot, { recursive: true, force: true });
  await rm(mediaRoot, { recursive: true, force: true });
  await rm(contentRoot, { recursive: true, force: true });
  await mkdir(snapshotRoot, { recursive: true });
  await mkdir(mediaRoot, { recursive: true });
  await mkdir(generatedRoot, { recursive: true });
  await mkdir(contentRoot, { recursive: true });

  if (!usingSnapshot) {
    for (const relPath of markdownFiles) {
      const destination = path.join(snapshotRoot, ...relPath.split("/"));
      await mkdir(path.dirname(destination), { recursive: true });
      const raw = await readFile(path.join(sourceRoot, ...relPath.split("/")), "utf8");
      await writeFile(destination, sanitizeSuppressedWikiLinkLines(raw, suppressedWantedTargets));
    }
    for (const relPath of mediaFiles) {
      const destination = path.join(snapshotRoot, ...relPath.split("/"));
      await mkdir(path.dirname(destination), { recursive: true });
      await cp(path.join(sourceRoot, ...relPath.split("/")), destination);
    }
  }
  for (const relPath of mediaFiles) {
    const destination = path.join(mediaRoot, ...relPath.split("/"));
    await mkdir(path.dirname(destination), { recursive: true });
    await cp(path.join(sourceRoot, ...relPath.split("/")), destination);
  }

  const usedSlugs = new Set();
  const initialArticles = [];
  const articleRoot = usingSnapshot ? sourceRoot : snapshotRoot;
  for (const relPath of markdownFiles) {
    const absolute = path.join(articleRoot, ...relPath.split("/"));
    const [raw, info] = await Promise.all([readFile(absolute, "utf8"), stat(absolute)]);
    const parsed = parseMatter(raw, relPath);
    const id = relPath.replace(/\.md$/i, "");
    const firstH1 = parsed.content.match(/^#\s+(.+)$/m)?.[1]?.trim();
    const title = String(parsed.data.title || firstH1 || path.posix.basename(id));
    const segments = id.split("/");
    const topic = segments.length === 1 ? "Front Page" : segments[0];
    initialArticles.push({
      id,
      sourcePath: relPath,
      dir: path.posix.dirname(id) === "." ? "" : path.posix.dirname(id),
      slug: makeUniqueSlug(relPath, usedSlugs),
      title,
      topic,
      body: parsed.content,
      metadata: parsed.data,
      tags: asArray(parsed.data.tags).map((tag) => tag.toLocaleLowerCase("en-US")),
      aliases: asArray(parsed.data.aliases || parsed.data.alias),
      source: String(parsed.data.source || "unknown").toLocaleLowerCase("en-US"),
      status: String(parsed.data.status || "unclassified").toLocaleLowerCase("en-US"),
      created: asIsoDate(parsed.data.created),
      modifiedAt: info.mtime.toISOString(),
      isMoc: asArray(parsed.data.tags)
        .map((tag) => tag.toLocaleLowerCase("en-US"))
        .includes("moc"),
    });
  }

  const articleLookups = buildLookups(initialArticles);
  const assetLookups = buildAssetLookups(mediaFiles);
  const wantedRegistry = createWantedRegistry();
  const rendered = [];
  for (const article of initialArticles) {
    rendered.push(
      await renderArticle(
        article,
        articleLookups,
        assetLookups,
        wantedRegistry,
        suppressedWantedTargets,
      ),
    );
  }
  const articlesBySlug = new Map(rendered.map((article) => [article.slug, article]));
  for (const article of rendered) article.backlinks = [];
  for (const article of rendered) {
    for (const targetSlug of article.outgoing) {
      const target = articlesBySlug.get(targetSlug);
      if (target && !target.backlinks.includes(article.slug)) target.backlinks.push(article.slug);
    }
  }

  const byDirectory = new Map();
  for (const article of rendered) {
    const siblings = byDirectory.get(article.dir) || [];
    siblings.push(article);
    byDirectory.set(article.dir, siblings);
  }
  for (const siblings of byDirectory.values()) {
    siblings.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }));
    siblings.forEach((article, index) => {
      article.previousSlug = index > 0 ? siblings[index - 1].slug : null;
      article.nextSlug = index < siblings.length - 1 ? siblings[index + 1].slug : null;
    });
  }

  for (const article of rendered) {
    article.backlinks.sort((a, b) => articlesBySlug.get(a).title.localeCompare(articlesBySlug.get(b).title));
    article.related = computeRelated(article, articlesBySlug);
  }

  const topicMap = new Map();
  for (const article of rendered) {
    const topic = topicMap.get(article.topic) || {
      name: article.topic,
      slug: slugify(article.topic),
      description: topicDescriptions[article.topic] || "A growing reading room in Rome.",
      articleSlugs: [],
      mocSlug: null,
      mocScore: -1,
    };
    topic.articleSlugs.push(article.slug);
    if (article.isMoc) {
      const normalizedTitle = normalizeLookup(article.title);
      const normalizedTopic = normalizeLookup(article.topic);
      const depth = article.sourcePath.split("/").length;
      const basename = path.posix.basename(article.sourcePath);
      const score =
        (normalizedTitle === normalizedTopic ? 120 : 0) +
        (normalizedTitle.startsWith(normalizedTopic) ? 70 : 0) +
        (depth === 2 ? 45 : Math.max(0, 24 - depth * 3)) +
        (basename.startsWith("_") ? 0 : 20);
      if (score > topic.mocScore) {
        topic.mocSlug = article.slug;
        topic.mocScore = score;
      }
    }
    topicMap.set(article.topic, topic);
  }
  const topics = [...topicMap.values()]
    .map((topic) => ({
      name: topic.name,
      slug: topic.slug,
      description: topic.description,
      mocSlug: topic.mocSlug,
      count: topic.articleSlugs.length,
      articleSlugs: topic.articleSlugs.sort((a, b) =>
        articlesBySlug.get(a).title.localeCompare(articlesBySlug.get(b).title),
      ),
    }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  const wanted = wantedRegistry.values();
  const sortedArticles = rendered.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));
  const createdDates = sortedArticles.map((article) => article.created).filter(Boolean).sort();
  const generatedAt = new Date().toISOString();
  const manifestArticles = sortedArticles.map((article) => {
    const manifestArticle = { ...article };
    delete manifestArticle.body;
    delete manifestArticle.html;
    delete manifestArticle.searchText;
    delete manifestArticle.metadata;
    delete manifestArticle.aliases;
    return manifestArticle;
  });
  const data = {
    generatedAt,
    vaultName: "Rome",
    stats: {
      articleCount: sortedArticles.length,
      topicCount: topics.length,
      resolvedLinkCount: sortedArticles.reduce((sum, article) => sum + article.outgoing.length, 0),
      wantedCount: wanted.length,
      wordCount: sortedArticles.reduce((sum, article) => sum + article.wordCount, 0),
      latestCreated: createdDates.at(-1) || null,
    },
    topics,
    wanted,
    articles: manifestArticles,
  };

  const searchIndex = sortedArticles.map((article) => ({
    title: article.title,
    slug: article.slug,
    topic: article.topic,
    deck: article.deck,
    tags: article.tags,
    source: article.source,
    status: article.status,
    created: article.created,
    headings: article.toc.map((entry) => entry.text),
    text: article.searchText,
  }));

  const loaderLines = [];
  for (const article of sortedArticles) {
    const contentId = shortHash(article.slug);
    await writeFile(
      path.join(contentRoot, `${contentId}.json`),
      `${JSON.stringify({ html: article.html })}\n`,
    );
    loaderLines.push(
      `  ${JSON.stringify(article.slug)}: () => import(${JSON.stringify(`./article-content/${contentId}.json`)}),`,
    );
  }

  await writeFile(generatedPath, `${JSON.stringify(data)}\n`);
  await writeFile(
    contentLoaderPath,
    `// Generated by scripts/sync-rome.mjs. Do not edit.\nexport const articleContentLoaders = {\n${loaderLines.join("\n")}\n} as const;\n`,
  );
  await writeFile(searchPath, `${JSON.stringify(searchIndex)}\n`);

  console.log(
    `${usingSnapshot ? "Indexed" : "Synced"} ${markdownFiles.length} Markdown articles, ${mediaFiles.length} media asset${mediaFiles.length === 1 ? "" : "s"}, and ${wanted.length} research seeds from ${sourceRoot}. Excluded ${excludedMarkdownCount} private or operational Markdown file${excludedMarkdownCount === 1 ? "" : "s"}.`,
  );
  if (excludedMarkdownCount > 0) {
    const reasonCounts = new Map();
    for (const excluded of excludedMarkdown) {
      for (const reason of excluded.reasons) {
        reasonCounts.set(reason, (reasonCounts.get(reason) || 0) + 1);
      }
    }
    console.log(
      `  Exclusion signals: ${[...reasonCounts.entries()]
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([reason, count]) => `${reason} (${count})`)
        .join(", ")}.`,
    );
  }
}

await main();
