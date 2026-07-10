---
title: BOS 2026-27 research briefing
created: 2026-07-09
source: web
team: BOS
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# BOS 2026-27 research briefing

Team: Boston Celtics
Research date: July 9, 2026

## Thesis Card

| Field | Value |
|---|---:|
| Stance | MODEL_TOO_HIGH |
| Model wins prior | 58.9 |
| win_delta | -2.5 |
| Judgmental `strength_delta_pts_per_100` | -0.7 |
| Adjusted wins | 56.4 |
| Confidence | 60/100 |

Boston should still be treated as a top Eastern Conference team. The challenge is that 58.9 wins bakes in a near-60-win profile after a major Brown-to-George swap, a post-Achilles Tatum season, and very optimistic role-player value from Derrick White, Payton Pritchard, and Neemias Queta. My adjustment is modest because the roster remains very good.

## Model Prior

The only authoritative team-level projection prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "BOS"`.

| Required prior field | BOS value |
|---|---:|
| `mc_mean_wins` | 58.9 |
| `p10_wins` | 53 |
| `p50_wins` | 59 |
| `p90_wins` | 65 |
| `make_playoffs_prob` | 99.9% |
| `strength` | 4.502 |
| `se_strength` | 1.344 |
| `n_cold_start` | 2 |

Do not use `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for BOS team-level wins, team strength, playoff odds, or standings rank. I use that file only as non-authoritative roster context for player rows, minutes, uncertainty, and player-level pressure points.

## Roster And Minutes Read

Non-authoritative roster context from the local team-detail player rows:

| Player | Role | MPG | Exp GP | Net | Proj wins | Age | Pressure point |
|---|---:|---:|---:|---:|---:|---:|---|
| Derrick White | starter | 28.0 | 75.0 | +4.30 | 12.70 | 32.9 | Star-level role-player valuation at age 33. |
| Payton Pritchard | starter | 27.6 | 79.0 | +2.34 | 9.38 | 29.3 | Starter promotion after career year. |
| Jayson Tatum | starter | 27.6 | 61.0 | +3.42 | 8.90 | 29.3 | Post-Achilles workload and rate question. |
| Paul George | starter | 27.4 | 49.0 | +1.83 | 5.21 | 37.1 | Age and availability fragility. |
| Neemias Queta | starter | 27.0 | 75.0 | +2.96 | 9.94 | 27.9 | Nearly 10-win center context may be rich. |
| Sam Hauser | rotation | 13.0 | 48.0 | +1.67 | 2.31 | 29.5 | Could deserve more minutes if shooting holds. |
| Mitchell Robinson | rotation | 12.4 | 29.0 | +1.29 | 1.22 | 29.2 | Health risk, but may be under-credited if healthy. |
| Hugo Gonzalez | rotation | 11.9 | 52.0 | +0.64 | 1.73 | 21.2 | Development upside, not clean injury insurance yet. |

Local depth chart context lists the likely starters as Queta, Tatum, George, White, and Pritchard, with Robinson, Hauser, Jordan Walsh, Hugo Gonzalez, Mike Conley, Baylor Scheierman, and Luka Garza in the rotation tier. Deep or developmental names include Amari Williams, Chris Cenac, Ron Harper Jr., John Tonje, Dillon Mitchell, Max Shulga, and Dalano Banton.

Public roster evidence matches the broad shape: NBA.com lists Tatum, George, White, Conley, Pritchard, Queta, Robinson, Hauser, Gonzalez, Scheierman, Walsh, Banton, Cenac, Mitchell, Tonje, Shulga, and Amari Williams on the Celtics roster. NESN projects a Pritchard-White-George-Tatum-Queta starting group with Robinson, Conley, Hauser, Scheierman, Gonzalez, Mitchell, and Garza behind it. CelticsBlog frames the same open questions: whether Pritchard starts permanently, how Boston manages George's workload, and whether Queta or Robinson starts at center.

## Six-Factor And Style Read

There is no authoritative team-level six-factor prior in the standings file, so this section uses only player-level roster context and public basketball evidence. The style read is still clear: Boston wants Tatum plus two-guard spacing, low-mistake perimeter decision-making, switchable wings, and center defense/rebounding.

The model's player rows push Boston toward strong defensive shot value through White, Queta, and Tatum. White's player vector is especially defense-forward, while Queta's value is tied to rim defense and second-chance work. Pritchard's value is more offense and ball-security oriented. George fits the style on paper because he can shoot, defend off the ball, and avoid hijacking possessions.

