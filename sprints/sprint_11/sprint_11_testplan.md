# Sprint 11 Test Plan

**Goal:** Verify the correct implementation and basic functionality of the Settings page UI and the placeholder AI buttons added to various forms.

**Tester:** [Your Name/Initials]
**Date:** [Date Tested]

---

## Test Environment:

*   **Browser(s):** [e.g., Chrome, Firefox]
*   **Device(s):** [e.g., Desktop]
*   **Deployment:** [e.g., Localhost, Vercel Preview URL]

---

## Test Cases:

**1. Settings Page UI & AI Configuration Form:**

*   [ ] **Navigate to Settings:**
    *   Access a specific camp.
    *   Navigate to the `/settings` route for that camp (e.g., `/c/[camp_id]/settings`).
    *   **Expected:** The Settings page loads successfully.
*   [ ] **Verify Page Content:**
    *   Check for the main page title "Settings".
    *   **Expected:** The title "Settings" is displayed prominently.
*   [ ] **Verify AI Config Form Presence:**
    *   Locate the AI Configuration form (`AiConfigForm`).
    *   **Expected:** The form component is rendered on the page.
*   [ ] **Verify Form Fields:**
    *   Check for the "AI Provider" `Select` dropdown.
    *   Check for the "API Key" `Input` field (should be type password).
    *   Check for the "Save Settings" `Button`.
    *   **Expected:** All form elements (Provider Select, API Key Input, Save Button) are present.
*   [ ] **Verify API Key Security Warning:**
    *   Locate the `Alert` component warning about insecure API key storage.
    *   **Expected:** The security warning message is clearly visible.
*   [ ] **Interact with AI Provider Select:**
    *   Click the "AI Provider" dropdown.
    *   Select an option (e.g., OpenAI, Anthropic).
    *   **Expected:** The dropdown opens, options are selectable, and the selected value updates visually (no backend validation needed).
*   [ ] **Interact with API Key Input:**
    *   Click into the "API Key" input field.
    *   Type some characters.
    *   **Expected:** Characters are masked (like a password field).
*   [ ] **Click Save Settings Button:**
    *   Open the browser's developer console.
    *   Click the "Save Settings" button.
    *   **Expected:** The message "Save AI Settings clicked" is logged to the console.

**2. AI UI Elements in Forms (Mock):**

*   [ ] **Announcement Form - "Draft with AI" Button:**
    *   Navigate to a view where `AnnouncementForm` is rendered (e.g., Camp Dashboard).
    *   Locate the "Content" field label.
    *   **Expected:** A "Draft with AI" button with a Wand icon is visible next to the "Content" label.
    *   Open the developer console.
    *   Click the "Draft with AI" button.
    *   **Expected:** The message "Draft Announcement with AI clicked" is logged to the console.
*   [ ] **List Form - "Suggest Items" Button:**
    *   Navigate to a view where `ListForm` is rendered (e.g., adding a new list).
    *   Locate the "Create New List" title in the Card header.
    *   **Expected:** A "Suggest Items" button with a Lightbulb icon is visible next to the title.
    *   Open the developer console.
    *   Click the "Suggest Items" button.
    *   **Expected:** The message "Suggest List Items clicked" is logged to the console.
*   [ ] **Add Item Form - "Suggest Item" Button:**
    *   Navigate to a view where `AddItemForm` is rendered (e.g., viewing a specific list).
    *   Locate the input field for adding a new item.
    *   **Expected:** A small icon button (Lightbulb) is visible between the input field and the "Add Item" button.
    *   Open the developer console.
    *   Click the "Suggest Item" icon button.
    *   **Expected:** The message "Suggest List Item clicked" is logged to the console.

---

## Test Results:

*   **Overall Status:** (Pass/Fail)
*   **Notes/Bugs Found:** [List any issues encountered] 