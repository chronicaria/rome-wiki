---
title: Treasury futures conversion factors and cheapest-to-deliver
created: 2026-07-10
source: llm
status: seed
tags: [markets, united-states, treasury, futures, derivatives, fixed-income, market-microstructure]
as_of: 2026-07-10
desk: US markets and commodities
review_after: 2026-10-10
---
Treasury futures are claims on a delivery process rather than on one immutable bond: the short may choose an eligible Treasury, and conversion factors translate that heterogeneous basket into an invoice whose economics usually concentrate on the cheapest-to-deliver issue.

Up: [[US Markets and Commodities]]

Related: [[Treasury yield curve mechanics]] · [[Treasury auctions and duration supply]] · [[Futures continuous contracts and roll bias]] · [[Funding liquidity versus market liquidity]]

## The contract is a delivery rule, not a single Treasury

A physically delivered U.S. Treasury futures contract does not promise one named CUSIP from trade date to expiration. Its exchange rules define a **deliverable grade**: a set of fixed-principal Treasury notes or bonds whose remaining maturities and other characteristics meet the product's requirements. The eligible securities form the **delivery basket**. The short position that remains open into delivery chooses which eligible issue to tender, subject to the rulebook and delivery timetable; the assigned long pays the exchange-calculated invoice and receives that issue.

This distinction is the foundation of Treasury-futures pricing. A cash Treasury has a coupon, maturity, accrued interest, yield, duration, financing cost, and potentially special repo value. A futures contract has a standardized notional and a quoted price, but its effective underlying can change because the economically optimal delivery choice can change. Saying that a 10-year note future “is” a particular Treasury is therefore shorthand for “this issue is currently expected to be cheapest to deliver under stated prices, financing assumptions, and delivery timing.” It is not a permanent contractual identity.

CME's Treasury futures delivery guide and product rulebook chapters are the authoritative sources for current eligibility. Product labels are not sufficient. For example, a so-called 10-year future can admit notes with substantially less than ten years remaining, while Ultra 10-year futures have a narrower maturity band near ten years. The eligibility test is measured from a rule-specified point in the named delivery month, and the exchange may add newly issued securities or exercise rulebook authority over deliverability. Anyone building a deliverable basket should therefore key it by exact contract month, CUSIP, and effective rule set rather than copy a timeless table from a textbook.

The basket design gives the contract liquidity while allowing Treasury issuance to evolve. It also creates a **quality option** for the short: among acceptable securities, the short can tender the one that minimizes the economic cost of satisfying delivery. Conversion factors make unlike coupons and maturities roughly comparable, but only roughly. The residual differences determine the cheapest-to-deliver, or CTD, security.

## What a conversion factor does

The conversion-factor system places every eligible security on a standardized 6 percent yield basis. CME describes a security's conversion factor as approximately the price per dollar of par at which that security would yield 6 percent per annum, using exchange-prescribed maturity rounding and calculation conventions. A low-coupon security generally has a factor below one; a high-coupon security generally has a factor above one. The factor is fixed for a given security and delivery month once published—it does not move each day with market yields.

For a $100,000-face-value contract, it is easiest to express the clean converted amount as

$$
\text{converted futures price}=1{,}000\times F\times CF,
$$

where $F$ is the futures settlement price quoted in points per $100 of par and $CF$ is the delivered security's conversion factor. The scale factor of $1{,}000$ turns a one-point move into $1{,}000$ on $100{,}000$ face value. Some products have a different face amount, so the actual product rule—not a memorized multiplier—must control the calculation.

The delivery invoice is then

$$
\text{invoice amount}=1{,}000\times F\times CF+AI,
$$

where $AI$ is the accrued coupon interest on the delivered face amount, calculated to the relevant delivery date. In normalized price-per-$100 terms, the same relationship is often written

$$
\text{invoice price}=F\times CF+AI_{100}.
$$

