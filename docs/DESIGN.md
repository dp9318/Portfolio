# Personal Engineering Portfolio — Design Specification

**Project:** Portfolio Build — Learn What the Problem Needs  
**Document:** `DESIGN.md`  
**Version:** 2.0  
**Status:** Approved visual direction for the paper-and-pencil redesign  
**Date:** 24 November 2026

---

## 1. Design Direction

The portfolio is moving from the previous glassmorphism / 3D presentation to a **paper-and-pencil sketch aesthetic**.

The visual reference is supplied at:

`assets/reference/paper-pencil-sketch-reference.png`

The target feeling is a carefully composed engineering notebook or editorial sketchbook: warm textured paper, graphite linework, imperfect hand-drawn outlines, subtle pencil shading, and restrained crimson-red accents.

The design must remain professional and readable. It should feel intentionally hand-crafted, not childish, messy, or like a generic hand-drawn website template.

**Design north star:** keep the existing portfolio composition and make its surfaces feel like they were drawn and assembled on textured paper. The engineering work remains the subject.

## 2. Scope and Non-Negotiable Decisions

This is a **visual redesign, not a structural redesign**.

### 2.1 Remove completely

1. **All 3D / WebGL presentation**
   - Remove the persistent 3D background scene and all visible 3D geometry.
   - Remove the `HeroScene` mount from `src/App.tsx` and remove its scene container/styles.
   - Remove Three.js, React Three Fiber, Drei, and related type dependencies after confirming no remaining imports or usages.
   - Do not replace the 3D scene with another canvas, WebGL effect, animated 3D object, or video background.

2. **All glassmorphism**
   - No `backdrop-filter`, frosted glass, blur-based panels, translucent glass cards, glass sheen, specular glass borders, or floating translucent layers.
   - Cards, navigation, popovers, and modals must use solid, opaque paper-like surfaces.
   - Remove obsolete glass-specific CSS tokens and effects rather than leaving dormant glass styling behind.

3. **All themes except Carbon**
   - Carbon is the only theme and is permanently active by default.
   - Remove Royal, Cyber, Mocha, and Emerald presets and the ability to switch themes.
   - Remove the theme selector UI and theme-selection persistence from `localStorage`.
   - Do not show a Carbon selector or a one-option theme menu. The single theme should simply be the site's design system.
   - Keep one predictable root theme identifier if the current CSS architecture needs it, but it must always resolve to Carbon.

### 2.2 Preserve exactly

The following are not part of the redesign scope and must remain structurally unchanged:

- React + TypeScript + Vite application architecture.
- Existing `App` composition and section order:
  1. Navigation
  2. Hero
  3. About
  4. Projects
  5. Experience
  6. Skills
  7. Education
  8. Learning
  9. Contact
  10. Footer
- Existing section/component boundaries and data-driven content approach.
- Current content order, component positioning, container widths, grid structure, card count per row, section spacing, alignment, and responsive layout geometry.
- Existing navigation destinations, anchors, project interactions/modal behavior, external links, email action, resume action, and mobile navigation behavior.
- Existing structured data and project/experience content unless a separate content change is explicitly requested.
- Existing accessibility behavior and responsive breakpoints.
- Existing non-3D motion only where it is already used, works correctly, and remains subtle. Do not add a new animation framework.

**Do not rearrange, reorder, resize, or redesign the information architecture to imitate the reference screenshot.** Use the reference for material, texture, illustration, and linework only.

## 3. Reference Interpretation

Study the reference screenshot for these visual characteristics:

- Warm off-white paper rather than a flat digital background.
- Fine paper grain and a lightly aged / natural paper tone.
- Graphite pencil drawings and low-contrast sketch illustrations.
- Uneven, hand-drawn card outlines rather than perfectly geometric UI borders.
- Slightly offset pencil shadows that make cards look drawn on paper.
- Restrained hand-lettered character while keeping all copy easy to read.
- A coherent monochrome pencil treatment with a small amount of accent color.

Do **not** copy the reference site's identity or structure. In particular, do not copy its travel content, mountain-page layout, card grid, navigation arrangement, icon rail, text, labels, or browser chrome. Do not use the whole screenshot as a live page background. It is a style reference, not a production asset.

