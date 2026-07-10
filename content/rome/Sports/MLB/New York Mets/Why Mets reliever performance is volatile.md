---
title: Why Mets reliever performance is volatile
created: 2026-07-09
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, pitching]
as_of: 2026-07-09
desk: New York Mets
review_after: 2027-03-01
---

Relief performance looks unusually unstable because a few high-impact events dominate a small workload, while role, leverage, inherited runners, health, and genuine pitch-quality changes move underneath the headline results.

Up: [[New York Mets 2026]] · Method: [[How to read Mets Statcast changes without overfitting]] · Roster context: [[Injured-list moves and Mets roster mechanics]]

## Volatility is a question before it is a verdict

Calling a Mets reliever “volatile” can mean at least three different things. His results may swing within a season. His results may change sharply from one season to the next. Or the club’s bullpen as a group may feel unreliable because different pitchers occupy important roles from week to week. Those are related but distinct claims, and each needs a different test.

The common mechanism is exposure. A regular starting pitcher may work roughly three times as many innings as a one-inning reliever. A qualified hitter accumulates hundreds of plate appearances. A reliever can finish a full season with only 50 to 70 innings, and a monthly split may contain ten. One home run with two runners aboard in a ten-inning month adds 2.70 to that month’s ERA by itself. A clean inning the next night does not erase the runs; it only enlarges the denominator slightly.

This arithmetic makes real events look like permanent identities. Three poor appearances can turn a scoreless April into a disastrous May. Three hard-hit balls caught at the warning track can preserve a sparkling ERA. Neither run should be ignored, but neither should be treated as a complete measurement of talent.

For the Mets, the practical lesson is not that bullpen results are meaningless. Games already played cannot be replayed, and late runs have real standings consequences. The lesson is to separate **description**—what happened—from **diagnosis**—why it happened—and **forecast**—what is likely next. ERA and saves describe parts of the record. Pitch traits, strike-throwing, contact quality, health, role, and opponent context help diagnose it. A forecast must combine both while admitting how little data a relief season contains.

## Why a few events can overwhelm ERA

MLB defines ERA as nine times earned runs divided by innings pitched. That familiar rate is especially sensitive for relievers because its denominator grows slowly. Suppose a Mets reliever has allowed two earned runs in 12 innings, a 1.50 ERA. If he records one out and allows four earned runs in his next appearance, his ERA rises to 4.38. His underlying ability may have changed, but the statistic does not prove that; one cluster of events changed the numerator by 200 percent while adding only one-third of an inning.

Clustering matters as much as totals. A single, a walk, and a home run in one inning produce three runs. Put the same events in three separate innings and the pitcher might allow only one. ERA records the actual sequence, correctly for the game ledger, but sequence is not wholly controlled by the pitcher and is not reliably repeated in tiny samples. This is why a reliever can have similar strikeout, walk, and home-run rates in two periods yet very different ERAs.

The reverse is also true. A pitcher can walk the bases loaded and escape when a line drive finds a defender. His ERA improves, even though the process was dangerous. Another can allow a softly hit ground ball through the infield after two routine singles and be charged with runs. Results belong in an evaluation, but they should not be the only evidence of whether the next inning will look the same.

WHIP narrows the question to walks and hits per inning, as MLB’s glossary defines it, but it also has limitations. It treats a walk and a home run as one baserunner apiece, excludes hit batters, and depends on whether batted balls become hits. A reliever’s WHIP can therefore move with defense, scorer decisions, and batted-ball placement even when his pitch execution changes less dramatically.

## The inherited-run accounting problem

Relievers often enter unfinished situations, which makes responsibility harder to read from ERA. MLB defines an inherited runner as a baserunner already on base when the relief pitcher enters. If that runner scores, the run is charged to the pitcher who put him on base, not to the reliever who allowed him to score. Conversely, a reliever who exits with runners aboard remains responsible if a later pitcher lets them cross the plate.

