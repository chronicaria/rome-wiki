---
title: Phoenix Suns 2026-27 Research Briefing
created: 2026-07-09
source: web
team: PHX
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Phoenix Suns 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 39.8 |
| Model p10-p90 wins | 33.0-46.0, with p50 40.0 |
| Model strength | -4.209 pts/100, se_strength 1.291 |
| Playoff probability | 54.9% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +0.6 pts/100, judgmental |
| Win delta | +1.6 wins, judgmental |
| Adjusted wins | 41.4 |
| Confidence | 56/100 |
| One-sentence thesis | The corrected public prior is lower than I would shade Phoenix because the 2025-26 Suns were a 45-win team, the current depth chart still has a real Booker-Green-Brooks-Bridges-Williams starting group, and the model's roster context appears to undercount starter availability, but the fit, shooting, Mark Williams health, and unfinalized Bridges transaction keep the adjustment small. |

## Model Prior

The only authoritative team-level prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "PHX"`. That row says:

- `mc_mean_wins`: 39.8
- `p10_wins`: 33.0
- `p50_wins`: 40.0
- `p90_wins`: 46.0
- `make_playoffs_prob`: 0.549
- `strength`: -4.209
- `se_strength`: 1.291
- `n_cold_start`: 1

Within the corrected standings table, Phoenix ranks 9th in the Western Conference by projected wins and 18th overall. The model is treating the Suns as a volatile play-in-range team: a median 40-win outcome, a 13-win p10-p90 band, and better-than-even playoff odds despite a negative strength field. I am not using `projection_2026_27_teams.json` for the team-level prior because the user flagged it as non-authoritative for this rerun.

## Roster And Minutes Read

Roster/minutes context below comes from the non-authoritative team-detail packet and depth chart only; it is used to challenge the public prior, not to replace it.

The non-authoritative roster packet's top projected win contributors are:

| Player | Role in packet | MPG | Exp GP | Net | Proj wins | Flag |
|---|---|---:|---:|---:|---:|---|
| Devin Booker | starter | 27.4 | 66 | +3.18 | 9.59 | high uncertainty |
| Collin Gillespie | starter | 27.0 | 76 | +1.57 | 7.77 | high uncertainty, +6.3 rotation_delta |
| Jordan Goodwin | starter | 26.4 | 66 | +1.09 | 5.84 | high uncertainty |
| Dillon Brooks | starter | 27.1 | 64 | +0.69 | 5.16 | high uncertainty |
| Miles Bridges | starter | 27.1 | 71 | -0.61 | 3.44 | high uncertainty, +4.7 rotation_delta |
| Oso Ighodaro | rotation | 12.4 | 48 | +0.61 | 1.71 | high uncertainty |
| Luke Kennard | rotation | 12.2 | 40 | +0.67 | 1.46 | high uncertainty |
| Rasheer Fleming | rotation | 11.5 | 44 | +0.55 | 1.43 | high uncertainty |

The top projected MPG players in that packet are Booker, Brooks, Bridges, Gillespie, Goodwin, Jalen Green, Mark Williams, Ighodaro, Kennard, Dunn, Bouyea, and Fleming. This is where the first challenge appears. ESPN's live depth chart lists Booker, Jalen Green, Dillon Brooks, Miles Bridges, and Mark Williams as starters, with Gillespie, Kennard, Goodwin, Ryan Dunn, Oso Ighodaro, Khaman Maluach, Koa Peat, and Rasheer Fleming behind them. The local depth chart CSV similarly labels Williams, Bridges, Brooks, Green, and Booker as starters.

The packet is much more conservative on Jalen Green and Mark Williams than those external/depth sources imply: Green is at 12.8 MPG, 33 expected games, -2.16 net, and 0.14 projected wins; Williams is at 12.6 MPG, 25 expected games, -2.34 net, and 0.06 projected wins. That may be an intentional availability haircut, but it creates upside if both are simply normal starters. It also creates downside if the haircut is right, especially because NBA.com notes Williams has battled injuries and that his 60 games last season were a career high.

The cold-start count in the authoritative prior is `n_cold_start = 1`. In the roster context, Koa Peat is the cold rookie: 0.1 MPG, 4 expected games, -1.12 net, a -3.05 to +0.80 rating band, and `source_any_fallback = true`. Khaman Maluach, Rasheer Fleming, and Koby Brea come from recent draft/trade context but are not the authoritative prior's cold-start row.

## Six-Factor And Style Read

The public standings prior does not expose a six-factor team profile. Using the non-authoritative roster packet as context only, the season-minutes-weighted factor profile is approximately:

| Factor | Context value |
|---|---:|
| oTS | +0.01 |
| oTOV | +0.29 |
| oSC | +0.16 |
| dTS | -0.04 |
| dTOV | +0.26 |
| dSC | +0.01 |

That profile reads like a team with modest turnover/possession value and little clear shooting or defensive-shot-suppression edge. The player vectors make intuitive sense: Booker and Kennard carry the best oTS values; Goodwin and Dunn add pressure/second-chance-style value; Williams and Green are modeled as much lower net pieces than their likely public depth-chart roles. The external rotation reads also flag the same style issue: the projected starting group has plenty of shot creation and physicality, but not obvious high-volume shooting, table-setting, or mistake-proof two-way balance.

## Main Challenge To The Model

My challenge is that the 39.8-win prior is probably a little too low, but not wildly wrong.

The positive case starts with the 2025-26 baseline. Public sources list Phoenix at 45-37, 7th in the West, with a positive team rating. The core that drove that surprise season is still visible: Booker remains the clear No. 1, Green and Brooks arrived in the Kevin Durant trade, Williams re-signed, and Gillespie/Goodwin were retained. The reported Bridges addition gives Phoenix a real power forward rather than leaning as hard on small wings. If the current starting five is Booker-Green-Brooks-Bridges-Williams, the non-authoritative roster packet's low minutes and value for Green/Williams look more like downside scenarios than true median roles.

The reason the adjustment is small is the fit. A Booker-Green-Brooks-Bridges-Williams lineup has only one elite organizer, debatable spacing, and a lot of players who are more comfortable using possessions than connecting them. Losing Grayson Allen and Royce O'Neale in the reported Bridges deal removes two stabilizing rotation archetypes: shooting and lower-usage wing defense. Mark Williams also has real availability risk. That combination makes Phoenix more fragile than a pure "45-win team adds Bridges" summary would imply.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| Phoenix's corrected prior is meaningfully below its 2025-26 baseline. | Basketball-Reference and ESPN list the 2025-26 Suns at 45-37 and 7th in the West; the corrected public prior is 39.8 wins. Accessed July 9, 2026. | helps | +1.0 wins | 65 |
| The likely current starting five is stronger than the roster packet's Green/Williams minutes imply. | ESPN depth chart lists Booker-Green-Brooks-Bridges-Williams as starters; the local depth CSV labels the same five as starters, while the roster packet gives Green 33 expected games and Williams 25. Accessed July 9, 2026. | helps | +0.8 wins | 58 |
| Booker remains a bankable top option. | NBA.com lists Booker at 26.1 PPG, 6.0 APG, age 29, and 5 All-Star selections; the packet gives him +3.18 net and 9.59 projected wins. Accessed July 9, 2026. | helps | +0.5 wins | 70 |
| Williams returning stabilizes center, but his availability is the key swing. | NBA.com reports Williams signed a three-year deal with Phoenix, played a career-high 60 games last season, and has battled injuries. Accessed July 9, 2026. | hurts | -0.7 wins | 68 |
| The Bridges trade improves size/rim pressure but is not cleanly bankable yet. | NBA.com reported the Hornets-Suns Bridges deal; Sports Illustrated reported on July 9 that it had not yet been finalized because of logistics. Accessed July 9, 2026. | neutral | +0.1 wins | 45 |
| The new starting group may be awkward offensively. | Suns on SI projected Booker-Green-Brooks-Bridges-Williams as the starting group and noted Phoenix would need creativity around shooting, defense, and playmaking; Bright Side of the Sun similarly questioned spacing and shot distribution. Accessed July 9, 2026. | hurts | -0.8 wins | 64 |
| Retaining Gillespie and Goodwin gives real regular-season floor. | NBA.com reports Phoenix re-signed both guards after they became key role players on a 45-37 team; the roster packet likes them strongly, especially Gillespie at 7.77 projected wins. Accessed July 9, 2026. | helps | +0.5 wins | 57 |
| The roster packet may overrate the guard reserves relative to playoff-level roles. | Gillespie and Goodwin combine for 13.61 projected wins in the packet, more than Booker plus Bridges, while external depth charts put them behind the starter group. | hurts | -0.4 wins | 52 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Devin Booker | 27.4 MPG, 66 GP, +3.18 net, 9.59 wins | Upside if his true minutes are closer to a normal star load; downside if late-season ankle issues linger. | Phoenix's offense still depends on his shot creation and playmaking. |
| Jalen Green | 12.8 MPG, 33 GP, -2.16 net, 0.14 wins | The model context looks far below his public starter role and recent high-usage playoff/play-in minutes; fit with Booker is still uncertain. | If Green is merely average in 30+ MPG, the model is likely low; if he remains inefficient off-ball, the prior is right. |
| Dillon Brooks | 27.1 MPG, 64 GP, +0.69 net, 5.16 wins | The packet likes him as a positive two-way starter; NBA.com lists 20.2 PPG last season, but shot diet and defensive assignment load matter. | He is the cleanest big-wing defender in the likely starting group. |
| Miles Bridges | 27.1 MPG, 71 GP, -0.61 net, 3.44 wins | Reported addition fills power forward but the deal was not finalized as of July 9; spacing/off-court/context risks reduce certainty. | His role determines whether Phoenix has real size or just another scorer. |
| Mark Williams | 12.6 MPG, 25 GP, -2.34 net, 0.06 wins | Huge swing: official depth charts treat him as starter, while model context heavily discounts him. Health history supports the discount. | Phoenix needs his rim finishing, rebounding, and size, but cannot assume 70 games. |
| Collin Gillespie | 27.0 MPG, 76 GP, +1.57 net, 7.77 wins | Packet may be overcrediting him as a starter-level impact player; re-signing says the organization believes in the role. | If he is truly a high-end reserve, Phoenix's floor rises. If not, the model's internal win distribution is fragile. |
| Jordan Goodwin | 26.4 MPG, 66 GP, +1.09 net, 5.84 wins | Useful guard depth, but the packet gives him a very large role relative to public depth charts. | Backup guard/spot starter quality matters because Booker and Green have availability volatility. |
| Luke Kennard | 12.2 MPG, 40 GP, +0.67 net, 1.46 wins | Shooting is exactly what the starting group lacks; health and defensive survivability cap the role. | He may be the swing spacer who keeps Booker-Green lineups functional. |
| Koa Peat | Cold rookie, 0.1 MPG, 4 GP, -1.12 net, wide band | The public draft context is more optimistic than the immediate model role, but shooting questions could keep him out early. | Any early Peat minutes are a volatility source rather than a bankable upgrade. |

## Adjustment Logic

I am applying a judgmental adjustment of +0.6 pts/100, roughly +1.6 wins, because the corrected 39.8-win prior appears to discount the current public starting five and previous 45-win baseline slightly more than I would.

Mechanically, I am adding about +2.8 wins for continuity, Booker stability, and likely starter minutes from Green/Williams/Bridges that look stronger than the non-authoritative packet's low Green/Williams minute/value context. I am subtracting about -1.2 wins for spacing/playmaking concerns, the Williams health record, the Bridges transaction's finalization risk, and possible overvaluation of Gillespie/Goodwin in the roster packet. Net: +1.6 wins. This is not a simulation and should not be treated as a model output.

## Counter-Thesis

The strongest argument against `MODEL_TOO_LOW` is that the model may already be catching the right fragility. Williams has not shown a long record of durable starter seasons. Green's on-ball scoring can look much less valuable if Booker is the first option and the lineup lacks spacing. Brooks and Bridges can both score, but neither solves high-end passing or half-court organization. If Gillespie's breakout and Goodwin's reserve impact regress, the Suns could be a thin team with one star, a lot of medium-usage scorers, and too many lineups that trade clean spacing for physicality. In that world, 39.8 wins is not low; it is the right answer or even a little generous.

## What Would Change My Mind

- Final confirmation and exact terms/players of the Miles Bridges transaction.
- Training-camp indication that Jalen Green is starting and playing 30+ MPG next to Booker.
- Any Mark Williams medical or workload reporting before opening night.
- Whether Luke Kennard closes games or is just a regular-season shooting patch.
- Preseason evidence that Jordan Ott has a coherent Booker-Green-Bridges offensive hierarchy.
- A corrected model rerun that reconciles the public standings prior with the non-authoritative roster packet's player roles.

## Data Quality And Uncertainty

The biggest data issue is source conflict. The authoritative standings JSON gives PHX 39.8 wins, p10/p50/p90 of 33.0/40.0/46.0, 54.9% playoff odds, -4.209 strength, 1.291 strength SE, and one cold-start. The non-authoritative team-detail packet gives different team-level values, so I ignored those for the prior and used only player-level context from it.

There is also role conflict. The depth chart CSV and ESPN list Booker, Green, Brooks, Bridges, and Williams as starters, but the roster packet has Gillespie and Goodwin as high-minute starters while Green and Williams are heavily discounted. That could be a purposeful health/availability expectation, stale role data, or both. I treated it as uncertainty rather than proof.

Finally, the Bridges transaction has public reporting but was described by Sports Illustrated on July 9, 2026 as not yet official. Any PHX forecast that assumes Bridges should be tagged as conditional until the transaction is finalized.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "PHX"`; accessed July 9, 2026. Authoritative prior only.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`, `teams.PHX`; accessed July 9, 2026. Roster context only, non-authoritative for team-level prior.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, PHX rows; accessed July 9, 2026. Roster-role context only.
- `private-model-workspace/unified-rapm/daily_v5/README.md`; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md`; accessed July 9, 2026.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md`; accessed July 9, 2026.

External public sources:

- https://www.espn.com/nba/team/depth/_/name/phx ; accessed July 9, 2026.
- https://www.nba.com/news/kevin-durant-joins-rockets-7-team-trade ; accessed July 9, 2026.
- https://www.nba.com/news/miles-bridges-trade-hornets-suns ; accessed July 9, 2026.
- https://www.si.com/nba/suns/onsi/why-phoenix-suns-trade-for-miles-bridges-isnt-official-yet ; accessed July 9, 2026.
- https://www.si.com/nba/suns/onsi/how-miles-bridges-luke-kennard-moves-shake-phoenix-suns-rotation ; accessed July 9, 2026.
- https://www.brightsideofthesun.com/suns-rumors/107225/jalen-green-trade-ideas-devin-booker-myles-turner-sabonis-kyrie-holiday-giddey ; accessed July 9, 2026.
- https://www.nba.com/news/mark-williams-return-to-suns ; accessed July 9, 2026.
- https://www.nba.com/news/suns-resign-collin-gillespie-jordan-goodwin ; accessed July 9, 2026.
- https://www.nba.com/player/1626164/devin-booker ; accessed July 9, 2026.
- https://www.nba.com/player/1630224/jalen-green ; accessed July 9, 2026.
- https://www.nba.com/player/1628415/dillon-brooks ; accessed July 9, 2026.
- https://www.nba.com/player/1631109/mark-williams ; accessed July 9, 2026.
- https://www.basketball-reference.com/teams/PHO/2026.html ; accessed July 9, 2026.
- https://www.basketball-reference.com/leagues/NBA_2026_ratings.html ; accessed July 9, 2026.
- https://www.nba.com/suns/news/phoenix-suns-add-arizona-forward-koa-peat-in-2026-nba-draft ; accessed July 9, 2026.
