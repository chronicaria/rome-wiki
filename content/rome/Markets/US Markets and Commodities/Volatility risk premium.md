---
title: Volatility risk premium
created: 2026-07-09
source: llm
status: seed
tags: [markets, united-states, volatility, derivatives, quantitative-research]
as_of: 2026-07-09
desk: US markets and commodities
review_after: 2026-10-09
---
The volatility risk premium is the compensation embedded in option prices for bearing variance and crash risk; it is not simply the observation that VIX usually exceeds subsequently realized volatility.

Up: [[Markets]] · Related: [[Credit spreads and default compensation]] · [[US market regime tracker]] · [[Reading the Treasury curve as scenarios]]

## Three objects that are easy to confuse

Volatility discussions often compare an option-implied number with a realized number and call the difference a “premium.” That shortcut hides three distinct objects: expected future variance under the physical probability measure, the option-implied expectation of variance under the risk-neutral measure, and the variance that actually occurs. Only the first two define an ex ante risk premium. The difference between implied and subsequently realized variance is an ex post payoff that also contains forecast error.

Let $RV_{t,t+T}$ denote future realized variance over horizon $T$. A common theoretical definition is

$$
VRP_t = E_t^Q[RV_{t,t+T}] - E_t^P[RV_{t,t+T}],
$$

where $Q$ is the risk-neutral pricing measure inferred from options and $P$ is the physical measure governing realized outcomes. With this sign convention, the equity-index variance risk premium is usually positive: option-implied variance exceeds the best physical expectation because protection sellers demand compensation for losses in high-volatility states.

Some papers reverse the subtraction and report the expected return to a long variance position. Others compare volatility rather than variance. A researcher must state the convention. Because squaring is nonlinear, “implied volatility minus realized volatility” is not equivalent to “implied variance minus realized variance.” The natural underlying payoff for model-free replication is variance, not volatility.

An empirical proxy often replaces the unobservable $E_t^P[RV]$ with a forecast or later realization:

$$
\widehat{VRP}_{t}^{ex\ post}=IV_t^2-RV_{t,t+T}.
$$

Here $IV_t$ must be expressed as an annualized decimal volatility and $RV$ in the matching annualized variance units. This quantity is observable after $T$, but it mixes the ex ante premium with an innovation in realized variance. If an unexpected crash occurs, realized variance may exceed implied variance even though protection was expensive ex ante. One negative observation does not show that the long-run premium vanished.

## What VIX does and does not measure

Cboe’s VIX Index is designed as a market estimate of expected 30-day S&P 500 volatility derived from a strip of out-of-the-money SPX options, with both the put and call at the strike immediately below the inferred forward included in the calculation. The calculation selects near- and next-term expirations around a target horizon, uses quoted option midpoints across strikes, extracts a forward level from put-call parity, weights option contributions by strike spacing and approximately inverse strike squared, and interpolates total variance to a constant 30-day maturity. Cboe annualizes that 30-day variance on a 365-day convention and reports 100 times its square root. Thus VIX at 20 means 0.20 annualized volatility and 0.04 annualized variance in decimal units; squaring the displayed index gives 400 in index-point-squared units, not a variance of 400.

VIX is not the Black–Scholes implied volatility of one at-the-money option. It uses a cross-section of calls and puts and is closely related to the fair strike of a variance-swap-style payoff under replication assumptions. Deep out-of-the-money puts receive meaningful weight because they insure severe downside states. The index therefore contains information about the whole relevant option-price distribution, not just a central forecast.

Nor is VIX a literal consensus forecast that the S&P 500 will move by a particular percentage. Risk-neutral expectations tilt probabilities by state prices. States in which investors value a dollar more receive more weight in option prices. If equity crashes coincide with high marginal utility and scarce intermediary capital, downside options can be expensive even when the physical probability of the crash is modest. That wedge is the point of a risk premium.

The published index also depends on executable-market approximations and rules. Cboe uses option quotes, zero-bid filters, settlement conventions, interest rates, and a specified expiry window. Stale or wide quotes can affect tails. The opening settlement used by some derivatives is not the same as an ordinary VIX screen value. VIX futures and options price future VIX-related exposures; they do not mechanically equal today’s spot VIX carried forward.

## Realized variance is also a construction

For daily log returns $r_{t+i}$, a simple annualized realized variance estimator is

$$
RV_{t,t+T}=\frac{A}{N}\sum_{i=1}^{N}(r_{t+i}-\bar r)^2,
$$

where $A$ is an annualization factor. Researchers often omit the sample mean over short horizons. High-frequency realized variance instead sums squared intraday returns and, under ideal continuous-time conditions, estimates quadratic variation more efficiently.

Neither implementation is automatic. Daily close-to-close returns miss intraday variation and treat overnight jumps differently depending on the series construction. High-frequency prices contain bid-ask bounce, discreteness, asynchronous trading, and bad ticks. Sampling too frequently raises microstructure noise; sampling too slowly discards information. Jumps are part of quadratic variation but may deserve separate analysis because crash insurance is central to the premium.

