---
title: Computer-use evaluation
created: 2026-07-09
source: llm
status: seed
tags: [ai, agents, evaluation, computer-use, benchmarks]
as_of: 2026-07-10
---
Computer-use evaluation should measure a fully specified agent–scaffold–interface system in a controlled, stateful environment, not treat one benchmark success rate as a context-free property of a model.

Up: [[AI agents (MOC)]]

## What is being evaluated

A computer-use agent closes a loop: it observes a user interface, chooses an action, receives a changed interface state, and repeats until it declares completion or exhausts a limit. Evaluation therefore concerns more than whether a language model can describe the right procedure. It tests whether a particular system can turn an instruction into a correct final state despite partial observability, delayed consequences, ambiguous controls, and errors that compound across steps.

The honest unit of comparison is the complete configuration:

> model + prompt and memory scaffold + observation representation + action interface + tools + retry policy + environment image + task set + budget + grader

This is the computer-use instance of [[Model versus scaffold in agent evaluations]]. A score does not transfer automatically when any term changes. A stronger visual model may look weaker through brittle coordinate clicking; a weaker planner may look stronger when given DOM identifiers, application APIs, demonstrations, or repeated attempts. Even a nominally identical agent may move when browser, operating-system, website, screen-resolution, or application versions change.

Computer-use benchmarks are valuable because they make failures executable and inspectable. Their danger is false compression: a single percentage collapses several distinct abilities—perception, grounding, planning, recovery, verification, and restraint—into one number.

## Environments define the claim

An evaluation environment determines which parts of real computer use are present and which have been abstracted away.

**Static demonstrations** record screens, page structure, and human actions. Mind2Web, for example, collected more than 2,000 tasks across 137 real websites and paired them with action sequences. Such datasets are useful for element selection, action prediction, and cross-site generalization. They are not full deployment tests: the evaluated agent usually cannot alter the live world, discover an unexpected intermediate state, or recover after its own mistaken click. Offline action accuracy can therefore be a useful component metric without being an end-to-end autonomy metric.

**Self-hosted web environments** provide functioning sites whose data and state can be reset. WebArena reproduces categories including shopping, forums, collaborative software development, and content management, alongside tools such as maps and reference sites. Its controlled sites permit repeatable interaction and programmatic grading. This raises ecological validity above toy HTML tasks while avoiding the instability, privacy issues, and irreversible effects of the open web. The cost is scope: a finite set of cloned services cannot represent every authentication flow, advertisement, anti-bot system, redesign, or cross-origin behavior encountered online.

**Visual web environments** preserve the controlled-web advantage while making pixels semantically necessary. VisualWebArena includes tasks in which product images, maps, visual layouts, or other image-grounded information cannot be reduced reliably to page text. It is consequently a better test of multimodal grounding than a text-only accessibility-tree task. It remains web-specific and controlled, however; success does not establish competence with arbitrary desktop applications.

**Desktop operating-system environments** expose files, windows, menus, native applications, browsers, and cross-application workflows. OSWorld provides initial-state setup and execution-based graders for 369 tasks across real web and desktop applications, file operations, and workflows spanning applications. This broader environment tests window management, application conventions, and pixel grounding that browser-only suites omit. It also introduces more infrastructure sensitivity: virtual-machine configuration, application versions, network services, display scaling, focus, and nondeterministic UI timing can all affect results.

**Enterprise and mobile environments** reveal different failure surfaces. WorkArena builds tasks around a ServiceNow instance and BrowserGym, making enterprise knowledge work and cloud-state grading more central. AndroidWorld uses an Android emulator and dynamically instantiated tasks, testing touch-oriented controls, mobile app state, and device-level effects. These suites should be read as complementary coverage, not entries on one universal ladder.

An evaluation report should therefore state its scope narrowly: “this system completed these resettable browser tasks” or “these configured desktop workflows,” not “the model can use computers.”

## Environment drift and benchmark identity

