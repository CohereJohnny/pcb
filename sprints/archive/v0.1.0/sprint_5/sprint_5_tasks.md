# Sprint 5: Design System Implementation & UI Polish - Tasks

**Goal:** Refine the overall look and feel, implement the design language consistently across existing components (Profile, Roster), aiming for a clean, Notion-like aesthetic while adhering to the updated `design_spec.md`.

**Directory Focus:** `pcb-app/src/`, `pcb-app/tailwind.config.js`, `pcb-app/src/app/globals.css`

---

## Task Breakdown:

**1. Design Spec Review & Foundation:**
    *   [x] **Review Design Spec:** Thoroughly review the updated `specs/design_spec.md` focusing on the Notion-inspired principles: neutral palette (e.g., Slate), specific accent colors, typography (font, sizes, line-height), spacing, minimal borders/shadows, and overall clean aesthetic.
    *   [x] **Update Tailwind Config (`tailwind.config.js`):**
        *   Adjust `colors` to match the neutral and accent palette from the spec. Potentially use Shadcn CSS variables or directly map Tailwind colors.
        *   Configure `fontSize`, `lineHeight`, `letterSpacing` if needed to match typography specs.
        *   Review `borderRadius`, `boxShadow`, `borderWidth` defaults to ensure they align with the minimal aesthetic.
        *   Ensure Tailwind detects Shadcn CSS variables if that approach is used (`darkMode: ['class']` should already be set).
    *   [x] **Update Global CSS (`globals.css`):**
        *   Define or update Shadcn theme variables (`:root`, `.dark`) to reflect the chosen neutral and accent colors from the spec.
        *   Ensure base body styles (font, background color, text color) match the default theme defined in the spec.
        *   Apply base typography settings if not handled purely by Tailwind config.

**2. Core Layout Refinement:**
    *   [x] **Refactor `Header` (`pcb-app/src/components/layout/Header.tsx`):**
        *   Apply the neutral background/border colors.
        *   Adjust spacing/padding for a potentially cleaner/more spacious look.
        *   Ensure typography matches the spec.
        *   Refine the User Menu button/avatar style for minimalism.
    *   [x] **Refactor `Sidebar` (`pcb-app/src/components/layout/Sidebar.tsx`):**
        *   Apply neutral background/border colors.
        *   Update navigation link styles (typography, hover/active states using subtle muted backgrounds or accent colors as per spec).
        *   Improve spacing and potentially add subtle dividers if needed for clarity.
    *   [x] **Refactor `Footer` (if implemented, `pcb-app/src/components/layout/Footer.tsx`):**
        *   Apply neutral background/text colors.
        *   Ensure typography and spacing match the minimal design.
    *   [x] **Review Camp Layout (`pcb-app/src/app/(camp)/layout.tsx`):**
        *   Adjust overall padding/spacing if needed to enhance whitespace.

**3. Feature Component Polish (Profile):**
    *   [x] **Update Profile Page (`pcb-app/src/app/(camp)/[camp_id]/profile/page.tsx`):**
        *   Refine page title/description typography and spacing.
        *   Ensure consistent use of `Separator` with appropriate styling.
    *   [x] **Update `ProfileForm` (`pcb-app/src/components/features/profile/ProfileForm.tsx`):**
        *   Apply updated styles to `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` (minimal borders/shadows, neutral backgrounds).
        *   Ensure `Input`, `Label`, `Button` styles inherit correctly from the updated theme/global CSS. Check focus rings and states.
        *   Adjust form layout spacing for clarity and alignment.
    *   [x] **Update `TravelItineraryForm` (`.../TravelItineraryForm.tsx`):**
        *   Apply consistent Card/Input/Label/Button styling as above.
        *   Ensure date inputs (`<Input type="date">`) and select components (`Select`) look clean and consistent.
        *   Review layout and spacing.
    *   [x] **Update `AccommodationForm` (`.../AccommodationForm.tsx`):**
        *   Apply consistent Card/Input/Label/Button/Checkbox styling.
        *   Review layout and spacing.

**4. Feature Component Polish (Roster):**
    *   [x] **Update Roster Page (`pcb-app/src/app/(camp)/[camp_id]/roster/(view)/page.tsx`):**
        *   Refine page title/description typography and spacing.
    *   [x] **Update `RosterTable` (`pcb-app/src/components/features/roster/RosterTable.tsx`):**
        *   Ensure `Table`, `TableHeader`, `TableHead`, `TableBody`, `TableRow`, `TableCell` styles align with the minimal spec (borders, spacing, typography).
        *   Refine hover/selected states for rows if needed (subtle `muted` background).
        *   Check text alignment and padding within cells.
        *   Ensure the `N/A` or `--` placeholder styles use `text-muted-foreground` appropriately.

**5. Consistency & Responsiveness:**
    *   [x] **Review Component States:** Check hover, focus, active, and disabled states across all interactive elements (Buttons, Inputs, Links, Table Rows) for consistency and adherence to the minimal style.
    *   [x] **Responsive Design Check:** Test Profile and Roster pages on various screen sizes (mobile, tablet, desktop). Adjust layouts, spacing, and typography using Tailwind's responsive modifiers (`sm:`, `md:`, etc.) to ensure readability and usability.
    *   [x] **(Optional) Create Custom Primitives:** Skipped. No immediate need identified for custom reusable components based on current features.

**6. Accessibility & Final Checks:**
    *   [x] **Accessibility Review:** Briefly check color contrast ratios for text/backgrounds. Verify keyboard navigation and focus states are clear for interactive elements.
    *   [x] **Cross-Browser Check (Basic):** Load the updated pages in Chrome and Firefox (and Safari if possible) to catch major rendering inconsistencies.

**7. Sprint Documentation & Wrap-up:**
    *   [x] **Update Progress:** Maintain `sprints/sprint_5/sprint_5_updates.md`.
    *   [x] **Log Issues:** Record any new technical debt or backlog items discovered during the sprint in `tech_debt.md` or `backlog.md`.
    *   [x] **Create Report:** Upon completion, summarize the sprint in `sprints/sprint_5/sprint_5_report.md`.

---