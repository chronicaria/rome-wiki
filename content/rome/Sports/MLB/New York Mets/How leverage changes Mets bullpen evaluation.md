---
title: How leverage changes Mets bullpen evaluation
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, pitching, bullpen, analytics]
as_of: 2026-07-10T06:00:00-04:00
desk: New York Mets
review_after: 2026-07-17
---

Evaluating the Mets bullpen requires asking which game state, runners, hitters, rest constraints, and future innings each reliever was assigned—not merely whether he protected the ninth or posted a low ERA.

Up: [[New York Mets 2026]]

Related: [[New York Mets 2026 rotation and bullpen map]] · [[Why Mets reliever performance is volatile]] · [[How to read Mets Statcast changes without overfitting]] · [[New York Mets 2026 health and workload ledger]] · [[New York Mets 2026 roster and transaction ledger]]

## The decisive inning is not always the ninth

Baseball shorthand makes a bullpen look like a ladder: middle reliever, setup man, closer. Leverage turns that ladder into a changing map. MLB defines **Leverage Index (LI)** as the importance of an event measured by how much win probability could change, with 1.0 representing a neutral situation. A tie game with runners aboard late has much more room to swing than an empty-base plate appearance in a game separated by six runs. In that sense, leverage describes the potential consequence attached to the situation before the result is known; it is not a grade of the pitcher who happens to enter.

That distinction changes how a Mets bullpen should be evaluated. A reliever who works the ninth with a three-run lead may receive the save and the familiar “closer” framing, while another who enters in the seventh with the bases loaded and retires the heart of the order may have solved the game’s more dangerous problem. The first pitcher’s inning remains valuable. The point is that inning number and leverage are related but not identical.

Leverage also separates three questions that are often collapsed:

1. **What happened?** The official line records outs, runners, runs, and the decision statistics attached to the appearance.
2. **How difficult was the assignment?** Entry score, inning, base-out state, opponent pocket, and leverage describe the immediate problem.
3. **Was the deployment good?** That requires information about alternatives, rest, handedness, expected future innings, and availability—some of which is not public.

A clean Mets evaluation can answer the first question exactly and approximate the second from official play-by-play. It can discuss the third only with stated limits. It should not treat a pitcher’s absence as proof that he was unavailable, or assume the manager’s nominal best arm could have pitched merely because he did not appear.

## Leverage is state, not drama

LI is useful because it formalizes something spectators already sense: not every plate appearance can change the game equally. Yet “dramatic” is not a sufficient definition. A loud home crowd, a famous hitter, or the ninth inning can feel important without producing the largest possible change in win probability. Conversely, a sixth-inning confrontation can be the game’s leverage peak if the score is close, runners are aboard, and the opponent’s best hitters are due.

The base-out state is central. None on with two outs leaves relatively little immediate scoring potential. Bases loaded with none out presents several paths to multiple runs. Score and inning change what those runs mean: allowing one run with a four-run lead in the fourth differs from allowing one in a tie game in the eighth. Home-field status matters late because the number and order of remaining offensive chances differ. LI rolls these features into a scale derived from potential win-probability movement.

It does **not** tell us whether the pitcher threw well, whether the manager chose correctly, or whether the result was deserved. A hard-hit line drive caught at a defender can end a high-LI threat. Three weakly struck balls can produce two runs. LI identifies the size of the decision point; pitch execution and batted-ball outcomes explain how it resolved.

Nor should average LI be read as a pure talent ranking. Managers create the sample by assigning roles. Winning teams generate more late leads than losing teams. A reliever promoted after a strong month may see his average LI rise because the club now trusts him. Another may work low-leverage innings because the preferred options pitched on consecutive days. The statistic therefore mixes opportunity, team game states, availability, and managerial belief. It can show which problems a pitcher received, but not why every alternative was rejected.

