"use client";

import React from "react";
import { CHARACTERS } from "@/data/characters";
import { CharacterAvatar } from "../characters/CharacterAvatar";
import { StampBadge } from "../scrapbook/StampBadge";
import { WashiTape } from "../scrapbook/WashiTape";

export const SceneChapter09_Final: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="chapter-09"
      className="relative min-h-screen w-full bg-parchment text-ink py-28 px-4 sm:px-8 border-t-2 border-ink/10"
    >
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 09
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              The Grand Finale
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
            The Final Scrapbook
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-terracotta max-w-xl mx-auto mt-4 leading-relaxed">
            "A little chaos. A lot of memories."
          </p>

          <div className="mt-4">
            <StampBadge text="UNO-2026 FOREVER" subtext="14 HEARTS • ONE STORY" color="red" rotation={-4} />
          </div>
        </div>

        {/* Master Group Roster Circle (All 14 Members) */}
        <div className="bg-paper-card p-8 sm:p-12 rounded-scrapbook border border-ink/10 shadow-md mb-16 relative">
          <div className="absolute -top-3 left-12 -rotate-2">
            <WashiTape color="mustard" width="w-28" />
          </div>
          <div className="absolute -top-3 right-12 rotate-3">
            <WashiTape color="dusty-blue" width="w-28" />
          </div>

          <div className="text-center mb-8">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink">
              The 14 Members of THE GANG
            </h3>
            <p className="font-handwritten text-xl text-ink-muted mt-1">
              "We came for work. We stayed for each other."
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {CHARACTERS.map((char) => (
              <div
                key={char.id}
                className="flex flex-col items-center text-center p-2 rounded bg-parchment/50 hover:bg-parchment transition-colors"
              >
                <CharacterAvatar character={char} size="sm" showPropBadge={false} />
                <span className="font-display font-bold text-xs text-ink mt-2">
                  {char.name}
                </span>
                <span className="font-handwritten text-[11px] text-terracotta leading-tight">
                  {char.nickname || char.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The Final Letter Spread */}
        <div className="bg-paper-card/90 p-8 sm:p-14 rounded-scrapbook border border-ink/10 shadow-scrapbook relative max-w-3xl mx-auto mb-16">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-1">
            <WashiTape color="terracotta" width="w-36" />
          </div>

          <div className="prose prose-stone max-w-none text-center sm:text-left">
            <p className="font-display font-bold text-2xl sm:text-3xl text-ink leading-tight mb-6">
              To Our Gang,
            </p>

            <p className="font-body text-base text-ink leading-relaxed mb-4">
              We came here for work.
            </p>

            <p className="font-body text-base text-ink leading-relaxed mb-4">
              Somewhere along the way, we found people who made ordinary days feel special.
            </p>

            <p className="font-body text-base text-ink leading-relaxed mb-4">
              There were arguments, jokes, trips, celebrations, endless conversations, unexpected
              kindness, and a thousand little moments that probably seemed ordinary when they happened.
            </p>

            <p className="font-body text-base text-ink leading-relaxed mb-4">
              We may not always sit at the same tables, take the same trips, or see each other every day.
            </p>

            <p className="font-body text-base text-ink leading-relaxed mb-6">
              But somewhere in these photographs, these jokes, these stories, and these memories,
              this little gang will always exist.
            </p>

            <div className="border-t border-b border-ink/10 py-6 my-6 text-center">
              <p className="font-display font-black text-2xl sm:text-3xl text-terracotta">
                A little chaos. A lot of memories.
              </p>
              <p className="font-handwritten text-xl sm:text-2xl text-ink-muted mt-2">
                And a friendship that became much bigger than the place where it started.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="font-sans text-xs font-bold text-ink-faint tracking-widest uppercase">
                EST. HYSCALER 2026 • UNO-2026
              </span>
              <StampBadge text="SEALED WITH LOVE" subtext="FOREVER" color="red" rotation={-5} />
            </div>
          </div>
        </div>

        {/* Back to Top / Replay Journey Button */}
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 bg-ink text-parchment px-6 py-3 rounded-full font-display font-bold text-sm tracking-wider uppercase shadow-lg hover:bg-terracotta transition-colors"
          >
            <span>Replay the Journey</span>
            <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
};

