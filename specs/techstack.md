# Technology Stack: Theme Camp Hub (MVP)

**Version:** 1.1 *(Updated)*
**Date:** 2025-04-10

## Introduction

This document outlines the technology stack for the Minimum Viable Product (MVP) of the Theme Camp Hub. The primary goal for the initial development sprints is **rapid iteration on the frontend UI and user experience**. Therefore, the stack emphasizes tools that facilitate quick development, leverages Next.js capabilities, and relies initially on local state management before integrating backend services. Complexity will be introduced incrementally. The stack is chosen with **Node.js compatibility** and deployment to **Vercel** as primary considerations.

---

## Runtime Environment

* **Runtime:** **Node.js (Latest LTS Version)**
    * *Reasoning:* Provides the highest level of compatibility, stability, and ecosystem support for Next.js development. Ensures seamless integration with intended backend services (Supabase) and deployment platform (Vercel). Offers the most predictable and well-documented development path for this project.

---

## Core Framework & Language

* **Framework:** **Next.js** (using the **App Router**)
    * *Reasoning:* Robust structure for React applications, optimized for performance and developer experience within the Node.js runtime.
    * *Packages:* `next`, `react`, `react-dom`
* **Language:** **TypeScript**
    * *Reasoning:* Enhances code quality and maintainability through static typing.
    * *Packages:* `typescript`, `@types/react`, `@types/node`

---

## Package Manager

* **Manager:** **pnpm**
    * *Reasoning:* Chosen for its significant improvements in installation speed and disk space efficiency (via content-addressable store and linking) compared to npm/yarn. Maintains excellent compatibility with the Node.js ecosystem and Next.js projects, and is fully supported by Vercel. Provides a superior developer experience with minimal setup overhead (one-time install: `npm install -g pnpm`).
    * *Packages:* `pnpm` (global install needed)

---

## UI & Styling

* **Styling Framework:** **Tailwind CSS**
    * *Reasoning:* Utility-first CSS for rapid UI development.
    * *Packages:* `tailwindcss`, `postcss`, `autoprefixer`
* **Component Library:** **Shadcn/ui**
    * *Reasoning:* Accessible, customizable component primitives built on Radix UI, styled with Tailwind CSS. Allows full code ownership.
    * *Key Dependencies installed via `pnpm dlx shadcn-ui@latest init` and `add` commands:* `lucide-react`, various `@radix-ui/react-*` packages, `class-variance-authority`, `clsx`, `tailwind-merge`.

---

## State Management

* **Initial Approach (MVP Early Sprints):** React Built-ins (`useState`, `useReducer`, `useContext`)
    * *Reasoning:* Start simple, leverage native React capabilities first.
* **Future Considerations:** `Zustand` or `Jotai` if complexity increases significantly.

---

## Data Handling & Persistence (MVP Early Sprints)

* **Data Structures:** TypeScript Interfaces/Types.
* **Data Simulation:** Local State / React Context.
* **Optional Simple Persistence (Dev Only):** `localStorage` / `sessionStorage` (Use sparingly, will be replaced).

---

## Forms & Validation

* **Form Management:** **React Hook Form** (`react-hook-form`).
* **Schema Validation:** **Zod** (`zod`).
    * *Reasoning:* Performant, type-safe solution for forms and validation, integrates well.

---

## Linting & Formatting

* **Linter:** **ESLint** (with Next.js config: `eslint`, `eslint-config-next`).
* **Formatter:** **Prettier** (`prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`).
* **Automation:** **Husky & lint-staged** (Recommended: `husky`, `lint-staged`).
    * *Reasoning:* Enforce code quality and consistency automatically.

---

## API Calls (AI & Future Backend)

* **Initial Approach:** Browser **`Workspace` API**.
* **Future Consideration:** `axios`.
    * *Reasoning:* Start with the built-in standard; add `axios` later if needed.

---

## AI Integration

* **API Interaction:** Direct `Workspace` calls to provider APIs (Anthropic, Cohere, OpenAI, Google Gemini) using user-provided API keys (handled client-side initially).
* **Abstraction:** Simple custom hooks or service functions recommended over heavy frameworks initially.
* **Configuration:** Requires UI for provider selection and API key input. Security of key storage needs careful handling, especially before full backend/auth integration.

---

## Testing

* **Unit/Integration Testing:** **Vitest** or **Jest** (`vitest` / `jest`, `@testing-library/react`). Vitest recommended for speed.
* **End-to-End (E2E) Testing:** **Playwright** or **Cypress** (`playwright` / `cypress`). Consider deferring full suite.
* **MVP Focus:** Unit tests for logic, potentially component tests.

---

## Build & Deployment

* **Build Tooling:** Provided by **Next.js** (`pnpm next build`).
* **Deployment Platform:** **Vercel**
    * *Reasoning:* Optimized platform for Next.js hosting, offering seamless Git integration, automatic deployments, serverless functions, global CDN, and excellent developer experience. Fully supports Node.js runtime and `pnpm` installs.

---

## Intended Backend & Database (Deferred Integration)

* **Backend-as-a-Service (BaaS):** **Supabase**
    * *Reasoning:* Simplifies backend development (Postgres DB, Auth, Storage, Edge Functions). `supabase-js` client library works well in the Node.js environment. RLS features support future multitenancy goals.
    * *Packages (to be added later):* `@supabase/supabase-js`