The converted futures component plays the role of a clean price; accrued interest turns it into a dirty invoice amount. The applicable futures settlement is tied to the short's notice under the relevant delivery rules, not simply whichever live quote happens to be on a screen. Rounding conventions also matter at invoice scale.

The factor does not say what the bond is worth today, does not make all basket securities economically identical, and does not by itself reveal CTD. It is a contractual translation coefficient. The 6 percent standard is a normalization convention, not a forecast that Treasury yields will converge to 6 percent. Because the formula uses prescribed maturity rounding and simplified timing assumptions, it cannot perfectly equalize securities across every yield-curve shape, coupon, accrued-interest state, and financing environment.

## Accrued interest is cash, not a cosmetic adjustment

Treasury notes and bonds normally pay coupons semiannually. Between coupon dates, the seller has earned part of the next coupon. Cash-market convention quotes a clean price but settles at a dirty price equal to clean price plus accrued interest. Futures delivery preserves that economic distinction: the long pays accrued interest in addition to the converted futures price and later receives the full next coupon if it continues to own the security.

For a regular coupon period, a conceptual expression is

$$
AI_{100}=\frac{C}{2}\times\frac{\text{days accrued}}{\text{days in coupon period}},
$$

where $C$ is the annual coupon dollars per $100 face. Treasury marketable securities use actual calendar-day counts within the actual coupon period, with detailed conventions for coupon dates and settlement. Operational calculations should use the official security schedule or a validated Treasury calculator rather than assume every half-year contains 182 days.

Accrued interest appears on both sides of a cash-and-carry comparison. Buying the cash bond requires paying its dirty price today. Delivering later produces the converted futures amount plus accrued interest on the delivery date, while coupons received before delivery are additional interim cash flows. Ignoring these flows can reverse a close CTD ranking, especially around coupon dates. It also makes a formula look simpler than the transaction it is meant to represent.

## Cheapest-to-deliver is a financing comparison

The short's basic problem is to compare the cost of acquiring each eligible security with the amount obtainable by delivering it. A quick static measure is the **net basis**:

$$
\text{gross basis}=P_{clean}-F\times CF,
$$

$$
\text{net basis}=\text{gross basis}-\text{carry adjustment},
$$

with price units and signs declared. Here $P_{clean}$ is the cash security's clean price. “Carry” must include the financing cost of the dirty purchase, coupon income, reinvestment assumptions where material, accrued-interest evolution, and the actual holding period. Vendor conventions differ, so a column called net basis is not reproducible until its formula, settlement dates, repo rate, and delivery-date assumption are known.

A more economically transparent ranking is the **implied repo rate**. Imagine buying an eligible Treasury for cash, financing that purchase in repo, and simultaneously selling the futures contract. If the bond is later delivered, the terminal invoice is largely locked by the futures price and conversion factor. The implied repo rate is the annualized financing return that makes those cash flows balance. In schematic form,

$$
r_{IRR}\approx
\frac{\text{delivery invoice}+\text{interim coupon value}-\text{initial dirty cost}}
{\text{initial dirty cost}\times(T/\text{year})},
$$

with exact implementations adjusting for coupon timing, accrued interest, settlement lags, reinvestment, day-count basis, and sometimes transaction costs.

For a trader who already owns or can buy every basket security on comparable terms, the issue with the **highest implied repo rate** is normally called cheapest to deliver: it provides the best cash-and-carry return against the short future, or equivalently the lowest financing-adjusted delivery cost. CME's Treasury-basis education materials use this highest-return convention. Vendor fields can still differ, so a reproducible study must retain the provider's definition rather than rank an ambiguously signed “IRR” column mechanically.

The word “repo” can mislead. The implied repo rate is a synthetic return inferred from cash and futures prices under a delivery strategy. The **actual repo rate** is the funding rate available for that particular CUSIP and term. A bond may trade “special” in repo because borrowers value it as collateral and are willing to lend cash against it at an unusually low rate. Specialness changes the attainable economics. The relevant opportunity is not simply the highest screen IRR, but the implied return relative to actual funding, balance-sheet use, haircuts, fails risk, transaction costs, and operational constraints.

