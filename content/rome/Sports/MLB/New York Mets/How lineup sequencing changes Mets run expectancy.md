---
title: How lineup sequencing changes Mets run expectancy
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, lineup-construction, run-expectancy]
as_of: 2026-07-10
desk: New York Mets
review_after: 2026-08-10
---

Lineup order changes Mets run expectancy mainly by giving some hitters more plate appearances and by placing different skills into different base-out situations; it is a real marginal advantage, but player quality, health, platoon fit, and honest projections matter much more than finding a supposedly perfect order.

Up: [[New York Mets 2026]]

Related: [[New York Mets run-creation profile 2026]] · [[How platoons and bench roles shape the Mets lineup]] · [[How to read Mets Statcast changes without overfitting]]

**As of 2026-07-10.** This is a durable framework for evaluating a Mets lineup, not a recommendation for one fixed batting order and not a calculation from an undisclosed club model. The active roster, opposing pitcher, health information, projected skills, and run environment can change after this cutoff.

## Sequencing changes opportunities, not a hitter's identity

A batting order is a repeated cycle of nine players. MLB's official basics say each offensive player bats in the order in which his name appears, and MLB describes a typical hitter as receiving three to five plate appearances in a nine-inning game. The first hitter is guaranteed to bat in the first inning. The second hits if the first plate appearance does not end the inning—which one plate appearance cannot do under ordinary play—and so on. In later innings, the order resumes where the previous inning ended.

That simple mechanism produces the largest dependable lineup effect: spots nearer the top receive more opportunities over time. A historical FanGraphs study of every 2016 lineup position found 4.65 plate appearances per game started for leadoff hitters, 4.55 for second hitters, 4.43 for third hitters, and 3.77 for ninth hitters. Those values are descriptive of one season, not constants for the 2026 Mets. Scoring environment, substitutions, home games in which the bottom of the ninth is not played, and team quality all move the exact differences. But the direction is unavoidable. Every time the order turns over, the first spot comes due before the ninth.

For the Mets, that means the first sequencing question is not “Who looks like a leadoff hitter?” It is “Which available hitter should receive the largest expected share of plate appearances?” A weak hitter does not become productive merely because he is fast, and a strong hitter's value cannot help from the bench. Moving a better projected hitter upward purchases additional chances for his walks, singles, extra-base hits, and home runs. Over one game the difference may be zero; over a season the opportunity gap accumulates.

The word **projected** is essential. A batting order should be built from the best estimate of present ability against the day's pitching, not simply season-to-date batting average or the result of the last series. The [[New York Mets run-creation profile 2026]] can describe what happened through a dated boundary. It cannot by itself prove what will happen in the next plate appearance. A responsible projection combines a larger performance record with current skills, handedness, health, expected playing time, and uncertainty.

## Run expectancy explains why the same event can have different value

Run expectancy is the average number of runs a team can expect to score from a particular state through the end of an inning. The standard framework has 24 base-out states: eight arrangements of runners—empty, first, second, third, first and second, first and third, second and third, or loaded—combined with zero, one, or two outs. Historical play-by-play can estimate the average remaining runs from each state.

The matrix is conditional, not destiny. A runner on first with no outs is generally worth more expected offense than empty bases with one out because the offense retains a baserunner and all three outs. But the actual inning may still produce zero or five runs. The estimate also belongs to a stated run environment. A matrix calculated from a high-offense period should not be transplanted silently into a lower-offense season, and a generic league matrix does not incorporate the exact Mets hitters due next, Citi Field conditions, or the opposing pitcher.

Sequencing connects hitters to those states. The leadoff hitter begins every game with empty bases and no outs, but later plate appearances can begin anywhere. The cleanup spot is more likely than the leadoff spot to bat in the first inning with runners aboard, because up to three teammates have already hit. The third spot often receives a first-inning plate appearance with two outs and nobody on when the first two hitters are retired. Those tendencies are not scripts; they are distributions produced by the hitters ahead and the offense's event probabilities.

Different offensive events therefore have different marginal values by context. Avoiding an out is always useful, but it is especially important in spots that combine many plate appearances with expensive outs. Extra-base power gains value when runners are likely to be aboard because one swing can advance or score more than the batter. A single does not have one universal lineup value: it may start a rally with nobody on, score a runner from second, or merely extend an inning. A home run always guarantees at least one run, but its total depends on traffic.

