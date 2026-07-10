---
title: Schedule value under availability uncertainty
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, projections]
as_of: 2026-07-10
desk: Fantasy basketball
---

Schedule value under uncertainty is the distribution of marginal, legal fantasy production that remains after each scheduled game passes through correlated participation, workload, role, and lineup-fit risks.

Up: [[Fantasy Basketball]]

Related: [[Fantasy basketball playoff schedule value]] · [[Games played versus per-game value in fantasy basketball]] · [[Weekly lineup locks and injury risk]] · [[How NBA injury reports should change fantasy decisions]]

## Why a schedule count is not a forecast

An NBA schedule is a set of dated opportunities. It establishes that a team is supposed to play, but not that a player will be active, retain his projected workload, fit a fantasy lineup, or deliver the same per-minute role. Calling four games “better” than three silently assigns probability one to several uncertain conversions. That shortcut is sometimes harmless for a healthy star in a spacious daily lineup. It becomes dangerous near injuries, back-to-backs, weekly locks, late-season rotation changes, or crowded roster dates.

The useful object is a path of countable appearances. For player $p$ on date $d$, define $S_{pd}$ as the scheduled-game indicator, $A_{pd}$ as participation, $W_{pd}$ as workload and role, $L_{pd}$ as legal lineup use, and $M_{pd}$ as marginal value relative to the best alternative. Then

$$V_p=\sum_d S_{pd}A_{pd}L_{pd}M_{pd}(W_{pd})-C_p.$$

Only $S$ is known from the calendar. The other terms are distributions or decisions. $C_p$ includes the dropped player, transaction resource, waiver delay, and flexibility lost by occupying the slot. The formula is scaffolding, not a promise of precise probabilities. Its discipline is to prevent scheduled games, active games, and playable games from being treated as synonyms.

[[Fantasy basketball playoff schedule value]] explains how round survival weights the calendar. This note isolates a different center: how uncertain availability changes the distribution before round weights are applied. The same method works in regular-season weekly planning, roto games-cap management, and draft comparisons.

## Separate four gates

The first gate is whether the game occurs. Postponements and schedule amendments are uncommon but real; use the current official schedule and record the retrieval time. A third-party grid is convenient discovery, not canonical truth.

The second gate is whether the player participates. Official injury reports are timestamped status disclosures. “Questionable” is not a universal probability, “available” is not a guarantee of normal minutes, and absence from an early report may not settle a later update. A forecast should state which report it uses and when the next report can overturn it.

The third gate is workload and role. A player can dress and still have reduced minutes, fewer possessions, no closing role, or a changed statistical mix. Returning from injury, joining a new rotation, or playing through a restriction can make the active-game count look right while the production forecast remains wrong. Model workload states rather than multiplying full-strength per-game value by an active probability.

The fourth gate is fantasy usability. A real appearance is worthless to the matchup if it is benched because eligible slots are full, arrives after a weekly lock, exceeds a games cap, or displaces a superior start. Lineup fit is roster-specific. Leaguewide schedule rankings cannot observe it.

These gates are conditional. If a player is ruled out, role and lineup assignment vanish. If he is limited, the manager may deliberately bench him, making $L$ depend on $W$. Multiplying four unconditional averages can therefore create a false sense of rigor.

## Joint states are safer than independent games

Suppose a player has four scheduled games. Assigning each an independent 80 percent participation probability yields 3.2 expected active games, but it understates tail risk when the same injury drives all four outcomes. A setback can erase the week; successful return can preserve most of it. The mean may remain 3.2 while the chance of zero or one game is much larger than the binomial model says.

Use a small state tree instead:

| State | Week path | Probability | Workload | Playable implication |
|---|---|---:|---|---|
| Full return | active all four | range | normal or rising | evaluate congestion |
| Managed return | active two or three | range | limited | lower per-game value |
| Delayed return | active late only | range | uncertain | weekly lock may erase value |
| Setback | zero or one | range | low | replacement path dominates |

