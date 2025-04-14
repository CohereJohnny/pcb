# Sprint 9: List Management UI (Item Interaction & Tasks) - Tasks

**Goal:** Enable adding, viewing, editing, and completing items within a list, using mock data and local state. Implement task-specific fields and display variations.

**Directory Focus:** `pcb-app/src/`, `.`, `sprints/sprint_9/`

---

## Task Breakdown:

**1. Data/Type Updates:**
    *   [x] **Update `ListItem` Type:** Modify `ListItem` interface in `pcb-app/src/types/dataModel.ts` to include optional task fields: `assignee_user_id?: string | null`, `due_date?: Date | string | null`, `status?: string | null`.
    *   [x] **Define Task Status Constants:** Create `pcb-app/src/lib/constants/taskStatus.ts`. Define statuses (e.g., `TODO`, `IN_PROGRESS`, `DONE`) and export as a const object/enum.
    *   [x] **Update Mock Data:** Enhance `mockListItems` in `pcb-app/src/lib/mockData/lists.ts`. Add `assignee_user_id`, `due_date`, and `status` values to items belonging to TASK lists.
    *   [x] **Update Zustand Store (`useListStore`):**
        *   Add new actions: `updateListItem(itemId: string, updates: Partial<ListItem>)`, `toggleItemComplete(itemId: string)`.  *(Note: `updateItemStatus` covered by `updateListItem`)*.
        *   Implement these actions to modify the `listItems` array in the store state.

**2. List Item UI Components:**
    *   [x] **Create `ListItemDisplay.tsx`:**
        *   Component to render a single list item (`ListItem` prop).
        *   Use Shadcn `Checkbox` for `is_complete` toggle (visible for all types).
        *   Conditionally display task-specific info (`assignee`, `due_date`, `status`) based on the parent `List` type (prop needed?) or item properties.
        *   Use Shadcn `Badge` for task status.
        *   (Stretch) Implement basic inline editing for item `content` (e.g., on click/double-click). **(Deferred)**
        *   Call store actions (`toggleItemComplete`, `updateListItem` for content edits) on interaction.
    *   [x] **Create `ListItemList.tsx`:**
        *   Component to display an ordered list of `ListItemDisplay` components.
        *   Accepts `ListItem[]` and potentially `listType` as props.
        *   Handles empty state for items.
    *   [x] **Create Validator (`listItemSchema`):** Add to `pcb-app/src/lib/validators/lists.ts`. Define schema for adding items (e.g., `content: string().min(1)`).
    *   [x] **Create `AddItemForm.tsx`:**
        *   Simple inline form (likely just an `Input` and `Button`).
        *   Uses RHF/Zod with `listItemSchema`.
        *   `onSubmit` handler calls `addListItem` store action. Requires `listId` prop.
        *   Resets input after successful submission.

**3. Page Implementation Enhancements:**
    *   [x] **Enhance Single List View Page (`.../[list_id]/page.tsx`):**
        *   Fetch `listItems` from `useListStore` for the current `listId` (using `useMemo` pattern on full state selection).
        *   Pass `listType` (from the fetched `list` object) down to `ListItemList` / `ListItemDisplay` if needed for conditional rendering.
        *   Render the `ListItemList` component with fetched items.
        *   Render the `AddItemForm` component, passing the `listId`.
        *   Remove the placeholder text.

**4. Basic "My Tasks" Widget:**
    *   [x] **Create Component:** Create `pcb-app/src/components/features/dashboard/AssignedTasksWidget.tsx`.
    *   [x] **Implement Logic:** Use `useListStore` to get all `listItems`. Filter items where `assignee_user_id` matches a mock current user ID (e.g., `MOCK_CURRENT_USER_ID` from previous sprints) and are not complete/done.
    *   [x] **Render:** Display a simple list of the filtered task items (content and maybe list title). Use Shadcn `Card`.

**5. Styling & Integration:**
    *   [x] **Apply Design System:** Ensure all new/modified components adhere to the Sprint 5 design system.
    *   [x] **Vercel Testing:** Periodically push changes and test list item interactions (adding, completing, viewing tasks) on the Vercel deployment. (User Task - Acknowledged)

**6. Sprint Documentation & Wrap-up:**
    *   [x] Update Progress: Maintain `sprints/sprint_9/sprint_9_updates.md`.
    *   [x] Log Issues: Record any technical debt or backlog items in `tech_debt.md` or `backlog.md`. (Added inline edit to backlog)
    *   [x] Create Report: Upon completion, summarize the sprint in `sprints/sprint_9/sprint_9_report.md`.
