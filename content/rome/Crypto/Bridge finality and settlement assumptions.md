---
title: Bridge finality and settlement assumptions
created: 2026-07-10
source: llm
status: seed
tags: [crypto, bridges, finality, settlement, risk]
---

A cross-chain transfer is not “final” at one moment: it passes through source-chain finality, message acceptance, destination execution, destination finality, and finally economic settlement, each with a different failure model.

Up: [[Crypto]]

Related: [[Oracle bridge and sequencer risk]] · [[Wrapped assets and duplicate crypto exposure]] · [[Cross-venue fragmentation in crypto]]

## Finality is a stack, not a timestamp

A bridge observes a fact on one state machine and causes another state machine to act as if that fact is authoritative. The apparently simple statement “Alice locked 10 tokens on chain A, so mint 10 wrapped tokens on chain B” hides several claims. The source transaction must belong to the source chain that the bridge recognizes. The emitted event must mean what the bridge thinks it means. The bridge's verification system must accept the correct message exactly once. A relayer must deliver it. The destination transaction must execute under the intended contract version. The resulting asset must remain redeemable and liquid.

These claims mature on different clocks. A useful transfer model is:

1. **Source inclusion:** the source transaction appears in a block.
2. **Source safety or finality:** the relevant block has reached the bridge's configured confidence threshold.
3. **Message verification:** a light client, proof verifier, signer quorum, or optimistic mechanism accepts the message.
4. **Destination execution:** a relayer submits the message and the destination contract executes it.
5. **Destination finality:** the execution itself survives the destination chain's fork-choice and finality rules.
6. **Economic settlement:** the resulting claim can be redeemed, sold, or used without a material discount, freeze, or downstream insolvency.

Calling step 1 “final” confuses inclusion with irreversibility. Calling step 3 “settled” confuses proof acceptance with execution and liquidity. Even step 5 does not ensure step 6: a finalized wrapped token may trade below par because collateral is impaired, redemption is paused, market makers have withdrawn, or users doubt the bridge's governance.

The total settlement time is therefore not merely the sum of nominal block times. In the ordinary case it is approximately

$$
T_{settle}=T_{source}+T_{verify}+T_{relay}+T_{destination}+T_{economic},
$$

but the tail risk is governed by dependencies, timeouts, disputes, congestion, and recovery procedures. Some stages overlap; some have no deterministic bound. A fast user interface may quote the time until a liquidity provider advances funds, not the time until the underlying cross-chain obligation settles.

## Consensus finality: what did the source chain promise?

Consensus finality is the first inherited assumption. On Ethereum proof of stake, blocks become justified and then finalized through validator attestations. Ethereum's documentation describes finalized blocks as reversible only under a critical consensus failure involving destruction of at least one-third of total stake; finality can also be delayed if participation is insufficient. This is crypto-economic finality, not metaphysical irreversibility: a severe equivocation or social recovery event may force users and infrastructure operators to choose a canonical history.

Other chains expose different semantics. Classical BFT-style chains may give rapid deterministic-looking finality after a supermajority commit, but the guarantee still depends on the validator fault threshold, correct client implementation, and the meaning of validator-set changes. Proof-of-work chains generally offer probabilistic finality: more confirmations reduce reorganization probability without creating a protocol state called “finalized.” A bridge that waits six blocks has selected a risk tolerance, not discovered a universal constant.

The exact source-chain endpoint matters. “Latest,” “safe,” and “finalized” can mean different things in an RPC API, and a provider can be stale, faulty, or attached to a minority fork. A bridge watcher should not treat one RPC response as independent consensus. The relevant audit question is not “How many confirmations?” in isolation, but:

- Which chain and fork-choice rule define the source truth?
- Does the bridge wait for protocol finality, an empirical confirmation count, or a provider label?
- Who configures that threshold, and can it be lowered by an upgrade key?
- What happens during finality delay, chain halt, or conflicting finalized checkpoints?
- Does the bridge stop safely, or does it convert uncertainty into a destination liability?

Waiting longer generally reduces ordinary reorg exposure, but it cannot repair a broken consensus assumption or compromised configuration. Finality policies should scale with the value and reversibility of the action. Minting an uncapped bearer asset against a barely confirmed deposit is more consequential than delivering a low-value informational message that an application can later correct.