A benchmark name is not a complete experimental condition. Interactive environments age: sites are rebuilt, packages update, certificates expire, accounts accumulate state, search indexes change, and a desktop image acquires different application defaults. Even a fixed image can depend on live network services. OSWorld's repository warns that missing Google-account or proxy configuration can make tasks fail, and its maintainers introduced OSWorld-Verified after fixing reported benchmark issues and updating results. That is direct evidence that “OSWorld score” without a benchmark version is ambiguous, not evidence that any particular older result is invalid.

Drift has at least four layers:

- **Artifact drift:** task files, setup scripts, graders, or reference assets change.
- **Environment drift:** operating-system images, browsers, applications, fonts, locale, display servers, and dependencies change.
- **Service drift:** remote APIs, websites, authentication, rate limits, geolocation, or anti-bot behavior change.
- **Population drift:** the task distribution stops matching the computer work for which the system is being evaluated.

Reproducibility therefore requires a versioned *bundle*, not a paper citation. A run record should include the benchmark commit or release, task-manifest hash, VM or container image digest, grader commit, dependency lockfile, application and browser versions, locale and timezone, resolution and scaling, network policy, account snapshot, model endpoint and dated model identifier, and run timestamp. Setup validation should run before scoring: known controls should confirm that required services load, credentials work, initial state matches its manifest, and the grader accepts a canonical successful artifact. Infrastructure failures should be reported separately from agent failures rather than silently scored as zero.

Longitudinal evaluation needs two tracks. A **frozen track** reruns an immutable bundle to estimate change in the agent under matched conditions. A **maintained track** migrates tasks and graders to supported software, preserving practical relevance but changing the instrument. Linking the two requires overlap runs: evaluate the same agents on both versions, inspect task-level migrations, and publish a compatibility matrix. A leaderboard that replaces its environment without this bridge becomes a new measurement series even if its title stays the same. This conclusion is an inference from ordinary measurement practice and the repositories' visible maintenance history.

## Tasks and graders

Task quality begins with the target outcome. A high-level instruction should specify enough intent for a competent human to act while leaving the agent to choose the procedure. Tasks that merely dictate every click mostly test grounding and execution. Tasks that omit essential preferences may test guessing rather than agency.

A useful suite separates at least four task dimensions:

- **Horizon:** number of meaningful decisions and opportunities for compounding error, not merely elapsed time.
- **Breadth:** number of applications, sites, interaction idioms, and data types covered.
- **Statefulness:** whether actions create durable local or remote changes and whether later steps depend on them.
- **Constraint density:** how many requirements, exceptions, and user preferences must remain active throughout execution.

End-to-end success should be the primary metric when the product claim is task completion. Execution-based graders inspect the resulting database, file, device, application, or page state rather than matching the agent’s prose. WebArena uses annotated programs for functional validation; OSWorld supplies task-specific evaluation scripts over computer and cloud state. This is much stronger than granting credit because the trajectory appears plausible.

But a binary grader is not automatically correct. It can miss semantically valid alternate solutions, accept the target artifact while overlooking collateral damage, or fail because an external service changed. Graders need tests of their own: known-success and known-failure trajectories, adversarial near-misses, and manual audits of disagreement. Partial scores are useful diagnostically when they correspond to meaningful subgoals, yet they must not be presented as equivalent to completed user outcomes.

Task contamination also matters. Public tasks, screenshots, and solution traces can enter training data. A benchmark can mitigate this with held-out templates, newly generated instances, private test tasks, or continuously refreshed environments. None proves absence of contamination, so reports should distinguish public-development performance from sequestered evaluation.

## Observability is an experimental variable

Agents may observe raw screenshots, screenshots with marked elements, accessibility trees, DOM fragments, OCR text, application metadata, or combinations of these. These are not interchangeable presentation formats; they create different problems.

