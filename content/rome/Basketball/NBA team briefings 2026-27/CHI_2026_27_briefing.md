---
title: Chicago Bulls 2026-27 Research Briefing
created: 2026-07-09
source: web
team: CHI
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Chicago Bulls 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 27.5 mc_mean_wins |
| Model p10-p90 wins | 21.0-34.0; p50 27.0 |
| Model strength | -9.337 pts/100; se_strength 1.605 |
| Playoff probability | 0.008 make_playoffs_prob; 0.050 make_playin_prob |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +1.9 pts/100, judgmental |
| Win delta | +5.0 wins, judgmental |
| Adjusted wins | 32.5 |
| Confidence | 57/100 |
| One-sentence thesis | The 27.5-win prior is directionally too pessimistic because Chicago's public roster context points to more real rotation talent than a -9.337 strength team, but the fit, rookie/cold-start load, and health uncertainty keep the adjustment modest. |

## Model Prior

The only authoritative team prior for this briefing is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "CHI"`, accessed July 9, 2026.

Quoted fields from that row:

| Field | Value |
|---|---:|
| mc_mean_wins | 27.5 |
| p10_wins | 21.0 |
| p50_wins | 27.0 |
| p90_wins | 34.0 |
| make_playoffs_prob | 0.008 |
| strength | -9.337 |
| se_strength | 1.605 |
| n_cold_start | 5 |

Sorted by `mc_mean_wins`, CHI ranks 13th in the Eastern Conference, ahead of BKN and WAS and behind MIL. That is the real prior to challenge: not a 30-win or near-neutral team-detail prior from older artifacts. The model is saying Chicago is a bottom-tier East team with a very wide low-end band and only a 0.8% playoff probability.

I did inspect `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for roster rows only. Its CHI team-level wins, strength, and odds are non-authoritative and are not used here. Its roster rows are useful only as context because they expose player MPG, expected games, uncertainty, and factor vectors.

## Roster And Minutes Read

Current public sources and local roster context agree on the broad story: Chicago is a young/rebuilt roster around Josh Giddey, Matas Buzelis, high-pick rookies Caleb Wilson and Dailyn Swain, plus veteran additions Norman Powell and Nic Claxton. The exact depth chart is still unsettled.

Authoritative public context:

- NBA.com lists Giddey, Buzelis, Okoro, Tre Jones, Jalen Smith, Patrick Williams, Dillingham, Essengue, Wilson, Swain, and other depth pieces on the Bulls team page, and lists Tiago Splitter as head coach; accessed July 9, 2026: `https://www.nba.com/team/1610612741/bulls`.
- NBA.com reports Powell agreed to a two-year Bulls deal after averaging 21.7 points, 3.5 rebounds, and 2.5 assists for Miami in 2025-26; accessed July 9, 2026: `https://www.nba.com/news/norman-powell-free-agency-2026`.
- NBA.com player news says Claxton was traded to Chicago while carrying a finger issue; accessed July 9, 2026: `https://www.nba.com/player/1629651/nic-claxton`.
- NBA.com player news says Jalen Smith is expected to open 2026-27 behind Claxton, after a calf-related shutdown in 2025-26; accessed July 9, 2026: `https://www.nba.com/player/1630188/jalen-smith`.
- RealGM's 2026-27 Bulls depth chart is noisy but still points to Giddey, Okoro, Buzelis, Tre Jones, Jalen Smith, Rob Dillingham, Leonard Miller, Zach Collins, Noa Essengue, Tobe Awaka, Caleb Wilson, and Dailyn Swain as relevant names; accessed July 9, 2026: `https://basketball.realgm.com/nba/teams/Chicago-Bulls/4/depth-charts`.

Non-authoritative local roster rows from `projection_2026_27_teams.json`, used only for roster pressure:

Top projected win contributors:

| Player | Role row | MPG | Exp GP | Net | Proj wins | Flags |
|---|---:|---:|---:|---:|---:|---|
| Jalen Smith | starter | 26.3 | 66 | +1.98 | 7.78 | high_uncertainty |
| Norman Powell | starter | 27.0 | 61 | +0.92 | 5.66 | high_uncertainty |
| Isaac Okoro | starter | 27.0 | 65 | +0.00 | 4.42 | high_uncertainty |
| Josh Giddey | starter | 27.2 | 63 | -0.11 | 4.12 | high_uncertainty |
| Tre Jones | starter | 26.7 | 65 | -0.20 | 4.02 | high_uncertainty |
| Leonard Miller | rotation | 11.8 | 32 | -0.45 | 0.78 | high_uncertainty |
| Zach Collins | rotation | 12.1 | 34 | -0.84 | 0.70 | high_uncertainty |
| Yuki Kawamura | rotation | 11.5 | 31 | -0.91 | 0.58 | high_uncertainty |