## Optimistic verification: security needs a live challenger

An optimistic bridge or rollup withdrawal path assumes a proposed claim is valid unless someone disputes it during a defined window. The delay is not incidental friction; it is time allocated for detection and adjudication. OP Stack documentation, for example, describes the standard L2-to-L1 withdrawal flow as initiation, proof on L1, and finalization after the fault-challenge period, currently seven days on OP Mainnet. A challenge can invalidate an incorrect published commitment used for withdrawal without rewinding the L2 transaction history itself.

The slogan “one honest watcher” is incomplete unless that watcher can observe, prove, and finance a dispute before the deadline. An optimistic system inherits assumptions about data availability, RPC access, censorship resistance, challenger software, bonds, dispute-game correctness, and the destination chain remaining live long enough to accept the challenge. If the invalid claim's profit exceeds the cost of corrupting or censoring challengers, nominal permissionlessness may provide weak economic protection.

Across illustrates another optimistic structure. Its dataworkers propose bundles covering relayer refunds and rebalancing; bundles face a challenge period, and UMA's Optimistic Oracle resolves disputes. The user may receive a fast fill from a relayer long before that relayer's reimbursement is settled. That is a credit and liquidity transformation: latency is shifted from the user to a professional actor that prices capital, chain, and verification risk. “Two-second fill” and “final bridge settlement” are thus different measurements.

For optimistic systems, examine at least four clocks: when the source fact becomes sufficiently final, when the assertion is posted, when the challenge period ends, and when the destination execution becomes final. A disputed assertion adds an adjudication path whose duration and outcome may not match the happy-path estimate.

## Light clients and proof systems: verify the right root

A light-client bridge places a representation of the source consensus on the destination chain. In IBC, client state contains the constraints needed for updates, misbehaviour detection, and state verification; consensus state generally stores a trusted root, validator-set information, and a timestamp. Membership or non-membership proofs are checked against that trusted root. Relayers carry headers, packets, and proofs, but—under the intended model—do not create their truth merely by delivering them.

This can reduce reliance on a separate bridge signer committee, yet “trustless” is too broad. The destination verifier trusts a bootstrap consensus state, the light-client algorithm, correct proof specifications, freshness assumptions, and the security of both chains. It must track validator-set changes correctly. Clients can expire or freeze after detected misbehaviour. Recovery and upgrade mechanisms introduce governance assumptions. A valid Merkle proof only demonstrates that a value belongs to a committed state root; it does not prove that the root represents the economically canonical source chain unless the consensus verification establishes that link.

Validity-proof systems compress computation into a proof checked on the destination. Their appeal is that acceptance does not require waiting for an open fraud window once the prerequisite chain state and proof are available. But proof validity and system finality remain distinct. An auditor must identify what the circuit or verifier actually proves, how the input root is selected, whether source data were finalized, who can upgrade verifier contracts, what happens if proof generation stops, and whether the destination execution can still reorganize.

Proof generation also creates a liveness surface. A sound verifier can reject false statements while no one produces a valid proof. This preserves safety but strands transfers. Centralized provers, external proving markets, light-client header updaters, and fee-paying relayers can all be operational dependencies even when they cannot forge messages.

## Multisignatures and validator networks: signatures relocate consensus

Attestation bridges ask a designated signer or validator set to observe source chains and sign messages. Wormhole's Verified Action Approvals are a clear example: Guardians observe messages, and a two-thirds supermajority produces a signed VAA; current documentation describes the standard VAA as a 13-of-19 multisignature attestation. The VAA proves that the configured Guardian quorum signed a particular body. It does not independently reproduce the source chain's consensus inside the destination contract.

This design can support many heterogeneous chains at relatively low on-chain verification cost, but its finality is jointly determined by source observation policy and signer security. Wormhole exposes consistency levels controlling whether Guardians wait for finality or attest sooner. Its documentation explicitly warns that lower consistency can allow reorgs to produce different VAAs around what users perceive as the same message. If assets are minted or released before the source lock or burn is durable, a reorg can create unbacked destination claims.

