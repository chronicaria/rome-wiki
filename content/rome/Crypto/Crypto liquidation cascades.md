---
title: Crypto liquidation cascades
created: 2026-07-09
source: llm
status: seed
tags: [crypto, markets, market-structure, derivatives, risk]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-10-09
---

A crypto liquidation cascade is a feedback loop in which adverse price moves exhaust leveraged traders' margin, forced position closures consume scarce liquidity, and the resulting trades push prices toward still more liquidation thresholds.

Up: [[Crypto]]

Related: [[Perpetual funding and crowded leverage]] · [[Spot futures basis in crypto]] · [[Crypto liquidity regime]] · [[Cross-venue fragmentation in crypto]] · [[Stablecoin reserve and redemption risk]]

## Direct answer

Liquidation is not merely a large loss. It is a rule-driven transfer of control. Once an account no longer satisfies a venue's maintenance-margin requirement, the trader can lose discretion over when and how the position is closed. A liquidation engine cancels orders, reduces or takes over positions, and sends offsetting trades into an order book or a backstop mechanism. Liquidating a long normally requires selling; liquidating a short requires buying. If the forced quantity is large relative to executable depth, those trades move the market in the same direction that damaged the position.

The cascade is therefore a loop:

$$
\text{price shock}\rightarrow\text{margin shortfall}\rightarrow\text{forced flow}
\rightarrow\text{price impact}\rightarrow\text{new margin shortfalls}.
$$

The loop is strongest when leverage is crowded, liquidation thresholds cluster, order-book depth disappears, collateral falls with the position, and arbitrage transmits the move among perpetual-futures, spot, options, lending, and decentralized venues. It can run downward through long liquidations or upward through short liquidations. The same visible price move can produce very different losses across exchanges because mark-price construction, maintenance tiers, cross-margin rules, partial-liquidation procedures, insurance funds, and auto-deleveraging differ.

Liquidation totals are consequently evidence of realized forced deleveraging, not a complete forecast, a trustworthy map of future trigger prices, or trading advice.

## The margin boundary

A leveraged position has a notional value larger than the capital supporting it. If a trader posts collateral $C$ against notional exposure $N$, a simple leverage measure is $L=N/C$. At 10× leverage, a roughly 10% adverse move would consume the initial capital before fees, funding, maintenance margin, nonlinear contract effects, and changes in collateral value. In practice liquidation occurs earlier because the venue demands a maintenance buffer.

For a simple isolated linear long, ignore fees and suppose quantity $q$ is entered at price $P_0$. Equity near mark price $P$ is

$$
E(P)=C+q(P-P_0)-F,
$$

where $F$ collects funding and other charges. If required maintenance margin is $M(P,q)$, liquidation becomes possible when

$$
E(P)\leq M(P,q).
$$

This is a teaching identity, not a universal exchange formula. Actual requirements can be tiered by position size, depend on contract type and collateral, and be calculated at account rather than position level. Inverse contracts have nonlinear exposure because payoff and collateral may be denominated in the underlying cryptoasset. Portfolio margin can recognize offsets but also couples positions through one risk calculation.

The distinction among **entry price**, **mark price**, **last traded price**, **liquidation price**, and **bankruptcy price** matters. Entry price establishes the position's cost basis. Last price is the latest venue trade. Mark price is the venue's reference for unrealized profit, loss, and often liquidation; it commonly blends an external spot index with a bounded or smoothed basis component. Liquidation price is the estimated boundary at which maintenance requirements fail. Bankruptcy price is the level at which the allocated position margin is exhausted. A venue tries to intervene before or around bankruptcy so that a losing account does not impose an unsecured deficit on counterparties.

Mark prices are a defense against one thin or manipulated trade triggering mass liquidation, but they are not oracles of fundamental value. Their indices, constituent venues, smoothing, update frequency, and fallback rules differ. During dislocation, the mark can differ from the candle a user sees. Bybit explicitly states that its mark rather than last traded price triggers liquidation. Hyperliquid says its mark combines external centralized-exchange prices with its own book state. The design reduces sensitivity to an isolated print while making liquidation depend on an engineered reference whose behavior must be inspected during stress.

