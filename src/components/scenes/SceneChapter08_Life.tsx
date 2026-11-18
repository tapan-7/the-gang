"use client";

import React from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

export const SceneChapter08_Life: React.FC = () => {
  return (
    <section
      id="chapter-08"
      className="relative min-h-screen w-full bg-[#4A3B32] text-parchment py-28 px-4 sm:px-8 border-t border-ink/10"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F3EBDD_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-mustard font-bold">
              Chapter 08
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
            <span className="font-sans text-xs tracking-widest text-parchment/60 uppercase">
              The Journey Forward
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment tracking-tight">
            Life Happens
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light max-w-xl mx-auto mt-4 leading-relaxed">
            "People move forward. New roles, new cities, new milestones.
            But distance can never rewrite what we experienced together."
          </p>
        </div>

        {/* Central Keepsake Spread */}
        <div className="bg-[#352821] p-8 sm:p-14 rounded-scrapbook border border-parchment/15 shadow-2xl relative max-w-3xl mx-auto">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 -rotate-1">
            <WashiTape color="mustard" width="w-32" />
          </div>

          <StampBadge text="CHERISHED CHAPTERS" subtext="UNBROKEN TIE" color="red" rotation={-6} className="mb-6" />

          <p className="font-display font-semibold text-2xl sm:text-3xl text-parchment leading-snug mb-6">
            "We may not always sit at the same cafeteria tables or take the same trips.
            Arpita is preparing for her wedding; friends take new paths."
          </p>

          <p className="font-body text-sm sm:text-base text-parchment/80 leading-relaxed max-w-xl mx-auto mb-8">
            Yet whenever we look at these photographs, recall the 5 PM lunch sprint, or hear someone shout
            'UNO!' across a quiet room, this little gang is right there—intact, loud, and full of heart.
          </p>

          <div className="flex justify-center">
            <Polaroid
              imageSrc="/outings/IMG-20261002-WA0600.jpg"
              caption="The Bond Endures ❤️"
              subcaption="Once a gang, always a gang"
              rotation={1}
              tapeColor="terracotta"
              tapePosition="top-center"
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

