---
title: Crypto ETF flows and market impact
created: 2026-07-10
source: llm
status: seed
tags: [crypto, etf, market-structure, bitcoin, ether, liquidity]
as_of: 2026-07-10
desk: crypto-markets
---

Crypto ETF “flows” measure changes in fund shares and assets, not exchange trading volume; they can transmit demand into crypto markets through creation, redemption, and hedging, but neither a flow print nor a holdings change by itself proves a causal price effect.

Up: [[Crypto]]

Related: [[Bitcoin]] · [[Ethereum]] · [[Crypto market structure]] · [[Wrapped assets and duplicate crypto exposure]] · [[Crypto liquidity]]

## The three ledgers people collapse into one

The phrase *ETF inflow* sounds like a wire transfer moving directly from a buyer into bitcoin. That mental model is usually wrong. A spot crypto exchange-traded product has at least three connected ledgers, and each answers a different question.

The **secondary-market ledger** records shares traded on Nasdaq, Cboe, or NYSE Arca. If one investor buys 100,000 existing shares from another, reported ETF volume rises, but the trust has not necessarily issued shares or acquired another satoshi. Cash changes hands between investors; the seller’s shares become the buyer’s shares. Heavy volume can therefore accompany zero net fund flow.

The **primary-market ledger** records baskets created or redeemed between the trust and firms authorized to transact directly with it, called authorized participants (APs). A creation increases shares outstanding. A redemption decreases them. This is the institutional valve that lets the share supply expand or contract when secondary-market demand would otherwise push the share price away from net asset value (NAV).

The **asset ledger** records the trust’s bitcoin, ether, cash, liabilities, and fees. Holdings may rise after creations, fall after redemptions, and decline gradually when the sponsor sells or transfers crypto to pay fees. Their dollar value also changes whenever crypto prices change, even if the number of coins does not. Assets under management (AUM) are therefore not flow: approximately,

$$
\Delta \text{AUM} \approx \text{net subscriptions} + \text{investment return} - \text{fees and expenses}.
$$

These distinctions prevent three common mistakes. ETF trading volume is not an inflow. A rise in dollar AUM is not necessarily an inflow. And a one-day holdings change is not necessarily the exact amount bought on a public spot exchange that day.

The cleanest observed flow measure is generally the change in shares outstanding multiplied by an appropriate NAV, adjusted for splits and other mechanical events. Sponsor-published basket and holdings files can cross-check it. Even then, aggregating across products requires care: time zones, valuation cutoffs, late revisions, seed shares, conversions, fees, and different basket sizes can create discrepancies between data vendors.

## How a share purchase can reach the underlying market

Suppose an investor submits a marketable order for shares of a spot bitcoin ETP. A market maker sells the shares, perhaps from inventory. If ordinary sellers supply enough shares, nothing must happen in the primary market. If buying pressure persistently lifts the share price above the value of its bitcoin entitlement, an AP or affiliated trading operation has an incentive to assemble the required basket consideration, create new shares near NAV, and sell those shares at the premium.

That arbitrage has two legs but not necessarily the sequence imagined by a retail observer. The dealer can hedge its exposure with spot bitcoin, futures, options, another ETP, or an over-the-counter trade before or after the formal basket settles. It can cross orders internally or source coins from a liquidity provider. The economic demand reaches the broader crypto complex through dealers’ inventory and hedging decisions, not through a rule that every retail ETF purchase instantly triggers a visible exchange buy.

Redemptions reverse the mechanism. Persistent selling can drive ETP shares below NAV. An AP buys discounted shares and redeems a basket, receiving cash or crypto depending on the permitted method. The trust or its agent may sell crypto in a cash redemption; in an in-kind redemption it transfers crypto, leaving the recipient to hold, hedge, or sell it. Either route can transmit pressure, but the venue and timing differ.

Arbitrage is not free. Let $P_E$ be the market value of a basket of ETP shares, $V$ its NAV, and $C$ the combined cost of spreads, financing, execution, custody, blockchain transfer, operational delay, and risk. Creation arbitrage is attractive when $P_E-V>C$; redemption arbitrage is attractive when $V-P_E>C$. Competition usually keeps large, liquid products close to NAV, but the band can widen during crypto volatility, U.S. market closures, network congestion, or impaired dealer balance sheets.

