---
title: Collateral scarcity across funding markets
created: 2026-07-10
source: llm
status: seed
tags: [markets, united-states, rates, repo, derivatives, market-microstructure, quantitative-research]
as_of: 2026-07-10
desk: US markets and commodities
review_after: 2027-01-10
---
Collateral is scarce when a particular security, or a class of readily reusable securities, is worth more inside financing and settlement chains than its cash price alone reveals.

Up: [[US Markets and Commodities]]

Related: [[Treasury repo specialness]] · [[Funding liquidity versus market liquidity]] · [[Treasury futures conversion factors and cheapest-to-deliver]] · [[Physical commodity basis]]

## Two markets occupy every secured trade

A repurchase agreement looks like a cash loan secured by securities: one party delivers collateral and receives cash, then reverses the transaction later at a slightly higher cash price. That description is correct but incomplete. Every repo simultaneously clears a **cash need** and a **collateral need**. Sometimes the cash borrower chooses from a broad eligible basket and the transaction is primarily about financing. Sometimes the cash lender insists on one CUSIP because it must settle a short sale, deliver into another transaction, hedge a futures position, or satisfy a mandate. The second trade is economically a securities loan expressed through repo.

This distinction separates general collateral, or GC, from specific collateral. In GC, collateral within an agreed class is broadly substitutable, so the repo rate mainly reflects the price of secured cash plus counterparty, term, settlement, and balance-sheet conditions. In a specific-collateral trade, the identity of the security matters. A bond in unusually high demand may trade at a repo rate below GC; it is then said to be **special**. The GC rate minus the special rate is a convenient, though not complete, measure of the security's scarcity value.

Suppose an overnight Treasury GC trade clears at 4.50% and a particular note clears at 3.50%. An owner willing to lend that note can effectively receive part of its compensation through unusually cheap cash. The 100-basis-point gap is not a free arbitrage in isolation. Settlement capacity, haircuts, dealer access, netting, counterparty limits, fails risk, and the ability to reuse the collateral determine whether anyone can capture it. Quoted repo rates also need consistent day count, tenor, timestamp, and segment definitions before comparison.

The useful mental model is therefore not “safe assets are scarce” in the abstract. Scarcity has four coordinates:

1. **identity** — which issue, grade, location, or eligibility class is wanted;
2. **time** — for which settlement date and return date it is needed;
3. **place** — at which custodian, clearing venue, legal entity, or delivery point it must appear; and
4. **balance-sheet route** — through which intermediary and netting set it can travel.

Abundant Treasury debt can coexist with an acute shortage of one on-the-run issue in the right account on the right day. Conversely, a small free float does not guarantee specialness if shorts are light, holders lend readily, and substitutes are acceptable.

## How scarcity is created

Scarcity begins with an imbalance between demand to obtain a security and the lendable supply available through the relevant plumbing. Demand can come from short sellers that sold the security before acquiring it, market makers covering customer deliveries, relative-value traders, futures arbitrageurs, index or benchmark users, and firms seeking high-quality liquid assets or margin collateral. Supply depends not just on issuance outstanding but on ownership. Securities held in portfolios that do not lend, operationally cannot lend, or require high fees are effectively outside the circulating pool.

Newly issued benchmark Treasuries are common candidates for specialness. They concentrate liquidity and hedging demand, so dealers and investors may short them as the cleanest way to express a rates view or hedge another bond. Their predecessors may be plentiful but imperfect substitutes because cash-flow dates, duration, liquidity, and settlement obligations differ. Treasury auctions enlarge supply, while dealer inventories, investor allocations, Federal Reserve holdings and securities lending, and buybacks can change the amount that circulates.

Futures create another channel. A Treasury futures short has delivery choices defined by the exchange contract. The bond with the lowest delivery-adjusted cost—the cheapest to deliver—can attract concentrated demand as delivery approaches. Yet “the CTD is scarce” is not a sufficient explanation: conversion factors, accrued interest, delivery timing options, financing rates, and the wildcard option all affect the invoice spread. A researcher must model the deliverable basket rather than match a futures ticker to one cash bond permanently.

