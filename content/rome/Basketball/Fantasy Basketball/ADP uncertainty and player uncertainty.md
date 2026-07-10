---
title: ADP uncertainty and player uncertainty
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, drafts, uncertainty, decision-making]
---
Average draft position describes where a particular drafting population selected a player; it does not, by itself, describe the probability distribution of that player's future production.

Up: [[Fantasy Basketball]]

Related: [[Using projection disagreement in fantasy basketball]] · [[Fantasy basketball replacement level]] · [[Category floors and ceilings in fantasy basketball]] · [[Fantasy basketball role-change checklist]] · [[Rookie roles that matter for fantasy basketball]]

## Two different questions hidden inside one number

Average draft position (ADP) is a market statistic. For a defined set of completed drafts, take the pick number at which player $i$ was selected in each draft and average those numbers:

$$
\operatorname{ADP}_i=\frac{1}{N_i}\sum_{d=1}^{N_i}P_{i,d}.
$$

Here $P_{i,d}$ is the player's pick in draft $d$, and $N_i$ is the number of observed drafts in which the player was selected. This calculation answers a narrow descriptive question: **where has this sampled market been taking the player?** It does not answer the distinct predictive question: **what distribution of fantasy outcomes will the player produce?**

Yahoo's official help makes the market origin unusually clear. Its Fantasy Plus draft report is sourced from ADP among the top five percent of its most successful fantasy managers. That may be a useful reference population, but it remains a record of selections made by a specified group. It is not a player projection, an injury probability, or a guarantee that the sampled managers played Andrew's format.

The distinction matters because the same ADP can coexist with radically different player uncertainty. One veteran may be drafted near pick 50 because most managers expect a narrow band of stable starter production. A rookie may also average pick 50 because some rooms price a starting-role breakout and others price a bench role. The average erases that difference. Conversely, a player can have tightly clustered draft positions while retaining enormous outcome uncertainty if every drafter is anchoring to the same uncertain depth chart.

Call the two objects:

- **market-location uncertainty:** uncertainty about when a player will be selected in the specific draft that matters; and
- **player-outcome uncertainty:** uncertainty about the player's future games, minutes, role, rates, and format-specific value.

They can interact, but neither is a substitute for the other. A disciplined draft board models both.

## Why ADP is not a belief distribution

A pick number is an action in a sequential allocation game, not a direct forecast of player value. Drafters choose among the players still available while responding to roster needs, position eligibility, category strategy, queue visibility, clock pressure, platform defaults, and anticipated behavior by opponents. Two managers can have identical beliefs about a player and select him at different picks because their rosters and opportunity costs differ. Two managers can select him at the same pick while holding different outcome forecasts.

That makes an observed pick a function of more than player talent:

$$
P_{i,d}=f(B_{i,d},R_d,S_d,A_d,I_d,M_d),
$$

where $B$ represents beliefs about the player, $R$ roster and category needs, $S$ league settings, $A$ the available-player set, $I$ the information available at that timestamp, and $M$ the platform and market environment. The formula is conceptual rather than an estimable law. Its purpose is to prevent the common error of reading every pick difference as disagreement about basketball.

ADP also compresses an ordinal process. The difference between picks 12 and 18 is not necessarily the same amount of expected value as the difference between picks 112 and 118. Pick order says who went first; it does not reveal how close the drafters considered the alternatives. Averaging those ranks can produce a decimal that looks precise without adding cardinal meaning.

Nor does the mean show shape. Suppose a player goes at picks 40, 40, 40, 40, and 90. His ADP is 50. Another goes at 48, 49, 50, 51, and 52 and also has ADP 50. The first sample contains a tail event or a split market; the second is concentrated. Reporting only ADP makes them identical.

At minimum, a market view should retain:

- sample size and eligible-draft definition;
- median pick;
- interquartile range or another robust spread measure;
- earliest and latest pick, clearly labeled as extremes rather than confidence bounds;
- draft dates and recency weighting;
- platform, league size, format, and roster rules; and
- whether automated drafts, mocks, experts, or special manager cohorts are included.

