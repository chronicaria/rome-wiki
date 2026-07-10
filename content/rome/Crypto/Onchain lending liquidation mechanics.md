---
title: Onchain lending liquidation mechanics
created: 2026-07-10
source: llm
status: seed
tags: [crypto, defi, lending, liquidations, risk]
as_of: 2026-07-10
desk: Crypto markets
review_after: 2026-10-10
---

An onchain lending liquidation is a protocol-enforced conversion of an unsafe borrower's collateral into debt repayment; its success depends on valuation, transaction execution, incentives, and loss allocation working before collateral value falls through the debt.

Up: [[Crypto]]

Related: [[Crypto liquidation cascades]] · [[Oracle bridge and sequencer risk]] · [[Stablecoin leverage loops]] · [[Crypto liquidity regime]] · [[Reading an onchain incident postmortem]]

## Direct answer

Overcollateralized lending lets an account borrow assets while a smart contract holds other assets as security. The account remains usable only while protocol-valued collateral, after applying risk haircuts, covers its debt. When it crosses a configured boundary, anyone—or a designated keeper in some designs—may invoke liquidation. The liquidator or protocol repays debt, seizes or inventories collateral, and receives an economic reward. The borrower loses collateral and often pays a penalty, but the system tries to close the credit gap before lenders inherit bad debt.

That description hides four distinct jobs:

1. **Eligibility:** an oracle price and risk parameters determine that an account is liquidatable.
2. **Execution:** a transaction must reach the chain and win any competition before the account recovers or worsens.
3. **Conversion:** seized collateral must be exchanged for the debt asset at a price that attracts capital without giving away unnecessary borrower value.
4. **Loss allocation:** if collateral cannot cover debt and costs, reserves, insurance or safety modules, governance, suppliers, or tokenholders bear the remainder.

Protocols implement these jobs differently. Aave V3 uses direct repay-and-seize liquidation with a close factor and collateral bonus. Compound III first absorbs an underwater account onto the protocol balance sheet, then sells accumulated collateral from protocol inventory. Maker's Liquidation 2.0 confiscates an unsafe Vault and starts a descending-price collateral auction intended to raise stablecoin against its debt and penalty. Euler uses a health-dependent discount that increases as a position becomes less healthy. “Liquidation” therefore names a family of solvency state machines, not one standardized trade.

## The solvency boundary

Let an account hold collateral assets $i$ with quantities $q_i$, oracle prices $P_i$, and liquidation thresholds $\lambda_i$. Let it owe debt assets $j$ with quantities $d_j$ and prices $P_j$. A stylized health factor is

$$
HF=\frac{\sum_i q_iP_i\lambda_i}{\sum_j d_jP_j}.
$$

When $HF<1$, the haircut-adjusted collateral value is below debt and the account is eligible for liquidation. Aave documents this weighted-threshold form directly. The formula is an accounting test, not the account's economic net worth. Raw collateral may still exceed debt because $\lambda_i<1$ deliberately creates a buffer for volatility, slippage, oracle delay, gas, and liquidator compensation.

Three parameters that interfaces often blur have different functions. A **loan-to-value or borrow collateral factor** limits new borrowing. A **liquidation threshold or liquidation collateral factor** defines when an existing account becomes eligible. A **liquidation bonus, penalty, or discount** determines value transferred during resolution. Compound III explicitly separates borrow and liquidation collateral factors so governance can reduce initial borrowing capacity without automatically liquidating every legacy account at the new borrow limit.

Health changes through more than spot prices. Interest accrues to debt, collateral receipt exchange rates change, debt assets can appreciate, collateral can depeg, a user can withdraw collateral, and governance can change parameters. Correlation matters: borrowing a stablecoin against volatile ETH is exposed mainly to ETH decline; borrowing ETH against an ETH-linked liquid-staking token may appear safer but can fail through a wrapper discount, slashing, or withdrawal stress. A displayed $HF=1.2$ is therefore a conditional result based on specific prices and parameters, not a 20% universal safety margin.

## Direct repay-and-seize liquidation

In Aave's model, an external liquidator chooses an eligible account, one debt asset to repay, and one collateral asset to receive. The liquidator supplies debt tokens and obtains collateral worth the repaid amount plus a configured bonus. In simplified value terms, repaying $R$ of debt with bonus $b$ seizes approximately

$$
S=R(1+b)
$$

of collateral at the protocol oracle price, subject to available collateral, close-factor, rounding, fee, and implementation constraints. If the collateral can be sold for more than $R$ plus gas, financing, slippage, and ordering costs, liquidation is profitable.

