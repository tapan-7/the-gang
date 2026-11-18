# ARCHITECTURE & TECHNICAL SPECIFICATION — THE GANG

## 1. System Architecture Overview

```text
┌─────────────────────────────────────────────────────────────────┐
│                      Next.js 15+ App Router                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [ app/layout.tsx ]                                             │
│       │                                                         │
│       ├── SmoothScrollProvider (Lenis + GSAP synchronization)   │
│       ├── SoundscapeProvider (Optional user-controlled audio)   │
│       └── ChapterNavigationOverlay (Lando Norris-style index)   │
│                                                                 │
│  [ app/page.tsx ] (Main Story Canvas)                           │
│       │                                                         │
│       ├── Scene0_OpeningCover (Scrapbook unlatch & unfold)      │
│       ├── Chapter01_BeforeTheChaos (Quiet origins)              │
│       ├── Chapter02_TheGreatExpansion (14 character arrivals)   │
│       ├── Chapter03_GopalpurRetreat (Pinned 24h cinematic timeline)
│       ├── Chapter04_EverydayChaos (Cafeteria, Feasts, Movies)   │
│       ├── Chapter05_FamilyTree (Interactive relationship constellation)
│       ├── Chapter06_OperationArpita (Bachelorette documentary)  │
│       ├── Chapter07_TheAdventures (Koraput trek & Ashutosh home)│
│       ├── Chapter08_LifeHappens (Reflective divergence)         │
│       └── Chapter09_FinalScrapbook (Group tribute & closing)    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                  Typed Data Layer (Immutable)                   │
│   characters.ts │ chapters.ts │ memories.ts │ relationships.ts │
├─────────────────────────────────────────────────────────────────┤
│                Polymorphic Asset Pipeline                       │
│   SVG Character Placeholders <──> Real Verified Media Manifest  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Directory & File Organization

```text
the-gang/
├── .agents/
│   └── skills/
│       ├── illustrated-art-direction/SKILL.md
│       ├── cinematic-scroll-storytelling/SKILL.md
│       ├── storybook-character-system/SKILL.md
│       ├── scrapbook-memory-layouts/SKILL.md
│       ├── frontend-performance-guardian/SKILL.md
│       └── memory-content-architecture/SKILL.md
├── public/
│   └── assets/
│       ├── characters/
│       │   ├── dushmanta/
│       │   ├── paresh/
│       │   ├── shyamalendu/
│       │   ├── astha/
│       │   ├── asutosh/
│       │   ├── ashutosh/
│       │   ├── arpita/
│       │   ├── subhashree/
│       │   ├── soumya/
│       │   ├── niyaz/
│       │   ├── jayashree/
│       │   ├── tanu/
│       │   ├── tapan/
│       │   └── yash/
│       ├── photographs/
│       │   ├── gopalpur/
│       │   ├── operation-arpita/
│       │   ├── koraput/
│       │   ├── cafeteria/
│       │   ├── sunday-feasts/
│       │   └── ashutosh-home/
│       ├── textures/
│       │   ├── parchment-grain.svg
│       │   ├── paper-fibers.png
│       │   └── washi-pattern.svg
│       └── audio/
│           └── ambient-scrapbook.mp3 (optional, opt-in only)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── shell/
│   │   │   ├── Header.tsx
│   │   │   ├── ChapterNav.tsx
│   │   │   ├── SoundControl.tsx
│   │   │   └── SmoothScroll.tsx
│   │   ├── scrapbook/
│   │   │   ├── Polaroid.tsx
│   │   │   ├── WashiTape.tsx
│   │   │   ├── StampBadge.tsx
│   │   │   ├── TornPaperEdge.tsx
│   │   │   ├── HandwrittenNote.tsx
│   │   │   └── ScrapbookSpread.tsx
│   │   ├── characters/
│   │   │   ├── CharacterCard.tsx
│   │   │   ├── CharacterRoster.tsx
│   │   │   ├── CharacterAvatar.tsx
│   │   │   └── CharacterVignette.tsx
│   │   ├── family-tree/
│   │   │   ├── FamilyTreeGraph.tsx
│   │   │   ├── RelationshipLine.tsx
│   │   │   └── CharacterDetailSheet.tsx
│   │   ├── scenes/
│   │   │   ├── SceneCover.tsx
│   │   │   ├── SceneChapter01.tsx
│   │   │   ├── SceneChapter02.tsx
│   │   │   ├── SceneChapter03_Gopalpur.tsx
│   │   │   ├── SceneChapter04_Everyday.tsx
│   │   │   ├── SceneChapter05_Tree.tsx
│   │   │   ├── SceneChapter06_Arpita.tsx
│   │   │   ├── SceneChapter07_Adventures.tsx
│   │   │   ├── SceneChapter08_Life.tsx
│   │   │   └── SceneChapter09_Final.tsx
│   │   └── ui/
│   │       ├── Modal.tsx
│   │       └── Lightbox.tsx
│   ├── data/
│   │   ├── characters.ts
│   │   ├── chapters.ts
│   │   ├── memories.ts
│   │   ├── relationships.ts
│   │   └── asset-manifest.ts
│   ├── hooks/
│   │   ├── useLenisScroll.ts
│   │   ├── useReducedMotion.ts
│   │   └── useActiveChapter.ts
│   ├── types/
│   │   ├── character.ts
│   │   ├── chapter.ts
│   │   ├── memory.ts
│   │   └── relationship.ts
│   └── lib/
│       ├── gsap.ts
│       └── utils.ts
├── AGENTS.md
├── PROJECT_BRIEF.md
├── REFERENCE_STUDY.md
├── MOODBOARD.md
├── DESIGN_SYSTEM.md
├── STORYBOARD.md
└── ARCHITECTURE.md
```

---

## 3. Data Models (Strict TypeScript Schemas)

```typescript
// src/types/character.ts
export interface Character {
  id: string; // e.g. 'dushmanta', 'arpita', 'tapan'
  name: string; // Official name
  nickname?: string; // e.g. 'Luffy', 'Croco', 'Angry Fufaji'
  title: string; // e.g. 'The Finance Minister'
  tagline: string; // Humorous signature quote
  description: string;
  personality: string[];
  signatureProps: {
    name: string;
    icon: string; // SVG icon identifier
    description: string;
  }[];
  avatarPlaceholder: string; // High-quality stylized SVG path
  realPhotographs?: string[]; // Injected in Phase 8
  insideJokes: string[];
  relationships: {
    targetCharacterId: string;
    label: string; // e.g. 'Adopted Son', 'Bitter Half', '3 Musketeers'
    humorousContext: string;
  }[];
  tributes?: {
    author: string;
    quote: string;
    context: string;
  }[];
}

