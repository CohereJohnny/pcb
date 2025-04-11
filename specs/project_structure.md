# Project Structure: Theme Camp Hub (MVP)

**Version:** 1.0
**Date:** 2025-04-11

## Introduction

This document outlines the proposed directory structure for the Theme Camp Hub Next.js application, focusing on the MVP requirements. It follows standard Next.js App Router conventions and incorporates best practices based on the project's tech stack (TypeScript, Tailwind CSS, Shadcn/ui) and specifications.

The structure aims for clarity, maintainability, and scalability, providing a solid foundation for both the initial single-camp MVP and future expansion towards multitenancy and additional features.

## Root Directory

```
.
├── .env.local           # Local environment variables (API keys, etc. - DO NOT COMMIT)
├── .eslintrc.json       # ESLint configuration
├── .gitignore           # Git ignore rules
├── .prettierrc.json     # Prettier configuration
├── components.json      # Shadcn/ui configuration
├── next-env.d.ts        # Next.js TypeScript declarations
├── next.config.mjs      # Next.js configuration
├── package.json         # Project dependencies and scripts
├── pnpm-lock.yaml       # PNPM lock file
├── postcss.config.js    # PostCSS configuration (for Tailwind)
├── public/              # Static assets (images, fonts if not using next/font)
│   └── favicons/        # Favicons
├── README.md            # Project overview, setup instructions
├── specs/               # Project specification documents (THIS FOLDER)
│   └── project_structure.md # This file
│   └── ... (other spec files)
├── src/                 # Main application source code
│   ├── app/             # Next.js App Router directory
│   ├── components/      # Shared React components
│   ├── config/          # Application configuration
│   ├── constants/       # Application-wide constants
│   ├── contexts/        # React Context API providers (for MVP state)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions, helpers, API clients
│   ├── styles/          # Global styles and Tailwind base layers
│   └── types/           # TypeScript type definitions and interfaces
└── tsconfig.json        # TypeScript configuration
```

## Directory Breakdown (`src/`)

### `src/app/`

Contains all routes, layouts, and pages managed by the Next.js App Router.

```
src/app/
├── (auth)/              # Routes related to authentication (Future)
│   └── sign-in/
│       └── page.tsx
├── (camp)/              # Routes requiring authentication & camp context
│   ├── [camp_id]/       # Dynamic segment for camp context (prepare for multi-tenancy)
│   │   ├── announcements/ # Feature: Announcements
│   │   │   ├── (list)/      # Announcement list view
│   │   │   │   └── page.tsx
│   │   │   ├── [announcement_id]/ # View/Edit single announcement
│   │   │   │   └── page.tsx
│   │   │   └── new/         # Create new announcement
│   │   │       └── page.tsx
│   │   ├── dashboard/     # Feature: Dashboard / Home Page
│   │   │   └── page.tsx
│   │   ├── lists/         # Feature: List Management
│   │   │   ├── (list)/      # List overview page
│   │   │   │   └── page.tsx
│   │   │   ├── [list_id]/   # View/Edit single list and its items
│   │   │   │   └── page.tsx
│   │   │   └── new/         # Create new list
│   │   │       └── page.tsx
│   │   ├── profile/       # Feature: User Profile Management (Self)
│   │   │   └── page.tsx
│   │   ├── roster/        # Feature: Camp Roster
│   │   │   ├── (view)/      # View roster page
│   │   │   │   └── page.tsx
│   │   │   ├── invites/     # Invite new members (Organizer only)
│   │   │   │   └── page.tsx
│   │   │   └── [membership_id]/ # View/Manage specific member (Organizer only)
│   │   │       └── page.tsx
│   │   ├── settings/      # Camp/User settings (e.g., AI config)
│   │   │   └── page.tsx
│   │   └── layout.tsx     # Layout for authenticated camp views (sidebar, header)
│   └── layout.tsx         # Layout wrapper for all camp-related routes
├── api/                 # API Routes (if needed, e.g., proxying, simple backend tasks)
│   └── route.ts
├── favicon.ico
├── globals.css          # Global styles imported into layout.tsx
├── layout.tsx           # Root layout (html, body tags)
└── page.tsx             # Root page (e.g., landing page or redirect logic)
```

*   **Route Groups `(...)`:** Used to organize routes without affecting the URL path (e.g., `(auth)`, `(camp)`).
*   **Dynamic Segments `[...]`:** Used for routes with parameters (e.g., `[camp_id]`, `[list_id]`).
*   **Layouts:** Define shared UI structures for segments and their children.
*   **MVP Focus:** Routes map directly to the core MVP features defined in the PRD and User Stories. The `[camp_id]` is included early to align with the data model and future multitenancy, even if the MVP only supports one implicit camp initially.

### `src/components/`

Contains reusable React components.

