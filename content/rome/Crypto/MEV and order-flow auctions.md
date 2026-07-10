---
title: MEV and order-flow auctions
created: 2026-07-10
source: llm
status: seed
tags: [crypto, ethereum, mev, market-structure, auctions]
---
Maximum extractable value is the surplus created by control over transaction inclusion and ordering; auctions can redistribute that surplus, but they do not abolish it or automatically make a protocol token valuable.

Up: [[Crypto]]

## Why it matters

Every blockchain has to decide which valid transactions enter a scarce block and in what order. That decision can change execution prices, determine which liquidation succeeds, and decide who captures an arbitrage. The resulting value is not merely a technical footnote. It affects user execution, validator and sequencer income, builder concentration, censorship risk, and the economics of base assets and application tokens.

The central mistake is to treat “MEV” as one revenue line owned by a protocol. Ordering value is created across a supply chain. A user or wallet originates an order; a searcher discovers a state-dependent trade; a solver or builder combines transactions; a relay may mediate a block auction; and a proposer or sequencer gives the ordering finality. An auction changes bargaining power among these actors. It does not prove which one ultimately retains the surplus.

This page focuses on Ethereum-style proposer-builder separation (PBS) and application-level order-flow auctions (OFAs), while the distinctions also help analyze rollup sequencers. For the broader sequencer case, see [[Layer-2 tokens and the economics of sequencers]]. For the final step from protocol income to an investable claim, see [[From protocol fees to tokenholder value]].

## Ordering creates an option on future state

A transaction is an instruction conditional on the state in which it executes. If Alice submits an AMM swap with a minimum acceptable output, the same signed transaction may produce several possible outcomes depending on what executes immediately before it. Whoever influences ordering can choose among those state paths, subject to validity rules and Alice's limit.

MEV is the maximum value an actor can extract by including, excluding, or reordering transactions relative to some baseline. The word “maximum” describes an optimization opportunity, not an observed accounting number. No observer enumerates every possible block, every private order, every cross-domain leg, or every counterfactual. Published MEV measurements therefore tend to be strategy-specific lower bounds.

Common forms illustrate why welfare effects differ:

- **Arbitrage** aligns prices across venues. It can improve subsequent prices, but the arbitrageur captures value that might otherwise have gone to liquidity providers, traders, or the protocol.
- **Liquidation** keeps lending systems solvent by repaying unsafe debt in exchange for a bonus. Competition can return some bonus through bids, yet a liquidation race still imposes latency and infrastructure costs.
- **Sandwiching** places a buy before and a sell after a victim's predictable swap, worsening the victim's execution up to their slippage constraint. This is redistributive and adversarial from the user's perspective.
- **Backrunning** trades after an order moves a price. Unlike a sandwich, the backrun need not worsen the initiating transaction beyond the price impact inherent in its execution. An auction can rebate part of the backrun value to the user.
- **Inclusion and censorship value** arises when delay itself matters. A builder can omit an order; a proposer can choose among available blocks; and a sequencer can delay the disclosure or settlement of a transaction.

A useful decomposition for a particular opportunity is

$$V_{gross}=V_{searcher}+P_{intermediaries}+P_{proposer}+R_{user}+C,$$

where $V_{gross}$ is the gross realized opportunity, $V_{searcher}$ is searcher or solver profit, $P_{intermediaries}$ covers builder, relay, wallet, or auctioneer retention, $P_{proposer}$ is the payment reaching the block proposer or sequencer, $R_{user}$ is explicit price improvement or rebate, and $C$ is execution and infrastructure cost. This is an accounting lens, not a protocol identity: components can be hidden, vertically integrated, or negative after failed attempts. It prevents the common error of calling the gross arbitrage “validator revenue.”

## The Ethereum block-production supply chain

Ethereum's off-protocol PBS implementation separates transaction search and block construction from the validator selected to propose a block. Searchers form bundles or otherwise send transactions to builders. Builders combine public transactions, private flow, and searcher bundles into candidate execution payloads. They submit payload headers and bids to relays. A validator running MEV-Boost queries its configured relays, selects the highest valid bid it receives, signs a blinded block, and obtains the payload for publication.

