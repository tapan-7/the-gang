"use client";

import React from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

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

        {/* 2-Grid of the Core Daily Office Rituals with Real Photos */}
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
                imageSrc="/lunch/IMG_20260220_132922747.jpg"
                caption="1:00 PM Lunch Army 🍱"
                subcaption="Jayashree's Inspection"
                rotation={-2}
                tapeColor="mustard"
                tapePosition="none"
                className="w-full max-w-xs"
              />
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
                imageSrc="/tea%20breaks/IMG_20260526_171343471.jpg"
                caption="4:30 PM Chai Break ☕"
                subcaption="Roadside Tea Stall"
                rotation={2}
                tapeColor="terracotta"
                tapePosition="none"
                className="w-full max-w-xs"
              />
            </div>
          </div>
        </div>

        {/* 3. Sunday Feasts & Elevator Shenanigans */}
        <div className="bg-paper-aged/80 p-8 rounded-scrapbook border border-ink/10 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <span className="font-handwritten text-2xl text-terracotta block">
                Sundays & Room Feasts
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
                imageSrc="/lunch/IMG-20260822-WA0189.jpg"
                caption="Room Feasts & Movie Debates 🍛"
                subcaption="Dushmanta & Paresh's Room"
                rotation={-1.5}
                tapeColor="sage"
                tapePosition="top-center"
                className="w-full max-w-xs"
              />
            </div>
          </div>

          {/* Elevator Gang Mini Feature */}
          <div className="pt-6 border-t border-ink/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="text-xl">🛗</span>
                <span className="font-display font-bold text-lg text-ink">
                  The Elevator Gang Tradition
                </span>
              </div>
              <p className="font-body text-xs text-ink-muted leading-relaxed">
                Stuffing 14 people into a 10-person elevator, taking mirror selfies, and laughing until the doors open.
              </p>
            </div>
            <div className="w-full sm:w-auto flex justify-center">
              <Polaroid
                imageSrc="/elevator%20photos/IMG-20261016-WA0083.jpg"
                caption="Crammed in the Lift 🛗"
                subcaption="Post-lunch elevator tradition"
                rotation={2}
                tapeColor="dusty-blue"
                tapePosition="top-right"
                className="w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