The fit concern is that Boston's new roster leans toward extremes: small guards at the point of attack, older wings, and non-shooting centers. A Pritchard-White-George-Tatum-Queta lineup has enough skill to win a lot, but it asks Pritchard to hold up in a larger role and puts more creation burden on Tatum. A Robinson version improves rebounding and rim deterrence, but reduces spacing and creates free-throw exposure.

## Main Challenge To The Model

The main challenge is role-player compression. The non-authoritative roster context gives White, Queta, and Pritchard 32.0 combined projected wins. All three are good players, but that is a very large share of the win engine to assign to non-Tatum players who are either aging, recently promoted, or still proving that last season's role scales cleanly.

Queta is the sharpest pressure point. His row gives him 27.0 MPG, 75 expected games, +2.96 net, and 9.94 projected wins. Public reporting supports real optimism: CelticsBlog reports he started 75 games and averaged 10.2 points, 8.4 rebounds, 1.3 blocks, and 65.3% shooting in 2025-26. But the same roster added Robinson, and public discussion still frames the starting center spot as unsettled. That makes Queta's nearly 10-win context look aggressive.

The George/Brown exchange makes the regular-season ceiling more brittle. George can still help as a shooter and off-ball defender, but the local player context needs 49 expected games and 27.4 MPG from an age-37 season. Public evidence flags availability risk: StatMuse lists George at 37 games in 2025-26, and RotoWire notes he has reached 70 regular-season games just once in his last seven seasons.

Tatum is the reason the downgrade stays small. NBA.com reported he returned 298 days after Achilles surgery, and the local roster context already uses only 61 expected games. If Tatum plays closer to 70 games at near pre-injury force, Boston can beat my adjusted number quickly.

## Evidence Board

| ID | Evidence | Why it matters | Source |
|---|---|---|---|
| E1 | BOS prior is 58.9 wins, 53/59/65 p10/p50/p90, 99.9% playoffs, +4.502 strength, 1.344 SE, 2 cold-start players. | The authoritative baseline is elite. | `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` |
| E2 | NBA.com roster lists the core current roster, including Tatum, George, White, Pritchard, Conley, Queta, Robinson, Hauser, Gonzalez, Cenac, and Mitchell. | Confirms roster state. | https://www.nba.com/team/1610612738/celtics |
| E3 | Celtics announced the Paul George acquisition and future draft picks. | Confirms the Brown/George roster shift. | https://www.nba.com/celtics/news/press-release-20260706-celtics-acquire-nine-time-nba-all-star-paul-george-and-future-draft-picks |
| E4 | NBC Sports Boston reports the Brown-for-George trade was official and that Robinson and Conley signings were official. | Confirms the major offseason additions. | https://www.nbcsportsboston.com/nba/boston-celtics/celtics-new-jersey-numbers-mitchell-robinson-mike-conley-jr/794583/ |
| E5 | NBA.com reports Robinson joined Boston after averaging 5.7 points, 8.8 rebounds, and 1.2 blocks in 60 games for New York. | Robinson raises the center floor but complicates Queta's minutes. | https://www.nba.com/news/mitchell-robinson-celtics-free-agency-2026 |
| E6 | NBA.com reports Tatum returned 298 days after Achilles surgery and notes a typical 9-to-12 month rehab window. | Tatum's workload is a core forecast hinge. | https://www.nba.com/news/jayson-tatum-expected-debut-vs-mavs |
| E7 | CelticsBlog reports Queta's extension and 2025-26 breakout production. | Supports Queta optimism, but also establishes that the market/role changed. | https://www.celticsblog.com/boston-celtics-news/142651/celtics-neemias-queta-extension |
| E8 | NESN projects Pritchard, White, George, Tatum, and Queta as starters. | Matches the likely rotation and exposes the Pritchard/Queta role assumptions. | https://nesn.com/boston-celtics/news/celtics-lineup-projection-2026-jaylen-brown-paul-george-trade/49c1c12b7a12c0095c018cf1 |
| E9 | CelticsBlog frames open questions around Pritchard, George's workload, and Queta vs. Robinson. | Confirms that the model's rotation is not settled reality. | https://www.celticsblog.com/boston-celtics-discussion-topics/143257/celtics-reacts-survey-payton-pritchard-promotion-paul-george-6th-man-mitchell-robinson-a-starting-center |
| E10 | ESPN lists Boston at 56-26 in 2025-26 and Joe Mazzulla as coach. | The model asks Boston to improve from an already strong baseline. | https://www.espn.com/nba/team/roster/_/name/bos/boston-celtics |
| E11 | StatMuse lists George at 17.3 points, 5.3 rebounds, 3.6 assists, 39.2% from three, and 37 games in 2025-26. | Skill fit remains real, but availability is the concern. | https://www.statmuse.com/nba/ask/paul-george-2026-stats |
| E12 | RotoWire notes George joins Boston after two injury-filled Philadelphia seasons and has reached 70 games once in his last seven seasons. | Reinforces availability downside. | https://www.rotowire.com/basketball/player/paul-george-3114 |
| E13 | CLNS notes Robinson's offensive rebounding, injury history, 50.8% career free-throw issue, and Conley's likely spot-minute role. | Captures both frontcourt upside and lineup constraints. | https://www.clnsmedia.com/celtics-sign-mitchell-robinson-and-mike-conley-to-begin-free-agency/ |
| E14 | CelticsBlog summer-league roster story identifies Gonzalez, Cenac, Mitchell, Amari Williams, Tonje, DeVries, Uzan, and others. | Deep bench has development upside, but not banked proven production. | https://www.celticsblog.com/boston-celtics-news/143080/celtics-summer-league-roster-hugo-gonzalez |
| E15 | NBC Sports Boston flags Gonzalez's larger-role case and Cenac/Mitchell as notable young players. | Supports the development pipeline, not necessarily 2026-27 certainty. | https://www.nbcsportsboston.com/nba/boston-celtics/celtics-2026-nba-summer-league-schedule-roster/794725/ |

