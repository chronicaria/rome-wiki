---
title: How to validate a Mets lineup simulation
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, lineup-construction, simulation, model-validation]
as_of: 2026-07-10
desk: New York Mets
review_after: 2026-10-10
---

A Mets lineup simulation is credible only when its code passes mechanical tests, its frozen pregame inputs survive walk-forward backtests, its simulated distributions resemble held-out baseball rather than merely matching average runs, and its lineup conclusions remain stable under plausible projection and rule changes.

Up: [[New York Mets 2026]]

Related: [[How to simulate a Mets batting order responsibly]] · [[How lineup sequencing changes Mets run expectancy]] · [[How to read Mets Statcast changes without overfitting]]

**As of 2026-07-10.** This is a validation protocol, not a report of results from a Mets model. No unpublished 2026 simulation, backtest, or claimed optimal batting order is assumed here.

## Validation asks several different questions

“The simulator works” can mean at least four things, and passing one does not establish the others.

**Implementation validity** asks whether the program executes its written rules. Does a walk advance a forced runner but not a runner on second? Does the inning stop after three outs? Does the batting order resume with the correct hitter? Does the home team skip the bottom of the ninth when already ahead? These are software questions. A program can answer them perfectly while embodying a poor baseball model.

**Statistical calibration** asks whether events assigned a probability of, say, 20 percent happen about 20 percent of the time in genuinely unseen cases. Calibration is about probability honesty, not ranking. A model can rank hitters well but make every difference too extreme; another can be calibrated overall while failing badly against left-handed pitching.

**Distributional validity** asks whether complete simulated games resemble real games in the features the intended decision depends upon: runs, scoreless innings, crooked numbers, plate appearances by lineup slot, runner states, double plays, extra innings, and tails. Matching only league-average runs per game can conceal a simulator that generates too many two-run innings and too few shutouts or blowouts.

**Decision validity** asks whether the model chooses lineups that perform well out of sample and whether their estimated advantages are robust. A model may reproduce baseball adequately yet be unable to distinguish two sensible Mets orders because the projected difference is smaller than input uncertainty. That is an informative result, not a failure.

Validation should therefore be a ladder. Unit-test the engine, audit its identities and rules, calibrate component probabilities, backtest full-game distributions, compare decisions against baselines, and then stress the conclusion. A single correlation or a visually plausible box score cannot replace that ladder.

## Freeze the question before looking at outcomes

The cleanest test imitates the decision the Mets would have faced at the time. For every historical game in a backtest, create a timestamped packet using only information available before the lineup decision: active roster, announced or expected starters, handedness, prior performance window, projection release, park, weather if the proposed model uses it, bullpen availability if modeled, and the actual rule set on that date. Then lock the packet before revealing what happened.

This prevents **look-ahead leakage**. A season-ending batting line cannot be used to simulate an April lineup, because it contains the April outcome and months of later information. Nor can a retrospective injury diagnosis, corrected Statcast value, later roster move, or the opponent's actual relief sequence silently enter a supposedly pregame forecast. If the model assumes the announced starter will pitch six innings, it must not replace that assumption with his actual three-inning outing during scoring.

A useful walk-forward design trains or estimates through date $t$, predicts games after $t$, then advances the boundary and repeats. An expanding window preserves all prior seasons; a rolling window deliberately discards older data. Either can be defensible, but the choice should be written before results are inspected. Seasons, parks, rules, and the baseball itself change, so randomly shuffling plate appearances across time is a weak primary validation design: it lets future conditions teach the past.

Keep three datasets conceptually separate. A training set estimates hitter and environment inputs. A validation set selects model complexity, regression strength, and thresholds. A final test set receives one evaluation after choices are locked. Repeatedly tuning on the “test” years converts them into another validation set and makes reported accuracy optimistic.

For a Mets application, also preserve the distinction between **forecasting the actual lineup** and **evaluating alternative orders of the same nine hitters**. If the historical manager chose a different starting nine, comparing a simulated counterfactual order directly with the game's realized runs confounds player selection, sequencing, opponent performance, and luck. Full counterfactual decision validation needs either a credible outcome model for all candidate policies or a narrower claim. It cannot observe the runs an unplayed lineup would have scored.

## Prove the engine obeys baseball before judging forecasts

Start with deterministic tests whose correct answer is known. Construct tiny event scripts rather than relying on random games:

