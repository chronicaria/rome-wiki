---
title: Blockchain fee revenue and economic security budgets
created: 2026-07-10
source: llm
status: seed
tags: [crypto, blockchain, fees, security, token-economics]
---
A blockchain’s security budget is the compensation available to the parties who make and finalize valid history, not its gross fees, token burn, MEV, or tokenholder revenue viewed in isolation.

Up: [[Crypto]]

Related: [[Validator economics and staking yield]] · [[MEV and order-flow auctions]] · [[From protocol fees to tokenholder value]] · [[Token emissions and real yield]]

## The accounting question

Public blockchains must induce somebody to order transactions, check validity, extend the canonical history, remain available, and—under proof of stake—place slashable capital behind correct behavior. The resources used are real: hardware, bandwidth, engineering, custody and key management, capital, and exposure to penalties or volatile rewards. A protocol purchases those services with an **economic security budget**.

That budget is easy to obscure because several related quantities appear on dashboards:

- users pay base fees, priority fees, tips, or application charges;
- a protocol issues new native tokens to miners or validators;
- some fees are burned rather than transferred;
- block producers or specialized builders capture ordering value;
- validators incur operating and capital costs;
- tokenholders may be diluted, may receive staking rewards, or may have no enforceable claim at all.

These are different ledgers. Calling all of them “revenue” makes a chain with a large inflationary subsidy look fee-funded, makes a burn look like validator income, and turns value extracted from users into a legal or economic claim for passive holders that may not exist.

For an interval $t$, begin with a deliberately explicit decomposition:

$$
SB_t = I^{sec}_t + F^{sec}_t + M^{sec}_t + X^{sec}_t - P_t,
$$

where $SB_t$ is gross compensation made available to security providers, $I^{sec}_t$ is protocol issuance allocated to them, $F^{sec}_t$ is user-paid fee value routed to them, $M^{sec}_t$ is ordering value they retain or receive through builder bids, $X^{sec}_t$ is an external subsidy such as a treasury grant, and $P_t$ is penalties destroyed or redirected away from them. This is an accounting identity, not proof that the budget is sufficient, efficiently targeted, or costly to attack.

## Five ledgers that should not be collapsed

### 1. User fee expenditure

Gross transaction fees measure what users surrender under a protocol’s fee rules. The payer may pay the native asset, another token, or an application-specific charge. The fee may be quoted at submission but only paid on inclusion; failed transactions may still consume resources. A rollup user may pay an L2 execution fee whose components include an L1 data charge and an operator margin. Aggregating these without tracing destinations double counts activity and hides senior costs.

The correct first question is therefore not “how much fee revenue did the chain earn?” but “what did users pay, in which assets, under which rule, and where did each unit go?” A fee can be transferred to a validator, burned, retained by a sequencer, paid onward for data availability, rebated to a user, or sent to a treasury. Only the transferred portion funds the corresponding security provider directly.

### 2. Protocol issuance

Issuance creates units under the protocol’s monetary rule and directs some to miners, validators, delegators, a treasury, or other recipients. It can finance security when contemporaneous fees are low, but it is not external product revenue. Existing holders who do not receive the issuance bear dilution relative to recipients, subject to changes in participation and demand.

In proof of work, the block subsidy plus transaction fees commonly forms the miner’s protocol-visible gross reward. In proof of stake, issuance may be divided among proposers, attesters, delegators, or other roles, with missed duties and penalties modifying realization. The nominal number does not reveal the economic burden: rewards paid to almost every holder through staking differ from concentrated issuance to a small operating class, while locked, custodied, or legally constrained holders may be unable to participate.

Annualized issuance also should not be inferred from a single block. It can depend on total stake, uptime, participation, governance, or scheduled halvings. Native-token amounts should be reported separately from their market value because multiplying by a spot price introduces a volatile valuation assumption; it does not establish that providers could liquidate the entire reward without moving the market.

### 3. Fee burn

A burn destroys units or makes them permanently unspendable under the relevant supply definition. Ethereum’s EIP-1559 is the canonical example: the base fee is burned, while a priority fee compensates the miner or validator. The specification explicitly separates the two destinations. Burned base fees therefore are neither validator revenue nor treasury cash flow.

A burn can benefit remaining units mechanically by reducing supply relative to the counterfactual, but “fee burn” does not imply “net deflation.” Net native supply change over an interval is approximately

$$
\Delta S_t = I_t - B_t + A_t,
$$

