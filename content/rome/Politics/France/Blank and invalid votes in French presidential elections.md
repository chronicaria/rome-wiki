---
title: Blank and invalid votes in French presidential elections
created: 2026-07-10
source: llm
status: seed
tags: [politics, France, elections, presidential-election, participation, voting]
as_of: 2026-07-10
---

Blank and invalid ballots are acts of participation but not *suffrages exprimés*: since 2014 France reports them separately, yet neither enters the denominator that decides a presidential candidate's percentage or victory.

Up: [[2027 French presidential election]]

Related: [[How the French presidential election works]] · [[Abstention in French presidential elections]] · [[2027 French presidential first-to-second-round transfers]]

## The distinction in one table

| Category | What the elector does | Counted among voters? | Counted among *suffrages exprimés*? | Separately reported nationally since 2014? |
|---|---|---:|---:|---:|
| Blank (*blanc*) | Returns an empty envelope or an envelope containing a blank ballot | Yes | No | Yes |
| Invalid (*nul*) | Returns material that violates ballot-validity rules—for example, certain altered, annotated, non-regulatory, or contradictory ballots | Yes | No | Yes |
| Abstention | Does not cast a ballot and does not sign the polling register | No | No | Yes, as the difference between registered electors and voters |
| Valid vote for a candidate | Returns a valid official ballot for one candidate | Yes | Yes | Yes |

These are administrative categories, not reliable opinion labels. A blank ballot is the clearest available way to participate without selecting a candidate, but the count does not disclose *why* it was cast. An invalid ballot may be accidental, expressive, or procedural. Abstention can reflect rejection, indifference, incapacity, absence, registration problems, or a strategic choice. Any political interpretation therefore begins with the count and must not pretend that the count is a survey.

## What French law counts as blank

Article L65 of the Electoral Code governs the count. Its post-2014 rule says that blank ballots are counted separately and attached to the official report. They receive a special mention in the published result but do not enter the determination of *suffrages exprimés*. The article also treats an envelope containing no ballot as a blank ballot.

This definition matters because France does not normally place an official “none of the above” paper on the table. The elector can create a legally blank vote by depositing an empty envelope or, subject to the applicable material rules, a blank paper. The secrecy of the ballot means officials observe the paper or empty envelope at the count, not the elector's motive.

A blank vote is consequently a valid act of electoral participation but not a valid choice between candidates. In everyday English, “valid vote” can mean any properly cast ballot. French result tables use a narrower decisive category: *exprimés* are the votes attributed to candidates. That terminological difference is the source of many mistaken percentage calculations.

## What makes a ballot invalid

Article L66 lists ballots that do not enter the result. It covers ballots without a sufficient designation, ballots through which voters identify themselves, papers found in the box without an envelope or in a non-regulatory envelope, ballots written on colored paper, ballots or envelopes bearing internal or external marks of recognition, and ballots or envelopes carrying insulting statements about candidates or third parties. Other presidential-election rules and official instructions govern such problems as non-official or altered candidate papers. The exact ground for rejection should therefore be checked against the rule applicable to that ballot, not inferred from a generic label.

Article L65 also addresses envelopes with multiple papers. Multiple identical ballots for the same candidate count only once. If an envelope contains ballots for different candidates, the vote is invalid. Rejected ballots and non-regulatory envelopes are attached to the polling-station record, countersigned, and marked with the reason for rejection. This documentary trail allows later electoral review.

The legal difference is therefore not “protest” versus “mistake.” It is a difference in ballot form. Blank describes a recognized absence of candidate choice; invalid describes a ballot that cannot be credited under the rules. A voter who writes a political message across a ballot may intend a protest, but the resulting paper is classified by its legal characteristics, not by a poll worker's theory of intent.

## The 2014 change—and what it did not change

Law no. 2014-172 of 21 February 2014, effective 1 April 2014, changed the reporting architecture. It amended Article L65 to require blank ballots to be counted separately, annexed to the polling record, and specially mentioned in results. It removed “blanks” from the opening wording of Article L66, which had grouped blank and invalid ballots together among ballots excluded from the count.

The reform recognized the blank vote statistically. It did **not** make blank ballots *suffrages exprimés*. It did not add a “blank” competitor to the presidential ballot, establish a threshold at which an election must be rerun, or reduce the winning candidate's share of expressed votes. The candidate percentage remains:

$$
\text{candidate share among expressed votes}
=\frac{\text{candidate votes}}{\text{votes for all candidates}}.
$$

