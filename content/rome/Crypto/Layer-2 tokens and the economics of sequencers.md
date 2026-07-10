---
title: Layer-2 tokens and the economics of sequencers
created: 2026-07-09
source: llm
status: seed
tags: [crypto, layer-2, rollups, sequencers, token-economics]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-08-09
---

Layer-2 activity can create a valuable sequencing business, but a governance token captures that value only when enforceable rules route cash flow, scarce operating rights, or economically consequential control to the token.

Up: [[Crypto]]

## Place in the map

This note sits between [[From protocol fees to tokenholder value]], [[Ethereum]], and protocol-specific token dossiers. It explains the economic machine common to many Ethereum rollups before asking whether OP, ARB, ZK, or another “L2 token” is a claim on that machine. It is not a valuation or trading recommendation. The institutional and technical facts are current **as of 2026-07-09**; fee parameters, governance powers, and operator arrangements can change.

## The category error behind “L2 revenue”

A rollup lets users execute transactions away from Ethereum’s main execution layer while retaining some combination of Ethereum data availability, settlement, and dispute or validity guarantees. The rollup’s operator orders transactions, produces blocks, compresses transaction data, and submits commitments or proofs to a parent chain. That operator is usually called the **sequencer**, although production systems divide work among sequencers, batch submitters, proposers, provers, and relayers.

This architecture creates an observable fee stream. It does not by itself make an L2 token analogous to equity. Four objects must be kept separate:

1. **user fees** paid for inclusion and execution;
2. **external costs**, especially publishing data and verifying state on L1;
3. **sequencer or chain-operator surplus** after those costs and operating expenses;
4. **tokenholder value**, if any rule actually connects the first three objects to the token.

Confusing them produces the common but invalid syllogism: the chain has activity; activity generates fees; therefore its token owns fee revenue. A chain may charge fees in ETH, send vault withdrawals to a foundation-controlled address, reimburse a private operator, fund an ecosystem treasury, or rebate users. Its governance token may merely vote. Conversely, a token could capture economics through required staking, an auction for sequencing rights, fee burns, distributions, or treasury claims even if it is not the gas asset. The answer is contractual and institutional, not semantic.

## Start with an accounting identity

For a period $t$, define gross user payments as

$$F_t = F^{execution}_t + F^{data}_t + F^{priority}_t + F^{operator}_t.$$

Not every rollup labels these buckets identically. On an OP Stack chain, current documentation describes the total transaction fee as an L2 execution fee, an L1 data fee, and an optional operator fee. Dedicated vaults collect base fees, priority fees, L1 data fees, and operator fees. Unlike Ethereum L1’s base fee, which is burned, OP Stack L2 base fees are routed to a vault. This is a concrete cash-flow design, not proof that OP tokenholders receive the cash.

The operator’s narrow contribution margin is closer to

$$M_t = F_t - C^{DA}_t - C^{settlement}_t - C^{proof}_t,$$

where data availability costs include blobs or calldata posted to Ethereum, settlement costs include L1 transactions and state-root publication, and proof costs include generating or verifying validity proofs or operating an optimistic dispute system. A fuller economic profit estimate must also subtract servers, engineering, monitoring, security, incident response, bridge operations, insurance-like reserves, and any revenue share owed to a stack provider or collective:

$$\Pi_t = M_t - C^{operations}_t - C^{security}_t - C^{revenue\ share}_t.$$

Even this is not automatically tokenholder profit. It is surplus somewhere in the system. One must identify the vault recipient, legal or onchain controller, withdrawal process, governance constraints, and distribution rule.

### User fees are priced before final costs are known

The data portion is not a pass-through utility bill calculated with perfect hindsight. A sequencer charges an L2 transaction when it accepts it, but the transaction may later be compressed with many others and posted when the L1 blob price differs. Compression also makes marginal attribution difficult: repeated bytes across a batch compress better than isolated transactions.

Arbitrum Nitro illustrates the problem. Its whitepaper describes an adaptive data-pricing mechanism that tracks amounts owed to the sequencer, a reimbursement pool, recent data units, and an L1 data-unit price. The goals are to reduce the long-run gap between collections and posting costs and to avoid abrupt price changes. The amount charged to one transaction is therefore an estimate based on compressed size and a feedback mechanism, not its exact future L1 invoice.

This timing and estimation gap can create profit or loss. If L1 data becomes cheaper before a batch is posted, collections can exceed cost. If blob prices spike or estimates lag, the operator can lose money temporarily. Batching efficiency, compression, posting frequency, fee parameters, and the willingness to delay publication all affect the spread. Thus “user fees minus L1 costs” is a useful first approximation but not a stable entitlement or a complete profit measure.