A useful model compares each plate appearance's transition:

$$
\text{run value} = \text{runs scored on the play} + RE_{\text{after}} - RE_{\text{before}}.
$$

Here $RE$ is the chosen run-expectancy estimate. The formula explains why “RBIs” cannot settle where a hitter belongs. RBIs partly describe opportunities created by earlier hitters. A batter placed behind strong on-base hitters can accumulate more runners driven in without becoming intrinsically better. The order should be evaluated by how it creates and converts states across the entire cycle, not by rewarding the player who happened to inherit traffic.

## The top, second, and cleanup spots do different work

Research synthesized in *The Book: Playing the Percentages in Baseball* and subsequently explained by FanGraphs reached a durable general conclusion: the strongest hitters should be concentrated in the first, second, and fourth spots, with on-base ability leaning toward the top and power leaning toward fourth. That is a starting framework, not a universal Mets lineup card.

The leadoff spot receives the most plate appearances and is guaranteed to begin with no runners on base. That makes out avoidance unusually valuable and makes “speed first” an incomplete rule. Speed can add value through advancement, stolen bases, and avoiding double plays, but a runner cannot use it after making an out. Power is not wasted at leadoff: an extra-base hit still creates value, and a home run still scores. The tradeoff is that the first hitter begins the game without runners to drive in and will, on average, receive more bases-empty opportunities than a middle-order hitter.

The second spot combines nearly top-of-order volume with more potential first-inning traffic. Traditional practice often used a bat-control specialist there to bunt or move the runner, but voluntarily exchanging an out for advancement can destroy expected runs in many ordinary states. A productive Mets second hitter should normally be a genuine offensive engine: someone whose ability to avoid outs, reach base, and produce total bases merits the extra opportunities. Contact skill matters when it raises overall production or reduces a particular matchup weakness; “handles the bat” should not become permission to place a materially weaker hitter above a star.

The fourth spot gives up some plate-appearance volume relative to first or second but receives more opportunities with runners on. That increases the appeal of power. It does not mean the cleanup hitter should be a low-on-base slugger at any cost. An out can strand the rally, while a walk can continue it for the fifth hitter. The best choice balances extra-base impact with the ability not to end the inning.

The third spot is prestigious but can be overrated. If the first two hitters both make outs, the third bats with nobody on and two outs; if either reaches, the third has traffic. Because the fourth spot tends to receive more valuable runner situations and the first two spots receive more plate appearances, models often place a team's fourth- or fifth-best overall hitter third rather than automatically putting the best hitter there. That prescription depends on the specific nine hitters. The real lesson is to model the opportunity distribution instead of treating “best hitter bats third” as a law.

From sixth through ninth, quality generally descends because every step downward loses plate appearances. Yet the bottom is not strategically empty. A competent ninth hitter who reaches base can create a second leadoff effect for the top. A very weak ninth hitter can repeatedly break the chain before the order turns over. In the universal-DH era, the Mets no longer need to organize the bottom around a routinely batting pitcher, making it more defensible to order the available position players mostly by projected offensive value while preserving tactical considerations.

## “Protection” is narrower than the cliché

The idea that a dangerous hitter “protects” the star ahead of him contains several possible claims. One is that pitchers will throw more strikes because walking the star exposes them to the next batter. Another is simply that a strong following hitter makes a walk costlier by increasing the chance the new baserunner scores. The second claim follows directly from run expectancy. The first requires pitch-level evidence and may vary with count, score, base state, handedness, and the identity of the pitcher.

For Mets analysis, it is safer to ask whether the hitter behind an on-base threat can convert the resulting states than to promise that he will force strikes. An opponent can still pitch around an elite hitter when first base is open, when a double play is available, or when the on-deck matchup is preferable. A strong on-deck hitter changes the price of avoidance; he does not remove the pitcher's choices.

Likewise, alternating left- and right-handed hitters can make bullpen deployment harder, but it is not automatically worth demoting a much stronger hitter. MLB's three-batter minimum generally requires a reliever to face at least three batters or finish an inning, which reduces the ease of deploying a one-batter specialist. The opponent can still choose entry points around inning boundaries, and individual pitch arsenals can matter more than the hitter's side alone. [[How platoons and bench roles shape the Mets lineup]] supplies the necessary roster and substitution context.

