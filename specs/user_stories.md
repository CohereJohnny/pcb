# User Stories: Theme Camp Hub (MVP)

**Version:** 1.0
**Date:** 2025-04-10

## Introduction

These user stories define the required functionality for the Minimum Viable Product (MVP) of the Theme Camp Hub, focusing on a single-camp use case. They are derived from the personas (Alex - Organizer, Jordan - Lead, Sam - Member) and the features outlined in the PRD v1.2.

---

## 4.1 User Authentication & Profiles

*(Note: Actual login/registration implementation is deferred to later MVP sprints, but profile creation/management is core)*

* **As Sam (Member), I want to create and edit my user profile** including my Name, Playa Name, and Contact Information **so that** other camp members and organizers can identify me and contact me if needed.
* **As Sam (Member), I want to add and update my Travel Itinerary details** (Arrival/Departure Dates/Times, Mode of Transport, Origin, Vehicle Pass Status, Ride Status, Notes) in my profile **so that** organizers can coordinate arrivals, departures, and potential ride-sharing.
* **As Sam (Member), I want to add and update my Accommodation Details** (Type, Size/Length, Power Needs, Sharing Info) in my profile **so that** organizers can effectively plan camp layout, space allocation, and power requirements.
* **As Alex (Organizer), I want to view any member's profile** (respecting privacy settings) **so that** I can access their contact, travel, and accommodation details for planning purposes.
* **As Jordan (Lead), I want to view relevant details** (like arrival times or accommodation type) on member profiles **so that** I can coordinate tasks and resources within my functional area (e.g., build).

## 4.2 Camp Roster Management

* **As Alex (Organizer), I want to invite new people to join the camp hub via email** **so that** they can create their profile and become part of the camp's digital space.
* **As Alex (Organizer), I want to view a consolidated roster list** showing all members, their playa names, and their confirmation status (Invited / Confirmed) **so that** I have a clear overview of who is participating.
* **As Alex (Organizer), I want to assign roles** (Member, Functional Lead, Organizer) to users within the camp **so that** they have appropriate access and permissions within the application.
* **As Alex (Organizer), I want to update a member's status or role, or remove them from the camp roster** **so that** the roster accurately reflects the current camp composition.
* **As Sam (Member), I want to view the camp roster** (displaying information based on privacy settings) **so that** I can see who else is in the camp and learn playa names.
* **As Jordan (Lead), I want to view the camp roster** **so that** I know who is part of the camp and can coordinate with them for tasks related to my lead role.

## 4.3 Announcements

* **As Alex (Organizer), I want to create a new announcement** with a title and rich text content **so that** I can share important news, updates, or instructions with the entire camp.
* **As Alex (Organizer), I want to edit an existing announcement** **so that** I can correct errors or add updated information.
* **As Alex (Organizer), I want to delete an announcement** **so that** I can remove outdated or irrelevant information.
* **As Alex (Organizer), I want to optionally tag announcements** (e.g., 'Urgent', 'Logistics', 'Build Week', 'Community') **so that** members can quickly gauge importance or filter information later (filtering may be post-MVP).
* **As Sam (Member), I want to view a list or feed of current camp announcements,** likely ordered newest first, **so that** I can stay informed about what's happening.
* **As Jordan (Lead), I want to easily see recent announcements** **so that** I stay aligned with overall camp directives and information.

## 4.4 List Management (Flexible Framework)

* **As Alex (Organizer) or Jordan (Lead), I want to create new lists** (e.g., Shopping List, Task List, Checklist, Packing List) **so that** I can organize different types of information and actions required for the camp.
* **As Alex (Organizer) or Jordan (Lead), I want to add items with descriptions to a list** I manage **so that** I can detail what needs to be done, bought, or checked off.
* **As Alex (Organizer) or Jordan (Lead), I want to edit or delete items on lists** I manage **so that** the lists remain accurate and up-to-date.
* **As Jordan (Build Lead), I want to assign a task from a Task List to a specific camp member** (e.g., Sam) **so that** responsibility is clearly delegated.
* **As Jordan (Build Lead), I want to optionally add a due date to a task** **so that** members understand deadlines or priorities.
* **As Sam (Member), I want to view tasks that have been assigned to me** **so that** I know what my responsibilities are.
* **As Sam (Member), I want to update the status of a task assigned to me** (e.g., To Do, In Progress, Done) **so that** the relevant Lead (e.g., Jordan) knows the progress.
* **As Jordan (Kitchen Lead), I want to mark items on a Shopping List as 'Purchased'** (or similar status) **so that** other members know not to buy duplicates.
* **As Sam (Member), I want to view shared checklists or information lists** (like 'Suggested Packing List' or 'Camp Principles Checklist') **so that** I can prepare properly and align with camp expectations.
* **As Alex (Organizer), I want to control who can manage (edit/delete) specific lists,** likely defaulting to Organizers and relevant Leads, **so that** lists are managed appropriately.

## 4.5 Accommodation Tracking & Placement Planning

* *(Covered by Profile)* **As Sam (Member), I want to input my Accommodation Details...**
* **As Alex (Organizer), I want to view a summarized report or dashboard view** showing the counts of different accommodation types (Tent, RV, Yurt, etc.) and their aggregated power needs **so that** I can effectively plan the physical camp layout and power grid *manually*.
* **As Alex (Organizer), I want to easily filter or view the roster list based on accommodation details** (e.g., see all RVs) **so that** I can group relevant information for manual placement planning.

## 4.6 Generative AI Features (Potential MVP Enhancements)

* **As Alex (Organizer), I want to optionally use AI to help draft an announcement** based on my key points **so that** I can communicate more effectively and save time.
* **As Jordan (Lead), I want to optionally use AI to suggest common items** when creating a specific type of list (e.g., Kitchen Shopping List, Build Task List) **so that** I have a starting point and am less likely to forget items.
* **As Sam (Member), I want to optionally ask a Camp Q&A Bot simple, factual questions** based on the camp's announcements and uploaded info **so that** I can find answers quickly. *(Requires careful data scoping & indication of limitations)*
* **As Alex (Organizer), I want to configure the AI integration by selecting a provider** (Anthropic, Cohere, OpenAI, Google Gemini) **and entering my own API key** **so that** AI features can function using the camp's preferred service and account.

## 4.7 Dashboard / Home Page

* **As Sam (Member), I want to see the latest camp announcements prominently displayed** on my dashboard when I log in **so that** I don't miss important updates.
* **As Sam (Member), I want to see a summary of tasks assigned to me** (especially upcoming or overdue) on my dashboard **so that** I have a quick view of my responsibilities.
* **As Alex (Organizer), I want to see key camp statistics** (e.g., number of confirmed members, summary of accommodation types) on my dashboard **so that** I get a quick pulse check on camp logistics and readiness.
* **As Jordan (Lead), I want my dashboard to potentially highlight tasks or announcements relevant to my lead role** (if possible through tagging/assignment) **so that** I can focus on my area of responsibility.