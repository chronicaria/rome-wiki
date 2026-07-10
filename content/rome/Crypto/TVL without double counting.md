---
title: TVL without double counting
created: 2026-07-09
source: llm
status: seed
tags: [crypto, defi, quantitative-research, market-structure]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-10-09
---

Total value locked is a balance-sheet inventory measured at market prices, not revenue, unique capital, or value captured by a token; a useful TVL analysis reconstructs the underlying claims and removes recursive representations before comparing protocols or chains.

Up: [[Crypto]]

Related: [[From protocol fees to tokenholder value]] · [[Liquid staking tokens are claims on validators]] · [[Wrapped assets and duplicate crypto exposure]] · [[Crypto float market cap and fully diluted value]]

## The narrow meaning of TVL

The least misleading definition of protocol TVL is the market value of assets controlled by or assigned to a protocol's contracts at a specified time. If contract $c$ holds quantity $q_{i,c,t}$ of asset $i$, and a defensible price is $p_{i,t}$, a simple gross measure is

$$
TVL_t^{gross}=\sum_c\sum_i q_{i,c,t}p_{i,t}.
$$

That expression is an inventory identity. It does not say the protocol owns the assets, earns a return on them, could liquidate them without moving prices, or passes any cash flow to its tokenholders. Depositors usually retain an economic claim. Some assets are collateral for liabilities; others are liquidity-provider inventory, staked principal, or tokens representing claims already counted elsewhere.

DefiLlama's published glossary similarly defines protocol TVL as coins held in protocol smart contracts and chain TVL as the sum of tracked protocol TVLs. It separately defines fees, protocol revenue, tokenholder revenue, active loans, and net USD inflows. Those separations matter. A dashboard can be internally consistent and still answer a much narrower question than an investor assumes.

TVL is therefore most useful as a map of capital assigned to a mechanism. It can help measure scale, collateral available to absorb losses, or liquidity committed under a stated convention. It becomes dangerous when relabeled as sales, deposits equivalent to bank funding, unique user capital, or protocol valuation.

## Four layers that must not be collapsed

A defensible analysis keeps four ledgers distinct.

1. **Underlying assets.** Native ETH, BTC, fiat reserves, Treasury securities, or other economically primitive collateral for the analysis.
2. **Protocol claims.** LP tokens, lending receipt tokens, liquid-staking tokens, stablecoins, and vault shares that represent rights against underlying assets or protocol balance sheets.
3. **Deployment locations.** Contracts where an underlying or claim token is currently deposited, paired, pledged, or escrowed.
4. **Liabilities and encumbrances.** Borrowed assets, issued stablecoins, withdrawal obligations, senior claims, and other amounts that constrain who can recover what.

Onchain composability makes one unit appear at several layers. Alice stakes 10 ETH and receives stETH; she wraps it into wstETH; she deposits wstETH into a lending market; she borrows a stablecoin; and she deposits that stablecoin into a pool. Several protocols now display balances connected to the original 10 ETH. That is real activity and real integration, but not several independent units of outside capital.

The correct response is not to delete every representation. Each deployment may be relevant to its own protocol's security or liquidity. The response is to label the unit of analysis. Gross protocol TVL can count the locally controlled claim. A system-wide measure of unique backing should traverse claims toward economic roots and count the underlying exposure once.

## Price effects are not flows

TVL in dollars changes for two reasons:

$$
\Delta TVL \approx \sum_i p_{i,t-1}\Delta q_i + \sum_i q_{i,t-1}\Delta p_i + \sum_i \Delta q_i\Delta p_i.
$$

The first term approximates quantity change, the second repricing, and the final interaction matters during large moves. If ETH rises 20% while contract balances are unchanged, an ETH protocol's dollar TVL rises roughly 20% without attracting new ETH. If users add ETH during a falling market, dollar TVL can decline despite positive deposits.

This is why DefiLlama publishes a separate USD-inflows concept: daily token-balance changes valued at prices, intended to isolate net asset movement from repricing. Even that is not automatically new outside capital. A transfer from one tracked protocol to another produces an outflow and an inflow inside the same ecosystem. Minting a claim against collateral may create a new balance without adding net external wealth. Analysts should show native-unit quantities, price contribution, and net transfers alongside dollar TVL.

## Lending markets: deposits, loans, and loops

In a lending protocol, deposited collateral remains in contracts or accounting records while borrowed assets leave for another address or application. Counting both deposits and active loans as additive TVL can count the same funding twice. DefiLlama says it excludes active loans from default TVL specifically because looping strategies can inflate the measure.

Consider a simplified market. A user deposits $100 of ETH, borrows $60 of USDC already supplied by other lenders, redeposits that USDC, borrows $40 of another supplied asset, and repeats. Gross supplied balances credited across the market become $160 or more, even though the looping user contributed only $100 from outside the sequence. It would be wrong to infer that the whole system has only $100 of external capital: the borrowed USDC and other assets were originally funded by lenders and must remain in a system-wide reconciliation. The narrower point is that redepositing borrowed balances increases gross supply without adding an equal amount of new external wealth. Those additional deposits are economically meaningful—they affect utilization, liquidations, and lender exposure—but they are internally financed claims within the loop.

