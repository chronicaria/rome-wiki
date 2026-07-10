---
title: Defensive value in public baseball metrics
created: 2026-07-09
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, defense]
as_of: 2026-07-09
desk: New York Mets
review_after: 2027-03-01
---
Public defensive metrics are most useful when treated as estimates of distinct fielding actions—not as a single camera-free verdict on who is a “good defender.”

Up: [[New York Mets 2026]] · Method companion: [[How to read Mets Statcast changes without overfitting]]

Defense is unusually difficult to divide into individual credit. A ground ball becomes an out through a chain: the pitcher shapes its speed and direction, the club positions a fielder, the fielder reacts and reaches it, the transfer and throw arrive accurately, the receiving fielder completes the play, and the runner supplies a time constraint. A stolen-base attempt likewise reflects the runner's lead and jump, the pitcher's delivery and location, the catcher's transfer and throw, and the infielder's tag. The official scorer records an outcome, but that outcome does not isolate each contribution.

Statcast improves the problem by tracking where players and balls are, how long a play takes, and how difficult comparable opportunities are. Its public measures can answer narrower questions than errors or fielding percentage: did an outfielder convert more catches than expected given time, distance, and direction? Did an infielder turn more tracked opportunities into outs than an average fielder facing comparable constraints? Did a catcher receive more called strikes, prevent more blocks, or suppress more steals than expected? Fielding Run Value then translates several answers into runs.

The translation is powerful, but it does not make every component equally measured, equally stable, or causally independent. A Mets defensive review should therefore begin with the play family and opportunity count, inspect the component metric, and only then aggregate. Starting with one total and working backward encourages a false precision the underlying plays cannot support.

## Range: what Outs Above Average actually credits

Outs Above Average is Statcast's range-based fielding measure. For an outfielder, the model begins with Catch Probability. MLB says Catch Probability considers the distance the outfielder must travel, the available opportunity time from pitch release, and the direction of travel. A caught ball with a 25 percent catch probability adds $1 - 0.25 = 0.75$ outs; a miss subtracts $0.25$. Summing those differences across opportunities produces OAA.

That arithmetic matters because it prevents two common mistakes. First, OAA is cumulative. A full-time center fielder can create more total value than an equally skilled part-time defender simply because he receives more opportunities. Rate information—actual catch percentage compared with expected catch percentage—helps separate efficiency from playing time, but smaller denominators then become noisier. Second, every catch is not worth one unit. Making a routine 95 percent play adds only 0.05 OAA, while missing it costs 0.95. A highlight catch on a 5 percent ball adds 0.95; failing to make it costs only 0.05. The baseline is the expected out, not the aesthetic difficulty of the replay.

For infielders, Statcast uses a different opportunity model. MLB lists the distance to the intercept point, the time available, the fielder's remaining distance from the target base, and, on force plays, the batter's average sprint speed. The system knows the fielder's tracked starting location, which helps in an era of frequent repositioning. OAA can be broken down by fielding role and by the part of the field where the player actually stood rather than assuming the lineup-card position describes every play.

This does not mean positioning has disappeared from interpretation. If the club places a Mets infielder unusually well, the tracked starting point can make the resulting opportunity look easier—and properly ask whether the fielder converted it—but the public player total does not necessarily award a separate planning dividend to the coaches or front office. Conversely, a poor starting location can create a difficult or impossible chance before reaction begins. A player number and a team positioning question are related, but not identical.

OAA is also a range measure, not a complete defense measure. It does not mean that every arm, relay, cutoff, tag, rundown, pick, or communication contribution is contained in the same range number. Statcast publishes separate throwing and double-play components for parts of that work. A shortstop can therefore rate well in range but poorly in throwing, or vice versa. Saying “OAA proves the whole infield defense improved” skips the decomposition.

## From outs to runs

