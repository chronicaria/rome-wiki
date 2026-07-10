---
title: How to simulate a Mets batting order responsibly
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, lineup-construction, simulation]
as_of: 2026-07-10
desk: New York Mets
review_after: 2026-08-10
---

A responsible Mets batting-order simulation publishes its regressed hitter inputs, opponent and Citi Field adjustments, legal substitution tree, random uncertainty, and sensitivity results; it compares plausible plans rather than presenting one fragile ordering as objectively optimal.

Up: [[New York Mets 2026]]

Related: [[How lineup sequencing changes Mets run expectancy]] · [[How platoons and bench roles shape the Mets lineup]] · [[How to read Mets Statcast changes without overfitting]]

**As of 2026-07-10.** This is a specification for a reproducible model, not a model run and not a recommended 2026 Mets lineup. It deliberately supplies no player probabilities or simulated run totals. Those outputs would require dated, auditable inputs that can be rerun.

## Why simulate at all

A batting order is a cyclic process. The next batter is fixed by the lineup position, but the base-out state he inherits depends on everything that happened before him. A walk, single, double play, stolen base, substitution, or inning-ending out changes both the state and which hitter is likely to bat with runners aboard later. That dependence makes a simulation more informative than adding nine isolated batting lines.

The simulation's proper job is narrow. It can estimate how often candidate orders produce runs under stated assumptions. It cannot discover a player's true talent from a hot week, know undisclosed health information, or prove that the order with the highest sample mean will remain best. [[How lineup sequencing changes Mets run expectancy]] owns the baseball logic behind plate-appearance allocation and base-out states. This note owns the implementation discipline needed to turn that logic into an auditable Mets experiment.

There are $9! = 362{,}880$ orders of nine distinct starters. Exhaustive enumeration is computationally possible for a simple model, but “evaluate every order” is not the same as “know the answer.” If the event probabilities are noisy or the game engine is unrealistic, exhaustive search merely finds the arrangement that best exploits the model's errors. Responsible optimization therefore starts by defining the information set and uncertainty, then asks whether the leading order survives reasonable changes.

## Freeze a reproducible game packet

Every run should begin from a versioned packet rather than a live webpage. At minimum, preserve:

- research timestamp and intended game date;
- the nine eligible Mets starters and their batting sides;
- candidate bench players, defensive coverage, and batting sides;
- the opponent's announced or expected starter, throwing hand, and projected workload distribution;
- the opponent bullpen pool by hand and role, with availability assumptions separated from facts;
- venue, home/away status, and the league run environment used;
- player-event projection table, its data cutoff, and its regression method;
- runner-advancement and double-play parameters;
- all substitution policies; and
- the random-number seed, simulation count, code version, and output schema.

The packet must distinguish official state from analyst choice. An official Mets roster page can establish that a player is active at the time of access; it cannot establish that he is healthy enough to start. An announced opposing pitcher can establish the expected first matchup; it cannot guarantee how long he will remain. A bench-use policy is a modeled managerial branch, not a report about what the manager will do.

Save raw counts as well as rates. A .300 event probability based on ten opportunities carries radically different uncertainty from the same rate based on a thousand. If data come from multiple providers, record definitions and reconcile totals before modeling. Do not silently mix postseason, spring-training, minor-league, and regular-season plate appearances.

## Build regressed hitter event probabilities

The minimum useful hitter vector is more granular than batting average, OBP, or OPS. For batter $i$ against pitcher context $c$, estimate a mutually exclusive distribution such as

$$
\mathbf{p}_{i,c}=(p_{BB},p_{HBP},p_{1B},p_{2B},p_{3B},p_{HR},p_{K},p_{BIP\ out}),
$$

with the components summing to one. Reaching on error can be modeled separately or absorbed into advancement logic, but the choice must be stated. Intentional walks should normally be a tactical policy rather than an intrinsic hitter event. Sacrifice bunts and flies also require state-dependent handling; treating them as fixed batter rates confuses opportunity with ability.

Raw same-season rates are not projections. Begin with multiple seasons, weight recent evidence more heavily, and regress every component toward an appropriate league or player-class mean. Marcel provides a useful minimum-competence principle: three years, recency weighting, regression toward the mean according to playing time, and an age adjustment. A production system may improve on Marcel, but it should not omit the basic protection against small-sample extremes.

One transparent shrinkage form for an event rate is

$$
\tilde p_{i,e}=\frac{n_i p_{i,e}+k_e p_{L,e}}{n_i+k_e},
$$

