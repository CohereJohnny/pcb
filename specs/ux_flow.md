# User Experience Flow: Theme Camp Hub (MVP)

**Version:** 1.0
**Date:** 2025-04-10

## Introduction

This document describes the intended user experience (UX) and key interaction flows for the Minimum Viable Product (MVP) of the Theme Camp Hub. The focus is on facilitating communication, logistics tracking, and information access for members of a single theme camp during the event planning cycle. The UX prioritizes clarity, efficiency, and ease of use, acknowledging the often hectic nature of Burn preparation.

---

## Overall UX Principles

* **Clarity & Simplicity:** The interface will be clean, uncluttered, and use clear, straightforward language. Navigation should be intuitive, requiring minimal guesswork.
* **Information Accessibility:** Critical information, such as new announcements and assigned tasks, will be surfaced prominently, primarily via the dashboard. Finding specific information (roster details, list items) should be efficient.
* **Role-Based Experience:** The UI will subtly adapt based on the logged-in user's role (Organizer, Functional Lead, Member), showing relevant actions and controls without overwhelming users with options they can't use.
* **Mobile-First Consideration:** Design and layout will prioritize responsiveness, ensuring a seamless experience on both desktop and mobile devices, as users will access the app across different contexts.
* **Consistency:** Maintain consistent terminology, layout patterns, and component behavior (leveraging Shadcn/ui) across the application to promote learnability.
* **Action Feedback:** Provide immediate and clear visual feedback for user actions like saving profile changes, completing tasks, sending invites, or posting announcements. Use loading states appropriately for asynchronous operations (once backend is integrated).

---

## Key User Flows (MVP)

*(Note: Login/Registration steps are simplified here, as full auth implementation is deferred to later MVP sprints. Assume user is logged in for most flows initially, perhaps via a basic user selection or mock login).*

### 1. Onboarding & Profile Completion (New Member - Sam)

1.  **Receive Invite:** Sam receives an email invitation (sent by Alex).
2.  **Access App:** Sam clicks the link, potentially performs a basic registration step (MVP might start with pre-configured users or simple signup).
3.  **Land on Dashboard/Profile:** Sam might land on a welcome screen or the Dashboard, potentially with a prompt to complete their profile.
4.  **Navigate to Profile:** Sam accesses their User Profile page (e.g., via a user menu).
5.  **Edit Profile Sections:**
    * Sam fills in basic info (Playa Name, Contact).
    * Sam navigates to the "Travel Itinerary" section and inputs their planned arrival/departure, mode of transport, etc. Saves changes.
    * Sam navigates to the "Accommodation Details" section and selects their accommodation type (Tent), size (Medium), and power needs (No). Saves changes.
6.  **Confirmation:** Sam sees confirmation that their profile is updated. They can now navigate to other sections like the Dashboard or Roster.

### 2. Daily Check-in / Staying Informed (Member - Sam)

1.  **Access App:** Sam opens the Theme Camp Hub web application.
2.  **View Dashboard:** Sam lands on the Dashboard.
3.  **Scan Announcements:** Sam quickly scans the "Recent Announcements" widget for new or unread titles.
4.  **Read Announcement:** Sam clicks on an interesting or unread announcement title.
5.  **View Announcement Detail:** Sam is taken to the full announcement view to read the content.
6.  **Return/Navigate:** Sam navigates back to the Dashboard or uses the main navigation to check other sections (e.g., "My Tasks").

### 3. Managing Assigned Tasks (Member - Sam)

1.  **Access Tasks:** Sam navigates to a "My Tasks" view (potentially accessible from the Dashboard or main navigation).
2.  **View Assigned Tasks:** Sam sees a list of tasks assigned specifically to them, possibly showing title, list origin (e.g., "Build Week Tasks"), due date (if any), and status.
3.  **Update Task Status:** Sam finds the task they just completed ("Decorate Saloon Sign"). They click on the task or a status indicator.
4.  **Change Status:** Sam changes the status from "To Do" or "In Progress" to "Done".
5.  **Confirmation:** The UI updates instantly (local state first) showing the task as completed (e.g., greyed out, checkmark). The relevant Lead (Jordan) will see this updated status when they view the task list.

### 4. Creating & Assigning Tasks (Lead - Jordan)

1.  **Navigate to Lists:** Jordan navigates to the "Lists" section of the application.
2.  **Select Task List:** Jordan selects the "Build Week Tasks" list.
3.  **Add New Task:** Jordan clicks an "Add Task" button.
4.  **Enter Task Details:** Jordan types in the task description (e.g., "Mount Solar Panels on Roof Rack").
5.  **Assign Task:** Jordan uses an assignee picker/dropdown (populated from the camp Roster) and selects "Sam".
6.  **Set Due Date (Optional):** Jordan selects a due date from a calendar picker.
7.  **Save Task:** Jordan saves the new task. It appears in the "Build Week Tasks" list and will appear in Sam's "My Tasks" view.

