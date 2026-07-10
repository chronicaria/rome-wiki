---
title: Philadelphia 76ers 2026-27 Research Briefing
created: 2026-07-09
source: web
team: PHI
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Philadelphia 76ers 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 36.8 |
| Model p10-p90 wins | 30-44, with p50 37 |
| Model strength | -5.081 pts/100, se_strength 1.304 |
| Playoff probability | 20.7%; make-play-in probability 55.8% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +1.7 pts/100, judgmental |
| Win delta | +4.1 wins, judgmental |
| Adjusted wins | 40.9 |
| Confidence | 61/100 |
| One-sentence thesis | The corrected 36.8-win prior looks too low because the public roster now has a real Embiid-Maxey-Brown top end and multiple credible creators, but the adjustment should stay modest because Embiid's availability, guard overlap, hard-cap depth, and a likely Dean Wade over-credit all cut against the upside case. |

## Model Prior

Authoritative prior source: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "PHI"`.

Andrew's tuned public projection has Philadelphia at:

- `mc_mean_wins`: 36.8.
- `p10_wins`: 30.
- `p50_wins`: 37.
- `p90_wins`: 44.
- `make_playoffs_prob`: 0.207.
- `strength`: -5.081 points per 100.
- `se_strength`: 1.304.
- `n_cold_start`: 1.

In the same file, PHI ranks 10th in the East by mean wins, just ahead of Indiana at 36.7 and behind Atlanta at 42.3. The projection metadata says this is a forward 2026-27 projection using an `xgboost (per-factor per-horizon) + aging fallback` model, an availability-adjusted curated depth chart, expected-games modeling, and a 10,000-simulation Monte Carlo over synthetic schedules.

Important prior hygiene: I did not use `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for PHI team-level wins, strength, or playoff odds. I used only its PHI roster rows as non-authoritative roster context because the user explicitly identified the website repo JSON as the only authoritative team prior.

## Roster And Minutes Read

The public roster context and transaction reporting now point to a 76ers roster headlined by Joel Embiid, Tyrese Maxey, Jaylen Brown, VJ Edgecombe, Dean Wade, Anfernee Simons, LaBaron Philon, Dominick Barlow, Adem Bona, Johni Broome, Justin Edwards, Jabari Walker, Caleb Love, Rayan Rupert, Dalen Terry, Ariel Hukporti, Tyrese Martin, MarJon Beauchamp, and Trendon Watford. NBA.com lists Nick Nurse as head coach.

Non-authoritative roster-row context from the team-detail artifact:

Top projected win contributors:

| Player | Role | MPG | Exp GP | Net | Rating band | Wins | Flag |
|---|---:|---:|---:|---:|---|---:|---|
| Dean Wade | starter | 26.5 | 61 | +2.59 | +1.49 to +3.75 | 8.18 | high uncertainty |
| Tyrese Maxey | starter | 28.2 | 65 | +1.98 | +0.88 to +3.15 | 8.13 | high uncertainty |
| VJ Edgecombe | starter | 27.7 | 73 | +1.49 | +0.39 to +2.65 | 8.04 | high uncertainty |
| Joel Embiid | starter | 27.3 | 45 | +3.31 | +2.21 to +4.47 | 7.06 | high uncertainty |
| Jaylen Brown | starter | 27.6 | 68 | -0.32 | -1.43 to +0.84 | 4.05 | high uncertainty |
| Adem Bona | rotation | 12.0 | 45 | -0.90 | -1.91 to +0.09 | 0.86 | high uncertainty |
| Johni Broome | rotation | 10.9 | 36 | -0.50 | -1.51 to +0.49 | 0.78 | high uncertainty |
| Dominick Barlow | rotation | 12.7 | 39 | -0.99 | -2.00 to 0.00 | 0.75 | high uncertainty |

Top projected MPG players:

| Player | MPG | Exp GP | Rotation read |
|---|---:|---:|---|
| Tyrese Maxey | 28.2 | 65 | lead guard, but likely real-game minutes above this when healthy |
| VJ Edgecombe | 27.7 | 73 | young starter, development/efficiency swing piece |
| Jaylen Brown | 27.6 | 68 | acquired star wing, likely closer to a heavy-minute role if healthy |
| Joel Embiid | 27.3 | 45 | centerpiece, but the expected-games prior is the right place to be conservative |
| Dean Wade | 26.5 | 61 | projected starter and model darling; this is the most obvious overvaluation risk |
| Anfernee Simons | 12.8 | 30 | bench scorer and spacer, with wrist/injury and defensive fit risk |
| Dominick Barlow | 12.7 | 39 | frontcourt depth, possibly more situational than model minutes imply |
| Caleb Love | 12.3 | 28 | two-way/emergency guard in a crowded backcourt |