## What a liquidation engine does

There is no single crypto liquidation procedure. A stylized sequence is:

1. **Recalculate risk.** The venue updates marked equity, maintenance requirements, and account or position risk.
2. **Release encumbered margin.** It may cancel open orders that would otherwise reserve collateral.
3. **Reduce risk tiers or positions.** Partial liquidation can shrink notional until the account again satisfies maintenance requirements, avoiding unnecessary full closure.
4. **Execute or transfer the position.** The engine sends aggressive orders, auctions exposure, or transfers it to a designated liquidator or backstop pool.
5. **Allocate any deficit or surplus.** Position margin absorbs losses first; an insurance fund may cover execution worse than bankruptcy. If protection is insufficient, auto-deleveraging or socialized loss can reduce profitable counterparties' positions or claims.

Venue documentation illustrates the variation. Bybit describes laddered liquidation: active orders can be cancelled, the risk tier lowered, and positions partially closed before its engine takes over remaining exposure. Its insurance fund receives the favorable difference when a liquidation executes better than bankruptcy and absorbs the shortfall when execution is worse. If the relevant pool is insufficient, Bybit says auto-deleveraging can use profitable counterparties to cover the deficit.

Deribit describes real-time incremental liquidation, intended to liquidate only enough of a position to restore margin compliance. Its insurance fund is the next layer against bankrupt accounts, with socialized-loss provisions behind it in the rulebook. Hyperliquid instead first attempts to close positions through market orders in its book; if equity falls sufficiently below maintenance and ordinary execution does not restore compliance, positions can be transferred to a liquidator vault. These are materially different state machines even though each interface may display the same word, “liquidation.”

The economic trade-off is unavoidable. Slow execution gives a trader or market maker more time and may reduce temporary impact, but allows losses to outrun collateral. Immediate market orders protect venue solvency but demand liquidity exactly when it is most expensive. Partial liquidation reduces forced quantity but may create repeated waves. Backstop pools warehouse risk but can themselves become concentrated. Insurance funds mutualize tail execution losses across fees and past liquidation surpluses. Auto-deleveraging protects the clearing system by involuntarily reducing winning positions, converting counterparty credit risk into rule risk.

## How the cascade forms

### 1. A shock reaches leveraged books

The initiating shock need not originate in derivatives. It may be a spot sale, macroeconomic announcement, exploit, stablecoin dislocation, collateral impairment, exchange outage, or simple withdrawal of market-making capacity. Nor does every sharp move become a cascade. The first question is whether the shock reaches enough accounts whose equity sits near maintenance requirements.

Leverage makes the distance small. A trader at high leverage has little loss-absorbing capital relative to notional. Crowding makes many distances similar: traders may enter after the same breakout, use the same round-number stops, select the same leverage presets, or share collateral. Rising open interest and positive funding can be consistent with crowded longs, but neither proves it. Open interest includes both long and short exposure, while funding measures a payment rule and imbalance proxy rather than each account's liquidation boundary.

### 2. Forced orders meet a nonlinear book

An order book is a schedule, not a pool of liquidity guaranteed at the quoted price. The best bid might support only a small quantity. A liquidating sell consumes that bid and successively lower bids. Market impact grows with order size relative to available depth, and depth is endogenous: market makers can widen spreads or cancel orders as volatility, inventory risk, exchange latency, or adverse-selection risk rises.

This creates the cascade's convexity. The first $10 million of forced flow might move a deep market modestly; the next $10 million can move it far more after bids have vanished. Reported 24-hour volume is a poor denominator because it says little about executable depth within the seconds of liquidation. Even a large market can become locally illiquid.

### 3. Price impact reaches the next threshold

As aggressive sales lower futures and spot-linked marks, the equity of other longs falls. Accounts at the next maintenance boundary are transferred to their engines, producing more sells. Shorts work symmetrically: rising prices trigger forced buys, which can cause a short squeeze. A cascade ends when forced inventory is exhausted, new risk capital absorbs it, arbitrage restores relative prices, or venue controls interrupt the loop.

