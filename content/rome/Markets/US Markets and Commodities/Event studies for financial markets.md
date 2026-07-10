---
title: Event studies for financial markets
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, quantitative-research, event-study, econometrics, market-microstructure]
---

A financial-market event study is credible only when the event, information set, expected-return baseline, response window, and inference procedure are fixed without using the price response they are meant to explain.

Up: [[US Markets and Commodities]]

Related: [[From macro surprises to asset prices]] · [[Point-in-time data and look-ahead bias]] · [[Futures continuous contracts and roll bias]] · [[Funding liquidity versus market liquidity]]

## What an event study can identify

An event study asks whether security prices behave unusually around a defined arrival of information. The design compares an observed return with a counterfactual expected return absent the event. For asset $i$ on event-time observation $t$,

$$
AR_{i,t}=R_{i,t}-E(R_{i,t}\mid\mathcal{F}_{t^-}),
$$

where $AR$ is abnormal return and $\mathcal{F}_{t^-}$ is the pre-event information set. Cumulative abnormal return over window $[\tau_1,\tau_2]$ is

$$
CAR_i(\tau_1,\tau_2)=\sum_{t=\tau_1}^{\tau_2}AR_{i,t}.
$$

The arithmetic is simple; the counterfactual is not. A nonzero return around an announcement is not automatically caused by it. The study is strongest when event timing is public and precise, no equally consequential information arrives in the window, the affected instrument is liquid, the hypothesized direction was declared beforehand, and alternative windows or benchmarks produce similar conclusions.

Scheduled macro announcements and central-bank decisions can support narrow high-frequency designs. Corporate filings, lawsuits, index changes, disasters, and policy developments often have ambiguous information times or anticipation. Daily windows may be reasonable for slow diffusion but admit confounders. An event study measures a conditional response under its design; it does not by itself reveal a permanent structural parameter or profitable strategy.

## Define the event before looking at returns

An event record needs more than a calendar date. It should contain the official event identity, source, first-publication timestamp and timezone, reference period, scheduled versus actual time, content available in the initial release, correction history, and any known embargo. Corporate events require accession or filing identifiers, exchange session, announcement time, amendment status, and whether a conference call added information later. Policy events may unfold through proposal, vote, text release, implementation, and litigation rather than one moment.

The information time is when market participants could first receive the relevant content, not the period the content describes. A quarterly earnings release concerns a quarter that ended weeks earlier. A BLS observation labeled June is published in July. A rule may be announced before becoming effective. Joining returns on reference or effective date creates [[Point-in-time data and look-ahead bias]].

Timestamp precision must match the claimed window. A date-only filing timestamp cannot justify a five-minute reaction. A news article's publication time can lag the primary release and is not evidence that the market first learned the information then. When the source time is ambiguous, widen the window and weaken the causal claim, or leave the event out.

Events should be selected by criteria independent of outcomes. Choosing “the ten biggest announcements” after ranking price moves conditions the sample on the dependent variable. Selecting only successful mergers, surviving firms, or events that later received media coverage creates survivorship or attention bias. Define the population from an official calendar, filing type, rule, index methodology, or preregistered materiality threshold observable before returns are inspected.

## Event content must be measured as news

For anticipated announcements, the event variable is generally the deviation from a pre-event expectation, not the released level. A macro surprise can be written

$$
S_e=A_e-E_{e^-}(A_e),
$$

with actual $A_e$ taken from the first release and expectation $E_{e^-}$ from a documented point-in-time source. See [[From macro surprises to asset prices]]. Earnings surprise similarly requires the last eligible analyst estimate snapshot, stated treatment of stale forecasts, and separation of results from guidance.

Many releases are vectors. Payroll reports include employment, wages, unemployment, participation, and revisions. Earnings packets include revenue, margins, guidance, capital spending, and accounting changes. Monetary-policy announcements may contain a target decision and information about the expected path. Reducing the packet to whichever component best explains the realized return is post hoc model selection.

A defensible study predeclares a small economically motivated vector, sign conventions, and aggregation method. Principal components or textual measures can help, but their training sample must be temporally valid and their interpretation documented. A language model trained on later material can leak future knowledge even if the source document is historical.

## Choose a response window that answers the question

The event window begins with the last defensible pre-event price and ends after a declared digestion interval. Intraday studies may use log price changes from a midpoint immediately before release to a midpoint minutes later. Daily equity studies often report windows such as $[-1,+1]$ trading days. Longer windows address delayed response or economic consequences but progressively weaken attribution.

Short windows reduce unrelated news but magnify market-microstructure problems. Trades can be stale or bounce between bid and ask. Quotes can be indicative, locked, or crossed. Different venues and data feeds timestamp messages differently. Trading halts and price limits interrupt adjustment. The researcher must name the venue, instrument, field, clock, session, and sampling rule. A futures settlement is not an intraday executable price; an ETF is not identical to its underlying basket; a continuous futures series may splice contracts in ways that corrupt a specific event return.

