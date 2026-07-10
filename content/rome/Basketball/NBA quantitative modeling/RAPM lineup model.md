---
title: RAPM lineup model
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, rapm, ridge-regression]
---

RAPM turns possession-level lineup data into player effects by solving a recency-weighted ridge regression rather than crediting the five players on a team equally for a raw plus-minus.

## The adjustment problem

Ordinary plus-minus cannot distinguish a player's contribution from the company he keeps. If two starters share almost every minute, their raw on-court margins largely describe the pair. A useful model must compare thousands of overlapping lineup combinations: minutes with and without each teammate, against different opponents, across different game states.

For one possession-value target, construct a row vector $x_i$ whose player columns identify the offensive and defensive players on possession $i$. Separate nuisance columns absorb the project's garbage-time or “rubber-band” context. Let $y_i$ be the possession's value for the component being modeled. The pure estimator has the schematic form

$$
\hat\beta
=
\arg\min_\beta
\sum_i w_i\left(y_i-\bar y_w-x_i^\top\beta\right)^2
+\lambda_o\lVert\beta_o\rVert_2^2
+\lambda_d\lVert\beta_d\rVert_2^2
+\lambda_{rb}\lVert\beta_{rb}\rVert_2^2.
$$

The coefficient vector contains offensive player effects, defensive player effects, and low-penalty nuisance effects. The project solves the regression separately for eight underlying possession-value components, which [[Six-factor RAPM decomposition]] rolls into six human-readable factors.

## Time enters as evidence weight

The production NBA build uses a trailing five-year window and a 550-day half-life. For an as-of date $D$, a possession from date $d_i$ receives weight

$$
w_i = 2^{-(D-d_i)/550}, \qquad D-1825 < d_i \le D.
$$

Recent possessions therefore count more, but the curve changes gradually because several seasons of evidence remain in the design. Each game day is solved using only rows dated on or before that day. A future-game injection test verifies that adding an extreme future possession cannot move an earlier estimate. “Daily” means a new causal snapshot, not an interpolation between season endpoints.

The daily curve is still a low-pass view of ability. A sudden real improvement does not instantly replace years of weighted evidence. That stability is valuable for measurement, but it also explains why [[NBA player forward projection model]] needs age, trajectory, and role features rather than treating today's coefficient as a complete forecast.

## Ridge is the model, not a cosmetic patch

NBA lineup columns are strongly correlated. Some players share most of their minutes; low-minute players may appear in only a few combinations; offense and defense can trade common shifts without a stabilizing convention. Unregularized least squares would respond with enormous, unstable coefficients.

Ridge adds the penalty terms above. In a Bayesian reading, pure RAPM is a maximum-a-posteriori estimate under a zero-centered Gaussian prior. A larger penalty says that the possession sample needs more evidence to move a coefficient far from its prior mean. The current system tunes different penalties for different underlying components and for offense versus defense; [[RAPM regularization and identification]] explains why this improves stability without making every player independently identified.

The prior-informed version changes the center, not the basic likelihood. If $\mu$ is a player-specific box/EPM-feature prior, the player penalties become $\lVert\beta-\mu\rVert^2$ for enabled components. Algebraically, the implementation solves for $\delta=\beta-\mu$ and adds $\mu$ back afterward. A thin sample stays nearer the prior; accumulating weighted possessions lets the lineup evidence dominate.

## What one solve produces

For every player observed by an as-of date, the engine can emit:

- component coefficients in points per 100 possessions;
- effective, decay-weighted possession exposure, `weff`;
- a standard-error estimate for each component;
- the six rolled-up factors and exact net closure described in [[Six-factor RAPM decomposition]];
- pure and prior-informed variants where available.

The estimate is conditional on the model's data and design. “Player X is +3” is shorthand for “the regularized coefficient associated with Player X in this possession design, on this scale and as of this date, is +3 points per 100.” It is not a claim that inserting the player into any roster mechanically adds three points.

## What adjustment does not solve

RAPM controls for observed co-participants, but it does not randomize lineups. Coaching choices, roles, injuries, scheme, opponent targeting, and who is allowed to initiate offense all shape the data. Two players who almost never separate remain difficult to distinguish; ridge shares credit according to the penalty and surrounding evidence. A player can also enable teammates in a way an additive design assigns imperfectly.

The result is best read as adjusted, regularized association within an additive possession model. It is more informative than raw plus-minus, but “adjusted” is not synonymous with “causal.” The strongest uses are comparative measurement, decomposition, longitudinal tracking, and disciplined forecasting—not counterfactual certainty.

## Open questions

- How much do coefficient ranks move when teammate-collinearity uncertainty is computed from the full ridge covariance rather than exposure alone?
- Which lineup interactions are large and stable enough to justify departing from the additive model?
- Would a shorter window improve responsiveness enough to compensate for the extra variance?
- How should garbage-time context be represented when “rubber-band” nuisance columns are insufficient?
