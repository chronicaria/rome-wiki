---
title: Washington Wizards 2026-27 Research Briefing
created: 2026-07-09
source: web
team: WAS
season: 2026-27
model_source: Andrew RAPM-decomp projection
briefing_type: team_research_challenge
status: draft
tags: [basketball, nba, forecasting, research]
---

# Washington Wizards 2026-27 Research Briefing

## Thesis Card

| Field | Value |
|---|---|
| Model projected wins | 24.2 |
| Model p10-p90 wins | 18.0-31.0 |
| Model p50 wins | 24.0 |
| Model strength | -10.911 pts/100 |
| Model se_strength | 1.482 |
| Model n_cold_start | 2 |
| Playoff probability | 0.1% |
| Agent stance | MODEL_TOO_LOW |
| Strength delta | +1.3 pts/100 |
| Win delta | +3.1 wins |
| Adjusted wins | 27.3 |
| Confidence | 55/100 |
| One-sentence thesis | The 24.2-win prior is directionally conservative if Trae Young, Anthony Davis, AJ Dybantsa, Alex Sarr, Deandre Ayton, and Khris Middleton are actually available in a coherent rotation, but the adjustment stays modest because the roster is old-young, injury-heavy, spacing-fragile, and not yet training-camp-settled. |

## Model Prior

The only authoritative team prior used here is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, row `franchise == "WAS"`:

| Field | Value |
|---|---:|
| mc_mean_wins | 24.2 |
| p10_wins | 18.0 |
| p50_wins | 24.0 |
| p90_wins | 31.0 |
| make_playoffs_prob | 0.001 |
| strength | -10.911 |
| se_strength | 1.482 |
| n_cold_start | 2 |

That places Washington 15th in the East in the public projection table, narrowly below Brooklyn and well below the East play-in tier. The model prior is a bottom-of-league team even though the public roster now contains multiple high-pedigree players. This briefing treats `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` as non-authoritative roster context only. Its WAS team-level wins/strength are not used because they conflict with the authoritative standings prior.

## Roster And Minutes Read

The non-authoritative roster rows imply a top-heavy but confused rotation:

Top projected win contributors from roster context:

| Player | Role | MPG | Exp GP | Net | Proj wins | Flag |
|---|---|---:|---:|---:|---:|---|
| Anthony Davis | starter | 26.8 | 50 | +2.82 | 8.40 | high uncertainty |
| Trae Young | starter | 26.5 | 60 | -0.42 | 4.02 | high uncertainty |
| Kyshawn George | starter | 27.0 | 57 | -0.87 | 3.08 | high uncertainty |
| Julian Reese | starter | 26.9 | 43 | -0.85 | 2.35 | high uncertainty |
| Alex Sarr | starter | 26.8 | 57 | -1.42 | 2.08 | high uncertainty |
| D'Angelo Russell | rotation | 11.9 | 27 | +0.60 | 1.17 | high uncertainty |
| Justin Champagnie | rotation | 12.1 | 37 | -0.43 | 1.11 | high uncertainty |
| Jamir Watkins | rotation | 12.2 | 27 | -0.19 | 0.91 | high uncertainty |

Top projected MPG players:

| Player | Role | MPG | Exp GP | Roster-context issue |
|---|---|---:|---:|---|
| Kyshawn George | starter | 27.0 | 57 | Plausible minutes, but usage should fall next to Young/Dybantsa/Davis. |
| Julian Reese | starter | 26.9 | 43 | Public reporting lists Reese as a two-way player, not a likely full-time starter. |
| Anthony Davis | starter | 26.8 | 50 | Plausible if healthy, but recent finger/hand availability risk is large. |
| Alex Sarr | starter | 26.8 | 57 | Plausible, especially if Washington prioritizes Sarr/AD frontcourt size. |
| Trae Young | starter | 26.5 | 60 | Plausible if healthy, but 2025-26 ended with quadriceps/back issues. |
| Bub Carrington | rotation | 12.8 | 49 | The model is harsh on his value but may understate developmental minutes. |
| Deandre Ayton | rotation | 12.6 | 32 | Public trade context suggests he could play more than a tiny backup role. |
| Bilal Coulibaly | rotation | 12.6 | 28 | Public roster logic suggests a larger defensive wing role than 28 expected games. |

