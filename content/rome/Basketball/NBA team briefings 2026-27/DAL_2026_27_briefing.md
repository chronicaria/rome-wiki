---
title: Dallas Mavericks 2026-27 Research Briefing
created: 2026-07-09
source: web
team: DAL
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Dallas Mavericks 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 34.4 (`mc_mean_wins`) |
| Model p10-p90 wins | 28.0-41.0 (`p50_wins` 34.0) |
| Model strength | -6.294 pts/100 (`se_strength` 1.414) |
| Playoff probability | 19.2% (`make_playoffs_prob` 0.192; play-in/top-10 probability 49.3%) |
| Agent stance | MODEL_ABOUT_RIGHT |
| Strength delta | -0.3 pts/100, judgmental |
| Win delta | -1.0 wins, judgmental |
| Adjusted wins | 33.4 |
| Confidence | 55/100 |
| One-sentence thesis | The corrected 34.4-win prior is already appropriately skeptical for a 26-win team built around a second-year star and two major health bets, but I trim it slightly because the rotation context still appears stale around Khris Middleton and optimistic on Kyrie Irving/Dereck Lively II availability. |

## Model Prior

Authoritative prior source: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "DAL"`. I did not use `projection_2026_27_teams.json` for Dallas' team-level prior because the corrected instruction says the standings JSON is the only authoritative prior.

Required quoted fields:

| Field | Authoritative value |
|---|---:|
| `mc_mean_wins` | 34.4 |
| `p10_wins` | 28.0 |
| `p50_wins` | 34.0 |
| `p90_wins` | 41.0 |
| `make_playoffs_prob` | 0.192 |
| `strength` | -6.294 |
| `se_strength` | 1.414 |
| `n_cold_start` | 4 |

The corrected standings prior puts Dallas 10th in the West by projected wins, with a 49.3% play-in/top-10 probability. The model metadata describes this as a 2026-27 forward projection using `xgboost (per-factor per-horizon) + aging fallback`, curated depth-chart minutes, availability adjustment, and a 10,000-simulation Monte Carlo over synthetic schedules. The p10-p90 band is 13 wins wide, which is appropriate for a team with four cold-start players and several high-leverage availability assumptions.

Important source conflict: the richer team-detail JSON currently has a non-authoritative Dallas team line of 33.3 wins and +1.454 strength, while the corrected standings row has 34.4 wins and -6.294 strength. Per instruction, I ignore the team-detail team-level values and use that file only for roster-context pressure points.

## Roster And Minutes Read

Non-authoritative roster-context rows from `projection_2026_27_teams.json` list these top projected win contributors: Kyrie Irving 8.95, Dereck Lively II 5.93, Naji Marshall 4.97, Cooper Flagg 4.52, P.J. Washington 3.22, Dwight Powell 1.36, Ryan Nembhard 0.98, Daniel Gafford 0.85. These are not a team prior; they are useful only for understanding which assumptions the model-like roster packet is leaning on.

Top projected MPG in that same roster context: Cooper Flagg 27.2, Kyrie Irving 27.0, Naji Marshall 27.0, P.J. Washington 27.0, Dereck Lively II 25.8, Max Christie 12.9, Santi Aldama 12.8, Khris Middleton 12.4, Daniel Gafford 12.2, Klay Thompson 12.1, Ryan Nembhard 12.1, Dwight Powell 11.6, Morez Johnson 10.3.

The first major minutes challenge is health. The roster context gives Irving 56 expected games and 27.0 MPG even though NBA.com reported that he missed the entire 2025-26 season while recovering from ACL reconstruction. Lively is assigned 51 expected games and a +1.95 net rating, but NBA.com player news on June 26, 2026 said he still had not progressed to running after right-foot surgery. Those two players account for a large share of the positive roster-context value.

The second major minutes challenge is roster staleness. The roster-context file still includes Khris Middleton for 12.4 MPG, 28 expected games, and 0.53 projected wins, but public reporting and the Mavericks' official transaction page say Dallas acquired Santi Aldama, Tarik Biberovic's rights, and Marcus Sasser in the Middleton-related multi-team deal. I therefore treat Middleton's row as stale and not part of the live Dallas rotation.

The third challenge is frontcourt congestion. ESPN's Dallas depth chart shows Flagg, Washington, Lively, Gafford, Aldama, Morez Johnson, and several wings/frontcourt hybrids all competing for finite frontcourt minutes. That makes Lively/Gafford/Morez/Aldama/Washington minute allocation fragile, especially if Lively is not fully ready or if Dusty May tries to raise pace and passing without sacrificing spacing.

Cold-start and low-data context: the corrected standings row has `n_cold_start = 4`. The depth chart has no-pid entries for Morez Johnson, Toibu Lawal, Vsevolod Ishchenko, and Sergio De Larrea. The non-authoritative roster context flags Morez as a rookie/cold row and Sergio, Vsevolod, and Toibu as replacement/cold rows with very wide bands.

## Six-Factor And Style Read

The corrected authoritative standings JSON does not provide team six-factor splits. The public `team2027.html` computes them client-side from roster rows as an `mpg * exp_gp` weighted average of player factor vectors, scaled by five on-court players. Using that method on the non-authoritative roster-context rows gives:

| Factor | Roster-context value |
|---|---:|
| oTS | -0.1 |
| oTOV | +1.1 |
| oSC | -0.7 |
| dTS | +1.9 |
| dTOV | -0.6 |
| dSC | +0.0 |
| Sum | +1.7 |

This profile conflicts with the corrected prior's `strength = -6.294`, so I treat it only as a style hint, not as a second team forecast. Interpreted cautiously, the roster-context profile says Dallas is supposed to protect the ball and defend shots, while struggling to create second chances and force turnovers. That fits the live roster tension: Flagg, Washington, Aldama, Lively, Gafford, and Morez provide size, but the team still needs enough creation, spacing, and healthy guard play to avoid a half-court offense that bogs down.

## Main Challenge To The Model

My stance is `MODEL_ABOUT_RIGHT`, with a small downside adjustment. The corrected 34.4-win prior is not an aggressive hype projection; it is only an 8.4-win improvement from Dallas' 26-56 2025-26 record shown on ESPN, despite Cooper Flagg's strong rookie season and a possible Kyrie return. That skepticism is directionally sensible.

The best downside challenge is that the path to 34-35 wins still depends on two medical/role assumptions that are easy to overstate: Irving being a high-value 35-year-old lead guard after a missed season, and Lively being ready to provide starter-level center value after a right-foot surgery and late-June running limitation. The current public roster also makes the Middleton row stale, and replacing theoretical Middleton minutes with Sasser/rookie/deep-bench minutes probably raises volatility more than it raises the median.

The best upside challenge is Flagg. ESPN lists him at 21.0 points, 6.7 rebounds, and 4.5 assists as a rookie, and NBA.com player news says he won 2025-26 Rookie of the Year and made All-Rookie First Team. The non-authoritative roster context rates him near neutral, so a real second-year leap could beat that assumption by multiple wins. Aldama also gives Dallas a live 7-foot forward with recent 14.0/6.7/2.9 production, and Dusty May's stated pace/passing/defensive identity could clean up last year's low-assist, low-three-volume profile.

On balance, the corrected prior already prices a lot of bad news. I would not push Dallas much lower than 34 wins without firmer evidence that Kyrie or Lively will miss major time again. I trim only one win.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The authoritative prior is a low, play-in-borderline view rather than a bullish team-page carryover. | Corrected standings row: `mc_mean_wins = 34.4`, p10-p90 28.0-41.0, `make_playoffs_prob = 0.192`, `strength = -6.294`, `n_cold_start = 4`. | neutral | 0.0 wins | 100 |
| Kyrie Irving's 56 expected games and top-contributor value are fragile. | NBA.com reported Irving would miss the entire 2025-26 season while recovering from ACL reconstruction, and his NBA.com player page says the surgery was March 26. | hurts | -1.2 wins | 70 |
| Lively's starter-level center assumption is high variance. | NBA.com player news says Lively had right-foot surgery in December 2025 and, as of June 26, 2026, still had not progressed to running. | hurts | -0.8 wins | 68 |
| Cooper Flagg can plausibly beat the roster-context rating. | ESPN lists Flagg's 2025-26 line at 21.0 PPG, 6.7 RPG, 4.5 APG, and NBA.com says he won Rookie of the Year. The non-authoritative roster context gives him only -0.13 net. | helps | +1.2 wins | 64 |
| Santi Aldama probably deserves more than the roster-context 12.8 MPG/27 expected games if healthy. | NBA.com lists Aldama at 14.0 PPG, 6.7 RPG, 2.9 APG, and the Mavericks announced his acquisition with Marcus Sasser and Biberovic's rights. | helps | +0.5 wins | 58 |
| The live roster makes the Khris Middleton row stale. | Dallas' official acquisition page and CBS/NBA reporting place Middleton in the multi-team transaction while Aldama/Sasser move to Dallas; the local roster-context file still gives Middleton 12.4 MPG. | hurts | -0.3 wins | 75 |
| Dusty May's scheme could create a real, non-model upside if it raises pace and passing without losing defensive structure. | NBA.com says May was hired after leading Michigan to the 2026 NCAA title; Mavs Moneyball reported May's stated identity goals as top-five pace, competitive defense, and best-in-league passing. | helps | +0.4 wins | 45 |
| The deep rotation is thin and cold-start heavy if injuries hit. | Corrected prior has four cold-start players; local depth chart no-pid names include Morez Johnson, Toibu Lawal, Vsevolod Ishchenko, and Sergio De Larrea. | hurts | -0.8 wins | 65 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Kyrie Irving | Non-authoritative roster context: starter, 27.0 MPG, 56 exp GP, +3.39 net, 8.95 projected wins. | ACL recovery and age-35 season make both games played and burst/defensive value uncertain; upside is that even a 50-game version stabilizes Dallas' creation. | He is the largest single swing between a bottom-five offense and a competent play-in offense. |
| Cooper Flagg | Starter, 27.2 MPG, 69 exp GP, -0.13 net, 4.52 projected wins in roster context. | His rookie box production and ROY profile suggest the rating may be too conservative if Year 2 shooting/creation improves; 29.5% rookie three-point shooting is the counterweight. | If Flagg is already a positive star, the corrected 34.4-win prior may be too low. |
| Dereck Lively II | Starter, 25.8 MPG, 51 exp GP, +1.95 net, 5.93 projected wins. | Foot surgery and late-June non-running status make a starter workload risky; Morez/Gafford/Aldama competition also clouds role. | Dallas' defensive ceiling depends heavily on whether Lively is healthy enough to anchor. |
| P.J. Washington | Starter, 27.0 MPG, 60 exp GP, -0.55 net, 3.22 projected wins. | ESPN lists him as day-to-day, and the roster has overlapping forwards/bigs who may squeeze his clean role; still a useful two-way connector if spacing holds. | Washington is the hinge between big, defensive lineups and cramped half-court lineups. |
| Naji Marshall | Starter, 27.0 MPG, 72 exp GP, +0.03 net, 4.97 projected wins. | The roster-context file gives him a large durability/role share, but Flagg/Aldama/Christie/Washington could cut into wing minutes. | If Marshall plays 72 games at neutral value, the floor is steadier; if his role shrinks, replacement quality matters. |
| Santi Aldama | Rotation, 12.8 MPG, 27 exp GP, -0.86 net, 0.57 projected wins. | Public NBA.com stats and the Mavericks' trade investment imply he may have a larger role than the context file gives him, though prior knee issues and defense cap the upside. | He is the cleanest candidate to raise spacing and frontcourt skill without relying on Klay minutes. |
| Klay Thompson | Rotation, 12.1 MPG, 39 exp GP, -1.44 net, 0.51 projected wins. | ESPN lists 11.7 PPG and 39.3 FG% in 2025-26; the model already marks him as a negative, but a new coach must resist reputation minutes. | Too many Klay minutes could undercut May's defensive and pace goals; a smaller specialist role is manageable. |
| Max Christie | Rotation, 12.9 MPG, 46 exp GP, -1.86 net, 0.39 projected wins. | ESPN lists 12.3 PPG on 44.1 FG%; if he defends and shoots enough, he may be under-credited versus the very negative roster-context net. | Christie could absorb some guard/wing minutes if Sasser is not ready or Klay declines further. |
| Daniel Gafford | Rotation, 12.2 MPG, 34 exp GP, -0.46 net, 0.85 projected wins. | NBA.com notes added competition from Morez Johnson, but Gafford may need more minutes if Lively is delayed. | Backup-center allocation can swing several regular-season games if Lively misses time. |
| Morez Johnson | Rotation, 10.3 MPG, 34 exp GP, rookie/cold, -1.11 net, 0.49 projected wins. | NBA draft profile calls him a depth frontcourt option with physical, high-motor, switchable defensive traits; cold-start uncertainty is large. | He is both injury insurance and a possible spacing drag if pressed into heavy minutes early. |

## Adjustment Logic

I am applying a judgmental adjustment of -0.3 pts/100, roughly -1.0 win, because the corrected prior already moved Dallas down to a skeptical 34.4-win baseline, but the most concrete current research items are slightly negative: Kyrie is coming off a full missed season, Lively's foot recovery was still not at a running stage in late June, the roster-context file still has stale Middleton minutes, and the deep bench has four cold-start names.

I am not treating the non-authoritative roster-detail team's +1.454 strength as valid. I am also not giving the full downside implied by Irving/Lively injury risk because the upside case is real: Flagg may already be better than his roster-context net, Aldama may be under-minuted, and May's staff could create a cleaner offensive identity. The final adjusted view is 33.4 wins, not a new simulation.

## Counter-Thesis

The strongest argument against my small downside trim is that the model may actually be too low. Flagg's rookie production and awards profile point toward a player who can leap from "neutral young starter" to clear positive. Dallas also had a 26-win season with Kyrie absent; even an imperfect Kyrie return gives them late-clock shot creation that last year's patchwork backcourt lacked. Aldama/Sasser add live rotation options, and May's pace/passing goals are coherent with a roster that has more frontcourt passing and more transition athleticism than the 2025-26 Mavericks. If Kyrie is healthy by opening night and Lively is running without setbacks in camp, 38-40 wins is a plausible outcome inside the model's p90 range.

## What Would Change My Mind

- Kyrie Irving camp reports showing unrestricted participation, normal burst, and no planned early-season games limit.
- Dereck Lively II progressing from non-running to full-speed practice and preseason contact without foot setbacks.
- Updated depth chart removing Khris Middleton and assigning real Sasser/Aldama/Morez minutes.
- Dusty May preseason rotations showing Flagg as a high-usage initiator with enough shooting around him.
- Transaction follow-up that turns one crowded frontcourt piece into a healthier guard or wing creator.
- A corrected model rerun where the team-detail roster rows and authoritative standings row use the same Dallas prior.

## Data Quality And Uncertainty

The most important data-quality issue is source separation. The only authoritative team-level prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. The richer `projection_2026_27_teams.json` is useful for roster/minutes diagnostics but currently conflicts with the corrected standings prior at the team level, so I did not use its Dallas `proj_wins`, `p10`, `p50`, `p90`, `playoff_prob`, or `strength` as the model prior.

The roster-context file also appears stale because it includes Khris Middleton while public Mavericks/NBA reporting says Dallas acquired Aldama/Sasser through the Middleton-related multi-team transaction. Online depth charts are volatile in early July, and day-to-day/GTD tags on ESPN are not the same as season availability forecasts. The exact win delta should therefore be treated as low-precision.

The prior itself has wide uncertainty: `se_strength = 1.414`, p10-p90 width 13 wins, and `n_cold_start = 4`. That is a large enough band that my -1.0 win adjustment is a small lean, not a strong disagreement.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative DAL prior row, accessed July 9, 2026.
- `private-model-workspace/andrewjparkus.github.io/projection.html` - public standings page code reading `projection_2026_27.json`, accessed July 9, 2026.
- `private-model-workspace/andrewjparkus.github.io/team2027.html` - team page factor/roster display logic, accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` - roster context only; team-level prior not used, accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - curated depth-chart rows, accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/README.md` - model-output overview, accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md` - model methodology overview, accessed July 9, 2026.

