"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

interface CelebrationPhase {
  id: number;
  phaseNum: string;
  timeLabel: string;
  title: string;
  summary: string;
  runningJokeOrDetail: string;
  icon: string;
  badge: string;
  photos: {
    src: string;
    caption: string;
    subcaption: string;
    rotation: number;
    tapeColor: "mustard" | "dusty-blue" | "terracotta" | "sage";
    note?: string;
  }[];
}

export const SceneChapter08_Arpita: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(1); // Default to Pool & 5 PM Lunch!

  const phases: CelebrationPhase[] = [
    {
      id: 0,
      phaseNum: "01",
      timeLabel: "Arrival & Covert Prep",
      title: "The Secret Operation & Floral Arch",
      summary:
        "Arriving at AR Resort & Convention with secret boxes, luggage, and gift hampers. While Arpita was kept busy, the prep squad secretly built the floral arch with red roses, hung ribbons, and coordinated room plans while Soumya compiled code from bed.",
      runningJokeOrDetail:
        "Dushmanta with golden tinsel wrapped around his neck like a celebratory boa while supervising the arch construction.",
      icon: "🏨",
      badge: "COVERT MISSION",
      photos: [
        {
          src: "/bachelorette/IMG-20261115-WA0455.jpg",
          caption: "AR Resort Arrival 🏨",
          subcaption: "Parking lot arrival with secret luggage",
          rotation: -2,
          tapeColor: "mustard",
          note: "Arriving with bags and hidden decor",
        },
        {
          src: "/bachelorette/IMG-20261115-WA0498.jpg",
          caption: "Lobby Waiting & Hampers 🎁",
          subcaption: "Resort lounge with gift baskets",
          rotation: 2.5,
          tapeColor: "dusty-blue",
          note: "Gift baskets disguised as normal bags",
        },
        {
          src: "/bachelorette/IMG_20261114_192152888.jpg",
          caption: "Friday Room Planning 💻",
          subcaption: "Nov 14, 7:21 PM • Soumya coding in bed",
          rotation: -1.8,
          tapeColor: "sage",
          note: "Coding in bed during secret planning",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1594.jpg",
          caption: "Building the Floral Arch 🌸",
          subcaption: "Red roses, pink ribbons & tinsel boa",
          rotation: 2,
          tapeColor: "terracotta",
          note: "The boys crafting the arch secretly",
        },
        {
          src: "/bachelorette/IMG-20261115-WA0837.jpg",
          caption: "Console in the Room 💻",
          subcaption: "Code running on laptop in bed",
          rotation: -2.2,
          tapeColor: "mustard",
          note: "Celebrating bug fixes in the resort room",
        },
      ],
    },
    {
      id: 1,
      phaseNum: "02",
      timeLabel: "10:00 AM – 5:00 PM",
      title: "Pool Madness & The Legendary 5 PM Lunch",
      summary:
        "Starting with breakfast at the wooden dining pavilion, followed by hours of pure poolside ecstasy: everyone lined up with feet dangling in the water, splashes, games, and hilarious photo ops. Time moved so fast that we forgot lunch existed until 5:00 PM!",
      runningJokeOrDetail:
        "The Gang rule: 'We planned every single minute of the itinerary. We just ate lunch at 5:00 PM because the pool was too fun to leave.'",
      icon: "🏊‍♀️",
      badge: "5:00 PM LUNCH",
      photos: [
        {
          src: "/bachelorette/IMG_20261115_091828014.jpg",
          caption: "Morning Dining Pavilion ☕",
          subcaption: "Nov 15, 9:18 AM • Fueling up for the pool",
          rotation: -2.4,
          tapeColor: "sage",
          note: "Breakfast before the water madness",
        },
        {
          src: "/bachelorette/IMG-20261115-WA0040.jpg",
          caption: "Pool Edge Feet Dangling 🏊‍♀️",
          subcaption: "All 14 seated along the water under canopy",
          rotation: 1.8,
          tapeColor: "mustard",
          note: "Full lineup with feet in the pool",
        },
        {
          src: "/bachelorette/IMG-20261115-WA0607.jpg",
          caption: "Poolside Patio Chill 🌿",
          subcaption: "Lounging beside the clear blue water",
          rotation: -2,
          tapeColor: "dusty-blue",
          note: "Relaxing before the splash sprint",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1321.jpg",
          caption: "Boys Pool Splash 🏊‍♂️",
          subcaption: "Thumbs up & wet hair selfie",
          rotation: 2.2,
          tapeColor: "terracotta",
          note: "Swimmers vs. water-hesitant members",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1512.jpg",
          caption: "Full Gang Pool Splash 💦",
          subcaption: "Dushmanta taking selfie with everyone in pool",
          rotation: -2.8,
          tapeColor: "dusty-blue",
          note: "All of us laughing inside the pool!",
        },
        {
          src: "/bachelorette/IMG-20261116-WA0002.jpg",
          caption: "Post-Swim Towel Wrap 🧖‍♀️",
          subcaption: "Girls wrapped in towels & Paresh on deck",
          rotation: 2,
          tapeColor: "sage",
          note: "Shivering & smiling after hours in water",
        },
      ],
    },
    {
      id: 2,
      phaseNum: "03",
      timeLabel: "Evening 7:00 PM",
      title: "The Bedroom Pajama Surprise & Tiara Crowning",
      summary:
        "Surprising Arpita in the bedroom: crowning her with a sparkling tiara and the 'Bride to Be' sash. Sitting on the floor around a white-clothed feast table with striped popcorn boxes, groom face topper cupcakes, fairy lights on sheer curtains, and unwrapping gifts.",
      runningJokeOrDetail:
        "The cupcakes having tiny photo cutout face toppers of the groom, causing non-stop laughter while Arpita unboxed pink gifts.",
      icon: "👑",
      badge: "BEDROOM CELEBRATION",
      photos: [
        {
          src: "/bachelorette/IMG-20261115-WA0846.jpg",
          caption: "Crowning Our Queen 👑",
          subcaption: "Girls placing tiara & 'Bride to Be' sash",
          rotation: -2.2,
          tapeColor: "mustard",
          note: "The official crowning moment!",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1667.jpg",
          caption: "Bride Squad Pyjama Shoot 📸",
          subcaption: "Holding 'Bride Squad' & 'Cutie Pie' props",
          rotation: 2.5,
          tapeColor: "terracotta",
          note: "Mini Polaroids pinned on curtains behind",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1705.jpg",
          caption: "Floor Feast & Groom Cupcakes 🧁",
          subcaption: "Popcorn boxes, candles & face toppers",
          rotation: -1.8,
          tapeColor: "dusty-blue",
          note: "Groom face cutouts on every cupcake!",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1717.jpg",
          caption: "Unwrapping Pink Surprises 🎁",
          subcaption: "Arpita opening gifts on the sofa",
          rotation: 2,
          tapeColor: "sage",
          note: "Laughter as every present was opened",
        },
        {
          src: "/bachelorette/IMG-20261115-WA0131.jpg",
          caption: "Full Pajama Celebration 🎈",
          subcaption: "Gang gathered around floor banquet table",
          rotation: -2.5,
          tapeColor: "terracotta",
          note: "Heart balloons, fairy lights & pure joy",
        },
      ],
    },
    {
      id: 3,
      phaseNum: "04",
      timeLabel: "Night 10:00 PM",
      title: "The Blindfold Lawn Reveal & Night Cake Cutting",
      summary:
        "The girls blindfolded Arpita in her elegant red gown and escorted her down the corridor to the outdoor lawn. When the blindfold came off, the glowing balloon arch, candlelit cake table, and all the boys dressed in sharp black shirts were waiting to celebrate her.",
      runningJokeOrDetail:
        "The boys dressed head-to-toe in matching black shirts looking like the secret service security detail for the Queen.",
      icon: "✨",
      badge: "THE RED GOWN REVEAL",
      photos: [
        {
          src: "/bachelorette/IMG-20261115-WA1167.jpg",
          caption: "The Blindfolded Lawn Escort 🙈",
          subcaption: "Girls guiding Arpita in her red gown",
          rotation: -2,
          tapeColor: "dusty-blue",
          note: "Guiding her step-by-step to the surprise",
        },
        {
          src: "/bachelorette/IMG-20261115-WA1727.jpg",
          caption: "Fairy Light Cake Cutting 🎂",
          subcaption: "Girls around outdoor cake & balloon arch",
          rotation: 2.2,
          tapeColor: "mustard",
          note: "Candles glowing on pink tablecloth",
        },
        {
          src: "/bachelorette/IMG-20261115-WA0172.jpg",
          caption: "Queen & Her Men in Black 🖤",
          subcaption: "Arpita in red gown surrounded by boys in black",
          rotation: -2.8,
          tapeColor: "terracotta",
          note: "The iconic night photoshoot on the lawn!",
        },
      ],
    },
  ];

  const currentPhase = phases[activePhaseIndex];

  return (
    <section
      id="chapter-08"
      className="relative min-h-screen w-full bg-[#1A141A] text-parchment py-24 sm:py-32 px-4 sm:px-8 border-t border-parchment/10 overflow-hidden"
    >
      {/* 2D Illustrated Night Sky & Bunting Streamers */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F5B4BE_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Illustrated Festive Streamers & Fairy Lights String across the top */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-30 pointer-events-none">
        <svg viewBox="0 0 1200 80" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,20 Q150,60 300,20 Q450,60 600,20 Q750,60 900,20 Q1050,60 1200,20"
            stroke="#F5B4BE"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
          <circle cx="150" cy="40" r="4" fill="#F5B4BE" />
          <circle cx="450" cy="40" r="4" fill="#D9B76B" />
          <circle cx="750" cy="40" r="4" fill="#C96E59" />
          <circle cx="1050" cy="40" r="4" fill="#F5B4BE" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-[#F5B4BE] font-bold">
              Chapter 08
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
            <span className="font-sans text-xs tracking-widest text-parchment/70 uppercase">
              November 14–16, 2026 • AR Resort & Convention
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment tracking-tight">
            Operation Arpita
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light max-w-2xl mx-auto mt-4 leading-relaxed">
            "Toasting the Mother of the Gang. From covert balloon missions and pool games to eating lunch at 5:00 PM and crowning our Queen."
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <StampBadge text="BACHELORETTE" subtext="ALL 19 PHOTOS VERIFIED" color="red" rotation={-2} />
            <StampBadge text="5:00 PM LUNCH" subtext="LEGENDARY DELAY" color="blue" rotation={3} />
          </div>
        </div>

        {/* 4 Phase Selectors (Tactile Ribbon Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {phases.map((phase, idx) => {
            const isActive = idx === activePhaseIndex;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseIndex(idx)}
                className={`relative px-4 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? "bg-[#C96E59] text-parchment border-[#C96E59] scale-105 shadow-xl"
                    : "bg-[#2A1D28]/90 text-parchment/75 border-parchment/15 hover:bg-[#382635] hover:text-parchment"
                }`}
              >
                <span>{phase.icon}</span>
                <span>{phase.title.split("&")[0]}</span>
                <span className="text-[10px] opacity-75 font-normal">
                  ({phase.photos.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage & Scrapbook Spread */}
        <div className="bg-gradient-to-br from-[#2D1B28] via-[#22141F] to-[#170E15] border-2 border-[#F5B4BE]/20 rounded-scrapbook p-6 sm:p-10 shadow-2xl relative">
          {/* Top Decorative Washi Tape */}
          <div className="absolute -top-3.5 left-10 -rotate-2 pointer-events-none">
            <WashiTape color="terracotta" width="w-32" />
          </div>
          <div className="absolute -top-3.5 right-10 rotate-3 pointer-events-none">
            <WashiTape color="mustard" width="w-24" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left 4 Cols: Story Narrative & Phase Highlights */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#F5B4BE] bg-black/40 px-2.5 py-1 rounded">
                    Phase {currentPhase.phaseNum} • {currentPhase.timeLabel}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-parchment mb-4 leading-tight">
                  {currentPhase.title}
                </h3>

                <p className="font-body text-sm text-parchment/85 leading-relaxed mb-4">
                  {currentPhase.summary}
                </p>

                {/* The 5 PM Lunch Sprint Clock Accent */}
                {currentPhase.id === 1 && (
                  <div className="my-4 p-4 rounded-xl bg-black/50 border border-mustard/30 flex items-center gap-3.5">
                    <div className="text-3xl animate-pulse">⏰</div>
                    <div>
                      <div className="font-display font-bold text-sm text-mustard">
                        The 17:00 HRS Lunch Sprint!
                      </div>
                      <div className="text-xs text-parchment/75">
                        Pool games, competitions & dancing took over. We literally had lunch at 5:00 PM!
                      </div>
                    </div>
                  </div>
                )}

                {/* Running Joke Callout */}
                <div className="p-3.5 rounded-lg bg-black/30 border border-parchment/10 text-xs text-parchment/75 mt-3">
                  <span className="font-bold text-[#F5B4BE] block mb-1">
                    Inside Lore:
                  </span>
                  <span>{currentPhase.runningJokeOrDetail}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-parchment/10 flex items-center justify-between text-xs text-parchment/60">
                <span>📍 AR Resort & Convention</span>
                <span className="font-handwritten text-sm text-[#F5B4BE]">
                  {currentPhase.photos.length} Verified Photos • Click to zoom 🔍
                </span>
              </div>
            </div>

            {/* Right 8 Cols: Real Photos Collage Placed by Phase */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {currentPhase.photos.map((photo, pIdx) => (
                  <div key={pIdx} className="w-full max-w-[260px] flex flex-col items-center">
                    <Polaroid
                      imageSrc={photo.src}
                      caption={photo.caption}
                      subcaption={photo.subcaption}
                      rotation={photo.rotation}
                      tapeColor={photo.tapeColor}
                      tapePosition="top-center"
                      className="w-full text-ink shadow-lg"
                    />
                    {photo.note && (
                      <span className="font-handwritten text-xs text-[#F5B4BE] mt-1.5 text-center px-1">
                        ↳ {photo.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Footer Tribute */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="font-handwritten text-xl text-parchment/70 leading-relaxed">
            "Arpita gave every single one of us a home when we needed it.
            Operation Arpita was our small way of giving all that love right back."
          </p>
        </div>
      </div>
    </section>
  );
};