The blindness is important: the proposer commits to a header before learning the complete payload, reducing its ability to copy a builder's strategy. The relay is important too. It validates submissions, withholds the payload until the proposer commits, and helps ensure delivery. That is a functional design, but it introduces off-protocol trust, availability, timing, and censorship dependencies. The Flashbots relay implementation explicitly describes the relay as a trusted mediator, while MEV-Boost lets a validator connect to multiple relays and fall back to local production if bids do not meet a configured minimum.

Competition among builders can transfer much of a block's marginal value into the winning bid. In a simple private-values auction, a builder that bids too little loses and one that bids too much loses money, so rivalry pushes bids toward expected block value. The proposer benefits without needing search infrastructure. PBS can therefore reduce the staking-return advantage of validators vertically integrated with sophisticated searchers.

But this does not make block building decentralized. A builder with better algorithms, lower latency, stronger financing, or exclusive private order flow can construct a more valuable block and win repeatedly. Access to flow is especially powerful because a transaction unseen by rivals creates combinatorial opportunities they cannot reproduce. Empirical work on MEV-Boost auctions finds that winning share correlates with order-flow access and that exclusive flow can support builder advantage. The direction is intuitive even when exact market shares change: an auction is competitive only over information available to its bidders.

PBS also does not eliminate censorship. A dominant builder or relay can filter transactions; a proposer choosing the highest bid may unknowingly propagate that policy. Ethereum research therefore pairs PBS with ideas such as proposer inclusion lists, in which a proposer requires specified transactions to appear, and encrypted mempools, which reduce advance knowledge of transaction content. These mechanisms trade off enforcement complexity, bandwidth, latency, and the builder's ability to optimize a payload.

Enshrined PBS proposes moving the builder-proposer exchange into Ethereum's consensus rules. EIP-7732 specifies an execution payload bid and separates timely consensus-block attestation from payload availability through a payload-timeliness mechanism. This could reduce reliance on trusted third-party relays and give payload execution more time. It does not, by itself, democratize order-flow access or erase builder economies of scale. Protocolizing settlement of the auction is different from equalizing the inputs to the auction.

## Order-flow auctions happen earlier

A block auction sells the right to supply a complete block to a proposer. An order-flow auction sells or allocates the right to execute around, against, or on behalf of one or more user orders. The two layers can coexist: a solver wins access to an order, builds a settlement or backrun bundle, and then relies on a builder to include it in a block.

In a basic OFA, a wallet or application routes a signed order to an auctioneer rather than broadcasting it immediately to a public mempool. Competing searchers or solvers submit bids describing execution and a payment or price improvement. The auction selects a winner under stated rules, and the winner sends an atomic bundle or settlement downstream. The initiating user may receive a rebate, better output, gas sponsorship, or protection against frontrunning.

Several designs sit under the same label:

1. **Backrun-right auctions.** Searchers bid for the right to trade immediately after a user's transaction. The user's transaction retains its stated execution, while some expected backrun profit is returned as a rebate.
2. **Request-for-quote competition.** Market makers quote an all-in execution price before the order reaches an AMM. The best quote wins, subject to fill and settlement conditions.
3. **Intent or solver auctions.** The user states an outcome—such as selling one asset for at least a minimum amount—without prescribing the route. Solvers compete over AMMs, private liquidity, coincidence of wants, and batching. CoW Protocol describes its mechanism as a permissionless combinatorial batch auction, allowing compatible orders to cross directly before external liquidity is used.
4. **Dutch or descending-price auctions.** The execution terms evolve over time until a filler accepts them. This can discover the price needed to attract execution, though latency and filler concentration still matter.
5. **Batch auctions.** Orders collected during a window clear together under a rule. Batching can reduce the importance of nanosecond priority and enable coincidence of wants, but batch boundaries create their own timing option and users bear delay.

