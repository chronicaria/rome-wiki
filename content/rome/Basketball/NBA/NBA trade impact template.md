---
title: NBA trade impact template
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, transactions, forecasting, salary-cap]
as_of: 2026-07-10
desk: NBA and Dallas Mavericks
review_after: 2027-07-01
---
An NBA trade changes a team through seven separable channels—transaction status, minutes, offensive and defensive roles, lineup fit, availability, cap-and-asset constraints, and forecast uncertainty—and a useful analysis audits each one before moving the win projection.

Up: [[NBA and Dallas Mavericks]] · Related: [[NBA apron mechanics and roster building]], [[Availability risk in NBA projections]], [[Lineup fit is not the sum of player value]]

## Why a template is necessary

Trade analysis often begins with the most visible exchange: Player A for Player B and some draft picks. That description is necessary, but it is not an impact model. Teams do not receive box-score lines in isolation. They receive contracts, health distributions, role demands, lineup interactions, roster limits, transaction restrictions, and a new allocation of 240 regulation minutes. They also surrender those things on the outgoing side.

The analytical error is usually premature compression. A commentator decides who is “better,” translates that preference directly into wins, and treats every other effect as supporting detail. A projection can make the same mistake more quietly by replacing one player row with another while leaving minutes, usage, teammates, availability, and uncertainty untouched. Both approaches confuse an estimate of player value in an old context with the causal effect of changing contexts.

This template keeps the channels separate long enough to reveal where the conclusion comes from. It is not a mechanical trade grader. Some inputs will remain uncertain, and a forecast still requires judgment or a model. The template's job is to prevent missing assumptions from masquerading as precision.

## Step zero: establish what has actually happened

Every analysis begins with a timestamp and a status label.

- **Reported** means credible reporting says teams or players have agreed, but the transaction is not yet recorded as completed by the league or team.
- **Official** means the league transaction record or participating teams announce completion.
- **Inference** identifies a basketball, medical, cap, or forecasting conclusion drawn from evidence rather than established by the transaction notice.
- **Unknown** marks a material input that the available record does not settle.

This distinction is not pedantry. Multi-team trades can change before completion; physicals, consent requirements, trade bonuses, roster limits, or the need to aggregate related moves can affect the final structure. A reported framework should generate conditional analysis: *if completed on the reported terms*. A canonical roster ledger should not silently convert agreement into execution.

Record the event date, source publication date, and research as-of time separately. List every player, draft right, pick, swap, cash component, trade exception, and protection exactly enough to identify the obligation. Do not write “a future first” when the year, protection, conveyance sequence, or swap hierarchy is known. Do not claim a cap effect from an incomplete salary list.

## Channel one: rebuild the minutes ledger

The first basketball question is not “who starts?” It is “which minutes disappear, which remain, and who now fills them?” A regulation team season contains 19,680 player-minutes before overtime. A trade changes their allocation, not their total.

Start with the outgoing players' realistic pre-trade minutes rather than their headline season averages. Separate minutes lost because a player leaves from minutes that were already unavailable through injury or role reduction. Trading a 30-minute starter who had been out for two months does not remove 30 current rotation minutes; it removes the possibility of those minutes returning. Conversely, acquiring an injured starter does not immediately add his normal workload.

Build at least three post-trade states:

1. **Immediate state:** active players and plausible workload in the next games.
2. **Expected state:** median healthy rotation after installation and normal ramp-up.
3. **Stress state:** one high-leverage absence or a failed role transition.

For each state, allocate all 240 minutes by position or functional role. Flag any player receiving a workload outside his demonstrated range. Check roster minimums, two-way eligibility, assignments, and whether the transaction creates another necessary move. A trade that looks balanced in the starting five may expose ten replacement-level bench minutes every night; another may appear modest but eliminate a damaging rotation slot.

The counterfactual matters. Compare the new allocation not only with the previous depth chart but with the best realistic no-trade path. If a young player was already about to claim a veteran's minutes, crediting the trade with the entire difference double-counts an internal change. If an outgoing free agent was unlikely to return, the long-run cost differs from the current-season cost.

## Channel two: redistribute offensive jobs

Minutes are containers; roles are what players must do inside them. Offense requires a portfolio of jobs: initiate sets, create an advantage, sustain it with a second action, punish help, space away from the ball, screen, roll, cut, post, rebound, and generate an acceptable late-clock attempt.

List the outgoing and incoming shares of those jobs. Usage rate alone is inadequate. Two players with similar usage may differ radically if one creates at the rim against a set defense while the other finishes advantages created by teammates. Assist rate can likewise hide whether passes bend a defense or merely complete a possession.

A useful role audit asks:

- Who brings the ball up against pressure?
- Who forces the first rotation in the half court?
- Who makes the next read after the defense rotates?
- Who supplies rim pressure, pull-up shooting, movement shooting, screening, and offensive rebounding?
- Who takes late-clock possessions when the first action fails?
- Which player becomes overtasked when the primary creator sits?

Estimate role elasticity, not just role quality. A player may be excellent as a low-usage connector but lose efficiency when asked to initiate. Another may retain much of his value off the ball and therefore fit beside a star more easily than his old on-ball profile suggests. The forecast should distinguish a talent change from a task change. If an incoming player is asked to perform a job his prior data barely sampled, widen uncertainty rather than importing his old efficiency unchanged.

## Channel three: redistribute defensive jobs

Defense has jobs too: contain the point of attack, navigate screens, protect the rim, defend the post, rebound, switch, execute coverages, rotate from the weak side, and survive when targeted. A single all-in-one metric cannot show whether the new rotation still covers every essential task.

Map likely matchups and coverage responsibilities. A trade can add a strong defender yet weaken the unit if it removes the only credible screen navigator or forces a forward to defend quicker guards. Adding a rim protector may permit more aggressive point-of-attack pressure; losing one may require conservative coverages that reduce turnovers. The interaction changes teammates' tasks.

Separate demonstrated skill from schematic inference. Film and tracking can show how a player executed drop, switch, zone, or help assignments in a prior environment. They cannot guarantee the same result with different communication, spacing behind the play, or foul tolerance. State the proposed mechanism and the evidence that could falsify it: opponent rim frequency, corner-three concessions, defensive rebounding, screen-navigation results, foul rate, or lineup-specific shot quality.

## Channel four: test lineup fit rather than adding player values

[[Lineup fit is not the sum of player value]] supplies the core rule: five-player performance depends on complementary capabilities and opponent responses. The trade template therefore needs a lineup matrix.

Test the likely starters, the main bench unit, the primary star's rest group, closing options, and at least one injury contingency. For each group, check creation, shooting gravity, rim pressure, ball security, size, point-of-attack defense, rim protection, and defensive rebounding. Mark the weakest capability because opponents can repeatedly attack it.

Then examine substitution topology. Two stars may fit well together but leave no competent creator for the bench if their minutes are always paired. A versatile acquisition may solve more problems through staggered minutes than through the nominal starting lineup. Conversely, a specialist can be valuable in one combination and unplayable in another. The forecast should weight realistic lineup minutes, not an imagined “best five” that cannot cover a season.

Use prior lineup data cautiously. The incoming player's old combinations answer questions about what happened with old teammates and opponents. They are evidence about skills, not direct samples of the new lineup. Small units are especially noisy and selected by coaching decisions. Treat observed fit as a prior, then update with a mechanism-based prediction.

## Channel five: model availability and transition cost

A trade transfers an availability distribution, not a fixed games-played number. Record current official status, injury type only to the level publicly established, recurrence evidence, rehabilitation stage, age, workload history, and schedule density. Never diagnose from video or imply a guaranteed medical timetable.

Build availability scenarios and connect each to minutes and roles. If the incoming creator misses 20 games, who absorbs initiation? If a returning player begins at 22 minutes, which teammate remains in the rotation? If back-to-backs are limited, does the roster have a viable alternate structure? [[Availability risk in NBA projections]] explains why the mean and the downside tail both matter.

Transition cost is distinct from health. Players must learn terminology, timing, coverages, and teammates' preferences. Some roles transfer quickly—spot-up shooting or simple rim running—while complex initiation and defensive communication may take longer. Coaching evidence can narrow this question, but “veteran” is not proof of instant integration. For an in-season deal, include a short installation penalty or wider early distribution where justified.

## Channel six: audit contracts, aprons, and assets

Basketball impact cannot be separated from the mechanism that made the trade legal and the options it consumes. First verify salaries, guarantees, options, bonuses, trade kickers, and years. Then identify the exact CBA route: standard traded-player exception, aggregation, pre-existing exception, sign-and-trade, cap room, or another mechanism.

Test the post-transaction **Apron Team Salary**, not merely a public payroll subtotal. [[2026-27 NBA cap and apron thresholds]] records the current league-year lines; [[NBA apron mechanics and roster building]] explains why using a transaction tool can impose a ceiling. Above the first apron, matching slack changes. Second-apron restrictions can remove aggregation, cash, or other routes. Order of operations can therefore determine whether a sequence is possible.

Value draft assets as contingent claims, not generic tokens. Record the selection year, protection, rollover, swap terms, existing obligations, and the likely distribution of the conveying team. A distant unprotected first has different upside and liquidity from a heavily protected pick that can become seconds. Stepien-rule availability, second-apron freezes, and prior commitments can make the opportunity cost larger than the nominal count suggests.

