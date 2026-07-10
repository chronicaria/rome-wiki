---
title: Spot futures basis in crypto
created: 2026-07-10
source: llm
status: seed
tags: [crypto, markets, market-structure, derivatives, quantitative-research]
---

The crypto futures basis is the maturity-matched gap between a dated futures price and a defined spot reference; it measures the price of synthetic exposure and balance-sheet capacity, not a risk-free yield or a standalone forecast.

Up: [[Crypto]]


## The object being measured

A dated futures contract fixes today the cash value of an asset at a later expiry. Let $S_t$ be a specified spot benchmark at observation time $t$, $F_{t,T}$ the price of a futures contract expiring at $T$, and $\tau$ the remaining time in years. The simplest dollar basis is

$$B_{t,T}=F_{t,T}-S_t,$$

and the percentage basis is

$$b_{t,T}=\frac{F_{t,T}}{S_t}-1.$$

Because contracts with different maturities cannot be compared directly, analysts commonly annualize the simple return:

$$b^{ann}_{t,T}=\left(\frac{F_{t,T}}{S_t}-1\right)\frac{1}{\tau}.$$

Compounding conventions vary. A continuously compounded measure is $\ln(F_{t,T}/S_t)/\tau$. The convention must travel with the number. A 1% premium with seven days remaining annualizes to roughly 52% under simple scaling, but that eye-catching rate is earned only for seven days and assumes the spread converges without losses, delays, or reinvestment friction. Quoting it as a durable annual yield is misleading.

When $F>S$, the curve is in **contango**. When $F<S$, it is in **backwardation**. For a deliverable or reliably cash-settled future, the futures and spot references should converge at expiry. Convergence does not mean every trader can lock in the displayed spread. It means incompatible terminal prices invite trades by participants able to finance spot, short futures, meet margin calls, custody assets, and settle against the specified benchmark.

The word *basis* is overloaded. A trader may mean the raw price difference, the annualized carry, a trade-at-settlement differential, or the mismatch between a hedge and the exposure it is meant to offset. [[Perpetual funding and crowded leverage]] concerns contracts without a dated expiry; their funding mechanism is related to, but not identical with, the curve on dated futures. A good note therefore records the formula, spot source, futures venue, contract month, observation timestamp, day-count convention, and fees.

## Why a premium can exist

In a frictionless textbook market, the forward price of a non-income-producing asset approximately reflects spot compounded at a financing rate. Crypto violates several assumptions behind that shortcut.

First, demand for leveraged upside can concentrate in derivatives. A buyer may prefer a margined future to obtaining cash, opening a custody relationship, and holding coins. When that demand lifts futures above spot, cash-and-carry arbitrageurs can buy spot and sell the future. Their capacity is finite. They need fiat or stablecoin financing, exchange and custodian access, collateral, risk limits, and operational systems that survive continuously traded markets.

Second, holding spot can provide services that a cash-settled future does not. Spot can be withdrawn, used as collateral, delivered into another contract, lent, staked where protocol rules permit, or transferred across venues. Conversely, spot ownership introduces custody, theft, protocol, staking-slashing, bridge, and legal risks. The net convenience yield is not automatically positive. It depends on which services and hazards matter to the marginal holder.

Third, funding currencies differ. A dollar-financed CME trade, a stablecoin-financed offshore trade, and a coin-margined future do not share one financing curve. Stablecoins embed issuer, redemption, banking, and venue risks described in [[Stablecoin reserve and redemption risk]]. Coin-margined collateral becomes less valuable as the underlying falls, precisely when a short-futures hedge may generate gains that are trapped behind exchange margin rules. Comparing their displayed basis without normalizing collateral is comparing different balance sheets.

Fourth, market segmentation limits arbitrage. Regulated futures, offshore derivatives, U.S. spot ETFs, direct spot venues, and onchain markets have different participants, hours, capital rules, and settlement mechanisms. BIS research attributes unusually large and volatile crypto carry partly to leveraged trend-following demand and partly to scarce arbitrage capital constrained by regulation and margin. That is an economic interpretation supported by the studied sample, not an identity that makes every positive basis a sentiment reading.

