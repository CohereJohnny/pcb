# Theme Camp Hub - MVP Sprint Plan

**Version:** 1.0
**Date:** 2025-04-11

## Overview

This plan outlines 12 sprints to deliver the Minimum Viable Product (MVP) of the Theme Camp Hub, focusing on a **frontend-first approach**. The initial sprints prioritize building a fully functional UI with mock data and local state management, deployed early to Vercel. Backend integration is deferred post-MVP (v1.0).

**Key Priorities:**
*   Rapid UI development & iteration based on specs.
*   Incremental feature implementation.
*   Early deployment to Vercel (by Sprint 4).
*   Establish CI/CD pipeline (by Sprint 6).
*   Deliver core MVP features (Profile, Roster View, Announcements, Lists/Tasks, Dashboard) with a polished frontend experience.
*   Browser-based testing throughout.

---

## Sprint Breakdown

**Sprint 1: Project Setup & Foundation**
*   **Goal:** Initialize project, configure tooling, establish basic structure.
*   **Tasks:**
    *   Initialize Next.js (App Router) project using `pnpm`.
    *   Install core dependencies: TypeScript, Tailwind CSS, Shadcn/ui, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge`.
    *   Install dev dependencies: ESLint, Prettier, Husky, lint-staged.
    *   Configure ESLint (`eslint-config-next`).
    *   Configure Prettier (`eslint-config-prettier`, `eslint-plugin-prettier`).
    *   Configure Tailwind CSS (`tailwind.config.js`, `postcss.config.js`).
    *   Initialize Shadcn/ui (`components.json`).
    *   Set up basic project structure based on `specs/project_structure.md` (`src/`, `app/`, `components/`, `lib/`, `styles/`, `types/`).
    *   Create basic Root Layout (`app/layout.tsx`) including `globals.css` import.
    *   Create minimal `README.md`.
    *   Set up `.gitignore`.
    *   Initial commit to Git repository.

**Sprint 2: Core UI Layout & Profile Structure**
*   **Goal:** Implement main layout components and the basic Profile page structure.
*   **Tasks:**
    *   Implement core layout components (`src/components/layout/`): `Header`, `Sidebar` (or `MainNav`), `Footer`.
    *   Integrate layout components into `app/(camp)/layout.tsx`.
    *   Define basic data types in `src/types/dataModel.ts` (User, Profile, TravelItinerary, AccommodationDetails).
    *   Set up basic React Context (`UserContext`, `CampContext`) for mock user/camp info.
    *   Create Profile page route (`app/(camp)/[camp_id]/profile/page.tsx`).
    *   Implement Profile UI components (`src/components/features/profile/`): `ProfileForm`, `TravelItineraryForm`, `AccommodationForm` (structure, labels, inputs - no logic yet).
    *   Use Shadcn/ui components (`Input`, `Label`, `Card`, `Button`, etc.).
    *   Style according to `design_spec.md` basics.
    *   Populate UI with initial mock data via context or `useState`.

**Sprint 3: Profile Feature Completion & Form Handling**
*   **Goal:** Make the Profile page fully interactive using local state and form validation.
*   **Tasks:**
    *   Install `react-hook-form` and `zod`.
    *   Define Zod schemas for profile forms in `src/lib/validators/profileSchema.ts`.
    *   Integrate `react-hook-form` with profile components (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`).
    *   Implement local state management (`useState` within components or context) to handle profile data updates.
    *   Implement `onSubmit` handlers to update local state.
    *   Add basic form validation feedback using Zod resolver.
    *   Refine Profile UI styling and layout.
    *   Ensure basic navigation works (e.g., link from Sidebar/Header to Profile).

**Sprint 4: Roster UI & Basic Vercel Deployment**
*   **Goal:** Implement the read-only Roster view and deploy the current state to Vercel.
*   **Tasks:**
    *   Define mock roster data (array of `Membership` and related `Profile` subsets).
    *   Create Roster page route (`app/(camp)/[camp_id]/roster/(view)/page.tsx`).
    *   Implement Roster UI components (`src/components/features/roster/`): `RosterTable` or `MemberCard` list.
    *   Display mock roster data, showing relevant fields (Playa Name, Role, potentially Accommodation summary).
    *   Set up Vercel account and project integration with Git repository.
    *   Configure Vercel build settings for the Next.js project.
    *   Deploy the current application state to Vercel preview/development environment.
    *   Test basic functionality (navigation, Profile editing, Roster view) on the deployed Vercel URL.

**Sprint 5: Announcements UI & Vercel Testing**
*   **Goal:** Implement the UI for creating and viewing announcements. Continue testing on Vercel.
*   **Tasks:**
    *   Define mock announcement data (`Announcement[]`).
    *   Create Announcement routes (`app/(camp)/[camp_id]/announcements/(list)/page.tsx`, `/new/page.tsx`, `/[announcement_id]/page.tsx`).
    *   Implement Announcement UI components (`src/components/features/announcements/`): `AnnouncementList`, `AnnouncementCard`, `AnnouncementForm`.
    *   Display mock announcements on the list page.
    *   Implement the "Create New Announcement" form UI (using RHF/Zod) - saving adds to local mock data state.
    *   Implement the single announcement view page.
    *   Refine UI/UX based on `design_spec.md` and `ux_flow.md`.
    *   Test announcement features on the Vercel deployment.