The engine is not necessarily the only forced seller. Traders may voluntarily reduce positions before formal liquidation. Market makers hedge liquidation inventory in spot or at another derivatives venue. Lenders liquidate collateral. Funds facing internal risk limits or redemptions can sell. Thus “liquidation flow” properly includes a narrow observable engine component and a wider, partly unobserved deleveraging response.

### 4. Collateral can reinforce the position loss

Stable collateral makes the margin arithmetic easier but does not eliminate issuer, custody, or depeg risk. Crypto collateral can be procyclical. A trader long an altcoin perpetual while posting BTC or another correlated token loses on both sides when the market falls: position P&L deteriorates and the dollar value of collateral shrinks. Cross margin can prevent one isolated position from liquidating by drawing on the rest of the account, but it also turns unrelated positions into shared collateral. Loss in one market can force closure in another.

This is why [[Stablecoin reserve and redemption risk]], [[Liquid staking tokens are claims on validators]], and [[Wrapped assets and duplicate crypto exposure]] are liquidation topics as well as asset topics. A depeg, redemption delay, bridge impairment, or thin wrapper discount changes effective collateral quality. If the venue continues to mark collateral optimistically, it risks a later deficit; if it discounts collateral abruptly, it can trigger immediate deleveraging.

## Cross-venue propagation

Crypto price discovery is fragmented but connected. A perpetual can fall below spot when liquidations hit its venue. Arbitrageurs may buy the cheap perpetual and sell spot, transmitting downward pressure into spot. A market maker who inherits a long from closing a customer's long may hedge by selling the same asset elsewhere. Index constituents then feed spot moves back into mark prices across several exchanges. What starts as venue-specific forced flow can become a common reference-price shock.

Propagation has several channels:

- **Arbitrage:** simultaneous buying of the relatively cheap instrument and selling of the expensive one narrows basis while exporting order flow.
- **Hedging:** liquidation engines, backstop pools, options dealers, and market makers offset acquired delta on other venues.
- **Shared indices:** many marks reference overlapping spot exchanges, so one constituent's move can influence multiple liquidation systems.
- **Shared collateral:** falling BTC, ETH, stablecoin, or liquid-staking collateral reduces margin across otherwise distinct positions.
- **Risk limits:** firms withdraw quotes or reduce inventory across venues after volatility or operational alarms.
- **Onchain liquidations:** oracle updates can trigger lending-protocol auctions or DEX liquidations, whose sales reach centralized markets through arbitrage.
- **Operational congestion:** chain, oracle, sequencer, or exchange latency can prevent discretionary re-margining while automated rules continue or resume abruptly.

Fragmentation can damp a shock when unaffected venues supply independent liquidity. It can amplify one when apparently separate books rely on the same market makers, collateral, index sources, and risk capital. Observing similar prices across venues proves connection, not the direction of causality. Establishing leadership requires synchronized trade, quote, mark, and liquidation data at sufficiently high frequency.

## What evidence can establish

The strongest general evidence is institutional and mechanical. Venue rulebooks establish that maintenance thresholds lead to forced position reduction, that engines use mark prices, and that insurance or auto-deleveraging allocates losses. The theoretical feedback from forced trades to prices follows only if those trades have market impact, a well-established market-microstructure condition whose size varies with liquidity.

Empirical estimates are less universal. Cheng, Deng, Wang, and Yu study BitMEX perpetual bitcoin futures and report substantial forced liquidation relative to outstanding futures, extremely high leverage among liquidated traders, and tail-based margin requirements far above the venue's then-common minimums. Their result supports the proposition that normal-return assumptions understate liquidation risk, but it is venue-, sample-, and model-specific; it does not prescribe today's optimal leverage across all assets.

He, Manela, Ross, and von Wachter show that perpetual-futures deviations from spot-based no-arbitrage values can be large, comove across cryptocurrencies, and shrink over time. That supports a market-wide component and active basis correction, not the claim that every convergence episode is caused by liquidations.

