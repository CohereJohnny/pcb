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

*   **Issue:** Linter error "File .../src/lib/validators/lists.ts is not a module." and potentially incorrect file location.
    *   **Context:** Observed during Sprint 8 ListForm implementation.
    *   **Root Cause:** The `validators` directory and its contents (`lists.ts`) were incorrectly created/moved to `/src/lib/validators` at the project root instead of `/pcb-app/src/lib/validators`.
    *   **Action:** Verified the correct directory (`pcb-app/src/lib/validators`) already existed. Removed the incorrect directory structure (`/src/lib/validators`) from the project root using `rm -rf src/lib`.
    *   **Status:** RESOLVED. Files are now expected to be in the correct location (`pcb-app/src/lib/validators`), which should fix path resolution issues.

*   **Issue:** React warning: "The result of getServerSnapshot should be cached to avoid an infinite loop" originating from `ListsOverviewPage`.
    *   **Context:** Error appeared in browser console after implementing Sprint 8 list features.
    *   **Root Cause:** The Zustand selector `(state) => state.lists.filter(...)` creates a new array reference on every render, triggering the warning.
    *   **Action (Attempt 1 - Failed):** Used `React.useCallback` to memoize the selector. Error persisted.
    *   **Action (Attempt 2):** Refactored to select the entire `state.lists` array from Zustand and then perform the filtering within the component using `React.useMemo` based on the `allLists` array and `campId`.
    *   **Status:** RESOLVED. User confirmed the `useMemo` approach resolved the warning.

*   **Issue:** Build Error: "Export listSchema doesn't exist in target module" in `ListForm.tsx`.
    *   **Context:** Appeared after fixing the misplaced validators directory.
    *   **Root Cause:** The file `pcb-app/src/lib/validators/lists.ts` was empty, likely due to file move/creation issues during the previous bug fix.
    *   **Action:** Restored the Zod schema definition (`listSchema`, `ListFormData`) into `pcb-app/src/lib/validators/lists.ts`.
    *   **Status:** RESOLVED. User confirmed build error is gone.

*   **Issue:** React warning: "The result of getServerSnapshot should be cached to avoid an infinite loop" originating from `AnnouncementsListPage`.
    *   **Context:** Similar warning as seen previously on `ListsOverviewPage`.
    *   **Root Cause:** The Zustand selector `(state) => state.announcements.filter(...)` creates a new array reference on every render.
    *   **Action:** Applied the `useMemo` pattern: selected the full `state.announcements` array from the store and performed filtering within the component using `React.useMemo`.
    *   **Status:** RESOLVED. User confirmed the `useMemo` approach resolved the warning.

*   **Issue:** React warning: "The result of getServerSnapshot should be cached to avoid an infinite loop" originating from `AssignedTasksWidget`.
    *   **Context:** Appeared when viewing the Dashboard page.
    *   **Root Cause:** Uncertain. Filtering/deriving state within the store selector or selecting an object containing multiple state slices seems to trigger the warning in this environment, even with memoization attempts.
    *   **Action (Attempt 1 - Failed):** Used `React.useCallback` to memoize the selector.
    *   **Action (Attempt 2 - Failed):** Refactored to select full state and filter/derive using `React.useMemo`.
    *   **Action (Attempt 3):** Refactored to select individual raw state arrays (`state.lists`, `state.listItems`) in separate `useListStore` calls, keeping `useMemo` for derived data.
    *   **Status:** RESOLVED. User confirmed selecting individual state pieces resolved the warning.

## Sprint 12 (During Polish/Refinement)

*   **Issue:** Next.js console error `A param property was accessed directly...` in `ProfilePage` (`/[camp_id]/profile/page.tsx`).
*   **Cause:** The page was marked `'use client;'` but was still trying to access `params` via props instead of using the correct client-side hooks (`useParams`, `useSearchParams`).
*   **Fix:** Refactored `ProfilePage` to remove `params` and `searchParams` from props and use the `useParams` and `useSearchParams` hooks from `next/navigation` instead.
*   **File Modified:** `pcb-app/src/app/(camp)/[camp_id]/profile/page.tsx`

*   **Issue:** React error `MenuItem must be used within Menu` originating from `RosterTable.tsx` actions column.
*   **Cause:** Previous refactoring/cleanup incorrectly removed the necessary parent `DropdownMenu` structure, leaving `DropdownMenuItem` components rendered directly in the table cell.
*   **Fix:** Re-wrapped the action items (`Edit Role`, `Remove Member`) within a complete `<DropdownMenu><DropdownMenuTrigger><DropdownMenuContent>...</DropdownMenuContent></DropdownMenu>` structure using a `MoreHorizontal` icon button as the trigger. Removed now-unused handler functions (`handleEditRole`, `handleRemoveMember`).
*   **File Modified:** `pcb-app/src/components/features/roster/RosterTable.tsx`

---
