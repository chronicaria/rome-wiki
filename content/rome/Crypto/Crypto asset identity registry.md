---
title: Crypto asset identity registry
created: 2026-07-09
source: llm
status: seed
tags: [crypto, top-100, identity, stablecoins, wrapped-assets]
as_of: 2026-07-10T11:03:15Z
desk: Crypto markets
review_after: 2026-07-10
---
This provider-ID registry distinguishes assets, liabilities, protocol tokens, and representations near the top-100 cutoff so identical symbols or correlated economic exposures are not silently merged.

Up: [[Crypto top 100 research universe]]

Related: [[Crypto top 100 hourly snapshot ledger]] · [[Crypto top 100 dossier backlog]]

## Classification key

- **Native:** base fee/security asset of its own network.
- **Protocol token:** governance, utility, or incentive token whose economics depend on an application or protocol.
- **Stable liability:** an issuer/protocol claim designed to track a reference asset; market cap is not independent risk capital.
- **RWA/security claim:** tokenized regulated or contractual financial claim.
- **Meme token:** fungible token whose identity is primarily cultural rather than a cash-flow or network-security claim.

Contracts below are included only where the CoinGecko identity response was retrieved successfully in this run. “Pending” is intentional: provider rate limiting prevented complete metadata retrieval, and no address is inferred from memory.

## Ranks 90–110

| Rank | Provider ID | Canonical identity | Economic parent / issuer | Type and exposure treatment | Verified network / contract | Identity state |
| ---: | --- | --- | --- | --- | --- | --- |
| 90 | `janus-henderson-anemoy-aaa-clo-fund` | JAAA | Janus Henderson Anemoy AAA CLO Fund | tokenized regulated fund claim; not independent crypto beta | pending primary chain/contract verification | entered rank 90 in second observation; legal and token identity packet required |
| 91 | `filecoin` | Filecoin | Filecoin network | native network asset; independent exposure | Filecoin native asset | canonical identity clear |
| 92 | `lighter` | Lighter | Lighter derivatives protocol | protocol token; application-dependent exposure | Ethereum `0x232ce3bd40fcd6f80f3d55a522d03f25df784ee2` | provider contract captured; governance/value-flow review pending |
| 93 | `pump-fun` | Pump.fun | Pump.fun launchpad / exchange | protocol token; application-dependent exposure | Solana `pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn` | provider contract captured |
| 94 | `gho` | GHO | Aave protocol | USD stable liability; do not count as independent market beta | Ethereum canonical contract `0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f`; provider also lists Base, Arbitrum, Avalanche, Gnosis, Ink, Monad, and Plasma representations | multi-chain canonical/bridge status needs Aave verification |
| 95 | `flare-networks` | Flare | Flare network | native network asset; independent exposure | Flare native asset; metadata retrieval pending | canonical identity clear; technical fields pending |
| 96 | `arbitrum` | Arbitrum | Arbitrum DAO / L2 ecosystem | governance token; not the gas asset and not a wrapped ETH claim | pending official/provider verification | identity clear; contract and admin lineage pending |
| 97 | `usual-usd` | USD0 | Usual protocol | USD stable liability / RWA-backed claim; correlated with reserve and redemption risk | pending official/provider verification | reserve, issuer, and redemption mechanics pending |
| 98 | `venice-token` | Venice Token | Venice AI | protocol utility token; application-dependent exposure | pending official/provider verification | contract and value-flow verification pending |
| 99 | `xdce-crowd-sale` | XDC | XDC Network | native network asset; independent exposure | XDC native asset; metadata retrieval pending | legacy provider ID retained as alias |
| 100 | `ylds` | YLDS | Figure Certificate Company / Figure | yield-bearing registered fixed-income security; dollar-referenced RWA claim, not ordinary independent crypto beta | Provenance Blockchain and additional representations require primary verification | issuer and type confirmed; chain contracts pending |
| 101 | `aptos` | Aptos | Aptos network | native network asset; independent exposure | Aptos native asset; metadata retrieval pending | canonical identity clear |
| 102 | `midnight-3` | NIGHT | Midnight network | native/network utility asset associated with the Midnight partner-chain system | pending official/provider verification | relationship to Cardano is dependency, not duplicate asset exposure |
| 103 | `usx` | USX | Solstice Finance | USD stable liability; CoinGecko currently describes Solana-native reserve-backed USX | pending official/provider verification | **symbol collision:** do not merge with dForce USX; contract is required |
| 104 | `aerodrome-finance` | Aerodrome Finance | Aerodrome on Base | protocol governance/incentive token | pending official/provider verification | existing [[AERO deep memo]] owns the thesis layer |
| 105 | `a7a5` | A7A5 | A7A5 issuer under Kyrgyz framework | Russian-ruble stable liability; sanctions and issuer concentration are material | Ethereum/Tron claims require primary contract verification | type confirmed; issuer/legal and contracts need enhanced verification |
| 106 | `true-usd` | TrueUSD | Techteryx / TrueUSD arrangement | USD stable liability; issuer, reserves, redemption, and venue access drive exposure | pending official/provider verification | issuer/control lineage and live attestations pending |
| 107 | `injective-protocol` | Injective | Injective network | native network asset; independent exposure | Injective native asset; metadata retrieval pending | canonical identity clear |
| 108 | `hash-2` | HASH | Provenance Blockchain | native fee, staking, security, and governance asset; independent network exposure | Provenance Blockchain native asset | official utility confirmed; provider ID distinguishes it from symbol collisions |
| 109 | `pancakeswap-token` | PancakeSwap | PancakeSwap protocol | protocol governance/incentive token; application-dependent exposure | pending official/provider verification | multi-chain representation map pending |
| 110 | `dash` | Dash | Dash network | native payment-network asset; independent exposure | Dash native asset; metadata retrieval pending | canonical identity clear |

