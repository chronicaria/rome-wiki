---
title: Credit spreads and default compensation
created: 2026-07-09
source: llm
status: seed
tags: [markets, united-states, credit, fixed-income, quantitative-research]
as_of: 2026-07-09
desk: US markets and commodities
review_after: 2026-10-09
---
A corporate bond spread is compensation for a bundle of expected loss, systematic default risk, liquidity, optionality, taxes, and intermediary constraints—not a direct market forecast of the default rate.

Up: [[Markets]] · Related: [[Reading the Treasury curve as scenarios]] · [[US market regime tracker]] · [[Volatility risk premium]]

## The question hidden inside one number

Corporate credit is often summarized by saying that a bond “trades 150 basis points over Treasuries.” That sounds like one clean price of default risk. It is not. A spread is first an arithmetic comparison between a risky instrument and a reference curve; interpreting it requires choices about maturity, cash-flow timing, embedded options, taxes, liquidity, and the benchmark itself. Only after those choices can the researcher ask how much compensation reflects expected credit losses and how much is a premium for bearing risks that arrive in bad states.

This distinction matters because the same observed spread can support different economic stories. A spread can widen because the issuer’s probability of default rose, expected recovery fell, investors demanded more compensation for systematic risk, dealers became less willing to warehouse bonds, or the Treasury benchmark acquired a scarcity premium. Several mechanisms can operate together. Calling every widening “higher expected defaults” confuses a price with one latent component of that price.

For a simple zero-coupon bond with promised payoff of one dollar, a schematic one-period decomposition begins with expected loss:

$$
EL \approx PD \times LGD,
$$

where $PD$ is probability of default and $LGD=1-RR$ is loss given default after the recovery rate $RR$. But an investor who expects to lose one percent on average will generally demand more than one percent of extra yield if losses cluster in recessions, when marginal wealth is especially valuable. The additional compensation is a risk premium. Real bonds add coupon timing, uncertain recovery timing, liquidity, taxes, and optionality, so the observed yield spread is not algebraically equal to $EL$ plus one stable residual.

## Start by defining the spread

A nominal yield spread subtracts the yield on a reference security from the corporate yield. A G-spread usually references an interpolated government curve. An I-spread references a swap curve. A zero-volatility spread, or Z-spread, is the constant spread added to every point of a benchmark spot curve that makes discounted promised cash flows equal the bond’s price. Each answers a slightly different question.

For callable bonds, promised cash flows depend on interest-rate paths and the issuer’s exercise decision. An option-adjusted spread, or OAS, is the parallel spread shift to a benchmark spot curve—or, for an option-bearing bond, to the short-rate tree—that makes the model value of the bond’s path-dependent cash flows equal its observed price. It accounts for the embedded option within the valuation model; it is not obtained by simply subtracting a quoted option value from a conventional yield spread. In practice, OAS is model-dependent: assumptions about interest-rate volatility, the reference curve, and exercise behavior affect the answer. Comparing a raw yield spread on one callable bond with OAS on another can manufacture a difference that is mostly definitional.

Maturity matching also matters. Subtracting a 10-year Treasury yield from the yield of a corporate bond with seven-year duration does not isolate credit. Coupon differences, curve slope, duration, and convexity contaminate the comparison. Index providers therefore estimate spreads using security-level cash flows and government spot curves. The resulting series are extremely useful regime indicators, but they are constructed measures rather than executable spreads on a representative bond.

The benchmark is not neutral. Treasuries have exceptional liquidity, regulatory treatment, and collateral value. A corporate-minus-Treasury spread can therefore include a Treasury convenience or scarcity premium. Swap benchmarks remove some Treasury-specific effects but introduce bank-credit, collateral, and derivatives-market features. A change in the reference can change the measured “credit” spread even when the corporate bond price is unchanged.

## Expected loss is only the first layer

Expected default loss depends on an entire transition process, not merely today’s rating. A stylized approximation for a horizon $T$ is

$$
EL_{0,T}=\sum_{t=1}^{T} \Pr(\tau=t)\,LGD_t\,DF_t,
$$

where $\tau$ is the default time and $DF_t$ discounts the expected loss. Estimation may use firm leverage and asset volatility, historical rating transitions, accounting variables, market equity, credit-default-swap prices, or a reduced-form hazard rate. Every approach imports assumptions. Historical default frequencies may be poorly matched to today’s borrowers; market-implied hazard rates already contain risk premia; recoveries vary with seniority, collateral, industry, and the aggregate default cycle.

Credit spreads should exceed actuarially expected losses when investors dislike the states in which defaults occur. Corporate defaults are not independent insurance claims. They cluster when employment, profits, and asset values are weak. A bond that loses value precisely when investor marginal utility is high must offer compensation for covariance with those bad states. This is why a “default risk premium” is conceptually distinct from expected default loss.

