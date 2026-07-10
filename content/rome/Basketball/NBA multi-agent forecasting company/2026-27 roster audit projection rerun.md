---
title: 2026-27 roster audit projection rerun
created: 2026-07-09
source: llm
status: seed
tags: [project, basketball, nba, forecasting, projections]
---
The audited 2026-27 roster file was applied to the projection pipeline, reducing unknown roster IDs from 75 to 4 and pushing refreshed public projection JSONs.

Related: [[NBA multi-agent forecasting company]], [[2026-27 projection roster audit]], [[2026-27 NBA team briefing corrected-prior run]].

## What changed

The corrected roster source is `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`.

The applied correction manifest is `private-model-workspace/unified-rapm/research/roster_audit_2026_07_08_2206/applied_roster_update_manifest.json`.

Policy used: keep reported/provisional pre-cutoff moves already used by the projection baseline, remove stale or unconfirmed free-agent holds from the audit, move hard wrong-team rows, and add material official or reported roster omissions that fit the projection scope.

Correction counts:

- 590 roster rows before, 561 after.
- 73 PID fixes.
- 7 display-name fixes.
- 2 hard moves: Nate Ament to MIL and Quinten Post to MEM.
- 36 removals.
- 7 additions.
- 0 duplicate team-name rows and 0 duplicate PID rows after correction.

## Model rerun

Pipeline rerun:

- `daily_v5/build_minutes_model.py --skip-distribution`
- `daily_v5/build_gp_model.py`
- `daily_v5/build_rotation_distributions.py --n-samples 1000 --write-samples`
- `daily_v5/build_projection.py`
- `daily_v5/project_2027.py --game-model p2_0_production`
- `daily_v5/build_projection_teams.py --game-model p2_0_production`
- `daily_v5/project_2027.py --mode distribution --n-rotation-samples 5000 --write-rotation-samples --game-model p2_0_production`
- final point/team-detail refresh with `p2_0_production`

Validation:

- Minutes model passed the leakage-free MPG gate and the 240 weighted-minute invariant for all 30 teams.
- GP model passed its availability gates and wrote `gp_projection.parquet`.
- Point projection read back as 30 teams and 1229.8 total projected wins.
- Distribution projection read back as 30 teams, 5000 rotation samples, and 1230.3 total projected wins.
- Focused tests passed: 17/17 across depth-owner guard, site JSON contracts, and projection calibration.

## Public output

Pushed GitHub Pages commit: `9260e10ff0 Refresh 2026-27 projections after roster audit`.

Updated public files:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`
- `private-model-workspace/andrewjparkus.github.io/projection_2026_27_distribution.json`
- `private-model-workspace/andrewjparkus.github.io/projection_2026_27_teams.json`

Before/after artifacts:

- `private-model-workspace/unified-rapm/research/roster_audit_2026_07_08_2206/before_after_wins.csv`
- `private-model-workspace/unified-rapm/research/roster_audit_2026_07_08_2206/before_after_wins.md`
- `private-model-workspace/unified-rapm/research/roster_audit_2026_07_08_2206/before_after_wins.svg`

Largest point-projection changes:

- UTA: +3.2 wins.
- DEN: +2.0 wins.
- HOU: +1.9 wins.
- MIA: +1.5 wins.
- CLE: -1.5 wins.
- OKC: -1.0 wins.

## Open questions

- Should future roster updates use this reported-transaction projection baseline by default, or should there be a separate strict official-ledger roster mode?
- Should the ignored `daily_v5/out` source artifacts be mirrored into a tracked release bundle for exact reproducibility?
