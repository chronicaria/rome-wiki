---
title: Golden State Warriors 2026-27 Research Briefing
created: 2026-07-09
source: web
team: GSW
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Golden State Warriors 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 47.5 |
| Model p10-p90 wins | 42-53, with p50 48 |
| Model strength | +0.695 pts/100, se_strength 1.409 |
| Playoff probability | 94.0% |
| Agent stance | MODEL_TOO_HIGH |
| Strength delta | -1.4 pts/100, judgmental |
| Win delta | -4.0 wins, judgmental |
| Adjusted wins | 43.5 |
| Confidence | 66/100 |
| One-sentence thesis | Golden State's corrected 47.5-win prior is plausible on pure talent, but it looks too high after layering Jimmy Butler's ACL recovery, Stephen Curry's age-39 knee/availability risk, Moses Moody's patellar-tendon surgery, Porzingis/Horford frontcourt fragility, and a stale Quinten Post roster row. |

## Model Prior

Authoritative prior source: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "GSW"`.

Andrew's tuned public projection has Golden State at:

- `mc_mean_wins`: 47.5.
- `p10_wins`: 42.
- `p50_wins`: 48.
- `p90_wins`: 53.
- `make_playoffs_prob`: 0.94.
- `strength`: +0.695 points per 100.
- `se_strength`: 1.409.
- `n_cold_start`: 5.

In the public standings prior, Golden State ranks 4th in the West by projected wins, behind Oklahoma City, Houston, and San Antonio, and ahead of Denver and Minnesota. The projection metadata describes this as a forward 2026-27 projection using `xgboost (per-factor per-horizon) + aging fallback`, availability-adjusted curated depth charts, expected-games modeling, and a Monte Carlo season simulation.

Important prior hygiene: I did not use `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for GSW team-level wins, strength, win bands, playoff odds, or cold-start count. I used only its GSW roster rows as non-authoritative roster/minutes context because the user explicitly identified the website repo JSON as the only authoritative team prior.

## Roster And Minutes Read

Non-authoritative roster-row context from the team-detail artifact:

Top projected win contributors:

| Player | Role | MPG | Exp GP | Net | Rating band | Wins | Flag |
|---|---:|---:|---:|---:|---|---:|---|
| Stephen Curry | starter | 27.3 | 58 | +4.27 | +3.16 to +5.43 | 11.04 | high uncertainty |
| Jimmy Butler | starter | 27.5 | 52 | +3.19 | +2.08 to +4.35 | 8.35 | high uncertainty |
| Brandin Podziemski | starter | 27.2 | 75 | +1.06 | -0.04 to +2.22 | 7.48 | high uncertainty |
| Draymond Green | starter | 27.0 | 66 | +0.78 | -0.33 to +1.94 | 6.06 | high uncertainty |
| Kristaps Porzingis | starter | 26.8 | 49 | +1.34 | +0.24 to +2.50 | 5.17 | high uncertainty |
| Gui Santos | rotation | 12.5 | 41 | +0.59 | -0.42 to +1.58 | 1.65 | high uncertainty |
| Gary Payton II | rotation | 12.0 | 45 | +0.11 | -0.89 to +1.11 | 1.46 | high uncertainty |
| Al Horford | rotation | 12.2 | 27 | +1.13 | +0.12 to +2.12 | 1.24 | high uncertainty |

Top projected MPG players:

| Player | MPG | Exp GP | Rotation read |
|---|---:|---:|---|
| Jimmy Butler | 27.5 | 52 | Core wing value if healthy, but ACL recovery makes this the largest availability challenge. |
| Stephen Curry | 27.3 | 58 | Still elite in short bursts; the issue is age-39 workload, not skill. |
| Brandin Podziemski | 27.2 | 75 | High-availability young starter; model leans heavily on a third-year leap/hold. |
| Draymond Green | 27.0 | 66 | Defensive organizer, but value is tied to healthy shooting and frontcourt context. |
| Kristaps Porzingis | 26.8 | 49 | Clean theoretical fit with Curry; availability and ramp-up remain fragile. |
| Moses Moody | 13.0 | 38 | Surgery makes even a modest role uncertain. |
| De'Anthony Melton | 12.7 | 25 | Useful guard defense, but low expected games and prior ACL history limit stabilizing value. |
| Gui Santos | 12.5 | 41 | Plausible regular-season wing, not yet a proven high-leverage playoff piece. |
| Will Richard | 12.5 | 41 | Low-data role player; useful if shooting translates. |
| Al Horford | 12.2 | 27 | The model is cautious, but a 40/41-year-old depth big cannot be primary injury insurance. |
| Quinten Post | 12.2 | 38 | Stale if public reporting of Golden State not matching Memphis' offer sheet is final. |
| LJ Cryer | 12.1 | 23 | Low-data guard depth; not a robust answer to star availability. |

