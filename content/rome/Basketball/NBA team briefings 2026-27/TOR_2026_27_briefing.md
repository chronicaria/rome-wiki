---
title: Toronto Raptors 2026-27 Research Briefing
created: 2026-07-09
source: web
team: TOR
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Toronto Raptors 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 53.3 |
| Model p10-p90 wins | 47.0-60.0, with p50 53.0 |
| Model strength | +2.107 pts/100, se_strength 1.530 |
| Playoff probability | 98.4% make playoffs; 99.9% make play-in |
| Agent stance | MODEL_TOO_HIGH |
| Strength delta | -1.4 pts/100, judgmental |
| Win delta | -3.3 wins, judgmental |
| Adjusted wins | 50.0 |
| Confidence | 60/100 |
| One-sentence thesis | The Raptors are a legitimate top-East team if the Kawhi Leonard return lands cleanly, but 53.3 wins asks the model to win too many concurrent bets on age-36 Kawhi availability, Quickley's hamstring/foot recovery, Poeltl's health and playoff utility, and a thin frontcourt/deep-bench structure. |

## Model Prior

The only authoritative team prior for this briefing is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "TOR"`.

Authoritative prior fields:

| Field | Value |
|---|---:|
| `mc_mean_wins` | 53.3 |
| `p10_wins` | 47.0 |
| `p50_wins` | 53.0 |
| `p90_wins` | 60.0 |
| `make_playoffs_prob` | 0.984 |
| `strength` | 2.107 |
| `se_strength` | 1.530 |
| `n_cold_start` | 3 |

That puts Toronto third in the East by model mean wins behind Boston and New York. The public JSON describes the projection as a forward 2026-27 model using `xgboost (per-factor per-horizon) + aging fallback`, availability-adjusted player ratings, and a 10,000-simulation Monte Carlo over synthetic schedules. The prior is not a simple "Kawhi narrative" prior; it already reflects uncertainty through a 13-win p10-p90 band and `se_strength` of 1.530.

Important source hygiene: `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` contains a stale/non-authoritative Toronto team line with different team wins and strength. I did not use those team-level wins, strength, or odds. I used only its roster rows as non-authoritative roster/minutes context, and I flag conflicts below.

## Roster And Minutes Read

The curated local depth chart context is: Quickley, Barrett, Kawhi Leonard, Scottie Barnes, and Jakob Poeltl as starters; Jamal Shead, Ja'Kobe Walter, Collin Murray-Boyles, Kyle Anderson, Trayce Jackson-Davis, Jamison Battle, A.J. Lawson, Allen Graves, Alijah Martin, Chucky Hepburn, and Jaden Bradley as the main rotation/deep-bench names. NBA.com reported that Toronto agreed to acquire Leonard from the Clippers for Brandon Ingram, Gradey Dick, and future draft capital; because the public report language is still "reportedly/agreed" in some places, this briefing treats Kawhi-on-TOR as the model roster premise rather than an independently finalized transaction fact.

Non-authoritative roster-context top win contributors:

| Player | Role | MPG | Exp GP | Net | Context proj wins | Flags |
|---|---|---:|---:|---:|---:|---|
| Kawhi Leonard | starter | 28.1 | 60.0 | +6.50 | 14.32 | high uncertainty |
| Scottie Barnes | starter | 28.2 | 72.0 | +1.57 | 7.84 | high uncertainty |
| Immanuel Quickley | starter | 28.2 | 66.0 | +1.13 | 6.39 | high uncertainty |
| Jakob Poeltl | starter | 27.3 | 56.0 | +1.03 | 5.15 | high uncertainty |
| RJ Barrett | starter | 27.9 | 60.0 | +0.17 | 4.24 | high uncertainty |
| Jamal Shead | rotation | 13.1 | 52.0 | +0.81 | 2.13 | high uncertainty |
| Collin Murray-Boyles | rotation | 13.1 | 33.0 | +0.85 | 1.38 | high uncertainty |
| Ja'Kobe Walter | rotation | 12.9 | 41.0 | -0.67 | 0.93 | high uncertainty |

Top MPG context: Barnes 28.2, Quickley 28.2, Kawhi 28.1, Barrett 27.9, Poeltl 27.3, Shead 13.1, Murray-Boyles 13.1, Walter 12.9, Kyle Anderson 12.7, A.J. Lawson 11.7, Jackson-Davis 11.6, Battle 11.5, and Allen Graves 10.4. I interpret these as model-display minutes ranks, not as a literal coach rotation forecast.

The minutes challenge is that the top five looks plausible but fragile. Kawhi's 60 expected games is defensible after his 65-game 2025-26 season, but age and prior durability make him the largest single-point failure mode. Quickley is projected for 66 games after missing the first-round series with an aggravated hamstring and having late-season plantar fasciitis. Poeltl is projected for 56 games after Sportsnet noted injuries limited him to 46 in 2025-26. Murray-Boyles' model context is unusually conservative at 33 expected games and 13.1 MPG despite an All-Rookie season and strong playoff minutes; that is a real argument against my downside adjustment.

Deep-bench fragility is concentrated at center and secondary creation. Jackson-Davis was reportedly retained, but NBC Sports/Rotoworld framed him as out of the 2025-26 rotation and behind Murray-Boyles in the frontcourt priority. Graves and Bradley are useful two-way/cold-start bets, but asking cold-start rookies and fringe wings to stabilize a 53-win team is a high bar.

## Six-Factor And Style Read

The team-detail artifact does not provide an authoritative team factor profile for the corrected 53.3-win prior. Using only non-authoritative roster rows, I computed a minutes-and-expected-games weighted player-factor sketch:

| Factor | Weighted context value | Basketball read |
|---|---:|---|
| oTS | +0.26 | Leonard, Barrett, and Poeltl lift finishing/shot quality, but Barnes/Quickley/CMB are not all pure shooting spacers. |
| oTOV | +0.41 | Kawhi, Quickley, Barrett, and Barnes should support a low-turnover wing-heavy offense. |
| oSC | -0.05 | Slight second-chance/offensive-board concern despite Poeltl/CMB, because several bench forwards rate weakly here. |
| dTS | +0.27 | Kawhi/Barnes/Quickley defensive shot profile is a real strength if the stars play. |
| dTOV | +0.25 | Barnes, Shead, Walter, Anderson, and Kawhi create a high-hands turnover profile. |
| dSC | +0.13 | Poeltl and CMB help, but the center room is not deep enough to make this a clean strength. |

The style is coherent: a big, disruptive wing defense with enough half-court shot-making from Kawhi, Barrett, and Quickley. The spacing is more precarious than the win total implies. A Quickley-Barrett-Kawhi-Barnes-Poeltl group has one elite shooter/creator, one guard shooter, a driving wing, a non-shooting center, and Barnes as a connector. If Kawhi misses time or Poeltl's matchup issues force smaller units, the offense may need a second leap from Barnes or Murray-Boyles to avoid becoming crowded.

## Main Challenge To The Model

I am challenging the model downward because the 53.3-win prior looks like a median that prices the upside roster more cleanly than a real season likely will. The case is not that the Raptors are fake. A 50-win adjusted view still says they are dangerous, deep enough in wings, and probably a playoff team. The challenge is the conversion from "46-win playoff team adds Kawhi" to "53.3-win team with a 98.4% playoff probability."

Mechanisms:

1. Kawhi is the whole swing piece. The roster-context rows assign him by far the largest player value, 14.32 contextual wins and +6.50 net. NBA.com reported he averaged 27.9 points, 6.4 rebounds, and 3.6 assists over 65 games last season, so the upside is real. But at age 35/36, a 60-game expectation still creates high leverage downside because Toronto traded Ingram and Dick rather than layering Kawhi onto the exact prior rotation.
2. The lead-guard floor is not clean. Quickley is projected as a major starter, but NBA.com reported an aggravated right hamstring in the playoff rehab process after he had missed time with plantar fasciitis. Even a modest Quickley ramp-down pushes creation toward Barnes, Barrett, Shead, and Kawhi regular-season usage.
3. The frontcourt is both good and fragile. Poeltl is efficient and stabilizing, but he played 46 games in 2025-26, the model context expects only 56, and postseason reporting/fantasy notes repeatedly pointed to Murray-Boyles taking larger frontcourt minutes when Poeltl was ineffective or unavailable.
4. The bench may be development-rich but not regular-season-bankable. Shead, Walter, CMB, Battle, Anderson, TJD, Graves, Lawson, Martin, Hepburn, and Bradley provide bodies; fewer are clear above-average 82-game rotation players right now.
5. The current construction may be more playoff-shaped than win-total-shaped. Kawhi plus Barnes gives Toronto a frightening matchup defense, but regular-season win totals also demand stable shooting, backup center competence, and enough healthy creation on low-leverage nights.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| Kawhi's 2025-26 level justifies a big upside prior. | NBA.com reported the Leonard trade agreement and noted 27.9 PPG, 6.4 RPG, 3.6 APG in 65 games with LA last season. | helps | +1.4 wins | 78 |
| The same Kawhi assumption is the biggest fragility. | Local roster context gives Kawhi 14.32 contextual wins, 60 expected games, high uncertainty, and age 35.9; the public trade cost removes Ingram and Dick. | hurts | -1.5 wins | 72 |
| Quickley's availability is under-risked for a 53-win median. | NBA.com/AP reported Quickley aggravated a right hamstring strain during playoff rehab after late-season plantar fasciitis; local context projects 66 GP and starter minutes. | hurts | -0.8 wins | 68 |
| Barnes is a strong counter to the downside case. | Sportsnet reported Barnes made All-Defensive Second Team and averaged 18.1/7.5/5.9 with 80 regular-season games, then 24.1/6.1/8.6 in the playoffs. | helps | +0.9 wins | 74 |
| Murray-Boyles may be undercredited by the roster context. | Sportsnet reported All-Rookie Second Team, 57 games, 22 starts, 58% shooting; NBA.com logged multiple productive playoff games, including 40 minutes in Game 6. | helps | +0.8 wins | 70 |
| Poeltl's regular-season and matchup risk remain material. | ESPN lists 46 games in 2025-26 and 25.0 MPG; Sportsnet noted Poeltl injuries limited him to 46 games; local context projects 56 GP. | hurts | -0.7 wins | 66 |
| Center depth below Poeltl/CMB is not proven. | NBC Sports/Rotoworld reported TJD was out of the rotation after the deadline and that CMB was the frontcourt priority; local rows have TJD/Kyle Anderson/Battle/Lawson as negative-net bench pieces. | hurts | -0.6 wins | 64 |
| Toronto has enough defensive identity to outperform the individual-risk math. | Barnes, Kawhi, Shead, Walter, Anderson, CMB, and Poeltl all support a disruptive profile; the weighted context is positive in dTS, dTOV, and dSC. | helps | +0.5 wins | 58 |
| Cold-start rookie inputs are not reliable enough to lift the median. | Authoritative prior has `n_cold_start = 3`; local context flags Graves/Bradley/Hepburn as cold or replacement and contains duplicate Bradley rows. | hurts | -0.4 wins | 62 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Kawhi Leonard | Starter; +6.50 context net; 60 exp GP; 14.32 contextual wins | Upside is still elite shot creation and wing defense, but age 35.9 plus high leverage after the Ingram/Dick outgoing package makes him the forecast fulcrum. | If Kawhi is 65-game 2025-26 Kawhi, 53 wins is alive; if he is managed or misses 25-30 games, the top-five East prior is too clean. |
| Scottie Barnes | Starter; +1.57 context net; 72 exp GP; 7.84 contextual wins | Strong upside: 80 games, All-Defense, playoff playmaking jump. Model may be too low on his next offensive step. | He is the best argument that my `MODEL_TOO_HIGH` stance is too cautious. A cleaner Barnes jumper/half-court role changes the whole spacing map. |
| Immanuel Quickley | Starter; +1.13 context net; 66 exp GP; 6.39 contextual wins | Right hamstring aggravation and plantar fasciitis late in 2025-26 create ramp-up risk. | Toronto needs Quickley's shooting and low-turnover creation because the other core pieces are wings/bigs, not pure point guards. |
| Jakob Poeltl | Starter; +1.03 context net; 56 exp GP; 5.15 contextual wins | Elite finisher but health and matchup limitations; 46 games in 2025-26. | The Raptors do not have another traditional center of the same regular-season floor. If he misses time, CMB/TJD/small-ball minutes rise fast. |
| RJ Barrett | Starter; +0.17 context net; 60 exp GP; 4.24 contextual wins | Productive scorer and playoff usage, but model sees near-neutral overall value. | If Barrett's shooting/defense holds, he can be a real fourth option. If not, the Kawhi-Barnes-Poeltl spacing gets cramped. |
| Collin Murray-Boyles | Rotation; +0.85 context net; 33 exp GP; 1.38 contextual wins | All-Rookie and playoff breakout indicators suggest role upside; local model context may be too conservative on games/minutes. | More CMB is the cleanest internal way for Toronto to beat the prior, especially if he can survive at center without killing spacing. |
| Jamal Shead | Rotation; +0.81 context net; 52 exp GP; 2.13 contextual wins | Defensive guard value is plausible; offensive burden rises if Quickley misses time. | Shead can protect the floor defensively, but if he plays starter-level minutes the offense may lack shooting/size balance. |
| Ja'Kobe Walter | Rotation; -0.67 context net; 41 exp GP | The model sees defensive/event value but weak overall value. | He is part of the defensive identity, but the second unit cannot carry too many negative-shot-creation players at once. |
| Trayce Jackson-Davis | Rotation/depth; -1.33 context net; 45 exp GP | Retained as frontcourt depth, but external reporting framed him as out of the rotation and behind CMB. | If Poeltl misses time and TJD must play real minutes, the model's top-end win total gets harder. |
| Kyle Anderson | Rotation; -1.26 context net; 35 exp GP | Smart connector, defensive hands, but age and shooting/pace issues. | Useful insurance, less useful if asked to be a nightly high-minute forward in a crowded-spacing lineup. |
| Allen Graves | Rotation; rookie/cold; -1.27 context net; 34 exp GP | Reports praise his defense/rebounding but flag shooting release and foul trouble. | He can help the defense, but expecting a cold rookie to stabilize a contender-level bench is risky. |
| Jaden Bradley | Deep; rookie/cold; duplicate local rows; 4 exp GP | Decorated senior guard with shooting/defense indicators, but unclear roster role. | A development swing, not a near-term reason to believe in 53 wins. |

## Adjustment Logic

I am applying a judgmental adjustment of -1.4 pts/100, roughly -3.3 wins, because Toronto's corrected 53.3-win prior prices a strong version of the Kawhi/Barnes/Quickley/Barrett/Poeltl team while leaving several linked downside paths only partially captured.

The largest adjustment is about dependency structure, not a claim that any single player is bad. Kawhi availability, Quickley availability, Poeltl availability, frontcourt depth, and bench shooting are not independent in practice. When one slips, the answer often requires the same players to do more: Barnes as creator, Murray-Boyles as center, Shead as lead guard, Barrett as half-court scorer, Kawhi as regular-season engine. That is why I move the prior down more than a simple one-player injury haircut but still keep Toronto at 50.0 wins.

My adjusted view:

| Item | Value |
|---|---:|
| Authoritative model wins | 53.3 |
| Judgmental win delta | -3.3 |
| Adjusted wins | 50.0 |
| Authoritative model strength | +2.107 |
| Judgmental strength delta | -1.4 |
| Adjusted strength lens | about +0.7 pts/100 |

This is not a new simulation and should not replace Andrew's projection. It is an adversarial research adjustment.

## Counter-Thesis

The strongest argument against my `MODEL_TOO_HIGH` stance is that the model may actually be appropriately conservative. Toronto won 46 games and lost in the first round before adding a player NBA.com says averaged 27.9 points over 65 games. Barnes played 80 games, made All-Defense, and elevated in the playoffs. Murray-Boyles was an All-Rookie second-team player whose postseason minutes and production suggest the local roster context may underrate him badly. Darko Rajakovic has continuity and a roster that fits a disruptive, switchable defensive identity. If Kawhi is even 90% of his 2025-26 version, Quickley is healthy by camp, and CMB claims 24-28 real minutes, 53.3 wins is not hot air. It might be the correct median, with 60 wins in the p90 band reflecting the real upside.

## What Would Change My Mind

- Official transaction and extension clarity on Kawhi, including any medical, trade-kicker, or roster-slot implications.
- Training-camp health reports for Quickley's hamstring/foot and Poeltl's offseason workload.
- A preseason rotation where Murray-Boyles is clearly a top-six player and not capped at low-teens minutes.
- Evidence that Toronto can play Barnes-CMB-Kawhi together without the half court shrinking.
- A real backup-center signing or a strong TJD/Sharp/Mogbo-type camp signal that reduces Poeltl dependency.
- A model rerun in which the authoritative JSON and roster-detail team context agree on Toronto's team-level wins/strength.

## Data Quality And Uncertainty

- The authoritative team prior is only `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. I quoted `mc_mean_wins`, `p10_wins`, `p50_wins`, `p90_wins`, `make_playoffs_prob`, `strength`, `se_strength`, and `n_cold_start` from that file.
- The richer local team-detail JSON is stale for Toronto team-level numbers. Its team line says 44.7 wins and a different strength context; I ignored those team-level fields and used only the roster rows for player/minutes pressure points.
- The roster-detail rows have data quirks: duplicate Jaden Bradley rows, cold-role GP bands where `gp_lo` can exceed `exp_gp`, and every major rotation player marked `high_uncertainty`. Treat the player tables as audit context, not as a settled rotation.
- The Kawhi transaction was reported by NBA.com and other outlets as agreed/reported; this briefing does not independently verify league-office finalization beyond those public sources and the projection roster assumption.
- External sources include official NBA pages, Sportsnet, ESPN, NBC Sports/Rotoworld, Raptors Republic, Raptors HQ, and Roundtable. Some are news/analysis/fantasy sources, so I use them for public context rather than as model-grade data.
- No paid APIs or paid data sources were used.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, accessed July 9, 2026. Authoritative prior.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`, accessed July 9, 2026. Non-authoritative roster rows only.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, accessed July 9, 2026. Non-authoritative depth-chart context.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md`, accessed July 9, 2026. Briefing structure.