Any added sketch illustration should be original, subtle, locally stored, and placed only where it does not alter the current layout or compete with content. A few contextual pencil accents are better than filling every empty space.

## 4. Carbon Palette Adapted for Paper

Carbon remains the only palette identity. The warm paper colors below are **surface/material neutrals**, not a second selectable theme.

| Role | Suggested value | Use |
|---|---:|---|
| Carbon / primary ink | `#2A2A2A` | Main text, strong outlines, icons, structural marks |
| Silver graphite | `#C0C0C0` | Secondary strokes, light sketch details, subdued dividers |
| Crimson accent | `#E10600` | Primary emphasis, active states, selected details, retained red glow |
| Paper background | `#F2F0E9` | Main page canvas |
| Paper surface | `#F8F6F0` | Cards, navigation, modal and other content surfaces |
| Highlight paper | `#FFFEFA` | Small raised surfaces or input interiors where needed |
| Secondary ink | `#4A4946` | Supporting body copy |
| Muted graphite | `#706D66` | Metadata and lower-priority copy |
| Pencil line | `#615D56` | Normal hand-drawn outlines |
| Light pencil line | `#B8B2A7` | Subtle separators and secondary sketch marks |

Suggested CSS custom properties (adapt names to the existing token system):

```css
:root,
[data-theme="carbon"] {
  color-scheme: light;

  --color-base: #2A2A2A;
  --color-secondary: #C0C0C0;
  --color-accent: #E10600;
  --color-accent-hover: #C90B05;

  --color-background: #F2F0E9;
  --color-surface: #F8F6F0;
  --color-surface-elevated: #FFFEFA;

  --color-text-primary: #2A2A2A;
  --color-text-secondary: #4A4946;
  --color-text-muted: #706D66;
  --color-text-inverse: #FFFFFF;

  --color-border: #8A857C;
  --color-border-strong: #615D56;
  --color-focus: #E10600;

  --paper-shadow: 2px 3px 0 rgba(42, 42, 42, 0.16),
                  0 7px 14px rgba(42, 42, 42, 0.07);
  --paper-shadow-hover: 3px 5px 0 rgba(42, 42, 42, 0.20),
                        0 9px 18px rgba(42, 42, 42, 0.10),
                        0 0 13px rgba(225, 6, 0, 0.16);
  --red-glow: 0 0 8px rgba(225, 6, 0, 0.24),
              0 0 18px rgba(225, 6, 0, 0.12);
}
```

The values are a coherent starting point, not permission to reduce contrast. Adjust individual tokens after checking actual foreground/background combinations. Normal text must target at least WCAG AA contrast (4.5:1); large text and meaningful UI graphics must meet applicable AA contrast requirements.

### Color behavior

- The overall page should be light paper with dark graphite text.
- Silver is a supporting pencil/metallic grey, not the default text color on paper.
- Red is the sole vivid accent. Do not introduce gold, cyan, pink, green, purple, or rainbow gradients.
- Red glow is a restrained interaction accent, not a permanent neon halo around every component.
- Avoid large red filled areas. Use red to guide attention, not dominate the page.

## 5. Paper Background and Texture

The whole page should read as a continuous sheet or drawing surface.

Requirements:

- Use a warm off-white paper base (`--color-background`).
- Add very subtle, fine grain using lightweight CSS gradients or a small local texture asset.
- Texture must remain low-contrast and must not interfere with text, screenshots, diagrams, or icons.
- Use a fixed or section-level texture layer only if it does not affect scrolling, hit-testing, rendering performance, or text selection.
- Keep the same page background treatment through the entire portfolio so sections still feel like one coherent document.
- Do not use a large photographic paper scan, a full-screen video, an animated particle layer, or a heavy filter.

A faint pencil illustration may sit near the outer edges or behind a low-density area. It must not change the existing content bounds or conceal text. On mobile, decorative artwork may be reduced or hidden to preserve reading space.

## 6. Pencil Borders and Shadows

**Every existing visible UI border should adopt the pencil-sketch treatment.** This includes, where currently present:

- Navigation and mobile menu boundaries.
- Project cards and modal/dialog boundaries.
- Experience and education entries.
- Skill groups and tags/chips that already have borders.
- Buttons, inputs, and other controls.
- Contact panels and bordered section details.
- Separators and horizontal rules.

### Border character

- Use graphite / pencil-grey lines, not perfect bright-white or glass-specular strokes.
- Introduce controlled imperfection: slightly uneven stroke weight, tiny corner irregularities, or a very slightly offset secondary stroke.
- Use irregular but restrained corner radii (for example, small non-identical values) instead of large, smooth pill-like rounding on rectangular surfaces.
- A second faint outline or pseudo-element may be offset by 1–2px and rotated by a fraction of a degree to suggest a second pencil pass.
- The imperfect effect must not distort the element's dimensions, hit area, alignment, or layout.
- Use a short, graphite-like offset shadow beneath the outline. Prefer a directional pencil shadow over the previous large glass elevation shadow.
- Keep linework delicate enough that dense sections do not become visually noisy.

### Implementation guidance

Prefer reusable CSS tokens and a shared border treatment. A combination of a subtle solid border, a pseudo-element with an irregular outline, and a small offset shadow is acceptable. Use SVG stroke/path assets only where they provide a clear advantage. Do not rasterize entire UI components to achieve this effect.

Do not apply random transforms to the actual card/button boxes. If slight rotation is used, apply it to a decorative outline layer only. The content box and layout geometry must stay fixed.

## 7. Red Glow — Preserve the Existing Accent

Retain the previous Carbon red glow character, adapted to the paper design.

Use it selectively for:

- Hovered project cards or other clearly interactive cards.
- Primary CTA hover/active states.
- Active navigation indication where appropriate.
- Selected controls and visible keyboard focus states.
- The project modal's active/interactive edges only if it improves clarity.

The glow should be a soft crimson aura close to the graphite outline. It must not look like a neon gaming interface. Default resting cards should primarily show graphite stroke and pencil shadow, not a strong red glow.

Keyboard focus must remain visible without relying on glow alone. Preserve a clear focus outline and sufficient contrast.

## 8. Typography

Typography should retain the current hierarchy and text sizes as closely as possible.

- Keep body text in a highly readable system sans-serif stack.
- A restrained hand-lettered/display typeface may be used for selected headings or small labels only if it is already available locally or can be added with an explicit, lightweight, properly licensed font asset.
- Do not use a novelty handwritten font for long paragraphs, project descriptions, dates, dense metadata, or navigation body copy.
- Do not make the text imitate the reference's intentionally distorted / placeholder wording. All existing portfolio content must remain accurate and legible.
- Preserve current heading hierarchy, font sizing, line lengths, and responsive type behavior unless a small adjustment is needed to maintain contrast or prevent overflow.

## 9. Component Appearance

### Navigation

- Preserve its current position, dimensions, links, and responsive behavior.
- Replace glass/blur with an opaque paper surface or the existing paper canvas.
- Use a graphite hand-drawn lower edge or outline where a border already exists.
- Preserve a clear active link state; a short crimson pencil underline is acceptable.
- Do not move navigation items or add the reference's extra icon rail/search controls.

### Hero

- Preserve the existing hero composition, text alignment, CTA positions, and spacing.
- Remove the 3D scene entirely.
- Use the paper texture and, only if it fits without changing geometry, one low-contrast pencil illustration as a supporting detail.
- Do not add a new full-screen illustration, 3D replacement, or video.

### Cards and project details

- Keep current card size, order, grid, image aspect ratio, content positions, and modal behavior.
- Use opaque paper surfaces with pencil borders and a restrained graphite shadow.
- Keep project screenshots crisp and unfiltered; do not put paper texture over screenshot content.
- Use red accents for actionable links, selected details, or hover feedback only.

### Timeline, skills, education, and contact

- Preserve current structure and positioning.
- Apply the same paper/graphite visual language to existing borders and dividers.
- Keep status and metadata readable. Do not turn every label into a decorative stamp.

### Modal, dropdowns, and mobile menu

- Use solid paper surfaces; no translucent blur panels.
- Preserve keyboard behavior, focus management, dismissal behavior, and scroll containment.
- Keep the same interaction model and approximate dimensions.

### Buttons and fields