Fifth, limits can bind dynamically. An apparently hedged position can suffer variation-margin calls on the short future before gains on spot are accessible, or the reverse. Gross leverage, not only terminal profit, determines whether the trade survives. Basis can widen further after entry, consuming liquidity even when eventual convergence remains plausible.

## What a cash-and-carry trade actually contains

The stylized positive-basis trade is long spot and short an equal notional amount of a dated future. If the references converge and both legs remain accessible, the terminal gross spread is largely fixed. “Largely” carries the entire risk analysis.

The spot leg must be acquired at the executable ask, not a dashboard midpoint. The future is sold at an executable bid. Fees apply twice and may be tier-dependent. Financing accrues on cash or stablecoins. Custody and fund administration cost money. Futures variation margin can require additional liquid collateral. Spot borrowed for a reverse-cash-and-carry trade may be recalled or repriced. Tax and accounting treatment may differ between legs. Capital may remain idle because clearinghouses and exchanges do not recognize cross-venue offsets.

Settlement introduces benchmark risk. CME's standard Bitcoin future is cash-settled against the CME CF Bitcoin Reference Rate, which aggregates trades from constituent spot venues during a defined London calculation window. A spot position marked against a different exchange's last price is not the settlement asset. Even if both prices usually track Bitcoin, venue outages, temporary dislocations, and benchmark composition create residual exposure. CME's BasisWatch instead defines its spot observation using a specified 60-second time-weighted marker near 4 p.m. Eastern and rolls the nearest monthly contract on a stated schedule. Neither is interchangeable with an unsynchronized global spot quote.

Venue risk is also asymmetric. A platform can halt withdrawals while futures continue trading, change margin requirements, invoke loss-allocation rules, or fail. A regulated clearing arrangement reduces some bilateral and custody risks but does not eliminate price, liquidity, or operational risk. Direct spot custody avoids exchange credit exposure only if transfer and key-management procedures work. Rome's framework treats these as separate failure modes rather than compressing them into a haircut guessed after the fact.

A useful net-return identity is:

$$R_{net}\approx b-R_{funding}-R_{fees}-R_{custody}-R_{slippage}-R_{capital}-R_{loss},$$

where each deduction is matched to the holding period and collateral structure. $R_{loss}$ is not an expected certainty; it is a compact reminder that default, settlement, borrow recall, liquidation, and operational events have discontinuous payoffs. The residual is compensation for deploying scarce, failure-tolerant balance sheet—not free money.

## Reading the curve rather than one contract

A term structure contains more information than a nearest-expiry annualized number. Record several liquid expiries and plot $F_{t,T}/S_t-1$ against maturity. A smoothly upward-sloping curve can reflect financing and persistent demand for synthetic exposure. A local hump may reflect a contract-specific position, roll pressure, or event date. Backwardation can reflect urgent hedging demand, scarce short-term dollar liquidity, deleveraging, or a spot benchmark temporarily above derivatives venues.

The nearest contract becomes mechanically noisy close to expiry. A tiny dollar difference divided by a few remaining days generates a huge annualized rate, while spreads and settlement mechanics dominate the realizable economics. A stable tracker should roll according to a declared rule or maintain constant-maturity interpolation. Changing the roll date after seeing the curve creates artificial jumps.

Open interest and volume help but do not identify who is exposed. CFTC Commitments of Traders data classify reportable positions in covered regulated contracts, yet categories are aggregates and positions can hedge activity elsewhere. High open interest beside high basis may be consistent with leveraged directional demand meeting arbitrage supply. It does not reveal the leverage, liquidation price, or off-venue hedge of either side. A complete reading combines basis with executable depth, margin requirements, concentration, collateral type, spot and ETF flows, and [[Crypto liquidation cascades]].