Pixels preserve visual layout and support interfaces whose meaning depends on images, color, position, charts, or canvas content. They also require perception and coordinate grounding, hide off-screen content, and make small controls hard to target. Accessibility trees and DOM-derived representations expose text and element roles more explicitly, often with stable element identifiers. They can simplify grounding dramatically, omit visual semantics, contain noisy hidden elements, or reveal structure unavailable to an ordinary sighted user. Set-of-marks overlays reduce coordinate ambiguity by annotating candidate targets, but the detector generating those marks becomes part of the evaluated system.

Fair comparison either holds the observation channel fixed or reports separate tracks. A screenshot-only agent and a DOM-assisted agent may both be useful products, but their scores answer different questions. Reports should log viewport size, scaling, scroll position, whether the full accessibility tree or only the viewport is supplied, image compression, OCR, annotation generation, and whether the agent can zoom or inspect regions.

Partial observability is central. The agent may need to remember information from a previous page, notice that a background operation completed, infer which window has focus, or verify that a click took effect. Benchmarks should include these demands deliberately and preserve enough traces to identify whether failure came from perception, memory, or planning.

## Action spaces change difficulty and risk

At one end, an agent emits low-level mouse coordinates, clicks, keystrokes, scrolling, and shortcuts. This closely resembles human input and applies broadly, but it couples reasoning to motor precision. At the other end, an agent invokes semantic browser actions such as `click(element_id)` or direct application APIs. These improve reliability and make actions easier to inspect, but they abstract away grounding or expose capabilities unavailable through the visible interface.

Hybrid agents may use pixels for perception, accessibility identifiers for selection, shell commands for files, and APIs for web services. That may be excellent engineering. It should not be silently compared with pure GUI control. The action schema, available shortcuts, clipboard access, file-system access, network access, and ability to execute code must be disclosed.

Action equivalence also affects grading. Clicking through a form and calling the backing API can yield the same database state while exercising very different competencies and security boundaries. A benchmark must decide whether it evaluates outcome achievement, human-interface operation, or both. If both matter, report outcome success alongside interface-policy compliance.

### Action-space validity must be tested, not assumed

An advertised action space can differ from the effective one. A coordinate action may be syntactically valid but land outside the viewport, target a stale screenshot, hit a control covered by a dialog, or execute after focus moved. A semantic element identifier may no longer exist when the action arrives. A generated script may invoke unrestricted filesystem or process capabilities that make a nominal GUI task trivial. Evaluation should validate actions at three boundaries:

1. **Schema validity:** did the output parse into an allowed action with bounded arguments?
2. **State validity:** was the action applicable to the state the agent observed, within the permitted timing and focus assumptions?
3. **Policy validity:** did it use only authorized channels and avoid forbidden shortcuts or side effects?

Invalid actions should not all collapse into “planning failure.” Log parser rejection, out-of-bounds targeting, stale-target errors, application refusal, timeout, and policy interception separately. The harness should record both the proposed action and the executed action, including any coordinate transformation, key normalization, retry, or safety filter. Otherwise an adapter can silently repair model output or introduce failures attributed to the model. For comparisons, replaying recorded actions is useful for debugging but not a substitute for closed-loop reruns: the observation after an action depends on timing and state.

The cleanest design declares an action-space contract and tests the harness against it. Include conformance tasks for focus changes, scrolling, drag operations, keyboard layouts, clipboard behavior, modal dialogs, and prohibited API access. These tests establish that a score measures the action interface described in the report.

## Observability of the experiment

The agent's observation channel and the evaluator's observability are different. The former defines what the agent may see; the latter determines whether a researcher can explain the run. A reproducible trace should retain timestamped raw observations, the exact derived representation sent to the model, model requests and responses, parsed and executed actions, environment events, tool errors, grader inputs, final-state evidence, and resource usage. Secret values should be redacted through a documented transformation while preserving evidence that a credential field existed.

Trace completeness matters because the same visible failure can have different causes. A click that appears wrong might reflect visual grounding, a resized viewport, an adapter coordinate transform, delayed rendering, or focus stolen by a notification. A final-state grader failure might reflect an incorrect task, a correct alternate solution the grader cannot recognize, or a service outage. Time-synchronized video alone is insufficient because it omits hidden structured observations and adapter behavior; structured logs alone can omit transient visual state. Both are useful, and a trace schema should link them by step and timestamp.

