---
title: Houston Rockets 2026-27 Research Briefing
created: 2026-07-09
source: web
team: HOU
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Houston Rockets 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 54.8 |
| Model p10-p90 wins | 47.0-63.0, with p50 55.0 |
| Model strength | +2.552 pts/100, se_strength 2.371 |
| Playoff probability | 98.7% |
| Agent stance | MODEL_TOO_HIGH |
| Strength delta | -0.9 pts/100, judgmental |
| Win delta | -2.6 wins, judgmental |
| Adjusted wins | 52.2 |
| Confidence | 58/100 |
| One-sentence thesis | Houston is a real West contender, but the 54.8-win prior is a little too optimistic because it stacks Kevin Durant age/availability, Fred VanVleet ACL return, half-court spacing, and crowded defense-first rotation assumptions with limited room for slippage. |

## Model Prior

Authoritative prior source: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "HOU"`, accessed July 9, 2026.

Required quoted prior fields:

| Field | Value |
|---|---:|
| `mc_mean_wins` | 54.8 |
| `p10_wins` | 47.0 |
| `p50_wins` | 55.0 |
| `p90_wins` | 63.0 |
| `make_playoffs_prob` | 0.987 |
| `strength` | 2.552 |
| `se_strength` | 2.371 |
| `n_cold_start` | 3 |

The public JSON prior says Houston is a high-end Western playoff team: 54.8 mean wins, a 47.0-to-63.0 central band, +2.552 strength, and 98.7% playoff probability. This briefing treats those numbers as the only authoritative team-level prior.

I did not use `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for Houston's team-level wins, strength, playoff odds, or win band. I also avoid relying on it for player values here because this rerun is specifically correcting prior-source confusion. Rotation discussion below is based on the public/team roster context, the local depth chart CSV as non-authoritative role context, and public reporting.

## Roster And Minutes Read

The local depth chart CSV, used only as non-authoritative role context, frames Houston's roster this way:

| Starters | Rotation | Deep / fringe |
|---|---|---|
| Fred VanVleet, Amen Thompson, Kevin Durant, Jabari Smith Jr., Alperen Sengun | Clint Capela, Tari Eason, Bogdan Bogdanovic, Marcus Smart, Reed Sheppard | Steven Adams, Jeff Green, Jae'Sean Tate, Isaiah Crawford, Tristen Newton, Aaron Holiday, Quadir Copeland, Bruce Thornton, JD Davison |