where $p_{i,e}$ is the player's weighted observed rate for event $e$, $n_i$ is its effective opportunity count, $p_{L,e}$ is a league prior, and $k_e$ controls regression strength. The $k_e$ values should not be guessed after seeing which lineup wins. Estimate them from out-of-sample history, take them from a documented projection method, or expose a broad sensitivity range.

Handedness should enter through partial pooling, not two independent raw split lines. Most hitters have far fewer plate appearances against left-handed pitching, so a hitter's observed left/right difference should shrink toward a league handedness effect. Switch hitters need side-specific data, and the pitcher matchup uses the side from which the batter will actually hit. If an individual split is weakly identified, the model should say so rather than converting fifty plate appearances into certainty.

Pitch-type matchup adjustments are optional and dangerous. They may add signal when the expected pitcher and batter both have adequate, current samples, but pitch usage changes by count, batter side, times through the order, and game plan. A conservative public model should run a handedness-only baseline and treat pitch-type matching as a separate sensitivity branch. It should never multiply a hitter's overall projection by a tiny career line against one named pitcher.

## Add league, opponent, and Citi Field context without double counting

First set the league baseline for the modeled period. Event probabilities and runner advancement belong to a run environment: rates from a different season or era can misstate both scoring and the value of sequencing. Publish whether the baseline covers the current season to date, a rolling multi-year window, or a projection. A partial-season league estimate should itself be regressed because weather and schedule composition can distort early samples.

Then blend batter and pitcher information. A simple model can combine a hitter's regressed rate, the opponent pitcher's regressed allowed rate, and the league rate on a log-odds or odds-ratio scale. The exact formula matters less than testing it out of sample and preventing double counting. If the hitter projection is already park- and opponent-adjusted, do not apply those adjustments again. If a commercial projection is used, document what its public methodology reveals and do not pretend inaccessible internals are reproducible.

Citi Field should not be represented by one multiplier applied to every event and hitter. Baseball Savant's Statcast park-factor pages set 100 as average and provide separate factors by outcome, handedness, and rolling window. That structure matters: the venue can affect singles, doubles, triples, home runs, strikeouts, and walks differently, and an effect for left-handed batters need not match the right-handed effect.

Use a multi-year factor or a regressed current estimate, preserve the selected filters, and apply it to the relevant event odds before renormalizing the vector. Treat the factor as uncertain. Park factors blend dimensions, weather, batter and pitcher composition, and measurement choices; they are not physical constants. A responsible Citi Field branch might compare no park adjustment, the selected rolling Statcast factor, and a factor shrunk halfway toward neutral. If the lineup ranking flips among those branches, the venue evidence is not strong enough to support a categorical recommendation.

Home status also changes the game engine. The Mets do not bat in the bottom of the ninth when already ahead, so a home-team simulation needs a score-aware stopping rule. A fixed nine-inning run generator that always gives the home lineup nine turns overstates plate appearances and can slightly distort ordering comparisons. Regular-season extra innings require a separate automatic-runner branch tied to the preceding lineup position, not a generic runner selected independently of the order.

## Encode baseball as state transitions

The core state can be written as

$$
S=(inning, half, outs, bases, score, lineup\ index, pitcher, bench, defense, DH\ status).
$$

For a Mets-offense-only expected-runs experiment, opponent half-innings and score can be omitted initially. But they must return for walk-off rules, leverage-dependent substitutions, intentional walks, bunts, steals, defensive replacements, or extra innings. A model should use the smallest state sufficient for the claim it makes.

At each plate appearance:

1. identify the batter from the current lineup index and any prior substitution;
2. identify the active pitcher context and times-through-order state;
3. draw an event from the adjusted hitter vector;
4. draw any conditional advancement, double-play, or error outcome;
5. update runs, bases, and outs;
6. advance the lineup index modulo nine; and
7. end the half-inning at three outs, applying the legal game-ending rule when relevant.

Singles and doubles cannot use one deterministic advancement rule. A runner on first sometimes reaches third on a single; a runner on second does not always score. Advancement varies with outs, batted-ball location, runner speed, fielder arm, and game state. Start with league conditional advancement tables and, only with sufficient evidence, add regressed runner or fielder effects. Run a simpler station-to-station branch to reveal how much those assumptions drive the answer.

Double plays also need a conditional branch. They require fewer than two outs, at least a force opportunity, a ball in play of a suitable type, and successful fielding. A batter's raw grounded-into-double-play total is opportunity-dependent and should not be inserted as an unconditional event probability. Model ground-ball-in-play probability and conversion conditional on the base-out state, then shrink any batter or runner modification.

