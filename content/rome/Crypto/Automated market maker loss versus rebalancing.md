---
title: Automated market maker loss versus rebalancing
created: 2026-07-10
source: llm
status: seed
tags: [crypto, defi, automated-market-makers, market-microstructure, liquidity]
---

Loss-versus-rebalancing isolates the value an automated market maker loses by trading at stale prices, but it is not impermanent loss, total LP profit, or a complete measure of liquidity-provider risk.

## The economic question

An automated market maker (AMM) is often described as a passive portfolio whose token weights change mechanically with price. That description hides an execution problem. When the external price moves, the pool does not update its quote by observation. Its inventory changes only when someone trades against it. An arbitrageur therefore moves the pool toward the new market price and keeps the difference between the pool's stale execution prices and the contemporaneous external price, net of costs.

**Loss-versus-rebalancing (LVR)** measures this adverse-selection cost against a precise counterfactual: a strategy that starts with the same inventory and continuously trades at the external market price so that it holds the same inventory schedule the AMM would hold at each price. The benchmark has the AMM's changing exposure but does not give away the stale-quote arbitrage profit. This makes LVR a market-microstructure quantity, not merely another name for [[Impermanent loss]].

The distinction matters for judging [[Decentralized exchanges]], fee design, block construction, and LP returns. A pool can have zero impermanent loss between equal start and end prices while accumulating positive LVR along the intervening path. It can suffer large impermanent loss because the assets diverge even if fees more than cover LVR. And an LP can outperform a simple hold portfolio yet still underperform the rebalancing benchmark.

## A constant-product example

Consider a fee-free constant-product pool with reserves $x$ units of a risky asset and $y$ units of numeraire:

$$xy=k.$$

Let the external price of one risky token be $p$ units of numeraire. Once arbitrage has aligned the pool's marginal price with $p$, its reserves are

$$x(p)=\sqrt{\frac{k}{p}}, \qquad y(p)=\sqrt{kp}.$$

The pool's marked value is therefore

$$V(p)=p x(p)+y(p)=2\sqrt{kp}.$$

The key identity is

$$V'(p)=x(p).$$

So the AMM's risky-token inventory equals the delta of its value function. A rebalancing benchmark can start with the same wealth and hold $x(p_t)$ risky tokens at every moment, financing each change at the external price. If $p_t$ is continuous, its gain is

$$dR_t=x(p_t)\,dp_t.$$

By Itô's lemma, the marked AMM value changes as

$$dV_t=V'(p_t)\,dp_t+\frac{1}{2}V''(p_t)\,d\langle p\rangle_t.$$

Because $V$ is concave, $V''(p)<0$. The first term is exactly the benchmark's directional exposure; the second is negative. Defining cumulative LVR as benchmark wealth minus AMM value gives

$$d\mathrm{LVR}_t=-\frac{1}{2}V''(p_t)\,d\langle p\rangle_t \geq 0.$$

For geometric Brownian motion, $dp_t/p_t=\mu_tdt+\sigma_t dW_t$, the constant-product expression simplifies to

$$d\mathrm{LVR}_t=\frac{\sigma_t^2}{8}V(p_t)\,dt.$$

In this idealized model, expected instantaneous LVR is proportional to pool value and variance, not to expected price drift. Intuitively, the pool repeatedly sells the appreciating token too cheaply after upward moves and buys it too expensively after downward moves. The rebalancing benchmark makes the same inventory changes, but at the external price. The gap is the arbitrageur's gross profit and the LP's adverse-selection loss.

This formula is diagnostic, not a universal forecast. It assumes a frictionless external market, continuous prices, continuous arbitrage, no fees, and the stated invariant. Fees, discrete blocks, jumps, gas, competing pools, order flow, latency, and concentrated-liquidity boundaries alter realized transfers. The general insight survives: curvature determines how aggressively inventory changes, and variation in the reference price creates value for traders who update a stale onchain quote.

## What exactly is the benchmark?

LVR is meaningful only after specifying the counterfactual. The canonical benchmark is **self-financing rebalancing at the external price**:

1. Begin with the AMM's initial marked value and inventory.
2. At every external price $p$, hold the risky inventory prescribed by the AMM, such as $x(p)=\sqrt{k/p}$.
3. Buy or sell the difference at the external market price, with no exogenous deposits or withdrawals.
4. Compare benchmark wealth with the marked value of the AMM position.

This is not the same as holding the initial token quantities. It is also not necessarily an implementable retail strategy: truly continuous frictionless rebalancing is a theoretical counterfactual. Its purpose is attribution. By matching the AMM's delta, it removes directional exposure from the comparison and leaves the cost associated with the AMM's execution mechanism.

An empirical estimate must name further choices: the reference venue or price estimator, sampling interval, block or transaction ordering, treatment of gas and builder payments, fee accounting, and whether deposits and withdrawals are excluded. “LVR” computed against a centralized-exchange midprice at block boundaries is not automatically identical to arbitrage profit reconstructed from onchain transactions. The former can include price-measurement error; the latter can miss private hedges or transfers outside the observed venue.

## LVR is not impermanent loss

