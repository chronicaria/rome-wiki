---
title: From protocol fees to tokenholder value
created: 2026-07-09
source: llm
status: seed
tags: [crypto, markets, defi, tokenomics, quantitative-research]
as_of: 2026-07-09
desk: Crypto markets
review_after: 2026-08-09
---
Protocol fees become tokenholder value only after an auditable chain of contracts, governance choices, operating claims, and supply effects connects what users pay to the particular token a holder owns.

Up: [[Crypto]]

The phrase “the protocol made $100 million” often compresses several different facts into one bullish sentence. Users may have paid $100 million, but liquidity providers may have received nearly all of it. A treasury may have collected the remainder without any obligation to distribute it. A governance vote may authorize a buyback that has not executed. A burn may reduce future dilution without giving current holders cash. A staker may receive fees only after locking a token, accepting smart-contract risk, and performing governance work. The liquid token can therefore be economically different from the active position advertised beside it.

The right question is not whether a protocol has fees. It is: **what enforceable or reliably governed path takes value from an external payer to this token, net of the costs and new tokens required to produce it?** That question connects [[Token emissions and real yield]], [[Unlock overhang and circulating supply]], [[Governance capture and admin-key risk]], and the asset-level work in [[Crypto top 100 research universe]].

## Start with a cash-flow waterfall

A useful analysis separates five layers that dashboards and marketing pages often blur.

1. **Gross user fees** are all amounts users pay for swaps, borrowing, liquidation, issuance, sequencing, storage, or another service.
2. **Supplier payments** compensate liquidity providers, lenders, validators, keepers, market makers, sequencers, or other parties that directly produce the service.
3. **Protocol revenue** is the portion retained by contracts, a treasury, a foundation, or a team after supplier payments.
4. **Tokenholder-directed value** is the portion actually distributed, used to acquire and burn the token, or otherwise made economically specific to holders.
5. **Net holder value** subtracts token incentives, dilution, operating claims, taxes where applicable, execution leakage, and risks required to access the flow.

DefiLlama’s published definitions make a similar distinction: “fees” are amounts paid by users; “revenue” is the subset retained by the protocol; and tokenholder revenue is the subset returned through distributions, staking rewards, buyback-and-burn, or fee burns. Those categories are useful bookkeeping conventions, not a substitute for inspecting contracts and governance. Two dashboards can classify the same flow differently, especially when a treasury, affiliated interface, or incentive program sits between the user and holder.

A compact waterfall for period $t$ is

$$
F_t = S_t + R_t,
$$

where $F_t$ is gross fees, $S_t$ is payments to service suppliers, and $R_t$ is protocol revenue. If $H_t$ is the part routed toward tokenholders and $C_t$ includes incentives and other holder-borne costs, then a first-pass net measure is

$$
N_t = H_t - C_t.
$$

This accounting is deliberately conservative. It refuses to count treasury revenue as holder revenue merely because token governance could someday redirect it. It also refuses to count a token-denominated distribution at its displayed market value without recording the associated issuance.

## The destination matters more than the headline

### Supplier revenue is not protocol revenue

An automated market maker can process enormous volume and charge meaningful swap fees while directing those fees to liquidity providers. Those payments are economically real, but they compensate LP capital and risks such as adverse selection, inventory exposure, and [[Impermanent loss]]. They do not automatically accrue to the governance token.

Uniswap v2 illustrates the distinction cleanly. Its original white paper specified a 0.30% trading fee and an optional protocol take implemented by minting liquidity tokens from accumulated pool growth. Under the white paper's assumptions, activation is economically equivalent to roughly 0.25% for LPs and 0.05% for the protocol rather than a direct 0.05% transfer on every swap. The existence of a switch was therefore not the same as an active claim. As of this article’s date, Uniswap’s developer documentation reports that governance-approved protocol fees are active on v2 and selected v3 pools, with fees collected into TokenJar and converted into UNI burns through the Firepit design. This note has not independently reconciled every activation transaction, deployed address, pool, and chain, so the documentation is evidence of a reported current mechanism rather than proof of universal activation. The historical change is important: old analyses saying “UNI has no fee capture” and new analyses saying “all Uniswap fees go to UNI” are both too broad unless dated and scoped by version, pool, and chain.

### Treasury revenue is an option governed by people

Revenue deposited into a DAO treasury can finance development, security audits, grants, legal defense, liquidity, acquisitions, or distributions. Those uses may strengthen the network. Yet a liquid token is not necessarily a legal share of treasury assets, and governance can redirect the funds. Treasury value is best treated as a governed option whose exercise depends on voting power, delegation, quorum, timelocks, multisig authority, and the protocol’s continuing need for expenditures.

