Set the storm-damage photo (currently in the Recent Work grid) as the site's Open Graph / link-preview image so it appears when the site is shared on social platforms, iMessage, Slack, etc.

Steps:

1. **Copy image to public/** — Copy `src/assets/yelp/yelp2.jpg` (storm damage photo) to `public/og-image.jpg`. This ensures a stable, root-relative URL (`/og-image.jpg`) that survives builds unchanged and is directly accessible to crawlers.

2. **Add meta tags to index.html** — Insert sitewide Open Graph and Twitter Card tags in `<head>`:
   - `og:title` — site/brand title
   - `og:description` — site description
   - `og:image` — `/og-image.jpg`
   - `og:image:width` / `og:image:height` — actual photo dimensions
   - `og:image:alt` — descriptive alt text for the storm-damage cleanup
   - `og:url` — `/`
   - `og:type` — `website`
   - `twitter:card` — `summary_large_image`
   - `twitter:image` — `/og-image.jpg`

3. **Update homepage SEO hook** — In `src/routes/index.tsx`, update the `useSeo` call so its `og:image` meta points to `/og-image.jpg` instead of the Vite-imported `heroPhoto` (hashed asset path).