---
title: 2026 Senate race dossier template
created: 2026-07-10
source: llm
status: seed
tags: [politics, elections, united-states, 2026-midterms, senate, research-methods]
as_of: 2026-07-10
desk: 2026 US midterms
review_after: 2026-07-15
---
Every 2026 Senate race dossier should separate official race existence, ballot status, FEC activity, ratings, polls, finance, and uncertainty before turning those signals into a control claim.

Up: [[2026 Senate control path]] - Related: [[2026 United States midterm elections]] - [[Campaign cash as an electoral signal]] - [[Reading congressional polls without overreacting]] - [[2026 midterm money map]] - [[Race calls certification recounts and contests]]

## The template's job

A Senate race dossier is not a campaign blog, a prediction market note, or a place to paste every story about a candidate. It is the canonical, auditable record for one contest: `2026 <state> Senate election`. Its first job is to tell Andrew what the race legally is, who is eligible or plausibly seeking to appear on the ballot, what evidence exists, what does not exist yet, and how the race fits into [[2026 Senate control path]].

That requires a stricter structure than ordinary political coverage. The 2026 Senate map contains 33 regular Class II elections plus special elections in Florida and Ohio. The regular Class II seats have terms ending January 3, 2027; the special elections are vacancy races attached to different original terms. Both kinds of contests count toward Senate control, but they do not have identical legal histories, term ends, certification questions, or candidate-status evidence. A dossier that flattens them into one undifferentiated "Senate race" category loses the very facts that can matter in a close-control scenario.

The minimum dossier should therefore answer five questions before it offers analysis:

1. What office and term is being filled?
2. Which state authority confirms the election, calendar, candidates, ballot status, and result?
3. Which FEC candidate and committee records exist, and what do they prove or not prove?
4. What rating, polling, finance, and campaign evidence exists as of a dated scan?
5. What uncertainty remains unresolved, and what evidence would resolve it?

The dossier may be short when evidence is thin, but it should not be vague. "No public poll located as of July 10, 2026" is useful. "Race is quiet" is not. "Candidate has filed an FEC Form 2 but state ballot qualification is not yet confirmed" is useful. "Candidate is running" may be wrong if it silently turns federal campaign-finance activity into official ballot access.

## Frontmatter and opening block

Use the standard Rome frontmatter plus date-sensitive committee fields:

```yaml
---
title: 2026 <state> Senate election
created: 2026-07-10
source: llm
status: seed
tags: [politics, elections, united-states, 2026-midterms, senate, <state-slug>]
as_of: 2026-07-10
desk: 2026 US midterms
review_after: 2026-07-15
---
```

The first sentence should state the race's control relevance without pretending certainty. A good opening looks like this:

`The 2026 <state> Senate election is a <regular Class II / special> contest for <term>, currently held by <incumbent/caucus>, and its control importance depends on <defense/pickup role>, candidate field confirmation, and post-<date> finance evidence.`

Immediately below that, include:

`Up: [[2026 Senate control path]]`

Then add related links only when they do work: [[Campaign cash as an electoral signal]] for finance, [[Reading congressional polls without overreacting]] for polls, [[Race calls certification recounts and contests]] for post-election status, and state or candidate notes only if they already carry durable evidence. Do not create empty candidate biography shells merely because the race has many names.

## Minimum facts table

Every Senate dossier should begin with a compact table. It keeps the official facts separate from interpretation and makes stale evidence visible.

