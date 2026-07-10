---
title: San Antonio Spurs 2026-27 Research Briefing
created: 2026-07-09
source: web
team: SAS
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# San Antonio Spurs 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 54.0 |
| Model p10-p90 wins | 48.0-60.0 |
| Model strength | +2.312 pts/100 |
| Playoff probability | 99.7% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +0.8 pts/100, judgmental |
| Win delta | +2.5 wins, judgmental |
| Adjusted wins | 56.5 |
| Confidence | 58/100 |
| One-sentence thesis | The corrected prior is appropriately cautious after a long Finals run, but it appears a little too conservative on Wembanyama's two-way ceiling, the Wembanyama-Harper pairing, and the depth/fit gains from a more settled frontcourt. |

## Model Prior

Authoritative prior source: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "SAS"`.

Required quoted prior fields:

| Field | Value |
|---|---:|
| `mc_mean_wins` | 54.0 |
| `p10_wins` | 48.0 |
| `p50_wins` | 54.0 |
| `p90_wins` | 60.0 |
| `make_playoffs_prob` | 0.997 |
| `strength` | 2.312 |
| `se_strength` | 1.356 |
| `n_cold_start` | 4 |

The corrected standings prior sees San Antonio as a 54.0-win Western contender with a 48.0-to-60.0 win central band, a 99.7% playoff probability, and +2.312 strength. It is therefore not sleeping on the Spurs in the playoff race; the question is whether the mean and strength are too conservative for a team that just went 62-20 and reached the 2026 NBA Finals.

I did not use `projection_2026_27_teams.json` as a team-level prior. Its aggregate team fields are treated as non-authoritative and not used for projected wins, strength, playoff odds, or win band. I use it only as roster/minutes context below, because the instruction permits roster context if explicitly flagged non-authoritative.

## Roster And Minutes Read

Non-authoritative roster/minutes context from `projection_2026_27_teams.json` has San Antonio's top projected win contributors as Victor Wembanyama (12.56), Dylan Harper (10.07), Tobias Harris (9.08), Julian Champagnie (8.63), De'Aaron Fox (7.29), Luke Kornet (1.65), Jordan McLaughlin (1.41), Devin Vassell (1.38), and Stephon Castle (1.35). The same context lists the highest projected MPG as Fox (27.6), Wembanyama (27.2), Harris (27.1), Champagnie (27.1), Harper (26.5), Vassell (13.4), Castle (13.3), Barnes (12.8), Johnson (12.6), Kornet (12.4), Bryant (11.5), and David Jones Garcia (11.1).

The minutes read is the biggest reason not to make a larger upward adjustment. The model context assigns real value to Harris, Champagnie, and Harper, yet every core rotation player in the file is marked `high_uncertainty`. Wembanyama is projected for 61 expected games, Fox for 68, Harris for 67, Harper for 72, Champagnie for 80, Vassell for only 37, and Castle for 43. That is a plausible injury/rest-aware baseline, but it leaves upside if Wembanyama and Vassell are healthier and downside if last year's long season carries over.

The current public roster also supports treating the Spurs as deep but still unfinished. NBA.com's team page lists Wembanyama, Harper, Fox, Castle, Kornet, Olynyk, Tarris Reed Jr., Carter Bryant, Tobias Harris, Biyombo, Jayden Quaintance, Devin Vassell, Champagnie, Barnes, Mason Plumlee, and others on the roster; Pounding The Rock reported on July 8, 2026 that San Antonio had 13 of 15 roster spots filled after Champagnie, Barnes, Harris, and two rookie bigs, with open decisions still remaining at the back of the roster. That makes the top-end case stronger than the injury-contingency case.

## Six-Factor And Style Read

Using only non-authoritative roster rows as context, a season-minutes-weighted read of player factor vectors gives an approximate profile of `oTS +0.63`, `oTOV +0.40`, `oSC +0.01`, `dTS +1.03`, `dTOV -0.17`, and `dSC +0.34`. I treat this as an inferred style read, not a team prior.

That shape is coherent with the public basketball evidence: the Spurs' identity is Wembanyama-driven defensive shot quality suppression, plus enough offensive efficiency from Fox/Harper/Vassell/Champagnie/Harris to survive without being an elite turnover-forcing team. The possible miss is that individual defensive factors may still understate lineup-specific terror around Wembanyama when the Spurs can surround him with size, passing, and enough shooting. The counter-miss is offensive hierarchy: Fox, Harper, Castle, and Wembanyama all need touches, and the Finals exposed late-clock strain.

## Main Challenge To The Model

My main challenge is that 54.0 wins and +2.312 strength look slightly low for a finalist whose best player is still improving and whose strongest public indicators point to a scalable defense. NBA.com's Finals coverage described Wembanyama's season at 25.0 points, 11.5 rebounds, 3.1 assists, 3.1 blocks, 51.2% shooting, and 34.9% from three, and reported that San Antonio was +16.7 per 100 with him on court in the playoffs while roughly break-even without him. That is not just star production; it is a team-construction force.

The specific mechanism is not "Spurs are good." It is that a Wembanyama-led defense with Harper/Castle/Champagnie/Vassell/Barnes/Harris-style size around it can keep a very high regular-season floor, while the corrected prior may be baking in too much regression from a 62-win Finals team. I am not adjusting them anywhere near last year's 62 wins, because Wembanyama fatigue, Fox's late-game decision burden, and backup-big reliability are real risks. But a modest move from 54.0 to 56.5 is justified.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The corrected prior is lower than a naive finalist baseline. | NBA's 2026 draft profile lists the Spurs' 2025-26 season as 62-20, first in the Southwest, and lost in the NBA Finals. Accessed July 9, 2026: https://www.nba.com/draft/2026/team-profiles/2026-san-antonio-spurs | helps | +1.0 wins | 75 |
| Wembanyama's on/off-style impact supports a very high floor. | NBA Finals preview coverage reported San Antonio at +16.7 per 100 with Wembanyama on court in the playoffs and break-even when he was not. Accessed July 9, 2026: https://www.nba.com/news/spurs-return-to-finals-new-team-old-team | helps | +1.0 wins | 70 |
| Wembanyama workload and late-series fatigue are real downside risks. | NBA's post-Finals maturation piece noted Wembanyama's Finals minutes jump and fourth-quarter efficiency drop over the longest season of his career. Accessed July 9, 2026: https://www.nba.com/news/next-steps-in-maturation-await-spurs-after-run-to-nba-finals | hurts | -0.8 wins | 72 |
| The Fox/Harper guard hierarchy may be unsettled but has upside. | NBA.com reported Wembanyama-Fox at -1.2 net in the first four Finals games, while Wembanyama-Harper was +9.8, and described the late-game debate around Fox's veteran ballhandling. Accessed July 9, 2026: https://www.nba.com/news/3-things-to-watch-knicks-spurs-game-5 | mixed | +0.3 wins | 62 |
| Harris/Barnes/Olynyk/Kornet give more veteran frontcourt options than a typical young team. | NBA.com's roster page lists Harris signed on 07/06/26, Barnes, Olynyk, Kornet, Reed, Quaintance, Plumlee, and Biyombo among current frontcourt options. Accessed July 9, 2026: https://www.nba.com/team/1610612759/spurs | helps | +0.5 wins | 65 |
| Backup-center reliability remains fragile. | Kornet played 10 minutes in the Finals Game 5 loss, and Pounding The Rock framed the final roster spots as marginal depth/flexibility choices rather than clear rotation upgrades. Accessed July 9, 2026: https://www.nba.com/player/1628436/luke-kornet and https://www.poundingtherock.com/spurs-free-agency-rumors-news/106064/how-the-spurs-should-fill-their-open-roster-spots-in-free-agency | hurts | -0.5 wins | 58 |
| The prior already captures playoff safety. | The authoritative row has `make_playoffs_prob = 0.997`; my disagreement is with mean strength/wins, not postseason qualification. Accessed July 9, 2026: local `projection_2026_27.json` | neutral | 0.0 wins | 90 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Victor Wembanyama | Non-authoritative roster context: starter, 27.2 MPG, 61 expected games, 12.56 projected wins, +6.27 net, high uncertainty | Upside if his 2025-26 DPOY/MVP-level impact sustains over normal minutes; downside if the Finals workload/fatigue signal leads to rest or late-game efficiency drag | He is the team environment; a few extra healthy high-leverage games can move the whole win mean |
| Dylan Harper | Starter, 26.5 MPG, 72 expected games, 10.07 projected wins, +3.70 net, high uncertainty | Public Finals data suggested the Wembanyama-Harper pairing outperformed Wembanyama-Fox in that small sample; still only a second-year guard with development variance | If Harper is already a plus playoff guard, the model's 54-win prior may be low |
| De'Aaron Fox | Starter, 27.6 MPG, 68 expected games, 7.29 projected wins, +2.02 net, high uncertainty | Fox is a proven engine and signed long-term, but public Finals coverage questioned late-game decision-making and the Wembanyama-Fox pairing sample | The closing hierarchy determines whether the Spurs' offense matches their defense |
| Tobias Harris | Starter, 27.1 MPG, 67 expected games, 9.08 projected wins, +3.31 net, high uncertainty | The non-authoritative model context may be too high on a 34-year-old forward, even though NBA.com lists him as a fresh Spurs signing and a useful floor-raiser | A too-generous Harris rating would erase some of my upward adjustment |
| Devin Vassell | Rotation, 13.4 MPG, 37 expected games, 1.38 projected wins, +0.82 net, high uncertainty | The context may understate his role if healthy; NBA Finals coverage called him a two-way player | Extra Vassell minutes would improve spacing and two-way balance |
| Stephon Castle | Rotation, 13.3 MPG, 43 expected games, 1.35 projected wins, +0.31 net, high uncertainty | Public coverage emphasized his defense and playoff role, but offense/spacing and a crowded guard room cap his clean path | Castle can make the defense overwhelming, but too many non-shooting guard minutes can cramp late-game offense |
| Julian Champagnie | Starter, 27.1 MPG, 80 expected games, 8.63 projected wins, +2.19 net, high uncertainty | The model context gives him a major role and a large rotation bump; public Finals coverage noted high-value shooting flashes | If Champagnie is a durable movement-shooting forward, the fit works; if not, the model is overcrediting a fragile rotation assumption |
| Luke Kornet | Rotation, 12.4 MPG, 44 expected games, 1.65 projected wins, +1.05 net, high uncertainty | Useful regular-season big, but his Finals role was limited and illness/availability popped up in NBA.com player news | Backup Wembanyama minutes are the clearest depth stress point |
| Harrison Barnes | Rotation, 12.8 MPG, 47 expected games, 0.70 projected wins, -1.10 net, high uncertainty | NBA.com player news says he returned for 2026-27 after a 2025-26 season of 10.0 points, 2.8 rebounds, and 1.9 assists in 25.8 MPG | If Barnes is merely regular-season depth, fine; if he needs a big role, the ceiling case weakens |
| Jayden Quaintance / Tarris Reed Jr. / Maliq Brown / Ja'Kobi Gillespie | Four cold-start rookies in authoritative prior; non-authoritative context assigns deep roles | Rookie bigs increase long-term optionality but are not bankable 2026-27 rotation answers | Cold-start depth is why I keep the adjustment modest |

## Adjustment Logic

I am applying a judgmental adjustment of +0.8 pts/100, roughly +2.5 wins, because the corrected 54.0-win prior gives appropriate respect to regression risk but likely undershoots the regular-season floor created by Wembanyama's defensive impact, Harper's accelerated development, and a more mature roster around them. This is not a new simulation and it is not an override of Andrew's model. It is a research-layer challenge to the mean.

The adjustment is intentionally small. The Spurs are already at 99.7% playoff probability, so most of the meaningful dispute is not "playoff or not"; it is whether a healthy Wembanyama-led team should sit closer to 56-57 wins than 54. I subtract confidence for Wembanyama fatigue, Fox/Harper/Fox closing fit, Harris age, and backup-center uncertainty.

## Counter-Thesis

The strongest case against `MODEL_TOO_LOW` is that 54.0 wins is already a respectful number after a 62-win Finals season, and the model may be doing exactly what it should: pulling a young finalist back from a peak outcome while pricing a harder fatigue year, injury variance, and a West full of high-end teams. Wembanyama's 2025-26 workload was extreme; NBA's own post-Finals piece highlighted late-game fatigue. Fox's place in closing lineups was publicly questioned during the Finals. Harris and Barnes are older, Kornet is a narrow-use backup, and four cold-start players plus two open roster spots reduce the margin for a long injury stretch. If Wembanyama plays closer to 60 games than 70, or if the offense remains merely good instead of elite, 54.0 may be exactly right.

## What Would Change My Mind

- Training-camp reporting that Wembanyama will be managed below 30 MPG or with scheduled rest.
- A preseason rotation where Fox, Harper, and Castle share too many non-shooting possessions without Vassell or Champagnie spacing.
- A roster move that adds a reliable backup center or, conversely, leaves Kornet/rookie bigs as the only true Wembanyama insurance.
- A model rerun that lowers Harper, Harris, or Champagnie after updated 2025-26 data and minutes are fully incorporated.
- Early regular-season clutch offense: whether Fox-Wembanyama actions are efficient enough to survive playoff-level switching.
- Health updates on Vassell and the veteran frontcourt.

## Data Quality And Uncertainty

The authoritative prior is clean and comes only from `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. I intentionally did not use `projection_2026_27_teams.json` as a team-level prior because the user's instruction says that file is not authoritative for this rerun. Its team aggregate is therefore ignored for model wins/strength/playoff odds. Its roster rows are still useful for challenging minutes, and I label them non-authoritative wherever used.