CTD is therefore conditional, not intrinsic. A defensible statement is: “CUSIP X is CTD for contract Y as of timestamp Z, using these cash prices, this futures price, this repo curve, and this assumed delivery date.” Without those qualifiers, the label can be stale before the note is read.

## Why CTD can switch

Conversion factors would perfectly neutralize delivery choice only in the stylized world embedded in their design. Actual yield curves are not flat at 6 percent, eligible issues differ in duration and convexity, repo values differ, and delivery dates contain optionality. Relative value therefore changes as yields and financing move.

A useful intuition comes from duration. When prevailing yields are well above the 6 percent conversion-factor standard, longer-duration or lower-coupon securities within a basket often become relatively attractive to deliver; below 6 percent, shorter-duration or higher-coupon issues often gain an advantage. This is a tendency, not a deterministic rule. Curve slope, issue-specific richness, coupon timing, maturity rounding, repo specialness, and convexity can dominate it.

Suppose two eligible bonds have almost identical implied repo rates. A small parallel yield move may change their cash prices by different amounts because their DV01s differ. A curve twist may affect them differently because their maturity and coupon cash flows sit at different key-rate points. A reopening can increase one issue's supply and reduce its repo specialness. A coupon payment changes cash-flow timing. Any of these can move the IRR spread through zero and switch CTD.

Near a switch, the future behaves like an option on the cheaper of multiple delivery pathways. Its effective DV01 can migrate from one candidate to another, and simple analytics based on one fixed CTD can jump. The runner-up matters even before it becomes cheapest because the short owns the right to substitute it. Market practitioners therefore monitor the full basket, IRR spreads, switch yields, and scenario CTDs rather than just the highlighted first row of a vendor screen.

A **switch yield** is the yield level, under a specified curve-shift model and financing setup, at which two candidates have equal delivery economics. It is model-dependent. A parallel-shift switch calculation can be useful for a first sensitivity check, but it does not predict the result of a curve twist or a change in specialness. Reporting a switch yield without the assumed curve mapping creates false precision.

## Delivery options belong to the short

The quality option is only one embedded option. Depending on the product and current rules, the short may also have choices over the day within the delivery month on which to initiate delivery and over timing relative to the futures settlement and later cash-market information. CME's delivery guide describes the critical dates and the sequence among intention day, notice day, and delivery day. These rules create several commonly discussed forms of optionality:

- **Quality option:** choose which eligible CUSIP to deliver.
- **Timing option:** choose an eligible delivery day within the permitted window.
- **End-of-month option:** after futures trading has terminated, the short may retain flexibility while deliverable cash securities continue to change in value during the remaining delivery period, where the product calendar permits it.

Intraday notice and settlement cutoffs can also leave the short with economically meaningful timing flexibility after the futures invoice input has been fixed. Because the scope depends on the exact product calendar and current rules, this note does not assign a universal option label to that interval.

These labels are analytical shorthand; the rulebook timetable is controlling. Their value rises when rate volatility is high, basket candidates are close, repo conditions are uncertain, or the interval between price fixing and delivery choice is economically meaningful. The long is short these options: it cannot insist on the most desirable eligible bond or the most favorable day.

This asymmetry helps explain why a futures price need not equal a naive cost-of-carry projection for one presumed CTD. The short's option set has value. But extracting that value requires operational capacity, financing, inventory, and timely decisions, so theoretical option value is not automatically realizable by every participant.

## Hedging with Treasury futures is a moving approximation

Treasury futures are powerful duration and curve hedges because they are liquid, centrally cleared, and require no selection of a cash CUSIP at trade initiation. Yet a futures hedge is exposure to the contract's delivery economics, not to a generic constant-maturity yield.