The law's first nationwide use was the 2014 European election, not a presidential election. The 2017 presidential election was therefore the first presidential contest conducted under the separate-count rule. That date creates a genuine series break.

Before the reform, national tables commonly combined the two categories as *blancs et nuls*. A pre-2014 combined total cannot generally be decomposed into a blank series and an invalid series from the published national result alone. Researchers should either compare the combined category consistently across time, restrict separate-category comparisons to elections held under the new regime, or locate sufficiently granular archival records whose definitions and coverage are documented. Relabelling an old *blancs et nuls* number as “blank votes” overstates what the source knows.

## The denominator ladder

French election tables can place several legitimate percentages beside the same count. They answer different questions.

Let:

- $R$ = registered electors (*inscrits*);
- $A$ = abstentions;
- $V$ = voters (*votants*);
- $B$ = blank ballots;
- $N$ = invalid ballots;
- $E$ = expressed votes credited to candidates.

Ignoring small reconciliation issues caused by scope or later adjudication, the accounting identities are:

$$V=R-A$$

and

$$E=V-B-N.$$

From these come three different rates:

1. **Turnout** is $V/R$. It includes people who cast blank and invalid ballots.
2. **Blank share of voters** is $B/V$; **invalid share of voters** is $N/V$. These show the composition of deposited ballots.
3. **Blank share of registered electors** is $B/R$, while candidate support among registered electors is candidate votes divided by $R$. These rates incorporate abstention into the baseline.

There is no ordinary “blank share of expressed votes” because blank ballots are excluded from $E$. Some commentators nevertheless divide $B$ by $E$ as an analytical ratio. That can be calculated, but it should be labelled explicitly rather than presented as an official vote share.

The Ministry of the Interior's national 2022 second-round table illustrates the ladder. It reports 48,752,339 registered electors, 35,096,478 voters, 2,233,904 blank ballots, 805,249 invalid ballots, and 32,057,325 expressed votes. Thus blank ballots were 4.58% of registered electors and 6.37% of voters; invalid ballots were 1.65% of registered electors and 2.29% of voters. The two candidates' official shares—58.55% for Emmanuel Macron and 41.45% for Marine Le Pen—sum to 100% because their denominator is the 32,057,325 expressed votes, not all voters.

This is not statistical sleight of hand. It follows the legal question the runoff decides: which candidate received a majority of votes validly attributed to candidates? But a complete account of the electorate should also report turnout and non-candidate ballots. Candidate share among expressed votes measures the division of valid candidate choices; it does not measure endorsement by all registered citizens or even by everyone who visited a polling station.

## Blank and invalid votes are not abstention

In administrative data, the separation is exact. A voter who deposits a blank or invalid ballot has attended, been checked against the electoral register, voted in secret, and signed the register. The person is therefore a *votant*. An abstainer is not recorded as having voted.

The distinction is analytically important. Turnout studies—including Insee's participation studies—treat a blank or invalid ballot as participation because there is an electoral-register signature. This lets researchers study the decision to attend separately from the decision to support a candidate. A citizen may cross the first threshold but refuse or fail to cross the second.

The separation also affects political rhetoric. Saying that blank voters “abstained between the candidates” may be a useful metaphor, but it is not the official category. Combining blank ballots with abstentions produces a broad “no candidate choice” measure, yet it joins behaviors with different observable costs and institutional meanings. Anyone using that composite should publish the formula.

## Why second rounds often attract attention

The second round compresses choice to two candidates. Voters whose first-round preference has been eliminated can support one finalist, vote blank, cast an invalid ballot, or abstain. Blank and invalid totals can therefore illuminate the limits of finalist coalition-building, especially alongside geographic results and survey evidence on [[2027 French presidential first-to-second-round transfers]]. They cannot, by themselves, allocate discontent to a party or ideology.

In 2017, when Emmanuel Macron faced Marine Le Pen, the Interior Ministry reported 31,381,603 expressed votes and a 74.56% turnout at the second round. The finalized election is notable for the very large volume of non-candidate ballots under the new separate reporting regime. Comparisons with 2022 are meaningful only if the source perimeter and result stage are aligned—for example, provisional Interior totals should not be silently mixed with the Conseil constitutionnel's definitive proclamation after it has annulled irregular polling-station returns.

The Conseil constitutionnel is the constitutional judge of the presidential election and proclaims the definitive result. Its decisions can remove ballots from particular polling stations where irregularities are serious. The Interior archive is indispensable for accessible national and territorial tables; the Council's proclamation is the final legal authority. Small numerical differences between an election-night table and a definitive decision may reflect timing and adjudication, not arithmetic failure.

