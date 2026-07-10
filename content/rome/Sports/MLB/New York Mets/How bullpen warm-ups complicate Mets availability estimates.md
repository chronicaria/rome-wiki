---
title: How bullpen warm-ups complicate Mets availability estimates
created: 2026-07-10
source: llm
status: seed
tags: [sports, baseball, mlb, new-york-mets, bullpen, workload]
as_of: 2026-07-10 08:00 EDT
desk: New York Mets
review_after: 2026-08-10
---
Bullpen warm-ups are real throwing exposure but incompletely observed public data, so a Mets availability estimate should record sourced warm-up episodes separately, treat silence as missingness, and stop short of converting either into a medical conclusion.

Up: [[New York Mets 2026]]

Related: [[How recent workload shapes Mets bullpen availability]] · [[How leverage changes Mets bullpen evaluation]] · [[Why Mets reliever performance is volatile]]

## The hidden denominator

The public record makes a relief pitch look unusually clean. A pitcher either appears or does not; if he appears, the box score supplies innings, batters faced, and an official number of pitches. Those observations are indispensable. They are also an incomplete description of what the pitcher did to become ready.

A reliever may play catch, begin throwing in the bullpen, increase intensity, sit when the inning changes, resume when trouble returns, and still never cross the outfield gate. Another may warm once and enter. A third may warm, enter, throw an inning, return for another inning, and receive additional throws between frames. Only the competitive pitches belong to the familiar pitching line. The preparatory throws and the start-stop pattern can impose nonzero work without producing an appearance.

That creates a denominator problem for anyone asking whether a Mets reliever is available tonight. Game logs enumerate observed competitive deliveries; they do not enumerate all throwing that might influence the club's decision. The gap is especially important for relievers because their official outings are short, their recovery intervals can be short, and managers can initiate a warm-up without completing a pitching change.

The right response is not to reject public workload analysis. It is to define its boundary. Official appearances establish a verified floor of competitive work. Sourced warm-up observations can raise the floor of known activity. The remaining bullpen activity is unknown. None of those categories, by itself, reveals soreness, tissue condition, recovery, or the club's private medical assessment.

## What an appearance proves—and what it does not

An official Mets appearance supports a limited set of strong claims:

- the pitcher entered that game;
- the official line records his innings, batters faced, and game pitches;
- the game date and order of pitchers establish timing and role context; and
- pitch-level Statcast data can describe tracked competitive pitches, subject to the feed's definitions and missing fields.

MLB defines number of pitches as the total pitches a pitcher throws in a game. Baseball Savant's Statcast search is likewise organized around pitch events tied to games, pitchers, batters, descriptions, and results. Those systems are designed to describe competition. They are not advertised as complete logs of bullpen throws.

Therefore, “12 pitches” should mean **12 recorded game pitches**, not “12 total throws that day.” “Did not pitch” should mean **no official appearance**, not “did not throw.” The distinction sounds small, but it prevents the most common analytical error: treating a missing category as a measured zero.

An appearance also does not prove that a pitcher was fully available before the game or fully recovered afterward. Clubs sometimes use pitchers under constraints, and a manager's choice reflects matchup, score, upcoming schedule, roster depth, communication with staff, and information the public does not possess. Conversely, non-use does not prove unavailability. A reliever may be fresh and simply unnecessary.

This is why [[How recent workload shapes Mets bullpen availability]] properly produces a graded estimate rather than a binary medical label. Recent game work informs the estimate; it does not settle it.

## Warm-up evidence comes in unequal forms

Public warm-up evidence ranges from direct and time-specific to vague and inferential. A useful Mets ledger should preserve those differences instead of collapsing them into one confident number.

### Directly observed, identified activity

The strongest public evidence is a broadcast shot or contemporaneous report that identifies a pitcher throwing in the bullpen at a particular point in a game. It can support a statement such as, “Pitcher X was shown warming in the seventh inning.” If the footage shows him stop and later resume, it may support two observed episodes.

Even this evidence usually does not support an exact throw count. The camera may arrive after the session started, leave before it ended, or show only part of the bullpen. “Observed warming” is stronger than “possibly warming,” but weaker than a complete workload measurement.

### Official or attributable postgame description

A manager, coach, pitcher, or team report may say that a reliever “got hot,” warmed multiple times, was preparing for a particular hitter, or was not going to be used. Such a statement can establish the described event, with attribution. It may also explain a decision better than a box score alone.

