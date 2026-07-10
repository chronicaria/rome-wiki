---
title: Multi-move streaming paths
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, streaming, waivers, decision-analysis]
as_of: 2026-07-10
desk: Fantasy basketball
review_after: 2026-08-10
---

A multi-move stream is a contingent roster policy, not a list of players: the first add should be judged partly by the legal, affordable, and still-available choices it leaves for every later decision.

Up: [[Fantasy Basketball]]

Related: [[Fantasy basketball streaming break-even thresholds]] · [[Fantasy basketball streaming on low-volume days]] · [[Lineup congestion and playable games]] · [[FAAB and waiver priority as option value]] · [[Roster-slot liquidity in fantasy basketball]]

## Scope, assumptions, and privacy boundary

This is a public method for season-long fantasy basketball. It assumes a manager may change one roster spot more than once during a scoring period, subject to the league's actual acquisition, waiver, lineup-lock, eligibility, and games-cap rules. “Streaming path” means the complete sequence of holds, adds, starts, benches, and drops considered over a stated horizon. It can include a free-agent add now, a planned replacement later, or waiting until new information arrives.

It is not a personalized add/drop recommendation. The public vault does not contain a live league's scoring settings, roster, matchup, player pool, acquisition count, waiver claims, FAAB balances, priorities, deadlines, or competitors' incentives. No transaction is authorized or executed here. Applying the method requires those current inputs, and private league information should remain private unless Andrew explicitly chooses to supply it for analysis.

The examples use abstract players and illustrative values. Their numbers show how the mechanism behaves; they are not estimates for real players. Platform documentation establishes possible mechanics, not the settings of any particular league. Confirm the live rules before acting.

## Why a chain of individually good moves can be a bad path

Single-move analysis asks whether one add beats holding after costs. [[Fantasy basketball streaming break-even thresholds]] supplies that acceptance test. Multi-move streaming adds a second question: what state will the first move create for the next decision?

Suppose an open streaming slot can take Player A on Monday and Tuesday, then Player B on Thursday and Saturday. Looking only at scheduled games suggests four appearances. But that headline can fail in several ways:

- adding A may use the week's third of four acquisitions, while dropping A for B uses the last one and removes the ability to react to a Sunday absence;
- B may be on waivers until Friday, so his Thursday game was never reachable;
- A's Tuesday game may occur on a full roster date and add no playable appearance;
- a claim for B may fail because another manager wins him;
- dropping A may place him on waivers, preventing a later reacquisition;
- B may require a center slot already occupied on Saturday;
- new injury information may make holding A better than completing the planned switch.

The error is treating every planned edge as simultaneously attainable. Each action changes the roster, remaining transaction resources, waiver state, future alternatives, and information set. The path is therefore **path-dependent**: arriving at Thursday after adding A is not necessarily the same decision state as arriving there after waiting.

This does not mean every weekly stream needs an optimizer. It means the unit of comparison should match the decision. When an add is intended to unlock or precede later moves, evaluate the whole feasible sequence against the best alternative sequence.

## Represent the decision as state, action, transition, and payoff

A compact model makes the hidden dependencies visible. At decision time $t$, define the relevant state as

$$
s_t=(R_t, L_t, K_t, B_t, W_t, I_t).
$$

$R_t$ is the roster and eligibility configuration. $L_t$ is the remaining lineup calendar, including occupied slots and locks. $K_t$ is acquisition and games-cap capacity. $B_t$ is remaining FAAB or waiver-priority state. $W_t$ is the currently attainable player pool and waiver timing. $I_t$ is the information available at that timestamp: injury reports, confirmed games, roles, and known category or points context.

An action $a_t$ can be add/drop, claim, hold, start, bench, or wait. It produces an immediate uncertain contribution $r(s_t,a_t)$ and moves the manager to a later state $s_{t+1}$. A useful conceptual recursion is

$$
V_t(s_t)=\max_{a_t\in A(s_t)}E\left[r(s_t,a_t)-c(s_t,a_t)+V_{t+1}(s_{t+1})\mid s_t,a_t\right].
$$

$A(s_t)$ is the set of legal actions now, $c$ includes transaction, drop, ratio, turnover, and flexibility costs, and $V_{t+1}$ is the value of the best continuation from the resulting state. This is an application of finite-horizon dynamic programming: sequential decisions can be evaluated by immediate consequences plus the value of the remaining problem. MIT materials on dynamic programming describe the method as a framework for planning and sequential decision-making under uncertainty; the fantasy application here is an analytical inference.

