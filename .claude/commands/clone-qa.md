---
name: clone-qa
description: >
  Trigger this skill immediately when the user types /clone-qa. This is Stage 5 (final stage)
  of the MWP Website Clone Pipeline. It performs a fidelity audit comparing the built clone
  against the original site — tracing every visual, copy, structural, and token discrepancy
  back to its source in the build pipeline (audit → extract → plan → build). Produces a
  qa-report.md with a fidelity score, a diff table of every discrepancy, and a source-traced
  fix list. Applies the paper's "edit-source principle": distinguishes one-off output fixes
  from source-level pipeline improvements. Also trigger when user says "QA the clone",
  "check fidelity", "compare my build to the original", "is it matching", or "final review".
---

# /clone-qa — Clone Fidelity Audit (MWP Stage 5)

## Trigger
Activate when the user types `/clone-qa`.

**Required inputs:**
- Layer 3: `clone-extract_[domain]_tokens.json`, `clone-extract_[domain]_components.md`
- Layer 3: `clone-plan_[domain]_pages.md` (copy source of truth)
- Layer 4: Built code files (shared via upload or referenced path)
- Optional: Live URL of the built clone (for deeper comparison)

If the target site URL is available, re-fetch it to compare against current state.

---

## Role — What This Stage Does
This is **MWP Stage 05_qa**. This stage does two distinct jobs:

**Job 1 — Fidelity Check:** Does the clone match the original in design, copy, structure, and tokens?