Fielding Run Value puts Statcast's publicly measured defensive components on a common run scale. MLB's current conversion lists one outfield OAA as 0.9 runs and one infield OAA as 0.75 runs. Fielder Throwing Runs already enter at one run per run. Catcher blocking is converted at 0.25 runs per block saved, framing at 0.125 runs per strike saved, catcher throwing at 0.65 runs per stolen base prevented, and double plays at 0.4 runs per double play added.

Those coefficients solve a unit problem. “Three outs, four strikes, and one prevented steal” cannot be added until each is expressed in a shared currency. But a shared currency does not erase model structure. An FRV total is a sum of component estimates relative to average. It should be reported with the components because two equal totals can describe different players and carry different risks. A center fielder's range-heavy value may rest on dozens of tracked batted balls. A catcher's total may combine hundreds of received pitches with far fewer steal attempts and block opportunities.

Run conversion also does not turn the result into a literal record of runs that appeared on a scoreboard. It estimates the average run consequence of fielding events compared with baseline. Game state, park, batter, pitcher, runner, and sequence can make the realized consequence of one play larger or smaller. A diving catch with the bases loaded may prevent several actual runs; its metric credit is designed for general comparison, not a reenactment of that inning's scoreboard swing.

For a Mets player, report both cumulative and opportunity-aware context. “Plus five FRV” is incomplete without season, position or component, innings or opportunities, and access date. Early in a season, one difficult converted play can move OAA sharply. A catcher may have many framing opportunities but only a handful of competitive steal attempts. A multi-position player should be split by role before the pieces are interpreted as one stable skill.

## Catcher receiving: framing is a probability problem

Statcast framing evaluates called strikes on taken pitches. MLB emphasizes the Shadow Zone around the strike-zone boundary, where a call is genuinely uncertain, while its updated model includes received pitches across all zones. The public leaderboard reports Shadow Strike Percentage and Catcher Framing Runs. The run conversion is 0.125 runs per extra strike.

The important word is “extra.” A catcher is not credited merely because a pitch was called a strike. The question is whether that call was more or less likely than the relevant baseline. Location dominates that probability, and pitch type, pitcher handedness, batter side, count, umpire behavior, catcher target, and receiving action may be entangled with it. MLB's 2025 model update added pitch-level called-strike probability based on distance inside or outside the zone, and the refreshed data are available back to 2018. Comparisons across published versions should therefore name the model vintage instead of assuming a historical leaderboard was never recalculated.

Framing value also belongs to a battery context. A pitcher who repeatedly misses far outside gives his catcher fewer convertible edge pitches. A command artist creates a different opportunity distribution. A catcher can influence target presentation and receiving, but the pitcher supplies location and movement. Team game-calling, opponent swing decisions, and umpire zones also shape which pitches become taken opportunities. The public model attempts to compare calls with expectation; it does not make those contexts vanish.

Automated ball-strike systems can also change the value of receiving. Any Mets article projecting framing forward must check the rules in force for the season being discussed. Historical framing runs describe value under the calling system that produced those pitches. They should not be carried unchanged into a different adjudication regime.

## Catcher blocking: preventing advancement, not collecting passed-ball labels

Blocks Above Average estimates how many wild pitches or passed balls a catcher prevented relative to peers. This is more informative than counting passed balls alone because the official-scoring label divides responsibility after an event, while a blocking model can account for the difficulty of the pitch and opportunity. A low pitch in the dirt with a runner able to advance is not equivalent to a chest-high fastball.

The opportunity definition is the heart of the measure. Pitch location, velocity, movement, handedness, runner occupancy, and the catcher's ability to smother and recover can alter the probability of advancement. A catcher receiving many difficult breaking balls may allow more raw wild pitches while still save blocks relative to expectation. Another may post a clean raw total because his pitchers rarely create block opportunities. Comparison therefore requires both the above-average result and the number and difficulty of opportunities.

Blocking value is converted at 0.25 runs per block saved in FRV. The coefficient is useful for aggregation, but individual plays still have varied consequences. A ball stopped with a runner on third in a close game feels larger than one stopped with the bases empty because its realized leverage differs. The model's average run value is designed to measure repeatable contribution without letting the scoreboard importance of a few moments dominate the skill estimate.

