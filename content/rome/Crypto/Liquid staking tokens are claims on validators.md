---
title: Liquid staking tokens are claims on validators
created: 2026-07-09
source: llm
status: seed
as_of: 2026-07-09
tags: [crypto, staking, ethereum, liquid-staking, risk]
---

A liquid staking token is not freely available base-layer coin with yield attached; it is a transferable claim on a pool of validator assets, rewards, penalties, withdrawal capacity, and protocol-controlled accounting.

Up: [[Crypto]]

## Place in the map

This note sits between [[Token emissions and real yield]], which separates staking compensation from free surplus, and [[Wrapped assets and duplicate crypto exposure]], which prevents economically related instruments from being counted as independent assets. It uses Lido's stETH and wstETH as the clearest Ethereum case, not as a product recommendation. The same questions apply to rETH, cbETH, sfrxETH, JitoSOL, mSOL, and other liquid staking tokens, but their accounting, operator selection, fees, governance, and redemption rules are not interchangeable.

## The asset is a layered claim

Native staking turns a base asset into consensus collateral. On Ethereum, a validator balance backs duties such as proposing blocks and attesting to the chain. Correct performance earns consensus rewards and potentially execution-layer priority fees and MEV; inactivity incurs penalties; provably conflicting behavior can be slashed and forcibly exited. The validator's balance is therefore not a bank deposit. It is productive but explicitly loss-bearing capital inside the consensus protocol.

A pooled liquid-staking protocol inserts several layers between a depositor and that validator balance:

1. a user transfers ETH to a protocol contract;
2. the protocol assigns pooled ETH to one or more node operators and validator keys;
3. withdrawal credentials or vault contracts direct principal and rewards back into protocol-controlled accounting;
4. an oracle or onchain accounting process measures validator balances, rewards, penalties, and withdrawals;
5. the protocol issues a fungible token representing a fractional interest in the pool;
6. a separate withdrawal process burns or locks that token and eventually pays ETH; and
7. secondary markets let holders sell the token to someone else before protocol redemption completes.

The holder normally does **not** own a named validator or its keys. The holder owns units in a commingled accounting system. Lido's core contract, for example, describes stETH as a rebasing ERC-20 representing pooled ether. It accepts deposits, mints shares, routes buffered ETH through a staking router, accounts for consensus and execution-layer proceeds, applies fees, and processes withdrawals. The claim's value depends on total pooled ether relative to total outstanding shares, not on a segregated validator assigned to each depositor. Since Ethereum's May 2025 Pectra upgrade, legacy Type 1 validators remain capped at a 32 ETH effective balance, while opt-in Type 2 compounding validators can earn on effective balances from 32 to 2,048 ETH.

This makes the clean mental model:

$$
\text{LST claim value} \approx
\frac{\text{staked principal + accrued rewards - penalties - fees}}{\text{outstanding claim units}}
$$

The approximation matters. Report timing, unbonding queues, reserves, rounding, wrapper exchange rates, and protocol-specific loss allocation can all affect what one holder can realize at a particular moment.

## Rewards arrive through an accounting system

An LST's apparent yield is the change in its claim on the pool, not necessarily cash paid into the holder's wallet. The pool may receive consensus rewards, automatically swept validator balances, transaction priority fees, and MEV. It may lose value through inactivity penalties or slashing. It then deducts any protocol and operator fees under its own rules.

For Lido, an accounting oracle usually reports pooled validator balances and related execution-layer values, and the protocol uses that report to update total pooled ether, distribute fees, and process withdrawals. The documentation describes quorum among independent oracle daemons and sanity checks on reported changes. These controls reduce particular reporting hazards; they do not turn the token into native ETH or remove oracle and governance dependencies.

The economically relevant return is therefore not the displayed staking APR alone:

$$
R_{\text{holder}} = R_{\text{validators}} + R_{\text{execution}}
- F_{\text{operators/protocol}} - L_{\text{penalties}}
+ \Delta B - C_{\text{exit}} - C_{\text{contracts}}.
$$

Here $\Delta B$ is the change in the token's secondary-market basis against its redeemable value. Exit costs include queue time, gas, and any foregone rewards while a withdrawal is pending. Contract cost is not a known periodic fee but an uncertain loss distribution from implementation, oracle, bridge, governance, or integration failures. A quoted APR normally leaves several of these terms out.

## Rebasing tokens and share-price tokens express the same economics differently

There are two common accounting presentations.

### Rebasing balance: stETH

