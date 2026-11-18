import { SceneCover } from "@/components/scenes/SceneCover";
import { SceneChapter01 } from "@/components/scenes/SceneChapter01";
import { SceneChapter02 } from "@/components/scenes/SceneChapter02";
import { SceneChapter03_Gopalpur } from "@/components/scenes/SceneChapter03_Gopalpur";
import { SceneChapter04_Everyday } from "@/components/scenes/SceneChapter04_Everyday";
import { SceneChapter05_Celebrations } from "@/components/scenes/SceneChapter05_Celebrations";
import { SceneChapter05_Tree } from "@/components/scenes/SceneChapter05_Tree";
import { SceneChapter07_Adventures } from "@/components/scenes/SceneChapter07_Adventures";
import { SceneChapter08_Arpita } from "@/components/scenes/SceneChapter08_Arpita";
import { SceneChapter08_Life } from "@/components/scenes/SceneChapter08_Life";
import { MemoryGallery } from "@/components/gallery/MemoryGallery";
import { SceneChapter09_Final } from "@/components/scenes/SceneChapter09_Final";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 0. Opening Handcrafted Memory Book Cover Sequence */}
      <SceneCover />

      {/* 1. Chapter 01: Before the Chaos */}
      <SceneChapter01 />

      {/* 2. Chapter 02: The Great Expansion (14 Personalities Collide) */}
      <SceneChapter02 />

      {/* 3. Chapter 03: Gopalpur — When Connections Began (January 10–13, 2026) */}
      <SceneChapter03_Gopalpur />

      {/* 4. Chapter 04: Everyday Office Life (1:00 PM Lunch, 4:30 PM Tea Walk, Elevator Gatherings) */}
      <SceneChapter04_Everyday />

      {/* 5. Chapter 05: Outings & Celebrations (Birthdays, Road Trips, Sunday Room Feasts) */}
      <SceneChapter05_Celebrations />

      {/* 6. Chapter 06: The Gang Family Tree (Evergreen Relationship Constellation) */}
      <SceneChapter05_Tree />

      {/* 7. Chapter 07: The Wild Adventures (Koraput Mountain Trek & Ashutosh's Home Holi) */}
      <SceneChapter07_Adventures />

      {/* 8. Chapter 08: Operation Arpita — The 5 PM Lunch & Celebration (Nov 14–16, 2026 Recent Milestone) */}
      <SceneChapter08_Arpita />

      {/* Chapter 09 Context: Diverging Paths */}
      <SceneChapter08_Life />

      {/* The Scrapbook Photo Vault (All Real Photographs by Category) */}
      <MemoryGallery />

      {/* 9. Chapter 09: The Final Scrapbook & The Last Page */}
      <SceneChapter09_Final />
    </div>
  );
}
