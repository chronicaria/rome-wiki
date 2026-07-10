---
title: LA Clippers 2026-27 Research Briefing
created: 2026-07-09
source: web
team: LAC
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# LA Clippers 2026-27 Research Briefing

Team: LA Clippers
TEAM_ABBR: LAC
Access date for public web research: July 9, 2026
Prior rule: public standings JSON only.

## Thesis Card

| Field | Value |
|---|---:|
| Required stance | MODEL_ABOUT_RIGHT |
| strength_delta_pts_per_100 | +0.4 |
| win_delta | +1.0 |
| adjusted_wins | 33.5 |
| confidence_0_to_100 | 58 |

The corrected LAC prior is low enough that I do not want to call the model clearly too high. A Garland/Ingram/Wagler/Hachimura/Lopez core has enough shooting and shot creation to land above 32.5 wins if the health is clean. But the roster also has a real reset profile: Kawhi Leonard, James Harden, and Ivica Zubac are gone; the likely guard/wing hierarchy depends on a rookie and multiple health-sensitive players; and the center room has age/mobility/rebounding questions. My adjustment is a small upward nudge, not a rejection of the prior.

## Model Prior

Only authoritative prior used for this briefing:

- Public JSON: `https://andrewjparkus.github.io/projection_2026_27.json`
- Team row: `franchise == "LAC"`
- No team-detail projection JSON was used as a team-level prior.

| Public JSON field | LAC value |
|---|---:|
| `mc_mean_wins` | 32.5 |
| `p10_wins` | 26.0 |
| `p50_wins` | 32.0 |
| `p90_wins` | 39.0 |
| `make_playoffs_prob` | 10.8% |
| `strength` | -7.294 |
| `se_strength` | 1.387 |
| `n_cold_start` | 5 |

Read of the prior: this is a low-30s-win team with a meaningful but narrow play-in path, a thin direct playoff path, and enough cold-start exposure that the model is warning against treating the recognizable names as a stable veteran contender.

## Roster And Minutes Read

The public depth-chart shape points toward Garland, Keaton Wagler, Brandon Ingram, Derrick Jones Jr. or Rui Hachimura, and Brook Lopez as the core starting/closing candidates, with Kris Dunn, Bennedict Mathurin, Gradey Dick, Isaiah Jackson, Baba Miller, Yanic Konan Niederhauser, Jordan Miller, Cam Christie, and Kobe Sanders fighting for the next minutes.

The main minutes challenge is that the Clippers have more perimeter creation names than clean two-way slots. Garland should handle the most valuable offensive role, but his recent toe history argues against simply penciling in a full star workload. Wagler has the draft profile to play early, yet a rookie guard in the West can give back points through defense and turnovers. Ingram can carry usage, but the heel issue and postseason fade make his workload and efficiency a stress point. Hachimura should probably take more high-leverage forward minutes than a generic bench label implies because his shooting helps the Garland/Ingram ecosystem. Lopez gives the roster structure, but replacing Zubac's rebounding/finishing stability with an older Brook plus Isaiah Jackson is not a neutral swap.

## Six-Factor And Style Read

The prior strength of `-7.294` is plausible because the roster can fail through defense and possession math even if the offense is watchable.

- Offensive true shooting can be better than a 32.5-win baseline if Garland, Ingram, Hachimura, Wagler, and Lopez are all healthy shooters.
- Offensive turnover risk is real because rookie-guard minutes and multiple secondary creators can blur the hierarchy.
- Offensive second-chance value is not an obvious team strength unless Jackson or the young forwards force their way into bigger roles.
- Defensive shot quality is fragile: Lopez can protect the rim in a drop, but perimeter containment and matchup mobility are less secure without elite Kawhi-level wing defense.
- Defensive turnovers should be helped by Dunn and Derrick Jones Jr., but those same lineups may strain spacing.
- Defensive second-chance value is the biggest construction worry after the Zubac trade.

## Main Challenge To The Model

The model is about right, but I would shade it modestly upward because the public prior may be slightly too punitive on shot creation. Low-30s teams often lack one credible primary guard; LAC has Garland plus Ingram, Mathurin, Wagler, and useful spacing forwards. That should keep the offense from bottoming out.

The reason the adjustment stays small is that this is not a clean "talent beats prior" case. The best offensive lineups could be too soft defensively, and the best defensive lineups could compress the floor. The Clippers are also integrating a new hierarchy after moving Harden, Zubac, and Kawhi in the same broad roster-reset window.

## Evidence Board

