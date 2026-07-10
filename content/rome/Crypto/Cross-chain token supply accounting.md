---
title: Cross-chain token supply accounting
created: 2026-07-10
source: llm
status: seed
tags: [crypto, bridges, token-supply, accounting, interoperability]
---

Cross-chain supply is not the sum of every contract that shares a ticker: it is a consolidated liability whose correct measurement depends on the token's mint, burn, lock, release, inventory, and in-flight-message rules.

Up: [[Crypto]]

Related: [[Wrapped assets and duplicate crypto exposure]] · [[Stablecoin supply as a market signal]] · [[TVL without double counting]] · [[Bridge finality and settlement assumptions]]

## The accounting question

When a token appears on five chains, an explorer can return five `totalSupply` values. Adding them may be exactly right, badly wrong, or not even a meaningful operation. A burn-and-mint token can distribute one native supply across several ledgers, so the chain totals belong in one consolidated sum. A lock-and-mint bridge leaves the original units inside escrow and creates remote claims, so adding escrowed originals to remote wrappers double-counts the same economic units. A liquidity network may transfer no token supply at all; it advances inventory on the destination and later rebalances. An issuer may independently create liabilities on several chains, in which case each authorized native contract belongs in issuer-wide supply even though no bridge escrow connects them.

The governing question is therefore not “how many tokens do the contracts report?” It is:

> Which balances are external liabilities, which are collateral or internal inventory, and which state transitions create, destroy, or merely relocate the consolidated claim?

This note develops a practical ledger for answering that question. It complements [[Wrapped assets and duplicate crypto exposure]], which identifies the claims, without repeating its broader treatment of wrapper custody and pricing. It also leaves confirmation delays, fraud windows, reorgs, and relayer timing to [[Bridge finality and settlement assumptions]]. Here, pending messages matter only because an asynchronous transfer can make two otherwise correct chain snapshots fail to reconcile.

## Define the consolidation perimeter first

A supply number is meaningless until its perimeter is explicit. Begin with a token family, not a ticker. The family registry should name every chain, canonical contract or mint, decimals, issuer, mint and burn authorities, bridge adapter, escrow address, peer contracts, and redemption path. Identical symbols do not establish common ownership. Conversely, contracts with different symbols can represent one consolidated liability after a migration or wrapper conversion.

Three perimeters answer different questions:

1. **Contract supply** is what one token contract or chain-native mint reports. ERC-20 defines `totalSupply` as the total token supply, but the interface does not say whether balances are circulating, treasury-held, escrowed, bridged, redeemable, or economically duplicated.
2. **Chain circulating supply** is the contract supply less balances that the chosen methodology treats as non-circulating, such as provable burns, bridge escrow, issuer treasury inventory, or restricted reserves. These exclusions are policy judgments and must be address-listed.
3. **Consolidated economic supply** is the outstanding external claim across the entire token family after eliminating inter-chain backing and other internal positions.

Let $S_{i,t}$ be reported supply for an authorized representation on chain $i$ at time $t$, $E_{i,t}$ be units held in bridge escrow or another consolidation account, $T_{i,t}$ be excluded issuer inventory, and $D_t$ be duplicated claims whose backing is already counted elsewhere. A useful reporting identity is

$$
S^{\mathrm{external}}_t = \sum_i S_{i,t} - \sum_i E_{i,t} - \sum_i T_{i,t} - D_t.
$$

This is a template, not a universal formula. In a lock-and-mint design, destination wrapper supply may be the external liability while source escrow is eliminated. In an issuer-native deployment, there may be no escrow elimination at all. In a burn-and-mint mesh, summing authorized contract supplies can already give the consolidated total. The analyst must describe each elimination rather than hide it in an unexplained “circulating” field.

## Mechanism taxonomy

### Burn on source, mint on destination

In a pure burn-and-mint mesh, a transfer of $x$ reduces supply on source chain $a$ and later increases supply on destination chain $b$:

$$
\Delta S_a=-x, \qquad \Delta S_b=+x, \qquad \Delta \sum_i S_i=0.
$$

Circle's Cross-Chain Transfer Protocol is a concrete issuer-controlled example: USDC is burned on the source domain, Circle's service attests to the burn, and USDC is minted on the destination. LayerZero's OFT implementation similarly describes `_debit` as burning on the source and `_credit` as minting on the destination. Wormhole Native Token Transfers supports a burn-and-mint mode and describes the total supply as distributed across chains.