where $I_t$ is all canonical issuance, $B_t$ is true destruction, and $A_t$ captures other authorized supply adjustments. If issuance exceeds burn, supply still grows. If a bridge or migration burns units before issuing equivalent claims elsewhere, consolidated economic exposure may not fall at all; see [[Cross-chain token supply accounting]].

Burn is also not a cash distribution. A passive holder receives no additional units or redemption right merely because other units disappear. Any capitalization effect depends on demand, expectations, substitutability, governance credibility, and whether future issuance can reverse the scarcity. Tokenholder capture must be argued through an actual mechanism, not assumed from the word “burn.”

### 4. MEV and ordering payments

Maximal extractable value is value obtainable through transaction inclusion, exclusion, or ordering. It can arise from arbitrage, liquidations, sandwiching, or other state-dependent opportunities. Gross MEV estimated from user outcomes is not automatically earned by the validator. Searchers may compete it away in gas or builder bids; builders retain a margin; relays mediate delivery; proposers receive bids; applications or order-flow auctions may rebate some value to users.

For the security ledger, include only the portion actually captured by security providers. Under proposer-builder separation, a builder payment to a proposer can supplement protocol rewards, but the entire arbitrage profit observed upstream should not be added again. Private order flow and offchain payments make measurement incomplete. A chain can have high extractable value and low proposer capture, or strong proposer revenue accompanied by harmful execution costs for users. [[MEV and order-flow auctions]] treats that distribution in detail.

### 5. Provider costs and residual income

Gross security compensation is not validator or miner profit. Proof-of-work operators pay for equipment, electricity, facilities, maintenance, pools, financing, and downtime. Proof-of-stake operators bear hardware, networking, staffing, key-security, custody, insurance, tax, and slashing risks; stakers also commit volatile capital and accept exit or unbonding constraints. Delegation commissions redistribute reward between operators and capital providers but do not create new system revenue.

A provider-level residual can be written as

$$
\Pi_i = R_i^{issuance}+R_i^{fees}+R_i^{ordering}+R_i^{other}-C_i^{operating}-C_i^{capital}-L_i^{penalties}.
$$

Costs are heterogeneous. Scale economies in power procurement, hardware, latency, or relay connections can leave an apparently generous aggregate budget concentrated among a few profitable operators while marginal operators exit. Conversely, a low accounting profit does not mean zero security: sunk equipment, hedges, strategic motives, or expectations may keep capacity online temporarily. [[Validator economics and staking yield]] separates operator economics from the advertised staking rate.

## Funding source and recipient are separate dimensions

Every security payment has both a funding source and a recipient. The matrix matters:

| Funding source | Immediate economic bearer | Possible recipient | What it does not prove |
| --- | --- | --- | --- |
| New issuance | non-recipients through dilution, conditional on demand | miners, validators, delegators | external revenue or holder profit |
| Transaction fee | transacting user | proposer, validator, sequencer, treasury, burner | that passive holders receive cash flow |
| MEV or builder bid | users, liquidity providers, applications, or competing searchers depending on mechanism | searcher, builder, proposer, relay, rebate recipient | gross protocol fee revenue |
| Treasury subsidy | treasury beneficiaries or prior funders | security providers | sustainable recurring economics |
| Slashing or penalty | penalized provider | burner, reporter, treasury, or other validators | ordinary positive revenue |

This matrix prevents two common errors. First, a dollar of issuance and a dollar of user fees can both compensate a validator while imposing different burdens on the ecosystem. Second, the same fee dollar cannot be simultaneously counted as validator revenue, burned value, treasury revenue, and tokenholder distribution. Trace it once through mutually exclusive destinations, then consolidate transfers within the perimeter being studied.

The perimeter must be named. “Ethereum revenue,” for example, might mean user gas expenditure on the execution layer, priority fees and consensus issuance received by validators, base fees burned, or net income of staking providers. These are legitimate measurements of different objects. None should inherit another’s label without reconciliation.

## Budget is not the same as cost to attack

A large reward stream does not mechanically make a chain secure. **Flow security** asks what honest providers receive and what capacity that payment sustains. **Stock security** asks what resources or stake an attacker must acquire, borrow, corrupt, or coordinate. **Penalty security** asks what value can actually be destroyed or confiscated after provable misbehavior. These interact, but they are not equal.

In proof of work, recurring rewards help sustain hash power. An attacker’s relevant cost depends on hardware availability, electricity, rental markets, alternative uses, attack duration, detection, and the revenue forgone by diverting capacity. Hash rate is an observable input, not a dollar-denominated guarantee. If specialized hardware has little alternative use, its post-attack value and incumbent incentives differ from those of rentable general-purpose capacity.

