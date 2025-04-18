# Sprint 6: Announcements UI - Tasks

**Goal:** Implement the UI for creating, viewing (list), and displaying single announcements using mock data and local state, consistent with the refined design system.

**Directory Focus:** `pcb-app/src/`

---

## Task Breakdown:

**1. Mock Data & Types:**
    *   [x] **Define Type:** Review `specs/datamodel.md` and add/refine the `Announcement` type in `pcb-app/src/types/dataModel.ts` (fields: `id`, `camp_id`, `author_user_id`, `title`, `content`, `created_at`, `updated_at`).
    *   [x] **Create Mock Data File:** Create `pcb-app/src/lib/mockData/announcements.ts`.
    *   [x] **Implement Mock Data:** Define and export an array of mock `Announcement` objects in `announcements.ts`. Include a few sample announcements.
    *   [x] **Local State Management:** Prepare a simple local state mechanism (e.g., a Zustand store or simple React Context/Provider if preferred over prop drilling) to hold and manage the mock announcements array in memory during the session. This will allow adding new mock announcements via the form.
        *   Create `pcb-app/src/store/announcementStore.ts` (or similar context file).
        *   Define state shape (`announcements: Announcement[]`).
        *   Define actions (`setAnnouncements`, `addAnnouncement`).
        *   Implement the store/provider logic.
        *   Wrap a relevant layout (e.g., `(camp)/layout.tsx` or potentially root layout) with the provider if using Context.

**2. Announcement Routes:**
    *   [x] **List Route:** Create directory `pcb-app/src/(camp)/[camp_id]/announcements/(list)/` and page file `page.tsx`.
    *   [x] **New Route:** Create directory `pcb-app/src/(camp)/[camp_id]/announcements/new/` and page file `page.tsx`.
    *   [x] **View Route:** Create directory `pcb-app/src/(camp)/[camp_id]/announcements/[announcement_id]/` and page file `page.tsx`.

**3. Announcement UI Components:**
    *   [x] **Create Component Directory:** Create `pcb-app/src/components/features/announcements/`.
    *   [x] **Create `AnnouncementCard.tsx`:**
        *   Implement a component to display a single announcement summary (title, author placeholder, date, snippet of content).
        *   Use Shadcn `Card` component, applying theme styling (minimal borders, neutral colors).
        *   Make the card clickable, linking to the single announcement view route (`/[announcement_id]`).
    *   [x] **Create `AnnouncementList.tsx`:**
        *   Implement a component to display a list of `AnnouncementCard` components.
        *   Accept an array of `Announcement` objects as a prop.
        *   Map over the data and render `AnnouncementCard` for each.
        *   Handle the case where there are no announcements.
    *   [x] **Create `AnnouncementForm.tsx`:**
        *   Implement a form for creating new announcements (title, content inputs).
        *   Use Shadcn components (`Card`, `Input`, `Textarea`, `Label`, `Button`). Apply theme styling and spacing consistent with Profile forms.
        *   Integrate `react-hook-form` and `zod` for validation (define `announcementSchema` in `pcb-app/src/lib/validators/`).
        *   Implement `onSubmit` handler that adds the new announcement to the local mock data state (using the store/context action defined in step 1.4).
        *   Provide user feedback on submit (e.g., disable button, potentially show a success message/redirect).

**4. Integration with Pages:**
    *   [x] **Integrate `AnnouncementList`:** Update `pcb-app/src/(camp)/[camp_id]/announcements/(list)/page.tsx`:
        *   Make it a client component (`'use client'`).
        *   Fetch announcements from `useAnnouncementStore` based on `camp_id` from params.
        *   Render `AnnouncementList` component, passing the data and `campId`.
    *   [x] **Integrate `AnnouncementForm`:** Update `pcb-app/src/(camp)/[camp_id]/announcements/new/page.tsx`:
        *   Make it a client component (`'use client'`).
        *   Get `campId` from params.
        *   Render `AnnouncementForm` component, passing `campId`, a mock user ID, and an `onSuccess` callback that redirects to the list view.
    *   [ ] **List Page (`...(list)/page.tsx`):**
        *   Fetch mock announcements from the local state store/context.
        *   Render the `AnnouncementList` component, passing the fetched announcements.
        *   Add a page title (e.g., "Announcements").
        *   Include a button/link (e.g., using Shadcn `Button`) to navigate to the `/new` announcement route.
    *   [ ] **New Page (`.../new/page.tsx`):**
        *   Render the `AnnouncementForm` component.
        *   Add a page title (e.g., "New Announcement").
        *   After successful form submission, redirect back to the announcement list page.
    *   [x] **Implement View Page:** Update `pcb-app/src/(camp)/[camp_id]/announcements/[announcement_id]/page.tsx`:
        *   Make it a client component (`'use client'`).
        *   Fetch the specific announcement from `useAnnouncementStore` using `camp_id` and `announcement_id` from params.

**5. Styling & Integration:**
    *   [ ] **Apply Design System:** Ensure all new components (`AnnouncementCard`, `AnnouncementList`, `AnnouncementForm`) and pages adhere strictly to the refined design system established in Sprint 5 (colors, typography, spacing, minimalism).
    *   [ ] **Navigation:** Add a link to the main Announcements list page (`/(camp)/[camp_id]/announcements`) in the `Sidebar` component.
    *   [ ] **Vercel Testing:** Periodically push changes and test functionality (viewing list, creating new, viewing single) on the Vercel deployment.

**6. Sprint Documentation & Wrap-up:**
    *   [ ] **Update Progress:** Maintain `sprints/sprint_6/sprint_6_updates.md`.
    *   [ ] **Log Issues:** Record any technical debt or backlog items in `tech_debt.md` or `backlog.md`.
    *   [ ] **Create Report:** Upon completion, summarize the sprint in `sprints/sprint_6/sprint_6_report.md`.

---