### EIP-4844 changed the cost curve, not the ownership question

Ethereum’s blob transactions gave rollups a separate, temporary data market. When blobs are cheap, an Ethereum rollup can publish compressed batches at far lower cost than calldata. The economic effect depends on pricing policy. A chain can pass the saving quickly to users, retain a larger spread, increase subsidized capacity, or combine these responses. Lower DA cost therefore can improve sequencer margins without changing who controls those margins.

L2Beat’s project pages are useful here because their “onchain costs” attempt to track what an L2 pays Ethereum, while activity metrics estimate operations. Those figures should not be relabeled as audited net income. They omit or imperfectly observe offchain expenses and may not map cleanly onto the accounting period in which users paid. A serious comparison states its window, token prices, attribution method, included L1 transactions, and treatment of rebates and subsidies.

## The sequencer is a market position, not merely a server

A centralized sequencer offers fast soft confirmations and coordinates block production. It also controls a scarce gate: transaction ordering. OP Stack documentation says the default rollup configuration typically uses one dedicated sequencer. L2Beat separately evaluates what users can do if that sequencer fails and whether they can force transactions through L1.

Three different privileges are bundled in many present systems:

- **inclusion:** deciding which transactions enter and when;
- **ordering:** deciding the sequence within a block or batch;
- **fee collection:** receiving execution, priority, data, or operator-fee vault balances.

They need not remain bundled. A protocol could use a rotating committee, permissionless leader election, an auction for the next block, shared sequencing across chains, or based sequencing in which L1 proposers help determine ordering. Each design changes costs and value capture. An auction might transfer expected sequencing profit to a DAO; staking might create token demand but also issuance expense; a committee might improve fault tolerance while raising coordination and collusion risks. “Decentralized sequencer” is therefore not an economic model until selection, payment, slashing, and fallback rules are specified.

## MEV is real, difficult to measure, and not identical to fees

Maximum extractable value is the value available from including, excluding, or ordering transactions. On an L2 it can arise from decentralized-exchange arbitrage, liquidations, sandwiching, NFT mints, cross-domain price changes, or races between L1 and L2 state. Priority fees are visible payments for ordering preference; private order flow and sequencer-owned trading can produce less visible value.

A first-come-first-served policy may reduce discretionary reordering but does not prove zero MEV. Network latency, private endpoints, batch timing, and the operator’s view of incoming transactions matter. The empirical study *Rolling in the Shadows* replayed transactions across major rollups and found evidence of non-malicious MEV activity, showing why “no public mempool” should not be translated into “no extraction opportunity.” At the same time, observed arbitrage profit is not necessarily sequencer revenue: independent searchers may capture it and pay only ordinary or priority fees to the operator.

Good accounting therefore separates at least three layers: searcher gross profit; payments or auctions that transfer some of that profit to the sequencer; and value retained by the chain after costs. MEV estimates based on known strategies are lower bounds. Cross-chain MEV is especially hard to attribute because one leg may settle elsewhere and the relevant order flow may be private.

MEV also creates a governance problem. A token vote could select a policy—first-come-first-served, encrypted mempools, proposer-builder separation, auctions, refunds—but policy authority is not the same as receiving proceeds. A transparent MEV auction routed to a treasury could make capture more legible, while a private centralized sequencer may retain an opaque option on order flow.

## Decentralization and admin risk alter the quality of the cash flow

Sequencer revenue is sometimes valued as if it were a durable protocol toll. Yet the operator’s position may be assigned by an admin key, and the contracts that route fees may be upgradeable. L2Beat’s risk framework asks distinct questions about sequencer failure, proposer failure, state validation, data availability, and exit windows. These dimensions matter economically as well as technically.

If users can force transactions through L1 after a delay, a failed or censoring sequencer cannot block them forever, but the delay can still be costly during liquidations or market stress. If users cannot independently propose state roots, a proposer failure can halt withdrawals even while transaction data remains available. If an upgrade authority can immediately replace contracts or vault recipients, the apparent onchain cash-flow rule is subordinate to that authority.

OP Mainnet is a useful example rather than a universal verdict. L2Beat classifies it as a Stage 1 optimistic rollup, reports a single sequencer with an L1 forced-inclusion path, and describes upgrade authority involving the Optimism Foundation and Security Council. It also notes that governance signals upgrades but does not directly execute every upgrade. The important lesson is methodological: token voting, operational keys, security councils, legal entities, and contracts form one control system. Reading only the token’s voting portal misses who can change the sequencer or fee recipient; reading only the contract misses offchain commitments and emergency authority.