Expected-games concerns are the core of the challenge. The model context already discounts Curry, Butler, Porzingis, Horford, Melton, and Moody, but the public 47.5-win prior still requires multiple old or recently injured players to return useful value at the same time. The public prior's `n_cold_start` of 5 also matters: if Lendeborg, Lajae Jones, Nate Williams, LJ Cryer, Will Richard, or other low-data depth pieces are needed early, the regular-season floor can move quickly.

Depth chart fragility is concentrated in the frontcourt. The local depth chart context lists Curry, Butler, Draymond, Brandin Podziemski, and Al Horford as starters, with Porzingis in rotation context, while the roster rows treat Porzingis as a starter and Horford as rotation. That conflict is not a prior; it is a warning that the frontcourt hierarchy and replacement tree are unsettled.

## Six-Factor And Style Read

The authoritative public prior file does not expose a GSW team six-factor profile. The following is an inference from non-authoritative roster rows only, weighted by `mpg * exp_gp`, using the factor order from the model guide: `oTS`, `oTOV`, `oSC`, `dTS`, `dTOV`, `dSC`. Treat this as a diagnostic, not as the team-level prior.

| Factor | Roster-row diagnostic | Interpretation |
|---|---:|---|
| oTS | +0.67 | Curry, Butler, Porzingis, Horford, and enough guard shooting create a real efficiency path when healthy. |
| oTOV | +0.16 | Butler/Podziemski/Porzingis help decision-making, but Draymond's negative row and aging ball-handling mix keep this from being a major edge. |
| oSC | -0.11 | The roster is not projected as a second-chance offense; losing Post or relying on small lineups can worsen possession pressure. |
| dTS | +0.31 | Porzingis, Draymond, Horford, Podziemski, and Moody give a shot-defense path, but it depends on health and lineup size. |
| dTOV | +0.19 | Butler, Melton, Payton, Podziemski, and Moody can create events, though several are availability-constrained. |
| dSC | +0.18 | Defensive second-chance value is mildly positive in the roster rows, but older bigs and cold-start depth make it fragile. |

Stylistically, the good version is coherent: Curry movement plus Porzingis/Horford spacing, Draymond short-roll passing, Butler rim pressure, Podziemski connective play, and enough defensive event creation from Melton/Payton/Moody-type guards. The concern is that this may be a best-lineup profile more than an 82-game ecosystem. If Butler ramps slowly or Curry is managed, the non-Curry offense can become Butler-dependent; if Butler is not fully explosive, it becomes Porzingis-dependent; if Porzingis/Horford are managed, it becomes small and older.

## Main Challenge To The Model

My best challenge is that the model is too high because the public prior prices Golden State as a 47.5-win, 94.0% playoff team while the real roster path is unusually dependent on synchronized health from old or recently injured players. This is not a claim that the healthy Warriors lack upside. A healthy Curry-Butler-Draymond-Porzingis-Podziemski core can absolutely play at a top-six conference level. The issue is that the prior's center appears too clean for the recovery sequencing.

The biggest mechanism is Butler. The roster context credits him with 8.35 projected wins, 52 expected games, and +3.19 net. If he were entering camp fully healthy, that would be defensible. Public reporting says he underwent right ACL surgery in February 2026 after missing the rest of 2025-26; for an age-37 season, the cost is not just games missed. It can be fewer back-to-backs, minutes caps, reduced downhill pressure, lighter defensive assignments, and a slow first 20-30 games.

The second mechanism is Curry. NBA.com still lists star-level production, and the model's +4.27 net roster-row context is reasonable. But he missed a large late-season stretch with right-knee patella-femoral pain syndrome/bone bruising in 2026. At this age, a 58-game expectation can be reasonable and still not capture the left-tail risk of a second maintenance season.

