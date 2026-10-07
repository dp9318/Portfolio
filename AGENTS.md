# AGENTS.md
## OpenCode Instructions — Personal Engineering Portfolio

This file defines how OpenCode should operate when working on this repository.

The portfolio specification is distributed across the documents in `docs/`. Do not treat the source code alone as the complete specification.

---

# 1. Project Context

This repository contains Dipankar Kumar's personal engineering portfolio.

The core idea is:

> **I learn what the problem needs and build it.**

The portfolio should communicate practical software engineering ability, application development, learning agility, and real project experience.

It must remain honest, maintainable, and intentionally simple.

---

# 2. Required Project Documents

Before making a substantial change, read:

```text
docs/PRD.md
docs/DESIGN.md
docs/CONTENT.md
docs/ARCHITECTURE.md
docs/TECH_STACK.md
docs/DEVELOPMENT_RULES.md
```

These documents collectively define:

- Product requirements
- Visual design
- Approved content
- Application architecture
- Technology choices
- Development rules

Do not ignore these documents in favor of personal assumptions or generic portfolio patterns.

---

# 3. Instruction Priority

Resolve requirements using this order:

```text
1. Explicit instruction from Dipankar
2. docs/PRD.md
3. docs/DESIGN.md
4. docs/CONTENT.md
5. docs/ARCHITECTURE.md
6. docs/TECH_STACK.md
7. docs/DEVELOPMENT_RULES.md
8. Existing implementation
```

If two sources conflict, do not silently choose one when the conflict affects product direction, architecture, privacy, or public claims.

Explain the conflict and ask for clarification when necessary.

---

# 4. Before Starting a Task

For every meaningful implementation task:

1. Read the relevant project documents.
2. Inspect the existing repository and affected files.
3. Understand the current implementation before changing it.
4. Identify the smallest change that satisfies the request.
5. Implement only the required scope.
6. Verify the result.

Do not immediately rewrite files without inspecting them.

---

# 5. Planning vs Implementation

For small changes, a short internal plan is sufficient.

For substantial work:

1. Summarize the requirement.
2. Identify affected areas.
3. Identify any ambiguity or architectural risk.
4. Propose an implementation approach.
5. Implement after the approach is consistent with the project specification.

Do not turn every small task into a large planning exercise.

---

# 6. Ask Before Major Changes

Stop and ask Dipankar before making a major architectural or product-direction change.

Examples:

- Replacing React with another framework
- Introducing Next.js
- Adding a backend
- Adding a database
- Adding authentication
- Adding a CMS
- Replacing CSS with a major styling framework
- Adding a global state library
- Introducing a major animation framework
- Changing the deployment model
- Reorganizing the entire codebase
- Adding a major product feature not specified in the PRD

Explain:

```text
What:
Why:
Impact:
Trade-offs:
```

Do not make these decisions unilaterally.

---

# 7. Keep the Scope Small

The current goal is a simple, professional engineering portfolio.

Do not expand a task because another idea seems interesting.

For example, a request to improve project cards does not automatically authorize:

- A new routing system
- A new animation library
- A backend
- A CMS
- A redesign of unrelated sections

Complete the requested work first.

---

# 8. Content Integrity

Portfolio content is highly sensitive to accuracy.

Never invent or exaggerate:

- Experience
- Job titles
- Employers
- Clients
- Project ownership
- Project features
- Project results
- Awards
- Rankings
- Metrics
- Technologies
- Certifications
- Testimonials
- Production status
- Years of experience

Use `docs/CONTENT.md` as the source of truth for public profile information.

When information is missing, omit it or ask for it.

Do not "fill in the blanks" creatively.

---

# 9. Project Attribution

Respect actual ownership and contribution.

Especially for collaborative projects such as LMS-OC:

- Do not imply sole authorship.
- Distinguish Dipankar's contribution from team-level work.
- Do not claim features that have not been verified.

For projects primarily built by Dipankar, describe his direct contribution accurately.

---

# 10. Skills and Career Positioning

The portfolio should represent Dipankar as an early-career software engineer focused primarily on:

1. Software engineering
2. Application development
3. Learning / adaptability
4. Data / analytics
5. Academic background
6. Leadership
7. Machine learning exploration

Do not reposition him as a machine-learning specialist, senior engineer, or expert across all technologies simply because those technologies appear somewhere in the repository.

---

# 11. Technology Discipline

Follow `docs/TECH_STACK.md`.

Do not introduce new libraries or technologies casually.

Before adding a dependency, check:

- Is it actually required?
- Can React/CSS/browser capabilities already solve it?
- Does it materially simplify the problem?
- Does it violate the approved stack?
- Does it introduce unnecessary complexity?

When a new dependency or technology would materially change the stack, ask first.

---

# 12. Content/Data Architecture

Keep portfolio content separate from UI whenever practical.

Projects, experience, education, skills, and profile links should live in structured data.

Prefer:

```text
Content/Data
    ↓
Reusable Components
    ↓
Sections
    ↓
Page
```

Avoid placing large amounts of portfolio copy directly inside repeated JSX/TSX markup.

When adding a project:

1. Update `docs/CONTENT.md` when appropriate.
2. Add/update structured project data.
3. Add required assets.
4. Verify the project renders correctly.

---

# 13. Design Discipline

Follow `docs/DESIGN.md`.

The approved design direction is a clean, simple, professional portfolio inspired by the selected Picto-style reference.

Do not transform it into:

- A flashy developer template
- A 3D/WebGL showcase
- An animation demo
- A visual-design portfolio
- A generic AI-themed landing page