stETH exposes a token balance that normally changes after an oracle report. Underneath, Lido tracks invariant shares. If the pool's accounted ether rises while the number of shares is unchanged, each share converts into more stETH and holders see larger stETH balances. If accounted ether falls because penalties exceed rewards or losses are recognized, the same mechanism can produce a negative rebase.

In simplified form:

$$
\text{stETH balance}_i =
\text{shares}_i \times
\frac{\text{total pooled ETH}}{\text{total shares}}.
$$

The balance shown by an ERC-20 interface is thus a presentation of shares at the current conversion rate. Lido's integration guide warns that stETH is not strictly conventional ERC-20 behavior: balances change at rebase without ordinary transfer events, and integer division can leave tiny rounding remnants. Integrators that store an assumed fixed token amount may misaccount rewards; the documentation recommends share-based bookkeeping.

### Fixed balance, rising exchange rate: wstETH and rETH-style designs

wstETH wraps stETH shares into a non-rebasing ERC-20. The holder's number of wstETH units remains fixed unless tokens are transferred, minted, or burned; the amount of stETH obtainable per wstETH changes instead. Wrapping locks stETH and mints wstETH according to the share conversion. Unwrapping burns wstETH and releases the corresponding stETH.

This is not a second independent staking position. stETH and wstETH are two interfaces to the same underlying Lido pool and share accounting. One changes wallet balance; the other changes exchange value per token. A protocol that reports holdings across both without consolidating their common parent double-counts exposure.

Other systems can use an exchange-rate token directly. The same economic test applies: identify the underlying pool, the claim denominator, how rewards and losses alter the conversion rate, and who can change those rules. Token symbols and nominal unit prices reveal none of this.

## Withdrawal is a process, not an instantaneous peg

Ethereum permits validator withdrawals, but a liquid-staking holder does not directly exercise a native validator withdrawal credential. Ethereum's exit path itself is asynchronous: an exit is triggered, the validator waits through a rate-limited exit queue, becomes withdrawable after a protocol-defined delay, and is then paid to its execution-layer withdrawal address. Pectra's EIP-7002 added execution-layer-triggered exits, so an eligible withdrawal-credential address can force an exit without the validator signing key. Queue time still expands when many validators want to leave.

The LST protocol adds its own layer. Lido's withdrawal contract accepts stETH or wstETH requests, records the corresponding shares, and issues an `unstETH` NFT representing the queued right. Requests are finalized FIFO when the protocol can determine the redemption rate and provide enough ETH. Only then can the NFT holder claim reserved ETH. Locked stETH does not continue earning rewards for the requester while it waits; the documentation says rewards acquired while tokens are in the queue are burned at finalization and thereby accrue to remaining holders.

Redemption is also not an unconditional promise of one ETH for every token under every state. Lido says that stETH can usually be redeemed at 1:1 after withdrawals, while noting rare cases in which that ratio is not preserved. Its withdrawal contract caps the payout by the stETH amount submitted and finalizes using a maximum share rate. If the pool suffers a loss, recognizing a lower share value is part of what makes the token a loss-bearing claim rather than a guaranteed par liability.

There are therefore two exit paths:

- **Protocol exit:** submit the LST, wait for protocol and validator liquidity, then claim base-layer assets under the protocol's accounting rules.
- **Market exit:** sell the LST immediately to another buyer at the price available in a DEX or order book.

Only the second is instant, and its price is not guaranteed.

## “Depeg” is really a market basis

Calling an LST “pegged” to its underlying can hide the mechanism. stETH is a claim whose reference value is derived from pooled ETH per share, while its market price is whatever buyers will pay now. Arbitrage can connect those values: buy discounted stETH, redeem later, and earn the spread. But arbitrage capital must tolerate uncertain waiting time, contract risk, validator losses, and changing queue conditions. It is not infinite.

A discount can widen when:

- holders demand immediate ETH faster than market makers can supply it;
- available LST/ETH pool depth falls or becomes one-sided;
- leveraged borrowers approach liquidation and become forced sellers;
- expected validator exit time increases;
- traders fear a contract, oracle, operator, governance, bridge, or slashing loss;
- the protocol pauses part of the redemption path; or
- uncertainty makes the eventual redemption value harder to estimate.

The 2022 stETH discount is useful evidence that related value is not identical liquidity. IOSCO's DeFi policy report cites stETH's deviation from ETH during that liquidity crisis. Scharnowski and Jahanshahloo's independent empirical study treats LST/underlying differences as a basis and finds evidence that liquidity, investor fear, and attention help explain it. A separate study of leveraged staking shows why the basis can become endogenous: when stETH-backed borrowing approaches liquidation thresholds, deleveraging can create more stETH selling and deepen the discount.

