---
title: Keeper value versus redraft value
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, fantasy-basketball, keeper, drafts, valuation]
as_of: 2026-07-10
desk: Fantasy basketball
review_after: 2026-08-10
---
Keeper value is redraft value plus the rule-dependent surplus of controlling a player in future seasons, minus the draft capital, salary, roster capacity, risk, and flexibility that keeping him consumes.

Up: [[Fantasy Basketball]]

Related: [[Fantasy basketball replacement level]] · [[ADP uncertainty and player uncertainty]] · [[Using projection disagreement in fantasy basketball]] · [[Roster-slot liquidity in fantasy basketball]] · [[Two-for-one trade valuation in fantasy basketball]]

## The same player can be two different assets

Redraft value asks what a player can contribute during the current scoring season. Keeper value asks a larger question: what is the value of controlling that player now **and retaining the right, but not necessarily the obligation, to carry him into later seasons under a specific cost rule?** The difference is not a generic “youth bonus.” It is a contract-like surplus created by the league constitution.

A simple decomposition is

$$
K_i=R_{i,0}+\sum_{t=1}^{T}\delta_t p_{i,t}\left(R_{i,t}-C_{i,t}-O_{i,t}\right)-F_i,
$$

where $R_{i,0}$ is current-season redraft value, $R_{i,t}$ is the player's projected future-season value, $C_{i,t}$ is the explicit keeper price in season $t$, $O_{i,t}$ is the opportunity cost of using a keeper and roster slot on him, $p_{i,t}$ is the probability that retaining him remains legal and desirable, $\delta_t$ is an explicit future-value weight, and $F_i$ collects present costs such as reduced [[Roster-slot liquidity in fantasy basketball|roster liquidity]] or a lost opportunity to keep someone else.

This equation is a checklist, not a universal ranking formula. A keeper price can be a draft round, an auction salary, an escalating contract, a limited keeper slot, or several of those at once. Future value can mean projected fantasy points, category utility, rotisserie standings points, title probability, or trade value, but all candidates must use the same objective. A keeper is valuable only relative to the alternative use of the resources he consumes.

## Assumptions and privacy boundary

No player-specific keep, drop, trade, or draft conclusion follows from this public article. An actual decision requires the league constitution; scoring and category settings; team count; roster and keeper limits; the manager's eligible players; acquisition history; draft order; salary budget; escalation rules; deadlines; live player pool; and the chosen competitive horizon. Those details can identify a private league or reveal strategy and should remain in an authorized, publication-excluded layer. This note does not execute a transaction or contact another manager.

Platform documentation illustrates why parameters cannot be guessed. ESPN says a League Manager may assign keepers to opening rounds, original rounds, custom rounds, or salary values depending on the setup. Yahoo says commissioners approve keeper selections and assign the draft pick or salary-cap amount each keeper occupies. Those are possible mechanics, not evidence about any particular league. Written house rules and commissioner rulings may add eligibility, inflation, tenure, trade, or deadline terms that a platform screen does not encode.

Before valuing anyone, record:

| Rule field | Why it changes value |
|---|---|
| Keeper count and whether all slots must be used | A scarce optional slot has a higher opportunity cost than an unlimited or mandatory one. |
| Eligible player pool | Waiver additions, trades, rookies, or players kept last year may have different rights. |
| Draft-round cost | A player kept in round 10 is not equivalent to the same player occupying round 2. |
| Salary and annual inflation | A cheap player can create surplus; compounding raises can erase it quickly. |
| Maximum tenure or contract years | A one-year right differs from control for four seasons. |
| Deadline and lock rules | New information after the declaration date may be unusable. |
| Draft order and pick trading | “A fifth-round pick” has a specific slot and alternative set, not one constant value. |
| Roster and IL treatment | Prospects and injured players consume different amounts of active capacity. |
| Expansion, contraction, and orphan rules | Changes to the player pool can alter replacement and market prices. |

Unknown consequential terms should remain variables. Do not silently substitute ESPN, Yahoo, an analyst's home league, or a conventional rule.

## Redraft value is the foundation, not the answer