- twenty-seven ordinary outs must end a regulation visitor offense after nine innings, with the lineup index advanced exactly twenty-seven places;
- four consecutive walks from empty bases must score exactly one run and leave the bases loaded;
- a home run must clear every occupied base, score the batter, and preserve the out count;
- a double play from a legal state must add two outs, remove the correct runners, and end the inning if it creates the third out;
- a pinch hitter must inherit the replaced player's batting-order position rather than start a new order;
- a home club already leading after the top of the ninth must not bat again; and
- an extra-inning automatic runner must follow the official identity rule and not be sampled independently of lineup position.

Add conservation checks. Every completed plate appearance must create a recorded outcome. Runs cannot disappear between play totals and the game total. A runner cannot occupy two bases. Outs cannot decrease. No half-inning can continue beyond three outs. The next batter must be the prior lineup index plus one modulo nine except where the official substitution rule changes the player, not the slot.

Then use **invariants under controlled inputs**. If all nine hitters have identical event probabilities and identical running behavior, permuting them should not change the expected run distribution beyond Monte Carlo error. If home and road stopping rules are disabled in an inning-only test, rotating an identical lineup's starting index should not matter. Increasing one hitter's home-run probability while reducing only his out probability should not lower expected runs in a sufficiently precise paired experiment. Such tests catch indexing and transition errors that plausible aggregate output may hide.

Finally, reproduce an independent benchmark. A simple 24-state Markov calculation and a Monte Carlo inning simulator using the same stationary transition probabilities should agree within stated numerical error. Agreement does not prove the assumptions are realistic, but disagreement shows at least one implementation is wrong. Record code version, random seed, sample size, expected Monte Carlo standard error, and tolerance so “close enough” is not decided after seeing the result.

## Calibrate inputs at the level where they enter

A simulator usually consumes probabilities of strikeout, walk, hit by pitch, single, double, triple, home run, and other outs, sometimes followed by conditional advancement or double-play probabilities. Validate those quantities directly before aggregating them into runs.

For mutually exclusive plate-appearance outcomes, score the full probability vector with a proper scoring rule such as multiclass log loss or the Brier score. Accuracy based on the most likely category is nearly useless because “out” will dominate. Reliability tables should group predicted probabilities into predeclared bins and compare mean forecast with observed frequency, while displaying sample counts and uncertainty. Adaptive bins or smoothing help when triples and hit-by-pitches are rare, but the method must be fixed rather than chosen to beautify the plot.

Overall calibration can conceal conditional failure. Break results out by batter side, pitcher side, park, month, starter versus reliever, projection horizon, and probability range when samples permit. A Mets model intended to choose a platoon order needs credible handedness calibration; good league-wide calibration does not rescue an exaggerated left-right split. A model using Citi Field adjustments needs held-out evidence that the park transformation improves event or run forecasts, not merely an intuitive story.

MLB's wOBA glossary is useful context because it weights ways of reaching base by their run consequences, but wOBA alone is not a sufficient simulator input. Two hitters with equal wOBA can have different mixtures of walks, singles, and home runs, producing different transitions and lineup interactions. Likewise, MLB describes park factor as a comparison of scoring in a club's home and road environments. A single runs factor may be too coarse when the engine separately models home runs, doubles, and other events. Validate each transformation at the resolution the simulator uses.

Calibration uncertainty matters. If a bucket contains 25 plate appearances, an observed rate far from its forecast may still be noise; if it contains 25,000, a small gap can be systematic. Publish confidence or credible intervals, denominators, and missing-data rates. Do not declare a split fixed because one reliability point sits near the diagonal.

## Backtest the full game, not only its mean

Once component forecasts and transitions pass, simulate held-out games many times from each frozen packet. The observed game is one draw from an unknown process; the simulator supplies a predictive distribution, not one expected score. Score that distribution across many games.

Begin with transparent summaries:

- mean and variance of team runs per game;
- frequencies of zero, one, two, and high-run games;
- runs per inning and scoreless-inning rate;
- plate appearances by lineup slot and team total;
- frequencies of each base-out state and common transitions;
- walks, strikeouts, home runs, double plays, and stolen-base attempts if modeled;
- frequency and length of extra-inning games; and
- home-versus-road differences created by the skipped bottom ninth.

Compare predicted and observed distributions, not just point estimates. Mean absolute error or root mean square error in team runs can summarize location but rewards neither a well-shaped predictive distribution nor honest uncertainty. A discrete ranked probability score, log score with careful treatment of zero probabilities, or cumulative-distribution comparison evaluates more of the forecast. Quantile coverage supplies an intuitive check: outcomes should fall within a stated 80 percent predictive interval roughly 80 percent of the time across an appropriate held-out sample. Report sharpness too, because an interval of zero to twenty runs can cover well while being strategically useless.

