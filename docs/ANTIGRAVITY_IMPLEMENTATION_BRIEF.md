# Antigravity Task Brief — Portfolio Paper & Pencil Redesign

**Target repository:** `dp9318/Portfolio`  
**Base branch:** `master`  
**Design spec:** `docs/DESIGN.md` v2.0  
**Reference image:** `assets/reference/paper-pencil-sketch-reference.png`

## Goal

Apply a paper-texture / pencil-sketch visual treatment to the existing portfolio while keeping its current layout, architecture, positioning, section structure, content, and interactions intact.

This is not a new portfolio build. Modify the existing application in place.

## Before editing

1. Read `AGENTS.md` and the project documents in `docs/`.
2. Inspect the current implementation, especially:
   - `src/App.tsx`
   - `src/context/ThemeContext.tsx`
   - `src/components/theme/ThemeSelector.tsx`
   - `src/sections/Hero/HeroScene.tsx`
   - `src/styles/variables.css`
   - `src/styles/globals.css`
   - `src/styles/components.css`
   - `src/components/ui/`
   - `src/components/navigation/`
3. Compare the page against the supplied reference image. Use it for texture, linework, sketch illustration, and material—not for the reference site's layout or content.
4. Make a brief implementation plan, then proceed with the scoped changes. Do not wait for approval for the changes explicitly requested here.

## Required visual changes

### Remove

- Remove the global 3D/WebGL scene and its visual footprint completely.
- Remove all glassmorphism: no frosted panels, backdrop blur, transparent glass surfaces, specular glass rims, or glass-specific shadows.
- Remove the Royal, Cyber, Mocha, and Emerald presets and theme-switching UI/state.
- Keep Carbon as the one permanent theme; there must be no visible theme selector.

### Add

- Warm off-white textured paper as the continuous page background.
- Solid paper surfaces for cards, navigation, modal, menu, and controls.
- Fine graphite pencil outlines with controlled unevenness / a subtle double-pass appearance.
- Slightly offset pencil shadows below the outlines.
- Subtle pencil-sketch accents or line illustrations only where they do not alter the existing layout or compete with content.
- The existing Carbon crimson accent (`#E10600`) with a restrained red glow on hover, focus, active navigation, and selected states.
- Rebalanced ink and muted text colors for strong readability on light paper.

### Keep

- Current section order, component structure, content order, layout dimensions, positions, grids, spacing, breakpoints, responsive behavior, data model, and existing interactions.
- Current navigation, project details modal, buttons, links, contact actions, and mobile menu.
- Existing non-3D motion only where already used and appropriate. Keep it subtle; do not introduce a new animation system.

## Layout lock — important

Do not:

- Reorder, add, or remove sections.
- Change the navbar location or rearrange its items.
- Change the hero's composition, CTA positions, or text alignment.
- Change project card count per row, order, proportions, or grid structure.
- Change section spacing, container width, or overall page geometry to imitate the reference screenshot.
- Add a sidebar, icon rail, search bar, floating toolbar, or new fixed controls.
- Copy the travel site's card grid, content, title, illustrations, or navigation.

Keep the content boxes in the same positions. Simulate hand-drawn imperfection on an outline/pseudo-element layer only; do not rotate or shift the actual interactive element.

## Color direction

Use Carbon as the sole identity:

- Carbon ink: `#2A2A2A`
- Silver graphite: `#C0C0C0`
- Crimson accent: `#E10600`
- Paper canvas: `#F2F0E9`
- Card paper: `#F8F6F0`
- Primary text: `#2A2A2A`
- Secondary text: `#4A4946`
- Muted text: `#706D66`

The paper neutrals are material/surface colors, not a second theme. Body copy must meet WCAG AA contrast. Red is an accent, not the dominant page color.

## Border and shadow direction

Every existing visible border should read as a graphite pencil stroke: slightly irregular, dark enough to remain clear, and accompanied by a restrained offset pencil shadow. Apply the treatment consistently to cards, buttons, navigation boundaries, modal, fields, existing chips, and section separators.

Use a subtle second outline or pseudo-element if helpful. It may have a tiny offset and fraction-of-a-degree skew, but it must not change layout size or hit-testing. Do not use large glass-style blur shadows.

Preserve the former Carbon red glow in interaction states. Avoid a permanent neon halo around every resting card.

## Code-level cleanup expected

- Remove the `HeroScene` import and mount from `src/App.tsx`.
- Remove the fixed scene container and its obsolete CSS.
- Remove `HeroScene.tsx` if no longer referenced.
- Remove theme selector imports/usages and the selector component if it becomes unused.
- Simplify `ThemeContext` or replace its runtime selection with a static Carbon root setup, whichever is the smallest clean solution. Do not keep localStorage theme switching.
- Remove unused theme-specific and glass-specific CSS variables/rules.
- Remove `three`, `@react-three/fiber`, `@react-three/drei`, and `@types/three` from `package.json` and regenerate `package-lock.json` only after confirming there are no remaining imports/usages.
- Keep `framer-motion`, `gsap`, and `lenis` only if the existing non-3D application still uses them. Do not remove or upgrade them blindly.
- Fix the initial HTML theme color/background so the browser does not flash the old Royal purple theme. Use the new paper/Carbon visual base.
- Do not rewrite the entire CSS system or component tree.

## Visual quality checklist

- [ ] Warm paper texture is visible but subtle.
- [ ] Paper texture does not reduce readability or obscure project screenshots.
- [ ] Cards and controls have a hand-drawn graphite outline and a pencil-like offset shadow.
- [ ] Borders feel intentionally imperfect, not jagged or messy.
- [ ] Crimson hover/focus glow is present but restrained.
- [ ] No glass blur or translucent glass surfaces remain.
- [ ] No 3D/WebGL scene remains.
- [ ] No theme switcher or alternate theme remains.
- [ ] The original page composition and component positions are unchanged.
- [ ] Typography and contrast remain professional and accessible.
- [ ] No layout shifts, clipping, or horizontal overflow at responsive widths.

## Functional verification

Run:

```bash
npm run build
npm run lint
```

If `npm run lint` has pre-existing failures, distinguish them from regressions introduced by this task. Inspect the page at mobile, tablet, laptop, and desktop sizes. Verify navigation, project modal, mobile menu, external links, email/resume actions, keyboard focus, and reduced-motion behavior.

## Final report

Summarize the visual changes, removed 3D/theme/glass code, dependencies removed (if any), preserved functionality, build/lint results, responsive checks, and anything not verified. Do not claim success for checks you did not run.
