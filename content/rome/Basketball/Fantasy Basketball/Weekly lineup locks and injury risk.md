---
title: Weekly lineup locks and injury risk
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, injuries, strategy]
as_of: 2026-07-10
desk: Fantasy basketball
review_after: 2026-08-10
---

A weekly lineup lock turns injury uncertainty into an irreversible portfolio choice: compare each player's probability-weighted playable production with the alternatives before the lock, rather than treating an injury label or scheduled-game count as the decision.

Up: [[Fantasy Basketball]] · Related: [[How NBA injury reports should change fantasy decisions]], [[Games played versus per-game value in fantasy basketball]], [[Fantasy basketball decision calibration]], [[Fantasy basketball replacement level]]

## Why weekly locks are a distinct problem

In a daily-lineup league, a manager can often respond to new information one player or one day at a time. A questionable player can remain benched until a later update; an early-game substitute can be used before that player's individual tip; and an injured player may be replaced on a later date if the league permits it. A true weekly lock removes much of that recourse. Once the scoring period begins—or once the league's designated weekly deadline passes—the active and bench assignments may be fixed even though the NBA's most useful injury information will arrive days later.

That mismatch is structural. NBA teams generally report an affected player's initial status by 5 p.m. local time on the day before a game, with a 1 p.m. game-day deadline for the second game of a back-to-back. They also submit a game-day report between 11 a.m. and 1 p.m. local time, earlier for games tipping by 5 p.m., and the league updates its public reports continually. A fantasy roster that locks on Monday can therefore become irreversible before the required report for a Thursday, Friday, or weekend game even exists.

The result is not merely a harder start/sit question. It is a choice among week-long distributions. Starting an uncertain player accepts several possible paths: the player may appear in every scheduled game at a normal workload, miss one game, return with a restriction, suffer a late downgrade, or miss the entire period. Benching that player exchanges those paths for the substitute's distribution. The substitute might have lower per-game quality but more reliable availability, or might introduce different category and efficiency risks.

No universal answer follows from “questionable,” “four games,” or a public player rank. The correct method depends on the exact league lock, scoring system, lineup slots, eligibility, games caps, injured-reserve rules, transaction timing, and the feasible alternatives. This article supplies an abstract framework, not personalized lineup advice and not authorization to make a roster move.

## Define the lock before valuing anyone

“Weekly league” is not a sufficiently precise rule description. Platforms and league configurations use materially different mechanisms.

Yahoo's official help says a private league using weekly roster settings locks lineup changes at the start of the first game on its designated day; if there is no game, the stated fallback is 11:59 p.m. Pacific. Its page separately describes weekly roster transactions as due by 11:59 p.m. Pacific the night before the selected weekly roster day. ESPN distinguishes roster composition from active-lineup movement. Its official support page describes both an individual scheduled-game-time lineup lock and a first-game-of-day/week lock for League Manager leagues, while add/drops can have an earlier roster lock. Sleeper's “Lock-In” mode is a different object again: one completed game per player counts, a manager may accept that result before the player's next game begins, and an accepted result cannot be undone.

These are not cosmetic differences. Before analysis, write down:

- the scoring period's start and end in the league timezone;
- whether the whole lineup locks at once, each player locks individually, or a completed performance is selected later;
- whether active/bench movement, adds and drops, waivers, and injured-slot moves have the same deadline;
- whether a late-added player can enter the current scoring period;
- whether a player placed in an active slot can be replaced after an official out designation;
- the eligible positions and number of active slots;
- any team, position, or matchup games-played limit;
- how postponed or rescheduled games are treated; and
- whether a commissioner has customized any default.

If a material rule is unknown, mark the analysis **INSUFFICIENT LEAGUE CONTEXT**. Do not assume an ESPN or Yahoo default from the platform name alone. A rule page documents possible behavior; the actual league settings determine the action set.

It is also useful to distinguish three deadlines. The **information deadline** is the latest evidence available when forecasting. The **lineup deadline** is when active assignments become irreversible. The **transaction deadline** is when roster membership becomes fixed for the period. Conflating them creates false alternatives—for example, proposing a waiver replacement whose transaction would take effect only after the weekly lineup has locked.

## Convert schedules into probability-weighted playable games