The **close factor** caps how much debt one liquidation may resolve. Aave's current user documentation says that, under its stated V3 rules, up to 50% of total debt may be liquidated when health factor exceeds 0.95 and both collateral and debt values meet specified size conditions; up to 100% may be liquidated for more impaired or small positions. Dust rules can require full clearance rather than leaving uneconomic remnants. These rules are deployment- and version-sensitive and should be read from the live market configuration and code, not generalized indefinitely from one help page.

A partial close can preserve borrower collateral and reduce the liquidator's immediate trade size. But it may not restore safety. After repaying debt value $R$ and seizing collateral value $R(1+b)$, the health factor can improve only if removing debt helps the denominator more than discounted collateral removal hurts the numerator. A deeply impaired account, a large bonus, or adverse execution can require a larger close. Repeated small liquidations also consume gas and can strand “zombie” positions whose reward is too small to justify execution.

The liquidator commonly sources debt through its own inventory, a flash loan, or an atomic swap; receives collateral; then sells or hedges it. Atomicity removes the risk of being left halfway through the onchain call, but it does not remove price impact. A transaction can revert, be outbid, receive worse DEX execution than simulated, or arrive after an oracle update changes eligibility. The visible bonus is gross revenue, not profit.

## Absorb first, sell later

Compound III separates account resolution from collateral sale. When an account violates its liquidation collateral-factor test, any address can call `absorb`. Compound documents that the protocol repays the borrow using base-asset reserves, takes the collateral onto its own balance sheet, and records the account's remaining value in the base asset after a liquidation-factor penalty. The triggering caller earns recorded liquidator points and gas accounting rather than directly receiving the collateral.

The protocol can later offer seized collateral through `buyCollateral` at an oracle-derived discount when reserves are below a configured target. This architecture changes who warehouses timing risk. A direct liquidator must finance debt and dispose of collateral in one strategy. Compound's reserves bridge the time between absorption and sale; buyers can acquire inventory later, while the protocol temporarily owns the collateral and bears its price risk. The design can make immediate account cleanup less dependent on a liquidator's appetite for a particular collateral, but it makes reserve adequacy and collateral-sale configuration central to solvency.

It also separates two prices: the accounting price used to declare the account unsafe and the ask price used to replenish reserves. If an oracle overvalues collateral, absorption can crystallize too little value. If the sale discount is too small for stressed liquidity, inventory can remain unsold while falling. If it is too large, the system transfers avoidable value to buyers. Supply and borrow caps limit how much impaired collateral can reach this mechanism but cannot guarantee executable sale depth.

## Auction liquidation

Maker's Liquidation 2.0 uses another separation. `Dog.bark` confiscates an unsafe Vault, transfers its collateral to a collateral-specific `Clipper`, moves the debt into protocol accounting, applies a liquidation penalty, and begins an auction. Buyers call `take` to purchase collateral at a price generated by a decreasing-price function. The initial auction price is based on an oracle value multiplied by a configurable buffer; price falls over time until demand arrives. Auctions that run too long or fall too far can be reset, and circuit-breaker levels can stop new auctions, resets, or purchases.

A descending-price auction discovers the discount dynamically instead of promising every liquidator one static bonus. Starting high protects borrower value if buyers appear near the reference price. Falling price eventually compensates bidders for volatility, slippage, capital, and execution risk. But the auction creates duration: collateral can continue falling while price descends, keepers can disappear together, chain congestion can delay bids, and configured debt ceilings can limit concurrent liquidation throughput.

Maker's documentation also exposes an important accounting transition. At `bark`, the position's collateral leaves the borrower and its debt becomes protocol bad-debt accounting before the auction has recovered stablecoin. Liquidation is not synonymous with final settlement. The auction must still convert collateral, and any shortfall must pass through the system's surplus and debt-resolution mechanisms. Analysts should timestamp eligibility, seizure, first bid, collateral sales, debt cancellation, and any residual deficit separately.

## Oracles determine eligibility, not realizable value

Onchain lending contracts cannot observe a universal market price. They consume oracle reports constructed from specified venues, update rules, heartbeats, deviation thresholds, and fallback behavior. A liquidation uses the protocol's accepted price even when a trader believes another price is more current. This creates three relevant values:

- **oracle value**, used by the contract to calculate health;
- **executable value**, obtainable for the collateral in the liquidator's actual trade size and time window;
- **recovery value**, ultimately realized after auction, hedge, bridge, redemption, or inventory sale.

A robust oracle reduces manipulation by isolated trades, but smoothing or delayed updates may let an account jump from apparently safe to deeply insolvent. A fast market price may improve timeliness while becoming easier to manipulate in a thin pool. Multiple protocols can share the same feed, so one update can release many liquidations simultaneously. If collateral is bridged, staked, or redeemable only after a queue, pricing it at the parent asset can omit the representation discount precisely when liquidation needs immediate conversion. These compositional risks are developed in [[Oracle bridge and sequencer risk]].