Source: `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, HOU rows, accessed July 9, 2026. This is roster/depth context only, not a team prior.

The most likely regular-season starting framework from public reporting is VanVleet, Amen Thompson, Jabari Smith Jr., Durant, and Sengun. The first bench layer is more matchup-dependent: Smart for defense and ball pressure, Bogdanovic for shooting, Eason for wing havoc/rebounding, Capela or Adams for size, and Sheppard for shooting/secondary handling.

The minutes challenge is that Houston has many useful players but not all combinations solve the same problem. Smart, Amen, Eason, Capela, Adams, and Sengun can overwhelm teams physically, but several of those groupings squeeze spacing. Bogdanovic, VanVleet, Reed, Durant, and Jabari improve spacing, but those lineups can ask older or smaller guards to cover more ground. A 55-win mean assumes Udoka finds the right mix quickly and that the veteran health ledger cooperates.

## Six-Factor And Style Read

The authoritative public JSON row does not expose team six-factor detail, so this section is a basketball style read rather than a model factor claim.

| Area | Read | Model challenge |
|---|---|---|
| Shot quality / spacing | Durant, VanVleet, Bogdanovic, Jabari, and Reed give Houston enough shooting paths. Amen, Sengun, Smart, Capela, and Adams create real spacing tradeoffs. | The offense may be less stable than a 54.8-win prior if VanVleet is not fully back or Bogdanovic is not healthy enough to close. |
| Turnovers / organization | VanVleet's return should stabilize late-clock possessions and lower turnover risk. Sengun also helps as a hub. | ACL recovery could make VanVleet less able to bend defenses, leaving Sengun/Durant to create under pressure. |
| Second chances | Houston's size and Eason/Amen activity make offensive rebounding a real weapon. | Rebounding-heavy looks can cost shooting, especially if two centers or multiple non-shooters share the floor. |
| Defensive shot quality | Udoka has multiple big, physical defenders and switchable pressure options. | Smart/Amen/Eason lineups can be elite defensively, but closing units still need enough offense. |
| Defensive turnovers | Smart, Amen, Eason, and VanVleet can pressure the ball and passing lanes. | Those same players may compress half-court spacing unless paired with enough shooting. |
| Defensive rebounding | Capela, Adams, Sengun, Jabari, Eason, and Amen create a strong glass profile. | If Houston leans into smaller shooting groups, this edge can shrink. |

## Main Challenge To The Model

My stance is `MODEL_TOO_HIGH`, but only modestly. Houston should be forecast as a playoff team and plausible top-four West seed. The question is whether the mean should be 54.8 wins rather than closer to 52.

The first mechanism is availability. Durant is still a premier shot-maker, but NBA.com lists him as a 37-year-old, 19-year veteran on the Rockets roster. The model can price age curves, but a 55-win team led by a late-career superstar has little margin if he misses time or slips defensively. VanVleet is the second hinge: NBA.com reported a torn right ACL in September 2025, and the Rockets' offensive structure asks him to return as both a spacer and organizer.

The second mechanism is spacing. Houston's best defensive and rebounding combinations can include multiple non-elite shooters. Amen Thompson, Sengun, Smart, Capela, and Adams all bring real value, but if too many share the floor, opponents can shrink the court and force Durant into difficult isolations. Bogdanovic helps this directly, but NBA's roundup also described his previous season with the Clippers as injury-interrupted.

The third mechanism is rotation compression. Marcus Smart, Bogdanovic, Tari Eason, Reed Sheppard, Clint Capela, Steven Adams, and Aaron Holiday cannot all be optimized at once behind the likely starters. That is good depth, but a 98.7% playoff probability and 54.8 wins assume the overlap produces optionality more than role friction.

The fourth mechanism is playoff-style evidence. Houston was strong in 2025-26, but public records show a 52-30 team that lost a first-round series to the Lakers 4-2. Adding or returning useful players can improve the team, but the prior already asks Houston to exceed that 52-win baseline despite age/health and fit questions.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The authoritative prior is very strong, not merely playoff-safe. | Public JSON row: HOU 54.8 wins, 47.0/55.0/63.0 p10/p50/p90, 98.7% playoff probability, +2.552 strength, 2.371 se_strength, 3 cold-start players. Source: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, accessed July 9, 2026. | neutral | 0.0 wins | 100 |
| Houston's recent baseline supports contender status but not automatic 55-win certainty. | Basketball-Reference lists the 2025-26 Rockets at 52-30, 5th in the West, 115.2 PPG, and 110.0 opponent PPG. Accessed July 9, 2026: https://www.basketball-reference.com/teams/HOU/2026.html | mixed | -0.4 wins | 78 |
| The 2026 postseason ended in the first round, which keeps the ceiling case honest. | NBA game notes say Houston lost the First Round series vs. the Lakers 4-2. Accessed July 9, 2026: https://www.nba.com/gamenotes/rockets.pdf | hurts | -0.4 wins | 75 |
| Durant is a huge fit win but also an age/availability concentration point. | NBA.com reported Durant and Capela to Houston in the July 2025 seven-team trade; NBA.com roster lists Durant as 37 with 19 years experience. Accessed July 9, 2026: https://www.nba.com/news/kevin-durant-joins-rockets-7-team-trade and https://www.nba.com/team/1610612745/rockets | mixed | -0.6 wins | 74 |
| VanVleet's return can lift the offense, but ACL recovery is a central uncertainty. | NBA.com reported VanVleet tore his right ACL in September 2025 and could miss the 2025-26 season. Accessed July 9, 2026: https://www.nba.com/news/rockets-fred-vanvleet-tears-acl | hurts | -0.7 wins | 82 |
| Smart adds defensive optionality, but not a clean spacing fix. | NBA.com reported Smart agreed to a Rockets deal; NBA's offseason roundup listed 9.3 PPG, 3.0 APG, 2.8 RPG, and 1.4 SPG in 62 games. Accessed July 9, 2026: https://www.nba.com/news/marcus-smart-free-agency-2026 and https://www.nba.com/news/2026-nba-offseason-roundup | mixed | -0.2 wins | 65 |
| Bogdanovic directly addresses shooting but carries health/role uncertainty. | NBA.com reported Bogdanovic's one-year Rockets deal and noted his career 38.1% three-point shooting; the roundup says he battled injuries with the Clippers. Accessed July 9, 2026: https://www.nba.com/news/bogdan-bogdanovic-rockets-free-agency and https://www.nba.com/news/2026-nba-offseason-roundup | mixed | +0.3 wins | 66 |
| Houston's current offseason context includes both additions and departures. | NBA offseason tracker lists Bogdanovic and Smart additions, Tari Eason re-signing, Dorian Finney-Smith departure by trade, and Josh Okogie departure reported by ESPN. Accessed July 9, 2026: https://www.nba.com/news/nba-offseason-deals-2026 | mixed | -0.1 wins | 68 |
| Public beat reporting sees many lineup options but also confirms the likely starting five and the central spacing/role questions. | Houston Chronicle projects VanVleet, Amen, Jabari, Durant, Sengun and discusses double-big, Smart/Thompson/Eason, and Sengun/Bogdanovic lineup ideas. Accessed July 9, 2026: https://www.houstonchronicle.com/sports/rockets/article/houston-new-lineups-marcus-smart-fred-vanvleet-22334534.php | mixed | -0.5 wins | 70 |

## Player-Level Pressure Points

| Player | Role/value question | Concern or upside | Why it matters |
|---|---|---|---|
| Kevin Durant | Offensive ceiling raiser and likely late-game hub. | Still elite, but age-37/38 season increases availability and defensive-mobility downside. | If Durant misses time or slips from superstar efficiency, Houston's half-court offense loses its cleanest separator. |
| Fred VanVleet | Likely starting point guard and spacing/turnover stabilizer. | Returning from a torn right ACL; burst and lateral defense may lag even if cleared. | Houston's 55-win case depends on VanVleet restoring organization without needing a long ramp-up. |
| Amen Thompson | Starter-level defensive engine and transition/rim-pressure weapon. | Development upside is real; half-court spacing remains the swing skill. | If Amen becomes easier to fit late in games, model may be right; if defenses ignore him, the offense tightens. |
| Alperen Sengun | Starting center / offensive hub. | Passing and interior scoring help; playoff-style spacing and rim-protection matchups remain questions. | Houston needs Sengun to anchor offense without forcing too many non-shooter lineups. |
| Jabari Smith Jr. | Starting forward and connective spacer/defender. | Cleanest fit among young forwards, but needs high-level shooting/defense to hold lineups together. | Jabari is the pressure valve when Amen/Sengun/Smart lineups need space. |
| Marcus Smart | Defensive guard/wing option and Udoka familiarity piece. | Strong defender, but not a high-gravity shooter; role may be more matchup-specific than starter-level. | If Smart plays heavy minutes with Amen/Sengun, spacing can become a tax. |
| Bogdan Bogdanovic | Bench shooter and movement spacer. | Career shooting helps a lot; recent injury-interrupted season makes minutes uncertain. | He is one of the few players who directly fixes Houston's shooting geometry. |
| Tari Eason | Defensive/rebounding wing, likely important bench closer. | High-energy value is clear; shooting consistency decides closing viability. | Eason can swing lineups from good to suffocating if opponents still guard him. |
| Clint Capela | Rotation center and rim/rebound specialist. | Useful regular-season depth, but overlaps with Sengun/Adams and adds no spacing. | Center depth raises the floor but can clutter optimal playoff-style units. |
| Steven Adams | Deep/rotation matchup big. | Physical screening and rebounding are useful; age/availability and spacing make him situational. | If Adams is needed nightly, Houston's offense may lose flexibility. |
| Reed Sheppard | Young guard/shooter development swing. | If he earns trust, he solves spacing and backup creation; if not, guard depth relies on older/defense-first options. | Reed's development is a clean path to proving my downgrade too pessimistic. |

## Adjustment Logic

I am applying a judgmental adjustment of -0.9 points per 100 and -2.6 wins, moving Houston from 54.8 to 52.2 wins. This is not a new model output; it is a research-layer challenge to the public prior.

The rough accounting:

| Mechanism | Win effect |
|---|---:|
| Durant age/availability concentration | -0.7 |
| VanVleet ACL return and early-season ramp risk | -0.8 |
| Spacing friction in best defensive/rebounding lineups | -0.6 |
| Rotation compression among Smart/Bogdanovic/Eason/Reed/Capela/Adams | -0.4 |
| Strong team baseline, Udoka defense, and added shooting/optionality | +0.7 |
| Net judgmental delta | -2.6 |

The downgrade is deliberately modest. A 52.2-win adjusted view still has Houston as a strong playoff team. The argument is that the 54.8-win mean gives too much benefit of the doubt to health, age, and fit all at once.

## Counter-Thesis

The strongest argument against `MODEL_TOO_HIGH` is that the Rockets may simply be deeper and cleaner than my risk framing admits. Houston won 52 games in 2025-26, has Durant as an elite shot-maker, gets VanVleet back to organize the offense, and adds Bogdanovic's shooting plus Smart's defensive pressure. Udoka has already built a physical, high-floor identity, and the West behind Oklahoma City may leave room for Houston to pile up regular-season wins even if the playoff fit is imperfect.

Amen Thompson could also make this whole downgrade too cautious. If his shooting, passing, or off-ball cutting improves enough that defenses cannot shrink the floor, Houston's best defensive groups become much easier to close with. Sengun could benefit from VanVleet and Bogdanovic spacing, Jabari could settle into an ideal low-maintenance role, and Eason could give them another closing-caliber wing. In that world, 54.8 wins and a top-two West projection are fully defensible.

## What Would Change My Mind

- A clean training-camp report that VanVleet is fully cleared without workload limits would reduce the downgrade.
- Evidence that Bogdanovic is healthy enough for 20-plus reliable minutes would improve the spacing case.
- Amen Thompson showing credible catch-and-shoot or short-roll growth would move the stance toward `MODEL_ABOUT_RIGHT`.
- A preseason rotation that staggers Smart, Amen, Sengun, Capela, and Adams cleanly would lower the spacing concern.
- Durant being managed conservatively in preseason but moving well would increase confidence in the 55-win prior.
- Reed Sheppard earning a stable rotation role would make Houston's guard/spacing depth look much more robust.

## Data Quality And Uncertainty

- The only authoritative team-level prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "HOU"`, with `mc_mean_wins = 54.8`, `p10_wins = 47.0`, `p50_wins = 55.0`, `p90_wins = 63.0`, `make_playoffs_prob = 0.987`, `strength = 2.552`, `se_strength = 2.371`, and `n_cold_start = 3`.
- I did not use `projection_2026_27_teams.json` for Houston team-level prior fields. To avoid the prior-source confusion that caused the failed verification, I also do not rely on its player-win table in this revision.
- The local depth chart CSV is used only as non-authoritative roster/role context and may lag final camp roles.
- Public roster pages and offseason trackers are July 2026 artifacts and can lag official transaction processing.
- Several core claims are inherently uncertain until camp: VanVleet's post-ACL movement, Durant's workload plan, Bogdanovic's availability, and whether Udoka closes with shooting or defense.
- This is a mechanism-based research memo, not a replacement projection.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "HOU"`; accessed July 9, 2026. Authoritative prior for `mc_mean_wins`, `p10_wins`, `p50_wins`, `p90_wins`, `make_playoffs_prob`, `strength`, `se_strength`, and `n_cold_start`.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, HOU rows; accessed July 9, 2026. Non-authoritative roster/depth context only.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md`; accessed July 9, 2026. Briefing template and challenge rules.