Raw scheduled games are only the top of the funnel. Let player $i$ have games $g=1,\ldots,S_i$ during the period. For each game, estimate three separate probabilities from information available at lock:

- $p_{ig}$: probability the player appears;
- $q_{ig}$: probability of a normal workload conditional on appearing; and
- $r_{ig}$: probability the appearance can count in the locked lineup, given position, caps, and league rules.

A simple expected playable-game count is

$$
E[G_i]=\sum_{g=1}^{S_i}p_{ig}r_{ig}.
$$

But playable games alone still collapse workload. If $V_{ig}^{N}$ is the contribution under a normal workload and $V_{ig}^{L}$ the contribution under a limited workload, a more useful expression is

$$
E[V_i]=\sum_{g=1}^{S_i}p_{ig}r_{ig}\left[q_{ig}V_{ig}^{N}+(1-q_{ig})V_{ig}^{L}\right].
$$

The quantities should be ranges or scenario estimates, not decorative precision. Availability, workload, and production are different forecasts. “Available” does not promise normal minutes, and an official injury status does not specify conditional fantasy output.

For a weekly lock, the correlations among games matter. Treating every game as an independent coin flip can badly understate risk. A continuing condition can cause several absences, a minutes limit can persist throughout the week, and a back-to-back plan can link two games. One transparent alternative is to model week-level states:

| State at lock | Meaning | Weekly consequence |
| --- | --- | --- |
| normal | active at expected workload | most scheduled games retain ordinary value |
| managed | active with restriction or planned rest | lower minutes or one linked absence |
| delayed return | unavailable early, possible later return | value concentrated in later games |
| out for period | no usable appearances | active slot yields no production |
| setback | initial availability followed by absence | left-tail outcome and possible partial production |

Assign probabilities $P(s\mid I_t)$ using the frozen information set $I_t$, then calculate each action's value within every state. This preserves the difference between a player with four independent small risks and one with a single injury path that could erase all four games.

Historical frequencies may inform probabilities, but an NBA status label has no official universal percentage mapping on the league injury-report page. A defensible empirical model should condition on status, time to game, prior status path, team, reason class, back-to-back context, and season where samples permit. Sparse estimates should shrink toward broader base rates. If no validated model exists, use wide qualitative scenarios rather than inventing a percentage.

## Injury-report timing determines what can be known

At the weekly lock, create a calendar of future information arrivals. For every relevant NBA game, record the official day-before reporting window, game-day window, tip time, back-to-back status, and the fantasy deadline. This exposes which uncertainties are resolvable and which must be carried through the entire decision.

For a Monday lock and a Saturday game, no required Saturday-specific report may yet exist. “Not listed” at Monday lock is not positive availability evidence for that game; the reporting obligation has not matured. Conversely, a player already listed out for an early-week game supplies concrete evidence, but it does not automatically resolve the weekend. The analysis should preserve the status path and avoid turning a multi-day absence into either certain return or certain week-long absence.

The report's stated reason can help group historical cases, but it is not permission to diagnose duration. Official team statements, direct coach or player comments, confirmed practice participation, and established reporting can update the workload branches. Aggregators are discovery tools, not substitutes for the current official report or attributable team evidence.

Back-to-backs deserve explicit treatment because the initial reporting deadline for the second game is later and because availability decisions may be correlated across the pair. If the weekly lock precedes both games, model branches such as plays both, plays only the first, plays only the second, or plays neither. Do not merely multiply one generic play probability twice.

The NBA's continual updates also mean every captured report needs a publication time and observation time. A Monday forecast cannot be silently overwritten by Friday's final designation. Save a new state, preserve the old forecast, and later score the decision against what was knowable at lock. That is the connection to [[Fantasy basketball decision calibration]].

## Compare alternatives at the lineup level

A weekly decision should evaluate a feasible lineup, not rank two isolated names. Position eligibility can cause one assignment to displace another. Starting an uncertain center may push a reliable center into a utility slot, which in turn benches a guard. The relevant alternative is the entire changed configuration.

For action $a$—a complete legal locked lineup—use

$$
EU(a)=\sum_s P(s\mid I_t)U(a,s)-C(a),
$$

where $U(a,s)$ is the scoring-format value of the lineup in state $s$, and $C(a)$ includes any acquisition, waiver, drop, and lost-flexibility costs required to produce it. Compare at least the uncertain-player lineup, the safest legal substitute lineup, an upside alternative if distinct, and no transaction.