For Mets analysis, use LI alongside the actual entry state rather than as a replacement for it. “Entered with an LI of 2.1” is compact but opaque to many readers. “Entered in a tie game with runners on first and second, one out, and the top of the order due” explains the baseball problem. Reporting both allows comparison while preserving meaning.

## Inherited runners split responsibility across pitchers

MLB defines an **inherited runner** as a runner already on base when a relief pitcher enters. If that runner scores, the run is not charged to the entering reliever’s ERA. The rule keeps earned-run responsibility attached to the pitcher who put the runner aboard, but it means ERA does not fully describe what the reliever did after entering.

Suppose a Mets starter leaves with runners on first and third and one out. The reliever allows a sacrifice fly, then strikes out the next hitter. One run scores, the threat ends, and the reliever’s ERA is unchanged. That appearance may be a partial success: he conceded one runner but prevented a multi-run inning from expanding. If he instead allows two doubles, the inherited runners still do not enter his ERA even though his pitches materially changed the game. The reverse problem occurs when a reliever leaves his own runners for a successor; his ERA can worsen after he is out of the game.

Raw inherited-runner strand rate improves the description but still needs context. Inheriting one runner at first with two outs is a substantially easier starting state than inheriting the bases loaded with nobody out. Even within the same base-out state, runner speed, batter quality, handedness, score, and defensive alignment matter. A pitcher asked to trade a run for an out with a multi-run lead has a different objective from one trying to preserve a tie.

The useful appearance record therefore contains:

- entry inning and score margin;
- bases occupied and outs;
- inherited runners and how many scored;
- batters faced and the portion of the lineup encountered;
- pitcher and batter handedness;
- pitches, strikes, walks, strikeouts, and contact quality; and
- runners left for the next pitcher.

This prevents two opposite errors. ERA-only evaluation can credit a reliever for a “scoreless” appearance in which he allowed someone else’s runners to score. A strand-rate-only evaluation can punish a pitcher equally for yielding one runner from first with nobody out and one from third with nobody out, although the expected outcomes differ. Leverage and base-out state make inherited-run performance interpretable.

## Availability makes the hierarchy move each day

A bullpen depth chart is a useful season map but a poor description of tonight’s menu. Relievers may be unavailable or less desirable after consecutive-day use, long outings, high pitch counts, travel, recent activation, or unrecorded warm-ups. Public box scores document game pitches. They do not reliably document every time a pitcher got hot without entering, and they do not reveal private treatment or a manager’s complete pregame availability conversation.

The Mets’ July 1–9 usage illustrates the visible portion of that constraint. In the official game records summarized in [[New York Mets 2026 rotation and bullpen map]], A.J. Minter appeared four times from July 1 through July 7. Brooks Raley pitched July 5, 6, and 8. Luke Weaver worked July 5 and 6. Devin Williams appeared July 5, 6, and 9. These are observed workloads, not proof of availability on intervening dates. They show why a static ordering such as Williams–Minter–Weaver–Raley cannot be copied mechanically into every close game.

Starter length changes the same menu. On July 7, the Mets used Cionel Pérez as an opener, Kodai Senga for three innings, and four additional pitchers to finish a 16–12 loss; Austin Warren was injured without recording an out. On July 8, Christian Scott supplied five innings, after which Raley, Tobias Myers, and Xzavion Curry covered four. On July 9, Sean Manaea’s seven innings allowed the Mets to use only Huascar Brazobán and Williams in a 7–3 win. The final game did more than produce a favorable starter line: it conserved most of the bullpen after two days of heavy demand.

This is why usage must be evaluated across days as well as within games. Spending a preferred reliever in a medium-leverage inning today may reduce the club’s options tomorrow. Saving him today may prove irrelevant if tomorrow is a blowout or an off day. The manager makes that decision under uncertainty. An analyst can reconstruct the schedule, recent pitches, and recorded appearances, but should label any claim about hidden warm-up burden or declared unavailability as unknown unless the club states it.