Language matters. “Got hot twice” is evidence of two preparations, not necessarily two identical sessions. “Was up” may mean activity began; it does not define duration, pitch count, intensity, or recovery cost. Quotations should be retained as observations rather than translated into invented units.

### Broadcast implication without confirmation

Announcers may mention movement in the bullpen without identifying the pitcher, speculate who would face the next batter, or infer that a reliever is unavailable. These comments can be leads, but they should not receive the same evidentiary weight as visible identification or a club statement. A later camera shot, official recap, or reporter account may confirm or contradict them.

### Silence

No mention in a game story, live blog, or broadcast transcript is not evidence that no one warmed. Coverage follows action. A routine warm-up that does not lead to entry may never become news, and a camera cannot provide continuous observation of every bullpen mound.

Silence must therefore remain **unobserved**, not be coded as zero. This rule is the key safeguard against false precision.

## A practical three-ledger model

The cleanest way to combine these data is to keep three related ledgers rather than manufacture a single total.

### 1. Competitive appearance ledger

Record the official date, opponent, home or road setting, innings, batters faced, pitches, inherited runners, leverage context, and whether the outing crossed an inning boundary. This is the most reproducible layer. It should remain unchanged by any estimate of hidden work.

### 2. Observed warm-up ledger

Create one row for each sourced episode with:

- game and approximate inning or timestamp;
- pitcher identity and confidence in the identification;
- source type: video, official statement, attributable report, or commentary;
- what was actually observed or said;
- whether the pitcher subsequently entered;
- whether a separate later episode was observed; and
- the exact source URL.

The natural unit is an **episode**, not a fabricated pitch count. If a source supplies an exact count and explains how it was obtained, store that as a reported count with attribution. Do not generalize it to unobserved sessions.

### 3. Missingness and context ledger

Record what the public sources do not establish: unobserved bullpen throws, catch play, intensity, duration, rest intervals, treatment, symptoms, and the club's readiness assessment. Add schedule context—consecutive game days, travel, extra innings, starter length, and upcoming off days—without pretending those variables have universal physiological weights.

This separation keeps two propositions true at once: an observed warm-up is meaningful evidence of activity, and the public record remains incomplete.

## Why counting “times up” still requires caution

Warm-up episodes appear more tractable than pitches, but even episode counts have ambiguity. A pitcher can throw, pause while his team bats, and resume. Is that one continuous preparation or two “ups”? Broadcast language and club terminology may not use a standardized threshold. Two sessions can also differ radically in duration and intensity.

Accordingly, an episode count should describe the evidence, not claim physiological equivalence. “Observed in two distinct bullpen windows” is defensible if two windows were documented. “Equivalent to a 20-pitch outing” is not defensible without a validated conversion and the underlying intensity data.

This matters when comparing pitchers. One reliever's single long, high-intensity warm-up may represent more throwing than another's two brief ramps. A count of ups can identify repeated preparation and guide follow-up questions, but it cannot rank fatigue with certainty.

The same caution applies across days. Adding game pitches and estimated bullpen pitches into one total assumes that all throws have comparable stress and that the estimates are accurate. Neither assumption is generally available to a public Mets analyst. Volume, intensity, pitch type, mechanics, recovery, and individual history all matter; public evidence rarely captures the whole combination.

## What broader research can—and cannot—transfer to the Mets

Research outside MLB reinforces the missing-workload problem but does not supply a plug-in coefficient for a major-league bullpen.

An observational study of high-school pitchers measured game pitches alongside bullpen and between-inning warm-ups. It found substantial throwing volume outside the official game count and argued that standard counts can omit meaningful acute workload. A review of baseball workload monitoring similarly identified warm-up, long toss, flat-ground work, bullpens, and between-inning throws as commonly neglected components.

Those studies justify the direction of the claim: competitive pitch count is incomplete. They do not justify applying a youth average or percentage to a particular Mets reliever. Major-league pitchers differ in age, routine, role, training, intensity, monitoring, and physical history. The high-school study's sample and setting cannot tell us how many throws a Mets reliever made during an unseen session, how stressful those throws were, or whether he can pitch the next night.

MLB's 2024 report on pitcher injuries also emphasized the need to study non-game training, fatigue, velocity, and max-effort work. That strengthens the case for broader workload measurement while underscoring how much remains unresolved. The report is not a diagnostic rule for an individual pitcher and does not turn a broadcast warm-up into evidence of injury.