Decentralization may reduce single-operator censorship and key risk, but it is not free. Multiple sequencers need consensus, networking, monitoring, and incentives. They may add latency or duplicate infrastructure. Token staking can secure the role only if slashing conditions are objectively provable and penalties exceed gains from misbehavior. Vague promises that future sequencers will stake the token should not be capitalized as current demand.

## Does the token capture any of this economics?

The answer should be tested through explicit channels.

### 1. Is the token required to pay user fees?

Many prominent Ethereum L2s use ETH for gas while their native token governs. This weakens the simplest demand story: transaction growth does not mechanically require users to buy the governance token. Even when a token is the gas asset, usage demand can be fleeting because users can acquire and immediately spend it. Gas demand is not the same as a claim on profit.

### 2. Is the token required to operate or select sequencers?

Required stake can create demand and expose operators to slashing. But analysts must ask who may stake, how leaders are chosen, what misconduct is provable, what yield is paid, and whether rewards come from real fees or inflation. If only an approved set can operate, broad token ownership may not confer the scarce right. If staking yield is mostly new issuance, the system redistributes dilution rather than transferring external revenue.

### 3. Are fees burned or distributed?

A programmed burn can connect activity to supply reduction. A distribution can connect it to tokenholder cash flow, subject to eligibility, custody, law, and governance. Neither should be inferred from treasury accumulation. Fees sent to a DAO treasury increase resources controlled by governance, but tokenholders may never redeem the treasury pro rata; governance can fund public goods, grants, contributors, security, or user incentives instead.

### 4. Does governance control economically material parameters?

OP represents holders in the Optimism Token House, and official governance materials describe revenue contributed by OP Chains as funding Collective programs. This is an ecosystem funding model, not a blanket promise that OP holders receive OP Mainnet sequencer profit. OP Stack chains can also use the open-source stack without being governed by Optimism or contributing revenue, according to Optimism’s glossary. “Superchain growth” and “OP cash flow” are therefore different theses.

ARB likewise should not be treated as gas for Arbitrum One: users pay gas in ETH. ARB is the ArbitrumDAO governance token, whose powers and treasury can be economically important, and Arbitrum Foundation transparency reports discuss fee reimbursement, chain revenue, and DAO-approved treasury actions. Yet governance over a treasury is not a legal redemption right, and sequencer operations, fee routing, and administrative control must be checked against current documents rather than inferred from the ticker.

The same discipline applies to ZK and other L2 tokens. A governance proposal, roadmap, or possible future staking module is not current capture. Analysts should record three states separately: **implemented**, **governance-approved but not live**, and **aspirational**.

### 5. Can governance be exercised without unacceptable dilution or concentration?

Even a token with formal authority may have weak per-token economics if supply expands, unlocks concentrate voting power, delegation is inactive, or a foundation and insiders dominate quorum. Conversely, governance may protect a valuable public infrastructure without maximizing distributions. That may be a coherent social objective while remaining a poor basis for treating the token like equity.

## A practical diligence worksheet

For any L2 token, trace funds and control in this order:

1. Reconstruct a sample user fee from transaction receipts and protocol formulas.
2. Identify each fee vault or recipient address and the asset collected.
3. Match batch submissions, blob purchases, proof verification, and settlement transactions to L1 costs over the same window.
4. Add known offchain and program expenses; label unknown expenses rather than assuming zero.
5. Identify who can withdraw funds, replace recipients, change fee parameters, appoint the sequencer, pause the system, or upgrade contracts.
6. Inspect whether token voting directly executes those powers or merely signals to another body.
7. Locate any live burn, distribution, staking, or sequencer-auction rule and distinguish fee-funded rewards from inflation.
8. Test dilution, unlocks, delegation, quorum, and emergency exceptions.
9. Treat MEV as a separate, partially unobserved line item.
10. Run downside cases: cheap blobs and fee competition; expensive blobs; activity decline; forced fee reductions; sequencer decentralization costs; a security incident; and governance changing the routing rule.

The resulting valuation object may be a profitable operator with no token claim, a token-governed treasury with uncertain redemption, a work token securing scarce roles, a fee-burn asset, or some hybrid. It may also be none of these yet.

## What follows for investors and protocol designers

