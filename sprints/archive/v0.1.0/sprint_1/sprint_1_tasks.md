# Sprint 1 Tasks: Project Setup & Foundation

**Version:** 1.0
**Date:** 2025-04-11

**Goal:** Initialize project, configure tooling, establish basic structure.

---

## Tasks Checklist

**1. Project Initialization & Dependencies:**
*   [ ] Navigate to the desired parent directory for the project.
*   [x] Initialize Next.js project using `pnpm create next-app@latest --typescript --tailwind --eslint --app --src-dir --import-alias="@/*"`.
*   [x] `cd` into the newly created project directory.
*   [x] Verify core dependencies (`next`, `react`, `react-dom`, `typescript`, `@types/react`, `@types/node`, `tailwindcss`, `postcss`, `autoprefixer`, `eslint`, `eslint-config-next`) are in `package.json`.
*   [x] Install Shadcn/ui core dependencies explicitly (even if `init` adds them, for clarity): `pnpm add class-variance-authority clsx tailwind-merge lucide-react`.
*   [x] Install Prettier and related ESLint plugins: `pnpm add -D prettier eslint-config-prettier eslint-plugin-prettier`.
*   [x] Install Husky and lint-staged: `pnpm add -D husky lint-staged`.

**2. Tooling Configuration:**
*   [x] Configure Prettier:
    *   [x] Create `.prettierrc.json` (configure options like `semi`, `singleQuote`, `tabWidth`, `plugins` if needed, e.g., `prettier-plugin-tailwindcss`).
    *   [x] Create `.prettierignore` (add `.next`, `node_modules`, `pnpm-lock.yaml`, etc.).
*   [x] Configure ESLint:
    *   [x] Verify `.eslintrc.json` includes `next/core-web-vitals` and potentially Prettier integration (`plugin:prettier/recommended` as the last extend).
*   [x] Configure Tailwind CSS:
    *   [x] Verify `tailwind.config.js` and `postcss.config.js` were created.
    *   [x] Update `tailwind.config.js` content array to include `./src/**/*.{ts,tsx}`.
*   [x] Initialize Shadcn/ui:
    *   [x] Run `pnpm dlx shadcn-ui@latest init`.
    *   [x] Choose preferred style (e.g., Default), base color (e.g., Slate), CSS variables usage.
    *   [x] Confirm `components.json` is created.
    *   [x] Verify `tailwind.config.js` was updated by Shadcn.
    *   [x] Verify `app/globals.css` was updated by Shadcn.
*   [x] Configure Husky & lint-staged:
    *   [x] Run `pnpm husky install`.
    *   [x] Add prepare script to `package.json`: `"prepare": "husky install"`.
    *   [x] Run `npx husky add .husky/pre-commit "pnpm lint-staged"`.
    *   [x] Create `lint-staged.config.js` or add `lint-staged` key to `package.json`:
        ```json
        "lint-staged": {
          "*.{js,jsx,ts,tsx}": "eslint --fix",
          "*.{js,jsx,ts,tsx,json,css,md}": "prettier --write"
        }
        ```

**3. Project Structure & Basic Files:**
*   [x] Verify the `src/` directory structure exists.
*   [x] Create core subdirectories within `src/` if they don't exist: `components/`, `lib/`, `styles/`, `types/`, `config/`, `constants/`, `contexts/`, `hooks/`.
*   [x] Create `src/components/ui/` directory (Shadcn components will go here).
*   [x] Create initial `src/lib/utils.ts` (Shadcn `init` might create this with `cn` function).
*   [x] Create `src/types/index.ts`.
*   [x] Verify root layout `src/app/layout.tsx` exists and imports `src/app/globals.css`.
*   [x] Verify `src/app/page.tsx` exists (initial landing page).
*   [x] Create a minimal `README.md` with project title and brief description.
*   [x] Verify `.gitignore` exists and includes common Next.js/Node.js ignores (`.next`, `node_modules`, `.env.local`, etc.). Add `*.log`, `.DS_Store` if missing.

**4. Version Control:**
*   [x] Initialize Git repository: `git init` (if not already done by `create-next-app`).
*   [x] Stage all created/modified files: `git add .`
*   [x] Create initial commit: `git commit -m "feat: initialize project structure, dependencies, and tooling"`.
*   [ ] (Optional) Create GitHub repository and push initial commit.

---

**Completion Check:** At the end of this sprint, the project should be runnable (`pnpm dev`), have basic linting/formatting enforced on commit, and the foundational directory structure should be in place, ready for Sprint 2 development. 