After native withdrawals, a protocol redemption route can anchor the long-run basis more tightly than before. It cannot eliminate a short-run discount, because redemption still consumes time and bears state-contingent risk. Conversely, an LST may trade at a premium when immediate staking access, DeFi demand, or temporary entry constraints are valuable. “One LST equals one coin” is an accounting shorthand, not a law of market prices.

## Slashing and operator performance pass through the pool

Ethereum distinguishes ordinary inactivity penalties from slashing for provable consensus offenses such as contradictory attestations. Slashed validators lose stake and are forced to exit; the penalty grows when correlated validators are slashed together. That correlation feature is important for pooled products. Diversifying across operators can reduce idiosyncratic mistakes, but shared client software, infrastructure, key-management procedures, or coordinated misconduct can produce common losses.

An LST protocol must decide how validator losses reach tokenholders. Possible mechanisms include a lower rebase, a reduced exchange rate, reserve or insurance coverage, operator bond absorption, socialization across all holders, or some sequence of these. Coverage is not the same as eliminating risk: its asset quality, capacity, exclusions, governance discretion, and payout trigger all matter.

The diligence questions are concrete:

- Who chooses and removes node operators?
- Who holds validator signing keys and withdrawal credentials?
- Are operator losses isolated, bonded, or socialized?
- Which client, cloud, geography, and relay dependencies are correlated?
- What loss can occur before a circuit breaker or oracle sanity check reacts?
- Can governance decide whether a reserve covers a loss?

“Many validators” is not by itself diversification. Ten thousand validators operated with one failure mode can be less robust than a smaller set with truly independent keys, clients, infrastructure, and control.

## Governance and administration are part of the claim

The smart contracts do not merely custody a static basket. They route deposits, select staking modules, accept oracle reports, finalize withdrawals, collect fees, and may be upgradeable or pausable. Lido's published architecture includes a staking router, accounting oracle, oracle sanity checker, withdrawal queue, validator-exit oracle, rewards vaults, a protocol locator, and governance-controlled roles. Its locator is upgradeable through a proxy; the withdrawal queue exposes granular roles for finalization, pausing, resuming, and oracle data.

That creates a control map that should be audited alongside the collateral map:

- **Governance:** who can upgrade contracts, change modules, fees, operator policies, or role holders?
- **Oracle quorum:** who reports validator balances and withdrawal decisions, and what happens if they disagree or stop?
- **Emergency powers:** who can pause deposits or withdrawals, and under what public procedure?
- **Module operators:** who runs validators, which entity controls the withdrawal credential, and who can force exits through Pectra-era execution-layer requests?
- **Treasury and fee recipients:** which part of gross rewards is minted or routed away from ordinary holders?

A DAO label does not answer these questions. Voting concentration, delegation, timelocks, multisig thresholds, proxy administration, and emergency committees determine the practical control surface. Nor does an immutable wrapper neutralize an upgradeable or governed core: wstETH inherits the economic and accounting decisions of stETH even if its own wrap/unwrap function is mechanically simple.

## Wrappers, bridges, and DeFi receipts duplicate rather than erase exposure

One validator pool can appear in a portfolio as stETH, wstETH, bridged wstETH, an LP share containing wstETH, a lending deposit receipt backed by wstETH, and a restaking receipt whose collateral is wstETH. These are distinct contracts and may deserve separate identity records, but they are not six unrelated return sources.

Each layer adds rights and failure modes:

| Instrument | Immediate claim | Added dependency |
|---|---|---|
| stETH | rebasing share of Lido-pooled ETH | core accounting, oracle, operators, withdrawal queue |
| wstETH | fixed-unit wrapper around stETH shares | wrapper conversion plus all stETH dependencies |
| bridged wstETH | remote-chain representation | bridge validators, mint/burn or lock/unlock, destination contract |
| lending receipt | claim on deposited wstETH | lending solvency, oracle, liquidation, utilization liquidity |
| LP token | share of a pool containing an LST | AMM curve, counterpart asset, adverse flow, pool contract |
| restaking receipt | claim on LST exposed to added services | restaking rules, operator faults, extra slashing or loss conditions |

Risk should be aggregated by economic parent before it is decomposed by wrapper. If a lending market and an LP both contain wstETH, a failure in Lido accounting can hit both simultaneously. If the bridge representation breaks while canonical wstETH remains sound, the remote wrapper can fail alone. This parent-child map is more useful than grouping everything under “ETH ecosystem.”

