# Design Specification
## Personal Engineering Portfolio

**Project:** Portfolio Build — Learn What the Problem Needs  
**Document:** Design Specification  
**Version:** 1.0  
**Status:** Approved for V1 implementation

---

## 1. Design Direction

The portfolio should use the approved **Picto-style portfolio design direction** as its primary visual reference, based on:

> https://khurramshafeeq.vercel.app/

The goal is **not to reproduce the reference site's content or identity**. The goal is to use its overall visual language as a starting point and adapt it to an engineering portfolio.

The resulting website should feel:

- Clean.
- Professional.
- Modern.
- Calm.
- Technical without looking sterile.
- Personal without becoming gimmicky.
- Easy to scan.
- Easy to maintain.

The portfolio is an **engineering portfolio, not a design showcase**. Visual design should support communication rather than compete with it.

---

## 2. Core Visual Principle

### Fluidity, 3D Depth, and Apple-Style Frosted Glass
The website utilizes a unified Apple VisionOS-inspired frosted glass (glassmorphism) architecture built over a persistent, viewport-locked 3D WebGL scene:
- **Global Fixed 3D Scene**: The WebGL canvas is locked across the entire viewport (`position: fixed; inset: 0; z-index: 0; pointer-events: none;`), rendering floating `#EAAA00` metallic and wireframe geometries with ambient `#3A0F34` lighting that reacts to both mouse parallax and window scroll progress.
- **Global Frosted Glass Veil**: A translucent `#3A0F34` tint overlay (`rgba(58, 15, 52, 0.55)`) with `backdrop-filter: blur(20px) saturate(160%)` diffuses the 3D scene softly behind all content.
- **Floating Glass Surfaces**: Navigation, project cards, experience items, skill groups, and modals float cleanly above the veil as elevated frosted glass panels (`background: linear-gradient(135deg, rgba(221, 227, 232, 0.05) 0%, rgba(58, 15, 52, 0.45) 100%), rgba(58, 15, 52, 0.45); backdrop-filter: blur(24px) saturate(180%); border: 1px solid rgba(221, 227, 232, 0.16); box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 0 0 rgba(221, 227, 232, 0.15)`).
- **Global Smooth Scroll**: Physics-based smooth scrolling via Lenis synchronized with the GSAP ticker.
- **Strict 3-Color Palette**: Deep Purple (`#3A0F34`), Light Grey-Blue (`#DDE3E8`), and Gold (`#EAAA00`).

Do not build the design around:
- Excessive opaque backgrounds that conceal the 3D depth layer.
- Unstructured neon gradients or artificial terminal interfaces.
- Unbounded 3D models that cause heavy frame drops or obstruct typography.

---

## 3. Design Goals

The visual design should help the visitor answer these questions quickly:

1. Who is Dipankar?
2. What does he build?
3. What has he actually built?
4. What is he currently learning or exploring?
5. How can I inspect his work or contact him?

The design should therefore prioritize:

- Typography and hierarchy.
- Whitespace.
- Clear section separation.
- Readable project information.
- Strong calls to action.
- Consistent spacing.
- Responsive behavior.
- Fast visual comprehension.

---

## 4. Overall Layout

The website should primarily use a **single-page portfolio structure** for V1.

The page should feel like a long, well-organized document rather than a sequence of unrelated screens.

Recommended order:

```text
Navigation
    ↓
Hero / Introduction
    ↓
About
    ↓
Selected Projects
    ↓
Experience / Education / Leadership
    ↓
Current Focus / Learning
    ↓
Skills / Capabilities
    ↓
Contact
    ↓
Footer
```

The exact ordering may be adjusted during implementation if user testing or content hierarchy suggests a better flow, but the page must remain straightforward.

---

## 5. Navigation

### Desktop

Use a compact top navigation inspired by the reference design.

Requirements:

- Simple horizontal navigation.
- Personal mark/name on the left.
- Section links on the right or center/right area.
- One clear primary action where appropriate.
- Navigation remains visually lightweight.
- Sticky navigation is allowed if it does not consume excessive space.

Suggested links:

```text
Home
About
Projects
Experience
Contact
```

GitHub and LinkedIn may appear as icon/text links in the navigation or hero rather than taking up multiple navigation slots.

### Mobile

Use a simple mobile navigation pattern.

Avoid oversized navigation panels or elaborate menu animations.

---

## 6. Hero Section

The hero is the most important visual area after navigation.