- Use graphite pencil outlines and a small offset paper shadow.
- Keep the current button hierarchy and dimensions.
- Maintain clearly distinguishable primary, secondary, disabled, hover, active, and focus states.
- Inputs must remain easy to identify against the paper background.

## 10. Motion and Interaction

The new visual identity should not become an animation showcase.

- Remove all animation and interaction tied to the 3D scene.
- Existing non-3D motion may remain if it is already part of the experience and does not alter layout, interfere with input, or reduce accessibility.
- Prefer small opacity/position transitions, gentle card lift, and brief pencil/red feedback over large transformations.
- Do not add scroll hijacking, continuous motion, cursor-following doodles, animated grain, or loading theatrics.
- Respect `prefers-reduced-motion: reduce` and retain normal scrolling and interaction.
- Keep native mobile scrolling and touch behavior reliable.

## 11. Layout and Responsive Behavior

The layout is explicitly **locked** for this redesign.

- Preserve the current max-width container, gutters, navbar height, section order, section spacing, grid columns, card proportions, alignment, and placement.
- Preserve existing breakpoints and mobile stacking rules.
- Do not copy the reference screenshot's two-column travel card layout.
- Do not introduce sidebars, new floating navigation, extra sections, or new fixed UI elements.
- Avoid decorative elements that expand the layout or cause content to shift.
- No horizontal overflow at mobile, tablet, laptop, or desktop widths.
- If a sketch decoration conflicts with readability at a smaller viewport, hide or simplify that decoration rather than moving the content.

## 12. Accessibility and Performance

- Preserve semantic HTML, keyboard access, labels, alt text, and visible focus.
- Maintain sufficient contrast on the light paper surfaces.
- Do not encode status or important meaning by color alone.
- Make decorative pencil art `aria-hidden="true"` and non-interactive.
- Keep textures and decorative assets lightweight and local.
- Avoid costly full-page filters, large images, repeated SVG filter effects, or canvas rendering.
- Keep screenshots and informative images free from overlays that reduce clarity.

## 13. Design Tokens and CSS Discipline

Centralize paper, ink, graphite, pencil-shadow, red-accent, and focus tokens in the existing variable system. Remove obsolete theme-specific and glass-specific tokens once no longer referenced.

Do not create a second CSS architecture or rewrite all stylesheets. Reuse existing global and component stylesheets. Keep selectors explicit and scoped; avoid broad overrides that unexpectedly affect unrelated controls.

## 14. Explicit Anti-Patterns

Do not introduce:

- Three.js, WebGL, React Three Fiber, Drei, or any 3D scene.
- Glassmorphism, blur panels, translucent glass cards, or frosted navigation.
- Multiple color themes, theme switching, or a theme selector.
- Neon gamer aesthetics, glowing red outlines on every resting component, or rainbow gradients.
- Excessive hand-drawn decoration, messy scribbles, or sketch fonts for body copy.
- A full-page screenshot or stock photo as the background.
- New sidebars, page sections, navigation elements, or content-grid changes.
- New dependencies solely for texture, border distortion, illustration, or animation.

## 15. Acceptance Criteria

The redesign is accepted when:

1. The page has a clear, warm paper texture and a coherent pencil-sketch visual language.
2. Cards, controls, navigation boundaries, and existing visible borders use subtle, irregular graphite strokes with restrained pencil shadows.
3. The Carbon identity is the only available theme; no theme selector or theme persistence remains.
4. The red accent and its restrained hover/focus glow are retained.
5. No 3D/WebGL scene or glassmorphism treatment remains.
6. The current portfolio layout, section order, component architecture, positioning, and responsive geometry are preserved.
7. Existing content, links, navigation, project modal behavior, and other interactions still work.
8. Text and project screenshots remain crisp and readable.
9. Mobile, tablet, laptop, and desktop layouts remain functional without horizontal overflow.
10. Reduced-motion and keyboard-focus behavior remain accessible.
11. `npm run build` passes, and the implementation agent reports exactly what was and was not verified.

---

## 16. Design Principle

> **The website should make the work memorable, not the website itself.**

The paper-and-pencil treatment is a visual material change, not a reason to change the portfolio's structure or make its content harder to read.