An OFA can improve user outcomes when bidders genuinely compete, the auction reveals enough information to support bids without enabling theft, settlement is enforceable, and the user receives a verifiable share of surplus. It can also turn a public-mempool sandwich target into protected private flow. Research measuring auction-enhanced interfaces has found price improvement in particular samples, but those results should not be generalized into a permanent basis-point promise: trade size, pair, volatility, auction rules, and bidder participation all matter.

## The mechanism-design tradeoffs

**Information leakage.** Bidders need enough information to price the order. Revealing exact calldata can let them copy or attack it elsewhere. Revealing only hints protects the user but can reduce participation and bid accuracy. Commit-reveal, trusted execution environments, or cryptographic privacy can shift this frontier but add latency, trust, or implementation risk.

**Winner's curse and failed settlement.** A bidder prices an opportunity before the final block state is known. Competition can induce aggressive bids; state changes can make the opportunity disappear. Atomic bundles prevent partial execution but do not eliminate wasted computation or failed inclusion. Auction rules need penalties, reputation, or conditional payments if non-delivery is costly.

**Latency versus competition.** Waiting longer can attract more bids and better price discovery, but execution-sensitive users value speed and certainty. Very short auctions favor colocated, technically sophisticated bidders. Longer batches expose users to market movement.

**Exclusivity versus reach.** A wallet may receive a larger payment by selling exclusive access to a builder or solver. Yet exclusive flow makes rival builders less competitive and can concentrate downstream block production. The locally best rebate can worsen the global market structure that sets future rebates.

**Observable rebate versus hidden retention.** A headline “MEV refund” is not the same as full surplus return. The counterfactual opportunity is unobservable, and the auctioneer may keep a spread. Evaluation needs realized execution against a defensible benchmark, auction fees, revert treatment, bid distribution, and the identity of affiliated bidders—not just the nominal rebate.

**Permissionlessness versus performance.** Open entry broadens competition but exposes auctions to spam, griefing, and non-performing bids. Whitelists and reputation can improve reliability while becoming gatekeeping mechanisms. A protocol may be permissionless at contract settlement yet concentrated at the solver, API, or routing layer.

## Who captures the value?

Capture depends on the scarce complement. Searchers capture value when strategy knowledge is rare. Builders capture it when block optimization, latency, capital, or private flow is scarce. Wallets and applications capture it when user distribution is scarce. Proposers capture it when builders compete aggressively for a unique slot. Users capture it when routers force competition and rebate surplus. Liquidity providers may lose adverse-selection value even if a trader receives a better quote.

Vertical integration makes labels misleading. A firm may operate a wallet endpoint, searcher, builder, and market maker. It can bid aggressively at one layer because it earns at another. A zero-profit builder can rationally exist if building protects an affiliated trading business or order-flow franchise. Analysis should consolidate related entities where evidence permits and avoid inferring economic profit from a single address or bid stream.

The relevant comparison is not “auction versus no MEV.” It is:

- what ordering opportunity exists under each design;
- which participants are allowed and informed enough to bid;
- what fraction of realized value reaches the user, proposer, or protocol;
- what new trust, censorship, latency, and concentration risks appear; and
- what happens when the preferred route fails.

Private flow can reduce harmful public-mempool extraction while making the market harder to audit. Public auctions can reveal competition while leaking strategy. A high proposer bid can indicate efficient surplus transfer or a builder subsidizing share. No single metric resolves these alternatives.

## Why MEV does not automatically support a token

Ordering value is economically real, but the route from MEV to token value has several gates.

First, identify the **recipient**. On Ethereum L1, a successful builder bid is paid to the proposer in ETH. This supports validator revenue and demand to participate in block proposal; it is not revenue of an arbitrary application token. On a rollup, sequencer proceeds may accrue to a company, foundation, DAO treasury, or service provider depending on the operating and legal structure.

Second, identify the **asset denomination**. An auction may charge ETH, a stablecoin, or the user's output asset. A governance token is not exposed merely because it governs parameters. Mandatory token payment can create transactional demand, but users or operators may acquire and immediately sell the token, limiting durable value retention.

