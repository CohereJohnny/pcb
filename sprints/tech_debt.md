# Technical Debt Log

**Date Added:** 2025-04-11

*   **Issue:** Persistent `pnpm`/`corepack` signature verification errors.
    *   **Context:** Encountered during `pnpm create next-app` and `pnpm add` in Sprint 1. Switched to `npm` as a workaround.
    *   **Action:** Investigate root cause (e.g., Node version, corepack config, network issues) and resolve to potentially switch back to `pnpm` for its benefits (speed, disk space) if desired.

*   **Issue:** Deprecated Husky pre-commit script header.
    *   **Context:** Warning message during `git commit` in Sprint 1 after setting up Husky manually.
    *   **Action:** Update `.husky/pre-commit` script to remove the deprecated `#!/usr/bin/env sh` and `. "$(dirname -- "$0")/_/husky.sh"` lines as advised by Husky v10 guidelines (once stable/relevant). 