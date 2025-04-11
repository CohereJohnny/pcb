# Bug Swatting Log

**Date:** 2025-04-12

**Issue:** Build errors: `Module not found: Can't resolve 'tailwindcss-animate'` and `Module not found: Can't resolve 'react-datepicker'`.

*   **Context:** Errors appeared during Sprint 5 after updating `tailwind.config.js` (which requires `tailwindcss-animate`) and attempting to load pages using `TravelItineraryForm.tsx` (which requires `react-datepicker`).
*   **Root Cause:**
    1.  The `tailwindcss-animate` dependency was initially installed in the project root (`/`) instead of the application directory (`/pcb-app`) due to an incorrect `npm install` command execution path.
    2.  The `react-datepicker` dependency was missing entirely from `pcb-app/package.json`.
*   **Resolution:**
    1.  Cleaned up the project root by removing the incorrectly placed `node_modules`, `package.json`, and `package-lock.json`.
    2.  Installed `tailwindcss-animate` as a dev dependency in the correct `/pcb-app` directory using `pnpm install -D tailwindcss-animate`.
    3.  Installed `react-datepicker` and `@types/react-datepicker` as dependencies in the correct `/pcb-app` directory using `pnpm add react-datepicker @types/react-datepicker`.
    4.  Restarted the development server (`pnpm run dev`).

*   **Issue:** Multiple `ENOENT: no such file or directory` errors referencing files within `pcb-app/.next` directory in the console. Website not loading correctly.
    *   **Context:** Observed after implementing Sprint 6 features. Errors indicate potential build cache corruption.
    *   **Action:** Removed the `pcb-app/.next` directory (`rm -rf .next`) and instructed user to restart the development server (`pnpm run dev`). This should force Next.js to regenerate the build cache cleanly.
    *   **Status:** Failed. User still reported 500 Internal Server Error after restarting.

*   **Issue:** 500 Internal Server Error when accessing `/mock-camp-123/roster`.
    *   **Context:** Occurred after failed attempt to fix `ENOENT` errors by clearing `.next` cache.
    *   **Root Cause:** Incorrect import of `fontFamily` from `tailwindcss/defaultTheme` in `pcb-app/tailwind.config.js`. Tailwind v4 requires importing the `defaultTheme` object itself.
    *   **Action:** Corrected the import to `import defaultTheme from "tailwindcss/defaultTheme";` and updated usage to `...defaultTheme.fontFamily.sans` in `pcb-app/tailwind.config.js`. Instructed user to restart dev server.
    *   **Status:** RESOLVED. User confirmed fix resolved the 500 error after server restart.

---
