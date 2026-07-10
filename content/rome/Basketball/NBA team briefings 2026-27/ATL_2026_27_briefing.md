---
title: Atlanta Hawks 2026-27 Research Briefing
created: 2026-07-09
source: web
team: ATL
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Atlanta Hawks 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 42.3 mc_mean_wins |
| Model p10-p90 wins | 35.0 p10_wins / 42.0 p50_wins / 49.0 p90_wins |
| Model strength | -2.728 points/100; se_strength 1.398 |
| Playoff probability | 0.586 make_playoffs_prob |
| Cold starts | 3 n_cold_start |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +1.1 points/100, judgmental |
| Win delta | +2.8 wins, judgmental |
| Adjusted wins | 45.1 |
| Confidence | 57/100 |
| One-sentence thesis | The authoritative prior is too cautious on Atlanta because the public roster context points to a credible returning five-man core around Jalen Johnson, Dyson Daniels, Nickeil Alexander-Walker, CJ McCollum, and Onyeka Okongwu, but the adjustment stays modest because the bench, center depth, McCollum aging curve, and recent injury tags are real brakes. |

## Model Prior

The only authoritative prior used here is the ATL row in `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. It gives Atlanta:

| Field | Authoritative value |
|---|---:|
| mc_mean_wins | 42.3 |
| p10_wins | 35.0 |
| p50_wins | 42.0 |
| p90_wins | 49.0 |
| make_playoffs_prob | 0.586 |
| strength | -2.728 |
| se_strength | 1.398 |
| n_cold_start | 3 |

Within that file, Atlanta is 9th in the East by projected wins, behind CHA at 43.5 and ahead of PHI at 36.8. The win band is wide enough to respect the uncertainty: the p10-p90 spread is 14 wins, and the playoff probability is a coin-flip-plus rather than a lock.

I did not use `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for team-level wins, strength, or odds. That file's ATL object has a conflicting non-authoritative team strength and win context, so I used it only as roster-row context for projected player roles, MPG, expected games, player net, factor vectors, and uncertainty flags.

The local model guide says the underlying player model is a daily, multi-league six-factor RAPM on an NBA-equivalent scale, with time decay, error bars, and six factors: oTS, oTOV, oSC, dTS, dTOV, dSC. The projection page is the forward-looking surface, so the standings JSON above is the prior that anchors this memo.

## Roster And Minutes Read

The non-authoritative roster packet gives this top-8 player-win group:

| Player | Role | MPG | Exp GP | Net | Model wins |
|---|---|---:|---:|---:|---:|
| Dyson Daniels | starter | 27.0 | 73 | +3.11 | 10.34 |
| Nickeil Alexander-Walker | starter | 27.0 | 78 | +2.00 | 8.84 |
| Onyeka Okongwu | starter | 26.9 | 72 | +1.61 | 7.41 |
| CJ McCollum | starter | 26.6 | 68 | +0.42 | 4.92 |
| Jalen Johnson | starter | 27.3 | 63 | +0.43 | 4.71 |
| Mouhamed Gueye | rotation | 11.6 | 46 | +0.43 | 1.45 |
| Aaron Wiggins | rotation | 12.1 | 41 | -0.12 | 1.10 |
| Jock Landale | rotation | 12.0 | 40 | -0.24 | 1.03 |

The top projected MPG players are Jalen Johnson 27.3, Dyson Daniels 27.0, Nickeil Alexander-Walker 27.0, Onyeka Okongwu 26.9, CJ McCollum 26.6, Zaccharie Risacher 12.2, Aaron Wiggins 12.1, Jonathan Kuminga 12.1, Jock Landale 12.0, and Devin Carter 11.8.

Public roster context supports the top five. NBA.com's team page lists McCollum, Alexander-Walker, Daniels, Johnson, and Okongwu on the current roster, with Quin Snyder as head coach. SI's Hawks coverage projects that same starting five for 2026-27 after McCollum's return and says the group was Atlanta's settled finishing lineup. The same SI piece reports that the McCollum, Alexander-Walker, Daniels, Johnson, Okongwu lineup went 19-4 down the stretch and had a +21.4 Cleaning the Glass net rating in 822 possessions. I am treating that as an important but small-sample external check, not as a replacement model.

