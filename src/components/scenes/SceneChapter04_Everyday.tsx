"use client";

import React from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";
import { HandwrittenNote } from "../scrapbook/HandwrittenNote";

export const SceneChapter04_Everyday: React.FC = () => {
  return (
    <section
      id="chapter-04"
      className="relative min-h-screen w-full bg-parchment py-28 px-4 sm:px-8 border-t border-ink/10"
    >
      {/* Subtle paper grain */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Chapter 04 Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 04
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Daily Life 2026 • The Sacred Rituals
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            The Everyday Chaos
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Ordinary days stopped feeling ordinary because we spent them together.
            The small rituals became our greatest memories."
          </p>
        </div>

        {/* 2-Grid of the Core Daily Office Rituals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 1. Daily 1:00 PM Office Cafeteria Lunch */}
          <div className="relative bg-paper-card p-6 sm:p-8 rounded-scrapbook border border-ink/10 shadow-sm flex flex-col justify-between">
            <div className="absolute -top-3 left-6 -rotate-2">
              <WashiTape color="mustard" width="w-24" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
                  Daily • 1:00 PM Sharp
                </span>
                <StampBadge text="TABLE MERGER" subtext="CAFETERIA" color="blue" rotation={-4} />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink mb-2">
                The Merged Cafeteria Tables
              </h3>

              <p className="font-body text-sm text-ink-muted leading-relaxed mb-6">
                Dragging two massive cafeteria tables together to seat the entire 14-person army.
                Jayashree on duty conducting the daily morning lunchbox inspection ("What did you bring to eat?"),
                tiffin containers passed around, and endless debates over food.
              </p>
            </div>

            <div className="flex justify-center">
              <Polaroid
                caption="1:00 PM Lunch Army 🍱"
                subcaption="Jayashree's Inspection"
                rotation={-2}
                tapeColor="mustard"
                tapePosition="none"
                className="w-full max-w-xs"
              >
                <div className="w-full h-full p-4 flex flex-col items-center justify-center bg-paper-aged text-center">
                  <span className="text-3xl mb-1">🍱</span>
                  <span className="font-display font-bold text-sm text-ink">Two Tables Merged</span>
                  <span className="font-handwritten text-base text-ink-muted">
                    "Tapan finished 3 portions before Syama finished his joke."
                  </span>
                </div>
              </Polaroid>
            </div>
          </div>

          {/* 2. Daily 4:30 PM Outside Tea Stall Walk */}
          <div className="relative bg-paper-card p-6 sm:p-8 rounded-scrapbook border border-ink/10 shadow-sm flex flex-col justify-between">
            <div className="absolute -top-3 right-6 rotate-3">
              <WashiTape color="terracotta" width="w-24" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase">
                  Daily • 4:30 PM Sacred Ritual
                </span>
                <StampBadge text="TEA RUN" subtext="CUTTING CHAI" color="red" rotation={6} />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink mb-2">
                4:30 PM: The Tea Stall Walk
              </h3>

              <p className="font-body text-sm text-ink-muted leading-relaxed mb-6">
                The sacred afternoon escape. The whole gang stepping out of the office together
                for a brisk walk outside to the local roadside tea stall. Steaming glasses of cutting chai,
                crispy biscuits, roadside gossip, and hilarious laughter in the open air.
              </p>
            </div>

            <div className="flex justify-center">
              <Polaroid
                caption="4:30 PM Chai Break ☕"
                subcaption="Roadside Tea Stall"
                rotation={2}
                tapeColor="terracotta"
                tapePosition="none"
                className="w-full max-w-xs"
              >
                <div className="w-full h-full p-4 flex flex-col items-center justify-center bg-paper-aged text-center">
                  <span className="text-3xl mb-1">☕</span>
                  <span className="font-display font-bold text-sm text-ink">Cutting Chai & Banter</span>
                  <span className="font-handwritten text-base text-ink-muted">
                    "Nothing beats stepping outside with the gang for hot chai."
                  </span>
                </div>
              </Polaroid>
            </div>
          </div>
        </div>

        {/* 3. Sunday Feasts & Couch Conversations */}
        <div className="bg-paper-aged/80 p-8 rounded-scrapbook border border-ink/10 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-handwritten text-2xl text-terracotta block">
                Sundays & Movie Nights
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mt-1">
                Sunday Feasts in Paresh & Dushmanta's Room
              </h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed mt-3">
                Paresh wearing his chef apron, aromas of delicious spices drifting into the hall,
                food shared on the floor, and Dushmanta delivering uncompromising movie reviews.
              </p>
              <div className="mt-4 p-3 bg-paper-card rounded border border-ink/5">
                <p className="font-handwritten text-xl text-ink">
                  "Paresh can write a poem about dinner before dinner is even served."
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Polaroid
                caption="Room Feasts & Movie Debates 🍛"
                subcaption="Dushmanta & Paresh's Room"
                rotation={-1}
                tapeColor="sage"
                tapePosition="top-center"
                className="w-full max-w-xs"
              >
                <div className="w-full h-full p-4 flex flex-col items-center justify-center bg-parchment text-center">
                  <span className="text-3xl mb-1">🍲</span>
                  <span className="font-display font-bold text-sm text-ink">Sunday Room Feasts</span>
                  <span className="font-handwritten text-base text-ink-muted">
                    "Full stomachs, endless laughs."
                  </span>
                </div>
              </Polaroid>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

