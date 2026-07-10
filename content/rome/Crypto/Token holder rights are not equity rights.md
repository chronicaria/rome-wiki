---
title: Token holder rights are not equity rights
created: 2026-07-10
source: llm
status: seed
tags: [crypto, markets, tokenomics, governance, regulation]
as_of: 2026-07-10
desk: crypto-markets
review_after: 2027-01-10
---

A token is a technical object whose economic value depends on a specific bundle of contractual, onchain, governance, and social powers; possession alone does not create the voting, cash-flow, information, fiduciary, or liquidation rights normally associated with corporate equity.

Up: [[Crypto]]

Related: [[From protocol fees to tokenholder value]] · [[Governance capture and admin-key risk]] · [[Token governance delegation markets]] · [[Token buybacks and holder value]] · [[Crypto bankruptcy claims and recovery waterfalls]]

## The category error

Crypto analysis often borrows the language of stocks because both tokens and shares trade, have quoted market capitalizations, and may appear to benefit when an associated project grows. The analogy is useful only as a question generator. It is dangerous as an answer.

A share of common stock is an ownership interest in a legal corporation. Its precise rights vary with the charter, bylaws, class, jurisdiction, and applicable law, but the recognizable package can include voting for directors, receiving a declared dividend, inspecting specified records, suing through direct or derivative procedures, and sharing residually in assets after senior claims in liquidation. These rights exist inside a legal system with an identified issuer, board, courts, procedural rules, and an insolvency perimeter.

An ordinary fungible token begins somewhere else. At the technical layer it is a state entry controlled through a cryptographic key and governed by program logic. The contract may let the holder transfer it, delegate votes, redeem it, burn it, stake it, or present it to another contract. None of those functions automatically makes the holder an owner of a developer company, foundation, protocol treasury, brand, code repository, validator network, or stream of fees. Every claimed right must be located in an actual instrument and followed through its enforcement path.

This is not a claim that tokens have no rights. Some are expressly tokenized securities; some are contractual claims, fund interests, debt obligations, stablecoin redemption liabilities, receipts for deposited property, or governance instruments with real executable authority. The SEC's 2026 educational material emphasizes both points: a digital security is still a security, while the rights represented by a crypto asset can differ materially from the economic and voting rights of an underlying security. Classification therefore starts with the instrument, not the file format or ticker.

## A six-layer rights map

The cleanest analysis inventories six layers separately. Collapsing them into a single word such as “utility” or “governance” hides the very distinctions that determine value.

### 1. Possession and transfer

Ask what control of the relevant private key permits. Can the token be transferred without issuer consent? Can an administrator pause transfers, blacklist an address, upgrade the contract, seize balances, or migrate the asset? Is the holder controlling a native chain asset, an ERC-20-style contract balance, a bridged representation, a custodial account entry, or a receipt token?

Technical possession can be strong without being ownership of an enterprise. Bitcoin illustrates the distinction: control of keys enables transfer under network rules, but it does not convey a claim on a Bitcoin corporation, because no such corporate issuer sits behind the protocol. Conversely, a token held through an exchange may be an account claim against the exchange rather than direct control of the onchain asset. The same ticker can therefore denote materially different legal and operational positions.

### 2. Use, redemption, and service access

Some tokens pay transaction fees, purchase computation, unlock a product, prove membership, or redeem against an asset or service. These are specific consumption or claim rights. Their value depends on the demand for the service, substitution possibilities, issuer promises, contract design, and the continuity of the system.

Redemption must be tested as a process rather than accepted as a slogan. Who owes delivery? What asset or service is delivered? Is redemption available directly to every holder or only eligible institutions? Are there minimum sizes, fees, delays, identity checks, jurisdictional limits, suspension clauses, or insolvency qualifications? An onchain burn instruction is not enough if an offchain entity retains discretion over the corresponding payment.

### 3. Governance power

A governance token may permit proposal creation, voting, delegation, veto, or parameter changes. The meaningful question is what an approved vote can actually cause. Some governance contracts execute transactions automatically after quorum and a timelock. Others merely signal to a multisig, foundation, company, core team, or validator community. Still others govern a narrow treasury while upgrade keys or intellectual property remain elsewhere.

Ethereum's own governance documentation is a useful counterexample to token-equals-equity thinking. Ethereum describes core-protocol governance as an offchain process involving developers, node operators, validators, users, and ETH holders; holding ETH does not elect a board that owns Ethereum or mechanically command client operators. Applications built on Ethereum may use onchain token voting, but that is a separate arrangement.

