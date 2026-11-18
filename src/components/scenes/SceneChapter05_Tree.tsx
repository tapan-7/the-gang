"use client";

import React, { useState } from "react";
import { CHARACTERS } from "@/data/characters";
import { CharacterAvatar } from "../characters/CharacterAvatar";
import { StampBadge } from "../scrapbook/StampBadge";
import { WashiTape } from "../scrapbook/WashiTape";

export const SceneChapter05_Tree: React.FC = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>("arpita");

  const selectedChar = CHARACTERS.find((c) => c.id === selectedCharacterId) || CHARACTERS[6]; // Arpita default

  const specialBonds = [
    {
      title: "Maternal Adoption",
      description: "Arpita is the mother of the group. Dushmanta and Niyaz are lovingly her adopted sons.",
      members: ["arpita", "dushmanta", "niyaz"],
    },
    {
      title: "The Bitter Half",
      description: "Shyamalendu (endless logical flowchart explainer) and Asutosh (zen vegetable philosopher).",
      members: ["shyamalendu", "asutosh"],
    },
    {
      title: "The 2 Musketeers",
      description: "Astha, Subhashree, and Arpita—the unstoppable trio of sisters and event coordinators (preserving original gang logic!).",
      members: ["astha", "subhashree", "arpita"],
    },
    {
      title: "The Bickering Roommates",
      description: "Paresh (poet & masterchef) and Dushmanta (instant bill payer & movie critic).",
      members: ["paresh", "dushmanta"],
    },
    {
      title: "The Biographer & The Invisible Man",
      description: "Soumya (code machine) penned the celebrated character poem honoring Tapan (quiet listener & trek hero).",
      members: ["soumya", "tapan"],
    },
  ];

  return (
    <section
      id="chapter-05"
      className="relative min-h-screen w-full bg-[#E8DDC9] py-28 px-4 sm:px-8 border-t border-ink/10"
    >
      {/* Background Kraft Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#262522_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 05
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              The Constellation of Lore
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            The Gang Family Tree
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Not a corporate org chart. A playful constellation of inside jokes, maternal bonds,
            and private humor that makes sense only to us."
          </p>
        </div>

        {/* Constellation Grid of 14 Members */}
        <div className="bg-paper-card p-6 sm:p-10 rounded-scrapbook border border-ink/10 shadow-sm mb-12 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-1">
            <WashiTape color="mustard" width="w-32" />
          </div>

          <div className="text-center mb-8">
            <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
              Click Any Member to Inspect Their Connections
            </span>
          </div>

          {/* 14 Avatars interactive ribbon */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {CHARACTERS.map((char) => {
              const isSelected = char.id === selectedCharacterId;
              const isConnected = selectedChar.relationships.some((r) => r.targetId === char.id);

              return (
                <button
                  key={char.id}
                  onClick={() => setSelectedCharacterId(char.id)}
                  className={`relative flex flex-col items-center p-3 rounded-lg transition-all duration-200 hover:-translate-y-1 ${
                    isSelected
                      ? "bg-terracotta/15 ring-2 ring-terracotta scale-105"
                      : isConnected
                      ? "bg-mustard/20 ring-1 ring-mustard-dark/40"
                      : "opacity-75 hover:opacity-100"
                  }`}
                >
                  <CharacterAvatar character={char} size="sm" showPropBadge={false} />
                  <span className="font-display text-xs font-bold text-ink mt-1.5">
                    {char.name}
                  </span>
                  {isConnected && (
                    <span className="font-handwritten text-[10px] text-terracotta font-bold mt-0.5">
                      ★ Connected
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Member Detail & Bonds Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          {/* Left: Selected Character Card */}
          <div className="bg-paper-card p-6 sm:p-8 rounded-scrapbook border border-ink/10 shadow-sm relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
                  {selectedChar.title}
                </span>
                <h3 className="font-display font-black text-3xl text-ink">
                  {selectedChar.name}
                </h3>
              </div>
              <CharacterAvatar character={selectedChar} size="md" />
            </div>

            <div className="p-3 bg-parchment rounded border border-ink/5 mb-4">
              <p className="font-handwritten text-xl text-ink">
                "{selectedChar.tagline}"
              </p>
            </div>

            <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
              {selectedChar.description}
            </p>

            {/* Direct Connections */}
            <div className="border-t border-ink/10 pt-4">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-faint block mb-2">
                Active Lore Connections:
              </span>
              {selectedChar.relationships.length > 0 ? (
                <div className="space-y-2">
                  {selectedChar.relationships.map((rel, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded bg-paper-aged/60 border border-ink/5 flex flex-col"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display font-semibold text-xs text-ink capitalize">
                          → {rel.targetId}
                        </span>
                        <span className="font-handwritten text-base text-terracotta font-bold">
                          "{rel.label}"
                        </span>
                      </div>
                      <span className="font-body text-[11px] text-ink-muted mt-1">
                        {rel.context}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="font-handwritten text-sm text-ink-muted">
                  A peaceful presence connected with everyone in the gang.
                </span>
              )}
            </div>
          </div>

          {/* Right: The Gang's 5 Iconic Special Lore Bonds */}
          <div className="bg-paper-card p-6 sm:p-8 rounded-scrapbook border border-ink/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-display font-bold text-xl text-ink">
                Legendary Gang Bonds
              </h4>
              <StampBadge text="GANG LORE" subtext="CANON" color="red" rotation={-3} />
            </div>

            <div className="space-y-3">
              {specialBonds.map((bond, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-parchment/80 border border-ink/10 hover:border-terracotta transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-bold text-sm text-ink">
                      {bond.title}
                    </span>
                    <span className="font-sans text-[10px] tracking-wider text-terracotta uppercase font-bold">
                      {bond.members.join(" • ")}
                    </span>
                  </div>
                  <p className="font-body text-xs text-ink-muted leading-relaxed">
                    {bond.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

