---
title: Availability risk in NBA projections
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, projections, injuries, uncertainty]
desk: NBA and Dallas Mavericks
as_of: 2026-07-10
---

NBA projections should model availability as a distribution over games, minutes, performance states, and replacement lineups—not as a single games-played discount applied to healthy player value.

Up: [[NBA and Dallas Mavericks]]

Related: [[Dallas Mavericks availability scenarios]] · [[Lineup fit is not the sum of player value]]

## Availability is part of team strength

A player projection usually begins with an estimate of value per possession or per minute. A team forecast needs a different quantity: how much of that value will actually reach the floor, in which games, at what workload, and alongside which replacements. A brilliant 65-game player and a merely good 80-game player can have similar regular-season totals while creating very different tails, rotations, and playoff paths.

The simplest expected-value approximation is

$$
E[V_i] \approx E[m_i]E[r_i],
$$

where $m_i$ is minutes and $r_i$ is value per minute. The product of expectations is exact only when minutes and per-minute value are uncorrelated. In general,

$$
E[m_i r_i]=E[m_i]E[r_i]+\operatorname{Cov}(m_i,r_i).
$$

That covariance can matter because a player may return under a restriction, play through an injury at reduced effectiveness, or receive his heaviest workload when healthiest. His absence also changes teammates' roles and the lineup's fit. The better conceptual object is

$$
E[V_{team}] = E\left[\sum_g \sum_i m_{ig}r_{ig}(S_g,L_g)\right],
$$

where $S_g$ is the game-specific availability and health state and $L_g$ is the feasible lineup environment. The sum is over the games and players in one simulated season state; the outer expectation averages over those joint states. This formulation makes clear why availability belongs inside [[NBA team season projection model]], downstream from [[NBA player forward projection model]], rather than being hidden inside a player's healthy per-100 rating.

[[RAPM evaluation and uncertainty]] already separates measurement error, player forecast uncertainty, and season outcome uncertainty. Availability is a major bridge between the latter two. It changes both the amount of star value realized and the identity of the replacement minutes that generate the team outcome.

## Four states that “games played” collapses

Availability has at least four dimensions.

The first is binary participation: active or inactive. This is what games played records most directly. The second is workload: a player can be active for 18 minutes or 38. The third is conditional effectiveness: “available” after surgery or during a recurring injury may not mean the same movement, shot profile, or defensive range as the healthy baseline. The fourth is recurrence and clustering: ten isolated missed games differ from a ten-game block because the latter forces a stable replacement rotation and may coincide with a difficult schedule segment.

Historical games played alone mixes all four. It also mixes injury, illness, rest, suspension, personal absence, organizational decisions, and roster status. Those mechanisms have different persistence. A forecasting model should preserve reason codes when credible data permit, while resisting medical certainty that public evidence cannot support.

Clinical NBA studies illustrate why coarse labels are inadequate. Leaguewide injury epidemiology finds large variation by injury type in incidence and games missed. Return-to-play studies often find that participation can resume without a uniform performance path. These results are population descriptions, not player-specific diagnoses. They support wider and mechanism-specific forecast distributions; they do not authorize an analyst to predict an individual's recovery from a public injury label.

## Expected games are not enough

Suppose two players are each projected for 65 games. Player A has a narrow distribution centered near 65: managed absences are likely, but a full-season loss is unlikely. Player B has a mixture distribution: perhaps a substantial chance of 75 games and a meaningful chance of only 30. Their expected games may match, while their teams' outcome distributions do not.

The distinction matters because wins are nonlinear around thresholds. A concentrated absence can knock a team out of home-court contention, force play-in games, or reduce the probability that a preferred lineup develops continuity. A long-tail injury to a star creates more downside than the same expected missed games spread across low-leverage reserves.

