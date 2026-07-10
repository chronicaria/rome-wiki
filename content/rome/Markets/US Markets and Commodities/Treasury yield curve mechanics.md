---
title: Treasury yield curve mechanics
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, united-states, macro, rates, treasury]
---

The Treasury yield curve is not one observable line but a family of internally related par, spot, and forward curves whose economic interpretation also depends on separating nominal rates, real rates, inflation compensation, and model-implied term premia.

Up: [[US Markets and Commodities]]

Related: [[Reading the Treasury curve as scenarios]] · [[Real rates inflation compensation and term premium]] · [[Treasury auctions and duration supply]] · [[From macro surprises to asset prices]]

## Start with cash flows, not the chart

A Treasury security is a schedule of promised dollar payments. A bill makes one payment at maturity. A nominal note or bond normally pays a fixed coupon every six months and principal at maturity. A Treasury Inflation-Protected Security, or TIPS, adjusts its principal with the non-seasonally adjusted Consumer Price Index for All Urban Consumers, subject to the instrument's indexation lag and deflation floor at maturity. The curve is the set of discount rates needed to value those payments across dates.

Let $D(t,T)$ be the time-$t$ price of one nominal dollar paid at date $T$. For a coupon bond with cash flows $C_i$ at dates $T_i$, no-arbitrage valuation begins with

$$
P_t=\sum_{i=1}^{N} C_iD(t,T_i).
$$

This discount-function view matters because a coupon bond does not have a single economic horizon. Its quoted yield to maturity compresses several differently dated cash flows into one internal rate of return. Two bonds with the same maturity but different coupons need not have the same yield even if every payment is discounted from the same underlying curve. Taxes, liquidity, repo financing, accrued-interest conventions, and security-specific scarcity can widen the difference further.

Market participants therefore infer a smooth discount curve from a cross-section of traded securities. That operation is an estimate, not direct observation. Prices are noisy, available maturities are irregular, and recently issued securities can carry special liquidity or collateral value. The fitting method decides how information between observed maturity points is interpolated. Any yield quoted at an exact constant maturity may consequently be a constructed benchmark rather than the yield of a security that exists with precisely that remaining life.

## Three representations of the same discounting system

### Spot or zero-coupon yields

The spot yield $z(t,T)$ is the single rate that discounts one payment at $T$. Under annual compounding with maturity $n$ years,

$$
D(t,T)=\frac{1}{(1+z_n)^n}.
$$

Under continuous compounding, $D(t,T)=e^{-z_n n}$. The compounding convention changes the reported number, so two series should not be compared until their conventions match. A complete spot curve is equivalent to a complete discount function. It prices arbitrary fixed cash flows by discounting each one separately.

Most coupon Treasuries are not zero-coupon instruments. Analysts obtain spot rates by **bootstrapping**: solve the shortest discount factor first, then use it to strip the already-known early cash flows from the next security, continuing outward. Real data do not offer one clean bond at every coupon date, so production curves combine bootstrapping with interpolation or a parametric fit. Treasury STRIPS provide traded zero-coupon claims, but their pricing can contain segmentation, liquidity, and collateral effects of its own.

### Par yields

A par yield is the coupon rate that would make a hypothetical bond worth exactly its face value when all its payments are discounted using the estimated spot curve. If coupons are paid $m$ times a year and the bond matures at coupon date $T_N$, the par coupon rate $c_N$ satisfies


$$
1=\frac{c_N}{m}\sum_{i=1}^{N}D(t,T_i)+D(t,T_N),
$$

so

$$
c_N=m\frac{1-D(t,T_N)}{\sum_{i=1}^{N}D(t,T_i)}.
$$

The par yield is therefore a weighted summary of many spot rates, not the discount rate for one payment at the stated maturity. The Treasury's familiar Constant Maturity Treasury rates are points read from its estimated **par** curve. Calling the 10-year CMT “the 10-year spot rate” is a category error.

