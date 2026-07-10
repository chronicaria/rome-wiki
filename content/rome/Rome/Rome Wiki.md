---
title: Rome Wiki
created: 2026-07-09
source: llm
status: seed
tags: [rome, publishing, wiki, github-pages]
---
The Rome Wiki turns Andrew Park's external brain into a static, searchable encyclopedia while keeping Markdown and wikilinks as the source of truth.

Public edition: [chronicaria.github.io/rome-wiki](https://chronicaria.github.io/rome-wiki/) · Source: [github.com/chronicaria/rome-wiki](https://github.com/chronicaria/rome-wiki)

Up: [[Build My Brain (Rome)]] · [[Home]]

Related: [[Wiki editorial and corpus pass 2026-07-09]] · [[Autonomous research committees]]

## Current edition

The front-end lives in the separate `rome-wiki` project and uses a restrained old-newspaper design: warm paper, editorial serif type, fine rules, dense navigation, and no faux aging. Its article template now borrows Wikipedia's information hierarchy without imitating Wikipedia's visual branding.

- The validated snapshot publishes the human-facing corpus across its reading rooms; article, link, word, and research-seed counts are recalculated on every sync as the continuous committee loop expands it.
- The universe map arranges articles into separated, proportionally sized, labeled topic galaxies. Their boundaries remain invisible: local topic gravity creates readable neighborhoods, nearby documents repel, links and shared tags shape each galaxy, and cross-topic links remain visible as bridges. Map labels now use the same editorial serif as the site, with a larger vertical topic-and-color legend on the left.
- Article pages use a wide 100-character reading measure, a compact contents rail, smaller display type, flatter heading hierarchy, subtle title rules, and lightweight source/status metadata.
- The String Theory reading room is a six-part, 27-chapter course table of contents built from the module folders and `00 — Overview` notes.
- The homepage research ledger records additions, revisions, retirements, relocations, topics, and contributing agents.
- Search covers titles, tags, headings, summaries, and body text; full vault paths keep repeated titles distinct.
- The renderer supports backlinks, related notes, Obsidian wikilinks, unwritten research seeds, callouts, math, code, tables, tasks, and local media.
- Rome is explicitly identified as Andrew Park's brain; article-level provenance remains visible separately.

## Publishing loop

1. All nineteen standalone subject committees launch together at the top of every hour and write only their exclusive routes, state, and unique receipts.
3. `npm run sync` copies only the publishable vault into a frozen repository snapshot and rebuilds the graph.
4. The public audit, route/graph tests, lint, type checking, and GitHub Pages build must all pass.
5. The publisher stages only the approved content paths, pushes `main` non-destructively, dispatches the Pages workflow, and verifies the deployment.

The continuous committees can expand Rome without requiring the front-end to know which agent produced a note: the vault and ledger remain the contract.

[[Autonomous research committees]] describes the parallel hourly wave, collision-free receipts, dynamic worker-refill model, half-hour publisher, and unlimited expansion mandate.

## Publication boundary

The wiki publishes the durable human knowledge layer, not every operational file. A shared publication policy excludes agent instructions, prompts, runbooks, Claude/Codex memory and skill files, selected AI status reports, internal String Theory plans and review reports, and any note marked `publish: false` before the snapshot is copied.


Private wikilink targets render as plain text rather than public pages or false “unwritten article” assignments. Andrew approved public publication after a path-level review on July 9, 2026; individualized health and training notes, personal balances and wealth plans, broker-workflow notes, and capital-action memos remain explicitly excluded. The dispatch-only Pages workflow runs only after each half-hour edition passes every gate.

## Editorial organization

- The 30 NBA team research briefings now live together under [[Basketball/NBA team briefings 2026-27/00_INDEX|2026-27 NBA team briefing index]]; the obsolete `Code/` branch is gone.
- Individual team roster audits were retired, while the two aggregate audit records remain.
- [[Crypto]] now researches the dynamic top 100 by market capitalization; JUP, PENDLE, SYRUP, AERO, and PUMP remain a conviction subset rather than a universe ceiling.
- [[BealeSurfaceSolver research (MOC)]] brings Andrew's surface-PDE solver, level-set geometry, equilibration, shallow-water verification, and exometeorology research into the public knowledge graph.
- [[RAPM]] connects Andrew's six-factor RAPM decomposition, regularization, cross-league translation, player/team forward models, evaluation, implementation, and public model site to the basketball corpus.
- Operational AI, agent, skill, memory, and internal course-report material stays in Rome for tools to use but outside the public edition.

## Open questions

- Which subject committees most often run past the half-hour publication cutoff?
- Should the publisher eventually open audited pull requests instead of pushing validated content editions directly?
- Which graph metrics should trigger deduplication and consolidation alongside unlimited expansion?
- Which additional reading rooms deserve purpose-built course or atlas pages?
- Should agent-authored notes eventually declare `audience: human` or `audience: agent` explicitly at creation time?
- When the corpus reaches tens of thousands of pages, should galaxy coordinates be precomputed during the publication build rather than settled in the browser?
