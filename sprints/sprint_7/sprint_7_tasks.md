# Sprint 7: CI/CD Setup - Tasks

**Goal:** Automate testing (linting), building, and deployment using Husky, lint-staged, GitHub Actions, and Vercel integration.

**Directory Focus:** `.`, `.github/workflows/`, `pcb-app/`, `.husky/`

---

## Task Breakdown:

**1. Install Husky & Lint-Staged:**
    *   [x] `cd pcb-app` (Ensure PWD is the application directory)
    *   [x] Run `pnpm add -D husky lint-staged`
    *   [x] Run `pnpm dlx husky init` to initialize Husky config (`.husky/` directory).
    *   [x] Verify `.husky/` directory is created within `pcb-app`.

**2. Configure Lint-Staged:**
    *   [x] Add `lint-staged` configuration block to `pcb-app/package.json`. Target `*.{ts,tsx}` files and specify commands: `eslint --fix`, `prettier --write`.
    *   [x] Read `pcb-app/package.json` to confirm structure before editing.
    *   [x] Edit `pcb-app/package.json` to add the configuration.

**3. Create Husky Pre-Commit Hook:**
    *   [x] Edit the pre-commit hook file: `pcb-app/.husky/pre-commit`.
    *   [x] Replace the default content (e.g., `npm test`) with the command `npx lint-staged`.
    *   [x] Ensure the hook file remains executable (it should be by default from `husky init`).

**4. Test Pre-Commit Hook:**
    *   [x] Stage some changes in a `.ts` or `.tsx` file within `pcb-app` (e.g., add extra whitespace or a minor code style violation).
    *   [x] Run `git commit -m "test: husky pre-commit hook"` from the project root. **(Note: Commit must be run within `pcb-app` directory due to nested repo)**
    *   [x] Verify that lint-staged runs ESLint and Prettier, potentially modifying the staged files before the commit completes successfully.

**5. Create GitHub Actions Workflow Directory:**
    *   [x] `cd ..` (Ensure PWD is the project root `/Users/jkb/Projects/pcb`)
    *   [x] Run `mkdir -p .github/workflows`.

**6. Create CI Workflow File (`ci.yml`):**
    *   [x] Create file `.github/workflows/ci.yml`.
    *   [x] Add workflow configuration:
        *   Name: CI Pipeline
        *   Trigger: `on: [push, pull_request]` (Consider specifying branches like `main` later if needed)
        *   Job: `build-and-lint`
            *   `runs-on: ubuntu-latest`
            *   Steps:
                *   [x] Checkout code (`actions/checkout@v4`)
                *   [x] Set up pnpm (`pnpm/action-setup@v4`)
                *   [x] Set up Node.js (`actions/setup-node@v4` with Node version e.g., 20.x and pnpm caching)
                *   [x] Install dependencies (`working-directory: ./pcb-app` followed by `run: pnpm install`)
                *   [x] Run Linter (`working-directory: ./pcb-app` followed by `run: pnpm lint`)
                *   [x] Run Build (`working-directory: ./pcb-app` followed by `run: pnpm build`)

**7. Vercel Integration (Manual User Steps):**
    *   [ ] **(User Action Required)** Connect the GitHub repository (`jkb/pcb` or similar) to a new or existing Vercel project via the Vercel dashboard.
    *   [ ] **(User Action Required)** Ensure Vercel Root Directory setting points to `pcb-app`.
    *   [ ] **(User Action Required)** Ensure Vercel build command is `pnpm build` and install command is `pnpm install`.
    *   [ ] **(User Action Required)** Confirm Vercel's Git integration settings automatically deploy the `main` branch to production and create preview deployments for pull requests.
    *   [ ] Add note in `sprint_7_updates.md` acknowledging these manual steps are prerequisites for verification.

**8. Verify CI/CD Pipeline:**
    *   [x] Create a new branch (e.g., `test-ci-cd`).
    *   [x] Make a minor change in `pcb-app` and commit it.
    *   [x] Push the branch to GitHub and create a Pull Request targeting `main`.
    *   [x] Verify the "CI Pipeline" GitHub Action runs automatically on the PR and passes (Lint, Build checks).
    *   [x] **(Requires User Action from Step 7)** Verify a Vercel preview deployment link appears in the PR checks/comments.
    *   [x] Merge the Pull Request into `main`.
    *   [x] Verify the "CI Pipeline" GitHub Action runs automatically on the push to `main` and passes.
    *   [x] **(Requires User Action from Step 7)** Verify a Vercel production deployment is triggered automatically and completes successfully.
    *   [x] Add note in `sprint_7_updates.md` confirming the verification results (Action runs, Vercel previews/deploys).

**9. Sprint Documentation & Wrap-up:**
    *   [ ] Update Progress: Maintain `sprints/sprint_7/sprint_7_updates.md` throughout.
    *   [ ] Log Issues: Record any technical debt or backlog items in `tech_debt.md` or `backlog.md`.
    *   [ ] Create Report: Upon completion, summarize the sprint in `sprints/sprint_7/sprint_7_report.md`.
