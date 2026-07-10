---
title: Lineup congestion and playable games
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, lineup-optimization, schedule]
---

Lineup congestion is the loss of usable fantasy production when more rostered games compete for eligible starting slots than the lineup can accept.

Up: [[Fantasy Basketball]]

A scheduled game is not automatically a playable game. It becomes playable only when the player is available, the game falls inside the scoring period, the player can occupy an eligible open slot, the lineup is changed before the relevant lock, and no matchup or season cap makes the statistics worthless. This is the practical bridge between [[Games played versus per-game value in fantasy basketball]] and [[Fantasy basketball streaming on low-volume days]].

The central problem is assignment under capacity constraints. On a quiet night, almost every healthy rostered player may fit. On a crowded night, several games may compete for one guard slot or one utility slot. Adding another player from the crowded date can then add a scheduled game without adding an active appearance. A player with three well-distributed games can therefore create more marginal value than one with four games concentrated on already-full dates.

## Start with the league's actual capacity

Before counting anything, freeze the rules that determine whether an appearance can score:

- the scoring-period dates and timezone;
- daily, weekly, or individual-game lineup locks;
- every active slot and its eligibility rules;
- injured, bench, and utility slots;
- transaction processing and acquisition limits;
- matchup-wide or season-long games-played caps; and
- special treatment on the day a cap is reached.

These are not interchangeable details. ESPN's official support page says its matchup games-played limit is scaled for periods longer or shorter than seven days. It also says a team that begins a day below the limit may accrue all appearances that day, but later days stop counting once the team begins a day at or above the limit. Yahoo's official help describes a different form of capacity: maximum games per roster position in applicable rotisserie and points leagues, with all statistics on the day a positional cap is reached credited even if that day pushes usage beyond the nominal maximum. Commissioners can customize settings, so platform defaults are evidence about possibilities, not proof of a particular league's rules.

Capacity is also positional. A lineup with two generic guard slots and one utility slot does not have three interchangeable openings if one candidate is center-only. Multi-position eligibility changes the feasible assignment set; it does not create a new slot. The correct capacity table lists each date, each active slot, and the players eligible for it.

## Model the week as an assignment problem

Let $P$ be the rostered players, $D$ the scoring dates, and $S$ the active lineup slots. For each player $i$ and date $d$, let $g_{id}=1$ when the player has a scheduled game and $0$ otherwise. Let $e_{is}=1$ when player $i$ is eligible for slot $s$. Define a binary decision variable

$$
x_{ids}=\begin{cases}
1 & \text{if player }i\text{ is assigned to slot }s\text{ on date }d,\\
0 & \text{otherwise.}
\end{cases}
$$

A legal daily lineup obeys three basic constraints:

$$
x_{ids}\le g_{id}e_{is},
$$

$$
\sum_s x_{ids}\le 1 \quad \text{for every player-date},
$$

and

$$
\sum_i x_{ids}\le 1 \quad \text{for every slot-date}.
$$

The first prevents assigning a player without a game or to an ineligible slot. The second prevents using one player twice on the same date. The third enforces slot capacity. Weekly locks require another constraint: the assignment selected at the deadline must remain fixed for the period. Individual-game locks instead preserve future choices until each player's game begins; the information and transaction model must reflect that optionality.

If the only objective were to maximize appearances, the optimization would be

$$
\max \sum_{i,d,s}x_{ids}.
$$

That count is useful but incomplete. Give every possible appearance an expected marginal value $v_{id}$ and maximize

$$
\max \sum_{i,d,s}x_{ids}v_{id}.
$$

In a points league, $v_{id}$ may be expected fantasy points conditional on playing. In categories, it should represent the appearance's effect on category win probabilities, including turnovers and percentage volume. In rotisserie, it should reflect standings points and remaining positional caps. This is why the method should first solve feasibility and then value the feasible assignments, rather than treating all games as equal units.

Availability can be added without pretending it is known. Let $p_{id}$ be the probability of appearing and $w_{id}$ a workload factor conditional on appearing. Then a simple expected contribution is $p_{id}w_{id}v_{id}$. Correlated injury or rest states should be modeled as week-level scenarios, as described in [[Weekly lineup locks and injury risk]], rather than as independent decorative percentages.

## Measure congestion before making a move

For each date $d$, define raw demand as the number of rostered scheduled games:

$$
R_d=\sum_i g_{id}.
$$

If every slot were interchangeable, a rough overflow would be

$$
O_d=\max(0,R_d-C_d),
$$

where $C_d$ is the number of active slots. This quick screen identifies likely crowded dates, but it can understate congestion because eligibility may strand capacity. Four games and four slots do not guarantee four playable games if three players can use only two of those slots.

The exact playable count $A_d$ is the size of the maximum legal player-to-slot matching for that date. Exact overflow is then

$$
O_d=R_d-A_d.
$$

The assignment itself matters as much as the count. If several maximum-cardinality assignments exist, select the one with the highest expected marginal value. This avoids benching a strong appearance merely because a weaker player was matched first.

A useful audit table is:

| Date | Scheduled roster games | Legal maximum assignments | Expected active assignments | Overflow | Scarce slots |
| --- | ---: | ---: | ---: | ---: | --- |
| quiet date | 5 | 5 | 4.6 | 0 | none |
| crowded date | 11 | 9 | 8.4 | 2 | center, guard |
| medium date | 8 | 8 | 7.2 | 0 | utility nearly full |

The numbers are parameterized illustrations, not a claim about a real roster. “Expected active assignments” discounts uncertain availability, while “legal maximum” is a deterministic capacity check. Keeping them separate shows whether the bottleneck is schedule geometry or player availability.

## Calculate marginal playable games, not raw additions

Suppose the current roster's optimized weekly assignment produces $A(R)$ playable games. For a candidate addition $j$ and required drop $k$, the move's marginal playable-game gain is

$$
\Delta G=A(R-k+j)-A(R).
$$

This requires re-solving the whole lineup. It is not equal to the candidate's scheduled games minus the dropped player's scheduled games. The candidate may fill empty low-volume dates, displace superior players on crowded dates, or unlock a better assignment through broader eligibility.

The value version is

$$
\Delta V=V(R-k+j)-V(R)-C_{move},
$$

where $V(R)$ is the optimized expected lineup value and $C_{move}$ includes the dropped player's future value, waiver or FAAB expenditure, acquisition scarcity, and lost flexibility. This connects the calculation to [[Fantasy basketball replacement level]], [[Fantasy basketball streaming break-even thresholds]], and [[Roster-slot liquidity in fantasy basketball]].

Consider two abstract candidates. Candidate A has four scheduled games, three on dates when every compatible slot is already occupied by higher-value appearances. Candidate B has three games, all on dates with open capacity. If A adds only one playable assignment and B adds three, B has the schedule advantage despite the smaller raw game count. If A's one marginal appearance is exceptionally valuable, the value model could still prefer A; the point is to compare optimized marginal contributions, not schedule totals.

Now add eligibility. Candidate C has three games and guard/forward eligibility. Candidate D has the same projection and dates but only forward eligibility. If guard slots are open while forward and utility slots are full, C may create two additional assignments while D creates none. Eligibility's value is conditional on the rest of the roster and schedule. A generic bonus for “multi-position eligibility” misses that mechanism.

## Preserve the value of future information

Congestion is not static in daily-lock leagues. Injuries, rest, postponements, and late status changes can turn apparent overflow into usable capacity. A bench player on a crowded date is therefore not always worthless: the player may be an option that becomes active if another assignment disappears.

This makes lineup order important. Fill the least flexible slots first, then preserve players with multiple eligible positions for later placement when the platform permits movement. The heuristic mirrors a standard constrained-assignment principle: consume specialized capacity with specialized items and reserve flexible capacity for unresolved choices. It is a heuristic, not a substitute for enumerating legal assignments when stakes or complexity justify doing so.

Transaction timing also determines optionality. A planned streamer may need to be added before an early game locks, while the decision it is meant to hedge may not resolve until later. The move can therefore sacrifice a roster spot before its benefit is known. Record deadlines beside every candidate appearance and exclude paths that are not legally executable.

The NBA's official schedule supplies game dates and times, but it does not settle fantasy locks or scoring treatment. Likewise, the official NBA injury report is timestamped and continually updated; availability evidence changes after an initial lineup plan. Preserve the information set used at each decision rather than silently replacing it with later knowledge.

## Season caps change the shadow price of a game

In capped formats, an additional playable appearance can have zero or negative opportunity value if it consumes scarce capacity that should be reserved for a stronger future game. Let $K_s$ be the remaining games allowance for position $s$. Add

$$
\sum_{i,d}x_{ids}\le K_s
$$

for each capped position. The optimization now chooses not only who can play, but which appearances deserve limited season capacity.

The shadow price of a cap slot is the value of preserving one unit for the best plausible future alternative. Early in the season, estimates are uncertain and pace matters: being ahead of cap pace is not automatically good if the consumed games were weak, while being behind pace is not automatically bad if enough future capacity and quality remain. Near the end, unused capacity can expire worthless, so the threshold for using a marginal game falls.

Platform day-boundary rules can create discontinuities. Official ESPN and Yahoo guidance both describe forms of same-day overage credit, although the caps and contexts differ. An optimizer must model the documented rule exactly. A naive constraint that discards every appearance above the nominal cap can undervalue the final scoring day; a naive model that assumes all later games count can overvalue it.

## A reproducible congestion worksheet

