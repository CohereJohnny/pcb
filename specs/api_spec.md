# API Specification: Theme Camp Hub (MVP)

**Version:** 1.0
**Date:** 2025-04-10

## 1. Introduction

This document defines the Application Programming Interface (API) for the Theme Camp Hub MVP. It follows a lightweight API-led design approach, specifying the contract for frontend-backend communication.

* **Goal:** Define endpoints, request/response formats, and expected behavior for MVP features.
* **Backend Anticipation:** While implementation may initially be mocked or handled client-side with local state, this spec anticipates a future backend implementation using Supabase (Postgres DB, Auth, RLS).
* **MVP Scope:** Covers Profiles, Roster Management (invites, roles), Announcements, Lists, List Items (including Task aspects), and essential data retrieval. Excludes full authentication flows, financial features, visual layout features.
* **Deferred Concerns:** Advanced topics like rate limiting, API gateways, detailed error code strategies, pagination specifics, and complex scaling optimizations are deferred beyond the MVP specification.
* **Context:** All endpoints operating on camp-specific data assume the request is made within the context of an authenticated user session associated with a specific `camp_id`. The mechanism for establishing and passing this context (e.g., via session, JWT claims processed by middleware) will be determined during backend implementation. Paths including `{camp_id}` are used where necessary to structure the API logically for multitenancy, even if the backend derives the ID from the session.

---

## 2. General Principles

* **Base URL:** `/api/v1` (Placeholder)
* **Data Format:** `application/json` for request and response bodies.
* **Authentication:** All endpoints (unless otherwise specified) require an authenticated user session (details deferred, handled by Supabase Auth later).
* **Authorization:** Access control is based on the user's `Role` within the relevant `camp_id` context. This will primarily be enforced by Postgres RLS policies in the backend later. Conceptual permissions are noted per endpoint.
* **Error Handling (Basic):** Errors should return appropriate HTTP status codes (e.g., 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error) and a JSON body like:
    ```json
    {
      "error": {
        "message": "A human-readable error message.",
        "code": "ERROR_CODE_IDENTIFIER" // Optional specific code
      }
    }
    ```
* **Data Types:** Request/Response shapes reference the interfaces defined in `datamodel.md`. Database-managed fields (`created_at`, `updated_at`) are generally included in responses but not required in requests (unless updating). `id` fields are typically UUID strings.

---

## 3. API Endpoints (MVP)

### 3.1 Profile & User Info

* **`GET /profile`**
    * **Description:** Retrieves the complete profile (including Travel Itinerary, Accommodation Details) for the currently authenticated user.
    * **Response Body:** `Profile`
    * **Permissions:** Authenticated User.
* **`PUT /profile`**
    * **Description:** Updates the profile for the currently authenticated user. Send only the fields to be updated.
    * **Request Body:** `Partial<Profile>` (excluding `id`, `user_id`)
    * **Response Body:** Updated `Profile`
    * **Permissions:** Authenticated User (updating their own profile).

### 3.2 Memberships & Roster

* **`GET /memberships`**
    * **Description:** Retrieves a list of all camp memberships for the current user (useful for future camp switching).
    * **Response Body:** `Membership[]`
    * **Permissions:** Authenticated User.
* **`GET /camps/{camp_id}/memberships`**
    * **Description:** Retrieves the list of members (memberships) for the specified camp. Includes user details needed for roster display (e.g., user ID, profile info like playa name, maybe accommodation type summary). Requires careful implementation regarding data fetching/joining.
    * **Response Body:** Array of objects, each containing `Membership` info and relevant `User`/`Profile` subset. E.g., `Array<{ membership: Membership, user: Pick<User, 'id'>, profile: Pick<Profile, 'playa_name' | 'accommodation_details'> }>`
    * **Permissions:** Organizer, Lead (within that camp).
* **`POST /camps/{camp_id}/invites`**
    * **Description:** Invites a new user to the specified camp via email. Backend handles invite token generation and email sending later. Creates a `Membership` record with an 'INVITED' status conceptually.
    * **Request Body:** `{ "email": string }`
    * **Response Body:** `201 Created` (maybe returning the new `Membership` stub)
    * **Permissions:** Organizer (within that camp).
* **`PUT /camps/{camp_id}/memberships/{membership_id}`**
    * **Description:** Updates the role or status of a specific membership within the camp.
    * **Request Body:** `{ "role": Role }` (or potentially other status fields later)
    * **Response Body:** Updated `Membership`
    * **Permissions:** Organizer (within that camp).
* **`DELETE /camps/{camp_id}/memberships/{membership_id}`**
    * **Description:** Removes a user's membership from the specified camp.
    * **Response Body:** `204 No Content`
    * **Permissions:** Organizer (within that camp).

### 3.3 Announcements

* **`GET /camps/{camp_id}/announcements`**
    * **Description:** Retrieves a list of announcements for the specified camp, likely ordered newest first. Pagination may be added later.
    * **Response Body:** `Announcement[]`
    * **Permissions:** Member, Lead, Organizer (within that camp).
* **`POST /camps/{camp_id}/announcements`**
    * **Description:** Creates a new announcement for the specified camp. `author_user_id` is set based on the authenticated user.
    * **Request Body:** `Pick<Announcement, 'title' | 'content' | 'tags'>`
    * **Response Body:** `201 Created`, returns the new `Announcement`
    * **Permissions:** Organizer (within that camp).
* **`GET /camps/{camp_id}/announcements/{announcement_id}`**
    * **Description:** Retrieves a single announcement by its ID.
    * **Response Body:** `Announcement`
    * **Permissions:** Member, Lead, Organizer (within that camp).