Use diagnostic distances as clues, not verdicts. A Kolmogorov–Smirnov-style maximum CDF difference or Wasserstein distance can reveal distributional mismatch, but games are not necessarily identically distributed, and a huge sample can make a trivial deviation statistically significant. Pair any test with effect size, plots or tables, baseball-specific discrepancies, and the decision consequence.

Residual checks should look for structure. Does the model systematically underpredict games against elite starters, overpredict cold-weather power, or miss the right tail at hitter-friendly parks? Are errors clustered within series, suggesting ignored opponent or environment dependence? Does it reproduce average double plays only by generating them from impossible states? Aggregate agreement can result from offsetting errors, so trace discrepancies back through event, advancement, inning, and game layers.

## Compare against simple baselines and ablations

Complexity earns its place only by improving held-out performance or answering a necessary decision question. Compare the full Mets simulator with baselines such as league-average transitions, hitter-only stationary probabilities, a basic team run-rate model, and a version with no park or platoon adjustment. If a sophisticated pitch-type layer cannot beat a regressed handedness model out of sample, its detail is not validation.

An **ablation** removes one component at a time: Citi Field adjustment, baserunner speed, double-play model, bullpen sequence, pinch-hitting policy, or correlated pitcher-quality effect. Measure how predictive scores and lineup rankings change. An addition that barely changes validation but repeatedly flips the “best” order may be injecting variance rather than information.

Also benchmark the decision against plausible human heuristics: strongest projected hitters near the top, high on-base skill before power when costs are small, and the actual manager's order. The question is not whether an exhaustive optimizer can find a numerical maximum. It is whether the estimated advantage over sensible alternatives persists on fresh simulations, fresh historical windows, and plausible inputs.

Use common random numbers or matched random streams when comparing two orders: expose both to the same latent game conditions and random draws where the model permits. This reduces Monte Carlo noise in the difference. Then rerun finalists on independent seeds. Searching all $9! = 362{,}880$ orders and reporting the largest noisy estimate creates a winner's curse; selection and confirmation must use separate draws or an uncertainty correction.

## Sensitivity analysis is part of validation

Statistical fit does not prove that today's recommendation is stable. Re-run the Mets comparison across defensible alternatives:

- lower and upper credible values for every hitter's event probabilities;
- stronger regression of small platoon samples toward a stable prior;
- alternative but reasonable Citi Field and league run-environment factors;
- likely opposing-starter exit points and bullpen handedness sequences;
- conservative and aggressive runner-advancement rules;
- with and without double-play, steal, pinch-hit, and defensive-substitution modules;
- home and road stopping rules; and
- objectives of mean runs, probability of scoring at least a threshold, and win probability against a modeled opponent.

One-at-a-time perturbations explain local influence, but they miss interactions. A stronger uncertainty exercise draws a complete set of hitter and environment parameters from a joint distribution, simulates each candidate order, and reports how often each order wins and the distribution of its advantage. Preserve dependence: an unusually low league run environment can affect all hitters together, and player outcomes share opponent quality. Independent perturbations can create implausible worlds and understate or overstate uncertainty.

Present a **robustness region**, not merely a champion. For example: an order belongs to the supported set if its expected deficit from the estimated best is smaller than a predeclared practical threshold across most plausible parameter draws. The threshold should reflect the decision scale—perhaps runs per 162 games or win probability—not whether a difference is nonzero at a gigantic simulation count.

Monte Carlo error and model uncertainty must remain separate. If repeated simulation from fixed inputs yields a standard error of 0.001 runs per game, that says the computer has estimated its own assumed world precisely. It does not say the hitter projections, advancement rules, health state, or bullpen plan are known to that precision. Usually input and structural uncertainty dominate the ranking among reasonable lineups.

## Interpret backtests without pretending to observe the counterfactual

Realized Mets runs do not reveal how an alternative lineup would have performed in the same game. Baseball supplies only one path: the pitches thrown, balls put in play, substitutions made, and runs scored under the actual participants and decisions. Swapping two hitters changes which batter encounters which pitcher and state; the original event sequence cannot simply be reassigned as if nothing else changed.

Accordingly, backtesting can validate forecasts of observable distributions and mechanisms more directly than it validates the causal value of one unplayed order. A strong evaluation can show that the model predicted event rates honestly, reproduced held-out scoring patterns, and estimated lineup differences consistently across historical inputs. It cannot prove from the actual final score that its alternative would have won.

Avoid outcome-based anecdotes. If the modeled top order scores zero in one simulated-real game comparison, that is not falsification; if the manager's lower-ranked order scores twelve, that is not vindication. Probabilistic forecasts should be judged in batches using predeclared scores. Investigate individual games for bugs or missing mechanisms, but do not retune after every surprise.