An analyst should map the receiving address and answer: who controls it; can an admin upgrade the routing contract; what vote can change the split; what delay follows a vote; and can insiders, foundations, or delegated voting blocs dominate the result? This is where fee analysis becomes inseparable from [[Governance capture and admin-key risk]]. A high revenue number paired with discretionary routing can deserve a larger governance discount than a smaller, immutable distribution.

### Direct distributions create a claim but also a perimeter

Some systems distribute fees to lockers or stakers. This is the closest crypto analogue to a cash distribution, but the eligible instrument must be named precisely. If only a vote-escrowed position receives fees, liquid spot holders own an option to lock, not the distribution itself. Locking introduces duration, illiquidity, contract, delegation, slashing, and governance-participation risks. A wrapper may offer liquidity but add another contract and sometimes another governance layer.

The distinction is visible in Rome’s [[AERO deep memo]]: Aerodrome directs swap fees and external incentives to veAERO voters, while liquid AERO is a dilutable option to become a voter. Likewise, [[PENDLE deep memo]] distinguishes the liquid token from its active reward mechanism. Quoting “holder revenue” without naming the eligible holder can misstate the asset being valued.

### Buybacks transfer value only under specific conditions

A buyback spends an externally valuable asset to acquire the protocol token. That creates token-specific demand, but the final treatment matters.

- A **buy-and-burn** removes acquired tokens from circulating and total supply if the burn is irreversible.
- A **buy-and-distribute** transfers tokens to eligible participants but may later return them to circulation.
- A **treasury buyback** merely swaps treasury assets for its own token unless the purchased tokens are burned or credibly locked.
- A **market-support mandate** may be discretionary, time-limited, or cancellable.

Execution also matters. Thin liquidity, predictable schedules, MEV, and adverse selection can cause a protocol to receive fewer tokens for its revenue than a dashboard assumes. Onchain claims should identify the revenue asset, source wallet, execution contract, venues, dates or blocks, amount spent, amount acquired, destination, and any tokens later reissued.

The mechanism described in Uniswap’s current developer documentation is instructive because it makes the intended conversion path explicit: protocol-fee assets accumulate in TokenJar, and permissionless actors can claim them by burning the required quantity of UNI through Firepit. That is different from a treasury periodically promising to buy tokens. It is still not the same as a pro-rata cash distribution: the benefit arrives through supply reduction and depends on token demand, governance parameters, fee volume, and the relationship between burns and ongoing issuance. Asset-level diligence must still verify the deployed contracts and activated scope.

### Burns are not all economically equivalent

A fee burn destroys the native asset users must pay. Ethereum’s EIP-1559, for example, burns the base fee while priority fees go to block producers. The burn counterbalances issuance; it does not guarantee deflation, because supply change depends on both sides:

$$
\Delta Q_t = I_t - B_t,
$$

where $I_t$ is issuance and $B_t$ is burned supply. A protocol can advertise a large burn while total supply still expands. Conversely, burning treasury tokens that were unlikely to circulate can have less near-term float impact than buying liquid tokens from the market and burning them. A “retroactive” treasury burn is an accounting and governance event, not evidence that historical fees were actually collected.

The valuation claim should therefore use **net issuance**, not burns alone, and distinguish total supply from circulating float. [[Unlock overhang and circulating supply]] adds vesting releases, treasury sales, and wrapper migrations that a simple mint-minus-burn series can miss.

## Four tests for genuine capture

### 1. The identity test

Name the exact economic instrument. Is it the native coin, liquid governance token, vote-escrowed lock, staking receipt, wrapped representation, or LP position? Record chain and contract. A top-100 provider listing can represent a wrapper or staking claim rather than the economic parent; [[Crypto asset identity registry]] exists to prevent the ticker from substituting for identity.

### 2. The traceability test

Follow the assets rather than the prose. Start with the user transaction, identify the fee event and recipient, follow transfers into the collection or treasury contract, then follow any swap, distribution, burn, or staking reward. For a sample period, reconcile opening balance plus inflows minus outflows to closing balance. Unexplained residuals are not automatically holder value.

This test also catches double counting. A dashboard might count a borrower’s interest as fees, the treasury’s share as revenue, and a later buyback as holder revenue. Those are stages of one waterfall, not three independent income streams.

### 3. The counterfactual test

Ask who would receive the flow if the token did not exist. LP fees often pay for capital and market-making risk; validator rewards pay for security; liquidation penalties pay keepers or backstops. Redirecting them to holders could make the service worse, drive suppliers away, or force the protocol to replace the flow with emissions. The sustainable take rate is constrained by competition and service quality.

This is why “turn on the fee switch” is not free value. In Uniswap v2, a protocol fee reduces the LP portion of the fixed trading fee. Governance must consider whether the retained amount harms liquidity, routing, or market share. Value capture that shrinks the underlying business can be self-defeating.

### 4. The net-value test