The transferable conclusion is methodological: track the exposure categories that can be observed, acknowledge the ones that cannot, and resist conversions unsupported by the population and measurement method.

## Rules and timing explain only part of the load

MLB's warm-up-pitches glossary explains that pitchers taking the mound at the start of an inning or in relief may throw warm-up pitches within the league's countdown parameters; emergency injury replacements receive what the umpire allows. This establishes that on-mound preparatory pitches exist in the game's official procedure.

It does not capture the earlier bullpen session. The relief-change clock begins when the entering pitcher crosses the warning track, or the foul line for an on-field bullpen. By then, the pitcher ordinarily has already prepared to enter. Counting only the televised pitches from the game mound would therefore miss the very bullpen activity at issue.

Nor does a timer reveal intensity. A finite window constrains time, not total prior throwing or biological cost. It is useful rules context, not a workload conversion table.

## How warm-ups change a Mets availability estimate

Warm-up evidence should modify confidence and priority, not issue a medical verdict.

Suppose two Mets relievers both have no official appearance on Tuesday. A verified report shows that Reliever A warmed twice during a volatile late inning; nothing is reported about Reliever B. The responsible Wednesday notation is:

- A: no Tuesday appearance; two reported warm-up episodes; total throwing and current availability unknown.
- B: no Tuesday appearance; warm-up activity unobserved; current availability unknown.

It would be wrong to label B as having zero warm-up load. It would also be wrong to declare A unavailable. The evidence supports a relative informational difference: more activity is known for A. The club may still prefer A because his sessions were brief, his recovery is excellent, the matchup demands him, or B has an undisclosed constraint. Public analysis cannot resolve those possibilities.

Now suppose A also threw 28 official pitches Monday. The Monday appearance plus Tuesday warm-ups creates a stronger workload reason to downgrade confidence in full availability Wednesday. “Downgrade” remains an analytical estimate, not a claim that A is hurt. The language should be conditional: **recent recorded work plus reported preparation may reduce the likelihood of unrestricted use, all else equal**.

This approach is especially valuable when reviewing a manager after the fact. If the preferred high-leverage reliever did not enter, the analyst should ask whether recent appearances, observed warm-ups, matchup sequence, inning structure, roster options, or a club statement explain the choice. The absence of an answer is not permission to invent one.

## Failed shortcuts

Several tempting methods should be rejected.

**Add a fixed warm-up multiplier to every appearance.** This assumes a universal routine and ignores warm-ups without entry. It produces comparable-looking numbers from unsupported inputs.

**Code non-appearance days as rest days.** A non-appearance day can include catch play and bullpen activity. “No recorded game pitches” is accurate; “complete rest” generally is not publicly established.

**Infer fatigue from non-use.** Managers preserve relievers for tactical reasons, and games may never create the planned situation. Non-use alone cannot distinguish fatigue from strategy.

**Infer injury from repeated warm-ups, velocity movement, or roster silence.** These can motivate questions, but numerous non-medical explanations remain. Private symptoms and evaluations are outside the data.

**Treat every broadcast mention as verified.** Commentary varies in access and precision. Preserve attribution and seek visual, official, or independently reported confirmation.

**Use amateur averages as MLB estimates.** External research can demonstrate missingness without estimating an individual major-leaguer's hidden workload.

## A defensible public notation

A daily Mets bullpen table can communicate uncertainty with compact labels:

| Field | Allowed statement | Statement to avoid |
| --- | --- | --- |
| Appearance | “Threw 22 official pitches July 9” | “Threw only 22 times that day” |
| Observed warm-up | “Shown warming in the eighth; later entered” | “Warm-up consisted of 14 pitches” without a count source |
| Warmed, no entry | “Reported up twice; did not appear” | “Had the workload of an inning” |
| No evidence | “No warm-up observation located” | “Did not warm” |
| Availability | “Lower-confidence option given recent recorded work” | “Unavailable” without attribution |
| Health | “No public medical conclusion” | diagnosis from usage, velocity, or body language |

The table should include an as-of time because new reporting can change the evidence. It should also distinguish observation time from publication time: a postgame story published after midnight may describe an episode that occurred the prior evening.

Confidence labels can help. **Confirmed** might require identifiable video or a direct attributable statement. **Reported** could describe a credible contemporaneous account not independently visible. **Unverified** should remain a lead outside the workload total. **Unobserved** means no evidence was located, not that the event did not occur.