The horizon must match. Comparing a 30-calendar-day VIX measure with 21 trading days of realized variance requires a consistent annualization and date convention. Holidays, nontrading overnight periods, and expiry cutoffs matter. A common error squares VIX, subtracts a monthly realized volatility number that has already been annualized differently, and interprets the unit mismatch as economics.

Physical expected variance remains latent even after realized variance is carefully measured. A forecast can use historical averages, GARCH, heterogeneous autoregressive models, option-free predictors, or high-frequency realized measures. Each choice changes the estimated premium. Using the future realization avoids a forecast model but produces a noisy ex post series. Using a strong forecasting model targets the ex ante object but introduces model risk.

## Why the premium exists

The simplest economic story is insurance. Equity volatility tends to jump when the market falls, wealth is impaired, funding constraints tighten, and future consumption becomes more uncertain. Investors value payoffs in those states. Index puts and long-variance exposures provide them, so their prices include an insurance premium. The other side—often intermediaries, market makers, hedge funds, or systematic option sellers—must be compensated for absorbing concentrated bad-state exposure.

This is not free money from a biased forecast. A short variance strategy can earn many small gains and suffer rare, extremely large losses. Its negative convexity and sensitivity to jumps are precisely what make the average payoff positive. Evaluating only its Sharpe ratio in calm samples can conceal tail risk, margin calls, path dependence, and the possibility that funding disappears when losses arrive.

Representative-agent models try to connect the premium to preferences and consumption risk. Evidence summarized by Bekaert, Engstrom, and Ermolov finds that a positive equity variance risk premium is associated with shifts in bad consumption-growth uncertainty. Other work emphasizes rare disasters, jumps, time-varying risk aversion, ambiguity, intermediary constraints, or demand pressure in options. These explanations are not mutually exclusive, and their empirical separation is difficult because all can raise downside-option prices during stress.

Supply and segmentation matter too. Institutional demand for protection, structured-product issuance, pension overlays, and dealer balance sheets can move option prices without a proportionate change in the physical variance forecast. But labeling the residual “flow” does not make it non-economic. A constrained dealer’s marginal balance sheet is part of the price-setting mechanism. The correct question is whether the change reflects perceived states, the price of those states, or market capacity to warehouse exposure.

## Variance, volatility, and jump premia

A variance swap pays realized variance minus a fixed strike. Its payoff is linear in variance, which makes static replication with a strip of options possible under idealized assumptions. A volatility swap pays realized volatility minus a strike. Because volatility is the square root of variance, its fair value depends on volatility-of-volatility and convexity; it cannot be treated as the square root of a variance-swap strike without adjustment.

The variance premium can be decomposed conceptually into compensation for continuous diffusive variance and jump or tail risk. Deep out-of-the-money puts are especially sensitive to negative jumps. Empirical option-pricing research finds that jump and volatility risks both contribute to the wedge between option-implied and physical distributions. The decomposition is model-dependent because jumps must be identified from finite-frequency returns or inferred from option surfaces.

Skew contains related information. If downside puts are much more expensive than symmetric upside calls after accounting for forward prices, the risk-neutral distribution places especially costly weight on negative states. A single VIX level compresses this shape into one number. Two days can have the same VIX but different skew, term structure, and concentration of event risk. A complete volatility state therefore includes the surface, not only the headline index.

## Term structure and event risk

Implied variance varies by expiry. A scheduled election, earnings report, policy meeting, or court decision may affect options whose lives span the event more than neighboring expirations. Because variance accumulates over time, forward variance can be extracted from total variance at adjacent maturities. If $w(T)=\sigma^2(T)T$, then a simplified forward variance between $T_1$ and $T_2$ is

$$
fvar(T_1,T_2)=\frac{w(T_2)-w(T_1)}{T_2-T_1}.
$$

This arithmetic isolates where the surface prices variance in calendar time, but it still reflects a risk-neutral expectation and market conventions. A hump around an event is not a physical probability estimate of a large move. It is a price of exposure across states, contaminated by liquidity, discrete expiries, and supply-demand effects.

The VIX futures curve is often called contango or backwardation, but it should not be read like a storable commodity curve. There is no cash-and-carry arbitrage that stores spot VIX. A VIX future settles to a future special opening quotation, so its price reflects the risk-neutral expectation of that future settlement under relevant risk premia. Comparing it mechanically with current spot VIX can produce false “roll yield” stories.

## A disciplined measurement workflow

First, define the underlying, horizon, and payoff. S&P 500 index variance is not single-stock volatility. A 30-day constant-maturity measure is not the front listed expiry. Decide whether the object is variance, volatility, a VIX future, an option on VIX, or a delta-hedged option return.

Second, align clocks and annualization. Record option quote timestamps, expiry settlement times, the risk-free curve, dividend or forward inputs, trading versus calendar days, and the realized-return window. For event studies, ensure the supposedly pre-event surface was actually observable before the event and that the realized window begins afterward.

Third, estimate the physical expectation without pretending it is known. Compare multiple forecasts: a historical benchmark, a parsimonious volatility model, and a realized-measure model. Evaluate them out of sample. If the premium exists only relative to one overfit forecast, it is not robust.