External public sources:

- https://www.nba.com/news/raptors-clippers-kawhi-leonard-trade, accessed July 9, 2026.
- https://www.sportsnet.ca/nba/article/five-raptors-thoughts-as-dust-on-kawhi-leonard-trade-settles/, accessed July 9, 2026.
- https://www.sportsnet.ca/nba/article/how-raptors-cap-roster-picture-look-after-kawhi-leonard-acquisition/, accessed July 9, 2026.
- https://www.nba.com/draft/2026/team-profiles/2026-toronto-raptors, accessed July 9, 2026.
- https://www.sportsnet.ca/nba/article/raptors-scottie-barnes-makes-nbas-all-defensive-second-team/, accessed July 9, 2026.
- https://www.nba.com/news/raptors-immanuel-quickley-to-miss-the-rest-of-1st-round-series-vs-cavs-after-aggravating-strained-hamstring, accessed July 9, 2026.
- https://www.sportsnet.ca/nba/article/raptors-collin-murray-boyles-named-to-nba-all-rookie-second-team/, accessed July 9, 2026.
- https://www.nba.com/player/1642867/collin-murray-boyles, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/3134908/jakob-poeltl, accessed July 9, 2026.
- https://www.espn.com/nba/player/gamelog/_/id/4395625/rj-barrett, accessed July 9, 2026.
- https://www.nbcsports.com/fantasy/basketball/player-news/2026-06-29/report-raptors-exercise-jackson-davis-option, accessed July 9, 2026.
- https://raptorsrepublic.com/2026/07/02/toronto-raptors-announce-2026-nba-summer-league-roster/, accessed July 9, 2026.
- https://www.raptorshq.com/nba-draft/50289/raptors-draft-big-12-poty-jaden-bradley-selected-with-no-50-pick, accessed July 9, 2026.
- https://roundtable.io/sports/nba/raptors/news/raptors-select-allen-graves-with-no-19-pick-in-nba-draft, accessed July 9, 2026.
- https://www.sportsnet.ca/nba/article/raptors-coach-darko-rajakovic-already-looking-ahead-to-challenge-of-next-season/, accessed July 9, 2026.
