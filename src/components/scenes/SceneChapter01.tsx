"use client";

import React from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { HandwrittenNote } from "../scrapbook/HandwrittenNote";
import { StampBadge } from "../scrapbook/StampBadge";
import { CharacterAvatar } from "../characters/CharacterAvatar";
import { CHARACTERS } from "@/data/characters";

export const SceneChapter01: React.FC = () => {
  const initialCharacters = CHARACTERS.filter((c) =>
    ["dushmanta", "paresh", "shyamalendu", "astha"].includes(c.id)
  );

  return (
    <section
      id="chapter-01"
      className="relative min-h-screen w-full bg-parchment py-24 px-4 sm:px-8 flex flex-col items-center justify-center"
    >
      {/* Background paper texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 01
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Early 2026 • Hyscaler
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            Before the Chaos
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-xl mx-auto mt-4 leading-relaxed">
            "Every great story starts somewhere. Ours started rather quietly with polite hellos and
            separate cafeteria circles."
          </p>
        </div>

        {/* The Early Circle Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full mb-16">
          {/* Left: The First Polaroid */}
          <div className="flex justify-center">
            <Polaroid
              caption="The First Few Faces ☕"
              subcaption="Before the noise began"
              rotation={-3}
              tapeColor="mustard"
              tapePosition="top-left"
              className="w-full max-w-sm"
            >
              <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-paper-aged/50 text-center">
                <div className="flex -space-x-3 mb-4">
                  {initialCharacters.map((c) => (
                    <div key={c.id} className="ring-2 ring-paper-card rounded-full">
                      <CharacterAvatar character={c} size="md" showPropBadge={false} />
                    </div>
                  ))}
                </div>
                <span className="font-handwritten text-xl text-ink-muted">
                  Just 4 or 5 people quietly figuring each other out.
                </span>
              </div>
            </Polaroid>
          </div>

          {/* Right: Handwritten Journal Entry */}
          <div className="bg-paper-card/80 p-8 rounded-scrapbook border border-ink/10 shadow-sm relative">
            <StampBadge
              text="THE SILENT PHASE"
              subtext="MEMORANDUM"
              color="blue"
              rotation={5}
              className="absolute -top-4 -right-2"
            />
            <HandwrittenNote size="lg" color="ink" className="mb-4">
              "We were polite colleagues exchanging shy nods in the morning.
            </HandwrittenNote>
            <p className="font-body text-ink-muted text-base leading-relaxed mb-4">
              There were noticeable pauses in conversations where people pretended to inspect their
              phones. Small groups formed in separate corners. Nobody knew that within months, we
              would be shouting UNO cards at 3 AM and having Sunday feasts together.
            </p>
            <div className="flex items-center gap-2 text-terracotta font-handwritten text-xl">
              <span>Then more people joined...</span>
              <span className="text-2xl">→</span>
            </div>
          </div>
        </div>

        {/* Dotted Trail Indicator to Chapter 02 */}
        <div className="flex flex-col items-center gap-2 opacity-60">
          <span className="font-handwritten text-lg text-ink-muted">
            The group began expanding
          </span>
          <svg className="w-6 h-12 text-terracotta animate-pulse" viewBox="0 0 24 48">
            <path
              d="M12 0 v36 M6 30 l6 6 6-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="4 4"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