Even this richer description remains a distribution of **actions**, not a calibrated distribution of **outcomes**.

## Disagreement and uncertainty are not the same

Forecasting research provides the central conceptual warning. The Federal Reserve's D'Amico and Orphanides study uses probabilistic responses to compare uncertainty within individual forecasts with disagreement across forecasters. Rich and Tracy likewise analyze matched point and density forecasts and find that uncertainty and disagreement have distinct behavior. The domain is economics, not basketball, so the empirical estimates should not be transferred to NBA players. The measurement lesson does transfer: dispersion across people's point estimates is not equivalent to the uncertainty inside each person's forecast.

Apply that lesson to a draft market. If managers select a player across a wide range, the spread may reflect disagreement about his role, but it may instead reflect format heterogeneity, position runs, room-specific roster construction, news arriving between drafts, or a thin sample. If selections cluster tightly, managers may genuinely agree—or they may be following the same platform rank and suppressing visible disagreement.

The player's predictive distribution contains uncertainty that ADP can entirely miss:

- **availability:** games missed, recovery timing, rest, and late-season participation;
- **minutes:** rotation position, starting status, closing role, foul exposure, and competition;
- **responsibility:** usage, touches, playmaking, rebounding opportunities, and defensive-event role;
- **rate variation:** shooting, free throws, turnovers, steals, and blocks;
- **team-state branches:** trades, teammate availability, coaching choices, and incentive changes; and
- **fantasy transformation:** category weights, replacement level, schedule usability, caps, and position eligibility.

[[Category floors and ceilings in fantasy basketball]] shows how to represent these branches as category-specific ranges. [[Using projection disagreement in fantasy basketball]] addresses disagreement among actual projection systems. ADP belongs downstream of neither one automatically. It is a separate observation about the cost of acquiring the player in a draft.

## Four sources of ADP dispersion

Before interpreting a wide draft range, classify its likely causes.

### Information-time dispersion

Drafts completed before and after an injury report, transaction, lineup announcement, or preseason role change do not express simultaneous disagreement. They use different information sets. Pooling them produces a wide range even if each day's market was internally tight.

Track ADP by a rolling window and annotate consequential timestamps. A falling seven-day ADP after official role news is more interpretable than a season-to-date average that mixes obsolete and current states. Do not call the movement “smart money” merely because it is recent; identify the fact or inference that changed.

### Format and rule dispersion

A nine-category manager prices turnovers and both percentage categories differently from an eight-category manager. A points league converts box-score events through a platform formula. A roto league with games caps values per-game quality differently from a head-to-head league that rewards schedule volume. Two-center requirements, deep benches, and eligibility rules alter scarcity.

Cross-format ADP is therefore a mixture of different objective functions. Normalize to the target league whenever possible. If the provider does not disclose enough metadata, widen the market-timing range and reduce confidence rather than assuming a generic average applies.

### Strategic dispersion

Draft order depends on the roster path. A manager punting a category may rationally select a player earlier than a balanced manager without believing the player is universally better. Position runs can accelerate scarce eligibility. Managers near a turn may reach because they will not select again for many picks. Keeper costs and traded draft picks can distort redraft comparisons.

This is not noise to be “corrected” away. It is evidence that acquisition cost is conditional on room state. The actionable forecast is not “his ADP is 50,” but “given the players already selected and the teams drafting before my next turn, what is the chance he survives?”

### Behavioral and platform dispersion

Platform ranks and queues affect visibility. Auto-draft can select from a default ordering. Managers can anchor on a displayed ADP, creating feedback: earlier selections lower the published ADP, which makes the player more prominent, which can induce earlier selections. Several public lists may also share news and projections, so apparently independent agreement can be correlated.

These mechanisms mean a tight market can be fragile. Independence is one condition behind strong wisdom-of-crowds intuitions; a common anchor weakens it. Do not infer that a crowd statistic is accurate merely because it contains many observations.

## Build two distributions, not one rank

A useful draft sheet carries a market distribution beside a player-value distribution.

### The market distribution

Estimate the probability that the player is selected before each future pick in the target room. Let $T_i$ denote the player's selection pick. The draft-timing question is

