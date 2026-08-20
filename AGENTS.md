# AGENTS.md

## Mission

Build a fast, credible personal website that serves two audiences:

1. Recruiters should quickly understand the owner's skills, impact, and selected work.
2. Academic visitors should quickly find research interests, publications, projects, and selected background information.

Keep the first release small. Reserve a clean path for future writing/blog features without implementing a full publishing system in the MVP.

## Read Before Making Changes

Read these files before planning or editing:

- `README.md` for the current project state and supported commands.
- `docs/PROJECT_BRIEF.md` for product scope and unresolved decisions.
- `docs/IMPLEMENTATION_PLAN.md` for the approved implementation sequence and checkpoints.
- `docs/CONTENT_INVENTORY.md` for required source material.
- `docs/CONTENT_MODEL.md` for content boundaries and proposed fields.

If those documents disagree, flag the conflict. Do not silently choose one.

## Current Phase

The Astro, TypeScript, and npm site is implemented as a fully static build. It is configured for the owner's GitHub Pages user site at `https://gepingchen.github.io` through GitHub Actions, using the public `GepingChen/gepingchen.github.io` repository.

The user authorized implementation and initial publication on 2026-08-09. On 2026-08-10, the user added standing authorization for Codex to commit and push verified, in-scope repository changes made during conversations; pushes to `main` may trigger the existing GitHub Pages deployment workflow. This standing authorization does not extend to unrelated or pre-existing user changes, private or unreviewed content, purchasing a domain, creating new external resources, enabling analytics, or expanding the approved content scope.

## Product Requirements

- Keep two short visitor paths: professional work and academic research.
- Current navigation: Home, Projects, and Poetry. Research and publication links live under Projects; do not recreate a separate Research route without a new user decision.
- Keep the short bio, selected experience, and contact links on Home for the compact first release.
- Keep Writing/Posts out of the primary MVP navigation unless real articles exist.
- Store repeatable content such as projects, publications, experience, talks, awards, and posts separately from page layout.
- Make individual contribution and evidence links clear on every selected project.
- Prefer static generation. Add client-side JavaScript only for a concrete interaction.
- Design mobile-first and preserve keyboard access, semantic structure, readable contrast, reduced-motion behavior, and descriptive alternative text.
- Optimize for clear reading, fast loading, stable URLs, and low maintenance rather than visual novelty.

## Content Integrity and Privacy

- Never invent biography details, affiliations, dates, publication status, author order, metrics, awards, project impact, testimonials, URLs, or contact information.
- Use `TBD` or omit an optional field when verified material is unavailable.
- Distinguish published, accepted, under review, preprint, working paper, and in-progress work exactly as supported by evidence.
- Preserve the owner's wording for technical claims unless asked to edit it.
- Prefer primary links: publisher/DOI, arXiv, official project page, repository, demo, or institutional profile.
- Do not publish private email addresses, phone numbers, location details, unpublished manuscripts, private repositories, API keys, analytics secrets, or résumé metadata without explicit approval.
- The professional email address or addresses supplied in the current CV may be displayed publicly. Do not display a phone number.
- Treat the CV as a private source document: do not copy its PDF or LaTeX source into the public site, create a CV download, or expose a direct CV route. Publish only reviewed, selected facts as ordinary webpage content.
- Do not commit `.env` files, credentials, private drafts, or unapproved source assets.
- Track the source of factual content in front matter or adjacent notes when the chosen content system supports it; provenance fields must not be rendered publicly by default.

## Engineering Rules

- Make the smallest change that satisfies the request; avoid speculative features and dependencies.
- Keep content, presentation, and site configuration separate.
- Prefer framework-native features and a small dependency surface.
- Reuse a tokenized visual system for color, type, spacing, radii, and motion.
- Avoid CMS, database, authentication, comments, search, newsletter, and runtime APIs in the MVP unless requirements change.
- Do not add animation that obscures content, blocks input, or ignores reduced-motion preferences.
- Do not modify unrelated files or discard uncommitted work.
- After completing and verifying an in-scope change, commit only the files belonging to that change and push the current branch by default. Existing automated checks and deployment workflows triggered by the push are authorized. Never include unrelated or pre-existing user changes in the commit.
- Purchasing a domain, creating new external resources, enabling analytics, publishing private or unreviewed content, or expanding the approved content scope still requires explicit user authorization.
- Do not claim a page, link, build, deployment, or accessibility requirement works unless it was verified in the current environment.

## Workflow

1. Inspect the repository and working tree before editing.
2. Identify which documented decision and content sources support the change.
3. State assumptions when a requirement remains undecided.
4. Implement a focused change that matches existing style and architecture.
5. Run the documented checks in `README.md` or `package.json` once they exist.
6. For UI changes, verify at narrow and wide viewport sizes, keyboard navigation, visible focus, reduced motion, missing-image behavior, and internal/external links.
7. Commit only the verified files belonging to the current request, then push the current branch unless a later user instruction says not to.
8. Report what changed, what was verified, what was skipped, the commit and push status, and any remaining `TBD` items.

Never fabricate commands in status reports. If the project has no runnable checks yet, say so.

## Definition of Done for the MVP

- A new visitor can understand the owner's name, role, focus, and strongest proof within roughly 10 seconds.
- Recruiters can reach selected projects, experience highlights, and contact information within two interactions.
- Academic visitors can reach research projects, publications, and selected background information through Projects within two interactions.
- Every featured item has an accurate summary, the owner's contribution, status/date, and relevant evidence links.
- The site works on phone and desktop layouts without horizontal overflow.
- Core content and navigation work without client-side JavaScript.
- Keyboard navigation, headings, landmarks, focus states, image alternatives, and color contrast have been checked.
- Metadata, canonical URL behavior, social preview, sitemap, robots policy, and a useful 404 page have been considered and verified as applicable.
- Adding a project, publication, experience item, or later post does not require changing page layout code.
- No secrets, private drafts, broken links, placeholder personal facts, or unlicensed assets are shipped.

## Scope of This File

This file applies to the entire repository. Add a nested `AGENTS.md` only when a subdirectory genuinely needs different instructions; the more specific file then governs that subtree.