The probabilities must come from current evidence and should be broad. The table's value is structural: it preserves correlation and forces the downside branch into view. It also identifies which update matters. An official clearance may move probability from delayed return toward managed return without supporting full workload.

Back-to-backs deserve similar treatment. Do not label the second game an automatic rest. Build branches such as both games, first only, second only, and neither, then ask whether team and player evidence supports unequal probabilities. The pair is correlated through fatigue, medical management, and the result of the first game.

Shared team risks create portfolio correlation. Two players from the same club share postponement, travel, blowout, and some rotation conditions. Two players whose roles depend on the same injured teammate can move in opposite directions when that teammate returns. Adding their independent expected games misses the concentration. A roster with equal mean schedule value but less shared downside may have the better survival profile.

## Expected games are not enough

Expected active games compress a distribution into one number. That number is useful for additive season-long planning, but head-to-head decisions often care about thresholds and tails. A player with outcomes of zero or four games can have the same mean as a player nearly certain to play two. If the matchup needs a minimum floor, the second is safer; if only a high-output branch can overturn a large deficit, the first may preserve more upside.

Report at least three features:

1. expected playable games;
2. probability of falling below the minimum useful number; and
3. plausible production range conditional on playing.

For category leagues, convert states into category-margin effects. More uncertain games do not affect all categories proportionally. A blocks specialist may have a high chance of zero blocks even when active, and percentage impact depends on makes and attempts. For points leagues, use the exact scoring formula and workload state. For roto, compare the distribution with remaining games caps and standings thresholds.

A simple expected value remains helpful:

$$E[V_p]=\sum_s P(s)V_p(s)-C_p,$$

but the decision may also use a downside constraint such as $P(V_p<T)<\alpha$, where $T$ is the minimum acceptable contribution. This makes the manager's risk requirement explicit rather than disguising it in a conservative projection.

## Information timing changes schedule value

The same player can have different value in daily and weekly-lock leagues because information arrives at different times. If the lineup locks Monday and the decisive injury update comes Tuesday, the update cannot rescue the assignment. The relevant forecast is the distribution at Monday's information set, not the distribution after the news.

Daily moves preserve conditional actions. A manager may hold through an afternoon report, place an eligible player in IL, or choose a replacement before tip. That flexibility has value only if platform processing and candidate availability allow the pivot. Yahoo's official help distinguishes same-day, next-day, and weekly transaction timing; a nominal replacement is not feasible if it activates after the useful game.

Define an information checkpoint for every uncertain game: next official injury report, shootaround reporting, lineup confirmation, waiver processing, and lineup lock. Then ask whether a decision can change at that checkpoint. Information arriving after irreversibility may improve understanding but not the current choice.

Waiting also has a cost. A replacement may be claimed, an early game may pass, or the uncertain player may become ineligible for an IL move. Compare act now, wait, and contingent-action paths. [[Multi-move streaming paths]] supplies the sequential framework: the best plan is a policy that says what to do after each update, not a fixed string of assumed transactions.

## Replacement paths absorb uncertainty

Availability risk is less damaging when the roster can replace lost games cheaply. An IL slot, liquid bench position, multi-position eligibility, and abundant waiver pool can turn an uncertain player into a call option: keep the upside while retaining a practical fallback. A weekly-locked injured player with no late swap has far less recoverability.

For each state, specify the replacement path rather than inserting generic replacement level. The candidate must be available, clear waivers in time, fit a legal slot, and justify the move cost. Let $R_s$ be replacement value in state $s$ and $K_s$ the cost of reaching it. Then the uncertain player's state value becomes

$$V(s)=\max\{V_{hold}(s),R_s-K_s\}.$$

The maximum represents a real choice only when the state is observed before the deadline. Otherwise it overstates optionality. A weekly lock may force the manager to choose before learning $s$.

This is why two leagues can value the same injury differently. One has IL+, immediate free agents, daily locks, and open guard slots. Another has no IL, two-day waivers, weekly locks, and a full bench. Public player news is identical; the decision technology is not.

## A reproducible workflow

