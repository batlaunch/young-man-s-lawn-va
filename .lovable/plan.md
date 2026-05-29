## Problem
The Services dropdown panel is rendered in the DOM but invisible because the parent `<nav>` in `Navbar.tsx` uses `overflow-x-auto`. Any `overflow-*` value other than `visible` clips absolutely-positioned children — including our dropdown that sits below the nav.

## Fix
In `src/components/site/Navbar.tsx`:
- Remove `overflow-x-auto` from the `<nav>` element so the hover dropdown can render outside the nav's bounds.
- Keep the existing flex/gap classes; on small screens the nav already wraps gracefully because items use small text sizes.

No other files need changes. The dropdown markup, hover animation (`opacity-0 → group-hover:opacity-100` with `transition-all duration-200`), and links are already correct.