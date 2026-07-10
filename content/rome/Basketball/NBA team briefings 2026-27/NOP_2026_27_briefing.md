---
title: New Orleans Pelicans 2026-27 Research Briefing
created: 2026-07-09
source: web
team: NOP
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# New Orleans Pelicans 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 29.9 |
| Model p10-p90 wins | 23.0-36.0, with p50 30.0 |
| Model strength | -8.464 pts/100, se_strength 1.339 |
| Playoff probability | 4.3% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +0.9 pts/100, judgmental |
| Win delta | +2.3 wins, judgmental |
| Adjusted wins | 32.2 |
| Confidence | 56/100 |
| One-sentence thesis | The 29.9-win prior is directionally sober, but it looks a little too punitive if Zion Williamson's improved 2025-26 availability mostly holds, Jeremiah Fears and Derik Queen keep outgrowing rookie priors, and Jamahl Mosley can lift a defense with real wing and frontcourt ingredients. |

## Model Prior

The only authoritative team-level prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == NOP`.

Quoted fields from that row:

| Field | Value |
|---|---:|
| mc_mean_wins | 29.9 |
| p10_wins | 23.0 |
| p50_wins | 30.0 |
| p90_wins | 36.0 |
| make_playoffs_prob | 0.043 |
| strength | -8.464 |
| se_strength | 1.339 |
| n_cold_start | 1 |

That places New Orleans 13th in the West by the same standings JSON, ahead of Sacramento and Utah and behind Memphis. The prior is not merely "below average"; the `strength` value says this is a very weak team on a points-per-100 basis, with a low playoff path and a median around 30 wins.

I did inspect `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`, but only as non-authoritative roster context. Its team aggregate is not used as the prior. It is useful for player rows, uncertainty flags, role guesses, and six-factor vectors, but the team-level aggregate there conflicts with the corrected standings prior and should not drive the thesis.

## Roster And Minutes Read

Non-authoritative local roster context says the biggest projected win contributors are Herbert Jones, Zion Williamson, Trey Murphy III, Saddiq Bey, DeJounte Murray, Kevon Looney, Karlo Matkovic, and Josh Oduro. The top projected MPG players in that same context are Murphy, Bey, Williamson, Jones, Murray, Oduro, Jeremiah Fears, and Derik Queen.

That minutes picture needs to be challenged. The local depth chart lists Yves Missi as a starter, Zion, Murphy, Jones, and Murray as starters, with Fears, Queen, Poole, Bey, Karlo Matkovic, and others around the rotation. The NBA team roster as of access date lists a large frontcourt and wing group: Zion Williamson, Herbert Jones, Jordan Poole, Dejounte Murray, Yves Missi, Derik Queen, Jordan Hawkins, Trey Murphy III, Saddiq Bey, Kevon Looney, DeAndre Jordan, Karlo Matkovic, Josh Oduro, Jaron Pierre Jr., Hunter Dickinson, Bryce McGowens, and Micah Peavy ([NBA team page, accessed July 9, 2026](https://www.nba.com/team/1610612740/pelicans)).

The fragile pieces:

- Zion is projected for 58 games and 27.0 MPG in the non-authoritative player context. That is plausible after the 2025-26 rebound, but his career availability remains the single biggest forecast hinge.
- Murray is projected for 52 games and 26.8 MPG after returning in February 2026 from a ruptured Achilles. That is a reasonable cautious projection, not a free upside bucket.
- Fears and Queen are only at 12.5 MPG in the non-authoritative local player rows, with negative median ratings. Public evidence says both had already forced real rookie roles by mid-2025-26, so their 2026-27 minutes and value may be underweighted.
- Poole is treated as a low-minute negative in the local player context. That may be correct, but his actual role can swing the offense, spacing, and defensive leakage.
- Looney is a data-quality warning. The local roster context credits him with 11.6 MPG and 2.09 projected wins, while his NBA player page reported on July 7, 2026 that he would sign with the Lakers and that New Orleans was expected to decline his team option ([NBA player page, accessed July 9, 2026](https://www.nba.com/player/1626172/kevon-looney)). The NBA team page still listed him, and Spotrac still showed the $8.0 million club option/cap slot ([Spotrac cap table, accessed July 9, 2026](https://www.spotrac.com/nba/new-orleans-pelicans/cap/_/year/2026)). I treat Looney as unresolved or likely stale roster context, not as an authoritative positive.

## Six-Factor And Style Read

The corrected standings prior does not expose team six-factor totals. Using the non-authoritative player rows only as roster context, a rough season-minutes-weighted blend of player `f` vectors gives:

| Factor | Rough read |
|---|---:|
| oTS | -0.169 |
| oTOV | +0.252 |
| oSC | -0.051 |
| dTS | -0.111 |
| dTOV | +0.055 |
| dSC | +0.028 |

This profile reads like a team with some turnover and defensive-playmaking juice, but not a clean shot-quality or shooting profile. Zion's rim pressure and Murphy's shooting are the obvious offensive stabilizers; Poole can add creation and spacing but also volatility; Queen and Fears add playmaking upside but raise efficiency and defensive questions. Defensively, Jones is the clear model driver, and Mosley gives the scheme a plausible organizer, but the center hierarchy is unsettled if Missi, Queen, Matkovic, Oduro, and possibly DeAndre Jordan are carrying real minutes.

## Main Challenge To The Model

My best challenge is that the model is a little too low, not wildly wrong.

The corrected 29.9-win prior is already pricing in a bad recent team, a difficult West, health fragility, and poor playoff odds. But the specific mechanisms point slightly upward:

1. Zion's 2025-26 availability was meaningfully better than his career norm. NBA.com wrote that he could have played in 65 games but was rested for the final three, while also noting his long history of missed games ([NBA.com Zion feature, accessed July 9, 2026](https://www.nba.com/news/zion-williamson-vows-different-summer)). If his 2026-27 availability is merely close to the local 58-game context, the team has a real offensive floor above a pure cellar team.
2. Fears and Queen look more live than the local player rows imply. NBA.com's January 2026 feature said both had earned starting spots that would be legitimate even with healthier veterans and noted they were both on the Rookie Ladder ([NBA.com rookie feature, accessed July 9, 2026](https://www.nba.com/news/jeremiah-fears-derik-queen-pelicans-feature)). Sophomore growth from those two is a credible way for the bottom half of the rotation to be less damaging.
3. Mosley is not a generic coaching change. NBA.com reported that New Orleans hired him after five Orlando seasons, three playoff appearances, and two division titles, and that Dumars/Mosley were aligned around elite defense, physicality, work ethic, and accountability ([NBA.com hire story](https://www.nba.com/news/pelicans-hire-jamahl-mosley-as-coach), [NBA.com intro story](https://www.nba.com/news/pelicans-coach-jamahl-mosley-intro), both accessed July 9, 2026). That matters for a team whose best non-Zion players are defense or two-way types.

The upward adjustment stays modest because the counterweights are real: Zion's career health record, Murray's post-Achilles status, possible Looney staleness, Poole's role volatility, and frontcourt spacing all keep this from becoming a play-in endorsement.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| Zion's recent availability makes a pure bottom-three forecast slightly too harsh if it carries into 2026-27. | NBA.com said Williamson could have played in 65 games in 2025-26 but was rested for the final three; the same piece flags his long injury history, so this is upside with a hard cap ([source](https://www.nba.com/news/zion-williamson-vows-different-summer), accessed July 9, 2026). | helps | +0.8 wins | 58 |
| Fears and Queen may deserve more than 12.5 MPG apiece and may be less negative than the local player rows. | NBA.com described both as rookie bright spots, said both had earned legitimate starting spots, and had Queen fourth and Fears eighth on the Rookie Ladder at that point ([source](https://www.nba.com/news/jeremiah-fears-derik-queen-pelicans-feature), accessed July 9, 2026). | helps | +1.0 wins | 62 |
| Mosley gives a credible defensive-floor pathway. | NBA.com reported Mosley had three straight Orlando playoff teams and that Dumars/Mosley emphasized elite defense, physicality, work ethic, and accountability ([hire](https://www.nba.com/news/pelicans-hire-jamahl-mosley-as-coach), [intro](https://www.nba.com/news/pelicans-coach-jamahl-mosley-intro), accessed July 9, 2026). | helps | +0.6 wins | 51 |
| Murray remains a major post-Achilles uncertainty, limiting any upward adjustment. | ESPN and NBA.com reported Murray's February 2026 return after more than 13 months away from a ruptured Achilles ([ESPN](https://www.espn.com/nba/story/_/id/48016734/dejounte-murray-expected-return-pelicans-tuesday), [NBA.com](https://www.nba.com/news/pelicans-dejounte-murray-primed-for-return-to-floor-after-rehabbing-achilles-injury), accessed July 9, 2026). | hurts | -0.8 wins | 66 |
| Looney may be stale in local roster context, and any prior assuming him should be trimmed. | NBA.com player news said Looney would sign a one-year deal with the Lakers; NBA team and Spotrac pages still showed Pelicans roster/cap traces, so this is a live-source conflict ([NBA player page](https://www.nba.com/player/1626172/kevon-looney), [Spotrac](https://www.spotrac.com/nba/new-orleans-pelicans/cap/_/year/2026), accessed July 9, 2026). | hurts | -0.5 wins | 54 |
| Poole's role can hurt if it rises above the local low-minute negative assumption. | NBA.com's Poole page shows a 13.4 PPG season line, late-season bench/rotation volatility, and a dropped-out-of-rotation note in March ([source](https://www.nba.com/player/1629673/jordan-poole), accessed July 9, 2026). | hurts | -0.3 wins | 50 |
| The team's 2025-26 baseline was bad enough that the model may be reading genuine weakness, not just injury noise. | NBA.com's January rookie feature had New Orleans at 8-31, 26th offensively, 27th defensively, and 27th in net rating, with injuries and coaching change chaos ([source](https://www.nba.com/news/jeremiah-fears-derik-queen-pelicans-feature), accessed July 9, 2026). | neutral | -0.5 wins | 63 |
| The current roster has enough real NBA bodies that 29.9 can be low without implying playoff quality. | NBA team page lists Zion, Jones, Murphy, Murray, Poole, Bey, Missi, Fears, Queen, Hawkins, Matkovic, and other depth pieces; this is a flawed but not empty roster ([source](https://www.nba.com/team/1610612740/pelicans), accessed July 9, 2026). | helps | +0.7 wins | 49 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Zion Williamson | Non-authoritative roster context: starter, 27.0 MPG, 58 expected GP, +1.23 net, 5.99 projected wins, high uncertainty. | Upside if 2025-26 availability carries over; downside remains career health and late-season knee management. | He is the one player who can make a 30-win prior look too pessimistic without requiring a broad roster miracle. |
| Dejounte Murray | Starter, 26.8 MPG, 52 expected GP, -0.61 net, 2.72 projected wins, high uncertainty. | Returned in February 2026 from a ruptured Achilles; burst, defense, and game-to-game availability are still uncertain. | A functional Murray raises the guard floor; a diminished Murray leaves Fears/Poole with too much creation burden. |
| Trey Murphy III | Starter, 27.3 MPG, 62 expected GP, +0.10 net, 4.56 projected wins, high uncertainty. | Local rating may be conservative for a prime-age wing shooter, but ankle/shoulder history and on-ball limits matter. | He is the roster's cleanest spacing fit with Zion and a key bridge between bad-team offense and competent offense. |
| Herbert Jones | Starter, 26.8 MPG, 57 expected GP, +2.86 net, 8.42 projected wins, high uncertainty. | The local player context may overconcentrate team value in a low-usage defender, even an excellent one. | If Jones is healthy and Mosley builds a defense around him, the team can beat the -8.464 strength prior; if not, the defensive floor collapses. |
| Jeremiah Fears | Rotation, 12.5 MPG, 48 expected GP, -1.89 net, 0.40 projected wins, high uncertainty. | Public rookie evidence suggests more role pressure and more upside than a low-minute negative row. | If Fears becomes a real primary/secondary creator, New Orleans has a development path the model may understate. |
| Derik Queen | Rotation, 12.5 MPG, 48 expected GP, -2.24 net, 0.18 projected wins, high uncertainty. | Playmaking and rebounding upside are real, but defensive fit and spacing next to Zion/Missi are the question. | His sophomore leap could solve frontcourt skill; his defensive learning curve could keep the team in the high-20s. |
| Jordan Poole | Rotation, 12.4 MPG, 30 expected GP, -1.84 net, 0.27 projected wins, high uncertainty. | If he is a controlled bench scorer, the model's low role may be fine; if salary/status pushes a bigger role, the defense and shot selection risk rise. | Poole can add needed pull-up shooting, but he can also undo Mosley's defensive gains. |
| Yves Missi | Rotation in team-detail context, starter in depth chart, 12.1 MPG, 39 expected GP, -3.17 net, -0.31 projected wins, high uncertainty. | The local player value is harsh relative to the depth-chart starter tag; his rim protection/rebounding role is strategically important. | Center competence determines whether the Pelicans can defend without overhelping and whether Queen can be used creatively. |
| Saddiq Bey | Starter in team-detail context, rotation in depth chart, 27.1 MPG, 70 expected GP, -0.21 net, 4.51 projected wins, high uncertainty. | Big rotation_delta and post-ACL context make role size hard to trust. | He affects wing depth and shooting, but his defensive fit next to Poole or Zion can be stressed. |
| Kevon Looney | Non-authoritative context: 11.6 MPG, 42 expected GP, +1.65 net, 2.09 projected wins, high uncertainty. | Current public pages conflict: team/cap pages still show him, while NBA player news says he will sign with the Lakers. | Treat any Looney value as stale until the roster lock confirms he is actually in New Orleans. |

## Adjustment Logic

I am applying a judgmental adjustment of +0.9 pts/100, roughly +2.3 wins, because the corrected standings prior is so low that modest positive mechanisms can move the forecast without pretending New Orleans is good.

The upward pieces are roughly +0.8 wins for Zion availability not falling below the model's local 58-game context, +1.0 for Fears/Queen being more real than the local low-minute negative rows, +0.6 for Mosley's defensive alignment, and +0.7 for the roster having enough credible NBA depth to outperform a -8.464 strength baseline. I then trim roughly -1.0 to -1.2 wins for Murray's Achilles recovery risk, the Looney source conflict, Poole volatility, and the evidence that the 2025-26 team was genuinely poor even beyond injuries.

The result is `MODEL_TOO_LOW`, but only mildly: 32.2 adjusted wins, still below .500, still outside the main playoff picture, and still inside the model's p10-p90 range.

## Counter-Thesis

The strongest case against my adjustment is that the model is already doing exactly what it should: refusing to overweight names and theoretical health. Zion's career missed-games total is not noise; Murray is coming off one of the hardest injuries for a guard; Murphy, Jones, Bey, and Zion all have recent health flags; Poole's contract/role can distort rotations; and the team was near the bottom of the league in efficiency during 2025-26. The Looney situation also warns that local roster context can be stale. If the current standings prior has already been tuned around post-July roster reality, then adding Fears/Queen/Mosley upside may be double-counting narrative signals that are already embedded or outweighed by the data. In that world, 29.9 is not too low; it is appropriately cautious.

## What Would Change My Mind

- A verified roster update showing Looney is gone and the replacement center minutes are materially weaker than Missi/Queen/Matkovic.
- Training-camp reporting that Poole is penciled into a high-usage starting role rather than a constrained bench/offense role.
- Any Zion workload or injury-management signal below the local 58 expected games context.
- Preseason evidence that Fears and Queen are still being treated as developmental bench players rather than core rotation pieces.
- A Mosley scheme signal that emphasizes conservative half-court defense but cannot generate transition/rim-pressure benefits.
- A corrected team-detail model rerun using the same authoritative standings prior and current roster, especially if it lowers the player-row upside for Fears, Queen, Missi, or Jones.

## Data Quality And Uncertainty

The main data-quality issue is source hierarchy. The authoritative prior is only `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, where NOP has 29.9 wins and -8.464 strength. The older team-detail JSON is explicitly not used as a team prior because its aggregate fields conflict with the corrected standings prior; it is used only to inspect player rows, roles, factor vectors, uncertainty, and local minutes assumptions.