The proper comparison is incremental. Estimate the offensive loss from moving a superior hitter down, then compare it with the matchup value gained by breaking up a same-side cluster. Do not assume the sign of the answer. A same-handed group of excellent hitters can be preferable to a perfectly alternating sequence that gives an inferior hitter extra plate appearances.

## Mets-specific construction begins with roles, not names in boxes

A daily Mets order should start with the nine available starters and the opposing starter, then proceed through four linked questions.

First, rank hitters by projected production for the matchup while showing uncertainty. On-base percentage and slugging percentage are useful summaries but incomplete inputs. Two hitters can share an OPS while reaching base and producing power differently, and OPS assigns an arbitrary equal scale to components whose run values are not equal. A better club model would estimate the probabilities of strikeout, walk, hit by pitch, single, double, triple, home run, and relevant advancement outcomes against the expected pitching context.

Second, purchase plate appearances for the best projected bats. The largest errors are normally obvious ones: burying an elite hitter because he lacks a traditional visual profile, or elevating a weak hitter solely for speed or contact. Small rearrangements among similar hitters deserve less confidence. If two Mets project almost identically, a claim that one order is definitively optimal is false precision.

Third, shape complementary skills. Put high on-base ability before power when the overall opportunity cost is modest. Consider double-play tendency, base running, and contact distribution, but use rates with enough opportunities and appropriate regression. A ground-ball double play requires a runner on first, fewer than two outs, a ground ball in a playable location, and successful fielding; raw totals mix skill with opportunity. Stolen-base value depends on success probability, game state, the pitcher-catcher battery, and the hitters behind the runner. Speed is a component, not an ordering principle by itself.

Fourth, model the entire game rather than only the first inning. A platoon starter may face a right-hander twice and then a left-handed reliever. A pinch hitter inherits the replaced player's lineup spot. A defensive replacement can take a late plate appearance. Under MLB's DH rule, a pinch hitter or runner for the DH becomes the DH, while moving the DH to defense can terminate the DH and force the pitcher into the order. Those branches belong in lineup evaluation because the starting nine is also a substitution map.

Applied to the current Mets, this framework says that established high-on-base and high-power threats such as Juan Soto and Francisco Lindor should be evaluated for premium plate-appearance slots, while the remaining order should respond to the day's available roster and matchup. It does **not** say which one must bat first, second, or fourth on July 10. Soto's and Lindor's exact 2026 projections, switch-hitting implications, health, opponent pitch shapes, and the production of the other seven hitters are required to answer that narrower question. Naming a permanent order without preserving those inputs would convert a framework into theater.

## The best test is a transparent simulation

There are $9! = 362{,}880$ possible orders for nine distinct hitters. A model can simulate or analytically evaluate each, but its output is only as good as its assumptions. A simple Markov model assigns event probabilities to each hitter and moves among base-out states until three outs, repeating innings and the cyclic order. More detailed simulations can include runner advancement, double plays, stolen bases, platoon changes, park, pitcher quality, pinch hitting, and score-dependent tactics.

Every additional detail demands evidence. A model using only OBP and slugging cannot distinguish walks from singles, doubles from home runs, or fast from slow runners with the same batting line. A model that uses current-year splits without regression may treat noise as talent. A model that assumes independence may miss how pitcher quality, fatigue, and bullpen changes affect consecutive hitters. A model using a historical run environment can produce precise-looking but obsolete run totals.

Therefore any claimed “optimal Mets lineup” should publish at least:

- the nine players and their projected event probabilities;
- the projection date and the data period behind it;
- pitcher handedness and whether individual pitch matchups are included;
- park and league run environment;
- advancement, double-play, and base-running rules;
- substitution and bullpen assumptions;
- runs per game for the candidate and realistic alternatives; and
- uncertainty or sensitivity to plausible projection changes.

The comparison should emphasize the spread among sensible lineups, not merely identify the maximum. FanGraphs summaries of prior lineup-optimization work put the gain from a typical order to an optimized one around five to 15 runs over a full season, with individual moves often worth only a few runs. That is historical guidance, not a measured 2026 Mets effect. It correctly sets the scale: sequencing is worth pursuing, but it cannot rescue a poor roster, replace injured production, or justify certainty after one game.

