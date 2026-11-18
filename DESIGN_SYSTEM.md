# DESIGN SYSTEM — THE GANG

## 1. Design Tokens & CSS Variables

```css
:root {
  /* Surface & Background Tokens */
  --bg-parchment: #F3EBDD;
  --bg-paper-aged: #E8DDC9;
  --bg-paper-card: #FCFBF7;
  --bg-tape-mustard: rgba(217, 183, 107, 0.75);
  --bg-tape-blue: rgba(129, 153, 168, 0.75);
  --bg-tape-terracotta: rgba(201, 110, 89, 0.75);
  --bg-tape-sage: rgba(154, 164, 141, 0.75);

  /* Typography Colors */
  --text-ink: #262522;
  --text-ink-muted: #59483D;
  --text-ink-faint: #8C7E74;
  --text-accent-terracotta: #C96E59;

  /* Accent & Highlight Colors */
  --accent-terracotta: #C96E59;
  --accent-blue: #8199A8;
  --accent-mustard: #D9B76B;
  --accent-sage: #9AA48D;
  --accent-stamp-red: #A8382B;

  /* Elevation & Shadows */
  --shadow-polaroid: 2px 8px 24px -4px rgba(38, 37, 34, 0.16), 0 2px 6px -1px rgba(38, 37, 34, 0.08);
  --shadow-polaroid-hover: 4px 16px 32px -4px rgba(38, 37, 34, 0.22), 0 4px 10px -2px rgba(38, 37, 34, 0.12);
  --shadow-paper-sheet: 1px 3px 12px -2px rgba(38, 37, 34, 0.12);
  --shadow-pin: 0 4px 8px rgba(38, 37, 34, 0.35);

  /* Radii */
  --radius-polaroid: 2px;
  --radius-card: 6px;
  --radius-badge: 9999px;

  /* Fonts */
  --font-display: 'Fraunces', serif;
  --font-handwritten: 'Caveat', cursive;
  --font-body: 'DM Sans', sans-serif;
}
```

---

## 2. Typography Scale & Hierarchy

| Level | Font Family | Size (clamp) | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| **Cover Title** | Fraunces | `clamp(3rem, 7vw, 5.5rem)` | 800 (Bold) | 1.05 | Opening scrapbook cover & site title |
| **Chapter Title** | Fraunces | `clamp(2rem, 4.5vw, 3.5rem)` | 700 (SemiBold)| 1.15 | Major chapter headers (01 - 09) |
| **Chapter Subtitle** | DM Sans | `clamp(1rem, 1.8vw, 1.35rem)` | 500 (Medium) | 1.4 | Chapter theme & date markers |
| **Section Header** | Fraunces | `clamp(1.5rem, 2.8vw, 2.25rem)`| 600 (SemiBold)| 1.25 | Scene transitions & character names |
| **Handwritten Note**| Caveat | `clamp(1.2rem, 2vw, 1.6rem)` | 600 (Medium) | 1.2 | Polaroid captions, margin annotations, arrows |
| **Body Text** | DM Sans | `clamp(0.95rem, 1.1vw, 1.1rem)`| 400 (Regular)| 1.65 | Narrative prose and descriptions |
| **Metadata / Stamp**| DM Sans / Monospace | `0.75rem - 0.85rem` | 700 (Bold) | 1.2 | Dates, location stamps, UNO cards |

---

## 3. Reusable Component Specifications

### 3.1 `<Polaroid>` Component
- **Structure**: Outer white/cream cardstock frame (`#FCFBF7`), photo viewport (1:1 or 4:5 aspect ratio), bottom margin with handwritten Caveat caption, and optional washi tape anchor.
- **Props**:
  - `src: string` (image URL or placeholder key)
  - `alt: string`
  - `caption?: string`
  - `rotation?: number` (default random between -3° and +3°)
  - `tapeColor?: 'mustard' | 'blue' | 'terracotta' | 'sage'`
  - `tapePosition?: 'top-left' | 'top-right' | 'top-center' | 'both-corners'`
  - `pin?: boolean`

### 3.2 `<WashiTape>` Component
- **Structure**: Translucent SVG element with frayed torn ends, subtle paper texture overlay, and slight tilt angle.
- **Visuals**: `opacity: 0.85`, blend mode: `multiply`.

### 3.3 `<CharacterCard>` Component
- **Structure**: Tactile scrapbook card presenting an illustrated portrait/placeholder, character nickname badge, signature props row, humorous quote, and interaction trigger to reveal memory connections.
- **States**:
  - Idle: Floating gently, resting on paper.
  - Hover: Elevation lift (`translateY(-4px)`), shadow enlargement.
  - Active / Selected: Highlighted border, highlighted relationships in Family Tree.

### 3.4 `<HandwrittenAnnotation>` Component
- **Structure**: Ink note in Caveat font with optional hand-drawn SVG doodle arrow, underline, or circle pointing to a specific photo detail.

### 3.5 `<StampBadge>` Component
- **Structure**: Circular or rectangular distressed rubber stamp with inked border (`--accent-stamp-red` or `--accent-blue`), rotated -12°, displaying date/location (e.g. `GOPALPUR • 2026`).

### 3.6 `<ChapterMenu>` Component
- **Structure**: Minimal top-right scrapbook bookmark button labeled "Chapters" that slides open a fullscreen editorial index with thumbnail previews and chapter jumping.

---

## 4. Motion Tokens & Animation Principles

```javascript
export const motionTokens = {
  ease: {
    paper: "cubic-bezier(0.25, 1, 0.5, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
  duration: {
    instant: 0.15,
    quick: 0.3,
    medium: 0.6,
    slow: 1.2,
    cinematic: 1.8,
  }
};
```

- **Scroll Pinning Rule**: Maximum 3 pinned sequences in the entire page (Opening Unfold, Chapter 03 Gopalpur Cycle, Chapter 05 Family Tree).
- **Reduced Motion Fallback**: When `prefers-reduced-motion: reduce` is active, all GSAP scrubbers are detached, and elements display in static grid/column order.

