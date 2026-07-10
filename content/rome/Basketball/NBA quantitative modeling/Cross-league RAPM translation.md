---
title: Cross-league RAPM translation
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, ncaa, g-league, rapm, translation]
---

Cross-league translation maps NCAA and G League RAPM factors onto an NBA-equivalent scale using players observed in both leagues, while carrying a variance floor that prevents false precision about the jump.

## Why translation is necessary

A +4 coefficient in college is not a +4 NBA skill estimate. Opponent quality, spacing, roles, rules, teammate distributions, and play-by-play coverage differ. Simply putting raw league coefficients on the same chart would imply an equality the data do not support.

The project instead estimates the relationship empirically for each factor. It builds career-level anchors, joins “movers” who appear in both a source and target league, and fits a target-exposure-weighted affine regression

$$
z_{NBA,f}=a_f+b_f z_{source,f}+\varepsilon_f.
$$

For the canonical NCAA→NBA and G League→NBA mappings, both sides require at least 400 effective possessions, and the regression weights each mover by NBA effective exposure. NCAA identities pass through an ESPN-to-NBA crosswalk; G League and NBA share player identifiers more directly.

## Production slopes

The July 9 production artifact contains 1,258 NCAA→NBA movers and 795 G League→NBA movers. Its factor slopes are:

| Factor | NCAA → NBA | G League → NBA |
|---|---:|---:|
| $oTS$ | 0.159 | 0.114 |
| $oTOV$ | 0.087 | 0.407 |
| $oSC$ | 0.143 | 0.358 |
| $dTS$ | 0.237 | 0.396 |
| $dTOV$ | 0.109 | 0.710 |
| $dSC$ | 0.140 | 0.244 |

Every slope is below one. Lower-league dominance is compressed sharply when placed on the NBA axis. G League turnover creation transfers most strongly in this fit; shooting transfers weakly. NCAA slopes are low across the board, reflecting both the competition jump and the difficulty of predicting NBA effects from a selected mover sample.

The intercept matters too. Translation is not merely “multiply by the slope.” Each target factor is mapped by its fitted offset and slope before being merged into the unified daily series.

## Irreducible translation uncertainty

For each factor, the fit stores residual variance

$$
Var_{translate,f}=Var\!\left(z_{NBA,f}-a_f-b_fz_{source,f}\right).
$$

When a lower-league estimate with variance $s_f^2$ is translated, the uncertainty should include both its attenuated measurement error and the league-jump floor:

$$
Var(z_{NBA,f}\mid z_{source,f})
\approx b_f^2s_f^2+Var_{translate,f}.
$$

The second term does not vanish when a prospect accumulates more college possessions. More NCAA data can clarify what the player was in college; it cannot make the NCAA-to-NBA relationship deterministic. This is why [[RAPM evaluation and uncertainty]] treats wide draft and cross-league intervals as a feature rather than a display defect.

## What the mapping can and cannot say

The translation supports comparisons and cold-start information:

- place college, G League, and NBA curves on one visual axis;
- supply cautious inputs for rookie and two-way-player modeling;
- compare which skills appear to carry across environments;
- prevent raw lower-league tails from masquerading as NBA star estimates.

It is not a complete prospect model. The canonical fit is conditioned on players who reached the target league and accumulated the minimum exposure. That produces survivorship selection. The source coefficient is also measured with error, so ordinary weighted regression attenuates its slope. Low slopes can reflect a genuinely weak relationship, noisy source estimates, selected movers, or all three.

The production mapping is factor-wise and affine. Age, draft position, size, and role are absent from the default v5 spine even though age is especially important for projection. An opt-in covariate path exists in the research code, but its artifact is explicitly not the production default. Until a temporal mover backtest promotes it, a 19-year-old and a 23-year-old with identical source coefficients receive the same affine point mapping.

## Relationship to the decomposition

Translation is applied after each league has been solved on its native scale. That separation means the expensive possession solves need not be rerun merely because a mover fit changes. The canonical `aggregate` stage maps each of the six factors from [[Six-factor RAPM decomposition]] and then preserves exact net addition on the NBA-equivalent scale.

The reverse and feeder-to-feeder directions in the network—NCAA→G League and NBA→G League—serve cross-validation and future research. They are not silently substituted for the canonical paths used by the public unified board.

## Open questions

- How much of the small NCAA slope is true non-transfer versus errors-in-variables attenuation?
- Can inverse-probability or selection modeling reduce survivor bias without creating a fragile prospect model?
- Does adding age improve strictly out-of-time NBA outcomes for movers, not just in-sample fit?
- Should public mixed-league leaderboards be separated when translation reliability falls below a declared threshold?