The distinction is visible in structural asset-pricing logic. If recovery is low in states where the stochastic discount factor is high, the price of the promised bond is reduced by more than its unconditional expected cash-flow loss. That extra discount is not an error. It is the equilibrium price of systematic default and recovery risk. Yet it is not directly observable, because neither physical default probabilities nor the relevant state prices are known without a model.

Ratings provide an ordinal credit classification, not a sufficient statistic for expected loss or spread. Two BBB bonds can differ in leverage trajectory, covenant protection, cyclicality, duration, seniority, and trading liquidity. Ratings also move discretely and often lag market information. A rating-controlled spread residual may therefore still contain omitted credit fundamentals rather than a pure “sentiment” premium.

## Liquidity and the nondefault component

Corporate bonds trade over the counter, issue by issue. Unlike a highly active equity, a particular bond may not trade for hours or days. FINRA’s TRACE system disseminates executed transactions, not a continuous quote book. Reported prices can therefore be stale relative to a fast-moving Treasury curve. In real-time public dissemination, FINRA reports investment-grade corporate trades above $5 million as “5MM+” and non-investment-grade trades above $1 million as “1MM+,” rather than showing their exact size. Those features complicate both price measurement and liquidity estimation.

Liquidity compensation has several layers. An investor may require a concession for expected transaction costs. More importantly, the bond may become hard to sell exactly when funding is scarce and risk limits bind. This liquidity risk is systematic: even an investor who rarely trades may demand compensation for the possibility that future buyers disappear in stress. Dealer balance-sheet capacity, inventory risk, capital rules, mutual-fund redemptions, and the availability of substitutes all influence that premium.

Federal Reserve research using intraday transactions and credit-default-swap information found a statistically significant nondefault component for investment-grade bonds and a positive relationship between that component and illiquidity. The exact magnitude depended on whether swaps or Treasuries served as the reference. That benchmark sensitivity is itself a lesson: a decomposition is conditional on the model used to define “default” and “risk free.”

Age and issue size often proxy for liquidity because recently issued, larger benchmark bonds tend to trade more actively. But these are imperfect instruments. Large issuers can differ fundamentally from small issuers, and an old bond can be desirable because of scarcity or index eligibility. Bid-ask spreads, turnover, zero-trading days, price impact, and dispersion among dealer marks each capture different dimensions of liquidity. No one measure should be relabeled “the liquidity premium” without a design linking the measure to expected returns or spread differences.

## The excess bond premium

Gilchrist and Zakrajšek developed an influential decomposition that models security-level corporate bond spreads using expected-default determinants and treats the residual aggregate component as an excess bond premium, or EBP. Federal Reserve publications describe the EBP as the part of corporate spreads not directly attributable to expected default losses and use it as an indicator of investor risk appetite or the price of bearing corporate credit risk.

The economic interpretation is powerful. A rise in the EBP can indicate that intermediaries and investors are less willing to absorb credit risk even after observable issuer fundamentals are considered. Such tightening in financial conditions can reduce borrowing and investment, helping explain why the EBP has predictive content for economic activity.

But “excess” does not mean unnecessary or irrational. It is a regression residual. It can contain compensation for systematic risk, liquidity, dealer constraints, model misspecification, and omitted or mismeasured default fundamentals. Its historical mean is normalized by construction in some published implementations. The newest values may also revise when bond samples or firm-data matches change. The EBP is therefore a disciplined latent indicator, not a directly traded spread and not proof that markets are fearful for nonfundamental reasons.

## Reading a spread move as scenarios

A useful analysis begins with the observable: the exact index or bond, spread definition, reference curve, duration, rating and sector mix, timestamp, and price source. Then build competing explanations.

In a default-deterioration scenario, spreads widen alongside weaker issuer cash flows, rising leverage, downgrades, higher expected-default measures, and perhaps higher CDS spreads. Confirmation should be strongest among firms whose fundamentals deteriorated. If the move is equally large in high-quality, cash-rich issuers with no change in expected loss, default alone is less persuasive.

In a risk-premium scenario, spreads widen broadly while near-term default forecasts move less. Equity volatility, the [[Volatility risk premium]], bank lending standards, and measures such as the EBP may rise. The interpretation is that compensation for bad-state covariance or investor risk-bearing capacity changed. This can still be economically fundamental; risk-bearing capacity is part of asset pricing.

In a liquidity scenario, transaction costs and price dispersion rise, trading becomes intermittent, dealers reduce inventory, and spread changes are strongest in smaller or less frequently traded issues. ETF discounts, mutual-fund outflows, or funding stress may accompany the move. The challenge is simultaneity: deteriorating default risk itself can reduce liquidity, while illiquidity can make observed spreads exaggerate a change in expected loss.

In a benchmark or composition scenario, a Treasury rally, scarcity effect, index rebalancing, fallen-angel migration, or shift in duration and rating weights changes the aggregate spread without the same security-level repricing. Comparing fixed cohorts, duration-matched buckets, and alternative reference curves can expose this problem.

## A quantitative workflow

First, preserve point-in-time membership. A present-day index history can exclude firms that defaulted, were acquired, or left eligibility, creating survivorship bias. Backtests need the constituents and ratings known at each date, along with callable status, cash flows, and transaction timestamps.

