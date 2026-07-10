---
title: Mets pitch-location strategy and attack regions 2026
created: 2026-07-10
source: llm
status: seed
tags: [baseball, mlb, mets, pitching, statcast, strategy]
as_of: 2026-07-10
---

The Mets’ 2026 location pattern is best understood as a changing set of pitch-family and count decisions—not as one club-wide heat map—and the public data supports stronger claims about *where pitches crossed the plate* than about *where the catcher intended them to go*.

Up: [[New York Mets 2026]]

Related: [[New York Mets 2026 rotation and bullpen map]] · [[Pitch-shape changes versus pitcher outcomes]] · [[How to read Mets Statcast changes without overfitting]]

## Direct summary

An MLB Statcast Search CSV extraction for Mets pitchers in regular-season games from March 26 through July 8, the latest game present when checked July 10, contains **14,095 pitches by 29 pitchers**. The staff threw 8,383 fastballs (59.5%), 3,464 breaking balls (24.6%), 2,164 offspeed pitches (15.4%), and 84 other or unclassified pitches (0.6%). Four-seamers alone accounted for 4,414 pitches; sinkers for 2,533; sweepers for 1,913; changeups for 1,759; and cutters for 1,436. Those totals describe the staff that actually pitched, including players later injured, traded, optioned, or removed from the roster. They do not describe only the July 10 active staff.

The most defensible strategic reading is conditional:

- **Pitch family:** fastballs supply the strike-access foundation; breaking and offspeed pitches create separation by changing movement, speed, and expected finishing location.
- **Count:** the same physical location means something different at 0–0, 2–0, and 0–2. Behind in the count, a pitcher usually pays a larger penalty for missing outside the zone; ahead, he can ask a hitter to chase without automatically conceding a walk.
- **Batter handedness:** platoon side changes whether a pitch moves toward or away from the hitter, which edge is arm-side or glove-side, and which shapes can plausibly begin in the strike tunnel before leaving it.
- **Attack region:** Heart, Shadow, Chase, and Waste describe increasing distance from the strike-zone center and boundary. They are outcomes of pitch location, not self-explanatory grades. A Heart fastball in a forced-strike count and a Heart slider that failed to finish arrived in the same broad region through very different mechanisms.

The extraction is exact at the pitch, family, count, handedness, and coordinate level. It is **not** reported here as an exact Heart/Shadow/Chase/Waste percentage table because the downloadable CSV documents `plate_x`, `plate_z`, the personalized `sz_top` and `sz_bot`, and the older numbered `zone` field, but does not expose a documented attack-region label for each pitch. Reverse-engineering an undocumented boundary would create false precision, especially because MLB states that `plate_x` and `plate_z` changed from front-of-plate measurement through 2025 to middle-of-plate measurement beginning in 2026. The proper next extraction should use MLB’s own region filter or a published region specification, not an invented local classifier.

## What “attack region” actually measures

MLB’s Statcast framing glossary divides the pitch plane into four broad regions. The **Heart** is safely inside the strike zone, more than a baseball’s width from an edge. The **Shadow** wraps the borders, from one baseball’s width inside the zone to one baseball’s width outside it. The interface then distinguishes **Chase** pitches farther outside and **Waste** pitches at the most extreme locations. This is more useful than a binary in-zone/out-of-zone split because pitchers live on the border: a pitch can miss the rule-book zone and still be competitive enough to earn a swing, while a nominal strike near the middle can be too hittable.

But a region is only the final coordinate bucket. It does not encode the intended target, the catcher’s setup, the movement path, the hitter’s decision, the umpire’s call, or the pitcher's reason for choosing the pitch. Statcast’s `plate_x` is measured from the catcher’s perspective and `plate_z` is the vertical crossing height. `sz_top` and `sz_bot` provide the tracked vertical strike-zone bounds for that pitch. The pitch classification, movement, release point, count, batter side, and result are separate fields. Any serious location study must keep those dimensions separate before combining them.

That distinction prevents a common analytical mistake: treating edge rate as command. **Location** is where the ball ended. **Command** is the pitcher’s ability to put it near an intended target. Without a public target coordinate, repeated Shadow locations can be consistent with excellent command, fortunate misses, catcher movement, or a broad tactical plan. Conversely, a pitch in the Waste region may be a noncompetitive miss or a deliberate two-strike fastball above the hands. The result alone cannot decide.

## The staff-level pitch-family base

The Mets’ 14,095-pitch sample can be partitioned into functional families without pretending every pitch in a family behaves alike.

| Family | Included Statcast pitch types | Pitches | Share |
|---|---|---:|---:|
| Fastball | four-seam, sinker, cutter | 8,383 | 59.5% |
| Breaking | sweeper, curveball, slider, slurve, knuckle curve | 3,464 | 24.6% |
| Offspeed | changeup, splitter, forkball, screwball | 2,164 | 15.4% |
| Other / unclassified | blank or uncommon classifications | 84 | 0.6% |