In a points league, $U$ may be expected weekly points, but mean points alone can conceal a critical zero-game tail. Report an interval, downside percentile, or probability of falling below the substitute. In head-to-head categories, $U$ should reflect marginal category win probabilities. Extra games can help points, rebounds, assists, steals, blocks, and threes while hurting turnovers or shooting ratios. A stable low-usage player may be preferable when preserving percentages; a volatile high-minute replacement may be rational when chasing counting categories. These are league-objective assumptions, not universal player truths.

Rotisserie evaluation differs again. The horizon is the season, category standings and games caps matter, and one low-output week may be less important than preserving superior per-game value. Keeper and dynasty formats add future roster value and drop cost. A temporary injury should not erase a player's long-horizon value merely because the current weekly lock is inconvenient.

Reliability is not inherently conservative. The safest substitute can have a narrow but low distribution that loses in most relevant states. Conversely, choosing the injured star is not inherently aggressive if even two expected games dominate the alternative. Risk preference matters only after the payoff distributions and league objective are stated.

## Use thresholds instead of slogans

A threshold makes the tradeoff inspectable. Suppose an uncertain player has expected weekly value $V_P$ if fully available, a limited-state value $V_L$, and zero if out, while the substitute supplies $V_R$. With probabilities $p_N$, $p_L$, and $p_O$ summing to one, starting the uncertain player is favored on expected value when

$$
p_NV_P+p_LV_L>V_R,
$$

after accounting for lineup interactions and costs. Solving for a break-even availability probability is more useful than saying “start your studs.” It tells the analyst which estimate controls the decision and how much the conclusion changes if that estimate moves.

The same logic can be extended to downside constraints. A manager might maximize expected value subject to no more than a chosen probability of receiving zero active games, or compare the probability of winning the matchup under each lineup. Such constraints must come from the league objective and the manager's declared risk tolerance; they cannot be assumed privately by an automated desk.

Sensitivity analysis is essential. Recalculate under optimistic, central, and pessimistic availability/workload branches. If the same lineup wins across all plausible inputs, the decision is robust. If a small probability change reverses the choice, confidence should be low and the note should identify the unresolved input. False precision is especially dangerous when the weekly deadline predates required injury reports.

## Alternatives to accepting the weekly-lock risk

The action set is wider than “start or bench,” although every option must exist under the actual settings.

**Use a healthy rostered alternative.** This avoids transaction cost and may reduce the chance of a zero, but sacrifices the uncertain player's upside. Compare full-week contribution and category effect, not public rank.

**Reconfigure positions.** Multi-position eligibility may keep both a reliable player and higher-upside option active. Check who is displaced from utility and scarce positions; eligibility does not create an extra lineup slot.

**Use an injured slot before the transaction deadline.** This can open a temporary roster spot only if the platform designation and league rule permit it. The later return may create a roster squeeze, so the added player's value is not free.

**Acquire a replacement.** Confirm availability, effective date, waiver processing, acquisition cap, required drop, and whether the addition can enter the locked period. Price the claim resource and the dropped player's future value through [[Fantasy basketball replacement level]].

**Hold and accept uncertainty.** No action is legitimate when available substitutes are weak, a transaction would not affect the current week, or the long-term cost exceeds the probability-weighted weekly gain.

**Choose a format-specific contingency.** Individual game-time locks, late swap, commissioner-approved replacements, or Sleeper-style postgame lock-in mechanisms may preserve optionality. Never assume these exist because another league on the same platform has them.

Commissioner intervention is not a forecasting strategy unless the written league rules authorize it consistently. Ad hoc relief after outcomes are partly known creates fairness and governance problems. The correct time to adopt injury substitutions or later locks is through prospective league rules, not a retroactive exception for one lineup.

## A reproducible weekly-lock worksheet

