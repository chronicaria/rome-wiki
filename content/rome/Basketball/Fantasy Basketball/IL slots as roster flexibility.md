---
title: IL slots as roster flexibility
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, injuries, roster-construction, decision-making]
as_of: 2026-07-10
desk: Fantasy basketball
review_after: 2026-08-10
---

An injured-list slot is contingent roster capacity: it creates value only while a player is platform-eligible, the extra active spot can be used productively, and the eventual activation squeeze is priced in.

Up: [[Fantasy Basketball]] · Related: [[Fantasy basketball replacement level]], [[How NBA injury reports should change fantasy decisions]], [[Games played versus per-game value in fantasy basketball]], [[Fantasy basketball streaming on low-volume days]]

## An IL slot is a state-dependent option

An injured-list slot—called IL, IL+, IR, or another label depending on the platform—is not simply an extra bench position. It is a roster position available only under specified eligibility states. Moving an eligible player there can open an active roster spot without surrendering the injured player. That separates two decisions that would otherwise be bundled: whether to retain the injured asset and whether to use an active slot on current production.

The separation has economic value. Without IL capacity, holding an unavailable player consumes a spot that could contain a healthy replacement. With an open IL slot, a manager may preserve the unavailable player's future value while adding a temporary contributor. But the capacity is contingent, not permanent. It can disappear when the platform changes the player's designation, when the player returns, when league settings block further additions, or when activation requires dropping someone.

The useful abstraction is therefore an option over future roster paths, not “a free player.” Let $s_t$ indicate that the player is eligible and the IL slot usable at time $t$. A simplified value over horizon $H$ is

$$
V_{IL}=E\left[\sum_{t\in H}s_t\bigl(V(R_t^{IL})-V(R_t^{bench})\bigr)-C_{move}-C_{squeeze}-C_{error}\right].
$$

$R_t^{IL}$ is the best feasible roster with the player stashed; $R_t^{bench}$ is the best roster when the player occupies an ordinary spot. $C_{move}$ represents transaction or waiver resources used to exploit the opening. $C_{squeeze}$ is the later cost of making room when the player becomes active. $C_{error}$ captures avoidable loss from stale designations, missed locks, or mistaken rule assumptions.

This article provides a public framework, not a personalized add, drop, or activation recommendation. A real choice requires the actual platform state, league settings, roster, free-agent pool, scoring objective, acquisition limits, and deadline.

## Four states should not be collapsed

Fantasy analysis often treats “injured” as one state. Operationally, at least four states matter.

1. **NBA participation state.** The newest official injury report may list a player as available, probable, questionable, doubtful, or out for a particular game. It is timestamped public evidence about participation, not a fantasy-platform command.
2. **Platform designation.** The fantasy provider assigns its own tag and decides which tags qualify for which special roster positions. Yahoo's published basketball rules, for example, distinguish IL eligibility from IL+ eligibility. ESPN publishes a different set of labels for its IR/IL workflow.
3. **League configuration.** A commissioner chooses whether special slots exist, how many exist, and sometimes related transaction or lineup settings. A platform capability need not be enabled in a particular league.
4. **Roster validity.** Even if a player remains displayed in an IL slot, the platform may restrict acquisitions once that player is healthy or otherwise ineligible. The exact consequence is platform- and setting-specific.

These states can move at different times. An NBA report can change before a fantasy data feed updates. A platform can retain a designation after new public information. A player can remain stored in a special slot while producing no fantasy points there. An analyst should record all four rather than infer one from another.

[[How NBA injury reports should change fantasy decisions]] explains the official-report layer. The core rule here is narrower: NBA availability informs a fantasy decision, but platform eligibility controls the roster action. Never promise IL access from an NBA label alone.

## Platform rules are parameters, not universal law

Current official help pages illustrate why generic advice fails.

Yahoo says basketball uses both IL and IL+ positions. Its stated IL-eligible designations are Injured (INJ) and Out For Season (OFS), while IL+ accepts Out (O) or Game Time Decision (GTD). Yahoo says these statuses come from its data provider. Its help page defines INJ using a projected-or-realized threshold of seven or more days or three missed games, whichever occurs first, while O is projected to be less than seven days; these are platform definitions, not NBA medical conclusions.