Three measures answer different questions:

- **Gross supplied assets** measures balances credited to suppliers.
- **Net supplied liquidity** subtracts outstanding borrowing from supplied balances by asset, with care for assets that cannot be netted across risk pools.
- **Unique external collateral** traces funding sources and attempts to remove recursively borrowed deposits.

None is universally correct. A lender studying withdrawal capacity wants available liquidity and utilization. A risk analyst wants collateral, debt, and liquidation parameters. A researcher comparing organic adoption wants external deposits adjusted for loops and incentives. Publishing one TVL number without the balance-sheet decomposition obscures all three.

The Maker protocol's `Vat` documentation illustrates why contract-level accounting beats labels. It separately records collateral (`ink`), normalized debt (`art`), the debt multiplier (`rate`), system debt, and collateral-specific ceilings and safety prices. Locked collateral and DAI issued against it are not two independent pools of value. They are assets and liabilities joined by protocol rules.

## Liquid staking and wrappers

Liquid-staking tokens create a common cross-protocol duplicate. Lido documents stETH as a share of pooled ETH and wstETH as a wrapper around that share. A user's wstETH balance does not rebase, but its exchange value in stETH changes as staking rewards accumulate. Converting stETH to wstETH does not introduce new ETH; it changes the representation.

If Lido counts the ETH assigned to validators, a lending market counts deposited wstETH, and a DEX counts wstETH in a liquidity pool, summing all three protocol TVLs overstates unique underlying capital. Yet removing wstETH from the lending market's local TVL would understate the collateral governed by that market's liquidation rules. Both observations can be true.

A clear report therefore shows:

- local gross TVL at each protocol;
- representation-adjusted TVL for the combined system;
- the economic parent of each wrapper or receipt;
- which layer bears validator, wrapper, oracle, liquidity, and smart-contract risk; and
- whether the claim is redeemable, merely tradable, or subject to a queue.

This claim graph should not assume a perfect one-for-one relationship. Rebasing tokens can suffer penalties; wrappers add contract risk; liquid markets can trade away from redemption value; and withdrawal queues impose time and execution uncertainty. Deduplication removes repeated notional, not distinct failure modes.

## LP tokens and pool accounting

An automated-market-maker pool contains reserves and issues LP shares against them. Counting reserve assets at their marked values is a reasonable local inventory measure. Counting both those reserves and the LP tokens as additional value inside the same scope is usually duplication: LP tokens are claims on the reserves.

When LP tokens are deposited in a farm, the farm's local contracts control the claim token while the AMM controls the underlying reserves. A naive chain-wide sum may count both. An adjusted system measure should look through the LP share to its proportional reserves, then ensure those reserves are not counted twice.

Pool composition also changes endogenously. In a constant-product pool, arbitrage changes reserve quantities as relative prices move. Dollar TVL can rise because both assets appreciate, fall because liquidity providers withdraw, or change composition because traders arbitrage the curve. TVL alone cannot separate these causes. Useful complements include net liquidity additions, trading volume, fees paid, fee yield net of incentives, price impact at standardized order sizes, and LP performance relative to holding the assets.

## Bridges and multichain representations

A bridge may escrow an asset on a source chain and issue a representation on a destination chain. Adding source escrow and destination wrapped supply counts one economic position twice if the question is unique backing. The destination representation still matters locally because it supplies trading and collateral capacity and adds bridge, validator, relayer, or admin-key risk.

The adjustment depends on bridge design. Lock-and-mint systems invite a direct asset-to-liability reconciliation. Burn-and-mint systems move canonical supply rather than create a separately escrowed claim. Liquidity-network bridges may use inventory and rebalancing instead of a fixed wrapped liability. Native issuer deployments can share an issuer but have separate chain supplies. Labels such as “bridged” or identical tickers are insufficient; the registry must identify contracts, chain, issuer, mint authority, and redemption path.

For each representation, test

$$
\text{issued claims} \leq \text{eligible backing after fees, losses, and pending withdrawals},
$$

using the protocol's actual units and rules. A nominal match does not prove recoverability if backing is frozen, rehypothecated, mispriced, or controlled by a compromised signer.

## Stablecoins and recursive collateral

Stablecoins can be external reserve claims, crypto-collateralized liabilities, algorithmic mechanisms, or hybrids. Treating their circulating supply as fresh TVL on every chain and also counting the reserves or crypto collateral can duplicate the same economic backing. Depositing that stablecoin into a lending market or pool creates another deployment layer.