This also explains why the ETP’s U.S. trading hours do not bound its information effect. Bitcoin and ether trade continuously, while ETP shares trade mainly during U.S. sessions. Dealers can hedge after hours in crypto or derivatives markets. Conversely, overnight crypto price moves can be incorporated into the ETP’s opening price before any new creation order is completed.

## Cash and in-kind creations are economically different

The U.S. spot bitcoin products approved in January 2024 and spot ether products approved in 2024 initially used cash creations and redemptions. Under a cash creation, the AP delivers dollars and the trust, sponsor, or designated trading agent arranges the crypto purchase. Under a cash redemption, crypto is sold to fund the cash returned. A Fidelity diagram of its original cash process shows the sponsor soliciting liquidity providers, the fund’s cash custodian wiring cash, and bitcoin moving on-chain into or out of custody.

In July 2025 the SEC permitted in-kind creations and redemptions for crypto ETPs. Under an in-kind creation, bitcoin or ether rather than dollars is delivered for the basket; under an in-kind redemption, the asset is distributed. Current prospectuses may permit both methods, subject to sponsor procedures and operational availability. The legal permission does not mean every basket uses the same method.

The distinction matters for interpreting impact. A cash creation more directly requires an asset purchase on behalf of the trust, but the execution can occur through competing liquidity providers, OTC markets, or exchanges and may have been pre-hedged. An in-kind creation does not require the trust itself to buy crypto; the AP or its designee must source the coins, yet they may come from inventory accumulated earlier. In-kind processing can reduce execution costs borne by the trust and isolate existing shareholders from some transaction costs, but it does not abolish market impact. It relocates sourcing and execution decisions to APs and their counterparties.

Likewise, an in-kind redemption is not proof that the distributed coins were dumped. It proves that coins left the trust. The recipient might sell them, use them to close a short hedge, transfer them to another vehicle, or retain them. Chain movements out of a known custodian are therefore evidence about custody, not automatically evidence about ultimate economic selling.

## Holdings, creations, flows, and volume: a worked example

Imagine a trust with 100 million shares, each representing 0.0005 BTC after liabilities. It therefore holds about 50,000 BTC. During the day, 20 million shares trade on an exchange. That $-volume might be enormous, yet if buyers and sellers exchange existing shares and market makers finish flat, shares outstanding remain 100 million and holdings remain near 50,000 BTC. Secondary volume was high; net primary flow was zero.

Now suppose demand pushes the shares to a persistent premium and APs create two million shares. At the same entitlement, the trust needs roughly 1,000 additional BTC, whether received in kind or bought with creation cash. Shares outstanding rise to 102 million and holdings to roughly 51,000 BTC. The meaningful net creation is two million shares, not the day’s 20 million shares of turnover.

Finally, suppose bitcoin’s price rises 10% with no further creation. Dollar AUM rises approximately 10%, but coin holdings and shares outstanding are unchanged. Calling the AUM gain an inflow would convert investment performance into imaginary subscription demand.

Sponsor fees complicate a longer window. Spot crypto trusts generally accrue fees as a percentage of NAV and can dispose of a small amount of crypto to pay them. Thus bitcoin-per-share can slowly decline even without net redemptions. Comparing raw holdings at distant dates without accounting for fees slightly overstates outflow.

Public sponsor pages illustrate the separate fields. BlackRock’s IBIT page publishes net assets, shares outstanding, daily volume, premium or discount, basket amount, and bitcoin holdings. These are related but non-interchangeable observations. Its SEC filings separately describe basket creation and redemption mechanics, trading counterparties, custody, expenses, and financial statements. A careful analyst uses the filing for the legal mechanism, the sponsor file for fund state, the exchange tape for trading, and crypto-market data for underlying execution—not one field as a substitute for all four.

## The channels through which flows may affect price

ETF demand can affect the underlying through several channels.

**Inventory demand.** Net creations ultimately increase the trust’s crypto holdings. If the marginal coins must be induced from holders, the clearing price rises. Net redemptions reduce holdings and can release inventory. The effect depends on available sell-side depth, not total market capitalization. A $100 million order is small relative to bitcoin’s capitalization but can be large relative to immediately available liquidity near the prevailing price.

**Dealer hedging.** Market makers who sell ETP shares acquire short price exposure. Buying spot, futures, or options neutralizes it and transmits pressure before the basket print. A subsequent creation may merely settle a position already hedged. This timing mismatch makes same-day closing “flow” data a noisy clock for the actual trade.

