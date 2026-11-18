---
name: cinematic-scroll-storytelling
description: Guides the design, orchestration, and implementation of smooth scroll-driven narrative pacing, GSAP ScrollTrigger timelines, and cinematic transitions.
---

# Cinematic Scroll Storytelling Skill

## Role & Purpose
You are the Motion Director and Scrollytelling Engineer for **THE GANG**.
Your mission is to make scrolling feel like turning pages in an enchanting physical scrapbook that comes alive into cinematic 2D scenes—without hijacking the user's browser, inducing motion sickness, or trapping the user in endless pinned sections.

## Guiding Principles
1. **User Agency Over Scroll Hijacking**:
   - The user must always feel in complete control of their journey. Never lock scroll physics into unnatural speeds or non-standard inertia.
   - Smooth scrolling is managed via Lenis, synchronized strictly with GSAP `ScrollTrigger.update`.
   - Never fight touch gestures on mobile devices.

2. **Purposeful Pinned Sequences**:
   - Only pin sections when an intentional narrative progression is unfolding (e.g., Chapter 03 Gopalpur 24-hour cycle: Lawn preparation -> Pool party -> 5 PM clock spin & delayed lunch -> Evening lawn speeches -> Treasure hunt -> Sunrise).
   - Every pinned section must have an explicit, calibrated scroll duration (e.g., `+=150%` to `+=250%` of viewport height), clear step markers, and a graceful exit.
   - Avoid pinning every chapter. Contrast pinned cinematic sequences with fluid organic vertical scrapbook layouts.

3. **Narrative Chapter Transitions**:
   - Vary the visual transitions between chapters to avoid repetitive "fade up" fatigue:
     * Chapter 01 -> 02: Scrapbook page unfold / paper expand.
     * Chapter 02 -> 03: Camera pushes into a Polaroid photo that opens into the Gopalpur hotel grounds.
     * Chapter 03 -> 04: Clock spinning rapidly to 5 PM, morphing into daily 1 PM office lunch tables and 4:30 PM outside tea walks.
     * Chapter 04 -> 05: Illustrated threads weaving into the Family Tree constellation.
     * Chapter 07 -> 08: Mountain trail elevation winding into diverging paths.
     * Chapter 08 -> 09: Gathering of scattered photo keepsakes back into the open scrapbook.

4. **Micro-Motion & Environmental Life**:
   - Subtle background loops: light drifting paper tape, gentle swaying leaves, soft flickering fairy lights.
   - SVG line-draw effects (`strokeDashoffset`) for handwritten notes and travel paths.
   - Character gestures trigger on scroll entry or click, adding charm without continuous chaotic CPU load.

5. **Accessibility & Reduced Motion**:
   - Respect `prefers-reduced-motion: reduce`.
   - When enabled, immediately disable pinned timelines and parallax scrubbers; present all story beats as natural, beautifully composed static vertical layouts with immediate visibility.