Expected-games concerns are real. Embiid's row expects 45 games with a 32-58 band, and recent public reporting supports continued caution: NBA.com reported his 2024-25 knee surgery and 19-game season, while ESPN/NBA.com reported 2026 playoff ankle/hip issues after an appendectomy return. Simons is also an availability/role concern after a fractured left wrist ended his 2025-26 season.

The rotation's biggest fragility is not top-end talent; it is whether Philadelphia can survive non-Embiid center minutes and whether the bench is too guard-heavy. CBS' depth chart has Maxey, VJ Edgecombe, Brown, Wade, and Embiid as the first five, with Philon/Simons, Justin Edwards, Barlow, and Bona as the next functional layer. Liberty Ballers reported 14 of 15 standard roster spots filled and two of three two-way slots filled as of July 6, with Caleb Love and Rayan Rupert on two-way deals. That leaves some flexibility, but Spotrac/Liberty Ballers both frame the team as hard-capped or tight around the first apron, which limits the clean veteran-depth fix.

## Six-Factor And Style Read

The official team prior file does not expose a PHI team six-factor profile. The following is an inference from non-authoritative roster rows only, weighted by `mpg * exp_gp`, and should be treated as a diagnostic rather than a team projection:

| Factor | Roster-row diagnostic | Interpretation |
|---|---:|---|
| oTS | +0.43 | Embiid, Maxey, and Brown create enough shot value to make the low team prior feel pessimistic. |
| oTOV | +0.29 | Maxey's ball security/creation profile offsets some Brown/Simons turnover and decision risk. |
| oSC | -0.13 | Not a dominant second-chance offense; small-ball wing/guard minutes may not create extra possessions. |
| dTS | +0.31 | Embiid, Wade, and Edgecombe give the roster a real shot-defense path if Embiid is present. |
| dTOV | +0.00 | Neutral event creation; the roster may defend without forcing many turnovers. |
| dSC | -0.07 | Slight defensive second-chance/rebounding concern, especially in non-Embiid minutes. |

Mechanically, this profile says the model should not view PHI as hopeless: the roster has primary creation, rim/paint defense in Embiid minutes, and enough secondary shot creation to punish weak second units. The profile also says the upside is not frictionless. The Maxey-Brown-Edgecombe-Simons guard/wing cluster could be explosive, but it compresses touches and defensive assignments, and the frontcourt behind Embiid is more developmental than bankable.

## Main Challenge To The Model

My best challenge is that the corrected prior is too low by roughly four wins because the model is asking PHI to look like a 36.8-win, -5.1 per-100 team despite a verified public roster with four credible top-half rotation engines: Embiid, Maxey, Brown, and Edgecombe. The low prior makes sense if Embiid misses half the season, Brown's RAPM translation remains depressed, and Wade's value is offset by weak bench minutes. But those conditions do not all have to break badly for Philadelphia to clear 37 wins.

The most important player-level challenge is Jaylen Brown. The roster rows give him only -0.32 net and 4.05 wins in 27.6 MPG, even though public reporting/stat pages describe a 2025-26 career year: 28.7 points, 6.9 rebounds, and 5.1 assists across 34.4 minutes. The model can be right that Brown is not a clean plus-minus superstar in every context, but a negative-ish rating beside Maxey/Embiid is a harsh prior for a player who can carry usage, pressure the rim, and guard real wing assignments.

The second challenge is minutes realism. The roster rows have Maxey, Brown, and Embiid all in the 27-28 MPG band. That is understandable as season-level availability-adjusted display MPG, but if PHI is trying to win, healthy-game minutes for Maxey/Brown should be materially higher. Maxey was reported at 39.4 MPG in January 2026 when he became an All-Star starter. Brown averaged 34.4 MPG in 2025-26. A model that spreads their value across low display MPG may understate the effect of having them available together.

