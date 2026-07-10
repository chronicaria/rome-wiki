---
title: Crypto float market cap and fully diluted value
created: 2026-07-09
source: llm
status: seed
as_of: 2026-07-09
tags: [crypto, market-cap, token-supply, valuation, unlocks]
---

Crypto market capitalization and fully diluted value are price-times-supply identities, useful for organizing supply claims but incapable of proving liquidity, invested capital, fundamental value, or the price at which future tokens can actually be sold.

Up: [[Crypto]]

## Place in the map

This note supplies the measurement layer behind [[Token emissions and real yield]], [[From protocol fees to tokenholder value]], and [[Wrapped assets and duplicate crypto exposure]]. It separates the provider-ranked “market cap” used by [[Crypto top 100 research universe]] from tradable float, future issuance, and consolidated economic exposure. The aim is not to invent one true capitalization number. It is to preserve several different questions that are often collapsed into one.

## Four supply concepts answer four different questions

The arithmetic is simple. The definitions are not.

### Circulating supply

Circulating supply is a provider's estimate of token units available in the public market. CoinGecko describes it as tokens actively available and trading, after excluding categories it regards as non-circulating. CoinMarketCap calls it the best approximation of assets circulating in the general public's hands and explicitly analogizes it to public float.

Circulating supply is not always an onchain primitive. A contract can expose minted supply, balances, and locks, but it usually cannot reveal whether a foundation wallet intends to sell, whether an unlocked insider is contractually restricted, whether a market-maker loan is economically circulating, or whether two addresses have one controller. Providers therefore combine onchain data with project disclosures and judgment. Two reputable providers can disagree without either making an arithmetic error.

### Tradable float

Tradable float is the amount plausibly available for price formation over the horizon being studied. It is narrower and more behavioral than provider circulating supply. Tokens in exchange inventories, market-maker programs, active treasury distribution, liquid airdrop wallets, and unencumbered investor wallets may be part of float. Tokens held by long-term insiders, inactive foundations, strategic treasuries, lost keys, or concentrated holders may be technically unlocked yet practically unavailable at today's price.

Float is therefore an estimate, not a permanent label. A treasury transfer to a market maker can expand it overnight. A governance vote can mobilize a dormant reserve. A lost wallet can never sell, although outsiders may be unable to prove the loss. A staked token can be liquid on a short unbonding schedule or economically locked behind operational frictions. A good report states its horizon and evidence: “provider circulating supply,” “unlocked supply,” and “estimated active float” should not be silently substituted for one another.

### Total supply

Total supply generally means all units currently minted or issued, minus tokens verifiably burned. It includes tokens that exist but are locked, vested, treasury-held, or otherwise excluded from circulation. CoinGecko and CoinMarketCap both use this basic structure, although edge-case classification can differ.

Total supply answers, “How many units exist now under this definition?” It does not answer how many can trade, who controls them, whether more can be minted, or whether apparent burns are irreversible. Sending tokens to a provably inaccessible burn address is different from moving them into a governance-controlled contract that might later release them.

### Maximum supply

Maximum supply is the theoretical ceiling allowed by current monetary rules. Bitcoin's coded issuance converges toward a fixed maximum; other networks have no hard maximum. A governance-controlled mint cap is weaker than an immutable limit because authorized actors may change it. An inflationary network with an unbounded lifetime supply can still have a predictable annual issuance path, while a nominally capped token can have a large already-minted treasury overhang.

“No max supply” does not mean infinite tokens exist now. It means a terminal price-times-terminal-supply calculation is undefined without choosing a date and modeling issuance. Conversely, a finite max supply tells nothing about when the remaining units arrive.

## Market capitalization is a current-price extrapolation

Provider circulating market capitalization is usually:

$$
\text{Market cap} = P_{\text{reference}} \times S_{\text{circulating}}.
$$

