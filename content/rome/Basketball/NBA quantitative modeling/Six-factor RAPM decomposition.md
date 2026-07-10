---
title: Six-factor RAPM decomposition
created: 2026-07-09
source: llm
status: seed
tags: [basketball, nba, analytics, rapm, decomposition]
---

The Daily RAPM model decomposes adjusted possession value into three offensive and three defensive factors whose sum is the player's headline net rating.

## The six factors

All factors are expressed in NBA-equivalent points per 100 possessions, and the defensive signs are aligned so that positive is good.

| Factor | Interpretation | A positive value suggests |
|---|---|---|
| $oTS$ | Offensive true-shooting value: rim, midrange, three-point, shot-frequency, and free-throw components | efficient scoring and shot creation |
| $oTOV$ | Offensive turnover value | ball security and fewer damaging lost possessions |
| $oSC$ | Offensive second-chance value | value created after the offense's own miss |
| $dTS$ | Defensive true-shooting value | suppressing opponent scoring efficiency |
| $dTOV$ | Defensive turnover value | forcing turnovers and disrupting possession flow |
| $dSC$ | Defensive second-chance value | preventing opponents from extending possessions |

The key naming caution is that $oSC$ and $dSC$ are **second-chance value**, not raw offensive- and defensive-rebound rates. A player can affect the value of the entire sequence after a miss: securing the rebound, denying it, generating a putback, forcing a kickout, or changing the quality of the next shot.

## From eight solve targets to six factors

The current engine solves eight underlying possession-value components separately on offense and defense:

- rim finishing value;
- midrange finishing value;
- three-point finishing value;
- rim-attempt frequency value;
- three-point-attempt frequency value;
- free-throw value;
- turnover value;
- clean second-chance value.

The first six scoring components sum into $TS$, turnover value becomes $TOV$, and the final component becomes $SC$. This preserves a fine-grained research substrate while keeping the public explanation readable.

For player $p$,

$$
ORAPM_p=oTS_p+oTOV_p+oSC_p,
$$

$$
DRAPM_p=dTS_p+dTOV_p+dSC_p,
$$

and the production invariant is

$$
net_p=ORAPM_p+DRAPM_p=\sum_{f\in\mathcal F_6} f_p.
$$

This is the `net := sum6` contract. The current measurement engine no longer needs a separate net solve, and the closure residual is zero by construction. That makes the explanation, tables, exports, and downstream forecasts reconcile exactly.

## Why decomposition is useful

A single net number hides very different player profiles. Two +3 players may reach that total through unrelated mechanisms: one through shooting, another through possession creation and defense. The factors make the model useful for:

- explaining why a player ranks highly;
- testing which skills persist from season to season;
- diagnosing which components box scores can and cannot predict;
- translating lower-league performance factor by factor in [[Cross-league RAPM translation]];
- projecting different aging paths in [[NBA player forward projection model]];
- attributing team strengths and weaknesses rather than producing an opaque win total.

The decomposition also exposes weak spots. Traditional box features carry much less information about $dTS$ and $dSC$ than about offense or forced turnovers because they cannot observe contest quality, rim deterrence, rotations, deflections, or box-outs. A detailed factor is not automatically a well-identified factor.

## Pure, prior-informed, and box views

Each factor can be considered through three measured views:

- The **pure** coefficient comes only from the regularized lineup design and shrinks toward zero.
- The **prior-informed** coefficient is still estimated from possession lineups but can shrink toward a causal box/EPM-feature prior on enabled components.
- The **box prior** is the prior's standalone estimate, useful as a second opinion and diagnostic.

The prior is most influential at low effective exposure. It should not be described as extra possessions or as a second independent observation. It is a structured shrinkage target whose predictive value must be established separately. [[RAPM evaluation and uncertainty]] records that its net improvement has been small and regime-dependent even when individual factors improve.

## Exact closure does not imply exact attribution

`net = sum6` guarantees arithmetic coherence, not causal completeness. The six targets partition the model's observed possession value under a chosen taxonomy. Interactions, scheme, screen setting, communication, off-ball gravity, and role effects can enter indirectly or be distributed among correlated player columns. Exact addition tells us the ledger balances; it does not prove that every basketball mechanism received its philosophically perfect label.

## Open questions

- Are the six public factors the right level of detail, or should some of the eight underlying scoring components be exposed?
- How stable are factor interpretations across eras with different play-by-play coverage?
- Which tracking-derived variables would most improve $dTS$ and $dSC$ without turning the model into a black box?
- How much of factor covariance comes from real bundled skills versus shared estimation error?
