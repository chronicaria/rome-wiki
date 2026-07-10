---
title: NBA multi-agent forecasting company
created: 2026-07-10
source: llm
status: seed
tags: [basketball, nba, forecasting, analytics, uncertainty, provenance]
desk: NBA and Dallas Mavericks
as_of: 2026-07-10
---

An NBA forecasting company should behave like a set of versioned public contracts: every roster fact, availability state, role change, model output, verification result, source, and uncertainty claim must cross an explicit interface before it can influence a forecast.

Up: [[NBA and Dallas Mavericks]]

Method spine: [[RAPM]] · [[RAPM regularization and identification]] · [[RAPM evaluation and uncertainty]] · [[NBA player forward projection model]] · [[NBA team season projection model]]

## Direct summary

“Multi-agent” should not mean several opaque systems voting on a win total. It should mean a disciplined division of analytical labor. A roster agent establishes who is actually under team control. An availability agent represents participation, workload, and functional capacity. A role agent maps the jobs players are expected to perform. A model agent turns those dated inputs into player, lineup, and team distributions. A verification agent tests whether evidence, arithmetic, and language support the output. A provenance layer preserves where every material claim came from, while an uncertainty layer prevents a point estimate from masquerading as knowledge.

The public product is not the machinery behind those workers. It is the contract between them: dated inputs, declared evidence classes, reproducible transformations at an appropriate level of detail, coherent scenarios, uncertainty intervals, falsification triggers, and a record of what was checked. Private infrastructure, file locations, prompts, credentials, unpublished coefficients, and internal deliberations do not belong in a public forecast. The system earns trust by making its claims inspectable, not by narrating its backstage operations.

## The company metaphor

A forecast is a supply chain. A wrong roster contaminates every downstream calculation; a correct player rating attached to impossible minutes is still wrong; a sound simulation described with overconfident language becomes a misleading public claim. Treating the workflow as a “company” clarifies accountability because each desk produces a defined object and another desk must accept or reject it.

The desks should be independent enough to challenge one another but not independent in their data definitions. Everyone must agree on player identity, observation time, team, contract state, units, and version. Otherwise the roster desk may mean “listed on a website,” the model desk may mean “expected to play,” and the publication desk may present the result as “signed.” [[NBA roster churn as projection uncertainty]] shows why those distinctions are not clerical trivia: trades, waivers, draft rights, two-way deals, and stale public pages define different populations.

The company therefore publishes interfaces rather than agent biographies. Each interface answers six questions: What object is being passed? Which fields are required? What evidence supports them? When were they valid? What uncertainty remains? What event would force review?

## 1. Roster interface: establish the population

The roster interface answers **who can plausibly receive NBA minutes for this team under the scenario being modeled?** It should never begin with a depth-chart scrape treated as truth.

Its minimum public record for each player is:

| Field | Public meaning |
|---|---|
| Player identity | Stable league identity, not name matching alone |
| Team state | Official, reported, camp/rightsholder, departed, or unresolved |
| Transaction basis | Dated league/team transaction or attributable report |
| Contract/roster class | Standard, two-way, unsigned rights, camp, waived, or unknown |
| Effective time | When the state became valid and when it was checked |
| Forecast eligibility | Included, conditional, or excluded, with reason |

Official transaction records should control over an undated or lagging roster display. “Draft rights acquired” cannot silently become “signed player.” A reported agreement may enter a conditional scenario, but it should not receive the same evidence label as a completed transaction. The interface must also preserve departures; deleting a player without a transaction trace makes later reproduction difficult.

The output is a versioned roster snapshot plus an exception list. Exceptions matter because uncertainty is often concentrated at the margins: an unprocessed signing, a non-guaranteed contract, an open two-way place, or a traded player still shown on an old page. The model desk may choose a scenario, but it may not erase the exception.

Roster verification consists of reconciling at least two public views when possible—preferably the NBA transaction record and an official team announcement—and explicitly documenting conflicts. It verifies status, not future minutes. That boundary prevents the roster desk from smuggling coaching assumptions into what appears to be a factual input.

## 2. Availability interface: replace the healthy/unhealthy switch

The availability interface answers **in what participation and workload states might the player operate?** [[Availability risk in NBA projections]] defines a useful state vector:

$$
Z_{ig}=(A_{ig},M_{ig},E_{ig},R_{ig},C_{ig}),
$$

where $A$ is participation, $M$ is minutes conditional on participation, $E$ is effectiveness relative to the healthy projection, $R$ is role, and $C$ is confidence that the evidence identifies those variables. This is superior to one expected-games number because an active player can be restricted, a returning player can occupy a different role, and absences can cascade into different replacement lineups.

Every update should expose the observation timestamp, evidence class, affected state, update direction, and review trigger. Evidence classes should separate official injury designations, official team medical or participation statements, attributable reporting, observed practice or game usage, statistical inference, and unknown detail. The NBA's reporting system gives operational participation designations, and league enforcement demonstrates that teams are accountable for those reports. But a designation is not a complete medical record and should not be translated into an exact recovery probability without calibration ([NBA official injury-report portal](https://official.nba.com/nba-injury-report-2025-26-season/); [NBA reporting enforcement example](https://www.nba.com/news/sixers-fined-violating-league-injury-reporting-rules)).

The public output should use scenarios such as unavailable, active with workload restriction, active in a modified role, and functionally normal. “Functionally normal” is deliberately stronger than “active”: it requires evidence about workload and basketball function, not merely presence. For each scenario, the interface supplies a minute range, role constraints, replacement tree, confidence label, and next observable milestone.

The availability desk must avoid individualized medical claims that public evidence cannot justify. Population research can inform broad priors and interval width, but it cannot diagnose a player from an injury label. Unknown is a valid output.

## 3. Role-shock interface: describe the job before the rating

The role-shock interface answers **what changed about the work assigned to the player and his teammates?** [[NBA role changes that break preseason models]] separates a conditional talent forecast from a deployment forecast. A trade, injury, new coach, or depth-chart opening can change usage, initiation, defensive assignment, position, spacing responsibility, and opponent attention without immediately changing underlying talent.

A public role record should contain:

| Dimension | Examples of a state change |
|---|---|
| Offensive initiation | Receiver to secondary creator; secondary to primary |
| Shot burden | More self-created attempts, late-clock possessions, or rim pressure |
| Off-ball function | Spacer, screener, cutter, connector, offensive rebounder |
| Defensive assignment | Point of attack, large wing, helper, rim protector |
| Position/lineup context | Forward-to-center minutes, single-big to two-big groups |
| Workload | Starter share, bench anchor, closing role, staggered minutes |

The interface should distinguish **observed role**, **announced intent**, and **forecast role**. Coach language is evidence of intent; preseason deployment is limited observed evidence; neither proves a stable regular-season role. A role delta should include a baseline window, new evidence window, sample size, teammate context, and confidence. That structure makes role shocks testable rather than turning “bigger opportunity” into an unexplained rating bump.

The role desk also records cascades. If the only primary creator is absent, a young forward may acquire initiation, a reserve guard may face stronger defenders, and a center may lose easy finishes. If a rim protector is absent, wings may inherit help and rebounding duties. Those changes are part of the forecast even when no player's latent talent has moved. [[Lineup fit is not the sum of player value]] explains why interaction claims should begin near zero, name a mechanism, and be validated rather than awarded as a chemistry bonus.

## 4. Model interface: transform inputs without hiding assumptions

The model interface answers **what distribution follows from the accepted roster, availability, role, and opponent assumptions?** Its public contract should identify the model family, training cutoff, target, units, input versions, validation window, scenario weights, and output version. It need not reveal proprietary code or every coefficient to meet that standard.

The model should preserve three distinct layers:

1. **Player state:** a distribution of conditional per-possession value, informed by aging, prior performance, role, and measurement uncertainty.
2. **Deployment:** feasible minutes and roles summing to 240 team minutes per game, conditional on roster and availability states.
3. **Team outcome:** lineup or team strength translated through schedule and game variance into wins, standings probabilities, or other declared targets.

