# Technical Debt Log

**Date Added:** 2025-04-11

*   **Issue:** Persistent `pnpm`/`corepack` signature verification errors.
    *   **Context:** Encountered during `pnpm create next-app` and `pnpm add` in Sprint 1. Switched to `npm` as a workaround.
    *   **Action:** Investigate root cause (e.g., Node version, corepack config, network issues) and resolve to potentially switch back to `pnpm` for its benefits (speed, disk space) if desired.

*   **Issue:** Deprecated Husky pre-commit script header.
    *   **Context:** Warning message during `git commit` in Sprint 1 after setting up Husky manually.
    *   **Action:** RESOLVED in Sprint 3 prep by removing deprecated lines from `.husky/pre-commit`.

*   **Issue:** Simplified date validation in Travel Itinerary form.
    *   **Context:** Changed Zod schema for `arrival_date` and `departure_date` from preprocessed `z.date()` to `z.string()` during Sprint 3 to avoid RHF/Zod type conflicts with `<input type="date">`.
    *   **Action:** Revisit date handling. Implement robust parsing/validation (potentially using `<Controller>` or a different date picker component) to ensure dates are handled as `Date` objects in the form state/submission if required by backend later. 