The public roster has moved since the local roster rows. Bullets Forever reported on July 8 that Washington acquired Khris Middleton via sign-and-trade and that D'Angelo Russell was sent to Memphis in the larger deal; it listed the 14 standard contracts as Young, Johnson, Carrington, Dybantsa, George, Coulibaly, Riley, Davis, Champagnie, Middleton, Whitmore, Sarr, Ayton, and Vukcevic, with Watkins, Reese, and Okpara on two-way deals. That directly challenges the local roster rows: Russell should not be credited minutes/wins, Middleton is missing, and Reese's 26.9 MPG "starter" treatment looks stale.

Likely rotation entering camp, based on public roster logic and not a model output:

| Tier | Players |
|---|---|
| Core starters | Trae Young, AJ Dybantsa, Anthony Davis, Alex Sarr, one of Kyshawn George/Tre Johnson/Bilal Coulibaly/Deandre Ayton depending on size and spacing |
| Rotation | Kyshawn George, Tre Johnson, Bilal Coulibaly, Deandre Ayton, Khris Middleton, Justin Champagnie, Bub Carrington, Will Riley |
| Development/two-way/deep | Cam Whitmore, Tristan Vukcevic, Jamir Watkins, Julian Reese, Felix Okpara |

Minutes pressure points:

- Dybantsa at 10.3 MPG in the local roster rows is probably too low for a No. 1 pick who has signed his rookie-scale deal and is being treated publicly as a central building block.
- Reese at 26.9 MPG is probably too high if the current public roster has him on a two-way.
- Russell's 1.17 projected wins are likely stale after the reported Middleton sign-and-trade.
- Ayton's 12.6 MPG may be too low if Washington acquired him to let Davis play more power forward and reduce center wear.
- Bilal Coulibaly's 12.6 MPG and 28 expected games feel low if the coaching staff needs a defensive wing around Young/Dybantsa.
- The frontcourt has Sarr, Davis, Ayton, Vukcevic, Reese, and Okpara, so role clarity matters more than raw name value.

## Six-Factor And Style Read

Because the authoritative prior file does not expose six-factor fields, this uses the non-authoritative roster rows only as directional roster context. The MPG x expected-games weighted factor profile from those rows is approximately:

| Factor | Roster-context estimate |
|---|---:|
| oTS | -0.12 |
| oTOV | -0.03 |
| oSC | -0.27 |
| dTS | +0.00 |
| dTOV | -0.10 |
| dSC | -0.13 |

That profile reads as surprisingly close to neutral, which is another reason to distrust the roster-context team summary as an explanation for the authoritative -10.911 strength prior. Mechanistically, the real team should be extreme rather than neutral: Young creates shooting and passing pressure, Davis/Sarr/Ayton create rim size, but spacing can collapse if two non-shooting bigs share the floor and Dybantsa's rookie shooting translates slowly.

The most plausible style:

- Offense: Young high ball screens, Dybantsa secondary creation, Sarr/Ayton rim pressure, George/Johnson/Middleton spacing. This should be better than a typical 24-win offense if Young is healthy.
- Defense: Davis/Sarr/Ayton can build a real back line, but Young must be protected, Dybantsa is a rookie, and the perimeter stopper hierarchy is unsettled.
- Rebounding/second-chance: Davis, Sarr, Ayton, Reese, and Okpara give size; the question is whether enough of that size can play without cramping the offense.

## Main Challenge To The Model

I think the model is modestly too low because the public roster is no longer a generic rebuilding roster. It has an actual high-usage creator in Trae Young, a defensive star in Anthony Davis, the No. 1 pick in AJ Dybantsa, a developing former No. 2 pick in Alex Sarr, and a starting-caliber center in Deandre Ayton. A 24.2-win mean implies Washington remains barely better than last year's collapse even after adding Dybantsa, getting a full-season chance at Young/Davis, and trading for Ayton/Middleton.

The mechanism is not "stars good, therefore wins." It is:

1. The local roster rows appear stale in ways that likely depress the clarity of the projection: Dybantsa is only 10.3 MPG, Middleton is absent, Russell is still included, and Reese is treated like a starter despite public two-way reporting.
2. Sarr's public 2025-26 stat line and highlight/news profile suggest more developmental upside than a -1.42 roster-context net rating.
3. Ayton makes Davis-at-PF lineups more plausible, lowering Davis's center burden and increasing the chance Washington has a credible rim-protection/rebounding identity.
4. Young's offense should lift the floor of a young roster even if the defensive cost is real.
5. The East play-in race is not the target; even a bad team with this much top-end talent can land closer to 27-30 wins than 24 if the veterans reach 55-60 games.

I do not push the adjustment higher because the obvious counterweights are severe: Davis and Young both ended 2025-26 hurt, the roster has too many bigs and uncertain shooters, Dybantsa is a rookie cold-start player, and public depth charts disagree on who should actually start.

## Evidence Board

| Claim | Evidence | Direction | Estimated impact | Confidence |
|---|---|---|---:|---:|
| The authoritative prior is very low: 24.2 wins, -10.911 strength, 0.1% playoff odds. | `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`, WAS row. | neutral | 0.0 wins | 100 |
| The local roster context is stale against current public roster reporting. | Bullets Forever reported Middleton in, Russell to Memphis, and listed Reese/Watkins/Okpara as two-ways; local roster rows still include Russell, omit Middleton, and give Reese starter minutes. | helps | +1.0 wins | 82 |
| Dybantsa's role is probably understated. | Dybantsa signed a four-year rookie-scale deal after being the No. 1 pick; SI projects him as opening-lineup caliber, while the local roster row gives him only 10.3 MPG. | helps | +0.9 wins | 70 |
| Young's offensive engine gives Washington a better floor than a typical 24-win team. | NBA.com player news says Young plans to sign a four-year, $212 million deal; RealGM lists him on the 2026-27 roster; the local model only rates him -0.42 net. | helps | +0.8 wins | 58 |
| Davis availability is the biggest downside check. | NBA.com player news said Davis was not expected to return in 2025-26 because of a finger issue and had no clear return timetable in late March. | hurts | -1.0 wins | 78 |
| Young availability is also not clean. | NBA.com player news said Young was not expected to play again in 2025-26 with quadriceps/back issues after earlier injury recovery. | hurts | -0.6 wins | 72 |
| Sarr's development may be underpriced by the roster-context rating. | NBA.com lists Sarr at 16.3 PPG, 7.4 RPG, 2.7 APG with second-year experience, while the local roster row has him at -1.42 net. | helps | +0.6 wins | 63 |
| The frontcourt could be clunky. | Public roster includes Davis, Sarr, Ayton, Vukcevic, plus two-way/deep bigs; Wiz of Awes notes Davis-at-PF helps his preference but raises spacing/defensive-position tradeoffs. | hurts | -0.5 wins | 62 |
| Deep bench/two-way depth is developmental more than bankable. | Bullets Forever lists Watkins, Reese, and Okpara as two-way players; Okpara is expected to start in the G League with Capital City Go-Go. | hurts | -0.4 wins | 75 |
| Middleton adds a stable veteran wing but likely not a large swing by himself. | Bullets Forever reported Middleton averaged 10.3 points over 34 Wizards games in 2025-26 and returned on a lightly guaranteed sign-and-trade contract. | helps | +0.4 wins | 60 |

## Player-Level Pressure Points

