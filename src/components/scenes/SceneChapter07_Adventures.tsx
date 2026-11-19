"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

export const SceneChapter07_Adventures: React.FC = () => {
  const [activeDestination, setActiveDestination] = useState<"koraput" | "ashutosh" | "roadtrips">("koraput");

  const destinations = [
    {
      id: "koraput",
      name: "Koraput Mountain Trek",
      icon: "⛰️",
      elevation: "3,000+ FT",
      highlight: "Quiet care on steep trails",
      stamp: "KORAPUT SUMMIT",
      photoSrc: "/outings/DSC_3379-1.JPG",
      photoCaption: "Koraput Summit 🏔️",
      photoSub: "Care in quiet moments • Steep mountain trail",
      description:
        "Steep ascents, heavy backpacks, and winding mountain trails with Tapan, Astha, Dushmanta, Niyaz, Yash, and Arpita. When exhaustion set in and legs could barely stand, Tapan quietly sat down and massaged Arpita's leg so she could keep walking.",
      quote:
        "\"I'll never forget how you massaged my leg when I could barely stand while trekking. ❤️ That moment will always remind me that care isn't just about words; sometimes, it's about showing up when someone needs you the most.\"",
      quoteAuthor: "— Arpita (to Tapan / Luffy)",
    },
    {
      id: "ashutosh",
      name: "Ashutosh's Home & Holi",
      icon: "🏠",
      elevation: "FAMILY TABLE",
      highlight: "Hearty feasts & vibrant colors",
      stamp: "HOLI COLORS",
      photoSrc: "/outings/IMG-20260717-WA0046.jpg",
      photoCaption: "Home Feasts & Holi Colors 🎨",
      photoSub: "Ashutosh's Home • Boundless hospitality",
      description:
        "Ashutosh opened his family home to the entire gang. His mother welcomed everyone with boundless warmth and generosity, serving hearty homemade feasts that bonded the group even closer. During Holi, vibrant gulal powders filled the courtyard as everyone celebrated with joy.",
      quote:
        "\"Ashutosh peacefully daydreaming with a warm smile as gulal covered everyone from head to toe.\"",
      quoteAuthor: "— The Gang Lore",
    },
    {
      id: "roadtrips",
      name: "Weekend Highway Outings",
      icon: "🚗",
      elevation: "ON THE ROAD",
      highlight: "Spontaneous detours & music",
      stamp: "ROAD TRIPS",
      photoSrc: "/outings/IMG_20250613_202852082.jpg",
      photoCaption: "Highway Twilight 🌅",
      photoSub: "Windows down & favorite playlists",
      description:
        "Escaping city traffic on weekends for open highways, roadside dhabas, tea stalls, and scenic viewpoints. The journey mattered just as much as where we ended up.",
      quote:
        "\"Windows down, cool breeze blowing in, and singing along at the top of our lungs.\"",
      quoteAuthor: "— Road Trip Memories",
    },
  ];

  const currentDest = destinations.find((d) => d.id === activeDestination) || destinations[0];

  return (
    <section
      id="chapter-07"
      className="relative min-h-screen w-full bg-[#2C3B30] text-parchment py-24 sm:py-32 px-4 sm:px-8 border-t border-parchment/10 overflow-hidden"
    >
      {/* 2D Illustrated Topographic Mountain Contour Lines */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#F3EBDD_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Illustrated Distant Mountain Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,186.7C840,171,960,117,1080,112C1200,107,1320,149,1380,170.7L1440,192L1440,320L0,320Z"
            fill="#1E2820"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-mustard font-bold">
              Chapter 07
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
            <span className="font-sans text-xs tracking-widest text-parchment/70 uppercase">
              Outside the Office • The Adventure Map
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment tracking-tight">
            The Wild Adventures
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light max-w-2xl mx-auto mt-4 leading-relaxed">
            "From misty mountain trails to the warmth of family tables—friendship tested by steep climbs
            and sealed with colorful gulal."
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <StampBadge text="UNO-2026 MAP" subtext="ADVENTURE LOG" color="red" rotation={-3} />
            <StampBadge text="KORAPUT TREK" subtext="QUIET CARE" color="blue" rotation={2} />
          </div>
        </div>

        {/* 2D Illustrated Map Route Navigation Bar */}
        <div className="mb-10 p-5 bg-[#1F2B22]/90 border border-parchment/15 rounded-scrapbook shadow-xl relative overflow-hidden">
          <div className="font-sans text-xs font-bold uppercase tracking-widest text-mustard mb-3 text-center sm:text-left">
            🗺️ Interactive Adventure Route: Select a destination
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {destinations.map((dest) => {
              const isSelected = dest.id === activeDestination;
              return (
                <button
                  key={dest.id}
                  onClick={() => setActiveDestination(dest.id as any)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 ${
                    isSelected
                      ? "bg-mustard text-ink border-mustard scale-102 shadow-lg"
                      : "bg-[#2A382E]/80 text-parchment border-parchment/15 hover:bg-[#344639]"
                  }`}
                >
                  <span className="text-2xl">{dest.icon}</span>
                  <div>
                    <span className="font-display font-bold text-sm block">
                      {dest.name}
                    </span>
                    <span className={`text-[11px] block ${isSelected ? "text-ink/80" : "text-parchment/60"}`}>
                      {dest.elevation} • {dest.highlight}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Adventure Stage Spread */}
        <div className="bg-[#233126] p-8 sm:p-12 rounded-scrapbook border border-parchment/15 shadow-2xl relative">
          <div className="absolute -top-3.5 left-10 -rotate-2 pointer-events-none">
            <WashiTape color="sage" width="w-32" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Cols: Narrative & Heartfelt Quotes */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-sans text-xs font-bold tracking-widest text-mustard uppercase">
                  {currentDest.elevation}
                </span>
                <StampBadge text={currentDest.stamp} subtext="VERIFIED MEMORY" color="red" rotation={-3} />
              </div>

              <h3 className="font-display font-black text-3xl sm:text-4xl text-parchment mb-4">
                {currentDest.name}
              </h3>

              <p className="font-body text-sm text-parchment/85 leading-relaxed mb-6">
                {currentDest.description}
              </p>

              {/* Heartfelt Quote Callout */}
              <div className="p-5 bg-parchment/10 rounded-xl border-l-4 border-mustard">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-mustard block mb-1">
                  Heartfelt Words:
                </span>
                <p className="font-handwritten text-xl sm:text-2xl text-parchment leading-snug">
                  {currentDest.quote}
                </p>
                <span className="font-sans text-xs text-parchment/70 font-semibold block text-right mt-2">
                  {currentDest.quoteAuthor}
                </span>
              </div>
            </div>

            {/* Right 5 Cols: Verified Photograph */}
            <div className="lg:col-span-5 flex justify-center">
              <Polaroid
                imageSrc={currentDest.photoSrc}
                caption={currentDest.photoCaption}
                subcaption={currentDest.photoSub}
                rotation={-2}
                tapeColor="mustard"
                tapePosition="top-center"
                className="w-full max-w-sm text-ink shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