## Duplicate and dependency findings

Ranks 90–110 contain six clearly dollar-referenced or ruble-referenced claims—GHO, USD0, YLDS, USX, A7A5, and TUSD—whose capitalization should not be interpreted as six independent risk-on assets. YLDS is additionally a registered fixed-income security claim. ARB is governance exposure to an L2 ecosystem but ETH, not ARB, is the gas/economic settlement asset. USX has a consequential symbol collision: the observed CoinGecko page describes the Solstice Finance asset, while dForce also documents a token called USX. Provider ID and a verified contract must remain the identity keys.

The second observation replaced BinanceLife with JAAA at rank 90 while preserving ranks 91–110. BinanceLife therefore remains in the historical ledger rather than being deleted from the identity graph; JAAA needs a primary issuer, legal-form, chain, and contract packet before its tokenized-fund classification is treated as complete.

## 06:13 UTC identity delta

The latest boundary observation placed JAAA at rank 88 and BinanceLife at rank 89, so both provider identities were simultaneously inside the top 100. Audiera (`audiera`, BEAT) appeared at rank 90 and requires a primary identity packet before classification. VVV was rank 100 and APT rank 101. The numbered table above remains the immutable first-observation map; these later ranks are recorded as a delta rather than silently rewriting history.

No contract or economic-parent claim is inferred for Audiera from its ticker or provider name. Its official project, chain, canonical contract, decimals, supply controls, and venue liquidity remain unverified. The existing Venice Token row already establishes the VVV provider identity, so its cutoff move creates a persistence check rather than a duplicate dossier.

## 07:02 UTC Audiera identity checkpoint

Audiera persisted at provider rank 90. CoinGecko's identity endpoint maps provider ID `audiera` to symbol BEAT and BNB Smart Chain contract `0xcf3232b85b43bca90e51d38cc06cc8bb8c8a3e36`; it links `audiera.fi` and the corresponding BscScan token page. The markets endpoint reports 309,266,666 circulating units against one billion total/max units.

These fields establish the provider-to-contract locator, not the complete economic identity. The provider description is promotional issuer-supplied material and is not accepted as proof of utility, governance, value capture, circulating-supply methodology, or contract control. Official token documentation, verified source/admin inspection, holder distribution, and named-venue depth remain required before a full classification or dossier can be promoted.

## 08:06 UTC continuity checkpoint

Audiera remained rank 90, VVV rank 100, and APT rank 101. The repeated ranks add no new identity evidence, so no issuer, controller, contract-privilege, or liquidity claim is promoted. BinanceLife appeared at rank 89 while JAAA was outside the narrow preserved slice; this is recorded as provider churn rather than an identity retirement.

## 09:03 UTC boundary checkpoint

The provider placed JAAA, Audiera, and BinanceLife at ranks 88, 89, and 90, while VVV, YLDS, and APT occupied ranks 99, 100, and 101. These are rank deltas among already known provider IDs, not new identities. The same response printed YLDS capitalization slightly above VVV while ranking it below VVV, so the registry preserves provider order and timestamps instead of locally re-sorting asynchronous fields. No Audiera controller/economics claim or Solstice/dForce USX contract identity was resolved.