$$
\Pr(T_i \leq k\mid \text{platform, format, date, room state}).
$$

Historical pick data supply a baseline, preferably using comparable drafts and recent observations. Then update for room-specific evidence: which managers pick before the next turn, their roster requirements, an active position run, and any new information not represented in the sample. These adjustments are inferences and should be labeled as such.

The relevant decision is often the survival probability to the manager's next selection, not the raw mean. If pick 61 is available now and the manager next picks at 76, a median ADP of 70 does not establish whether waiting is wise. The shape of the distribution near 76 and the number of plausible selectors in between matter.

### The player-value distribution

Separately model player outcomes through causal scenarios. A compact structure is:

$$
V_i = g(G_i,M_i,R_i,F),
$$

where $G$ is games played, $M$ minutes, $R$ category or event rates, and $F$ the fantasy format. Each input should have a range or scenario probability, not just a point estimate. For a rookie, the main branches might be reserve, rotation regular, and starter. For an injured veteran, they might distinguish return date and workload. For a stable star, rates and games may dominate more than role.

Translate every scenario through the exact league rules and compare it with [[Fantasy basketball replacement level|replacement level]]. A player with a high median projection can still have low surplus in a shallow league. A category specialist can have strong conditional value for one roster and negative value for another because of covariance and percentage effects.

### Keep acquisition cost separate from intrinsic value

ADP is useful as a price signal. The player distribution is useful as a value signal. A draft decision compares them without conflating them.

Define a player's latest acceptable selection as the point where expected roster utility from selecting him no longer exceeds the best available alternative, accounting for what is likely to remain at later picks. That threshold is not a universal “true ADP.” It belongs to one format and roster path.

If the manager values a player around pick 45 and expects the room to take him around 60, the gap creates an option to wait—but only if his survival probability and the value of the current alternative justify it. If the player is essential to a robust category build and the next tier collapses sharply, selecting him ahead of market can be rational. “Reach” describes distance from a reference market, not necessarily an error.

## A decision rule for waiting or selecting

Suppose a manager is considering player $i$ now or player $j$, with another pick at $k$. Waiting creates two main branches:

1. select $j$ now and $i$ survives to $k$;
2. select $j$ now and $i$ is gone, forcing alternative $a$ at $k$.

A simplified waiting value is

$$
U_{\text{wait}}=q\,U(j+i)+(1-q)\,U(j+a),
$$

where $q=\Pr(T_i>k)$ is the estimated survival probability. Selecting now instead gives

$$
U_{\text{now}}=U(i+b),
$$

where $b$ is the best expected later complement. Select now when $U_{\text{now}}>U_{\text{wait}}$ after accounting for uncertainty and robustness.

This equation is scaffolding, not fake precision. Its benefit is exposing the actual assumptions: survival probability, fallback quality, complementarity, and the player's uncertain outcome. ADP contributes to $q$. It does not supply $U$.

Stress-test the conclusion. If a modest change in $q$ reverses the pick, the decision is market-sensitive. If a role branch reverses it, the decision is player-sensitive. If only an extreme assumption changes it, the choice is robust. This separation tells the manager what to research before the clock expires.

## Reading ADP movement without telling stories

ADP movement is an observation to explain, not proof of causation. A player moving from 80 to 60 may reflect official role news, a scoring-format mix change, influential rankings, small samples, or the removal of stale drafts from the calculation window. Without the provider's methodology and timestamps, the exact mechanism may be unknowable.

Use a small audit:

1. **Confirm the population.** Platform, sport, format, league size, cohort, and mock versus paid or real drafts.
2. **Confirm the window.** Season-to-date, rolling days, or another method; record access time.
3. **Inspect sample size and shape.** Prefer median and quantiles beside the mean.
4. **Mark public information events.** Official transactions, availability reports, and team statements come before commentary.
5. **Compare matched windows.** Do not compare one source's full summer with another's last week.
6. **Look for a mechanism.** Did expected games, minutes, responsibility, or category value change?
7. **Preserve residual uncertainty.** If movement remains unexplained, do not invent a reason.