For investors, usage metrics are evidence of product demand, not sufficient evidence of token value. The defensible bridge from transactions to token economics is a chain of enforceable mechanisms. If any link—fee collection, cost subtraction, control, distribution, or dilution—is missing, the analysis should stop rather than fill the gap with narrative.

For protocol designers, the central trade-off is not simply decentralization versus profit. It is how to allocate ordering rights, cost risk, surplus, and governance while preserving credible exits. Routing every dollar to tokenholders could starve security and public infrastructure. Retaining everything in a foundation-controlled operator can weaken accountability. Auctions, staking, treasury funding, rebates, and burns allocate risks differently; none is universally correct.

The durable conclusion is deliberately modest. A sequencer can be economically valuable because it sells scarce blockspace, manages the spread between estimated fees and realized settlement costs, and occupies a privileged ordering position. But a Layer-2 token is valuable *from that business* only to the extent that present, auditable rules make the token necessary or give its holders meaningful control or claims. Chain success and token capture are related hypotheses, not synonyms.

## Sources

- [Optimism Documentation, “Fee vaults”](https://docs.optimism.io/op-stack/transactions/fee-vaults) — primary documentation for OP Stack fee components, vault addresses, recipients, and withdrawals.
- [Optimism Documentation, “Transaction Fees 101”](https://docs.optimism.io/chain-operators/guides/management/transaction-fees-101) — primary operator documentation for the L2, L1-data, and operator-fee decomposition.
- [Optimism Documentation, “Protocol components”](https://docs.optimism.io/op-stack/protocol/components) — primary description of default dedicated sequencing and component roles.
- [Optimism Documentation, “Governance FAQ”](https://docs.optimism.io/governance/gov-faq) — primary description of OP Token House representation and governance structure.
- [Optimism Documentation, “Capital allocation”](https://docs.optimism.io/governance/capital-allocation) — primary account of Collective revenue and ecosystem-funding policy.
- [Optimism Documentation, “Glossary”](https://docs.optimism.io/op-stack/reference/glossary) — primary distinction between OP Chains and unaffiliated OP Stack chains.
- [Offchain Labs, *Arbitrum Nitro: A Second-Generation Optimistic Rollup*](https://docs.arbitrum.io/nitro-whitepaper.pdf) — primary technical explanation of adaptive L1 data pricing, compression, and sequencer reimbursement.
- [Arbitrum Foundation, *Annual Transparency Report 2025*](https://docs.arbitrum.foundation/assets/files/ArbitrumFoundationTransparencyReport2025-3ac117dd3203dbe7bca401cf951f0c14.pdf) — latest primary institutional report on governance execution, fee sweeps, gas-pricing changes, and DAO activity.
- [Arbitrum Foundation, Bylaws](https://docs.arbitrum.foundation/assets/files/The%20Arbitrum%20Foundation%20Bylaws%2020%20July%202023-d992cde49b3207e89bdec76322e29048.pdf) — primary legal identification of ARB as the ArbitrumDAO governing token and the matters tokenholders may approve.
- [Ethereum.org, “Blockchain Data Storage Strategies”](https://ethereum.org/developers/docs/data-availability/blockchain-data-storage-strategies/) — primary ecosystem documentation for EIP-4844 blob pricing, temporary availability, and rollup use.
- [L2Beat, “The Risk Rosette Framework”](https://forum.l2beat.com/t/the-risk-rosette-framework/292) — independent methodology for sequencer failure, proposer failure, exit, and upgrade risk.
- [L2Beat, “OP Mainnet”](https://l2beat.com/scaling/projects/op-mainnet) — independent project-specific risk, cost, activity, and governance evidence; dynamic figures require timestamping.
- [Christof Ferreira Torres et al., “Rolling in the Shadows: Analyzing the Extraction of MEV Across Layer-2 Rollups”](https://arxiv.org/abs/2405.00138) — independent empirical research on rollup MEV; strategy detection should be read as a lower-bound measurement.

## Open questions

- Which L2 fee dashboards reconcile user payments, vault withdrawals, L1 costs, and offchain expenses without mixing cash and accrual periods?
- How much MEV is retained by centralized sequencers rather than independent searchers, and how much remains invisible in private order flow?
- Which planned decentralized-sequencer systems have live, objectively enforceable slashing rather than roadmap-level token utility?
- When governance controls a treasury but offers no redemption right, what evidence best measures the economic value of that control?
- How should cross-chain sequencing and shared-security revenue be allocated among chain operators, stack providers, and token-governed collectives?
