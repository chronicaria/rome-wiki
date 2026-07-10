---
title: Transaction-cost models
created: 2026-07-10
source: llm
status: seed
tags: [investing, markets, quantitative-research, transaction-costs, execution, market-microstructure, backtesting]
---

A transaction-cost model converts a paper portfolio into an implementable one by charging for immediacy, size, time, funding, and incomplete execution using only information available when each trade would have been placed.

Up: [[US Markets and Commodities]]

Related: [[Funding liquidity versus market liquidity]] · [[Point-in-time data and look-ahead bias]] · [[Futures continuous contracts and roll bias]] · [[Event studies for financial markets]]

## Why it matters

Many quantitative signals look strongest where implementation is hardest: small or volatile securities, fast-decaying information, crowded rebalances, hard-to-borrow shorts, and portfolios with high turnover. A frictionless backtest gives every desired position an immediate fill at a representative price. A real order competes for finite liquidity, may reveal information, may remain unfilled while the market moves, and consumes cash, collateral, or borrow. The difference can reverse a strategy's ranking, optimal rebalance frequency, and apparent capacity.

Transaction costs are therefore not a final haircut applied to an otherwise finished strategy. They alter which trades should be attempted, their size and timing, and sometimes the economic interpretation of the signal. A realistic model also prevents a false precision: cost is conditional on instrument, order, venue, clock, market state, and execution policy. It is a forecast distribution, not a universal basis-point constant.

This note is a research framework, not trading advice. It explains how to make simulations auditable and how to distinguish cost components without claiming that a historical calibration will remain valid.

## Start with a complete cost ledger

For a parent order with signed quantity $Q$—positive for a buy and negative for a sell—let $P_0$ be a declared decision or arrival benchmark, $P_j$ the price of fill $j$, and $q_j$ its signed quantity. A useful total-cost decomposition is

$$
C_{\mathrm{total}}=C_{\mathrm{spread}}+C_{\mathrm{fees}}+C_{\mathrm{impact}}+C_{\mathrm{delay}}+C_{\mathrm{unfilled}}+C_{\mathrm{financing}}+C_{\mathrm{borrow}}+C_{\mathrm{other}}.
$$

The terms are conceptually distinct but not perfectly observable. An execution price relative to the arrival midpoint contains spread, impact, market movement, and noise. A model must say which benchmark and sign convention assign each part. Adding estimates derived from overlapping benchmarks can double count the same price concession.

Costs should be reported in dollars and basis points of traded notional. Portfolio return requires another denominator—usually beginning or average net asset value—and an explicit treatment of leverage. A cost of 10 basis points of a trade is not 10 basis points of annual portfolio return unless the portfolio trades one times capital during that period.

## Spread is the price of immediacy

The quoted spread is best ask minus best bid. A marketable buyer generally crosses toward the ask; a marketable seller crosses toward the bid. Relative to the contemporaneous midpoint $M=(A+B)/2$, the displayed half-spread is

$$
h=\frac{A-B}{2M}.
$$

This is a useful first approximation for a small aggressive order, not a guaranteed cost. The best quote may contain fewer shares than the order, displayed depth can cancel, and the consolidated quote can be locked, crossed, stale, or delayed relative to the strategy's feed. A fill inside the spread produces price improvement; a fill through several levels costs more. In dealer markets, the executable quote may depend on size and customer relationship rather than a public central order book.

The SEC's Rule 605 framework distinguishes quoted, effective, and realized spreads. For a buy at execution price $P_e$ when the midpoint at order receipt is $M_0$, the effective spread is commonly represented as $2(P_e-M_0)/M_0$; the sell sign is reversed. Realized spread compares the execution with a later midpoint and is intended to separate the liquidity supplier's retained compensation from subsequent price movement. Neither statistic alone identifies causal impact. The later midpoint can move because of the order, public news, or unrelated flow.

A passive limit order is not “free spread capture.” It trades only when selected by incoming flow, faces queue priority and adverse selection, and may miss the desired position. Rebates can offset some explicit cost, but the relevant comparison includes fill probability, information decay, and what happens to unfilled quantity.

## Explicit fees are small, variable, and easy to misstate

Explicit costs include brokerage commissions, exchange or venue fees and rebates, regulatory assessments, clearing charges, taxes where applicable, and contract-specific exercise, assignment, delivery, or data charges. They can depend on side, liquidity provision or removal, order type, volume tier, venue, instrument, price, and date. FINRA's Trading Activity Fee, for example, is transaction-based and governed by its effective Schedule A; exchange schedules can distinguish adding, removing, routing, and auctions.