```
src/components/
├── features/            # Components specific to application features
│   ├── announcements/   # Components for the Announcements feature
│   │   ├── AnnouncementCard.tsx
│   │   ├── AnnouncementForm.tsx
│   │   └── AnnouncementList.tsx
│   ├── dashboard/       # Components for the Dashboard
│   │   ├── AssignedTasksWidget.tsx
│   │   └── RecentAnnouncementsWidget.tsx
│   ├── lists/           # Components for the List Management feature
│   │   ├── ListCard.tsx
│   │   ├── ListForm.tsx
│   │   ├── ListItem.tsx
│   │   └── ListItemList.tsx
│   ├── profile/         # Components for User Profile sections
│   │   ├── AccommodationForm.tsx
│   │   ├── ProfileForm.tsx
│   │   └── TravelItineraryForm.tsx
│   ├── roster/          # Components for the Roster feature
│   │   ├── MemberCard.tsx
│   │   └── RosterTable.tsx
│   └── shared/          # Components shared across multiple features
│       ├── DataTable/     # Reusable data table component (if needed)
│       └── PageHeader.tsx
├── layout/              # Components related to overall page layout
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MainNav.tsx
│   ├── MobileNav.tsx
│   └── Sidebar.tsx
└── ui/                  # Shadcn/ui base components (populated by `shadcn-ui add`)
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    └── ... (other shadcn components)
```

*   **`ui/`:** Strictly for Shadcn/ui components, managed by its CLI. Avoid custom logic here.
*   **`layout/`:** Components forming the main application shell (navigation, header, footer).
*   **`features/`:** Organizes components by the application feature they belong to, improving modularity.
*   **`features/shared/`:** Components that are specific to the application's domain but reused across different features.

### `src/config/`

Application-level configuration files.

```
src/config/
└── site.ts            # Site metadata (name, description, URLs)
└── navigation.ts      # Defines structure for main navigation menus
└── ai.ts              # Configuration related to AI providers (names, default settings)
```

### `src/constants/`

Shared constant values used throughout the application.

```
src/constants/
└── index.ts           # Barrel file exporting all constants
└── roles.ts           # User role constants (e.g., ORGANIZER, MEMBER)
└── listTypes.ts       # Constants for different list types (TASK, SHOPPING)
```

### `src/contexts/`

React Context providers for managing global or shared state during the MVP phase (before integrating a dedicated state management library or relying solely on backend state).

```
src/contexts/
└── CampContext.tsx      # Provides current camp context (ID, name) - Minimal for MVP
└── UserContext.tsx      # Provides current user info (ID, role within current camp)
└── DataContext.tsx      # (Potentially) Mock data provider for MVP local state simulation
```

### `src/hooks/`

Custom React hooks for reusable logic, especially stateful or side-effect logic.

```
src/hooks/
└── use-mock-data.ts   # Hook for interacting with MVP mock data (if using DataContext)
└── use-current-user.ts # Hook to easily access user context
└── use-local-storage.ts # Generic hook for simple local storage persistence (dev only)
```

### `src/lib/`

Utility functions, helper modules, and API interaction logic.

```
src/lib/
├── api/                 # Functions for making API calls (even if mocked initially)
│   ├── announcements.ts
│   ├── lists.ts
│   ├── profile.ts
│   └── index.ts
├── utils.ts             # General utility functions (formatting, etc.)
├── validators/          # Zod schemas for validation
│   ├── profileSchema.ts
│   ├── listSchema.ts
│   └── index.ts
└── shadcn.ts            # Utility for cn() function (from shadcn setup)
```

### `src/styles/`

Global styles and Tailwind configuration.

```
src/styles/
└── globals.css          # Imported into `app/layout.tsx` (includes @tailwind directives)
```

### `src/types/`

Centralized TypeScript type definitions and interfaces, potentially mirroring `datamodel.md`.

```
src/types/
├── index.ts             # Barrel file exporting all types
├── api.ts               # Types related to API request/response shapes
├── dataModel.ts         # Core data interfaces (User, Profile, List, ListItem, etc.)
├── navigation.ts        # Types for navigation structure
└── shadcn.d.ts          # Type overrides or extensions for Shadcn/ui if needed
```

## Rationale

*   **Modularity:** Separates concerns into distinct directories (components, hooks, lib, types, app routes).
*   **Scalability:** Feature-based organization within `app/` and `components/features/` makes it easier to add or modify features later. Including `[camp_id]` prepares for multitenancy.
*   **Convention:** Follows standard Next.js App Router practices and common conventions in the React ecosystem.
*   **Clarity:** Aims for a predictable and easy-to-navigate structure.
*   **MVP Alignment:** Directory structure directly reflects the core features required for the MVP.
*   **Tech Stack Integration:** Explicitly includes directories/files related to Shadcn/ui (`components/ui/`, `components.json`), Tailwind (`postcss.config.js`, `globals.css`), TypeScript (`tsconfig.json`, `src/types/`), and Zod (`src/lib/validators/`).

This structure provides a robust starting point for building the Theme Camp Hub MVP. 