The third mechanism is depth compounding. Porzingis and Horford fit the Warriors beautifully, but both are availability-sensitive bigs. Moody's patellar tendon surgery removes one trusted wing/guard innings-eater. Melton helps, but his own ACL history and 25-game roster-row expectation make him a limited stabilizer. Post's reported move to Memphis makes the local roster row stale and removes a stretch-center insurance option. The result is a roster that can look like a 50-win team in healthy snapshots but closer to low-40s over the full regular-season grind.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| Authoritative prior is strong: GSW is priced as a 47.5-win, 94.0% playoff team. | Public JSON row supplied for `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`; accessed July 9, 2026. | neutral | 0.0 wins | 100 |
| Curry is still good enough to make the model look right if the knee cooperates. | NBA.com player page lists Curry at 26.6 PPG, 3.6 RPG, 4.7 APG and 38 years old; https://www.nba.com/player/201939/stephen-curry; accessed July 9, 2026. | helps | +1.0 wins | 85 |
| Curry's late-season knee absence adds left-tail risk. | Warriors updates said Curry had missed 20 games by March 21 and 25 games by April 1 with right-knee patella-femoral pain syndrome/bone bruising; https://warriors.com/news/stephen-curry-injury-update-20260321 and https://warriors.com/news/stephen-curry-injury-update-20260401; accessed July 9, 2026. | hurts | -1.0 wins | 78 |
| Butler's ACL recovery is the largest single downside to the 47.5-win mean. | Warriors surgery update said Butler underwent successful surgery and would miss the rest of 2025-26; https://warriors.com/news/butler-iii-undergoes-successful-surgery-20260209; accessed July 9, 2026. | hurts | -1.6 wins | 84 |
| Porzingis' fit with Curry is a real counterweight. | Warriors announced a multi-year Porzingis extension; NBA.com lists him at 16.7 PPG, 5.2 RPG, 2.5 APG; https://warriors.com/news/warriors-sign-kristaps-porzingis-to-a-multi-year-contract-extension-20260630 and https://www.nba.com/player/204001/kristaps-porzingis; accessed July 9, 2026. | helps | +0.6 wins | 70 |
| Horford is valuable but not robust regular-season insurance at this age. | NBA.com player page lists Horford at 40 years old; Warriors announced his multi-year contract; Warriors injury update said he missed 11 games with a right soleus strain; https://www.nba.com/player/201143/al-horford, https://warriors.com/news/al-horford-signs-contract-20260706, and https://warriors.com/news/horford-post-injury-updates-20260404; accessed July 9, 2026. | hurts | -0.5 wins | 73 |
| Moody's injury weakens wing depth and regular-season durability. | NBA.com player news and Warriors update reported Moody's ruptured/torn left patellar tendon and surgery; https://www.nba.com/player/1630541/moses-moody and https://warriors.com/news/moses-moody-undergoes-successful-surgery-20260328; accessed July 9, 2026. | hurts | -0.5 wins | 76 |
| Post's roster-row minutes are stale if he is gone. | NBC Sports Bay Area reported Golden State did not match Memphis' offer sheet for Quinten Post; NBA.com reported the offer-sheet process; https://www.nbcsportsbayarea.com/nba/golden-state-warriors/quinten-post-offer-sheet-grizzlies/1948629/ and https://www.nba.com/news/quinten-post-free-agency-2026; accessed July 9, 2026. | hurts | -0.4 wins | 80 |
| Podziemski's development and availability are legitimate upside to my downgrade. | NBA.com lists Brandin Podziemski at 13.8 PPG, 5.1 RPG, 3.7 APG at age 23; https://www.nba.com/player/1641764/brandin-podziemski; accessed July 9, 2026. | helps | +0.6 wins | 68 |
| The 2025-26 baseline was much lower than the 2026-27 prior. | Basketball-Reference and ESPN list the 2025-26 Warriors at 37-45; https://www.basketball-reference.com/teams/GSW/2026.html and https://www.espn.com/nba/team/roster/_/name/gs/golden-state-warriors; accessed July 9, 2026. | hurts | -0.6 wins | 72 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Stephen Curry | Non-authoritative roster context: starter, 27.3 MPG, 58 exp GP, +4.27 net, 11.04 wins | Still elite, but knee/age risk can turn a fair 58-game mean into a dangerous center. | The offense is still Curry-gravity dependent; if he misses 10 extra games or is managed harder, 47.5 wins is too high. |
| Jimmy Butler | Starter, 27.5 MPG, 52 exp GP, +3.19 net, 8.35 wins | ACL recovery in an age-37 season may reduce availability, rim pressure, and defensive workload. | He is the second-largest model win contributor and the main downside mechanism. |
| Brandin Podziemski | Starter, 27.2 MPG, 75 exp GP, +1.06 net, 7.48 wins | Legit young-player upside, but the model asks him to be a durable third/fourth pillar. | A Podziemski leap can erase much of my downgrade; a plateau makes the veteran fragility harder to cover. |
| Draymond Green | Starter, 27.0 MPG, 66 exp GP, +0.78 net, 6.06 wins | Value depends on Curry gravity, spacing around Butler, and enough healthy size behind him. | He can still organize a top defense, but the margin narrows if the lineup gets smaller or less spaced. |
| Kristaps Porzingis | Starter, 26.8 MPG, 49 exp GP, +1.34 net, 5.17 wins | Excellent theoretical fit; availability and role stress are the concern. | If he is a managed spacer, the model can be right; if he must be a second engine while Butler ramps, risk rises. |
| Al Horford | Rotation, 12.2 MPG, 27 exp GP, +1.13 net, 1.24 wins | The model is already conservative, but the team may need more center innings than this. | A 40/41-year-old Horford is a luxury matchup piece, not a dependable injury backstop. |
| Moses Moody | Rotation, 13.0 MPG, 38 exp GP, -0.10 net, 1.21 wins | Patellar-tendon surgery threatens both availability and early-season sharpness. | Moody is the kind of mid-rotation wing Golden State needs when Butler/Curry are managed. |
| De'Anthony Melton | Rotation, 12.7 MPG, 25 exp GP, +0.72 net, 1.05 wins | Useful defender/secondary handler, but prior ACL history and low GP expectation limit the upside. | He helps the best version; he does not fully solve the durability problem. |
| Quinten Post | Rotation-row context, 12.2 MPG, 38 exp GP, -0.78 net, 0.82 wins | Public reporting says Golden State did not match Memphis' offer sheet. | The direct value is small, but the stale row matters because frontcourt insurance is thin. |
| Yaxel Lendeborg / Lajae Jones / LJ Cryer / Will Richard | Cold-start or low-data depth context; public prior has `n_cold_start` 5 | One young player could become useful, but early-season reliability is uncertain. | The veteran core needs cheap depth to survive maintenance nights; cold-start uncertainty lowers the floor. |

