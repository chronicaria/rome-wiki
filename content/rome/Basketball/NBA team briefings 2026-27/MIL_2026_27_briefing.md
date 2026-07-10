---
title: Milwaukee Bucks 2026-27 Research Briefing
created: 2026-07-09
source: web
team: MIL
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Milwaukee Bucks 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 29.7 |
| Model p10-p90 wins | 23.0-36.0, p50 30.0 |
| Model strength | -8.319 |
| Playoff probability | 0.019 / 1.9% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +0.6 pts/100, judgmental |
| Win delta | +1.6 wins, judgmental |
| Adjusted wins | 31.3 |
| Confidence | 54/100 |
| One-sentence thesis | The post-Giannis Bucks are a rebuild team, but the 29.7-win prior looks a little low if Milwaukee keeps enough of its competent veteran and young-rotation minutes: Herro, Turner, Rollins, Jaquez, Green, Porter, Ware, Kuzma, LeVert, Burries, and Ament form a low-ceiling but not replacement-level roster. |

## Model Prior

The only authoritative team prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "MIL"`.

| Source field | Value |
|---|---:|
| `mc_mean_wins` | 29.7 |
| `p10_wins` | 23.0 |
| `p50_wins` | 30.0 |
| `p90_wins` | 36.0 |
| `make_playoffs_prob` | 0.019 |
| `make_playin_prob` | 0.094 |
| `strength` | -8.319 |
| `se_strength` | 1.402 |
| `n_cold_start` | 4 |

The row puts Milwaukee 12th of 15 Eastern Conference teams by projected wins. This is a low-prior team with a wide enough band to cover both a 20s-win teardown and a low-30s competent-rebuild outcome.

Important source-control note: `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` is not used for team wins, team strength, or playoff odds. Its team-level fields conflict with the authoritative file, so I use it only as non-authoritative roster/minute context.

## Roster And Minutes Read

Public reporting and public depth charts describe a post-Giannis roster. NBA.com reported that Milwaukee agreed to send Giannis Antetokounmpo and Bobby Portis to Miami for Tyler Herro, Jaime Jaquez Jr., Kel'el Ware, Kasparas Jakucionis, the No. 13 pick, and future picks. NBA.com also described Milwaukee as rebuilding around new lottery picks Brayden Burries and Nate Ament. Sports Forecaster's current depth chart lists Ryan Rollins, Tyler Herro, Jaime Jaquez Jr., Kyle Kuzma, and Kel'el Ware as the top positional names, with Myles Turner also on the center depth chart. Brew Hoop reported that Milwaukee added Caris LeVert and two second-round picks for Taurean Prince and Gary Harris.

Non-authoritative local roster context ranks the top projected win contributors this way:

| Player | Role | MPG | Exp GP | Net | Proj wins | Flag |
|---|---:|---:|---:|---:|---:|---|
| Myles Turner | starter | 26.8 | 70 | +1.08 | 6.63 | high uncertainty |
| A.J. Green | starter | 27.0 | 76 | +0.73 | 6.56 | high uncertainty |
| Ryan Rollins | starter | 27.2 | 73 | +0.11 | 5.12 | high uncertainty |
| Tyler Herro | starter | 27.1 | 55 | +0.13 | 3.89 | high uncertainty |
| Kevin Porter Jr. | starter | 27.3 | 56 | -0.93 | 2.41 | high uncertainty |
| Kasparas Jakucionis | rotation | 12.0 | 31 | +0.17 | 0.98 | high uncertainty |
| Jaime Jaquez Jr. | rotation | 12.9 | 43 | -0.91 | 0.89 | high uncertainty |
| Kel'el Ware | rotation | 12.3 | 42 | -1.03 | 0.77 | high uncertainty |

The top projected MPG players in those local roster rows are Porter, Rollins, Herro, Green, Turner, Jaquez, Cormac Ryan, Kuzma, Ware, Prince, Jakucionis, and Jericho Sims. The problem is that the public depth chart and recent transactions are already out of phase with parts of this context: Prince and Harris were reportedly moved for LeVert, Nate Ament appears in public sources but not in these roster rows, and the public depth chart gives Ware and Kuzma larger practical roles than the local rows do.

The model's best case for 30 wins is a rotation with nine real NBA players: Herro as the best scorer, Rollins and Porter as creators, Green as spacing, Jaquez as a connector wing, Turner and Ware as center options, Kuzma as a forward stopgap, and LeVert as bench creation. The fragility is that none of those players is a primary star, several have availability or role volatility, and the franchise has obvious rebuild incentives.

## Six-Factor And Style Read

Using only the non-authoritative roster rows, the MPG-weighted player factor vector is approximately:

| Factor | MPG-weighted roster context |
|---|---:|
| oTS | +0.32 |
| oTOV | -0.00 |
| oSC | -0.51 |
| dTS | -0.07 |
| dTOV | -0.16 |
| dSC | -0.05 |

This reads like a team with enough shooting and pull-up scoring to avoid total offensive collapse, but weak second-chance pressure and no obvious defensive identity after losing Giannis and Portis. Turner still gives stretch-center and rim-protection value, Ware gives vertical size, and Burries could defend early, but the guard-heavy core of Herro, Rollins, Porter, Green, and LeVert puts real stress on point-of-attack defense and defensive rebounding.

The mechanism that matters most: Milwaukee may be able to score enough against second units, but it may not stop good teams unless Turner/Ware stabilize the back line and Burries/Jaquez take hard perimeter assignments quickly.

## Main Challenge To The Model

I think the model is slightly too low, not because Milwaukee is secretly good, but because 29.7 wins prices in a near-bottom outcome for a roster that still has multiple competent players.

The main upward challenge is minutes-based. The local roster context gives Jaquez only 12.9 MPG and 43 expected games even though ESPN's 2025-26 line lists him at 15.4 points, 5.0 rebounds, 4.7 assists, 75 games, and 28.3 minutes. It gives Ware only 12.3 MPG and 42 expected games while public depth charts list him high in the center hierarchy and NBA.com logged late-season 36- and 42-minute games with major rebounding/block production. It omits LeVert from the team-detail roster context even though Brew Hoop reports Milwaukee acquired him after the Giannis deal. It also gives Herro 55 expected games, which is appropriately cautious, but if his foot issue does not materially delay camp, he has a path to outplay that expectation.

The main downward challenge to my own thesis is structural. This team lacks an All-NBA anchor, may trade Herro, Turner, Kuzma, or LeVert for future value, and has a deep-bench group full of cold-start, rookie, or replacement-style uncertainty. If the organization prioritizes development and draft position by January, the 29.7-win prior could be too high.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The authoritative prior is a low 29.7-win, 1.9% playoff team. | Local `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `MIL`, accessed July 9, 2026. | neutral | 0.0 wins | 100 |
| Milwaukee is genuinely post-star: Giannis and Portis were sent out for Herro, Jaquez, Ware, Jakucionis, a lottery pick, and future picks. | NBA.com reported the trade framework and framed Milwaukee as retooling without Giannis: https://www.nba.com/news/bucks-state-after-reported-giannis-antetokounmpo-trade, accessed July 9, 2026. | hurts | -2.0 wins | 85 |
| The public roster still has enough competent NBA offense to clear the high-20s if retained. | Herro averaged 20.5 points and 4.1 assists in 2025-26 per ESPN; Rollins averaged 17.3 points and 5.6 assists per ESPN snippets; Porter averaged 17.4 points and 7.4 assists per ESPN snippets. URLs in Sources, accessed July 9, 2026. | helps | +1.5 wins | 65 |
| The local roster context may understate Jaquez's role. | Local rows give Jaquez 12.9 MPG and 43 expected games; ESPN lists his 2025-26 line at 15.4 points, 5.0 rebounds, 4.7 assists, 75 games, and 28.3 MPG. https://www.espn.com/nba/player/gamelog/_/id/4432848/jaime-jaquez-jr, accessed July 9, 2026. | helps | +0.8 wins | 70 |
| The local roster context may understate Ware's 2026-27 path if he wins the starting center job or forces a two-big structure. | Sports Forecaster lists Ware atop the center depth chart; NBA.com logged late-season games of 24/19/7 blocks and 12/19/5 blocks. https://sportsforecaster.com/nba/depth-chart/l.nba.com-t.14/Milwaukee_Bucks and https://www.nba.com/player/1642276/kelel-ware, accessed July 9, 2026. | helps | +0.7 wins | 58 |
| Herro's scoring is real but availability is not clean. | ESPN lists Herro at 20.5/4.8/4.1 in 33 games; NBA.com and CBS Sports noted a minor right-foot procedure after the season. https://www.espn.com/nba/player/gamelog/_/id/4395725/tyler-herro and https://www.cbssports.com/fantasy/basketball/news/heats-tyler-herro-undergoing-minor-foot-procedure/, accessed July 9, 2026. | hurts | -0.8 wins | 72 |
| Turner is both stabilizer and sell-off risk. | ESPN lists Turner at 71 games, 11.9 points, 5.3 rebounds, 1.6 blocks; NBA.com listed ankle news and a possible-move note after the Giannis trade. https://www.espn.com/nba/player/_/id/3133628/myles-turner and https://www.nba.com/player/1626167/myles-turner, accessed July 9, 2026. | neutral | +0.2 wins | 56 |
| LeVert adds bench creation but also signals asset accumulation more than winning urgency. | Brew Hoop reported LeVert and two second-round picks to Milwaukee for Prince and Harris, with the move linked to roster flexibility and pick accumulation. https://www.brewhoop.com/bucks-news/68167/milwuakee-trade-detroit-pistons-caris-levert-taurean-prince-gary-harris, accessed July 9, 2026. | neutral | +0.2 wins | 60 |
| Burries and Ament are real upside swings, but rookie impact should be discounted. | NBA.com reported Burries at No. 10 and Ament at No. 13, praised Burries' two-way readiness, and noted Ament needs strength and had a late-season ankle issue. https://www.nba.com/news/bucks-brayden-burries-nate-ament-rebuild, accessed July 9, 2026. | neutral | +0.2 wins | 55 |
| The strongest reason not to move up much is organizational incentive. | NBA.com and Brew Hoop both frame the Bucks as rebuilding after Giannis; the team lacks first-rounders in 2027 and 2029, making asset management and development more important than chasing the play-in. URLs above, accessed July 9, 2026. | hurts | -1.5 wins | 75 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Tyler Herro | Non-authoritative roster context: 27.1 MPG, 55 expected games, +0.13 net, 3.89 projected wins. | Upside if healthy because he is the cleanest 20-point scorer on the roster; downside from foot/ankle history and only 33 regular-season games in 2025-26. | Milwaukee needs a half-court shot creator; without Herro, the offense leans too hard on Rollins/Porter. |
| Myles Turner | 26.8 MPG, 70 expected games, +1.08 net, team-high 6.63 projected wins in local roster context. | The model likes him, but public stats show a down 2025-26 scoring/rebounding profile and NBA.com lists him as a trade candidate. | If Turner is moved or slips physically, the defense and spacing both fall; if he stays, 30 wins is easier. |
| Ryan Rollins | 27.2 MPG, 73 expected games, +0.11 net, 5.12 projected wins. | He has a real on-ball growth case after a 17.3/5.6 ESPN line, but this is a huge organizing burden for a young guard. | Rollins exceeding a neutral starter level is the cleanest internal path to a low-30s win season. |
| A.J. Green | 27.0 MPG, 76 expected games, +0.73 net, 6.56 projected wins. | Local context credits him like a top-two value source, while public depth charts show him more as wing/guard spacing depth. | If Green is a specialist rather than a 27-MPG starter, the old roster context overstates him; if his shooting gravity scales, it keeps lineups functional. |
| Jaime Jaquez Jr. | 12.9 MPG, 43 expected games, -0.91 net, 0.89 projected wins. | Likely undercredited in local rows relative to his ESPN 2025-26 production and public role after the trade. | A 25-30 MPG Jaquez changes the wing floor and reduces pressure on rookies. |
| Kel'el Ware | 12.3 MPG, 42 expected games, -1.03 net, 0.77 projected wins. | Public depth charts and late-season production create a plausible bigger-minute upside path, but he remains young and center decisions may be crowded with Turner/Sims. | If Ware is a real starter or high-minute backup, Milwaukee has more rim protection and rebounding than the low prior implies. |
| Kevin Porter Jr. | 27.3 MPG, 56 expected games, -0.93 net, 2.41 projected wins. | Box production is strong, but the model is appropriately skeptical about net impact and guard-defense fit. | He can raise the offensive floor while simultaneously worsening lineup balance. |
| Kyle Kuzma | 12.5 MPG, 36 expected games, -3.10 net, -0.23 projected wins. | Public depth chart lists him high at power forward; local model treats him as a negative-value, reduced-minute player. | If Kuzma plays 25+ MPG and remains negative, the team can underperform; if he is traded or right-sized, the floor improves. |
| Caris LeVert | Not present in non-authoritative team-detail roster rows; present in depth chart CSV and public trade reporting. | Useful secondary creation and a 19-minute playoff-rotation veteran, but expiring and not a long-term anchor. | His omission from local roster context is a small reason to shade above 29.7 if he remains. |
| Brayden Burries | 10.3 MPG, 34 expected games, rookie/cold-start, -1.12 net. | NBA.com describes him as a two-way competitor with immediate defensive appeal; rookie guards still carry efficiency risk. | If Burries defends early, he solves a real perimeter problem; if not, the backcourt defense gets thin. |
| Nate Ament | Included in public post-trade/draft context but not in local team-detail roster rows. | High-upside 6-foot-10 forward, but NBA.com says he needs strength and had a late-season ankle issue. | He is a development signal more than a reliable 2026-27 win source. |
| Kasparas Jakucionis | 12.0 MPG, 31 expected games, +0.17 net, 0.98 projected wins. | Local model is mildly optimistic, but public role is behind Rollins/LeVert/Herro/Porter on some depth charts. | Guard-minute crowding could make this value hard to realize. |

