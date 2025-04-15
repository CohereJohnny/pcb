# Sprint 8: List Management UI (Core & Viewing) - Tasks

**Goal:** Implement the UI for viewing lists (overview and basic single view) and creating new lists using mock data and local state (Zustand), applying the established design system.

**Directory Focus:** `pcb-app/src/`, `.`, `sprints/sprint_8/`

---

## Task Breakdown:

**1. Data Definitions & Mock Data:**
    *   [x] **Define Types:**
        *   Add `List` interface to `pcb-app/src/types/dataModel.ts` (fields: `id`, `camp_id`, `created_by_user_id`, `title`, `description`, `type` (string for now), `created_at`, `updated_at`).
        *   Add `ListItem` interface to `pcb-app/src/types/dataModel.ts` (fields: `id`, `list_id`, `content`, `is_complete`, `created_at`, `updated_at`). Task-specific fields deferred to Sprint 9.
    *   [x] **Define Constants:** Create `pcb-app/src/lib/constants/listTypes.ts` defining available list types (e.g., `SHOPPING`, `TASK`, `GENERAL`). Export as a const array.
    *   [x] **Create Mock Data File:** Create `pcb-app/src/lib/mockData/lists.ts`.
    *   [x] **Implement Mock Data:** Define and export `mockLists: List[]` and `mockListItems: ListItem[]` in `lists.ts`. Include examples of different list types and basic items for context. Exported `getPastDate` from `announcements.ts` for reuse.
    *   [x] **Create Zustand Store:** Create `pcb-app/src/store/listStore.ts`. Define state (`lists`, `listItems`) and actions (`setLists`, `addList`, `setListItems`, `addListItem`). Initialize with mock data.

**2. List Routes:**
    *   [x] **List Overview Route:** Create `pcb-app/src/app/(camp)/[camp_id]/lists/(list)/page.tsx`.
    *   [x] **New List Route:** Create `pcb-app/src/app/(camp)/[camp_id]/lists/new/page.tsx`.
    *   [x] **Single List View Route:** Create `pcb-app/src/app/(camp)/[camp_id]/lists/[list_id]/page.tsx`.

**3. List UI Components:**
    *   [x] **Component Directory:** Create `pcb-app/src/components/features/lists/`.
    *   [x] **Create `ListCard.tsx`:**
        *   Component to display summary of a single `List` (title, description snippet, type, item count placeholder).
        *   Use Shadcn `Card`. Apply Sprint 5 design system.
        *   Make card clickable, linking to `/[list_id]`.
        *   Used Shadcn `Badge` for type display.
    *   [x] **Create `ListOverview.tsx`:**
        *   Component to display a grid/list of `ListCard` components.
        *   Accepts `List[]` and `campId` as props.
        *   Handles empty state.
    *   [x] **Create Validator:** Create `pcb-app/src/lib/validators/lists.ts`. Define `listSchema` (title, description, type using enum/nativeEnum based on `listTypes.ts`). Export type `ListFormData`.
    *   [x] **Create `ListForm.tsx`:**
        *   Client component (`'use client'`).
        *   Form for creating new lists (title, description, type selection using Shadcn `Select`).
        *   Use Shadcn components (`Card`, `Input`, `Textarea`, `Select`, `Label`, `Button`). Apply Sprint 5 design system.
        *   Integrate RHF/Zod using `listSchema`.
        *   Implement `onSubmit`: adds new list to `useListStore` (`addList`). Requires `campId`, mock `userId`. Includes `onSuccess` callback for redirection.

**4. Page Implementation:**
    *   [x] **List Overview Page (`...(list)/page.tsx`):**
        *   Client component (`'use client'`). Get `campId`.
        *   Fetch lists from `useListStore`. Render `ListOverview`.
        *   Add page title ("Lists"). Add "New List" button linking to `/new` route.
    *   [x] **New List Page (`.../new/page.tsx`):**
        *   Client component (`'use client'`). Get `campId`. Use mock `userId`.
        *   Render `ListForm`, passing props and `onSuccess` handler for redirect back to list overview.
        *   Add page title ("New List").
    *   [x] **Single List View Page (`.../[list_id]/page.tsx`):**
        *   Client component (`'use client'`). Get `campId`, `listId`.
        *   Fetch list details from `useListStore`. Handle not found (404).
        *   Display list title and description.
        *   Add placeholder text: "List items will be shown here in Sprint 9."
        *   Add "Back to Lists" link.

**5. Styling & Integration:**
    *   [x] **Apply Design System:** Ensure all new components and pages adhere to the Sprint 5 design system.
    *   [x] **Navigation:** Add a "Lists" link to the `Sidebar` component (`@/components/layout/Sidebar.tsx`).
    *   [ ] **Vercel Testing:** Periodically push changes and test functionality (viewing list overview, creating new list, viewing basic single list page) on the Vercel deployment.

**6. Sprint Documentation & Wrap-up:**
    *   [ ] Update Progress: Maintain `sprints/sprint_8/sprint_8_updates.md`.
    *   [ ] Log Issues: Record any technical debt or backlog items in `tech_debt.md` or `backlog.md`.
    *   [ ] Create Report: Upon completion, summarize the sprint in `sprints/sprint_8/sprint_8_report.md`.
