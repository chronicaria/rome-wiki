---
title: How NBA injury reports should change fantasy decisions
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, injuries, decision-making]
as_of: 2026-07-09
desk: Fantasy basketball
review_after: 2026-08-09
---
An NBA injury report should update a fantasy decision as a timestamped piece of availability evidence, not as a medical prognosis or a command to transact.

Up: [[Fantasy Basketball]] · Related: [[Fantasy basketball role-change checklist]], [[Fantasy basketball replacement level]], [[Fantasy basketball decision calibration]]

## The report answers a narrow question

The NBA's official injury report is a leaguewide disclosure system. It records which players may have their participation affected, their current status, and a stated reason. It does not directly answer how many minutes a player will receive, how effective the player will be, whether a replacement will close, or what a fantasy manager should do. Those are downstream forecasts that require other evidence.

That distinction matters because fantasy decisions combine at least four questions:

1. **Will the player be available for this game?** The report is primary evidence.
2. **If active, what workload and role are plausible?** This requires team statements, recent rotations, and an understanding of the condition without pretending to diagnose it.
3. **Who receives the displaced opportunity if the player sits?** This is a rotation and lineup question, not a synonym for “the backup starts.”
4. **Is acting worthwhile in this league before its deadline?** This depends on lineup locks, categories or points, roster slots, acquisition costs, and the actual replacement pool.

The public article can teach the method. It cannot turn a status label into personalized add/drop, start/sit, or waiver advice without current private league context. No move is recommended or executed here.

The practical unit of analysis is therefore not a label in isolation but an evidence sequence: report version, publication time, decision deadline, subsequent team information, final availability, and observed workload. Preserving that sequence makes later calibration possible and prevents the final outcome from rewriting what was genuinely knowable before lock.

## Official timing creates predictable information waves

For the 2025–26 season, the NBA says teams generally must submit a status and reason by 5 p.m. local time on the day before a game. The exception is the second game of a back-to-back, for which the initial deadline is 1 p.m. local time on game day. Teams also submit a game-day report between 11 a.m. and 1 p.m. local time, or between 8 and 10 a.m. for games tipping at 5 p.m. or earlier; the game-day requirement excludes the second game of a back-to-back. The league publishes updates continually during the day.

These mechanics produce three practical lessons.

First, “not listed yet” is not always equivalent to “available.” A team may not have reached its required reporting window, and an official report can explicitly say that a team has not yet submitted. The correct state is **unknown pending submission**, not a confident assumption.

Second, the value of waiting changes across the day. A decision made before the next required submission is exposed to an identifiable information arrival. If the fantasy platform permits a later choice at little cost, waiting has option value. If a waiver claim, weekly lineup, or early game locks first, the manager faces a real deadline mismatch and must act under uncertainty.

Third, a screenshot or notification can become stale quickly. Every observation should preserve the report's date and publication time, the relevant game's start time, and the fantasy lock time. “Questionable” without a timestamp is incomplete evidence. Continual updates mean the current official page, rather than an earlier repost, owns the latest public state.

## Status is not a universal probability

Official reports commonly show states such as available, probable, questionable, doubtful, and out. The NBA page explains when teams must report and the report files display the current labels. The public material inspected for this article does not supply an official numerical probability for each label. It would therefore be wrong to assert that every “questionable” player has one fixed chance of playing, or to borrow a percentage definition from another league and present it as NBA policy.

Treat the labels as **ordered evidence** unless a well-constructed historical dataset supports a more precise conditional estimate. “Out” resolves game availability at that observation time. “Available” indicates availability but does not promise normal workload. The intermediate labels signal differing degrees of uncertainty, yet their empirical meaning can vary by team, season, reason, player, report horizon, and whether the game is the second night of a back-to-back.

A numeric estimate can still be useful, but it must be labeled as an inference. A transparent model might estimate

$$
P(\text{plays})=f(\text{status},\text{time to tip},\text{team},\text{reason class},\text{prior status path},\text{schedule context}).
$$

