# Development Rules
## Personal Engineering Portfolio — Dipankar Kumar

**Document:** DEVELOPMENT_RULES.md  
**Version:** 1.0  
**Status:** V1 development rules

This document defines how the portfolio should be developed, modified, reviewed, and extended.

These rules apply to human contributors and especially to AI coding agents such as OpenCode.

The goal is to keep the project simple, honest, maintainable, and aligned with the approved product, design, content, architecture, and technology decisions.

---

# 1. Source-of-Truth Hierarchy

Before making a significant implementation decision, consult the project documents.

Use this priority order:

```text
1. Explicit instruction from Dipankar
2. PRD.md
3. DESIGN.md
4. CONTENT.md
5. ARCHITECTURE.md
6. TECH_STACK.md
7. DEVELOPMENT_RULES.md
8. Existing implementation details
```

When two documents appear inconsistent, do not silently choose one.

Identify the conflict and resolve it using the hierarchy above.

---

# 2. Read Before You Build

Before beginning a substantial task, the agent must understand:

- `PRD.md`
- `DESIGN.md`
- `CONTENT.md`
- `ARCHITECTURE.md`
- `TECH_STACK.md`
- `DEVELOPMENT_RULES.md`

For a small isolated change, only the relevant documents may need to be revisited, but their constraints still apply.

Do not start by blindly editing files.

---

# 3. Ask Before Major Architectural Changes

Do not make major architecture changes without approval.

Examples include:

- Introducing a backend
- Changing React to another frontend framework
- Introducing Next.js
- Introducing a database
- Adding an authentication system
- Replacing the styling strategy
- Adding a CMS
- Adding a major state-management library
- Rewriting the project structure
- Adding a complex animation framework
- Replacing the deployment strategy

For such changes, first explain:

```text
What is changing?
Why is it needed?
What problem does it solve?
What does it add?
What does it make more complex?
```

Wait for approval before implementing the architectural change.

---

# 4. Do Not Over-Engineer

The portfolio is intentionally a relatively simple website.

Do not:

- Create abstractions for one-time markup.
- Build a generic framework inside the portfolio.
- Introduce a library for a task that CSS or React already handles.
- Create backend infrastructure without a real requirement.
- Create complex state management for static content.
- Turn simple content rendering into an unnecessarily generic system.

Prefer the simplest implementation that satisfies the requirement.

---

# 5. Preserve Working Functionality

When making a change:

- Do not unnecessarily rewrite unrelated components.
- Do not remove working features merely to simplify code.
- Do not alter existing behavior without a reason.
- Keep unrelated diffs small.

A change should solve the requested problem without creating new problems elsewhere.

---

# 6. No Fabricated Content

This is one of the highest-priority rules.

Never invent:

- Experience
- Job titles
- Client names
- Project features
- Project results
- Performance metrics
- User counts
- Awards
- Rankings
- Certifications
- Technologies
- Testimonials
- Partnerships
- Revenue
- Deployment claims
- Production status
- Years of experience

When information is missing:

```text
Use the information that is verified.
Otherwise omit it.
```

Do not fill gaps creatively.

---

# 7. Maintain Honest Skill Representation

The portfolio must distinguish between:

```text
Current / defensible skills
Currently learning
Previously used
Experimental work
```

Do not turn every technology appearing in a repository into a claimed professional skill.

Do not use seniority language unsupported by actual experience.

Avoid phrases such as:

- Expert
- Master
- Senior
- Industry-leading
- Highly experienced
- Full-stack expert
- Machine learning specialist

unless explicitly supported by evidence and approved.

---

# 8. Project Attribution

Every project must represent Dipankar's actual contribution accurately.

For collaborative projects:

- Clearly describe the project as collaborative.
- Clearly identify Dipankar's contribution.
- Do not claim ownership of work performed by teammates.
- Do not remove the collaborative context merely to make the project sound stronger.

This rule is particularly important for LMS-OC.

---

# 9. Project Status Must Be Accurate

Allowed status categories include:

```text
Completed
In Progress
Prototype
Experimental
Learning
Archived
```

Do not label an unfinished project as completed.

Do not imply production readiness if the project is still experimental.

Do not hide major limitations merely because they make the project look less polished.

---

# 10. Content Before Code

When adding or modifying portfolio information:

1. Update `CONTENT.md`.
2. Add or update the structured data source.
3. Render the information through existing components.

Do not permanently bury new portfolio information inside JSX/TSX when it belongs to structured content.

The content document and project data should remain conceptually synchronized.

---

# 11. Data-Driven Projects

