# Feature Backlog

**Date Added:** 2025-04-13

*   **Feature:** Inline list item content editing.
    *   **Context:** Deferred from Sprint 9 (List Item Interaction). Would allow users to edit the text content of a list item directly in the list view (e.g., on click/double-click) without navigating to a separate edit screen/modal.
    *   **Requires:** UI implementation (e.g., conditionally rendering an input), state management for editing state, and potentially updating the `updateListItem` action in `useListStore`.

*   **Feature:** Roster Management Actions Implementation.
    *   **Context:** Mock UI elements (buttons/placeholders) for "Invite New Member", "Edit Role", and "Remove Member" were added in Sprint 10. This backlog item tracks the need to implement the actual functionality.
    *   **Requires:** 
        *   Invite Member: Likely involves creating a form/modal, handling email input, and eventually calling a backend API.
        *   Edit Role: Requires UI (modal/dropdown) to select a new role and eventually calling a backend API to update membership.
        *   Remove Member: Needs confirmation step (modal) and eventually calling a backend API to delete membership.