The official Treasury curve is also not simply a table of last trades. Treasury says its inputs are indicative bid-side price quotations collected by the Federal Reserve Bank of New York at or near 3:30 p.m. Eastern for the most recently auctioned nominal securities. The current method converts prices to yields, bootstraps instantaneous forward rates at input maturities, and applies monotone-convex interpolation. Treasury adopted this method on December 6, 2021. The published constant-maturity points are valuable, reproducible end-of-day benchmarks, but they are neither intraday observations nor executable quotes.

### Forward rates

A forward rate is the rate implied today for borrowing or investing over a future interval. In annual-compounding notation, the $k$-year forward rate beginning in $n$ years obeys

$$
(1+z_{n+k})^{n+k}=(1+z_n)^n(1+f_{n,n+k})^k.
$$

Equivalently, the discount factors determine the forward rate through their ratio. Under continuous compounding,

$$
f_{n,n+k}=\frac{z_{n+k}(n+k)-z_n n}{k}.
$$

This is an algebraic break-even rate embedded in today's curve. It is not automatically a forecast of the future spot rate. If the future realized short rate differs, an investor who locked the forward and one who waited earn different returns. Risk aversion, hedging demand, supply, liquidity, and uncertainty allow the forward rate to differ systematically from the market's expected future short rate.

Forward rates are also sensitive to measurement. A distant one-year forward is computed from the difference between two large, nearby cumulative discounting quantities; small errors in fitted spot rates can become conspicuous in the implied forward. Instantaneous forwards are even more dependent on curve smoothness. The correct response to an implausible kink is to inspect inputs and fitting choices, not to invent a macroeconomic story for every wiggle.

## Yield to maturity is not a curve primitive

Yield to maturity is the constant rate that equates one bond's quoted price with the present value of its promised payments. It is convenient for quoting and comparison, but it has three limitations.

First, it discounts every payment at the same rate even when the spot curve is not flat. Second, its realized-return interpretation assumes coupon payments can be reinvested at that same yield. Third, it folds the bond's coupon, maturity, and price into one number, which makes comparisons vulnerable to composition effects. The spot curve is the valuation primitive; a bond's yield to maturity is a summary statistic derived from its price.

Duration and convexity describe price sensitivity around the current curve. A parallel yield change of $\Delta y$ gives the familiar local approximation

$$
\frac{\Delta P}{P}\approx-D_{\text{mod}}\Delta y+\frac{1}{2}\mathcal{C}(\Delta y)^2.
$$

But actual curve moves need not be parallel. A portfolio can be exposed separately to short, intermediate, and long key rates. “Rates rose” is incomplete when one section rose and another fell, and a slope change can affect two bonds with similar aggregate duration differently.

## Nominal, real, and breakeven curves

Nominal Treasuries promise dollars. TIPS promise inflation-adjusted principal and coupons. In a simplified same-maturity comparison,

$$
\text{breakeven inflation}_n\approx y^{N}_n-y^{R}_n,
$$

where $y^{N}_n$ is a nominal yield and $y^{R}_n$ is a real TIPS yield. The breakeven is the average inflation rate that would equalize the nominal and inflation-protected outcomes under the comparison's conventions. It is **inflation compensation**, not a pure survey of expected inflation.

A more honest conceptual decomposition is

$$
BEI_n \approx E_t(\bar\pi_n)+IRP_n+LP_n+TECH_n,
$$

where expected average inflation is joined by an inflation-risk premium, a relative liquidity premium, and instrument or measurement effects. The signs and magnitudes can vary. TIPS have indexation lags, different cash-flow conventions, and historically different liquidity from nominal securities. Nominal and real fitted curves may also use different security sets and estimation choices. The Federal Reserve Board's TIPS curve documentation explicitly warns that its inflation-compensation rates include inflation risk premia and differential liquidity and should not be read as estimates of inflation expectations.