A 2026 Financial Stability Institute paper on cryptoasset activities in financial conglomerates identifies high derivatives leverage, automated liquidations, fragmented round-the-clock trading, and weak or uneven safeguards as conditions that can amplify shocks and cascade risk. This is an official synthesis rather than a causal event study. One cited independent working paper uses minute-level data from the October 2025 selloff to report futures-leading moves, extreme volume and spread changes, and cross-venue synchronization. It is useful provisional event evidence, but its short comparison set cannot establish a universal pattern. Its exact loss totals and causal labels should not be generalized without raw-data replication.

No public “liquidation total” is complete by default. Aggregators depend on venue feeds, which may report orders rather than final fills, bundle partial liquidations, omit venues, or change definitions. A visible liquidation is also censored: voluntary deleveraging immediately before the threshold is absent. Heatmaps that claim to locate future liquidations commonly infer positions from public open interest and assumptions; actual entry prices, collateral, margin modes, offsets, and added margin are private. Treat them as models, not a registry of stop levels.

## Reading a cascade without telling a story too early

A defensible event study should align at least these series on a common UTC clock:

| Layer | Useful observations | Main ambiguity |
| --- | --- | --- |
| Trigger | news time, onchain event, first price break | coincidence is not cause |
| Positioning | open interest, funding, basis, options skew | aggregate data hide account direction |
| Forced flow | venue liquidation messages, engine fills, DeFi auctions | coverage and definitions differ |
| Liquidity | spread, depth at several distances, cancel rate, impact | snapshots miss rapid withdrawal |
| Prices | spot, futures, mark, index constituents | leader can change within seconds |
| Solvency | insurance-fund changes, ADL events, bad debt | publication may lag or be incomplete |

Separate event time from publication time and research time. First identify when the external shock occurred, if any. Then determine whether futures, spot, or an index constituent moved first. Compare signed liquidation flow with contemporaneous changes in depth, not just daily volume. Test whether open interest fell as expected during deleveraging. Track basis: a futures discount during long liquidation followed by convergence is more informative than price alone. Check whether the venue changed mark or margin rules, suffered latency, or halted withdrawals. Finally, seek an alternative explanation such as voluntary selling, options hedging, stablecoin stress, or common news.

Counterfactual language should remain modest. “Liquidations amplified the move” requires evidence that forced orders arrived after the initial shock, were large relative to depth, and preceded additional same-direction price changes. A large liquidation number observed after the low may instead be an effect recorded with delay. “Liquidations caused the crash” is usually too strong because the initiating order flow and endogenous liquidity withdrawal must also be explained.

## Design choices and failure modes

Higher initial and maintenance margin increases loss-absorbing capital but reduces capital efficiency and can shift activity to weaker venues. Position tiers make larger exposures post more margin because they are harder to liquidate. Partial liquidation limits unnecessary forced flow, though repeated partial closures can prolong stress. Robust mark indices resist manipulation but may transmit common constituent failures. Price bands and circuit breakers slow execution, yet a pause can trap risk and concentrate orders at reopening.

Insurance funds address deficits, not market impact. A well-capitalized fund can prevent one bankrupt account from haircutting winners, but it does not replenish vanished bids. Backstop liquidity can make resolution predictable while concentrating inventory in a pool that must hedge. Auto-deleveraging avoids an unsecured venue loss but violates the intuition that a profitable, fully margined trader controls the exit. Onchain transparency makes positions and rules auditable, while public liquidation thresholds can invite competitive ordering, oracle manipulation, or maximal-extractable-value races.

The relevant question is therefore not whether a venue “has liquidations.” Any margined market needs a default-management process. The question is how its process behaves when prices gap, liquidity disappears, collateral correlations approach one, data feeds diverge, and many accounts breach together.

## Why it matters

Liquidation cascades explain why crypto volatility is partly endogenous. News or a sale can start a move, but leverage, collateral rules, automated execution, and fragmented liquidity determine whether that move stops or feeds on itself. The mechanism also separates several concepts that dashboards blur: liquidation threshold versus bankruptcy, mark versus last price, solvency protection versus liquidity provision, and observed liquidations versus total deleveraging.