Keep a model-change ledger. Each version should state what changed, why it changed without reference to final test outcomes, and which validation windows remain untouched. Preserve failed models and negative results. Otherwise hindsight makes a research process look cleaner and more successful than it was.

## A publication gate for Mets lineup claims

Before a simulation result enters a Mets article, its validation packet should answer:

1. What exact decision, date, players, opponent, and objective does it model?
2. Which data were available at the freeze time, and how was leakage excluded?
3. Which official rules and edge cases have deterministic tests?
4. How well are component event probabilities calibrated out of sample?
5. Does the full predictive distribution reproduce relevant game and inning features?
6. Which simple baselines does it beat, by how much, and on what held-out window?
7. What changes under ablations, parameter uncertainty, alternative rules, and independent seeds?
8. Is the estimated lineup edge large relative to Monte Carlo, projection, and structural uncertainty?
9. Can another analyst reproduce the result from code, inputs, versions, seeds, and source URLs?
10. Which important realities—private health data, game plans, proprietary tracking, or future bullpen choices—remain absent?

The public conclusion should match the weakest link. If the engine and aggregate fit are sound but rankings reverse under plausible hitter projections, say that multiple orders are effectively tied. If the model calibrates league-wide but fails its Citi Field or platoon slice, do not use it for that narrower Mets claim. If the test set influenced development, label it validation rather than untouched confirmation.

## Why it matters

Lineup sequencing offers a marginal, repeatable edge, which makes it tempting to attach authority to a precise simulation. Validation prevents computational precision from becoming false baseball certainty. It distinguishes a correct program from a useful model, a well-calibrated model from a stable decision, and a stable expected-run difference from a guaranteed result.

For Mets analysis, that restraint improves the actual decision. It shows whether ordering matters more or less than choosing the starting nine, whether a platoon adjustment is supported by held-out evidence, and whether Citi Field, bullpen branches, or baserunning details materially change the answer. Most importantly, it permits the honest conclusion that several lineups are indistinguishable at the available resolution. A tie with quantified uncertainty is better knowledge than an unsupported optimal order.

## Sources

Primary and authoritative sources first; accessed 2026-07-10.

- Major League Baseball, *Official Baseball Rules* (rules governing batting order, substitutions, designated hitter, regulation games, and extra innings): https://img.mlbstatic.com/mlb-images/image/upload/mlb/atcjzj9j7wrgvsm8wnjq.pdf
- Baseball Savant, “Statcast Search CSV Documentation” (field definitions including events, scores, run expectancy changes, player identifiers, and context): https://baseballsavant.mlb.com/csv-docs
- MLB Glossary, “Weighted On-base Average (wOBA)” (event-specific run weights and formula): https://www.mlb.com/glossary/advanced-stats/weighted-on-base-average
- MLB Glossary, “Ballpark Factor” (official overview of home-versus-road run-environment comparison): https://www.mlb.com/glossary/advanced-stats/park-factor
- MLB Glossary, “Win Expectancy” (historical-state definition incorporating score, inning, outs, runners, and run environment): https://www.mlb.com/glossary/advanced-stats/win-expectancy
- Andrew Schaeffer, John Constantino, and Brandon McConnell, “Data and code from: Using simulation to optimize batting lineups in Major League Baseball,” Dryad (2026), DOI 10.5061/dryad.s4mw6m9kf: https://datadryad.org/dataset/doi:10.5061/dryad.s4mw6m9kf
- Surya Tallavarjula, “A Monte Carlo simulation of baseball offense with speed-stratified baserunning and distributional validation,” *International Journal of Sports Science & Coaching* (2026), DOI 10.1177/22150218251410737: https://journals.sagepub.com/doi/10.1177/22150218251410737
- Brandon Mitchell, “Modeling Baseball as a Markov Chain to Optimize Average Runs Per Game,” Claremont McKenna College senior thesis (2021): https://scholarship.claremont.edu/cmc_theses/2722/

## Open questions

- Which frozen projection archives are sufficiently complete to support a leakage-free, multi-season walk-forward Mets backtest?
- What practical-equivalence threshold in runs per season should define a supported set of lineups rather than a single winner?
- How much does preserving correlation among hitter projections, opponent quality, and league environment change the uncertainty around lineup rankings?
- Which distributional discrepancies matter most for sequencing decisions even when total runs per game are well calibrated?
- Can public data validate late-game substitution policies without assuming health, availability, and manager intent that were never observed?