This grouping is a reading aid, not a claim that a cutter and sinker have the same job. Four-seamers generally offer the straightest path to the upper part of the zone; sinkers trade vertical carry for arm-side run and depth; cutters move glove-side relative to a four-seamer. Sweepers emphasize horizontal break, conventional sliders usually combine horizontal and vertical action, and curves change the hitter’s vertical expectation. Changeups and splitters are both offspeed, yet their movement and ideal finishing bands can differ sharply.

The staff total therefore establishes only the first layer of strategy: roughly three pitches in five were fastballs, about one in four was breaking, and about one in six was offspeed. A club heat map that pooled all three would blur the mechanism. Fastballs are disproportionately useful when the pitcher needs access to the zone or wants to change the hitter’s eye level. Breaking and offspeed pitches more often derive value by resembling a hittable trajectory before moving toward an edge or beyond it. If the latter group lands in the Heart, it may still be effective because of speed and movement—but it can also indicate a pitch that backed up or failed to finish.

The individual workloads reinforce why “Mets strategy” cannot be reduced to one plan. Freddy Peralta supplied 1,802 pitches in the extract, Nolan McLean 1,692, Sean Manaea 1,239, David Peterson 1,139, Christian Scott 1,000, Clay Holmes 828, and Kodai Senga 733. Those seven pitchers alone supplied most of the sample, but they do not share one handedness, repertoire, release geometry, role, or current roster status. Peterson had been traded by the July cutoff, Holmes was injured, and Senga’s recent use was as a multi-inning follower. The season distribution is a historical record of several staff configurations.

## Count changes the acceptable miss

The dataset contains 6,101 pitches in even counts, 3,901 in hitter-ahead counts, and 4,093 in pitcher-ahead counts when counts are classified by comparing balls with strikes. That shorthand is useful but incomplete: 0–0 and 1–1 are both “even,” although the first opens a plate appearance and the second is a leverage fork. The twelve exact pre-pitch counts should remain available in a full split.

The mechanism is the changing cost of a ball and strike. At 2–0 or 3–1, another ball moves the hitter toward or onto first base, while a strike restores the pitcher’s options. The practical attack region should therefore contract toward locations the pitcher can land. That does not mean aiming for the center. It means the pitcher must balance a larger walk penalty against the damage risk of the Heart. A well-commanded fastball to the Shadow may be ideal; a breaking pitch in the Waste region is unlikely to repair the count.

At 0–2 or 1–2, the pitcher owns more location freedom. A Chase pitch can produce a swing without entering the zone, especially when its early flight resembles the preceding strike. A Waste pitch can alter eye level or test aggressiveness, but it also spends part of the count without directly threatening a strike. “Ahead” does not make every miss good. Repeated Waste pitches can turn 0–2 into 2–2, reveal the intended finish, and force the pitcher back toward the zone.

Two-strike strategy is consequently a sequence problem. A four-seamer above the zone is more credible after the hitter has seen one at the upper edge. A changeup below the zone is more likely to draw a swing if its release and early trajectory resemble a fastball. A sweeper off the plate needs sufficient tunnel overlap to delay recognition. The attack region captures the endpoint; the preceding pitches explain why the endpoint might work.

The count split should also be read pitcher by pitcher. A starter trying to cover six innings may pursue early contact in the Heart or Shadow rather than maximize every two-strike chase. A one-inning reliever with elite swing-and-miss shapes may accept longer plate appearances in exchange for fewer hittable strikes. [[New York Mets 2026 rotation and bullpen map]] shows why that distinction mattered in July: the club’s shifting rotation and frequent need for bulk innings changed the cost of inefficient sequences.

## Handedness rotates the map

Mets pitchers faced almost perfectly balanced batter-side volume in the extract: 7,115 pitches to left-handed batters and 6,980 to right-handed batters. Equal volume does not imply equal plans. The relevant geometry depends on both pitcher hand and batter side.

From the catcher’s perspective, horizontal coordinates remain fixed, but tactical names such as “inside,” “outside,” “arm-side,” and “glove-side” change with the matchup. A right-handed pitcher’s arm-side fastball runs toward a right-handed hitter and away from a left-handed hitter; for a left-handed pitcher the relationships reverse. A breaking ball that moves away from a same-handed hitter may move toward the back foot of an opposite-handed hitter. Pooling left- and right-handed batters can make two deliberate edge clusters look like one broad central cloud.

This is why handedness must be crossed with pitch family rather than appended as a final filter. The Mets threw 4,129 fastballs, 1,640 breaking balls, and 1,295 offspeed pitches to left-handed batters; against right-handed batters, the corresponding totals were 4,254, 1,824, and 869. The largest family difference is offspeed volume: 59.8% of the staff’s classified offspeed pitches went to left-handed batters. That is an observed allocation, not proof of a universal platoon plan. The staff included pitchers of both hands, and individual repertoire quality, count, and game situation all affect the choice.

A proper handedness map therefore needs four matchup cells—right pitcher/right batter, right/left, left/right, and left/left—then separate panels for four-seamers, sinkers, cutters, breaking shapes, and offspeed shapes. Only after those splits should one ask whether the staff repeatedly attacked up, down, in, away, or on a particular Shadow edge.

## Reading each region by mechanism

### Heart

