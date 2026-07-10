---
title: Percentage categories and volume
created: 2026-07-10
source: llm
status: seed
tags: [basketball, fantasy-basketball, categories, percentages, strategy]
as_of: 2026-07-10
desk: Fantasy basketball
review_after: 2026-08-10
---
Field-goal and free-throw percentage are portfolio ratios: a player's effect depends on makes, attempts, the roster's existing denominator, the decision horizon, and uncertainty—not on his displayed percentage alone.

Up: [[Fantasy Basketball]] · Related: [[Fantasy basketball category scarcity]], [[Category covariance in fantasy basketball roster construction]], [[Games played versus per-game value in fantasy basketball]]

## Scope and format boundary

This is a public method note for season-long fantasy basketball category leagues. It does not recommend any add, drop, trade, punt, lineup change, or wager. The league's actual scoring settings control. Yahoo's official help defines its fantasy-basketball composite field-goal percentage as field goals made divided by field goals attempted and free-throw percentage as free throws made divided by free throws attempted. The NBA Stats glossary gives the same formulas for the underlying box-score statistics. Some leagues use different ratios, minimum-attempt rules, or no percentage categories at all; a head-to-head points league cannot import this method without translating its own scoring formula.

The central distinction is between a **rate** and its **weight**. A player listed at 55% from the field has a rate. His attempts determine how strongly that rate pulls a roster's combined percentage. The rate is not an additive contribution like rebounds. Treating it as one creates predictable valuation errors.

## The accounting identity

Suppose a roster has made $M$ field goals on $A$ attempts. Its field-goal percentage is

$$
p=\frac{M}{A}.
$$

A candidate is projected for $m$ makes on $a$ attempts. After adding those events, the roster becomes

$$
p'=\frac{M+m}{A+a}.
$$

The change can be rewritten as

$$
\Delta p=p'-p
=\frac{a}{A+a}\left(\frac{m}{a}-p\right).
$$

This identity contains the whole first-order strategy. The player's shooting rate $m/a$ matters only relative to the roster baseline $p$, and the size of the pull is governed by the player's share of the new denominator, $a/(A+a)$. Free-throw percentage follows exactly the same algebra with free throws made and attempted.

Consider a roster at 480 makes on 1,000 field-goal attempts, or 48.0%. Candidate L shoots 55% on 40 attempts: 22 makes. The new result is $502/1{,}040=48.27\%$. Candidate H shoots 50% on 200 attempts: 100 makes. The new result is $580/1{,}200=48.33\%$. The lower-rate player produces the larger expected improvement because his positive gap from the baseline is applied to five times the volume. Neither player's displayed percentage alone identifies the better portfolio impact.

The same logic exposes harm. A 44% shooter on 200 attempts takes the example roster to $568/1{,}200=47.33\%$. A 30% shooter on ten attempts takes it to $483/1{,}010=47.82\%$. The terrible-looking low-volume rate hurts less in expectation. “Good shooter” and “good field-goal-percentage contributor” are related but not identical claims.

## Percentage impact is surplus makes

A useful equivalent representation is **surplus makes above a benchmark**. For player $i$ with projected rate $p_i$ and attempts $a_i$, define

$$
S_i=a_i(p_i-b),
$$

where $b$ is a declared benchmark. If $b$ is the roster baseline, $S_i$ approximates how many makes the player supplies above or below what the same attempts would have produced at the roster rate. Candidate L above supplies $40(0.55-0.48)=2.8$ surplus makes; candidate H supplies $200(0.50-0.48)=4.0$.

This is a bookkeeping device, not a universal player value. The answer changes with the benchmark. Using the league mean may describe cross-sectional value; using the roster's projected rate estimates local impact; using an opponent or roto threshold estimates competitive relevance. A fixed public “percentage z-score” can therefore be directionally useful while still being wrong for a particular roster and horizon.

Surplus makes also should not be summed across field goals and free throws. They are separate categories with separate denominators and competitive thresholds. Nor should they be added directly to points, assists, or blocks without translating every category into a common outcome measure such as standings-point change or matchup win probability.

## Why averaging player percentages fails

The arithmetic mean of player percentages gives each player equal weight. Fantasy scoring based on aggregate makes and attempts gives each attempt equal weight. Those are different estimands.

If one player goes 9-for-10 and another goes 1-for-10, the team shoots $10/20=50\%$, while the unweighted average of 90% and 10% also happens to be 50%. That coincidence disappears when denominators differ. A 9-for-10 player and a 10-for-20 player combine for $19/30=63.3\%$; averaging 90% and 50% gives 70%. The correct operation is to sum numerators and denominators first.

This rule applies across players, games, weeks, and split lines. Never average monthly percentages to obtain a season percentage unless every month has the same attempt count. Never average projected player rates to obtain a roster projection. Preserve FGM, FGA, FTM, and FTA, then derive the ratios at the final aggregation level.

## Volume creates leverage and variance