Wrappers also change operational compatibility. wstETH exists because many DeFi applications cannot safely handle rebasing balances. The wrapper solves that interface problem; it does not create extra backing. Likewise, a lending receipt may make an LST composable and interest-bearing, but the incremental interest comes with borrower and liquidation exposure. Composability stacks claims faster than it creates independent collateral.

## A practical reading order

Before treating an LST as cash-like ETH, read it in this order:

1. **Claim unit:** rebasing balance, fixed share, exchange-rate token, or wrapper?
2. **Collateral:** which validator balances, buffers, reserves, and receivables support it?
3. **Cash-flow waterfall:** which rewards enter, which fees leave, and how are penalties allocated?
4. **Redemption:** who can request it, what is burned, which queues intervene, and when does yield stop?
5. **Market liquidity:** where can it be sold now, at what depth, and who becomes a forced seller under stress?
6. **Control:** upgrades, oracles, pauses, operator admission, emergency committees, and treasury rights.
7. **Derived forms:** wrappers, bridges, LP tokens, lending receipts, and restaking layers that share the same parent.

The conclusion is deliberately modest. Liquid staking can make validator exposure transferable and composable, and pooled operation can lower the capital and operational threshold for staking. The price of that convenience is a new bundle of accounting, liquidity, governance, smart-contract, and correlated-operator risks. An LST is best understood neither as “just ETH” nor as an unrelated altcoin, but as a structured claim whose quality depends on the validators underneath and the machinery between those validators and the holder.

## Sources

- [Ethereum.org, “Staking withdrawals”](https://ethereum.org/staking/withdrawals/) — current primary overview of Type 1 and Type 2 credentials, partial and full withdrawals, the exit queue, and Pectra-era execution-layer requests.
- [Ethereum.org, “Proof-of-stake rewards and penalties”](https://ethereum.org/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/) — primary explanation of validator duties, inactivity penalties, slashable offenses, forced exits, and correlation penalties.
- [Lido Docs, “Lido” core contract](https://docs.lido.fi/contracts/lido/) — pooled accounting, oracle reports, fees, staking router, rewards vaults, and withdrawals.
- [Lido Docs, “Lido tokens integration guide”](https://docs.lido.fi/guides/lido-tokens-integration-guide/) — stETH shares and rebases, wstETH wrapping, rounding, and integration behavior.
- [Lido Docs, “WithdrawalQueueERC721”](https://docs.lido.fi/contracts/withdrawal-queue-erc721/) — FIFO requests, `unstETH`, finalization roles, reward treatment, and claims.
- [Lido Docs, “Accounting oracle”](https://docs.lido.fi/guides/oracle-spec/accounting-oracle/) — oracle balance reports, withdrawal finalization, FIFO processing, and redemption-rate calculation.
- [Lido Docs, “LidoLocator”](https://docs.lido.fi/contracts/lido-locator/) — core component registry and proxy upgradability.
- [Lido Docs, “ValidatorsExitBusOracle”](https://docs.lido.fi/contracts/validators-exit-bus-oracle/) — oracle-to-operator validator exit signaling.
- [IOSCO, “Policy Recommendations for Decentralized Finance”](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD744.pdf) — independent policy discussion of DeFi governance and the 2022 stETH liquidity deviation.
- [Scharnowski and Jahanshahloo, “The Economics of Liquid Staking Derivatives: Basis Determinants and Price Discovery”](https://onlinelibrary.wiley.com/doi/full/10.1002/fut.22556) — independent empirical analysis of LST basis, liquidity, fear, and price discovery.
- [Heimbach et al., “SoK: Liquid Staking Tokens and Emerging Trends in Restaking”](https://arxiv.org/abs/2404.00644) — independent systematization of LST designs and their extension into restaking.
- [Xu et al., “Leverage Staking with Liquid Staking Derivatives: Opportunities and Risks”](https://eprint.iacr.org/2023/1842.pdf) — formal and empirical analysis of leveraged stETH positions and liquidation feedback.

## Open questions

- How should an exposure registry quantify correlated operator, client, cloud, oracle, and governance risk instead of merely counting validators?
- Which LST protocols legally frame the holder's claim most clearly if contracts work technically but a governance or custody dispute occurs?
- How large must protocol-owned or external market liquidity be relative to likely leveraged liquidations to keep a basis shock from becoming self-reinforcing?
- Under what precise loss conditions do current LST reserve, bond, or insurance mechanisms protect holders, and who has discretion over coverage?
- How should bridged and restaked descendants be consolidated without hiding wrapper-specific failure modes?
