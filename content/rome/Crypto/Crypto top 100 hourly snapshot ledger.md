---
title: Crypto top 100 hourly snapshot ledger
created: 2026-07-09
source: web
status: seed
tags: [crypto, markets, top-100, dataset]
as_of: 2026-07-10T01:56:30Z
desk: Crypto markets
review_after: 2026-07-10
---
This immutable CoinGecko observation preserves the lower boundary of the provider-ranked research universe without treating market capitalization as fundamental value.

Up: [[Crypto top 100 research universe]]

Related: [[Crypto asset identity registry]] · [[Crypto top 100 dossier backlog]]

## Snapshot contract

- **Retrieval completed:** `2026-07-10T01:47:59Z` (UTC).
- **Provider and ordering:** CoinGecko `/api/v3/coins/markets`, ordered by descending provider-reported market capitalization.
- **Parameters:** `vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false`.
- **Scope preserved here:** ranks 90–110, including eleven names outside the top-100 cutoff so subsequent runs can measure boundary churn.
- **Continuity:** first observation in this ledger; there is no prior successful snapshot to diff. No entrant or exit is therefore called durable.
- **Caveat:** capitalization, price, supply, and volume are provider-calculated observations. Null supply fields remain `—`; values have not been estimated or reconciled across providers.

## Boundary observation

| Rank | CoinGecko ID | Name (symbol) | Market cap USD | Price USD | Circulating supply | Total supply | Max supply | 24h volume USD | Provider updated (UTC) |
| ---: | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 90 | `bianrensheng` | 币安人生 (BinanceLife) (币安人生) | 680,229,290 | 0.680246 | 1,000,000,000 | 1,000,000,000 | 1,000,000,000 | 12,244,804 | 2026-07-10T01:47:54.524Z |
| 91 | `filecoin` | Filecoin (FIL) | 626,486,315 | 0.785907 | 797,258,406 | 1,957,510,931 | — | 48,166,115 | 2026-07-10T01:47:59.167Z |
| 92 | `lighter` | Lighter (LIT) | 604,484,565 | 2.42 | 250,000,000 | 1,000,000,000 | 1,000,000,000 | 53,893,126 | 2026-07-10T01:47:55.415Z |
| 93 | `pump-fun` | Pump.fun (PUMP) | 599,208,960 | 0.00148909 | 402,432,207,111.6318 | 850,683,480,052.302 | 1,000,000,000,000 | 23,448,672 | 2026-07-10T01:47:53.579Z |
| 94 | `gho` | GHO (GHO) | 598,011,971 | 0.998363 | 599,000,000 | 599,000,000 | — | 3,585,505 | 2026-07-10T01:47:44.481Z |
| 95 | `flare-networks` | Flare (FLR) | 574,663,773 | 0.00662313 | 86,764,053,625.99107 | 106,139,998,623.5306 | — | 2,142,311 | 2026-07-10T01:47:48.130Z |
| 96 | `arbitrum` | Arbitrum (ARB) | 560,899,100 | 0.088153 | 6,362,841,042 | 10,000,000,000 | 10,000,000,000 | 175,751,889 | 2026-07-10T01:47:41.761Z |
| 97 | `usual-usd` | Usual USD (USD0) | 552,545,756 | 0.998573 | 553,335,286.3245635 | 553,335,286.3245635 | — | 17,740.14 | 2026-07-10T01:47:46.942Z |
| 98 | `venice-token` | Venice Token (VVV) | 550,183,080 | 11.64 | 47,218,974.15888767 | 80,542,237.17577404 | — | 27,071,518 | 2026-07-10T01:47:57.754Z |
| 99 | `xdce-crowd-sale` | XDC Network (XDC) | 538,999,672 | 0.02702205 | 19,946,688,440 | 38,065,686,425.1 | — | 8,445,696 | 2026-07-10T01:47:43.976Z |
| 100 | `ylds` | YLDS (YLDS) | 536,580,440 | 0.9998 | 536,687,614.99 | 536,687,614.99 | — | 18,871,369 | 2026-07-10T01:47:52.073Z |
| 101 | `aptos` | Aptos (APT) | 521,146,560 | 0.625601 | 833,032,963.83406 | 1,205,407,040.919986 | 2,100,000,000 | 41,781,380 | 2026-07-10T01:47:43.336Z |
| 102 | `midnight-3` | Midnight (NIGHT) | 519,000,316 | 0.03125138 | 16,607,399,400.63495 | 24,000,000,000 | 24,000,000,000 | 11,226,183 | 2026-07-10T01:47:56.188Z |
| 103 | `usx` | USX (USX) | 517,761,209 | 0.999747 | 517,892,042.500088 | 517,892,042.500088 | — | 2,282,752 | 2026-07-10T01:47:53.230Z |
| 104 | `aerodrome-finance` | Aerodrome Finance (AERO) | 495,328,639 | 0.513977 | 964,813,685.0086772 | 1,935,742,341.656641 | — | 23,446,679 | 2026-07-10T01:47:57.800Z |
| 105 | `a7a5` | A7A5 (A7A5) | 494,977,974 | 0.01262035 | 39,220,153,124.26073 | 39,220,153,124.26073 | — | 1,238.80 | 2026-07-10T01:47:52.185Z |
| 106 | `true-usd` | TrueUSD (TUSD) | 493,766,481 | 0.99845 | 494,515,083 | 494,515,083 | — | 19,133,128 | 2026-07-10T01:47:46.068Z |
| 107 | `injective-protocol` | Injective (INJ) | 487,415,493 | 4.87 | 100,000,000 | 100,000,000 | — | 74,936,076 | 2026-07-10T01:47:59.191Z |
| 108 | `hash-2` | Provenance Blockchain (HASH) | 466,612,565 | 0.0084655 | 55,122,574,824 | 94,978,475,357.64638 | 100,000,000,000 | 12,513.71 | 2026-07-10T01:47:51.479Z |
| 109 | `pancakeswap-token` | PancakeSwap (CAKE) | 443,397,903 | 1.37 | 323,207,365.2474686 | 335,541,886.5388313 | 400,000,000 | 25,238,432 | 2026-07-10T01:47:59.144Z |
| 110 | `dash` | Dash (DASH) | 438,710,592 | 34.37 | 12,762,044.97519884 | 12,762,411.38178572 | 18,920,000 | 31,486,866 | 2026-07-10T01:47:42.112Z |