| Field | Required content | Evidence rule |
|---|---|---|
| Contest | `2026 <state> Senate election`; regular Class II or special election. | U.S. Senate class roster for regular Class II; state election authority and vacancy record for specials. |
| Seat and term | Incumbent, party/caucus, class, term start/end, and whether the winner fills a full term or unexpired term. | Senate roster, state writ/directive, sample ballot, candidate list, or official election calendar. |
| Control role | Democratic defense, Republican defense, or special vacancy defense; link to control arithmetic. | Derived from [[2026 Senate control path]], not from ratings alone. |
| State authority | Exact secretary of state or election-board page used for calendar, candidates, ballot, results, recounts, and certification. | State authority beats FEC, campaign sites, and news for ballot status. |
| Calendar | Primary, runoff if any, independent/minor-party filing, general election, canvass/certification window if available. | State authority first; FEC calendar is a federal compilation and should be cross-checked. |
| Candidate field | Officially qualified candidates; filed-but-not-qualified candidates; declared/no official confirmation; withdrawn/did not qualify. | Do not merge these statuses. |
| FEC records | Candidate ID, Form 2, principal campaign committee ID, authorized committees, Form 1, Form 3 reporting status. | FEC proves federal campaign-finance activity, not state ballot qualification. |
| Ratings | Cook, Inside Elections, Sabato, or another transparent rater; category and as-of date. | Rating is analyst judgment; keep separate from official facts. |
| Polling | Pollster, sponsor, field dates, mode, sample size, population, topline, undecideds, questionnaire/crosstabs link. | Original release preferred; require AAPOR-style disclosure before treating as evidence. |
| Finance | Receipts, disbursements, cash on hand, debt, outside spending, party/coordinated spending, reporting period. | Compare matched periods; label missing July 15 or July 20 data. |
| Uncertainty | What is unresolved and what evidence would change the dossier. | Must be concrete, dated, and revisited. |

This table is a guardrail against two common errors. The first is source collapse: a campaign announcement, an FEC filing, a state qualified-candidate list, and a poll all become "candidate is in." The second is time collapse: a rating from June, a filing from March, a finance number through March 31, and a candidate list accessed July 10 are treated as one current snapshot. The dossier should preserve the as-of date and coverage period for each evidence type.

## Class II seats need class discipline

The regular 2026 Senate map is Class II. The official Senate page says Class II terms run from January 3, 2021 to January 3, 2027, and lists the Democratic and Republican senators whose terms expire then. A regular race dossier should state that class fact near the top because it fixes the legal reason the seat is on the ballot. It also prevents two avoidable mistakes.

First, do not confuse the incumbent's current service path with the election class. A senator may have entered through appointment or a prior special election but still occupy a Class II seat with the term ending January 3, 2027. The dossier should record both: "Class II term ending January 3, 2027" and "incumbent entered office by <election/appointment>, if relevant."

Second, do not treat retirements or primary losses as proof of competitiveness. The Senate Daily Press Gallery's Senate Facts page provides a useful official-like roster and marks several Class II retirements and primary losses as of the access date. Those labels are status evidence. The forecast consequence belongs in a separate section that considers state partisanship, candidates, money, polls, ratings, and the national environment. An open seat in a strongly aligned state may still be low-risk; an incumbent seat in a marginal state may be high-risk.

The minimum Class II block should include:

- `Class`: Class II regular election.
- `Term`: January 3, 2027 to January 3, 2033 for the next full term, unless an official source shows a different seating detail.
- `Current holder`: name, party, caucus if relevant, and official source.
- `Incumbent status`: seeking reelection, retiring, lost primary, appointed, unknown, or not yet officially confirmed.
- `Control role`: one of the 13 Democratic-held regular defenses or 20 Republican-held regular defenses from the control-path ledger.

If any of these are uncertain, say so. "Incumbent status not independently confirmed from official or campaign source as of <date>" is better than laundering a stale political database into a fact.

## Vacancies and special elections need their own block

Special elections are full control events but different dossier objects. The Seventeenth Amendment requires writs of election for Senate vacancies and permits state legislatures to empower governors to make temporary appointments until voters fill the vacancy as state law directs. That means a special-election dossier must preserve the vacancy chain:

- original elected senator and class;
- vacancy cause and date;
- temporary appointee, appointing authority, and appointment date;
- official writ, directive, statute, or state election page calling the special election;
- term being filled and term end;
- whether the winner serves immediately after certification, at the start of the next Congress, or under another state/Senate timing rule.

Florida and Ohio illustrate why this matters. Florida's Division of Elections candidate list is a state source for the 2026 general-election United States Senator candidate field and qualification status. Ohio's Secretary of State directives page identifies the May 5, 2026 primary/special-election ballot materials and candidate-certification materials for a U.S. Senate unexpired term ending January 3, 2029. Those are not interchangeable with a generic Class II roster. They show state-administered ballot mechanics for vacancy contests.