Benchmark maintainers should publish a small replayable evidence packet for each reported aggregate: configuration manifest, task-level outcomes, failure categories, grader version, and audited sample traces. Where full trajectories cannot be released because of licenses or secrets, independent auditors can receive controlled access and publish agreement statistics. Claims that cannot be reconstructed from task-level evidence should be presented as provisional.

## Scaffolds, retries, and budgets

Most evaluated systems include substantial orchestration around the base model: system instructions, few-shot demonstrations, state summaries, planners, reflective critics, visual-grounding modules, memory stores, failure detectors, and termination rules. These can dominate results. A benchmark submission should identify each component and, when making a model comparison, keep the scaffold constant or run ablations.

Retries deserve special care. Pass@k measures whether any of $k$ independent attempts succeeds; it does not describe single-attempt reliability. Best-of-$k$ with a selector also evaluates the selector and spends more compute. A recovery policy operating within one trajectory is different again: it tests whether the agent notices and repairs its own mistake. All are legitimate, but they should not share an unlabeled “success rate.”

Budgets include more than maximum steps. Record model tokens, image inputs, tool calls, wall-clock time, inference cost, parallelism, retries, context truncation, and any human intervention. A high step cap may improve completion while increasing cost and the opportunity for harmful actions. Conversely, a short cap can turn slow but competent behavior into a failure. See [[Reasoning budget and fair model comparison]] and [[Long-horizon task reliability]].

Three curves are more informative than one endpoint:

1. success versus allowed steps or time;
2. success versus monetary or inference cost;
3. harmful or irreversible actions versus autonomy budget.

Repeated trials are necessary because model sampling, website timing, and environment initialization are stochastic. Reports should give trial counts and uncertainty intervals, not rankings based on tiny differences between single-run point estimates.

### Hidden scaffold and human effects

“Model score” often includes decisions made before, during, and after inference. Prompt tuning on development tasks, hand-authored demonstrations, action parsing, automatic correction, state summarization, visual cropping, tool routing, completion detection, and task-specific exception handling are all parts of the evaluated system. Human labor can enter through selecting the best prompt, restarting malformed runs, repairing the environment, choosing which trials count, resolving login challenges, or adjudicating graders. None is inherently illegitimate; undisclosed intervention changes the estimand.

Every run should carry an intervention ledger. Record who or what initiated each reset, whether the agent saw feedback from the failed attempt, whether a human supplied information or merely repaired infrastructure, and whether the trial was excluded. Report at least three quantities separately: autonomous single-attempt success, success with predefined automated recovery, and success with human assistance. Human minutes and intervention counts are costs, not footnotes.

To attribute gains, use factorial or staged ablations: common scaffold across models, common model across scaffolds, then each team's optimized system. Freeze task exclusions and rerun rules before examining results. A hidden human who chooses a trajectory or declares completion functions as a selector; a manually engineered exception functions as task-specific policy. Treating either as base-model capability overstates what will transfer to unattended deployment.

## OSWorld, WebArena, and VisualWebArena compared

| Dimension | WebArena | VisualWebArena | OSWorld |
|---|---|---|---|
| Primary scope | Controlled, functional websites | Controlled websites with visually grounded tasks | Real desktop and web applications in an operating system |
| Core observation question | Can the agent navigate and manipulate realistic web state? | Can it use visual information as well as web structure? | Can it operate applications, files, windows, and cross-app workflows? |
| Environment control | Self-hosted sites and resettable data | Self-hosted visual-web sites and resettable data | Configured virtual machines plus application and cloud state |
| Typical grading | Programmatic functional checks over web state | URL, text, image, and state-oriented checks | Task-specific execution checks over device, app, file, and cloud state |
| Main strength | Repeatable end-to-end web interaction | Multimodal grounding under realistic web interaction | Breadth beyond the browser and support for cross-application tasks |
| Main limitation | Finite cloned web ecosystem; web-only | Still web-only; visual pipeline adds another system component | Higher setup cost and sensitivity to VM, app, display, and network configuration |