The relevant threshold is more than “13 of 19.” Researchers should map operator independence, key custody, geographic and cloud concentration, software diversity, delegated observation paths, set rotation, emergency powers, upgrade keys, and the contracts' exact signature checks. N nominal signers can share one correlated failure domain. Conversely, a well-operated committee can offer useful defense in depth, but its security is not equivalent to the source chain's full validator set.

Configurable verifier networks move this choice to the application. LayerZero V2 applications can select required and optional decentralized verifier networks and a confirmation threshold; Executors deliver already-verified messages. This makes the pathway's configuration part of the asset's identity. Two tokens using the same messaging protocol can have materially different security if their applications choose different DVNs, thresholds, confirmations, peers, or upgrade authorities. Brand-level analysis is therefore insufficient; inspect the live pathway.

## Relayers affect liveness, ordering, and user experience

A relayer normally transports evidence rather than defines truth. If verification is sound, a malicious relayer should be unable to forge a deposit, but it may delay, reorder, selectively deliver, overcharge, or fail to execute a message. Ordered channels can amplify one missing message into head-of-line blocking. Destination gas spikes can make otherwise valid delivery uneconomic. Incorrect address, peer, nonce, or replay-domain configuration can render a valid proof unusable.

Permissionless relaying reduces dependence on one operator only when another party can reconstruct the message and afford execution. “Anyone can relay” is not the same as “someone is economically motivated and technically able to relay under stress.” Applications should distinguish verification availability from delivery availability and provide retry, timeout, refund, or manual-execution paths where the protocol permits them.

Fast bridges often add liquidity relayers who transfer their own inventory to the recipient and later claim reimbursement. The user receives destination assets before canonical settlement, but now depends on relayer liquidity and quote quality. If no relayer fills, the underlying slow path may still work. If the relayer fills against a source transaction that later reorganizes, the relayer—not necessarily the user—may bear the loss, unless terms, contract logic, or insolvency transmit it elsewhere.

## Reorgs can create liabilities on two ledgers

Cross-chain reorg risk is asymmetric because destination execution does not automatically unwind when source history changes. Suppose a source deposit appears, the bridge accepts it too early, and destination tokens are minted. A later source reorg removes the deposit. The destination chain can remain perfectly final while preserving an unbacked liability. Reconciliation then requires governance intervention, social coordination, insurance capital, rate limits, or acceptance of loss.

The reverse direction matters too. A destination transaction can reorganize after a relayer believes delivery occurred, causing a retry or inconsistent application state. Replay protection must bind the message to source chain, emitter, sequence or nonce, destination domain, and intended receiver. Otherwise a proof valid in one context may be reused in another. Finality thresholds do not substitute for domain separation and idempotent execution.

Rate limits and circuit breakers do not make false messages true, but they can bound losses while operators diagnose a reorg or verifier compromise. Their value depends on whether privileged actors can bypass them, whether limits cover aggregate exposure across routes, and whether downstream protocols continue valuing the bridged asset at par during a pause.

## Economic finality is the last and weakest layer

Protocol finality answers whether a ledger entry will persist. Economic finality asks whether the holder can realize the expected value. A finalized bridge receipt may be economically unsettled if redemption queues are long, liquidity is thin, the issuer can freeze addresses, collateral is deployed elsewhere, or the canonical route is contested. A lending protocol that accepts the claim at par can turn a bridge-specific deficit into bad debt.

Economic security comparisons should match value at risk to credible loss-absorbing resources. For proof-of-stake consensus, this may include slashable stake but not all stake is necessarily slashable for every failure. For optimistic verification, it includes proposer and challenger bonds, monitoring incentives, and the cost of censorship or governance capture. For signer bridges, it may include reputational capital or insurance, but cryptographic signatures alone do not guarantee compensation. For liquidity networks, it includes relayer and LP capital, concentration, and withdrawal behavior under stress.

“Economic finality after 20 confirmations” is therefore imprecise. Confirmations address one source-chain reorg channel. They do not measure contract exploits, key compromise, oracle failure, governance intervention, destination congestion, redemption quality, or market depth. The honest output is a vector of assumptions rather than a single score.

## A practical settlement audit

For a concrete route, record the source and destination chain IDs, token contracts, bridge contracts, message libraries, verifier configuration, relayer path, and upgrade authorities as of a stated date. Then trace one real transfer through source transaction, emitted event, attestation or proof, destination transaction, and redemption path.