Stolen bases, pickoffs, sacrifice attempts, and intentional walks are decisions between plate appearances. The clean baseline excludes them or uses a fixed league policy. A tactical version should declare a policy based on runner, battery, outs, score, inning, and hitter pocket. Optimizing those decisions simultaneously with the batting order is a different and much larger problem; it should not be smuggled into the baseline.

## Respect the DH and substitution rules

The starting card is not the complete offense. Under Official Baseball Rules 5.10 and 5.11, a substitute takes the removed player's batting-order place, a removed player cannot return, and the designated hitter is bound to a lineup position. A pinch hitter or pinch runner for the DH becomes the DH. Certain moves involving the DH and pitcher terminate the DH role and can place the pitcher into the batting order. The model must either encode these cases or explicitly prohibit them.

The opponent's pitching changes also affect the matchup path. The three-batter minimum generally requires an entering pitcher to face at least three consecutive batters, including the batter then at bat, or finish the half-inning, subject to injury or illness exceptions. A bullpen model therefore cannot freely choose a new reliever for every Mets hitter. It should track when the pitcher entered, how many consecutive batters he has faced, inning completion, and whether a modeled exception exists.

Use at least three substitution policies:

- **Static baseline:** the starting nine remain, the opposing starter faces a sampled workload, and bullpen pitchers enter by a neutral documented rule.
- **Conservative realistic policy:** pinch-hit only when a regressed matchup gain exceeds a preset threshold and legal defense remains; reserve the backup catcher and essential positional coverage.
- **Aggressive policy:** use the best available pinch hitter in high-leverage branches, accept later defensive or matchup costs, and permit counter-moves consistent with the three-batter minimum.

These are scenarios, not descriptions of the Mets manager. The model should output which substitutions occurred and how often. If an order “wins” only because an unrealistic policy consumes every bench bat at the first platoon disadvantage, the order is not robust.

The designated hitter deserves an explicit flag. If the DH moves to defense, the engine must apply the rule consequence rather than treating the vacant fielding position as an ordinary swap. The automatic runner in extra innings is likewise determined by the batting-order position immediately preceding the inning's leadoff batter, with substitutions handled under the rule; order and bench use therefore affect runner identity.

## Represent uncertainty instead of simulating only random outcomes

Monte Carlo variation within games is not the main uncertainty. Running one million games from a single fixed probability table can estimate that table's mean very precisely while remaining confidently wrong about the players. The model needs two uncertainty layers:

1. **parameter uncertainty:** draw plausible hitter, pitcher, park, advancement, and substitution parameters from their posterior or bootstrap distributions;
2. **game uncertainty:** within each parameter draw, simulate plate-appearance outcomes.

This nested structure answers the real question: across plausible descriptions of current ability and game context, how often does order A outperform order B? Report a distribution for the difference, not only each order's mean runs per game. Useful outputs include the median difference, a 50% and 90% interval, probability each candidate leads, plate appearances by slot, substitution frequency, and the fraction of parameter draws in which the ranking reverses.

Use common random numbers when comparing orders: evaluate competing lineups under matched parameter draws and, where feasible, matched random streams. This reduces noise in the difference. Publish convergence checks by doubling the number of parameter draws and games per draw. A fixed seed makes one run reproducible; several independent seeds show that the conclusion is not a lucky stream.

Avoid selecting only the maximum of 362,880 noisy estimates. Use enough matched simulations to screen orders, rerun finalists at higher precision, and compare them with realistic manager-style alternatives. Correct uncertainty for the selection process or validate finalists on fresh random draws. Otherwise the reported “best” order receives a winner's-curse boost from simulation noise.

## Required sensitivity branches

A Mets result should not be considered stable until it survives a predeclared grid:

- stronger and weaker regression of current hitter form;
- league-average versus partially pooled individual platoon effects;
- opposing starter exits early, at a central workload, or late;
- bullpen mixtures with more left-handed or right-handed exposure;
- neutral park, selected Citi Field factors, and factors shrunk toward neutral;
- league-average versus player-informed advancement and double-play rules;
- static, conservative, and aggressive substitution policies;
- each close hitter projection moved through a plausible uncertainty range;
- home stopping rules and, if relevant, extra-inning frequency; and
- objective changed from expected runs to probability of scoring at least one, at least two, or a score-aware win simulation.

Expected runs is not always the relevant objective. A lineup that slightly raises blowout scoring may not maximize the chance of scoring one run in a late tie. Yet a score-aware win model adds the opponent offense, bullpen leverage, defense, and home/away state. Label that expansion clearly. Do not call a runs-only model a win-probability model.