That estimate needs out-of-sample checking and enough observations in each subgroup. It should shrink sparse team- or injury-specific estimates toward a broader base rate rather than manufacture precision. It must also define “plays”: active status, entering the game, or clearing a fantasy platform's minimum contribution are different outcomes.

## Read the path, not only the latest label

An injury report is a sequence. The path from out to doubtful to questionable is different evidence from a new same-day downgrade from probable to questionable, even if both end at the same label. The path can reveal whether uncertainty is resolving favorably or worsening, but it remains evidence about the immediate game rather than a diagnosis.

A useful record stores each version as a new observation rather than overwriting history:

| Time observed | Official status | Official reason | New information | Fantasy implication |
| --- | --- | --- | --- | --- |
| Day-before report | current label | verbatim category | baseline disclosure | establish uncertainty window |
| Game-day report | current label | changed or unchanged | direction and persistence | revise play probability |
| Near-tip update | current label | changed or unchanged | latest official state | make deadline-specific choice |
| Confirmed lineup or inactive state | final public evidence | n/a | immediate participation state | resolve start/sit branch where locks allow |

Preserving the sequence prevents hindsight from making a forecast look better than it was. It also permits later [[Fantasy basketball decision calibration|calibration]]: did a 60% play estimate really occur near 60% of the time across comparable decisions?

## Availability, workload, and performance are separate branches

The most common analytical error is collapsing “active” into “normal fantasy output.” A player can be available but limited, play fewer minutes, avoid back-to-backs, leave early, or occupy a lower-responsibility role. Conversely, a returning star may play enough to reduce teammates' touches even before recovering full individual production.

The decision tree should therefore have conditional branches:

$$
E[V]=P(A)\{P(N\mid A)E[V\mid A,N]+P(L\mid A)E[V\mid A,L]\}+(1-P(A))E[V\mid \neg A],
$$

where $A$ means active, $N$ means a normal workload, $L$ means a limited workload, and $V$ is fantasy value under the league's scoring and lineup rules. The equation is a framework, not a claim that the probabilities are known precisely.

For the injured player, relevant public evidence includes recent minutes, explicit team statements about restrictions, time away, practice participation when officially reported, and the team's normal substitution pattern. Fantasy inference should use ranges: for example, a limited-minutes branch and a normal-role branch. It should never convert an injury label into unauthorized medical certainty.

For teammates, the mechanism is opportunity redistribution. Minutes can move to a nominal backup, but ball-handling, shots, rebounds, defensive assignments, and closing time may be divided among several players. A replacement starter can gain minutes without gaining usage. A bench creator can remain a reserve yet become the larger fantasy beneficiary. [[Fantasy basketball role-change checklist]] provides the wider test.

## The lock-time mismatch is the actual decision problem

Suppose an uncertain player's game begins at 10 p.m. ET, but a possible substitute plays at 7 p.m. If the fantasy platform locks each player at individual tip, waiting for the late game's final news may forfeit the early substitute. Under a weekly lineup lock, the decision may occur days before either game. Under a daily-tomorrow transaction rule, even a confirmed absence may arrive too late to add a replacement.

The injury decision is therefore an exercise in comparing actions available **now**, not an abstract prediction of who plays. The action set should include:

- keep the uncertain player active;
- use a known-active substitute before that player's lock;
- move the player to an eligible injured slot if the platform designation permits it;
- add a replacement if an acquisition and drop are justified;
- hold and preserve flexibility or transaction resources.

Each action has state-contingent value. A simple expected-utility comparison is

$$
EU(a)=\sum_s P(s\mid I_t)U(a,s)-C(a),
$$

where $I_t$ is the information available at decision time, $s$ includes play/workload states, and $C(a)$ includes acquisition use, FAAB or priority, the dropped player's value, and lost flexibility. Expected fantasy points alone are not enough in category leagues, where the utility of assists, blocks, percentages, or turnovers depends on standings or matchup context.

Waiting is itself an action. Its value is the expected improvement from the next report minus the risk that alternatives lock or disappear. A good note states the next information event and the option that expires first.

## Injury designations also affect roster mechanics

Fantasy platforms decide their own eligibility labels and timing. The NBA's official “out” status and a platform's IL or IL+ eligibility are related inputs, not necessarily identical systems. A manager must verify the actual league setting and current platform state. Generic platform rules cannot override customized league rules.