Long windows introduce expected-return model error and overlapping information. A close-to-close return around an 8:30 a.m. release includes every later development. If attribution rather than total investor experience is the question, report a narrow window and use wider windows as sensitivity checks. Do not search ten windows and publish the one with the largest statistic.

Inspect a pre-event window. A move before the official time may indicate anticipation, a different catalyst, clock mismatch, or leakage. It is evidence against a clean surprise design, not a reason to shift the event time retrospectively. Placebo times on non-event days and leads of the event indicator can expose spurious patterns.

## Expected-return models

For minutes around a major market-wide surprise, the expected return over the tiny window is often approximated as zero, with the raw price change treated as response. This can be reasonable when the event dominates normal drift, but it should be stated. For daily individual-stock events, common baselines include the market-adjusted return, a market model estimated before the event, or a multifactor model:

$$
R_{i,t}=\alpha_i+\beta_i'F_t+\epsilon_{i,t}.
$$

Expected return is $\hat\alpha_i+\hat\beta_i'F_t$, estimated over a pre-event window that excludes the event and any contamination period. Factor choice should follow the economic exposure and research convention, not whichever benchmark eliminates an inconvenient result.

Market-adjusted models are transparent but leave differences in beta and sector exposure. Multifactor models can reduce expected-return variance but introduce estimated parameters and potentially absorb part of the event's economic channel. If a regulation affects an entire sector, using that sector as the control can subtract the effect being studied. Conversely, a broad market benchmark may leave a sector shock in the abnormal return.

Modern designs may use matched firms or synthetic controls. Matching variables must be measured before the event and not affected by it. A synthetic control needs a donor pool untouched by the event and weights chosen without outcome peeking. Difference-in-differences adds assumptions about parallel counterfactual trends and spillovers; calling its output an event study does not remove those assumptions.

For interest rates, currencies, commodities, and volatility instruments, “return” itself needs definition. A yield change is not a holding-period bond return. Futures returns require a named contract and roll treatment. Options require strike, expiry, underlying, volatility surface construction, and treatment of changing Greeks. Commodity events require contract month, delivery location and grade, curve state, inventory timing, and seasonality.

## Confounding, collisions, and anticipation

The cleanest event can still collide with other news. Multiple macro series often share an 8:30 a.m. Eastern timestamp. An earnings release can arrive amid sector news or a market-wide shock. A policy decision may be partly leaked through speeches or anticipated through legislative counts. A commodity inventory release can coincide with weather forecasts, pipeline notices, or geopolitical headlines.

Maintain a collision field and a predeclared exclusion or multivariate rule. Excluding collisions after seeing an inconvenient return biases the sample. If two surprise variables arrive simultaneously and are not sufficiently independent, separate attribution may be impossible. The safe conclusion is that the packet moved prices, not that one chosen line item did.

Anticipation changes the estimand. Index additions, mergers, elections, and regulatory actions often become increasingly probable before the formal event. A window around final confirmation measures only residual news. Researchers can model probability updates using clearly timestamped forecasts or market prices, but risk premia and market design complicate interpretation. Comparing the final price change with the full economic effect confuses already-priced information with no effect.

Information can also diffuse in stages. An SEC filing, press release, prepared remarks, call, and Q&A may each add content. Either treat them as separate events with nonoverlapping windows or define a combined window and admit weaker attribution. Do not assign the entire response to the first headline by convention.

## Cross-sectional and time-series inference

Classical event studies average abnormal returns across events or firms and test whether the mean differs from zero. Standard formulas can fail when abnormal returns are cross-sectionally correlated, event-induced volatility rises, securities share the same event date, or windows overlap. A policy announcement affecting hundreds of firms is one common shock, not hundreds of independent experiments.

Clustering should reflect the assignment and dependence structure. If treatment varies by event date and firm, two-way clustering by date and firm may be relevant, subject to having enough clusters. A small number of event dates makes asymptotic cluster inference fragile. Randomization inference, permutation tests that preserve time dependence, block bootstrap procedures, or aggregation to event-level portfolios may be more honest.

Event-induced variance can make pre-event residual variance understate uncertainty. Thin trading and nonsynchronous prices create additional dependence. Rank or sign tests offer robustness to outliers but test different features of the distribution. Report the distribution, median, share positive, and influential events beside the mean.

Multiple testing is often the largest hidden problem. Researchers vary event definitions, windows, assets, surprise measures, subgroups, factors, winsorization, and sample periods. A nominal $p$-value ignores this search. Record the full test family, control false discovery where appropriate, reserve a holdout period, and distinguish confirmatory from exploratory results. Economic magnitude and uncertainty intervals matter more than a star table.

## A reproducible workflow

Start with a protocol before downloading response returns:

1. State the causal or descriptive question and the mechanism predicting sign, timing, and exposed instruments.
2. Define the event population, official source, timestamp rule, surprise construction, collision policy, and exclusions.
3. Choose instruments, expected-return model, estimation window, event windows, and inference method.
4. Freeze the point-in-time event table and archive source identifiers or documents where rights permit.
5. Acquire raw contract- or security-level prices with field, venue, timezone, adjustment, and data-license metadata.
6. Run timestamp, duplication, stale-price, corporate-action, roll, and missingness checks before computing outcomes.
7. Estimate the declared specification, then labeled robustness checks and placebos.
8. Preserve code, environment, data snapshot, and a ledger of every specification attempted.

