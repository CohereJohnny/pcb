# Design Specification: Theme Camp Hub

**Version:** 1.0
**Date:** 2025-04-10

## 1. Introduction

This document outlines the design language, style guide, and core user experience principles for the Theme Camp Hub application. Its purpose is to guide UI/UX development, ensuring consistency, usability, and accessibility across the platform, starting with the MVP and scaling into the future vision.

Our design must balance the practical needs of a logistics and communication tool with the community-oriented spirit of a Burning Man theme camp. It should reduce stress, not add to it.

---

## 2. Overall Design Philosophy

* **Pragmatic & Efficient:** The primary goal is task completion and information retrieval. The design must prioritize clarity, speed, and intuitive workflows. Minimize cognitive load, especially during stressful pre-playa periods.
* **Approachable & Encouraging:** Avoid a sterile, corporate feel. The design should feel helpful, supportive, and subtly reflect the creativity of the community it serves without being distracting or cliché. Think "organized creative project," not enterprise software.
* **Clean & Content-Focused (Notion Inspired):** Drawing inspiration from tools like Notion for their clean, organized, and content-focused interface, we aim for high clarity and usability. Maximize whitespace and minimize visual clutter.
* **Accessible & Inclusive:** Design for *everyone* in the camp, regardless of technical skill, ability, or device used. Adherence to accessibility standards (WCAG) is non-negotiable.
* **Consistent & Scalable:** Establish a clear design system using Tailwind and Shadcn/ui primitives that can be applied consistently across the MVP features and extended gracefully for future additions like multitenancy, financials, and social features.
* **Context-Aware (MVP Focus: Pre-Playa Web/Mobile):** While acknowledging the challenging on-playa environment (dust, sun, connectivity) for future iterations (PWA/Offline), the MVP design primarily targets pre-playa usage on standard web browsers (desktop and mobile).

---

## 3. Style Guide

This guide forms the basis of the visual identity, leveraging Tailwind CSS utility classes and configured via `tailwind.config.js` and global CSS where necessary. Shadcn/ui components will adhere to this guide.

### 3.1. Color Palette

The palette uses a base of accessible neutrals with functional primary and semantic accents. Colors are chosen for good contrast ratios (aiming for WCAG AA minimum 4.5:1 for text/UI elements). **The core UI should heavily rely on the Neutral palette for a clean, focused look, using Primary/Secondary colors as accents.**

* **Primary (Key Actions, Accents):** Teal // Use Sparingly
    * `primary`: `#0D9488` (Tailwind Teal 600) - Main call-to-action buttons, active navigation indicators, specific highlights.
    * `primary-foreground`: `#F0FDFA` (Tailwind Teal 50) - Text on primary background.
* **Secondary (Supporting Actions, Info Accents):** Amber/Orange // Use Sparingly
    * `secondary`: `#F59E0B` (Tailwind Amber 500) - Secondary buttons, less critical highlights, informational icons (use judiciously).
    * `secondary-foreground`: `#0C0A09` (Tailwind Stone 950) - Text on secondary background.
* **Neutrals (Core UI Structure, Backgrounds, Borders, Text):** Slate (Provides a slightly cooler, modern feel compared to pure gray) // **Primary UI Palette**
    * `background`: `#FFFFFF` (White) / `#F8FAFC` (Slate 50) - Main page backgrounds, card backgrounds.
    * `foreground`: `#0F172A` (Slate 900) - Default body text.
    * `muted`: `#F1F5F9` (Slate 100) - Subtle backgrounds (e.g., hover states, table stripes).
    * `muted-foreground`: `#64748B` (Slate 500) - Secondary/placeholder text, inactive icons/elements.
    * `border`: `#E2E8F0` (Slate 200) - Default borders for cards, dividers.
    * `input`: `#CBD5E1` (Slate 300) - Input borders.
    * `card`: `#FFFFFF` (White) - Card backgrounds (often same as page background).
    * `card-foreground`: `#0F172A` (Slate 900) - Text within cards.
* **Semantic Colors:**
    * `destructive`: `#EF4444` (Tailwind Red 500) - Destructive actions (e.g., Delete buttons). Use sparingly.
    * `destructive-foreground`: `#FEF2F2` (Tailwind Red 50) - Text on destructive background.
    * `success`: `#22C55E` (Tailwind Green 500) - Success messages, confirmations.
    * `warning`: `#EAB308` (Tailwind Yellow 500) - Warnings, non-critical alerts.