**Cross-venue arbitrage.** Crypto liquidity is fragmented across centralized exchanges, OTC desks, derivatives venues, and jurisdictions. An ETF-related hedge on one venue propagates as arbitrageurs rebalance prices elsewhere. Fragmentation can amplify temporary impact where local order books are thin while also dispersing execution across the global market.

**Information and attention.** Investors may interpret persistent inflows as evidence of institutional adoption or future scarcity and trade crypto independently of basket needs. Outflow headlines can produce the opposite reflex. This is an expectations channel, not mechanical backing demand, and it can overshoot or reverse.

**Portfolio access.** Brokerage, advisory, and retirement-account availability can change who can hold exposure and how easily portfolios rebalance it. That may raise long-run demand elasticity, but flows can also be rotations from futures, closed-end trusts, overseas ETPs, miners, or direct coin holdings. Gross creations in a new product overstate net new demand for the asset class if another vehicle is simultaneously redeemed.

**Collateral and derivatives.** Options and financing around large ETPs can connect ETF shares to volatility, basis, and dealer-gamma dynamics. These can influence short-horizon trading without changing trust holdings. An options-driven rally in shares is not itself a fund inflow, though hedging may spill into futures or spot.

## Why correlation is not causation

Daily ETF flows and crypto returns often move together, but the direction is endogenous. Rising prices attract performance-chasing subscriptions. The same macro news—rates, dollar liquidity, regulation, or risk appetite—can drive both bitcoin and ETF demand. Dealers can hedge before official flow measurement. And bitcoin trades around the clock while U.S. ETP flow is stamped on a business-day schedule.

A regression such as

$$
r_t=\alpha+\beta F_t+\varepsilon_t
$$

where $r_t$ is bitcoin’s return and $F_t$ is net ETF flow estimates association unless $F_t$ is plausibly independent of the shocks inside $\varepsilon_t$. A positive $\beta$ does not by itself establish that flow caused return. Regressing price *levels* on cumulative flows is especially hazardous because both can trend, producing a high $R^2$ without a stable causal relationship.

Stronger designs need a credible source of flow variation unrelated to contemporaneous bitcoin news, or careful timing that demonstrates flows were known before the return window. Instrumental-variable estimates are only as valid as their exclusion restriction: an instrument that predicts flows must affect bitcoin returns solely through those flows. Lagged flow can fail if investor demand is persistent or if yesterday’s news continues affecting today’s return. ETF launches are informative event studies, but approval was anticipated, coincided with other market developments, and changed access, attention, and regulation simultaneously.

Research therefore should report several tests rather than one coefficient: intraday sequencing; controls for lagged returns, volatility, futures basis, macro announcements, and global risk factors; alternative flow vendors; separation of GBTC conversion outflows from new-product creations; placebo windows; and sensitivity to the sample period. Bidirectional predictability—returns forecasting later flows as well as flows forecasting returns—is economically plausible and a warning against a one-way story.

Recent working papers illustrate both the opportunity and uncertainty. Lim reports positive same-day price-impact estimates using five large U.S. spot bitcoin ETPs and an instrumental-variable specification, while also finding feedback from returns to flows. Mazur and Polyzos document strong associations in an early sample but also note that much bitcoin price change occurred outside ETF trading hours. These are useful hypotheses and estimates, not universal structural constants: sample choice, flow construction, market regime, instruments, and publication status matter.

The defensible causal statement is narrower: creations require the acquisition or delivery of underlying crypto and redemptions remove it from the trust, so the mechanism can transmit demand; the magnitude and timing of marginal price impact must be estimated, and observed co-movement alone does not identify it.

## Reading a daily flow headline

A disciplined reading starts with six questions.

1. **What is measured?** Verify whether the number is net creations at NAV, a change in shares outstanding, a change in coin holdings, dollar AUM, or exchange turnover.
2. **What is netted?** Sum all comparable products. A large inflow to one fund can be a fee-driven transfer out of another rather than new asset-class demand.
3. **Which timestamp?** Note the order cutoff, NAV valuation time, publication time, and crypto return window. Avoid assigning a closing flow print to a price move that preceded the underlying execution.
4. **Cash or in kind?** Check current prospectuses and basket disclosures. Do not assume the 2024 cash-only structure remains universal after the 2025 approvals.
5. **How large relative to liquidity?** Compare estimated underlying demand with spot and futures depth, spreads, volatility, and dealer capacity—not merely capitalization or daily reported volume.
6. **What else moved?** Examine macro news, stablecoin liquidity, futures basis, liquidations, options positioning, and major crypto-specific events before attributing the return.