Attempts create **leverage**: high-volume shooting can move the portfolio more. They also create uncertainty. Under a simple binomial model with $a$ independent attempts and constant make probability $p_i$, makes have variance $a p_i(1-p_i)$, and the observed proportion has variance $p_i(1-p_i)/a$. NIST's statistical handbook treats sample proportions through the binomial framework and warns, through its confidence-interval treatment, that uncertainty depends strongly on sample size.

Basketball shots are not literally identical independent trials. Shot location, defender, creator, fatigue, game state, injury, and role change the probability. Attempts within a player-week can be dependent, and a player's expected rate is itself uncertain. The binomial is therefore a baseline, not a complete forecast. A better simulation conditions attempts and efficiency on minutes, role, shot mix, and availability, while allowing persistent hot-or-cold states where evidence supports them.

The strategic implication survives the modeling refinement: a ten-attempt week is noisy, and a 100-attempt week has more power to move a team ratio. More attempts do not guarantee convergence to a preseason projection if the role or shot diet has changed. They merely make sampling variation smaller relative to the assumed state.

Short head-to-head periods magnify this distinction. One 2-for-12 game can swing a close category because the roster denominator is still small. Over a full rotisserie season, the same game is diluted by thousands of attempts. “Percentage risk” must therefore state the horizon and the existing attempt base.

## Head-to-head: optimize the category margin

In a head-to-head categories league, the objective is not the prettiest expected percentage. It is the change in the probability of winning enough categories. A percentage move has little marginal value when the category is virtually secured or lost, and high value near the live matchup margin.

A practical weekly model should start with each side's current makes and attempts, then simulate the remaining active games. For every player-game, draw availability and minutes, generate attempts conditional on role, generate makes conditional on shot profile and efficiency state, and aggregate. Derive FG% and FT% only after all simulated makes and attempts are summed. The output is a distribution of final ratios and an estimated category-win probability.

That model prevents three common mistakes. First, it recognizes that an efficient low-volume player may not move the margin. Second, it recognizes that a high-volume shooter can provide points and threes while increasing percentage downside. Third, it preserves the mechanical covariance described in [[Category covariance in fantasy basketball roster construction]]: a made three changes field-goal makes, attempts, points, and threes in the same event.

Decision direction also matters. When protecting a lead, reducing harmful attempt exposure can be rational if league lineup rules permit benching and the foregone counting production is not needed. When chasing a percentage deficit, merely adding an above-average shooter may be insufficient: the required number of surplus makes can be calculated.

If a team has $M$ makes on $A$ attempts and wants to reach target $t$ after a candidate's $a$ attempts, the required candidate makes are

$$
m \ge t(A+a)-M.
$$

Because $m$ is an integer, round the right side up. This identifies feasibility, not certainty. If the required rate $m/a$ is implausible, the category is not a sensible target without a much larger denominator change. If it is plausible, simulation should still price variance and the counting categories sacrificed or gained.

## Rotisserie: optimize standings thresholds

In rotisserie, season totals make percentage categories less volatile late in the year, but the objective remains standings points rather than the ratio in isolation. The relevant thresholds are the distributions of teams immediately above and below. Improving from 47.80% to 47.95% has high value if it is likely to pass two teams and low value if the next team projects to finish at 48.50%.

For each candidate, project the team's final FGM/FGA and FTM/FTA under role and games-played scenarios. Project competitors rather than freezing today's standings. Then estimate the probability of each final rank. The value of the move is the expected standings-point change across both percentage categories plus its effects elsewhere.

The existing denominator creates path dependence. Early in a season, new attempts receive more weight and projections remain uncertain. Late in a season, a large accumulated denominator makes the ratio resistant to change. A late acquisition cannot “repair” a major deficit with a beautiful rate on negligible attempts. Conversely, a high-volume poor shooter can still cause damage when the gap between teams is narrow. Any games cap adds another opportunity cost: attempts used now may displace better later attempts.

## Draft and roster construction

Percentage strategy begins with paired projections: rate **and** attempts. Draft boards should retain at least FGM, FGA, FTM, and FTA for every player. A single FG% or FT% column is inadequate, and a single summed rank can conceal which ratio is driving the result.

Volume changes throughout a draft. Adding a high-attempt anchor can make subsequent modestly inefficient players tolerable because the anchor supplies surplus makes, but that is not “immunity.” Recalculate the portfolio after each selection. A low-volume specialist cannot neutralize a high-volume drag merely because his displayed percentage is higher. The required counterweight follows from surplus makes.

For example, offsetting 100 projected attempts at 40% against a 48% benchmark creates an eight-make deficit. A 90% field-goal shooter would need about nineteen attempts to supply 7.98 surplus makes; a 55% shooter would need roughly 114 attempts. Rate extremes without volume can be optically powerful and competitively weak.

Free throws often reverse familiar field-goal profiles because denominators differ. A player may be a meaningful FG% anchor and an FT% liability, or vice versa. Model each category independently before considering their covariance with points, threes, rebounds, assists, turnovers, and role. Position-based stereotypes are shortcuts, not evidence.

Punting one percentage category does not make its arithmetic disappear; it changes its marginal utility in the league objective. A hard FT% punt may legitimately assign near-zero value to FT% improvement, but the same players' free-throw volume can still reveal role and scoring pathways. A soft punt should retain the possibility that an extreme rate-volume combination reopens the category. See [[Fantasy basketball category scarcity]] for why punt-aware value must be recalculated against the actual player pool.

