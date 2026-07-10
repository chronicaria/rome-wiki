# Rome Wiki

Rome Wiki turns Andrew's Obsidian vault into a static, searchable encyclopedia with a warm editorial design. The vault remains the source of truth; the site is a generated publication.

The current edition contains:

- a generated human-facing Markdown corpus whose article count updates on every validated sync
- 17 reading rooms
- full-path routes that safely distinguish repeated titles
- Obsidian wikilinks, backlinks, and generated “unwritten article” trails
- GFM tables and task lists, fenced code, KaTeX math, Obsidian callouts, and local media embeds
- a front page, topic pages, wide Wikipedia-inspired article pages, full-text search, and a force-directed map of labeled topic galaxies with an editorial-serif legend rail
- a hierarchical 27-chapter String Theory course and a structured research/revision ledger
- static output for GitHub Pages, including project-repository base paths

## Run it locally

```bash
npm install
npm run dev
```

The development site opens at `http://localhost:3000`.

`npm run dev` first synchronizes the live vault from the default location:

```text
/Users/andrewpark/Desktop/Rome
```

To use another vault location:

```bash
ROME_VAULT_PATH=/path/to/Rome npm run dev
```

## Keep the wiki in sync

```bash
npm run sync
```

This command:

1. copies every publishable non-hidden Markdown note into `content/rome/`;
2. copies referenced image media, but not the 12 MB PDF handout archive;
3. parses frontmatter and Markdown;
4. resolves Obsidian links using full paths, relative paths, suffixes, then unique basenames;
5. generates backlinks, related reading, topic counts, search data, static article bodies, and map data.

`content/publish.config.json` is the publication boundary. It excludes agent instructions, prompts and runbooks, Claude/Codex memory and skill files, internal course plans, selected operational AI reports, and any note marked `publish: false` before the public snapshot is copied. The human-facing filter uses conservative path, frontmatter, title, and opening-content signals. It deliberately does not exclude a note merely because it has `source: llm`, discusses agents, or carries an `agents` tag. Suppressed private targets render as plain text instead of misleading “unwritten article” links.

On GitHub Actions—where the live local vault is unavailable—the same command rebuilds from the committed `content/rome/` snapshot. Generated indexes and rendered article bundles are ignored by Git and recreated before every build.

## Useful commands

```bash
npm run sync           # refresh the snapshot and generated content
npm test               # verify all notes, slugs, graph links, math, callouts, and media
npm run lint           # lint the implementation
npm run build          # build every local/static route with vinext
npm run audit:content  # summarize publication-risk signals without printing matched values
npm run build:pages    # privacy audit + GitHub Pages static export
```

## GitHub Pages

The repository includes a publisher-dispatched workflow at `.github/workflows/pages.yml`. It uses Next's official static exporter for GitHub Pages and automatically derives `/repository-name` as the base path. The output is written to `out/`.

The first public edition received a path-level privacy review on July 9, 2026. The approval gate is now:

```json
"publicBuildApproved": true
```

The gate remains intentional. The snapshot excludes operational material, individualized health and training details, personal balances and wealth plans, broker-workflow notes, and capital-action memos before they enter the repository. Hiding a route at render time would not hide raw Markdown from a public Git repository, so all exclusions happen during synchronization.

The emergency bypass below is retained only for one-time local development and must never be used by the scheduled publisher:

```bash
ALLOW_UNREVIEWED_PUBLIC=1 npm run build:pages
```

The Pages workflow remains dispatch-only. The half-hour publisher triggers it only after the frozen snapshot passes the public audit, tests, lint, type checking, and static build.

## Scheduled expansion

The front-end is wired to the scheduled Codex committees:

1. all nineteen subject committees launch together at the top of every hour and write only their exclusive Rome routes, dedicated state, and unique receipts;
2. the half-hour publisher serially applies ready shared-link requests and writes one aggregate newest-first entry to `content/research-updates.json`;
3. it synchronizes once from the live vault, freezes that snapshot, and runs the public audit, tests, lint, type checking, and GitHub Pages build;
4. it stages only the approved content snapshot and ledger, pushes `main` non-destructively, dispatches the Pages workflow, and verifies the exact deployment;
5. late research rolls into the next edition, while failed validation produces no commit or deployment.

The nineteen committee bands sum to roughly 63–145 substantial 2,000–4,000-word articles or deeper dossiers per ideal hourly wave, with no ceiling. Actual concurrency and completion remain resource-managed; ranges never override evidence, depth, privacy, or deduplication.

## Project shape

```text
app/
  articles/[...slug]/   article template
  topics/[topic]/       reading-room pages
  wanted/[slug]/        unwritten-link pages
  components/           search, universe map, course contents, site chrome
  lib/rome.ts           typed content access
content/
  rome/                  committed vault snapshot
  publish.config.json    public-build safety gate
  research-updates.json  scheduled research/revision ledger
scripts/
  sync-rome.mjs          vault sync + Markdown/graph compiler
  audit-content.mjs      privacy and credential-pattern audit
  build-pages.mjs        GitHub Pages exporter
```

The local/Sites build uses the bundled vinext stack. The GitHub Pages build uses Next static export with `output: "export"`, `trailingSlash: true`, and the repository base path.

Official references: [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports) and [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