It should communicate identity immediately, not overwhelm the visitor with information.

### Required content

- Name.
- Professional positioning.
- Core philosophy.
- Short supporting sentence.
- Primary action(s).

The central statement should be visually dominant:

> **I learn what the problem needs and build it.**

This statement should feel like the portfolio's identity rather than a decorative slogan.

### Visual behavior

The hero should use strong typography and generous whitespace.

Avoid:

- Full-screen video backgrounds.
- Huge animated illustrations.
- Overly complex hero graphics.
- Generic stock imagery.

A small visual detail, subtle shape, technical accent, or understated graphic is acceptable if it supports the identity.

---

## 7. Typography

Typography should carry most of the visual hierarchy.

### Characteristics

Use a modern, highly readable sans-serif family.

Prioritize:

- Strong heading hierarchy.
- Comfortable paragraph width.
- Clear line height.
- Noticeable difference between heading and body text.
- Consistent font weights.

### Suggested hierarchy

```text
Display / Hero:     very large, bold
Section heading:    large, bold/semi-bold
Project title:      medium/large, semi-bold
Body:               comfortable regular size
Metadata:           small/medium, subdued
Labels:             small, medium/semi-bold
```

Do not use many different font families or decorative display fonts.

A single primary typeface with a restrained weight system is preferred.

---

## 8. 5-Preset Color Theme Architecture & Glass Surface Hierarchy

The portfolio implements a dynamic **5-Preset 3-Color Theme Architecture**. Each theme strictly uses all 3 of its assigned colors across frosted glass surfaces, typography/borders, interactive elements, and the live 3D WebGL background (`HeroScene.tsx`):

### 5 Curated Theme Presets

```text
1. 'royal' (Default):   #3A0F34 (Deep Purple)   + #DDE3E8 (Light Grey-Blue) + #EAAA00 (Regal Gold)
2. 'cyber':             #0A0A0A (Cyber Black)   + #007BA7 (Cerulean Cyan)   + #FF2D95 (Neon Pink)
3. 'mocha':             #6F4E37 (Warm Mocha)    + #E5E4E2 (Platinum Silver) + #E6E0F0 (Pale Lilac)
4. 'emerald':           #046A38 (Forest Emerald)+ #F9EBD7 (Antique Linen)   + #E34222 (Flame Orange)
5. 'carbon':            #2A2A2A (Carbon Charcoal)+ #C0C0C0 (Pure Silver)    + #E10600 (Crimson Red)
```

### Color Roles & Semantics Per Theme

Every theme triplet maps cleanly into 3 structural roles:

1. **Role 1: Base Background & Glass Tint (`--color-base` / `--color-background`)**:
   - Deep foundation color for the HTML `body` and ambient 3D scene lighting.
   - Tint base for the global frosted veil (`var(--veil-bg)`) and glass panel backgrounds (`var(--glass-bg)`).
   - In Royal: `#3A0F34` | Cyber: `#0A0A0A` | Mocha: `#6F4E37` | Emerald: `#046A38` | Carbon: `#2A2A2A`.

2. **Role 2: Primary Text, Glass Specular Borders & 3D Wireframes (`--color-secondary` / `--color-border-strong`)**:
   - Primary readable typography and card specular borders (`var(--glass-border)`).
   - 3D wireframe geometric meshes and secondary point light in the WebGL scene.
   - For Cyber and Carbon, high-contrast tints (`#EAF6FA` and `#F2F2F2`) ensure strict WCAG AAA readability against ultra-dark bases, while `#007BA7` and `#C0C0C0` remain prominent across glass borders, badges, subheadings, and 3D wireframe lines.
   - In Royal: `#DDE3E8` | Cyber: `#007BA7` (text: `#EAF6FA`) | Mocha: `#E5E4E2` | Emerald: `#F9EBD7` | Carbon: `#C0C0C0` (text: `#F2F2F2`).

3. **Role 3: Interactive Accents, Button Fills, Hover Glows & 3D Solids (`--color-accent`)**:
   - Primary button backgrounds, active nav links, hover states, selection, and focus rings.
   - Solid 3D geometric meshes (Torus Knot, Icosahedron, Octahedron) and primary directional key light.
   - Hover border glow on glass cards (`var(--glass-shadow-hover)` and `var(--color-btn-glow)`).
   - Button text (`--color-btn-primary-text`) is strictly contrasted against the accent fill (e.g., `#3A0F34` in Royal, `#0A0A0A` in Cyber, `#6F4E37` in Mocha, `#F9EBD7` in Emerald, `#FFFFFF` in Carbon) to satisfy WCAG AAA standards.
   - In Royal: `#EAAA00` | Cyber: `#FF2D95` | Mocha: `#E6E0F0` | Emerald: `#E34222` | Carbon: `#E10600`.