The dossier should also distinguish "special election on the 2026 general-election ballot" from "regular Class II race." Both can determine control of the Senate organized in January 2027. Only one is filling the normal 2027-2033 Class II term. If a race note does not track term end and seating status, later control analysis may count the seat correctly for the wrong reason.

## State authority confirmation

For ballot status, the responsible state election authority is the controlling public source. The FEC's congressional primary-date sheet is useful because it compiles primary dates and candidate filing deadlines from state election offices, state law, and state parties, but it is not a substitute for the state authority on final qualification, withdrawal, disqualification, recounts, or certification. The FEC's own pre-election reporting page warns that election dates are subject to change.

The minimum state-authority block should include:

```markdown
## Official race status

- State election authority: <exact office and URL>
- Page accessed: <date>
- Race label used by state: <e.g., United States Senator / U.S. Senate UTE 1-3-29>
- Election type: <primary/general/runoff/special>
- Candidate statuses shown: <qualified/filed/withdrawn/did not qualify/etc.>
- Filing deadline source: <state page first; FEC compilation if used as backup>
- Certification/recount source: <state statute/manual/page if available>
```

The candidate table should be status-aware:

| Candidate | Party/ballot label | State status | FEC candidate ID | Principal committee | Evidence note |
|---|---|---|---|---|---|
| Name | Party | Qualified / filed / declared / withdrawn / unknown | ID or none located | Committee ID or none located | Exact source and access date |

Do not mix state and federal statuses in one cell. A candidate can have an FEC candidate ID and no ballot qualification. A candidate can appear on a state candidate list before a complete finance snapshot is available. A candidate can withdraw from the state process while old FEC records remain searchable. Names alone are weak identifiers; use state status plus FEC IDs where possible.

## FEC candidate and committee records

The FEC layer should answer a narrow question: what campaign-finance records exist for people and committees connected to this race? It should not answer ballot access by itself.

At minimum, record:

- candidate name as filed;
- FEC candidate ID;
- office, state, party, and election year on Form 2;
- principal campaign committee name and committee ID;
- any other authorized committees, including joint fundraising representatives when listed;
- Form 1 statement of organization for the committee;
- Form 3 receipts-and-disbursements reports for House and Senate authorized committees;
- filing receipt dates and coverage periods;
- requests for additional information if material to a finance claim;
- whether the committee has crossed reporting thresholds or whether only voluntary/early registration exists.

The FEC explains that Form 2 is the Statement of Candidacy and Form 1 registers a candidate's authorized campaign committee; Form 3 reports receipts and disbursements for House and Senate authorized committees. The FEC data portal also separates candidates, committees, filings, receipts, disbursements, independent expenditures, loans, and debts. A serious dossier should join through candidate and committee IDs rather than relying on name matches.

Timing matters. The July 15, 2026 quarterly deadline covers House and Senate authorized committees' financial activity from April 1, or the day after the prior report closed, through June 30. July 20 matters for national party committees and monthly filers. Before those filings are processed, a race dossier should not pretend to know the current cash hierarchy. It can say what the last available report showed, what period it covered, and what upcoming filing should update the picture.

Use comparable finance units:

- candidate receipts, disbursements, cash on hand, debt, and burn rate;
- candidate self-funding and loans, with repayments separated;
- party coordinated spending and party transfers;
- independent expenditures supporting or opposing named candidates;
- outside spending by committee, not merely by partisan side;
- reporting period and filing date for every number.

Never compare one candidate's current cash-on-hand figure with another candidate's older pre-primary receipt total. Never add outside spending to candidate cash as if the campaigns control the same resource. See [[Campaign cash as an electoral signal]] and [[2026 midterm money map]] for the broader finance logic.

## Ratings and polls

Ratings belong in the dossier because they are disciplined outside synthesis. They should not become the dossier's spine. Cook, Inside Elections, Sabato's Crystal Ball, and similar sources are useful because they publish categories and update dates, but a rating is not a legal status, a poll, or a probability unless the source explicitly provides a model probability. The ratings section should be a dated ledger:

| Source | Rating | As-of date | Prior rating | Change note | Link |
|---|---|---:|---|---|---|
| Inside Elections | <category> | <date> | <prior> | <if changed> | URL |
| Sabato's Crystal Ball | <category> | <date> | <prior> | <if changed> | URL |
| Cook Political Report | <category> | <date> | <prior> | <if changed> | URL |