The third challenge is that Simons and Love look more useful in real basketball than their low model rows if they are deployed against bench units. Simons' defense and wrist are real concerns, but his reported two-year, $12.3 million deal is a cheap shot-creation bet, not a core-starter bet. Love is on a two-way, but public reporting says he scored 10.4 points per game as a rookie in Portland and adds emergency guard creation. That can be overdone, but it gives Philadelphia more fallback ballhandling than a pure depth-chart read suggests.

The case for restraint is just as important. Dean Wade being the top projected win contributor at 8.18 wins is an over-credit red flag. Wade is useful, and public reporting describes him as a 3-and-D forward who can make open threes and guard multiple positions, but treating him as the best wins contributor on a team with Embiid, Maxey, and Brown is not a basketball claim I would want to own. I subtract for that, for Embiid availability, for the hard-cap depth problem, and for center depth.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The authoritative prior is low enough to invite an upside challenge. | Website JSON row has PHI at 36.8 wins, p10/p50/p90 30/37/44, strength -5.081, playoffs 20.7%. | helps | +1.0 wins | 90 |
| Brown is materially undervalued if the roster-row -0.32 net is treated literally. | NBA.com reported Brown to PHI for Paul George and picks; ESPN/Basketball-Reference/ESPN player snippets list 2025-26 at 28.7 PPG, 6.9 RPG, 5.1 APG. | helps | +1.5 wins | 68 |
| Maxey's healthy-game load and star jump support more top-end creation than a 36.8-win prior implies. | NBC Sports Philadelphia reported Maxey as a 2026 All-Star starter and 39.4 MPG/30.3 PPG through Jan. 19; NBA.com player page cites major 2025-26 scoring markers. | helps | +0.9 wins | 70 |
| Edgecombe is not just a cold-start rookie anymore. | NBA.com player page says he was the 2025 No. 3 pick, scored 34 in his debut, was a 2026 Rising Star, and made the All-Rookie Team. | helps | +0.7 wins | 63 |
| Embiid's availability keeps the adjustment modest. | Model roster context expects 45 GP; NBA.com reported prior knee surgery and 19 games in 2024-25; ESPN/NBA.com reported 2026 playoff ankle/hip absence. | hurts | -1.2 wins | 82 |
| Wade is probably overvalued as the top projected win contributor. | Roster rows credit Wade with 8.18 wins and +2.59 net; public reporting supports useful 3-and-D value but not star-level primacy. | hurts | -0.8 wins | 72 |
| Roster flexibility is constrained. | Liberty Ballers estimated the Sixers near the first-apron hard cap after Brown/Wade/Simons; Spotrac shows active cap and cap allocation pressure. | hurts | -0.5 wins | 67 |
| Bench guard depth is better than a brittle top-five-only read. | ESPN transactions and Liberty Ballers report Simons and Caleb Love additions; CBS depth chart places Simons/Philon behind Maxey/Edgecombe. | helps | +0.5 wins | 58 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Joel Embiid | Starter, 27.3 MPG, 45 exp GP, +3.31 net, 7.06 wins | The talent rating still looks elite, but 45 expected games and recent injury history are the swing variable. | If he plays 55+ credible games, 36.8 wins is probably too low; if he is closer to 30-35, the prior may be right. |
| Tyrese Maxey | Starter, 28.2 MPG, 65 exp GP, +1.98 net, 8.13 wins | Model may understate healthy-game workload; public 2026 All-Star starter case supports a heavy creation role. | Maxey is the bridge for non-Embiid offense and the best argument that the floor is higher than the prior. |
| Jaylen Brown | Starter, 27.6 MPG, 68 exp GP, -0.32 net, 4.05 wins | The model is skeptical despite public star production and a massive usage/wing role. | Brown's real value relative to the model row is the largest upward pressure point. |
| VJ Edgecombe | Starter, 27.7 MPG, 73 exp GP, +1.49 net, 8.04 wins | Upside is real after a strong rookie profile, but second-year efficiency can wobble. | If he scales as a third/fourth option, PHI has a real top-four; if his jumper/decision-making stalls, the roster gets crowded fast. |
| Dean Wade | Starter, 26.5 MPG, 61 exp GP, +2.59 net, 8.18 wins | Useful 3-and-D forward, but model win share looks too rich for his likely usage. | This is the main reason not to push the team adjustment above +4 or +5 wins. |
| Anfernee Simons | Rotation, 12.8 MPG, 30 exp GP, -1.39 net, 0.42 wins | Cheap bench scoring upside, but fractured wrist and defensive limitations are both real. | If healthy, he can juice bench offense; if not, PHI's guard glut becomes less valuable. |
| Adem Bona | Rotation, 12.0 MPG, 45 exp GP, -0.90 net, 0.86 wins | Backup-center responsibility may be too fragile for a team with Embiid risk. | Non-Embiid center minutes are the clearest structural downside. |
| LaBaron Philon | Rotation, 10.3 MPG, 34 exp GP, cold-start, 0.47 wins | First-round rookie with strong college production, but the model flags him as the only cold-start PHI player in the authoritative prior. | He may help sooner than a cold-start prior, but guard minutes are crowded and rookie translation is uncertain. |
| Caleb Love / Rayan Rupert | Two-way/deep context | Love adds emergency creation; Rupert adds development-defense upside via the Delaware path. | These are not primary forecast movers, but they matter if the top guard/wing group misses time. |