A zero-commission retail label does not imply zero trading cost, and an institutional rate card is not permanent. A reproducible simulation stores effective-dated schedules and states whether rebates accrue to the strategy, broker, or client. It also avoids false granularity when actual routing is unknown. If the backtest cannot know the venue or tier, it should use a documented conservative schedule or sensitivity range, not invent venue-level precision.

Futures require contract multipliers and exchange/clearing terms. Options may incur per-contract fees and assignment effects. Bonds often embed dealer compensation in price rather than a separately labeled commission. Fee logic should therefore live at the instrument and execution layer, not in one cross-asset constant.

## Market impact rises with size and urgency

Market impact is the adverse price response associated with executing the order. **Temporary impact** is the price concession required for immediacy and may decay after completion. **Permanent impact** is the persistent component, whether because the trade conveys information or changes the market's inventory equilibrium. Empirical separation is difficult: the counterfactual untraded price is never observed.

A common reduced-form model scales expected impact with volatility, participation, and size relative to normal volume:

$$
I(Q)=Y\sigma\left(\frac{|Q|}{V}\right)^\delta,
$$

where $I$ is fractional price impact, $\sigma$ is volatility over a compatible horizon, $V$ is volume over that horizon, $Y$ is a calibrated coefficient, and $\delta$ is often constrained between zero and one. This “square-root-style” form when $\delta\approx 1/2$ is an empirical approximation, not a law. Its parameters vary across assets, regimes, order styles, and definitions of volume and volatility.

Linearity in dollars is especially dangerous. If per-unit impact is concave in order size, total dollar cost is superlinear: doubling capital more than doubles impact. This is the source of capacity limits that a fixed basis-point haircut cannot represent. Cross-impact matters too: trading an ETF, future, option, or one stock can move substitutes and hedges. A single-name model may understate the cost of a coordinated portfolio rebalance.

Urgency creates a trade-off. Executing faster raises participation and likely impact. Executing slower exposes the order to more price risk and information decay. Almgren and Chriss formalized this as a choice between expected transaction cost and variance of execution cost. The framework is valuable because it makes the trade-off explicit, but its stylized impact and price-process assumptions must be calibrated and challenged rather than treated as an execution recipe.

## Delay and non-execution are costs too

Waiting can reduce spread or impact while the signal decays or the market moves. Define a decision price when the portfolio manager commits to the target, an arrival price when the execution process receives the order, and fill prices thereafter. **Delay cost** is the signed movement from decision to arrival. It can reflect computation, approval, batching, routing, or an intentionally patient policy.

An unfilled order creates **opportunity cost** if the desired security then moves favorably without the portfolio. This term is essential when comparing passive and aggressive policies. Counting only executed shares makes a selective limit-order strategy look excellent because the missing adverse cases disappear. The simulator needs an explicit rule for partial fills, cancellations, expiry, residual quantity, and next-period target changes.

Delay is not always harmful ex post; prices sometimes move favorably. A calibrated model should retain a distribution and report signed realized outcomes, not replace every wait with a deterministic penalty. For strategy design, however, the expected cost of delay should depend on signal half-life. A slow value signal and a seconds-lived news signal cannot share one schedule merely because they trade the same security.

## Implementation shortfall unifies the accounting

Implementation shortfall compares the return of a paper portfolio formed at the decision price with the return actually achieved. For a buy program of intended quantity $Q>0$, with fills $q_j$ totaling $q_f\le Q$, one simplified dollar expression at evaluation price $P_T$ is

$$
IS=\sum_j q_j(P_j-P_0)+(Q-q_f)(P_T-P_0)+F,
$$

where $F$ is explicit fees. For sells, signs must be set so adverse execution remains positive cost. The first term captures cost on executed quantity relative to decision; the second captures the missed gain or loss on unexecuted quantity. More detailed attribution divides the first term into delay, spread, and impact.

The power of implementation shortfall is completeness: it includes both trading and failing to trade. The weakness is attribution. If the market rises after a buy decision because of public news, the measure records a real implementation shortfall even if the order did not cause the move. It answers “how far did reality fall short of the paper decision?” rather than “what market movement did this order cause?” Transaction-cost analysis should preserve that distinction.

Benchmark choice changes the question. Decision price evaluates the entire implementation process. Arrival price evaluates the execution desk after handoff. Volume-weighted average price compares with market volume during a window but can reward tracking an arbitrary schedule and is not a counterfactual cost. Closing price may be relevant to an index rebalance yet invites concentrated auction risk. A researcher should never select the benchmark after seeing which one flatters execution.

## Financing, collateral, and stock borrow

Positions consume balance-sheet resources over time. Long cash securities may require financing; derivatives require initial margin, variation margin liquidity, and collateral that earns some rate; futures returns require consistent collateral accounting. Financing cost depends on the actual cash balance, timing, rate, haircut, and currency—not simply gross notional multiplied by a generic annual rate.