The website should make the **engineering work** memorable, not the interface itself.

---

# 14. Architecture Discipline

Follow `docs/ARCHITECTURE.md`.

Prefer:

- Reusable components
- Data-driven content
- Simple state
- Clear file structure
- Static rendering where practical
- Minimal abstractions

Avoid premature complexity.

A new project should ideally be addable by updating content/data and assets rather than rewriting the Projects section.

---

# 15. React / TypeScript Rules

Use TypeScript consistently.

Prefer:

- Typed props
- Typed data models
- Clear component names
- Strict type checking
- Small focused components

Avoid:

```ts
any
```

unless genuinely necessary and justified.

Do not suppress TypeScript errors just to make the build pass.

---

# 16. Responsive Implementation

Responsive behavior is part of the implementation.

Check every substantial UI change across:

```text
Mobile
Tablet
Laptop
Desktop
```

Look for:

- Overflow
- Broken grids
- Navigation issues
- Text wrapping
- Image problems
- Touch targets
- Unexpected horizontal scrolling

Do not postpone all mobile work until the end.

---

# 17. Accessibility

Preserve basic accessibility in every component.

Use:

- Semantic HTML
- Correct headings
- Real buttons for actions
- Real links for navigation
- Keyboard-accessible interactions
- Visible focus states
- Meaningful alt text
- Appropriate labels

Do not create inaccessible interaction patterns for the sake of visual design.

---

# 18. Verification

Never claim a task is complete without appropriate verification.

At minimum, for meaningful changes:

```bash
npm run build
```

Also verify relevant behavior such as:

- Navigation
- Links
- Email CTA
- Resume CTA
- Project rendering
- Responsive layout
- Optional fields
- Interaction states

If something could not be tested, say so.

Do not pretend that untested functionality works.

---

# 19. Debugging

When something fails:

1. Reproduce it.
2. Inspect the relevant code.
3. Identify the root cause.
4. Make the smallest reasonable fix.
5. Re-run the relevant verification.
6. Check for regressions.

Do not stack random patches on top of each other without understanding the cause.

---

# 20. Preserve Existing Work

When modifying the project:

- Keep unrelated functionality intact.
- Avoid rewriting working components without reason.
- Keep diffs focused.
- Do not delete useful code merely because a different implementation is possible.

Existing code should be treated as intentional unless there is evidence otherwise.

---

# 21. No Scope Creep

If a task is:

> Fix the mobile navigation.

Do not automatically:

- Redesign the hero
- Change typography
- Replace the CSS system
- Rework project cards
- Add a theme system

unless required by the task.

Finish the requested work first.

---

# 22. Documentation Synchronization

When an implementation decision changes project behavior or constraints, update the appropriate document.

Examples:

```text
New product behavior      → docs/PRD.md
New visual rule           → docs/DESIGN.md
New portfolio information → docs/CONTENT.md
New architecture          → docs/ARCHITECTURE.md
New technology            → docs/TECH_STACK.md
New engineering rule      → docs/DEVELOPMENT_RULES.md
```

Do not allow the documentation to drift significantly from the actual application.

---

# 23. Privacy

The public site must not expose sensitive personal information.

Never publish:

- Phone number
- Home address
- Exact residential location
- Private family information
- Passwords
- API keys
- Tokens
- Private project information
- Private repository information
- Other non-public personal data

Use only intentionally approved public information.

---

# 24. Git and Repository Hygiene

Keep the repository clean.

Do not commit:

- `node_modules`
- Build output
- Temporary files
- Editor caches
- Local secrets
- Unrelated datasets
- Large raw project assets

Use meaningful commits when committing changes.

Example:

```text
feat: add project data model
feat: build projects section
style: refine responsive project cards
fix: repair mobile navigation
```

---

# 25. Working With Existing Tools

Use the existing repository and project tooling before introducing replacements.

Do not replace:

- Build tools
- Linters
- Formatters
- Package managers
- Deployment configuration

unless there is a concrete reason.

---

# 26. When Requirements Are Ambiguous

Use this sequence:

```text
Check the docs
    ↓
Inspect existing implementation
    ↓
Make the smallest reasonable assumption
    ↓
Ask Dipankar if the decision materially affects the project
```

Do not ask unnecessary questions about trivial implementation details.

Do ask when ambiguity affects:

- Public claims
- Privacy
- Architecture
- Technology choice
- Major design direction
- Project attribution

---

# 27. Implementation Style

Prefer code that is:

- Readable
- Explicit
- Easy to debug
- Easy to modify
- Appropriate for a student/developer learning web engineering

Do not optimize prematurely.

Do not write excessively clever code.

Clarity is more valuable than abstraction for this project.

---

# 28. Final Response After a Task

After completing a task, report briefly:

```text
What changed
What was verified
Any limitations
Any files/docs updated
```

Do not provide a long explanation unless requested.

If something remains unfinished, state it explicitly.

---

# 29. Definition of Done

A task is done when:

- The requested behavior exists.
- The implementation follows the project documents.
- Existing functionality remains intact.
- The code is reasonably maintainable.
- Responsive behavior is checked.
- Accessibility basics remain intact.
- Appropriate builds/checks pass.
- No fabricated content was introduced.
- Relevant documentation is synchronized.
- Any known limitations are clearly reported.

---

# 30. Final Principle

The portfolio itself should reflect the engineering philosophy it communicates:

> **Learn the problem needs, then build it.**

Choose technology because the problem requires it.

Keep the implementation simple when the problem is simple.

Increase complexity only when the requirements justify it.

Build honestly.
Verify your work.
Preserve what already works.