The equation is scaffolding, not a demand for fake precision. Most managers cannot defensibly assign exact probabilities or utility values to every branch. A small decision tree with ranges, dominance checks, and explicit failure conditions is usually better than a large spreadsheet filled with invented decimals.

## Feasibility comes before projection

Start by drawing the intended action dates and verifying every transition. For each leg, record:

1. the player currently occupying the slot and the named drop;
2. the acquisition's effective date and whether the player is a free agent or on waivers;
3. the candidate's eligible positions and actual open lineup slots;
4. the game start and lineup-lock deadline;
5. acquisitions, FAAB, or priority consumed;
6. whether a pending claim depends on a roster spot still being open;
7. the state created after the leg, including who becomes unavailable or hard to reacquire.

Yahoo's official deadline documentation shows why this is necessary. In “Daily - Today” leagues, transactions update immediately, while “Daily - Tomorrow” changes take effect the following day; weekly formats have an earlier roster deadline. Default daily lineup changes lock at each player's real-life game start. A path that adds a player after one game and uses him the same night may be feasible in one setting and impossible in another.

ESPN's official games-limit page documents another discontinuity. If a team begins a day below the matchup limit, that day's starters can continue accruing statistics even if the total passes the limit; if the team begins the day at or above it, later statistics do not count. Consequently, spending a transaction to add a Sunday player can have zero continuation value if Saturday's starts already leave the roster at the cap. A simple “games remaining” sum misses the day-boundary rule.

Delete any infeasible branch before valuing players. A high projection cannot rescue an illegal transition.

## Count marginal playable appearances, not schedule tiles

After legality, solve the assignment problem described in [[Lineup congestion and playable games]]. A player's scheduled game has value only if the player is active, eligible, on the roster before lock, and better than the lineup use displaced on that date. For path $\pi$, let $x_{p,d}(\pi)$ equal one when player $p$ receives a countable, marginal start on date $d$ and zero otherwise. Then a points-league approximation is

$$
G(\pi)=\sum_{p,d}x_{p,d}(\pi)E[q_{p,d}]-C(\pi),
$$

where $q_{p,d}$ is the player's fantasy-point output and $C(\pi)$ is the complete path cost. The important calculation is not A's two games plus B's two games. It is the production from lineup assignments under the A-then-B path minus the assignments under hold, wait, or an alternative sequence.

In category leagues, $G$ cannot safely be a sum of category labels. Each game adds a bundle of points, rebounds, assists, threes, steals, blocks, turnovers, makes, and attempts. The path should be evaluated by its change in matchup-win probabilities or roto standings value, with percentage totals recomputed from makes and attempts. Two streams may jointly create more turnover and percentage downside than their advertised specialty suggests. Their category effects can also become redundant: the second steals specialist has little value if the first leg already moves steals out of the competitive range.

Low-volume dates matter because they often increase $x_{p,d}$, not because quiet days possess an intrinsic bonus. [[Fantasy basketball streaming on low-volume days]] formalizes this distinction. A Wednesday–Friday combination with three scheduled games can beat a four-game Tuesday–Saturday sequence when the latter collides with stronger starters.

## The first move buys or destroys later options

The continuation term $V_{t+1}$ is the heart of multi-move analysis. Consider three common effects.

### Acquisition capacity

When moves are capped, using one now shrinks the later action set. The cost is not a universal value per acquisition. It depends on the number of moves remaining, the number of decision windows left, and how valuable later reactions might be. Spending the final move before late injury reports is materially different from spending the first move in an unlimited market.

[[FAAB and waiver priority as option value]] applies the same logic to contested claims. A short stream bought with FAAB or high priority competes not only with the hold path, but with future claims that the resource could secure. Past spending is sunk; the relevant question is what the remaining resource can still unlock.

### Roster reversibility

The outgoing player may not be recoverable. A path that drops a durable rotation player for Monday volume cannot assume he returns to the roster on Sunday. Reacquisition depends on waiver timing, rival demand, budget, and roster legality. If the plan works only when the incumbent survives unclaimed, treat that as a contingent branch rather than the base case.

The same applies to intermediate streamers. Adding A can prevent a rival from using him, but releasing A can enrich the pool for an opponent. These strategic effects are hard to price, so the honest response is often a scenario range: “If A is likely reclaimable, path one leads; if not, holding dominates.”

### Candidate availability

A penciled-in second streamer is not reserved. Another manager may add him, an NBA lineup change may remove his role, or a platform waiver period may delay access past the useful game. The value of A-then-B is therefore conditional on reaching B.