The minutes pressure is mostly below the starters. CraftedNBA's public depth chart projects larger roles than the local packet for Aaron Wiggins, Jonathan Kuminga, Corey Kispert, and Jock Landale, while giving Gabe Vincent zero projected minutes. SI's post-draft rotation story also says the backup wing and center hierarchy remained unsettled, especially with Zaccharie Risacher, Corey Kispert, Jonathan Kuminga, and veteran-center questions. That makes the local 10-to-12 MPG pocket for several players plausible directionally, but the identity of those minutes looks fragile.

Cold-start and deep-bench notes:

- Kingston Flemings is the clearest cold-start guard. The roster packet has him at 10.2 MPG, 34 expected games, rookie source, and a -1.18 median net with a wide -3.10 to +0.74 band. SI expects him to compete for backup point minutes, which makes his role both important and volatile.
- Zuby Ejiofor and Henri Veesaar are cold-start/deep bigs in the packet. The official NBA team page lists Ejiofor as a 2026 first-round pick and Veesaar as a 2026 second-round/draft-rights acquisition, while SI frames both more as future/developmental center options than reliable current backup centers.
- The NBA injury report for April 12, 2026 listed RayJ Dennis and Keshon Gilbert as available with "G League - Two-Way" status, which is a useful reminder that Atlanta's emergency guard depth likely runs through two-way and G League pathways rather than proven regular-season rotation answers.

## Six-Factor And Style Read

Because the authoritative standings JSON does not expose team six-factor components, I inferred a cautious team style read from the non-authoritative roster rows only. I weighted each player factor vector by projected MPG times expected games. This is not an official team prior.

| Factor | Minute-weighted roster read | Interpretation |
|---|---:|---|
| oTS | +0.318 | Positive shooting/efficiency signal, helped by McCollum, Alexander-Walker, Okongwu's stretch growth, and spacing wings if Kispert/Wiggins play more. |
| oTOV | +0.231 | Ball security/playmaking looks fine despite no classic Trae Young heliocentric creator, because Johnson, Daniels, McCollum, and Alexander-Walker all pass enough. |
| oSC | -0.142 | Slight second-chance/offensive-glass concern. This matches the roster shape: plenty of wings, but not a dominant bruising rebounder next to Okongwu. |
| dTS | +0.221 | Defensive shot-quality/efficiency signal is positive, driven by Daniels, Alexander-Walker, Johnson, and Okongwu. |
| dTOV | +0.286 | Atlanta should force mistakes with Daniels and Alexander-Walker at the point of attack. |
| dSC | +0.114 | Defensive second-chance prevention is mildly positive, but the center-depth risk makes this less bankable if Okongwu misses time. |

The style read is coherent: more egalitarian offense, strong guard/wing defense, and enough passing to survive without a single mega-usage guard. The concern is not the first five. It is whether the second unit can protect the rim, rebound, and maintain advantage creation without overusing rookies or older guards.

## Main Challenge To The Model

I think the model is too low because the 42.3-win prior and -2.728 strength undersell the chance that Atlanta's post-reset core is simply a solid playoff-quality team. The public current roster lines up with the same top five the local roster packet treats as starters, and several external sources point to that group having real 2025-26 proof of concept: Atlanta finished 46-36 and 6th in the East per NBA.com; NBA.com's since-Jan. 1 summary describes a 24-13 Hawks stretch after a 16-19 start; SI describes the McCollum, Alexander-Walker, Daniels, Johnson, Okongwu lineup as elite in an 822-possession sample; and individual public markers support the top-end talent, with Johnson on All-NBA Third Team, Daniels on All-Defensive Second Team, and Alexander-Walker carrying a 20.8 PPG profile plus an NBA.com MIP honor on his player page.

The mechanism is not "they were hot, therefore they are great." It is narrower: the model's official prior is treating Atlanta more like a fragile play-in team than a 45-ish win team with a viable two-way starting five. Jalen Johnson's public production and awards profile look better than his local roster-row +0.43 net. Nickeil Alexander-Walker's breakout may regress, but a 27-year-old MIP-level two-way guard at only +2.00 net is not obviously overcooked. Dyson Daniels' +3.11 net is high, but his All-Defense profile and Atlanta's pressure/assist identity make it plausible. Okongwu's shooting growth creates a cleaner offensive fit than older versions of this roster.

