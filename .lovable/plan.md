## Goal

Improve contrast on the homepage by darkening body/heading text to `#1c4332`, and update the H1 gradient so it fades from `#1c4332` into a medium green (not too light).

## Changes

**`src/styles.css`**

1. Update the light-section ink tokens used across the homepage:
   - `--ink: #1c4332` (was `#0F2018`) — used by `text-ink` on H2s, trust bar items, service card titles, review text.
   - `--ink-soft: #1c4332` (was `#3F5A48`) — used by `text-ink-soft` on the hero subtitle, section descriptions, service card descriptions. Setting it to the same dark green gives the requested contrast bump; muted feel still preserved via smaller font sizes.

2. Update `.text-gradient-grass` (used only by the H1 on the homepage) to fade from dark to medium green:
   ```css
   background: linear-gradient(135deg, #1c4332 0%, #40916c 100%);
   ```
   - Start: `#1c4332` (deep forest, matches the new body text)
   - End: `#40916c` (medium grass green — visible against the cream hero card but not pale)

## Scope

- Only `src/styles.css` is modified.
- No component files change; all homepage text already uses `text-ink`, `text-ink-soft`, and `.text-gradient-grass`.
- Dark-themed pages are unaffected — they use `--foreground` / `--brand-white`, not `--ink`.

## Notes

- The `text-primary` italic tagline ("Specialized outdoor land & tree services.") already resolves to `#1B4332`, which is essentially the requested color, so no change needed there.
- If `#40916c` reads too light against the cream card once previewed, easy follow-up: nudge to `#2d6a4f`.
