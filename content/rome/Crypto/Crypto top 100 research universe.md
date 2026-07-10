---
title: Crypto top 100 research universe
created: 2026-07-09
source: llm
status: seed
tags: [moc, crypto, markets, research-universe]
as_of: 2026-07-10
---
The crypto desk covers the complete, dynamically snapshotted top 100 assets by market capitalization, including stablecoins, wrapped assets, and duplicate economic exposures as classified research objects.

Up: [[Crypto]] · Related: [[Markets]]

## Membership rule

At each hourly scan, query one named market-data provider using:

- USD as the comparison currency;
- descending market-cap order;
- 100 results on the first page;
- an exact UTC retrieval timestamp;
- provider-native asset ids rather than symbols as identity keys.

The initial canonical provider is CoinGecko's `/coins/markets` endpoint with `order=market_cap_desc`, `per_page=100`, and `page=1`. Record the response timestamp, endpoint parameters, provider rank, reported market cap, circulating supply, total supply, and 24-hour volume. CoinGecko documents the endpoint and its ranking fields in [Coins List with Market Data](https://docs.coingecko.com/reference/coins-markets).

If the provider is unavailable, do not silently substitute a different ranking. Record the failed scan; a substitute source needs a labeled parallel snapshot because provider methodologies can disagree.

## Include rather than silently filter

The research universe contains exactly the returned top 100, even when an entry is:

- a fiat-backed, crypto-collateralized, algorithmic, or yield-bearing stablecoin;
- a wrapped representation of another asset;
- a liquid-staking or restaking receipt;
- a bridged or chain-specific representation;
- an exchange token, governance token, memecoin, privacy asset, or commodity-backed token;
- economically duplicative of another top-100 entry.

Classification determines what questions to ask; it does not erase membership. Stablecoins require reserve, redemption, depeg, issuer, jurisdiction, and counterparty notes. Wrapped assets require custodian, bridge, mint/burn, backing, and chain-risk notes. Duplicate exposures require explicit parent/underlying links.

## Identity ledger

Maintain one canonical row per provider asset id:

| Field | Purpose |
| --- | --- |
| Provider id | Stable identity across symbol collisions and renames. |
| Name and symbol | Human display; never sufficient identity alone. |
| Native chain or asset type | Distinguishes native coins, tokens, receipts, and wrappers. |
| Contract addresses | Chain-specific identity and counterfeit protection. |
| Economic parent | Links wrapped, staked, bridged, or synthetic representations. |
| Market-cap rank and value | Timestamped universe membership. |
| Rank history | Records entry, exit, and churn around the boundary. |
| Classification | Stablecoin, L1, L2, DeFi, exchange, meme, RWA, infrastructure, wrapper, and other relevant lenses. |
| Canonical Rome note | Prevents duplicate articles after rebrands or migrations. |

Track ranks 90-110 in an internal boundary buffer so membership changes can be explained, but public “top 100” status always follows the timestamped 1-100 snapshot.

## Expansion program

The hourly desk may create or revise as many justified notes as needed across:

- one canonical dossier for every current member;
- protocol and product architecture;
- token purpose and the difference between protocol usage and holder capture;
- supply, emissions, unlocks, treasury, insiders, and governance concentration;
- liquidity, venue quality, spreads, depth, derivatives, and market manipulation risk;
- security incidents, admin keys, bridges, oracles, upgrades, and dependencies;
- regulatory, jurisdictional, custody, and access questions;
- historical cycles, drawdowns, correlations, factors, and regime behavior;
- category comparisons and economic-parent relationships;
- primary-source, metric-definition, contract, and methodology notes.

Ranks organize coverage waves but do not cap output:

- ranks 1-10: systemic market structure and macro transmission;
- ranks 11-25: full dossiers plus category and dependency maps;
- ranks 26-50: full dossiers, comparison clusters, and market-quality analysis;
- ranks 51-100: full dossiers, boundary churn, liquidity, supply, and proof-risk analysis.

The JUP, PENDLE, SYRUP, AERO, and PUMP work remains a conviction subset inherited from earlier diligence. It does not receive automatic favorable treatment and does not limit the top-100 program.

## Update rules

- Preserve dated universe snapshots instead of overwriting rank history.
- Update an existing canonical dossier after a rename, migration, or rank change.
- Create separate notes for independent mechanisms; do not turn each coin dossier into an encyclopedia.
- Link every asset to category, chain, economic parent, market-structure, and risk notes.
- Label market data as provider-reported and timestamped rather than objective permanent truth.
- Do not infer investability, safety, legality, or expected return from market-cap rank.

## Snapshot — 2026-07-09

The canonical CoinGecko `/coins/markets` endpoint returned 100 ranked assets. The top ten were BTC, ETH, USDT, BNB, USDC, XRP, SOL, TRX, Figure Heloc, and HYPE. The rank boundary from 87 through 100 included JUP, JAAA, BinanceLife, Audiera, FIL, Lighter, GHO, PUMP, FLR, ARB, USD0, YLDS, VVV, and XDC; XDC was rank 100 at roughly $539 million market capitalization.

This is a provider-ranked snapshot, not a fixed investable universe. Stablecoins, tokenized funds, wrapped assets, and duplicated economic exposures remain included but require classification. Compared with prior retained briefing ranks, JUP moved from 81 to 87 and PUMP from 92 to 94; the causes have not yet been attributed.

Sources: [CoinGecko markets endpoint](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h,7d), [CoinGecko endpoint documentation](https://docs.coingecko.com/reference/coins-markets), and [DefiLlama data definitions](https://defillama.com/data-definitions), accessed July 9, 2026.

## Snapshot — 2026-07-10 00:07 UTC

A 110-asset boundary-buffer query left the rank-100 cutoff unchanged: XDC remained rank 100 at about $538.6 million, followed by APT at rank 101 at about $520.2 million. Ranks 90–100 were Audiera, FIL, Lighter, GHO, PUMP, FLR, ARB, USD0, YLDS, VVV, and XDC. No first-observation entrant or exit was promoted into durable churn.

The buffer shows why classification matters: GHO and USD0 are stable liabilities, while YLDS is a tokenized yield-bearing dollar product; their ranks are not directly comparable measures of protocol adoption. ARB's provider-reported 24-hour price change was about +13.6%, but a price move alone does not explain fundamental value.

Source: [CoinGecko 110-asset markets endpoint](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h,7d), retrieved July 10, 2026 at 00:07 UTC.

## Open questions

- Should the wiki expose hourly rank-history tables or only material membership changes?
- Which second provider should supply a labeled methodology comparison?
- How should dead, compromised, or nonredeemable assets remain documented after they leave the top 100?
- Which quantitative features should drive systematic cross-sectional research without becoming trading advice?
