# PROJECT BRIEF — THE GANG

## 1. Project Overview & Identity
- **Project Name**: THE GANG
- **Core Tagline**: *A little chaos. A lot of memories.*
- **Alternative Tagline**: *We came for work. We stayed for each other.*
- **Format**: Personal friendship storytelling website / digital scrapbook / interactive illustrated documentary.
- **Primary Goal**: Preserve the memories, personalities, friendships, inside jokes, adventures, and emotional milestones of our 14-person group that originated at Hyscaler in 2026.
- **Target Emotional Balance**: 70% playful, chaotic, and funny; 30% warm, heartfelt, and nostalgic.

---

## 2. Core Creative Direction
**A physical scrapbook transforms into a cinematic illustrated 2D world as the visitor scrolls.**
The experience brings together two harmonious aesthetics:
1. **Digital Scrapbook Interface**: Parchment paper textures, torn edges, Polaroid photos, washi tape, stamps, stickers, and handwritten fountain-pen notes.
2. **Cinematic 2D Storytelling**: Original hand-drawn character vignettes, parallax environments, scene transitions, and animated environmental details.

---

## 3. The 14 Characters Roster
1. **Dushmanta** ("The Finance Minister") — Immediate payer, forgetful settler, movie/football/F1 enthusiast.
2. **Paresh** ("The Gentleman Writer") — Author, poet, culinary artist, witty summarizer.
3. **Shyamalendu / Syama** ("The Angry Fufaji") — Group explainer of jokes and life; flowchart master.
4. **Astha** ("The Commander / Event Manager") — Event mastermind, craft queen, affectionate "small RAM" joke.
5. **Asutosh** ("The Vegetable Encyclopedia") — Calm, shy, gentle; "That's a vegetable." *(Distinct from Ashutosh)*.
6. **Ashutosh** ("The Man in His Own Universe") — Zoned-out dreamer, generous host, family meals, Holi. *(Distinct from Asutosh)*.
7. **Arpita** ("The Penguin Mom") — Group mother, dancer, chef, bride-to-be; star of Operation Arpita.
8. **Subhashree** ("Croco / Deputy Director") — Crafty co-manager, friendly sparring partner with Soumya.
9. **Soumya** ("The Code Machine") — Trainee mentor, problem solver, author of Tapan's poem.
10. **Niyaz** ("The Delulu Romantic") — Shy writer, cat enthusiast, romantic daydreamer, beloved youngest brother.
11. **Jayashree** ("The Morning Inspector") — Lunchbox inspector, morning check-ins, stern outside/warm inside.
12. **Tanu** ("The Newest Chapter") — Newest member, learning the group lore, "Friendship loading...".
13. **Tapan / Luffy** ("The Invisible Man") — Calm listener, volleyball enthusiast, quiet supporter (Koraput leg massage). *(Original character; not anime Luffy)*.
14. **Yash** ("The Occasional Gang Member") — Outside friend, Koraput trek participant.

---

## 4. The 9 Chronological Story Chapters
1. **Chapter 01: Before the Chaos** — Small 4-5 person circle, quiet lunches, initial awkwardness.
2. **Chapter 02: The Great Expansion** — Tapan joins, new members arrive, personalities collide.
3. **Chapter 03: Gopalpur: The Night Everything Changed** — Mayfair Hotel retreat, lawn preparation, pool party, the famous 5 PM lunch sprint, pyjama party, treasure hunt, ghost stories, sunrise.
4. **Chapter 04: The Everyday Chaos** — Daily 1 PM office cafeteria lunch (merged tables & Jayashree's inspection), sacred 4:30 PM outside tea stall walk with the gang, couch conversations, Sunday cooking feasts, movie outings.
5. **Chapter 05: The Gang Family Tree** — Interactive relationship web with running jokes (Adopted Sons, Bitter Half, 3 Musketeers).
6. **Chapter 06: Operation Arpita** — Mini-documentary of Arpita's bachelorette celebration at Gopalpur.
7. **Chapter 07: The Adventures** — Koraput mountain trek (Tapan's leg massage for Arpita), Ashutosh's home feasts and Holi.
8. **Chapter 08: Life Happens** — Career paths diverge, Arpita's wedding journey, the bond endures.
9. **Chapter 09: The Final Scrapbook** — Full group illustration, keepsakes gathered, closing tribute letter.

---

## 5. Technical & Engineering Principles
- **Next.js App Router**, React, TypeScript strict mode, Tailwind CSS.
- **Animation**: GSAP + ScrollTrigger for scroll-scrubbed moments, Lenis for smooth scrolling, Motion for micro-interactions.
- **No Heavy 3D / No Bloat**: 2D SVG illustrations and CSS transforms over heavy Three.js canvas.
- **Performance Budget**: Initial bundle < 150KB gzipped; 60 FPS compositor animations; strict layout shift prevention (CLS < 0.05).
- **Accessibility & Privacy**: Full keyboard navigation, descriptive alt texts, `prefers-reduced-motion` immediate layout fallback, no autoplay sound, zero unverified personal disclosures.