The reason this is only +2.8 wins rather than a bigger correction is the downside stack. McCollum is entering his age-35 season and is still carrying 26.6 MPG and 68 expected games in the packet. The center depth behind Okongwu is unstable. The April 12 NBA injury report had Alexander-Walker, Daniels, Kuminga, Landale, Okongwu, Vincent, and others listed out or questionable for a mix of toe, knee, ankle, finger, and shoulder issues, plus Jalen Johnson had a February hip flexor event. Some of that was late-season rest/context, but it still argues against assuming a clean 82-game rotation.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| Atlanta's current top five is more proven than a 42.3-win, 9th-East prior implies. | NBA.com lists Atlanta at 46-36, 6th in East, with 118.5 PPG and league-leading 30.1 APG in 2025-26; SI projects McCollum, Alexander-Walker, Daniels, Johnson, Okongwu as the 2026-27 starting five. | helps | +1.0 wins | 68 |
| The post-reset version was meaningfully better than the full-season average. | NBA.com's since-Jan. 1 article lists Atlanta at 24-13 after a 16-19 start and says Johnson blossomed while Alexander-Walker and Daniels softened the guard-play drop after the Trae Young trade. | helps | +0.8 wins | 60 |
| Jalen Johnson may be undervalued in the roster packet. | Local roster row: only +0.43 net and 4.71 model wins; NBA.com player page lists 22.5 PPG, 10.3 RPG, 7.9 APG, and NBA.com All-NBA release names him to Third Team. | helps | +1.0 wins | 64 |
| Daniels and Alexander-Walker make the defensive identity more resilient. | Daniels was named 2025-26 All-Defensive Second Team by NBA.com; Alexander-Walker's player page shows 20.8 PPG and an MIP honor, while the local packet has both as positive high-minute starters. | helps | +0.7 wins | 62 |
| Public depth charts may replace weaker local bench minutes with bigger wing/center roles. | CraftedNBA projects Wiggins 20 minutes, Kuminga 21, Kispert 17, Landale 20, while the local packet gives Gabe Vincent 11.6 MPG and much smaller Kispert/Buddy Hield roles; this would improve size/spacing if accurate. | helps | +0.5 wins | 48 |
| Center depth remains a material downside. | SI's post-draft rotation story says the Hawks likely need at least one veteran center and that Veesaar/Ejiofor/Gueye are not an ideal current backup-center plan. | hurts | -0.8 wins | 66 |
| McCollum age and defensive targeting cap the upside. | Local packet expects age-35 McCollum at 26.6 MPG and 68 GP; SI praises his shotmaking but also frames him as no longer All-Star caliber. | hurts | -0.6 wins | 58 |
| Availability risk is not theoretical. | NBA injury report on April 12 listed Alexander-Walker, Daniels, Kuminga, Landale, McCollum, Okongwu, Vincent, and others out or questionable; NBA.com reported Johnson left a February game with a hip flexor injury. | hurts | -0.7 wins | 55 |
| The 19-4 and lineup net-rating signals can be overfit. | SI's +21.4 five-man net rating is only 822 possessions, and NBA.com's Jan. 1 summary explicitly notes the schedule softened during Atlanta's climb. | neutral | -0.4 wins | 70 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Jalen Johnson | Starter, 27.3 MPG, 63 exp GP, +0.43 net, 4.71 wins | Upside: public 22.5/10.3/7.9 profile and All-NBA Third Team suggest the local row may be too cautious. Concern: half-court scoring and health remain the swing variables. | If Johnson is closer to an All-NBA impact forward than a neutral-plus starter, the 42.3-win prior is low; if playoff pressure and availability bite, the model is right to stay cautious. |
| Dyson Daniels | Starter, 27.0 MPG, 73 exp GP, +3.11 net, 10.34 wins | The model already values him highly, and the All-Defensive evidence supports that; the challenge is offensive aggression and shooting. | He is the biggest local-model win contributor, so Atlanta's floor depends on his defense translating without being ignored off ball. |
| Nickeil Alexander-Walker | Starter, 27.0 MPG, 78 exp GP, +2.00 net, 8.84 wins | Upside: MIP-level scoring jump and two-way role. Concern: playoff scoring volatility, toe issue in April, and regression from a career year. | The model can be too low if his breakout is durable; it can be about right if 2025-26 was a high-water mark. |
| Onyeka Okongwu | Starter, 26.9 MPG, 72 exp GP, +1.61 net, 7.41 wins | Upside: stretch-center growth and defensive mobility. Concern: size/rim-protection and backup-center fragility behind him. | If Okongwu is a real two-way starting center, Atlanta's five works; if he misses time or gets punished by bigger lineups, the roster thins fast. |
| CJ McCollum | Starter, 26.6 MPG, 68 exp GP, +0.42 net, 4.92 wins | Upside: shotmaking/late-clock order. Concern: age-35 availability and defensive stress. | Atlanta needs some traditional guard creation, but the model should not assume prime-McCollum minutes or clean defense. |
| Jonathan Kuminga | Rotation, 12.1 MPG, 24 exp GP, -0.08 net, 0.65 wins | Public depth/cap context suggests he may play much more than the local row; fit depends on spacing and decision-making. | If he earns 20-plus minutes as a pressure forward, the model understates bench athleticism; if not, his salary/role signal is a mirage. |
| Aaron Wiggins | Rotation, 12.1 MPG, 41 exp GP, -0.12 net, 1.10 wins | CraftedNBA projects him for a larger role than the local packet. | More Wiggins minutes could stabilize the second unit with lower-mistake wing play. |
| Corey Kispert | Deep, 1.8 MPG, 2 exp GP, -2.31 net, 0.00 wins in local packet | Public roster/depth sources have him as a real wing option, not a near-zero-minute player. | If he is actually in the rotation, Atlanta's spacing and bench offense may be better than the local roster rows imply. |
| Kingston Flemings | Rotation, 10.2 MPG, 34 exp GP, rookie/cold, -1.18 net, wide band | SI expects backup-PG competition; model treats him as volatile cold-start value. | His readiness determines whether Atlanta can reduce McCollum's regular-season burden. |
| Jock Landale | Rotation, 12.0 MPG, 40 exp GP, -0.24 net, 1.03 wins | He is important insurance, but April injury-report ankle status and center-depth uncertainty make him hard to pencil in. | Backup center is the roster's clearest structural weakness. |