For research, a cascade is best treated as a market-structure event rather than a morality tale about reckless traders. The same leverage can be used for speculation, hedging, market making, or basis trades; each creates different offsetting flows. Venue rules can make identical portfolios resolve differently. Reliable analysis therefore reconstructs the state machine, timestamps the data, preserves venue-specific definitions, and acknowledges what account-level information remains hidden.

This note is explanatory research, not financial or trading advice. It does not identify a safe leverage level, predict a liquidation event, recommend a venue, or justify positioning around inferred liquidation prices.

## Sources

- [Hyperliquid Docs, “Liquidations”](https://hyperliquid.gitbook.io/hyperliquid-docs/trading/liquidations) — primary description of maintenance margin, book execution, mark price, and liquidator-vault backstop; accessed 2026-07-09.
- [Bybit Help Center, “FAQ — Order Execution and Liquidation”](https://www.bybit.com/en/help-center/article/FAQ-Order-Execution-and-Liquidation) — primary account of mark-price triggers, account margin modes, and bankruptcy price; accessed 2026-07-09.
- [Bybit Help Center, “Trading Rules: Liquidation Process (Unified Trading Account)”](https://www.bybit.com/en/help-center/article/UTA-Trading-Rules) — primary description of isolated, cross, and portfolio-margin triggers; order cancellation; tier reduction; and partial liquidation; accessed 2026-07-09.
- [Bybit Help Center, “Insurance Fund”](https://www.bybit.com/en/help-center/article/Insurance-Fund) — primary description of bankruptcy-price execution accounting, insurance pools, and ADL; accessed 2026-07-09.
- [Deribit Support, “Liquidations”](https://support.deribit.com/hc/en-us/articles/25944769313309-Liquidations) — primary description of real-time incremental liquidation, portfolio treatment, and liquidation fees; accessed 2026-07-09.
- [Deribit Support, “Insurance Fund”](https://support.deribit.com/hc/en-us/articles/25944777576477-Insurance-Fund) — primary description of insurance coverage for negative equity and the socialized-loss fallback; accessed 2026-07-09.
- [Deribit, Exchange Rulebook](https://support.deribit.com/hc/en-us/articles/25944555524125-Deribit-Exchange-Rulebook-Deribit-FZE) — current primary rulebook page for liquidation, insurance-fund transfers, and the discretionary socialized-loss mechanism; accessed 2026-07-09.
- [OKX, “How does liquidation work in futures trading?”](https://www.okx.com/en-gb/help/frequently-issues-of-contracts-for-compulsory-liquidation) — primary venue explanation of compulsory liquidation and risk reserves; accessed 2026-07-09.
- [Financial Stability Institute, “Regulating and supervising cryptoasset activities in financial conglomerates,” FSI Occasional Paper No. 27](https://www.bis.org/fsi/fsipapers27.pdf) — official synthesis of leverage, automated liquidation, market fragmentation, and cascade risk.
- [Zhiyong Cheng, Jun Deng, Tianyi Wang, and Mei Yu, “Liquidation, Leverage and Optimal Margin in Bitcoin Futures Markets”](https://arxiv.org/abs/2102.04591) — empirical BitMEX study using extreme-value methods; working-paper results are venue- and sample-specific.
- [Songrun He, Asaf Manela, Omri Ross, and Victor von Wachter, “Fundamentals of Perpetual Futures”](https://arxiv.org/abs/2212.06888) — theory and cross-crypto evidence on perpetual pricing, basis deviations, and comovement.
- [Boon Chuan Lim, “Anatomy of a Crypto Cascade: Minute-Level Evidence from the October 2025 Crash”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6579278) — recent independent event study; useful as provisional minute-level evidence, not a settled universal estimate.

## Open questions

- Which venues publish liquidation executions with definitions stable enough for reproducible cross-venue event studies?
- How much apparent futures leadership survives adjustment for clock skew, batching, and different mark-price update rules?
- When does partial liquidation reduce total impact, and when does it merely spread forced flow across repeated waves?
- How should an event study estimate hidden voluntary deleveraging immediately before formal liquidation?
- What stress test best captures correlated decline in both a position and its crypto collateral?
- How concentrated are insurance and backstop exposures across venues, market makers, and collateral assets during a system-wide event?
