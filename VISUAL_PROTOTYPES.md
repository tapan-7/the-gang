# VISUAL_PROTOTYPES.md — Three Flagship Experience Prototypes
**Project**: THE GANG — An Illustrated, Cinematic, Interactive Digital Memory Book  
**Author**: Lead Visual Designer & Creative Frontend Architect  
**Status**: Stage 2 Prototype Specification (Awaiting Approval Before Implementation)  
**Deliverable**: Visual prototypes, interaction models, desktop/mobile layouts, and animation storyboards for:
1. **The Opening Scrapbook Experience** (World A — Tactile Memory Book)
2. **Gopalpur 2D Illustrated Experience** (World B — The Origin & Coastal Adventure)
3. **Operation Arpita 2D Illustrated Experience** (World B — The Chaotic Celebration & 5 PM Lunch Sprint)

---

## Guiding Principles Incorporated From Your Feedback
1. **Real Photos Are the Emotional Heart**: Illustrated scenes are never decorative replacements for real memories. Every illustrated vignette, prop, or location acts as an **interactive gateway** that unveils the authentic photographs, handwritten captions, and inside jokes.
2. **Two Distinct 2D Personalities**:
   - **Gopalpur**: Breezy coastal palette, rolling sea waves, tranquil twilight, bonfire silhouettes, UNO cards, and golden ocean sunrise. Feels like an intimate group adventure.
   - **Operation Arpita**: Festive, electric, celebratory, warm terracotta and champagne gold, bunting streamers, pool splashing, an accelerating clock spinning to 5:00 PM, and a dotted treasure hunt map.
3. **Evergreen Family Tree**: Treated as an enduring relationship constellation rather than a point in the chronological timeline.
4. **Open-Ended Horizon**: The bachelorette is the latest chapter, not the final chapter. The book remains open: *"Friendship loading... to be continued."*

---

# Prototype 01: The Opening Scrapbook Experience (World A)
*A physical, handcrafted memory book that rests on a warm desktop, unlocks, and gently folds open to welcome the visitor into our shared world.*

### 1. Visual Tone & Materials
- **Base Surface**: Warm textured desk/linen surface (`#EAE3D2`).
- **Book Cover**: Deep aged espresso textured leather/buckram (`#241C18`) with embossed gold-foil lettering reading *"THE GANG — 2024–2026 & BEYOND"*.
- **Tactile Details**: A brass latch clasp on the right edge, stitched binding along the spine, washi tape holding preview Polaroid snapshots at charming angles (-4° and +3°).
- **Typography**: Display serif (`Fraunces`) for dignified titles, genuine handwriting cursive (`Caveat`) for scribbled marginalia.

---

