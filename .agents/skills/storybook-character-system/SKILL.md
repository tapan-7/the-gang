---
name: storybook-character-system
description: Manages the 14 character identities, distinct traits, signatures, relationships, and ensures complete separation and fidelity of all members.
---

# Storybook Character System Skill

## Role & Purpose
You are the Character Designer and Cast Architect for **THE GANG**.
Your responsibility is to ensure that all 14 individuals are depicted with warmth, accuracy, respect, distinct visual traits, and consistent data representations.

## The 14 Characters Roster & Rules
1. **Dushmanta ("The Finance Minister")**:
   - Persona: Pays restaurant bills immediately, then forgets to tell people their share; selective movie connoisseur, football & F1 fan.
   - Props: Itemized bill, calculator, wallet, football, checkered racing flag.
2. **Paresh ("The Gentleman Writer")**:
   - Persona: Eloquent author, poet, summary crafter, wonderful cook, warm humor.
   - Props: Leatherbound journal, fountain pen, cooking apron, ladle, culinary steam.
3. **Shyamalendu / Syama ("The Angry Fufaji")**:
   - Persona: Master explainer of jokes and concepts; explains the explanation itself; lovable over-analyst.
   - Props: Whiteboard, green/red dry-erase markers, branching explanatory flowchart diagrams.
4. **Astha ("The Commander / Event Manager")**:
   - Persona: Supreme crafter, party mastermind, energetic planner; commands the group; playful "small RAM" running joke.
   - Props: Clipboard, craft scissors, washi tape rolls, event checklist, subtle cute RAM micro-badge.
5. **Asutosh ("The Vegetable Encyclopedia")**:
   - Persona: Gentle, soft-spoken, sensitive, calm; signature response to confusing queries: "That's a vegetable."
   - Props: Fresh vegetable (eggplant/gourd), organic tote bag, calm smile.
   - *CRITICAL RULE*: Distinct individual from Ashutosh. Never conflate their profiles or data.
6. **Ashutosh ("The Man in His Own Universe")**:
   - Persona: Deep thinker zoning out into tranquil realms; warm host who welcomes everyone home to his mother's food; memorable Holi celebrations.
   - Props: Floating daydream cloud, homemade feast dish, vibrant Holi gulal splash.
   - *CRITICAL RULE*: Distinct individual from Asutosh.
7. **Arpita ("The Penguin Mom")**:
   - Persona: The nurturing heart of the group; brilliant dancer, generous cook who packs food for all; center of "Operation Arpita" at Gopalpur; preparing for marriage.
   - Props: Whimsical original Penguin mascot, lunch tiffins, dance ribbon, heart stickers.
8. **Subhashree ("Croco / Deputy Director")**:
   - Persona: Astha's crafty co-planner; mature organizer; playful friendly sparring partner with Soumya; "Croco" nickname from her home region.
   - Props: Friendly original crocodile mascot doodle, event binder, glue gun.
9. **Soumya ("The Code Machine")**:
   - Persona: Code wizard, patient mentor to trainees, dependable problem-solver; comedic sparring partner to Subhashree; author of the famous poem about Tapan.
   - Props: Laptop running VS Code, steaming coffee mug, terminal console.
10. **Niyaz ("The Delulu Romantic")**:
    - Persona: Daydreamer living in dramatic romantic narratives; shy, thoughtful, loves writing and cats; adored youngest brother of the gang.
    - Props: Fluffy cat companions, journal with pink clouds, starry daydream bubbles.
11. **Jayashree ("The Morning Inspector")**:
    - Persona: The observant morning presence; inspects what everyone packed for lunch; appears stern at first glance but has a heart of gold.
    - Props: Magnifying glass / checklist, stainless steel lunchbox, morning coffee cup.
12. **Tanu ("The Newest Chapter")**:
    - Persona: The newest arrival; quiet observer learning the group's chaotic lore and inside jokes; story still unfolding.
    - Props: Fresh blank journal, instant camera, "Friendship Loading..." progress bar.
13. **Tapan / Luffy ("The Invisible Man")**:
    - Persona: Calm, observant listener, basketball lover, drama-free problem solver; quiet entrance and exit; hearty appetite; shows love through quiet supportive actions (e.g. trekking massage for Arpita).
    - Props: Basketball, snack bento, quiet stealth aura, walking stick.
    - *NOTE*: Original character aesthetic; never copy One Piece's anime Luffy.
14. **Yash ("The Occasional Gang Member")**:
    - Persona: Loyal outside friend who doesn't work at the company; joins the adventures (Koraput trek) and special gatherings.
    - Props: Trekking backpack, hiking boots, compass.

## Data & Asset Integrity
- All character entities must conform to strict TypeScript schemas (`src/types/character.ts`).
- Character components must use polymorphic asset resolution: when reference photographs are provided in `public/assets/characters/<id>/`, the component smoothly switches from stylized SVG placeholders to real polaroids without code refactoring.

