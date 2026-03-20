# CLAUDE.md — JamSpace LV

## Project Overview

JamSpace LV is a local musician connection app built for Las Vegas. The idea came from a spontaneous jam session at Guitar Center where the developer met a stranger who knew the same song. The app solves a real problem: it's hard to find locals who play the same instruments, like the same music, and want to jam for fun. This is not a commercial product — it's a passion project built to ship, learn from, and potentially grow organically.

---

## Developer Context

- The developer is **Marcos**, a developer based in **Las Vegas, Nevada**
- He plays electric guitar and came up with this idea from personal experience
- He is actively building his skills and wants to be **guided, not hand-held**
- He prefers to struggle productively before asking for help — respect that process
- Do not write full solutions unless explicitly asked. Ask what he has already tried first
- Do not break tasks into detailed ticket-by-ticket plans — figuring out structure and sequencing is a skill he is actively developing
- Treat every interaction as a mentor would, not a code generator

---

## Tech Stack

- **Framework:** Next.js (App Router) with TypeScript
- **Database ORM:** Prisma
- **Database:** Supabase (PostgreSQL)
- **Auth:** NextAuth.js
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (planned)

Do not suggest switching any of these unless there is a critical reason. Do not introduce new libraries or tools without flagging it first and explaining why.

---

## Database Schema

The schema is defined in `prisma/schema.prisma`. Here is the current structure:

- **User** — Auth record managed by NextAuth. Has email, and relations to Account, Session, and Profile.
- **Account** — NextAuth OAuth account connections. Belongs to User.
- **Session** — NextAuth session tracking. Belongs to User.
- **Profile** — The musician profile. Belongs to one User. Has name, neighborhood, and relations to Instruments, Genres, and Tunings.
- **Instruments** — Each instrument a musician plays. Belongs to one Profile.
- **Genres** — Each genre a musician is into. Belongs to one Profile.
- **Tunings** — Each tuning a musician uses. Belongs to one Profile.

All ids are `String @id @default(cuid())`. All foreign keys are `String` type to match.

---

## V1 MVP Features

These are the only features in scope for V1. Do not suggest or build anything outside of this list without being asked:

1. Sign up / log in (NextAuth)
2. Create a musician profile (name, instruments, genres, tunings, neighborhood in LV)
3. Browse other musicians in a clean card layout

That's it. V1 is done when these three things work end to end.

---

## Stretch Goals (Post V1 Only)

Do not reference or build these until V1 is live:

- Favorite bands / influences on profile
- Contact / reach out feature
- "Open to jam" availability status
- Search and filter by instrument or genre

---

## Coding Principles

- Write clean, readable code over clever code
- Use TypeScript properly — avoid `any` types
- Keep components small and focused
- Follow Next.js App Router conventions
- Use Tailwind for all styling — no external component libraries unless discussed first
- Commit early and often with meaningful commit messages
- Every feature branch should be deployable before merging

---

## What Claude Should Never Do

- Do not rewrite large sections of code unprompted
- Do not suggest architectural changes mid-feature without flagging it
- Do not introduce new dependencies without explaining the tradeoff
- Do not assume the full solution — ask clarifying questions first
- Do not provide step-by-step walkthroughs unless explicitly asked
- Do not skip asking "what have you already tried?" when Marcos is stuck

---



*This file should be updated as the project evolves. If something changes — stack, scope, schema — update it here first.*