Short equity adds a separate borrow ledger. A short sale requires locating stock under Regulation SHO, but a locate is not a promise that borrow will remain available at yesterday's rate. Loan fees can change, collateral terms matter, lenders can recall shares, and corporate actions affect cash flows. Hard-to-borrow securities may become unavailable precisely when a crowded signal demands them. A credible simulation uses point-in-time availability and fee data where possible, applies recalls and forced closeouts according to a declared rule, and distinguishes borrow fee from margin interest and trading spread.

Using today's easy-to-borrow universe for historical tests creates survivorship and look-ahead bias. Assuming every short is available at one annual fee converts a binding quantity constraint into a mild price adjustment. At minimum, researchers should show exclusions or stress cases for unavailable borrow and escalating fees. Financing and borrow accrue by calendar time, while trading costs occur at transactions; mixing the two obscures which mechanism destroys returns.

## Turnover links signal design to cost

One-way turnover over period $t$ can be defined as

$$
TO_t=\frac{1}{2}\sum_i |w_{i,t}^{\mathrm{post}}-w_{i,t^-}^{\mathrm{pre}}|,
$$

where pre-trade weights are drifted from the previous holdings and post-trade weights are targets. Conventions differ: some report total buys plus sells without the half, exclude cash, or annualize from different frequencies. Every result must state the formula.

If average cost per traded dollar were constant at $c$, a rough annual drag would be $c$ times annual traded notional relative to capital. But impact makes $c$ endogenous to turnover, assets under management, concentration, and scheduling. High turnover can refresh more independent forecasts, yet it repeatedly pays spread and fees and raises participation. Cost-aware optimization therefore often produces a **no-trade region**: a target change must be large enough to justify implementation.

Turnover should be measured after portfolio constraints, rounding, and target netting. Summing desired trades before crossing buys and sells internally can overstate implementation; computing turnover only from final monthly holdings can understate intramonth activity. Signal research and execution simulation must agree on the same event sequence.

## Capacity is a curve, not a single number

Strategy capacity is the capital at which expected net performance, risk-adjusted value, or another declared objective falls below an acceptable threshold. It is not average daily volume, and it is not a permanent property. It depends on alpha strength and decay, breadth, concentration, turnover, participation limits, instrument liquidity, borrow, execution horizon, and market regime.

A capacity study scales capital while recomputing whole-share or contract positions, order sizes, impact, financing, borrow, and any portfolio response to costs. With superlinear impact, net alpha typically declines gradually, then more sharply as trades concentrate in scarce liquidity. The strategy may adapt by trading less, holding longer, dropping weak signals, widening its universe, or accepting more tracking error. Thus capacity and optimal turnover are jointly determined.

Report a curve across capital levels and stress states rather than a heroic point estimate. Include the share of orders above participation thresholds, days needed to trade, exposure lost to borrow exclusions, and concentration of total cost in names and dates. Capacity estimated from calm-market average volume can collapse during the exact stress episode when liquidation matters most.

## Calibrate with orders, not wishful fills

Calibration data should join parent orders, child orders, quotes, trades, fills, cancellations, venue or dealer information, fees, and market-state variables on synchronized clocks. Parent-order direction and size are crucial; public prints alone rarely reveal the initiating order or its counterfactual. The sample should preserve failed and partial executions, not only completed trades.

A practical cost forecast conditions on variables known before execution: order size relative to forecast volume, volatility forecast, spread, depth, price level, time of day, asset class, urgency, side, venue eligibility, and market regime. Model the median and tails. Means can be dominated by stress events, while a median-only model hides the losses that determine liquidity risk.

Use walk-forward or rolling estimation. Parameters fitted on the full history leak future liquidity regimes and fee schedules into the past. Keep execution-policy changes, tick-size changes, venue migrations, and data-feed changes as effective-dated breaks. Separate calibration orders from evaluation orders, and cluster uncertainty by date or parent order because child fills are not independent observations.

Avoid mechanical circularity. Realized cost affects which orders were sent; the historical sample reflects an old optimizer and execution policy. Large costly trades may have been suppressed, so fitting only completed historical orders understates costs for the counterfactual sizes a new strategy proposes. Extrapolation beyond observed participation or instrument liquidity should be flagged, capped, or stress-tested rather than disguised by a smooth formula.

## Backtest integrity checklist

The simulation should enforce causal order: point-in-time data arrive; the signal is computed with realistic latency; constraints produce a target; the order becomes eligible; a quote or dealer price is available; fills occur subject to depth, volume, queue, and limits; then fees, financing, borrow, and portfolio accounting update. This connects directly to [[Point-in-time data and look-ahead bias]].

Several controls are non-negotiable:

1. Use executable bid and ask data when available, never a frictionless close or midpoint for every fill.
2. Prevent same-bar fills based on a bar's final high, low, close, or volume unless the order existed before those outcomes and the fill rule is causal.
3. Cap participation using volume that would have been observable or forecast when scheduling, not realized full-day volume known afterward.
4. Model partial fills, queue uncertainty, halts, price limits, delistings, corporate actions, contract rolls, and rejected or unavailable shorts.
5. Version fee, tick, settlement, multiplier, margin, and borrow rules by effective date.
6. Apply costs to every rebalance, hedge, roll, cash flow, and forced trade—not only signal entries and exits.
7. Re-estimate cost parameters without the test period and report net results across conservative alternatives.
8. Preserve order-level audit records linking each target, eligible time, benchmark, fill, cost component, and final holding.

Stress tests should vary spread, impact coefficient and exponent, participation, latency, borrow, financing, and the fraction left unfilled. A strategy that survives only one low-cost calibration has not demonstrated robust implementability. Cost assumptions should be frozen before evaluating the final holdout; repeatedly raising costs only until an implausible result “looks reasonable” is another form of outcome fitting.

## How to read a net result

A strong report shows gross and net performance, cost by component, turnover convention, capacity curve, execution assumptions, and sensitivity. It separates forecast cost used by the optimizer from realized or simulated cost used for evaluation. It also shows whether apparent alpha is concentrated in trades the model says cannot be completed.

No model makes a backtest tradable by declaration. Public quote data may omit queue position and hidden liquidity; institutional data reflect a particular broker, client mix, and policy; future market structure can change. The honest conclusion is conditional: under specified information, order, funding, and execution assumptions, the strategy retained or failed to retain value. That is far more useful than subtracting an arbitrary annual haircut from a frictionless return.

## Sources

- André F. Perold, [The Implementation Shortfall: Paper versus Reality](https://rpc.cfainstitute.org/sites/default/files/-/media/documents/book/rf-publication/1993/rf-v1993-n1-4439-pdf.pdf) — foundational paper and later Research Foundation volume on measuring the gap between paper and implemented portfolios.
- Robert Almgren and Neil Chriss, [Optimal Execution of Portfolio Transactions](https://www.math.nyu.edu/~chriss/optliq_f.pdf) — author-hosted primary paper formalizing the expected-cost versus execution-risk trade-off with temporary and permanent impact; accessed 2026-07-10.
- U.S. Securities and Exchange Commission, [Request for Comments on Measures to Improve Disclosure of Mutual Fund Transaction Costs](https://www.sec.gov/rules-regulations/2003/12/request-comments-measures-improve-disclosure-mutual-fund-transaction-costs) — official definitions and measurement difficulties for commissions, spread, and market impact; accessed 2026-07-10.
- U.S. Securities and Exchange Commission, [Staff Legal Bulletin No. 12R](https://www.sec.gov/rules-regulations/staff-guidance/staff-legal-bulletins/slb-12r) — Rule 605 treatment of effective and realized spreads, partial executions, and quote conditions; accessed 2026-07-10.
- U.S. Securities and Exchange Commission, [Regulation SHO adopting release](https://www.sec.gov/rules-regulations/2004/07/short-sales) — official locate, order-marking, and delivery framework for short sales; accessed 2026-07-10.
- FINRA, [Trading Activity Fee frequently asked questions](https://www.finra.org/rules-guidance/guidance/faqs/trading-activity-fee) — scope of the transaction-based regulatory fee and route to the effective rate schedule; accessed 2026-07-10.
- FINRA, [Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts) — authoritative overview of margin interest, collateral use, and continuing costs of open short positions; accessed 2026-07-10.
- Mark Coppejans and Ananth Madhavan, [The Value of Transaction Cost Forecasts: Another Source of Alpha](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=972184) — primary research on the interaction among cost forecasting, turnover, breadth, and capacity.
- Albert S. Kyle and Anna A. Obizhaeva, [Market Microstructure Invariants: Empirical Evidence from Portfolio Transitions](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1978943) — primary empirical evidence on scaling order size, spread cost, and impact with volume and volatility.

## Open questions

- Which public datasets can support point-in-time US equity spread and depth calibration without silently omitting delisted securities or changing feed coverage?
- How stable are impact exponents across volatility regimes, auctions, index rebalances, and forced liquidations?
- How should cross-impact among stocks, ETFs, futures, and options be estimated without attributing common news to the portfolio's own trades?
- What conservative borrow-availability proxy best represents rejected and recalled short positions when proprietary securities-lending data are unavailable?
- When does optimizing on a forecast cost model create enough selection bias that evaluation requires a separate randomized or quasi-experimental execution sample?