Top projected MPG rows:

| Player | MPG | Exp GP | Local concern |
|---|---:|---:|---|
| Josh Giddey | 27.2 | 63 | Plausible as lead handler, but spacing/defense are lineup constraints. |
| Norman Powell | 27.0 | 61 | If healthy and starting, 27 MPG may be low for the only proven high-volume scorer. |
| Isaac Okoro | 27.0 | 65 | Plausible defensive wing minutes, but offensive fit depends on surrounding shooting. |
| Tre Jones | 26.7 | 65 | Likely too high if Giddey starts and Powell takes major guard minutes. |
| Jalen Smith | 26.3 | 66 | Likely too high if Claxton starts; NBA.com says Smith projects behind Claxton. |
| Matas Buzelis | 13.1 | 48 | Likely too low for a second-year forward central to the rebuild. |
| Nic Claxton | 12.9 | 39 | Likely too low if his finger is not a persistent limitation. |
| Zach Collins | 12.1 | 34 | Fragile because of toe surgery and prior shutdown. |

The key minutes challenge is not "Chicago is secretly good." It is that the roster context rows appear internally stale or misallocated: they give Jalen Smith the top win-contributor slot and only 12.9 MPG to Claxton, while public player news and the owner depth chart make Claxton the more natural center starter. They also leave Buzelis at 13.1 MPG despite public and depth-chart signals that he should have a sizable role.

G League, two-way, and deep bench fragility: the back half is extremely fragile. Local rows include Yuki Kawamura, Mac McClung, Kam Jones, Noa Essengue, Jaylin Sellers, Tobe Awaka, Lachlan Olbrich, Nick Richards, and Patrick Williams in tiny or deep roles. Some of those names could be real injury-cover players, but several look more like Summer League, G League, or situational depth than dependable 82-game rotation pieces. This hurts the floor if Chicago starts chasing development minutes.

## Six-Factor And Style Read

Because the authoritative standings JSON does not expose factor detail, I used only non-authoritative roster-context rows for a rough player-weighted factor read. These are not official team priors and should be treated as diagnostic flags:

| Factor | Rough roster-weighted value | Read |
|---|---:|---|
| oTS | +0.331 | Powell, Giddey, Smith, and Okoro rows give some efficiency support, but the public lineup still has spacing tension if Giddey, Okoro, Claxton, and developing forwards share heavy minutes. |
| oTOV | +0.098 | Tre Jones and Powell help ball security; Giddey is a passer but can be turnover-prone in high-creation contexts. |
| oSC | -0.283 | The roster rows do not show enough half-court creation beyond Giddey/Powell, and Wilson/Swain are rookies. |
| dTS | +0.098 | Claxton, Okoro, Buzelis, and Smith give defensive tools, but the prior is hard to trust while Claxton is under-minuted locally. |
| dTOV | -0.177 | There is not enough proven event creation unless Okoro/Buzelis/Swain pressure the ball consistently. |
| dSC | -0.038 | Rebounding/rim protection could be better with Claxton and Wilson, but rookie and injury uncertainty make it unstable. |

The factor read reinforces the thesis: Chicago should still be bad, especially in spacing and half-court creation, but the roster does not obviously look like a -9.337 pts/100 team if Powell, Claxton, Giddey, and Buzelis are all real rotation players.

## Main Challenge To The Model

My stance is `MODEL_TOO_LOW`.

The model's 27.5 wins and -9.337 strength feel too harsh relative to the public roster and role evidence. Chicago won 31 games in 2025-26 while allowing 121.5 points per game, ranked 28th, per NBA.com. The new 2026-27 construction adds two mechanisms that specifically attack that weakness: Claxton as a rim-protecting center option and Splitter as a new coach with a defensive/development mandate. It also adds Powell, who gives the offense a real veteran scorer next to Giddey.

The main upward mechanisms:

1. Claxton should play more than the local roster-context 12.9 MPG if healthy. If he is closer to a starter than a fringe rotation big, Chicago's rim protection and defensive rebounding floor improve.
2. Powell's role is probably more important than a generic 27 MPG veteran row. He averaged 21.7 points in 2025-26 and is the clearest source of off-ball scoring gravity on the roster.
3. Buzelis at 13.1 MPG looks light if the organization is developing him as a core forward. Even if he is inefficient, his size, weak-side rim protection, and transition pressure matter more than the local row credits.
4. Wilson and Swain are cold-start risks, but they are not anonymous replacement players. Wilson went fourth overall after a productive UNC freshman year, while Swain went 15th with a multi-positional wing profile. They can be below-average and still be better than a pure replacement cold-start assumption.