The second issue is roster timing. Public pages accessed July 9, 2026 disagree or lag on Kevon Looney: NBA player news says he will sign with the Lakers, while NBA roster and Spotrac pages still show Pelicans traces. That matters because the local player context credits Looney with a positive rotation role. The adjustment intentionally avoids relying on him.

The third issue is uncertainty concentration. Fourteen local roster-context players are marked high uncertainty, and Jaron Pierre is marked cold. The model's `n_cold_start` field in the authoritative row is 1, but the broader player-level uncertainty is larger than one rookie flag. This briefing should be treated as a mechanism audit, not a replacement simulation.

## Sources

- Local authoritative prior: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == NOP`.
- Local roster context only, non-authoritative for team prior: `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`.
- Local depth chart context only: `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`.
- Public projection page: [https://andrewjparkus.github.io/projection.html](https://andrewjparkus.github.io/projection.html), accessed July 9, 2026.
- Public team page: [https://andrewjparkus.github.io/team2027.html?abbr=NOP](https://andrewjparkus.github.io/team2027.html?abbr=NOP), accessed July 9, 2026.
- NBA.com Pelicans season preview: [https://www.nba.com/news/2025-26-season-preview-nop](https://www.nba.com/news/2025-26-season-preview-nop), accessed July 9, 2026.
- NBA.com Pelicans team roster page: [https://www.nba.com/team/1610612740/pelicans](https://www.nba.com/team/1610612740/pelicans), accessed July 9, 2026.
- NBA.com Pelicans game notes PDF: [https://www.nba.com/gamenotes/pelicans.pdf](https://www.nba.com/gamenotes/pelicans.pdf), accessed July 9, 2026.
- NBA.com Dejounte Murray return story: [https://www.nba.com/news/pelicans-dejounte-murray-primed-for-return-to-floor-after-rehabbing-achilles-injury](https://www.nba.com/news/pelicans-dejounte-murray-primed-for-return-to-floor-after-rehabbing-achilles-injury), accessed July 9, 2026.
- ESPN Dejounte Murray return story: [https://www.espn.com/nba/story/_/id/48016734/dejounte-murray-expected-return-pelicans-tuesday](https://www.espn.com/nba/story/_/id/48016734/dejounte-murray-expected-return-pelicans-tuesday), accessed July 9, 2026.
- NBA.com Fears/Queen rookie feature: [https://www.nba.com/news/jeremiah-fears-derik-queen-pelicans-feature](https://www.nba.com/news/jeremiah-fears-derik-queen-pelicans-feature), accessed July 9, 2026.
- NBA.com Zion Williamson feature: [https://www.nba.com/news/zion-williamson-vows-different-summer](https://www.nba.com/news/zion-williamson-vows-different-summer), accessed July 9, 2026.
- NBA.com Pelicans hire Jamahl Mosley: [https://www.nba.com/news/pelicans-hire-jamahl-mosley-as-coach](https://www.nba.com/news/pelicans-hire-jamahl-mosley-as-coach), accessed July 9, 2026.
- NBA.com Mosley introduction story: [https://www.nba.com/news/pelicans-coach-jamahl-mosley-intro](https://www.nba.com/news/pelicans-coach-jamahl-mosley-intro), accessed July 9, 2026.
- NBA.com Kevon Looney player page: [https://www.nba.com/player/1626172/kevon-looney](https://www.nba.com/player/1626172/kevon-looney), accessed July 9, 2026.
- NBA.com Jordan Poole player page: [https://www.nba.com/player/1629673/jordan-poole](https://www.nba.com/player/1629673/jordan-poole), accessed July 9, 2026.
- NBA.com Trey Murphy III player page: [https://www.nba.com/player/1630530/trey-murphy-iii](https://www.nba.com/player/1630530/trey-murphy-iii), accessed July 9, 2026.
- NBA.com Trey Murphy III shoulder story: [https://www.nba.com/news/pelicans-forward-trey-murphy-iii-torn-labrum-out-for-season](https://www.nba.com/news/pelicans-forward-trey-murphy-iii-torn-labrum-out-for-season), accessed July 9, 2026.
- Spotrac Pelicans 2026-27 cap table: [https://www.spotrac.com/nba/new-orleans-pelicans/cap/_/year/2026](https://www.spotrac.com/nba/new-orleans-pelicans/cap/_/year/2026), accessed July 9, 2026.