1. **Freeze settings.** Record period, timezone, slots, eligibility, locks, transaction rules, acquisition limits, and games caps.
2. **Import the schedule.** Use the official NBA schedule, preserving dates and tip times. Treat later schedule changes as new timestamped states.
3. **Create player-date rows.** Include scheduled game, eligibility, availability range, conditional workload, and format-specific value.
4. **Construct slot-date capacity.** Represent every usable starting slot separately rather than using one total lineup number.
5. **Solve the current roster.** Maximize legal assignments, then expected value among assignments with the same or similar count.
6. **Mark overflow.** Identify benched scheduled games and the exact constraint that caused each loss: slot count, eligibility, lock, cap, or availability.
7. **Test each move.** Remove the actual drop, add the candidate, and re-solve. Report $\Delta G$ and $\Delta V$.
8. **Stress-test uncertainty.** Recompute under optimistic, central, and pessimistic availability scenarios and any plausible schedule change.
9. **Price the transaction.** Include future drop value, claim resources, acquisition limits, and the option value of an open roster slot.
10. **Save the decision state.** Record sources, observation time, assumptions, chosen assignment, and the result after resolution for calibration.

A spreadsheet can handle small rosters by enumerating eligible assignments date by date. A maximum bipartite matching algorithm handles appearance counts cleanly; a mixed-integer program is appropriate when weekly locks, caps, acquisitions, and category objectives interact. The sophistication of the solver should match the decision. The conceptual minimum is non-negotiable: every claimed extra game must have a legal slot.

## Common failure modes

**Counting team games instead of roster assignments.** A four-game team schedule says nothing about whether those games fit the lineup.

**Using a league-wide high-volume/low-volume label as the final answer.** League-wide game counts are a useful prior, but congestion depends on the roster's teams, positions, locks, and capacity.

**Subtracting the drop's games from the add's games.** This ignores displacement and must be replaced by two full lineup optimizations.

**Treating utility as unlimited flexibility.** A utility slot accepts many players but still holds only one appearance.

**Ignoring position-specific caps.** In applicable formats, the nominal open slot today may consume a scarce season resource.

**Assuming every absence frees a usable slot.** The replacement still needs a scheduled game, eligibility, and a legal pre-lock transaction path.

**Maximizing appearances without valuing them.** Extra low-value games can hurt turnovers or percentages, displace stronger appearances, or waste cap capacity.

**Using hindsight to judge the plan.** A surprise scratch does not make the ex ante assignment irrational; grade the forecast and decision with the information available at lock.

## Why it matters

Lineup congestion explains why schedule quantity and fantasy value often diverge. It turns the vague advice to “target off nights” into a falsifiable procedure: build the capacity matrix, solve the legal assignment, and measure the candidate's marginal effect after the real drop and transaction cost.

The method also unifies several adjacent ideas. [[Fantasy basketball streaming on low-volume days]] identifies dates more likely to contain open capacity. [[Games played versus per-game value in fantasy basketball]] explains why active appearances, not scheduled games, create production. [[Weekly lineup locks and injury risk]] changes which assignments remain adjustable. [[Percentage categories and volume]] and [[Points-league volume and efficiency]] determine how playable appearances should be valued. Congestion is the mechanism connecting them.

The durable rule is simple: never pay for a game that cannot enter the scoring lineup. Count capacity at the slot-date level, preserve eligibility and deadlines, and compare complete feasible rosters. Raw games are supply; playable games are assigned supply; marginal value is what remains after displacement, caps, uncertainty, and cost.

## Sources

- [NBA, “NBA Schedule”](https://www.nba.com/schedule) — official game dates and times; accessed July 10, 2026.
- [NBA, “NBA announces schedule for 2025–26 regular season”](https://www.nba.com/news/2025-26-nba-regular-season-schedule) — official confirmation of the complete schedule and the distinction between initially defined and later-determined games; published August 14, 2025; accessed July 10, 2026.
- [ESPN Fan Support, “Games Played Limit”](https://support.espn.com/hc/en-us/articles/360056369011-Games-Played-Limit) — official matchup-cap scaling and same-day overage treatment; accessed July 10, 2026.
- [ESPN Fan Support, “Roster Settings”](https://support.espn.com/hc/en-us/articles/115003902651-Roster-Settings) — official description of configurable starter and roster-slot limits; accessed July 10, 2026.
- [Yahoo Help, “Position maximum usage in Fantasy Basketball and Hockey Leagues”](https://help.yahoo.com/kb/fantasy-basketball/position-maximum-usage-fantasy-basketball-hockey-leagues-sln6784.html) — official positional maximums, one-second appearance rule, same-day cap treatment, and commissioner customization; accessed July 10, 2026.
- [NBA Official, “NBA Injury Report: 2025–26 Season”](https://official.nba.com/nba-injury-report-2025-26-season/) — official timestamped injury-report archive used to distinguish schedule capacity from changing availability; accessed July 10, 2026.

The matching model, marginal-value equations, cap shadow-price interpretation, and worksheet are analytical inferences built on these official schedules and rules. They are not personalized roster advice and do not assume any private league settings.

## Open questions

- How much prediction error comes from using league-wide low-volume-day labels instead of roster-specific slot-date matching?
- What is the best tractable category-win objective when percentage volume, turnovers, and cross-category covariance make appearance values non-additive?
- How should an optimizer price the option value of a congested-date bench player before late injury news resolves?
- Which platform-specific same-day cap rules create exploitable end-of-period discontinuities, and how stable are those rules across seasons?
- How often does multi-position eligibility add an actual playable game rather than merely provide a redundant assignment path?
