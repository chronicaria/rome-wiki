---
title: 2026-27 projection roster audit
created: 2026-07-09
source: llm
status: seed
tags: [project, basketball, nba, forecasting, rapm, roster, audit]
---
The July 8, 2026 10:06 PM ET projection roster snapshot is broadly close but not fully accurate; the highest-confidence correction is that Nate Ament belongs on Milwaukee, not Miami.


## Audit Target

Audited file:

`private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`

Cutoff:

`2026-07-08 10:06 PM ET`

Snapshot hash:

`c83150e05abe9142941e38dcbc85bd048227ca27f882fc7d2db0c3e102925b6c`

The public `projection_2026_27.json` provenance confirms this CSV is the projection roster source, with `minutes_allocation.parquet` and `gp_projection.parquet` also consumed downstream.

## Output

Master audit folder:

`private-model-workspace/unified-rapm/research/roster_audit_2026_07_08_2206/`

Key files:

- `00_MASTER_ROSTER_AUDIT_SUMMARY.md`
- `00_TEAM_AUDIT_STATUS.csv`
- `00_ACTIONABLE_REMOVE_OR_MOVE_ROWS.csv`
- `00_ACTIONABLE_MISSING_PLAYERS.csv`
- `00_ACTIONABLE_PID_NAME_FIXES.csv`
- `00_REPORTED_PENDING_OR_MONITOR_ITEMS.csv`
- `nba_com_vs_depthcharts_comparison.csv`
- `nba_com_official_rosters_2026_27.json`

## Verdict

The file is **not fully accurate** as of the cutoff. It has:

- material wrong-team or stale free-agent rows.
- missing official/current players.
- many missing rookie PIDs.
- several dangerous veteran PID mismatches.
- reported-vs-official timing caveats that need an explicit roster policy.

Coverage:

- 30 team audit agents completed.
- 590 source rows checked.
- NBA.com roster scrape succeeded for all 30 teams.
- NBA.com direct comparison found 554 rows on the listed team page, 22 rows on another official team page, and 14 rows not found on parsed official team pages.

## Highest-Confidence Corrections

- Nate Ament is on MIL, not MIA. Add/move him to Milwaukee with NBA ID `1643417`.
- Quinten Post should not remain on GSW; he is a MEM issue/add.
- Remove or quarantine stale/free-agent rows such as BKN E.J. Liddell/Ziaire Williams/Jalen Wilson/Ochai Agbaji/Tyson Etienne, DEN David Roddy/Jalen Pickett/Curtis Jones/Bruce Brown, LAL Maxi Kleber/Drew Timme/Nick Smith Jr., PHI Trendon Watford/MarJon Beauchamp/Tyrese Martin, and several SAS veteran/deep rows.
- Correct dangerous veteran PID mismatches: Gary Payton II, Jabari Smith Jr., Gary Trent Jr., and Jaren Jackson Jr.

## Policy Fork

Some rows depend on whether the roster file should represent:

1. a strict official NBA ledger at exactly the cutoff, or
2. a projection-facing reported/agreed transaction state as of the cutoff.

That distinction matters for rows such as Kawhi Leonard/TOR, Ingram and Gradey Dick, the Randle/Jefferson/Claxton/Evans cluster, LaMelo Ball/Josh Green/Isaiah Evans/Naz Reid/Julius Randle, and several expected free-agent returns.

## Open questions

- Should the production roster follow strict official membership or reported/agreed projection state?
- Should draft-rights and Exhibit 10/camp players be included in the same CSV as rotation projection players?
- Should the next step patch `depthcharts_2026_27.csv` directly, or regenerate it from the owner sheet with correction columns?
