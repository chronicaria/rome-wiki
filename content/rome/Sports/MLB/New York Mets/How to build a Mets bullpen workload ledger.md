---
title: How to build a Mets bullpen workload ledger
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, pitching, bullpen, workload, data-method]
as_of: 2026-07-10T08:00:00-04:00
desk: New York Mets
review_after: 2026-07-17
---

A trustworthy Mets bullpen workload ledger records observable throwing and roster events at their original resolution, preserves missing warm-up information as unknown, and postpones availability judgments until the facts are assembled.

Up: [[New York Mets 2026]]

Related: [[How recent workload shapes Mets bullpen availability]] · [[How bullpen warm-ups complicate Mets availability estimates]] · [[How leverage changes Mets bullpen evaluation]] · [[New York Mets 2026 roster and transaction ledger]]

## The ledger is evidence infrastructure, not a fatigue detector

A bullpen workload ledger should answer a modest question well: **what publicly observable work had each Mets pitcher performed by a stated cutoff?** It should not claim to measure a pitcher’s complete physical load, diagnose fatigue, or reproduce the club’s internal availability board. Those stronger claims require information that public records usually do not contain: every bullpen throw, recovery testing, soreness, treatment, travel effects, private side sessions, and the intensity of each warm-up.

That boundary determines the design. Official game records can establish appearances, pitches, batters faced, innings, entry and exit states, and dates. Dated transactions can establish when a pitcher joined or left the active roster. Minor-league game records can fill the recent-work history of a recalled pitcher. Broadcasts, reporters, or club comments may document particular warm-up episodes. None supplies a complete census of throwing.

The ledger therefore stores **evidence**, not invented zeros. A box score showing no appearance means no recorded game appearance; it does not mean no throwing. A broadcast showing one warm-up means at least one observed warm-up; it does not mean exactly one occurred. The correct missing value for unobserved bullpen activity is `unknown`, never `0`.

This complements [[How recent workload shapes Mets bullpen availability]]. That note explains how workload changes the manager’s daily menu. This one explains how to create the underlying record so another analyst can reproduce, audit, and update the inference.

## Start with two tables, not one

The cleanest structure separates an **event table** from a **daily snapshot table**.

The event table is append-only. Each row describes one verifiable occurrence: a game appearance, a sourced warm-up, a roster move, an off day, a minor-league appearance, or an explicit availability statement. It preserves provenance and prevents a later judgment from overwriting the underlying fact.

The snapshot table is derived. At a fixed pregame or postgame cutoff, it summarizes the recent evidence for every pitcher who could matter to the Mets’ bullpen decision. It may calculate appearances and pitches over trailing windows and attach a cautious availability label. Because the snapshot can always be rebuilt from events, corrections remain visible.

Trying to keep everything in a single row per pitcher creates several problems. Multiple appearances disappear into totals. A pitcher who warms twice without entering cannot be represented honestly. A recall can make a pitcher appear artificially fresh if Triple-A events are absent. A corrected box score silently changes the historical record. Separating events from snapshots avoids these losses.

## The event schema

Each event needs an immutable identity and enough detail to support later calculations.

| Field | Meaning | Rule |
|---|---|---|
| `event_id` | Stable unique key | Combine date, game or source identifier, pitcher, event type, and sequence |
| `pitcher_id` | MLB person identifier | Prefer the official numeric ID over name matching |
| `pitcher_name` | Display name at capture | Never use as the only join key |
| `event_time` | Known timestamp | If only the date is known, record date precision explicitly |
| `event_type` | `mlb_game`, `milb_game`, `warmup_observed`, `transaction`, `statement`, `off_day` | Use a controlled vocabulary |
| `club_context` | Mets, Syracuse, opponent affiliate, rehabilitation assignment | Necessary across roster moves |
| `game_pk` | Official game identifier | Required for game events when available |
| `appearance_sequence` | Order of Mets pitchers used | Preserves bullpen cascade and role context |
| `innings_pitched` | Official innings | Store outs separately for arithmetic |
| `outs_recorded` | Integer outs | Avoid treating baseball’s `.1` and `.2` notation as decimals |
| `pitches` | Official pitches | Competitive pitches only unless the source says otherwise |
| `strikes` | Official strikes | Useful context, not a fatigue measure |
| `batters_faced` | Official batters faced | Captures work hidden by innings alone |
| `entry_state` | Inning, score, outs, runners, lineup position | Supports leverage and inherited-run review |
| `exit_state` | Outs, runners left, score | Separates workload from result |
| `warmup_count_observed` | Number explicitly documented | Null when not observed; never default to zero |
| `warmup_evidence` | Broadcast timestamp, report, or club quote | Required for a positive warm-up claim |
| `source_url` | Direct source | Prefer official game and transaction records |
| `captured_at` | Query timestamp | Live sources change |
| `verification_state` | `official`, `corroborated`, `single_secondary`, `unverified` | Indicates evidentiary strength |
| `notes` | Narrow qualification | Do not place an unsupported diagnosis here |

