# Sprint 12 Updates

- **Sprint Started:** Initialized Sprint 12 directory and files.
- **Task Planning:** Populated `sprint_12_tasks.md` based on `sprintplan.md` (Focus: Polish, Testing, Refinement).
- **Loading/Feedback States:**
    - Reviewed forms (`AnnouncementForm`, `ProfileForm`, `TravelItineraryForm`, `AccommodationForm`, `ListForm`, `AddItemForm`, `AiConfigForm`) for submit button states.
    - Most forms already correctly used `formState.isSubmitting` to disable buttons and show loading text (e.g., 'Saving...', 'Creating...').
    - Updated `AddItemForm` button text to show 'Adding...' when submitting.
    - Updated `AiConfigForm` button text to show 'Saving...' when submitting for consistency.

- **Code Cleanup:**
    - Removed placeholder/debugging `console.log` statements from most forms and pages (`AccommodationForm`, `ProfileForm`, `RosterTable`, `AddItemForm`, `ListForm`, `TravelItineraryForm`, `AnnouncementForm`, `AiConfigForm`, `roster/(view)/page.tsx`).
    - Handled resulting unused variable linter errors, except in `profile/page.tsx` where logs were intentionally kept for now.
    - Added missing `dropdown-menu` Shadcn component needed by `RosterTable`.

- **Component Refactoring:**
    - Extracted `processRosterData` helper function from `RosterViewPage` into `lib/utils.ts` to improve separation of concerns.

- **Accessibility Review:**
    - Keyboard navigation confirmed functional.
    - Addressed focus visibility issues: Initial attempts using global styles/variable overrides failed due to component style specificity.
    - Solution: Added a specific global rule using `!important` on `box-shadow` for interactive elements to ensure a clear 4px primary-colored focus indicator.
    - Updated `design_spec.md` to note the need for this potential override.