Yahoo also says a player may remain in an IL-family position after returning to real-life action, but does not earn fantasy points while occupying it. Once activated in real life, the manager cannot complete a transaction that adds a player until activating the formerly out player, although Yahoo says intra-roster moves and drops remain available. Thus “allowed to remain displayed” does not mean “full roster flexibility continues.”

ESPN says only players bearing its IR, IL, or O tags can be moved to an IR/IL slot and that the feature exists only where the league uses such slots. ESPN's waiver guidance says placing an eligible player there opens a roster spot. It also states that a healthy player left there blocks new additions. A waiver claim submitted while the player was eligible may still process if the status changes before processing, but an open bench slot used to support a pending claim can be consumed by activating an IL player, causing the claim to fail. These details make claim submission time, processing time, and activation time distinct checkpoints.

Published rules can change, and commissioner settings can alter the environment. Any decision record should include platform, league type, special-slot count and labels, eligibility tag at the decision time, acquisition rule, lineup lock, and a direct link to the then-current help page.

## The capacity value comes from the replacement path

An IL slot produces nothing by itself. Its value is what the newly opened active spot can do above the counterfactual. That might be one healthy replacement for several weeks, a sequence of short streams, a speculative prospect, or no acquisition at all.

If player $j$ moves into IL and the opened spot follows path $\pi$, a useful comparison is

$$
\Delta V(\pi)=V_j^{future}+V_\pi^{active}-V_j^{ordinary\ slot}-C(\pi).
$$

While $j$ is unavailable, $V_j^{ordinary\ slot}$ may be zero current production but still includes the value of retaining the asset. The IL slot's distinctive contribution is that it avoids forcing a choice between that retention value and the replacement path. [[Fantasy basketball replacement level]] supplies the broader counterfactual framework.

The replacement path must be feasible. A high-ranked free agent already rostered in the league is irrelevant. A player whose waiver claim clears after the desired game adds no current start. Four scheduled games can yield only one playable game if three collide with better starters. A specialist can add negative net value if the targeted categories are settled, percentages are fragile, or turnovers are costly.

This makes roster depth ambiguous. In a shallow league, the open spot may capture a strong replacement, raising the short-term value of IL capacity. But the returning player can also create a painful squeeze because the replacement deserves to be kept. In a deep league, waiver production may be weak, yet IL capacity can still preserve scarce starters and prospects that would be claimed immediately if dropped.

## Eligibility timing creates option value and timing risk

An open IL slot is most useful when eligibility begins early enough to act and persists long enough for the replacement to contribute. Three clocks matter.

**Information clock.** When does reliable public evidence arrive? NBA injury reports are updated through specified reporting windows, and team communications can change the forecast.

**Platform clock.** When does the provider attach or remove the qualifying designation? This may not coincide exactly with the public report.

**Transaction clock.** When do lineups lock, claims process, free agents become available, and acquisitions count? A qualifying tag that appears after a useful replacement locks has little value for that game.

The option can be represented with scenarios rather than a false single duration:

| Eligibility branch | Operational effect | Main risk |
|---|---|---|
| Qualifies before acquisition deadline | Replacement path can begin immediately | designation reverses before a later add |
| Qualifies after today's locks | Future capacity only | analyst counts an unusable current game |
| Remains eligible through horizon | stash and stream coexist | replacement cost or role disappoints |
| Returns earlier than expected | activation decision arrives sooner | forced drop or blocked acquisition |
| Remains out longer | capacity persists | original player's return value decays |

“Day-to-day” language is especially dangerous because its roster consequence varies. Yahoo's IL+ accepts GTD under its published rule, while its ordinary IL uses narrower designations. ESPN uses its own tags. A manager should inspect the slot choices shown in the live roster rather than translate a news headline into assumed eligibility.

## The activation squeeze is part of today's decision

