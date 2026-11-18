"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

export const SceneChapter04_Everyday: React.FC = () => {
  const [activeRitual, setActiveRitual] = useState<"lunch" | "tea" | "elevator">("lunch");
  const [showAllPhotos, setShowAllPhotos] = useState<boolean>(false);

  // All 20 verified lunch photos
  const lunchPhotos = [
    {
      src: "/lunch/IMG_20260220_132922747.jpg",
      caption: "The Table Merger Army 🍱",
      subcaption: "1:29 PM • Cafeteria tables dragged together",
      rotation: -2.5,
      tapeColor: "mustard" as const,
      note: "Dragging two heavy tables together every single day",
    },
    {
      src: "/lunch/IMG_20250918_132113834.jpg",
      caption: "Tiffins & Shared Plates 🍛",
      subcaption: "1:21 PM • Jayashree's lunchbox inspection",
      rotation: 2.8,
      tapeColor: "terracotta" as const,
      note: "'What did you bring to eat today?'",
    },
    {
      src: "/lunch/DSC_0071.JPG",
      caption: "Cafeteria Lunch Group 📸",
      subcaption: "Smiles over steel tiffin boxes",
      rotation: -3,
      tapeColor: "sage" as const,
      note: "Passing containers around the table",
    },
    {
      src: "/lunch/IMG-20250630-WA0009.jpg",
      caption: "Daily Office Lunch 🍱",
      subcaption: "Midday recharge & lively banter",
      rotation: 2,
      tapeColor: "dusty-blue" as const,
      note: "Debates that outlasted the food",
    },
    {
      src: "/lunch/IMG-20250912-WA0024.jpg",
      caption: "The 1:00 PM Tiffin Circle 🍱",
      subcaption: "Passing home-cooked rotis and curries",
      rotation: -1.8,
      tapeColor: "mustard" as const,
      note: "Asutosh: 'That is definitely a vegetable.'",
    },
    {
      src: "/lunch/IMG-20251007-WA0005.jpg",
      caption: "Midday Feasting & Laughter 🍛",
      subcaption: "Dushmanta calculating the dessert split",
      rotation: 2.2,
      tapeColor: "terracotta" as const,
      note: "No one allowed to eat alone",
    },
    {
      src: "/lunch/IMG-20260123-WA0004.jpg",
      caption: "Winter Cafeteria Lunch ❄️",
      subcaption: "Post-Gopalpur January lunch ritual",
      rotation: -2.4,
      tapeColor: "sage" as const,
      note: "UNO strategies analyzed over lunch",
    },
    {
      src: "/lunch/IMG-20260503-WA0064.jpg",
      caption: "Full Table Chaos 🍱",
      subcaption: "Crowded chairs & endless laughs",
      rotation: 1.5,
      tapeColor: "dusty-blue" as const,
      note: "Tapan quietly finishing the last snack",
    },
  ];

  // All 11 verified tea break photos
  const teaPhotos = [
    {
      src: "/tea%20breaks/IMG_20260526_171343471.jpg",
      caption: "4:30 PM Chai Walk ☕",
      subcaption: "5:13 PM • Stepping outside to the stall",
      rotation: 2.2,
      tapeColor: "terracotta" as const,
      note: "Hot cutting chai & biscuits in the open breeze",
    },
    {
      src: "/tea%20breaks/IMG_20260605_171833822.jpg",
      caption: "Roadside Gossip & Fresh Air 🌿",
      subcaption: "5:18 PM • Escaping office screen fatigue",
      rotation: -2.8,
      tapeColor: "mustard" as const,
      note: "Evening air & hilarious roadside banter",
    },
    {
      src: "/tea%20breaks/IMG_20261107_165743484.jpg",
      caption: "Evening Tea Crew ☕",
      subcaption: "4:57 PM • The sacred afternoon tradition",
      rotation: 1.8,
      tapeColor: "sage" as const,
      note: "Steaming cutting chai glasses in hand",
    },
    {
      src: "/tea%20breaks/IMG-20260109-WA0004.jpg",
      caption: "Roadside Chai Snapshot ☕",
      subcaption: "The daily ritual that kept everyone sane",
      rotation: -2.2,
      tapeColor: "dusty-blue" as const,
      note: "Laughing through the afternoon slump",
    },
    {
      src: "/tea%20breaks/IMG-20260128-WA0008.jpg",
      caption: "Winter Chai Routine ☕",
      subcaption: "Hands warmed around hot glass cups",
      rotation: 2.5,
      tapeColor: "mustard" as const,
      note: "Paresh delivering roadside poetry summaries",
    },
    {
      src: "/tea%20breaks/IMG_20260508_172640076.jpg",
      caption: "Afternoon Stall Gathering 🌿",
      subcaption: "5:26 PM • Sunlight filtering through trees",
      rotation: -1.6,
      tapeColor: "terracotta" as const,
      note: "Stepping outside to breathe and laugh",
    },
    {
      src: "/tea%20breaks/IMG-20260603-WA0033.jpg",
      caption: "Chai & Biscuit Treat 🍪",
      subcaption: "Sweet crunch & steaming tea",
      rotation: 2,
      tapeColor: "sage" as const,
      note: "The quickest 15 minutes of the workday",
    },
    {
      src: "/tea%20breaks/IMG-20260814-WA0031.jpg",
      caption: "August Monsoon Chai 🌧️",
      subcaption: "Hot tea as rain hit the pavement",
      rotation: -2.4,
      tapeColor: "dusty-blue" as const,
      note: "Rain drops, clay aroma & cutting chai",
    },
  ];

  // All 5 verified elevator photos
  const elevatorPhotos = [
    {
      src: "/elevator%20photos/IMG-20261016-WA0083.jpg",
      caption: "Lift Squeeze Tradition 🛗",
      subcaption: "Post-lunch 14-person cram",
      rotation: -2.2,
      tapeColor: "dusty-blue" as const,
      note: "Stuffing 14 people into a 10-person elevator!",
    },
    {
      src: "/elevator%20photos/IMG-20261016-WA0047.jpg",
      caption: "Mirror Selfie Session 🪞",
      subcaption: "Elevator glass reflections",
      rotation: 2.5,
      tapeColor: "mustard" as const,
      note: "Smiles before the doors slide open",
    },
    {
      src: "/elevator%20photos/IMG-20261107-WA0205.jpg",
      caption: "Daily Elevator Gathering 📸",
      subcaption: "Floor 4 to Floor 1 sprint",
      rotation: -1.8,
      tapeColor: "terracotta" as const,
      note: "Laughing until the elevator chimes",
    },
    {
      src: "/elevator%20photos/IMG-20260210-WA0037.jpg",
      caption: "Packed Elevator Crew 🛗",
      subcaption: "One big happy squish",
      rotation: 2.2,
      tapeColor: "sage" as const,
      note: "Daily ritual on the way down to tea",
    },
    {
      src: "/elevator%20photos/IMG-20261107-WA0303.jpg",
      caption: "The Final Floor Ding 🔔",
      subcaption: "Bursting out into the lobby together",
      rotation: -2.8,
      tapeColor: "mustard" as const,
      note: "The weight limit sensor miraculously never beeped",
    },
  ];

  const currentPhotos =
    activeRitual === "lunch"
      ? lunchPhotos
      : activeRitual === "tea"
      ? teaPhotos
      : elevatorPhotos;

  const displayPhotos = showAllPhotos ? currentPhotos : currentPhotos.slice(0, 4);

  return (
    <section
      id="chapter-04"
      className="relative min-h-screen w-full bg-[#FAF5EB] py-24 sm:py-32 px-4 sm:px-8 border-t border-ink/10 overflow-hidden"
    >
      {/* Tactile Ruled Notebook Paper Texture: Horizontal Ruled Lines + Red Margin Line */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_bottom,#8199A8_1px,transparent_1px)] [background-size:100%_28px] pointer-events-none" />
      <div className="absolute left-6 sm:left-16 md:left-24 top-0 bottom-0 w-0.5 bg-[#C96E59]/25 pointer-events-none" />

      {/* Decorative Spiral Ring Binder Holes along the Far Left */}
      <div className="absolute left-2 sm:left-4 top-12 bottom-12 flex flex-col justify-between pointer-events-none opacity-40">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="w-3.5 h-3.5 rounded-full bg-[#3E2E20] shadow-inner border border-ink/30"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto pl-4 sm:pl-8">
        {/* Chapter 04 Scrapbook Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 04
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Daily Office Life • The Three Sacred Rituals
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
            The Everyday Chaos
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Ordinary days stopped feeling ordinary because we spent them together.
            The small office rituals became our greatest memories."
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <StampBadge text="OFFICE SCRAPBOOK" subtext="36 AUTHENTIC PHOTOS" color="red" rotation={-3} />
            <StampBadge text="DAILY RITUALS" subtext="NOBODY ATE ALONE" color="blue" rotation={2} />
          </div>
        </div>

        {/* 3 Tactile Scrapbook Bookmarks / Index Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => {
              setActiveRitual("lunch");
              setShowAllPhotos(false);
            }}
            className={`relative px-5 py-3 rounded-t-xl rounded-b-md font-sans text-xs font-bold tracking-wider transition-all duration-300 border-2 flex items-center gap-2.5 shadow-md ${
              activeRitual === "lunch"
                ? "bg-terracotta text-parchment border-terracotta -translate-y-1 shadow-lg"
                : "bg-paper-card text-ink border-ink/20 hover:bg-parchment"
            }`}
          >
            <span className="text-lg">🍱</span>
            <span>1:00 PM Cafeteria Table Merger (20)</span>
            <WashiTape color="mustard" width="w-8" className="absolute -top-2 left-3" />
          </button>

          <button
            onClick={() => {
              setActiveRitual("tea");
              setShowAllPhotos(false);
            }}
            className={`relative px-5 py-3 rounded-t-xl rounded-b-md font-sans text-xs font-bold tracking-wider transition-all duration-300 border-2 flex items-center gap-2.5 shadow-md ${
              activeRitual === "tea"
                ? "bg-terracotta text-parchment border-terracotta -translate-y-1 shadow-lg"
                : "bg-paper-card text-ink border-ink/20 hover:bg-parchment"
            }`}
          >
            <span className="text-lg">☕</span>
            <span>4:30 PM Roadside Chai Walk (11)</span>
            <WashiTape color="terracotta" width="w-8" className="absolute -top-2 left-3" />
          </button>

          <button
            onClick={() => {
              setActiveRitual("elevator");
              setShowAllPhotos(false);
            }}
            className={`relative px-5 py-3 rounded-t-xl rounded-b-md font-sans text-xs font-bold tracking-wider transition-all duration-300 border-2 flex items-center gap-2.5 shadow-md ${
              activeRitual === "elevator"
                ? "bg-terracotta text-parchment border-terracotta -translate-y-1 shadow-lg"
                : "bg-paper-card text-ink border-ink/20 hover:bg-parchment"
            }`}
          >
            <span className="text-lg">🛗</span>
            <span>The Daily Elevator Cram (5)</span>
            <WashiTape color="dusty-blue" width="w-8" className="absolute -top-2 left-3" />
          </button>
        </div>

        {/* Handcrafted Scrapbook Journal Page Spread */}
        <div className="bg-[#FFFDF9] border-2 border-ink/15 rounded-scrapbook p-6 sm:p-10 shadow-2xl relative">
          {/* Top Washi Tape Corner Braces */}
          <div className="absolute -top-4 left-10 -rotate-3 pointer-events-none">
            <WashiTape color={activeRitual === "lunch" ? "mustard" : activeRitual === "tea" ? "terracotta" : "dusty-blue"} width="w-36" />
          </div>
          <div className="absolute -top-4 right-10 rotate-3 pointer-events-none">
            <WashiTape color="sage" width="w-24" />
          </div>

          {/* Contextual Illustrated Scrapbook Note & Lore */}
          <div className="border-b border-ink/10 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-terracotta bg-terracotta/10 px-2.5 py-1 rounded inline-block mb-2">
                {activeRitual === "lunch" && "Daily • 1:00 PM Sharp • Cafeteria Table Merger"}
                {activeRitual === "tea" && "Daily • 4:30 PM • Roadside Cutting Chai Walk"}
                {activeRitual === "elevator" && "Daily • 14 People in a 10-Person Lift"}
              </span>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink">
                {activeRitual === "lunch" && "Dragging the Heavy Tables Together"}
                {activeRitual === "tea" && "4:30 PM: The Sacred Afternoon Escape"}
                {activeRitual === "elevator" && "The Elevator Door Squeeze Tradition"}
              </h3>

              <p className="font-body text-sm text-ink-muted mt-2.5 leading-relaxed">
                {activeRitual === "lunch" &&
                  "No one was ever permitted to eat at a separate desk. Every day at 1:00 PM sharp, we dragged two heavy cafeteria tables together to fit all 14 of us. Jayashree conducted the daily lunchbox audit ('What did you bring today?'), steel tiffins were passed around, and debates over curries outlasted the lunch hour."}
                {activeRitual === "tea" &&
                  "The sacred afternoon ritual that saved us from screen burnout. Gathering at the office entrance, walking together down to the roadside tea stall, holding steaming glasses of cutting chai, crunching biscuits, and laughing in the evening breeze."}
                {activeRitual === "elevator" &&
                  "Fourteen people cramming into a 10-person elevator after lunch or before tea. Squeezing in shoulder-to-shoulder, holding the sensor doors, taking mirror selfies, and wondering why the maximum weight alarm never went off."}
              </p>
            </div>

            {/* Inked Stamp & Doodles on Right */}
            <div className="flex flex-col items-start md:items-end justify-between gap-3">
              <StampBadge
                text={activeRitual === "lunch" ? "TABLE MERGER" : activeRitual === "tea" ? "CUTTING CHAI" : "LIFT OVERLOAD"}
                subtext="OFFICE LORE"
                color={activeRitual === "lunch" ? "blue" : activeRitual === "tea" ? "red" : "brown"}
                rotation={activeRitual === "lunch" ? -3 : 4}
              />
              <span className="font-handwritten text-xs text-ink-muted">
                Click any Polaroid to view full size 🔍
              </span>
            </div>
          </div>

          {/* Differentiated 2D Illustrated Strip for Each Ritual */}
          <div className="mb-8 p-4 rounded-xl bg-parchment/60 border border-ink/10 flex flex-wrap items-center justify-between gap-4">
            {activeRitual === "lunch" && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">🍱</span>
                <div>
                  <span className="font-handwritten text-base text-ink font-bold block">
                    Jayashree's Lunchbox Audit Rule:
                  </span>
                  <span className="text-xs text-ink-muted">
                    "Open your tiffin. If Asutosh calls it a vegetable, everyone gets a bite."
                  </span>
                </div>
              </div>
            )}

            {activeRitual === "tea" && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">☕</span>
                <div>
                  <span className="font-handwritten text-base text-ink font-bold block">
                    The Roadside Tea Philosophy:
                  </span>
                  <span className="text-xs text-ink-muted">
                    "Cutting chai: 10 rupees. Fifteen minutes away from screens: Priceless."
                  </span>
                </div>
              </div>
            )}

            {activeRitual === "elevator" && (
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛗</span>
                <div>
                  <span className="font-handwritten text-base text-ink font-bold block">
                    Elevator Capacity Formula:
                  </span>
                  <span className="text-xs text-ink-muted">
                    "Rated for 10 people. The Gang: 14 people. Status: One big happy squish."
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowAllPhotos(!showAllPhotos)}
              className="px-4 py-2 rounded-full bg-ink/5 hover:bg-ink/10 border border-ink/15 font-sans text-xs font-bold text-ink transition-colors flex items-center gap-1.5 ml-auto"
            >
              <span>{showAllPhotos ? "Show Fewer (4)" : `View All in This Section (${currentPhotos.length})`}</span>
              <span>{showAllPhotos ? "▲" : "▼"}</span>
            </button>
          </div>

          {/* Organic Scrapbook Photo Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {displayPhotos.map((photo, pIdx) => (
              <div key={pIdx} className="w-full max-w-[270px] flex flex-col items-center">
                <Polaroid
                  imageSrc={photo.src}
                  caption={photo.caption}
                  subcaption={photo.subcaption}
                  rotation={photo.rotation}
                  tapeColor={photo.tapeColor}
                  tapePosition="top-center"
                  className="w-full"
                />
                {photo.note && (
                  <span className="font-handwritten text-xs text-ink-muted mt-2 text-center px-1">
                    ↳ {photo.note}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Faint Handwritten Margin Note */}
        <div className="mt-8 text-center">
          <p className="font-handwritten text-xl text-ink-muted">
            "These ordinary 1:00 PM and 4:30 PM hours were the glue that held the gang together."
          </p>
        </div>
      </div>
    </section>
  );
};
