"use client";

import React, { useState } from "react";
import { Character } from "@/types/character";
import { cn } from "@/lib/utils";
import { CharacterAvatar } from "./CharacterAvatar";
import { CharacterDoodle } from "./CharacterDoodle";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

interface CharacterCardProps {
  character: Character;
  rotation?: number;
  className?: string;
  tapeColor?: "mustard" | "dusty-blue" | "terracotta" | "sage";
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  rotation = 0,
  className,
  tapeColor = "mustard",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [easterEggActive, setEasterEggActive] = useState(false);

  // Easter Egg states
  const renderEasterEgg = () => {
    if (!easterEggActive) return null;

    switch (character.id) {
      case "dushmanta":
        return (
          <div className="mt-3 p-3 bg-mustard/20 rounded border border-mustard-dark/30 font-sans text-xs text-ink animate-scaleUp">
            <span className="font-bold block text-mustard-dark">
              🧾 Finance Minister Audit in Progress:
            </span>
            <span>Total Bill: ₹5,460 split by 14 = ₹390 each...</span>
            <span className="block font-handwritten text-base text-terracotta mt-1">
              "Never mind, I'll pay now. Settlement pending forever!"
            </span>
          </div>
        );
      case "shyamalendu":
        return (
          <div className="mt-3 p-3 bg-dusty-blue/20 rounded border border-dusty-blue-dark/30 font-sans text-xs text-ink animate-scaleUp">
            <span className="font-bold block text-dusty-blue-dark">
              📊 Emergency Whiteboard Flowchart:
            </span>
            <span>Joke Told → Syama pauses room → Draws 4 branches explaining punchline → Explains why the branches are logically sound.</span>
            <span className="block font-handwritten text-base text-ink mt-1">
              "Do you get it now, or should I explain the diagram?"
            </span>
          </div>
        );
      case "arpita":
        return (
          <div className="mt-3 p-3 bg-terracotta/20 rounded border border-terracotta-dark/30 font-sans text-xs text-ink animate-scaleUp">
            <span className="font-bold block text-terracotta-dark">
              ❤️ Maternal Food Alert:
            </span>
            <span>Tiffin boxes unpacked! 3 home-made delicacies distributed to all 14 people before dancing starts.</span>
            <span className="block font-handwritten text-base text-terracotta mt-1">
              "Eat properly first, then we can talk!"
            </span>
          </div>
        );
      case "tapan":
        return (
          <div className="mt-3 p-3 bg-sage/20 rounded border border-sage-dark/30 font-sans text-xs text-ink animate-scaleUp">
            <span className="font-bold block text-sage-dark">
              🏀 Stealth Mode Engaged:
            </span>
            <span>Stepped out of loud debate. Acquired snacks. Returned just in time to help when someone genuinely needed support.</span>
            <span className="block font-handwritten text-base text-ink mt-1">
              "Zero drama. Always there when it counts."
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "group relative bg-paper-card rounded-scrapbook p-6 shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 border border-ink/10 flex flex-col justify-between select-none",
        character.id === "tapan" && easterEggActive && "opacity-75 transition-opacity duration-500",
        className
      )}
    >
      {/* Corner Washi Tape */}
      <div className="absolute -top-3 left-6 -rotate-3 z-20 pointer-events-none">
        <WashiTape color={tapeColor} width="w-24" />
      </div>

      <div>
        {/* Top Header Row: Stamp & Title */}
        <div className="flex items-start justify-between mb-4 pt-1">
          <div className="flex flex-col">
            <span className="font-sans text-[11px] font-bold tracking-widest text-terracotta uppercase">
              {character.title}
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight">
              {character.name}
            </h3>
            {character.nickname && (
              <span className="font-handwritten text-lg text-ink-muted -mt-1">
                "{character.nickname}"
              </span>
            )}
          </div>

          <button
            onClick={() => setEasterEggActive(!easterEggActive)}
            className="hover:scale-105 transition-transform"
            title="Click to trigger character action"
          >
            <CharacterAvatar character={character} size="md" />
          </button>
        </div>

        {/* Humorous Tagline */}
        <div className="p-3 bg-parchment/70 rounded border border-ink/5 mb-4">
          <p className="font-handwritten text-xl text-ink leading-snug">
            "{character.tagline}"
          </p>
        </div>

        {/* Narrative Description */}
        <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
          {character.description}
        </p>

        {/* Signature Props Row */}
        <div className="mb-4">
          <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-faint block mb-2">
            Signature Props & Tools
          </span>
          <div className="flex flex-wrap gap-2">
            {character.signatureProps.map((prop, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-parchment border border-ink/10 text-xs font-sans text-ink"
                title={prop.description}
              >
                <CharacterDoodle type={prop.icon} size={16} />
                <span className="font-medium text-[11px]">{prop.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Easter Egg Container */}
        {renderEasterEgg()}
      </div>

      {/* Footer / Expanded Lore Trigger */}
      <div className="pt-4 border-t border-ink/10 mt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-xs font-sans font-bold tracking-wider text-terracotta uppercase hover:text-terracotta-dark transition-colors"
        >
          <span>{isExpanded ? "Close Lore" : "View Lore & Bonds"}</span>
          <span className="font-mono text-sm">{isExpanded ? "−" : "+"}</span>
        </button>

        {isExpanded && (
          <div className="mt-4 pt-3 border-t border-dashed border-ink/15 space-y-3 text-left animate-fadeIn">
            {/* Inside Jokes */}
            {character.insideJokes.length > 0 && (
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-faint block mb-1">
                  Inside Jokes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {character.insideJokes.map((joke, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-paper-aged rounded text-[11px] font-handwritten text-ink font-semibold"
                    >
                      #{joke}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Relationships */}
            {character.relationships.length > 0 && (
              <div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-ink-faint block mb-1">
                  Known Bonds:
                </span>
                <div className="space-y-1">
                  {character.relationships.map((rel, i) => (
                    <div key={i} className="text-xs text-ink-muted">
                      <span className="font-semibold text-ink">→ {rel.targetId}:</span>{" "}
                      <span className="italic font-handwritten text-sm text-terracotta">
                        "{rel.label}"
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Quote / Tribute */}
            {character.quotes && character.quotes.length > 0 && (
              <div className="p-3 bg-terracotta/10 rounded border border-terracotta/20 mt-2">
                <span className="font-sans text-[9px] uppercase tracking-wider font-bold text-terracotta block">
                  {character.quotes[0].author
                    ? `From ${character.quotes[0].author}:`
                    : "Cherished Words:"}
                </span>
                <p className="font-handwritten text-base text-ink mt-0.5 leading-snug">
                  "{character.quotes[0].quote}"
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