External public/free sources:

- Basketball-Reference 2025-26 Houston Rockets page, accessed July 9, 2026: https://www.basketball-reference.com/teams/HOU/2026.html
- NBA.com Rockets game notes PDF, accessed July 9, 2026: https://www.nba.com/gamenotes/rockets.pdf
- NBA.com, "Kevin Durant traded to Rockets as part of historic 7-team deal", accessed July 9, 2026: https://www.nba.com/news/kevin-durant-joins-rockets-7-team-trade
- NBA.com Houston Rockets team page/current roster, accessed July 9, 2026: https://www.nba.com/team/1610612745/rockets
- NBA.com, "Rockets' Fred VanVleet reportedly tears ACL, could miss entire season", accessed July 9, 2026: https://www.nba.com/news/rockets-fred-vanvleet-tears-acl
- NBA.com, "Rockets, Marcus Smart reportedly agree to 2-year deal", accessed July 9, 2026: https://www.nba.com/news/marcus-smart-free-agency-2026
- NBA.com, "Bogdan Bogdanovic signs with Rockets on 1-year deal", accessed July 9, 2026: https://www.nba.com/news/bogdan-bogdanovic-rockets-free-agency
- NBA.com, "NBA Free Agency Roundup: Recap all the moves from the first week", accessed July 9, 2026: https://www.nba.com/news/2026-nba-offseason-roundup
- NBA.com, "NBA Offseason: Every free agency deal, extension & trade for all 30 teams", accessed July 9, 2026: https://www.nba.com/news/nba-offseason-deals-2026
- Houston Chronicle, "Houston Rockets: Interesting lineup combinations for next season", accessed July 9, 2026: https://www.houstonchronicle.com/sports/rockets/article/houston-new-lineups-marcus-smart-fred-vanvleet-22334534.php