Projects should remain data-driven.

A project card should consume project data rather than contain its own hardcoded project structure.

Preferred pattern:

```text
projects.ts
    ↓
ProjectGrid
    ↓
ProjectCard
```

Not:

```text
ProjectsSection
    ↓
Large block of repeated hardcoded cards
```

Adding a project should normally involve:

```text
1. Add project data
2. Add assets if needed
3. Confirm it appears correctly
```

not rewriting the section component.

---

# 12. Component Design

Create a new component when it:

- Is reused.
- Has meaningful independent behavior.
- Represents a distinct UI concept.
- Improves readability.
- Has its own meaningful state.

Do not create a component simply because a block of HTML exists.

Avoid unnecessary fragmentation such as:

```text
TinyText.tsx
TinyLabel.tsx
TinyIcon.tsx
TinyWrapper.tsx
```

unless there is a genuine reuse reason.

---

# 13. Naming

Use clear, descriptive names.

Examples:

```text
ProjectCard
ProjectGrid
ExperienceSection
SectionHeading
SocialLinks
MobileMenu
```

Avoid vague names such as:

```text
Thing
Box
Stuff
Component1
Section2
NewCard
```

Use consistent naming across files, components, data, and CSS.

---

# 14. TypeScript Rules

Use TypeScript consistently.

Prefer explicit interfaces/types for shared data models.

Avoid using:

```ts
any
```

unless there is a documented reason.

Do not silence TypeScript errors simply to make the build pass.

Fix the underlying issue when practical.

Do not cast values blindly just to bypass type checking.

---

# 15. CSS Rules

Follow the approved design system in `DESIGN.md`.

Prefer:

- CSS variables
- reusable classes
- meaningful naming
- responsive layout rules
- component-local styles where appropriate
- standard layout primitives

Avoid:

- arbitrary magic numbers everywhere
- duplicated style rules
- excessive inline styles
- `!important` except when genuinely necessary
- viewport-specific hacks
- styling based on accidental DOM structure

When a value is part of the design system, centralize it.

---

# 16. Responsive Development

Do not build desktop first and "fix mobile later" as a separate cleanup stage.

Check responsive behavior while implementing each major component.

At minimum verify:

```text
Mobile
Tablet
Laptop
Desktop
```

Look for:

- text overflow
- broken grids
- navigation issues
- inaccessible controls
- oversized spacing
- images stretching
- unexpected horizontal scrolling

No horizontal page scrolling should exist unless explicitly intended.

---

# 17. Accessibility Rules

Accessibility is part of implementation, not an optional polish task.

Use:

- Semantic elements.
- Correct heading order.
- Real buttons for actions.
- Real links for navigation.
- Keyboard-accessible controls.
- Visible focus states.
- Appropriate alt text.
- Meaningful labels.
- Logical tab order.

Do not use:

```text
<div onClick=...>
```

when a button or link is appropriate.

Do not hide important information behind hover-only interactions.

---

# 18. Animation Rules

Animation should support the interface.

Use animation to communicate:

- Hover interaction
- Focus
- State change
- Navigation
- Subtle appearance

Avoid animation that exists solely to impress.

Do not add:

- Full-page scroll hijacking
- Excessive parallax
- Continuous distracting motion
- Long loading animations
- Large animated backgrounds

Respect reduced-motion preferences where applicable.

---

# 19. Dependency Rules

Before installing a package, ask:

1. Is it required?
2. Can React or CSS solve this cleanly?
3. Does it materially reduce complexity?
4. Is the dependency actively maintained?
5. Does it create unnecessary long-term cost?

Do not install libraries merely because they are common in portfolio tutorials.

Do not install multiple libraries that solve the same problem.

---

# 20. No Unrequested Technology Drift

Do not spontaneously introduce:

- Next.js
- Tailwind
- Framer Motion
- GSAP
- Three.js
- Firebase
- Supabase
- Express
- Redux
- CMS platforms
- animation libraries
- UI component libraries

unless an explicit requirement justifies them and the change is approved.

---

# 21. External Links

Before adding an external link:

- Verify the URL.
- Store it in the appropriate data/config location.
- Make sure it is not duplicated unnecessarily.
- Ensure the UI behaves correctly when the value is absent.

Never invent URLs.

---

# 22. Privacy and Security

Never expose sensitive information.

Do not commit:

- passwords
- API keys
- private tokens
- credentials
- secrets
- `.env` values containing secrets
- private project data
- private personal information

The public portfolio should contain only information intentionally approved for public display.

---