* **Accent (Optional - Used Very Sparingly):** A vibrant color for specific highlights if needed, e.g., Fuchsia `#D946EF`.

*(Contrast should be checked using tools like WebAIM Contrast Checker).*

### 3.2. Typography

Readability is key. Use `next/font` for optimized loading.

* **Primary Font:** **Inter** (Sans-Serif)
    * *Reasoning:* Highly readable, modern, variable font with excellent weight support. Available via Google Fonts/`next/font`.
* **Hierarchy & Sizing (Examples - adjust based on visual design):**
    * `H1 / Page Title`: 30px (text-2xl or 3xl), Semibold (font-semibold) or Bold (font-bold)
    * `H2 / Section Title`: 24px (text-xl or 2xl), Semibold
    * `H3 / Card Title / Subsection`: 20px (text-lg or xl), Semibold
    * `H4 / Minor Heading`: 18px (text-lg), Medium (font-medium) or Semibold
    * `Body (Default)`: 16px (text-base), Regular (font-normal), `text-foreground`
    * `Body (Small / Muted)`: 14px (text-sm), Regular, `text-muted-foreground`
    * `Label / Button Text`: 14px (text-sm), Medium
* **Line Height:** Use Tailwind's relative line heights (`leading-relaxed` or `leading-normal`) for good readability. **Ensure generous line-height appropriate for content-heavy sections.**
* **Defaults:** Set base font size and color in `globals.css` on the `body` or `html` tag.

### 3.3. Iconography

* **Icon Set:** **Lucide React**
    * *Reasoning:* Clean, consistent, comprehensive set included by default with Shadcn/ui.
    * *Packages:* `lucide-react`
* **Usage:**
    * Use icons purposefully to aid comprehension, not just decoration.
    * Standard Size: `16px` (`h-4 w-4`) or `20px` (`h-5 w-5`).
    * Stroke Width: Default (usually 2px).
    * Color: Typically `currentColor` to inherit text color, or specific colors (e.g., `text-primary`, `text-muted-foreground`) for semantic meaning.
    * Ensure proper accessibility (e.g., `aria-hidden="true"` if decorative, or provide accessible labels if interactive).

### 3.4. Spacing & Layout

* **Spacing Scale:** Use Tailwind's default 4px based scale consistently (e.g., `p-1`=4px, `p-2`=8px, `p-4`=16px, `p-6`=24px, `p-8`=32px). Apply for padding, margin, gaps. **Utilize ample whitespace to reduce clutter and improve focus.**
* **Layout:**
    * Use a constrained content width (e.g., `max-w-7xl mx-auto`) for main content areas on larger screens to improve readability.
    * Employ responsive grids (CSS Grid, Flexbox via Tailwind utilities) for layout structure.
    * Navigation: Consider a collapsible sidebar for desktop and a bottom navigation or hamburger menu for mobile.
* **Consistency:** Maintain consistent padding and margins around elements and sections.

### 3.5. Imagery & Tone

* **Imagery (MVP):** Minimal. Focus on UI elements. Use icons where appropriate. No decorative background images.
* **Future Imagery:** User-uploaded profile pictures or camp photos (for social features) should be handled gracefully (aspect ratios, placeholders, loading states).
* **Tone of Voice:** Clear, concise, helpful, encouraging. Avoid overly technical jargon. Acknowledge the context (e.g., "Let's get your profile ready for the playa!").

---

## 4. Visual Hierarchy

Guide the user's attention effectively:

* **Size & Weight:** Larger, bolder fonts for titles and key headings.
* **Color:** Use the Primary color for main calls-to-action (buttons, links). Use Semantic colors for feedback (errors, success). Use Muted foreground colors for less important text. **Rely heavily on the neutral palette for structure and text.**
* **Spacing:** Use whitespace (margins, padding) effectively to group related elements and separate distinct sections. Negative space is crucial for a clean look.
* **Placement:** Position critical information (e.g., page titles, primary actions, dashboard summaries) in prominent locations (top, left according to reading patterns).
* **Borders & Shadows:** Use subtle borders (`border` - e.g., Slate 200) to define containers (cards, inputs). **Minimize the use of shadows;** use very subtle shadows (`shadow-sm`) only where necessary for indicating elevation (e.g., dropdowns, dialogs, sticky headers).