CoinGecko and CoinMarketCap both rank assets using versions of this formula. The result is a consistent sorting statistic if the provider's price and supply methods are held fixed. It answers, “What is the current reference price applied to the provider's estimated circulating units?” That is useful for comparing displayed scale, constructing a ranked universe, normalizing ratios, and tracking supply-driven changes.

It does **not** mean that an equal amount of dollars entered the asset. Suppose a token has 10 million circulating units and the last reliable trades price one unit at $10. Its market cap is $100 million. Buyers did not need to contribute $100 million to move the marginal price to $10. Only a small fraction may have traded. Nor could every holder necessarily sell at $10: bids would be consumed, and the marginal price would fall.

Market cap is thus neither cash in the project nor cash available to holders. It is an extrapolated stock measure based on a marginal price. This is also true for equities, but crypto magnifies the problem through fragmented venues, thin order books, concentrated ownership, wash trading, inconsistent supply data, and 24-hour markets with no single official close.

The price term itself is a methodology. A provider may aggregate exchange pairs, remove anomalous venues, convert through stablecoin quotes, volume-weight observations, and apply staleness or confidence filters. The supply term is another methodology. Reproducible research records provider, asset ID, timestamp, reference currency, circulating supply, and price rather than copying a naked market-cap number.

## Fully diluted value is a scenario, not future market cap

The common formula is:

$$
\text{FDV} = P_{\text{current}} \times S_{\text{diluted}}.
$$

The ambiguous term is $S_{\text{diluted}}$. CoinMarketCap currently describes FDV as price times maximum supply. CoinGecko's current support material describes FDV as current price times total supply, while many market pages and analysts use max supply when it exists. This provider difference is enough to require a labeled denominator. “FDV” without source and formula is not fully specified.

FDV asks a conditional question: “What capitalization results if the chosen larger supply is valued at today's marginal token price?” It is a compact warning about dilution scale. It is not a forecast that the future network will be worth that amount. By the time supply expands, demand, protocol usage, fee capture, market conditions, token rights, and the price can all change.

For a token with 100 million circulating, one billion maximum supply, and a $2 price:

- circulating market cap is $200 million;
- max-supply FDV is $2 billion;
- market-cap/FDV is 10%; and
- the “FDV gap” is $1.8 billion only at the current $2 price.

The remaining 900 million tokens do not require $1.8 billion of new purchases to enter circulation. If demand is unchanged, the price can adjust downward. If utility and demand grow faster than supply, price can rise despite unlocks. FDV makes the scale visible but does not solve the equilibrium.

For uncapped assets, a terminal FDV is meaningless. A date-specific diluted value is more honest:

$$
\text{Forward supply value}_{t} = P_0 \times E[S_t],
$$

paired with the modeled issuance assumptions and a separate demand scenario. Solana's official staking documentation, for example, specifies an inflation schedule with an initial rate, a declining rate, and a long-run rate rather than a fixed lifetime maximum. Any SOL “FDV” needs a chosen horizon; setting it equal to current market cap hides future issuance, while inventing a terminal supply creates false precision.

## Unlocks convert allocation into potential float

An unlock removes a contractual or smart-contract restriction. It does not guarantee an immediate sale. Vesting may determine when ownership is earned; a lockup may prevent transfer even after economic entitlement exists; a release may move tokens from treasury to a grantee; staking may delay liquidity; and recipients may hold voluntarily.

The useful schedule is a stock-flow reconciliation for **tradable float**, not total or maximum supply:

$$
F_{t+1} = F_t + \text{mints distributed into float} + \text{unlocks entering float}
- \text{burns from float} - \text{new locks} \pm \text{float reclassifications}.
$$

Here $F_t$ is estimated active float. A mint does not increase float until the new units reach a holder or program plausibly able to trade them, and an unlock changes float only to the extent the released units become plausibly tradable. This avoids counting a mint once when issued and again when unlocked. Every term needs a controller and destination. Team and investor unlocks create different incentives from validator rewards, user airdrops, liquidity-mining emissions, or treasury grants. A cliff releasing 10% of current float on one date differs from a four-year linear stream, even if total dilution is equal. Monthly value should be compared with active float, credible spot depth, real volume, and recipient concentration—not only market cap.