| Player | Model role/value | Concern or upside | Why it matters |
|---|---|---|---|
| Anthony Davis | 26.8 MPG, 50 exp GP, +2.82 net, 8.40 projected wins | Upside if Ayton/Sarr let him play more PF and stay fresh; downside if finger/hand/groin history limits him again. | The entire "too low" thesis needs Davis to be a real two-way star, not a name on the injury report. |
| Trae Young | 26.5 MPG, 60 exp GP, -0.42 net, 4.02 projected wins | The offensive gravity may be undervalued, but the defense and quadriceps/back risk are real. | A healthy Young creates efficient looks for Sarr, Dybantsa, George, Johnson, and Ayton; an unavailable Young leaves the offense young and messy. |
| AJ Dybantsa | 10.3 MPG, 34 exp GP, -1.16 net, 0.58 projected wins, cold | Role is probably too small for the No. 1 pick; rating could be too optimistic or too pessimistic because he is a cold-start rookie. | If he is immediately starter-caliber, Washington's ceiling moves; if he is inefficient, extra minutes may not help wins. |
| Alex Sarr | 26.8 MPG, 57 exp GP, -1.42 net, 2.08 projected wins | Public stats and development signals suggest upside; fit next to Davis/Ayton can still cramp spacing. | Sarr is the hinge between "young frontcourt with upside" and "too many bigs who cannot all close games." |
| Deandre Ayton | 12.6 MPG, 32 exp GP, -1.63 net, 0.46 projected wins | Public trade reporting suggests he is more than an emergency backup; his production can help, but the model's skepticism on impact is plausible. | Ayton can preserve Davis and stabilize center minutes, yet a three-big ecosystem can erase spacing. |
| Khris Middleton | Missing from local roster rows | Veteran wing depth, shooting, and decision-making are useful; age and limited 2025-26 production cap the upside. | His absence is a data-quality issue if the model prior has not ingested the July 8 sign-and-trade. |
| D'Angelo Russell | 11.9 MPG, 27 exp GP, +0.60 net, 1.17 projected wins | Public reporting says he was sent to Memphis and had never reported after the Dallas trade. | Those wins/minutes are probably phantom if using stale roster context. |
| Julian Reese | 26.9 MPG, 43 exp GP, -0.85 net, 2.35 projected wins | Public reporting lists him as a two-way player, and RealGM depth chart has him limited-time. | This is the clearest local minutes miss: starter-level minutes should probably be redistributed. |
| Bilal Coulibaly | 12.6 MPG, 28 exp GP, -2.57 net, 0.02 projected wins | Defensive wing role could be larger next to Young/Dybantsa; offensive limitations keep him volatile. | Washington needs a real perimeter defender to make Young lineups survive. |
| Bub Carrington | 12.8 MPG, 49 exp GP, -4.99 net, -1.70 projected wins | Model is extremely bearish; public depth charts still show him in the rotation and potentially starting. | If the model is right, extra guard minutes hurt badly; if he develops, this is an upside pocket. |

## Adjustment Logic

I am applying a judgmental adjustment of +1.3 pts/100, roughly +3.1 wins, because the public roster and role evidence looks slightly better than the 24.2-win prior implies. The main positive deltas are updated roster information, Dybantsa's likely larger role, Sarr's development, and the practical value of Ayton/Middleton as stabilizers.

I am subtracting for health and fit:

- Davis/Young availability risk: about -1.6 wins against a rosier talent-only view.
- Stale Russell/Reese local rows: one helps and one hurts; net effect is uncertainty more than clean upside.
- Frontcourt spacing and closing-lineup ambiguity: about -0.5 wins.
- Rookie volatility around Dybantsa and Okpara: keeps confidence near coin-flip.

Final judgment:

```text
strength_delta_pts_per_100 = +1.3
win_delta = +3.1
adjusted_wins = 27.3
confidence_0_to_100 = 55
```

This is not a simulation or replacement model output. It is a research adjustment to the authoritative 24.2-win prior.

## Counter-Thesis

The best argument against `MODEL_TOO_LOW` is that the model may be right because Washington's recognizable names are fragile, badly synchronized, or not as valuable in 2026 as their reputations imply. Davis did not finish 2025-26 and has a long availability tax. Young's offense can lift bad teams, but his defense forces lineup compromises and he also ended the year unavailable. Dybantsa is still a rookie, Sarr is still developing, Ayton's recent market value was not star-level, Middleton is 34, and the best defensive wing options are either limited shooters or young. If Washington prioritizes development over short-term wins, 24 wins is entirely plausible.

The strongest model-high argument is the local roster context's Reese/Russell problem. If the projection is unknowingly crediting 26.9 MPG to a two-way player and 1.17 wins to a player reportedly leaving for Memphis, the prior could be too high despite the headline talent. I still land on modestly too low because the same stale-context problem also underplays Dybantsa and omits Middleton, while the headline roster should have enough talent to beat a bottom-of-league mean if the veterans are not shut down.

## What Would Change My Mind