## Adjustment Logic

I am applying a judgmental adjustment of +0.6 pts/100, roughly +1.6 wins, because the 29.7-win prior seems a little below the practical talent floor of the current public roster if Milwaukee opens the season with most of Herro, Turner, Rollins, Jaquez, Green, Porter, Ware, Kuzma, LeVert, Burries, and Ament.

The adjustment is deliberately small. Three forces push up: Jaquez/Ware/LeVert appear underrepresented or missing in the non-authoritative roster context, Herro gives the roster a real first option when available, and Rollins/Green/Porter prevent replacement-level guard minutes. Four forces cap the move: no star, Herro/Turner availability and trade risk, rookie/cold-start uncertainty, and rebuild incentives after the Giannis trade.

This is not a new simulation. It is a research correction against the prior based on role plausibility and public roster information.

## Counter-Thesis

The strongest argument against `MODEL_TOO_LOW` is that the model may already be giving Milwaukee the benefit of the doubt. A 29.7-win prior is not saying the Bucks are hopeless; it is saying they are a low-ceiling rebuild team with enough uncertainty to land anywhere from 23 to 36 wins. That may be exactly right.

If Herro is traded, Turner is moved, Kuzma is salary-matched elsewhere, LeVert is flipped, or Jenkins prioritizes Burries/Ament/Jakucionis development over veteran lineups, the roster becomes a 25-28 win team quickly. The guard-heavy core also has obvious defensive issues. A group relying on Herro, Porter, Rollins, Green, and LeVert for creation could score enough to stay close but leak points at the point of attack, on the defensive glass, and in transition. The model's very low playoff probability may be the clearest signal: this is a rebuild roster, not a sleeper.