The intended invariant is conservation, but a block-by-block observer can see temporary contraction: the burn is complete while the destination mint is pending. Therefore the reconciler needs an in-flight asset, $P_t$, representing valid burns not yet consumed by a destination mint:

$$
S^{\mathrm{conserved}}_t = \sum_i S_{i,t} + P_t.
$$

Once the mint occurs, $P_t$ falls by the same amount. Counting the pending claim and the minted tokens simultaneously is an error; omitting pending claims can misread operational latency as a permanent supply reduction. Message nonces or unique identifiers must make each burn consumable at most once. Separately, every mint authority outside the cross-chain mechanism must be inventoried, because bridge conservation cannot prevent an issuer, governance key, compromised minter, or legacy contract from creating units through another path.

### Lock on home chain, mint on remote chains

In the classic hub-and-spoke model, $x$ original units enter a home-chain escrow and $x$ remote units are minted. Contract-level gross supply rises by $x$, but external economic supply does not:

$$
\Delta E_h=+x, \qquad \Delta W_r=+x, \qquad
\Delta(S_h+W_r)=+x,
$$

while the consolidated external claim remains unchanged because the escrowed originals are no longer independently available:

$$
S^{\mathrm{external}}=S_h-E_h+\sum_r W_r.
$$

Solvency adds a separate backing test:

$$
E_h \geq \sum_r W_r + R,
$$

where $R$ includes any other redeemable claims against the same escrow. Equality is expected for a simple fee-free bridge, but inequality may be legitimate if transfer fees, decimal dust, seized funds, or pre-funded buffers are documented. An unexplained deficit is not an aggregation quirk; it is an underbacking signal.

Wormhole's Wrapped Token Transfers documents the flow in which an original asset is locked and a wrapped destination asset minted. LayerZero documents the compatible lock/mint forward path and burn/unlock reverse path. These sources also show why “lock/unlock” is ambiguous shorthand: a viable multi-chain system may lock originals at a hub, mint remote supply, burn remote supply on return, and only then unlock originals. The accounting should record the actual debit and credit operation on each leg.

### Hub-and-spoke native representations

A token can be marketed as native on every destination while still using a hub collateral model. Wormhole NTT, for example, supports a hub-and-spoke deployment in which tokens lock at the hub and spoke contracts mint or burn. “Native” here describes token integration and issuer control, not the absence of backing or a single-chain ledger. The correct equation is still hub escrow against aggregate spoke liabilities.

This category matters because data providers often classify by labels. A token may look like ordinary native ERC-20 supply on an L2 even though its permitted issuance is constrained by a remote hub. L2BEAT handles the distinction explicitly: its methodology separates canonically bridged, externally bridged, natively minted, and omnichain-native assets, and it uses different measurement formulas for them. That is independent evidence that one universal “balance locked” formula cannot describe multi-chain value.

### Independent issuer-native issuance

An issuer may mint redeemable units directly on several chains without a transfer protocol being the sole issuance route. Then every authorized chain contract can be part of one legal or economic liability, but movements between chains may occur through issuer redemptions and fresh issuance rather than an atomic bridge state machine. Consolidated supply is generally the sum of external native liabilities across chains, reconciled to issuer records and reserves. Burns on one chain and mints on another may be correlated operationally without carrying a shared message identifier.

The key test is whether a chain's units are a direct claim on the issuer under the same terms, not whether they share a brand. Third-party bridged versions remain separate claims on the bridge or escrow and must not be silently merged with issuer-native supply. This distinction is essential in [[Stablecoin reserve and redemption risk]]: the issuer's reserves can support its native liability while a wrapper fails because its separate bridge redemption path breaks.

### Inventory and liquidity-network transfers

Some “bridges” are cross-chain swaps. A liquidity provider receives or becomes entitled to assets on the source chain and pays the user from pre-funded inventory on the destination. Neither source token nor destination token necessarily changes total supply. The resulting obligation is between the provider, protocol, and rebalancing system rather than between escrow and a minted wrapper.

Supply reconciliation should not manufacture bridge mints in this model. It should track destination inventory depletion, source inventory accumulation, fees, and unsettled provider receivables. If the network later uses a canonical bridge to rebalance, that later operation belongs to the bridge's own supply ledger. Counting both the fast fill and the later canonical settlement as user inflow would double-count movement, even though token supply itself never doubled.

### Synthetic and overlaid claims