Optimism illustrates why a fixed genesis number is not an unlock model. Its official governance documentation says OP began with 4,294,967,296 tokens, links an estimated unlock sheet, and permits governance over token allocations and inflation. The relevant analysis therefore includes initial allocation, releases, inflation authority, and treasury deployment. A single max-supply field cannot represent all four.

SEC Division of Corporation Finance staff reached a similar disclosure logic in its April 2025 statement on crypto-market securities offerings. Where applicable, staff observed disclosure of total supply, whether a maximum exists, minting and generation rules, burns and redemptions, treasury reserves, participant allocations, vesting and lockups, and who can change the rules. The statement expressly says it is staff opinion, not an SEC rule and has no legal force. Its analytical checklist is still valuable: supply is a governed process, not just a dashboard integer. A July 2025 staff statement on crypto-asset ETPs likewise discusses disclosure of outstanding, issued, and burned amounts, supply caps, mint/burn schedules, halvings, and protocol changes.

## Treasury, insider, and lost tokens resist one-word classification

A treasury balance may be excluded from provider circulation when reserved for project purposes, but the treasury can still be an economic overhang. Questions that matter include:

- Can a multisig or token vote transfer it immediately?
- Is spending constrained by a public budget, timelock, grant contract, or legal covenant?
- Are tokens lent to market makers while still reported as treasury-held?
- Does delegation or staking make them governance-active without making them sale-active?
- Will grants pay vendors who can sell on receipt?

Insider tokens pose a similar split. Unvested tokens are normally non-circulating. Vested but contractually locked tokens are owned yet non-transferable. Unlocked insider tokens may be included in supply while remaining tightly held, making provider circulation larger than effective float. Address labels do not prove beneficial ownership: one entity can control many wallets, or one custodian can hold for many owners.

Lost tokens move in the opposite direction. They are included in minted and often circulating supply because loss is hard to prove. Known provable burns can be removed; presumed lost private keys usually cannot. Adjusting supply using speculative “lost coin” estimates risks turning an observable metric into an opinion. The defensible approach is to report official/provider supply and, if material, a separate sensitivity for demonstrably dormant or provably inaccessible balances.

## Thin-float price formation can make both metrics look precise

A low-float launch can establish a high marginal price with relatively little capital because few tokens are available. Multiplying that price by the small float produces a moderate market cap; multiplying it by the entire allocation produces a spectacular FDV. Neither number measures the depth supporting the price.

Imagine one billion total tokens, 50 million circulating, but only five million routinely offered. If $2 million of aggressive buying moves the marginal price to $4, reported circulating market cap becomes $200 million and max-supply FDV $4 billion. The $4 billion is not fraud by arithmetic. It is fragile by inference: the observed $4 price was discovered against 0.5% of total supply, and future sellers may face a much lower demand curve.

This is why float ratio and liquidity belong beside valuation:

$$
\text{Float ratio} = \frac{S_{\text{circulating}}}{S_{\text{max or modeled}}},
\qquad
\text{Depth ratio}_{x\%} = \frac{\text{capital executable within }x\%}{\text{market cap}}.
$$

CoinGecko's study of the top 300 assets classified market-cap/FDV below 0.5 as low float and found that this structure was common among newer tokens; its Q2 2024 report documented launches with small circulating percentages and very high FDVs. Those findings are descriptive, not a universal causal law. Unlocks can be anticipated, recipients can hold, and demand can grow. But they demonstrate why price-times-supply should be paired with depth and schedule rather than read as standalone value.

## Stablecoins and wrappers break the “aggregate wealth” interpretation

