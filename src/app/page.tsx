import { SceneCover } from "@/components/scenes/SceneCover";
import { SceneChapter01 } from "@/components/scenes/SceneChapter01";
import { SceneChapter02 } from "@/components/scenes/SceneChapter02";
import { SceneChapter03_Gopalpur } from "@/components/scenes/SceneChapter03_Gopalpur";
import { SceneChapter04_Everyday } from "@/components/scenes/SceneChapter04_Everyday";
import { SceneChapter05_Tree } from "@/components/scenes/SceneChapter05_Tree";
import { SceneChapter06_Arpita } from "@/components/scenes/SceneChapter06_Arpita";
import { SceneChapter07_Adventures } from "@/components/scenes/SceneChapter07_Adventures";
import { SceneChapter08_Life } from "@/components/scenes/SceneChapter08_Life";
import { MemoryGallery } from "@/components/gallery/MemoryGallery";
import { SceneChapter09_Final } from "@/components/scenes/SceneChapter09_Final";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 0. Opening 3D Scrapbook Cover Sequence */}
      <SceneCover />

      {/* 1. Chapter 01: Before the Chaos */}
      <SceneChapter01 />

      {/* 2. Chapter 02: The Great Expansion (With 4 Featured Character Prototypes & Roster) */}
      <SceneChapter02 />

      {/* 3. Chapter 03: Gopalpur: The Night Everything Changed (Pool, 5 PM Lunch Sprint, Ghost Stories, Sunrise) */}
      <SceneChapter03_Gopalpur />

      {/* 4. Chapter 04: The Everyday Chaos (Daily 1 PM Office Lunch & 4:30 PM Roadside Tea Walk) */}
      <SceneChapter04_Everyday />

      {/* 5. Chapter 05: The Gang Family Tree (Interactive Constellation) */}
      <SceneChapter05_Tree />

      {/* 6. Chapter 06: Operation Arpita (Bachelorette Celebration Tribute) */}
      <SceneChapter06_Arpita />

      {/* 7. Chapter 07: The Adventures (Koraput Mountain Trek & Ashutosh Home Holi) */}
      <SceneChapter07_Adventures />

      {/* 8. Chapter 08: Life Happens (Diverging Paths, Unbroken Ties) */}
      <SceneChapter08_Life />

      {/* The Scrapbook Photo Vault (All Real Photographs by Category) */}
      <MemoryGallery />

      {/* 9. Chapter 09: The Final Scrapbook (Master Roster & Closing Letter) */}
      <SceneChapter09_Final />
    </div>
  );
}