### 5. Managing a List (Lead - Jordan / Organizer - Alex)

1.  **Navigate to Lists:** Jordan (or Alex) navigates to the "Lists" section.
2.  **Select List:** Jordan selects the "Kitchen Supplies" Shopping List.
3.  **Add Item:** Clicks "Add Item", types "Heavy Duty Aluminum Foil", saves.
4.  **Edit Item:** Finds the item "Paper Towels", clicks edit, changes quantity or adds a note "Get the extra durable kind", saves.
5.  **Mark Item Complete/Purchased:** Finds item "Large Cooler", clicks a checkbox or status indicator to mark it as "Purchased". The item visually changes state (e.g., strikethrough, checkmark).
6.  **Delete Item:** Finds an incorrect item "Disco Ball Repair Kit", clicks delete, confirms. The item is removed.

### 6. Inviting & Managing Members (Organizer - Alex)

1.  **Navigate to Roster:** Alex navigates to the "Roster" section.
2.  **Invite Member:** Alex clicks an "Invite Member" button.
3.  **Enter Email:** Alex enters the email address of the new person. Clicks "Send Invite". Confirmation is shown. (Email sending happens via backend later). The new person appears on the roster with status "Invited".
4.  **View Roster:** Alex scans the roster, sees member statuses.
5.  **Change Role:** Alex finds Jordan's entry, clicks an "Edit" or "Manage Role" action. Alex changes Jordan's role from "Member" to "Functional Lead" (perhaps selecting "Build Lead" if subtypes exist). Saves the change. Jordan now has Lead permissions.

### 7. Posting an Announcement (Organizer - Alex)

1.  **Navigate to Announcements:** Alex goes to the "Announcements" section or clicks a "Create Announcement" shortcut (perhaps on the Dashboard).
2.  **Create New:** Clicks "New Announcement".
3.  **Enter Content:** Alex enters a "Title" and uses a rich text editor to write the announcement body.
4.  **Add Tag (Optional):** Alex selects a relevant tag like "Urgent" or "Logistics".
5.  **Publish:** Alex clicks "Publish".
6.  **Confirmation:** The announcement appears at the top of the Announcements list/feed and will be visible on member dashboards.

### 8. Reviewing Accommodation Data (Organizer - Alex)

1.  **Navigate to Roster/Report:** Alex navigates to the Roster page or potentially a dedicated "Reports" or "Accommodation Overview" page/dashboard widget.
2.  **View Summary:** Alex views aggregated data like "Total RVs: 5 (Power Needed: 4)", "Total Tents: 30 (Power Needed: 2)", "Total Yurts: 3 (Power Needed: 3)".
3.  **Filter/Sort Roster (Optional):** Alex might use filters on the Roster page to show only members with RVs or those needing power.
4.  **Use Data:** Alex uses this summarized information to manually sketch out or plan the camp layout zones and generator placement *outside* the application for the MVP.

### 9. (Optional MVP) Using an AI Feature (e.g., Announcement Draft)

1.  **Start Announcement:** Alex initiates creating a new announcement (Flow 7, steps 1-2).
2.  **Input Key Points:** Instead of writing the full body, Alex types key bullet points into a designated area (e.g., "Remind everyone MOOP sweep Sunday 10 AM. Bring gloves. Meet at center camp.")
3.  **Trigger AI Assist:** Alex clicks an "AI Draft Assist" button.
4.  **Configure AI (First time/If needed):** Alex might be prompted to select their AI Provider (e.g., Gemini) and ensure their API key is entered in settings.
5.  **View Draft:** The AI generates a draft announcement based on the key points, displayed in the rich text editor.
6.  **Edit & Publish:** Alex reviews the AI draft, makes necessary edits for tone/accuracy, adds a title/tags, and clicks "Publish".

---

## Navigation Structure (Conceptual)

A typical navigation pattern might include:

* **Sidebar (Desktop) / Bottom Nav or Burger Menu (Mobile):**
    * Dashboard
    * Announcements
    * Roster (Visible to all, management actions for Organizers)
    * Lists (View all lists, management actions depend on role/permissions)
    * My Tasks (Convenience link for members)
    * Profile / Settings (User profile, potentially AI key settings)
    * Admin/Camp Settings (Organizer only)

---

These flows provide a blueprint for the primary ways users will interact with the Theme Camp Hub MVP, focusing on achieving core logistical and communication tasks efficiently.