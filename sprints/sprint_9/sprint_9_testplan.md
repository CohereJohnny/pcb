# Sprint 9 Test Plan: List Item Interactions & Tasks

**Objective:** Verify adding, completing, and viewing list items, including task-specific details, using mock data.

**Prerequisites:**
*   Application is running locally (`pnpm run dev` in `pcb-app` directory).
*   Assume a mock camp exists with ID `mock-camp-123`.
*   Sprint 8 features (List Overview, New List, Basic Single List View) are functional.
*   Mock current user ID is `user-001` (Alice Ashes).

**Test Cases:**

**1. View List Items (General List):**
    *   **Action:** Navigate to the List Overview (`/mock-camp-123/lists`). Click on the "Kitchen Inventory" list (`list-003`).
    *   **Expected Result:**
        *   The single list view page loads for `list-003`.
        *   The items from `mockListItems` for `list-003` are displayed (e.g., "Propane Tank #1").
        *   Each item has a checkbox.
        *   No task-specific details (assignee, due date, status) are shown for these items.
        *   The "Add Item" form is visible at the bottom.

**2. View List Items (Task List):**
    *   **Action:** Navigate back to the List Overview. Click on the "Pre-Playa Tasks" list (`list-002`).
    *   **Expected Result:**
        *   The single list view page loads for `list-002`.
        *   The items from `mockListItems` for `list-002` are displayed (e.g., "Finalize transport plan", "Pack personal gear", "Buy snacks...").
        *   Task-specific details are visible for items where they exist in mock data:
            *   Assignee name (e.g., "Bob Burnside", "Unassigned", "Alice Ashes").
            *   Due date (e.g., "Due: Apr 18").
            *   Status badge (e.g., "IN_PROGRESS", "TODO", "DONE").
        *   The "Add Item" form is visible.

**3. Add New Item:**
    *   **Action:** On the "Pre-Playa Tasks" list view page (`.../list-002`):
        *   Type "Test add item - S9" into the "Add a new item..." input field.
        *   Click the "Add Item" button.
    *   **Expected Result:**
        *   The new item "Test add item - S9" appears in the list immediately.
        *   The input field is cleared.
        *   The new item has a checkbox and no task details initially.

**4. Add New Item (Validation):**
    *   **Action:** On the "Pre-Playa Tasks" list view page, click the "Add Item" button without typing anything in the input field.
    *   **Expected Result:**
        *   An error message "Item content cannot be empty" appears below the input field.
        *   No item is added to the list.

**5. Mark Item Complete:**
    *   **Action:** On the "Pre-Playa Tasks" list view page, click the checkbox next to the "Pack personal gear" item (`item-005`).
    *   **Expected Result:**
        *   The checkbox becomes checked.
        *   The item text "Pack personal gear" gets a line-through style.
    *   **Action:** Click the checkbox next to "Pack personal gear" again.
    *   **Expected Result:**
        *   The checkbox becomes unchecked.
        *   The line-through style is removed.

**6. View Assigned Tasks Widget (Basic Check - No Dashboard Page Yet):**
    *   *(Manual Code Check or Temporary Render)* Since the Dashboard page doesn't exist yet, this requires viewing the rendered output of `AssignedTasksWidget` if temporarily placed on another page OR manually inspecting the logic.
    *   **Verification Goal:** Confirm the widget logic filters correctly.
    *   **Expected Logic:** The widget should filter `mockListItems` to find items where `assignee_user_id === 'user-001'`, `is_complete === false`, and `status !== 'DONE'`.
    *   **Expected Items (based on current mock data):** None. (Alice's only assigned task, "Buy snacks...", is marked `is_complete: true` and `status: 'DONE'`).
    *   *(Optional Test Modification):* Temporarily change `item-007` in `mockData/lists.ts` to `is_complete: false` and `status: 'TODO'`, restart server. The widget should then display "Buy snacks for the road". Remember to revert the change. 