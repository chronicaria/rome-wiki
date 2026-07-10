---
title: Daily RAPM implementation map
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, rapm, software-architecture]
---

The Daily RAPM system is a staged research pipeline: possession designs become daily league boards, translated player histories, forward ratings, team simulations, static exports, and finally a generated GitHub Pages checkout.

## Repository boundary

Two repositories play different roles:

- **`unified-rapm`** is the research and build source of truth. It contains the solver drivers, priors, translation, forward models, validation harnesses, exporters, and private/generated artifacts.
- **`andrewjparkus.github.io`** is the generated public product. Its HTML, JavaScript, CSS, player data, projections, and API files are staged by the source build and then manually reviewed and published by Andrew.

The public checkout should not be edited by hand: `build_pages.py` clears everything except its `.git` directory before restaging the site. Manual changes there are disposable by design. [[Daily RAPM public site]] describes the user-facing surfaces.

## End-to-end flow

| Stage | Main source code | Principal artifact or effect | Concept note |
|---|---|---|---|
| Possession inputs | sibling NBA, NCAA, and G League play-by-play/design caches | sparse lineup matrices and component targets | [[RAPM lineup model]] |
| Daily league solves | `daily_v5/msolve.py`, `backfill.py`, `xleague.py` | per-game-day pure and prior-informed boards | [[RAPM lineup model]] |
| Component scale | `joint_alpha.py`, `calibrate_factors.py` | component penalties, half-lives, offsets, reference-scale gates | [[RAPM regularization and identification]] |
| Box/prior layer | `daily_v5/daily_prior/` | causal player-day prior means and box-mode curves | [[RAPM]] |
| Cross-league translation | `anchors.py`, `fit_translation_v5.py` | mover mappings and `Var_translate` floors | [[Cross-league RAPM translation]] |
| Unified history | `aggregate.py` | NBA-equivalent daily series across three leagues | [[Six-factor RAPM decomposition]] |
| Season-end snapshots | `oos_harness.py` | causal player-season training and evaluation panel | [[RAPM evaluation and uncertainty]] |
| Player forward model | `build_forward_xgb.py`, `build_projection.py`, `build_forward_calibration.py` | one-to-five-year factor/net paths and intervals | [[NBA player forward projection model]] |
| Minutes and availability | `build_minutes_model.py`, `build_gp_model.py`, rotation distribution builders | roster demand, expected GP, role uncertainty | [[NBA team season projection model]] |
| Season simulation | `project_2027.py`, `build_projection_teams.py` | wins, percentiles, play-in/playoff/title odds | [[NBA team season projection model]] |
| Public exporters | `export_api.py`, table/team/draft/trajectory builders | static JSON and API payloads | [[Daily RAPM public site]] |
| Site assembly | `build_pages.py`, `deploy_site.sh` | regenerated `andrewjparkus.github.io` checkout | [[Daily RAPM public site]] |

## Measurement path

The expensive substrate is the possession solve. The NBA driver builds or loads a large sparse matrix for each underlying component, slices it to a game-day's trailing five-year window, applies the 550-day decay, and solves the weighted ridge. NCAA and G League are solved on their native scales in separate processes.

The daily boards remain modular:

- `out/nba` holds the pure NBA path;
- `out/nba_hybrid` holds whichever promoted prior-informed build produced it;
- `out/college` and `out/gleague` hold native feeder-league paths;
- the aggregation stage applies canonical translation and writes the unified series.

The unified parquet is several gigabytes and tens of millions of rows. Consumers should project columns and stream row groups rather than load it wholesale. This operational fact shapes the exporters and is part of why the public site contains compact downsampled JSON rather than the research corpus itself.

## Projection path

The forward stack deliberately starts after the descriptive measurement stack:

1. `oos_harness.py` extracts season-end causal snapshots.
2. `build_forward_xgb.py` constructs temporal panels and trains factor/horizon plus aggregate-net models.
3. `build_projection.py` applies gate decisions, fallbacks, exact re-decomposition, and calibrated intervals.
4. minutes, expected games, and roster inputs are built independently.
5. `project_2027.py` combines the pieces into team strength and Monte Carlo outcomes.

This separation makes “measured” and “projected” inspectable. A forecast model can be replaced without rewriting the historical RAPM curve, and a minutes-model experiment need not alter a player's per-100 rating.

## Product build and publication

`deploy_site.sh` is the executable product definition. It rebuilds forward artifacts, runs exporters, invokes the site assembly clear step, reruns exporters that write directly into the fresh public checkout, and verifies required files exist. It stages but does not authorize publication. Andrew's review, commit, and push of the GitHub Pages repository are the final gate.

The source repository itself is local-only in the inspected configuration. Its ignored multi-gigabyte data is not protected by the public site's Git history. Source code, generated data, and published product therefore have different recovery and provenance contracts.

## Which files answer which question

- “What is the current mathematical model?” — `msolve.py`, `joint_alpha.py`, and the active calibration JSON.
- “What actually ships?” — `deploy_site.sh` and the public artifact metadata.
- “How was a model cell promoted?” — `forward_model_gate.json`, ablation artifacts, and [[RAPM evaluation and uncertainty]].
- “Why does a feeder-league rating look compressed?” — `var_translate_v5.json` and [[Cross-league RAPM translation]].
- “Why does the prose disagree with an artifact?” — inspect file dates and treat live code plus generated metadata as current until the documentation is refreshed.

## Open questions

- Should a machine-readable model manifest version every solve regime, translation map, forward gate, minutes contract, and public build together?
- Which large artifacts are irreplaceable and need an explicit backup plan outside Git?
- Can the daily build become incremental without weakening causal and reproducibility gates?
- How should generated public prose be tested against executable invariants such as the current net projection path?