These benchmarks should be triangulated. WebArena can isolate web planning and functional correctness. VisualWebArena can reveal whether apparent web competence survives when crucial information is visual. OSWorld can test whether the same agent handles native applications, files, window state, and multi-application procedures. A system that improves on all three under controlled budgets supports a broader claim than one that improves on only one, but even this does not establish safe open-world deployment.

Related methods fill additional gaps. Mind2Web emphasizes offline diversity across real websites; WorkArena concentrates enterprise workflows; AndroidWorld covers a mobile operating system; AgentBench spans several interactive environments and is useful for cross-domain agent reasoning. Benchmark selection should follow the deployment claim rather than benchmark popularity.

## Security and safety belong in the scorecard

A completion-only benchmark rewards an agent for reaching a target state even if it leaks data, follows malicious page instructions, changes unrelated settings, or takes an irreversible action without confirmation. Computer-use systems operate across trust boundaries: user instruction, webpage content, email, documents, tool output, and application notifications may conflict. Prompt injection is therefore an environment property, not merely a language-model curiosity.

Safety evaluation should add tasks and audits for:

- respecting permission boundaries and least privilege;
- distinguishing user instructions from untrusted interface content;
- asking for clarification when consequential intent is ambiguous;
- confirming before purchases, messages, deletion, publication, or access changes;
- avoiding unnecessary collection or exposure of credentials and personal data;
- recognizing when a requested outcome is impossible or unsafe;
- limiting collateral changes and restoring state after recoverable mistakes;
- producing an auditable record without storing secrets in traces.

Sandboxing reduces harm but changes the environment. Reports should document network allowlists, synthetic accounts, credential scope, filesystem mounts, and blocked action classes. A safe benchmark harness should reset state between trials, isolate agents from real user data, and treat pages and artifacts as potentially adversarial.

Useful safety metrics include unauthorized-action rate, intervention rate, policy-compliant refusal or clarification rate, collateral-state changes, and severity-weighted harm. These should sit beside task success rather than being folded into an opaque composite. A system can be capable but unsafe, safe because it does nothing, or both useful and appropriately cautious; one number hides those distinctions.

## A practical evaluation protocol

1. **Define the deployment claim.** Specify users, applications, task families, and allowed consequences.
2. **Choose complementary environments.** Include the narrow target domain plus at least one transfer environment when generality is claimed.
3. **Freeze and publish the configuration.** Record image digests, benchmark and grader commits, task hashes, application versions, seeds, accounts, viewport, observations, actions, and scaffold.
4. **Use held-out, outcome-based tasks.** Include achievable, ambiguous, impossible, recovery, and adversarial cases.
5. **Predeclare budgets.** Fix steps, tokens, time, cost, retries, and parallel attempts before observing test results.
6. **Retain full trajectories and intervention ledgers.** Screens, structured observations, proposed and executed actions, model outputs, adapter events, human actions, timing, and grader evidence enable diagnosis and independent verification.
7. **Report decomposed outcomes.** Give end-to-end success, partial subgoals, grounding errors, planning errors, recovery, latency, cost, safety violations, and uncertainty.
8. **Audit samples manually.** Inspect nominal successes for collateral damage and nominal failures for grader defects.
9. **Run ablations.** Change one of model, observation channel, action space, scaffold, or budget at a time.
10. **Bridge benchmark versions and perturbations.** Run overlap agents on frozen and maintained bundles; vary layout, wording, data instances, timing, and application versions to expose memorization and brittleness.

This protocol does not produce a universal intelligence score. It produces something more useful: evidence connecting a precisely described system to a bounded operational claim.

## Why it matters