# 23. Git Hygiene

Keep commits focused.

Avoid committing:

- `node_modules`
- build output
- temporary files
- editor caches
- operating-system metadata
- generated files that should be ignored
- unrelated assets

Use meaningful commit messages.

Example:

```text
feat: add project data model
feat: add projects section
style: refine project card layout
fix: correct mobile navigation
```

Do not mix unrelated changes into a single implementation commit when avoidable.

---

# 24. Modification Workflow

For a normal implementation task:

```text
Understand task
      ↓
Inspect relevant files
      ↓
Check project docs
      ↓
Plan smallest appropriate change
      ↓
Implement
      ↓
Run checks/build
      ↓
Inspect result
      ↓
Fix issues
      ↓
Report what changed
```

Do not claim success before verification.

---

# 25. Verification Requirements

Before declaring a meaningful task complete, verify as appropriate:

### Functional

- Application starts.
- Navigation works.
- Buttons work.
- Links work.
- Project content renders.
- Optional fields do not create broken UI.

### Visual

- Desktop layout.
- Mobile layout.
- Spacing.
- Typography.
- Images.
- Hover/focus states.

### Build

Run the production build.

At minimum:

```bash
npm run build
```

If a linter/typecheck exists, run it as well.

---

# 26. Debugging Rules

When something fails:

1. Reproduce the issue.
2. Identify the actual cause.
3. Make the smallest reasonable fix.
4. Re-run the relevant check.
5. Verify that the fix did not break an unrelated feature.

Do not repeatedly patch symptoms without understanding the root cause.

---

# 27. Do Not Fake Verification

Never say:

```text
"Everything works"
```

unless it was actually tested.

Never claim:

- Mobile was tested when it was not.
- A link works when it was not checked.
- A deployment succeeded when it was not verified.
- A project feature works when it was not tested.

State limitations clearly.

---

# 28. Working With OpenCode

OpenCode should behave as an implementation agent, not as the product owner.

It should:

- Read the project documents.
- Inspect the existing code.
- Make evidence-based changes.
- Preserve project intent.
- Explain important tradeoffs.
- Avoid unnecessary scope expansion.
- Verify its work.

It should not:

- Invent requirements.
- Redesign the site without approval.
- Add random libraries.
- Rewrite the application because a different architecture is fashionable.
- Manufacture portfolio content.
- Mark unfinished work as complete.

---

# 29. Task Boundaries

When a task says:

> "Fix the navbar"

do not simultaneously:

- redesign the footer
- change the color system
- replace the routing architecture
- add animations
- rewrite the project section

unless those changes are required for the fix.

Scope creep should be avoided.

---

# 30. When Requirements Are Ambiguous

If ambiguity materially affects the result:

1. Identify the ambiguity.
2. Check the project documents.
3. Make the smallest safe assumption when reasonable.
4. Ask Dipankar when the choice would meaningfully affect design, architecture, privacy, or project direction.

Do not silently make a large product decision.

---

# 31. Documentation Changes

When implementation changes make a project document inaccurate, update the relevant document.

Examples:

- New architecture → update `ARCHITECTURE.md`
- New technology → update `TECH_STACK.md`
- New content model → update `CONTENT.md`
- New design rule → update `DESIGN.md`
- New product behavior → update `PRD.md`

Documentation should describe the actual project rather than an outdated ideal.

---

# 32. Keep V1 Honest

V1 is allowed to be simple.

Do not add fake sophistication to make the portfolio appear more advanced.

The following are acceptable:

- Simple project cards
- Straightforward navigation
- Static data
- CSS animations
- A small number of pages
- A small technology stack

A simple working portfolio is better than a complicated unfinished one.

---

# 33. The Portfolio Is Itself a Project

The portfolio should follow the same engineering principle it communicates:

> **Learn the problem needs, then build it.**

The implementation should demonstrate:

- Good engineering judgment
- Practical scope control
- Honest documentation
- Maintainability
- Iterative development
- Willingness to learn

The portfolio does not need to prove expertise in every modern web technology.

Its job is to clearly demonstrate how Dipankar approaches building software.

---

# 34. Definition of Done

A task is considered complete when:

- The requested behavior is implemented.
- Existing functionality is preserved.
- The implementation follows the project documents.
- The code is reasonably maintainable.
- Responsive behavior is verified.
- Accessibility basics are preserved.
- The relevant build/checks pass.
- No fabricated content or unsupported claims were introduced.
- Any necessary documentation is updated.

If any of these are intentionally incomplete, state that explicitly instead of silently treating the task as finished.
