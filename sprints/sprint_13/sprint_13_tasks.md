# Sprint 13: Documentation, Final Prep & v0.1.0 Release - Tasks

**Goal:** Finalize documentation, perform final checks, and prepare the frontend-only MVP for a nominal v0.1.0 release.

**Directory Focus:** `.`, `pcb-app/`, `sprints/`

---

## Task Breakdown:

**1. Documentation Updates:**
    *   [x] **Update `README.md`:**
        *   Review and expand the main `README.md` in the project root.
        *   Add sections for: Project Overview/Purpose, Features (MVP list), Tech Stack.
        *   Add detailed **Setup Instructions:** Cloning, `pnpm install`, environment variables (even if minimal for frontend-only, mention `.env.local` usage).
        *   Add **Development Instructions:** Running the dev server (`pnpm run dev`), directory structure overview, coding conventions/linting.
        *   Add **Deployment Instructions:** Explanation of Vercel deployment process (connecting repo, build commands, env vars on Vercel).
    *   [x] **Add Code Comments:**
        *   Review complex components or utility functions (e.g., `processRosterData`, potentially parts of forms with complex logic like `AccommodationForm`'s conditional fields).
        *   Add concise comments explaining non-obvious logic or important considerations.

**2. Final Checks & Cleanup:**
    *   [x] **Final Vercel Testing:** Perform a round of smoke testing on the latest Vercel production deployment (or preview if production isn't set up) covering all major features.
    *   [x] **Environment Variable Check:**
        *   Identify any actual environment variables currently used or expected by the build process (even if just `NEXT_PUBLIC_...` placeholders).
        *   Ensure `.env.local` is in `.gitignore`.
        *   Document required env vars in the updated `README.md`.
    *   [x] **Code/Artifact Cleanup:**
        *   Perform a final check for any remaining commented-out code, `console.log` statements (excluding the ones intentionally left in `profile/page.tsx` for now), or unused imports/variables.
        *   Review mock data files (`pcb-app/src/lib/mockData/`) to ensure they are reasonably clean and only contain necessary mock info for the MVP.

**3. Release Preparation:**
    *   [x] **Create Git Tag:** Once all checks pass and documentation is complete, create an annotated Git tag `v0.1.0` pointing to the final commit for the MVP release.
        *   Command: `git tag -a v0.1.0 -m "Release v0.1.0: Frontend MVP"`
        *   Push the tag: `git push origin v0.1.0`
    *   [x] **(Optional) Vercel Production Alias:** Ensure the Vercel deployment intended as v0.1.0 is aliased to the main production domain if applicable.

**4. Sprint Documentation & Wrap-up:**
    *   [x] Update Progress: Maintain `sprints/sprint_13/sprint_13_updates.md`.
    *   [x] Log Issues: Record any issues found during final testing in `sprints/bug_swatting.md` or defer non-critical ones to `sprints/backlog.md`.
    *   [x] Create Report: Upon completion, summarize the sprint in `sprints/sprint_13/sprint_13_report.md`.
