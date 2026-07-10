---
title: Miami Heat 2026-27 Research Briefing
created: 2026-07-09
source: web
team: MIA
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Miami Heat 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 47.7 |
| Model p10-p90 wins | 41.0-55.0 |
| Model strength | -0.768 |
| Playoff probability | 87.6% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +0.7 pts/100, judgmental |
| Win delta | +1.8 wins, judgmental |
| Adjusted wins | 49.5 |
| Confidence | 54/100 |
| One-sentence thesis | The model is already high on Miami, but it still looks slightly low if Giannis Antetokounmpo is near normal availability because the Giannis-Bam Adebayo-Erik Spoelstra defensive and rim-pressure ecosystem should beat a purely additive roster read, while the Powell loss and fragile bench keep the adjustment small. |

## Model Prior

The only authoritative projection prior for this briefing is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "MIA"`.

That row says:

| Field | Value |
|---|---:|
| `mc_mean_wins` | 47.7 |
| `p10_wins` | 41.0 |
| `p50_wins` | 48.0 |
| `p90_wins` | 55.0 |
| `make_playoffs_prob` | 0.876 |
| `make_playin_prob` | 0.981 |
| `strength` | -0.768 |
| `se_strength` | 1.507 |
| `n_cold_start` | 5 |

By projected wins, Miami is tied with Cleveland at 47.7; sorted within the East by wins it is fourth, while the public screenshot/order places Cleveland fourth and Miami fifth because Cleveland has a slightly higher playoff probability. The win band is wide enough to admit both a mid-40s depth/health disappointment and a mid-50s contender outcome.

Important prior-source note: `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` is not used for Miami's team-level wins, strength, playoff odds, or standing. I use it below only as non-authoritative roster context because the user explicitly overrode the boss prompt's prior-source instructions.

## Roster And Minutes Read

The public roster/transaction picture is a Giannis-Bam build with a thinner guard and wing ecosystem than the raw star names imply. Miami officially completed the Giannis Antetokounmpo and Bobby Portis acquisition from Milwaukee for Tyler Herro, Kel'el Ware, Jaime Jaquez Jr., Kasparas Jakucionis, draft capital, and the No. 13 pick that became Nate Ament. Tim Hardaway Jr. also joined on a one-year deal, Andrew Wiggins' extension became official, and Norman Powell left for Chicago rather than returning to Miami.

Likely rotation read from the current public reporting:

| Slot | Likely players | Notes |
|---|---|---|
| Lead/frontcourt core | Giannis Antetokounmpo, Bam Adebayo | The season depends on whether Giannis' 2025-26 low-minute season was a one-year availability dip or a real aging/health warning. |
| Main perimeter/wing starters | Davion Mitchell, Andrew Wiggins, Pelle Larsson, Tim Hardaway Jr. | Mitchell and Larsson give defense, pace, and connective play; Hardaway is the clearest movement/spot-up shooter after Powell left. |
| Bench frontcourt | Bobby Portis, Nikola Jovic, Simone Fontecchio, Myron Gardner, Keshad Johnson | Portis is the proven scorer/rebounder; the rest are role-fragile, trade/cap-context dependent, or low-sample. |
| Deep guard depth | Dru Smith, Ryan Conwell, Jahmir Young, Trevor Keels, Tre Donaldson | Conwell has early Summer League scoring signals, but regular-season trust is unproven. Donaldson and Vladislav Goldin appear as two-way/deep roster names on the Heat roster page. |

Non-authoritative roster-context rows from `projection_2026_27_teams.json` show the top projected win contributors as Giannis Antetokounmpo (11.96), Bam Adebayo (11.95), Davion Mitchell (6.04), Pelle Larsson (5.66), Andrew Wiggins (3.98), Simone Fontecchio (1.28), Keshad Johnson (0.93), Bobby Portis (0.88), Tim Hardaway Jr. (0.83), and Myron Gardner (0.82). The same context gives the top MPG players as Bam (28.3), Giannis (28.0), Wiggins (27.9), Mitchell (27.8), Larsson (27.7), Hardaway (13.3), Portis (13.2), Jovic (12.5), Dru Smith (12.4), and Fontecchio (12.4).

That roster-context file is useful but stale/noisy. It includes a Nate Ament Miami rotation row even though Tennessee and Miami/Milwaukee transaction reporting say Ament's rights went to Milwaukee in the Giannis trade. It also has Miami's team-detail `proj_wins` at 45.7 and `strength` at 6.22, which are not authoritative for this briefing and conflict with the required standings prior. Treat the player rows as a scratchpad for role pressure points, not as the team prior.

Expected games and role concerns from the non-authoritative context:

- Giannis: 28.0 MPG, 57 expected games, 43-69 GP band, +5.8 net, high uncertainty.
- Bam: 28.3 MPG, 73 expected games, 58-77 GP band, +3.87 net, high uncertainty.
- Mitchell and Larsson: both near 28 MPG and positive-net starters, which is plausible defensively but asks a lot from lower-usage guards in an offense that lost Powell and Herro.
- Portis and Hardaway: both are projected as only 13 MPG rotation players despite being among the more proven offensive bench options.
- Deep rows include cold-start/replacement players and a stale Ament row, consistent with the authoritative prior's `n_cold_start = 5`.

## Six-Factor And Style Read

The authoritative standings JSON does not publish a team six-factor table. Using only the non-authoritative roster rows as style context, the minute-and-expected-GP weighted, x5 on-floor factor profile is approximately:

| Factor | Context value |
|---|---:|
| oTS | +2.21 |
| oTOV | +1.79 |
| oSC | -1.28 |
| dTS | +2.05 |
| dTOV | +0.07 |
| dSC | +1.56 |

This profile says the projected Heat are built around shot-quality/shot-making pressure and shot defense rather than second-chance offense. The basketball mechanism makes sense: Giannis and Bam should create rim pressure, foul pressure, short-roll passing, transition chances, switching, and rim protection. The danger is spacing. NBA.com's Giannis trade stat sheet notes his career outside-the-paint and three-point limitations, which means Mitchell/Larsson/Wiggins/Hardaway/Portis have to supply enough shooting gravity to keep the Giannis-Bam frontcourt from compressing the floor.

## Main Challenge To The Model

My best challenge is that the model is slightly too low because it may under-credit the interaction between elite frontcourt defense, rim pressure, and Spoelstra's scheme flexibility.

Giannis is not just another high-RAPM player being added to a depth chart. He changes the geometry of the team: he can protect the rim next to Bam instead of asking Bam to be the only back-line solution, he can ignite transition after defensive rebounds, and his downhill pressure creates the type of corner-three and scramble-pass ecosystem that helps lower-creation shooters look better. NBA.com notes that Giannis' recent impact has been enormous, including Milwaukee being 14.1 points per 100 better with him on the floor in 2025-26, albeit with a major minutes caveat. If Miami gets even a near-normal Giannis season, the 47.7-win prior may be a touch conservative.

The reason this is only a +1.8-win adjustment is that the counterweights are real. Powell's departure removes a 21.7 PPG, 38% three-point scorer from last season's Heat context. Herro, Ware, Jaquez, and Jakucionis are gone in the Giannis package. Miami is hard-capped/roster-spot constrained, and the depth chart leans on Hardaway at age 34, Portis in a new smaller role, young Larsson, low-sample Conwell, and several fringe or two-way names. If Giannis misses significant time, the floor is not a normal 48-win team's floor.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The authoritative prior is already a strong playoff team, not a mediocre baseline. | Local `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` has Miami at 47.7 mean wins, 41.0-55.0 p10-p90, 87.6% playoff odds, `se_strength` 1.507. | neutral | +0.0 wins | 100 |
| Giannis' star impact may be under-added because his frontcourt fit with Bam is structurally different from a generic star minute upgrade. | NBA.com's Giannis trade stat sheet reports elite rim/paint pressure and very large recent on-off impact; Miami officially added Giannis and Portis. | helps | +1.2 wins | 62 |
| Spoelstra has the personnel for a top-tier flexible defense if Giannis and Bam are healthy. | Heat roster page lists Erik Spoelstra as head coach; public roster/transaction sources identify Giannis, Bam, Wiggins, Mitchell, Portis, and Larsson as the core names. | helps | +0.7 wins | 56 |
| Powell's exit removes the cleanest high-volume perimeter scorer from last year's Heat. | NBA.com and Miami Herald report Powell agreed to a Bulls deal after averaging 21.7 PPG, 3.5 RPG, 2.5 APG and 38% from three for Miami. | hurts | -1.0 wins | 76 |
| Hardaway helps patch shooting but does not fully replace Powell's creation. | ESPN reports Hardaway agreed to a one-year Heat deal and made more than 40% of his threes in 2025-26; ESPN player page lists 13.5 PPG and 40.7% from three. | helps | +0.4 wins | 65 |
| The non-authoritative roster layer has stale player rows, especially Nate Ament. | Local roster context credits Ament with 10.4 MPG and 0.43 wins for Miami, but Tennessee says his rights were traded to Milwaukee after Miami selected him No. 13. | hurts | -0.3 wins | 80 |
| The back half of the roster is still not finished enough for a big upside adjustment. | Miami Herald reports 12 standard-contract players after Powell left, two to three roster spots to fill, and first-apron constraints. | hurts | -0.7 wins | 72 |
| Conwell is a useful upside swing, but regular-season translation is uncertain. | NBA.com lists Conwell as a 2026 second-round rookie and notes 21, 16, and 26 point Summer League games; that is encouraging but not proof of rotation value. | neutral | +0.2 wins | 45 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Giannis Antetokounmpo | Non-authoritative context: starter, 28.0 MPG, 57 expected games, +5.8 net, 11.96 projected wins, high uncertainty. | Upside if 57 GP/28 MPG is conservative; downside if 2025-26 low minutes are a health/aging signal rather than an outlier. | Miami's whole projection hinges on whether Giannis is a 1,600-minute star or a 2,100-minute star. |
| Bam Adebayo | Context: starter, 28.3 MPG, 73 expected games, +3.87 net, 11.95 wins. | Role may get easier defensively next to Giannis, but offensive spacing can get harder if he shares many non-shooting frontcourt possessions. | Bam-Giannis is the mechanism behind the positive adjustment and the spacing risk behind the self-critique. |
| Davion Mitchell | Context: starter, 27.8 MPG, 73 expected games, +0.72 net, 6.04 wins. ESPN lists 9.3 PPG, 6.5 APG, 49.0 FG% in 2025-26. | Defensive and passing fit is strong; high-minute starter value may be optimistic if opponents duck under and load the paint. | Mitchell's minutes decide whether the Heat have enough guard organization without Herro/Powell. |
| Pelle Larsson | Context: starter, 27.7 MPG, 71 expected games, +0.61 net, 5.66 wins. ESPN lists 11.4 PPG, 3.5 RPG, 3.4 APG, 49.6 FG% in 2025-26. | The model may be right to like the all-around growth, but 28 MPG on a contender is a bigger defensive and shooting stress test. | Larsson is one of the swing players between "deep enough" and "too thin after the trade." |
| Andrew Wiggins | Context: starter, 27.9 MPG, 65 expected games, -0.15 net, 3.98 wins. ESPN lists 15.4 PPG and 41.4% from three in 2025-26. | Could be undervalued if Miami gets the 2025-26 shooting and wing defense version; could be overvalued if age-32 athletic decline hits. | Wiggins is the bridge between the jumbo frontcourt and perimeter matchups. |
| Tim Hardaway Jr. | Context: rotation, 13.3 MPG, 48 expected games, -1.13 net, 0.83 wins. ESPN reports the Heat deal and a 40%+ three-point season. | The model may be too low on his regular-season shooting utility if he is the cleanest movement shooter on the roster. | His gravity is the simplest fix for Giannis-Bam spacing. |
| Bobby Portis | Context: rotation, 13.2 MPG, 38 expected games, -0.60 net, 0.88 wins. ESPN/NBA pages list 13.7 PPG and 6.4 RPG in 2025-26. | The context row may underplay his regular-season scoring/rebounding, but his defensive fit in high-leverage games is less clear. | Portis is the only proven bench frontcourt scorer; if he is only a 13 MPG player, Miami's bench scoring is thin. |
| Ryan Conwell | Context: deep/cold-ish roster pressure outside the top contributors; NBA.com lists him as a rookie, No. 37 pick, rights traded to Miami. | Summer League scoring is promising, but NBA rotation translation is uncertain. | He is the kind of cheap guard/wing shotmaking Miami needs because the hard cap limits veteran additions. |
| Nate Ament | Context: rotation, 10.4 MPG, rookie/cold row, 0.43 wins. | This is likely stale for Miami because his rights went to Milwaukee. | Any Miami projection/roster context that credits Ament needs a manual correction. |

## Adjustment Logic

I am applying a judgmental adjustment of +0.7 pts/100, roughly +1.8 wins, because I think the model may slightly under-credit the combined effect of:

- Giannis and Bam sharing back-line defensive responsibilities.
- Spoelstra having enough defensive versatility to build elite regular-season shot defense.
- Giannis creating easier offense for limited-creation guards through transition, roll gravity, and kickouts.
- Hardaway and Wiggins giving just enough shooting to keep the regular-season offense above the scary version of the spacing floor.

I am not applying a larger adjustment because:

- Powell's departure is a real shot-creation and shooting loss.
- Herro/Ware/Jaquez/Jakucionis are gone, so this is not simply last year's Heat plus Giannis.
- The roster has first-apron and open-spot constraints.
- The non-authoritative roster context contains stale player rows and a lot of high-uncertainty/deep-bench value.
- Giannis' 2025-26 minutes were low enough that 57 expected games is not obviously too conservative.

The adjusted view is therefore 49.5 wins, not a new model output.

## Counter-Thesis

The strongest argument against `MODEL_TOO_LOW` is that 47.7 wins already bakes in a huge amount of Giannis value, and the roster around him may be worse for regular-season stability than the headline names imply. Powell left, Herro left, Ware left, and Miami no longer has a clean second perimeter scorer. If Mitchell and Larsson are treated as high-minute starters, opponents can load the paint against Giannis and Bam. If Hardaway is the required spacing release valve at age 34 and Portis is the only proven bench scorer, Miami may win because of defense but struggle to manufacture enough half-court offense against good teams. In that world, the model is not too low; it is right, or even a little too high.

There is also a data-quality counter-thesis. The authoritative standings prior and the non-authoritative roster-detail artifact disagree on team wins and strength, while the roster-context file includes Ament on Miami despite his rights being traded to Milwaukee. If similar roster-staleness exists elsewhere in the Miami input, my adjustment could be leaning on a moving target.

## What Would Change My Mind

- A confirmed opening-night depth chart showing Hardaway starting or playing 24-plus MPG would make me more comfortable with the positive adjustment.
- A reliable update that Giannis will be load-managed below roughly 55 games or below 30 MPG would push the stance back toward `MODEL_ABOUT_RIGHT` or `MODEL_TOO_HIGH`.
- A late veteran guard/wing signing under the apron would increase the upside case.
- A preseason rotation where Mitchell, Larsson, and Bam all share the floor with limited shooting would reduce confidence.
- A corrected roster/projection artifact that removes stale Ament minutes and reconciles the standings JSON with team-detail rows would sharpen the direction.
- Early-season evidence that Conwell is a real rotation shooter would raise the depth floor.

## Data Quality And Uncertainty

- The authoritative team prior is only `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. All team-level numbers in this memo come from that row.
- The non-authoritative team-detail artifact has conflicting team-level numbers for Miami (`proj_wins` 45.7, `strength` 6.22), so I do not use those for prior, odds, or final adjustment base.
- The same non-authoritative roster context includes Nate Ament as a Miami rotation player, while external draft/trade reporting says his rights went to Milwaukee.
- NBA.com's Heat roster page still displays Norman Powell in the explore/roster area even though NBA.com News and Miami Herald report he agreed to join Chicago. I treat Powell as gone and flag the roster page as possibly lagged.
- The local model prior reports `n_cold_start = 5`, and the roster-context file has many high-uncertainty players. The back half of the rotation should be treated cautiously until final camp rosters settle.
- All external facts were checked on July 9, 2026, using public/free web sources only.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative Miami prior; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` - non-authoritative roster context only; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - non-authoritative roster/depth-chart context only; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/README.md` - model context; accessed July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/MODEL_OVERVIEW.md` - model context; accessed July 9, 2026.
- `private-model-workspace/andrewjparkus.github.io/projection.html` - public standings page implementation; accessed July 9, 2026.
- `private-model-workspace/andrewjparkus.github.io/team2027.html` - public team page implementation; accessed July 9, 2026.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md` - briefing template; accessed July 9, 2026.