That rule is necessary for official scoring, but it divides one run-prevention sequence across multiple pitchers. Imagine a Mets reliever entering with runners on first and third and one out. He allows a sacrifice fly and then gets a strikeout. His personal ERA is untouched, although one of his two batters produced a run. If he instead allows an infield hit before a double play, the inherited runner may still score without an earned run appearing in his line. At the other edge, he can leave after a walk and a soft single; a successor’s home run can charge two runs to his ERA after he has left the mound.

Inherited-runner strand rate is useful context, but it is itself volatile. The opportunities are few, the base-out states differ, and the quality of the inherited runners and batters differs. Entering with a runner on first and two outs is not the same assignment as entering with the bases loaded and nobody out. A raw strand percentage collapses those situations into one number.

The better Mets review records the entry state, batter handedness, score, inning, and number of outs. It then asks what the pitcher controlled: strike throwing, pitch selection, swings and misses, and quality of contact. The official line still tells who was charged. The situational record tells what problem the reliever was asked to solve.

## Leverage magnifies perception, not necessarily skill

Late-inning relief is remembered through leverage. Tom Tango’s Leverage Index framework measures how much a plate appearance can change win expectancy relative to an average situation. A tie game in the ninth with runners aboard has far more leverage than a six-run game in the sixth. The same walk can therefore carry radically different consequences.

This creates two kinds of volatility. First, a few mistakes in high leverage change team win probability more than many clean low-leverage innings restore it. Second, managers do not assign situations randomly. They promote pitchers who are throwing well and move struggling pitchers into lower leverage. A reliever’s average leverage is partly an evaluation of trust and partly a product of the games the team happens to play.

Saves and holds are role statistics built around those assignments. MLB awards a save to a qualifying finishing pitcher who preserves a win; a hold credits a reliever who enters a save situation, records an out, and preserves the lead for a later pitcher. These statistics answer useful historical questions, but neither isolates pitching quality. A closer cannot earn a save without a save opportunity. A setup reliever cannot record a hold in a tie game, even if he retires the opponent’s best hitters in the eighth. A middle reliever may face the game’s decisive pocket without qualifying for either.

For a Mets bullpen, then, “three blown saves” is a real record of failed opportunities, not a complete talent measure. Review the pitch-level process and the difficulty of the situations. Also review whether the pitcher’s role changed. Comparing a low-leverage April to a high-leverage June without acknowledging assignment is comparing different jobs.

## Some instability is genuine

Small samples are not a universal excuse. Relief pitchers can change quickly because their margins are thin and their arsenals are concentrated. Many rely heavily on two pitches, maximum-effort velocity, and sharp location. A small loss of fastball speed can reduce the separation between pitches. A slight change in release point can alter both movement and command. If one offering stops earning strikes or chases, the pitcher may have no third pitch that can safely absorb the lost usage.

The short-burst role can make velocity a larger part of the package. Research published by FanGraphs in 2013 found lower year-to-year correlations for several reliever metrics than for starter metrics, including strikeout rate, swinging-strike rate, walk rate, and home-run-to-fly-ball rate. That study is evidence about a historical sample, not a law that every reliever must regress. Its important point is that even some process rates recur less strongly for relievers, not merely that ERA is noisy.

Health and workload can move beneath public statistics. Relievers warm up without entering games, pitch on consecutive days, travel, and sometimes change availability without a formal injured-list move. Public game logs do not capture every warm-up or treatment. A velocity decline can indicate fatigue, injury, an intentional pacing choice, a different pitch classification, or ordinary measurement variation. It should trigger a question, not a diagnosis.

Roster churn adds another layer. An option, injured-list placement, designation for assignment, or new selection can change who absorbs low-leverage innings and who must cover consecutive days. The rules in [[Injured-list moves and Mets roster mechanics]] explain why an active-roster opening and a 40-man-roster opening are not the same. Analytically, those moves also change comparison groups. “The Mets bullpen in May” may not contain the same pitchers, roles, or workload distribution as “the Mets bullpen in June.” Team-level ERA can swing because individuals changed, because their performance changed, or both.

## What Statcast can clarify

Statcast tracks pitch velocity, spin, movement, release characteristics, and batted-ball outcomes, among other measures. These data let a reader look beneath ERA, but they do not eliminate sample problems. The correct question is not “Which advanced number proves the reliever is good?” It is “Which observable mechanism could explain the result change, and does the evidence support it?”