---

## 5. Component Design & States

Leverage Shadcn/ui components as building blocks, ensuring they adhere to the style guide. Key interactive elements must have clear visual states:

* **Buttons (`components/ui/button`):**
    * Variants: `default` (primary color - for key actions), `secondary` (less prominent actions), `destructive`, `outline` (neutral border), `ghost` (minimal styling, often for tertiary actions or icon buttons), `link`. **Default state for many non-critical actions might be `outline` or `ghost` for a cleaner look.**
    * States: Default, `hover` (subtle background/opacity change - often using `muted` colors), `focus` (visible focus ring - essential for accessibility, Tailwind defaults + Shadcn), `active` (slight scale/color change), `disabled` (muted colors, `not-allowed` cursor).
* **Inputs (`components/ui/input`, `textarea`, `select`, `checkbox`, `radio`):**
    * Clear, subtle borders (`border input` - e.g., Slate 300).
    * Readable placeholder text (`text-muted-foreground`).
    * Visible `focus` state (focus ring, potentially slightly brighter border).
    * Disabled state (muted appearance).
    * Validation states (e.g., red border/icon for error, potentially green for success).
* **Cards (`components/ui/card`):** Standard container for discrete content blocks. Consistent padding, subtle border (`border`), often white or very light gray (`background`) background. **Avoid default shadows; consider subtle border hover states if interactive.**
* **List Items:** Clear visual distinction between items. Interactive states (subtle `muted` background on hover) if clickable. Clear indication of status (e.g., checkbox for complete, status badge for tasks).

---

## 6. Accessibility (A11y)

Accessibility is a core requirement, not an afterthought. Aim for **WCAG 2.1 Level AA** compliance.

* **Color Contrast:** Ensure all text and meaningful UI elements meet minimum contrast ratios (4.5:1 for normal text, 3:1 for large text/UI components). Use contrast checking tools.
* **Keyboard Navigation:** All interactive elements must be reachable and operable via keyboard alone in a logical order.
* **Focus Indicators:** Ensure clear, visible focus states for all interactive elements (buttons, links, inputs). Tailwind/Shadcn defaults are generally good starting points.
* **Semantic HTML:** Use appropriate HTML5 elements (`<nav>`, `<main>`, `<aside>`, `<button>`, etc.) to provide inherent meaning and structure.
* **ARIA Attributes:** Use ARIA (Accessible Rich Internet Applications) attributes where necessary to enhance semantics for assistive technologies (though Radix UI primitives used by Shadcn handle much of this).
* **Forms:** Use `<label>` elements correctly associated with form controls. Provide clear error messages and validation feedback.
* **Images (Future):** All meaningful images must have descriptive `alt` text. Decorative images should have empty `alt=""`.

---

## 7. Responsive & Mobile-First Design

* **Approach:** Design mobile layouts first or in parallel with desktop. Use Tailwind's responsive modifiers (e.g., `sm:`, `md:`, `lg:`) to adapt layouts and styles for different screen sizes.
* **Layout Adaptation:**
    * Sidebars collapse into hamburger menus or bottom navigation on mobile.
    * Multi-column layouts stack vertically.
    * Font sizes might adjust slightly.
    * Ensure touch targets are adequately sized on mobile (minimum 44x44px recommended).
* **Testing:** Regularly test on various screen sizes and devices (or browser dev tools emulation).

---

## 8. Future Considerations

* **Multitenancy:** Consider if/how minor camp-specific branding (e.g., an accent color or logo) could be incorporated later without breaking the core design system.
* **Social Features:** Design patterns for activity feeds, user profiles with more detail (photos), messaging interfaces will need to be developed, building upon the established style guide.
* **Canvas Tool:** Requires specific design considerations for tools, palettes, interaction models.
* **Data Visualization (Future Reports):** Simple, clear charts/graphs adhering to the color palette and accessibility standards.

---

This design specification provides a framework for creating a usable, accessible, and aesthetically appropriate interface for the Theme Camp Hub, balancing utility with a touch of community spirit. Consistency in applying these guidelines is key.