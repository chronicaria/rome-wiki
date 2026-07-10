---
title: Orca workflow patterns
created: 2026-07-09
source: mixed
status: seed
tags: [ai, agents, workflow, tooling]
---
Orca is most powerful when agents are given distinct branches, roles, evidence, or review duties, then merged through human diff review.



## Pattern 1: same-task race

Use this when the task has a clear endpoint and the quality of the diff is easy to compare.

Examples:

- Fix one reproducible bug.
- Improve one slow query.
- Refactor one component.
- Repair one failing test.

Run the same prompt in three worktrees, preferably with different agents. Compare:

- Did it reproduce or understand the bug?
- Did the diff stay small?
- Did it add or update tests?
- Did checks pass?
- Did it create new risk?

This is the best beginner pattern because it teaches how each agent actually behaves.

## Pattern 2: builder and reviewer

Use this when one promising implementation needs scrutiny before it deserves more work.

Flow:

1. Builder agent implements the change.
2. Reviewer agent inspects only the diff and relevant files.
3. Human annotates the diff with the best review points.
4. Builder revises from one batched review prompt.
5. Human runs final checks and ships.

This avoids the common failure mode where the same agent rationalizes its own change.

## Pattern 3: specialist split

Use this when the task decomposes cleanly.

Examples:

- Agent A investigates the backend bug.
- Agent B builds the frontend fix.
- Agent C writes tests or migration notes.
- Human merges only after all diffs are understood.

This is better than a race when subtasks are truly independent. It is worse than a race when the split is artificial.

## Pattern 4: red-team pass

Use this after a good-looking change.

Prompt a fresh agent:

```text
Review this worktree as a skeptical maintainer. Find correctness bugs, missing tests,
security issues, migration risks, and behavior changes. Do not edit yet. Report the
top issues with file paths and exact verification steps.
```

Then either ask the same agent to patch the issues in its own worktree or send the review back to the original builder through Orca's diff annotation loop.

## Pattern 5: evidence-diverse research

Use this for research, planning, and technical design where independent evidence matters more than raw agent count.

Give agents different assignments:

- One searches official docs.
- One reads the existing codebase.
- One finds prior issues or commits.
- One produces a synthesis and risk list.

This mirrors [[Designed information asymmetry for LLM forecasts]]: agents are more useful when they do not all see the same prompt and evidence.

## Pattern 6: coordinator and workers

Use [[Orca inter-agent orchestration]] when there are dependencies, ownership, and completion states.

Good fits:

- "Audit these five modules and report `worker_done` when complete."
- "Block on a decision gate if the API shape is ambiguous."
- "Dispatch each worker a separate file family, then synthesize."

Overkill fits:

- One quick bug fix.
- A single review comment.
- Anything where one terminal prompt is enough.

## Pattern 7: usage and rate-limit routing

Use Orca's account and usage visibility as a practical scheduler.

- Start with the agent most likely to solve the task.
- When it approaches rate limits, move scout work, tests, or review to another agent.
- Avoid spending top-tier usage on chores that a cheaper or less constrained agent can handle.
- Keep the hard merge decision with the human.

## Prompt kernels

Builder:

```text
Implement the smallest correct fix. Follow existing patterns. Run relevant checks.
Stop with files changed, checks run, and remaining risk. Do not commit or push.
```

Reviewer:

```text
Review this diff as a maintainer. Prioritize correctness bugs, regressions,
missing tests, security issues, and maintainability risks. Do not rewrite style
unless it affects behavior. Give file-specific findings.
```

Research worker:

```text
Investigate only your assigned slice. Cite sources or file paths. Do not solve
the whole problem. Return facts, uncertainties, and recommended next checks.
```

## Anti-patterns

- Many agents editing the same checkout.
- Many agents receiving the same vague prompt with no testable endpoint.
- Letting agents merge each other's work without human diff review.
- Treating worktree isolation as a security boundary.
- Keeping every attempt alive after the decision is made.
- Using orchestration when a plain follow-up prompt is enough.

## Open questions

- Which patterns become Andrew's defaults for code, writing, research, and forecasting work?
- How much review should always be done by a different model family?
- When do Orca Skills become worth the setup compared with reusable prompt snippets?