If B is available with probability $p$ at the decision time, a simple branch comparison is

$$
E[V(A\rightarrow B)]=V(A)+pV(B\mid B\text{ available})+(1-p)V(F\mid B\text{ unavailable})-C,
$$

where $F$ is the best feasible fallback. The conditional notation matters. B's absence may signal a rival's move that changes the matchup, and the same NBA news that removes B's role may improve or damage A's continuation value. Do not multiply independent probabilities when the events share a cause.

## Information arrival makes “wait” a real action

The NBA's official injury-report page specifies reporting windows and continual game-day updates. Those reports establish participation designations and their timing; they do not establish fantasy projections or fixed probabilities. Still, they make information arrival predictable enough to enter a decision tree.

Suppose Monday's candidate plays at 7 p.m., while a Tuesday target's team must provide another update before Monday's transaction deadline. Adding immediately secures Monday volume but consumes the flexible spot. Waiting sacrifices that game but may reveal whether Tuesday's target has a larger role. The value of waiting is not information for its own sake. It is valuable only when the update can arrive before the deadline and can change the chosen action.

A practical test is:

$$
\text{wait if }E[V(\text{best action after update})]-C_{delay}>V(\text{best action now}),
$$

where $C_{delay}$ includes the lost game, risk that candidates disappear, and any reduced claim probability. Avoid pretending to know the exact expected value of information. Instead identify the reversal trigger: for example, “wait only if an official designation arrives before 5 p.m.; add A if the target remains doubtful, choose B if active without a stated restriction.”

A fixed weekly itinerary is therefore weaker than a policy. “A Monday, B Thursday, C Saturday” assumes the future. A policy says, “Add A if he clears the first threshold; on Thursday keep him if his role persists, otherwise pivot to the best quiet-day guard; preserve the final move unless Sunday's category margin is still reachable.” The second plan responds to state changes.

## A worked abstract comparison

Assume a points league has one flexible slot and two acquisitions left. The incumbent projects for 34 playable points through Sunday and has modest rest-of-season value. Candidate A projects for 22 playable points Monday. Candidate B projects for 24 playable points Thursday, but there is only a 60–80% chance B remains attainable. If B disappears, the fallback projects for 15. Dropping and replacing the incumbent is judged to cost 8–16 point-equivalents over the chosen horizon. Preserving one move for late news is worth an uncertain 0–12 point-equivalents.

The A-then-B path has immediate expected gross production of

$$
22+p(24)+(1-p)(15)=37+9p,
$$

or 42.4–44.2 points across the stated availability range. Before costs, that beats the incumbent by only 8.4–10.2. Once the 8–16 drop cost is included, the path ranges from roughly a small gain to a clear loss. If it also consumes the last responsive move, its downside grows.

This does not justify collapsing the ranges to one answer. It identifies the controlling facts: incumbent recoverability and the continuation value of the second move. If the incumbent cost is near the low end and late news has little value, the stream may clear. If the incumbent is likely to be claimed or the final move protects a high-leverage Sunday reaction, hold is better. Better information should focus on those assumptions, not on refining A's projection from 22.0 to 22.4.

An alternative path—wait, then add B or the fallback—sacrifices A's 22 points but preserves the incumbent until B's state resolves. That can dominate when the drop is irreversible and B's role is highly uncertain. Conversely, A alone can dominate the elaborate plan if he is keepable and comparable to B; the second transaction would then buy little marginal value.

## Alternatives to a brittle multi-move plan

**Hold the incumbent.** This preserves future production, acquisitions, and information responsiveness. It is the correct baseline when the stream's marginal playable games are small or the drop is costly.

**Use one longer hold.** A three-game candidate with slightly weaker per-game value may beat two short streams by avoiding a second transaction, waiver failure, and role transition. Schedule fit and category bundle decide the comparison.

**Wait for the scarce date.** Instead of spending early on a crowded slate, reserve the slot for a later low-volume date where a game is more likely to count. The cost is lost early production and candidate-disappearance risk.

**Submit conditional claims.** Where platform rules permit them, order complete add/drop pairs and fallbacks. Verify how an earlier successful claim changes later priority, budget, and roster legality; do not assume all queued claims are independent.

**Keep a liquid slot.** [[Roster-slot liquidity in fantasy basketball]] explains why a near-replacement occupant can be valuable even before a specific stream. Liquidity permits adaptation, but maintaining it has a cost when a clearly superior long-term player is available.