The main downside mechanisms:

1. Giddey, Okoro, Claxton, Wilson, and Buzelis lineups can get cramped unless Powell or another shooter bends the defense.
2. Claxton had a finger issue, Jalen Smith had a calf shutdown, Zach Collins had toe surgery, Buzelis ended the season with an ankle issue, and Essengue had shoulder surgery. Depth-chart robustness is not solved.
3. A new coach and a youth-heavy roster usually create early-season role turbulence.
4. The roster still lacks a top-30 star, and 32 wins can be a fair ceiling if the East middle is competent.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The official prior is very low for a roster with several real NBA rotation pieces. | Authoritative local row: CHI 27.5 wins, -9.337 strength, 0.8% playoff odds, n_cold_start 5; public NBA.com roster/news show Giddey, Buzelis, Powell, Claxton, Wilson, Swain, Okoro, Tre Jones, and Smith in the picture. | helps | +1.0 wins | 65 |
| Powell should raise the offensive floor above the model's worst-case feel. | NBA.com reports Powell joined Chicago after averaging 21.7 PPG, 3.5 RPG, 2.5 APG with Miami in 2025-26. | helps | +1.0 wins | 62 |
| Claxton should likely receive more than the non-authoritative 12.9 MPG local roster row. | NBA.com says Claxton was traded to Chicago with a finger issue; NBA.com Smith news says Smith projects behind Claxton. | helps | +1.2 wins | 60 |
| Buzelis at 13.1 local-context MPG is probably too low for the rebuild. | NBA.com says Buzelis has more frontcourt competition but likely maintains a sizable Bulls role; RealGM's current depth chart has him as a starter-level forward. | helps | +0.7 wins | 57 |
| Wilson and Swain are cold-starts, but high draft slots make total replacement treatment too punitive. | NBA.com draft profiles list Wilson Round 1 pick 4 to Chicago and Swain Round 1 pick 15 to Chicago, with strong college production and multi-positional traits. | helps | +0.8 wins | 54 |
| Chicago's defense was legitimately bad in 2025-26. | NBA.com's Powell article notes Chicago allowed 121.5 PPG, 28th in the NBA, and finished 31-51. | hurts | -0.8 wins | 72 |
| The center and frontcourt health picture is not clean. | Claxton had a finger absence, Smith had a calf shutdown, Collins had season-ending toe surgery, Buzelis had an ankle issue, and Essengue had shoulder surgery. | hurts | -1.0 wins | 68 |
| Fit could depress individual talent because several core players are non-elite spacers. | Giddey, Okoro, Claxton, Wilson, Swain, and Buzelis create a development-heavy lineup mix; Powell is the only proven high-volume scorer added. | hurts | -0.9 wins | 59 |
| New head coach Tiago Splitter is an upside case, not certainty. | NBA.com says Splitter arrives after an interim Portland season and is the 25th Bulls head coach; that adds development upside but also system transition risk. | neutral | +0.2 wins | 50 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Josh Giddey | Non-authoritative roster row: 27.2 MPG, 63 GP, -0.11 net, 4.12 projected wins. | Upside as jumbo table-setter after 17.0 PPG, 8.3 RPG, 9.1 APG on NBA.com; concern is defense and spacing when paired with non-shooters. | If Giddey is a real primary organizer, 27.5 wins is too low; if teams duck under and hunt him, the model's pessimism survives. |
| Norman Powell | Non-authoritative row: 27.0 MPG, 61 GP, +0.92 net, 5.66 projected wins. | Likely more central than 27 MPG if healthy; age-33/34 guard availability is the risk. | Powell is Chicago's cleanest half-court scoring patch and could stabilize lineups that otherwise lack shooting gravity. |
| Nic Claxton | Non-authoritative row: 12.9 MPG, 39 GP, -2.32 net, 0.12 projected wins. | This looks too low if the finger issue clears and he starts; public news points to Smith behind him. | Claxton is the biggest single reason to lift the prior, because Chicago's 2025-26 defense was bad enough that a real rim protector changes the baseline. |
| Jalen Smith | Non-authoritative row: 26.3 MPG, 66 GP, +1.98 net, 7.78 projected wins. | Probably overvalued in the roster-context rows if he is the backup center; calf history adds fragility. | The positive adjustment is not because Jalen's row is trusted; it is because Claxton should absorb some of the role that the row gives Smith. |
| Matas Buzelis | Non-authoritative row: 13.1 MPG, 48 GP, -1.94 net, 0.38 projected wins. | Likely more time and more organizational priority than the row implies, but ankle history and frontcourt crowding matter. | A Buzelis leap is Chicago's biggest internal upside path, especially if Splitter lets him defend and run in transition. |
| Caleb Wilson | Non-authoritative row: 11.2 MPG, 37 GP, -1.19 net, cold rookie. | NBA.com draft profile: No. 4 pick, productive UNC freshman, but fractured thumb ended his college season and the perimeter shot is developmental. | He can be inefficient and still exceed replacement if given real developmental minutes; he can also sink spacing if overplayed. |
| Dailyn Swain | Non-authoritative row: 10.3 MPG, 34 GP, -1.13 net, cold rookie. | NBA.com draft profile: No. 15 pick, strong Texas production, two-way wing profile, but three-point shot is still developing. | He is a plausible rotation wing sooner than the model may know, yet he overlaps with Buzelis/Wilson/Okoro if the shot is not ready. |
| Isaac Okoro | Non-authoritative row: 27.0 MPG, 65 GP, +0.00 net, 4.42 projected wins. | Defensive value is real; offensive spacing with Giddey and Claxton is the problem. | Okoro helps the defense but can make lineups easier to load up against unless Powell/Buzelis stretch enough. |
| Tre Jones | Non-authoritative row: 26.7 MPG, 65 GP, -0.20 net, 4.02 projected wins. | Solid guard, but likely too many minutes if Chicago also has Giddey, Powell, Dillingham, and spot guards. | A too-large Tre role would shrink offensive ceiling; a tighter backup role probably helps. |
| Zach Collins | Non-authoritative row: 12.1 MPG, 34 GP, -0.84 net, 0.70 projected wins. | NBA.com says he had toe surgery and agreed to stay; availability is a real concern. | Backup big depth matters because Claxton and Smith both carry injury questions. |
| Rob Dillingham | Non-authoritative row: 1.7 MPG, 9 GP, -3.23 net. | NBA.com says he had minor wrist surgery but also late-season scoring flashes; he may be more than a deep-only guard if Chicago needs creation. | If Dillingham is playable, he gives the second unit pressure; if not, the guard depth is mostly low-creation. |
| Noa Essengue | Non-authoritative row: 0.7 MPG, 2 GP, cold. | NBA.com says he planned to play Summer League after shoulder surgery, but is buried by Wilson and Swain. | Deep developmental minutes could be worse than the model expects if injuries force him into real games. |

