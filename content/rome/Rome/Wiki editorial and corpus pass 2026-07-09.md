---
title: Wiki editorial and corpus pass 2026-07-09
created: 2026-07-09
source: llm
status: seed
tags: [rome, wiki, publishing, cleanup]
---
Rome's second wiki pass added a navigable knowledge universe and update ledger, widened article reading space, turned String Theory into a course, and removed low-value publication clutter.

Up: [[Rome Wiki]]

## Front-end changes

- Added an interactive, section-colored map of every published article and its resolved wikilinks directly beneath homepage search.
- Added a structured homepage ledger for future research and revision committees, including counts, topics, and agent credits.
- Removed the homepage complete index and its dead navigation entry; full-text search and the map now provide the global entrances.
- Widened the article body to `82ch` and compressed the desktop “On this page” rail to match the right-hand reference rails.
- Added Andrew Park's ownership to the masthead copy, About page, and footer while preserving article provenance.
- Replaced the generic String Theory topic list with six parts, 27 ordered chapters, chapter overviews, and lesson links.

## Corpus changes

- Moved exactly 30 NBA team briefings plus their index, synthesis, and private verification record from the obsolete `Code/` tree into `Basketball/NBA team briefings 2026-27/`; removed the now-empty `Code/` folder.
- Retired 23 individual roster-audit notes and retained the two aggregate audit records.
- Reduced Crypto to five live candidates: JUP, PENDLE, SYRUP, AERO, and PUMP. Retired 30 superseded candidate/briefing notes plus three obsolete shortlist/ranking notes, then repaired the surviving hubs and links.
- Kept agent instructions, Claude/Codex memory and skills, selected operational AI reports, internal course plans, and verification reports in the local vault but outside the public snapshot.

## Automation contract

`content/research-updates.json` is intentionally plain, versioned data. A scheduled research or janitor agent adds one newest-first record only after the vault sync, tests, audit, and static build pass. The homepage reads the same file at build time, so no database or runtime service is required for GitHub Pages.

## Verification

- The public snapshot contains 303 articles and no `Agent` or `Code` reading room.
- The NBA corpus test finds exactly 30 relocated team briefings and no individual roster-audit pages.
- The Crypto publication test matches the explicit retained 18-file set.
- Lint, TypeScript, content tests, the local build, and the GitHub Pages export pass.

## Open questions

- What cadence and topic budget should the first autonomous research committee use?
- Should retired notes be archived in a separate private repository or deleted after review?
- Should the update ledger eventually link each entry to a generated diff page?
