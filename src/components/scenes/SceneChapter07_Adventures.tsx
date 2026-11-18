"use client";

import React from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

export const SceneChapter07_Adventures: React.FC = () => {
  return (
    <section
      id="chapter-07"
      className="relative min-h-screen w-full bg-[#3F4F42] text-parchment py-28 px-4 sm:px-8 border-t border-ink/10"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F3EBDD_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-mustard font-bold">
              Chapter 07
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
            <span className="font-sans text-xs tracking-widest text-parchment/60 uppercase">
              Beyond Office Walls
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment tracking-tight">
            The Adventures
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light max-w-2xl mx-auto mt-4 leading-relaxed">
            "From misty mountain trails to the warmth of family tables—friendship tested by steep climbs
            and sealed with colorful gulal."
          </p>
        </div>

        {/* 2-Part Adventure Showcase */}
        <div className="space-y-16">
          {/* Part 1: The Koraput Trek */}
          <div className="bg-[#2D3B30] p-8 sm:p-12 rounded-scrapbook border border-parchment/15 shadow-xl relative">
            <div className="absolute -top-3 left-8 -rotate-2">
              <WashiTape color="sage" width="w-28" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-sans text-xs font-bold tracking-widest text-mustard uppercase">
                    Trek Elevation • Koraput Hills
                  </span>
                  <StampBadge text="SUMMIT TREK" subtext="KORAPUT" color="red" rotation={-4} />
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-parchment mb-4">
                  The Mountain Trail & Quiet Care
                </h3>

                <p className="font-body text-sm text-parchment/85 leading-relaxed mb-6">
                  Steep ascents, heavy backpacks, and winding mountain trails with Tapan, Astha,
                  Dushmanta, Niyaz, Yash, and Arpita. When exhaustion set in and legs could barely stand,
                  Tapan quietly sat down and massaged Arpita's leg so she could keep walking.
                </p>

                {/* Arpita's Quote (Strictly Attributed) */}
                <div className="p-5 bg-parchment/10 rounded-lg border-l-4 border-mustard">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-mustard block mb-1">
                    Arpita's Heartfelt Words:
                  </span>
                  <p className="font-handwritten text-xl sm:text-2xl text-parchment leading-snug">
                    "I'll never forget how you massaged my leg when I could barely stand while trekking. ❤️
                    That moment will always remind me that care isn't just about words; sometimes, it's about
                    showing up when someone needs you the most."
                  </p>
                  <span className="font-sans text-xs text-parchment/60 font-semibold block text-right mt-2">
                    — Arpita (to Tapan)
                  </span>
                </div>
              </div>

              <div className="flex justify-center">
                <Polaroid
                  caption="Koraput Summit 🏔️"
                  subcaption="Care in quiet moments"
                  rotation={-2}
                  tapeColor="sage"
                  tapePosition="top-center"
                  className="w-full max-w-sm"
                >
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-paper-aged text-ink text-center">
                    <span className="text-4xl mb-2">🥾⛰️</span>
                    <span className="font-display font-bold text-lg text-ink">Koraput High Trail</span>
                    <span className="font-handwritten text-base text-ink-muted mt-1">
                      "Tapan, Astha, Dushmanta, Niyaz, Yash, Arpita"
                    </span>
                  </div>
                </Polaroid>
              </div>
            </div>
          </div>

          {/* Part 2: Ashutosh's Home Feasts & Holi */}
          <div className="bg-[#2D3B30] p-8 sm:p-12 rounded-scrapbook border border-parchment/15 shadow-xl relative">
            <div className="absolute -top-3 right-8 rotate-3">
              <WashiTape color="mustard" width="w-28" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                <Polaroid
                  caption="Home Feasts & Holi Colors 🎨"
                  subcaption="Ashutosh's Home"
                  rotation={3}
                  tapeColor="terracotta"
                  tapePosition="top-left"
                  className="w-full max-w-sm"
                >
                  <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-paper-aged text-ink text-center">
                    <span className="text-4xl mb-2">🍛🎉</span>
                    <span className="font-display font-bold text-lg text-ink">Mom's Feast & Holi Gulal</span>
                    <span className="font-handwritten text-base text-ink-muted mt-1">
                      "Welcomed with love, fed like family."
                    </span>
                  </div>
                </Polaroid>
              </div>

              <div className="order-1 lg:order-2">
                <span className="font-sans text-xs font-bold tracking-widest text-mustard uppercase block mb-1">
                  Family Hospitality • Home & Heart
                </span>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-parchment mb-4">
                  Feasts & Holi at Ashutosh's Home
                </h3>

                <p className="font-body text-sm text-parchment/85 leading-relaxed mb-4">
                  Ashutosh opened his home to the entire gang. His mother welcomed everyone with warmth
                  and boundless generosity, serving hearty homemade feasts that bonded the group even closer.
                </p>

                <p className="font-body text-sm text-parchment/85 leading-relaxed">
                  During Holi, colors filled the courtyard as everyone celebrated with joy, laughter,
                  and uninhibited playfulness—a memory etched in vibrant pinks and golds.
                </p>

                <div className="mt-6 p-3 bg-parchment/10 rounded border border-parchment/20">
                  <p className="font-handwritten text-lg text-mustard-light">
                    "Ashutosh peacefully smiling as colors covered everyone from head to toe."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