If one rating source is paywalled, inaccessible, or has a page-date ambiguity, say so instead of forcing a false comparison. If the rating changed, preserve the old rating in a compact ledger; do not overwrite history.

Polling gets stricter treatment. A poll should enter the evidence table only with its metadata intact: sponsor, pollster, field dates, mode, sample size, population, weighting, geography, question wording, candidate list, undecided treatment, and link to the original release or crosstabs. The AAPOR disclosure checklist is a useful baseline because it asks for sponsor/conductor, measurement tools, population, sampling and recruiting method, mode, field dates, sample sizes, weighting, processing, and limitations.

The dossier should reject or quarantine weak poll evidence:

- "internal poll, memo only" becomes a campaign claim unless full methods are available;
- primary polls do not substitute for general-election polls;
- registered-voter, likely-voter, and adult samples estimate different populations;
- a partisan sponsor does not make a poll unusable, but it makes sponsor and release context mandatory;
- a single poll should not erase fundamentals or ratings without corroboration.

If no public poll meets the disclosure threshold, write: `No public general-election poll meeting the dossier disclosure threshold located as of <date>.` That sentence is more valuable than padding the page with commentary.

## Analysis sections

After the official, FEC, rating, poll, and finance blocks, the dossier can analyze. A standard race page should include these sections only when evidence supports them:

`## Political baseline` should cover recent presidential and statewide results, incumbent history, turnout geography, and state party structure. It should not turn past results into destiny. A Senate electorate can differ from a presidential electorate, and a midterm can differ from both.

`## Candidate field` should explain the meaningful candidate options after separating state-qualified candidates from merely declared or FEC-filed candidates. Candidate quality claims need evidence: prior office, electoral record, endorsements, fundraising capacity, known coalition, legal or ballot constraints, and material controversies with reliable sourcing.

`## Money and organization` should summarize campaign and outside finance by matched periods. It should state when the next FEC filing is expected and whether current evidence is incomplete.

`## Polling and ratings` should compare public polls with ratings and fundamentals without averaging incompatible samples. If polls conflict with ratings, the text should ask why: field date, sample, nominee uncertainty, sponsor, house effect, or genuine movement.

`## Control role` should link the race back to the Senate path. A Republican-held race can be a Democratic pickup target, a Republican defensive firewall, or merely part of the mathematical universe. A Democratic-held race can be a must-hold defense or an expansion opportunity for Republicans. The dossier should specify which layer it is describing: mathematical route, modeled route, or campaign-spending route.

`## What would change the assessment` should be explicit. Examples: official nominee certification; a major candidate withdrawal; July 15 FEC reports; a disclosed likely-voter poll after both nominees are known; a court order affecting ballot access; a rating change from multiple independent analysts; or a national swing large enough to make the race part of a correlated map.

## Why it matters

Senate control is discrete, but the evidence that feeds a control call is messy. The 2026 map gives Democrats a 34-seat off-ballot base and Republicans a 31-seat off-ballot base; with the current vice presidency, Democrats need 17 of the 35 contests for 51 seats while Republicans need 19 for a 50-seat organizing majority. A race dossier is the unit that keeps that arithmetic honest.

The danger is premature completeness. Before state filing deadlines, the candidate field may be incomplete. Before July 15 reports are filed and processed, candidate finance can be stale. Before party and outside-spending reports are available, the visible money map may miss the real general-election channels. Before nominees are known, many polls are hypothetical. Before state certification, even a projected winner is not the same thing as a certified result.

A good dossier does not eliminate uncertainty. It makes uncertainty usable. It tells the reader which claims are official, which are FEC-record facts, which are analyst judgments, which are campaign claims, which are polling estimates, and which are still unknown. That lets later committee runs update one layer without rewriting the whole race story.

## Place in the map

This template is infrastructure for the Senate side of the [[2026 United States midterm elections]] graph. Each state race note should link upward to [[2026 Senate control path]] and sideways to methods notes when relevant. National control notes should not need to re-litigate every candidate filing, committee ID, poll disclosure, or state qualification page. They should be able to cite race dossiers that preserve those facts.

