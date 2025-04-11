# Sprint 6 Test Plan: Announcements UI

**Objective:** Verify the functionality of the Announcements feature UI (List, New, View) using mock data.

**Prerequisites:**
*   Application is running locally (`pnpm run dev` in `pcb-app` directory).
*   Assume a mock camp exists with ID `mock-camp-123` (as defined in mock data).

**Test Cases:**

**1. View Announcement List:**
    *   **Action:** Navigate to `/mock-camp-123/announcements` in your browser.
    *   **Expected Result:** 
        *   The page displays the title "Camp Announcements".
        *   A list of announcement cards is displayed, matching the initial mock data (`mockAnnouncements` in `announcements.ts`).
        *   Each card shows the Title, Author Name (e.g., "Alice Ashes", "Bob Burnside"), formatted creation date, and a snippet of the content.
        *   A "New Announcement" button is visible.

**2. Navigate to New Announcement Form:**
    *   **Action:** From the Announcement List page (`/mock-camp-123/announcements`), click the "New Announcement" button.
    *   **Expected Result:**
        *   The browser navigates to `/mock-camp-123/announcements/new`.
        *   A form titled "Create New Announcement" is displayed with fields for "Title" and "Content".
        *   A "Create Announcement" button is visible.

**3. Create New Announcement (Happy Path):**
    *   **Action:** 
        *   On the New Announcement page (`/mock-camp-123/announcements/new`), enter a valid title (e.g., "Test Announcement Title") in the "Title" field.
        *   Enter valid content (e.g., "This is the content for the test announcement.") in the "Content" field.
        *   Click the "Create Announcement" button.
    *   **Expected Result:**
        *   The button may briefly show "Creating...".
        *   The browser redirects back to the Announcement List page (`/mock-camp-123/announcements`).
        *   The newly created announcement appears in the list, displaying the entered title, the mock author ("Alice Ashes"), the current date, and a snippet of the content.

**4. Create New Announcement (Validation):**
    *   **Action:**
        *   On the New Announcement page, leave the "Title" field empty and click "Create Announcement".
    *   **Expected Result:**
        *   An error message "Title is required" appears below the Title field.
        *   The form is not submitted.
    *   **Action:**
        *   Enter a title, leave the "Content" field empty, and click "Create Announcement".
    *   **Expected Result:**
        *   An error message "Content is required" appears below the Content field.
        *   The form is not submitted.

**5. View Single Announcement:**
    *   **Action:** From the Announcement List page (`/mock-camp-123/announcements`), click on the card for the first mock announcement ("Welcome to the Theme Camp Hub!"). Its ID is `announce-001`.
    *   **Expected Result:**
        *   The browser navigates to `/mock-camp-123/announcements/announce-001`.
        *   A "Back to Announcements" button/link is visible.
        *   The full title ("Welcome to the Theme Camp Hub!") is displayed prominently.
        *   The author ("Alice Ashes") and creation date are displayed.
        *   The full content of the announcement is displayed.

**6. Back Navigation from View Page:**
    *   **Action:** On the single announcement view page (e.g., `/mock-camp-123/announcements/announce-001`), click the "Back to Announcements" button/link.
    *   **Expected Result:**
        *   The browser navigates back to the Announcement List page (`/mock-camp-123/announcements`).

**7. View Non-Existent Announcement:**
    *   **Action:** Manually navigate to a non-existent announcement URL (e.g., `/mock-camp-123/announcements/invalid-id`).
    *   **Expected Result:**
        *   A Next.js 404 "Not Found" page is displayed.
