# Sprint 8 Test Plan: Lists UI (Core & Viewing)

**Objective:** Verify the functionality of the Lists feature UI (List Overview, New List Form, Basic Single List View) using mock data.

**Prerequisites:**
*   Application is running locally (`pnpm run dev` in `pcb-app` directory).
*   Assume a mock camp exists with ID `mock-camp-123`.
*   Sidebar link for "Lists" is present and functional.

**Test Cases:**

**1. View List Overview:**
    *   **Action:** Navigate to the "Lists" section via the sidebar link (should go to `/mock-camp-123/lists`).
    *   **Expected Result:**
        *   The page displays the title "Lists".
        *   A grid/list of list cards is displayed, matching the initial mock data (`mockLists` in `lists.ts`).
        *   Each card shows the Title, list type (e.g., "Shopping", "Task") as a Badge, item count, and a snippet of the description.
        *   A "New List" button is visible.

**2. Navigate to New List Form:**
    *   **Action:** From the List Overview page (`/mock-camp-123/lists`), click the "New List" button.
    *   **Expected Result:**
        *   The browser navigates to `/mock-camp-123/lists/new`.
        *   A form titled "Create New List" is displayed with fields for "Title", "Description (Optional)", and a "List Type" select dropdown.
        *   A "Create List" button is visible.

**3. Create New List (Happy Path):**
    *   **Action:**
        *   On the New List page (`/mock-camp-123/lists/new`), enter a valid title (e.g., "Test List - Sprint 8") in the "Title" field.
        *   Optionally, enter a description.
        *   Select a valid list type from the dropdown (e.g., "General").
        *   Click the "Create List" button.
    *   **Expected Result:**
        *   The button may briefly show "Creating...".
        *   The browser redirects back to the List Overview page (`/mock-camp-123/lists`).
        *   The newly created list appears in the overview, displaying the entered title, selected type, 0 items, and description snippet.

**4. Create New List (Validation):**
    *   **Action:**
        *   On the New List page, leave the "Title" field empty, select a type, and click "Create List".
    *   **Expected Result:**
        *   An error message "Title is required" appears below the Title field.
        *   The form is not submitted.
    *   **Action:**
        *   Enter a title, leave the "List Type" dropdown unselected (or on its placeholder), and click "Create List".
    *   **Expected Result:**
        *   An error message "Please select a valid list type." appears below the Type dropdown.
        *   The form is not submitted.

**5. View Basic Single List Page:**
    *   **Action:** From the List Overview page (`/mock-camp-123/lists`), click on the card for the first mock list ("Build Week Shopping List"). Its ID is `list-001`.
    *   **Expected Result:**
        *   The browser navigates to `/mock-camp-123/lists/list-001`.
        *   A "Back to Lists" button/link is visible.
        *   The list title ("Build Week Shopping List") and type ("Shopping") are displayed prominently.
        *   The list description ("Essential supplies...") is displayed.
        *   Placeholder text "List items will be shown here in Sprint 9." is visible in the content area.

**6. Back Navigation from Single List View Page:**
    *   **Action:** On the single list view page (e.g., `/mock-camp-123/lists/list-001`), click the "Back to Lists" button/link.
    *   **Expected Result:**
        *   The browser navigates back to the List Overview page (`/mock-camp-123/lists`).

**7. View Non-Existent List:**
    *   **Action:** Manually navigate to a non-existent list URL (e.g., `/mock-camp-123/lists/invalid-list-id`).
    *   **Expected Result:**
        *   A Next.js 404 "Not Found" page is displayed.