A keeper model still begins with an ordinary forecast of games, minutes, rates, roles, health, schedule usability, and league scoring. In points leagues, translate those inputs through the exact scoring formula and expected playable games. In category leagues, retain attempts for percentage categories, turnovers where used, and the roster's marginal category objective. In rotisserie, estimate how production can move standings points under games caps. [[Fantasy basketball replacement level]] explains the required baseline: value is production above the best feasible alternative, not an isolated rank.

That current-season estimate should be separated from acquisition price. [[ADP uncertainty and player uncertainty]] shows why ADP is a market observation rather than a player-outcome distribution. A player commonly drafted at pick 40 can be kept for pick 90 without becoming more productive; the keeper contract, not the player, creates the apparent gain. Conversely, a player can project extremely well and still be a poor keeper if retaining him consumes a pick at or above the place where comparable players should remain available.

Use ranges rather than a single rank. [[Using projection disagreement in fantasy basketball]] recommends decomposing forecast differences into games, minutes, rates, and valuation transformations. This matters more across multiple seasons because small assumptions compound. A young player's optimistic keeper case might require both a larger role and sustained per-minute efficiency. Those are two uncertain claims, not one evidence-free “upside” label.

## Convert the keeper cost into an opportunity set

The central comparison is not “player versus pick.” It is the complete keeper path versus the best complete alternative path.

Suppose a player may be retained for a fifth-round selection. The cost is not the average fifth-round player's historical score. It is the best expected roster path available if that exact selection remains usable, given the draft slot, the players other managers keep, roster needs, and uncertainty about who reaches the pick. Formally,

$$
S_{i,t}=V_{i,t}-E[V(A_{c,t})],
$$

where $A_{c,t}$ is the feasible alternative set bought by keeper cost $c$ in year $t$. Keeper surplus $S$ is positive only when the kept player's league-relevant value exceeds that opportunity set by enough to justify uncertainty and inflexibility.

Round labels can conceal large differences. The fifth pick of round five and the last pick of round five face different pools. In a league with many early-round keepers, the nominal fifth-round selection may occur after far fewer unprotected stars have been drafted; in another structure, keepers may simply remove picks and players together. ESPN's official documentation notes that its default opening keeper rounds are non-snake and that League Managers can instead assign original or custom rounds. Yahoo permits commissioners to assign which pick each keeper fills. Therefore the draft board must be reconstructed under the actual mechanic before calling a cost cheap.

For salary keepers, compare the player's salary with the market-clearing cost of an equivalent alternative **after keeper inflation**. If many underpriced players are removed before the auction, the remaining budget chases a smaller supply of available production. A $20 keeper can have more than $10 of surplus even if a generic preseason price is $30, because the relevant open-auction price may be higher. But do not add “inflation value” twice: either estimate the player's price in the post-keeper market or adjust a pre-keeper estimate, not both.

Escalation turns one cheap year into a declining sequence of options. If a $6 salary rises by $5 each season, the expected future surpluses might be large at $11, marginal at $16, and negative at $21. Because retaining is usually optional, a future negative year can be declined; its expected loss should not automatically be charged today unless the rules create a binding contract or penalty. The option to stop is part of the asset.

## Limited keeper slots create shadow prices

A player can beat his explicit round or salary cost and still not deserve one of a small number of keeper slots. If only three players may be retained, the fourth-best eligible surplus is the alternative displaced by the third selection. The relevant net value is approximately

$$
NKV_i=\sum_t \delta_t p_{i,t}S_{i,t}-\lambda_t,
$$

where $\lambda_t$ is the shadow price of the keeper slot in season $t$. The slot price is zero only if it would otherwise go unused or to an option with no surplus.

This is why keeper comparisons should be portfolio-based. Two cheap guards may each look strong alone, but keeping both can concentrate injury, role, or category risk and force scarce forwards or centers into a depleted draft pool. In categories, compare complete roster trajectories, including covariance and the availability of complementary statistics. In points leagues, test whether the saved draft resources can purchase a better total lineup. A universal keeper ranking cannot see either constraint.