## 10:03 UTC continuity checkpoint

Jupiter, BinanceLife, and JAAA occupied ranks 88, 89, and 90; VVV, YLDS, and APT remained ranks 99, 100, and 101. Audiera was outside the preserved 88–102 slice, but a one-snapshot absence is not an identity retirement and does not invalidate its known provider ID or BNB Smart Chain locator. No primary evidence resolved Audiera's controller privileges and economics or the Solstice/dForce USX collision. The response's XDC/USD0 row-order discontinuity was preserved rather than locally repaired.

## 11:03 UTC continuity checkpoint

The same provider IDs occupied the cutoff: VVV, YLDS, and APT at ranks 99, 100, and 101, with Jupiter, BinanceLife, and JAAA at ranks 88, 89, and 90. USX appeared at rank 102. No new provider identity entered this slice, Audiera remained outside it, and neither the Audiera controller/economics packet nor the Solstice/dForce USX contract collision was resolved. Rank continuity therefore changes no canonical classification.

## 12:03 UTC continuity checkpoint

VVV, YLDS, and APT remained ranks 99, 100, and 101; BinanceLife, Jupiter, and JAAA occupied ranks 88, 89, and 90. The preserved rank-88–110 slice contained no new provider identity. Audiera remained outside the slice, and neither its controller/economics packet nor the Solstice/dForce USX contract collision was resolved. No canonical classification changed.

## Sources

- [CoinGecko markets API observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false), retrieved 2026-07-10T01:47:59Z.
- [CoinGecko markets API persistence observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false), retrieved 2026-07-10T01:56:30Z.
- CoinGecko identity endpoints for [`bianrensheng`](https://api.coingecko.com/api/v3/coins/bianrensheng), [`filecoin`](https://api.coingecko.com/api/v3/coins/filecoin), [`lighter`](https://api.coingecko.com/api/v3/coins/lighter), [`pump-fun`](https://api.coingecko.com/api/v3/coins/pump-fun), and [`gho`](https://api.coingecko.com/api/v3/coins/gho), retrieved 2026-07-10; later requests returned HTTP 429.
- [Figure YLDS product disclosures](https://www.ylds.dev/crypto/), accessed 2026-07-09.
- [Figure SEC filing discussing YLDS](https://investors.figure.com/static-files/368c35d1-1dc8-401a-a9b3-2f3bfc9a7ff8), filed 2026-01-27.
- [A7A5 introduction](https://docs.a7a5.io/introduction-to-a7a5) and [terms](https://docs.a7a5.io/legal/terms-of-use), accessed 2026-07-09.
- [Provenance Blockchain HASH documentation](https://developer.provenance.io/docs/discover/hash/), accessed 2026-07-09.
- [CoinGecko USX page](https://www.coingecko.com/en/coins/usx) and [dForce USX documentation](https://docs.usx.finance/overview/introduction), accessed 2026-07-09; used to preserve rather than collapse the symbol collision.
- [CoinGecko 06:13 UTC markets observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h%2C7d), retrieved 2026-07-10T06:13:16Z; used only for provider identity and rank deltas.
- [CoinGecko Audiera identity endpoint](https://api.coingecko.com/api/v3/coins/audiera), retrieved 2026-07-10; provider ID, linked homepage, platform contract, and supply fields only.
- [CoinGecko 07:02 UTC markets observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h%2C7d), retrieved 2026-07-10T07:02:56Z.
- [CoinGecko 08:06 UTC markets observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h%2C7d), retrieved 2026-07-10T08:06:10Z.
- [CoinGecko 09:03 UTC markets observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h%2C7d), retrieved 2026-07-10T09:03:38Z.
- [CoinGecko 11:03 UTC markets observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h%2C7d), retrieved 2026-07-10T11:03:15Z.
- [CoinGecko 12:03 UTC markets observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false&price_change_percentage=24h%2C7d), retrieved 2026-07-10T12:03:16Z.

## Open questions

- What are the official canonical contracts, decimals, and bridge issuers for every non-native asset whose metadata request was rate-limited?
- Is CoinGecko's Solstice USX provider identity stable across the next snapshot, and which Solana mint uniquely identifies it?
- Which USD0 and GHO representations are canonical issuer-controlled deployments versus bridged claims?
- What current primary legal and reserve records define A7A5's issuer and sanctions exposure?