Weekly or monthly aggregation can reduce settlement noise, but it does not solve endogeneity. A useful dashboard keeps separate columns for shares outstanding, coin holdings, NAV, secondary volume, premium/discount, estimated net creation dollars, and the return measured over explicitly stated windows. It labels vendor estimates and revisions rather than presenting them as audited cash movements.

## Why it matters

Spot crypto ETPs join a regulated securities-market wrapper to a continuous, globally fragmented underlying market. They can broaden access and concentrate custody while creating a visible primary-market demand series. That series is economically meaningful precisely because baskets change trust holdings—but it becomes misleading when confused with trading volume or treated as an automatic price oracle.

For [[Bitcoin]], supply is inelastic at short horizons, yet tradable inventory and seller willingness vary. For [[Ethereum]], holdings interact with a proof-of-stake economy, and a non-staking trust can have a different return profile from directly held, staked ether. Across both, fees, custody concentration, AP participation, derivatives, and trading-hour mismatch shape the wrapper’s tracking and transmission.

The right conclusion is neither “ETF flows do nothing” nor “every dollar of inflow buys a dollar on an exchange and raises price.” Creations and redemptions are a real balance-sheet bridge. Their price effect is mediated by inventories, hedges, execution venues, substitution among products, and information already embedded in prices. Holdings evidence establishes exposure; causal inference establishes impact. They are different empirical jobs.

## Sources

- U.S. Securities and Exchange Commission, “Order Granting Accelerated Approval of Proposed Rule Changes … Bitcoin-Based Commodity-Based Trust Shares and Trust Units,” January 10, 2024: https://www.sec.gov/files/rules/sro/nysearca/2024/34-99306.pdf
- U.S. Securities and Exchange Commission, “SEC Permits In-Kind Creations and Redemptions for Crypto ETPs,” July 29, 2025: https://www.sec.gov/newsroom/press-releases/2025-101-sec-permits-kind-creations-redemptions-crypto-etps
- U.S. Securities and Exchange Commission, Bitwise in-kind amendment record and orders, 2025: https://www.sec.gov/rules-regulations/self-regulatory-organization-rulemaking/sr-nysearca-2025-38
- iShares, “iShares Bitcoin Trust ETF (IBIT),” holdings, basket, shares-outstanding, volume, and premium/discount data, accessed July 10, 2026: https://www.ishares.com/us/products/333011/ishares-bitcoin-trust-etf-
- iShares Bitcoin Trust ETF, Form 10-K for year ended December 31, 2025: https://www.sec.gov/Archives/edgar/data/1980994/000143774926006058/bit20251231_10k.htm
- Fidelity, “Fidelity Wise Origin Bitcoin Fund Prospectus,” 2026: https://www.fidelity.com/bin-public/060_www_fidelity_com/documents/mutual-funds/Fidelity-Wise-Origin-Bitcoin-Fund.pdf
- Fidelity Digital Assets, “Considerations when assessing spot bitcoin ETPs,” including cash creation/redemption process diagram, 2024: https://institutional.fidelity.com/app/proxy/content?literatureURL=%2F9916609.PDF
- Boon Chuan Lim, “The Price Impact of Spot Bitcoin ETF Flows,” working paper, April 17, 2026: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6592830
- Mieszko Mazur and Efstathios Polyzos, “Spot Bitcoin ETFs: The Effect of Fund Flows on Bitcoin Price Formation,” working paper: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5452994
- International Monetary Fund, *Global Financial Stability Report*, April 2024, discussion of spot bitcoin ETP flows and market conditions: https://www.imf.org/en/Publications/GFSR/Issues/2024/04/16/global-financial-stability-report-april-2024

## Open questions

- Which public flow series best reconciles, product by product, to audited changes in shares outstanding and holdings after correcting for fees and revisions?
- How much underlying sourcing now occurs in kind versus in cash across U.S. bitcoin and ether ETPs, and how consistently do sponsors disclose the split?
- Can intraday AP order data or dealer inventories identify impact without relying on weak instruments or closing-day aggregates?
- Does ETF-related price impact persist, reverse as temporary liquidity pressure, or vary systematically with volatility and available exchange depth?
- How do options on large crypto ETPs change the relative importance of creation flows versus dealer hedging flows?