### 2. Desktop Wireframe Layout
```
+-----------------------------------------------------------------------------------+
|  [Bookmark Ribbons: Chapters 01-09 | Photo Vault | Constellation]                 |
|                                                                                   |
|                           +-----------------------+                               |
|                           |      BRASS CLASP      | (Click or Scroll to Unlatch)  |
|                           +-----------------------+                               |
|      +---------------------------------------------------------------------+      |
|      |  STITCHED SPINE                                                     |      |
|      |                                                                     |      |
|      |    "THE GANG" (Gold Foil Emboss)                                    |      |
|      |    ~ A little chaos. A lot of memories. ~                           |      |
|      |                                                                     |      |
|      |     [ Polaroid 1 ]                       [ Polaroid 2 ]             |      |
|      |     (Gopalpur Waves)                     (1 PM Cafeteria Table)     |      |
|      |     Washi tape: Terracotta               Washi tape: Mustard        |      |
|      |     tilt: -3.5 deg                       tilt: +2.8 deg             |      |
|      |                                                                     |      |
|      |              [ V "Scroll to Unfold the Story" V ]                   |      |
|      +---------------------------------------------------------------------+      |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 3. Mobile Layout Adaptation
- The book cover fits vertically within the portrait viewport (aspect-ratio 4:5).
- Brass clasp sits centered at the bottom of the viewport with a tactile *"Tap to Open Book"* haptic prompt.
- Two staggered preview Polaroids peek out from the cover corners without overflowing the screen width.

---

### 4. Interactive Gateway to Real Photos
- **Hover / Tap on Clasp**: Brass buckle glints with a metallic sweep reflection and clicks open with a gentle audio-visual latch release.
- **Clicking the Preview Polaroids**: The Polaroids lift off the cover with a soft drop shadow (`scale: 1.05`, `boxShadow: 0 20px 40px rgba(...)`) and open immediately into the **Global Lightbox**, revealing the high-resolution photo with its handwritten date and participant tags.

---

### 5. Animation Storyboard (GSAP ScrollTrigger Timeline)
```mermaid
sequenceDiagram
    autonumber
    actor User as Visitor (Scroll / Click)
    participant Cover as Leather Book Cover
    participant Clasp as Brass Clasp
    participant Pages as Scrapbook Pages
    participant Ink as Title & Doodles

    User->>Clasp: Scrolls 0px -> 150px
    Clasp->>Clasp: Unlatches with horizontal slip & rotational click (-15deg)
    User->>Cover: Scrolls 150px -> 400px
    Cover->>Cover: 3D perspective fold opens (rotateY: -90deg, transformOrigin: "left center")
    Cover->>Pages: Reveals warm parchment inner spread (#F3EBDD)
    Pages->>Ink: SVG stroke-dashoffset triggers; handwriting draws "Chapter 01: Before the Chaos"
    Pages->>Pages: 3 initial quiet-era Polaroids glide in from left and right with natural settle bounce
```

---

# Prototype 02: Gopalpur 2D Illustrated Experience (World B)
*When separate connections came together. A living coastal and journey panorama of the January 2026 trip where people who knew one another through work built lasting connections beyond work.*

### 1. Narrative Premise & Context
- **Before the Trip**: Members already knew one another through common projects, different project teams, trainee relationships, and everyday office conversations, but were not yet a particularly close-knit group.
- **The Occasion**: Gopalpur was not the formation of a formally named or permanent group. It was an occasion that helped people who already knew one another through work build comfort and connections beyond work.
- **Visual Personality**: Coastal breezy palette, highway bus journey, morning sea mist transitioning into evening party lights and midnight conversations, followed by a calm morning beach walk.
- **Color Palette**: Highway dawn amber (`#E5A96A`), marine twilight blue (`#18232F`), deep navy ocean (`#101A24`), seafoam crests (`#A8C5B5`), warm sandy shoreline (`#DFD3BE`), and golden lantern light (`#FDE68A`).
- **Illustrated Elements**: Stylized bus on winding coastal highway, Mayfair resort grounds, outdoor terrace, rolling SVG vector waves, and the morning ocean horizon.

---

### 2. Desktop Wireframe Layout (5-Beat Journey Stage)
```
+-----------------------------------------------------------------------------------+
|  CHAPTER 03: GOPALPUR — WHEN SEPARATE CONNECTIONS CAME TOGETHER (Jan 10–13, 2026) |
|                                                                                   |
|  [ LAYER 1: Coastal Horizon & Sky Shifting from Dawn to Twilight to Morning Sun ] |
|  [ LAYER 2: Roadway -> Resort Grounds -> Ocean Beachline ]                        |
|                                                                                   |
|  ============================== THE JOURNEY STAGES ============================== |
|                                                                                   |
|  (Beat 0: Pre-Trip)   (Beat 1: Arrival)   (Beat 2: Evening)   (Beat 3: Morning)   |
|  [ The Bus Journey ]  [ Games & Lunch ]   [ Evening Dancing ] [ Beach Visit ]     |
|  Gathering outside,   UNO, getting        Party dancing,      Morning waves,      |
|  pre-trip dancing     comfortable         night games         photographs         |
|         |                    |                   |                   |            |
|         v                    v                   v                   v            |
|  *CLICK TO OPEN*      *CLICK TO OPEN*     *CLICK TO OPEN*     *CLICK TO OPEN*     |
|  Pre-trip photos &    Shared lunch &      Evening party       Morning beach       |
|  bus-ride memories    games photos        photos              photos (19 keepsakes)|
|                                                                                   |
|  =========================== (Beat 4: After the Trip) =========================== |
|  +-----------------------------------------------------------------------------+  |
|  | THE "UNO-2026" GROUP CHAT CREATED BY SUBHASHREE:                            |  |
|  | Illustrated phone showing the newly created WhatsApp chat window            |  |
|  | "Subhashree created group 'UNO-2026' • Sharing trip photos & bus dance"    |  |
|  | Note: Members have multiple occasion-specific groups with overlapping       |  |
|  | membership. This chat captured this specific trip's laughter.               |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

### 3. Mobile Layout Adaptation
- The horizontal panoramic stage adapts into a **vertical travelogue scroll journey**:
  1. *Opening Card*: Gathering outside the office and the bus journey excitement.
  2. *Card 1*: Arriving, settling in, room arrangements, shared lunch, and early games of UNO.
  3. *Card 2*: Evening party dancing and nighttime conversations.
  4. *Card 3*: Morning beach walk, sea breeze, and group photographs by the waves.
  5. *Card 4*: Returning home & Subhashree creating the `UNO-2026` group chat to share photos and the pre-trip bus-dance videos.

---

### 4. Interactive Gateways to Real Photos (How Real Memories Live Inside)
1. **Interactive Station 0: The Bus & Departure Point**:
   - Clicking the illustrated bus unveils photos of colleagues gathering outside before departure, talking, and anticipating the trip.
2. **Interactive Station 1: Games & Getting Comfortable**:
   - Clicking the UNO cards and dining table reveals authentic photos of shared meals, room arrangements, and the games where people naturally became comfortable together.
3. **Interactive Station 2: The Evening Party & Nighttime Games**:
   - Clicking the evening party lights triggers real photographs from the party and relaxed evening conversations.
4. **Interactive Station 3: The Morning Beach Visit**:
   - Clicking the shoreline vectors opens the famous **January 11, 2026 beach photos** (`public/gopalpur/IMG_20260111_105112376.jpg`, `IMG-20260111-WA0609.jpg`), capturing the walk along the shore and group snapshots.
5. **Interactive Station 4: The After-Trip Connection**:
   - An illustrated notification envelope reveals Subhashree creating the **UNO-2026** group chat, referencing the bus dancing videos recorded before reaching Gopalpur that were shared once everyone returned.

---

### 5. Animation Storyboard (GSAP ScrollTrigger Timeline)
```javascript
// Illustrated Gopalpur 5-Beat Journey Timeline
const gopalpurTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter-03-gopalpur",
    start: "top top",
    end: "+=250%",
    pin: true,
    scrub: 1,
  }
});