The decisive output is a stability table. For every candidate order, show its central estimate, uncertainty interval, rank range, and worst plausible disadvantage to another sensible order. If several orders are practically tied, publish the equivalence class. A manager may reasonably choose among tied orders using rest, communication, defensive comfort, or private health information unavailable to the public.

## A publication standard for any “optimal Mets lineup” claim

No public result should use the word *optimal* unless another analyst can reproduce it from the disclosed packet. Publication should include a machine-readable input table, exact source URLs and access dates, transformation code, rules configuration, random seeds, number of outer and inner simulations, candidate-order set, and all sensitivity results. It should also state what is absent: private tracking data, undisclosed injuries, manager preferences, batter-pitcher game plans, weather detail, or proprietary projections.

The headline comparison should be against sensible alternatives, not against a deliberately poor traditional lineup. Separate the value of **selection**—which nine Mets start—from **sequencing**—their order. Replacing a weak starter with a stronger available hitter can dwarf rearranging the same nine. If the model changes both simultaneously, attribute the gains separately.

Before trusting a current result, backtest the full pipeline on earlier seasons using only information that existed before each game. Test event calibration, runs per game, lineup-slot plate appearances, handedness branches, park splits, and substitution frequency. Calibration matters more than correctly predicting the winner of a single game. Freeze the code and inputs before inspecting the next outcome; one game's runs do not validate or falsify a probabilistic model.

Finally, preserve negative results. If Citi Field adjustments, bullpen handedness, or plausible projection error repeatedly reverse the top two orders, that instability is the finding. It says the evidence supports several reasonable arrangements, not that the simulation failed.

## Why it matters

Mets lineup arguments often mix four different questions: which players should start, how those nine should be ordered, how the opponent will change pitchers, and what the manager will do later. A simulation can separate them, expose assumptions, and measure whether the apparent edge is large enough to care about. It is especially useful when two plausible orders trade plate-appearance volume, platoon shape, and late-game flexibility.

Its greatest value is epistemic restraint. A reproducible model can show that a choice is robust, that several choices are effectively tied, or that the answer depends on an uncertain split or substitution policy. All three outcomes are more useful than declaring one permanent Mets lineup from recent box scores. The club changes, opponents change, Citi Field conditions vary, and projected talent remains uncertain; the simulation should make those dependencies visible.

## Sources

Primary and official sources first; accessed 2026-07-10.

- Major League Baseball, “Official Baseball Rules,” especially Rules 5.10–5.11 on substitutions, batting-order places, the three-batter minimum, and the designated hitter: https://img.mlbstatic.com/mlb-images/image/upload/mlb/atcjzj9j7wrgvsm8wnjq.pdf
- MLB Glossary, “Substitutions”: https://www.mlb.com/glossary/rules/substitutions
- MLB Glossary, “Designated Hitter Rule”: https://www.mlb.com/glossary/rules/designated-hitter-rule
- MLB Glossary, “Three-batter Minimum”: https://www.mlb.com/glossary/rules/three-batter-minimum
- MLB Glossary, “Automatic Runner”: https://www.mlb.com/glossary/rules/designated-runner
- MLB Glossary, “Third Time Through the Order Penalty”: https://www.mlb.com/glossary/miscellaneous/third-time-through-the-order-penalty
- Baseball Savant, “Statcast Park Factors” leaderboard: https://baseballsavant.mlb.com/leaderboard/statcast-park-factors?type=year
- Baseball Savant, “Citi Field — Park Factors”: https://baseballsavant.mlb.com/leaderboard/statcast-venue?venueId=3289
- Baseball Savant, “Statcast Search”: https://baseballsavant.mlb.com/statcast_search
- Baseball-Reference, “Marcel the Monkey Forecasting System,” documenting Tom Tango's three-year, recency-weighted, regressed, age-adjusted baseline: https://www.baseball-reference.com/about/marcels.shtml
- Tom Tango, “Forecasting 2006,” describing Marcel's minimum-competence projection steps: https://tht.fangraphs.com/forecasting-2006/

## Open questions

- Which public, downloadable event dataset should be frozen as the canonical input when Baseball Savant interface results change or lack a stable query export?
- What out-of-sample procedure best estimates event-specific regression weights for current Mets hitters without using proprietary projection data?
- Which public runner-advancement tables preserve batted-ball location, outs, and park context at a reproducible level?
- How should a public model infer opposing bullpen availability without inventing private warm-up, soreness, or manager-preference information?
- Does adding pitch-type matchup data improve held-out calibration enough to justify its extra variance and model complexity?
- How often do plausible Citi Field, platoon, and substitution branches change the ranking rather than merely the size of the difference?