## Adjustment Logic

I am applying a judgmental adjustment of +1.9 pts/100, roughly +5.0 wins, because the corrected prior appears too low relative to the public rotation evidence, especially Claxton/Powell/Buzelis/Wilson. This is not a new simulation.

The adjustment is intentionally capped:

- +1.2 wins for Claxton playing closer to a starter/real rotation role than the non-authoritative roster-context rows imply.
- +1.0 wins for Powell's scoring and spacing stabilizing bad offensive lineups.
- +1.0 wins for Buzelis, Wilson, and Swain collectively beating a harsh cold-start/deep-bench treatment.
- +0.8 wins for Splitter and a defensive scheme reset improving a bottom-3 points-allowed profile.
- +1.0 wins for roster-context data quality: the available roster rows do not align with the corrected prior and likely contain stale role allocation.
- -1.0 wins for health, spacing, youth, and depth risk.

Net: +5.0 wins, taking CHI from 27.5 to 32.5. That leaves Chicago below the play-in favorite tier, but not quite as buried as the official prior.

## Counter-Thesis

The strongest argument against `MODEL_TOO_LOW` is that Chicago's roster may look deeper on paper than it plays on the floor. Giddey, Okoro, Claxton, Wilson, Buzelis, and Swain all require careful spacing combinations. Powell can score, but he is a 33-year-old guard entering his 12th NBA season and cannot alone fix a development-heavy offense. Claxton's finger, Smith's calf, Collins' toe, Buzelis' ankle, Dillingham's wrist, and Essengue's shoulder make the injury ledger real, not theoretical. If the new staff prioritizes rookie reps over lineup coherence, the 27.5-win prior can be right.

There is also a data reason to be cautious: the corrected standings prior is authoritative, but the richer roster-context artifact is explicitly non-authoritative for team strength and appears misaligned. If the tuned model has newer information not visible in the old roster rows, my upward adjustment may be overreacting to stale public/depth-chart signals.