- A verified post-Middleton model rerun showing Dybantsa, Middleton, Ayton, Reese, and Russell correctly handled.
- Training-camp confirmation that Davis will start at PF with Sarr or Ayton at center, rather than a three-big minutes squeeze.
- Medical updates on Davis's finger/hand and Young's quadriceps/back before preseason.
- Preseason role evidence for Dybantsa: starter-level usage and on-ball reps would raise the adjustment; low-efficiency off-ball usage would lower it.
- Whether Washington keeps Middleton as a real rotation wing or treats him as trade/filler salary.
- Early-season closing lineups: Young-Dybantsa-George-Davis-Sarr is a different team from Young-Carrington-Dybantsa-Davis-Ayton or development-heavy bench groups.

## Data Quality And Uncertainty

- The only authoritative prior is `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json`; all team wins, strength, bands, playoff odds, `se_strength`, and `n_cold_start` above come from that file.
- The richer team-detail JSON is used only for roster rows, not for team-level wins/strength/odds. Its WAS team-level fields conflict with the authoritative standings prior and are not quoted as a prior.
- Public roster reporting on July 8 says Russell is out and Middleton is in; the local roster rows still include Russell and omit Middleton.
- Public reporting says Reese is a two-way player, while the local roster rows give him starter-level minutes.
- Dybantsa is a cold-start rookie in the model context, so his true NBA value could swing several wins in either direction.
- The rotation is not training-camp-settled, and public depth chart sources conflict on whether Trae, Dybantsa, Carrington, Coulibaly, Riley, George, Sarr, Ayton, or Davis are starters.
- Injury reporting for Davis and Young is central. This briefing does not assume they are fully healthy; it merely judges that the market/public roster state makes 24.2 slightly conservative if they play meaningful starter minutes.

## Sources

Local sources:

- `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` - authoritative WAS prior; read July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/p2_0/projections/projection_2026_27_teams.json` - non-authoritative roster context only; read July 9, 2026.
- `private-model-workspace/unified-rapm/daily_v5/out/depthcharts_2026_27.csv` - non-authoritative roster/depth context only; read July 9, 2026.
- `Rome/Basketball/NBA multi-agent forecasting company/Boss prompt for 30 NBA team research agents.md` - briefing structure; read July 9, 2026.

External public/free sources, accessed July 9, 2026:

- https://www.nba.com/player/203076/anthony-davis
- https://www.nba.com/player/1629027/trae-young
- https://www.nba.com/player/1642259/alex-sarr
- https://www.nba.com/news/trae-young-closer-wizards-debut
- https://www.nba.com/wizards/roster
- https://www.nba.com/wizards/news/wizardsselectaj-dybantsawithfirstoverall-pick-in-2026nba-draft
- https://www.nba.com/wizards/news/wizards-acquire-four-time-all-star-trae-young
- https://www.nba.com/wizards/news/wizards-acquire-10-time-all-star-anthony-davis
- https://www.nba.com/wizards/news/wizards-acquire-deandre-ayton
- https://www.nba.com/wizards/news/wizardssigntrae-young
- https://www.nba.com/wizards/news/wizardsacquirekhris-middleton
- https://basketball.realgm.com/nba/teams/Washington-Wizards/30/Rosters/Regular
- https://www.spotrac.com/nba/washington-wizards/yearly
- https://www.spotrac.com/nba/washington-wizards/overview/_/year/2026/sort/tax_total
- https://www.bulletsforever.com/washington-wizards-news/71487/wizards-acquire-khris-middleton-via-sign-and-trade
- https://www.bulletsforever.com/washington-wizards-news/71481/wizards-sign-felix-okpara-to-two-way-contract
- https://www.bulletsforever.com/washington-wizards-news/71469/wizards-announced-2026-summer-league-roster
- https://www.bulletsforever.com/washington-wizards-news/71298/aj-dybantsa-signs-rookie-contract-worth-66-91-million
- https://www.bulletsforever.com/washington-wizards-team-analysis/71062/aj-dybantsa-trae-young-anthony-davis-washington-wizards-analysis
- https://www.si.com/nba/wizards/onsi/projecting-wizards-starting-lineup-and-rotation-after-nba-draft-01kw51y44rx3
- https://www.azdesertswarm.com/basketball/81281/arizona-wildcats-in-nba-deandre-ayton-traded-wizards-caleb-love-signs-with-trail-blazers
- https://wizofawes.com/washington-wizards-grant-anthony-davis-longtime-wish-deandre-ayton-trade