// 1. Bus Journey & Roadway Scroll
gopalpurTl
  .to(".gopalpur-bus", { x: 300, ease: "none" }, 0)
  .to(".gopalpur-highway", { xPercent: -20, ease: "none" }, 0)

// 2. Transition to Resort & Afternoon Games
  .fromTo(".station-games-lunch", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })

// 3. Twilight & Evening Party Dancing
  .to(".gopalpur-sky", { backgroundColor: "#18232F", duration: 1 })
  .fromTo(".station-evening-dance", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "<")

// 4. Morning Dawn & Beach Waves
  .to(".gopalpur-sky", { backgroundColor: "#DFD3BE", duration: 1 })
  .fromTo(".station-beach-morning", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, "<")
  .to(".gopalpur-waves", { y: -15, repeat: -1, yoyo: true, duration: 2, ease: "sine.inOut" }, "<")

// 5. Epilogue: Subhashree Creates UNO-2026 Group Chat
  .fromTo(".chat-notification-popup", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.5)" });
```

---

# Prototype 03: Operation Arpita 2D Illustrated Experience (World B)
*The most recent major event! A chaotic, celebratory, hilarious, and deeply emotional tribute to our Penguin Mom at Mayfair in November 2026.*

### 1. Visual Tone & Environment
- **Atmosphere**: Vibrant, sunny, champagne sparkle, pool water ripples, flying party poppers, warm fairy lights.
- **Color Palette**: Festive terracotta (`#C96E59`), warm apricot (`#F4A261`), sunlit pool turquoise (`#48CAE4`), champagne gold (`#E9C46A`), and crisp white linen.
- **Illustrated Elements**:
  - The Secret Mission Clipboard (Astha's frantic blueprints!).
  - The Swimming Pool with water splashes and inflatable rings.
  - **The Accelerating Clock**: Clock hands spinning wildly past 1 PM, 2 PM, 3 PM, 4 PM... slamming to a halt at **5:00 PM**!
  - Fairy light garlands strung across lush green lawn silhouettes.
  - The Dotted Treasure Hunt path winding through hotel room corridors.

---

### 2. Desktop Wireframe Layout
```
+-----------------------------------------------------------------------------------+
|  CHAPTER 08: OPERATION ARPITA — THE 5 PM LUNCH & CELEBRATION (Nov 14–16, 2026)    |
|                                                                                   |
|  [ TOP BANNER: Illustrated Fairy Lights & Golden Bunting Streamers ]              |
|                                                                                   |
|  +--------------------+  +-------------------------+  +------------------------+  |
|  | 01. COVERT PREP    |  | 02. POOL PARTY & LUNCH  |  | 03. TREASURE HUNT      |  |
|  | Illustrated Tape,  |  | Illustrated Pool, Ring, |  | Winding dotted trail,  |  |
|  | Balloons & Clues   |  | Clock spinning to 5 PM! |  | Clue envelopes         |  |
|  +--------------------+  +-------------------------+  +------------------------+  |
|            |                          |                           |               |
|            v                          v                           v               |
|     *CLICK ENVELOPE*          *CLICK POOL / CLOCK*         *CLICK FINAL CLUE*     |
|   Opens Lawn Setup            Opens Pool Splash Photos    Opens Living Room       |
|   & Secret Decor Photos       & The Legendary 5 PM         Photoshoot & Emotional |
|                               Lunch Photo Spread           Lawn Toasts            |
|                                                                                   |
|  +-----------------------------------------------------------------------------+  |
|  | THE 5:00 PM LUNCH RUNNING JOKE HIGHLIGHT BOX:                               |  |
|  | Illustrated big clock: [ 5 : 0 0  P M ]                                     |  |
|  | "We organized every minute of the weekend. We just forgot lunch existed!"   |  |
|  | Real Photo: Arpita laughing with her crown & lunch spread                   |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

### 3. Mobile Layout Adaptation
- An interactive **"Mission Timeline Card Deck"**:
  - Card 1: *The Covert Operation* (Morning whispers & balloons).
  - Card 2: *Pool Chaos & The 5 PM Lunch Sprint* (Interactive clock that users can scrub with their thumb).
  - Card 3: *The Fairy Light Lawn Toasts* (Speeches that made our Penguin Mom cry happy tears).
  - Card 4: *The Treasure Hunt & Grand Living Room Reveal*.
- Tapping any mission phase springs open a dedicated Polaroid cluster with smooth spring physics.

---

### 4. Interactive Gateways to Real Photos
1. **The Covert Prep Clipboard**:
   - Clicking Astha's clipboard reveals **3 authentic prep photos** (`IMG_20261114_192152888.jpg`) showing ribbons, balloons, and the team preparing the grounds.
2. **The 5:00 PM Clock & Pool Splash**:
   - Dragging the clock hands or scrolling past the section triggers an animated alarm chime; the pool splashes, and a spread of **4 real pool photos** pops out (`IMG_20261115_091828014.jpg`), labeled: *"Actual lunch time: 17:00 HRS. Nobody complained."*
3. **The Fairy Light Bulbs**:
   - Clicking a glowing bulb illuminates the evening toasts, displaying **the real evening photos of Arpita receiving her celebration crown** (`IMG-20261115-WA1167.jpg`).
4. **The Treasure Hunt Clue Envelope**:
   - Clicking the sealed envelope unfolds a handwritten letter with clue #4, transitioning to the **midnight living room photo shoot** (`IMG-20261115-WA1727.jpg`).

---

### 5. Animation Storyboard (GSAP Timeline)
```javascript
// Operation Arpita 5 PM Lunch Sprint & Celebration Timeline
const arpitaTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapter-08-arpita",
    start: "top 20%",
    end: "+=200%",
    pin: true,
    scrub: 0.8,
  }
});