The futures-ETF era offers a concrete structural lesson. BIS analysis of the first U.S. Bitcoin futures ETF found that it rapidly became a large holder of short-dated CME futures. A fund that must maintain exposure rolls contracts rather than taking delivery of Bitcoin. In contango it sells the cheaper expiring contract and buys a more expensive later contract, creating roll drag relative to spot. That outcome is not proof that an ETF caused the entire basis, but it shows how a product mandate can create predictable demand at particular maturities.

Spot ETFs alter the channels again. Authorized participants can create or redeem shares under fund rules, sponsors hold Bitcoin through custodians, and secondary-market ETF trading can shift access and inventory demand. Yet an ETF share is not freely interchangeable with a futures position for every participant. Financing, creation eligibility, settlement times, custody, and capital treatment still separate the markets. [[Crypto ETF flows and market impact]] therefore belongs beside, not inside, a basis series.

## Basis is not a price oracle

A positive basis is often described as bullish because leveraged longs may pay a premium. That is at most one possible mechanism. The same observation includes the willingness and capacity of arbitrageurs to sell futures, the cost of their funding, product-specific demand, and settlement risk. A high premium can coexist with subsequent gains, flat prices, or a crash.

The revised BIS working paper reports that high crypto carry in its Bitcoin and Ether sample predicts future price crashes and co-moves with the cost of crash insurance. The proposed mechanism connects trend-chasing demand and limits to arbitrage. This is evidence about a historical conditional relationship, not a deterministic trading rule. Forecast performance can weaken after publication, differ across venues, and be dominated by regime changes. It would be an error to map a single live annualized basis directly into a price target.

Backwardation is equally ambiguous. It may register defensive hedging and constrained risk capacity, but it can also reflect benchmark timing, a venue-specific balance-sheet need, or temporary settlement demand. Before attaching a narrative, check whether synchronized spot sources agree, whether the move spans maturities and venues, and whether executable size exists near the quoted prices.

The safest inference ladder is deliberately narrow:

1. **Observation:** a named futures contract trades at a measured premium or discount to a named synchronized spot reference.
2. **Accounting implication:** a fully funded, operationally viable paired position has a displayed gross convergence return under specified settlement assumptions.
3. **Market-structure inference:** the spread is consistent with an imbalance between demand for synthetic exposure and capital willing to intermediate it, after financing and asset services.
4. **Behavioral or directional claim:** requires independent evidence about participant positions, flows, constraints, and out-of-sample predictive performance.


## A reproducible basis record

For each observation, preserve:

- UTC timestamp and whether markets were continuously open;
- asset, futures venue, ticker, contract multiplier, expiry, and settlement type;
- settlement benchmark and its observation window;
- spot venue or benchmark, currency, and synchronization method;
- bid, ask, last, depth, and which field entered the calculation;
- raw dollar and percentage basis, days to expiry, annualization convention, and roll rule;
- collateral currency, initial and maintenance margin, and whether cross-margining applies;
- estimated fees, financing, custody, borrow, slippage, and capital deductions;
- open interest and volume with units and source timestamp;
- outages, price limits, stale marks, benchmark changes, or exceptional settlement rules.

The calculation should be reproducible from raw observations. If only indicative or delayed prices are available, label the result indicative. If spot and futures timestamps differ, the residual includes Bitcoin's movement during the lag. If an index changes constituents or methodology, start a new comparable segment rather than silently splicing the series.

Uncertainty should be quantitative where possible. A tracker can compute the basis from bid-to-ask combinations that bracket realizable entry: futures bid minus spot ask for a putative cash-and-carry entry, and futures ask minus spot bid for the reverse direction. The midpoint basis then sits inside an execution interval rather than masquerading as a tradeable quote. Stress the financing rate, margin haircut, and closing slippage separately. Report both dollars and basis points because a seemingly small percentage can exceed the remaining spread after fees, while a large dollar premium may be immaterial relative to a high-priced underlying. When data frequency permits, publish the median, range, and observation count over a fixed window instead of choosing the most dramatic print.

