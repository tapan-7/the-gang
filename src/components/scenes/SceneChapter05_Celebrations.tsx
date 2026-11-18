"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

export const SceneChapter05_Celebrations: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"birthdays" | "outings" | "feasts">("birthdays");

  const bdayPhotos = [
    {
      src: "/bday%20celebrations/IMG-20260611-WA0070.jpg",
      caption: "Office Birthday Cheers 🎂",
      subcaption: "June 2026 • Cake & Candles",
      rotation: -2.5,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/bday%20celebrations/IMG-20260625-WA0018.jpg",
      caption: "Desk Surprises & Smiles ✨",
      subcaption: "Singing around the monitors",
      rotation: 3,
      tapeColor: "mustard" as const,
    },
    {
      src: "/bday%20celebrations/IMG-20260827-WA0025.jpg",
      caption: "Cake Smashes & Celebrations 🎈",
      subcaption: "August 2026 • Office Party",
      rotation: -1.8,
      tapeColor: "dusty-blue" as const,
    },
    {
      src: "/bday%20celebrations/IMG-20260924-WA0047.jpg",
      caption: "September Celebration Moment 🍰",
      subcaption: "Passing cake slices around",
      rotation: 2.2,
      tapeColor: "sage" as const,
    },
  ];

  const outingPhotos = [
    {
      src: "/outings/IMG-20241109-WA0020.jpg",
      caption: "Weekend Road Trip 🚗",
      subcaption: "Escaping office screens",
      rotation: -2,
      tapeColor: "dusty-blue" as const,
    },
    {
      src: "/outings/IMG-20250613-WA0034.jpg",
      caption: "Outings We Took Together 🏞️",
      subcaption: "Scenic getaways & road laughs",
      rotation: 2.5,
      tapeColor: "mustard" as const,
    },
    {
      src: "/outings/IMG-20250802-WA0029.jpg",
      caption: "Group Adventures ☀️",
      subcaption: "Every stop was a memory",
      rotation: -3,
      tapeColor: "terracotta" as const,
    },
    {
      src: "/outings/IMG-20260717-WA0032.jpg",
      caption: "Mid-2026 Getaways 🌿",
      subcaption: "Recharging together",
      rotation: 1.8,
      tapeColor: "sage" as const,
    },
  ];

  const feastPhotos = [
    {
      src: "/lunch/IMG-20260822-WA0189.jpg",
      caption: "Sunday Room Feasts 🍛",
      subcaption: "Paresh cooking, food on the floor",
      rotation: -2,
      tapeColor: "mustard" as const,
    },
    {
      src: "/outings/IMG_20250112_231121729.jpg",
      caption: "Home Feasts & Long Talks 🥘",
      subcaption: "Spices, laughter & full plates",
      rotation: 2.4,
      tapeColor: "terracotta" as const,
    },
  ];

  return (
    <section
      id="chapter-05"
      className="relative min-h-screen w-full bg-[#EAE2D2] text-ink py-24 sm:py-32 px-4 sm:px-8 border-t border-ink/10"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#262522_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 05
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Throughout 2026 • Outside the Office
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
            Outings & Celebrations
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Birthday cakes at office desks, weekend road trips across Odisha, and home-cooked Sunday feasts shared on the floor."
          </p>

          <div className="mt-4 flex justify-center gap-2">
            <StampBadge text="BEYOND THE DESK" subtext="CELEBRATIONS" color="red" rotation={-2} />
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab("birthdays")}
            className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-200 border flex items-center gap-2 ${
              activeTab === "birthdays"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            <span>🎂</span>
            <span>Birthday Bashes (12)</span>
          </button>
          <button
            onClick={() => setActiveTab("outings")}
            className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-200 border flex items-center gap-2 ${
              activeTab === "outings"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            <span>🏔️</span>
            <span>Outings We Took (55)</span>
          </button>
          <button
            onClick={() => setActiveTab("feasts")}
            className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-200 border flex items-center gap-2 ${
              activeTab === "feasts"
                ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
            }`}
          >
            <span>🍛</span>
            <span>Sunday Room Feasts</span>
          </button>
        </div>

        {/* Active Content Showcase */}
        <div className="bg-paper-card border border-ink/15 rounded-scrapbook p-6 sm:p-10 shadow-lg relative">
          <div className="absolute -top-3 left-8 -rotate-2">
            <WashiTape color="mustard" width="w-28" />
          </div>

          <div className="mb-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-2">
              {activeTab === "birthdays" && "Office Birthday Celebrations"}
              {activeTab === "outings" && "Road Trips & Weekend Outings"}
              {activeTab === "feasts" && "Sunday Feasts in Paresh & Dushmanta's Room"}
            </h3>
            <p className="font-body text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
              {activeTab === "birthdays" &&
                "Cake cuttings right beside our monitors, surprise desk gatherings, and singing loudly for every gang member's birthday throughout 2026."}
              {activeTab === "outings" &&
                "Spontaneous road trips, winding highway rides, scenic stops, and memories created away from office monitors."}
              {activeTab === "feasts" &&
                "Paresh wearing his chef apron, fragrant chicken curry aromas filling the corridor, Dushmanta reviewing movies, and everyone sitting on the floor sharing seconds."}
            </p>
          </div>

          {/* Photo Grid with Interactive Global Lightbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {(activeTab === "birthdays"
              ? bdayPhotos
              : activeTab === "outings"
              ? outingPhotos
              : feastPhotos
            ).map((photo, pIdx) => (
              <div key={pIdx} className="w-full max-w-[280px]">
                <Polaroid
                  imageSrc={photo.src}
                  caption={photo.caption}
                  subcaption={photo.subcaption}
                  rotation={photo.rotation}
                  tapeColor={photo.tapeColor}
                  tapePosition="top-center"
                  className="w-full"
                />
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-ink/10 flex justify-between items-center text-xs text-ink-muted">
            <span>Preserved with love from authentic gang albums</span>
            <span className="font-handwritten text-base text-terracotta">Click any photo to view full size 🔍</span>
          </div>
        </div>
      </div>
    </section>
  );
};

