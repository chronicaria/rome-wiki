---
title: New York Mets run-creation profile 2026
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, hitting]
---

Through July 10, the 2026 Mets have paired ordinary home-run power with too few times on base, making their offense dependent on Juan Soto and unusually vulnerable when the ball stays in the park.

Up: [[New York Mets 2026]] · Method: [[How to read Mets Statcast changes without overfitting]]

The cleanest description of the [[New York Mets]] offense after 94 games is not “powerless” or “unable to make contact.” It is an offense with an on-base problem. MLB's official season endpoint lists New York at 394 runs, a .235/.304/.383 batting line, 110 home runs, 290 walks and 772 strikeouts in 3,525 plate appearances. That is 4.19 runs per game, an 8.2% walk rate, a 21.9% strikeout rate and one homer per 28.7 at-bats. The Mets had a 40–54 record and a minus-56 run differential in the official standings snapshot.

Those descriptive results do not by themselves measure true offensive talent. Ninety-four games are meaningful, but the roster has changed, Francisco Lindor has played only part of the season, and several young hitters are still moving through their first extended major-league tests. Team batting average and runs also mix hitter skill with defense, park, sequencing, opponent quality and random variation. The useful question is narrower: what mechanisms in the observed offense are most plausibly creating—or preventing—runs?

## The league context: fewer entries, not an extreme strikeout crisis

For context, the same official MLB team-season endpoint was queried for all 30 clubs with the same parameters. The Mets ranked 21st in runs, 15th in home runs, 24th in walks, 26th in batting average, 29th in on-base percentage, 26th in slugging and 28th in OPS. The unweighted averages of the 30 club totals were 422.6 runs, 108.2 homers and 317.8 walks; the average rate line was approximately .244/.319/.402. Because teams had not all necessarily played the same number of games, raw-total ranks are descriptive rather than perfectly schedule-adjusted. The rate-stat comparison is more revealing: New York trailed the rough MLB club average by 15 points of OBP and 19 points of slugging.

The Mets' 110 home runs were slightly above the 30-team mean. Their 772 strikeouts were actually below the mean total of 781.3, though unequal games played again limits that comparison. Their strikeout rate of 21.9% is not evidence of an offense drowning in whiffs. Instead, a low .235 average and only 290 walks have reduced the number of runners available for those home runs. Home-run power is most valuable when preceded by on-base events; a solo homer and a three-run homer reflect the same swing but not the same run yield.

This distinction matters for diagnosis. “Make more contact” is too broad. Some Mets need more contact, but the club's aggregate weakness is not explained by strikeouts alone. A ball in play can still be a weak out. The official line shows a .275 batting average on balls in play, 26th among clubs in this snapshot, against an unweighted team mean near .289. BABIP is a result, not a pure luck meter: speed, launch angle, exit velocity, defensive positioning and park geometry all matter. Still, a suppressed BABIP alongside middle-of-the-pack homer output suggests that non-homer contact has not produced enough value.

## Discipline is concentrated rather than distributed

Juan Soto's line demonstrates what the broader lineup lacks. In 322 plate appearances, he had hit .297/.414/.579 with 21 homers, 54 walks and only 41 strikeouts. He accounted for 18.6% of the team's walks and 19.1% of its homers despite taking 9.1% of its plate appearances. His 16.8% walk rate and 12.7% strikeout rate gave the Mets both traffic and power without the usual high-strikeout tradeoff. Eight intentional walks also show that opponents could sometimes avoid him when the surrounding run expectancy made that rational.

Carson Benge supplied a different, useful shape: .269/.332/.412, 11 homers and 13 steals in 374 plate appearances. A.J. Ewing, on the active roster July 10, had a .277/.356/.446 line in 210 plate appearances. These are strong early descriptive results from young players, but they should not be treated as settled talent. Benge's .320 BABIP and Ewing's comparatively small major-league sample invite regression and adjustment questions. Their value in the current offense is nonetheless real: each supplies more on-base ability than the team baseline while adding speed and enough extra-base threat to avoid being a one-dimensional table setter.

The pressure arises elsewhere. Bo Bichette had 411 plate appearances, the most on the club, but a .299 OBP and .377 slugging percentage. His 24 walks in those 411 trips amount to a 5.8% walk rate. Brett Baty had a .295 OBP and .305 slugging percentage in 316 plate appearances; Marcus Semien, whose season line appeared in the official qualified-player response, was at .271/.341 through 318 plate appearances. Mark Vientos had 11 homers but a .256 OBP in 254 plate appearances. When several high-volume lineup positions finish plate appearances without reaching base, Soto's elite discipline cannot scale into a good team OBP.

Discipline should not be reduced to walk rate alone. It includes chase decisions, swing decisions inside the zone, count leverage and the ability to spoil competitive pitches. The official Stats API supplies pitches seen but not full chase, zone-contact or called-strike measures in this team response. New York saw 13,755 pitches, or 3.90 per plate appearance. That number does not prove patience: a hitter can see pitches because he fouls them off, because pitchers miss, or because he takes hittable strikes. A future Statcast pitch-level audit should separate chase rate, zone-swing rate, contact rate and damage by count before assigning a single discipline label to each hitter.

