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
      className="relative min-h-screen w-full bg-[#FAF5EB] text-ink py-28 px-4 sm:px-8 border-t-2 border-ink/10 overflow-hidden"
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
              The Unfinished Story
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
            The Pages Ahead
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-terracotta max-w-xl mx-auto mt-4 leading-relaxed">
            "A little chaos. A lot of memories. And empty pages waiting for the next trip."
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <StampBadge text="UNO-2026 FOREVER" subtext="14 HEARTS • ONE STORY" color="red" rotation={-4} />
            <StampBadge text="FRIENDSHIP LOADING" subtext="TO BE CONTINUED" color="blue" rotation={3} />
          </div>
        </div>

        {/* Master Group Roster Circle (All 14 Members) */}
        <div className="bg-[#FFFDF9] p-8 sm:p-12 rounded-scrapbook border-2 border-ink/15 shadow-md mb-16 relative">
          <div className="absolute -top-3.5 left-12 -rotate-2 pointer-events-none">
            <WashiTape color="mustard" width="w-28" />
          </div>
          <div className="absolute -top-3.5 right-12 rotate-3 pointer-events-none">
            <WashiTape color="dusty-blue" width="w-28" />
          </div>

          <div className="text-center mb-8">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink">
              The 14 Members of UNO-2026
            </h3>
            <p className="font-handwritten text-xl text-ink-muted mt-1">
              "We came for work. We stayed for each other."
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
            {CHARACTERS.map((char) => (
              <div
                key={char.id}
                className="flex flex-col items-center text-center p-2 rounded-xl bg-parchment/60 hover:bg-parchment transition-colors border border-ink/5"
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

        {/* The Open-Ended Memory Book (Blank Pages Waiting to Be Filled) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left Page: The Letter to the Gang */}
          <div className="bg-[#FFFDF9] p-8 sm:p-10 rounded-scrapbook border-2 border-ink/15 shadow-scrapbook relative">
            <div className="absolute -top-3 left-6 -rotate-1 pointer-events-none">
              <WashiTape color="terracotta" width="w-32" />
            </div>

            <p className="font-display font-bold text-2xl text-ink leading-tight mb-4">
              To UNO-2026,
            </p>

            <p className="font-body text-sm text-ink leading-relaxed mb-3">
              We came here for work. Somewhere along the way, we found people who made ordinary days feel special.
            </p>

            <p className="font-body text-sm text-ink leading-relaxed mb-3">
              There were arguments, jokes, 1:00 PM table mergers, roadside cutting chais, elevator mirror selfies, midnight UNO battles at Gopalpur, and 5:00 PM bachelorette lunches.
            </p>

            <p className="font-body text-sm text-ink leading-relaxed mb-4">
              We may take different paths or work from different desks. But whenever these pages are opened, this little gang is right here.
            </p>

            <div className="border-t border-ink/10 pt-4 text-center">
              <p className="font-display font-black text-xl text-terracotta">
                A little chaos. A lot of memories.
              </p>
              <p className="font-handwritten text-lg text-ink-muted mt-1">
                Friendship that became much bigger than the place where it began.
              </p>
            </div>
          </div>

          {/* Right Page: The Blank Page — More Pages to Fill */}
          <div className="bg-[#FFFDF9] p-8 sm:p-10 rounded-scrapbook border-2 border-dashed border-ink/25 shadow-scrapbook relative flex flex-col justify-between">
            <div className="absolute -top-3 right-6 rotate-2 pointer-events-none">
              <WashiTape color="sage" width="w-28" />
            </div>

            <div className="text-center my-auto py-8">
              <div className="w-16 h-16 rounded-full bg-parchment border-2 border-dashed border-ink/30 mx-auto flex items-center justify-center text-3xl mb-4">
                📖
              </div>

              <h4 className="font-display font-black text-2xl text-ink mb-2">
                Still More Pages to Fill
              </h4>

              <p className="font-handwritten text-xl text-ink-muted max-w-xs mx-auto leading-relaxed">
                "No farewell. No final goodbye. Just a blank page waiting for the next spontaneous plan."
              </p>

              {/* Friendship Loading Progress Bar */}
              <div className="mt-6 max-w-xs mx-auto">
                <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-1">
                  <span>Friendship Status</span>
                  <span className="font-bold text-terracotta">Loading... 100%</span>
                </div>
                <div className="w-full h-3 bg-parchment rounded-full overflow-hidden border border-ink/20 p-0.5">
                  <div className="h-full bg-gradient-to-r from-terracotta via-mustard to-sage rounded-full w-full animate-pulse" />
                </div>
                <span className="font-handwritten text-xs text-ink-faint block mt-1.5">
                  To be continued in real life ✦
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-ink/10 text-xs text-ink-muted">
              <span>UNO-2026</span>
              <StampBadge text="CHAPTER ∞" subtext="TO BE CONTINUED" color="blue" rotation={2} />
            </div>
          </div>
        </div>

        {/* Back to Top / Replay Journey Button */}
        <div className="text-center">
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 bg-ink text-parchment px-8 py-3.5 rounded-full font-display font-bold text-sm tracking-wider uppercase shadow-xl hover:bg-terracotta transition-all duration-300 hover:scale-105"
          >
            <span>Replay the Journey</span>
            <span className="group-hover:-translate-y-1 transition-transform">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
};
