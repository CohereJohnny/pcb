# Sprint 3 Test Plan

**Feature:** Profile Page Interaction (Forms, Validation, Submission)

**Goal:** Verify that users can view, edit, and save their profile information across the three sections (Basic Info, Travel, Accommodation) with appropriate validation and feedback.

## Prerequisites

*   Application running locally (`pnpm run dev` in `pcb-app`).
*   User logged in (or mock authentication setup allowing access to `/api/profile`).
*   Supabase backend running and accessible (as the API route interacts with it).

## Test Cases

**Test Case 1: Load Profile Page**
1.  Navigate to the Profile page (e.g., `/mock-camp-123/profile`).
2.  **Expected Result:** The page loads without errors. The three forms (Basic Information, Travel Itinerary, Accommodation) are displayed, populated with any existing data fetched from the backend.

**Test Case 2: Basic Information Form - Valid Input**
1.  On the Profile page, locate the "Basic Information" card.
2.  Enter/modify valid data in the "Legal Name" (required) and other optional fields (Playa Name, Contact Info, Emergency Contact).
3.  Click the "Save Profile" button.
4.  **Expected Result:** A success toast notification appears ("Profile updated successfully!"). The form fields remain populated with the saved data (or the page refreshes showing the new data if implemented that way). Check browser console for any errors.

**Test Case 3: Basic Information Form - Invalid Input (Missing Name)**
1.  Clear the "Legal Name" field.
2.  Click the "Save Profile" button.
3.  **Expected Result:** A validation error message ("Legal name is required") appears below the "Legal Name" field. The form does not submit. No toast message appears.

**Test Case 4: Travel Itinerary Form - Valid Input**
1.  On the Profile page, locate the "Travel Itinerary" card.
2.  Enter/modify valid data (select dates using the date picker, fill optional fields).
3.  Click the "Save Travel Info" button (or similar text).
4.  **Expected Result:** A success toast notification appears ("Travel itinerary updated successfully!"). Form fields remain populated. Check browser console for errors.

**Test Case 5: Accommodation Form - Valid Input**
1.  On the Profile page, locate the "Accommodation" card.
2.  Enter/modify valid data (e.g., Type, Size Details). Check the "Need Camp Power?" box and enter a valid number in "Power Amps".
3.  Click the "Save Accommodation Info" button.
4.  **Expected Result:** A success toast notification appears ("Accommodation info updated successfully!"). Form fields remain populated. Check browser console for errors.

**Test Case 6: Accommodation Form - Invalid Input (Amps without Power Needs)**
1.  Ensure the "Need Camp Power?" checkbox is **unchecked**.
2.  Enter a number (e.g., `30`) in the "Power Amps" field.
3.  Click the "Save Accommodation Info" button.
4.  **Expected Result:** A validation error message ("Amps should only be specified if power is needed.") appears below the "Power Amps" field. The form does not submit. No toast message appears.

**Test Case 7: Form Persistence**
1.  Modify data in one form (e.g., Basic Information) and save successfully.
2.  Refresh the browser page.
3.  **Expected Result:** The previously saved data is correctly loaded and displayed in the form upon page reload, confirming persistence via the API.

**Test Case 8: Navigation**
1.  Navigate away from the Profile page using a Sidebar link.
2.  Navigate back to the Profile page using the Sidebar link.
3.  **Expected Result:** Navigation works correctly, and the Profile page loads as expected each time. 