# Sprint 3 Tasks: Profile Feature Completion & Form Handling\n\n**Version:** 1.0\n**Date:** 2025-04-11\n\n**Goal:** Make the Profile page fully interactive using local state and form validation.\n\n---\n\n## Tasks Checklist\n\n**1. Install Dependencies:**\n*   [x] Install `react-hook-form`: `npm install react-hook-form`.\n*   [x] Install `zod`: `npm install zod`.\n*   [x] Install `@hookform/resolvers`: `npm install @hookform/resolvers` (needed for Zod integration).\n\n**2. Define Validation Schemas:**\n*   [x] Create directory `src/lib/validators/`.\n*   [x] Create file `src/lib/validators/profileSchema.ts`.\n*   [x] Define Zod schema `profileFormSchema` covering fields in `ProfileForm` (name, playa\_name, contact\_info, emergency\_contact). Use appropriate Zod types (e.g., `z.string().min(1)` for required fields, `z.string().optional().nullable()`).\n*   [x] Define Zod schema `travelItinerarySchema` covering fields in `TravelItineraryForm` (arrival\_date, arrival\_time, etc.). Handle optional/nullable fields and specific types (e.g., dates, enums for selects).\n*   [x] Define Zod schema `accommodationSchema` covering fields in `AccommodationForm` (type, size\_details, power\_needs, power\_amps, sharing\_with). Handle optional/nullable fields, booleans, and potentially refine `power_amps` based on `power_needs` using `refine` or `superRefine`.\n*   [x] Export schemas from the file.\n\n**3. Integrate React Hook Form & Zod:**
*   [x] **ProfileForm.tsx:**
    *   [x] Import `useForm` from `react-hook-form` and `zodResolver` from `@hookform/resolvers/zod`.
    *   [x] Import the `profileFormSchema`.
    *   [x] Instantiate `useForm` with the schema resolver and set default values (can use mock data from Sprint 2).
    *   [x] Refactor component: Remove existing `useState` for form data and `handleChange`.
    *   [x] Wrap the form content with `<form>` tag using RHF's `handleSubmit`.
    *   [x] Register each input field using `register('fieldName')`.
    *   [x] Update the `onSubmit` function to accept validated data from RHF.
*   [x] **TravelItineraryForm.tsx:**
    *   [x] Import necessary RHF/Zod modules and `travelItinerarySchema`.
    *   [x] Instantiate `useForm` with resolver and default values.
    *   [x] Refactor component: Remove `useState` and `handleChange`/`handleSelectChange`.
    *   [x] Wrap with `<form>` using RHF's `handleSubmit`.
    *   [x] Register `Input` and `Textarea` fields using `register`.
    *   [x] Integrate `Select` components using RHF's `<Controller>` component.
    *   [x] Update the `onSubmit` function.
*   [x] **AccommodationForm.tsx:**
    *   [x] Import necessary RHF/Zod modules and `accommodationSchema`.
    *   [x] Instantiate `useForm` with resolver and default values.
    *   [x] Refactor component: Remove `useState` and `handleChange`/`handleCheckboxChange`.
    *   [x] Wrap with `<form>` using RHF's `handleSubmit`.
    *   [x] Register `Input` fields.
    *   [x] Integrate `Checkbox` using RHF's `<Controller>` component.
    *   [x] Update the `onSubmit` function.

**4. Implement Local State Update Logic (Mock Save):**
*   [x] Decide on local state strategy (e.g., update a shared context, or just log for now).
*   [x] In the `onSubmit` handler of each form component (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`), after `console.log`, add a placeholder comment indicating where the state update would occur (e.g., `// TODO: Update mock context or local state here`). Keep it simple for now.

**5. Add Validation Feedback:**
*   [x] In each form component:
    *   [x] Access the `formState: { errors }` object from `useForm`.
    *   [x] Below each input/select/checkbox group, conditionally render an error message (e.g., `<p className="text-sm font-medium text-destructive">{errors.fieldName?.message}</p>`) if `errors.fieldName` exists.
    *   [x] Use Shadcn `FormMessage` component if preferred later, but simple `<p>` tag is fine for now.
    *   [x] Test validation by submitting empty required fields or invalid data.

**6. Refine UI & Navigation:**
*   [x] Review the Profile page (`src/app/(camp)/[camp_id]/profile/page.tsx`) and its components for layout consistency and adherence to `design_spec.md` (spacing, typography, etc.). Make minor adjustments as needed.
*   [x] Verify the Sidebar (`src/components/layout/Sidebar.tsx`) includes a working `Link` to the Profile page (`/{campId}/profile`).
*   [x] Test navigation to and from the Profile page.

---

**Completion Check:** At the end of this sprint, the Profile page forms should be fully interactive, using `react-hook-form` for state management and `zod` for validation. Users should see validation errors upon submitting invalid data. Submitting valid data should log the data to the console. Basic navigation to the Profile page should work.