Variance also interacts with roster depth. If a star's backup is a competent approximation of the same role, the team loses less structure when the star sits. If the backup changes the offense from five-out to two-nonshooter lineups, or removes the only point-of-attack defender, the replacement penalty exceeds a simple player-value difference. [[Lineup fit is not the sum of player value]] is therefore part of availability modeling: the absent player changes the constraints on everyone else.

A projection should report at least the mean and a meaningful interval for games and minutes. For high-leverage players, it should also represent asymmetric scenarios: healthy season, managed season, delayed return, recurrence, and low-probability severe loss. Exact scenario probabilities should come from a declared model or be labeled judgmental.

## Replacement minutes are the causal pathway

When a player misses 1,000 minutes, those minutes do not disappear. They flow to backups, two-way players, smaller lineups, heavier starter workloads, or newly acquired players. Team impact therefore depends on the replacement tree.

A naive wins model may subtract the star's per-minute value times missed minutes. That assumes replacement value is zero on the model's scale and ignores role changes. A better calculation assigns the minutes explicitly:

$$
\Delta V \approx m_{missed}(r_{star}-r_{replacement}) + \Delta V_{fit} + \Delta V_{workload}.
$$

All terms must use the same value units and time horizon. The replacement term may be shared by several players. The fit term captures a change in spacing, creation, rim protection, rebounding, or scheme that is not already embedded in the player ratings. The workload term captures the possibility that healthy starters absorb more minutes, improving immediate replacement quality while increasing fatigue or leaving bench units exposed. As in any decomposition, unclear boundaries can double count the same consequence, so an implementation should define which effects live in $r$, lineup strength, and the workload state.

This is why depth should be evaluated by function, not roster count. A team may have twelve NBA-caliber players yet no second organizer. Another may have only nine trusted players but multiple wings who can cover adjacent roles. Availability risk is concentrated where one player supplies a scarce function.

The 2026–27 cross-team briefing found exactly this pattern across several projections: the largest downward challenges often involved older stars, post-injury workload uncertainty, or rotations whose depth collapsed if one high-leverage player disappeared. That local synthesis is not a clinical dataset and should not set injury probabilities. It is evidence that availability assumptions and replacement structure repeatedly drive human disagreement with additive team priors.

## Role elasticity is availability insurance

Role elasticity is the ability to remain useful as usage, position, matchup, or scheme changes. It lowers availability risk at the team level even when it does not change the probability that anyone is injured.

A wing who can defend two through four, space the corner, screen, and make a second-side pass can fill several replacement branches. A guard who only functions as the primary initiator may be excellent in his normal role but difficult to insert when the absent player is a defensive stopper. A center who can play drop and switch preserves more matchup options than one whose value depends on a single coverage.

Elasticity should not be assumed from body type or reputation. It needs evidence from actual roles, preferably over enough possessions to separate ability from emergency noise. Still, a projection can label which substitutions preserve the team's architecture and which require a new one. That qualitative map is often more honest than assigning spurious decimal-point bonuses.

Role elasticity also affects recovery. A returning star may initially avoid the hardest defensive assignment or reduce on-ball load. Teammates who can absorb those jobs allow the player to contribute before he reaches his full role. Thus return-to-play is not a switch from zero to the healthy projection; it can be a sequence of lineup states.

## Dependence between player risks

Many simulations draw each player's games independently. That is convenient and often wrong. Availability can be correlated through shared schedule stress, contagious illness, team rest policy, playoff position, training practices, and role compensation. One absence can raise another player's workload. Two players may also be managed together or alternate rest to preserve a functional lineup.

Independence errors are most damaging in the tails. If a veteran-heavy team collectively rests more on back-to-backs, simultaneous weakness is more likely than independent Bernoulli draws imply. If a team carefully staggers its creators, simultaneous absence may be less likely. A single expected-games table cannot express either policy.

Correlation should be modeled cautiously. There is rarely enough public data to estimate every pairwise dependence. A practical compromise is to simulate team-level latent states—normal, schedule-stressed, outbreak, late-season management—and let those states modestly shift several players' availability. The parameters should be validated on historical seasons and shrunk heavily toward independence.