**Job 2 — Source Tracing (the paper's "semantic debugging"):** For every discrepancy, trace it
back to WHICH stage in the pipeline introduced it — audit, extract, plan, or build.

This distinction is critical. The paper states:
> "Editing the output fixes this run. Editing the source fixes every future run."

QA output must separate:
- **Output fixes** — patch the built code for this client (quick, one-time)
- **Source fixes** — improve a pipeline file so the bug never recurs

---

## Non-Negotiable Evidence Rule

Every discrepancy must cite:
- **Observed in original:** exact copy string, class name, observed structural pattern
- **Built in clone:** exact code line, component name, prop value
- **Source of failure:** which pipeline stage file introduced the gap

No vague "the hero looks different." Specific: "Hero H1 in clone reads '[built text]' —
original observed H1 from audit is '[audit text]' — source: copy was missing from page-plan.md."

---

## Pre-QA Protocol

Execute before writing any report:

### Step 1 — Re-fetch the original site
```
web_fetch(url=ORIGINAL_URL, html_extraction_method="markdown")
```
Extract the same signals as clone-audit: H1s, CTAs, nav structure, classes.

### Step 2 — Read the built code
From uploaded files or paths — read every component and page file.

### Step 3 — Load Layer 3 reference files
- `tokens.json` → expected design system
- `components.md` → expected component spec
- `pages.md` → expected copy

### Step 4 — Build the diff matrix
Before writing, construct internally:

| Element | Original (observed now) | Clone (built) | Match? | Source of gap |
|---|---|---|---|---|
| Nav items | [list] | [list] | ✓/✗ | — |
| Hero H1 | "[text]" | "[text]" | ✓/✗ | — |
| Hero CTA text | "[text]" | "[text]" | ✓/✗ | — |
| Stats values | [list] | [list] | ✓/✗ | — |
| Primary color | [hex] | [hex in code] | ✓/✗ | — |
| Font family | [name] | [name in code] | ✓/✗ | — |
| Footer links | [list] | [list] | ✓/✗ | — |
| ... | | | | |

---

## Output — `qa-report.md`

Save to: `/mnt/user-data/outputs/clone-qa_[domain]_report.md`

```markdown
# Clone Fidelity Report — [domain]

Original URL: [url]
Built clone: [path or URL]
QA date: [date]
Pipeline files reviewed: [list all Layer 3 files used]

---

## Fidelity Score

| Dimension | Score | Notes |
|---|---|---|
| Information Architecture | X/10 | |
| Copy fidelity | X/10 | |
| Design token accuracy | X/10 | |
| Component structure | X/10 | |
| Responsive behavior | X/10 | (requires browser verification if not tested) |
| Animation parity | X/10 | (requires browser verification) |

**Overall Fidelity: X/10**
One sentence grounded in the highest-impact discrepancy found.

---

## Discrepancy Register

Every gap, classified by type and source-traced to the pipeline stage that caused it.

### COPY DISCREPANCIES

| # | Location | Original (observed) | Clone (built) | Severity | Source Stage |
|---|---|---|---|---|---|
| C1 | Hero H1 | "[exact]" | "[exact]" | High / Med / Low | [audit/extract/plan/build] |
| C2 | Nav item 3 | "[exact]" | "[exact]" | | |
| ... | | | | | |

### DESIGN TOKEN DISCREPANCIES

| # | Token | Expected (tokens.json) | Built | Severity | Source Stage |
|---|---|---|---|---|---|
| T1 | Primary color | #[hex] | #[hex in code] | High | [stage] |
| T2 | Heading font | [name] | [name in code] | | |
| ... | | | | | |

### STRUCTURAL DISCREPANCIES

| # | Page/Section | Original structure | Clone structure | Severity | Source Stage |
|---|---|---|---|---|---|
| S1 | Homepage | [observed] | [built] | | [stage] |
| ... | | | | | |

### COMPONENT DISCREPANCIES

| # | Component | Original behavior | Clone behavior | Severity | Source Stage |
|---|---|---|---|---|---|
| K1 | Navbar | [observed] | [built] | | [stage] |
| ... | | | | | |

---

## Fix Plan — Source-Traced (The MWP Edit-Source Principle)

### Output Fixes (patch the clone code — this client only)

These are one-time fixes. They improve this build but don't improve the pipeline.

| # | Fix | File to edit | Exact change |
|---|---|---|---|
| 1 | [discrepancy ref] | components/[name].tsx | [precise change] |
| 2 | | | |

### Source Fixes (improve a pipeline file — fixes all future clones)

These are durable improvements. Fixing the source file means this bug never recurs.

| # | Discrepancy | Source file to update | What to change |
|---|---|---|---|
| 1 | C1 — Hero H1 wrong | `clone-plan_[domain]_pages.md` | Add exact copy to Homepage section |
| 2 | T1 — Wrong primary color | `clone-extract_[domain]_tokens.json` | Update primary.value |
| 3 | S1 — Missing section | `clone-plan_[domain]_pages.md` | Add missing section to Homepage breakdown |

**Rule:** If you fixed the same output issue more than once, the real fix is always a source fix.

---

## Passing Elements (Evidence-Grounded)

List what the clone got right — grounded in observed evidence.

| Element | Original | Clone | Match quality |
|---|---|---|---|
| [element] | [observed] | [built] | Exact / Close / Acceptable |

Minimum 5 passing elements — every clone gets credit for what it nailed.

---

## Final Verdict

```
Clone Status: SHIP-READY / NEEDS FIXES / REBUILD REQUIRED

Critical blockers (must fix before delivery): [count]
Medium issues (fix before client review): [count]
Low issues (optional polish): [count]

Estimated fix time: [hours/days]
```

One paragraph: What is the clone's actual fidelity level, what are the two most impactful
things to fix, and what would make it ship-ready? Ground every claim in the discrepancy register.
```

---

## Output Rules

1. Save to `/mnt/user-data/outputs/clone-qa_[domain]_report.md`
2. Call `present_files` to deliver
3. Post a 3-line chat summary:
   - Overall fidelity score + verdict
   - The single highest-severity discrepancy and its source stage
   - Count: [N] output fixes / [N] source fixes needed
4. Every discrepancy must cite the original observed evidence AND the built code evidence
5. Source stage attribution is mandatory — never log a discrepancy without tracing it

---

## Human Review Gate (Final Gate)

After delivering the report, prompt:

> **QA complete.**
>
> You have two types of work:
>
> **Output fixes** ([N] items) — edit the component files directly.
> These are quick patches for this build.
>
> **Source fixes** ([N] items) — edit the pipeline files (tokens.json, components.md, pages.md).
> These permanently improve your clone pipeline for every future project.
>
> Recommended: do the source fixes first, re-run the affected `/clone-build` steps,
> then apply any remaining output fixes.
>
> When the critical blockers are resolved, the clone is ready to deliver.

---

## The Edit-Source Principle (from the paper)

The paper argues: "If the practitioner consistently tightens the opening paragraph,
that is a signal that the stage contract should say 'keep the opening under three sentences.'"

Apply this to the clone pipeline:
- If copy is wrong → the real fix is `pages.md`, not the component
- If a token is wrong → the real fix is `tokens.json`, not a hardcoded value in `.tsx`
- If a component structure is wrong → the real fix is `components.md`, not ad-hoc JSX

**The QA report is a debugging tool for the pipeline, not just a punch list for the build.**