Compare holder-directed cash flow with every token-funded subsidy and supply increase. A protocol that distributes $10 million of fees while issuing $30 million of tokens to attract the activity has negative simple net earnings under the period’s market prices. Price-based comparisons are imperfect—the token price is endogenous and can fall as emissions are sold—but they reveal when “yield” is mostly redistribution from non-recipients or future holders.

Also subtract recurring non-token costs borne upstream: oracle payments, sequencer costs, audit and security budgets, bad-debt coverage, interface rebates, and foundation operations. Crypto protocols do not map neatly onto corporations, but ignoring necessary costs does not make them disappear.

## Valuation without pretending a token is stock

A discounted-cash-flow analogy is most defensible when distributions are automatic, denominated in an external asset, legally and technically accessible, and difficult for governance to revoke. Even then, tokenholders may lack corporate rights to residual assets, legal remedies, audited accounts, or protection from related-party actions. A burn mechanism is more indirect: it changes supply, but price depends on future demand and market structure.

A practical comparative table should therefore report:

| Layer | Question | Evidence |
| --- | --- | --- |
| Usage | Who pays what, and for which service? | Contract events, fee parameters, volume definition |
| Supplier split | What compensates LPs, lenders, validators, or keepers? | Routing code and pool accounting |
| Protocol take | What reaches controlled contracts? | Recipient addresses and reconciled balances |
| Holder route | Distribution, buyback, burn, lock, or none? | Executed transactions, not proposals alone |
| Governance | Who can change or pause the route? | Votes, timelocks, multisigs, upgrade keys |
| Net supply | Do burns exceed issuance and unlocks? | Mint, burn, vesting, treasury, circulating data |
| Access | Which holder qualifies and at what risk? | Staking/locking terms, chain and jurisdiction |

Multiples such as market capitalization divided by holder revenue can organize comparisons, but they are not stand-alone valuations. The denominator may be cyclical, token-price-dependent, incentive-funded, concentrated in one chain, or available only to locked holders. Fully diluted value can be useful when future issuance is contractually scheduled, while circulating capitalization better describes current float; neither resolves capture quality.

## Evidence that should change the conclusion

A strong capture thesis gets stronger when contracts automatically route externally funded fees; several periods reconcile cleanly; governance power is distributed; holder eligibility is clear; supplier quality persists after the take rate; and buybacks or distributions exceed emissions and unlock-related selling. It weakens when revenue stays in a discretionary treasury, routing changes frequently, insiders control the vote, usage collapses after incentives, or the eligible position requires risks omitted from the headline yield.

The final output should be a dated mechanism map, not a label. “Fee-generating protocol” describes a product. “Tokenholder value” describes a specific, conditional destination in a financial and governance system.

## Why it matters

Protocol usage and token economics can diverge for years. Keeping the waterfall explicit prevents three common errors: valuing supplier revenue as if it belonged to tokenholders, treating governance-controlled treasury balances as a present claim, and ignoring dilution while celebrating burns or distributions. The method also makes competing protocols comparable without pretending that every token is equity.

For Rome’s conviction subset, it clarifies why [[AERO memo]] focuses on veAERO rather than passive AERO, why [[PENDLE memo]] asks whether buybacks overcome emissions, and why [[SYRUP deep memo]] treats a governance-directed buyback budget as less durable than an immutable property right. It is an anti-hype filter expressed as accounting.

## Sources

- [DefiLlama, “Data Definitions”](https://docs.llama.fi/analysts/data-definitions) — definitions of fees, protocol revenue, tokenholder revenue, incentives, and earnings; accessed 2026-07-09.
- [Uniswap v2 Core white paper](https://app.uniswap.org/whitepaper.pdf) — original fee and optional protocol-fee mechanism.
- [Uniswap Developers, “Fees”](https://developers.uniswap.org/docs/get-started/concepts/fees) — current protocol-fee scope, rates, TokenJar, and Firepit mechanism; accessed 2026-07-09.
- [Uniswap Governance, “UNIfication Proposal”](https://gov.uniswap.org/t/unification-proposal/25881) — governance rationale, rollout, sequencer-fee routing, and burn design.
- [Ethereum Improvement Proposal 1559](https://eips.ethereum.org/EIPS/eip-1559) — base-fee burn, priority-fee destination, and the reason burn does not guarantee fixed or declining supply.
- [Li, Naik, Papanicolaou, and Schönleber, “Yield Farming for Liquidity Provision”](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4422213) — independent treatment of LP returns, impermanent loss, gas costs, and price impact.

## Open questions

- What standardized reconciliation can compare onchain fee collectors across chains without double-counting bridged or swapped assets?
- How should a valuation discount governance-revocable capture relative to immutable routing?
- When does a burn create more holder value than an equivalent direct distribution after taxes, liquidity, and heterogeneous holder preferences?
- Which protocols disclose operating and security costs well enough to estimate holder value after necessary expenditures rather than after supplier payments alone?