In proof of stake, total stake is not automatically slashable security. The attack threshold depends on the consensus rule and attack type; effective control can differ from nominal ownership because of delegation, custodians, liquid-staking governance, correlated software, or key compromise. Only stake subject to enforceable slashing for the relevant behavior belongs in a penalty calculation. If a safety failure cannot be unambiguously attributed or governance can decline to slash, the advertised stake overstates credible loss.

The attack payoff matters as much as attack cost. Budish frames proof-of-work security as a condition comparing the recurring honest expenditure needed to deter attack with the one-off value an attacker can obtain. Carlsten and coauthors show that a Bitcoin-like transition from block subsidies toward transaction fees can produce fee volatility and mining incentives that differ from a smooth subsidy. These models do not yield one universal ratio for every chain; they show why “annual fees divided by market capitalization” is not a security theorem.

Economic security is also bounded by what consensus can protect. A very secure base chain cannot make an unaudited bridge, compromised multisig, centralized sequencer, or insolvent custodian safe. Likewise, high application fees do not necessarily fund base-layer consensus if sequencers or application operators retain them.

## Sustainability and the fee-only end state

Many fixed-supply narratives expect declining issuance to be replaced by fees. Bitcoin’s white paper explicitly anticipates that, once a predetermined coin supply has entered circulation, incentives can transition entirely to transaction fees. That is a design direction, not evidence that any future fee market will be adequate.

A fee-funded budget is sustainable only if users continue to demand scarce blockspace at prices sufficient to support the desired provider set and if the protocol routes enough of those payments to security. High fees can increase security funding while making marginal uses uneconomic or pushing activity to other layers. Low fees can improve usability while leaving issuance, external subsidy, or a smaller provider base to close the gap. There is no context-free optimum.

Volatility matters too. Security requires continuous service, whereas fees can be highly cyclical and concentrated around liquidations, mints, launches, or speculation. Operators decide against expected revenue and downside risk, not the trailing annual sum. A treasury reserve or issuance rule can smooth the cycle, but that shifts rather than erases the funding burden.

Layering complicates the calculation. A rollup can collect fees from users, pay an L1 for data publication, incur prover and sequencer costs, and retain a residual. The L1 data payment supports the base layer only through its own fee-routing rules. The rollup’s retained margin is operator economics unless a binding mechanism routes it to decentralized security or tokenholders. [[Layer-2 tokens and the economics of sequencers]] should therefore be evaluated with a consolidated waterfall, not gross L2 fees.

## Tokenholder capture is a separate claim

Native tokens may be required to pay fees, post stake, govern, collateralize positions, or settle value. Those uses can create demand, but they do not automatically give every holder a pro rata claim on protocol economics.

There are several distinct capture paths:

1. **Participation capture:** a holder stakes and receives issuance, fees, or MEV after commission, costs, and penalties. This requires operational or delegated participation and exposes the holder to the relevant constraints.
2. **Supply capture:** fees are verifiably burned, reducing supply relative to a no-burn counterfactual after netting issuance and other minting.
3. **Distribution capture:** a contract or legally meaningful arrangement routes assets to holders, stakers, lockers, or another defined class.
4. **Control capture:** governance can choose how fees are used. This is an option or control right, not a present cash-flow entitlement, and concentrated actors may capture it unevenly.
5. **Demand capture:** the protocol’s services require the token. Demand still depends on velocity, alternatives, fee abstraction, and the quantity users must hold rather than briefly acquire.

Analysts should never jump from “the chain generated $X of fees” to “tokenholders earned $X.” Deduct senior costs, identify the authorized router, distinguish burns from transfers, net issuance, specify participation requirements, and examine whether governance can change the route. [[From protocol fees to tokenholder value]] and [[Token holder rights are not equity rights]] provide the fuller claims analysis.

## A reproducible measurement workflow

First, define the chain, layer, assets, interval, and unit of account. Preserve native units and timestamps; add fiat conversions with the exact pricing method rather than silently applying today’s price to historical flows.

Second, reconstruct protocol issuance from the applicable consensus specification or canonical state data. Separate proposer, attester, delegator, treasury, and other allocations. Record burns and penalties independently. Do not infer issuance from wallet inflows alone because internal transfers, withdrawals, and restaking can masquerade as rewards.