Stablecoin market cap is usually closer to liabilities outstanding than equity value. If an issuer has one billion redeemable dollar tokens in circulation, a roughly $1 billion market cap measures the scale of claims, not a $1 billion valuation of the issuer's future profits. An April 2025 Division of Corporation Finance staff statement similarly described a limited category it called “Covered Stablecoins” around one-for-one redemption and sufficient low-risk liquid reserves. That statement was staff opinion, was expressly limited to the described facts, and was not an SEC rule or a conclusion about every stablecoin. Reserves and liabilities must be analyzed together.

Adding a stablecoin's market cap to the market cap of reserve assets can double-count the same economic value. If token liabilities are backed by Treasury bills, counting both as independent crypto wealth is wrong. Within a crypto ranking, preserving the stablecoin as a distinct instrument is still useful because it has redemption, issuer, liquidity, and settlement risks.

Wrappers create an analogous identity problem. A fully backed wrapped bitcoin token and the bitcoin locked to mint it are two records of one underlying exposure. Summing both market caps exaggerates independent capitalization. Liquid-staking tokens, bridged assets, and lending receipts can form longer chains. Each wrapper needs an identity and risk record, but aggregate analysis should consolidate by economic parent and then show wrapper liabilities separately.

Provider aggregate market cap is therefore a reproducible sum of listed instruments, not necessarily net crypto wealth. CoinGecko's low-float study itself excluded stablecoins and wrapped assets before comparing market-cap/FDV ratios—a useful signal that these instruments answer different economic questions.

## What each metric can and cannot answer

| Metric | Can help answer | Cannot answer alone |
|---|---|---|
| Reference price | marginal exchange rate at a timestamp | price executable for a large position |
| Circulating supply | provider-estimated public units | active float, beneficial ownership, lost keys |
| Tradable float | plausible near-term sellable inventory | future governance releases or holder behavior with certainty |
| Total supply | minted units net of recognized burns | future issuance or timing |
| Maximum supply | current theoretical ceiling | when tokens arrive or whether governance changes the ceiling |
| Market cap | current price applied to circulating supply | invested cash, treasury value, liquidity, fundamental value |
| FDV | current price applied to a larger supply denominator | future price, demand, unlock timing, terminal project value |
| Market-cap/FDV | rough dilution/float fraction | selling pressure, because holders and schedules differ |
| Unlock value | current-price scale of a scheduled release | actual sale amount or market impact |

No single replacement metric fixes all weaknesses. Outstanding token value, unlocked market cap, realized capitalization, free-float market cap, and liquidity-adjusted capitalization each answer narrower questions and introduce new judgments. The proper response is a measurement stack.

For every token dossier, record:

1. provider ID, timestamp, reference price, and price methodology;
2. provider circulating, total, and maximum supply with definitions;
3. onchain minted supply and reconciliation differences;
4. estimated active float and major holder categories;
5. 3-, 6-, 12-, and 24-month mints, burns, cliffs, and linear unlocks;
6. treasury, insider, foundation, market-maker, and staking balances;
7. real venue liquidity and executable depth;
8. governance power over minting, burning, vesting, and treasury releases; and
9. economic-parent consolidation for stablecoins, wrappers, receipts, and bridged forms.

The result is less seductive than one headline number but much harder to misuse. Circulating market cap describes a provider-ranked present. FDV exposes a dilution-scale scenario. Float and depth describe the market that forms the price. Unlock schedules describe how the supply state can change. None is a valuation thesis until token rights, demand, cash flows, governance, and liquidity are analyzed with it.

## Sources

