---
title: Memphis Grizzlies 2026-27 Research Briefing
created: 2026-07-09
source: web
team: MEM
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Memphis Grizzlies 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 31.8 `mc_mean_wins` |
| Model p10-p90 wins | 25.0-39.0, with `p50_wins` 32.0 |
| Model strength | -7.542 pts/100, `se_strength` 1.45 |
| Playoff probability | 9.5% `make_playoffs_prob` |
| Agent stance | MODEL_ABOUT_RIGHT |
| Strength delta | -0.4 pts/100, judgmental |
| Win delta | -1.0 wins, judgmental |
| Adjusted wins | 30.8 |
| Confidence | 57/100 |
| One-sentence thesis | The corrected 31.8-win prior is broadly calibrated to a post-core, youth-heavy Memphis roster, but I shade slightly down because the public depth chart and local roster context still ask too much of rookie/young creation, Zach Edey's health ramp, and high-minutes deep rotation assumptions. |

## Model Prior

The only authoritative team prior for this briefing is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "MEM"`. It gives Memphis:

- `mc_mean_wins`: 31.8.
- `p10_wins`: 25.0.
- `p50_wins`: 32.0.
- `p90_wins`: 39.0.
- `make_playoffs_prob`: 0.095.
- `strength`: -7.542.
- `se_strength`: 1.45.
- `n_cold_start`: 4.

That corrected prior places Memphis as a low-30s West team with a wide but not chaotic 14-win p10-p90 band. The meta note in the same JSON describes this as the forward 2026-27 projection using an xgboost per-factor per-horizon model plus aging fallback, availability-adjusted player ratings, owner depth-chart inputs, and a 10,000-simulation synthetic-schedule Monte Carlo. I am not using `projection_2026_27_teams.json` as a team-level prior.

For roster context only, the non-authoritative team-detail JSON currently sums the Memphis player rows to 31.79 projected wins, matching the standings row closely. It flags 4 rookies, 2 replacement rows, 4 fallback sources, and `fallback_flags` of `many_rookies` and `many_replacement_rows`. That roster context should be treated as an input audit surface, not a competing team prior.

## Roster And Minutes Read

The public roster story is consistent with a reset. NBA.com reported the 2025 Desmond Bane trade to Orlando for Kentavious Caldwell-Pope, Cole Anthony, and draft capital; the February 2026 Jaren Jackson Jr. trade to Utah; and the June 2026 Ja Morant trade to Portland for Jerami Grant and Kris Murray. Those are not rumors in this briefing; they are sourced transactions. NBA.com also reports Memphis adding Isaiah Stewart and Quinten Post, while selecting Cameron Boozer No. 3 overall.

Roster context from the non-authoritative team-detail JSON says the top projected win contributors are:

| Player | Role | MPG | Exp GP | Net | Proj wins | Flag |
|---|---:|---:|---:|---:|---:|---|
| Zach Edey | starter C | 32.9 | 58 | +2.86 | 6.09 | high uncertainty |
| Cedric Coward | starter SG | 30.9 | 63 | +0.60 | 4.29 | high uncertainty |
| Ty Jerome | rotation PG | 28.3 | 58 | +1.25 | 4.17 | high uncertainty |
| Jaylen Wells | starter SG | 31.9 | 68 | -1.54 | 2.74 | high uncertainty |
| Cam Spencer | deep PG | 29.0 | 62 | -1.10 | 2.69 | high uncertainty |
| Kris Murray | deep SG | 30.0 | 62 | -1.66 | 2.25 | high uncertainty |
| Cameron Boozer | starter | 34.2 | 68 | -2.22 | 2.21 | rookie/cold |
| Scotty Pippen Jr. | rotation PG | 25.2 | 60 | -2.20 | 1.44 | high uncertainty |

The top projected MPG rows are even more fragile: Jerami Grant 35.0, Cameron Boozer 34.2, Edey 32.9, Wells 31.9, Coward 30.9, Kris Murray 30.0, Isaiah Stewart 29.3, and Cam Spencer 29.0. ESPN's public depth chart, accessed July 9, 2026, has a different shape: Scotty Pippen Jr., Coward, Grant, Boozer, and Edey as starters, with Ty Jerome, Jaylen Wells, GG Jackson, Taylor Hendricks, Isaiah Stewart, Quinten Post, and others behind them. That makes the local minutes read useful but unsettled.

Minutes that may be too high:

- Edey at 32.9 MPG and 58 expected games. NBA.com and ESPN both document a left ankle stress reaction in 2025-26 after prior left ankle surgery, and ESPN lists him at 11 games played in 2025-26. His per-minute impact can be real while the 33-MPG target is still aggressive.
- Boozer at 34.2 MPG and 68 expected games. NBA.com describes him as the No. 3 pick with processing, winning, and leadership, but 34 MPG for a rookie frontcourt player on a team with Edey, Stewart, Grant, and Post is a big role assumption.
- Grant at 35.0 MPG. He is a real veteran wing, but his local model row is negative value and the team context looks developmental. A midseason trade, role cap, or youth-priority rotation would pull this down.
- Kris Murray and Cam Spencer near 30 MPG despite `deep` roles. ESPN's public depth chart does not obviously support both receiving full-rotation minutes if the roster is healthy.
- Stewart at 29.3 MPG as a backup frontcourt piece. His defensive/physical value matters, but the Post signing and Edey/Boozer/Grant overlap make that minutes bucket crowded.

Minutes that may be too low:

- Quinten Post is absent from the local player rows I used for roster context, but NBA.com reports the Warriors declined to match Memphis' offer sheet and describes Post as joining the frontcourt. He could absorb real center/stretch minutes.
- Jaylen Wells could beat the local value line if fully recovered. NBA.com called him Memphis' top perimeter defender when reporting his 2025 wrist/concussion injury and expected full recovery.
- KCP is modeled as deep, 24 expected games. NBA.com and ESPN reported he exercised a 2026-27 player option; if he is retained and healthy, he may play more than the local context assumes, though his recent shooting decline and finger surgery are real caveats.

## Six-Factor And Style Read

The authoritative standings JSON does not expose a team six-factor table, so this section uses the non-authoritative roster rows only as context. Weighting player `f` vectors by `mpg * exp_gp`, the local roster context implies approximately:

| Factor | Roster-context value |
|---|---:|
| oTS | -0.823 |
| oTOV | -0.095 |
| oSC | -0.122 |
| dTS | +0.085 |
| dTOV | -0.024 |
| dSC | -0.336 |

The read is intuitive: Memphis has a defensive big-man spine but an offensive skill deficit. Edey's row supplies huge center value through second-chance offense and shot defense, while Stewart also helps shot defense. The concern is that the creation/spacing ecosystem around them is thin. Ty Jerome's ball skill helps; Walter Clayton Jr. has a real shooting/pick-and-roll background; Coward flashed enough scoring to lead the 2025-26 Grizzlies in ESPN's team leaders; but a Pippen/Coward/Grant/Boozer/Edey type starting group does not have a proven high-level primary engine.

This creates a fit question the aggregate model may not fully capture: if Edey, Boozer, Stewart, Grant, and Post all deserve frontcourt minutes, Memphis can be big and physical, but spacing, late-clock creation, and transition defense after turnovers become harder. If the team plays smaller and gives guards more time, the frontcourt surplus loses some of its theoretical value.

## Main Challenge To The Model

My stance is `MODEL_ABOUT_RIGHT`, with a small downside adjustment. The corrected prior is no longer making the old mistake of treating Memphis like a mid-tier playoff team. A 31.8-win mean with only a 9.5% playoff probability is already skeptical of the roster. The public evidence supports that skepticism: Memphis has traded away Bane, Jaren Jackson Jr., and Morant; finished 25-57 in 2025-26 per ESPN; and is leaning on a rookie No. 3 pick, a center coming off ankle issues, newly acquired veterans, and several low-sample guards/wings.

The small negative adjustment comes from three mechanisms:

1. Creation is still the scarce skill. Ty Jerome and Walter Clayton Jr. can run offense, but neither is a proven full-season lead creator on a good team. ESPN's public depth chart has Scotty Pippen Jr. as the starting PG, which is a warning sign for half-court efficiency if that holds.
2. The local roster context gives high minutes to players whose roles are not stable. Grant, Boozer, Edey, Murray, Stewart, and Spencer all carry aggressive minute assumptions relative to public depth-chart ambiguity.
3. Availability and organizational incentives point downward. Edey's ankle history, KCP's finger surgery, Ty Jerome's ankle absences late in 2025-26, Jaylen Wells' severe 2025 injury, and the possibility of more rebuilding moves all make the path to 34-36 wins more fragile than the player-row sum suggests.

The main reason not to move further down is that the roster is not empty. Edey's impact signals are strong if healthy; Boozer is a premium rookie prospect; Coward had real 2025-26 production; Grant, Stewart, Post, KCP, Wells, Jerome, and Clayton are actual NBA rotation names. That is enough to keep the adjustment modest.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The corrected prior is already pessimistic enough to avoid a big downward move. | Authoritative local JSON: 31.8 mean wins, 25.0-39.0 band, -7.542 strength, 9.5% playoff odds, 4 cold-starts. | neutral | 0.0 wins | 90 |
| Memphis' old core is gone, so a playoff-adjacent prior would be wrong. | NBA.com reported Bane to Orlando in 2025, Jaren Jackson Jr. to Utah in 2026, and Morant to Portland in 2026. All sources accessed July 9, 2026. | hurts | -1.0 wins | 88 |
| The frontcourt has legitimate NBA talent, limiting downside. | NBA.com reports Boozer at No. 3, Edey returning from high-production minutes before ankle recurrence, Stewart acquired from Detroit, Grant acquired from Portland, and Post joining after Golden State declined to match. | helps | +1.0 wins | 70 |
| Edey's projected 32.9 MPG is an availability and conditioning stretch. | NBA.com reported a left ankle stress reaction after prior surgery; ESPN lists 11 games and 25.8 MPG in 2025-26. Accessed July 9, 2026. | hurts | -0.8 wins | 76 |
| Primary creation is the roster's biggest basketball hole. | ESPN depth chart lists Scotty Pippen Jr. as starting PG and Ty Jerome as backup; local roster context has Pippen -2.20 net and Jerome only 58 expected games. | hurts | -0.7 wins | 65 |
| Boozer could make the model too low if he is immediately efficient. | NBA.com describes Boozer as a high-IQ No. 3 pick with elite passing/processing and a long winning track record. | helps | +0.6 wins | 58 |
| Quinten Post is missing from the local roster-context rows and could add stretch-big minutes. | NBA.com reports the Warriors declined to match Memphis' offer sheet; ESPN depth chart lists Post behind Edey/Stewart at center. | helps | +0.4 wins | 62 |
| Several local minutes rows look like allocation artifacts more than stable basketball roles. | Non-authoritative team detail has `deep` players Kris Murray at 30.0 MPG and Cam Spencer at 29.0 MPG while ESPN's depth chart crowds their positions. | hurts | -0.6 wins | 72 |
| KCP retention is a two-way uncertainty, not a clean positive. | NBA.com/ESPN report his player option; ESPN notes finger surgery, missed final 31 games, and a recent 3P decline. | neutral | -0.1 wins | 68 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Zach Edey | Starter, 32.9 MPG, 58 GP, +2.86 net, 6.09 wins | Upside if his rim/paint value holds; downside if ankle recovery caps games/minutes or foul/conditioning issues keep him closer to mid-20s MPG. | He is the single biggest local win contributor and the defense/second-chance anchor. |
| Cameron Boozer | Starter, 34.2 MPG, 68 GP, rookie/cold, -2.22 net, 2.21 wins | NBA.com's draft profile supports real feel and passing upside, but 34 MPG for a rookie frontcourt piece is aggressive. | If he is ready, the model could be low; if rookie defense/spacing takes time, Memphis' offense stays cramped. |
| Cedric Coward | Starter, 30.9 MPG, 63 GP, +0.60 net, 4.29 wins | Strong local value and ESPN team-leader production, but his role changes with Boozer/Grant/Wells/KCP around him. | His shot creation and wing defense are central to whether the guard/wing group is merely young or genuinely above replacement. |
| Ty Jerome | Rotation PG, 28.3 MPG, 58 GP, +1.25 net, 4.17 wins | Productive scoring/assist profile, but late-season ankle absences and a bigger creation burden make 28 MPG less certain. | Memphis needs him to organize half-court offense; if he misses time, the PG depth tilts toward Pippen/Clayton/Spencer. |
| Scotty Pippen Jr. | Rotation PG, 25.2 MPG, 60 GP, -2.20 net, 1.44 wins | ESPN lists him as starting PG, which could mean more minutes than local context and lower offensive efficiency than a Jerome-led lineup. | A starting-PG role for Pippen lowers the offensive ceiling unless his shooting and decision-making jump. |
| Jaylen Wells | Starter, 31.9 MPG, 68 GP, -1.54 net, 2.74 wins | NBA.com said he was Memphis' top perimeter defender before his wrist/concussion/facial injury; recovery and offensive role are swing factors. | A healthy Wells can stabilize the wing defense and reduce bad veteran/deep minutes. |
| Jerami Grant | Rotation SF, 35.0 MPG, 56 GP, -3.20 net, 0.87 wins | The local row gives massive minutes but poor value; public context says he arrived in the Morant trade, and a rebuild could cap or trade his role. | If he plays 30+ real minutes at negative value, the prior may be high; if he is moved or used selectively, youth outcomes matter more. |
| Isaiah Stewart | Rotation C, 29.3 MPG, 60 GP, -2.56 net, 1.35 wins | NBA.com bio supports shooting/rim-defense value but also lists only 46 games in 2025-26 and multiple injuries/suspension absences. | His role overlaps with Edey, Boozer, Grant, and Post; role compression could change both defense and spacing. |
| Quinten Post | Not in local roster-context rows used here | NBA.com says he joins Memphis after Golden State declined to match; stretch-big shooting could soak up minutes currently assigned elsewhere. | Missing him likely understates frontcourt spacing/depth, but it also makes the roster even more crowded. |
| Kentavious Caldwell-Pope | Deep, 26.0 MPG when used, 24 GP, -1.71 net, 0.55 wins | Exercised option, but ESPN notes finger surgery and a two-year shooting decline. | Could be a useful stabilizer or a buyout/trade/decline case; either outcome changes wing minutes. |
| Walter Clayton Jr. | Starter PG, 25.7 MPG, 68 GP, -2.85 net, 1.10 wins | NBA.com's draft profile praises shooting and pick-and-roll play; local value is quite negative. | A shooting/creation rookie leap is one of the cleanest paths to beating 31.8 wins. |
| Cam Spencer / Kris Murray | Deep labels but 29-30 MPG in local context | Public depth chart competition makes these minutes look unstable. | If these are over-allocated, the model may be mispricing the back half of the rotation. |

## Adjustment Logic

I am applying a judgmental adjustment of -0.4 pts/100, roughly -1.0 wins, because the corrected prior already captures most of the reset but still appears slightly optimistic about how cleanly the minutes convert into wins.

The rough bridge:

- Start at 31.8 model wins.
- Add +0.7 wins for positive public context not fully captured in the local roster-context rows: Post's arrival, Boozer's premium prospect profile, and the possibility that Wells/KCP stabilize wing defense.
- Subtract -0.8 wins for Edey's health/minutes risk relative to 32.9 MPG and 58 expected games.
- Subtract -0.6 wins for lead-guard/creation fragility if ESPN's Pippen-starting depth chart is close to reality.
- Subtract -0.3 wins for role churn/trade/youth-priority incentives around Grant, KCP, Stewart, Murray, and Spencer.

Net: -1.0 wins, adjusted wins 30.8. This is not a simulation or a replacement model output. It is a research adjustment around the corrected prior.

## Counter-Thesis

The strongest argument against my slight downside is that the model may actually be low. The standings JSON has 4 cold-starts and a 14-win p10-p90 band, but the roster has more credible NBA rotation volume than a normal 31-win rebuild: Edey was extremely productive when available, Boozer is a No. 3 pick with an unusually mature skill profile, Coward already led Memphis in points/rebounds among ESPN's 2025-26 team leaders, Jerome can shoot and pass, Wells is a defensive wing, and the Stewart/Post additions make the frontcourt deeper. If Edey plays 60+ games, Boozer is quickly positive, and Memphis keeps Grant/KCP as stabilizers, the team could land in the mid-30s without needing a star-level breakout.

There is also a model-specific counter: the local roster-context rows already penalize Boozer as negative, Clayton as negative, Grant as negative, and Stewart as negative. If the public scouting/role case for any two of those players is better than their rows, the apparent minutes fragility may already be more than priced in.

## What Would Change My Mind

- Training-camp and preseason lineups showing whether Pippen, Jerome, or Clayton is the functional lead guard.
- Updated medical reporting on Edey's ankle and whether he is cleared for normal workload before opening night.
- Confirmation of whether KCP, Grant, Stewart, and Post are all on the opening-night roster or whether Memphis makes another consolidation trade.
- A model rerun that includes Quinten Post in the roster rows and removes stale/deep-minute artifacts if they exist.
- Summer League and preseason signs that Boozer can play high-minute NBA defense next to Edey without spacing problems.
- Any team-reported minute plan that pushes Cam Spencer/Kris Murray below the current local 29-30 MPG context.

## Data Quality And Uncertainty

The largest data-quality issue is source hierarchy. The authoritative prior is only `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. The team-detail JSON is used only for roster rows, player values, cold-start flags, and factor context; it is not used as an independent team prior. In this case, the team-detail win total happens to match the corrected standings row, but that should not be generalized.