## Alternatives and uncertainty

Warm-up burden is only one explanation for a usage pattern. Platoon matchup, batter quality, leverage, inning, score margin, starter length, extra-inning risk, travel, roster transactions, and the next game's expected starter all affect bullpen decisions. A reliever may be held for a later pocket that never arrives. Another may enter despite recent work because the immediate game state dominates the future cost.

The physical meaning of a warm-up is also uncertain. Throw count alone is an incomplete load measure; intensity and mechanics matter. Yet intensity is rarely available publicly, and subjective visual judgments are unreliable. Even a complete video would not expose internal sensation, recovery testing, treatment, or the coaching plan.

For that reason, this framework is an epistemic tool rather than a medical model. It improves the wording of what is known, highlights why a static depth chart can fail, and records evidence that box scores omit. It cannot reproduce the Mets' internal availability board.

## Why it matters

Mets bullpen analysis often turns on counterfactuals: why one reliever entered, why another stayed seated, and who might cover high-leverage outs tomorrow. Warm-ups complicate all three because they create activity that can affect preparation and recovery without leaving an official appearance.

Ignoring that activity overstates the completeness of public game logs. Estimating it too aggressively creates a different error: precise workload totals and health narratives that the evidence cannot support. The three-ledger model preserves the useful middle ground. It treats official pitches as verified competitive exposure, records warm-up evidence at its actual strength, and makes missingness visible.

That discipline improves both real-time availability estimates and retrospective criticism. It also protects players from unsupported medical inference. The honest Mets conclusion is often conditional: recent appearances and documented warm-ups alter the workload picture, but only the club and player possess the full readiness information.

## Sources

- [MLB Glossary — Warmup Pitches](https://www.mlb.com/glossary/rules/warmup-pitches) — official rules explanation of warm-up timing for inning starts, relief changes, and emergencies; accessed July 10, 2026.
- [MLB Glossary — Number of Pitches](https://www.mlb.com/glossary/standard-stats/number-of-pitches) — official definition of the game pitch-count statistic; accessed July 10, 2026.
- [Baseball Savant — Statcast Search CSV Documentation](https://baseballsavant.mlb.com/csv-docs) — official field definitions for competitive pitch-event data; accessed July 10, 2026.
- [Baseball Savant — Statcast Search](https://baseballsavant.mlb.com/statcast_search) — official per-pitch, per-game, player, team, and season query interface; accessed July 10, 2026.
- [MLB — Report on Pitcher Injuries overview](https://www.mlb.com/news/mlb-releases-report-on-pitcher-injuries-2024) — league account of its 2024 expert study and its calls for research on non-game activity and fatigue; published December 17, 2024; accessed July 10, 2026.
- [Zaremski et al. — Unaccounted Workload Factor: Game-Day Pitch Counts in High School Baseball Pitchers](https://pmc.ncbi.nlm.nih.gov/articles/PMC5894908/) — observational measurement of game, bullpen, and between-inning pitches; *Orthopaedic Journal of Sports Medicine* 6(4), 2018; accessed July 10, 2026.
- [Dowling et al. — A Review of Workload-Monitoring Considerations for Baseball Pitchers](https://pmc.ncbi.nlm.nih.gov/articles/PMC7534929/) — peer-reviewed review of volume, intensity, and commonly omitted throwing activities; *Journal of Athletic Training* 55(9), 2020; accessed July 10, 2026.
- [Meister et al. — The Relationship Between Pitching Volume and Arm Soreness in Collegiate Baseball Pitchers](https://pmc.ncbi.nlm.nih.gov/articles/PMC6350667/) — study separating catch, long toss, flat ground, practice bullpen, game bullpen, and competitive pitching; *International Journal of Sports Physical Therapy* 14(1), 2019; accessed July 10, 2026.

## Open questions

- Can a repeatable review of Mets broadcasts measure how often identifiable warm-up episodes occur without a subsequent appearance, while documenting camera-coverage gaps?
- Which source language—“up,” “hot,” “throwing,” or “ready”—has a stable operational meaning across Mets broadcasts and club statements?
- Can independent research in professional relievers estimate the relationship between warm-up episode structure and next-day performance without using health outcomes as a proxy?
- How should a public ledger distinguish one continuous preparation interrupted by game action from two genuinely separate ramp-ups?
- Will MLB or Statcast ever expose standardized bullpen-activity data, and what privacy or competitive concerns would limit publication?