The usual first-order hedge ratio compares DV01:

$$
N\approx\frac{DV01_{position}}{DV01_{futures}},
$$

where a common approximation for futures DV01 is

$$
DV01_{futures}\approx\frac{DV01_{CTD}}{CF_{CTD}}.
$$

The conversion-factor division reflects how a cash-price change maps into a futures-price change when that security remains CTD. Contract units and signs must then be applied. If a portfolio loses value when yields rise, selling a suitable number of futures can offset part of that loss.

Several limitations prevent this from being a complete hedge:

1. **CTD-switch risk.** The assumed underlying can change. The contract's DV01 and key-rate profile then migrate, sometimes discontinuously in a one-CTD model.
2. **Basis risk.** The hedged security can move relative to CTD because of liquidity, repo specialness, coupon, maturity, tax, or supply differences.
3. **Curve risk.** Equal aggregate DV01 hedges only a small parallel move. A portfolio and CTD can have different key-rate durations and respond differently to steepening, flattening, or butterfly changes.
4. **Convexity and nonlinear option value.** Large yield moves expose differences that a linear DV01 ratio ignores, including changes in delivery-option value.
5. **Funding and margin risk.** Futures variation margin arrives daily, while gains on a cash bond or liability may not be monetized at the same time. Liquidity needs can arise even if the terminal economic hedge is sound.
6. **Roll and calendar risk.** A hedge held beyond expiration must be rolled. The next contract has a new basket, new CTD, new conversion factors, and a calendar spread that can move independently.
7. **Model and data risk.** Stale cash quotes, an incorrect accrued-interest date, a generic repo rate, or a wrong deliverability screen can corrupt the hedge ratio.

For a portfolio with concentrated curve exposure, a key-rate or regression hedge across several futures may be more appropriate than one contract. Even then, historical regressions can fail when CTD, liquidity, or monetary-policy regimes change. A hedge should be stress-tested under candidate CTD switches, plausible curve twists, changes in repo specialness, and margin-liquidity shocks.

## A verification workflow

A reliable CTD calculation should be reconstructible from primary inputs. First identify the exact exchange product and delivery month. Pull the current rulebook chapter and CME delivery calendar, then build the eligible basket from CUSIP-level maturity and coupon data. Do not infer eligibility from a vendor's generic maturity bucket.

Second, use CME's published conversion factor for each CUSIP and delivery month, or independently reproduce it and reconcile any difference to CME. The published factor controls delivery. Record precision and rounding. Third, timestamp clean cash prices and the futures price, and identify whether each is a bid, offer, mid, trade, or settlement. A short contemplating delivery may face executable sides rather than mids.

Fourth, calculate accrued interest and every coupon cash flow from actual settlement through each candidate delivery date. Fifth, attach a CUSIP-specific repo assumption over the matching term, including known specialness where available. Sixth, compute implied repo for every eligible security on every feasible delivery date—not merely one generic month-end date. Reconcile the ranking with an authoritative analytics source such as CME Treasury Analytics, while treating unexplained disagreement as a stop signal rather than averaging the answers.

Finally, run scenarios. Shift the curve by key rates, change special repo assumptions, advance the calendar through coupon and delivery dates, and retain both CTD and runner-up. Report the IRR advantage, not only the winner. A one-basis-point IRR edge based on stale mids is qualitatively different from a wide advantage supported by executable prices.

Common verification failures include mixing clean and dirty prices; using the wrong settlement date; annualizing with an undocumented day count; omitting an interim coupon; applying one general-collateral repo rate to a special CUSIP; confusing highest IRR with lowest basis without consistent carry conventions; reading a decimal futures quote as 32nds; and treating a current conversion-factor table as historical point-in-time data. [[Point-in-time data and look-ahead bias]] applies here as strongly as it does in backtests.

## Why it matters