A protocol can lock or accept one token as collateral and issue a distinct synthetic token, receipt, or debt claim. That is genuine new gross liability, not merely a cross-chain representation. Whether to consolidate it depends on the question. A protocol balance sheet must count the synthetic liability and its collateral separately; a measure of external base-token supply must not pretend the synthetic is another native unit. A broad measure of crypto “cash” or TVL should disclose both gross claims and eliminations, because recursive collateral can make gross balances expand without new external backing. [[TVL without double counting]] develops this point at the protocol level.

## The seven accounting tests

### 1. Contract and authority test

Enumerate every authorized token contract and every address or role able to mint, burn, pause, upgrade, register peers, or change the bridge adapter. Query implementation contracts behind proxies and check for alternative issuance entry points. A conservation proof over three known contracts is worthless if a fourth minter exists or governance can register an unmonitored peer.

### 2. Unit and decimal test

Normalize amounts into a common base unit without assuming equal decimals. LayerZero's documentation specifically treats decimal normalization as a cross-chain invariant concern. Integer conversion can create dust or truncation; a six-decimal chain cannot represent every amount from an eighteen-decimal chain. The reconciler should retain raw units, normalized units, and cumulative dust. Rounding loss must not be misclassified as a fee, burn, or deficit.

### 3. Flow-conservation test

For each message or transfer identifier, match exactly one source debit to at most one destination credit. Classify unmatched debits as pending, expired, refunded, or failed. Reject duplicate destination consumption. Over a window $[t_0,t_1]$, a burn-and-mint system should satisfy

$$
\Delta \sum_i S_i = I-X+M_{\mathrm{unpaired}}-B_{\mathrm{unpaired}},
$$

where $I$ and $X$ are legitimate external issuance and destruction, and the final terms isolate unmatched cross-chain credits and debits. Under a correctly measured steady state, paired bridge movements net to zero.

### 4. Backing test

For each lock-and-mint family, compare eligible escrow to all redeemable remote liabilities. “Eligible” excludes assets already promised elsewhere, inaccessible balances, unrelated tokens, and collateral held under a different controller or legal arrangement. Trace reverse transfers: destination burn should authorize no more than the corresponding source release. The independent research paper *Count of Monte Crypto* argues that end-to-end accounting invariants can detect or prevent broad classes of bridge failures; its important contribution here is the framing that message validity alone is insufficient without value conservation.

### 5. Completeness and elimination test

Reconcile three independently obtained views where possible: contract supply and balances, bridge events and message state, and issuer or protocol reports. Then list every eliminated account and reason. Never subtract “bridge wallets” merely because an address label says bridge: verify the contract role, token, chain, and whether the balance backs outstanding claims. Conversely, do not count a remote wrapper simply because an aggregator lists it as native.

### 6. Temporal cut-off test

Take all chain observations at defined block heights and map their timestamps. A wall-clock snapshot assembled from chains with different block times is not simultaneous. Preserve the source burn, observation cutoff, attestation state, destination mint, and any refund. This is an accounting cut-off problem: a valid transaction straddling the reporting boundary belongs in the in-flight schedule, not in an unexplained discrepancy bucket.

### 7. Redemption and stress test

Static equality does not prove that claims are redeemable. Test whether the reverse path is enabled, rate-limited, paused, capped, or dependent on privileged action. Wormhole describes rate limits and a Global Accountant that constrains transfers; Circle documents destination minter allowances that can cause an attempted mint to fail until allowance resets. Such controls can reduce loss but create pending claims and timing differences. Report nominal backing, immediately redeemable capacity, and queued obligations separately.

## A reproducible reconciliation workflow

First freeze a timestamp and block height for every chain. Build the contract-and-authority registry from primary documentation, verified source code, deployment transactions, and onchain role queries. Record decimals and proxy implementations.

Second extract raw contract supply, escrow balances, treasury exclusions, mint and burn events, bridge debits and credits, unique message identifiers, and pending-message state. Do not start from USD value; reconcile token units before applying a price. Price volatility can disguise a unit deficit or create a false one.

Third assign each balance to one of five columns: external native liability, external wrapped liability, backing collateral, issuer or protocol inventory, or pending transfer claim. Each row needs a contract, chain, controlling system, and evidence URL or transaction reference. Unknown rows remain unknown rather than being forced into circulation.

Fourth run the relevant mechanism equation. Burn-and-mint requires the cross-chain sum plus pending debits. Lock-and-mint requires escrow-to-remote-liability coverage and an elimination of escrow from consolidated external supply. Independent native issuance requires agreement with issuer-wide liability records. Inventory networks require no supply adjustment unless their rebalancing leg actually mints, burns, locks, or releases tokens.