Moving a player into IL defers a roster cut; it does not necessarily eliminate one. When the player becomes usable again, the active roster may have no opening. The manager must then activate and drop someone, leave the player in a non-scoring special slot where permitted, or make another roster-changing action allowed by the league.

The best time to price that squeeze is when exploiting the opening. Ask:

- Which player is the expected cut if the injured player returns tomorrow?
- How much claim, FAAB, category, schedule, or keeper value would that cut destroy?
- Can the replacement be chosen for a clean expiry, such as a short favorable schedule or a temporary role?
- Would an early return block a planned acquisition before the manager notices?
- Does the platform allow the healthy player to remain stored, and what functions become restricted?

A short-term replacement with slightly lower projected output can dominate a superior long-term player if the short-term player is easy to release at activation. Conversely, adding a breakout candidate may be rational if the manager is willing to treat the return as a later competition for the final roster spot. The essential discipline is to recognize that this creates another decision, not to pretend the later drop has zero cost.

Activation has lineup consequences too. A returning player may be medically available but limited in minutes, held out of a back-to-back, or reintroduced after the weekly lineup locked. Moving the player out of IL merely restores eligibility to occupy an active or bench position; it does not guarantee normal production. Forecast participation, minutes, role, and playable games separately.

## Decision thresholds

An IL move should clear a higher threshold than “the button is available.” A practical inequality is

$$
E[G_{replacement}]+E[O_{retention}] > C_{acquisition}+E[C_{activation}]+C_{restriction}+M,
$$

where $G_{replacement}$ is the marginal production from the opened spot, $O_{retention}$ is the option value of keeping the injured player, $C_{activation}$ is the later squeeze, $C_{restriction}$ covers blocked claims or lost maneuverability, and $M$ is a margin for forecast error.

The threshold changes by format.

### Daily head-to-head leagues

Value can be high because the open spot supports repeated streams and low-volume-day starts. Count expected playable games, not scheduled games, and price weekly acquisition limits. Late in a close matchup, an extra active game may matter greatly; early in the week, preserving an acquisition for later injury news may dominate.

### Weekly lineup leagues

The IL slot can preserve a player and open bench capacity, but a designation arriving after weekly lock may not repair the current lineup. Uncertainty is concentrated at the deadline. Robust choices—those acceptable across active and inactive branches—deserve more weight than fragile best cases.

### Rotisserie and capped formats

Extra roster capacity does not create extra allowed games. A replacement appearance can consume a finite position or season cap and displace a better future game. Evaluate marginal standings points and cap quality rather than raw volume.

### Points leagues

The marginal calculation is relatively direct once the scoring formula is known: expected fantasy points from playable replacement games minus all costs. Availability and congestion still prevent simple per-game multiplication.

### Category leagues

The opened spot should serve categories that can change the matchup or standings. Counting-stat volume can help, but added attempts change percentage categories and extra games can add turnovers. “More production” is not one scalar unless the league defines it that way.

### Dynasty and keeper leagues

IL capacity can be unusually valuable because it preserves future assets through a period of no current production. But slot scarcity, contract rules, offseason roster requirements, and the possibility of carrying a non-contender for months must be explicit. A current-production replacement and a long-term stash solve different objectives.

## Risks and failure modes

**Calling the slot free.** It has opportunity cost when several injured players compete for it, when additions consume scarce moves, and when activation forces a cut.

**Equating NBA and platform status.** Official participation designations and fantasy eligibility are separate systems.

**Ignoring slot competition.** The relevant comparison is not injured player versus empty slot, but the best assignment of all eligible injured players across limited IL capacity.

**Stashing the wrong injury profile.** A low-upside fringe player can occupy capacity needed by a high-value absence tomorrow. The threshold depends on replacement strength and expected duration, not the injury label alone.

**Counting points from the IL position.** Yahoo explicitly says players in its IL-family positions do not earn points there even if they play in real life. A returning player must occupy a scoring-eligible lineup position under the league's rules.

**Missing the healthy-player restriction.** A player may remain visually stored while new acquisitions are blocked. That can destroy a carefully planned stream or waiver path.