Even fully executable voting is not the same as corporate suffrage. A corporate vote operates within duties, books and records, meeting rules, class protections, and judicial remedies. Token voting may be pseudonymous, freely borrowable, delegated, concentrated, or split across chains. Its protection comes from contract code, governance design, social coordination, and whatever legal agreements apply—not from superficial resemblance to one-share-one-vote.

### 4. Economic flows

The analyst should trace each flow from payer to final recipient. Users may pay fees to liquidity providers, validators, sequencers, application developers, a treasury, a foundation, stakers, or a burn address. Protocol “revenue” is not automatically tokenholder revenue. Treasury income is not holder income. A burn can reduce a supply measure without creating a redeemable claim. A buyback can acquire tokens that are later reissued as incentives.

A real economic right should answer four questions: what triggers the payment; who is legally or programmatically obligated; which token or locked instrument qualifies; and what can interrupt the flow? Governance may be able to turn a fee switch off, redirect funds, mint dilution, change eligibility, or upgrade the mechanism. When the benefit is discretionary, describe it as contingent policy rather than a present yield.

Dividend analogies are especially prone to error. Common shareholders generally receive dividends only when properly declared, but they hold their position within a corporation whose assets, liabilities, directors, and residual claim are legally defined. A tokenholder who receives staking rewards might instead be paid for validation work, exposed to slashing, diluted by issuance, or earning incentives funded by other tokenholders. The cash-flow label does not settle the nature of the claim.

### 5. Information, accountability, and remedies

Markets price rights partly because holders can investigate and enforce them. Public companies face disclosure regimes; corporate statutes and governing documents can provide record-inspection and litigation routes. Token projects vary radically. Open-source code and public ledgers can expose transactions, yet they may not reveal offchain contracts, payroll, related-party arrangements, beneficial control, liabilities, reserve custody, or the identity of a person capable of honoring a judgment.

For each asserted right, identify the remedy after breach. Can the holder call a contract function without permission? Can governance replace an operator? Does a named legal entity promise performance? Which law and forum govern? Is there an arbitration clause, liability cap, unilateral-amendment power, or disclaimer? Can an adverse judgment reach assets? If the answer is only that tokenholders can sell or fork, the position may have an exit option or social sanction, but not a conventional enforceable claim.

Code is itself an enforcement mechanism, but it has a bounded domain. It can reject an unauthorized state transition. It cannot necessarily compel an issuer to maintain a website, deliver dollars held at a bank, assign intellectual property, provide audits, or keep developers working. Upgradeability also means the apparent rule may be subject to a separate authority path. [[Governance capture and admin-key risk]] maps that shortest path.

### 6. Insolvency and residual value

Equity's residual character becomes clearest in liquidation: creditors and preferred claims stand ahead of common stock, but the corporate perimeter and priority structure tell shareholders what, if anything, remains. Many tokenholders have no comparable residual claim on the associated project's assets.

If a foundation shuts down, ownership of its bank account, trademarks, equity investments, and intellectual property does not pass to holders merely because the token price once capitalized expectations about its work. A DAO treasury may be controllable by token governance, but control can depend on quorum, delegates, a multisig, a legal wrapper, sanctions constraints, and executable contract authority. A stablecoin or custodial receipt raises different questions about segregation, beneficial ownership, issuer liabilities, and bankruptcy remoteness. [[Crypto bankruptcy claims and recovery waterfalls]] should therefore be read alongside any token-rights thesis.

## Four recurring token structures

### Native network assets

A native asset commonly pays fees, secures consensus, and transfers value under network rules. Holding may enable staking or delegation, but it need not confer formal protocol governance or a legal claim on a foundation. Value can arise from settlement demand, collateral use, monetary policy, scarcity, and network security without an issuer-style residual interest.

### Governance tokens

These range from nonbinding polling instruments to keys controlling upgradeable contracts and treasuries. Audit the proposal threshold, voting unit, delegation, quorum, delay, veto, emergency authority, implementation step, and controlled assets. Then separate the right to decide from the right to receive. A vote over fee policy is not the same as a present claim on fees.

### Redeemable claims and receipts

Stablecoins, wrapped assets, liquid-staking tokens, fund tokens, and tokenized securities can represent claims on underlying assets or positions. The relevant comparison may be debt, custody, bailment, a fund share, a deposit receipt, or a contractual redemption promise—not equity. Examine the issuer, custodian, reserve, eligibility rules, priority, and representation chain. [[Wrapped assets and duplicate crypto exposure]] and [[Stablecoin reserve and redemption risk]] cover the additional dependency layers.