### Live 3D WebGL Background Reactivity

`HeroScene.tsx` dynamically subscribes to `useTheme()`. Whenever the theme changes:
- **Ambient & Rim Lights**: Dynamically set to the theme's **Base color** (`color={baseColor}`).
- **Wireframe Geometries & Secondary Point Light**: Dynamically set to the theme's **Secondary color** (`color={secondaryColor}`).
- **Solid Geometries, Directional Key Light & Center Glow**: Dynamically set to the theme's **Accent color** (`color={accentColor}`).
This guarantees that all 3 colors of the triplet are visibly alive in the background on every page.

### Navigation Theme Selector

`ThemeSelector.tsx` renders an Apple VisionOS frosted glass pill button:
- Displays a 3-color swatch cluster representing the active theme's `base`, `secondary`, and `accent` colors.
- Clicking the pill opens a keyboard-accessible glass popover (`role="menu"`) previewing all 5 presets with instant one-click switching.
- Persists user selection to `localStorage` under `'portfolio-color-theme'` and synchronizes `document.documentElement.setAttribute('data-theme', theme)` and `<meta name="theme-color">`.

---

## 9. Spacing and Whitespace

Whitespace is a major part of the design.

Sections should have enough vertical separation to feel distinct without making the page unnecessarily long.

Use a consistent spacing scale throughout the application.

Prefer a predictable progression such as:

```text
Small gap       → related content
Medium gap      → component separation
Large gap       → section separation
Extra-large     → major page transition
```

Avoid arbitrary margins and one-off spacing values whenever possible.

---

## 10. Content Width and Grid

Use a centered content container with a comfortable maximum width.

The layout should feel similar to a modern editorial or portfolio grid rather than a full-width dashboard.

Recommended principles:

- Keep large text from becoming excessively wide.
- Use a consistent left/right page margin.
- Use a responsive multi-column grid for project cards.
- Collapse gracefully on tablets and mobile devices.

A roughly 1100–1200px desktop content width is appropriate, but implementation may adjust this slightly based on the chosen CSS system.

---

## 11. Sections

## 11.1 About

The About section should be compact and readable.

Do not create a large wall of biography text.

Use:

- Short paragraphs.
- Clear subheadings where useful.
- Small supporting metadata when helpful.

The visual style should make the section feel approachable while remaining professional.

---

## 11.2 Projects

Projects are the **primary visual focus of the portfolio**.

The project section should borrow the reference site's clean card/grid approach but adapt it to software projects.

Each project card should provide:

- Project name.
- Short problem/solution-oriented description.
- Technology/category metadata.
- Status where relevant.
- Visual preview if available.
- A clear interaction for viewing more details.

### Project card principles

Cards should not become miniature resumes.

The card should answer:

> What is this, and why should I look at it?

Then a project detail view/page can contain the deeper explanation.

### Project status

Use subtle status labels such as:

```text
Completed
Ongoing
Prototype
Experimental
Learning
```

Do not make status labels visually louder than the project itself.

---

## 11.3 Experience / Education / Leadership

Use a simple timeline, stacked entry list, or clean two-column layout.

Avoid overly decorative timelines.

Each entry should prioritize:

- Organization.
- Role.
- Dates.
- Concise description.
- Meaningful responsibilities or outcomes.

The design should make scanning easy.

---

## 11.4 Current Focus / Learning

This section should visually communicate that the portfolio is evolving.

It can use a compact list or small cards for current areas such as:

```text
Currently building
Currently learning
Currently exploring
```

The design must distinguish current exploration from established professional experience.

---

## 11.5 Skills / Capabilities

Skills should not dominate the page.

Avoid large walls of technology badges.

Prefer grouped, readable categories such as:

```text
Programming
Software Development
Data & Analytics
AI / ML
Databases
Tools
```

Technology names should be presented as supporting information, not as the primary visual identity.

---

## 11.6 Contact

The contact section should be simple and obvious.

Prioritize:

- Email.
- GitHub.
- LinkedIn.
- Resume.

A functional contact form may be added later, but V1 does not require a backend-powered form.

Avoid making the user complete unnecessary fields just to reach the owner.