| Evidence | Mechanism for forecast challenge | Source |
|---|---|---|
| Harden was traded to Cleveland for Darius Garland and a future second; NBA.com described Garland as a 26-year-old two-time All-Star averaging 18.0 points and 6.9 assists. | Garland gives LAC a credible lead-guard floor, supporting a slight upward adjustment. | https://www.nba.com/news/james-harden-darius-garland-trade, accessed July 9, 2026 |
| Garland had been out since Jan. 16 with a big toe sprain at the time of the trade, and Ty Lue had no immediate debut timetable. | The same lead-guard case carries real availability risk, limiting the upward adjustment. | https://www.nba.com/news/darius-garland-new-chapter-clippers, accessed July 9, 2026 |
| LAC traded Ivica Zubac and Kobe Brown to Indiana for Bennedict Mathurin, Isaiah Jackson, two firsts, and a second; NBA.com noted Zubac's rebounding/efficiency and Mathurin's scoring jump. | LAC gained wing scoring and assets but lost a stable center/rebounding platform. | https://www.nba.com/news/ivica-zubac-trade-clippers-pacers-2026, accessed July 9, 2026 |
| The Kawhi trade sent Brandon Ingram, Gradey Dick, two firsts, a swap, and two seconds to LAC. | Asset/value reset is obvious, but replacing Kawhi's efficient two-way star minutes with Ingram/Dick lowers 2026-27 certainty. | https://www.espn.com/nba/story/_/id/49228663/sources-raptors-nearing-deal-acquire-leonard-clippers, accessed July 9, 2026 |
| NBA.com framed the Kawhi deal as a Clippers reset and noted very low 2025-26 minute continuity for 2026-27. | Continuity drag is a concrete reason the model should not simply add names and project a playoff team. | https://www.nba.com/news/4-takeaways-kawhi-leonard-returns-to-toronto-in-reported-trade-with-clippers, accessed July 9, 2026 |
| Ingram's ESPN page lists 21.5 points, 5.6 rebounds, and 3.7 assists in 2025-26, but only 12.0 points on 32.8% FG in five playoff games. | Ingram is a real scorer, but health/context can pull his rating below name value. | https://www.espn.com/nba/player/_/id/3913176/brandon-ingram, accessed July 9, 2026 |
| ESPN reported Ingram exited Game 5 with right heel inflammation after missing late-season time. | The main wing's expected games and early-season ramp are uncertain. | https://www.espn.com/nba/story/_/id/48632845/raptors-brandon-ingram-exits-game-5-vs-cavs-heel-injury, accessed July 9, 2026 |
| Hachimura agreed to a two-year, $28M Clippers deal after averaging 11.5 points and shooting 44.3% from three in 2025-26. | Rui is the cleanest fit-based reason to bump LAC: shooting forward minutes around Garland/Ingram matter. | https://www.nba.com/news/rui-hachimura-free-agency-2026, accessed July 9, 2026 |
| NBA's Keaton Wagler draft profile lists him as the No. 5 pick with a 17.9/5.1/4.2 freshman season and 45/40/80 shooting splits, while noting frame/burst concerns. | Wagler can outperform a cold-start rookie prior, but early defensive/physical adjustment risk remains. | https://www.nba.com/draft/2026/prospects/keaton-wagler, accessed July 9, 2026 |
| NBA.com's options/qualifying-offer tracker lists Brook Lopez's team option exercised, Bradley Beal's player option declined, Batum/Bogdanovic options declined, and Mathurin issued a qualifying offer. | Do not credit Beal/Batum/Bogdanovic as default rotation pieces; Brook is real; Mathurin's role is valuable but contract-sensitive. | https://www.nba.com/news/2026-free-agency-options-and-qualifying-offers, accessed July 9, 2026 |
| ESPN's depth chart lists Garland/Wagler/Ingram/Jones/Lopez as starters with Dunn, Mathurin, Dick, Rui, Jackson, and young depth behind. | The broad rotation has enough NBA talent, but the exact ordering and closing five are unsettled. | https://www.espn.com/nba/team/depth/_/name/lac, accessed July 9, 2026 |

## Player-Level Pressure Points

| Player | Model-pressure read | More minutes/value case | Less minutes/value case |
|---|---|---|---|
| Darius Garland | Lead offensive value. | Healthy Garland can make a 32.5-win prior too low by organizing real NBA offense. | Toe history and a new shared-usage environment cap the confidence. |
| Brandon Ingram | Biggest name-value trap. | Regular-season scoring and secondary creation give LAC a real wing hub. | Heel inflammation/surgery context and poor playoff efficiency argue against star-level credit. |
| Keaton Wagler | Cold-start swing player. | No. 5 pick with size, shooting, and feel can be immediately useful next to Garland. | Rookie guards usually leak value defensively and with turnovers. |
| Rui Hachimura | Fit-upside role player. | 44.3% three-point shooting in 2025-26 makes him a high-fit forward next to creators. | Low assist/rebounding impact means he is not a primary solution. |
| Bennedict Mathurin | Scoring vs efficiency tension. | Bench/spot-start scoring can lift weak second units. | 31.5% 3P and modest playmaking limit spacing and lineup versatility. |
| Brook Lopez | Structural center. | Drop coverage, rim protection, and stretch-five spacing give LAC a coherent base. | Age and mobility make a full starter load risky; Zubac's rebounding is gone. |
| Isaiah Jackson | Backup-center volatility. | Athleticism and activity can cover some non-Brook minutes. | Foul/role volatility makes him a shaky answer if Brook declines or misses time. |
| Kris Dunn | Defensive stabilizer. | Needed for point-of-attack defense around Garland/Wagler/Ingram. | His spacing can hurt already delicate half-court units. |
| Derrick Jones Jr. | Matchup forward. | Helps cover the best opposing wing and adds athletic defense. | If paired with Dunn and Brook, spacing can get cramped. |
| Gradey Dick | Shooting reserve. | Movement shooting can unclog non-Garland possessions. | Defensive trust may limit high-leverage minutes. |