// 1. Covert Mission Setup: Streamers unroll from ceiling
arpitaTl
  .from(".bunting-streamer", { scaleY: 0, transformOrigin: "top center", stagger: 0.15 })
  .from(".confetti-particle", { y: -80, opacity: 0, stagger: 0.05 }, "<0.2")

// 2. The Clock Acceleration: Hands spin fast from 12 PM to 5 PM
  .to(".clock-hour-hand", { rotation: "+=150", ease: "power2.inOut" }, "+=0.2")
  .to(".clock-minute-hand", { rotation: "+=1800", ease: "power2.inOut" }, "<")
  .fromTo(".stamp-5pm-lunch", { scale: 3, opacity: 0, rotation: -20 }, { scale: 1, opacity: 1, rotation: 8, ease: "back.out(1.7)" })

// 3. Pool Splash & Polaroids Pop
  .fromTo(".water-splash-svg", { scale: 0 }, { scale: 1.2, duration: 0.4 })
  .fromTo(".pool-polaroids", { y: 100, opacity: 0, rotation: "random(-8, 8)" }, { y: 0, opacity: 1, stagger: 0.2 }, "<0.1")

// 4. Night Lawn Lights Turn On
  .to(".arpita-night-backdrop", { opacity: 0.85, duration: 0.8 })
  .to(".fairy-bulb", { filter: "drop-shadow(0 0 10px #FDE68A)", opacity: 1, stagger: 0.08 }, "<");