Fourth, separate average compensation from implementable returns. Index-level implied variance is not itself a tradable profit. A replicated option strip requires many strikes, rebalancing, financing, collateral, and transaction costs. Variance swaps embed dealer quotes and counterparty terms. VIX futures have basis and settlement risk. Options expose the holder to bid-ask spreads, discrete hedging, and model errors in Greeks.

Fifth, examine the distribution, not only the mean. Report worst drawdowns, skewness, crash performance, margin needs, and sensitivity to the start date. A positive average short-variance payoff can coexist with unacceptable tail exposure. Backtests must include delisted options where relevant, historical contract specifications, point-in-time quotes, and realistic execution assumptions.

Sixth, state rival explanations. A rise in implied variance could reflect a higher physical volatility forecast, a larger price of variance risk, event-specific demand, dealer constraints, or poor option liquidity. Later realized volatility distinguishes some stories but not all. Changes in skew, forward variance, volume, open interest, credit spreads, and funding conditions can provide additional evidence without uniquely identifying causality.

## Connections to credit and the macro state

The volatility premium is related to, but not identical with, corporate credit compensation. Both tend to rise when the price of bad-state risk increases and intermediary capacity falls. Federal Reserve research has used market variance risk-premium measures as explanatory variables for credit-default-swap spreads, while excess bond premium research interprets part of corporate spreads as changing risk appetite. Co-movement can therefore provide cross-asset confirmation.

Yet the instruments cover different claims. Equity-index options respond directly to uncertainty about aggregate equity returns and downside tails. Corporate bonds embed issuer default, recovery, liquidity, duration, and benchmark effects. A volatility spike with contained credit spreads can reflect a short-lived equity event or option-market demand. A joint rise in downside skew, expected variance, credit spreads, and funding stress supports a broader risk-bearing-capacity scenario, though it still does not prove one common cause.

## Why it matters

The volatility risk premium is central to option pricing, portfolio insurance, risk management, and quantitative-strategy evaluation. It explains why implied volatility can be an upward-biased predictor of realized volatility without being an irrational forecast. The “bias” is partly the compensation required to take the other side of valuable insurance.

For market reading, the premium forces a separation between expected risk and the price of risk. A higher VIX can reflect either or both. That is the same discipline used in [[Reading the Treasury curve as scenarios]] and [[Credit spreads and default compensation]]: observed prices combine latent expectations with compensation for bearing uncertainty. Analysis improves when those components are posed as testable scenarios rather than collapsed into a slogan.

## Limitations

Risk-neutral variance can be approximated from option prices under assumptions about market quality, replication, rates, dividends, and tails. Physical expected variance cannot be observed. Published VIX values are transparent benchmark calculations but not complete option surfaces. Scholarly estimates vary by sample, estimator, jump treatment, and sign convention. Historical average premia may not survive structural changes in option supply, electronic liquidity, institutional hedging, or crisis policy.

## Sources

- Cboe Global Indices, [Cboe Volatility Index Mathematics Methodology](https://cdn.cboe.com/resources/indices/Cboe_Volatility_Index_Mathematics_Methodology.pdf) — official construction, option selection, weighting, interpolation, and variance-swap replication relationship; accessed July 9, 2026.
- Torben Andersen, Tim Bollerslev, Francis Diebold, and Paul Labys, [Modeling and Forecasting Realized Volatility](https://www.nber.org/papers/w8160), NBER Working Paper 8160; published in *Econometrica* 71(2), 2003 — realized-volatility measurement from high-frequency returns and forecasting framework.
- Tim Bollerslev and Hao Zhou, [Expected Stock Returns and Variance Risk Premia](https://conference.nber.org/confer/2007/si2007/AP/zhou.pdf), NBER Summer Institute paper, 2007 — model-free implied variance, realized variance, and return-predictability evidence.
- Geert Bekaert, Eric Engstrom, and Andrey Ermolov, [The Variance Risk Premium in Equilibrium Models](https://www.nber.org/papers/w27108), NBER Working Paper 27108; published in *Review of Finance* 27(6), 2023 — equilibrium interpretation and consumption-risk evidence.
- Pedro Santa-Clara and Shu Yan, [Jump and Volatility Risk and Risk Premia](https://www.nber.org/papers/w10912), NBER Working Paper 10912 — separation of jump and diffusive volatility risks in S&P 500 options.
- Hao Zhou, [Credit Default Swap Spreads and Variance Risk Premia](https://www.federalreserve.gov/pubs/feds/2011/201102/), FEDS 2011-02 — evidence connecting systemic variance-risk compensation with CDS spreads.

## Open questions

- Which public option dataset can reproduce a model-free S&P 500 variance series without survivorship and quote-cleaning bias?
- How much of the current variance premium is concentrated in negative jumps rather than continuous volatility?
- Which physical-variance forecast is robust enough to track an ex ante premium in real time without frequent model revisions?
- When does option-market demand move the surface independently of credit spreads and broader funding conditions?