Schedule context matters here. Back-to-backs, travel, and dense stretches can affect rest decisions and workload, but observational associations do not by themselves establish injury causation. The model may use schedule features for predictive calibration without claiming a medical mechanism.

## Injury reports are state evidence, not ground truth about health

Official NBA injury reports are the best public source for current participation designations because the league requires teams to report statuses and enforces the rules. They remain operational disclosures, not complete medical records. The same designation can cover different uncertainty, and statuses change as game time approaches.

For a daily game forecast, the model should timestamp the report, preserve the designation, and convert it into a calibrated probability of playing plus a conditional minute range. “Questionable” should not mechanically mean 50 percent unless historical calibration for the relevant reporting regime supports that number. A player declared active may still face a workload cap.

For a preseason forecast, official reports are only one input. Surgery announcements, team statements, and credible return timelines can identify a starting state. Longer-run recurrence and effectiveness should come from population evidence, the player's history, age and workload features, and wide uncertainty. Public analysis should clearly separate official status, reported timeline, model inference, and unknown medical detail.

The league's enforcement actions also show why timing matters. A designation can be accurate when filed and later change, or a team can violate reporting requirements. A frozen forecast should retain the information set available at prediction time rather than overwrite it with what became known later.

## Building an availability model

A robust architecture has several linked layers.

First, estimate a baseline participation process. Features may include age, recent games and minutes, rolling workload, prior absences by broad reason, offseason procedures, and current status. Use temporal validation: training only on information available before the predicted period. Historical availability features are a known leakage risk if season totals accidentally enter earlier dates.

Second, model absence duration rather than only next-game status. A hurdle or multi-state model can separate whether an absence begins from how long it lasts. Survival methods are natural for time to return, while recurrent-event models can represent repeated spells. No method eliminates the sparse-data problem for rare injuries.

Third, estimate conditional minutes after return. The first active game, the first back-to-back, and a gradual ramp may differ. This layer should be team- and role-aware without memorizing one coach's short sample.

Fourth, connect states to player effectiveness. The default should shrink toward the healthy projection because public data often cannot identify a distinct injured-performance coefficient. Apply a decrement only when historical or population evidence supports it, and widen the interval when it does not.

Fifth, allocate replacement minutes through a feasible rotation. Enforce 240 team minutes per game, positional and role constraints, and plausible workload caps. Recalculate lineup strength rather than merely removing a name.

Sixth, simulate the season. Draw player states, lineups, opponent and schedule context, and game noise. Preserve the joint draws so the output can explain whether a wide win interval comes from rating uncertainty, availability, or ordinary game variance.

Finally, calibrate. Score predicted play probabilities, games distributions, minute intervals, and team wins separately. A season model can have a reasonable win mean while its player availability probabilities are badly miscalibrated because errors cancel.

## A public-safe state-vector contract

The model needs an explicit interface between evidence collection and season simulation. Without one, an analyst can update a player's “injury risk” while silently changing several different assumptions. A compact player-game state can be written as

$$
Z_{ig}=(A_{ig},M_{ig},E_{ig},R_{ig},C_{ig}),
$$

where $A$ is participation, $M$ is minutes conditional on participation, $E$ is effectiveness relative to the healthy player projection, $R$ is the basketball role, and $C$ is the reporting-confidence state. The first four affect the basketball forecast. The fifth governs how aggressively the first four should move when new public evidence arrives.

This separation prevents several common errors. An official active designation raises confidence in participation for that game, but it does not by itself establish ordinary minutes or healthy effectiveness. A coach's statement that a player will be “limited” narrows the workload branch without quantifying a medical recovery curve. Film showing that a returning guard is not reaching the rim may inform the effectiveness state, but only after the sample, opponent, and tactical context are stated. A change in role—moving from primary initiator to spacer—can alter observed efficiency even if physical capacity is unchanged.

