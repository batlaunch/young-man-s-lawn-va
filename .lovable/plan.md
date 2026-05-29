Update the ServicePage component and all 6 service route files to display rich service descriptions alongside each numbered service item.

## Changes

### 1. ServicePage component (`src/components/site/ServicePage.tsx`)
- Change the `bullets` prop from `string[]` to `{ title: string; description: string }[]`.
- Render each item as a card with the title in bold and the description as body text, preserving the existing grid layout and styling.

### 2. Service route files — update `bullets` prop
Map the user's 20 descriptions to the correct page:

- **Lawn Care & Turf Management** (`services.lawn-turf.tsx`):
  1. Lawn mowing & edging — Regular cutting and clean edge lines along borders
  2. Fertilization — Seasonal nutrient treatments to keep grass healthy and green
  3. Weed control — Pre- and post-emergent herbicide applications
  4. Aeration — Core or spike aeration to reduce soil compaction
  5. Overseeding — Reseeding thin or bare patches to thicken turf
  6. Sod installation — Laying new turf for instant lawn coverage

- **Trees, Shrubs & Beds** (`services.trees-shrubs-beds.tsx`):
  7. Hedge & shrub trimming — Shaping and pruning ornamental plants
  8. Tree trimming & pruning — Removing dead branches and shaping trees for health and aesthetics
  9. Stump grinding & removal — Eliminating leftover tree stumps after removal
  10. Flower bed maintenance — Planting, deadheading, and seasonal rotations
  11. Mulching — Applying mulch to beds for moisture retention and weed suppression

- **Landscape Design & Hardscaping** (`services.landscape-hardscaping.tsx`):
  12. Landscape design & installation — Planning and planting new garden beds, pathways, and features
  13. Hardscaping — Building patios, retaining walls, walkways, and fire pits
  14. Drainage solutions — Installing French drains or grading to manage water runoff
  15. Erosion control — Using ground cover, matting, or grading to prevent soil loss on slopes

- **Irrigation & Systems** (`services.irrigation.tsx`):
  16. Irrigation installation & maintenance — Sprinkler system setup, repairs, and seasonal startups/shutdowns

- **Pest & Environmental Control** (`services.pest-control.tsx`):
  17. Pest & grub control — Treating soil and turf for damaging insects

- **Seasonal Services** (`services.seasonal.tsx`):
  18. Leaf removal — Seasonal cleanup of fallen leaves
  19. Seasonal cleanups — Spring and fall deep-clean services for beds, debris, and prep work
  20. Snow removal & ice management — Plowing, shoveling, and salting in winter months

## Technical details
- No new dependencies.
- Uses existing Tailwind tokens (`bg-surface`, `border-border`, `text-brand-white`, `text-muted-foreground`, etc.).
- Keeps the 2-column grid on desktop, single column on mobile.