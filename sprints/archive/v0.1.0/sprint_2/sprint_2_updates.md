# Sprint 2 Updates

*   Defined initial data types (`User`, `Profile`, `TravelItinerary`, `AccommodationDetails`, etc.) in `src/types/dataModel.ts`.
*   Created `UserContext` and `CampContext` with simple providers holding mock data.
*   Wrapped root layout (`src/app/layout.tsx`) with context providers.
*   Created core layout components (`Header.tsx`, `Sidebar.tsx`, `Footer.tsx`) with basic structure and styling.
*   Added Shadcn `Button` and `Avatar` components.
*   Updated `Header.tsx` to use Button/Avatar and display user initials from context.
*   Created `(camp)` route group and layout (`src/app/(camp)/layout.tsx`).
*   Integrated Header and Sidebar into the camp layout.
*   Created profile route (`app/(camp)/[camp_id]/profile/page.tsx`).
*   Created profile form components (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`) in `src/components/features/profile/`.
*   Added required Shadcn components (Card, Label, Input, Select, Checkbox, Textarea, Separator).
*   Updated form components to use Shadcn UI elements.
*   Composed Profile page to display the forms.
*   Added mock data and `useState` to Profile form components (`ProfileForm`, `TravelItineraryForm`, `AccommodationForm`) for initial population and basic input handling.
*   Sprint 2 tasks complete.
