# Technical Debt Log

**Date Added:** 2025-04-11

*   **Issue:** Persistent `pnpm`/`corepack` signature verification errors.
    *   **Context:** Encountered during `pnpm create next-app` and `pnpm add` in Sprint 1. Switched to `npm` as a workaround.
    *   **Action:** RESOLVED in Sprint 4 prep by reinstalling corepack with `npm install -g corepack@latest --force` and pnpm with `npm install -g pnpm --force`. The issue was due to signature verification errors with outdated corepack version.

*   **Issue:** Deprecated Husky pre-commit script header.
    *   **Context:** Warning message during `git commit` in Sprint 1 after setting up Husky manually.
    *   **Action:** RESOLVED in Sprint 3 prep by removing deprecated lines from `.husky/pre-commit`.

*   **Issue:** Simplified date validation in Travel Itinerary form.
    *   **Context:** Changed Zod schema for `arrival_date` and `departure_date` from preprocessed `z.date()` to `z.string()` during Sprint 3 to avoid RHF/Zod type conflicts with `<input type="date">`.
    *   **Action:** RESOLVED in Sprint 4 prep by implementing proper date handling with react-datepicker and Zod preprocessing. Added proper `z.date()` validation in the schema, and used react-datepicker with Controller component from React Hook Form to handle the date inputs correctly.

*   **Issue:** Sidebar active link styling requires Client Component.
    *   **Context:** Sprint 5 UI Polish. To dynamically style the active navigation link based on the current URL (`usePathname`), the `Sidebar` component would need the `'use client'` directive.
    *   **Action:** Keep as Server Component for now to minimize client-side JS. Accept that active link styling is not implemented. Re-evaluate if this becomes a significant UX issue, or implement using a different pattern if possible (e.g., passing active state down from layout if layout becomes client-side for other reasons).

*   **Issue:** Type errors with `react-datepicker` and `Controller`.
    *   **Context:** Encountered during Sprint 5 UI Polish in `TravelItineraryForm.tsx`. Linter flags issues like JSX component type incompatibility and implicit 'any' types related to DatePicker within RHF's Controller.
    *   **Action:** RESOLVED in Sprint 13 Prep. Removed the `as unknown as Resolver` type assertion in `TravelItineraryForm.tsx`. Explicitly typed the `arrival_date` and `departure_date` fields in the `TravelItineraryFormData` type definition (`profileSchema.ts`) using `Omit` and intersection (`&`) to match the expected `Date | null | undefined` type after Zod preprocessing, resolving the type mismatch between `zodResolver` and `useForm`.

**Date Added:** [Current Date]

*   **Issue:** ~~Next.js build fails with type error `Property 'get' does not exist on type 'Promise<ReadonlyRequestCookies>'` in `src/lib/supabase/server.ts`.~~ Difficulty using standard Supabase server helper pattern.
    *   **Context:** Occurred during Sprint 1 build checks. Attempting to use a helper function (`src/lib/supabase/server.ts`) to create the Supabase server client resulted in type errors or build failures related to the `cookies()` function context.
    *   **Workaround:** Deleted the `server.ts` helper. Server client instantiation logic was moved directly into the Server Component (`test-supabase/page.tsx`) where it was needed. ESLint errors for unused vars in the cookie handling logic were silenced.
    *   **Action:** Revisit creating reusable server-side Supabase client helpers later. Investigate best practices for sharing this logic across Server Components, Route Handlers, and Server Actions without running into context issues in Next.js App Router. 