// src/types/chapter.ts
export interface Chapter {
  id: string; // e.g. 'chapter-03'
  number: number; // 1 through 9
  title: string;
  subtitle: string;
  location?: string;
  period?: string;
  themeColor: string;
  overview: string;
  scenes: {
    id: string;
    title: string;
    description: string;
    keyParticipants: string[];
    humorousDetail?: string;
    photoPlaceholderIds: string[];
  }[];
}

// src/types/memory.ts
export interface Memory {
  id: string;
  title: string;
  chapterId: string;
  dateOrPhase: string;
  location?: string;
  narrative: string;
  participants: string[];
  caption: string;
  images: {
    placeholderKey: string;
    realSrc?: string;
    altText: string;
    tapeColor?: 'mustard' | 'blue' | 'terracotta' | 'sage';
    rotationDeg: number;
  }[];
  insideJokeRef?: string;
}
```

---

## 4. Animation Engine & Scroll Architecture

### Lenis & GSAP ScrollTrigger Integration
To achieve butter-smooth momentum scrolling that never breaks ScrollTrigger coordinates:

```typescript
// src/lib/gsap.ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export * from 'gsap';
export { ScrollTrigger };
```

In `SmoothScrollProvider`:
```typescript
useEffect(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.destroy();
    gsap.ticker.remove(lenis.raf);
  };
}, []);
```

---

## 5. Polymorphic Asset System (Phase 8 Readiness)
Photos start with beautifully styled SVG placeholders displaying:
- Tactile paper backdrop
- Character silhouette/icon
- Handwritten placeholder label (e.g. `[ PHOTO: Gopalpur Pool Party - Coming Soon ]`)
- Real photographs map automatically via `src/data/asset-manifest.ts`. When a user drops `retreat_pool_01.webp` into `public/assets/photographs/gopalpur/`, updating a single manifest key activates the real image across the site without touching any UI component.

---

## 6. Performance & Quality Guarantees
- **Static Site Generation (SSG)**: Entire site statically rendered at build time with Next.js (`output: 'export'` or standard Vercel edge deployment). Zero server runtime latency.
- **Dynamic Imports**: Lightbox modals, sound player, and interactive graph heavy calculations dynamically loaded via `next/dynamic({ ssr: false })`.
- **Zero CLS**: Strict CSS aspect-ratios on all Polaroid frames (`aspect-square` or `aspect-[4/5]`).
- **Full WCAG AA Accessibility**: High-contrast text against parchment, full keyboard trap control on the navigation menu, and complete `prefers-reduced-motion` compliance.

