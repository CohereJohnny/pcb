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
    *   **Action:** Investigate the correct way to integrate `react-datepicker` with `react-hook-form` and Zod using `Controller` to ensure proper type safety and eliminate the `as any` cast on the resolver. This might involve updating types, component props, or how the `onChange` handler is used. 