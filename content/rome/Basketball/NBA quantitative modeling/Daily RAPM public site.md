---
title: Daily RAPM public site
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, rapm, github-pages]
---

The Daily RAPM GitHub Pages site is the generated public interface for Andrew's measured player histories, league tables, team views, draft translations, forward projections, methods, and static data exports.

Public URL: [andrewjparkus.github.io](https://andrewjparkus.github.io)

## What the site exposes

| Surface | Main question | Contract |
|---|---|---|
| Explorer | How has this player's six-factor estimate moved across his career and leagues? | descriptive, as-of-game-day curves with pure/prior/box modes |
| Tables | Who leads each factor and net on the common scale? | descriptive sortable snapshots |
| Teams | How did roster-level RAPM and factor contributions look? | measured team context, separate from the forward season |
| 2026-27 | What does the current roster model expect next season? | explicit forward win distributions and playoff/title probabilities |
| Draft | How does feeder-league evidence translate at draft time? | wide-interval NBA-equivalent comparison, not certainty |
| Model | What does the method claim, and what are its limits? | human-readable methodology and accuracy discussion |
| Static API | How can another tool consume the current outputs? | versioned JSON files and manifest |

The central communication rule is the same as in [[RAPM]]: measured and projected pages must remain visually and linguistically distinct. A daily curve records what the model estimated from evidence available by a date. An orange trajectory or 2026-27 win distribution is a forecast built on top of that curve.

## Generated, not authored in place

The public repository is downstream of `unified-rapm`. Exporters write player series, tables, team data, projections, accuracy, and API files; the build copies the site shell and clears stale output. Andrew then reviews the staged diff and decides whether to commit and push.

This arrangement has two benefits:

- public data can be reproduced from the model artifacts rather than manually edited;
- owner review remains a publication gate for claims, large diffs, and accidental private material.

It also creates a sharp hazard: a hand edit in `andrewjparkus.github.io` will be overwritten by the next build. The durable fix for a page belongs in the corresponding source template or exporter recorded in [[Daily RAPM implementation map]].

## Public explanation versus executable truth

The site is unusually candid about weaknesses: external EPM beats the internal decomposition on the frozen preseason benchmark; game evaluation uses realized minutes; non-overlapping forward correlation is far below the overlap-inflated headline; cross-league jumps are weakly identified; and player standard errors approximate rather than fully invert the ridge geometry.

That honesty must include documentation drift. At the inspected build, `model.html` says projected net is never modeled directly. The current forward code and `projection_2026_27.json` instead identify the production model as **“xgboost (single-net aggregate re-decomposed to sum6) + aging fallback.”** The public arithmetic remains coherent because the aggregate forecast is redistributed into the six factors, but the method prose should be refreshed. This is a documentation mismatch, not a reason to erase the more recent implementation from Rome.

There are similar reasons to prefer artifact-backed prose:

- a simulation count can change;
- a minutes contract can be promoted or reverted;
- an ablation can leave some feature cells dormant;
- a ledger can refuse to render after a reproducibility drift;
- a generated page can lag a source-code correction.

A future model manifest should let each prose claim point to the exact build contract it describes.

## Relationship to Rome

Rome should retain the conceptual map and durable lessons:

- [[RAPM lineup model]] for the estimator;
- [[Six-factor RAPM decomposition]] for interpretation;
- [[Cross-league RAPM translation]] for league comparison;
- [[NBA player forward projection model]] and [[NBA team season projection model]] for forecasting;
- [[RAPM evaluation and uncertainty]] for claims and caveats;
- [[Current RAPM decomp CSV export]] for a specific data delivery.

The GitHub Pages repository remains the display artifact. Rome should not duplicate thousands of generated player JSON files or pretend a point-in-time ranking is evergreen knowledge. It should explain how to read the product, record important version changes, and connect the model to Andrew's broader [[NBA multi-agent forecasting company]].

## Open questions

- How should the site display model-version and data-as-of information without cluttering every page?
- Which public methodology claims can be generated directly from artifact metadata to prevent drift?
- Should the static API expose uncertainty provenance and fallback flags as prominently as point estimates?
- What privacy and licensing review is required before expanding the public data surface?