## Initial cutoff state

The observed cutoff is YLDS at rank 100 and Aptos at rank 101, separated by about $15.43 million of provider-reported market capitalization. That small boundary gap is an observation, not evidence of persistent membership. The next successful hourly snapshot should test all ranks 90–110 for entrants, exits, provider-ID changes, and supply-driven rank changes before any dossier is reprioritized as durable.

## Persistence check — 2026-07-10T01:56:30Z

A second successful retrieval roughly nine minutes later preserved the cutoff identities: `ylds` remained rank 100 at about $536.5 million and `aptos` remained rank 101 at about $527.0 million. Their gap narrowed from roughly $15.43 million to $9.57 million. This is enough to record two consecutive provider observations, but the short interval is not evidence that membership will persist across a full three-hour committee lap.

Ranks 91–110 kept the same provider IDs and order. Rank 90 changed from `bianrensheng` to `janus-henderson-anemoy-aaa-clo-fund` (JAAA), illustrating churn inside the boundary buffer without changing top-100 membership at the cutoff. The observation does not establish whether JAAA's move came from price, a circulating-supply revision, or a crossing with BinanceLife because rank 89 and the displaced asset's second-observation fields were not preserved in this narrow ledger.

The exact second-observation boundary was: JAAA, FIL, LIT, PUMP, GHO, FLR, ARB, USD0, VVV, XDC, YLDS, APT, NIGHT, USX, AERO, A7A5, TUSD, INJ, HASH, CAKE, and DASH for ranks 90–110 respectively. Provider IDs, rather than symbols, define continuity.

## Sources

- [CoinGecko markets API observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false), retrieved 2026-07-10T01:47:59Z.
- [CoinGecko markets API persistence observation](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=110&page=1&sparkline=false), retrieved 2026-07-10T01:56:30Z.
- [CoinGecko API documentation — coins markets](https://docs.coingecko.com/reference/coins-markets), accessed 2026-07-09.

## Open questions

- Which rank-90–110 memberships persist in the immediately following successful snapshot?
- Does an independent aggregator confirm any surprising entry, especially BinanceLife, YLDS, USX, or A7A5?
- How much of subsequent boundary motion comes from price versus circulating-supply revisions?