Every update should therefore record five fields:

1. **Observation time:** when the evidence became public, not when a later article summarized it.
2. **Evidence class:** official status, team statement, attributable reporting, observed game role, model inference, or unknown.
3. **State affected:** participation, conditional minutes, effectiveness, role, or dependence with another player.
4. **Direction and magnitude:** a declared numerical update when model-generated; otherwise a labeled qualitative pressure.
5. **Expiration or review trigger:** the next report, practice stage, game sample, schedule phase, or roster move that could make the update stale.

The confidence state is not a claim about whether a team or reporter is honest. It measures how directly the evidence identifies the model variable. An official injury designation is authoritative about the designation and its timestamp, but only indirect evidence about exact probability, workload, or long-run performance. A full-game workload is direct evidence that the player handled those minutes once; it is weaker evidence that the workload is sustainable across a dense month.

This contract is also a privacy boundary. A public model should use official releases, attributable reporting, observed play, and declared statistical priors. It should never imply access to imaging, private medical records, or individualized recurrence estimates that the sources do not provide. “Unknown” is a valid state, not a defect to conceal with a point estimate.

## Scenario matrices before win totals

For high-leverage players, the rotation should be solved inside a small set of coherent scenarios before those scenarios are mixed into one win distribution. A useful minimum is unavailable, active with a restriction, active in a modified role, and functionally normal. Those branches should not differ only in the focal player's minutes. Each branch needs a complete 240-minute allocation, a role map, and a list of lineup functions that are preserved or lost.

Consider a primary creator returning under a workload cap. The direct change is additional creator minutes. The indirect changes may include lower emergency usage for a young forward, fewer possessions initiated by a reserve guard, a different closing lineup, and easier shot quality for a rim-running center. If the returning player cannot yet defend the hardest perimeter action, the team may also change matchups or coverages. Assigning the player's old per-minute rating to 22 minutes would miss both the positive role relief and the remaining defensive constraint.

The replacement tree should be exhaustive rather than optimistic. If the first replacement also has an availability distribution, the model needs a second branch. If the only backup preserves scoring but not point-of-attack defense, the lost function must appear somewhere else in the lineup. If no feasible lineup covers every task, the simulation should retain the weakness instead of granting an abstract depth adjustment.

Scenario weights can be learned, judgmental, or a mixture. Learned weights require a clearly dated training set and temporal validation. Judgmental weights should be shown as ranges and stress-tested. In either case, the public forecast should reveal which assumption drives the tails. A statement such as “the team projects for 46 wins” is less informative than showing that the median is similar across models while the lower tail is largely a joint availability-and-replacement outcome.

The scenario matrix should update asymmetrically. A single practice can eliminate the branch in which a player has not begun basketball activity, but it cannot prove the functionally normal branch. One normal game can raise near-term workload expectations while doing little to settle recurrence or dense-schedule tolerance. Evidence accumulates through stages; the model should not jump directly from uncertainty to certainty because one visible milestone is encouraging.

## Forecast evaluation and accountability

Availability models should be judged before the outcomes are known. Freeze preseason distributions, record hashes or immutable versions, and score them after the season. Useful diagnostics include Brier score or log loss for next-game activity, calibration curves by official designation, mean absolute error for season games and minutes, interval coverage, and continuous ranked probability score for full distributions.

Evaluation must be time-aware. Random train-test splits leak the same player's later health state and a season's eventual games total into earlier examples. Expansion-window or rolling-origin tests better match deployment. Major rule or schedule changes may create regime shifts, so aggregate calibration should be accompanied by season-level results.

Team forecasts need counterfactual baselines. Compare the full availability simulation with fixed expected minutes, independent player draws, and simple historical games-played averages. Complexity earns its place only if it improves out-of-sample calibration or produces decisions and explanations the simpler baseline cannot.