---

## 12. Buttons and Links

Buttons should be visually simple and consistent.

Use a clear hierarchy:

### Primary

For the most important action, such as:

- View projects.
- Contact me.
- View resume.

### Secondary

For supporting actions, such as:

- GitHub.
- Live demo.
- Read more.

### Text links

Use for low-priority navigation or inline references.

Buttons should have:

- Clear labels.
- Comfortable click targets.
- Obvious hover/focus states.
- Consistent border radius.
- No unnecessary visual effects.

---

## 13. Cards & Glass Panels

Cards and interactive containers follow an **Apple VisionOS-style frosted glass panel** architecture:

### Panel Specifications:
- **Background**: Translucent deep purple gradient `linear-gradient(135deg, rgba(221, 227, 232, 0.05) 0%, rgba(58, 15, 52, 0.45) 100%), rgba(58, 15, 52, 0.45)`
- **Backdrop Filter**: `blur(24px) saturate(180%)` (with `-webkit-backdrop-filter` prefix)
- **Specular Border**: `1px solid rgba(221, 227, 232, 0.16)`
- **Inner Highlight & Shadow**: `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.35), inset 0 1px 0 0 rgba(221, 227, 232, 0.15)`
- **Hover State**: Gentle float-up (`transform: translateY(-4px to -6px)`), specular gold border transition (`border-color: #EAAA00`), and gold outer glow (`box-shadow: 0 16px 36px -10px rgba(18, 2, 16, 0.75), 0 0 24px rgba(234, 170, 0, 0.3), inset 0 1px 0 0 rgba(234, 170, 0, 0.35)`)

### Scope of Glass Panels:
- Selected Projects (`.project-card`)
- Experience Timeline entries (`.experience-entry`)
- Skill Groups (`.skill-group`)
- Education entries (`.education-entry`)
- Primary Contact CTA (`.contact-primary`)
- Sticky Navigation header (`.navbar`) and Mobile Drawer (`.mobile-menu`)
- Project Detail Dialog (`.modal`)

Avoid:
- Completely opaque surface backgrounds that occlude the background 3D depth layer.
- Overly strong, muddy shadows that reduce contrast.
- Rainbow border gradients that violate the 3-color palette.

---

## 14. Imagery

Images should serve a purpose.

Preferred imagery:

- Screenshots of real applications.
- Project interfaces.
- Architecture diagrams where useful.
- Relevant technical visuals.

Avoid generic developer stock images.

Project screenshots should be displayed consistently and should not be stretched or distorted.

Images should have appropriate `alt` text.

---

## 15. Animation, 3D, and Interaction

Animation should be **fluid, cinematic, and deeply responsive**.

### Motion & Physics Stack:
- **Global Smooth Scroll**: Powered by `lenis` (`SmoothScrollProvider` in `src/components/motion/SmoothScroll.tsx`) synchronized with the GSAP ticker. Preserves native mobile touch functionality (`touchMultiplier: 1.5`).
- **Scroll Animations**: `gsap` + `ScrollTrigger` for project cards and experience timeline reveals, subtle scale-up, and parallax shifts as they enter the viewport.
- **Micro-Interactions & Entrances**: `framer-motion` for staggered hero float-up entrances and magnetic cursor pull (`src/components/motion/Magnetic.tsx`) with `#EAAA00` gold active hover states.
- **Persistent Global 3D WebGL Layer**: Built with `three`, `@react-three/fiber`, and `@react-three/drei` in `src/sections/Hero/HeroScene.tsx`, mounted at the root level in `src/App.tsx`. Renders floating metallic and wireframe geometric shapes (`#EAAA00` materials with soft emissive glow, `#3A0F34` ambient and rim lighting). The 3D scene responds smoothly to cursor position and scroll progression (`window.scrollY`).
- **Global Frosted Veil**: `.global-glass-veil` sits directly over the 3D canvas with `position: fixed; inset: 0; pointer-events: none; z-index: 0; background: rgba(58, 15, 52, 0.55); backdrop-filter: blur(20px) saturate(160%);`, diffusing the gold 3D shapes across the entire page background.