External public sources:

- https://www.espn.com/nba/team/depth/_/name/dal - ESPN Dallas depth chart and 2025-26 record, accessed July 9, 2026.
- https://www.nba.com/news/kyrie-irving-wont-return-2025-26-season - NBA.com/AP report on Kyrie Irving missing 2025-26 while recovering from ACL injury, accessed July 9, 2026.
- https://www.nba.com/player/202681/kyrie-irving - NBA.com Kyrie Irving player page/news, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/5041939/cooper-flagg - ESPN Cooper Flagg profile and 2025-26 stats, accessed July 9, 2026.
- https://www.nba.com/player/1642843/cooper-flagg - NBA.com Cooper Flagg player page/news and awards, accessed July 9, 2026.
- https://www.nba.com/player/1641726/dereck-lively-ii - NBA.com Dereck Lively II player page/news, accessed July 9, 2026.
- https://www.nba.com/news/mavericks-dereck-lively-foot-injury - NBA.com report on Lively foot injury, accessed July 9, 2026.
- https://www.nba.com/player/1629655/daniel-gafford - NBA.com Daniel Gafford player page/news, accessed July 9, 2026.
- https://www.nba.com/mavs/news/mavericks-acquire-santi-aldama-tarik-biberovic-and-marcus-sasser - Mavericks official acquisition news, accessed July 9, 2026.
- https://www.nba.com/player/1630583/santi-aldama - NBA.com Santi Aldama player page/stats, accessed July 9, 2026.
- https://www.cbssports.com/nba/news/khris-middleton-six-team-trade-nba-wizards-mavericks-clippers-grizzlies-pistons-bucks/ - CBS Sports six-team trade explainer, accessed July 9, 2026.
- https://www.nba.com/news/mavs-hire-dusty-may-coach - NBA.com report on Dusty May hire, accessed July 9, 2026.
- https://www.mavsmoneyball.com/mavericks-analysis/60412/dusty-may-cooper-flagg-kyrie-irving-morez-johnson-santi-aldama-willie-green - Mavs Moneyball report on May's stated team identity, accessed July 9, 2026.
- https://www.nba.com/draft/2026/prospects/morez-johnson-jr - NBA.com Morez Johnson Jr. draft profile, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/4278078/pj-washington - ESPN P.J. Washington profile/stats/status, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/6475/klay-thompson - ESPN Klay Thompson profile/stats, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/4432582/max-christie - ESPN Max Christie profile/stats, accessed July 9, 2026.
