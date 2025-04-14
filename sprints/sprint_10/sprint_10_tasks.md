# Sprint 10: Dashboard Implementation & Roster Management UI (Mock) - Tasks

**Goal:** Build the Dashboard page by integrating existing widgets and implement the UI for mock Roster management actions (Invite, Edit Role, Remove).

**Directory Focus:** `pcb-app/src/`, `.`, `sprints/sprint_10/`

---

## Task Breakdown:

**1. Dashboard Implementation:**
    *   [x] **Create Dashboard Route:** Create `pcb-app/src/app/(camp)/[camp_id]/dashboard/page.tsx`.
    *   [x] **Create Recent Announcements Widget:** Create `pcb-app/src/components/features/dashboard/RecentAnnouncementsWidget.tsx`.
        *   Fetch recent announcements (e.g., top 3-5) from `useAnnouncementStore`.
        *   Display announcements simply (e.g., list of links or simplified cards).
        *   Link to the full announcement or list page.
        *   Use Shadcn `Card` for structure.
    *   [x] **Integrate Widgets on Dashboard Page:**
        *   Import `AssignedTasksWidget` (from Sprint 9) and `RecentAnnouncementsWidget`.
        *   Render the widgets in a layout (e.g., grid).
        *   Add a page title ("Dashboard").

**2. Roster Management UI (Mock):**
    *   [x] **Add "Invite Member" Button:**
        *   Modify the Roster page (`pcb-app/src/app/(camp)/[camp_id]/roster/(view)/page.tsx`).
        *   Add a Shadcn `Button` (e.g., "Invite New Member") near the page title.
        *   Connect the button's `onClick` to a placeholder function (e.g., `() => console.log('Invite action triggered')`).
        *   *(Consider creating an Invite form/modal in a future sprint)*.
    *   [x] **Add Edit/Remove Actions (Mock):**
        *   Decide on UI placement: Add action buttons/menu to the existing `RosterTable` or `MemberCard` component OR create a new page route `pcb-app/src/app/(camp)/[camp_id]/roster/[membership_id]/page.tsx` for member details/actions.
        *   *(Decision: For mock MVP, let's add simple buttons to the Roster page component for now, perhaps within the table/card row if applicable)*.
        *   Modify the Roster display component (`RosterTable` or `MemberCard` - need to confirm which was used). Read the Roster page file first.
        *   Add "Edit Role" and "Remove" buttons/icons per roster member.
        *   Connect buttons to placeholder `onClick` functions (e.g., `(memberId) => console.log('Edit Role action for:', memberId)`).
        *   *(Full implementation with modals/forms deferred post-MVP)*.

**3. Styling & Integration:**
    *   [x] **Apply Design System:** Ensure Dashboard page and Roster modifications adhere to the Sprint 5 design system.
    *   [x] **Vercel Testing:** Periodically push changes and test Dashboard widgets and mock Roster actions on the Vercel deployment. (User Task - Acknowledged)

**4. Sprint Documentation & Wrap-up:**
    *   [x] Update Progress: Maintain `sprints/sprint_10/sprint_10_updates.md`.
    *   [x] Log Issues: Record any technical debt or backlog items in `tech_debt.md` or `backlog.md`. (Added Roster Mgmt actions to backlog).
    *   [x] Create Report: Upon completion, summarize the sprint in `sprints/sprint_10/sprint_10_report.md`.