Each event row should include `event_id`, source identifier, publication timestamp, first-release fields, expectation vintage, collision flags, instrument ID, pre- and post-price timestamps, exclusions, and derived returns. Corrections append versions rather than overwrite history. Security identifiers must survive ticker changes, mergers, delistings, and contract rolls.

Adversarial checks include shifting event timestamps, using leads, sampling non-event placebo dates, delaying execution, changing reasonable windows, comparing trades with quote midpoints, dropping one event at a time, and substituting alternative benchmarks. A result that exists only at the official timestamp, has the predicted cross-asset ordering, survives defensible windows, and disappears at placebo times is more credible. It is still conditional evidence, not metaphysical proof.

For a trading claim, add bid-ask spreads, fees, market impact, computation latency, order eligibility, capacity, and out-of-sample validation. The ability to detect a price response using a midpoint does not imply the response was tradable after learning the event. An event study can be excellent causal description and a poor strategy.

## Reporting contract

A reader should be able to reconstruct the result from the note. Report the research as-of date; event and market timezones; sample formation; event count; missing and excluded events with reasons; first-release and expectation vintages; instruments and fields; expected-return model; estimation and response windows; overlapping-event policy; standard errors or randomization procedure; full test family; economic magnitude; sensitivity checks; and data or licensing limitations.

Separate three claims:

- **Observed:** the specified asset moved by a stated amount in the declared window.
- **Estimated:** the abnormal component relative to a model and its uncertainty.
- **Interpreted:** the proposed information channel, alternatives, and falsifier.

Use “consistent with” when competing channels remain. A stock's fall after earnings can reflect guidance, discount rates, sector news, positioning, or liquidity rather than the headline earnings miss alone. A Treasury move after CPI can reflect expected policy, inflation compensation, or term premium. Cross-asset confirmation strengthens a mechanism but cannot remove a common omitted shock.

## Why it matters

Event studies are one of the most useful bridges between narrative and measurement in markets. They force a claim to name when information arrived, what was expected, which price should respond, how quickly, and relative to what counterfactual. That discipline improves ordinary market reading even when no formal regression is run.

Their apparent precision also makes them dangerous. A clean chart can conceal a wrong timestamp, revised data, selected window, surviving-security universe, contaminated benchmark, repeated testing, or impossible execution. The central habit is to freeze the research design before observing the response and then preserve every deviation from that design. Credibility comes less from a complicated estimator than from a valid information clock, honest counterfactual, and complete specification record.

## Sources

- [James MacKinlay — Event Studies in Economics and Finance](https://www.bu.edu/econ/files/2011/01/MacKinlay-1996-Event-Studies-in-Economics-and-Finance.pdf) — canonical review of event-study design, expected-return models, test statistics, and implementation.
- [John Campbell, Andrew Lo, and A. Craig MacKinlay — The Econometrics of Financial Markets, Chapter 4 companion materials](https://press.princeton.edu/books/hardcover/9780691043012/the-econometrics-of-financial-markets) — standard framework for financial event studies.
- [Federal Reserve Board — Real-Time Price Discovery in Global Stock, Bond and Foreign Exchange Markets](https://www.federalreserve.gov/pubs/ifdp/2006/871/default.htm) — high-frequency response to macro announcements across markets.
- [Federal Reserve Board — Do Actions Speak Louder Than Words?](https://www.federalreserve.gov/econres/feds/do-actions-speak-louder-than-words-the-response-of-asset-prices-to-monetary-policy-actions-and-statements.htm) — separating policy target and path information.
- [Bureau of Labor Statistics — Release Calendar](https://www.bls.gov/schedule/) — official scheduled macro release dates and times; accessed 2026-07-10.
- [Bureau of Economic Analysis — News Release Schedule](https://www.bea.gov/news/schedule) — official release timing; accessed 2026-07-10.
- [SEC — EDGAR Application Programming Interfaces](https://www.sec.gov/search-filings/edgar-application-programming-interfaces) — official filing submissions and company facts access, with filing identifiers and timestamps.
- [Federal Reserve Bank of St. Louis — ALFRED](https://fred.stlouisfed.org/docs/api/fred/alfred.html) — official real-time macro-vintage infrastructure.
- [CME Group — Market Data Policies](https://www.cmegroup.com/market-data/distributor/market-data-policy-guidance.html) — exchange data definitions and licensing context relevant to reproducibility.

## Open questions

- Which free intraday datasets preserve synchronized trades and quotes well enough for reproducible macro event studies?
- How should inference be calibrated when one policy event affects thousands of securities but the number of event dates is small?
- Which preregistration format is light enough for hourly research yet complete enough to expose specification search?
- How can language-model text measures be made genuinely point in time when model weights contain later information?
