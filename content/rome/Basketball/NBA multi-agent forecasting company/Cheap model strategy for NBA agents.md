---
title: Cheap model strategy for NBA agents
created: 2026-07-08
source: llm
status: seed
tags: [project, basketball, nba, ai, agents, forecasting, llm-costs]
---
A 408-agent NBA company should be implemented as roles on a small, cached, budget-capped inference runtime; the practical lean version is [[Lean NBA agent company structure plan]].

Related: [[NBA agent company structure plan]], [[Lean NBA agent company structure plan]], [[Multi-agent forecasting frameworks]], [[Designed information asymmetry for LLM forecasts]], [[Forecast skill]].

## Core Shift

The right unit is not "one agent equals one hosted LLM call." The right unit is:

```yaml
agent_spec:
  role:
  team_or_department:
  information_packet:
  tools_allowed:
  model_policy:
  activation_rule:
  output_schema:
  budget_ceiling:
```

The [[NBA agent company structure plan]] can keep the full 408-agent theater, but the runtime should schedule only the agents whose outputs are needed. Most "agents" are role definitions, prompts, tools, memory scopes, and scorecards. Only some become model calls on a given day.

## Provider Tiers

| Tier | Use | Candidate providers |
|---|---|---|
| Local/free runtime | Research packets, summaries, low-stakes committee voices, website color. | Ollama, llama.cpp, vLLM, local OpenAI-compatible servers. |
| Free hosted APIs | Prototype live calls without a bill, accept quotas and instability. | Gemini API free tier, OpenRouter free models, Groq Free, Cloudflare Workers AI daily free allocation. |
| Cheap paid fallbacks | Keep the live demo from stalling when free quotas fail. | DeepSeek V4 Flash, Gemini Flash-Lite, Groq small models, Mistral Small, Fireworks, Together, DeepInfra. |
| Occasional reliable model | CEO memo, audit summaries, high-disagreement slate review. | OpenAI nano-class models, Gemini Flash/Flash-Lite, Mistral Small or Large, DeepSeek Pro. |

The free tier is useful for a showcase, but not as the only dependency. Free models can disappear, throttle, or degrade exactly when the site is most fun to watch. The engineering answer is a provider router with hard spend caps and graceful degradation.

## Current Cheap And Free Options

| Provider | Why it belongs in the shortlist | Caveat |
|---|---|---|
| Local Ollama / llama.cpp / vLLM | Free per call after hardware cost; enough for summaries, role-played research desks, and structured extraction. Ollama exposes a local API; llama.cpp and vLLM can expose OpenAI-compatible servers. | Speed and context depend on Andrew's machine. Small local models should not be trusted for odds math or final forecasts. |
| Google Gemini API | Gemini 2.5 Flash and Flash-Lite show free-tier access in the developer pricing page; paid Flash-Lite is very cheap per million tokens. | Free-tier traffic may be used to improve products; rate limits are per project and vary by tier/model. |
| OpenRouter free models | One OpenAI-compatible API over many free model variants, including an `openrouter/free` router and `:free` model variants. | Free plan is request-limited and free models are not stable infrastructure. Good for diversity, not sole production. |
| Groq | Very fast open-model inference; official docs list Free plan limits and low paid prices for small/open models. | Free limits are org-level and can bind on RPM, RPD, TPM, or TPD. |
| Cloudflare Workers AI | Daily free allocation plus serverless open models; useful for small, cheap background agents close to a website deployment. | Pricing is in "neurons"; larger models burn the daily free allocation quickly. |
| DeepSeek API | DeepSeek V4 Flash is one of the best cheap paid reasoning fallbacks: long context, OpenAI-compatible base URL, tool calls, JSON output, and very low per-token prices. | Not free after credits; provider and model availability should be monitored. Legacy model aliases are deprecating. |
| Mistral API | Mistral Small 4 is a capable cheap model, and Mistral has a free API mode plus a pay-as-you-go Scale tier. | The free tier is limit-bound; paid pricing is still better as a fallback than as 408 constant calls. |
| Fireworks / Together / DeepInfra / Hugging Face Inference Providers | Good pay-as-you-go hosts for open models, often with batch discounts or provider routing. Hugging Face gives tiny monthly credits and can route to providers without separate accounts. | Usually not truly free at meaningful volume; use as fallback diversity and batch-processing lanes. |
| OpenAI nano-class models | Useful for reliable structured outputs, CEO summaries, and low-cost sanity checks if a tiny paid bill is acceptable. | Not free; should be capped and used only where reliability is worth it. |

