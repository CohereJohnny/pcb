# Sprint 2 Tasks: Core UI Layout & Profile Structure

**Version:** 1.0
**Date:** 2025-04-11

**Goal:** Implement main layout components and the basic Profile page structure.

---

## Tasks Checklist

**1. Data Types & Mock Context:**
*   [x] Define basic data types in `src/types/dataModel.ts`: `User`, `Profile`, `TravelItinerary`, `AccommodationDetails` interfaces based on `specs/datamodel.md`.
*   [x] Create basic React Context files in `src/contexts/`: `UserContext.tsx`, `CampContext.tsx`.
*   [x] Implement simple providers in the context files to hold mock user data (e.g., ID, name, role='MEMBER') and mock camp data (e.g., ID='mock-camp-id', name='Mock Camp').
*   [x] Wrap the root layout (`src/app/layout.tsx` or a new layout) with these context providers.

**2. Core Layout Components:**
*   [x] Create layout component files in `src/components/layout/`: `Header.tsx`, `Sidebar.tsx` (or `MainNav.tsx`), `Footer.tsx`.
*   [x] Implement basic structure for `Header.tsx` (e.g., using a `div`, include placeholder for logo/title and user menu).
*   [x] Implement basic structure for `Sidebar.tsx` (e.g., using `aside`, include placeholders for navigation links - Dashboard, Profile, Roster, Announcements, Lists).
*   [x] Implement basic structure for `Footer.tsx` (e.g., using `footer`, include copyright or basic text).
*   [x] Add basic styling using Tailwind classes according to `design_spec.md` principles (colors, spacing).
*   [x] Add necessary Shadcn UI components (`Button`, `Avatar` for user menu placeholder, etc.) using `npx shadcn@latest add [component]...`.

**3. Authenticated Camp Layout:**
*   [x] Create the route group directory `src/app/(camp)/`.
*   [x] Create the layout file `src/app/(camp)/layout.tsx`.
*   [x] Implement the layout structure in `src/app/(camp)/layout.tsx`, integrating the `Header`, `Sidebar`, and `Footer` components.
*   [x] Ensure the layout includes a main content area for child pages (`{children}`).

**4. Profile Page Structure & Components:**
*   [x] Create the dynamic camp route directory `src/app/(camp)/[camp_id]/`.
*   [x] Create the profile page directory and file `src/app/(camp)/[camp_id]/profile/page.tsx`.
*   [x] Create profile feature component files in `src/components/features/profile/`: `ProfileForm.tsx`, `TravelItineraryForm.tsx`, `AccommodationForm.tsx`.
*   [x] Implement the UI structure for `ProfileForm.tsx` using Shadcn `Card`, `CardHeader`, `CardContent`, `Label`, `Input`. Include fields for Name, Playa Name, Contact Info.
*   [x] Implement the UI structure for `TravelItineraryForm.tsx` using Shadcn components. Include fields for Arrival/Departure Date/Time, Mode of Transport, Origin, Vehicle Pass Status, Ride Status, Notes.
*   [x] Implement the UI structure for `AccommodationForm.tsx` using Shadcn components. Include fields for Type, Size, Power Needs, Sharing Info.
*   [x] Add necessary Shadcn UI components (`Input`, `Label`, `Card`, `Button`, `Separator`, `Select`, `Checkbox`, `Textarea` etc.) using `npx shadcn@latest add [component]...`.
*   [x] Apply basic styling based on `design_spec.md`.
*   [x] Compose the `ProfilePage` (`src/app/(camp)/[camp_id]/profile/page.tsx`) to display the three form components, likely within layout containers (e.g., main content area, maybe using CSS Grid or Flexbox).

**5. Initial Data Population (Mock):**
*   [x] Within the Profile form components (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`), use `useState` or consume the mock `UserContext` to populate the input fields with initial placeholder/mock data.
*   [x] Ensure the mock data is displayed correctly in the form fields when the Profile page loads.

---

**Completion Check:** At the end of this sprint, the basic application layout (header, sidebar, footer) should be implemented. The Profile page should render with three distinct sections/forms containing input fields populated by mock data. Basic navigation placeholders should exist. The application structure should align with the multi-camp setup (`(camp)/[camp_id]/...`), although only mock data is used.