The right treatment depends on the question. For chain liquidity, stablecoin balances available on that chain are relevant. For unique crypto collateral, an overcollateralized stablecoin's backing and issued liability must be reconciled. For reserve-backed stablecoins, offchain reserves may sit outside protocol TVL even though the token is a liability against them. For systemic risk, gross interconnected claims are important because they reveal channels of contagion even when net economic capital is smaller.

This distinction explains why gross and net views should coexist. Gross claims measure the surface exposed to operational and liquidation shocks. Net or look-through backing estimates the capital at the bottom of the stack. A highly recursive system may have modest unique backing but very large gross claims and therefore complex unwind risk.

## A reproducible adjustment method

An analyst can turn TVL from a slogan into an auditable worksheet.

### 1. Fix scope and timestamp

State the protocols, chains, contracts, block heights or timestamps, price sources, and whether the objective is local gross inventory, chain activity, unique external capital, or loss-absorbing backing. Never compare measures with different scope under one label.

### 2. Inventory token balances

Record token contract, chain, raw units, decimals, balance source, custody/control relationship, and market price. Separate wallet transfers from accounting balances for systems such as lending markets or staked validators where value may not remain in one contract.

### 3. Build the claim graph

Map each receipt, wrapper, LP share, bridged token, or stablecoin to its economic parent and redemption rule. Edges should record conversion ratios, oracle dependencies, queues, fees, seniority, and control keys. Unknown relationships remain flagged rather than silently treated as independent assets.

### 4. Classify liabilities and encumbrances

Record borrowing, issued claims, pending withdrawals, protocol debt, and collateral pledged elsewhere. Do not subtract liabilities indiscriminately across isolated pools or entities; netting is valid only where claims are legally and mechanically offsettable.

### 5. Produce multiple views

Publish at least local gross TVL, look-through unique backing, gross claims, outstanding debt, and liquid unencumbered assets. Show a bridge from provider TVL to adjusted values, with each exclusion or look-through rule visible.

### 6. Decompose changes

Attribute period changes to deposits/withdrawals, borrowing/repayment, issuance/redemption, staking rewards or penalties, price moves, migrations, exploits, and methodology changes. Preserve the prior methodology when definitions change; do not splice incompatible series.

### 7. Reconcile against protocol invariants

Use contract documentation and observable state to test supply against backing, collateral against debt, and LP shares against reserves. Investigate unexplained residuals. A dashboard match is a starting point, not independent verification.

## Comparing protocols responsibly

Ratios such as fees/TVL or revenue/TVL can describe capital intensity, but only when numerator and denominator share a compatible scope and time basis. Annualized fees divided by one day's peak TVL is not the same as trailing fees divided by average TVL. Incentive-funded activity may raise deposits without durable demand. A protocol with low TVL can generate high volume by turning inventory over; another may hold passive collateral with little fee activity.

TVL also says nothing by itself about tokenholder value. The governance token may have no claim on deposits or fees. Revenue can flow to liquidity providers, validators, an operating company, a treasury, or active stakers rather than passive holders. [[From protocol fees to tokenholder value]] traces that separate path.

Nor is higher TVL automatically safer. Concentrated collateral, thin liquidation venues, unstable oracles, privileged upgrades, correlated wrappers, and withdrawal queues can make a large system fragile. A good comparison pairs adjusted TVL with asset concentration, leverage, liquid depth, admin controls, historical losses, revenue quality, and the identity of the residual risk bearer.

## What TVL can honestly establish

With a disclosed convention, TVL can establish how much marked inventory a protocol governs, how that inventory is composed, and how scale changes over time. With claim mapping, it can also illuminate leverage, dependency, and contagion. It cannot alone establish organic adoption, profitability, solvency, decentralization, safety, or fair token value.

The central discipline is simple: count locations when studying operational exposure, count economic roots when studying unique capital, and never present one as the other. Composability makes both views necessary.

## Sources

- [DefiLlama, “Data Definitions”](https://defillama.com/data-definitions) — TVL, active-loan exclusion, fees, revenue, and USD-inflow definitions; accessed 2026-07-09.
- [Maker Protocol technical documentation, “Vat — Detailed Documentation”](https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation) — collateral and debt accounting invariants; accessed 2026-07-09.
- [Lido documentation, “Lido tokens integration guide”](https://docs.lido.fi/guides/lido-tokens-integration-guide/) — stETH/wstETH claim and wrapper mechanics; accessed 2026-07-09.
- [Lido documentation, “Lido contract”](https://docs.lido.fi/contracts/lido/) — pooled Ether, shares, oracle reports, and withdrawals; accessed 2026-07-09.
- [Lido documentation, “Aave integration specification”](https://docs.lido.fi/integrations/aave/specification/) — use of stETH as collateral and receipt-token accounting; accessed 2026-07-09.

## Open questions

- Which public datasets expose transaction-level funding provenance well enough to estimate recursively borrowed deposits without address heuristics?
- How should unique-capital measures allocate shared backing when one claim is deployed across several chains and risk domains?
- Which standardized liquidity haircut would make look-through TVL more informative during stressed redemptions?
