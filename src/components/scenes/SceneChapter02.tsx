"use client";

import React, { useState } from "react";
import { CHARACTERS } from "@/data/characters";
import { CharacterCard } from "../characters/CharacterCard";
import { CharacterAvatar } from "../characters/CharacterAvatar";
import { StampBadge } from "../scrapbook/StampBadge";
import { WashiTape } from "../scrapbook/WashiTape";

export const SceneChapter02: React.FC = () => {
  // Phase 5 prototype characters
  const prototypeCharacterIds = ["dushmanta", "arpita", "shyamalendu", "tapan"];
  const prototypeCharacters = CHARACTERS.filter((c) => prototypeCharacterIds.includes(c.id));
  const remainingCharacters = CHARACTERS.filter((c) => !prototypeCharacterIds.includes(c.id));

  const [selectedRosterChar, setSelectedRosterChar] = useState<string | null>(null);

  const activeChar = CHARACTERS.find((c) => c.id === selectedRosterChar);

  return (
    <section
      id="chapter-02"
      className="relative min-h-screen w-full bg-paper-aged py-28 px-4 sm:px-8 border-t border-b border-ink/10"
    >
      {/* Background paper texture pattern */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#262522_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Chapter 02 Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 02
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Spring 2026 • The Arrival of Chaos
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            The Great Expansion
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Tapan arrived. Then another bunch arrived. Suddenly, fourteen radically different humans
            shared the same tables."
          </p>
        </div>

        {/* Phase 5 Featured Character Profiles Grid */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-8 border-b border-ink/15 pb-4">
            <div>
              <span className="font-handwritten text-2xl text-terracotta block">
                Character Profiles (Prototype Showcase)
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink">
                Four Distinct Personalities
              </h3>
            </div>
            <StampBadge text="ORIGINAL BIBLE" subtext="VERIFIED 2026" color="red" rotation={-4} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prototypeCharacters.map((char, index) => {
              const rotations = [-2, 1.5, -1, 2];
              const tapes: ("mustard" | "dusty-blue" | "terracotta" | "sage")[] = [
                "mustard",
                "terracotta",
                "dusty-blue",
                "sage",
              ];
              return (
                <CharacterCard
                  key={char.id}
                  character={char}
                  rotation={rotations[index % rotations.length]}
                  tapeColor={tapes[index % tapes.length]}
                />
              );
            })}
          </div>
        </div>

        {/* The Wider Roster Stream */}
        <div className="mt-20 pt-12 border-t-2 border-dashed border-ink/15">
          <div className="text-center mb-8">
            <span className="font-handwritten text-2xl text-terracotta">
              The full 14-member circle
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-1">
              Tap any member to preview their dossier
            </h3>
            <p className="font-body text-xs text-ink-muted mt-1">
              Paresh, Astha, Asutosh, Ashutosh, Subhashree, Soumya, Niyaz, Jayashree, Tanu, Yash
            </p>
          </div>

          {/* Quick Roster Selector Avatars */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            {CHARACTERS.map((char) => (
              <button
                key={char.id}
                onClick={() => setSelectedRosterChar(char.id === selectedRosterChar ? null : char.id)}
                className={`group flex flex-col items-center p-2 rounded transition-transform hover:-translate-y-1 ${
                  selectedRosterChar === char.id ? "ring-2 ring-terracotta bg-paper-card" : ""
                }`}
              >
                <CharacterAvatar character={char} size="sm" showPropBadge={false} />
                <span className="font-display text-xs font-semibold text-ink mt-1">
                  {char.name}
                </span>
                <span className="font-handwritten text-[11px] text-terracotta">
                  {char.nickname || char.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Character Preview Spotlight */}
          {activeChar && (
            <div className="max-w-xl mx-auto animate-scaleUp">
              <CharacterCard character={activeChar} rotation={0} tapeColor="terracotta" />
            </div>
          )}
        </div>

        {/* Transition to Chapter 03 */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-2">
            <span className="font-handwritten text-2xl text-ink-muted">
              Next: The annual retreat that changed everything
            </span>
            <span className="font-display font-bold text-lg text-terracotta tracking-wider uppercase">
              Chapter 03: Gopalpur Beach ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

