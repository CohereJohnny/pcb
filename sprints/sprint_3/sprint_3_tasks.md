# Sprint 3 Tasks

**Goal:** Make the Profile page fully interactive using local state and form validation.

## Setup & Dependencies
- [x] Install `react-hook-form` using `pnpm add react-hook-form`.
- [x] Install `zod` using `pnpm add zod`.
- [x] Install `@hookform/resolvers` using `pnpm add @hookform/resolvers`.

## Schema Definition (`src/lib/validators/profileSchema.ts`)
- [x] Create `profileSchema.ts` file.
- [x] Define Zod schema (`profileFormSchema`) for the `ProfileForm` data (e.g., `playa_name`, `contact_info`). (Updated to match existing form fields like `name`, `emergency_contact`).
- [x] Define Zod schema (`travelItinerarySchema`) for the `TravelItineraryForm` data (e.g., `arrival_date`, `departure_date`, `transportation_mode`, `notes`). (Updated to match existing form fields and handle `DatePicker`).
- [x] Define Zod schema (`accommodationSchema`) for the `AccommodationForm` data (e.g., `type`, `location`, `sharing_with`, `notes`). (Updated to match existing form fields and logic).
- [x] Export inferred TypeScript types from schemas (e.g., `ProfileFormData`, `TravelItineraryData`, `AccommodationData`).

## Form Integration (`src/components/features/profile/`)
- [x] **ProfileForm:** (Integration was already present; schema updated to match)
    - [x] Import `useForm`, `zodResolver`, `profileFormSchema`, `ProfileFormData`.
    - [x] Initialize `useForm` with `zodResolver` and default values (or props).
    - [x] Connect form fields (`Input`, etc.) to `react-hook-form` using `register` or `Controller`.
    - [x] Implement `onSubmit` handler function (placeholder for now, e.g., `console.log`).
    - [x] Wrap form content with `react-hook-form`'s `Form` component if using Shadcn's Form primitives, or standard `<form>` tag.
    - [x] Add validation error display for fields.
- [x] **TravelItineraryForm:** (Integration was already present; schema updated to match)
    - [x] Import `useForm`, `zodResolver`, `travelItinerarySchema`, `TravelItineraryData`.
    - [x] Initialize `useForm` with `zodResolver` and default values (or props).
    - [x] Connect form fields to `react-hook-form`.
    - [x] Implement `onSubmit` handler function (placeholder).
    - [x] Wrap form content.
    - [x] Add validation error display.
- [x] **AccommodationForm:** (Integration was already present; schema updated to match)
    - [x] Import `useForm`, `zodResolver`, `accommodationSchema`, `AccommodationData`.
    - [x] Initialize `useForm` with `zodResolver` and default values (or props).
    - [x] Connect form fields to `react-hook-form`.
    - [x] Implement `onSubmit` handler function (placeholder).
    - [x] Wrap form content.
    - [x] Add validation error display.

## Local State Management (`app/(camp)/[camp_id]/profile/page.tsx`)
- [ ] Keep using the existing API route (`/api/profile`) for initial data fetching.
- [ ] In the API route (`/api/profile/route.ts`), implement `POST`/`PUT`/`PATCH` handler(s) to receive form data.
- [ ] Update the API route handler(s) to simulate data persistence (e.g., update a temporary variable in memory, or just log received data) and return success/error response.
- [ ] Update `onSubmit` handlers in the forms (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`) to `fetch` data to the API endpoint(s).
- [ ] Implement client-side state update/feedback based on API response (e.g., show success toast, update UI optimistically or refetch).

## UI Refinement & Navigation
- [ ] Review and refine the layout and styling of the Profile page and its forms (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`) for clarity and usability.
- [ ] Ensure the navigation links in the `Sidebar` or `Header` correctly link to the Profile page (`/[camp_id]/profile`).
- [ ] Test navigation flow to and from the Profile page.