[[RAPM]] is useful in the first layer because it estimates player effects from possession outcomes while controlling for the players on court. Regularization stabilizes an underidentified, collinear problem; it does not make the estimates context-free or certain. Public methodological work on box plus-minus offers a complementary lesson: BPM is a rate statistic derived from box information and team context, and playing time enters only when converting rate to total value ([Basketball-Reference BPM methodology](https://www.basketball-reference.com/about/bpm2.html)). The company should therefore never add a rate metric directly to a games-played forecast or blend metrics with incompatible scales without a declared conversion.

The model interface should reveal whether player estimates are means, medians, or samples; whether availability draws are independent; how replacement minutes are allocated; and whether fit adjustments are already embedded. These declarations prevent double counting. If RAPM history already reflects a complementary lineup, adding a full “fit bonus” for the same relationship can credit one mechanism twice.

Outputs should include a distribution, not only a point. At minimum, publish a central estimate, an interval with a stated meaning, and scenario-conditioned results. A confidence interval about an estimated historical coefficient is not the same as a predictive interval for next season. The latter must include future minutes, roles, roster events, schedule, and game noise.

## 5. Verification interface: attempt to break the forecast

Verification is a separate acceptance gate, not a final spell-check. It asks **does each material claim follow from the cited evidence and declared transformation?** The verifier should not share ownership of the initial inference when independence is practical.

A public verification record should report checks in five classes:

- **Identity and chronology:** player, team, transaction, injury, and timestamp align.
- **Source support:** citations establish the nearby factual claims; inference is labeled as inference.
- **Arithmetic and constraints:** minutes sum correctly, probabilities are bounded and normalized, and units remain consistent.
- **Scenario coherence:** an absence changes replacement minutes and related roles rather than removing value in isolation.
- **Language calibration:** “official,” “reported,” “projected,” “unknown,” and interval language match the evidence.

Verification states can be `verified`, `verified with limitations`, `rejected`, or `pending evidence`. “Verified” means the artifact passed the declared checks, not that the future will occur. A rejected object should retain a reason code—unsupported roster state, stale source, role mismatch, unit error, leakage, uncalibrated probability, or irreproducible transformation—so the company learns from repeated failures.

The verifier should also run adversarial questions. What if the highest-leverage player is active but limited? Which output changes if a reported transaction fails to complete? Does a team projection still use the old role after a roster move? Could the quoted interval exclude too many realized outcomes in historical backtests? These questions turn “quality control” into falsification.

## 6. Provenance interface: make the claim graph visible

Provenance answers **where did this claim come from, and what happened to it?** It is more than a sources list. Every material forecast object should carry a compact lineage:

$$
\text{public evidence} \rightarrow \text{normalized state} \rightarrow \text{scenario} \rightarrow \text{model version} \rightarrow \text{verified output}.
$$

The public record needs source title and URL, publisher, publication or event time, access time, evidence class, the exact claim supported, and transformation version. A source can support a transaction without supporting a minute forecast; claim-level linkage preserves that difference. Corrections should append a dated supersession rather than silently replacing history.

Public-safe provenance must stop at the analytical boundary. It should not expose private directories, machine names, internal tickets, credentials, unpublished prompts, deliberative messages, or personal data. A reproducibility identifier can name a release or snapshot without revealing where it lives. Likewise, a source digest or archived citation can establish which public artifact was reviewed without publishing private storage architecture.

Provenance also protects against hindsight. The observation time must reflect when information was available to the forecast, not when a later recap made it easy to find. A preseason model evaluated with an injury or transaction learned afterward has leaked the future even if every underlying source is public today.

## 7. Uncertainty interface: say what is uncertain and why

The uncertainty interface answers **which unknowns generate the range?** A single confidence label is too coarse. The forecast should separate at least:

- measurement uncertainty in historical player estimates;
- forward uncertainty in aging, development, and role portability;
- availability and workload uncertainty;
- roster and transaction uncertainty;
- lineup-interaction uncertainty;
- schedule and game-level randomness;
- model-form uncertainty from plausible alternative specifications.

These components need not all receive a public decimal estimate. They do need names, directions, and a statement of whether they are sampled, scenario-tested, or left qualitative. Scenario probabilities that come from judgment should be labeled judgmental and stress-tested; learned probabilities should name their dated training and calibration scheme.

Calibration is the core public promise. If events assigned about 70 percent probability occur far less often across a relevant set, the system is overconfident. Proper scoring rules such as log loss or Brier score can assess probabilistic forecasts, while interval coverage and continuous ranked probability score can evaluate distributions. The point is not to optimize one flattering metric; it is to predeclare evaluation, test out of time, and publish failures alongside successes. Research on probabilistic forecasting emphasizes that scoring rules reward different aspects of forecast performance, so model comparison must state which score and target were chosen ([Gneiting and Raftery, “Strictly Proper Scoring Rules, Prediction, and Estimation,” 2007](https://doi.org/10.1198/016214506000001437)).

The uncertainty output should include tail explanations. Two teams can share a 45-win median while one has a narrow distribution and the other combines contender upside with a long injury-driven downside. Naming the variables that create each tail is more decision-useful than printing an extra decimal place.

## The release packet

A public forecast is ready only when its release packet contains:

1. an as-of time and forecast horizon;
2. a reconciled roster snapshot and exception list;
3. availability and role scenarios with replacement minutes;
4. model target, units, version, training cutoff, and validation summary;
5. central and interval outputs, plus major scenario branches;
6. claim-level sources and dated provenance;
7. verification state, limitations, and rejected assumptions;
8. update triggers and a correction policy.

This packet allows readers to disagree productively. One reader may accept the player prior but reject the role probabilities; another may accept the median while arguing the availability tail is too narrow. The disagreement attaches to an interface instead of dissolving into “the model likes them.”

## Why it matters

NBA forecasts are unusually vulnerable to plausible-looking category errors. A roster page can lag a transaction. Active can be confused with healthy. Opportunity can be confused with ability. An impact rate can be confused with total season value. Historical fit can be counted twice. A point estimate can hide several incompatible futures.

A multi-agent forecasting company is valuable only if specialization makes those errors easier to detect. Its advantage is not the number of voices but the explicit custody of claims. Roster facts enter through one gate; medical uncertainty remains public-safe; role shocks modify deployment before they modify talent; models declare units and versions; verifiers try to falsify the result; provenance keeps time honest; uncertainty remains visible through publication.

That architecture connects the identification discipline of [[RAPM]] to the practical problems in [[Availability risk in NBA projections]], [[NBA role changes that break preseason models]], and [[NBA roster churn as projection uncertainty]]. It can support a credible public forecast without releasing private implementation details or pretending that inspectability requires total transparency. The public deserves to know what was assumed, what evidence supported it, how it affected the forecast, how uncertain the result is, and what would change it next.

## Sources

- NBA Official, injury report portal: https://official.nba.com/nba-injury-report-2025-26-season/
- NBA Communications, “76ers fined $100K for violating league injury reporting rules,” December 3, 2025: https://www.nba.com/news/sixers-fined-violating-league-injury-reporting-rules
- Daniel Myers, “About Box Plus/Minus (BPM),” Basketball-Reference, February 2020: https://www.basketball-reference.com/about/bpm2.html
- Tilmann Gneiting and Adrian E. Raftery, “Strictly Proper Scoring Rules, Prediction, and Estimation,” *Journal of the American Statistical Association* 102, no. 477 (2007): https://doi.org/10.1198/016214506000001437
- Joseph Sill, “Improved NBA Adjusted +/- Using Regularization and Out-of-Sample Testing,” MIT Sloan Sports Analytics Conference (2010): https://www.sloansportsconference.com/research-papers/improved-nba-adjusted-using-regularization-and-out-of-sample-testing
- Local method and application spine: [[RAPM]], [[RAPM regularization and identification]], [[RAPM evaluation and uncertainty]], [[Availability risk in NBA projections]], [[NBA role changes that break preseason models]], [[Lineup fit is not the sum of player value]], and [[NBA roster churn as projection uncertainty]].

## Open questions

- Which interface fields should be mandatory across every public team forecast, and which can remain sport- or model-specific?
- How much independent verification is enough when several desks ultimately depend on the same official source?
- Which uncertainty decomposition is most stable under annual roster churn and changes in injury-reporting practice?
- Can a public correction ledger remain concise while preserving enough history to diagnose systematic forecast failures?
- What calibration sample is large enough to evaluate high-leverage scenario probabilities without pooling unlike injuries, roles, or roster states?