Heart pitches trade location deception for strike certainty. They can be appropriate when the pitcher is behind, when velocity or movement can beat the bat despite a central endpoint, or when early-count contact is preferable to a deep count. They become dangerous when a pitch loses its designed movement or the hitter can eliminate other shapes. A Heart rate by itself cannot separate aggression from execution failure.

### Shadow

Shadow is the boundary-management region. It supports called strikes, weak contact, and chase-adjacent swings, but those outcomes compete. A pitch just inside the edge may be a strike with limited damage exposure; one just outside can induce a chase or become a ball. Catcher receiving and the umpire matter on taken pitches. MLB’s catcher-framing model is explicitly organized around these locations, which is another reason not to attribute every called-strike pattern to the pitcher.

### Chase

Chase pitches are designed to convert uncertainty into swings. Their value depends on resemblance: release, velocity gap, movement path, and the previous-pitch sequence must keep the hitter from recognizing “ball” early. A chase rate without swing rate is incomplete, and a swing rate without contact quality is incomplete. The best question is not whether the Mets threw outside the zone, but which pitch families reached Chase from a credible strike trajectory in advantageous counts.

### Waste

Waste is the far-out region. It can be intentional—an elevated fastball, a buried breaking ball, a pitchout-like avoidance location—or simply noncompetitive. Its cost rises behind in the count and its potential sequencing value rises when the pitcher is far ahead. A high Waste share is not automatically wildness; it requires count, pitch type, and subsequent-pitch context. But persistent Waste locations without swings or strategic count leverage are lost pitches that increase workload.

## What can and cannot be inferred in 2026

The 2026 measurement change deserves explicit treatment. MLB’s CSV documentation states that `plate_x` and `plate_z` were measured at the front of home plate through 2025 and at the middle of the plate from 2026 onward to align with the Automated Ball-Strike system. A year-over-year location comparison that ignores this change risks labeling a coordinate-system break as a pitching adjustment. Any 2025–26 analysis should either use an MLB-provided harmonized region, quantify the expected coordinate effect, or restrict its central claims to within-2026 comparisons.

The sample cutoff also matters. Although this note is dated July 10, the downloaded records ended July 8. The July 9 game should be added after Statcast makes it available, then the totals should be regenerated. This is a data-latency statement, not an assumption that no pitches were thrown July 9.

Finally, a season-to-date staff aggregate is vulnerable to composition effects. A rise in one region may reflect a new pitcher, a trade, an injury, an opener game, or a role change rather than an organizational directive. The cleanest tests compare the same pitcher and pitch type across stable windows, then ask whether several pitchers changed in the same direction. Even then, a shared change is evidence consistent with coaching or game-planning influence, not direct proof of an instruction.

## Why it matters

Location is the bridge between repertoire and results. Velocity, movement, and pitch mix describe what a pitcher can throw; attack regions describe where those shapes finish; count and handedness describe why that endpoint may be rational. Keeping those layers separate helps explain whether a bad outcome came from a poor pitch choice, a noncompetitive location, a good pitch beaten by a hitter, or a roster-level constraint that forced a different pitcher into the inning.

For the 2026 Mets, that discipline is especially important because the staff changed materially. A single season heat map combines Peterson’s pre-trade work, Holmes’s pre-injury innings, Senga’s starter and follower contexts, and pitches from a long list of shuttle relievers. The useful organizational question is not “Do the Mets live on the edges?” It is: **for each pitcher and pitch family, how does the attack region change with count, batter side, role, and roster phase—and does that change improve strikes, chases, contact quality, or efficient outs?**

## Sources

- [Baseball Savant — Statcast Search](https://baseballsavant.mlb.com/statcast_search) — primary MLB interface used to extract Mets regular-season pitches; queried for March 26–July 10, 2026 and returned pitch records through July 8 when checked July 10.
- [Baseball Savant — Statcast Search CSV documentation](https://baseballsavant.mlb.com/csv-docs) — primary field definitions for pitch type, count, batter side, pitcher hand, `plate_x`, `plate_z`, `sz_top`, `sz_bot`, and the 2026 plate-coordinate measurement change.
- [MLB Glossary — Catcher Framing](https://www.mlb.com/glossary/statcast/catcher-framing) — primary MLB explanation of the Heart, Shadow, Chase, and Waste attack regions and the role of border locations in framing.
- [MLB — Casey Mize adjustments](https://www.mlb.com/news/casey-mize-adjustments-ace-tigers) — MLB explanatory context defining edges as within one baseball’s width of the strike-zone borders and illustrating why Waste pitches require count and intent context.

## Open questions

- Can MLB expose a per-pitch Heart/Shadow/Chase/Waste field or an exact published geometric specification so the 14,095 pitches can be assigned without reverse-engineering the interface?
- How do the four matchup cells—pitcher hand crossed with batter side—change the Mets’ region distribution for each major pitch type?
- Which pitchers materially changed their same-pitch location after the June roster and managerial changes, once the 2026 coordinate system is held constant?
- Do region changes produce better called-strike, chase, whiff, and contact-quality outcomes, or merely move pitches between descriptive buckets?
- How much does the answer change after the July 9 game is present in Statcast and the staff’s post-break sample becomes large enough to compare?