Regulatory and institutional eligibility can manufacture scarcity by narrowing substitution. A central counterparty may accept only defined collateral with specified haircuts. A derivatives credit-support annex may require cash in one currency or government securities of certain maturities. A liquidity rule can make some assets more useful to regulated institutions. These constraints create a convenience service: the asset permits settlement, margin, liquidity compliance, or balance-sheet netting. Its market price and financing rate jointly capitalize that service.

Quarter-end and year-end can intensify the effect. Dealers manage leverage exposures, reporting dates, internal limits, and scarce balance-sheet capacity. A security may remain physically available while becoming expensive to intermediate. This is **intermediation scarcity**, not necessarily an economy-wide shortage of the asset. The distinction matters because the remedy differs: more issuance addresses aggregate supply, while broader access, better netting, securities lending, or balance-sheet elasticity may address distribution.

## Collateral chains and dealer balance sheets

Collateral rarely stops with its first recipient. Subject to contract and regulation, a dealer receiving a Treasury in reverse repo may reuse it to satisfy another customer's demand or to borrow cash elsewhere. This reuse links otherwise separate repo segments. OFR research using dealer data found that Treasury collateral is reused much more extensively than non-Treasury collateral, illustrating why Treasuries are especially effective as balance-sheet and settlement media.

Reuse creates efficiency because one security can support multiple matched transactions. A dealer might borrow a scarce note from an asset manager, lend it to a hedge fund, and finance offsetting cash positions, earning a spread while keeping limited directional exposure. Central clearing and sponsored repo can allow economically offsetting trades to net, reducing some gross exposures and dealer balance-sheet usage. The benefit is not automatic: membership, margin, default-fund, liquidity, operational, and concentration requirements remain.

The same chain creates fragility. A failure to receive collateral on one leg can prevent delivery on the next. If a lender recalls a security, the intermediary may have to source it quickly or fail. Haircuts and variation margin can generate cash demands even when the collateral remains fundamentally safe. A dealer constrained by a supplementary leverage exposure, internal risk limit, or settlement capacity may decline an otherwise profitable trade. Therefore a large specialness spread may indicate demand for a security, limited lendable supply, impaired intermediation, or all three.

Netting makes gross quantities deceptive. Two firms can show enormous repo volumes yet modest net cash borrowing if they intermediate offsetting customers. Conversely, a small net position can still require large intraday liquidity and operational capacity because settlement is gross or imperfectly synchronized. Analyses that infer leverage from a single repo series risk double-counting matched books or missing bilateral segments.

The US market is segmented among tri-party, centrally cleared bilateral, and non-centrally cleared bilateral activity. Public coverage differs across segments. The New York Fed's benchmark rates summarize specified overnight Treasury repo populations; OFR publishes more granular centrally cleared and tri-party measures; its non-centrally cleared bilateral collection addresses a historically important data gap. A rate from one segment cannot be treated as the universal marginal financing cost without checking participants, collateral specificity, clearing, tenor, and inclusion rules.

## Transmission into cash Treasuries and futures

Scarcity changes relative prices. A bond that is cheap to finance can support a higher cash price because its owner receives financing income or lending value. This can distort fitted yield curves if the model treats every observed yield as a pure expectation-plus-term-premium signal. On-the-run/off-the-run spreads mix liquidity, financing, hedging demand, taxes, supply, and risk preferences. Specialness is evidence about the plumbing beneath the price, not proof of one causal story.

Cash-futures basis trades make the channel visible. A trader buys a deliverable Treasury, finances it in repo, and sells the associated futures contract. Expected profitability depends on the purchase price, futures invoice price, coupons, financing cost, margin funding, transaction costs, delivery options, and the probability that the assumed financing rate persists. If the owned bond turns special, financing can become cheaper and the position more attractive. If balance-sheet capacity contracts or repo haircuts rise, leverage becomes more expensive even if the bond itself is plentiful.