- [CoinGecko, “Supply Methodology”](https://support.coingecko.com/hc/en-us/articles/32294647667865-CoinGecko-Supply-Methodology) — current definitions for maximum, total, outstanding, and circulating supply.
- [CoinGecko, “How to Add or Update Your Token's Circulating Supply and Market Cap”](https://support.coingecko.com/hc/en-us/articles/4499342867609-How-do-I-add-or-update-the-circulating-supply-market-cap-for-my-token) — market-cap formula and supply verification process.
- [CoinGecko, “How CoinGecko Aggregates Price Data”](https://support.coingecko.com/hc/en-us/articles/45836202373785-How-do-I-report-Chart-Errors-on-a-CoinGecko-token-page) — provider description of approved tickers, USD conversion, outlier removal, and volume-weighted price aggregation.
- [CoinGecko, “Introducing Outstanding Token Value”](https://support.coingecko.com/hc/en-us/articles/52443406448665-Introducing-CoinGecko-s-Outstanding-Token-Value-OTV-Metric) — comparison of maximum, total, outstanding, and circulating measures and CoinGecko's FDV convention.
- [CoinMarketCap, “Supply (Circulating, Total, Max)”](https://support.coinmarketcap.com/hc/en-us/articles/360043396252-Supply-Circulating-Total-Max) — provider definitions, exclusions, verification, unlocked supply, and max-supply FDV.
- [CoinMarketCap, “Market Capitalization (Cryptoasset, Aggregate)”](https://support.coinmarketcap.com/hc/en-us/articles/360043836811-Market-Capitalization-Cryptoasset-Aggregate) — circulating, unlocked, minted, and fully diluted capitalization formulas.
- [CoinMarketCap, “How are prices calculated?”](https://support.coinmarketcap.com/hc/en-us/articles/360015968632-How-are-prices-calculated-on-CoinMarketCap) — provider description of volume-weighted market-pair aggregation and exclusion of anomalous or nonrepresentative prices.
- [SEC Division of Corporation Finance, “Offerings and Registrations of Securities in the Crypto Asset Markets”](https://www.sec.gov/newsroom/speeches-statements/cf-crypto-securities-041025-offerings-registrations-securities-crypto-asset-markets) — staff observations on supply, minting, burns, treasury, vesting, lockups, control, and liquidity disclosure; explicitly not a Commission rule.
- [SEC Division of Corporation Finance, “Crypto Asset Exchange-Traded Products”](https://www.sec.gov/newsroom/speeches-statements/cf-crypto-asset-exchange-traded-products-070125) — staff observations on disclosure of outstanding, issued, burned, capped, and scheduled supply.
- [SEC Division of Corporation Finance, “Statement on Stablecoins”](https://www.sec.gov/newsroom/speeches-statements/statement-stablecoins-040425) — nonbinding staff view concerning a fact-limited category of one-for-one redeemable, reserve-backed “Covered Stablecoins,” not all stablecoins.
- [Optimism Docs, “Capital Allocation”](https://docs.optimism.io/governance/capital-allocation) — primary OP initial supply, governance rights, treasury management, and linked unlock estimates.
- [Optimism Docs, “GovernanceToken”](https://docs.optimism.io/op-stack/protocol/smart-contracts) — primary description of mint authority and inflation-schedule enforcement.
- [Solana, “Staking and Inflation FAQ”](https://solana.com/staking) — primary inflation parameters and why an uncapped asset requires a horizon-specific supply model.
- [CoinGecko Research, “1 in 5 Top Crypto Are Low Float, With Large Future Unlocks”](https://www.coingecko.com/research/publications/low-vs-high-float-crypto) — independent descriptive study of market-cap/FDV ratios, excluding stablecoins and wrapped assets.
- [CoinGecko, “2024 Q2 Crypto Industry Report”](https://assets.coingecko.com/reports/2024/CoinGecko-2024-Q2-Report.pdf) — launch-float and FDV evidence across a sample of 2024 tokens.

## Open questions

- Can a reproducible active-float estimate be built from labeled wallets without making unverifiable assumptions about holder intent?
- Which provider treatment is most useful when maximum supply is governed, infinite, or economically irrelevant, and how should cross-provider FDV be normalized?
- How should market-maker loans, exchange inventories, staking withdrawals, and vested-but-unsold insider balances enter a horizon-specific float model?
- What liquidity-depth measure remains comparable across order books, concentrated-liquidity AMMs, and fragmented cross-chain markets?
- How should aggregate crypto capitalization net stablecoin liabilities and wrapper claims while still preserving their distinct risk footprints?