## Contact quality and contact frequency are different problems

The lineup contains several distinct failure modes. Baty's 86 strikeouts in 316 plate appearances, Francisco Alvarez's 59 in 224, and Vientos's 61 in 254 represent strikeout rates of roughly 27.2%, 26.3% and 24.0%. Those hitters have fewer opportunities for batted-ball value. Yet Vientos still produced 11 homers, while Baty produced only three. The same prescription therefore does not fit both: Vientos's question is whether enough damage survives his low on-base rate; Baty's is whether both contact frequency and impact have fallen short.

Bichette is the counterexample. His 73 strikeouts in 411 plate appearances imply a manageable 17.8% strikeout rate, but the .377 slugging percentage and ten homers show that putting more balls in play has not automatically created above-average production. His 11 grounded-into-double-plays also illustrate a cost of contact with runners aboard, although double-play totals depend heavily on opportunity and runner speed. The right analysis asks what kind of contact a hitter makes, not merely whether he avoids a strikeout.

The official team endpoint reports 801 groundouts and 882 air outs, a 0.91 groundout-to-air-out ratio. That fielding-out classification is not the same thing as a Statcast ground-ball or fly-ball rate: it excludes hits and uses outcome categories rather than launch angles. It is therefore useful only as a broad description. The Mets need a pitch-level or batted-ball file to establish barrel rate, hard-hit rate, expected weighted on-base average, launch-angle distribution and pull-side air contact. Until that is done, claims that a swing change, bat-speed gain or launch-angle adjustment caused the team's output would outrun the evidence.

The .275 BABIP offers a reasonable research lead. New York may be receiving too little value from balls in play because of weak contact; it may also be experiencing an unfavorable distribution of fielded balls. Both can be true. Soto's own .283 BABIP accompanied a .993 OPS because walks and home runs made him less dependent on fielders. Benge's .320 BABIP helped lift his average and OBP. This is the central portfolio lesson: an offense becomes more stable when it can score through walks, homers and quality contact rather than requiring every component to succeed simultaneously.

## Platoons and roles: do not infer a team split from one hitter

Platoon analysis requires care because the Stats API's `statSplits` query returned player-level splits rather than an aggregate Mets team split in this research pass. Soto's official split illustrates the danger of overgeneralization. He had a 1.069 OPS in 212 plate appearances against right-handed pitchers and an .855 OPS in 110 against left-handers. Both were productive; the difference supports ordinary handedness-aware matchup planning, not sitting an elite hitter.

The rest of the active roster creates legitimate role questions. On July 10, the official active-roster endpoint listed left-handed or switch-hitting options including Soto, Lindor, Baty, Jared Young and Jorge Polanco, alongside right-handed options such as Bichette, Benge, Alvarez, Vientos, Ewing, Eric Wagaman, Luis Torrens and Tyrone Taylor. Handedness is not a sufficient reason to platoon: the decision should use each hitter's multi-year and current-season performance against pitcher handedness, pitch-type vulnerabilities, defensive position and the opposing bullpen. Small split samples can create false precision quickly.

Roles also affect the meaning of season lines. Lindor's .211/.296/.352 line came in only 159 plate appearances, not a full first half. Ewing's .802 OPS came in 210. Wagaman's .742 OPS came in just 32. Polanco's .554 OPS came in 70. These should not be compared as if each hitter had received the same opportunity against the same opponents. A part-time hitter may face selected matchups; an everyday hitter absorbs unfavorable ones and repeated exposure. A run-creation plan should identify which players are everyday anchors, which are platoon complements, and which are development bets whose playing time has value beyond the next game.

Lineup order is an allocation problem, not a cure. The Mets should generally place their best on-base hitters where they receive more plate appearances and surround Soto with hitters who reduce the benefit of pitching around him. But moving a .299 OBP hitter from one slot to another does not create new baserunners. Order can improve the distribution of existing talent at the margin; better underlying plate appearances must do the larger work.

## Baserunning has cost outs without adding enough volume

New York had stolen 44 bases and been caught 21 times, a 67.7% success rate. Its 44 steals ranked 25th in the 30-club snapshot, while the average club had 63.3. This is neither a high-volume pressure attack nor an especially efficient one. A basic break-even calculation explains why. If a successful steal adds roughly two-tenths of a run and an out costs roughly four- to five-tenths, the break-even rate is often around 70–75%, varying substantially by inning, score, base, outs, batter and pitcher. At 67.7%, the Mets' aggregate attempts are unlikely to have added much value and may have subtracted it.

That does not mean “stop running.” Benge was 13-for-15 and Ewing 9-for-15; Soto was 7-for-10. The player and situation matter. Benge's 86.7% rate is comfortably valuable under most ordinary contexts. Ewing's 60% is not, unless unusual tactical details change the run values. Team totals also omit leads, first-to-third advancement, taking an extra base on hits, pickoffs and tag-up decisions. A complete baserunning audit should use Baseball Savant's run-value framework or event-level play data rather than treating steals as the whole skill.