This matters because moving a player to an injured slot can create a temporary roster opening, while the player's return can later create a roster squeeze. The immediate add is not free if it forces a later drop, consumes an acquisition, or blocks a better streaming window. That is a [[Fantasy basketball replacement level]] problem.

Likewise, the beneficiary of an absence should not automatically receive a rest-of-season projection. An injury can create a short contingent role with high near-term value but little durable value once the rotation heals. The forecast needs an expiry condition: teammate return, official upgrade, first game back, minutes restriction ending, or another rotation change.

## A disciplined injury-information workflow

### 1. Define the decision and its deadline

Record the league format, lock rule, relevant games, available roster slots, plausible alternatives, and exact time at which each option disappears. If these private facts are missing, stop before personalized advice.

### 2. Capture the latest official state

Use the current NBA report, including publication time, game date, matchup, status, and reason. Note “not yet submitted” as missing official state. Do not silently substitute an aggregator.

### 3. Separate evidence layers

Label each item as official report, official team statement, direct coach/player comment, established reporter information, model projection, or desk inference. Conflicting evidence does not become certain through repetition.

### 4. Forecast three quantities

Estimate availability, conditional workload, and conditional production separately. Use intervals or scenarios. For teammates, model the redistribution of minutes and responsibilities rather than assigning all vacated production to one person.

### 5. Compare all feasible actions

Include no action. Price the drop, acquisition, waiver resource, late-swap flexibility, category fit, and future roster squeeze. Confirm that any suggested replacement is actually available.

### 6. State a trigger and expiry

A decision should say which next report, lineup confirmation, platform designation, or game lock changes it. After that event, the old recommendation is historical, not current advice.

### 7. Review the process later

Archive the probability and action before the outcome. Grade whether the evidence was used properly, not merely whether the player happened to play. A sound uncertain decision can lose; a reckless certainty can win once.

## Failure modes

**Treating questionable as a coin flip.** No official NBA percentage mapping was located. Estimate from data or remain qualitative.

**Using the first report all day.** Reports update continually. Preserve timestamps and refresh near the decision window.

**Reading absence as production transfer.** Minutes and responsibilities redistribute differently; team role evidence is required.

**Ignoring normal-workload uncertainty.** Active does not guarantee full minutes or effectiveness.

**Letting news urgency erase transaction cost.** An add can consume a scarce acquisition, force a valuable drop, or lose flexibility.

**Backfilling certainty after the result.** The final inactive list cannot be treated as information known at an earlier weekly lock.

**Publishing private league state.** Public injury method belongs here; roster, opponent, player pool, and league identifier belong only in an authorized private layer.

## Sources

- [NBA Injury Report: 2025–26 Season](https://official.nba.com/nba-injury-report-2025-26-season/) — official reporting deadlines, back-to-back exception, game-day windows, and continual-update statement; accessed July 9, 2026.
- [NBA injury report, March 6, 2026, 2:30 p.m. ET](https://ak-static.cms.nba.com/referee/injury/Injury-Report_2026-03-06_02_30PM.pdf) — official example showing matchup, team, player, current status, and reason fields; accessed July 9, 2026.
- [NBA transactions](https://www.nba.com/players/transactions) — official transaction state that can change availability and replacement roles; accessed July 9, 2026.
- [NBA Stats](https://www.nba.com/stats) — official box-score, minutes, and lineup evidence for checking downstream role claims; accessed July 9, 2026.

The timing rules above are official. The probability equations, decision tree, and workflow are analytical inferences, not NBA policy or medical advice.

## Open questions

- What are the empirical play rates for each status after conditioning on team, season, reason class, report horizon, and back-to-back state?
- How often does “available” still lead to a materially limited workload, and which public signals improve that forecast?
- Which teammate role statistics best predict the distribution of minutes and usage after a late absence?
- How should an injury model represent correlated absences and lineup-level effects rather than treating players independently?
- Which fantasy platforms' lock and IL rules create the largest value of waiting, and how often do those rules change?
