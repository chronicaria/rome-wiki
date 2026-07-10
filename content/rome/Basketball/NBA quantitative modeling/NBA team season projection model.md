---
title: NBA team season projection model
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, projection, monte-carlo]
---

The team projection turns per-100 player forecasts into season distributions by combining rosters, expected availability, allocated minutes, a margin model, schedule randomness, and playoff simulation.

## Player ratings are only one input

[[NBA player forward projection model]] supplies each player's projected net rating and uncertainty for the target season. The team layer must still answer who is on the roster, who will play, and how often.

The July 9 public artifact uses a curated 2026-27 depth chart. Its rating lookup follows an explicit fallback order:

1. projected NBA player rating;
2. resolved draft-board rating;
3. backtested rookie projection from NCAA or G League evidence;
4. replacement-level cold start for a player without usable data.

Unknown names are preserved as stable cold-start entries rather than dropped. The public metadata identifies four such players in the inspected build, making the missingness visible.

## Minutes and availability

Each roster entry receives an allocated minutes-per-game estimate and an expected games-played fraction. Define

$$
w_i=m_i a_i,
$$

where $m_i$ is allocated minutes and $a_i=E[GP_i]/82$ is expected availability. Team strength is approximately

$$
S_T=5\frac{\sum_{i\in T}w_i r_i}{\sum_{i\in T}w_i},
$$

where $r_i$ is projected player net. The factor of five converts the weighted average player-on-court effect to a five-player team effect. Uniform availability would cancel; relative durability changes which ratings receive the team's possession weight.

This design keeps volume separate from rate. Playing more minutes can increase a player's contribution to team strength, but it does not make his per-100 rating larger.

The public point-mode build uses deterministic expected GP and the current minutes allocation. The pipeline also supports distributions over games played and rotation minutes. Those modes should be labeled separately because a point allocation understates one source of roster uncertainty.

## Team rating uncertainty

The current rollup treats player rating errors as independent when forming the team standard error:

$$
se(S_T)\approx 5\sqrt{\sum_i\left(\frac{w_i}{\sum_j w_j}\right)^2se_i^2}.
$$

That is transparent and computationally convenient, but it ignores covariance between teammates and between the six factor forecasts. A team built around cold starts or thin-history players receives a wider band, which is directionally correct; the exact width still depends on the approximations discussed in [[RAPM regularization and identification]].

## Game model

For a game with home team $h$ and away team $a$, the expected margin begins with a strength difference plus home-court advantage:

$$
E[M_{h,a}]=S_h-S_a+HCA.
$$

The inspected production artifact reports $HCA\approx1.80$ points and total game-margin noise of about $14.17$ points. The production game model uses Student-$t$ noise with roughly 18 degrees of freedom, giving heavier tails than a Gaussian. A variance-preserving split avoids counting team-rating uncertainty twice when a simulation already draws uncertain strengths.

[[RAPM evaluation and uncertainty]] records that historical margin scoring is not yet a strict pregame test because the evaluation rollup uses realized minutes. That limitation must remain distinct from the forward season simulation, which uses projected minutes and availability.

## Season Monte Carlo

The forward model simulates all 1,230 regular-season games. In each of 10,000 simulations it:

1. draws uncertain team strengths;
2. constructs a fresh legal synthetic 82-game schedule, including randomized same-conference frequency and home/away orientation;
3. samples game margins from the production noise model;
4. records standings wins;
5. runs the 7–10 play-in to determine the final eight seeds in each conference;
6. simulates best-of-seven playoff series through a champion.

Redrawing the synthetic schedule prevents one arbitrary synthetic slate from dominating the published means and intervals. Until the real 2026-27 schedule is ingested, however, the product does not capture the exact travel, rest, back-to-back, and opponent-order structure each franchise will face.

The output includes mean and percentile wins, a full 0–82 win histogram, play-in and playoff probabilities, championship probability, team strength, strength uncertainty, and cold-start count. Those are distributions conditional on the roster, minutes, availability, game model, and schedule assumptions—not objective frequencies independent of the model.

## Main uncertainty channels

The season result combines several different kinds of uncertainty:

- **Rating:** where each player will be on a per-100 basis.
- **Availability:** how many games a player is expected to be usable.
- **Minutes and role:** how a team's 240-minute demand is allocated.
- **Roster identity:** unresolved players, transactions, two-way movement, and rookie cold starts.
- **Schedule:** opponent mix and home/away realization before the real schedule is used.
- **Game noise:** the large irreducible variance of individual NBA results.

The current system models some channels directly and others through proxies. Recent attendance is not the same as an injury-status feed; a role model can miss coaching changes; player errors are not independent. The best use is scenario-aware forecasting with visible bands, not false precision around a single win total.

## Open questions

- How much do exact schedule, travel, and rest covariates move the distribution once the real slate exists?
- Can a causal injury-hazard model replace attendance-based availability without depending on inaccessible data?
- What covariance structure should connect player forecast errors within the same team?
- Should roster uncertainty be represented as explicit transaction and depth-chart scenarios rather than a single curated input?