## Catcher and fielder throwing: strength is only one input

Arm Strength measures release velocity. MLB's leaderboard uses the upper tail of throws, with different qualification rules by position: the top one percent for first basemen, top five percent for other infielders, and top ten percent for outfielders; catcher arm strength is displayed separately with pop-time data. This makes arm strength a description of physical throwing capacity, not throwing value.

A hard throw can be late, inaccurate, poorly chosen, or unnecessary. Outfield throwing value must also reflect whether runners advance or hold, which creates a selection problem: runners may stop challenging an excellent arm. Catcher throwing depends on exchange time, footwork, accuracy, pitch location, runner lead and jump, and the pitcher's delivery. Pop Time combines the catcher's exchange and throw time to the base, but it still does not isolate every part of preventing a steal.

Statcast's catcher throwing component expresses performance as stolen bases prevented above expectation and converts each prevented steal to 0.65 runs for FRV. That expected baseline is essential because allowing a steal to an elite runner with a large lead on a slow delivery is not the same opportunity as throwing out a slow runner after a pitchout. The catcher's public credit is an estimate conditioned on observable context, not sole ownership of the running game.

When reviewing the Mets, keep three statements separate: the catcher threw hard; the catcher produced a fast pop time; and the battery prevented more steals than expected. They may support one another, but none logically guarantees the others. The same discipline applies to an outfielder: maximum or top-tail velocity is not proof of accuracy, decision quality, or deterrence value.

## Double plays and the problem of shared credit

Turning two outs from one batted ball is a team sequence. Range to reach the ball, transfer speed, feed location, pivot, throwing accuracy, receiver stretch, batter speed, and the runner's slide can all matter. Statcast includes a double-play component and converts one double play added to 0.4 runs in FRV. The word “added” signals comparison with an expected baseline, not a raw count.

Shared plays are a reminder that individual totals are analytical allocations. A second baseman's clean pivot can rescue an imperfect feed; a shortstop's precise feed can make an ordinary pivot look easy. Public models need rules for distributing expectation and result. Those rules are useful and testable, but they are not a camera angle that reveals a single metaphysically correct owner of the out.

For multi-year or player-to-player comparisons, check whether the relevant component existed and was published under the same definition. MLB's current FRV pages describe different availability windows, including catcher blocking from 2018 and arm-strength leaderboards from the Hawk-Eye era beginning in 2020. A total covering an earlier season may not contain the same measurable ingredients as a modern total.

## Why defensive metrics move so quickly

Defense supplies fewer clean opportunities than batting supplies pitches or plate appearances. A center fielder can go several games without a truly difficult chance. A third baseman's opportunity mix depends on batter handedness, pitcher repertoire, positioning, and batted-ball direction. One misplayed routine ball can cost close to a full out; one spectacular low-probability conversion can add nearly a full out. Early totals therefore move in jumps.

Position and role changes compound the problem. A utility Met may accumulate chances at second, short, third, and the outfield, each with different positioning, throws, and opportunity distributions. Fatigue, surface, lighting, wall geometry, weather, and unfamiliar teammates can matter without being fully visible in a headline total. None is a license to discard the metric. They explain why a small sample should be described rather than converted immediately into a permanent talent label.

Agreement among metrics deserves careful language too. OAA and FRV are not independent confirmations when FRV contains the run conversion of OAA. Treating both as two votes double counts one model. A separate system may use different inputs and allocations, but shared tracking data or play outcomes can still correlate. The strongest confirmation comes from the play-level mechanism: tracked starting position, route or reaction, opportunity difficulty, repeated conversion, throwing decisions, and stable role across enough chances.

## A Mets defensive review protocol

Start by freezing the question. “How good is the Mets defense?” is too broad. Better questions are: “Did this outfielder convert difficult lateral chances above expectation from April through June?” “How much of this catcher's 2026 FRV came from framing rather than throwing?” or “Did the infield's range performance change after a positioning and personnel shift?”