Keeper slots also interact with [[Roster-slot liquidity in fantasy basketball]]. An injured veteran or developmental prospect may retain large future surplus while occupying an active spot all season. The value of the right must be net of the waiver production, streaming opportunities, and reaction capacity surrendered during that wait. An IL, minor, or taxi slot can reduce that carrying cost, but only if the player qualifies and activation rules do not create an unmodeled future squeeze.

## Age is a mechanism, not a multiplier

Age matters because it informs future distributions of role, availability, development, and decline. It does not justify adding a fixed bonus to every young player or discounting every veteran. The useful questions are concrete:

- How many seasons of keeper control remain?
- Which minutes and role changes are required for the high case?
- Is current per-minute production supported by a meaningful sample and stable skills?
- Does the player have a plausible path to scarce category production or merely more raw minutes?
- How much value is lost while waiting, and what roster protection exists?
- Does an older player's lower long-run ceiling matter if the keeper right expires after one year?

A 21-year-old reserve on a one-year keeper term can have less keeper value than a 31-year-old starter at a deep discount. A 28-year-old star with three below-market salary years can be a stronger asset than a rookie whose optimistic outcome merely reaches replacement level. Model age through scenario-specific projections and probabilities, then compare costs. Do not apply age twice through both a pessimistic forecast and an extra veteran penalty.

Rookies expose another error: confusing draft pedigree, NBA potential, and near-term fantasy utility. Their distributions can be wide because role, efficiency, and stat translation are uncertain. A ceiling case belongs in the model only with an explicit path and probability. A keeper right has option value when it preserves exposure to that case cheaply, but the expected value must still subtract the failed-development branches and the slot's carrying cost.

## The future should be discounted transparently

Future keeper value is not interchangeable with present production. Rules may change, the league may dissolve, managers may leave, the NBA role may change, and forecasts become less reliable with horizon. The weight $\delta_t$ should therefore express both the chosen competitive preference and, separately where possible, league-continuity risk. Hiding those judgments inside a “dynasty rank” makes disagreement impossible to diagnose.

Report at least three components:

1. **Current-season value:** expected contribution above replacement now.
2. **Future contract surplus:** the expected value above the future keeper cost, by season and scenario.
3. **Option and friction value:** the ability to decline, trade, or wait, minus keeper-slot, roster, transaction, and liquidity costs.

Keep those columns visible before combining them. A rebuilding horizon may weight later seasons more heavily; a contending horizon may prioritize current payoff. Neither weighting changes the underlying forecast. It changes the objective. A fair public framework can show both without pretending to know a private manager's preference.

## Trade value and keeper value are related but distinct

Keeper surplus can make a player attractive in trade, but trade value depends on what counterparties believe, need, and are permitted to exchange. A league may prohibit offseason trades, attach keeper rights to draft history, restrict traded salaries, or make a player ineligible after a waiver transaction. Even where rights transfer cleanly, market value is not automatically equal to modeled value.

For a trade, compare both complete rosters after the transaction, the exact keeper rights transferred, and the best uses of any opened slot or acquired pick. [[Two-for-one trade valuation in fantasy basketball]] shows why the extra roster position and replacement path belong in the arithmetic. Do not add a public dynasty rank to a redraft projection: the dynasty number may already capitalize future production, scarcity, and trade expectations, creating double-counting.

The same distinction matters at the keeper deadline. Selecting a player preserves his rights but may remove draft flexibility. Declining a keeper does not necessarily mean the player is bad; it means the package of player plus required cost did not beat the alternative package. If keeper declarations affect opponents' boards, information timing can matter, but only within the league's actual deadline and disclosure rules.

## Alternatives that must be compared

A keeper decision should include more than keep versus release:

- keep the player at the stated cost;
- retain a different eligible player in the limited slot;
- use fewer than the maximum keepers if allowed;
- preserve the pick or auction dollars for the open draft;
- trade the player or keeper right if authorized and legal;
- retain temporarily for information, if the deadline has not passed and no cost is created;
- choose a portfolio with lower expected value but materially better downside protection.

The no-keeper path is especially important when the apparent surplus is smaller than projection uncertainty. Preserving access to the draft pool and avoiding a locked roster construction can be valuable. Optionality is not an excuse for indecision, however: once the declaration deadline passes, the right expires.

## A reproducible workflow

