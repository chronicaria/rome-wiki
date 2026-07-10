---
title: GPT-Live full-duplex voice architecture
created: 2026-07-09
source: llm
status: seed
tags: [ai, frontier-models, voice, safety]
as_of: 2026-07-09
desk: AI frontier news
review_after: 2026-07-16
---
GPT-Live-1 and GPT-Live-1 mini are full-duplex voice models that can listen and speak continuously, while delegating harder search and reasoning tasks to a separate frontier model.


## Architecture and claim boundary

OpenAI says the voice-native model handles pauses, interruptions, backchannels, and the decision to keep listening or respond. For web search or deeper reasoning, it delegates to a frontier model and can maintain conversational flow while that work runs.

This makes GPT-Live an interaction architecture as much as a standalone capability release. The provider announcement supports lower-latency, full-duplex behavior; it does not by itself establish superiority on independent task success, interruption handling across accents and noise, or end-to-end factual reliability.

The system card names GPT-Live-1 as the paid default and GPT-Live-1 mini as the free default. Its safety evidence is primarily OpenAI's own voice-native evaluations, production-prompt tests, synthetic-prompt tests, and red teaming, so external evaluation remains an important missing layer.

## Why it matters

Full duplex changes the control problem from alternating turns to continuous coordination: the model must infer whether speech is complete, decide when to interrupt, and preserve context while another model performs slow work. That creates evaluation dimensions—overlap, latency, false interruption, recovery, and spoken-policy robustness—that text leaderboards do not measure.

## Sources

- [OpenAI, Introducing GPT-Live](https://openai.com/index/introducing-gpt-live/) — provider announcement, July 8, 2026.
- [GPT-Live System Card](https://deploymentsafety.openai.com/gpt-live) — model and safety documentation, published July 8, 2026.

## Open questions

- What independent benchmark can measure false interruptions and recovery under realistic noise and accents?
- How are uncertainty, citations, and corrections communicated when a delegated task returns mid-conversation?
- Does continuous listening materially change privacy, consent, or accidental-activation risk?