## What Would Change My Mind

- Opening-night rotation: if Jaquez, Ware, LeVert, and Burries are all below 18 MPG, I would pull the adjustment back toward 0.0.
- Herro health: any camp limitation or recurrence of foot/ankle issues would make the model look closer or slightly high.
- Veteran trades: moving Herro, Turner, Kuzma, or LeVert for non-rotation assets would shift the stance to `MODEL_TOO_HIGH`.
- Turner/Ware hierarchy: if Turner stays and Ware earns real minutes alongside or behind him, the defense/rebounding floor rises.
- Jenkins scheme: evidence of a high-pressure, development-friendly system that boosts Rollins/Burries/Jaquez would support the upward delta.
- Model rerun: if the authoritative projection file updates to include LeVert/Ament and revised post-trade roles, this memo should be re-checked from zero.

## Data Quality And Uncertainty

The biggest data-quality issue is source conflict. The authoritative prior is the team row from `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. The richer local team-detail JSON has its own team-level wins/strength context that is not used here because it is outdated relative to the user's instruction. Its roster rows are useful for identifying model-implied minutes and pressure points, but even those rows lag public transactions: Caris LeVert and Nate Ament are absent from the team-detail roster rows, while Taurean Prince and Gary Harris remain in some local context after public reporting says they were traded.

External sources also vary in certainty. NBA.com describes the Giannis framework as reported in one story and more official in related coverage; Brew Hoop says the trade became official after moratorium. Public depth charts are not coach-confirmed rotations. ESPN/NBA.com player pages are useful for 2025-26 production and injury notes, but they do not tell us how Jenkins will allocate 2026-27 minutes.

Treat this as a modest adversarial adjustment, not a strong forecast. The confidence is only 54/100 because Milwaukee's incentives and roster can change quickly before training camp.

## Sources

- Local authoritative prior: `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "MIL"`, accessed July 9, 2026.
- Local non-authoritative roster context only: `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`, object `abbr == "MIL"`, accessed July 9, 2026.
- Local depth chart context only: `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, rows `franchise == "MIL"`, accessed July 9, 2026.
- Boss template read: `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md`, accessed July 9, 2026.
- NBA.com, Bucks post-Giannis trade context: https://www.nba.com/news/bucks-state-after-reported-giannis-antetokounmpo-trade, accessed July 9, 2026.
- Brew Hoop, Giannis trade official details: https://www.brewhoop.com/nba-free-agency/67986/milwaukee-bucks-trade-giannis-antetokounmpo-miami-heat-tyler-herro-kelel-ware-jamie-jaquez-jr, accessed July 9, 2026.
- NBA.com, Taylor Jenkins named head coach: https://www.nba.com/news/bucks-name-taylor-jenkins-head-coach, accessed July 9, 2026.
- NBA.com, Burries and Ament rebuild context: https://www.nba.com/news/bucks-brayden-burries-nate-ament-rebuild, accessed July 9, 2026.
- Sports Forecaster, Bucks depth chart: https://sportsforecaster.com/nba/depth-chart/l.nba.com-t.14/Milwaukee_Bucks, accessed July 9, 2026.
- Brew Hoop, Caris LeVert trade: https://www.brewhoop.com/bucks-news/68167/milwuakee-trade-detroit-pistons-caris-levert-taurean-prince-gary-harris, accessed July 9, 2026.
- ESPN, Tyler Herro player/gamelog page: https://www.espn.com/nba/player/gamelog/_/id/4395725/tyler-herro, accessed July 9, 2026.
- NBA.com, Tyler Herro player page: https://www.nba.com/player/1629639/tyler-herro, accessed July 9, 2026.
- CBS Sports, Herro minor foot procedure note: https://www.cbssports.com/fantasy/basketball/news/heats-tyler-herro-undergoing-minor-foot-procedure/, accessed July 9, 2026.
- ESPN, Myles Turner player page: https://www.espn.com/nba/player/_/id/3133628/myles-turner, accessed July 9, 2026.
- NBA.com, Myles Turner player page: https://www.nba.com/player/1626167/myles-turner, accessed July 9, 2026.
- ESPN, Ryan Rollins player page: https://www.espn.com/nba/player/_/id/4591725/ryan-rollins, accessed July 9, 2026.
- NBA.com, Ryan Rollins player page: https://www.nba.com/player/1631157/ryan-rollins, accessed July 9, 2026.
- ESPN, Kyle Kuzma player page: https://www.espn.com/nba/player/_/id/3134907/kyle-kuzma, accessed July 9, 2026.
- ESPN, Jaime Jaquez Jr. player page: https://www.espn.com/nba/player/gamelog/_/id/4432848/jaime-jaquez-jr, accessed July 9, 2026.
- ESPN, Kevin Porter Jr. player page: https://www.espn.com/nba/player/gamelog/_/id/4397140/kevin-porter-jr, accessed July 9, 2026.
- ESPN, A.J. Green player page: https://www.espn.com/nba/player/gamelog/_/id/4397475/aj-green, accessed July 9, 2026.
- NBA.com, Kel'el Ware player page: https://www.nba.com/player/1642276/kelel-ware, accessed July 9, 2026.