**Impermanent loss (IL)** normally compares the value of an LP position with the value of holding its initial token quantities over the same endpoint prices. For a fee-free, 50/50 constant-product pool, if the risky asset's relative price changes by a factor $r=p_T/p_0$, the ratio of pool value to hold value is

$$\frac{V_{\mathrm{AMM},T}}{V_{\mathrm{hold},T}}=\frac{2\sqrt{r}}{1+r},$$

and the common signed convention is

$$\mathrm{IL}(r)=\frac{2\sqrt{r}}{1+r}-1 \leq 0.$$

IL depends only on the endpoint price ratio in this simple setting. LVR is path-dependent: quadratic variation accumulates even if price later returns to its starting point. If $p_T=p_0$, the endpoint IL is zero, but a volatile round trip can produce positive LVR because arbitrageurs traded repeatedly against stale pool prices.

The benchmarks answer different questions:

- **Hold benchmark:** Would depositing have beaten keeping the initial tokens untouched?
- **Rebalancing benchmark:** Given the AMM's dynamic inventory exposure, how much value did stale execution transfer to arbitrageurs?

The difference also prevents a common causal error. IL is not, by itself, a cash payment sent to an arbitrageur. It reflects how the AMM's inventory composition responds to the relative-price move compared with static holdings. LVR more directly identifies the adverse-selection component associated with arbitrage. Under restrictive frictionless models the quantities have mathematical relationships, but they should not be treated as interchangeable empirical labels.

“Impermanent” is also potentially misleading. The comparison loss disappears if relative prices return before withdrawal, but a realized withdrawal at a divergent price locks in the endpoint difference. Meanwhile, the arbitrage transfers underlying LVR do not reverse merely because price later returns; another round of trading can create another transfer.

## Fees are revenue, not the negation of the concept

Swap fees compensate LPs for supplying capital and taking risk. A useful accounting decomposition over a chosen interval is

$$\text{LP excess return versus rebalancing} \approx \text{fees} - \text{LVR} - \text{other costs},$$

with careful adjustments for deposits, withdrawals, gas, incentives, protocol fee shares, and valuation. In the original fee-free continuous model, LVR corresponds to arbitrageurs' gross profit. With fees and discrete blocks, the no-arbitrage region widens: a price discrepancy must be large enough to cover the fee and other execution costs. Arbitrage happens less often, and the division between LP fee revenue, arbitrage profit, gas, and block-builder or validator value becomes more complicated.

Fees therefore affect LVR-like adverse selection, but reporting “fees minus LVR” requires compatible definitions. Gross swap fees include payments from both informed or arbitrage flow and uninformed flow. An arbitrageur's net profit deducts pool fees, gas, hedging costs, and possibly priority payments. The LP's gross adverse-selection loss may be measured before fees, while net LP performance includes those fees. Subtracting a net arbitrage estimate from already netted fee income can double count.

The Uniswap v2 whitepaper specifies a constant-product implementation in which a 0.30% swap fee is applied to the input and retained in the pool under the default LP-fee setting. This means the invariant grows with fee-paying trades rather than remaining literally constant. Other versions and protocols use different tiers, protocol shares, dynamic fees, or separate fee accounting. An analysis should use the actual pool contract and period, not a generic “AMM fee.”

Fees can exceed LVR for a pool or period, but that does not prove LP capital earned an attractive risk-adjusted return. Fee income may compensate for volatility exposure, range-management labor, gas, smart-contract failure, token default, oracle or governance risk, and opportunity cost. Conversely, high observed volume does not guarantee profitability when toxic flow dominates.

## Inventory risk is a separate layer

The rebalancing benchmark deliberately matches the AMM's inventory schedule, so LVR strips out much of the first-order directional risk. An LP still owns the tokens. If one token collapses, depegs, is exploited, or becomes illiquid, the invariant can cause the pool to accumulate the deteriorating asset as traders remove the stronger one. That is **inventory or asset risk**, not fully described by LVR.

The distinction can be expressed as nested comparisons:

- Comparing the AMM with matched rebalancing attributes stale-execution cost.
- Comparing the rebalancing strategy with cash attributes the risk and return of the dynamic token exposure.
- Comparing the AMM with static hold mixes execution effects with a different inventory policy.

For volatile but solvent assets, inventory risk includes beta, covariance, tail jumps, and the convexity or concavity created by the invariant. For stablecoin pairs, a narrow historical price range can make fee yield look safe until a depeg concentrates the pool in the impaired coin. LVR estimated from ordinary continuous volatility may materially understate that jump and credit risk.

Concentrated liquidity adds path-dependent active management. A Uniswap v3 position supplies liquidity only over a chosen price interval. Inside the range it resembles a leveraged slice of a constant-product curve; at a boundary it becomes entirely one token and ceases earning active swap fees until price returns or the LP repositions. Range choice changes curvature, fee density, inventory exposure, and gas or automation costs. A position's LVR must be evaluated against its own range-dependent inventory function, not the full-range formula above.

## A practical measurement ledger

A credible pool study should keep separate columns rather than collapsing everything into “IL”:

| Quantity | Counterfactual or definition | Main driver |
|---|---|---|
| Mark-to-market LP P&L | Ending position plus distributions minus contributed capital | Asset prices, trades, fees |
| Static-hold difference | LP value minus initial token quantities held | Endpoint relative price and invariant |
| LVR | Matched self-financing rebalancing wealth minus AMM value | Price variation, curvature, stale execution |
| Gross fees | Fees allocated to the position before expenses | Fee tier, active liquidity, volume |
| Net arbitrage profit | Arbitrage receipts minus AMM payments and execution costs | Staleness, ordering, competition, gas |
| Inventory P&L | Return from the benchmark's changing token exposure | Drift, jumps, covariance, token failure |
| LP net economic return | P&L after gas, management, incentives, and relevant risks | All of the above |

The measurement protocol should then state:

1. **Unit of account.** Dollars, ETH, or another token can produce different return narratives.
2. **Reference price.** Use a liquid, manipulation-resistant external price and document venue, timestamp, and aggregation.
3. **Clock.** Transaction, block, or fixed-time sampling changes measured variation and staleness.
4. **Position boundaries.** Separate price-driven inventory changes from LP deposits, withdrawals, fee collections, and range resets.
5. **Fee convention.** Identify trader-paid fees, LP share, protocol share, and whether amounts are reinvested.
6. **Execution costs.** State whether arbitrage profit is gross or net of gas, priority fees, builder payments, slippage, and offchain hedging.
7. **Path hazards.** Treat jumps, depegs, oracle failures, reorgs, and toxic-token mechanics explicitly rather than forcing them into a diffusion estimate.

Empirical work by Fritsch and Canidio reconstructs arbitrage losses for large Uniswap pools and reports that losses exceeded fees for many studied pools; it also finds material sensitivity to block time. Those are important results, but not a timeless claim that every AMM or pool loses money. Pair composition, period, volatility, fee tier, liquidity concentration, reference-price method, and execution environment determine the outcome.

## Mechanism-design implications

LVR reframes arbitrage as both a service and a cost. Arbitrage keeps onchain prices aligned with external markets, which improves composability and prevents stale quotes from persisting. Yet the party forcing alignment is paid by the pool through favorable execution. Faster blocks can reduce the distance prices travel between updates, but the exact effect depends on fees, competition, latency, and price dynamics. Batch auctions, frequent clearing, dynamic fees, price-aware curves, or mechanisms that return ordering value to LPs may reduce the transfer, but each introduces new trust, latency, oracle, or implementation tradeoffs.

The correct objective is not necessarily “eliminate arbitrage.” Without a way to update inventory or prices, a pool can remain wrong and become unusable. The design target is to obtain price discovery and inventory adjustment while reducing the informational rent extracted from passive liquidity. Whether a proposed mechanism succeeds must be tested after all fees, oracle risks, latency, and strategic behavior are included.

For an LP, LVR is best used as one line in a return attribution rather than a standalone verdict. Ask whether fee and incentive revenue compensates for adverse selection; then separately ask whether the resulting token exposure, tail risk, operating cost, and protocol risk fit the portfolio. For a protocol designer, LVR makes stale-price execution measurable and connects AMM curvature to market-maker losses. For a trader, it explains why arbitrage profit is the economic mirror of a liquidity supplier's disadvantage, even when the smart contract behaves exactly as coded.

## Sources

- [Milionis, Moallemi, Roughgarden, and Zhang, “Automated Market Making and Loss-Versus-Rebalancing”](https://arxiv.org/abs/2208.06046) — primary paper defining LVR, the matched rebalancing benchmark, and the continuous-time formulas.
- [Milionis, Moallemi, and Roughgarden, “Automated Market Making and Arbitrage Profits in the Presence of Fees”](https://arxiv.org/abs/2305.14604) — primary extension treating fees and discrete Poisson block times.
- [Fritsch and Canidio, “Measuring Arbitrage Losses and Profitability of AMM Liquidity”](https://arxiv.org/abs/2404.05803) — empirical reconstruction of arbitrage losses, fees, pool profitability, and block-time sensitivity.
- [Adams, Zinsmeister, and Robinson, “Uniswap v2 Core”](https://docs.uniswap.org/whitepaper.pdf) — protocol whitepaper for constant-product mechanics, swap fees, and LP exposure.
- [Adams et al., “Uniswap v3 Core”](https://uniswap.org/whitepaper-v3.pdf) — primary protocol specification for concentrated liquidity, ranges, and fee accounting.

## Open questions

- Which reference-price construction best separates true stale-quote arbitrage from latency and measurement error across fragmented crypto venues?
- How much of measured arbitrage value ultimately accrues to searchers, builders or validators, gas burn, and offchain hedging counterparties?
- Which dynamic-fee or batch-clearing designs reduce LP adverse selection after accounting for lower uninformed volume, oracle dependence, and strategic timing?
- How should jump-to-default and depeg risk be combined with diffusion-based LVR without falsely presenting them as the same phenomenon?
- For actively managed concentrated liquidity, what benchmark fairly separates AMM execution loss from the manager's discretionary range-selection skill and gas costs?