## Adjustment Logic

I am applying a judgmental adjustment of +1.7 points per 100, roughly +4.1 wins, because the corrected public prior seems to price PHI closer to a thin 37-win team than to a high-variance play-in team with three established offensive engines and a strong second-year prospect.

The model metadata's wins-per-point value is 2.392, so +1.7 pts/100 maps to about +4.1 wins. That takes the prior from 36.8 to 40.9 wins. This is deliberately not a full "star roster" adjustment. I am giving back value for Brown, Maxey healthy-game minutes, Edgecombe development, and bench shot creation, then subtracting for Embiid availability, center depth, hard-cap roster constraints, and Wade overvaluation. A bigger adjustment would require trusting Embiid for 55-60 games or treating Brown as a clean top-20 impact player in this exact context.

## Counter-Thesis

The strongest case against my MODEL_TOO_LOW stance is that the model may already be making the correct harsh call on availability and fit. Embiid's best-player version may not exist often enough over 82 games. Brown's box production can overstate his additive value if the jumper, turnovers, and off-ball defensive discipline are noisy. Maxey, Brown, Edgecombe, and Simons may create a usage/defense squeeze rather than a clean offensive hierarchy. Wade's model value may be doing necessary glue work that my eye-test skepticism underrates. If Embiid is managed aggressively, Simons' wrist lingers, and the backup bigs are below replacement, then 36.8 wins and a low playoff probability could be exactly right.

## What Would Change My Mind

- A preseason or camp report that Embiid will avoid back-to-backs or enter a strict minutes cap would push me back toward the prior.
- A model rerun that uses the corrected projection JSON and still places Brown near replacement in this context would reduce the upward adjustment.
- A clear Nick Nurse rotation with Wade as a 20-minute connector rather than a 27-minute starter would change the Wade offset but might improve lineup balance.
- A real backup-center acquisition would increase confidence in the MODEL_TOO_LOW stance.
- Simons being fully cleared and shooting normally in preseason would add bench-offense upside.
- Edgecombe struggling to defend bigger wings or to space off Brown/Maxey drives would lower the adjustment.

## Data Quality And Uncertainty

The most important data issue is a prior-source conflict. The only authoritative PHI team prior for this rerun is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. The richer team-detail artifact was used only for roster rows and should not be read as the team-level prior here.

The roster rows are useful but noisy. Every major PHI contributor is marked high uncertainty in the team-detail artifact. LaBaron Philon's row has a cold/fallback flag and an internal games-band oddity: `exp_gp` is 34 while `gp_lo`/`gp_hi` are 49/74, so I treated his row cautiously. The public roster is also still July 2026 offseason state: one standard spot and one two-way slot were reported open, and the final training-camp rotation may move several of these deep players.

The online sources are mostly public reporting, official team/NBA pages, and transaction/cap pages accessed July 9, 2026. I avoided treating rumors, social media-only claims, or speculative LeBron-related offseason items as forecast facts.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative PHI prior row; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` - non-authoritative PHI roster rows only; team-level fields ignored; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - PHI roster/depth role context; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/README.md` - v5 RAPM context; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md` - six-factor and model context; accessed July 9, 2026.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md` - briefing template; accessed July 9, 2026.