The oracle can also become an attack surface. An attacker who can temporarily inflate collateral may borrow sound assets, leaving bad debt after the price normalizes. An artificially depressed collateral price can permit seizure of otherwise healthy positions. Defenses include liquidity-sensitive asset admission, caps, conservative thresholds, robust feed construction, circuit breakers, isolation modes, and governance monitoring. No single defense replaces analysis of the exact live dependency graph.

## Liquidator economics and transaction ordering

Permissionless execution does not mean evenly distributed access. Searchers monitor account state and oracle updates, simulate profitable collateral-debt pairs, obtain debt financing, and submit transactions to validators or block builders. Several bots may target the same account. Only the transaction that executes against eligible remaining debt succeeds; losers can pay for reverts or failed bundles depending on the route.

A liquidator's approximate profit is

$$
\Pi = V_{\mathrm{sale}}-R-C_{\mathrm{gas}}-C_{\mathrm{finance}}-C_{\mathrm{slippage}}-C_{\mathrm{ordering}}.
$$

The liquidation bonus affects seized oracle value, while $V_{\mathrm{sale}}$ depends on real liquidity. Competition can transfer much of the apparent bonus to block builders through priority fees or private-orderflow payments. The borrower sees the configured penalty; the winning bot may retain far less. During congestion, gas rises at the same time volatility increases expected slippage. Small accounts become unprofitable, while large accounts can be difficult to unwind without moving the market.

Flash loans lower the inventory capital required for atomic repay-and-seize liquidations. They do not create end-market liquidity. The liquidator must still swap enough seized collateral to repay the flash loan within the transaction, or possess another hedge or repayment source. A large liquidation can therefore revert at its minimum-output constraint, clear only partially, or dump collateral into an automated market maker and transmit the move to other oracle and derivatives venues.

## From unhealthy account to bad debt

Liquidatable is not the same as insolvent. At the eligibility threshold, raw collateral normally exceeds debt because risk haircuts create an intervention buffer. **Bad debt** emerges when the recoverable value of collateral is less than debt and resolution costs. This can happen through price gaps between blocks, stale oracle updates, unavailable liquidators, chain or sequencer outages, collateral depegs, bridge failures, thin liquidity, or protocol bugs.

A useful stress inequality is

$$
\sum_i q_iP_i(1-h_i)-C_{\mathrm{execution}} \geq D,
$$

where $h_i$ represents the total stress haircut from market impact, representation discount, delay, and failed redemption. The protocol's liquidation threshold is safe only if it leaves enough buffer for plausible $h_i$ before execution completes. Historical volatility alone is insufficient because liquidity and correlations worsen endogenously during stress.

Loss waterfalls vary. Protocol reserves may absorb deficits. A safety module may be slashed or governance tokens sold or minted. Future protocol revenue may recapitalize a shortfall. Suppliers can face reduced claims, withdrawal constraints, or explicit socialization in some designs. Emergency governance may freeze markets or change parameters, redistributing losses through delay. Calling a loss “covered” should identify the paying asset, valuation time, claimant priority, and whether coverage is funded now or promised from future revenue.

## How liquidation becomes a market event

One account's liquidation is credit maintenance; many correlated accounts can become forced flow. Falling collateral prices push health factors below one. Liquidators seize collateral and sell or hedge it. Those sales lower executable prices and may propagate to oracle venues. New accounts become eligible, while congestion and competition raise resolution costs. The feedback loop connects onchain lending to [[Crypto liquidation cascades]]:

$$
\text{collateral shock}\rightarrow\text{eligibility}\rightarrow\text{seizure and sale}
\rightarrow\text{price impact}\rightarrow\text{more eligibility}.
$$

The loop is especially dangerous when many accounts use the same collateral against the same debt asset, thresholds cluster, collateral is also posted on derivatives venues, and liquidation routes converge on the same shallow DEX pools. It can be dampened by broad liquidity, conservative caps, staggered risk parameters, partial resolution, reserve inventory, or auctions that avoid immediate market orders. Each dampener has a cost: capital inefficiency, protocol price exposure, delayed recovery, or governance discretion.

## A verification checklist

Before describing a lending market as well protected, verify the deployed version and answer:

1. Which prices and timestamps enter health calculations, and what happens when a feed is stale?
2. Are borrow factors distinct from liquidation thresholds, and can governance changes affect existing accounts?
3. Is resolution repay-and-seize, protocol absorption, auction, or a hybrid?
4. What close factor, bonus, penalty, dust rule, and protocol fee applies to each collateral-debt pair?
5. Can liquidations execute during sequencer downtime, oracle pause, congestion, or market freeze?
6. Where can seized collateral actually be sold at stress size, and who bears inventory risk before sale?
7. What caps bound exposure to one collateral, borrower, oracle, bridge, or liquidity venue?
8. What is the exact bad-debt waterfall, and is its backstop liquid and legally or technically available?
9. Are keeper incentives profitable after gas and price impact for both large and small positions?
10. Which parameters are live on this chain now, rather than described in documentation for another version?

Event analysis should reconstruct transactions rather than rely only on dashboard totals. Record the oracle report, account balances immediately before eligibility, liquidation calls and reverts, debt repaid, collateral seized, realized swap prices, auction duration, protocol reserves, and residual debt. Separate the borrower's penalty from liquidator profit and the protocol's ultimate recovery. A large seized-collateral number is not automatically a protocol loss; a completed liquidation is not automatically full economic recovery.

## Why it matters

Liquidation is the mechanism that turns an onchain price feed and governance parameters into creditor protection. Lending yields can appear passive, but they depend on an active execution network willing to finance debt repayment and absorb collateral under stress. The relevant safety object is not collateralization at deposit time. It is the entire path from price observation through eligibility, transaction inclusion, collateral conversion, and final loss allocation.

The design also determines who receives upside and who absorbs tail risk. Static bonuses pay liquidators and charge borrowers. Auctions trade speed for price discovery. Protocol absorption makes reserves an inventory warehouse. Close factors limit immediate seizure but may delay cleanup. Backstops protect suppliers only to the extent that they are adequately sized, liquid, and callable when correlations rise.

For a borrower, liquidation risk cannot be summarized by a universal “safe” health factor. For a lender or governance voter, a high collateral ratio cannot substitute for executable depth and sound oracles. For market researchers, liquidation data must be interpreted as state-machine outputs tied to a particular version, chain, and parameter set. This article explains mechanics and risks; it is not financial advice, a liquidation-bot guide, or a recommendation to borrow, lend, or trade.

## Sources

- [Aave, “Health Factor & Liquidations”](https://aave.com/help/borrowing/liquidations) — primary current explanation of health factor, eligibility, close-factor conditions, dust rules, permissionless execution, and liquidation bonus; accessed 2026-07-10.
- [Aave Labs, “Overview of Aave V4's Liquidation Engine”](https://governance.aave.com/t/overview-of-aave-v4-s-liquidation-engine/23531) — primary development comparison of V3 fixed close-factor/static-bonus mechanics and proposed V4 changes; accessed 2026-07-10.
- [Compound III Docs, “Liquidation”](https://docs.compound.finance/liquidation/) — primary specification of liquidation collateral factors, `absorb`, protocol reserve accounting, `buyCollateral`, and oracle-derived ask discount; accessed 2026-07-10.
- [Compound III Docs, “Governance”](https://docs.compound.finance/governance/) — primary definitions of borrow collateral factor, liquidation collateral factor, and liquidation factor; accessed 2026-07-10.
- [Maker Protocol Technical Docs, “Liquidation 2.0 Module”](https://docs.makerdao.com/smart-contract-modules/dog-and-clipper-detailed-documentation) — primary technical account of `Dog`, `Clipper`, auction initiation, descending prices, circuit breakers, and debt accounting; accessed 2026-07-10.
- [Euler Docs, “Liquidation”](https://docs.euler.finance/user-guide/liquidation/) — primary description of health scoring, permissionless liquidation, debt repayment, collateral seizure, and health-dependent liquidation discounts; accessed 2026-07-10.
- [Chaos Labs, “Optimal Liquidation Parameters, Conditional Value at Risk, and Equity Characterizations in Aave v3 and v4”](https://governance.aave.com/t/optimal-liquidation-parameters-conditional-value-at-risk-and-equity-characterizations-in-aave-v3-and-v4/24294) — risk-provider analysis of threshold, bonus, close-factor mathematics, and protocol-equity tradeoffs; accessed 2026-07-10.

## Open questions

- How much of gross liquidation bonus is retained by liquidators after builder payments, failed transactions, gas, financing, and hedge slippage on each chain?
- Which protocols publish enough account, oracle, and realized-sale data to measure the interval from eligibility to complete economic recovery?
- When do partial close factors reduce borrower loss, and when do they create repeated liquidations or uneconomic residual positions?
- How should liquidation thresholds incorporate liquidity that disappears jointly across DEXs, bridges, and centralized venues?
- Which backstops remain liquid under a common collateral shock, rather than merely appearing large at calm-market oracle prices?
- How should cross-chain lending markets treat periods when users, liquidators, or price feeds have asymmetric access after sequencer recovery?