**Sprint 6: CI/CD Setup**
*   **Goal:** Automate testing, building, and deployment using GitHub Actions and Vercel.
*   **Tasks:**
    *   Set up Husky and lint-staged to run ESLint/Prettier on pre-commit hooks.
    *   Create GitHub Actions workflow (`.github/workflows/ci.yml`):
        *   Trigger on push/pull_request to main branches.
        *   Checkout code.
        *   Set up Node.js and pnpm.
        *   Install dependencies (`pnpm install`).
        *   Run Linter (`pnpm lint`).
        *   Run Build (`pnpm build`).
        *   (Optional: Add basic Vitest/Jest tests later and run here).
    *   Configure Vercel GitHub integration for automatic preview deployments on PRs.
    *   Ensure Vercel production deployments trigger automatically on merges to the main branch.
    *   Verify the CI/CD pipeline works correctly.

**Sprint 7: List Management UI (Core & Viewing)**
*   **Goal:** Implement UI for viewing lists and creating new lists.
*   **Tasks:**
    *   Define mock data for different list types (`List[]` - Shopping, Task, etc.).
    *   Define `List` and `ListItem` types in `src/types/dataModel.ts` and constants (`listTypes.ts`).
    *   Create List routes (`app/(camp)/[camp_id]/lists/(list)/page.tsx`, `/new/page.tsx`, `/[list_id]/page.tsx`).
    *   Implement List UI components (`src/components/features/lists/`): `ListCard` (for overview), `ListForm`.
    *   Implement the list overview page displaying cards for mock lists.
    *   Implement the "Create New List" form UI (RHF/Zod) - saving adds to local mock list state.
    *   Implement the basic structure for viewing a single list (`/[list_id]/page.tsx`), showing its title and description.

**Sprint 8: List Management UI (Item Interaction & Tasks)**
*   **Goal:** Enable adding, viewing, editing, and completing items within a list, including task-specific fields.
*   **Tasks:**
    *   Define mock `ListItem[]` data, including task-specific fields (`assignee_user_id`, `due_date`, `status`).
    *   Implement list item display components (`src/components/features/lists/ListItem`, `ListItemList`).
    *   Enhance the single list view (`/[list_id]/page.tsx`) to display items using `ListItemList`.
    *   Implement UI for adding new items to a list (form within the list view).
    *   Implement UI for editing existing list items.
    *   Implement UI for marking items/tasks complete (`is_complete` or status change).
    *   Handle different UI states based on `ListItem` properties (e.g., checkbox for complete, status badge for tasks).
    *   Implement local state updates for all list item CRUD operations.
    *   Create "My Tasks" view/widget (`src/components/features/dashboard/AssignedTasksWidget.tsx`) filtering mock data based on assignee.

**Sprint 9: Dashboard Implementation & Roster Management UI (Mock)**
*   **Goal:** Build the Dashboard and the UI for (mocked) Roster management actions.
*   **Tasks:**
    *   Create Dashboard route (`app/(camp)/[camp_id]/dashboard/page.tsx`).
    *   Implement Dashboard UI components (`src/components/features/dashboard/`): `RecentAnnouncementsWidget`, `AssignedTasksWidget`.
    *   Integrate widgets onto the Dashboard page, displaying relevant mock data.
    *   Implement UI for Roster management actions (Invite button on Roster page, Edit Role/Remove actions - potentially on a `/[membership_id]/page.tsx` or modal).
    *   Connect UI actions to placeholder functions (e.g., `console.log('Invite sent')`) - no actual logic.

**Sprint 10: AI Feature UI & Settings UI (Mock)**
*   **Goal:** Implement the user interface elements for AI features and settings, without backend calls.
*   **Tasks:**
    *   Create Settings page route (`app/(camp)/[camp_id]/settings/page.tsx`).
    *   Implement UI for AI configuration (Provider selection dropdown, API key input - **display only, do not store securely**).
    *   Add UI elements to relevant forms (e.g., "Draft with AI" button in `AnnouncementForm`, "Suggest Items" in `ListForm`).
    *   Connect UI elements to placeholder functions (e.g., `console.log('AI draft requested')`).
    *   Ensure UI matches `design_spec.md`.