1. Freeze scoring periods, lineup locks, caps, eligibility, waiver timing, acquisition limits, and IL rules from the live league.
2. Load the current official NBA schedule and injury report; record timestamps.
3. Build a day-by-day lineup grid and identify which games would actually improve the legal lineup.
4. Create three to five joint availability/workload states from mechanisms, not labels alone.
5. Assign broad probability ranges and name the evidence that could move them.
6. Translate every state through the exact points formula or category-margin objective.
7. Add feasible replacement paths and transaction costs state by state.
8. Compare expected value, downside threshold, and upside branch rather than one schedule count.
9. Test correlated absences, one missed back-to-back game, a minutes limit, and crowded-night displacement.
10. Set the expiry at the next report, lock, transaction, or game.

A forecast table should preserve the distinction:

| Alternative | Scheduled | Expected active | Expected playable | Downside branch | Recovery path | Main reversal |
|---|---:|---:|---:|---|---|---|
| Hold | known | range | range | correlated absence | league-specific | official clearance |
| Add A | known | range | range | role/workload | drop plus fallback | lineup news |
| Add B | known | range | range | congestion | later stream | waiver timing |

Never fill this table with invented precision. If the required live league context is absent, it remains a public method example, not personalized advice.

## Failure modes

**Multiplying games by a single active probability.** This ignores workload states, game dependence, and lineup fit.

**Treating official status as prognosis.** The injury report establishes a disclosure, not a universal numeric probability or minutes forecast.

**Assuming independence.** One injury, teammate return, or team decision can affect several games and players together.

**Counting recoverability that does not exist.** A fallback after lock is not an option.

**Using expected value alone.** Equal means can conceal very different elimination risk.

**Double-discounting.** If a projection already embeds expected games or limited minutes, do not apply the same reduction again.

**Ignoring the alternative.** Four uncertain games are not compared with zero; they are compared with the best feasible roster path.

**Converting incentives into claims.** Late-season standings or a back-to-back can justify wider uncertainty, not an unsupported assertion that a player will rest.

## Why it matters

Availability uncertainty does not merely subtract a fraction from the schedule. It changes the shape, correlation, timing, and recoverability of fantasy output. A defensible model begins with official calendar facts, builds joint participation and workload states, passes them through legal lineup capacity, and compares complete replacement paths.

The practical result is often simpler than the model: prefer the player whose relevant games are likely to be active, playable, and recoverable under the league's rules. But reaching that sentence honestly requires separating what the NBA has scheduled, what evidence suggests may happen, and what the fantasy roster can still do when reality changes.

That separation also makes later forecast review possible without rewriting the original information set.

## Sources

- [NBA, “2025–26 NBA injury report”](https://official.nba.com/nba-injury-report-2025-26-season/) — official report cadence and status disclosures; accessed July 10, 2026.
- [NBA, “NBA schedule”](https://www.nba.com/schedule) — official game calendar; accessed July 10, 2026.
- [Yahoo Help, “Transaction and lineup deadlines in Yahoo Fantasy”](https://help.yahoo.com/kb/fantasy-basketball/sln6775.html) — official daily and weekly timing mechanics; accessed July 10, 2026.
- [ESPN Fan Support, “Games Played Limit”](https://support.espn.com/hc/en-us/articles/360056369011-Games-Played-Limit) — official cap behavior; accessed July 10, 2026.
- [NIST/SEMATECH, “Uncertainty analysis”](https://www.itl.nist.gov/div898/handbook/mpc/section5/mpc5.htm) — authoritative framing for propagating input uncertainty.
- [MIT OpenCourseWare, “Dynamic Programming and Stochastic Control”](https://ocw.mit.edu/courses/6-231-dynamic-programming-and-stochastic-control-fall-2015/) — state-contingent sequential decisions under uncertainty.

## Open questions

- Which publicly observable injury and workload signals best calibrate joint weekly availability without importing medical speculation?
- How much portfolio value comes from diversifying team-level availability risk?
- When do simple scenario trees outperform simulation because the available probabilities are too weak for finer modeling?