### Utility and access tokens

An access token can be economically valuable when a scarce service requires it. That does not make holders owners of the service provider. Demand may accrue to the token through mandatory payment, staking, collateral, or burn rules, but the provider may also change prices, accept substitutes, subsidize usage, or abandon the product. The analysis belongs in unit economics and contract durability, not a price-to-earnings shortcut.

## A practical rights audit

Start with the canonical provider ID and contract address so a wrapper, migrated contract, or namesake is not mistaken for the intended asset. Preserve the exact chain and as-of date.

Then assemble a rights matrix with rows for transfer, redemption, service access, proposal, vote, delegation, veto, treasury control, upgrade control, fee receipt, staking eligibility, information, litigation, and liquidation. For each row record:

- the source of the right: protocol rule, smart contract, terms, charter, statute, or social convention;
- the holder who qualifies: any address, staked token, delegated balance, eligible customer, registered owner, or intermediary;
- the obligor or executor: contract, validator set, multisig, foundation, company, custodian, or no identified party;
- conditions and senior claims: quorum, lockup, KYC, geography, minimum size, fees, discretion, liabilities, or priority;
- amendment power: immutable rule, governance vote, admin key, issuer discretion, fork, or legal change;
- remedy and venue after failure.

Do not score every row equally. A protocol may create genuine transfer and voting power but no fee or liquidation claim. Another token may have narrow governance yet a robust contractual redemption path. The correct conclusion is a profile, not a binary “has utility” label.

Finally, reconcile rights with valuation. Circulating market capitalization multiplies a marginal price by reported circulating supply; it does not measure the enterprise value of an issuer or the net present value of enforceable distributions. Fully diluted value adds a supply scenario, not legal rights. Relative valuation is defensible only after the compared assets' claims, dilution, control, and cash-flow mechanisms are made commensurable.

## Why it matters

The equity shortcut encourages three costly mistakes. It treats protocol usage as holder earnings, interprets governance theater as control, and assumes a treasury or developer organization belongs residually to tokenholders. Each error can survive during a liquid market because price appreciation conceals weak rights. Stress exposes the difference: an administrator pauses transfers, a vote is ignored, a fee switch remains off, reserves become inaccessible, or an entity enters insolvency.

The opposite error—declaring every non-equity token worthless—is just as crude. Settlement assets, redeemable claims, service rights, and credibly enforced protocol powers can have substantial value without resembling stock. The disciplined question is not “is this basically equity?” It is: **what can this specific holder cause, receive, verify, and enforce, against whom, under which rule, after which failure?**

## Sources

- U.S. Securities and Exchange Commission, [Crypto Assets and the Federal Securities Laws](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/crypto-assets-federal-securities-laws), updated May 15, 2026 (accessed 2026-07-10).
- U.S. Securities and Exchange Commission, [Application of the Federal Securities Laws to Certain Types of Crypto Assets and Certain Transactions Involving Crypto Assets](https://www.sec.gov/files/rules/interp/2026/33-11412.pdf), 2026 (accessed 2026-07-10).
- Legal Information Institute, Cornell Law School, [Common stock](https://www.law.cornell.edu/wex/Common_stock) (accessed 2026-07-10).
- Ethereum.org, [Ethereum governance](https://ethereum.org/governance/), updated June 6, 2026 (accessed 2026-07-10).
- Ethereum.org, [What is a DAO?](https://ethereum.org/dao/) (accessed 2026-07-10).
- Ethereum Improvement Proposals, [ERC-2767: Contract Ownership Governance](https://ercs.ethereum.org/ERCS/erc-2767) (accessed 2026-07-10).
- Ethereum Improvement Proposals, [ERC-3000: Optimistic enactment governance standard](https://eips.ethereum.org/EIPS/eip-3000) (accessed 2026-07-10).

## Open questions

- Which top-100 governance tokens control an executable treasury or fee path without an overriding multisig or legal-entity dependency?
- How should a rights matrix weight social fork power when formal legal remedies are absent?
- Which tokenized securities preserve every underlying voting and economic right, and which introduce a materially weaker intermediary claim?
- Can standardized machine-readable disclosures expose token rights, amendment powers, and remedies without creating false confidence in incomplete metadata?