## Adjustment Logic

I am applying a judgmental adjustment of **-1.4 points per 100**, roughly **-4.0 wins**, because the public prior's center seems too clean for the Warriors' recovery and durability stack. This is not a new simulation and does not overwrite Andrew's projection pipeline.

The adjustment starts with the public prior at 47.5 wins. I subtract for Butler's ACL ramp (-1.6 wins), Curry's knee/age left tail (-1.0), Porzingis/Horford/Moody/Melton compounded availability (-0.9), and the stale Post/frontcourt-depth issue (-0.4). I add back for Curry still being elite (+1.0), Porzingis' clean offensive fit (+0.6), and Podziemski development/availability (+0.6). The net is approximately -4.0 wins, taking the research view to **43.5 adjusted wins**.

I chose `MODEL_TOO_HIGH`, not a more aggressive downgrade, because the model already incorporates availability and because the Warriors' healthy top-end lineups can plausibly play above the public mean for stretches.

## Counter-Thesis

The strongest argument against my MODEL_TOO_HIGH stance is that the model may already be doing the right amount of availability haircutting. The non-authoritative roster context gives Curry only 58 expected games, Butler 52, Porzingis 49, Horford 27, Moody 38, and Melton 25. That is not an 82-game fantasy forecast. If Butler's rehab is ahead of schedule, Curry's knee was a one-season maintenance issue, and Porzingis/Horford split center minutes cleanly, Golden State may have enough shooting, decision-making, and defensive intelligence to land near 48 wins.

The second counter is Podziemski. If he is a real +1-ish regular-season starter across 70-plus games, the Warriors are not merely an old core trying to survive. They have a high-availability young connector who can absorb ball-handling, rebounding, and defensive rotation minutes. Add a useful rookie or low-cost wing, and the cold-start count can become upside rather than fragility.

The third counter is that Curry's ceiling still breaks models and opponents. If he gives 60 games of top-15 offensive impact, the West middle is soft enough that Golden State can bank regular-season wins even with cautious veteran management.

## What Would Change My Mind

- A training-camp report that Butler is cleared for contact, cutting, and back-to-back ramp work would reduce the downgrade.
- A clear Curry knee update showing no maintenance limitations entering camp would move me closer to the 47.5-win prior.
- A transaction replacing Post with a credible stretch/rim-protecting center would reduce the frontcourt-depth penalty.
- A preseason rotation with Porzingis comfortably starting and Horford preserved as a low-minute reserve would improve the durability read.
- Podziemski looking like a true third option rather than a connector would make the prior more believable.
- A model rerun using the same public JSON prior but updated roster rows without Post would clarify whether the stale depth context matters materially.