## Department Model Assignments

| Department | Model policy | Reason |
|---|---|---|
| Data & Historical Archive | Mostly code, no LLM by default. | Joins, timestamps, no-vig odds, possession stats, and leakage checks are deterministic. |
| Team Research Committees | Local model first; free hosted model only for changed teams or game-day teams. | Team packets should be cached and refreshed on news, injuries, and game days. |
| Prediction Department | Mix 3-7 cheap/free hosted models per game, with different evidence packets. | Forecast diversity matters more than agent count. |
| Aggregation Department | Deterministic calibration code plus one cheap LLM explanation. | Aggregation should be Brier/log-score-weighted math, not vibes. |
| Finance Department | Code for odds conversion, expected value, Kelly fraction, and bankroll rules. | LLMs should not do money math. They can write the market memo. |
| Risk & Audit | Code for rule gates plus one reliable small model for explanation and red-team review. | The veto should be mechanical where possible. |
| CEO Agent | Cheap reliable model, short context, cached slate state. | The CEO coordinates and narrates; it does not forecast. |

## Agent Virtualization

Use three execution modes:

1. **Virtual role mode:** one model call asks a "microboard" to return the structured votes of several named committee roles. This is enough for ordinary team research updates.
2. **Independent call mode:** each role gets a separate call only for high-disagreement games, injuries, playoff stakes, or showcase days.
3. **Code-only mode:** the agent is a deterministic function with a title, scorecard, and audit trail.

For example, an eight-agent Celtics committee can usually be one call:

```text
You are the Celtics Game Prep Microboard.
Return JSON with separate fields for:
Team Chair, Roster Agent, Player Impact Agent, Lineup Agent,
Scheme Agent, Health Agent, G League Agent, Schedule Agent.
Each role must cite packet fields and give confidence.
```

That preserves the company interface while keeping inference calls sane.

## Daily Runtime Budget

A regular-season slate should look more like 60-120 calls, not 408+ calls.

| Cycle | Calls |
|---|---:|
| Data ingest, stat joins, injury snapshots | 0 LLM calls |
| Teams not playing and no major news | 0 LLM calls |
| Playing team Game Prep Microboards | 2 per game |
| Game predictors | 3-7 per game |
| Aggregation explanations | 1 per game |
| Finance/risk memo | 1 per slate |
| Public website story cards | 0-3 per slate |

On a 10-game slate this is roughly 20 team calls, 30-70 prediction calls, 10 aggregation calls, and a few memo calls. The public site can still display the full hierarchy, because inactive agents show cached state, last vote, confidence drift, and "sleeping" status.

## Forecast Diversity

Do not simulate diversity with 100 copies of the same model reading the same packet. That recreates the correlated-error problem from [[Designed information asymmetry for LLM forecasts]].

Use diversity along four axes:

- **Model diversity:** Gemini, Groq-hosted open models, DeepSeek, Mistral, local models, OpenRouter free variants.
- **Information diversity:** one predictor sees injury scenarios first, another sees impact metrics first, another sees market-blind schedule context, another sees team-committee disagreements.
- **Prompt diversity:** base-rate forecaster, injury-counterfactual forecaster, player-impact forecaster, market-skeptic forecaster.
- **Temperature and seed diversity:** useful only after the first three are present.

## Backtesting Without Burning Money