Start with opportunity and strike throwing:

- batters faced, pitches, innings, and days of rest;
- first-pitch strike and zone rates;
- walk and hit-by-pitch rates;
- chase and whiff rates, with their denominators stated; and
- counts reached, because a pitch thrown mainly with two strikes has a different task from one used to get ahead.

Then inspect the arsenal:

- pitch usage and any classification changes;
- velocity distributions rather than only an average;
- horizontal and vertical movement;
- release height, release side, and extension;
- platoon usage against right- and left-handed batters; and
- location by pitch type and count.

Finally inspect contact:

- batted-ball count;
- exit velocity and launch-angle distributions;
- hard-hit and barrel rates;
- ground-ball and fly-ball mix; and
- expected outcomes such as xwOBA or xERA, with their model definitions and coverage limits.

MLB describes xERA as translating a pitcher’s xwOBA against into an ERA scale. Expected outcomes use the quality of contact and, for some batted balls, sprint speed; they are estimates of deserved outcomes under the model, not promises about the future. A reliever can run an ERA above xERA because of sequencing or batted-ball outcomes, but that gap does not automatically mean “bad luck.” Walks and strikeouts still matter, parks and opponents matter, the estimate has uncertainty, and a small number of batted balls makes the contact distribution fragile.

The companion note [[How to read Mets Statcast changes without overfitting]] provides the full reproducibility standard. Preserve the query dates and filters. Report event counts. Compare nonoverlapping windows chosen for a baseball reason, such as a documented role or arsenal change, rather than searching many endpoints for the most dramatic split.

## A four-layer way to evaluate a Mets reliever

An effective review can be built in four layers.

**1. Record the outcomes.** Report ERA, runs, baserunners, home runs, saves or holds where relevant, inherited runners, and the number of innings or batters faced. State the exact date range. Do not hide blown leads merely because the sample is small.

**2. Reconstruct the role.** Record inning, score margin, leverage or base-out state, days of rest, consecutive-day usage, and whether the pitcher entered mid-inning. Identify changes from closer to setup, multi-inning to one-inning, or low to high leverage. Separate availability facts from inference; absence from a game is not proof a pitcher was unavailable.

**3. Test the process.** Compare strikeouts, walks, hit batters, whiffs, chase, zone rate, velocity, movement, release, pitch mix, and contact quality. Use counts, not only percentages. Ten whiffs in 20 swings and 50 in 100 swings share a rate but not the same evidentiary weight.

**4. State competing explanations.** A result swing could reflect changed stuff, changed command, opponent mix, platoon exposure, defense, park, sequencing, health, role, or chance. Rank these explanations by evidence. Do not convert a medical possibility into a medical claim, or a statistical residual into luck with certainty.

This framework prevents two opposite errors. The first is overreaction: declaring a reliever broken after a few runs. The second is complacency: dismissing every warning sign as small-sample noise. If velocity, release, strike throwing, and opponent contact all move together across a meaningful set of pitches, the evidence of a real change is stronger. If ERA moves while those inputs remain broadly stable, the case for a persistent skill change is weaker—but still not disproved.

## Comparing periods without fooling yourself

Monthly splits are convenient and often arbitrary. Baseball does not reset on the first day of a month. A better comparison begins with a proposed mechanism and a dated event: a pitch was added, a role changed, a pitcher returned from the injured list, or release characteristics shifted. Use a pre-period and post-period that do not overlap, and disclose why those endpoints were selected.

Avoid the survivor trap. A study of “qualified relievers in consecutive seasons” omits pitchers who were injured, demoted, released, or moved into starting roles. Those exits are part of bullpen volatility. At the same time, including every pitcher with one appearance creates a different selection problem. Define the population before examining results and report who is excluded.

Regress rates toward an appropriate baseline when forecasting. That does not mean mechanically assuming everyone becomes league average. The useful baseline may reflect pitcher history, age, handedness, role, velocity band, arsenal, and projection-system inputs. The shorter the observed period, the more weight prior information deserves. A career-long track record should not erase a documented new pitch or velocity loss, but ten innings should not erase the track record either.