The outs field deserves special care. Baseball writes one and one-third innings as `1.1`, but that is notation, not the decimal 1.1. Store four outs as the integer `4`; render it as `1⅓` only for readers. Otherwise totals across appearances will be wrong.

Entry and exit states are not necessary for a simple pitch-count total, but they make the ledger much more valuable. Twenty pitches while finishing a clean low-leverage inning and twenty pitches after a rapid mid-inning warm-up with inherited runners are both twenty official pitches. Their preparation and game contexts differ. The ledger should preserve those differences without asserting that one imposed a known physiological multiplier.

## Build a source hierarchy

Primary records should control facts they directly establish.

1. **Official MLB box scores and game feeds** control game appearances, pitcher order, innings, batters faced, pitches, strikes, and scoring events.
2. **Official MLB transaction pages and roster records** control selections, recalls, options, designations, activations, and injured-list placements.
3. **Official Minor League Baseball game records** supply recent game work for recalled, optioned, or rehabilitating pitchers.
4. **Club statements and attributable manager or player comments** can establish a declared restriction, planned rest day, or described warm-up.
5. **Broadcast video and timestamped reporting** can establish an observed warm-up when the primary feeds do not record it.

The hierarchy is field-specific. A broadcast can be the best source for who visibly warmed, while the official box score remains the best source for competitive pitches. A reporter quoting the manager that a reliever was unavailable is stronger evidence of the manager’s declared plan than inferring unavailability from non-use. Yet a pregame declaration can become outdated during a long or extra-inning game; the ledger should retain the statement with its timestamp and separately record what occurred.

Do not let a convenient secondary table replace the underlying game identifier and direct URL. Aggregators can help discover events, but official sources make corrections and auditing easier. Every derived snapshot should retain the event IDs that produced it.

## The warm-up problem requires three-valued logic

Public workload work usually fails by collapsing three states into two. For every potential warm-up episode, the actual public record allows:

- **observed yes:** a source explicitly shows or reports that the pitcher warmed;
- **observed no:** an unusually strong source explicitly establishes that the pitcher did not warm during a defined period; or
- **unknown:** no reliable public evidence resolves it.

The third state will dominate. Television cameras do not continuously show the bullpen. Radio descriptions are selective. Reporters may mention a reliever getting hot only when it affects strategy. Even a visible warm-up does not reveal its exact pitch count or intensity. “Twice up in the bullpen” is a useful sourced event, but it is not equivalent to a game appearance and should not be converted into a fabricated pitch total.

Accordingly, the ledger should never estimate warm-up pitches by multiplying observed episodes by a standard number. Pitchers have different routines; a quick get-hot sequence differs from routine tossing; and a pitcher may sit and restart. Keep `warmup_count_observed`, `warmup_intensity`, and `warmup_pitches` null unless the source specifically establishes them. If a broadcast says only that a pitcher “was getting loose,” quote or paraphrase that limited fact and do not upgrade it to “fully warmed.”

This is the central constraint from [[How bullpen warm-ups complicate Mets availability estimates]]: game pitches form a lower bound on known competitive throwing, not a complete estimate of total arm stress.

## Reconstruct the roster boundary before calculating load

A Mets-only major-league query can badly misstate a pitcher’s recent work. A reliever recalled this afternoon might have thrown 30 pitches for Syracuse two days earlier. A rehabilitation pitcher may have worked in Binghamton. A pitcher optioned after a two-inning MLB appearance remains relevant to understanding why the club sought a fresh roster replacement.

For each cutoff, first construct the eligible population:

1. pitchers on the active roster at the cutoff;
2. pitchers whose transaction is announced but whose effective timing needs confirmation;
3. likely bulk or opener candidates classified by observed role rather than reputation; and
4. newly recalled or activated pitchers whose preceding fourteen days must be traced across levels.

Then walk backward through dated transactions. Join by official player ID, not spelling. Pull the previous affiliate’s game events until the chosen trailing window is complete. Mark rehabilitation appearances separately because their role and planned workload may differ from ordinary affiliate use. The transaction establishes movement, not physiological freshness or the purpose of the move.

The July 8–9 sequence described in [[New York Mets 2026 rotation and bullpen map]] shows why this matters. Tobias Myers was recalled, covered two innings, and was optioned the next day as Dan Hammer was selected. A per-day active-roster snapshot captures the churn; an event ledger preserves the innings that motivated the next day’s changed menu without claiming the club’s private rationale.