Matching representations is essential. Subtract nominal par from real par, or nominal zero-coupon from real zero-coupon, at the same maturity and compounding convention. Subtracting a nominal CMT par yield from a continuously compounded real zero-coupon yield produces a number, but not a clean economic breakeven. A forward breakeven must likewise be formed from matched nominal and real forward curves.

Real yields are not pure expected real short rates. They too can include term premia and TIPS-specific liquidity effects. Thus “breakevens were unchanged, so only real growth expectations moved” is too strong. Stable inflation compensation narrows the possibilities; it does not uniquely identify the residual.

## Expectations and the term premium

The expectations hypothesis supplies the organizing identity for a zero-coupon nominal yield:

$$
y^{(n)}_t \approx \frac{1}{n}\sum_{j=0}^{n-1}E_t(i_{t+j})+TP^{(n)}_t,
$$

where $i$ is a future short rate and $TP^{(n)}_t$ is the term premium. A long yield can rise because the expected path of short rates rises, because investors demand more compensation for duration risk, or both.

The term premium is not separately traded or directly observed. It is a model-implied residual. The New York Fed's Adrian-Crump-Moench model, for example, uses a statistical term-structure model to estimate fitted yields, expected average short rates, and term premia for Treasury maturities. The New York Fed labels these research estimates rather than official views of the Bank, the Federal Reserve System, or the FOMC.

Different credible models can disagree because they impose different factor dynamics, samples, survey information, and restrictions on long-run expectations. Highly persistent interest rates make the division between a slow-moving expected-short-rate component and a slow-moving term premium especially difficult. Effective-lower-bound episodes can further stress models whose rate dynamics allow implausibly negative future short rates. A term-premium series should therefore be cited by model, vintage, frequency, and as-of date—not reported as though it were an observed market price.

The premium can be positive or negative. Positive compensation is intuitive when duration loses value in bad states or uncertainty and net supply make long bonds costly to hold. A negative estimate can arise when long Treasuries provide valuable insurance against deflation or recession, or when safe-asset and collateral demand is strong. Negative does not mean interest-rate risk disappeared; it means the model infers that investors accept less expected return for the asset's hedge or scarcity properties.

## Shape language is descriptive, not causal

A curve is upward sloping when longer yields exceed shorter yields, inverted when shorter yields exceed longer yields, and humped when intermediate yields exceed both ends. Changes are often described as steepening or flattening. A **bear steepener** conventionally means yields rise with long yields rising more; a **bull steepener** means yields fall with short yields falling more. Bear and bull refer to bond prices, which move inversely to yields.

These labels summarize geometry. They do not identify the shock. An inversion may be consistent with expectations that policy rates will later fall enough to offset the term premium. It may precede recession without being a deterministic countdown. A long-end selloff may reflect higher expected future short rates, inflation compensation, real term premium, nominal duration supply, hedging flows, or several at once. [[Reading the Treasury curve as scenarios]] develops the interpretation problem; the mechanical rule is simpler: observe the curve, decompose it with matched instruments, and label causal claims as hypotheses until timing and independent evidence discriminate among them.

Common slope measures answer different questions. The 10-year minus 2-year spread compares a long benchmark with a maturity still sensitive to the expected policy path. The 10-year minus 3-month spread compares the long end with a rate nearer current policy. A five-year rate five years forward isolates a distant fitted segment, but it amplifies curve-estimation error and still includes risk compensation. No spread is universally “the yield curve.”

## A disciplined reading workflow