Then record:

1. **As-of date and competition:** regular season, postseason, or another level; never blend them silently.
2. **Player and fielding role:** lineup position plus tracked role or actual area when available.
3. **Opportunities:** innings and the relevant chances—batted balls, received takes, block opportunities, or steal attempts.
4. **Component:** range OAA, throwing, double plays, framing, blocking, or catcher throwing before total FRV.
5. **Baseline and unit:** outs, strikes, blocks, prevented steals, or runs above average.
6. **Model version and coverage:** especially for framing updates and cross-era comparisons.
7. **Context:** positioning, pitcher/batter mix, park, runner quality, role changes, and disclosed health only.
8. **Alternative explanations:** small sample, opportunity selection, tracking/classification, teammate interaction, or regression toward average.
9. **Forward test:** the type and number of future opportunities that would strengthen or weaken the claim.

Use play examples to explain the mechanism, not to replace the sample. One excellent route can show what “distance needed” means; it cannot prove a season-long range transformation. One stolen-base throw can demonstrate exchange and accuracy; it cannot allocate the running game between pitcher and catcher. The data and the video answer different parts of the question.

Finally, write conclusions at the level the evidence supports. “Plus three OAA through 42 tracked opportunities” is a descriptive result. “The improvement came from positioning” is a causal claim requiring positioning evidence and a counterfactual. “He is now an elite defender” is a talent claim requiring a larger, stable body of comparable chances. The vocabulary in [[How to read Mets Statcast changes without overfitting]] applies directly: observation, replication, companion evidence, alternatives, and a prediction that can fail.

## Why it matters

The Mets cannot evaluate pitching, roster construction, or lineup tradeoffs without defense, but public analysis can easily count the same play twice or give one player all the credit for a shared event. Component-first reading makes the ledger auditable. Range, throwing, receiving, blocking, and double plays answer different questions. FRV makes them comparable in runs, yet the component opportunities still determine how much confidence that total deserves.

This framework also prevents a familiar roster mistake. A hitter's offensive line and nominal position do not describe the complete choice between players. The defensive comparison needs role-specific opportunity, cumulative value, rate context, and uncertainty. A small positive or negative total should inform that decision, not end it.

## Sources

- [MLB glossary: Outs Above Average](https://www.mlb.com/glossary/statcast/outs-above-average) — official definitions and distinct outfield/infield opportunity models; accessed July 9, 2026.
- [Baseball Savant: Outfield Catch Probability](https://baseballsavant.mlb.com/leaderboard/catch_probability) — catch-probability inputs and cumulative OAA credit; accessed July 9, 2026.
- [MLB glossary: Fielding Run Value](https://www.mlb.com/glossary/statcast/fielding-run-value) — component list, run conversions, and interpretation relative to average; accessed July 9, 2026.
- [Baseball Savant: Fielding Run Value leaderboard](https://baseballsavant.mlb.com/leaderboard/fielding-run-value) — public component leaderboard and current conversion documentation; accessed July 9, 2026.
- [MLB glossary: Catcher Framing](https://www.mlb.com/glossary/statcast/catcher-framing) — Shadow Zone, called-strike measures, run conversion, and 2025 model update; accessed July 9, 2026.
- [Baseball Savant: Catcher Framing leaderboard](https://baseballsavant.mlb.com/leaderboard/catcher-framing) — public pitch-level and split interface; accessed July 9, 2026.
- [MLB glossary: Arm Strength](https://www.mlb.com/glossary/statcast/arm-strength) — release-velocity definition, positional calculation, and qualification rules; accessed July 9, 2026.

## Open questions

- Which current Mets defenders have enough role-consistent opportunities for a meaningful 2026 component review?
- How will the ball-strike adjudication system in force after 2026 alter the prospective value of catcher framing?
- Which public Statcast components most clearly leave team positioning or shared-play credit outside the individual total?
- How should a future [[New York Mets run-prevention profile 2026]] avoid double counting pitcher contact management and fielding conversion?