## Derive daily workload fields transparently

At a timestamp such as three hours before first pitch, calculate only fields that can be reproduced:

| Derived field | Calculation | Limitation |
|---|---|---|
| `days_since_game` | Calendar difference from last official appearance | Does not measure rest from throwing |
| `app_3d`, `app_5d`, `app_7d` | Count game appearances in trailing calendar windows | Same count can contain very different pitch totals |
| `pitches_3d`, `pitches_5d`, `pitches_7d` | Sum official competitive pitches across MLB and MiLB | Excludes undocumented work |
| `bf_3d`, `bf_7d` | Sum batters faced | Does not capture pickoffs or fielding effort |
| `outs_3d`, `outs_7d` | Sum integer outs | Role and intensity still differ |
| `consecutive_days_used` | Count adjacent dates with appearances ending at cutoff | Off days and doubleheaders require explicit handling |
| `multi_inning_recent` | Flag appearances of four or more outs, with the threshold stated | Threshold is descriptive, not a medical rule |
| `warmups_observed_3d` | Count only sourced episodes | A lower bound, not total warm-ups |
| `warmup_completeness` | Usually `incomplete` | Prevents false certainty |
| `roster_state` | Derived from dated official moves | Active does not mean unrestricted |

Calendar windows need declared boundaries. “Last three days” could include today, mean the three completed dates before today, or mean the previous 72 hours. Choose one convention and publish it. For a pregame Mets card, a practical definition is the current game date plus the previous two calendar dates, excluding any event after the snapshot timestamp. This preserves doubleheaders and avoids using future information.

Do not combine these fields into a universal fatigue score unless that model has been independently validated and its uncertainty published. A weighted sum such as pitches plus ten points per consecutive day may look scientific while merely encoding arbitrary preferences. The safer public output is a profile: recent pitches, batters, outs, frequency, long outings, observed warm-ups, roster movement, and missingness.

## Add interpretation only after the record is frozen

The daily snapshot may attach a decision-oriented label, but it must remain visibly separate from the facts. Useful labels include:

- **officially restricted:** a current official transaction or explicit club statement establishes non-use or a limit;
- **elevated recorded workload:** a clearly stated recent pattern, such as consecutive-day use or a long appearance, is present;
- **light recorded game workload:** few recent official game events, while warm-up and private-work status remain unknown;
- **role uncertain:** newly selected, recalled, activated, or shifted between starting and relief;
- **public status unresolved:** conflicting, stale, or insufficient evidence prevents a stronger label.

Avoid “available” and “unavailable” unless the club has said so or the roster rules settle it. Even “likely available” is an inference that should include reasons and confidence. A pitcher can be active, lightly used in games, and privately unavailable. Another can have worked on consecutive days and still be used again. There is no public universal threshold that converts a pitch total into readiness for an individual.

The label should cite its ingredients. For example: “elevated recorded workload—appeared on two consecutive dates, 39 official pitches total; warm-up history incomplete; no public restriction found as of 16:00 EDT.” This is auditable and correctly bounded. “Tired” is not.

## Verification and correction workflow

Before publishing a snapshot:

1. reconcile the official schedule against all event rows in the window;
2. confirm that every game row has the correct game ID and pitcher ID;
3. convert innings notation to integer outs and recompute rendered totals;
4. compare the event sequence with the official box score;
5. inspect transactions at both ends of the window;
6. trace every newly active pitcher through his previous club or affiliate;
7. require a direct citation for every positive warm-up or restriction claim;
8. test that null warm-ups remain null through exports and formulas;
9. freeze the snapshot timestamp and timezone; and
10. preserve corrections as logged amendments rather than silently changing old published conclusions.

Automated checks can catch duplicated game events, negative rest intervals, an active-roster snapshot inconsistent with transactions, or totals that fail to match source rows. Human review is still needed for ambiguous transaction timing, suspended games, doubleheaders, opener/follower roles, and the wording of warm-up evidence.

Versioning matters because official feeds can be corrected and live rosters change. Store `captured_at`, source URL, and—when feasible—a source response hash or archived raw identifier. If a correction changes a workload classification, publish both the corrected fact and the effect on the earlier interpretation.

## A compact reader-facing Mets card

The public card should expose enough evidence to prevent the label from becoming an oracle:

| Pitcher | Last game | 3-day record | 7-day record | Observed warm-ups | Roster/role note | Public interpretation |
|---|---|---|---|---|---|---|
| Example Met | date, IP, pitches, BF | appearances / pitches / outs | appearances / pitches / outs | `1 sourced` or `unknown` | recalled, bulk, short relief, etc. | bounded label plus confidence |

