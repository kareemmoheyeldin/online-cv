# Workspace Rules

## Mandatory Ponytail Workflow (Before Modifying Code)

Before writing, editing, fixing, refactoring, or adding dependencies in this repository:

1. **Activate `ponytail`**: Read and follow the `ponytail` skill (`SKILL.md`) if it is not already active in the current session.
   - Use **`full`** mode by default unless the user specifies `lite`, `ultra`, or disables it (`stop ponytail`, `normal mode`, `/ponytail off`).
2. **Pre-write scope check**: Read the task and all code it touches, list affected callers, tests, fixtures, config, and exports, and check for breakage, data-loss, or security risks before making edits.
3. **Smallest complete change**:
   - Reuse existing codebase helpers, components, patterns, standard library features, and installed dependencies before adding new code or packages.
   - Skip unrequested features, abstractions, wrappers, and speculative config.
   - Never cut trust-boundary validation, data-loss error handling, security, accessibility, or explicit user requirements.
   - Add a focused test or self-check for new non-trivial logic, and mark intentional bounded limits with `shortcut: <limit>, <when to upgrade>`.
4. **End-of-reply note**: After coding changes, end with 1-2 lines stating what was skipped or not checked and any risk the user should know.

## Ponytail Companion Skills

Use the corresponding Ponytail skill when the task matches:

- `ponytail-review`: Reviewing uncommitted changes, commits, PRs, or checking for over-engineering.
- `ponytail-audit`: Running a full-repository quality, risk, scale, and bloat audit.
- `ponytail-debt`: Listing tracked `shortcut:` comments across the codebase.
- `ponytail-gain` / `ponytail-help`: Checking measured savings or Ponytail command reference.