Ask:

- What exact source state is asserted, and at what block or checkpoint?
- Which finality label or confirmation count gates observation?
- Can the setting vary by application, asset, direction, or transfer size?
- Who verifies: source consensus represented by a light client, a proof system, an open challenge game, or a signer quorum?
- What trusted root, signer set, verifier contract, or oracle resolves disagreement?
- Who can upgrade, pause, rotate, recover, or override those components?
- Can a relayer censor without forging? Can another relayer permissionlessly replace it?
- Is execution ordered, retryable, idempotent, and protected from replay?
- What happens to destination assets after a source reorg?
- Are there caps, rate limits, delayed minting, insurance, or explicit loss-allocation rules?
- When does the user receive funds, when does the liquidity provider settle, and when can collateral be redeemed?

The safest comparison states these assumptions route by route. Protocol names are shorthand; live configuration and contract authority determine the actual settlement system.

## Why it matters

Bridges connect ledgers that cannot natively force each other to revert. This makes premature certainty especially dangerous: a reversible source event can create an irreversible destination liability. Latency is often the visible cost of waiting for stronger evidence, while fast service is frequently achieved by accepting reorg risk, introducing a signer set, relying on a live challenger, or advancing private liquidity.

For investors and protocol users, this means bridged versions of the “same” asset are not interchangeable. They carry distinct consensus, verifier, governance, liveness, and redemption assumptions, reinforcing the identity distinctions in [[Wrapped assets and duplicate crypto exposure]]. For applications, it means oracle checks, collateral factors, caps, and incident playbooks should treat bridge settlement as a layered process rather than a binary completed flag.

## Sources

- Ethereum.org, “Gasper” — https://ethereum.org/developers/docs/consensus-mechanisms/pos/gasper/ (accessed 2026-07-10).
- Ethereum.org, “Proof-of-stake FAQs” — https://ethereum.org/developers/docs/consensus-mechanisms/pos/faqs/ (accessed 2026-07-10).
- Ethereum.org, “Proof-of-stake attack and defense” — https://ethereum.org/developers/docs/consensus-mechanisms/pos/attack-and-defense/ (accessed 2026-07-10).
- Cosmos Docs, “Light clients: overview” — https://docs.cosmos.network/ibc/latest/light-clients/developer-guide/overview (accessed 2026-07-10).
- Cosmos Docs, “Existence/Non-Existence Proofs” — https://docs.cosmos.network/ibc/latest/light-clients/developer-guide/proofs (accessed 2026-07-10).
- Wormhole Docs, “Verified Action Approvals” — https://docs.wormhole.com/protocol/infrastructure/vaas/ (accessed 2026-07-10).
- Wormhole Docs, “Wormhole Finality” — https://docs.wormhole.com/products/reference/consistency-levels/ (accessed 2026-07-10).
- Optimism Docs, “Withdrawal flow” — https://docs.optimism.io/op-stack/bridging/withdrawal-flow (accessed 2026-07-10).
- Optimism Docs, “Transaction finality” — https://docs.optimism.io/op-stack/transactions/transaction-finality (accessed 2026-07-10).
- Across Docs, “Actors in the System” — https://docs.across.to/introduction/actors (accessed 2026-07-10).
- Across Docs, “What is Across V4?” — https://docs.across.to/guides/concepts/across-v4 (accessed 2026-07-10).
- LayerZero Docs, “Debugging Messages” — https://docs.layerzero.network/v2/concepts/troubleshooting/debugging-messages (accessed 2026-07-10).

## Open questions

- How should a bridge expose route-specific finality and verifier configuration in a machine-readable format that wallets and lending protocols can consume?
- Which empirical reorg distributions are appropriate for chains that expose confirmation counts rather than explicit finality, especially during validator or sequencer incidents?
- How much genuinely slashable or recoverable capital backs each verification design after accounting for correlated operators, governance keys, and claims by other routes?
- When a source reorg leaves finalized destination liabilities, which current bridges have explicit, enforceable loss-allocation and recapitalization rules rather than discretionary recovery?
- How should economic settlement time be measured when fast liquidity fills mask a slower canonical bridge obligation?