## Waivers, streaming, and lineup choices

Streaming adds a statistical bundle, not only desired counting categories. An extra game adds attempts that can help or hurt ratios. Compare the streamer's projected makes and attempts with the outgoing player's usable games, not with zero. [[Fantasy basketball streaming on low-volume days]] adds the schedule constraint: only playable games count.

A compact decision table should include:

| Input | Why it matters |
|---|---|
| Current or projected roster FGM/FGA and FTM/FTA | establishes the portfolio baseline and denominator |
| Candidate FGM/FGA and FTM/FTA by usable game | estimates rate-volume pull |
| Outgoing player's same totals | produces the replacement-adjusted change |
| Remaining games and lineup fit | converts per-game volume into counted volume |
| Role and availability scenarios | prevents false precision |
| Opponent totals or roto thresholds | translates ratio movement into payoff |
| Other categories and transaction cost | prices the full bundle |

Benching is the limiting case in which the candidate contributes zero makes and zero attempts. Zero attempts preserve the current ratio but also surrender every counting statistic and any chance of helpful shooting. The rational choice depends on category margins, not a general preference for “safety.” Confirm the platform's lock and minimum-activity rules before using a preserve strategy.

## A defensible modeling workflow

1. **Freeze the rules.** Record the exact ratio definitions, horizon, lineup lock, active slots, caps, minimums, and payoff format.
2. **Preserve event totals.** Store makes and attempts; never reconstruct a portfolio from averaged percentages.
3. **Define the comparison.** Candidate versus incumbent, realistic replacement, or no action over usable games.
4. **Model opportunity first.** Project availability, minutes, shot volume, free-throw-drawing volume, and shot mix before conversion.
5. **Use shrinkage.** Blend recent shooting with a longer baseline unless evidence supports a changed mechanism; do not treat a short hot streak as a new true rate.
6. **Aggregate, then divide.** Derive team FG% and FT% after summing all simulated events.
7. **Translate to outcomes.** Estimate matchup win probability or roto standings points, including the other categories.
8. **State reversal conditions.** Identify the attempt, efficiency, role, or threshold changes that would reverse the conclusion.

Fact and inference must remain separate. It is a fact that official FG% equals FGM/FGA and that Yahoo describes its composite fantasy categories with the same ratios. It is mathematical consequence that attempts weight combined percentage. It is a modeling assumption that a projected role, rate, or covariance will persist. It is a strategic inference that one portfolio has greater expected value under a specified league payoff.

## Common failure modes

**Ranking rates without attempts.** This confuses shooting quality with fantasy impact.

**Averaging percentages.** Sum makes and attempts before dividing.

**Using season-long volume for a weekly decision.** Project only usable games in the relevant period.

**Treating attempts as pure upside.** Volume magnifies both positive and negative rate gaps and brings counting-category interactions.

**Assuming independent categories.** Makes, attempts, points, and threes share events; role also links free throws and turnovers.

**Overreacting to a small sample.** An observed percentage can move sharply on few attempts. Separate sampling noise from evidence of a changed role or shot mix.

**Ignoring the accumulated denominator.** The same player moves an early-season ratio more than a late-season ratio with thousands of prior attempts.

**Optimizing percentage points instead of league points.** A ratio improvement that cannot change a weekly win or roto rank may have little marginal value.

## Sources

- [Yahoo, “Composite Stats in Fantasy Basketball”](https://help.yahoo.com/kb/SLN6920.html) — official definitions of fantasy FG% and FT% as aggregate makes divided by attempts, and format limitations; accessed July 10, 2026.
- [NBA Stats glossary](https://www.nba.com/stats/help/glossary) — official definitions and formulas for FG%, FGM, FGA, FT%, FTM, and FTA; accessed July 10, 2026.
- NIST/SEMATECH, [“Does the proportion of defectives meet requirements?”](https://itl.nist.gov/div898/handbook/prc/section2/prc24.htm) — statistical reference for the binomial model of a sample proportion; accessed July 10, 2026.
- NIST/SEMATECH, [“Confidence intervals”](https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm) — statistical reference on proportion uncertainty and Wilson intervals; accessed July 10, 2026.
- Zach Rosenof, [“Improving Algorithms for Fantasy Basketball”](https://arxiv.org/abs/2307.02188) (2023) — formal fantasy-basketball treatment of category valuation and uncertainty; used as a research model, not as platform policy.
- Zach Rosenof, [“Optimizing for Rotisserie Fantasy Basketball”](https://arxiv.org/abs/2501.00933) (2025) — optimization treatment of roto roster construction and category outcomes; used as a model, not as official rules.

## Open questions

- Which shot-level model best captures changing shot mix and within-week dependence without false precision?
- How much do shrinkage choices alter percentage-category valuations for rookies and recent role changes?
- When do exact simulations materially outperform surplus-make approximations in practical head-to-head decisions?
- How should a model jointly price ratio protection, counting-stat sacrifice, and the option value of preserving a transaction?