1. **Name the object.** Record nominal or real; par, spot, or forward; maturity; compounding convention; source; and timestamp. For a traded security, record CUSIP, coupon, and remaining maturity. For futures or swaps, do not silently relabel the instrument as a cash Treasury yield.
2. **Check how it was built.** Distinguish transaction prices from indicative quotes and fitted constant-maturity values. Note interpolation, input universe, revision policy, and whether the series is official statistics or a staff research product.
3. **Describe level, slope, and curvature.** Use several maturities rather than one headline spread. Separate a parallel shift from steepening, flattening, or a butterfly-shaped move.
4. **Match decompositions.** Compare like with like when computing breakevens. Use a named term-premium model as evidence, not truth. Inspect whether alternative models agree on the direction of change.
5. **Align event time.** An end-of-day CMT cannot prove that yields moved after a morning release. Event attribution requires timestamped observations bracketing the release and attention to simultaneous news, auctions, flows, and liquidity.
6. **State competing hypotheses.** Expected policy, inflation compensation, real-rate expectations, term premium, supply, liquidity, and technical positioning can overlap. Say what later evidence would weaken each story.
7. **Preserve the vintage.** Model estimates and datasets can be revised. A research note should retain the data and model vintage available when the inference was made to avoid hindsight leakage.

## Why it matters

The curve connects monetary policy, government financing, asset valuation, and risk management. Discount factors value fixed cash flows; forward curves encode today's break-even intertemporal prices; nominal-real comparisons reveal inflation compensation; and term-structure models offer an uncertain division between expected policy and risk compensation. Mortgage rates, corporate borrowing costs, equity discount rates, derivatives, and Treasury debt-management choices all respond to some portion of this system rather than to a generic “10-year rate.”

For research, the representation determines the conclusion. Par yields are excellent stable public benchmarks; spot rates are the natural inputs for discounting; forwards isolate future intervals; breakevens compare nominal and real compensation; term-premium models ask why long yields differ from expected short rates. Confusing these objects can produce false inflation signals, mistaken policy forecasts, and backtests that combine incompatible series.

The curve is best understood as a pricing system with measurement and identification limits. Its movements constrain plausible stories, but the curve does not narrate its own cause.

## Sources

- [U.S. Treasury — Treasury Yield Curve Methodology](https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics/treasury-yield-curve-methodology) — official inputs, bootstrapping, monotone-convex interpolation, methodology date, and publication timing; accessed July 10, 2026.
- [U.S. Treasury — Daily Treasury Par Yield Curve Rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve) — official CMT definitions and daily nominal par-curve data; accessed July 10, 2026.
- [TreasuryDirect — Treasury Inflation-Protected Securities](https://treasurydirect.gov/marketable-securities/tips/) — official description of inflation-adjusted principal, semiannual interest, and the maturity deflation floor; accessed July 10, 2026.
- [Federal Reserve Board — The U.S. Treasury Yield Curve: 1961 to the Present](https://www.federalreserve.gov/pubs/feds/2006/200628/index.html) — Gürkaynak, Sack, and Wright on discount functions and zero-coupon, par, and forward representations.
- [Federal Reserve Board — TIPS Yield Curve and Inflation Compensation](https://www.federalreserve.gov/data/yield-curve-tables/feds200805_1.html) — nominal/real curve series, compounding conventions, and warnings about inflation-risk and liquidity premia; accessed July 10, 2026.
- [Federal Reserve Bank of New York — Treasury Term Premia](https://www.newyorkfed.org/research/data_indicators/term-premia-tabs) — ACM estimates, downloadable definitions, maturity coverage, and non-official-status disclaimer; accessed July 10, 2026.
- [Federal Reserve Board — Using Treasury STRIPS to Measure the Yield Curve](https://www.federalreserve.gov/pubs/feds/2000/200042/200042abs.html) — evidence on zero-coupon curve measurement from coupon STRIPS.

## Open questions

- How large are the practical differences among Treasury's monotone-convex par curve, the Federal Reserve Board's Svensson zero-coupon curve, and traded STRIPS during stressed-market episodes?
- Which term-premium models provide stable real-time decompositions rather than attractive revised histories?
- How should TIPS liquidity, indexation lag, and the deflation floor be quantified when comparing short-maturity breakevens?
- Which free, timestamped data source is sufficiently reliable for intraday Treasury event studies without confusing indicative, executable, and traded prices?