Roster transactions are part of availability. After the July 7 game, the Mets placed Warren on the 15-day injured list, designated Matt Seelinger for assignment, recalled Myers, and selected Curry. Myers threw two innings July 8 and was optioned July 9, when Dan Hammer was selected. That sequence shows a “fresh arm” function that a season ERA table cannot capture. Myers’s value to that two-day roster state was partly the ability to absorb outs immediately. Curry and Hammer’s future hierarchy could not be inferred from their selection alone as of the cutoff.

## Handedness changes the batter pocket

The three-batter minimum prevents the old pattern of using most relievers for a single matchup, subject to the inning-ending and injury exceptions described by MLB’s official glossary. It does not remove platoon strategy. It changes the unit from “one hitter” to a planned pocket of at least three batters or the remainder of the inning.

The manager therefore looks ahead. If two dangerous left-handed hitters are separated by a right-handed hitter, a left-handed reliever might still be the best choice for the three-batter sequence. But the middle matchup is part of the cost. A switch-hitter’s likely batting side, pinch-hit options, and the bullpen’s remaining left/right balance all affect the decision. The question is not simply “Did a lefty face a lefty?” It is “Which three-or-more-batter lane did this pitcher receive, and what alternatives did it preserve?”

As of the July 10 06:00 EDT cutoff, the official active-roster and transaction reconstruction placed left-handers Minter, Raley, and Pérez among the Mets’ short-relief options. Recent use showed different functions rather than interchangeable “lefty specialist” labels: Minter and Raley worked short late or bridge assignments, while Pérez also opened the July 7 staff game. Right-handed Williams, Weaver, Brazobán, Curry, and Hammer supplied different leverage, bridge, or length possibilities, with Curry and Hammer’s durable roles still unestablished.

Pitcher handedness alone does not establish matchup quality. Arsenal matters. A changeup may create reverse-split potential; a breaking ball’s movement and location can produce different swing decisions by batter side. Actual platoon evidence should report batters or pitches in each split because reliever samples become tiny quickly. Ten plate appearances against left-handed hitters cannot support a confident true-talent conclusion merely because the observed result is extreme.

This is where Statcast can refine the evaluation. MLB’s Statcast glossary defines tracked pitch characteristics and outcomes including velocity, spin, movement, exit velocity, launch angle, barrels, and expected statistics. Those measures can test a mechanism: did the reliever’s primary pitch retain velocity and shape, did he get chases, did he locate appropriately for the batter side, and what contact resulted? They do not make the leverage problem disappear. A pitcher can execute his pitch and lose a high-leverage plate appearance; he can miss his target and escape.

## Role volatility can masquerade as performance volatility

Reliever statistics are already noisy because the workloads are small. Role changes add a selection effect. A pitcher who succeeds in low leverage may be promoted to tougher assignments against stronger lineup pockets. His outcomes can worsen even if his underlying pitches do not. Another who struggles may be moved to lower leverage, where he faces different incentives and often enters with cleaner bases. Comparing the two periods without describing the job change can mistake a harder test for declining ability.

Roles also move when the rotation fails to cover innings. A nominal setup arm may be needed in the sixth because the starter left a threat. A middle reliever may protect a one-run lead because the preferred arms worked the previous two days. A bulk pitcher may be held out of a close game because he is the only realistic coverage for tomorrow’s opener plan. The assignment reflects the whole staff, not only the individual.

This matters in the Mets’ current configuration because the July 1–9 map contained four conventional starter lanes and a flexible fifth-game lane. When Freddy Peralta or Scott exited after four or five innings, relief had to purchase more outs before the late innings. Pérez and Senga together covered only four innings in the July 7 opener-follower arrangement. In such games, “Why wasn’t the closer used?” may be less revealing than “Could the club reach its preferred short relievers without exhausting them?”

