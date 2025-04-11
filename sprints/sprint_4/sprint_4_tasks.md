# Sprint 4: Roster UI & Basic Vercel Deployment - Tasks

**Goal:** Implement the read-only Roster view using mock data and deploy the current application state to Vercel for testing.

**Directory Focus:** Primarily `pcb-app/src/`

---

## Task Breakdown:

**1. Mock Data & Types:**
    *   [x] **Define Types:** Review `specs/datamodel.md` and update `pcb-app/src/types/dataModel.ts` to include or refine the `Membership` type (fields: `user_id`, `camp_id`, `role`, `status`). Ensure `User` and `Profile` types contain necessary fields for roster display (e.g., `id`, `name`, `playa_name`, `arrival_date`, `departure_date`, `accommodation_type`).
    *   [x] **Create Mock Data File:** Create `pcb-app/src/lib/mockData/roster.ts`.
    *   [x] **Implement Mock Data:** Define and export arrays of mock data in `roster.ts`:
        *   `mockMemberships`: Array of `Membership` objects.
        *   `mockRosterUsers`: Array of `User` objects corresponding to memberships.
        *   `mockRosterProfiles`: Array of `Profile` objects corresponding to memberships, containing only the fields needed for the roster view. Ensure `user_id`s align across the mock data sets.

**2. Roster Page Route & Structure:**
    *   [x] **Create Route Directory:** Create the directory structure: `pcb-app/src/app/(camp)/[camp_id]/roster/(view)/`.
    *   [x] **Create Page File:** Create the page component file: `pcb-app/src/app/(camp)/[camp_id]/roster/(view)/page.tsx`.
    *   [x] **Implement Basic Page:** Set up the basic React Server Component structure within `page.tsx`. Add a heading (e.g., "Camp Roster") and a brief description.

**3. Roster UI Component (Table View):**
    *   [x] **Create Component Directory:** Create `pcb-app/src/components/features/roster/`.
    *   [x] **Add Shadcn Table:** Run `npx shadcn@latest add table` within the `pcb-app` directory.
    *   [x] **Create `RosterTable.tsx`:** Create the file `pcb-app/src/components/features/roster/RosterTable.tsx`.
    *   [x] **Implement `RosterTable`:**
        *   Mark the component with `'use client'`.
        *   Define table columns using Shadcn's `<ColumnDef>` type (e.g., Playa Name, Role, Arrival Date, Departure Date, Accommodation Type).
        *   Implement the component using Shadcn `Table` components (`DataTable` structure if using their example).
        *   Accept processed roster data as a prop (e.g., `data: RosterMember[]`, where `RosterMember` is a combined type).
        *   Render the table headers and rows based on the provided data and column definitions.

**4. Data Integration & Display:**
    *   [x] **Process Mock Data:** In `pcb-app/src/app/(camp)/[camp_id]/roster/(view)/page.tsx`:
        *   Import the mock data arrays from `roster.ts`.
        *   Create a function or logic to combine `mockMemberships`, `mockRosterUsers`, and `mockRosterProfiles` into a single array suitable for the `RosterTable` component (e.g., `RosterMember[]`).
    *   [x] **Render Table:**
        *   Import the `RosterTable` component into `page.tsx`.
        *   Pass the processed mock roster data to the `RosterTable`.

**5. Vercel Deployment Setup:**
    *   [ ] **(Manual User Task):** Ensure a Vercel account exists.
    *   [ ] **(Manual User Task):** Create a new Vercel project.
    *   [ ] **(Manual User Task):** Link the Vercel project to the GitHub repository (`<your-github-username>/pcb`). Ensure Vercel detects the monorepo structure correctly if applicable, or specifically point it to the `pcb-app` directory if needed.
    *   [ ] **Configure Vercel Project:**
        *   Verify Framework Preset is `Next.js`.
        *   Set Root Directory to `pcb-app` (if not auto-detected).
        *   Verify Build Command (`npm run build` or `next build`).
        *   Verify Output Directory (`.next`).
        *   Verify Install Command (`npm install`).
        *   Add any required Environment Variables (likely none needed yet for frontend-only).

**6. Deployment & Testing:**
    *   [ ] **Push Code:** Commit and push all Sprint 4 changes to the main branch on GitHub.
    *   [ ] **Trigger Deployment:** Initiate a production deployment on Vercel (or ensure the GitHub integration triggers it automatically).
    *   [ ] **Test on Vercel:**
        *   Access the live Vercel deployment URL.
        *   Navigate to the Roster page (e.g., `your-deployment-url.vercel.app/test-camp/roster`).
        *   Verify the roster table displays mock data correctly.
        *   Test navigation between Profile (`/test-camp/profile`) and Roster pages.
        *   Verify existing Profile page functionality (form interaction) still works on the deployed site.

**7. Sprint Documentation & Wrap-up:**
    *   [ ] **Update Progress:** Maintain `sprints/sprint_4/sprint_4_updates.md` throughout the sprint.
    *   [ ] **Log Issues:** Record any new technical debt or backlog items discovered during the sprint in `tech_debt.md` or `backlog.md`.
    *   [ ] **Create Report:** Upon completion, summarize the sprint in `sprints/sprint_4/sprint_4_report.md`.

---