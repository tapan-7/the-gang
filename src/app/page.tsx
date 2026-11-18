import { SceneCover } from "@/components/scenes/SceneCover";
import { SceneChapter01 } from "@/components/scenes/SceneChapter01";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Opening 3D Scrapbook Cover Sequence */}
      <SceneCover />

      {/* Chapter 01: Before the Chaos */}
      <SceneChapter01 />
    </div>
  );
}