## How to interpret the numbers without overclaiming

Blank voting is often described as rejection of the available offer. That is plausible at an aggregate level, particularly in a two-candidate runoff, but the category has no recorded reason. It may include principled refusal, equal dislike, indecision, civic attachment to attendance, or a belief that blank voting should itself be recognized. Invalid voting is even less interpretable because intentional spoiling and accidental noncompliance are observationally mixed.

Four disciplines improve analysis:

**First, report counts and denominators together.** “Blank voting rose to 6.37%” is incomplete unless it says “of voters.” The same 2022 total is 4.58% of registered electors.

**Second, preserve the 2014 break.** The reform changed classification and publication, so apparent long-run changes can reflect measurement as well as behavior. Separate blank and invalid series begin cleanly only after implementation.

**Third, distinguish fact from inference.** Official returns establish how many ballots entered each category. They do not establish that those voters belonged to the left, the right, or the center, nor whom they would have chosen under another matchup. Transfer surveys can estimate motives and prior votes, but sampling and question wording add uncertainty.

**Fourth, match geographic and temporal scope.** “France entière” may include overseas territories and French citizens abroad, while an Insee study may cover registered French citizens resident in metropolitan France or the overseas departments. Final Council figures and Interior archive figures can refer to different stages. A comparison is only as sound as its common perimeter.

## Why it matters for 2027

For the [[2027 French presidential election]], blank and invalid votes are best treated as a diagnostic layer between turnout and candidate choice. A high-turnout election can still contain a substantial group that selects no candidate. Conversely, a low blank-ballot share does not prove enthusiasm if abstention is high or if voters choose a finalist defensively.

The metric will matter most in three arguments. The first concerns mandate: a winner's constitutional victory is determined among expressed votes, while political claims about social breadth should also examine shares of voters and registered electors. The second concerns coalition transfer: changes between rounds should be decomposed among finalist votes, blank ballots, invalid ballots, and abstention rather than forcing every first-round bloc into a candidate column. The third concerns institutional reform: proposals to count blank ballots as expressed votes, offer an official “none” option, or trigger a new election are not descriptions of current law. They are proposals that would change the rule.

A responsible 2027 results note should therefore display, for each round, registered electors, abstentions, voters, blank ballots, invalid ballots, expressed votes, and candidate totals. That full accounting makes candidate percentages intelligible without confusing a legally decisive majority with universal approval.

## Sources

- Légifrance, [Code électoral, article L65](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000027477739), current text governing the count and separate treatment of blank ballots (accessed 2026-07-10).
- Légifrance, [Code électoral, article L66](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028639157), categories and documentation of rejected ballots (accessed 2026-07-10).
- Légifrance, [Law no. 2014-172 of 21 February 2014 recognizing blank voting in elections](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000028636783), especially articles 1, 2, and 6 (accessed 2026-07-10).
- Ministry of the Interior, [2022 presidential election, France-wide results](https://www.archives-resultats-elections.interieur.gouv.fr/resultats/presidentielle-2022/FE.php), round-level registered, turnout, blank, invalid, expressed, and candidate totals (accessed 2026-07-10).
- Ministry of the Interior, [Global results of the second round of the 2017 presidential election](https://www.interieur.gouv.fr/fr/Archives/Archives-elections/Election-presidentielle-2017/Resultats-globaux-du-second-tour-de-l-election-du-President-de-la-Republique-2017), national result and turnout (accessed 2026-07-10).
- Vie-publique, [Seven questions about blank voting](https://www.vie-publique.fr/questions-reponses/23932-7-questions-sur-le-vote-blanc), official public-information synthesis of the 2014 reform and current debate (updated 2026-04-16; accessed 2026-07-10).
- Vie-publique, [Blank vote and invalid vote: what differences?](https://www.vie-publique.fr/fiches/23931-vote-blanc-vote-nul-quelles-differences), official public-information definitions (updated 2026-01-15; accessed 2026-07-10).
- Insee, [Participation in the 2022 presidential and legislative elections](https://www.insee.fr/fr/information/6659405), methodology distinguishing participation, including blank or invalid voting, from abstention (accessed 2026-07-10).

## Open questions

- What definitive blank and invalid totals will the Conseil constitutionnel report for each 2027 round, and which Interior publication stage will provide the closest like-for-like territorial data?
- Which 2027 post-election surveys will distinguish intentional blank voting from accidental invalid voting with adequate sample sizes?
- How much of any change from 2022 will remain after controlling for matchup, turnout, electorate perimeter, and result stage?