## Data Quality And Uncertainty

The most important data issue is prior-source control. The only authoritative GSW team prior for this rerun is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, with the exact values listed in `## Model Prior`. The richer team-detail artifact was used only for roster rows and six-factor diagnostics; its team-level totals were ignored.

The local roster context still contains Quinten Post, while public reporting says Golden State did not match Memphis' offer sheet. I treated Post's row as stale and did not count him as dependable 2026-27 Warriors depth. The public JSON prior's `n_cold_start` is 5, while the non-authoritative roster rows identify several low-data/cold/replacement players; this is enough to flag depth uncertainty but not enough to make a precise rookie forecast.

Some Warriors.com pages were visible through search snippets and NBA.com mirrors but not all rendered cleanly through direct command-line fetches because of access restrictions. I therefore used public official NBA/player pages, accessible article snippets from web search, NBC Sports Bay Area, Basketball-Reference, and ESPN as corroborating public/free sources. All online sources listed below were accessed July 9, 2026.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative GSW prior row; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` - non-authoritative GSW roster rows and six-factor diagnostic only; team-level fields ignored; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - non-authoritative GSW roster/depth role context; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/README.md` - v5 RAPM context; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md` - six-factor and model context; accessed July 9, 2026.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md` - exact briefing template; accessed July 9, 2026.

External public/free sources:

- https://www.nba.com/player/201939/stephen-curry - Curry official NBA player page; accessed July 9, 2026.
- https://warriors.com/news/stephen-curry-injury-update-20260321 - Curry March 21 injury update; accessed July 9, 2026.
- https://warriors.com/news/stephen-curry-injury-update-20260401 - Curry April 1 injury update; accessed July 9, 2026.
- https://www.nba.com/player/202710/jimmy-butler-iii - Butler official NBA player page; accessed July 9, 2026.
- https://warriors.com/news/butler-iii-undergoes-successful-surgery-20260209 - Butler surgery update; accessed July 9, 2026.
- https://www.nba.com/player/204001/kristaps-porzingis - Porzingis official NBA player page; accessed July 9, 2026.
- https://warriors.com/news/warriors-sign-kristaps-porzingis-to-a-multi-year-contract-extension-20260630 - Porzingis extension announcement; accessed July 9, 2026.
- https://www.nba.com/player/201143/al-horford - Horford official NBA player page; accessed July 9, 2026.
- https://warriors.com/news/al-horford-signs-contract-20260706 - Horford signing announcement; accessed July 9, 2026.
- https://warriors.com/news/horford-post-injury-updates-20260404 - Horford/Post injury update; accessed July 9, 2026.
- https://www.nba.com/player/1630541/moses-moody - Moody official NBA player page; accessed July 9, 2026.
- https://warriors.com/news/moses-moody-undergoes-successful-surgery-20260328 - Moody surgery update; accessed July 9, 2026.
- https://www.nba.com/player/1629001/deanthony-melton - Melton official NBA player page; accessed July 9, 2026.
- https://www.nba.com/news/warriors-deanthony-melton-knee-surgery - Melton prior ACL surgery report; accessed July 9, 2026.
- https://www.nba.com/player/1641764/brandin-podziemski - Podziemski official NBA player page; accessed July 9, 2026.
- https://www.nbcsportsbayarea.com/nba/golden-state-warriors/quinten-post-offer-sheet-grizzlies/1948629/ - Post offer-sheet/non-match report; accessed July 9, 2026.
- https://www.nba.com/news/2026-free-agency-options-and-qualifying-offers - 2026 qualifying-offer/free-agency tracker; accessed July 9, 2026.
- https://www.nba.com/news/quinten-post-free-agency-2026 - Post Memphis offer-sheet report; accessed July 9, 2026.
- https://warriors.com/news/warriors-sign-2026-first-round-draft-pick-yaxel-lendeborg - Lendeborg signing announcement; accessed July 9, 2026.
- https://warriors.com/news/warriors-round-2-20260624 - Lajae Jones draft announcement; accessed July 9, 2026.
- https://www.basketball-reference.com/teams/GSW/2026.html - 2025-26 Warriors team page; accessed July 9, 2026.
- https://www.espn.com/nba/team/roster/_/name/gs/golden-state-warriors - ESPN Warriors roster/team page; accessed July 9, 2026.