Third, identify an enforceable **distribution rule**. Tokenholders benefit only if cash flow funds burn, buybacks, staking rewards, treasury assets they control, or another credible claim. Governance can redirect revenue away from holders; administrators can change parameters; expenses, rebates, and operator payments come before residual value. Gross MEV and net distributable income are different quantities.

Fourth, account for **competition and incidence**. A protocol that auctions order flow may return most value to users to preserve routing share. Wallets can demand payments; solvers need profit; proposers capture bids. Competition can make the auction valuable to users while leaving little residual for a token.

Fifth, compare revenue with **supply and valuation**. Even recurring net income may be immaterial beside token emissions, insider unlocks, treasury sales, or a large fully diluted valuation. See [[Token emissions and real yield]] and [[Crypto float market cap and fully diluted value]].

A disciplined token-capture claim should therefore trace:

$$\text{gross ordering value}\rightarrow\text{auction payment}\rightarrow\text{protocol net revenue}\rightarrow\text{token-linked distribution}\rightarrow\text{per-token value}.$$

Evidence is required at every arrow: contracts and addresses, auction rules, actual flows, expenses, governance authority, distribution transactions, circulating supply, and dilution. If one arrow is only a proposal or narrative, the valuation case remains conditional.

## A practical diligence checklist

For any MEV or order-flow product, record the chain and transaction domain; who observes orders first; whether flow is public, private, encrypted, or hinted; auction object and winner rule; eligible bidders; settlement and fallback; user protection; explicit fee and rebate formula; proposer or sequencer payment; related-party integration; censorship controls; and historical concentration.

Then test three counterfactuals. What would the user have received through the public mempool or a competing router? What would the proposer have earned from local block construction? What does the tokenholder receive if volume doubles but competition forces all incremental surplus into rebates? These questions separate protocol usefulness from token investment merit.

## Sources

- [Ethereum.org, “Maximal extractable value (MEV)”](https://ethereum.org/developers/docs/mev/) — primary ecosystem explanation of MEV, PBS, blinded payloads, and the Builder API.
- [Ethereum.org, “Proposer-builder separation”](https://ethereum.org/roadmap/pbs/) — Ethereum roadmap treatment of builder/proposer roles, censorship, inclusion lists, and current research status.
- [EIP-7732, “Enshrined Proposer-Builder Separation”](https://eips.ethereum.org/EIPS/eip-7732) — proposed protocol specification for execution payload bids and payload timeliness.
- [Flashbots, `mev-boost`](https://github.com/flashbots/mev-boost) — primary implementation documentation for validator-relay-builder requests, bid selection, minimum bids, and local fallback.
- [Flashbots, `mev-boost-relay`](https://github.com/flashbots/mev-boost-relay) — primary implementation documentation describing relay responsibilities and trust assumptions.
- [Flashbots documentation](https://docs.flashbots.net/) — primary overview of MEV-Boost, Protect, and MEV-Share product roles.
- [CoW Protocol documentation](https://docs.cow.fi/) — primary description of permissionless combinatorial batch auctions.
- [Chi et al., “Who Wins Ethereum Block Building Auctions and Why?”](https://arxiv.org/abs/2407.13931) — independent empirical analysis of builder auctions and order-flow advantage.
- [Kolinko et al., “Quantifying Price Improvement in Order Flow Auctions”](https://arxiv.org/abs/2405.00537) — independent empirical study of interface-level auction execution outcomes; sample results are not universal guarantees.

## Open questions

- How much exclusive order flow is controlled by vertically integrated builders when affiliated entities and private bilateral agreements are consolidated?
- Which execution benchmark best distinguishes genuine user price improvement from favorable market movement during the auction window?
- Can inclusion lists and encrypted order flow preserve censorship resistance without giving dominant builders another scale advantage?
- How should rebates be audited when the full counterfactual block and losing bids are not public?
- Which rollups route sequencer or OFA proceeds to token-controlled treasuries under enforceable rules rather than discretionary promises?
