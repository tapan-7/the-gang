"use client";

import React, { useState } from "react";
import { CHARACTERS } from "@/data/characters";
import { CharacterCard } from "../characters/CharacterCard";
import { CharacterAvatar } from "../characters/CharacterAvatar";
import { StampBadge } from "../scrapbook/StampBadge";
import { CharacterDoodle } from "../characters/CharacterDoodle";

export const SceneChapter02: React.FC = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>("tapan");
  const [filterCircle, setFilterCircle] = useState<"all" | "planners" | "food" | "creatives">("all");

  const filteredCharacters = CHARACTERS.filter((c) => {
    if (filterCircle === "all") return true;
    if (filterCircle === "planners") return ["dushmanta", "paresh", "astha", "subhashree", "shyamalendu"].includes(c.id);
    if (filterCircle === "food") return ["arpita", "asutosh", "ashutosh", "jayashree"].includes(c.id);
    if (filterCircle === "creatives") return ["soumya", "niyaz", "tanu", "tapan", "yash"].includes(c.id);
    return true;
  });

  const activeChar = CHARACTERS.find((c) => c.id === selectedCharacterId) || CHARACTERS[0];

  return (
    <section
      id="chapter-02"
      className="relative min-h-screen w-full bg-[#FAF5EB] py-24 sm:py-32 px-4 sm:px-8 border-t border-b border-ink/10 overflow-hidden"
    >
      {/* Background Kraft Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Chapter 02 Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 02
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              The Expansion • Fourteen Personalities
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            The Great Expansion
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "One by one, fourteen completely different humans collided.
            Writers, coders, bill payers, volleyball players, and daydreamers—united into UNO-2026."
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <StampBadge text="UNO-2026 ROSTER" subtext="ALL 14 DISTINCT" color="red" rotation={-3} />
            <StampBadge text="ORIGINAL IDENTITIES" subtext="NO CONFLATIONS" color="blue" rotation={2} />
          </div>
        </div>

        {/* Filter Tabs for the 14 Members */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          <button
            onClick={() => setFilterCircle("all")}
            className={`px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border ${
              filterCircle === "all"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            All 14 Members
          </button>
          <button
            onClick={() => setFilterCircle("planners")}
            className={`px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border ${
              filterCircle === "planners"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            📋 The Planners & Orators (5)
          </button>
          <button
            onClick={() => setFilterCircle("food")}
            className={`px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border ${
              filterCircle === "food"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            🍲 The Food & Warmth Circle (4)
          </button>
          <button
            onClick={() => setFilterCircle("creatives")}
            className={`px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border ${
              filterCircle === "creatives"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            🏐 The Athletes, Coders & Dreamers (5)
          </button>
        </div>

        {/* 14 Character Interactive Selector Bar */}
        <div className="bg-[#FFFDF9] p-4 sm:p-6 rounded-scrapbook border-2 border-ink/15 shadow-md mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 sm:gap-4 justify-items-center">
            {filteredCharacters.map((char) => {
              const isSelected = char.id === selectedCharacterId;
              return (
                <button
                  key={char.id}
                  onClick={() => setSelectedCharacterId(char.id)}
                  className={`w-full flex flex-col items-center p-2 rounded-xl transition-all duration-300 group ${
                    isSelected
                      ? "bg-terracotta/10 border-2 border-terracotta scale-105 shadow-sm"
                      : "border border-ink/10 hover:border-terracotta/40 hover:bg-parchment/60"
                  }`}
                >
                  <div className="relative">
                    <CharacterAvatar character={char} size="sm" showPropBadge={false} />
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-terracotta rounded-full ring-2 ring-white" />
                    )}
                  </div>
                  <span className="font-display font-bold text-xs text-ink mt-2 text-center truncate w-full">
                    {char.name}
                  </span>
                  <span className="font-handwritten text-[11px] text-terracotta text-center truncate w-full">
                    {char.nickname || char.title.split(" ")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Character Spotlight Profile Card */}
        <div className="max-w-2xl mx-auto">
          <CharacterCard
            character={activeChar}
            rotation={0}
            tapeColor="mustard"
          />
        </div>

        {/* Transition to Chapter 03 */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="font-handwritten text-2xl text-ink-muted">
              Next: The annual road trip where connections deepened
            </span>
            <span className="font-display font-bold text-lg text-terracotta tracking-wider uppercase">
              Chapter 03: Gopalpur Coastal Journey ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
