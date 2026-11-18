# AGENTS.md — Development Rules & Instructions for THE GANG

Welcome to the development environment for **THE GANG: An Illustrated, Cinematic, Interactive Digital Memory Book**.

Every agent and developer contributing to this project must follow the principles, quality standards, and constraints defined below.

---

## 1. Project Philosophy & Core Identity
- **Not a standard website**: This is an illustrated digital memory book, a handcrafted scrapbook brought to life with cinematic 2D storytelling.
- **Tone Balance**: 70% playful, chaotic, and funny; 30% warm, heartfelt, and nostalgic.
- **Authenticity over Generic Templates**: Never use generic corporate cards, tech-startup hero banners, artificial glassmorphic widgets, or clichéd AI-generated aesthetics.
- **Handcrafted & Tactile**: The visual language is tactile paper, Polaroid prints, washi tape, fountain pen annotations, stamps, and expressive 2D character vignettes.

---

## 2. The 14 Characters — Integrity & Rules
The group consists of 14 distinct individuals. You must adhere to their character bible without deviation:
1. **Dushmanta** ("The Finance Minister") — Immediate bill payer who forgets to split; movie critic, football & F1 lover.
2. **Paresh** ("The Gentleman Writer") — Author, poet, chef, summary crafter.
3. **Shyamalendu / Syama** ("The Angry Fufaji") — Group explainer of jokes and explanations; whiteboard diagrams.
4. **Astha** ("The Commander / Event Manager") — Party mastermind, crafter, "small RAM" affectionate joke.
5. **Asutosh** ("The Vegetable Encyclopedia") — Calm, sensitive, gentle; "That's a vegetable." **Distinct person from Ashutosh.**
6. **Ashutosh** ("The Man in His Own Universe") — Zoned out daydreamer; gracious host, family meals, Holi. **Distinct person from Asutosh.**
7. **Arpita** ("The Penguin Mom") — Mother of the group, cook, dancer, bachelorette celebration at Gopalpur.
8. **Subhashree** ("Croco / Deputy Director") — Astha's co-manager, crafty, playful debates with Soumya.
9. **Soumya** ("The Code Machine") — Code wizard, trainee mentor, author of Tapan's poem.
10. **Niyaz** ("The Delulu Romantic") — Sweet daydreamer, cat lover, shy writer.
11. **Jayashree** ("The Morning Inspector") — Lunchbox inspector, morning check-ins.
12. **Tanu** ("The Newest Chapter") — Newest member, learning the gang lore, "Friendship loading...".
13. **Tapan / Luffy** ("The Invisible Man") — Calm listener, basketball lover, quiet support, trekking leg massage.
14. **Yash** ("The Occasional Gang Member") — Outside friend, Koraput trek participant.

### Strict Identity Rules:
- **Never conflate Asutosh and Ashutosh.**
- **Never reproduce One Piece's anime Luffy.** Tapan's "Luffy" is an original character identity.
- **Never fabricate faces, dates, or events.** Placeholder artwork must be styled SVGs and labeled frames until real photos are supplied.
- **Arpita's quote** ("I'll never forget how you massaged my leg...") must remain attributed to Arpita.
- **Soumya's poem** about Tapan must remain attributed to Soumya.

---

## 3. Technology Stack Guidelines
- **Framework**: Next.js App Router, React, TypeScript (strict mode), Tailwind CSS.
- **Animation**: GSAP + ScrollTrigger for scroll-pinned sequences; Lenis for smooth scrolling (synchronized with ScrollTrigger); Motion (Framer Motion) for dialogs/micro-interactions.
- **Icons & Graphics**: Clean SVG paths with organic filters (`feTurbulence`), Lucide React where appropriate.
- **Performance Budget**: Initial JS bundle under 150KB gzipped; zero unnecessary Three.js; 60 FPS compositor transforms; native support for `prefers-reduced-motion`.

---

## 4. Skills Reference
Before working on specialized modules, consult the relevant skill in `.agents/skills/`:
- `illustrated-art-direction/`: Visual tone, paper alchemy, illustration styles.
- `cinematic-scroll-storytelling/`: Scrollytelling, pinned sequences, Lenis + GSAP sync.
- `storybook-character-system/`: Roster management, props, poses, polymorphic assets.
- `scrapbook-memory-layouts/`: Non-uniform collage, Polaroid frames, washi tape, stamps.
- `frontend-performance-guardian/`: Budgets, cleanups, a11y, layout shift prevention.
- `memory-content-architecture/`: Typed data models, privacy, quote attribution.

---

## 5. Development Phases
We operate in structured phases:
- **Phase 1**: Documentation, research study, moodboard, design system, storyboard, architecture, opening concepts.
- **Phase 2**: Visual review and opening concept selection.
- **Phase 3**: Design system foundations, tokens, paper textures, reusable components.
- **Phase 4**: Opening scene prototype.
- **Phase 5**: Character prototype (Dushmanta, Arpita, Shyamalendu, Tapan).
- **Phase 6**: Chronological story chapters.
- **Phase 7**: Complete 14-character roster and Family Tree interactive map.
- **Phase 8**: Real media integration (when provided).
- **Phase 9**: Final performance, a11y, mobile verification, and deployment.