Third, decompose user payments by rule and destination: base fee, priority fee, data fee, application fee, sequencer charge, and refund. For a layered system, eliminate internal payments when calculating consolidated user expenditure, but preserve them when asking how one layer funds another.

Fourth, estimate ordering value with a declared method. Distinguish observable onchain profit, searcher payment, builder bid, proposer receipt, and user rebate. State what private bundles, offchain transfers, failed searches, or cross-domain opportunities the data omit.

Fifth, estimate provider costs by technology and operator cohort. Report gross compensation, operating residual, and return on committed capital separately. Avoid one representative validator when commission, uptime, MEV access, hosting, or scale materially changes outcomes.

Sixth, run sufficiency scenarios rather than assert a magic ratio. Vary fee demand, native-token price, issuance, total stake or hash power, provider concentration, exit capacity, attack payoff, slashability, and the time needed to execute and recover from an attack. State whether the exercise measures honest-provider viability, credible penalty, or attacker cost.

Finally, reconcile tokenholder impact in its own table: issuance received, dilution avoided or borne, fees burned, distributions received, participation costs, and governance contingencies. A complete report should allow the identities

$$
\text{user payments} = \text{provider transfers}+\text{burn}+\text{treasury transfers}+\text{other destinations}
$$

and

$$
\text{provider gross reward}=\text{issuance}+\text{routed fees}+\text{captured ordering value}+\text{subsidies}-\text{penalties}
$$

to be checked without counting one flow twice.

## Why it matters

The security-budget question connects monetary policy, market structure, consensus engineering, and token valuation. If issuance is mislabeled as revenue, dilution disappears from view. If burns are mislabeled as validator income, the provider budget is overstated. If all MEV is assigned to validators, both revenue and user cost can be double counted. If provider costs are ignored, gross rewards become imaginary profit. If tokenholder rights are assumed, protocol activity becomes a promotional valuation multiple.

A clean decomposition makes comparisons harder but useful. It shows who pays for security today, whether that source can persist, which participants receive the budget, what costs sit ahead of residual income, how much value is credibly at risk for misbehavior, and whether passive tokenholders capture anything beyond a contingent demand or supply effect. Those are the questions a chain’s fee chart is trying—but unable—to answer alone.

## Sources

- [Satoshi Nakamoto, “Bitcoin: A Peer-to-Peer Electronic Cash System”](https://bitcoin.org/bitcoin.pdf) — primary design paper describing block incentives and the contemplated transition from new issuance to transaction fees.
- [Ethereum EIP-1559, “Fee market change for ETH 1.0 chain”](https://eips.ethereum.org/EIPS/eip-1559) — primary specification separating burned base fee from priority fee paid to the block producer.
- [Ethereum consensus specifications, Phase 0 beacon-chain specification](https://github.com/ethereum/consensus-specs/blob/master/specs/phase0/beacon-chain.md) — primary rules for validator rewards, penalties, balances, and slashing mechanics.
- [Ethereum.org, “Proof-of-stake rewards and penalties”](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/) — official explanatory documentation on validator duties and reward/penalty dependence.
- [Flashbots, `mev-boost`](https://github.com/flashbots/mev-boost) — primary implementation documentation for proposer-builder separation and relay-mediated builder bids.
- [Eric Budish, “The Economic Limits of Bitcoin and the Blockchain”](https://doi.org/10.3386/w24717) — NBER working paper developing the equilibrium comparison between recurring honest expenditure and attack incentives.
- [Miles Carlsten, Harry Kalodner, S. Matthew Weinberg, and Arvind Narayanan, “On the Instability of Bitcoin Without the Block Reward”](https://doi.org/10.1145/2976749.2978408) — peer-reviewed analysis of fee-only mining incentives and reward variance.
- [Raphael Auer, “Beyond the doomsday economics of ‘proof-of-work’ in cryptocurrencies”](https://www.bis.org/publ/work765.htm) — BIS working paper on proof-of-work payment economics and the limits of fee-supported security.

## Open questions

- Which cross-chain dataset can reconcile protocol issuance, fee destinations, burns, builder payments, and penalties without imposing Ethereum’s categories on different consensus systems?
- How should credible slashable value be discounted for correlated clients, delegated stake, custodial concentration, governance discretion, and uncertain attribution?
- What duration of fee stress should a sustainable security-budget test use when operator costs are sticky but blockspace demand is cyclical?
- How much application and rollup fee revenue ultimately strengthens base-layer security after data costs, operator margins, rebates, and duplicated internal transfers are removed?