Every table needs an as-of line and this warning: **warm-up evidence is incomplete; absence of a documented warm-up does not establish no throwing.** Link each pitcher row or footnote to the underlying official games and any warm-up report. When the club explicitly states a pitcher is down, show the statement’s time because plans can change.

The card should not rank relievers by “freshness.” It should help a reader ask better questions: Who has the largest recorded burden? Which pitcher crossed levels recently? Who supplied multiple innings? Which apparent rest day includes a sourced warm-up? Where is the evidence simply missing? Those questions support the leverage analysis in [[How leverage changes Mets bullpen evaluation]] without turning incomplete public data into medical certainty.

## Why it matters

Bullpen decisions are path-dependent. A four-inning start today can force several relievers into work, change tomorrow’s preferred matchups, and trigger a transaction for fresh coverage. A seven-inning start can restore options. A reliever who never enters can still incur meaningful preparation work. A recalled pitcher brings his recent minor-league workload with him. Without an event ledger, those connections dissolve into a misleading depth chart.

For Mets analysis, the ledger creates a common factual layer beneath game review, roster evaluation, trade analysis, and managerial criticism. It makes claims falsifiable. If an analyst says a reliever carried elevated recorded workload, readers can see the appearances and pitches. If warm-up evidence is incomplete, the table says so. If a transaction changed the staff, the active snapshot is reconstructed from dated moves rather than today’s live roster.

Most importantly, the method resists hindsight. The pregame snapshot contains only information available at its cutoff. A later appearance does not prove the pitcher was unrestricted beforehand; it proves that he entered later. A pitcher’s success does not prove the workload decision was risk-free, and a poor result does not prove fatigue caused it. Keeping facts, interpretations, and outcomes in separate fields produces a more honest Mets record.

## Verification notes

- The proposed fields were checked against the information exposed in MLB’s official box-score, schedule, roster, transaction, and glossary sources used by the linked Mets workload articles.
- Integer outs are required so baseball innings notation is never treated as decimal arithmetic.
- The method explicitly joins MLB and minor-league events across roster moves and does not infer freshness from a recall or selection.
- No universal pitch, appearance, consecutive-day, or warm-up threshold is presented as proof of fatigue or availability.
- Undocumented bullpen activity remains `unknown`; observed warm-ups are lower-bound events and are never converted to estimated pitches without a direct source.
- Interpretation labels are analytical outputs, not Mets medical or managerial declarations.

## Sources

- [MLB StatsAPI — schedule endpoint](https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=121) — official game identifiers and dated Mets schedule records used to enumerate games.
- [MLB StatsAPI — example official box score](https://statsapi.mlb.com/api/v1/game/823606/boxscore) — official pitcher sequence, innings, pitches, strikes, and batters faced for the Mets’ July 9, 2026 game.
- [MLB — Mets active roster](https://www.mlb.com/mets/roster/) — official live roster; must be combined with dated transactions for historical snapshots.
- [MLB — Mets transactions](https://www.mlb.com/mets/roster/transactions) — official roster movement source; dated pages should control event timing.
- [MLB — Mets transactions, July 8, 2026](https://www.mlb.com/transactions/2026/07/08/mets) — official example of injured-list, designation, recall, and selection events changing the bullpen population.
- [MLB — Mets transactions, July 9, 2026](https://www.mlb.com/transactions/2026/07/09/mets) — official example of an option and selection immediately after a relief appearance.
- [MLB Glossary — Pitch Count](https://www.mlb.com/glossary/standard-stats/pitch-count) — official definition of pitches thrown by a pitcher in a game.
- [MLB Glossary — Batters Faced](https://www.mlb.com/glossary/standard-stats/batters-faced) — official definition of the number of batters completing a plate appearance against a pitcher.
- [MLB Glossary — Innings Pitched](https://www.mlb.com/glossary/standard-stats/innings-pitched) — official explanation of innings notation and outs recorded.
- [MLB Glossary — Three-Batter Minimum](https://www.mlb.com/glossary/rules/three-batter-minimum) — official deployment constraint relevant to interpreting reliever entry and role.
- [MLB Glossary — Injured List](https://www.mlb.com/glossary/transactions/injured-list) — official roster-status framework; an IL placement is evidence distinct from informal workload inference.

## Open questions

- Can a consistent broadcast-review protocol capture Mets warm-up episodes without implying that the resulting sample is complete?
- Which official minor-league endpoint most reliably preserves pitch counts and batters faced across all affiliates and rehabilitation assignments?
- How often do the Mets’ stated pregame availability decisions differ from what later game conditions require?
- Should a public ledger retain video timestamps or short paraphrases for observed warm-ups when durable broadcast links are unavailable?
- Which derived workload profiles predict subsequent Mets usage after controlling for role, leverage, opponent pocket, starter length, and roster moves?