Also record option value. Did the trade create or consume a useful salary slot? Did it shorten or extend commitments? Does it preserve a deadline move, access to an exception, or room below an apron? A positive current-season fit can still be expensive if it closes several future paths. That does not make the trade wrong; it makes the wager explicit.

## Channel seven: translate evidence into a forecast

Only after the first six channels should the analysis move wins. Begin from the current baseline and state whether it already includes the transaction. Duplicate inclusion is a common hidden error when a roster file updates before the written forecast.

Decompose the adjustment:

| Component | Central change | Uncertainty question |
| --- | ---: | --- |
| Minutes quality | replacement minutes gained or lost | Is the rotation allocation realistic? |
| Offensive role | creation, spacing, finishing, turnover effects | Does old efficiency survive the new task? |
| Defensive role | matchup and coverage effects | Which capability becomes targetable? |
| Fit | complementarities and lineup constraints | How often will useful groups actually play? |
| Availability | games and workload distribution | Is downside correlated across key players? |
| Transition | installation and coaching adaptation | How quickly does the role stabilize? |
| Future option value | cap, apron, contract, and assets | What later moves or draft outcomes were surrendered? |

Avoid false additivity. If two changes affect the same minutes, do not count both fully. If an incoming lead guard raises teammates' shot quality, that interaction belongs in fit or role redistribution, not again as independent player value. If injuries are correlated because the roster lacks replacements for the same job, a simulation should preserve that structure.

Report a central estimate and a range. Explain which assumptions produce the high and low states. A small central move can coexist with a much wider distribution—for example, when a trade exchanges depth for a healthier top-end lineup but increases injury exposure. Separate regular-season wins, playoff matchup value, and long-term franchise value; they are different objectives and time horizons.

## A compact publication card

Every trade article can end with the same auditable card:

1. **Status and timestamp:** reported or official; terms and sources.
2. **Immediate minutes:** complete 240-minute state and missing players.
3. **Expected rotation:** healthy median and stress scenario.
4. **Offensive jobs:** creation, spacing, finishing, and late-clock ownership.
5. **Defensive jobs:** matchups, coverage, rim protection, and rebounding.
6. **Lineup tests:** starters, star-off, closing, and injury contingency.
7. **Availability:** official health facts, workload assumptions, and uncertainty.
8. **CBA and contracts:** mechanism, apron consequence, years, guarantees, and options.
9. **Assets:** exact protections, swaps, conveyance, and liquidity.
10. **Forecast:** baseline, central delta, range, and what would change the estimate.

This structure makes disagreement productive. A reader can accept the minutes reconstruction while rejecting the fit inference, or agree on basketball value while judging the draft cost differently. The analysis becomes a set of inspectable claims instead of one opaque grade.

## Why it matters

Trades are among the strongest tests of a basketball knowledge system because they force current facts, causal reasoning, rules, and uncertainty into one object. A good analysis can update team and player notes without duplicating them: the transaction page owns the decision and full impact; roster, health, player, and season pages receive short dated backlinks to the changed assumption.

For [[Dallas Mavericks 2026-27 season|Dallas]], the framework prevents a new name from being treated as a simple talent addition. The committee must ask whose minutes and jobs changed, whether the frontcourt and guard groups still cover essential capabilities, how health affects the actual rotation, and what the transaction did to future options. The same method scales leaguewide and gives the [[NBA multi-agent forecasting company]] a consistent bridge from verified transaction evidence to model pressure points.

## Sources

- [NBA and NBPA, 2023 Collective Bargaining Agreement](https://nbpa.com/cba) — governing agreement for trades, salary matching, exceptions, apron restrictions, contracts, and draft-related transaction rules; accessed July 10, 2026.
- [NBA, CBA 101: Highlights of the Collective Bargaining Agreement](https://cms.nba.com/wp-content/uploads/sites/4/2024/11/2024-25-CBA-101.pdf) — official explanatory guide to trade exceptions, apron team salary, hard-cap triggers, and roster rules; accessed July 10, 2026.
- [NBA transactions](https://www.nba.com/players/transactions) — official transaction chronology used to distinguish completed moves from reports; accessed July 10, 2026.
- [NBA, 2026 transaction tracker](https://www.nba.com/freeagents/2026/transactions) — official league-year transaction tracker; accessed July 10, 2026.
- [NBA, 2026-27 salary-cap announcement](https://www.nba.com/news/nba-salary-cap-2026-27-season) — official current cap, tax, apron, and mid-level figures; accessed July 10, 2026.

## Open questions

- Which public data source best reconstructs role shares such as first-side initiation and advantage creation without relying on proprietary labels?
- How should a forecast estimate installation cost for midseason trades without confusing schedule strength and injury recovery with learning effects?
- What common asset-valuation scale can preserve pick protections and tail outcomes instead of collapsing every first-round pick to one mean value?
- Which historical trades provide clean out-of-sample tests of the seven-channel decomposition?