## Adjustment Logic

I am applying a judgmental adjustment of +1.1 points/100, roughly +2.8 wins, because the authoritative 42.3-win prior looks too low once the current public roster context is layered onto the local roster rows.

The positive side of the adjustment is:

- +1.0 wins for Johnson being more plausibly All-NBA impact than the local roster row's +0.43 net.
- +0.8 wins for continuity of a credible starting five that external sources project to return.
- +0.7 wins for the Daniels/Alexander-Walker/Okongwu defensive and spacing structure being more coherent than a below-average strength prior implies.
- +0.5 wins for possible bench-minute reallocation toward Wiggins, Kuminga, Kispert, and Landale rather than some weaker local depth assumptions.

The negative side is:

- -0.8 wins for backup-center fragility.
- -0.6 wins for McCollum age/availability/defensive-target risk.
- -0.7 wins for broad injury and role uncertainty.
- -0.1 wins as a humility discount because the 19-4 stretch and +21.4 lineup sample are not full-season evidence.

That nets to about +2.8 wins. The adjusted 45.1-win view still sits inside the model's 35-49 win p10-p90 band, so this is a challenge to the mean, not a claim that the model distribution is broken.

## Counter-Thesis

The best argument against `MODEL_TOO_LOW` is that the model may already be correctly fading a fragile success story. Atlanta's late surge had a soft-schedule component per NBA.com's since-Jan. 1 summary, and the SI lineup number is a strong but small 822-possession signal. Johnson's All-NBA production is real, but first-option playoff shot creation is still a harder problem than regular-season connective dominance. Alexander-Walker is coming off a career year and could regress. McCollum is an aging small guard. Okongwu's shooting helps, but size/rim protection and backup center remain exploitable. If the rookies are not ready, if Kuminga/Kispert/Wiggins minutes are unsettled, or if Daniels' shooting limits playoff-caliber spacing, 42.3 wins could be exactly right.

There is also a source-quality warning: the public depth and beat reports are current and useful, but they are not a model. The local roster packet has high uncertainty on essentially every meaningful ATL rotation row, and its non-authoritative team-level values conflict with the authoritative standings JSON. The conservative interpretation is that Atlanta is a high-variance team whose median should stay near 42 until training-camp roles settle.

## What Would Change My Mind

- A clean training-camp report that Flemings is ready to handle 14-18 backup point guard minutes would push me further above the model.
- A real veteran backup center signing or confirmed healthy Landale role would make the positive adjustment more credible.
- Any recurring Johnson hip/shoulder/knee issue, or an explicit minutes cap, would pull the adjustment back toward the model.
- If Alexander-Walker opens preseason as a lower-usage player or his shooting regresses sharply, the MIP breakout should be discounted.
- If McCollum moves to a lower-minute sixth-man role and Atlanta still creates efficient offense, the roster could be better than this memo's modest adjustment.
- A fresh model rerun after the final 15-man roster and two-way slots are settled should override this July 9 research note if it changes the prior inputs.