A market move can still be decision-relevant when its cause is unclear because it changes the probability of access. It should not automatically change the player's projected production. Update market timing and player value independently, then reconnect them through the decision rule.

## Common failure modes

**Treating ADP as a projection.** A selection average records market behavior, not expected box-score production.

**Treating pick range as a player confidence interval.** Earliest and latest picks have no calibrated coverage for games, minutes, or fantasy rank.

**Ignoring population mismatch.** Cross-platform or cross-format ADP can answer a different market question from the target draft.

**Using the mean without the distribution.** Bimodal and tightly clustered selections can have the same average.

**Calling every early pick bullish information.** Roster construction, turns, auto-draft, and position runs also move selections.

**Assuming a large sample is independent.** Shared rankings, queues, news, and projection inputs can create correlated behavior.

**Drafting strictly at ADP.** Following the average guarantees neither value nor access and can produce a roster with poor category coherence.

**Celebrating every discount.** A player falling below old ADP may reflect information that the player projection has not yet incorporated.

**Evaluating with hindsight.** A breakout does not prove that selecting far ahead of ADP was rational; a bust does not prove the market price was wrong given the information then available.

## Why it matters

Drafting requires solving two uncertain problems at once: what players will produce and when opponents will select them. ADP is useful because it summarizes part of the second problem. It becomes harmful when its familiar decimal is allowed to answer the first.

Separating the distributions improves both research and action. A wide pick range directs attention toward population, timing, rules, and room behavior. A wide player range directs attention toward games, minutes, role, rates, and team-state branches. Sometimes both are wide; sometimes only one is. The distinction explains why a volatile rookie can have a tight ADP, why a stable veteran can appear in a wide market, and why selecting ahead of ADP can be rational when the survival-and-fallback calculation demands it.

The durable rule is simple: use ADP to estimate acquisition timing, use a causal projection to estimate player value, and join them only at the draft decision. A market price is evidence. It is not an outcome distribution and not an instruction.

## Sources

- Yahoo Help, [“Get a personalized Draft Kit with Yahoo Fantasy Plus”](https://help.yahoo.com/kb/SLN37121.html) — official description of a platform ADP report sourced from the top five percent of successful Yahoo fantasy managers; accessed July 10, 2026.
- Yahoo Help, [“About player ranks in Yahoo Fantasy”](https://help.yahoo.com/kb/SLN6287.html) — official distinction among Yahoo rank fields, including a composite expert rank; accessed July 10, 2026.
- Stefania D'Amico and Athanasios Orphanides, Federal Reserve Board, [“Uncertainty and Disagreement in Economic Forecasting”](https://www.federalreserve.gov/econres/feds/uncertainty-and-disagreement-in-economic-forecasting.htm), 2008 — primary research distinguishing probabilistic forecast uncertainty from dispersion across forecasters.
- Robert Rich and Joseph Tracy, Federal Reserve Bank of Dallas, [“A Closer Look at the Behavior of Uncertainty and Disagreement: Micro Evidence from the Euro Area”](https://doi.org/10.24149/wp1811), 2018 — primary study using matched point and density forecasts to separate disagreement and individual uncertainty.
- Tilmann Gneiting and Adrian E. Raftery, [“Strictly Proper Scoring Rules, Prediction, and Estimation”](https://sites.stat.washington.edu/raftery/Research/PDF/Gneiting2007jasa.pdf), *Journal of the American Statistical Association* 102(477), 2007 — primary foundation for evaluating probabilistic forecasts rather than mistaking point estimates for distributions.

## Open questions

- Which fantasy-basketball ADP providers disclose enough draft-population, format, sample-size, and date-window metadata to support matched comparisons?
- How much of observed ADP dispersion remains after conditioning on platform, league size, scoring format, date, and draft slot?
- Do default platform ranks measurably compress selection dispersion or create self-reinforcing ADP movement in fantasy basketball?
- Which estimate best predicts survival to the next turn: raw ADP, recent empirical pick quantiles, or a room-specific hazard model?
- Can a historical archive separate errors in player valuation from errors in acquisition-timing forecasts without hindsight contamination?