## Player-Level Pressure Points

| Player | Model/context read | Challenge |
|---|---|---|
| Derrick White | +4.30 net, 12.70 projected wins, 75 expected games. | Excellent player, but this is star-level value for an age-33 guard. |
| Neemias Queta | +2.96 net, 9.94 projected wins, 75 expected games. | Real breakout, but center role overlaps with Robinson and may be too rich. |
| Payton Pritchard | +2.34 net, 9.38 projected wins, 79 expected games. | Career-year guard is being promoted into starter-level responsibility. |
| Jayson Tatum | +3.42 net, 8.90 projected wins, 61 expected games. | Could be undervalued if fully healthy, but rate and workload after Achilles still matter. |
| Paul George | +1.83 net, 5.21 projected wins, 49 expected games. | Skill fit is good; age and availability are the downside. |
| Mitchell Robinson | +1.29 net, 1.22 projected wins, 29 expected games. | Could be under-credited if healthy, but spacing and free throws limit closing lineups. |
| Sam Hauser | +1.67 net, 2.31 projected wins, 48 expected games. | May deserve more minutes if shooting and team defense hold. |
| Hugo Gonzalez | +0.64 net, 1.73 projected wins, 52 expected games. | Development upside, but not enough yet to treat as clean George insurance. |
| Chris Cenac | Cold-start rookie, -1.22 net, 10.3 MPG, 34 expected games. | Sensibly cautious; immediate rotation value should not be assumed. |
| Mike Conley | 12.0 MPG, 35 expected games. | Useful veteran stabilizer, but overexposure would signal trouble. |

## Adjustment Logic

The numerical adjustment is a judgmental research adjustment, not a new model output.

| Field | Value |
|---|---:|
| Authoritative model wins | 58.9 |
| `strength_delta_pts_per_100` | -0.7 |
| win_delta | -2.5 |
| `adjusted_wins` | 56.4 |
| `confidence_0_to_100` | 60 |

Numeric win_delta: -2.5.

I subtract 2.5 wins because the prior needs several optimistic things to be true at once: George must stay useful and available in an age-37 season, Tatum must be close to himself after an Achilles return, Queta must hold a near top-tier center impact estimate, Pritchard must carry starter creation without losing efficiency, and Boston's young wing depth must cover injuries well enough. None of those assumptions is impossible. The stack is the issue.

## Counter-Thesis

The strongest case against my downgrade is that the model may already be conservative on the exact players I am worried about. Boston won 56 games in 2025-26, the prior is asking for only about three more wins, and Tatum's 61 expected games may be light if his recovery is truly behind him. Robinson's 29 expected games may also understate his regular-season contribution if he stays healthy, and George does not need to be prime Paul George to help in a lower-usage Boston role.

If Tatum plays 65-plus games, George gives 55 useful games, and Pritchard/Queta simply repeat their 2025-26 gains, Boston can look like a 59-to-60 win team. That is why the downgrade is small rather than aggressive.