**Sprint 11: Frontend Polish, Testing & Refinement**
*   **Goal:** Perform thorough testing, refine UI/UX consistency, improve responsiveness, and clean up code.
*   **Tasks:**
    *   Conduct comprehensive browser testing (Chrome, Firefox, Safari) on desktop and mobile viewports.
    *   Ensure adherence to `design_spec.md` across all components and pages (colors, typography, spacing).
    *   Test all user flows defined in `ux_flow.md` using mock data.
    *   Add subtle loading/feedback states for local actions (e.g., disabling buttons on submit).
    *   Refactor components for clarity and reusability where needed.
    *   Review and address any outstanding UI bugs or inconsistencies.
    *   Ensure accessibility basics (keyboard navigation, focus states).

**Sprint 12: Documentation, Final Prep & v1.0 Release**
*   **Goal:** Finalize documentation, perform final checks, and prepare for v1.0 (frontend-only MVP) release.
*   **Tasks:**
    *   Update `README.md` with detailed setup, development, and deployment instructions (including Vercel).
    *   Add code comments where complex logic exists.
    *   Perform final testing on the Vercel production deployment.
    *   Ensure environment variables needed for Vercel build are documented (even if minimal for frontend-only).
    *   Clean up any unused code or mock data artifacts.
    *   Create a Git tag for `v1.0.0`.
    *   **Release v1.0 (MVP - Frontend with mock data/local state).**

---

**Post-MVP Considerations (Beyond v1.0):**
*   Backend Integration (Supabase - DB, Auth, RLS).
*   API Layer Implementation (`src/lib/api/`).
*   Connecting UI to live backend data.
*   Implementing actual AI feature logic.
*   More robust testing (Unit, Integration, E2E).
*   Advanced features (Multi-tenancy, Financials, Social, etc.).

## Post-MVP Sprints: Backend Integration (Supabase)

**Sprint 13: Supabase Setup & Initial API Layer**
*   **Goal:** Set up the Supabase project, define database schema, and create the initial API functions for basic data retrieval.
*   **Tasks:**
    *   Create Supabase project.
    *   Install Supabase client library (`@supabase/supabase-js`).
    *   Define database tables in Supabase Studio based on `datamodel.md` (Users, Profiles, Camps, Memberships, Announcements, Lists, ListItems).
    *   Set up basic Row Level Security (RLS) policies for data isolation (e.g., users can only see their own profile, data within their camp). Start simple.
    *   Create Supabase client instance in `src/lib/supabaseClient.ts`.
    *   Implement basic API functions in `src/lib/api/` (e.g., `getProfile`, `getAnnouncements`) using the Supabase client to fetch data.
    *   Test API functions independently (e.g., in server components or simple test scripts).
    *   Configure environment variables for Supabase URL and keys (`.env.local`, Vercel).

**Sprint 14: Data Fetching Integration**
*   **Goal:** Replace mock data fetching with live data from Supabase for read operations.
*   **Tasks:**
    *   Refactor pages/components (Profile, Roster, Announcements, Lists, Dashboard) to fetch data using the new API layer functions (likely in Server Components where possible).
    *   Remove mock data contexts/state related to fetched data.
    *   Adapt UI components to handle loading states while data is fetched.
    *   Implement error handling for data fetching failures.
    *   Test read operations thoroughly across the application using live Supabase data.
    *   Refine RLS policies as needed based on testing.

**Sprint 15: Data Mutation Integration**
*   **Goal:** Implement data creation, update, and deletion operations using Supabase.
*   **Tasks:**
    *   Implement API functions in `src/lib/api/` for mutations (e.g., `updateProfile`, `createAnnouncement`, `addListItem`, `updateListItemStatus`).
    *   Connect UI forms and actions (Profile forms, Announcement form, List/Item forms, Task status updates) to these mutation functions.
    *   Replace local state updates with calls to the API layer, potentially using React Query or SWR for state management and cache invalidation, or simple state updates after successful mutation.
    *   Implement user feedback for mutation success/failure (e.g., toasts).
    *   Test all CRUD operations thoroughly.
    *   Continue refining RLS policies.

**Sprint 16: Supabase Authentication Integration**
*   **Goal:** Replace mock authentication with Supabase Auth.
*   **Tasks:**
    *   Configure Supabase Auth (Email provider, potentially others later).
    *   Implement Sign Up, Sign In, Sign Out flows using Supabase Auth UI helpers or custom forms calling Supabase methods.
    *   Create authentication routes (`src/app/(auth)/...`).
    *   Replace mock User/Camp context with real user session data from Supabase Auth.
    *   Protect routes based on authentication status (middleware or layout checks).
    *   Ensure user `id` and camp context are correctly passed/used for RLS policies and data fetching/mutations.
    *   Test authentication flows, including password resets (if enabled).
    *   **Target: Fully integrated application with Supabase backend (v1.1 potential).**

---

**Further Considerations (Beyond Sprint 16):**
*   Implementing actual AI feature logic using backend functions (Supabase Edge Functions).
*   Secure API key handling for AI features.
*   More robust testing (Unit, Integration, E2E).
*   Advanced features (Multi-tenancy, Financials, Social, etc.).
*   Performance optimization and scaling.