The roster is still not fully final as of the public July 8-9, 2026 reporting. The Spurs also have a real tension between a regular-season-depth read and a playoff-rotation read: some players who help survive 82 games may be less useful in May and June. This briefing should be treated as a directional challenge, not a replacement forecast.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "SAS"`; accessed July 9, 2026. Authoritative prior for `mc_mean_wins`, `p10_wins`, `p50_wins`, `p90_wins`, `make_playoffs_prob`, `strength`, `se_strength`, and `n_cold_start`.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`, `.teams.SAS.roster`; accessed July 9, 2026. Non-authoritative roster/minutes context only, not used as team-level prior.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, SAS rows; accessed July 9, 2026. Non-authoritative depth-chart context only.

External public sources:

- NBA.com San Antonio Spurs team page/current roster, accessed July 9, 2026: https://www.nba.com/team/1610612759/spurs
- NBA.com 2026 San Antonio Spurs draft profile, accessed July 9, 2026: https://www.nba.com/draft/2026/team-profiles/2026-san-antonio-spurs
- NBA.com, "Spurs draw from championship legacy in their return to Finals stage", accessed July 9, 2026: https://www.nba.com/news/spurs-return-to-finals-new-team-old-team
- NBA.com, "Next steps in maturation await Spurs after run to NBA Finals", accessed July 9, 2026: https://www.nba.com/news/next-steps-in-maturation-await-spurs-after-run-to-nba-finals
- NBA.com, "3 things to watch in Knicks-Spurs Game 5 in San Antonio", accessed July 9, 2026: https://www.nba.com/news/3-things-to-watch-knicks-spurs-game-5
- NBA.com, "Spurs star Victor Wembanyama says he's medically cleared to return after blood clot", accessed July 9, 2026: https://www.nba.com/news/victor-wembanyama-spurs-return-blood-clot
- NBA.com, "De'Aaron Fox signs reported 4-year, $229 million extension with Spurs", accessed July 9, 2026: https://www.nba.com/news/deaaron-fox-spurs-contract-extension
- NBA.com Luke Kornet player page, accessed July 9, 2026: https://www.nba.com/player/1628436/luke-kornet
- NBA.com Tobias Harris player page, accessed July 9, 2026: https://www.nba.com/player/202699/tobias-harris
- NBA.com Harrison Barnes player page, accessed July 9, 2026: https://www.nba.com/player/203084/harrison-barnes
- Pounding The Rock, "How the Spurs should fill their open roster spots in free agency", accessed July 9, 2026: https://www.poundingtherock.com/spurs-free-agency-rumors-news/106064/how-the-spurs-should-fill-their-open-roster-spots-in-free-agency
