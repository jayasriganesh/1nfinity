# InfinityX Global — Claude CLI Setup Instructions
# Paste this file into the project root and ask Claude CLI to execute it.

---

## WHAT TO DO WITH THIS FILE

Paste this into your project root as SETUP_INSTRUCTIONS.md
Then open Claude CLI in the project folder and say:
"Read SETUP_INSTRUCTIONS.md and set everything up exactly as written."

---

## STEP 1 — Create the .claude/commands folder structure

Create this folder: .claude/commands/
This is where Claude CLI looks for custom slash commands.

---

## STEP 2 — Move skill files into slash commands

The skill files are currently inside the "claude all" folder.
Copy each SKILL.md into .claude/commands/ with these exact names:

Source: claude all/clone-master/SKILL.md  → Destination: .claude/commands/clone-master.md
Source: claude all/clone-audit/SKILL.md   → Destination: .claude/commands/clone-audit.md
Source: claude all/clone-extract/SKILL.md → Destination: .claude/commands/clone-extract.md
Source: claude all/clone-plan/SKILL.md    → Destination: .claude/commands/clone-plan.md
Source: claude all/clone-build/SKILL.md   → Destination: .claude/commands/clone-build.md
Source: claude all/clone-qa/SKILL.md      → Destination: .claude/commands/clone-qa.md

Also copy the reference files:
Source: claude all/clone-master/references/ → Destination: .claude/commands/references/
(copy all 3 files inside: review-gates.md, claude-md-template.md, phase-contracts.md)

---

## STEP 3 — Place the CLAUDE.md in the project root

The CLAUDE.md file contains the full project state.
It must sit in the project root (same level as package.json).
Claude CLI reads it automatically at the start of every session.
This means you never need to re-explain the project — it picks up exactly where it left off.

If you do not have the CLAUDE.md yet, it will be provided separately.

---

## STEP 4 — Create a .claude/settings.json file

Create this file at .claude/settings.json with this content:

{
  "model": "claude-sonnet-4-5",
  "autoApprove": ["write", "edit", "create"],
  "contextFiles": ["CLAUDE.md"]
}

This tells Claude CLI:
- Which model to use (best for build tasks)
- Auto-approve file writes so it doesn't ask permission on every file
- Always load CLAUDE.md as context at session start

---

## STEP 5 — Chrome MCP setup (for /clone-audit)

When running the audit phase, Claude needs live browser access.
This gives it the ability to see computed CSS, hover states, screenshots, and real asset URLs.

Start Claude CLI with this command instead of plain "claude":
  claude --mcp-server chrome

Or if that does not work on your machine:
  npx @anthropic-ai/claude-code --chrome

This is only needed during /clone-audit (Phase 1).
All other phases (build, QA etc.) run with plain: claude

---

## STEP 6 — Verify the final folder structure

After setup, your project root should look like this:

infinityxglobal-claude/
├── .claude/
│   ├── commands/
│   │   ├── clone-master.md
│   │   ├── clone-audit.md
│   │   ├── clone-extract.md
│   │   ├── clone-plan.md
│   │   ├── clone-build.md
│   │   ├── clone-qa.md
│   │   └── references/
│   │       ├── review-gates.md
│   │       ├── claude-md-template.md
│   │       └── phase-contracts.md
│   └── settings.json
├── claude all/              ← original folder, keep it as backup
├── src/
├── CLAUDE.md                ← project state file (auto-loaded every session)
├── SETUP_INSTRUCTIONS.md    ← this file (can delete after setup)
├── package.json
├── tailwind.config.ts
└── ... (rest of Next.js files)

---

## STEP 7 — How to start every session

Normal build sessions (Phases 2-6):
  cd D:\infinityxglobal-claude
  claude

Audit session only (Phase 1 — one time only):
  cd D:\infinityxglobal-claude
  claude --mcp-server chrome

Then just say: /clone-master
Claude will read CLAUDE.md, see where you are, and continue automatically.

---

## STEP 8 — Token efficiency rules (follow these strictly)

ONE session = ONE goal only.
Examples of correct session scopes:
  - "Build the Navbar component"
  - "Build the Footer component"
  - "Run /clone-audit on maxhub.com/in/"

Never ask Claude to do multiple components in one session.
At the end of each session, tick the completed item in CLAUDE.md.
This keeps context windows small and costs low.

---

## IMPORTANT — Never do these things

- Never commit .env.local to git (it contains API keys)
- Never change the MX records in Cloudflare (email will break)
- Never re-discuss locked decisions (stack, hosting, scope — all locked in CLAUDE.md)
- Never start a session without CLAUDE.md in the project root

---

## Setup complete. First command to run:

Once infrastructure is ready (Cloudflare + Vercel + GitHub repo connected):
  claude --mcp-server chrome
  /clone-audit https://www.maxhub.com/in/