## What Would Change My Mind

I would move closer to the 58.9-win prior if training camp shows Tatum without workload restrictions, George is publicly planned for a normal starter workload rather than frequent rest, and one of Queta or Robinson clearly wins the center job without forcing awkward spacing compromises.

I would downgrade further if Boston announces a conservative Tatum plan, George is managed like a 50-game player, Pritchard returns to a bench role because of matchup concerns, or the young wings look unready to absorb real minutes behind George and Tatum.

## Data Quality And Uncertainty

The authoritative prior is clean: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, BOS row only. It gives `mc_mean_wins = 58.9`, `p10_wins = 53`, `p50_wins = 59`, `p90_wins = 65`, `make_playoffs_prob = 99.9%`, `strength = 4.502`, `se_strength = 1.344`, and `n_cold_start = 2`.

The player/minutes context is less authoritative. `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` is used only for roster rows, not for team-level wins, team strength, playoff odds, or standings. Its player rows are still useful for identifying which assumptions drive the prior, but the BOS team-level numbers in that file are ignored.

External reporting is current as of sources accessed July 9, 2026, but the roster is still pre-training-camp. Starting roles, back-to-back plans, and center hierarchy can change. My confidence is 60/100 because the mechanisms are clear, while the magnitude is uncertain.

## Sources

| Source | Use | Accessed |
|---|---|---|
| `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` | Only authoritative BOS team-level prior. | accessed July 9, 2026 |
| `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` | Non-authoritative player rows, MPG, expected games, player ratings, player projected wins, uncertainty flags only. | accessed July 9, 2026 |
| `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` | Non-authoritative roster/depth context. | accessed July 9, 2026 |
| https://www.nba.com/team/1610612738/celtics | Current Celtics roster. | accessed July 9, 2026 |
| https://www.nba.com/celtics/news/press-release-20260706-celtics-acquire-nine-time-nba-all-star-paul-george-and-future-draft-picks | Paul George acquisition. | accessed July 9, 2026 |
| https://www.nbcsportsboston.com/nba/boston-celtics/celtics-new-jersey-numbers-mitchell-robinson-mike-conley-jr/794583/ | Official Brown trade, Robinson signing, Conley signing coverage. | accessed July 9, 2026 |
| https://www.nba.com/news/mitchell-robinson-celtics-free-agency-2026 | Mitchell Robinson signing and recent production. | accessed July 9, 2026 |
| https://www.nba.com/news/jayson-tatum-expected-debut-vs-mavs | Tatum Achilles return timing and rehab context. | accessed July 9, 2026 |
| https://www.nba.com/news/jayson-tatum-progress-achilles-surgery | Celtics caution around Tatum recovery. | accessed July 9, 2026 |
| https://www.celticsblog.com/boston-celtics-news/142651/celtics-neemias-queta-extension | Queta extension and 2025-26 production. | accessed July 9, 2026 |
| https://nesn.com/boston-celtics/news/celtics-lineup-projection-2026-jaylen-brown-paul-george-trade/49c1c12b7a12c0095c018cf1 | Public rotation projection. | accessed July 9, 2026 |
| https://www.celticsblog.com/boston-celtics-discussion-topics/143257/celtics-reacts-survey-payton-pritchard-promotion-paul-george-6th-man-mitchell-robinson-a-starting-center | Public discussion of rotation uncertainty. | accessed July 9, 2026 |
| https://www.espn.com/nba/team/roster/_/name/bos/boston-celtics | Roster, 2025-26 record, coach. | accessed July 9, 2026 |
| https://www.statmuse.com/nba/ask/paul-george-2026-stats | Paul George 2025-26 box line and games. | accessed July 9, 2026 |
| https://www.rotowire.com/basketball/player/paul-george-3114 | Paul George availability context. | accessed July 9, 2026 |
| https://www.clnsmedia.com/celtics-sign-mitchell-robinson-and-mike-conley-to-begin-free-agency/ | Robinson and Conley role/fit context. | accessed July 9, 2026 |
| https://www.celticsblog.com/boston-celtics-news/143080/celtics-summer-league-roster-hugo-gonzalez | Summer League and development group. | accessed July 9, 2026 |
| https://www.nbcsportsboston.com/nba/boston-celtics/celtics-2026-nba-summer-league-schedule-roster/794725/ | Young-player and Summer League context. | accessed July 9, 2026 |