External public/free sources:

- https://www.nba.com/news/giannis-antetokounmpo-stat-sheet-miami-trade-2026 - Giannis trade/stat context; accessed July 9, 2026.
- https://www.miamiherald.com/sports/nba/miami-heat/article316393812.html - trade official, Tim Hardaway Jr. signing, Wiggins extension; accessed July 9, 2026.
- https://www.miamiherald.com/sports/nba/miami-heat/article316338236.html - Norman Powell to Bulls, Miami cap/roster spot context; accessed July 9, 2026.
- https://www.nba.com/news/norman-powell-free-agency-2026 - NBA.com Powell to Bulls report and 2025-26 Powell production; accessed July 9, 2026.
- https://www.nba.com/heat/roster - Heat roster/coaching page, with noted lag/conflict around Powell; accessed July 9, 2026.
- https://www.espn.com/nba/player/gamelog/_/id/3032977/giannis-antetokounmpo - Giannis 2025-26 ESPN stat/gamelog page; accessed July 9, 2026.
- https://www.espn.com/nba/player/gamelog/_/id/4066261/bam-adebayo - Bam 2025-26 ESPN stat/gamelog page; accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/3059319/andrew-wiggins - Wiggins 2025-26 ESPN profile/stat page; accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/4278053/davion-mitchell - Mitchell 2025-26 ESPN profile/stat page; accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/4601025/pelle-larsson - Larsson 2025-26 ESPN profile/stat page; accessed July 9, 2026.
- https://www.espn.com/nba/player/_/id/2528210/tim-hardaway-jr - Hardaway 2025-26 ESPN profile/stat page; accessed July 9, 2026.
- https://www.espn.com/nba/story/_/id/49230266/sources-heat-add-tim-hardaway-jr-1-year-65m-deal - ESPN Hardaway signing report; accessed July 9, 2026.
- https://www.espn.com/nba/player/gamelog/_/id/3064482/bobby-portis - Portis 2025-26 ESPN stat/gamelog page; accessed July 9, 2026.
- https://www.nba.com/player/1626171/bobby-portis - NBA.com Portis profile; accessed July 9, 2026.
- https://www.nba.com/player/1643553/ryan-conwell - NBA.com Conwell profile, draft rights, Summer League notes; accessed July 9, 2026.
- https://utsports.com/news/2026/6/23/mens-basketball-ament-selected-no-13-in-2026-nba-draft-by-miami-heat - Nate Ament draft rights traded to Milwaukee; accessed July 9, 2026.
- https://www.nba.com/draft/2026/prospects/nate-ament - NBA.com Nate Ament prospect context; accessed July 9, 2026.
