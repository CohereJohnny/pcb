# Sprint 1 Report: Project Setup & Foundation

**Version:** 1.0
**Date:** 2025-04-11
**Sprint Goal:** Initialize project, configure tooling, establish basic structure.

---

## Summary of Activities

Sprint 1 focused on setting up the foundational elements of the Theme Camp Hub project. Key activities included:

1.  **Project Initialization:**
    *   Attempted initialization with `pnpm create next-app` but encountered a `corepack` signature verification error.
    *   Successfully initialized the Next.js project (`pcb-app`) using `npx create-next-app` with TypeScript, Tailwind, ESLint, App Router, and `src` directory options.

2.  **Dependency Management:**
    *   Encountered the same `corepack` error when trying to install additional dependencies with `pnpm`.
    *   Switched to using `npm` for the remainder of the sprint.
    *   Successfully installed core Shadcn/ui dependencies (`class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`).
    *   Successfully installed dev dependencies: `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`, `husky`, `lint-staged`, and `prettier-plugin-tailwindcss` (required for pre-commit hook).

3.  **Tooling Configuration:**
    *   Configured Prettier (`.prettierrc.json`, `.prettierignore`).
    *   Created ESLint configuration (`.eslintrc.json`) extending `next/core-web-vitals` and `plugin:prettier/recommended`.
    *   Created Tailwind CSS (`tailwind.config.js`) and PostCSS (`postcss.config.js`) configuration files.
    *   Initialized Shadcn using `npx shadcn@latest init` (updated from deprecated `shadcn-ui`). This created `components.json`, updated `tailwind.config.js` & `globals.css`, and created `src/lib/utils.ts`.
    *   Configured Husky and lint-staged: Added `prepare` script to `package.json`, manually created `.husky/pre-commit` hook (due to deprecated `husky add` command), created `lint-staged.config.js`.

4.  **Project Structure:**
    *   Verified the `src/` directory and base `app/` layout/page structure.
    *   Created necessary subdirectories: `components/ui`, `styles`, `types`, `config`, `constants`, `contexts`, `hooks`.
    *   Created placeholder `src/types/index.ts`.
    *   Updated `README.md` with a minimal project description.

5.  **Version Control:**
    *   Staged all initial files.
    *   Initial commit attempt failed due to missing `prettier-plugin-tailwindcss` dependency caught by the pre-commit hook.
    *   Installed the missing dependency.
    *   Successfully created the initial commit (`feat: initialize project structure, dependencies, and tooling`), verifying the pre-commit hook now runs correctly.

---

## Deviations & Issues Encountered

*   **`pnpm` / `corepack` Errors:** Persistent signature verification errors prevented the use of `pnpm`. Switched to `npm` for dependency management in this sprint.
    *   **Tech Debt:** Investigate and resolve the root cause of `pnpm`/`corepack` errors to potentially switch back later if desired. (Added to `tech_debt.md`)
*   **Deprecated Husky Commands:** `husky add` command is deprecated. Manually created the pre-commit hook file instead.
    *   **Tech Debt:** Update Husky pre-commit script header to remove deprecated lines noted in the commit warning. (Added to `tech_debt.md`)
*   **Missing Config Files:** `create-next-app` did not create `.eslintrc.json`, `tailwind.config.js`, or `postcss.config.js` automatically in this instance. These were created manually.
*   **Shadcn CLI Update:** Had to use `npx shadcn@latest init` instead of the deprecated `shadcn-ui`.

---

## Sprint Outcome

Sprint 1 successfully achieved its goal. The project (`pcb-app`) is initialized with Next.js, TypeScript, Tailwind CSS, and Shadcn. Core development tooling (ESLint, Prettier, Husky, lint-staged) is configured and functional. The basic project structure is in place, and the initial code has been committed to Git.

The project is now ready to proceed with Sprint 2: Core UI Layout & Profile Structure.