**Choose no action.** Empty theoretical capacity does not compel a move. If every feasible path is dominated after downside, waiting preserves resources for a later opportunity.

## A practical path worksheet

Before the first transaction:

1. **Define the payoff and horizon.** Use the league's exact points formula, category-win objective, or standings value. State when the path ends.
2. **Capture the initial state.** Roster, eligible slots, lineup occupancy by date, cap position, remaining acquisitions, FAAB or priority, live pool, and deadlines.
3. **Name complete alternatives.** Include hold, one-player hold, multi-move stream, wait, and the best fallback—not just the preferred sequence.
4. **Draw legal transitions.** Confirm effective dates, waivers, locks, claim processing, named drops, and roster legality at each step.
5. **Assign playable games.** Subtract congestion and displaced starts before projecting output.
6. **Model category bundles or exact points.** Include turnovers, percentage attempts, and covariance rather than counting only target categories.
7. **Price continuation.** Record moves and budget remaining, reacquisition risk, candidate-loss risk, and the value of reacting to later news.
8. **Use ranges and dominance.** Reject paths that fail across plausible scenarios. For close calls, identify the one threshold that changes the choice.
9. **Write branch rules.** State what to do if a target is claimed, an injury designation changes, a role disappears, or the category margin becomes unreachable.
10. **Set review times.** Re-evaluate before each irreversible transaction and lineup lock. Do not execute yesterday's plan from a changed state.

Archive the memo before results. A well-constructed path can lose to shooting variance, while a structurally bad path can succeed through an outlier. Review whether the legal states, probabilities, and alternatives were reasonable at the deadlines—not whether the box score was favorable.

## Why it matters

Streaming is often described as converting transactions into games. Multi-move analysis shows that the conversion rate is endogenous: spending a move changes which later games can be bought, and adding one player changes which games can fit. A manager who counts schedule tiles may overstate volume, ignore a costly drop, and reserve a future player who was never guaranteed to remain available.

The useful mental shift is from **itinerary** to **policy**. An itinerary names future moves as if the world were fixed. A policy names the current action, the state it creates, the evidence that will arrive, and the conditions governing the next action. That framing preserves the insight of dynamic programming without pretending fantasy projections support a perfectly solved model.

The strongest public conclusion is conditional: “This two-move path is better only if both games are playable, the second target remains accessible, and the incumbent's loss plus the last-move option cost stays below the stated threshold.” That sentence is less exciting than “stream four games,” but it is more decision-useful, falsifiable, and portable across leagues.

## Sources

- [Yahoo Help, “Transaction and lineup deadlines in Yahoo Fantasy”](https://help.yahoo.com/kb/fantasy-basketball/sln6775.html) — official daily-today, daily-tomorrow, weekly transaction timing, and lineup-lock mechanics; accessed July 10, 2026.
- [ESPN Fan Support, “Games Played Limit”](https://support.espn.com/hc/en-us/articles/360056369011-Games-Played-Limit) — official matchup games-limit and same-day overage behavior; accessed July 10, 2026.
- [NBA Official, “NBA Injury Report: 2025–26 Season”](https://official.nba.com/nba-injury-report-2025-26-season/) — official participation-report requirements, update timing, and report archive; accessed July 10, 2026.
- [Dimitri P. Bertsekas, MIT, “Dynamic Programming and Optimal Control”](https://www.mit.edu/~dimitrib/dpbook.html) — textbook resource describing dynamic programming for planning and sequential decision-making under uncertainty; accessed July 10, 2026.
- [MIT OpenCourseWare, “Dynamic Programming,” Principles of Optimal Control](https://ocw.mit.edu/courses/16-323-principles-of-optimal-control-spring-2008/resources/lec3/) — lecture notes on the principle of optimality and dynamic programming; accessed July 10, 2026.

The state model, Bellman-style recursion, streaming-path equations, illustrative ranges, and worksheets are analytical applications of those general principles and official mechanics. They are not platform claims or personalized roster advice.

## Open questions

- How accurately can league transaction history estimate the probability that a penciled-in second streamer remains available?
- When do category interactions make a compact decision tree materially better than an additive expected-value worksheet?
- How should a manager estimate incumbent reacquisition risk without treating public roster percentage as the live league market?
- Which platform claim-queue rules create the largest hidden dependencies among conditional adds and drops?
- Can retrospective path memos separate errors in player projection, availability probability, lineup assignment, and option-cost judgment with enough observations to improve future choices?