## Adjustment Logic

Judgmental adjustment:

- `strength_delta_pts_per_100`: `+0.4`
- `win_delta`: `+1.0`
- `adjusted_wins`: `33.5`
- `confidence_0_to_100`: `58`

Mechanism: I am giving LAC a modest offensive-floor bump. Garland plus Ingram plus Hachimura/Wagler/Lopez shooting should be slightly better than a raw `-7.294` strength team if the main players are available. But the continuity, defensive rebounding, rookie-minute, and injury concerns keep the adjustment small.

## Counter-Thesis

The strongest case against my small upward adjustment is that the public prior may already be giving full credit for the offensive names while correctly punishing fit, continuity, and defense. Ingram's heel, Garland's toe history, Wagler's rookie learning curve, and Lopez's age could compound. If that happens, LAC does not merely settle around 32-33 wins; it can slide toward the 27-win p10 because the defense and rebounding may not have enough stable answers.

The strongest case that the model is too low is that the Clippers may have accumulated enough good-not-great offensive players to beat the mean through depth. If Garland is healthy, Ingram is past the heel issue, Mathurin returns, and Wagler is immediately playable, the team could have a credible top-eight offense for stretches and reach the high-30s.

## What Would Change My Mind

- Move toward MODEL_TOO_LOW if Garland enters camp fully healthy, Ingram has no heel restrictions, Mathurin signs cleanly, and Wagler looks rotation-ready defensively in preseason.
- Move toward MODEL_TOO_HIGH if Ingram has lingering foot/heel limitations, Garland is managed through camp, or Lopez/Jackson cannot hold the defensive glass.
- Move toward a larger positive delta if Hachimura clearly wins a closing forward role and the Garland/Wagler pairing looks defensible.
- Move toward a negative delta if Dunn and Jones must play heavy minutes together because the offense may get too cramped.

## Data Quality And Uncertainty

The public standings JSON is the only team-level prior used in this rerun. I did not use any team-detail projection JSON values for LAC's projected wins, strength, playoff odds, or uncertainty. Public web evidence is current as of July 9, 2026, but offseason rosters can change quickly. Some sources also lag official transaction finalization, so player statuses that are not finalized are treated as uncertainty rather than fact.

The biggest uncertainty inputs are:

- `n_cold_start = 5`, especially Wagler and other young/deep rotation players.
- Garland and Ingram availability.
- Mathurin contract/role clarity.
- Whether Brook Lopez can handle starter-level minutes without Zubac's rebounding base.
- Whether Hachimura's shooting meaningfully changes closing lineup quality.

## Sources

Model source:

- https://andrewjparkus.github.io/projection_2026_27.json, accessed July 9, 2026.

Public research sources:

- https://www.nba.com/news/james-harden-darius-garland-trade, accessed July 9, 2026.
- https://www.nba.com/news/darius-garland-new-chapter-clippers, accessed July 9, 2026.
- https://www.nba.com/player/1629636/darius-garland, accessed July 9, 2026.
- https://www.nba.com/news/ivica-zubac-trade-clippers-pacers-2026, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/4683634/bennedict-mathurin, accessed July 9, 2026.
- https://www.espn.com/nba/story/_/id/49228663/sources-raptors-nearing-deal-acquire-leonard-clippers, accessed July 9, 2026.
- https://www.nba.com/news/4-takeaways-kawhi-leonard-returns-to-toronto-in-reported-trade-with-clippers, accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/3913176/brandon-ingram, accessed July 9, 2026.
- https://www.espn.com/nba/story/_/id/48632845/raptors-brandon-ingram-exits-game-5-vs-cavs-heel-injury, accessed July 9, 2026.
- https://www.nba.com/player/1627742/brandon-ingram, accessed July 9, 2026.
- https://www.nba.com/news/rui-hachimura-free-agency-2026, accessed July 9, 2026.
- https://www.nba.com/draft/2026/prospects/keaton-wagler, accessed July 9, 2026.
- https://www.nba.com/news/2026-free-agency-options-and-qualifying-offers, accessed July 9, 2026.
- https://www.espn.com/nba/team/depth/_/name/lac, accessed July 9, 2026.
