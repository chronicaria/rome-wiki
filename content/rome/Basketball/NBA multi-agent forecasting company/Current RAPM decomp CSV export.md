---
title: Current RAPM decomp CSV export
created: 2026-07-09
source: llm
status: seed
tags: [project, nba, rapm, projection, data-export]
---
Exported the current [[RAPM]] decomp numbers into a native v5 CSV and a sample-schema compatibility CSV.

The export answers the request to create a CSV like `private-exports/stabilized_outputs_current.csv`, but using the most recent implementation artifacts from `private-model-workspace/unified-rapm/daily_v5/out`.

## Outputs

- Native current v5 export: `private-exports/current_rapm_decomp_latest_v5_native.csv`
- Sample-schema compatibility export: `private-exports/current_rapm_decomp_latest_sample_schema.csv`
- Metadata and source manifest: `private-exports/current_rapm_decomp_latest_metadata.json`

The compatibility export has the exact same 36-column header as the sample file. The native export has 77 columns and is the safer modeling file because it labels the lanes explicitly.

## Source Artifacts

- Current shipped hybrid: `private-model-workspace/unified-rapm/daily_v5/out/nba_hybrid/day_739780.parquet`
- Consolidated current names and ids: `private-model-workspace/unified-rapm/daily_v5/out/nba_daily.parquet`
- Pure current v5 lane: `private-model-workspace/unified-rapm/daily_v5/out/nba/day_739780.parquet`
- Legacy MAP-prior lane: `private-model-workspace/unified-rapm/daily_v5/out/nba_p/day_739780.parquet`
- EPM predictive feature panel: `private-model-workspace/unified-rapm/daily_v5/out/epm_panel.parquet`

The latest ordinal exported is `739780`, which is `2026-06-13`.

## Validation

- Row count: `829` players.
- Player ids are unique in both CSVs.
- The compatibility header exactly matches the attached sample.
- Current six-factor closure is exact in source precision: `oTS + oTOV + oSC = current_off`, `dTS + dTOV + dSC = current_def_good`, and `current_off + current_def_good = current_net`.

## Caveats

- The current v5 implementation is six-factor authoritative: `oTS`, `oTOV`, `oSC`, `dTS`, `dTOV`, `dSC`.
- The old leaf columns are still present in the current hybrid artifact, but they are carried from the component layer rather than re-blended to force closure against the current six-factor hybrid total. The metadata records the leaf gaps.
- The old sample's `oepm`, `depm`, and `epm` columns are left empty in the compatibility file because the current EPM ingestion intentionally excludes impact ratings and keeps only predictive feature fields.
- The compatibility file maps `vanilla_*` to the current on-disk legacy MAP-prior lane because current v5 does not have an exact old product lane with that name.

## Open questions

- Should future public exports drop the old leaf columns and standardize on the six-factor v5 schema?
- Should the compatibility schema keep `vanilla_*`, or should that be renamed to `legacy_map_*` wherever downstream consumers allow it?
