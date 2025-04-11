# Product Requirements Document: Theme Camp Hub

**Version:** 1.2 *(Updated)*
**Status:** Draft
**Last Updated:** 2025-04-10 *(Revision 2)*

---

## 1. Introduction & Vision

* **Purpose (MVP):** To create a centralized web application for **a** Burning Man theme camp to manage planning, communication, logistics, accommodation, and information organization efficiently for a single event cycle.
* **Purpose (Long-Term Vision):** To evolve into a **multitenant SaaS platform** enabling **multiple theme camps** to manage their operations. The platform will allow users to be members or guests of **multiple camps**, fostering connection and simplifying planning across different communities. It will also support **non-attending members/alumni**, allowing them to stay connected with camp activities and community year-round, incorporating **social networking elements**.
* **Vision:** To become the go-to platform for theme camp organization and community building, streamlining logistics for active event cycles while fostering year-round connection and social interaction within and across camps.
* **Target Audience (MVP):** Organizers, Functional Leads, and Members of a single Theme Camp preparing for the upcoming event.
* **Target Audience (Long-Term):** Multiple Theme Camps, Users participating in multiple camps, Non-attending members/Alumni, Camp Guests.
* **Technology:** Next.js application, developed potentially utilizing Cursor and Gemini assistance. Architecture choices (like Supabase) will consider future multitenancy needs.

---

## 2. Goals (MVP Focus)

* **Centralize Information:** Provide a single source of truth for **a camp's** roster, tasks, plans, announcements, and accommodation data for the current event cycle.
* **Improve Communication:** Facilitate clear and timely announcements and information sharing within **a single camp**.
* **Streamline Logistics:** Simplify tracking of members, tasks, supplies, travel, and accommodation needs for **a single camp**.
* **Enhance Collaboration:** Enable collaborative list management and information sharing within **a single camp**.
* **Optimize Placement Planning (Data-Driven):** Assist in planning **a camp's** space allocation using collected data.
* **Reduce Organizer Overhead:** Automate or simplify administrative tasks for **a single camp's** organizers.
* **Increase Member Clarity:** Provide members easy access to essential information for **their camp**.

*(Note: MVP goals focus on single-camp functionality as a foundation for the broader vision)*

---

## 3. User Roles & Personas (MVP Focus + Future Considerations)

* **Alex (Camp Organizer / Overall Lead):** *(MVP Focus)* Top-level administrator for **a specific camp** within the application. Needs full control over their camp's data and settings in the MVP.
* **Jordan (Functional Lead):** *(MVP Focus)* Manages a specific functional area within **a specific camp**. Needs focused permissions within their camp's context.
* **Sam (Camp Member):** *(MVP Focus)* General participant actively involved in **a specific camp's** planning/attendance for the current event cycle. Needs access to their camp's info and ability to manage their own profile/data within that camp context.
* **Future User Considerations:**
    * **Multi-Camp User:** A user profile needs to be associated with multiple camps, potentially with different roles/statuses in each.
    * **Non-Attending Member / Alumnus:** A status for users who are part of the camp community but not attending the current event. Their needs would focus on viewing general updates, participating in social features, and maintaining connection, rather than event logistics.
    * **Camp Guest:** Potentially limited access roles for temporary guests or collaborators.
    * **Platform Administrator:** A future role needed to manage the SaaS platform itself (tenants, billing, etc.).

---

## 4. Core Features (MVP Scope - Single Camp Focus)

*(No changes to feature list, but context is now explicitly single-camp for MVP)*

* **4.1. User Authentication & Profiles:** (MVP: Auth tied to a single user identity, profile data potentially reusable across future camp memberships).
* **4.2. Camp Roster Management:** (MVP: Manages roster for *one* camp).
* **4.3. Announcements:** (MVP: Camp-specific announcements).
* **4.4. List Management:** (MVP: Lists belong to *one* camp).
* **4.5. Accommodation Tracking & Placement Planning:** (MVP: Tracks accommodation for *one* camp's members).
* **4.6. Generative AI Features:** (MVP: AI context likely camp-specific).
* **4.7. Dashboard / Home Page:** (MVP: Shows overview for *one* specific camp context the user is viewing).

---

## 5. Non-Functional Requirements

* **Usability:** Intuitive, easy-to-use interface. Mobile-responsive.
* **Performance:** Fast load times, responsive interactions.
* **Security:**
    * Secure authentication, protection against common web vulnerabilities.
    * **Multitenancy:** Strict data isolation and privacy *must* be architected between different camps (tenants) when multitenancy is implemented. RLS in Supabase is a key enabler here.
* **Scalability:**
    * Should handle typical theme camp sizes (e.g., 20-150 members) within a single tenant for MVP.
    * **Long-Term:** Architecture must be designed to scale horizontally to support a large number of independent camp tenants and a growing user base accessing potentially multiple camps.
* **Reliability:** Stable and available. Data integrity is crucial.
* **Maintainability:** Well-organized, commented code.

---

## 6. Technology Stack & Development Approach

* **6.1. Core Technologies:**
    * Frontend Framework: Next.js (App Router)
    * UI Styling: Tailwind CSS
    * UI Components: Shadcn/ui
    * State Management: React Context API & local state initially; potentially Zustand/Jotai later.
    * Intended Backend: Supabase (Postgres DB, Auth, Storage, Edge Functions) - *Chosen partly for its strong support for multitenancy features like RLS, making it suitable for the long-term vision.* Full integration deferred in MVP.
    * Deployment: Vercel (Recommended).
* **6.2. Development Approach & Phasing (MVP Sprints):**
    * Priority 1 (Early Sprints): UI & Local State (Single-camp focus).
    * Priority 2 (Later Sprints): Backend & Auth Integration (Single-camp focus).
* **6.3. AI Integration Details:** Configurable Provider, User API Keys.

---

## 7. Future Considerations / Potential Roadmap (Post-MVP)

* **Multitenancy Implementation:** Architect and implement the SaaS structure to support multiple independent camps securely. Camp creation/management workflows.
* **Multi-Camp User Experience:** Allow users to join/view/switch between multiple camps they are associated with. Unified dashboard/notifications.
* **Financial Management Module:** Dues Tracking, Budgeting, Expense Tracking, Allocation, Reimbursements, Payment Gateway Integration.
* **Social Networking Features:**
    * Enhanced User Profiles (beyond logistics: interests, past burns, photos).
    * Camp-specific or cross-camp Activity Feeds.
    * Direct Messaging / Group Chats.
    * Features for Alumni/Non-Attending Member engagement.
* **Shared Canvas Planning (Camp Layout):** Visual tool for camp layout.
* **Offline Capability / PWA Features:** For on-playa use.
* **Calendar / Event Scheduling / Shift Sign-ups:** Manage time-based activities.
* **Inventory Tracking:** Manage physical camp assets.
* **Meal Planning Module:** Coordinate food.
* **Document Upload/Storage:** Share files.
* **Advanced Reporting:** Detailed analytics.
* **Advanced AI features:** Cross-camp insights (anonymized/aggregated), enhanced social matching.
* **Platform Administration Tools:** For managing the SaaS service.

---

## 8. Success Metrics (MVP Focus - Single Camp)

* High adoption rate within the initial pilot theme camp(s).
* Positive qualitative feedback on usability for single-camp logistics and communication.
* Reduced logistical friction for the pilot camp(s).
* Effective management of MVP features (tasks, lists, roster, accommodation data) for the pilot camp(s).
* Demonstrates a solid foundation upon which the multitenant and social features can be built.