The second issue is transaction timing. NBA.com reports Quinten Post joining Memphis after Golden State declined to match, but the local roster-context rows do not include Post. ESPN's depth chart includes Post at center. That likely means the local roster context is not fully updated for the July 8-9, 2026 frontcourt.

The third issue is role volatility. The local rows show every major Memphis contributor as high uncertainty, and the depth chart is crowded with day-to-day tags and recent acquisitions. Memphis' 2026-27 rotation is not training-camp-settled, and the team's incentive may be development/flexibility rather than maximizing November wins.

Finally, the public research confirms some injuries and recoveries, but it does not certify opening-night health. I did not assume any unsourced injury beyond what is cited below.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative MEM team prior only.
- `private-model-workspace/andrewjparkus.github.io/projection_2026_27_teams.json` - non-authoritative roster/player context only; not used for team-level prior.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - non-authoritative curated depth chart context.
- `private-model-workspace/unified-rapm/daily_v5/README.md` - RAPM model overview.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md` - six-factor and uncertainty guide.

External public sources, all accessed July 9, 2026:

- NBA.com, "Magic add Desmond Bane in trade with Grizzlies" - https://www.nba.com/news/magic-grizzlies-trade-bane-caldwell-pope
- NBA.com, "Grizzlies trade Jaren Jackson Jr. to Jazz" - https://www.nba.com/news/jaren-jackson-jr-trade-jazz-2026
- NBA.com, "Trail Blazers add Ja Morant in trade with Grizzlies" - https://www.nba.com/news/blazers-grizzlies-ja-morant-trade
- NBA.com, "Grizzlies trade for Isaiah Stewart, sending picks back to Pistons" - https://www.nba.com/news/grizzlies-pistons-isaiah-stewart-trade-2026-nba-draft
- NBA.com, "Cameron Boozer brings his winning ways to Grizzlies as No. 3 pick" - https://www.nba.com/news/cameron-boozer-winner-grizzlies
- NBA.com, "Reports: Grizzlies sign Quinten Post to 3-year offer sheet" - https://www.nba.com/news/quinten-post-free-agency-2026
- ESPN, Memphis Grizzlies depth chart - https://www.espn.com/nba/team/depth/_/name/mem/memphis-grizzlies
- ESPN, Memphis Grizzlies 2025-26 stats page - https://www.espn.com/nba/team/stats/_/name/mem/memphis-grizzlies
- NBA.com, "Grizzlies' Zach Edey likely out at least a month with his latest ankle injury" - https://www.nba.com/news/grizzlies-zach-edey-ankle-injury
- ESPN, Zach Edey player page - https://www.espn.com/nba/player/_/id/4600663/zach-edey
- NBA.com, "Grizzlies rookie Jaylen Wells breaks wrist, exits game on stretcher after hard fall" - https://www.nba.com/news/grizzlies-jaylen-wells-injury
- NBA.com, Ty Jerome player page - https://www.nba.com/player/1629660/ty-jerome
- NBA.com, Cedric Coward player page - https://www.nba.com/player/1642907/cedric-coward
- NBA.com, Walter Clayton Jr. player page - https://www.nba.com/player/1642383/walter-clayton-jr
- NBA.com, Walter Clayton Jr. 2025 draft prospect page - https://www.nba.com/draft/2025/prospects/walter-clayton-jr
- NBA.com, Jerami Grant player page - https://www.nba.com/player/203924/jerami-grant
- NBA.com, Isaiah Stewart bio page - https://www.nba.com/player/1630191/isaiah-stewart/bio
- NBA.com, Kentavious Caldwell-Pope player page - https://www.nba.com/player/203484/kentavious-caldwell-pope
- ESPN, "Sources: Caldwell-Pope opts into $21.6M deal with Grizzlies" - https://www.espn.com/nba/story/_/id/49120723/sources-caldwell-pope-opts-216-million-deal-grizzlies