Fifth explain every residual. Common legitimate causes include snapshot skew, fees, decimal dust, treasury movements, migrations, queued transfers, refunds, and provider-specific circulation exclusions. Dangerous causes include an unregistered contract, an unauthorized mint, duplicate message execution, released collateral without a destination burn, or remote supply exceeding eligible escrow.

Finally publish both the result and the bridge between result and evidence: the perimeter, formulas, raw blocks, exclusions, pending schedule, residual, and retrieval time. A single consolidated number without those schedules is not auditable.

## Why this matters

Supply errors propagate into market capitalization, stablecoin-flow narratives, collateral limits, proof-of-reserves claims, TVL, and governance analysis. Adding a home token and its escrow-backed wrappers inflates economic exposure. Ignoring legitimate omnichain-native deployments understates issuer liabilities. Treating a migration burn as destruction invents a deflation event. Treating a pending cross-chain mint as new issuance mistakes relocation for demand.

The same errors can hide insolvency. A bridge can display the correct destination `totalSupply` while its escrow is deficient. A burn-and-mint system can conserve supply across monitored chains while an unmonitored minter creates extra units. A dashboard can show healthy aggregate backing while one destination has exhausted its immediately redeemable liquidity. Accounting is therefore both measurement and security control.

The best output is not one “true supply” field. It is a small set of explicitly related measures: gross contract supply, chain circulation, consolidated external liability, eligible backing, in-flight claims, and immediately redeemable capacity. These measures let an investor, protocol risk manager, issuer, and bridge operator ask different questions without corrupting the underlying ledger.

## Sources

- [Circle Developers, CCTP Technical Guide](https://developers.circle.com/cctp/references/technical-guide) — primary description of source-domain burn, offchain attestation, and destination-domain mint.
- [Circle, Cross-Chain Transfer Protocol](https://www.circle.com/cross-chain-transfer-protocol) — issuer overview of native 1:1 USDC burn-and-mint transfers.
- [Circle Developers, CCTP V1 Limits](https://developers.circle.com/cctp/v1/limits) — primary documentation of burn limits and destination minter allowances; used to distinguish conserved supply from immediately executable mint capacity.
- [LayerZero, OFT Quickstart](https://docs.layerzero.network/v2/developers/evm/oft/quickstart) — primary description of OFT burn/mint and adapter lock/mint designs.
- [LayerZero, Value Transfer Implementations](https://docs.layerzero.network/v2/concepts/value-transfer-implementations) — primary specification of allowed debit/credit combinations, supply invariants, and decimal normalization.
- [Wormhole, Token Transfers Overview](https://wormhole.com/docs/products/token-transfers/overview/) — primary comparison of Native Token Transfers and Wrapped Token Transfers.
- [Wormhole, Native Token Transfers Overview](https://wormhole.com/docs/products/token-transfers/native-token-transfers/overview/) — primary description of burn-and-mint, hub-and-spoke, rate limiting, and Global Accountant behavior.
- [Wormhole, Wrapped Token Transfer Flow](https://wormhole.com/docs/products/token-transfers/wrapped-token-transfers/concepts/transfer-flow/) — primary description of locking original tokens and minting or burning wrapped representations.
- [Ethereum Improvement Proposal 20](https://eips.ethereum.org/EIPS/eip-20) — canonical ERC-20 interface definition, including `totalSupply`; it does not define circulation or cross-chain consolidation.
- [L2BEAT FAQ](https://l2beat.com/faq) — independent methodology distinguishing canonically bridged, externally bridged, natively minted, and omnichain-native value and applying mechanism-specific formulas.
- [Belchior et al., “Count of Monte Crypto: Accounting-based Defenses for Cross-Chain Bridges”](https://arxiv.org/abs/2410.01107) — independent research proposing end-to-end value-accounting defenses for bridges; treated as research evidence rather than a guarantee about any implementation.

## Open questions

- What public, chain-agnostic schema could express mint authorities, peer contracts, escrow eliminations, pending messages, and decimal conversions without relying on project-maintained labels?
- How should a consolidated supply series handle transfers that remain valid but unexecuted for months: as external claims, contingent claims, or extinguished supply?
- Which bridge implementations expose a complete onchain pending-message set, rather than requiring an offchain indexer to reconstruct it?
- Can issuer attestations and onchain reconciliations share one cryptographically verifiable cutoff across chains with different finality and timestamp behavior?
- How should immediately redeemable capacity be standardized when rate limits replenish continuously, governance can change them, and liquidity providers can mask queued canonical settlement?