Saves and holds remain valid record statistics, but they encode opportunity and rule-defined role. They should not be treated as comprehensive quality measures. A tie-game reliever cannot earn a save, and a pitcher who faces the opponent’s best pocket before the ninth may receive neither a save nor a hold despite handling the pivotal sequence. Win Probability Added can describe how results changed the game’s win expectancy, but it is outcome-based: it credits the result, including the effects of batted-ball placement and defense. LI describes the size of the situation before that result. Using both clarifies the difference between assignment and consequence.

## A practical Mets evaluation card

The strongest review is an appearance-level ledger aggregated only after the jobs have been described.

**1. Freeze the sample.** State the exact date range, games, innings, batters faced, and pitches. This article’s Mets context ends at 06:00 EDT on July 10, after the July 9 game. It does not incorporate later roster moves or games.

**2. Record entry and exit state.** Note inning, score, bases, outs, inherited runners, runners bequeathed, and the upcoming lineup pocket. This gives the official pitching line its missing situational frame.

**3. Describe leverage without circularity.** Report LI or the underlying game state before evaluating the result. Do not call an appearance “high leverage” merely because the pitcher failed or because the inning was late.

**4. Reconstruct visible availability.** Count recent appearances, pitches, multi-inning work, consecutive days, and transaction status. Call unrecorded warm-ups and private health information missing data, not zero workload.

**5. Test execution.** Use strike rate, first-pitch strikes, walks, strikeouts, chase, whiffs, pitch velocity and shape, location, and contact quality. Give the denominator for every rate. Follow [[How to read Mets Statcast changes without overfitting]] when choosing windows.

**6. Separate matchup from handedness label.** Identify batter side, pitch mix, and the full three-batter pocket. Do not infer a stable platoon skill from a handful of batters.

**7. Distinguish record, diagnosis, and forecast.** “Allowed two inherited runners to score” is a record. “Missed arm-side with three fastballs” is a pitch-location observation. “Fatigue caused the misses” is a diagnosis that needs evidence. “Should be removed from leverage work” is a decision or forecast.

**8. Evaluate the staff decision conditionally.** Ask who else appeared rested, which innings remained, whether length was required, and which hitter pocket was due. Then state what remains unknowable from public evidence.

This card allows two evaluations to coexist. A reliever can have harmed the Mets in a crucial game and still show a process that does not justify a permanent demotion. He can escape with a clean ERA and still show deteriorating strike throwing or contact quality. Games already played count in the standings; forecasting the next appearance demands broader evidence.

## Sample and attribution limits

This is an explanatory framework, not a computed ranking of Mets relievers. It uses official MLB definitions and the dated July 1–9 Mets appearance, transaction, roster, and box-score context already verified in the linked staff map. It does not calculate player-level LI, Win Probability Added, inherited-run expectancy, platoon talent, or availability probabilities. Any such table should preserve the event feed, query time, run-expectancy or win-expectancy model, park and opponent filters, and treatment of extra innings.

The observed nine-day window is too small to establish stable skill or permanent roles. Appearance totals are clustered within games and days, not independent trials. Pitch-level samples are nested within batters and outings. Handedness splits spend the sample again. Official box scores omit warm-ups that did not lead to entry, private medical status, and most internal availability discussions. The role descriptions here—primary leverage, bridge, matchup, opener, bulk, and fresh length—are analytical summaries of observed use, not quotations of an official Mets depth chart.

Current-roster claims are frozen at **2026-07-10 06:00 EDT**. The official live roster can change after that time, so dated transactions control historical reconstruction. The named roster context and July 1–9 game sequence are attributed to MLB’s roster, transaction logs, StatsAPI schedule, and official box scores. Interpretations about what those patterns mean are this committee’s synthesis.

## Why it matters

Bullpens decide many games through situations that standard inning labels conceal. For the Mets, leverage analysis makes clear that bullpen quality is not only a collection of ERAs and save totals. It is the ability to match rested pitchers to the largest threats, strand inherited runners, navigate handedness pockets under the three-batter rule, and still cover the remaining outs today and tomorrow.