External public/free sources:

- https://www.nba.com/sixers/roster - official Sixers roster and coaching staff; accessed July 9, 2026.
- https://www.espn.com/nba/team/transactions/_/name/phi/philadelphia-76ers - ESPN PHI transactions page; accessed July 9, 2026.
- https://www.nba.com/news/reports-sixers-to-acquire-jaylen-brown-from-celtics - NBA.com Brown trade report; accessed July 9, 2026.
- https://www.nba.com/news/4-takeaways-jaylen-brown-paul-george-trade - NBA.com Brown/George trade takeaways; accessed July 9, 2026.
- https://www.libertyballers.com/76ers-free-agency-rumors-news/95712/2026-nba-free-agency-draft-sixers-roster-contracts-mike-gansey-nick-nurse - Liberty Ballers updated 2026-27 roster; accessed July 9, 2026.
- https://www.cbssports.com/nba/teams/PHI/philadelphia-76ers/depth-chart/ - CBS Sports PHI depth chart; accessed July 9, 2026.
- https://www.libertyballers.com/76ers-analysis/95981/where-sixers-stand-financially-jaylen-brown-trade-celtics-paul-george - Liberty Ballers cap/hard-cap analysis; accessed July 9, 2026.
- https://www.spotrac.com/nba/philadelphia-76ers/yearly - Spotrac PHI multi-year cap table; accessed July 9, 2026.
- https://www.spotrac.com/nba/philadelphia-76ers/cap/_/year/2026 - Spotrac PHI 2026-27 cap table; accessed July 9, 2026.
- https://www.nba.com/news/joel-embiid-expected-ready-training-camp - NBA.com Embiid knee-surgery/training-camp report; accessed July 9, 2026.
- https://www.nba.com/news/joel-embiid-out-game-2-knicks - NBA.com Embiid Game 2 ankle/hip report; accessed July 9, 2026.
- https://www.espn.com/nba/story/_/id/48694635/76ers-star-joel-embiid-game-2-due-multiple-injuries - ESPN Embiid ankle/hip and appendectomy playoff context; accessed July 9, 2026.
- https://www.nba.com/sixers/76ers-players/joel-embiid - official Embiid Sixers bio/stats page; accessed July 9, 2026.
- https://www.nba.com/sixers/76ers-players/tyrese-maxey - official Maxey Sixers bio/stats page; accessed July 9, 2026.
- https://www.nbcsportsphiladelphia.com/nba/philadelphia-76ers/tyrese-maxey-nba-all-star-starters-2026/708268/ - NBC Sports Philadelphia Maxey All-Star starter report; accessed July 9, 2026.
- https://www.nba.com/sixers/76ers-players/vj-edgecombe - official VJ Edgecombe Sixers bio/stats page; accessed July 9, 2026.
- https://www.basketball-reference.com/players/e/edgecvj01.html - Basketball-Reference Edgecombe stats page; accessed July 9, 2026.
- https://www.basketball-reference.com/players/b/brownja02.html - Basketball-Reference Brown stats page; accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/3917376/jaylen-brown - ESPN Brown player page; accessed July 9, 2026.
- https://www.nba.com/player/1629014/anfernee-simons - NBA.com Simons player/news page; accessed July 9, 2026.
- https://www.cbssports.com/nba/players/2938080/anfernee-simons/ - CBS Sports Simons player/news page; accessed July 9, 2026.
- https://www.libertyballers.com/76ers-features-profiles/96292/dean-wade-sixers-cavs-mike-gansey-nba-free-agency-2026 - Liberty Ballers Dean Wade profile; accessed July 9, 2026.
- https://www.libertyballers.com/76ers-free-agency-rumors-news/96127/report-sixers-sign-caleb-love-to-two-way-contract - Liberty Ballers Caleb Love two-way report; accessed July 9, 2026.
- https://www.libertyballers.com/76ers-free-agency-rumors-news/96117/sixers-reportedly-sign-rayan-rupert-to-two-way-deal - Liberty Ballers Rayan Rupert two-way report; accessed July 9, 2026.
- https://rolltide.com/news/2026/6/23/mens-basketball-labaron-philon-jr-selected-in-2026-nba-draft-first-round-tuesday-night - Alabama Athletics LaBaron Philon draft report; accessed July 9, 2026.