**Assuming claims are static.** ESPN's published examples show that roster changes between claim submission and processing can affect whether a claim succeeds.

**Treating an early return as pure good news.** It improves the original player's availability but can shorten replacement value and accelerate a costly roster squeeze.

**Using public roster percentages as the replacement pool.** The actual league's available players and claim competition determine the counterfactual.

**Forgetting no action.** If the pool is weak, an acquisition is costly, or eligibility may vanish immediately, opening the slot without filling it can preserve flexibility.

## A reproducible IL-slot workflow

1. Record the platform, league settings, number and type of special slots, acquisition rules, locks, and scoring horizon.
2. Capture the newest official NBA status with timestamp, but separately inspect the live fantasy-platform designation and eligible roster positions.
3. Rank all injured or inactive players competing for limited special-slot capacity by the value preserved and the active capacity each assignment releases.
4. Build feasible replacement paths from the actual free-agent pool, claim times, acquisition budget, eligibility, and playable schedule.
5. Compare points or category utility against holding, benching, dropping, and leaving the opened spot empty.
6. Model eligibility duration and return timing as scenarios. Do not translate a diagnosis into an unsupported recovery forecast.
7. Name the expected activation cut and estimate its lost value before making the initial acquisition.
8. Set checkpoints for official reports, platform-tag changes, lineup locks, waiver processing, and the player's first possible return.
9. Recalculate when any checkpoint changes; platform rules and live roster state override generic advice.
10. Archive the assumptions and grade the process separately from the result.

The central insight is modest but powerful: an IL slot converts an unavailable player's roster burden into a temporary right to use active capacity elsewhere. Its value is the best complete roster path that right enables, net of eligibility uncertainty, transaction costs, and the eventual squeeze. Treating the slot as an option makes those tradeoffs visible; treating it as a free bench spot hides them.

## Sources

- [Yahoo Help, “Identify and manage injured and inactive players in Yahoo Fantasy Sports”](https://help.yahoo.com/kb/fantasy-basketball/manage-roster-up-to-date-injury-reports-sln28136.html) — basketball IL and IL+ eligibility designations, provider-defined status thresholds, activation procedure, scoring treatment, and restrictions after real-life activation; accessed July 10, 2026.
- [Yahoo Help, “Add, edit, or remove roster positions post-draft”](https://ca.help.yahoo.com/kb/fantasy-basketball/add-edit-remove-roster-positions-post-draft-sln6941.html) — commissioner ability to add non-active IL-family positions and limits on later removal; accessed July 10, 2026.
- [ESPN Fan Support, “Moving Players on and off of the Injured Reserve (IR) and Injury List (IL)”](https://support.espn.com/hc/en-us/articles/360046053592-Move-a-Player-On-or-Off-Injured-Reserve-IR-or-Injured-List-IL) — eligible tags, league configuration, and move procedure; accessed July 10, 2026.
- [ESPN Fan Support, “How does the Injured Reserve / Injury List impact Waivers?”](https://support.espn.com/hc/en-us/articles/4669672308116-How-does-the-Injured-Reserve-Injury-List-impact-Waivers) — open-slot effect, healthy-player acquisition restriction, and claim-processing scenarios; accessed July 10, 2026.
- [NBA, “NBA Injury Report: 2025–26 Season”](https://official.nba.com/nba-injury-report-2025-26-season/) — official, continually updated participation reports used as public availability evidence; accessed July 10, 2026.

Platform sources establish platform behavior at the access date, not a universal rule for every league. The option-value equations, scenario framework, and thresholds are analytical constructions that must be instantiated with the actual league state.

## Open questions

- How much marginal win probability does each additional IL or IL+ slot create across league depths and acquisition limits?
- What is the best rule for assigning several eligible injured players to fewer special slots when return dates and replacement paths are uncertain?
- How quickly do fantasy-platform designations update after successive official NBA reports, and how often does that lag change an actionable decision?
- How should a model price the endogenous activation squeeze when the temporary replacement can itself break out?
- Does broader IL+ eligibility improve competitive skill by expanding flexibility, or mainly increase monitoring and transaction-volume advantages?