Conversion factors and CTD mechanics connect the liquid futures market to the fragmented cash Treasury and repo markets. They explain why a futures contract can track one CUSIP today and another after a yield or financing move; why futures-implied yield is a model-derived yield on a selected deliverable rather than a directly observed constant-maturity Treasury rate; and why cash-futures basis trades are funding trades with delivery options, not mechanical arbitrages.

For risk management, the central lesson is that a Treasury future is a dynamic hedge instrument. Its duration is often summarized through CTD, but its price also reflects the runner-up basket, repo conditions, delivery calendar, and short-owned options. For research, the essential discipline is to preserve contract month, CUSIPs, conversion factors, prices and sides, accrued-interest dates, repo assumptions, and calculation timestamp. Without that lineage, a historical CTD series can silently import current baskets, future knowledge, or a vendor convention.

This framework also disciplines market commentary. A futures move does not map uniquely to a “10-year yield,” and a basis change need not signal a directional rate view. It may reflect a switch in deliverability economics, a repo special, dealer balance-sheet costs, an auction-related supply change, or option value around delivery. The right question is not merely which bond is CTD, but under what rules and assumptions, by how much, and how robustly.

## Sources

- CME Group, [The Treasury Futures Delivery Process, 8th edition](https://www.cmegroup.com/content/dam/cmegroup/trading/interest-rates/files/us-treasury-futures-delivery-process.pdf) — primary guide to deliverable grades, critical dates, invoicing, conversion factors, accrued interest, and delivery options; accessed July 10, 2026.
- CME Group, [Calculating U.S. Treasury Futures Conversion Factors](https://www.cmegroup.com/articles/2024/calculating-us-treasury-futures-conversion-factors.html) — primary explanation of current product-specific eligibility and conversion-factor calculations; accessed July 10, 2026.
- CME Group, [U.S. Treasury Futures Conversion Factor Look-Up Tables](https://www.cmegroup.com/trading/interest-rates/us-treasury-futures-conversion-factor-lookup-tables.html) — exchange-published factors and invoice relationship; accessed July 10, 2026.
- CME Group, [Hedging Repo Exposure in the Treasury Basis with One-Month SOFR Futures](https://www.cmegroup.com/education/articles-and-reports/hedging-repo-exposure-in-the-treasury-basis) — primary CME explanation defining implied repo as the return to buying cash and delivering against futures and identifying the highest implied-repo issue as typically CTD; accessed July 10, 2026.
- CME Group, [CBOT Rulebook](https://www.cmegroup.com/market-regulation/rulebook/CBOT.html) — controlling product chapters and general delivery rules; accessed July 10, 2026.
- CME Group, [CBOT Chapter 25: 20-Year U.S. Treasury Bond Futures](https://www.cmegroup.com/rulebook/CBOT/III/25.pdf) — direct rulebook example specifying contract grade, invoice formula, settlement-price use, factor definition, and rounding; accessed July 10, 2026.
- TreasuryDirect, [Buying a Treasury marketable security](https://www.treasurydirect.gov/marketable-securities/buying-a-marketable-security/) — official Treasury explanation of coupon securities, reopenings, purchase price, and accrued interest; accessed July 10, 2026.
- U.S. Department of the Treasury, [Treasury securities and programs](https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics/treasury-securities-and-programs) — official entry point for Treasury security data and marketable-security information; accessed July 10, 2026.

## Open questions

- Which free, point-in-time CUSIP-level repo dataset is adequate for reproducible historical CTD and basis studies without silently substituting general collateral?
- How large is the delivery-option component of futures value across volatility regimes after realistic funding, balance-sheet, and execution costs?
- Which CTD-switch scenario method best balances transparency with the nonparallel curve and CUSIP-specific repo dynamics that determine actual switching?
- How often do vendor CTD histories revise after Treasury reopenings, eligibility changes, bad cash quotes, or corrected accrued-interest schedules?