1. **Freeze league rules.** Save the scoring period, timezone, lineup and transaction locks, scoring format, slots, caps, injured-reserve behavior, and customization.
2. **Freeze the information set.** Record the latest official report version and time, team evidence, schedule, and source hierarchy at the decision cutoff.
3. **List legal lineups.** Include no transaction and every realistic rostered substitute; exclude moves that would take effect too late.
4. **Build week-level states.** Separate normal, limited, partial-week, and out branches; model correlated games and back-to-backs.
5. **Estimate contributions.** Translate each state into points or category-relevant production, including ratio volume, turnovers, lineup congestion, and caps.
6. **Price costs.** Include the drop, claim or acquisition, lost future flexibility, and any later roster squeeze.
7. **Run sensitivity tests.** Identify the availability or workload threshold at which the preferred lineup changes.
8. **State assumptions and confidence.** Distinguish official facts, reporter information, model outputs, and desk inference.
9. **Name the expiry.** For a locked lineup, the recommendation expires at the lineup deadline even though later information continues to arrive.
10. **Review without hindsight.** Preserve the forecast, resolve outcomes from authoritative sources, and grade probability quality separately from the realized result.

## Common failure modes

**Assuming the platform determines the rule.** Commissioners can customize locks and transaction timing. Inspect the league itself.

**Counting four games as four opportunities.** Injury, workload restrictions, lineup slots, and caps turn schedules into probability-weighted playable games.

**Assigning one probability to the entire problem.** Probability of appearing, probability of normal workload, and conditional production are separate.

**Treating games as independent.** A single injury trajectory or rest plan can correlate several outcomes.

**Using news that did not exist at lock.** Later reports resolve uncertainty but cannot justify the earlier decision retroactively.

**Ignoring the transaction effective date.** A good free agent is irrelevant to the current lineup if the add processes after lock.

**Optimizing an isolated player.** Position and utility-slot displacement make this a lineup portfolio problem.

**Calling the safer choice automatically correct.** Risk must be evaluated against expected advantage, downside, matchup or standings objective, and declared tolerance.

**Publishing personal league state.** A public method can describe abstract assumptions; actual rosters, opponents, identifiers, standings, and player pools belong only in an authorized private layer.

## Why this matters

Weekly locks move the decision farther from resolution. That increases the value of explicit rules, scenario ranges, correlated-risk modeling, and honest uncertainty. It also exposes why generic start/sit lists are fragile: they cannot know the league's lock mechanics, feasible substitutes, category objective, transaction cost, or information cutoff.

The durable principle is to value the whole locked lineup across possible week states. Injury labels inform those states; they do not choose the lineup. Scheduled games create opportunities; they do not guarantee usable production. A disciplined manager states what was known, what could still change, which alternatives were legally available, and what probability threshold separated the choices.

## Sources

- [NBA Injury Report: 2025–26 Season](https://official.nba.com/nba-injury-report-2025-26-season/) — official day-before, game-day, and back-to-back reporting deadlines and continual update process; accessed July 10, 2026.
- [ESPN Fan Support, “Lineup and Roster Lock Times”](https://support.espn.com/hc/en-us/articles/4669673089940-Lineup-and-Roster-Lock-Times) — official distinction between lineup and roster locks and available League Manager lock configurations; accessed July 10, 2026.
- [ESPN Fan Support, “Setting Your Lineup”](https://support.espn.com/hc/en-us/articles/360000093672-Setting-Your-Lineup) — official description of individual scheduled-game-time lineup movement; accessed July 10, 2026.
- [Yahoo Help, “Transaction and lineup deadlines in Yahoo Fantasy”](https://help.yahoo.com/kb/fantasy-basketball/sln6775.html) — official weekly lineup and roster-transaction deadline descriptions and commissioner customization; accessed July 10, 2026.
- [Sleeper Support Center, “Lock-In Mode Details”](https://support.sleeper.com/en/articles/6522833-lock-in-mode-details) — official rules for choosing one completed player-game, the next-game deadline, and irreversibility; accessed July 10, 2026.

The platform mechanics and NBA reporting windows above come from official documentation. The probability model, threshold framework, state table, and worksheet are analytical inferences, not platform policy, medical advice, or personalized fantasy advice.

## Open questions

- How much better do week-level correlated availability models predict active games than independent player-game probabilities?
- Which injury-status paths are sufficiently frequent to estimate partial-week return probabilities without unstable subgroup claims?
- How should category-win utility incorporate correlation among teammates, pace, and percentage volume in a locked lineup?
- What prospective injury-substitution rules best balance engagement, skill, and fairness in commissioner leagues?
- How often do nominal weekly leagues preserve hidden optionality through individual locks, injured-slot moves, or transaction effective dates?
