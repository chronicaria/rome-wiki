---
title: 2026-27 NBA cross-team findings
created: 2026-07-09
source: mixed
status: seed
tags: [basketball, nba, forecasting, research]
---
# Cross-Team Findings

Synthesis from the corrected-prior run: thirty independent team agents used public web research and `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` as the only authoritative standings prior.

## Stance Distribution

| Stance | Count |
|---|---:|
| `MODEL_TOO_HIGH` | 6 |
| `MODEL_TOO_LOW` | 16 |
| `MODEL_ABOUT_RIGHT` | 8 |

## Biggest Model-High Challenges

GSW (-4.0), TOR (-3.3), CHA (-2.6), HOU (-2.6), BOS (-2.5), SAC (-1.7)

The strongest downward challenges generally came from teams where the public prior assumes a high regular-season floor but the agents found fragile minutes or availability mechanisms: older stars carrying large usage, post-injury workload uncertainty, aggressive role-player valuations, or crowded rotations where the best defensive lineup and best spacing lineup may not be the same.

## Biggest Model-Low Challenges

CHI (+5.0), PHI (+4.1), DET (+3.2), LAL (+3.2), WAS (+3.1), UTA (+3.1), ATL (+2.8), DEN (+2.6), SAS (+2.5), IND (+2.4)

The strongest upward challenges generally came from teams where the public prior is pessimistic relative to added talent, young-player development, or a healthier rotation path. These are not model replacements: the agents framed the deltas as judgmental research adjustments, usually tied to specific players and lineup mechanisms.

## Teams Where The Model Looks Most Robust

MIN (+0.5), POR (-0.5), BKN (+0.8), NYK (+1.0), DAL (-1.0), LAC (+1.0), MEM (-1.0), OKC (-2.0)

The about-right teams tended to have offsetting mechanisms: real upside, but already priced playoff odds; or roster weaknesses that were visible in the public prior and not strong enough to justify a large directional move.

## Common Minutes Assumptions Challenged

- Several agents challenged whether high-minute starter allocations survive training camp once public depth charts and recent transactions are reconciled.
- Multiple reports flagged crowded rotations where players are individually useful but hard to combine without sacrificing spacing, rim protection, or ballhandling.
- Veteran-heavy teams drew questions about whether regular-season MPG should be managed down even if the player remains highly effective per minute.

## Common Rookie/Cold-Start Issues

- Agents repeatedly treated `n_cold_start` as a warning label, not a direct downgrade. The key question was whether rookies/cold rows are real rotation pieces or merely deep-bench placeholders.
- Teams with several cold-start players often had wider thesis uncertainty because public reporting can confirm draft status and roster placement but not NBA translation.

## Common Aging/Injury Issues

- Availability was the most common downward mechanism: post-surgery returns, older stars, recurring soft-tissue histories, and teams whose depth collapses if one top player misses time.
- Some agents also argued the prior was already conservative where expected games were visibly low, producing smaller or no negative delta.

## Teams Dependent On One Or Two Uncertain Players

Several briefings highlighted concentrated dependence on star health or a single high-leverage role: BOS with Tatum/George and the center hierarchy, HOU with Durant/VanVleet, SAS with Wembanyama, GSW with Curry/Butler, and WAS with Davis/Young. These teams should be revisited after training-camp availability and rotation news.

## Recommended Next Model/Data Improvements

- Keep `private-model-workspace/andrewjparkus.github.io/projection_2026_27.json` as the explicit source of truth in every boss packet.
- Mark stale team-detail artifacts as roster-context-only until regenerated from the tuned public prior.
- Export a single reconciled team packet per franchise containing public prior, roster rows, depth chart rows, and source timestamps.
- Add machine-readable fields for agent stance, deltas, confidence, and cited sources after each briefing is accepted.
- Run a follow-up pass after training-camp depth charts and preseason injury reports are available.