## What Would Change My Mind

- A verified preseason depth chart showing Claxton limited or behind Smith/Collins would cut most of the upward adjustment.
- Powell's role falling below starter-level minutes would reduce the offensive-floor case.
- Buzelis staying near 13 MPG in preseason would make the local row look less stale.
- Wilson and Swain looking unplayable against NBA athletes would make the cold-start penalty more credible.
- A public injury update showing Claxton's finger, Smith's calf, Collins' toe, or Essengue's shoulder lingering into camp would shift the stance toward `MODEL_ABOUT_RIGHT`.
- A new projection artifact aligned to `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` with current roster rows could override much of this role-pressure analysis.

## Data Quality And Uncertainty

- The only authoritative prior is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`. I did not use `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` for team-level wins, strength, or odds.
- The non-authoritative roster-context artifact has CHI roster rows that do not cleanly match public role evidence. The largest conflict is Jalen Smith as the top local win contributor and starter while NBA.com player news places him behind Claxton.
- The local depth chart CSV also conflicts with the non-authoritative roster rows: it lists Claxton as starter and Jalen Smith as rotation, while the richer roster rows flip that role pressure.
- NBA.com roster/news pages are mid-offseason artifacts and can lag each other. For example, NBA player pages/news can identify moves before all team roster modules fully reflect them.
- The factor read is player-row-derived, not an official team factor profile from the corrected prior.
- This briefing should be treated as an adversarial research memo, not a replacement forecast.

## Sources

Local/model sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, CHI row, accessed July 9, 2026. Authoritative prior for wins, band, odds, strength, se_strength, n_cold_start.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv`, CHI rows, accessed July 9, 2026. Roster/depth context only.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json`, CHI roster rows only, accessed July 9, 2026. Non-authoritative roster context only; team-level numbers intentionally ignored.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md`, briefing template and challenge rules, accessed July 9, 2026.

External public/free sources:

- `https://www.nba.com/team/1610612741/bulls`, accessed July 9, 2026. Bulls roster/coaching/fantasy-news context.
- `https://www.nba.com/news/bulls-hire-tiago-splitter-as-coach`, accessed July 9, 2026. Tiago Splitter hiring and coaching context.
- `https://www.nba.com/news/norman-powell-free-agency-2026`, accessed July 9, 2026. Powell agreement, 2025-26 production, Bulls 2025-26 record/defensive points allowed context.
- `https://www.nba.com/news/2026-nba-offseason-roundup`, accessed July 9, 2026. NBA offseason transaction context, including Powell and Collins notes.
- `https://www.nba.com/player/1629651/nic-claxton`, accessed July 9, 2026. Claxton player profile, trade/news, finger availability notes.
- `https://www.nba.com/player/1630188/jalen-smith`, accessed July 9, 2026. Smith player news, calf shutdown, projected backup-center context.
- `https://www.nba.com/player/1641824/matas-buzelis`, accessed July 9, 2026. Buzelis player news, ankle status, frontcourt competition context.
- `https://www.nba.com/player/1642855/noa-essengue`, accessed July 9, 2026. Essengue shoulder/Summer League and depth-chart context.
- `https://www.nba.com/player/1630581/josh-giddey`, accessed July 9, 2026. Giddey player profile and 2025-26 production.
- `https://www.nba.com/player/1626181/norman-powell`, accessed July 9, 2026. Powell player profile and 2025-26 production.
- `https://www.nba.com/player/1630171/isaac-okoro`, accessed July 9, 2026. Okoro player profile and 2025-26 production.
- `https://www.nba.com/player/1630200/tre-jones`, accessed July 9, 2026. Tre Jones player profile and 2025-26 production.
- `https://www.nba.com/player/1642265/rob-dillingham`, accessed July 9, 2026. Dillingham player news and late-season/wrist context.
- `https://www.nba.com/player/1628380/zach-collins`, accessed July 9, 2026. Collins player news and toe surgery/contract context.
- `https://www.nba.com/draft/2026/prospects/caleb-wilson`, accessed July 9, 2026. Wilson draft slot, college profile, production, thumb injury.
- `https://www.nba.com/draft/2026/prospects/dailyn-swain`, accessed July 9, 2026. Swain draft slot, college profile, production, shooting-development context.
- `https://basketball.realgm.com/nba/teams/Chicago-Bulls/4/depth-charts`, accessed July 9, 2026. Public depth-chart sanity check.
