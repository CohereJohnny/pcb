# Data Model: Theme Camp Hub

**Version:** 1.0
**Date:** 2025-04-10

## 1. Introduction

This document defines the core data structures for the Theme Camp Hub application. In the initial MVP development phase (frontend-only), these structures will be represented primarily as **TypeScript interfaces/types** used with local state management (React Context, `useState`).

The design anticipates the eventual integration of a **Supabase (Postgres)** backend. Key considerations include:

* **Multitenancy:** Incorporating a `camp_id` identifier in relevant models from the start to facilitate future Row-Level Security (RLS).
* **Database Mapping:** Defining fields (like `id`, `created_at`, foreign keys) that will map to database columns.
* **Potential Prisma Usage:** The structure is designed to be compatible with using Prisma ORM later for schema definition, migrations, and generating types directly from the database schema, ensuring consistency between frontend and backend.
* **Evolvability:** Starting with structures needed for the MVP, with placeholders for future feature expansion.

---

## 2. Core Entities (MVP - TypeScript Interfaces)

*(Note: `id` fields are typically UUIDs generated by the database, represented as `string`. `created_at`, `updated_at` are managed by the database. Fields marked `?` might be optional during frontend simulation or truly optional in the schema).*

```typescript
// Represents an authenticated user identity (maps closely to Supabase Auth user)
interface User {
  id: string; // Primary Key (from Auth provider)
  email?: string;
  // Other auth-related fields provided by Supabase Auth
}

// Represents a Tenant (a specific Theme Camp)
interface Camp {
  id: string; // Primary Key (UUID)
  created_at?: Date | string;
  name: string; // e.g., "The Shifting Sands Saloon"
  // Other camp-specific settings later (e.g., Burn year context)
}

// Defines user roles within the application/camp
type Role = 'ORGANIZER' | 'LEAD' | 'MEMBER';

// Links a User to a Camp with a specific Role (Crucial for Permissions/RLS)
interface Membership {
  id: string; // Primary Key (UUID)
  user_id: string; // Foreign Key to User.id
  camp_id: string; // Foreign Key to Camp.id
  role: Role;
  created_at?: Date | string;
  // Status relevant to this camp membership (e.g., 'ACTIVE', 'INVITED', 'INACTIVE_ALUMNI') - Future
}

// Holds application-specific user details (extends base User)
// Might evolve to be camp-specific via Membership later
interface Profile {
  id: string; // Primary Key (likely same as User.id)
  user_id: string; // Foreign Key to User.id
  updated_at?: Date | string;
  playa_name?: string | null;
  contact_info?: string | null; // Could be richer object later
  emergency_contact?: string | null; // Consider privacy/visibility
  travel_itinerary?: TravelItinerary | null;
  accommodation_details?: AccommodationDetails | null;
}

// Nested type for travel information within Profile
interface TravelItinerary {
  arrival_date?: Date | string | null;
  arrival_time?: string | null; // e.g., "Afternoon", "14:00"
  departure_date?: Date | string | null;
  departure_time?: string | null;
  mode_of_transport?: string | null; // e.g., "Personal Vehicle", "RV", "Bus"
  origin?: string | null; // e.g., "San Francisco, CA"
  vehicle_pass_status?: 'HAVE' | 'NEED' | 'NA' | null;
  ride_status?: 'NEED' | 'OFFERING' | 'HAVE' | null;
  notes?: string | null;
}

// Nested type for accommodation information within Profile
interface AccommodationDetails {
  type?: string | null; // e.g., "Tent", "RV", "Yurt", "Car", "Pod"
  size_details?: string | null; // e.g., "10x10 Tent", "25ft RV", "16ft Yurt"
  power_needs?: boolean | null;
  power_amps?: number | null; // e.g., 30, 50
  sharing_with?: string | null; // e.g., names of others
}

// Represents a camp-wide announcement
interface Announcement {
  id: string; // Primary Key (UUID)
  camp_id: string; // Foreign Key to Camp.id (for RLS)
  created_at?: Date | string;
  updated_at?: Date | string;
  author_user_id: string; // Foreign Key to User.id
  title: string;
  content: string; // Potentially rich text / Markdown
  tags?: string[]; // e.g., ['Urgent', 'Logistics', 'Build']
}

// Represents a distinct list (Shopping, Task, Checklist etc.) within a camp
interface List {
  id: string; // Primary Key (UUID)
  camp_id: string; // Foreign Key to Camp.id (for RLS)
  created_at?: Date | string;
  updated_at?: Date | string;
  created_by_user_id: string; // Foreign Key to User.id
  name: string; // e.g., "Kitchen Supplies", "Build Week Tasks"
  type: 'SHOPPING' | 'TASK' | 'CHECKLIST' | 'PACKING' | 'OTHER';
  // Permissions/ownership might be refined later
}

// Represents an item within a List, potentially including Task details
// Using optional fields for task properties simplifies initial model vs. separate Task entity
interface ListItem {
  id: string; // Primary Key (UUID)
  list_id: string; // Foreign Key to List.id
  camp_id: string; // Foreign Key to Camp.id (denormalized for easier RLS on items)
  created_at?: Date | string;
  updated_at?: Date | string;
  created_by_user_id?: string | null; // Optional creator tracking

  content: string; // Description of the item/task
  sort_order?: number; // For manual ordering within a list

  // --- Optional fields based on List.type ---

  // Checklist / Shopping / General Completion
  is_complete?: boolean; // Simple check status

  // Shopping List specific
  quantity?: number | null;
  estimated_cost?: number | null; // Consider currency later
  purchase_link?: string | null;

  // Task List specific
  assignee_user_id?: string | null; // Foreign Key to User.id
  due_date?: Date | string | null;
  status?: 'TODO' | 'IN_PROGRESS' | 'DONE' | null;
}

// Potential structure for storing AI configuration per Camp or User
// Security of api_key is paramount - DO NOT store raw keys client-side long-term
// Actual storage mechanism TBD (secure backend storage needed)
interface AIConfig {
  user_id?: string; // Link to user if per-user config
  camp_id?: string; // Link to camp if per-camp config
  provider?: 'ANTHROPIC' | 'COHERE' | 'OPENAI' | 'GEMINI';
  // api_key: string; // Needs secure storage solution POST-MVP
}