## Data Quality And Uncertainty

The prior-source issue is central. The only authoritative ATL team prior is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`: 42.3 wins, 35.0/42.0/49.0 p10/p50/p90, 58.6% playoff probability, -2.728 strength, 1.398 se_strength, 3 cold starts. I did not use the older team-level wins/strength/odds from the unified-rapm team-detail JSON.

The roster packet is useful but messy. It marks many ATL rotation players as `high_uncertainty`; it gives rookies/cold starts wide bands; and for some cold-start players, expected-games fields and low/high ranges do not read cleanly. Public sources also disagree on role certainty: NBA.com's roster lists a very full group, Spotrac separates active salaries from cap holds and two-way/cap-hold context, CraftedNBA projects different bench minutes than the local packet, and SI explicitly says the center and backup wing group remained unsettled after the draft.

Injury context should be treated carefully. The April 12 NBA injury report is useful evidence that several players had late-season tags, but some absences were rest or end-of-season management, not necessarily 2026-27 chronic issues. This memo should be rechecked after medicals, camp roles, and any post-July roster moves.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative ATL prior; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` - non-authoritative ATL roster-row context only; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - non-authoritative local depth chart roles; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/README.md` - model/output overview; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md` - six-factor model description; accessed July 9, 2026.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md` - briefing template and research instructions; accessed July 9, 2026.

External public/free sources:

- `https://www.nba.com/team/1610612737/hawks` - official Hawks team page, record/team stats/current roster/coaching staff; accessed July 9, 2026.
- `https://www.nba.com/player/1630552/jalen-johnson` - Jalen Johnson player page and 2025-26 headline stats; accessed July 9, 2026.
- `https://www.nba.com/player/1630700/dyson-daniels` - Dyson Daniels player page and 2025-26 headline stats; accessed July 9, 2026.
- `https://www.nba.com/player/1629638/nickeil-alexander-walker` - Nickeil Alexander-Walker player page, headline stats, player news, award note; accessed July 9, 2026.
- `https://www.nba.com/player/1630168/onyeka-okongwu` - Onyeka Okongwu player page and 2025-26 headline stats; accessed July 9, 2026.
- `https://www.nba.com/player/203468/cj-mccollum` - CJ McCollum player page and 2025-26 headline stats; accessed July 9, 2026.
- `https://www.nba.com/player/1630228/jonathan-kuminga` - Jonathan Kuminga player page and 2025-26 headline stats; accessed July 9, 2026.
- `https://www.nba.com/news/2025-26-all-nba-teams-announced` - official 2025-26 All-NBA teams, including Jalen Johnson; accessed July 9, 2026.
- `https://www.nba.com/news/2025-26-all-defensive-teams-announced` - official 2025-26 All-Defensive teams, including Dyson Daniels; accessed July 9, 2026.
- `https://www.nba.com/news/how-do-nba-standings-look-since-jan-1-2026` - NBA.com post-Jan. 1 team summary, including Atlanta's 24-13 stretch; accessed July 9, 2026.
- `https://www.nba.com/news/jalen-johnson-hip-injury` - NBA.com/AP report on Johnson's February 2026 hip flexor injury; accessed July 9, 2026.
- `https://ak-static.cms.nba.com/referee/injury/Injury-Report_2026-04-12_01_00PM.pdf` - official NBA injury report for ATL@MIA on April 12, 2026; accessed July 9, 2026.
- `https://www.si.com/nba/hawks/onsi/atlanta-hawks-projected-starting-lineup-after-re-signing-cj-mccollum-01kvp5enn40t` - SI/OnSI projected 2026-27 starting lineup and lineup-context discussion; accessed July 9, 2026.
- `https://www.si.com/nba/hawks/onsi/projecting-the-atlanta-hawks-starting-lineup-and-rotation-after-the-nba-draft-position-by-position-01kw23xf26y9` - SI/OnSI post-draft rotation and center-depth discussion; accessed July 9, 2026.
- `https://craftednba.com/depth-charts/atlanta-hawks` - public depth chart/minute projection context; accessed July 9, 2026.
- `https://www.spotrac.com/nba/atlanta-hawks/cap/_/year/2026` - 2026-27 Hawks cap/contract context; accessed July 9, 2026.
