# Sprint 11: AI Feature UI & Settings UI (Mock) - Tasks

**Goal:** Implement the user interface elements for AI features (buttons in forms) and the basic structure of the Settings page for AI configuration, without backend calls.

**Directory Focus:** `pcb-app/src/`, `.`, `sprints/sprint_11/`

---

## Task Breakdown:

**1. Settings Page & AI Configuration UI (Mock):**
    *   [ ] **Create Settings Route:** Create `pcb-app/src/app/(camp)/[camp_id]/settings/page.tsx`.
    *   [ ] **Create AI Config Component:** Create `pcb-app/src/components/features/settings/AiConfigForm.tsx` (or similar name).
        *   Use Shadcn components (`Card`, `Label`, `Select`, `Input`, `Button`, `Form`, etc.).
        *   Include a `Select` dropdown for "AI Provider" (e.g., OpenAI, Anthropic - mock options).
        *   Include an `Input` field for "API Key" (type="password", **display only - emphasize security risk**).
        *   Include a "Save Settings" button with a placeholder `onClick` handler (`console.log('Save AI Settings clicked')`).
        *   **Important:** Add clear text warning that API keys entered here are **not securely stored** in this mock implementation.
    *   [ ] **Implement Settings Page:**
        *   Add a page title ("Settings").
        *   Render the `AiConfigForm` component.

**2. AI UI Elements in Forms (Mock):**
    *   [ ] **Enhance `AnnouncementForm`:**
        *   Modify `pcb-app/src/components/features/announcements/AnnouncementForm.tsx`.
        *   Add a small "Draft with AI" button (e.g., using a Wand icon from `lucide-react`) next to the "Content" label or textarea.
        *   Connect the button's `onClick` to a placeholder function (`console.log('Draft Announcement with AI clicked')`).
    *   [ ] **Enhance `ListForm`:**
        *   Modify `pcb-app/src/components/features/lists/ListForm.tsx`.
        *   Add a small "Suggest Items" button (e.g., using a Lightbulb icon) near the form title or item area (Note: no item area yet in `ListForm`, maybe add near description?).
        *   Connect the button's `onClick` to a placeholder function (`console.log('Suggest List Items clicked')`).
    *   [ ] **Enhance `AddItemForm`:**
        *   Modify `pcb-app/src/components/features/lists/AddItemForm.tsx`.
        *   Add a small "Suggest Item" icon button (e.g., Lightbulb) next to the input field.
        *   Connect the button's `onClick` to a placeholder function (`console.log('Suggest List Item clicked')`).

**3. Styling & Integration:**
    *   [ ] **Apply Design System:** Ensure Settings page and new UI elements adhere to the Sprint 5 design system.
    *   [ ] **Vercel Testing:** Periodically push changes and test placeholder AI/Settings UI elements on the Vercel deployment.

**4. Sprint Documentation & Wrap-up:**
    *   [ ] Update Progress: Maintain `sprints/sprint_11/sprint_11_updates.md`.
    *   [ ] Log Issues: Record any technical debt or backlog items in `tech_debt.md` or `backlog.md`.
    *   [ ] Create Report: Upon completion, summarize the sprint in `sprints/sprint_11/sprint_11_report.md`.