### Performance and Accessibility Constraints:
- Global 3D WebGL canvas must sit securely in the background (`position: fixed; inset: 0; z-index: 0; pointer-events: none;`) with all content floating on top in `.app-wrapper` (`position: relative; z-index: 1;`).
- WebGL must be wrapped in an ErrorBoundary (`WebGLErrorBoundary`) with graceful CSS fallback if WebGL fails to initialize.
- Native mouse-wheel and touch scrolling within modals is strictly preserved using `data-lenis-prevent="true"`, `overscroll-behavior: contain`, and bounded `max-height: 85vh`.
- Strictly respect `prefers-reduced-motion: reduce` by disabling smooth scroll and animations, keeping the layout accessible and functional.

---

## 16. Responsive Design

The design must work cleanly across:

- Large desktop.
- Standard laptop.
- Tablet.
- Mobile phone.

Responsive behavior should be designed intentionally rather than simply shrinking the desktop layout.

### Desktop

Use the full grid and spacious composition.

### Tablet

Reduce column counts and horizontal spacing while preserving hierarchy.

### Mobile

Prioritize:

- Readability.
- Large tap targets.
- Simple navigation.
- One-column content flow.
- Proper image sizing.
- No horizontal scrolling.

The mobile experience is a first-class layout, not an afterthought.

---

## 17. Accessibility

Accessibility is part of the design requirements.

The implementation should include:

- Semantic HTML where applicable.
- Keyboard navigation.
- Visible focus states.
- Adequate color contrast.
- Descriptive link labels.
- Alternative text for meaningful images.
- Respect for reduced-motion preferences.
- Appropriate heading hierarchy.

Do not sacrifice readability for visual minimalism.

---

## 18. Performance Philosophy

The website should feel fast and lightweight.

Design decisions should avoid unnecessary performance costs.

Prefer:

- Optimized images.
- Limited client-side effects.
- Small dependency footprint.
- Lazy loading where appropriate.
- Simple CSS transitions.

Avoid loading large libraries solely for small decorative effects.

---

## 19. Content Tone

The visual design must support a tone that is:

- Confident but not arrogant.
- Technical but understandable.
- Honest.
- Curious.
- Personal but professional.
- Growth-oriented.

Avoid marketing-heavy language such as:

- "World-class developer."
- "10x engineer."
- "Expert in everything."
- Unsupported performance claims.

The design should leave enough space for real evidence to speak for itself.

---

## 20. What the Design Should NOT Become

The implementation must not drift into a generic developer portfolio aesthetic.

Avoid patterns such as:

- Neon green + black hacker themes.
- Terminal-as-hero layouts.
- Endless skill badges.
- GitHub contribution walls as the main content.
- Generic AI imagery.
- Excessive typing animations.
- Fake system dashboards.
- 3D developer avatars.
- Decorative code blocks without purpose.
- Huge collections of technology logos.

Technical identity should come from **real projects and content**, not decoration.

---

## 21. Reference-to-Implementation Rule

Use the approved reference design for **visual direction**, not literal copying.

### Preserve the general feel

- Clean portfolio layout.
- Strong typography.
- Generous whitespace.
- Clear navigation.
- Structured project grid.
- Simple CTA treatment.
- Responsive composition.
- Professional visual rhythm.

### Change the content model

The portfolio must be redesigned around:

- Software engineering.
- Applications built.
- Technical projects.
- Engineering decisions.
- Learning and experimentation.
- Professional growth.

Do not copy:

- The reference site's copy.
- Its personal branding.
- Its service descriptions.
- Its testimonials.
- Its client statistics.
- Its placeholder content.
- Any unrelated freelancer-oriented sections.

---

## 22. V1 Visual Priority

When trade-offs are necessary, use this priority order:

```text
1. Readability
2. Navigation / usability
3. Project presentation
4. Responsive behavior
5. Accessibility
6. Consistent spacing and typography
7. Subtle visual polish
8. Decorative effects
```

Decorative effects must never outrank content clarity or functionality.

---

## 23. V1 Design Acceptance Criteria

The design is successful when:

- The visitor understands who Dipankar is within a few seconds.
- The core philosophy is immediately visible.
- Projects are the strongest evidence of capability.
- The site does not feel overloaded.
- The site does not look like a generic developer template.
- The site looks professional without pretending to be a design showcase.
- Navigation is obvious.
- Every major section has clear hierarchy.
- The site remains comfortable to read on mobile.
- Animations are subtle rather than distracting.
- New projects can be added without breaking the visual system.
- The final implementation feels like an engineer's portfolio rather than a marketing landing page.

---

## 24. Design North Star

When a design decision is unclear, return to this principle:

> **The website should make the work memorable, not the website itself.**

The design exists to make Dipankar's engineering work easier to understand, explore, and trust.