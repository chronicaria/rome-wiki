---
title: 2026-27 NBA team briefing corrected-prior run
created: 2026-07-09
source: llm
status: seed
tags: [project, basketball, nba, ai, agents, forecasting, rapm, research]
---
A corrected thirty-agent NBA research run used `projection_2026_27.json` as the only authoritative standings prior, then had each team agent challenge that prior with public web research.


Roster-audit record: [[2026-27 projection roster audit]] and [[2026-27 roster audit projection rerun]].

## Output

The completed research corpus lives in [[Basketball/NBA team briefings 2026-27/00_INDEX|2026-27 NBA team briefing index]], directly under the Basketball section.

It contains:

- 30 individual team briefings, one per NBA team.
- [[Basketball/NBA team briefings 2026-27/00_INDEX|The boss index]], with one row per team.
- [[Basketball/NBA team briefings 2026-27/00_CROSS_TEAM_FINDINGS|The leaguewide synthesis]].
- A private verification report, retained locally but excluded from the public wiki.

## Correct Prior Rule

The only authoritative projection prior for the rerun was:

`private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`

The stale `projection_2026_27_teams.json` artifact was not used as a standings or team-level projection prior. It was treated as deprecated for this mission, and the boss prompt was updated so future agents do not accidentally pull projected wins, strength, playoff odds, or uncertainty from that file.

## Run Shape

Andrew asked for thirty individual subagents to be fanned out, each tackling one team independently. The runtime imposed an active-thread cap, so launch happened in two waves, but every franchise still received its own independent research agent.

Each subagent had to:

- use the corrected public standings JSON as its prior.
- do online public/free research.
- challenge depth charts, rotations, injuries, player values, and role assumptions.
- produce a clear model-too-high, model-too-low, or model-about-right stance.
- cite URLs with access date July 9, 2026.
- include a self-critique and a judgmental win/strength delta.

## Verification

Final boss verification passed for all 30 team briefings. The checker confirmed that each report included the required sections, external URLs, access dates, an evidence table, a player pressure table, numerical deltas, a counter-thesis, and prior numbers matching `projection_2026_27.json`.

Stance counts:

- `MODEL_TOO_HIGH`: 6 teams.
- `MODEL_TOO_LOW`: 16 teams.
- `MODEL_ABOUT_RIGHT`: 8 teams.

The largest downward challenges were Golden State, Toronto, Charlotte, Houston, Boston, and Sacramento. The largest upward challenges were Chicago, Philadelphia, Detroit, the Lakers, Washington, Utah, Atlanta, Denver, San Antonio, and Indiana.

## Cleanup

The previous generated briefing directories from the stale-prior attempts were deleted before the corrected run. Source model artifacts were not destructively deleted; instead, the stale team-detail projection artifact was explicitly deprecated in the project instructions.

## Open questions

- Should the deprecated team-detail JSON be regenerated from the tuned prior, or removed from the public site entirely?
- Should future agent outputs include machine-readable stance and source metadata inside each team file?
- Should the next pass run after training camp depth charts, preseason injury reports, or the next model rerun?
