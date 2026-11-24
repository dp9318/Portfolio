# AGENTS.md — Personal Engineering Portfolio

This repository contains Dipankar Kumar's personal engineering portfolio. The core idea is:

> **I learn what the problem needs and build it.**

The portfolio must remain honest, maintainable, responsive, and focused on real engineering work.

## 1. Read the project specifications

Before substantial work, read the relevant documents:

```text
docs/PRD.md
docs/DESIGN.md
docs/CONTENT.md
docs/ARCHITECTURE.md
docs/TECH_STACK.md
docs/DEVELOPMENT_RULES.md
ANTIGRAVITY_IMPLEMENTATION_BRIEF.md
```

`docs/DESIGN.md` version 2.0 defines the approved paper-and-pencil visual direction. The implementation brief defines the scope of the current redesign.

## 2. Instruction priority

Resolve conflicts using this order:

1. Explicit instruction from Dipankar in the current task.
2. `ANTIGRAVITY_IMPLEMENTATION_BRIEF.md` for the current redesign scope.
3. `docs/PRD.md` for product requirements.
4. `docs/DESIGN.md` for the current visual system.
5. `docs/CONTENT.md` for factual portfolio content.
6. `docs/ARCHITECTURE.md` for application structure.
7. `docs/TECH_STACK.md` for approved technologies.
8. `docs/DEVELOPMENT_RULES.md` for engineering practices.
9. Existing implementation details.

The old design document's glassmorphism, five-theme, and 3D instructions are superseded by `docs/DESIGN.md` v2.0. Do not follow those old visual instructions.

## 3. Current redesign: strict scope

This is a **visual redesign only**. Preserve the current page layout, architecture, section order, component boundaries, positioning, dimensions, grid structure, content, data model, navigation, modal behavior, links, and responsive behavior.

Remove:

- The `HeroScene` 3D/WebGL background and related scene styles.
- Three.js, React Three Fiber, Drei, and their type packages after confirming they are no longer used.
- Glassmorphism, backdrop blur, frosted surfaces, translucent cards, and glass-specific styling.
- Royal, Cyber, Mocha, and Emerald themes, the theme selector, and theme persistence.

Keep Carbon as the single permanent design identity, adapted to warm paper surfaces, graphite linework, pencil shadows, and the existing crimson accent/glow.

Do not introduce a new theme system, canvas/WebGL replacement, new layout, new sections, or a new design framework.

## 4. Preserve working functionality

Do not unnecessarily rewrite unrelated components. Inspect the current code before editing. Keep the smallest implementation that satisfies the visual brief. Preserve:

- The existing React/TypeScript/Vite foundation.
- The current section/component composition and data-driven content.
- Navigation, anchors, mobile menu, project filtering/selection if present, and project detail modal.
- Email, resume, GitHub, LinkedIn, and project links.
- Keyboard behavior, accessibility, and responsive breakpoints.

Non-3D motion libraries may remain only where they are already used and still serve a purpose. Do not add animation libraries. Remove only dependencies proven unused after the 3D/theme cleanup.

## 5. Content integrity

Use `docs/CONTENT.md` and current approved user-provided context for public profile content. Never invent or exaggerate experience, project status, contribution, technologies, metrics, awards, partnerships, or results. Clearly distinguish collaborative work from individual contribution. Do not change content during a visual-only task unless explicitly asked.

## 6. Engineering rules

- Use TypeScript consistently and avoid `any` without a justified reason.
- Reuse existing stylesheets, components, tokens, and project conventions.
- Centralize the new paper/graphite/Carbon tokens.
- Do not add dependencies for texture or sketch effects when CSS or small local SVG assets are sufficient.
- Keep decorative layers pointer-transparent and hidden from assistive technology.
- Preserve visible focus indicators and reduced-motion support.
- Verify mobile, tablet, laptop, and desktop behavior.
- Do not make the real content box rotate or shift to simulate sketchiness; apply any imperfection to a decorative border layer.
- Do not claim tests/builds passed unless they were actually run.

## 7. Required verification

Run at least:

```bash
npm run build
```

Run the repository lint command if available. Also inspect the changed page at mobile, tablet, laptop, and desktop sizes. Check navigation, links, project modal, mobile menu, keyboard focus, reduced-motion behavior, and browser console errors where practical.

## 8. Final report

Report briefly:

- What changed.
- Which 3D/theme/glass code and dependencies were removed.
- What layout and behavior were intentionally preserved.
- Build/lint and responsive checks actually completed.
- Any remaining issues or unverified behavior.

Do not describe an untested result as complete.