That view improves both criticism and forecasting. It prevents an automatic ninth-inning hierarchy from receiving credit for problems solved earlier, but it also prevents hindsight from pretending every failed choice had an obvious available alternative. It recognizes that a long Manaea start can improve the next two games’ bullpen options, that a one-day Myers shuttle can have real coverage value, and that Minter, Raley, Pérez, Williams, Weaver, and Brazobán may occupy different lanes from one night to the next.

The central question is therefore not “Who is the Mets closer?” It is: **given the base-out state, opponent pocket, rest ledger, handedness, and innings still to cover, did the Mets assign the best publicly supportable option—and what evidence would change that judgment?**

## Sources

- [MLB Glossary — Leverage Index](https://www.mlb.com/glossary/advanced-stats/leverage-index) — official definition of LI, its 1.0 neutral baseline, and its relationship to potential win-probability change; accessed July 10, 2026.
- [MLB Glossary — Inherited Runner](https://www.mlb.com/glossary/standard-stats/inherited-runner) — official definition and explanation that inherited runners who score are not charged to the entering reliever’s ERA; accessed July 10, 2026.
- [MLB Glossary — Win Probability Added](https://www.mlb.com/glossary/advanced-stats/win-probability-added) — official outcome-based win-probability framework; accessed July 10, 2026.
- [MLB Glossary — Three-Batter Minimum](https://www.mlb.com/glossary/rules/three-batter-minimum) — official rule and inning-ending/injury qualifications; accessed July 10, 2026.
- [MLB Statcast glossary](https://www.mlb.com/glossary/statcast) — official definitions and scope for pitch tracking, contact quality, and expected metrics; accessed July 10, 2026.
- [MLB — Mets active roster](https://www.mlb.com/mets/roster/) — official live roster checked against dated transactions; snapshot boundary July 10, 2026, 06:00 EDT.
- [MLB — Mets transactions, July 8, 2026](https://www.mlb.com/transactions/2026/07/08/mets) — Warren IL placement, Seelinger designation, Myers recall, and Curry selection.
- [MLB — Mets transactions, July 9, 2026](https://www.mlb.com/transactions/2026/07/09/mets) — Myers option and Hammer selection, controlling the closing roster snapshot.
- [MLB StatsAPI — Mets schedule, July 1–9, 2026](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=121&startDate=2026-07-01&endDate=2026-07-09&hydrate=probablePitcher,linescore) — official game identifiers, dates, and results.
- MLB StatsAPI official box scores: [July 1](https://statsapi.mlb.com/api/v1/game/822791/boxscore), [July 3](https://statsapi.mlb.com/api/v1/game/824904/boxscore), [July 4](https://statsapi.mlb.com/api/v1/game/824903/boxscore), [July 5](https://statsapi.mlb.com/api/v1/game/824902/boxscore), [July 6](https://statsapi.mlb.com/api/v1/game/824900/boxscore), [July 7](https://statsapi.mlb.com/api/v1/game/823607/boxscore), [July 8](https://statsapi.mlb.com/api/v1/game/823605/boxscore), and [July 9](https://statsapi.mlb.com/api/v1/game/823606/boxscore) — official appearance, innings, pitch-count, and entry-sequence context.
- Tom Tango, [“Relievers: Crucial Situations”](https://tangotiger.net/optrelief.html) — primary author explanation of the leverage framework and relief deployment; accessed July 10, 2026.

## Open questions

- What does an appearance-level Mets table show after adjusting inherited-run outcomes for exact base-out state and LI?
- How much did the July 1–9 leverage distribution reflect deliberate role choice versus the game states and availability the Mets happened to receive?
- Which Mets relievers show meaningful handedness differences after pitch mix, batter quality, and adequate denominators are considered?
- Can a reproducible public workload ledger incorporate warm-up evidence without pretending that unobserved bullpen activity is zero?
- How should future reviews value preserving tomorrow’s bullpen against using the best available arm at today’s leverage peak?