Arbitrage therefore has an elastic balance sheet, not an infinite one. During stress, cash and futures can diverge because the capital and intermediation needed to close the gap become scarce. A widening basis does not by itself establish mispricing; it may compensate for margin liquidity, model risk, settlement risk, and uncertain exit costs. [[Transaction-cost models]] should include financing and margin, not just bid-ask spreads and commissions.

Scarcity also affects Treasury auction interpretation. A newly issued security may trade special because dealers pre-hedged allocations, clients shorted the benchmark, or the lendable float is slow to circulate. Auction tails and bid-to-cover ratios alone cannot reveal this. A useful post-auction study aligns announcement, when-issued trading, auction results, issuance settlement, repo specialness, dealer positions, and futures delivery economics. The event clock matters: the information set changes at each stage.

## Transmission into swaps, options, and margin

Collateral terms influence derivatives prices even when no Treasury is delivered into the final payoff. Cleared swaps and futures require initial and variation margin. The opportunity cost of eligible collateral affects the all-in cost of holding the position. A participant that must transform less eligible assets into cash or Treasuries pays a spread to an intermediary, while a participant already holding the desired collateral may possess a funding advantage.

In interest-rate swaps, discounting and collateral conventions determine how future cash flows are valued. The economic point is broader than any one curve: identical promised cash flows can have different values under different collateral currencies, remuneration rates, and legal agreements. [[Cross-currency basis]] partly reflects the balance-sheet and hedging cost of obtaining one currency against another, though it should not be reduced to “collateral scarcity” alone. Credit supply, regulation, demand for dollar funding, and market segmentation also matter.

Options add convex cash needs. A short option position can require rapidly increasing variation margin as the underlying moves, while hedging generates additional transactions. The collateral is not necessarily scarce by CUSIP; what becomes scarce may be immediately available cash, settlement capacity, or balance sheet. This is why funding liquidity and market liquidity can reinforce one another. Higher margin needs cause asset sales or reduced intermediation; thinner markets increase price moves and margin; the loop can continue even without a deterioration in ultimate credit quality.

Researchers should distinguish three prices: the derivative's quoted price, the financing price of the hedge, and the shadow price of constrained collateral or balance sheet. The third is rarely observed directly. It appears through spreads, rejected trades, haircuts, substitutions, clearing choices, quarter-end patterns, or divergence across otherwise similar participants.

## Physical commodities are analogous, not identical

Commodity markets also attach value to deliverability, but a warehouse receipt is not interchangeable with a Treasury. Metal, oil, and agricultural collateral has grade, location, storage, insurance, deterioration, load-out, and transport constraints. An exchange warrant can make material deliverable against a futures contract, while cancellation of a warrant may signal intent to remove it; neither proves immediate consumption. Reported stocks can coexist with tight nearby spreads when the available material is in the wrong place, grade, ownership status, or delivery queue.

The analogy is still useful. A commodity's convenience yield resembles the non-cash service from holding inventory, while Treasury specialness reflects the service from holding a particular security. Both can appear through term structure and basis. Both require attention to who can lend or deliver the asset and at what cost. But commodity transformation is physical and often slow; Treasury collateral can move electronically, subject to legal and operational constraints. Applying a repo model mechanically to metals or oil erases the bottleneck that gives physical basis its meaning.

## A measurement protocol

A defensible collateral-scarcity study starts by defining the claim narrowly. “Collateral is scarce” should become something testable, such as “the current two-year note traded persistently below GC around settlement while fails and borrowing demand rose.” Then record:

- the exact security or eligibility basket, CUSIP, maturity, and on/off-the-run status;
- trade date, settlement date, tenor, segment, clearing route, rate convention, and timestamp;
- the GC comparator and why it is comparable;
- auction, issuance, coupon, futures delivery, index, month-end, and regulatory dates;
- lendable-supply proxies, fails, dealer positions, securities-lending activity, and relevant Federal Reserve operations;
- alternative explanations including cash scarcity, counterparty credit, operational outages, balance-sheet reporting, or data-composition changes.

SOFR is designed as a broad overnight Treasury financing benchmark, not a security-level specialness series. TGCR and BGCR cover narrower populations. A security-specific repo quote is required to estimate an individual issue's specialness, and such data may be proprietary or incomplete. The absence of a public quote is a provenance limitation, not permission to infer it from the cash yield.

Falsifiers should be explicit. A supply story weakens if specialness persists after issuance expands while borrowing demand and fails fall. An intermediation story weakens if comparable dealers with similar constraints show no quarter-end change. A futures-delivery story weakens if the scarce issue is not economically competitive in the deliverable basket after financing and options. Competing hypotheses can coexist; the goal is to assign evidence, not force one label.

## Why it matters

Collateral scarcity explains why apparently small financing details can move large markets. It connects Treasury relative value, repo, dealer balance sheets, futures convergence, derivatives margin, and physical basis through one principle: an asset's usefulness in a constrained delivery or financing network has a price. Ignoring that price turns plumbing into unexplained “noise” and encourages false arbitrage claims.

For quantitative research, the main lesson is point-in-time discipline. Historical cash prices are insufficient when the strategy depended on repo access, security borrowing, margin, or delivery. Financing series must match the tradable instrument and the participant's actual route. A backtest that assigns GC financing to a persistently special bond, assumes unlimited collateral reuse, or ignores margin liquidity manufactures returns that may never have been obtainable.

The practical payoff is diagnostic, not prescriptive. When a spread moves, ask whether cash became scarce, the security became scarce, intermediation became scarce, or settlement capacity became scarce. Then locate the constraint by identity, time, place, and balance-sheet route. That decomposition is more durable than a story built from one headline rate.

## Sources

- [Office of Financial Research, *Repo Market Intermediation: Dealer Cash and Collateral Flow Management across the U.S. Repo Market*](https://www.financialresearch.gov/briefs/files/OFRBrief-24-07-repo-market-intermediation.pdf), 2024.
- [Office of Financial Research, *U.S. Repo Markets Data Release*](https://www.financialresearch.gov/short-term-funding-monitor/datasets/repo/), accessed 2026-07-10.
- [Office of Financial Research, *Non-centrally Cleared Bilateral Repo Data*](https://www.financialresearch.gov/data/collections/non-centrally-cleared-bilateral-repo-data/), accessed 2026-07-10.
- [Federal Reserve Bank of New York, *Statement Regarding the Publication of Overnight Treasury Repo Rates*](https://www.newyorkfed.org/markets/opolicy/operating_policy_170524a), 2017.
- [Federal Reserve Bank of New York, *Tri-Party/GCF Repo Statistics*](https://www.newyorkfed.org/research/tri-party-repo), accessed 2026-07-10.
- [Federal Reserve Bank of New York, *Why Is the U.S. Treasury Contemplating Becoming a Lender of Last Resort for Treasury Securities?*](https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr223.html), Staff Report 223, 2005.
- [Treasury Market Practices Group, *Best Practices for Treasury, Agency Debt, and Agency Mortgage-Backed Securities Markets*](https://www.newyorkfed.org/tmpg/best_practices.html), accessed 2026-07-10.

## Open questions

- Which public or licensed dataset best preserves CUSIP-level specialness, fails, and lendable supply with point-in-time timestamps?
- How will expanded central clearing change netting benefits, margin needs, and the distribution of collateral scarcity across participants?
- Can dealer-level balance-sheet constraints be identified separately from security-specific borrowing demand without confidential transaction data?
- How should a futures basis backtest model stochastic specialness and collateral recalls rather than a fixed financing spread?