Second, separate spread changes from total returns. Corporate bond returns combine Treasury-duration exposure, spread-duration exposure, coupon carry, defaults, and trading costs. A rough local approximation is

$$
\Delta P/P \approx -D_{rate}\Delta y_{Treasury}-D_{spread}\Delta s,
$$

with convexity and cash-flow effects omitted. A narrow spread can coexist with a negative total return when Treasury yields rise sharply. Conversely, a spread widening can be offset by a Treasury rally.

Third, model expected loss explicitly and modestly. Use several specifications rather than treating one hazard model as truth. Test whether results survive alternative recovery assumptions, benchmark curves, ratings, maturities, sectors, and liquidity controls. A decomposition that changes sign when recovery moves from 40 to 30 percent is not robust enough for a strong narrative.

Fourth, address stale and asynchronous prices. TRACE records trades; Treasury and equity markets may update continuously while some bonds do not. Event studies should restrict to bonds with valid trades around the event or use carefully constructed evaluated prices while disclosing their model dependence. End-of-day index OAS cannot establish whether credit led or followed an intraday macro surprise.

Fifth, include realistic implementation frictions. Quoted or index spread changes are not automatically attainable returns. Bid-ask costs, limited depth, dealer markups, financing, taxes, and portfolio turnover can consume apparent predictability. Public TRACE data improve transparency but have dissemination caps and licensing distinctions that constrain reproducible institutional-scale research.

## Why it matters

Credit spreads connect the risk-free curve to corporate financing conditions. They affect refinancing costs, issuance, investment, defaults, and the transmission of monetary policy. They also provide cross-asset confirmation for equity and Treasury narratives. Falling Treasury yields with sharply wider credit spreads often describe a different state from falling yields with stable spreads.

The essential habit is to read spreads as mixtures. Expected loss, systematic credit risk, liquidity, optionality, taxes, benchmark specialness, and intermediary capacity are not nuisances to be swept into one label. They are the mechanisms that make credit informative. A good market note states what was measured, which component is hypothesized to have moved, what alternatives remain, and what data would separate them.

## Limitations

No public series provides a uniquely correct real-time decomposition. Security-level research often depends on licensed index, TRACE, accounting, and CDS data. Default probabilities and recoveries are latent before the event, and market-implied measures embed risk premia. Results from pre- and post-crisis samples may not transport across changes in dealer regulation, electronic trading, ETF ownership, covenant quality, and the composition of investment-grade and high-yield markets.

## Sources

- FINRA, [Trade Reporting and Compliance Engine (TRACE)](https://www.finra.org/filing-reporting/trace) and [Trade Activity and Trade History Data](https://www.finra.org/finra-data/fixed-income/about-trade-activity) — official reporting scope, execution-data definition, dissemination fields, and public volume caps; accessed July 9, 2026.
- Intercontinental Exchange, [Bond Index Methodologies](https://www.theice.com/publicdocs/data/Bond_Index_Methodologies.pdf) — index eligibility, government spot curves, OAS, duration, and valuation conventions.
- Simon Gilchrist and Egon Zakrajšek, [Credit Spreads and Business Cycle Fluctuations](https://www.aeaweb.org/articles?id=10.1257/aer.102.4.1692), *American Economic Review* 102(4), 2012 — security-level spread decomposition and excess bond premium.
- Giovanni Favara, Simon Gilchrist, Kurt Lewis, and Egon Zakrajšek, [Updating the Recession Risk and the Excess Bond Premium](https://www.federalreserve.gov/econres/notes/feds-notes/updating-the-recession-risk-and-the-excess-bond-premium-20161006.html), Federal Reserve Board, 2016, updated June 4, 2026 — EBP interpretation, update process, and revision caveats.
- Song Han and Hao Zhou, [Effects of Liquidity on the Nondefault Component of Corporate Yield Spreads](https://www.federalreserve.gov/econres/feds/effects-of-liquidity-on-the-nondefault-component-of-corporate-yield-spreads-evidence-from-intraday-transactions-data.htm), FEDS 2008-40 — intraday liquidity evidence and benchmark sensitivity.
- Dan Covitz and Chris Downing, [Insolvency or Liquidity Squeeze? Explaining Very Short-Term Corporate Yield Spreads](https://www.federalreserve.gov/econres/feds/insolvency-or-liquidity-squeeze-explaining-very-short-term-corporate-yield-spreads.htm), FEDS 2002-45 — distinction between issuer liquidity and insolvency risk across maturities.

## Open questions

- How stable is the EBP decomposition across newer electronic-trading, ETF, and post-pandemic samples?
- Which freely reproducible bond-price panel can support point-in-time event studies without silently relying on evaluated prices?
- How should recovery uncertainty be modeled when sector-level collateral and covenant quality change over a cycle?
- When do Treasury convenience effects dominate the difference between Treasury- and swap-referenced credit spreads?