The template also prevents clone pages. Not every Senate race needs a long narrative before evidence exists. A safe early dossier can be mostly tables and uncertainty. It becomes a substantial analytical page only when the race has official candidate definition, finance evidence, polling, ratings movement, litigation, or genuine control relevance. Thin races should still be accurate; pivotal races should be deep.

## Sources

- [U.S. Senate, Class II senators whose terms expire in 2027](https://www.senate.gov/senators/Class_II.htm) - official Class II term dates and roster; accessed July 10, 2026.
- [U.S. Constitution Annotated, Article I](https://constitution.congress.gov/constitution/article-1/) - Senate classes, vacancies, vice-president tie-breaking, state time/place/manner role, and each house judging elections and qualifications; accessed July 10, 2026.
- [U.S. Constitution Annotated, Seventeenth Amendment](https://constitution.congress.gov/constitution/amendment-17/) - direct election of senators and Senate-vacancy election/temporary appointment rule; accessed July 10, 2026.
- [U.S. Senate Daily Press Gallery, Senate Facts](https://www.dailypress.senate.gov/on-the-floor/senate-facts/) - 119th Congress party lineup, Class II roster, and retirement/primary-loss annotations; accessed July 10, 2026.
- [FEC, 2026 congressional primary dates and candidate filing deadlines](https://www.fec.gov/resources/cms-content/documents/2026pdates.pdf) - federal compilation of primary and filing dates with state-source caveat; accessed July 10, 2026.
- [FEC, congressional pre-election reporting dates for 2026](https://www.fec.gov/help-candidates-and-committees/dates-and-deadlines/2026-reporting-dates/congressional-pre-election-reporting-dates-2026/) - reporting-date table and warning that election dates are subject to change; accessed July 10, 2026.
- [FEC, July reporting reminder 2026](https://www.fec.gov/updates/july-reporting-reminder-2026/) - July 15 quarterly deadline for House and Senate authorized committees and July 20 monthly-filer deadline; accessed July 10, 2026.
- [FEC, registration and reporting forms](https://www.fec.gov/help-candidates-and-committees/forms/) - Form 1, Form 2, and Form 3 descriptions for candidate and authorized-committee records; accessed July 10, 2026.
- [FEC, registering a candidate](https://www.fec.gov/help-candidates-and-committees/filing-reports/registering-candidate/) - Statement of Candidacy, principal campaign committee, authorized committees, and amendment rules; accessed July 10, 2026.
- [FEC, browse campaign finance data](https://www.fec.gov/data/browse-data/) - candidate, committee, filings, reports, receipts, disbursements, independent expenditures, loans, and debts data categories; accessed July 10, 2026.
- [USAGov, state and local election offices](https://www.usa.gov/state-election-office) - official directory for locating state election authorities; accessed July 10, 2026.
- [Florida Division of Elections, 2026 general-election United States Senator candidate listing](https://dos.elections.myflorida.com/candidates/CanList.asp?CountyCode=BRE&OfficeCode=USS&elecid=20261103-GEN) - state candidate-status example for a Senate contest; accessed July 10, 2026.
- [Ohio Secretary of State, election directives](https://www.ohiosos.gov/elections/elections-administration/directives) - directives and ballot/certification materials for the 2026 U.S. Senate unexpired-term special election; accessed July 10, 2026.
- [AAPOR, disclosure standards](https://aapor.org/standards-and-ethics/disclosure-standards/) - survey disclosure checklist for public poll evidence; accessed July 10, 2026.
- [Inside Elections, 2026 Senate ratings](https://insideelections.com/ratings/senate/) - dated independent Senate-rating source; accessed July 10, 2026.
- [Sabato's Crystal Ball, 2026 Senate](https://centerforpolitics.org/crystalball/2026-senate/) - dated independent Senate-rating source; accessed July 10, 2026.

## Open questions

- Which state election authority pages should be snapshotted for all 35 Senate contests after the next filing-deadline pass?
- Which race dossiers should wait until after July 15 FEC reports are processed before making any money-map claim?
- How should the committee represent ratings when one source updates a live table without a clean per-race timestamp?
- Which special-election seating and certification rules could affect Senate control before January 3, 2027?
- What minimum poll-disclosure failure should exclude a poll from the evidence table rather than merely demote it to a campaign claim?