The local RAPM project's season benchmark is a reminder of this hierarchy. Game-margin evaluation using realized minutes tests rating quality conditional on who played; it is not a strict pregame forecast. Preseason season scoring is harder because it must forecast the roster and minutes states themselves. Good realized-minute accuracy cannot validate availability assumptions.

## Common failure modes

The first is false precision from medical labels. Public reporting rarely supports a confident player-specific recovery curve. The second is recency overreaction: one healthy season does not erase a long history, and one injury does not prove permanent fragility. Partial pooling and aging-aware baselines help.

The third is double counting. If a forward player projection already incorporates reduced minutes or post-injury performance, a separate availability adjustment can penalize the same evidence twice. The model contract must state whether $r_i$ is conditional on health and whether $m_i$ carries the absence risk.

The fourth is survivorship bias. Players who leave the league or never return are easy to omit from return-to-play samples, making recovery look better. The fifth is treatment-selection bias: surgery, rest, and workload management are chosen in response to severity and context, so observational comparisons do not identify their causal effects without strong assumptions. Recent research finding no reduced subsequent injury risk after games missed for rest or load management should not be read as proof that rest never helps; it describes the studied observational setting.

The sixth is ignoring incentives. Late-season shutdowns, playoff seeding, development priorities, and transaction strategy affect availability without being injuries. A model trained on “games missed” should not silently call all absence medical risk.

## Why it matters

Availability is often the largest reason a team forecast differs from the sum of its healthy player ratings. Modeling it well does not mean predicting injuries with certainty. It means representing uncertainty honestly, distinguishing participation from workload and performance, routing missed minutes to real replacements, and preserving the dependencies that shape downside.

The result is more useful than a point estimate. It can show that two teams with the same projected wins have different risk structures: one is stable but capped, another is a contender when healthy with a long lower tail. It can also identify what evidence would move the forecast—an official return, demonstrated workload, a credible backup, or a lineup that survives without a scarce role.

## Sources

- NBA Official, injury report portal (current designations and archived reports): https://official.nba.com/nba-injury-report-2025-26-season/
- NBA Communications, enforcement example, “76ers fined $100K for violating league injury reporting rules” (December 3, 2025): https://www.nba.com/news/sixers-fined-violating-league-injury-reporting-rules
- Drakos et al., “Injury in the National Basketball Association: A 17-Year Overview,” *Sports Health* (2010): https://doi.org/10.1177/1941738109357303
- Mack et al., “Epidemiology of Injuries Among National Basketball Association Players: 2013-2014 Through 2018-2019,” *Orthopaedic Journal of Sports Medicine* (2024): https://pmc.ncbi.nlm.nih.gov/articles/PMC11569584/
- Jildeh et al., “Temporal Trends and Severity in Injury and Illness Incidence in the National Basketball Association Over 11 Seasons,” *Orthopaedic Journal of Sports Medicine* (2021): https://pmc.ncbi.nlm.nih.gov/articles/PMC8207289/
- “The Relationship Between Games Missed for Rest or Load Management and Injury in the National Basketball Association, 2014-15 Through 2022-23,” PubMed record (2026): https://pubmed.ncbi.nlm.nih.gov/42218310/
- Local quantitative-method spine: [[RAPM evaluation and uncertainty]], [[NBA player forward projection model]], and [[NBA team season projection model]].
- Local leaguewide research synthesis: [[Basketball/NBA team briefings 2026-27/00_CROSS_TEAM_FINDINGS|2026-27 NBA cross-team findings]].

## Open questions

- Which public absence reason codes are stable enough across seasons to train a recurrence model without creating label drift?
- How much does joint team-level availability modeling improve calibrated win tails over independent player draws?
- What return-to-play minute-ramp features predict future workload without leaking information unavailable at forecast time?
- How should organizational shutdown risk be modeled separately from health risk for rebuilding teams?