Team comparisons require the same discipline. Bullpens face different innings, parks, opponents, and starter spillover. One club may ask relievers to enter with more inherited runners because starters leave mid-inning. Another may reserve its best arm for conventional save situations. Raw bullpen ERA describes what happened; it does not isolate roster-building skill or managerial decision quality.

## What this means for Mets decisions

Bullpen construction should expect uncertainty rather than pretend to eliminate it. Because relief workloads are small and pitcher health is fragile, depth has option and roster value. The ninth-best plausible reliever can matter greatly when injuries, fatigue, extra innings, or poor performance reorder the depth chart. A bullpen plan built only around seven fixed names is less robust than one that understands the optionable and 40-man layers recorded in [[New York Mets 2026 roster and transaction ledger]].

Role decisions should also remain conditional. The best current reliever may deserve the highest-leverage batters rather than only the ninth inning, but availability, matchups, and the need to cover later outs constrain that ideal. Leverage analysis can describe the importance of assignments; it cannot know the manager’s complete availability information.

For fans and writers, the most honest vocabulary is calibrated. “He allowed six runs in his last five innings” is a fact. “His zone rate and fastball velocity also fell over 120 pitches” is evidence of a possible mechanism. “Fatigue caused the decline” is an inference requiring more support. “He will rebound” is a forecast. Keeping those sentences separate makes a Mets bullpen analysis more useful even when the future remains uncertain.

Volatility is therefore not a mysterious property that relievers either possess or escape. It is the visible combination of a small denominator, lumpy run scoring, inherited responsibility, high-leverage consequences, nonrandom roles, concentrated arsenals, health and workload, roster churn, and genuine skill change. The right response is neither blind trust in ERA nor blind trust in an expected metric. It is a layered, reproducible account of what happened, what changed underneath it, and how uncertain the next appearance remains.

## Sources

- [MLB Glossary: Earned Run Average](https://www.mlb.com/glossary/standard-stats/earned-run-average) — official ERA definition, formula, and treatment of runners left on base; accessed July 9, 2026.
- [MLB Glossary: Walks and Hits per Inning Pitched](https://www.mlb.com/glossary/standard-stats/walks-and-hits-per-inning-pitched) — official WHIP definition and exclusions; accessed July 9, 2026.
- [MLB Glossary: Inherited Runner](https://www.mlb.com/glossary/standard-stats/inherited-runner) — official inherited-run definition and ERA treatment; accessed July 9, 2026.
- [MLB Glossary: Save](https://www.mlb.com/glossary/standard-stats/save) and [Hold](https://www.mlb.com/glossary/standard-stats/hold) — official role-stat definitions; accessed July 9, 2026.
- [MLB Statcast glossary](https://www.mlb.com/glossary/statcast) — tracking system scope and definitions for pitch, contact, and expected metrics; accessed July 9, 2026.
- [MLB Glossary: Expected ERA](https://www.mlb.com/glossary/statcast/expected-era) — official xERA description and relationship to xwOBA; accessed July 9, 2026.
- Tom Tango, [“Relievers: Crucial Situations”](https://tangotiger.net/optrelief.html) — original explanation of Leverage Index and relief usage; accessed July 9, 2026.
- Bill Petti, [“Reliever Pitching Metric Correlations, Year-to-Year”](https://blogs.fangraphs.com/relief-pitching-metric-correlations-year-to-year/), *FanGraphs*, May 24, 2013 — historical comparison of year-to-year metric correlations for relievers and starters; accessed July 9, 2026.

## Open questions

- How much of apparent Mets bullpen volatility remains after adjusting each appearance for base-out state, leverage, opponent quality, park, and rest?
- Which public workload measures best approximate the unavailable cost of bullpen warm-ups that do not lead to an appearance?
- How should a forecast weight a documented pitch-shape change against a reliever’s longer career baseline?
- At what pitch or batter-faced thresholds do specific Statcast process metrics become useful enough to change a Mets role decision?