Walk-forward backtesting should be tiered:

| Backtest phase | Inference policy |
|---|---|
| V0 deterministic | No LLMs. Build data, odds, possessions, player priors, and scoring. |
| V1 compressed company | One microboard per team per simulated game day, 3 predictors per game. |
| V2 selected theater | Full independent committees only for Christmas, trade-deadline week, playoffs, and high-edge games. |
| V3 live paper mode | Cached daily team state, full calls only for active slate teams. |

The historical backtest is where costs can explode invisibly. The rule should be: prove the deterministic spine first, then spend model calls only where they create measurable calibration lift.

## Budget Modes

| Mode | Goal | Runtime |
|---|---|---|
| Free showcase | Spend $0 unless a user manually flips a paid flag. | Local models + Gemini/Groq/OpenRouter/Cloudflare free quotas. |
| Coffee-money mode | Keep the demo alive through throttling. | Free-first router with DeepSeek V4 Flash, Gemini Flash-Lite, Mistral Small, or Groq small-model fallback; daily hard cap. |
| Research mode | Measure whether extra agents help. | Batch jobs, provider price floor routing, selected historical windows. |
| Full theater day | Make the website spectacular for one slate. | Independently activate many agents, but declare a temporary budget ceiling first. |

Every API key should have a provider-side spend cap. Every scheduler run should have a local call cap. The dashboard should show daily tokens, dollars, skipped agents, and cache-hit percentage as part of the spectacle.

## Recommended Prototype Stack

Start with:

1. **Local Ollama** for research summaries and inactive-agent chatter.
2. **Gemini 2.5 Flash-Lite or Flash** as the main free/cheap structured-output model.
3. **Groq** for fast open-model prediction calls when rate limits permit.
4. **OpenRouter free models** for extra forecaster diversity and visible model variety.
5. **DeepSeek V4 Flash** as the paid emergency fallback behind a hard daily cap.
6. **Cloudflare Workers AI** only if the website is deployed on Cloudflare and needs tiny edge-side calls.

Avoid making the first version dependent on dozens of providers. The routing layer should support many, but the MVP should have three active lanes: local, free hosted, and one cheap paid fallback.

## Sources

- [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing) and [Gemini API rate limits](https://ai.google.dev/gemini-api/docs/rate-limits).
- [OpenRouter Free Models Router](https://openrouter.ai/openrouter/free), [OpenRouter pricing](https://openrouter.ai/pricing), and [OpenRouter FAQ](https://openrouter.ai/docs/faq).
- [Groq pricing](https://groq.com/pricing), [Groq supported models](https://console.groq.com/docs/models), and [Groq rate limits](https://console.groq.com/docs/rate-limits).
- [DeepSeek API models and pricing](https://api-docs.deepseek.com/quick_start/pricing).
- [Mistral API pricing](https://mistral.ai/pricing/api/) and [Mistral usage limits](https://docs.mistral.ai/admin/billing-usage/usage-limits).
- [Cloudflare Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/).
- [Fireworks serverless pricing](https://docs.fireworks.ai/serverless/pricing).
- [Together AI pricing](https://www.together.ai/pricing) and [Together serverless models docs](https://docs.together.ai/docs/serverless/models).
- [DeepInfra pricing](https://deepinfra.com/pricing).
- [Hugging Face Inference Providers pricing](https://huggingface.co/docs/inference-providers/en/pricing).
- [Ollama API documentation](https://docs.ollama.com/api/introduction), [llama.cpp server](https://github.com/ggml-org/llama.cpp), and [vLLM OpenAI-compatible server](https://docs.vllm.ai/en/stable/serving/online_serving/).
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing).

## Open questions

- Which local model runs best on Andrew's actual machine for 2-4K-token structured JSON outputs?
- Does agent diversity improve NBA calibration after controlling for the deterministic baseline?
- Which free hosted provider remains stable enough for a nightly public demo during the NBA season?