Computer use is where model reasoning meets consequences. Small perception or planning errors become sent emails, overwritten files, wrong permissions, or purchases. Evaluations therefore guide not only which system appears capable, but where autonomy is justified, where confirmation is required, and which failures need engineering work.

Good evaluation also prevents misleading frontier narratives. If one result uses screenshots and coordinates while another uses DOM identifiers, extra retries, a larger context, or direct APIs, the difference cannot be assigned cleanly to model intelligence. Transparent system-level reporting makes genuine progress legible and helps distinguish a better base model from a better scaffold or more generous budget.

Finally, benchmark design shapes research. Suites that reward only final-state success encourage capability without restraint; suites that lack recovery tasks encourage brittle one-shot policies; static datasets encourage action imitation rather than closed-loop control. Environments with executable graders, adversarial content, meaningful consequences, and auditable trajectories push toward agents that are not merely impressive in demos but reliable enough to supervise.

## Sources

- Tianbao Xie et al., [OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments](https://arxiv.org/abs/2404.07972), arXiv:2404.07972 (benchmark design, 369 tasks, initial-state setup, controllable desktop environment, and execution-based evaluation); accessed 2026-07-10.
- [OSWorld official repository](https://github.com/xlang-ai/OSWorld) (environment setup, observation and action configuration, saved screenshots/actions/video, account and proxy requirements, and OSWorld-Verified maintenance notice); accessed 2026-07-10.
- Shuyan Zhou et al., [WebArena: A Realistic Web Environment for Building Autonomous Agents](https://arxiv.org/abs/2307.13854), arXiv:2307.13854 (self-hosted websites, realistic tasks, and programmatic functional evaluation); accessed 2026-07-10.
- [WebArena official repository](https://github.com/web-arena-x/webarena) (canonical implementation, site deployment, configuration, action interfaces, and evaluation tooling); accessed 2026-07-10.
- Jing Yu Koh et al., [VisualWebArena: Evaluating Multimodal Agents on Realistic Visual Web Tasks](https://arxiv.org/abs/2401.13649), arXiv:2401.13649 (visually grounded tasks, multimodal observations, and evaluation design); accessed 2026-07-10.
- [VisualWebArena official repository](https://github.com/web-arena-x/visualwebarena) (canonical environment and evaluation implementation); accessed 2026-07-10.
- Xiang Deng et al., [Mind2Web: Towards a Generalist Agent for the Web](https://arxiv.org/abs/2306.06070), arXiv:2306.06070 (offline real-website demonstrations and cross-domain generalization); accessed 2026-07-09.
- Alexandre Drouin et al., [WorkArena: How Capable Are Web Agents at Solving Common Knowledge Work Tasks?](https://arxiv.org/abs/2403.07718), arXiv:2403.07718 (enterprise tasks and BrowserGym action/observation environment); accessed 2026-07-09.
- Christopher Rawles et al., [AndroidWorld: A Dynamic Benchmarking Environment for Autonomous Agents](https://arxiv.org/abs/2405.14573), arXiv:2405.14573 (Android emulator, dynamic tasks, device-state evaluation); accessed 2026-07-09.
- Xiao Liu et al., [AgentBench: Evaluating LLMs as Agents](https://arxiv.org/abs/2308.03688), arXiv:2308.03688 (multi-environment interactive-agent evaluation and failure analysis); accessed 2026-07-09.

## Open questions

- How can benchmark maintainers measure and disclose contamination when tasks, traces, and graders are public?
- Which execution-based graders best detect collateral damage and policy violations, not only the requested target state?
- How should evaluations price human clarification and supervision when asking is safer than guessing?
- What perturbation suites predict robustness to ordinary software updates without turning every run into an unreproducible live-web test?
- Can a shared trace schema make failures comparable across browser, desktop, mobile, and enterprise environments?
- What minimum overlap study is sufficient to connect a maintained benchmark release to its frozen predecessor?
- How should leaderboards disclose human environment repair without penalizing teams for infrastructure failures outside the agent's control?