The interaction with the offense is important. A club with a .304 OBP has fewer runners to advance. Giving away an out is especially expensive ahead of Soto, while a well-chosen steal can reduce double-play risk or put a runner in scoring position for a contact hitter. Strategy should be asymmetric: aggressive with high-success runners in favorable pitcher-catcher contexts, conservative when an attempt removes a runner before the lineup's best damage source.

## Citi Field and schedule context

Citi Field should be treated as context, not an all-purpose explanation. Park dimensions, weather and run environment affect offense, and a season line combines home and road games. Yet the Mets' low OBP cannot be explained by fences: walks and hit-by-pitches are far less park-sensitive than home runs and some balls in play. The club had 34 hit-by-pitches in addition to its 290 walks, but its .304 OBP remained 29th in the league snapshot.

The proper next step is a home-road and park-adjusted comparison using equal definitions and enough plate appearances. This research pass did not obtain a valid team-level home/away response from the attempted `statSplits` endpoint; the returned split was null. That failed query is evidence against publishing an unsupported Citi Field split, not a reason to substitute a memory or secondary table. Similarly, opponent strength and the sequencing of injuries may explain part of the first 94 games. They do not erase the observed deficit, but they affect forecasts.

## What the profile implies

The Mets' clearest offensive path is to broaden on-base production around Soto while preserving their adequate home-run base. That can happen through better swing decisions, more productive contact, healthier or more effective high-volume regulars, and matchup-aware roles. It is unlikely to happen through lineup-order changes alone. The club should also make stolen-base attempts more selective, particularly with runners whose demonstrated success rates are below the contextual break-even point.

Three claims are justified by the snapshot. First, the Mets had an on-base and slugging deficit relative to the league, despite approximately average home-run volume. Second, Soto carried a disproportionate share of the walks and homers, making the offense structurally concentrated. Third, poor non-homer outcomes—not an extreme aggregate strikeout total—help explain why the homers did not translate into more runs.

Several stronger claims are not yet justified. The data here do not establish that coaching caused the results, that Citi Field suppressed the offense by a specific amount, that a particular hitter's mechanics changed, or that the rest-of-season true talent equals the first-half line. Those require pitch-level contact metrics, park-adjusted measures, injury chronology and projection work. A descriptive profile is most useful when it identifies those boundaries rather than disguising them.

## Sources

- MLB Stats API, [Mets team season hitting, 2026](https://statsapi.mlb.com/api/v1/teams/121/stats?stats=season&group=hitting&season=2026), queried 2026-07-10. Exact parameters: `stats=season`, `group=hitting`, `season=2026`.
- MLB Stats API, [National League standings, 2026](https://statsapi.mlb.com/api/v1/standings?leagueId=104&season=2026&standingsTypes=regularSeason&hydrate=team), queried 2026-07-10. Exact parameters: `leagueId=104`, `season=2026`, `standingsTypes=regularSeason`, `hydrate=team`.
- MLB Stats API, [Mets active roster on July 10, 2026](https://statsapi.mlb.com/api/v1/teams/121/roster?rosterType=active&date=07/10/2026), queried 2026-07-10. Exact parameters: `rosterType=active`, `date=07/10/2026`.
- MLB Stats API, [all MLB player hitting seasons filtered to Mets](https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&teamId=121&season=2026&playerPool=QUALIFIED&limit=100&hydrate=person), queried 2026-07-10. Exact parameters preserved in URL; individual active-player lines were independently checked through `/api/v1/people/{personId}/stats?stats=season&group=hitting&season=2026`.
- MLB Stats API, club comparison assembled from the same official endpoint for each active MLB team: `/api/v1/teams/{teamId}/stats?stats=season&group=hitting&season=2026`, queried 2026-07-10. Rankings and 30-team means are calculations from those responses, not MLB-authored rankings.
- MLB Stats API, [Soto split query](https://statsapi.mlb.com/api/v1/stats?stats=statSplits&group=hitting&teamId=121&season=2026&sitCodes=vl), queried 2026-07-10. Exact parameters: `stats=statSplits`, `group=hitting`, `teamId=121`, `season=2026`, `sitCodes=vl`; because the response is player-level, it is used only for Soto and not as a Mets team split.

## Open questions

- What do Statcast chase, zone-contact, barrel, hard-hit and expected-wOBA data show for the Mets and for each high-volume hitter through the same cutoff?
- How much of the low BABIP reflects contact quality, speed, spray distribution, opponent defense or ordinary variance?
- What are the team's verified home-road and pitcher-handedness splits when retrieved from a team-level endpoint with matching definitions?
- How should Lindor's partial-season return and the development priority for Benge and Ewing change lineup and playing-time optimization?
- What is the Mets' baserunning run value after including advancement, pickoffs and context rather than only steals?