### 1. Freeze the rules and information date

Save the keeper count, eligibility, costs, escalation, tenure, pick order, traded selections, roster protections, deadline, scoring, and commissioner interpretations. Timestamp projections and market data. Mark missing rules as unresolved rather than guessing.

### 2. Build current-season distributions

Project availability, playable games, minutes, rates, and category or points output on common assumptions. Compare against the live league's feasible replacement level.

### 3. Build future scenarios

For each controlled year, model role-growth, stable-role, decline, injury, and loss-of-role branches where supported. Keep probabilities separate from the outcome values. Widen uncertainty with horizon.

### 4. Reconstruct the alternative market

Estimate which players will be protected, who enters the draft, what the exact forfeited pick could buy, or what post-keeper auction prices might be. Use ranges when other managers' selections are unknown.

### 5. Price all constraints once

Subtract explicit salary or pick cost, keeper-slot shadow price, roster carrying cost, lost liquidity, and binding contract risk. Credit the ability to decline a future year or trade rights only where the rules allow it. Avoid counting the same scarcity or inflation effect in several terms.

### 6. Compare complete portfolios

Optimize sets of keepers rather than ranking each independently. Test positional access, category covariance, draft paths, and downside. Display present and future components separately before applying a declared horizon weight.

### 7. Define update triggers

Name the injury report, NBA transaction, rotation evidence, league ruling, keeper declaration, or projection revision that would change the result. Archive the decision state for later calibration.

## Why it matters

Separating keeper from redraft value prevents three expensive conceptual errors. First, it stops managers from treating youth as free value when development requires time and roster capacity. Second, it reveals genuinely valuable contracts: a merely good current player can be an exceptional keeper when his cost is far below the alternative market. Third, it prevents current production and future surplus from being blended into one rank that cannot explain itself.

The framework also makes disagreements tractable. Two managers may agree on a player's next-season projection and disagree because one expects a larger salary escalation, a weaker draft pool, a shorter league horizon, or a higher keeper-slot opportunity cost. Those are inspectable assumptions. “Keeper rank 22” is not.

Most importantly, the method preserves the difference between a player and the rights attached to him. Redraft leagues largely price a season of production. Keeper leagues price production plus a contingent, rule-created claim on later seasons. The constitution determines the claim; forecasts determine the possible payoff; replacement and portfolio constraints determine whether the surplus is real.

## Sources

- [ESPN Fan Support, “Keeper Leagues”](https://support.espn.com/hc/en-us/articles/360000991711-Keeper-Leagues) — official description of keeper limits, opening or original-round assignment, salary adjustment, and lock dates; accessed July 10, 2026.
- [ESPN Fan Support, “Custom Keeper Rounds (LM Leagues)”](https://support.espn.com/hc/en-us/articles/46837827894932-Custom-Keeper-Rounds-LM-Leagues) — official custom round and pick assignment mechanics and constraints; accessed July 10, 2026.
- [Yahoo Help, “Set up a Keeper League”](https://help.yahoo.com/kb/fantasy-basketball/set-keeper-league-sln6111.html) — official basketball keeper setup, declaration, commissioner approval, draft-pick assignment, and salary-cap assignment; accessed July 10, 2026.
- [Yahoo Help, “Select Keepers in the Yahoo Fantasy app”](https://help.yahoo.com/kb/SLN36794.html) — official statement that commissioner settings control deadlines and draft entry of selected keepers; accessed July 10, 2026.

The official sources establish possible platform mechanics, not universal league rules or player values. The valuation decomposition, opportunity-cost framework, scenario method, and portfolio workflow are transparent analytical constructions that must be parameterized and tested against the actual constitution.

## Open questions

- How accurately can a pre-declaration model estimate the post-keeper draft pool when other managers' choices are private?
- What is the best way to estimate the shadow price of a limited keeper slot across teams with different competitive horizons?
- How should league-continuity risk and ordinary preference for present value be reported separately?
- When do salary inflation and player scarcity become too endogenous for a simple one-pass auction adjustment?
- Can archived keeper decisions separate player-forecast error from mistakes in draft-pool reconstruction, cost interpretation, and portfolio fit?