```

---

## Comparison Summary of the Three Prototypes

| Dimension | 01. Opening Scrapbook | 02. Gopalpur Experience | 03. Operation Arpita Experience |
| :--- | :--- | :--- | :--- |
| **Visual World** | **World A: Tactile Memory Book** | **World B: 2D Illustrated Story** | **World B: 2D Illustrated Story** |
| **Pacing / Mood** | Gentle, tactile, curious unlatch | Breezy, adventurous, mysterious, awe | Electric, hilarious, celebratory, tender |
| **Color Dominance**| Espresso leather, brass, cream parchment | Navy ocean, deep teal, seafoam, sunrise gold | Terracotta, sunlit cyan, apricot, fairy yellow |
| **Key Narrative Moment** | Crossing the threshold into our memories | Origin retreat where colleagues became family | Penguin Mom bachelorette & legendary 5 PM lunch |
| **Interactive Climax** | Brass clasp unlocks and cover folds in 3D | Clicking the UNO deck unveils the golden sunrise | Spinning clock slams on 5 PM & pool splash |
| **Real Photos Connected** | 2 Cover preview keepsakes | 19 Authentic January 2026 origin photos | 19 Authentic November 2026 bachelorette photos |

---

## Technical Integration Plan

When approved, these prototypes will be implemented as modular, cleanly separated components:
- `src/components/scenes/SceneCover.tsx` (Enhanced with Prototype 01 physical unlatch & ink reveal)
- `src/components/scenes/SceneChapter03_Gopalpur.tsx` (Refactored to Prototype 02 coastal panorama)
- `src/components/scenes/SceneChapter08_Arpita.tsx` (Created to Prototype 03 celebratory experience)
- `src/context/LightboxContext.tsx` (Global lightbox wrapping all Polaroids across both World A and World B)
- `src/data/media.ts` (Central typed manifest connecting all 141 photos to their respective interactive triggers)

---

> [!NOTE]
> **Next Step**: Please review these three visual prototypes. Once approved, I will begin implementing the foundations (central `media.ts` and global lightbox) followed by these three flagship scenes!