* **`PUT /camps/{camp_id}/announcements/{announcement_id}`**
    * **Description:** Updates an existing announcement.
    * **Request Body:** `Partial<Pick<Announcement, 'title' | 'content' | 'tags'>>`
    * **Response Body:** Updated `Announcement`
    * **Permissions:** Organizer (within that camp, potentially only the original author).
* **`DELETE /camps/{camp_id}/announcements/{announcement_id}`**
    * **Description:** Deletes an announcement.
    * **Response Body:** `204 No Content`
    * **Permissions:** Organizer (within that camp).

### 3.4 Lists

* **`GET /camps/{camp_id}/lists`**
    * **Description:** Retrieves all lists associated with the specified camp.
    * **Response Body:** `List[]`
    * **Permissions:** Member, Lead, Organizer (within that camp).
* **`POST /camps/{camp_id}/lists`**
    * **Description:** Creates a new list within the specified camp. `created_by_user_id` is set from the authenticated user.
    * **Request Body:** `Pick<List, 'name' | 'type'>`
    * **Response Body:** `201 Created`, returns the new `List`
    * **Permissions:** Organizer, Lead (within that camp).
* **`GET /camps/{camp_id}/lists/{list_id}`**
    * **Description:** Retrieves details for a single list. Might optionally include its items via a query param (e.g., `?include=items`).
    * **Response Body:** `List` (potentially with `ListItem[]` nested)
    * **Permissions:** Member, Lead, Organizer (within that camp).
* **`PUT /camps/{camp_id}/lists/{list_id}`**
    * **Description:** Updates a list's details (e.g., name).
    * **Request Body:** `Partial<Pick<List, 'name' | 'type'>>`
    * **Response Body:** Updated `List`
    * **Permissions:** Organizer, Lead (who created or is assigned management for this list's area - logic TBD).
* **`DELETE /camps/{camp_id}/lists/{list_id}`**
    * **Description:** Deletes a list and potentially its items (TBD cascade behavior).
    * **Response Body:** `204 No Content`
    * **Permissions:** Organizer, Lead (who created or is assigned management).

### 3.5 List Items (including Tasks)

* **`GET /camps/{camp_id}/lists/{list_id}/items`**
    * **Description:** Retrieves all items for a specific list, likely ordered by `sort_order` or `created_at`.
    * **Response Body:** `ListItem[]`
    * **Permissions:** Member, Lead, Organizer (within that camp).
* **`POST /camps/{camp_id}/lists/{list_id}/items`**
    * **Description:** Creates a new item within the specified list. `camp_id` should be inherited from the list. `created_by_user_id` set from auth user.
    * **Request Body:** `Pick<ListItem, 'content' | 'assignee_user_id' | 'due_date' | 'status' | 'quantity' | 'estimated_cost' | 'purchase_link'>` (Send relevant fields based on list type).
    * **Response Body:** `201 Created`, returns the new `ListItem`
    * **Permissions:** Member, Lead, Organizer (permissions might depend on list settings later).
* **`PUT /camps/{camp_id}/items/{item_id}`**
    * **Description:** Updates an existing list item. Used for marking complete, changing status, updating content, assigning tasks, etc. Send only fields to be changed.
    * **Request Body:** `Partial<Pick<ListItem, 'content' | 'is_complete' | 'assignee_user_id' | 'due_date' | 'status' | 'quantity' | 'estimated_cost' | 'purchase_link'>>`
    * **Response Body:** Updated `ListItem`
    * **Permissions:** Varies. Assignee can update status. Creator/Lead/Organizer can edit content/details.
* **`DELETE /camps/{camp_id}/items/{item_id}`**
    * **Description:** Deletes a list item.
    * **Response Body:** `204 No Content`
    * **Permissions:** Creator/Lead/Organizer (depending on list settings).

### 3.6 Tasks (Specific Views)

* **`GET /tasks/assigned-to-me`**
    * **Description:** Retrieves all list items (that are tasks) assigned to the currently authenticated user within the *current* camp context. Requires backend logic to filter across lists based on `assignee_user_id`.
    * **Response Body:** `ListItem[]` (where `assignee_user_id` matches current user)
    * **Permissions:** Authenticated User.

### 3.7 AI Features (Optional MVP Endpoints)

* *(Note: These assume client provides API key via headers or secure context. Initial implementation might be client-side calls directly, this spec outlines potential backend endpoints)*
* **`POST /ai/draft-announcement`**
    * **Description:** Generates a draft announcement. Requires appropriate AI provider config/key context.
    * **Request Body:** `{ "prompt": string, "keyPoints": string[], "providerConfig": AIConfig }` (Config might be implicit from user/camp settings)
    * **Response Body:** `{ "draftContent": string }`
    * **Permissions:** Organizer.
* **`POST /ai/suggest-list-items`**
    * **Description:** Suggests items for a list.
    * **Request Body:** `{ "listType": List['type'], "context": string, "providerConfig": AIConfig }`
    * **Response Body:** `{ "suggestions": string[] }`
    * **Permissions:** Organizer, Lead.
* **`POST /ai/ask-camp-qa`**
    * **Description:** Answers question based on camp data (requires backend RAG setup later).
    * **Request Body:** `{ "question": string, "providerConfig": AIConfig }`
    * **Response Body:** `{ "answer": string }`
    * **Permissions:** Member, Lead, Organizer.
* **`PUT /ai/config`**
    * **Description:** Saves user's AI provider preference and potentially API key (requires *secure* backend handling - deferred complexity).
    * **Request Body:** `Partial<AIConfig>`
    * **Response Body:** `200 OK`
    * **Permissions:** Authenticated User (for their own config).

---

This API specification provides a robust starting point for the MVP, covering core functionality while structuring endpoints logically for future multitenancy and backend implementation.