Validation should also include invariants. The expiry must lie after the observation time; days-to-expiry must use the contract's actual settlement calendar; notional exposure must match after contract multipliers; and the chosen spot currency must equal the futures settlement currency or include an explicit foreign-exchange hedge. Automated alerts should flag negative time, stale timestamps, crossed markets, missing quotes, abrupt benchmark changes, and annualized values dominated by fewer than a declared minimum number of days.

For cross-venue comparisons, use equal currency, expiry, timestamp, and contract exposure. Quanto and inverse contracts require payoff normalization. A one-contract short is not necessarily one Bitcoin of linear exposure, and delta can vary with price. Likewise, comparing dated futures carry with perpetual funding requires a forecast of future funding payments; the latest funding print is not a locked return.

## Failure tests before interpretation

A basis claim should fail verification when the spot reference is undefined, timestamps are materially misaligned, settlement terms are unavailable, the contract payoff is misunderstood, or executable liquidity is absent. It should remain provisional when venue prices conflict materially, a benchmark is stale, or a regulatory or operational event impairs normal arbitrage.

Even a verified measurement does not authorize execution. The observable spread says nothing about Andrew's tax position, custody capability, derivatives eligibility, loss tolerance, or operational controls. This note is a measurement framework. It does not recommend borrowing, opening venue accounts, moving assets, or placing trades.

The durable lesson is that basis is a balance-sheet price. It reveals how much the market pays to relocate exposure across time, venues, collateral systems, and legal wrappers. Its most useful role is diagnostic: showing where leverage demand, funding scarcity, product mandates, or settlement segmentation are stressing the connective tissue between spot and derivatives.

## Sources

- [CME Group, What are Bitcoin Futures?](https://www.cmegroup.com/education/courses/introduction-to-bitcoin/what-are-bitcoin-futures) — contract size, cash settlement, reference rate, and expiry conventions; accessed 2026-07-10.
- [CME Group, Cryptocurrency BasisWatch and Implied Rate Tool](https://www.cmegroup.com/markets/cryptocurrencies/cryptocurrency-basis-watch-and-implied-rate-tool.html) — published spot marker, observation, and roll methodology; accessed 2026-07-10.
- [CME Group, What is Contango and Backwardation?](https://www.cmegroup.com/education/courses/introduction-to-base-metals/what-is-contango-and-backwardation) — curve terminology and convergence; accessed 2026-07-10.
- [Schmeling, Schrimpf, and Todorov, Crypto carry, BIS Working Paper 1087, revised October 2025](https://www.bis.org/publ/work1087.htm) — empirical carry magnitude, trend-chasing interpretation, arbitrage limits, and crash-risk results.
- [Todorov, Launch of the first US bitcoin ETF: mechanics, impact, and risks, BIS Quarterly Review](https://www.bis.org/publ/qtrpdf/r_qt2112t.htm) — futures-ETF holdings, roll mechanics, and market-structure implications.
- [CFTC, Understand the Risks of Virtual Currency Trading](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/understand_risks_of_virtual_currency.html) — leverage, derivatives, platform, and volatility risk framing.
- [CFTC, Traders in Financial Futures reports](https://www.cftc.gov/dea/futures/financial_lf.htm) — regulated-futures open interest and trader-category observations; accessed 2026-07-10.
- [CME Group, TAS on Cryptocurrency Futures FAQ](https://www.cmegroup.com/articles/faqs/tas-on-cryptocurrency-faq.html) — distinction between trade-at-settlement and basis-trade-at-index-close conventions; accessed 2026-07-10.

## Open questions

- Which free, timestamp-aligned feeds can preserve executable bids and asks across regulated futures, offshore futures, spot venues, and ETF shares without credentials?
- How much of observed basis variation after U.S. spot-ETF launches is explained by financing and balance-sheet constraints versus directional demand?
- What constant-maturity construction best survives contract launches, holiday gaps, and changing liquidity without hiding roll artifacts?
- Can a public tracker separately estimate stablecoin funding, dollar financing, custody, and margin liquidity so gross carry is never mistaken for net return?