## How to audit a lineup decision

When the Mets post an order, a disciplined audit can avoid both reflexive outrage and managerial mystique.

1. **Freeze the evidence.** Record the date, opponent, starting pitcher, Mets availability, and the actual order. Do not evaluate yesterday's choice with information learned afterward.
2. **Separate selection from sequencing.** Starting one player instead of another is a lineup-composition decision. Moving the same nine players is an ordering decision. The former can have a much larger effect.
3. **Check opportunity allocation.** Ask whether the best projected hitters occupy premium spots and whether a materially weaker bat is receiving extra plate appearances for a vague traditional reason.
4. **Check state complementarity.** Ask whether on-base and power skills are sensibly connected, while recognizing that the order cycles and no pairing is permanent.
5. **Check matchup evidence.** Use handedness and pitch-type data with explicit samples, regression, and alternatives. A tiny career split against one pitcher is not a projection by itself.
6. **Check the bench tree.** Identify likely pinch hitters, defensive replacements, and the effect of a pitching change. The best first-inning order may not be the best nine-inning plan.
7. **Measure scale.** Compare realistic alternatives in expected runs or win probability. If the modeled difference is tiny, describe it as tiny.

Outcome is not proof of process. A sound order can be shut out; a poor order can score ten runs. One game contains too few plate appearances and too much opponent and batted-ball variation to validate a sequencing theory. Evaluation should ask whether the decision was reasonable given information available at the time and whether its advantage persists across plausible assumptions.

## Why it matters

The Mets cannot choose whether a batted ball finds a glove, but they can choose who starts and where each starter bats. That makes sequencing one of the club's repeatable, low-cost sources of marginal value. Its first principle is straightforward: give more plate appearances to better projected hitters. Its second is contextual: connect on-base ability, power, handedness, contact, and running without sacrificing too much total quality.

The restraint is equally important. A lineup card is not a causal explanation for every scoring drought, and an “optimized” order is not a substitute for acquiring or developing better hitters. The difference among reasonable orders is usually small enough that health, platoon selection, defensive requirements, player rest, and projection error can change the answer. Good Mets analysis should demand the edge without exaggerating it.

## Sources

- Major League Baseball, [Baseball Basics: On the Field](https://www.mlb.com/official-information/basics/field) — official statement that players bat in listed order.
- Major League Baseball, [Batters glossary](https://www.mlb.com/glossary/positions/batter) — official nine-hitter and typical plate-appearance context.
- Major League Baseball, [Designated Hitter Rule](https://www.mlb.com/glossary/rules/designated-hitter-rule) — official DH and substitution constraints.
- Tom Tango, Mitchel Lichtman, and Andrew Dolphin, *The Book: Playing the Percentages in Baseball* (Potomac Books, 2007 edition), chapter on batting-order optimization — foundational lineup-slot framework.
- Bill Petti, [“Optimizing Batting Orders Across MLB”](https://blogs.fangraphs.com/are-league-wide-batting-orders-more-optimized/), FanGraphs, 2012 — explanation of out avoidance and lineup-slot leverage.
- Joe Douglas, [“Plate Appearances by Lineup Spot”](https://fantasy.fangraphs.com/buying-generic-plate-appearances-by-lineup-spot/), FanGraphs, 2017 — empirical 2016 plate appearances by batting-order position.
- Dave Allen, [“Optimizing Yesterday's Lineups”](https://blogs.fangraphs.com/optimizing-yesterdays-lineups/), FanGraphs, 2010 — scale and limits of sensible-order optimization.
- Jack Moore, [“Be Cautious With Lineup Analysis Tool”](https://blogs.fangraphs.com/be-cautious-with-lineup-analysis-tool/), FanGraphs, 2011 — model-context and input limitations.

## Open questions

- What are the Mets' current, regressed event-level projections against right- and left-handed pitching, and how sensitive is the preferred order to those estimates?
- How much does a Mets-specific simulation change when it includes Citi Field, base-running, double-play probabilities, and likely bullpen substitutions?
- Which ordering choices remain stable across plausible health and availability scenarios rather than winning only under one fragile set of inputs?
- How should the Mets trade a small modeled run-expectancy gain against rest, defensive quality, and player-specific workload constraints?
