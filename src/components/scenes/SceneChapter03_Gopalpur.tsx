"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

interface StorySection {
  id: string;
  tabLabel: string;
  timeLabel: string;
  tagline: string;
  title: string;
  description: string;
  illustratedScene: "bus" | "lawn" | "lunch" | "night" | "beach" | "chat";
  environmentColors: {
    bg: string;
    accent: string;
    border: string;
  };
  photos: {
    src: string;
    caption: string;
    subcaption: string;
    rotation: number;
    tapeColor: "mustard" | "dusty-blue" | "terracotta" | "sage";
    note?: string;
  }[];
}

export const SceneChapter03_Gopalpur: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>("bus");

  const storySections: StorySection[] = [
    {
      id: "bus",
      tabLabel: "The Bus Journey",
      timeLabel: "Morning Departure",
      tagline: "Before Reaching Gopalpur",
      title: "The Road Trip & Highway Stops",
      description:
        "Before the trip, we knew each other through office projects and trainee mentorships, but weren't yet particularly close. The connection started becoming natural before even boarding the bus: gathering outside, talking, loading bags, and lively bus dancing before reaching Gopalpur.",
      illustratedScene: "bus",
      environmentColors: {
        bg: "from-[#3E2E20] via-[#2A1E16] to-[#1C140E]",
        accent: "#E5A96A",
        border: "border-[#E5A96A]/30",
      },
      photos: [
        {
          src: "/gopalpur/IMG-20260111-WA0684.jpg",
          caption: "In Front of the Travel Bus 🚌",
          subcaption: "All packed & ready for the road",
          rotation: -2.5,
          tapeColor: "mustard",
          note: "The actual travel bus right behind us!",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0666.jpg",
          caption: "Shiva Shakti Snacks Stop 🥪",
          subcaption: "Highway snack break with backpacks",
          rotation: 3,
          tapeColor: "terracotta",
          note: "Cold morning breeze & roadside tea",
        },
      ],
    },
    {
      id: "lawn",
      tabLabel: "Lawn & Volleyball",
      timeLabel: "Afternoon Arrival",
      tagline: "Resort Garden & Games",
      title: "Volleyball Net, Grass Circles & UNO",
      description:
        "Arriving at the resort grounds, we dropped our bags and headed to the lush green lawn. Between playing volleyball across the net, sitting in a big circle under the coconut palms, listening to portable music, and playing our first rounds of UNO, polite colleague barriers completely dissolved.",
      illustratedScene: "lawn",
      environmentColors: {
        bg: "from-[#1B3624] via-[#14261B] to-[#0E1A12]",
        accent: "#9AA48D",
        border: "border-[#9AA48D]/30",
      },
      photos: [
        {
          src: "/gopalpur/IMG-20260110-WA0015.jpg",
          caption: "Lawn Volleyball Net 🏐",
          subcaption: "Outdoor games under the palm trees",
          rotation: -2,
          tapeColor: "sage",
          note: "Volleyball court between the palms!",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0320.jpg",
          caption: "Playing UNO on the Grass 🃏",
          subcaption: "Soumya with the deck & Subhashree",
          rotation: 2.5,
          tapeColor: "mustard",
          note: "The literal UNO deck spread on the lawn",
        },
        {
          src: "/gopalpur/IMG_20260110_152308893.jpg",
          caption: "Afternoon Grass Circle 🌿",
          subcaption: "Jan 10, 3:23 PM • Under the Palms",
          rotation: -3,
          tapeColor: "dusty-blue",
          note: "Sitting in a circle breaking the ice",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0609.jpg",
          caption: "Morning Sunlight Garden Chat ☀️",
          subcaption: "Sunlit lawn talks & shared jokes",
          rotation: -1.8,
          tapeColor: "mustard",
          note: "Sun shining on the green lawn",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0639.jpg",
          caption: "The Full Lawn Circle ☀️",
          subcaption: "Smiling under the Gopalpur sun",
          rotation: 1.8,
          tapeColor: "terracotta",
          note: "Everyone together on the grass",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0335.jpg",
          caption: "Portable Speaker Jam 🎵",
          subcaption: "Paresh striking a lawn pose",
          rotation: -1.5,
          tapeColor: "mustard",
          note: "Music playing on the grass",
        },
      ],
    },
    {
      id: "lunch",
      tabLabel: "Shared Lunch Banquet",
      timeLabel: "Resort Feast & Patio",
      tagline: "Dining Together",
      title: "The Big Round Table Feast",
      description:
        "Gathered around the giant round banquet table with its red tablecloth, passing plates, sharing curries, and laughing. Moving outside to the patio by the pool with wicker chairs, the conversation kept rolling without any awkward pauses.",
      illustratedScene: "lunch",
      environmentColors: {
        bg: "from-[#3B1F19] via-[#2A1410] to-[#1C0D0A]",
        accent: "#C96E59",
        border: "border-[#C96E59]/30",
      },
      photos: [
        {
          src: "/gopalpur/IMG-20260111-WA0746.jpg",
          caption: "The Big Round Banquet Table 🍛",
          subcaption: "Seated together for the shared feast",
          rotation: -2,
          tapeColor: "terracotta",
          note: "The giant round table feast!",
        },
        {
          src: "/gopalpur/IMG_20260111_124627558.jpg",
          caption: "Patio Table by the Pool ☕",
          subcaption: "B&W film frame • Wicker chairs & talks",
          rotation: 2.8,
          tapeColor: "dusty-blue",
          note: "Relaxing by the water at 12:46 PM",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0737.jpg",
          caption: "Poolside Resort Selfie 🌴",
          subcaption: "Paresh, Asutosh & Soumya",
          rotation: -1.8,
          tapeColor: "sage",
          note: "Sunlight reflecting off the water",
        },
      ],
    },
    {
      id: "night",
      tabLabel: "Nighttime & Patio UNO",
      timeLabel: "Twilight to Midnight",
      tagline: "Cold Night Air & Floodlights",
      title: "Courtyard Talks & Late Night UNO",
      description:
        "As night fell, the coastal air turned brisk. Bundled up in hoodies and winter jackets under the courtyard floodlights, we stood talking before gathering on the patio for late-night UNO games that lasted until early morning.",
      illustratedScene: "night",
      environmentColors: {
        bg: "from-[#0D1826] via-[#09101A] to-[#04080D]",
        accent: "#8199A8",
        border: "border-[#8199A8]/30",
      },
      photos: [
        {
          src: "/gopalpur/IMG-20260111-WA0870.jpg",
          caption: "Night Courtyard in Jackets 🌙",
          subcaption: "Courtyard floodlights & chilly night air",
          rotation: -2.5,
          tapeColor: "dusty-blue",
          note: "Late night in hoodies & jackets!",
        },
        {
          src: "/gopalpur/IMG-20260113-WA0038.jpg",
          caption: "Late Night Patio UNO 🃏",
          subcaption: "Subhashree holding the red UNO box!",
          rotation: 2.2,
          tapeColor: "mustard",
          note: "Look at the red UNO card box in her hand!",
        },
      ],
    },
    {
      id: "beach",
      tabLabel: "The Ocean Beach",
      timeLabel: "Morning Dawn",
      tagline: "Gopalpur-on-Sea",
      title: "Waves, Sand Gazebo & Victory Poses",
      description:
        "Walking to the open beach in the morning. Barefoot on the cool sand, the sound of crashing waves, climbing up into the wooden beach gazebo overlooking the sea, taking group selfies, and standing in a line facing the vast Bay of Bengal with arms raised.",
      illustratedScene: "beach",
      environmentColors: {
        bg: "from-[#172D3D] via-[#10202C] to-[#0A141C]",
        accent: "#D9B76B",
        border: "border-[#D9B76B]/30",
      },
      photos: [
        {
          src: "/gopalpur/IMG-20260111-WA0555.jpg",
          caption: "Facing the Ocean Waves 🌊",
          subcaption: "Arms raised looking out at the sea",
          rotation: 2,
          tapeColor: "mustard",
          note: "Iconic line facing the Bay of Bengal",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0470.jpg",
          caption: "Wooden Beach Gazebo 🏖️",
          subcaption: "Overlooking the water in navy shirts",
          rotation: -2.5,
          tapeColor: "terracotta",
          note: "Standing together in the beach pagoda",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0491.jpg",
          caption: "Group on the Beach Sand 🌅",
          subcaption: "All 14 smiling by the shoreline",
          rotation: 1.8,
          tapeColor: "dusty-blue",
          note: "Wide open beach & sea breeze",
        },
        {
          src: "/gopalpur/IMG_20260111_105112376.jpg",
          caption: "Barefoot Sand Circle (B&W) 🐚",
          subcaption: "Jan 11, 10:51 AM • Barefoot by the water",
          rotation: -3,
          tapeColor: "sage",
          note: "Film frame sitting on the sand",
        },
        {
          src: "/gopalpur/IMG-20260111-WA0497.jpg",
          caption: "Beach Sand Selfie 📸",
          subcaption: "Shyamalendu in beanie & the gang",
          rotation: 2.4,
          tapeColor: "mustard",
          note: "Smiles against the open sky",
        },
      ],
    },
    {
      id: "chat",
      tabLabel: "The UNO-2026 Chat",
      timeLabel: "After Returning",
      tagline: "Connecting Beyond Work",
      title: "Subhashree Creates 'UNO-2026'",
      description:
        "After returning home, Subhashree created the occasion-specific WhatsApp group 'UNO-2026', where everyone shared trip photographs and the pre-trip bus-dancing videos. Gopalpur was not the formation of a permanent formally named group, but an occasion where people who already knew one another through work built comfort and connection beyond work.",
      illustratedScene: "chat",
      environmentColors: {
        bg: "from-[#2A2318] via-[#1D1810] to-[#120F0A]",
        accent: "#E5A96A",
        border: "border-[#E5A96A]/30",
      },
      photos: [
        {
          src: "/gopalpur/IMG-20260111-WA0731.jpg",
          caption: "Window Reflection Selfie 🪟",
          subcaption: "Group selfie reflected in resort glass",
          rotation: -2,
          tapeColor: "dusty-blue",
          note: "Sun shining through the glass reflection",
        },
      ],
    },
  ];

  const currentSection =
    storySections.find((s) => s.id === activeSectionId) || storySections[0];

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen w-full bg-[#121B24] text-parchment py-24 sm:py-32 px-4 sm:px-8 overflow-hidden transition-colors duration-700"
    >
      {/* 2D Illustrated Environment: Rolling SVG Waves & Coastal Horizon */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F3EBDD_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Illustrated Layer 1: Distant Coastal Hills */}
      <div className="absolute bottom-0 left-0 right-0 h-40 opacity-15 pointer-events-none">
        <svg viewBox="0 0 1440 240" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,160 C320,120 480,200 720,140 C960,80 1200,180 1440,130 L1440,240 L0,240 Z"
            fill="#8199A8"
          />
        </svg>
      </div>

      {/* Illustrated Layer 2: Rolling Ocean Waves Crests */}
      <div className="absolute bottom-0 left-0 right-0 h-28 opacity-25 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,40 C240,90 480,10 720,50 C960,90 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#9AA48D"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-mustard font-bold">
              Chapter 03
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
            <span className="font-sans text-xs tracking-widest text-parchment/70 uppercase">
              January 10–13, 2026 • Coastal Journey
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment tracking-tight">
            When Connections Began
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light max-w-2xl mx-auto mt-4 leading-relaxed">
            "Before the trip, we knew each other through work. On the road to Gopalpur, we began to connect beyond it."
          </p>

          <div className="mt-4 flex justify-center gap-2">
            <StampBadge text="GOPALPUR TRIP" subtext="ALL 19 PHOTOS VERIFIED" color="blue" rotation={-2} />
          </div>
        </div>

        {/* 6-Station Illustrated Journey Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {storySections.map((sec) => {
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`relative px-4 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                  isActive
                    ? "bg-mustard text-ink border-mustard scale-105 shadow-xl"
                    : "bg-[#1C2937]/90 text-parchment/75 border-parchment/15 hover:bg-[#253749] hover:text-parchment"
                }`}
              >
                <span>
                  {sec.id === "bus" && "🚌"}
                  {sec.id === "lawn" && "🏐"}
                  {sec.id === "lunch" && "🍛"}
                  {sec.id === "night" && "🌙"}
                  {sec.id === "beach" && "🌊"}
                  {sec.id === "chat" && "📱"}
                </span>
                <span>{sec.tabLabel}</span>
                <span className="text-[10px] opacity-75 font-normal">
                  ({sec.photos.length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Stage & Scrapbook Spread for Active Section */}
        <div
          className={`relative rounded-scrapbook border p-6 sm:p-10 shadow-2xl transition-all duration-500 bg-gradient-to-br ${currentSection.environmentColors.bg} ${currentSection.environmentColors.border}`}
        >
          {/* Top Tape & Label */}
          <div className="absolute -top-3.5 left-8 -rotate-2 pointer-events-none">
            <WashiTape color="mustard" width="w-28" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4 Cols: Story Narrative & Illustrated Hotspot Context */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-mustard bg-black/30 px-2.5 py-1 rounded">
                    {currentSection.timeLabel}
                  </span>
                  <span className="font-handwritten text-lg text-parchment/75">
                    {currentSection.tagline}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-parchment mb-4 leading-tight">
                  {currentSection.title}
                </h3>

                <p className="font-body text-sm text-parchment/85 leading-relaxed mb-6">
                  {currentSection.description}
                </p>

                {/* 2D Illustrated Vignette Accent per Station */}
                <div className="my-6 p-4 rounded-lg bg-black/40 border border-parchment/15 relative overflow-hidden">
                  {currentSection.id === "bus" && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-mustard/20 border border-mustard/40 flex items-center justify-center text-2xl flex-shrink-0">
                        🚌
                      </div>
                      <div>
                        <div className="font-handwritten text-base text-mustard font-bold">NH 16 Highway Route</div>
                        <div className="text-xs text-parchment/70">Pre-trip songs, dancing in the bus aisle & tea stop</div>
                      </div>
                    </div>
                  )}

                  {currentSection.id === "lawn" && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#9AA48D]/20 border border-[#9AA48D]/40 flex items-center justify-center text-2xl flex-shrink-0">
                        🏐
                      </div>
                      <div>
                        <div className="font-handwritten text-base text-mustard font-bold">Lawn Court & Volleyball Spike</div>
                        <div className="text-xs text-parchment/70">Tapan & the gang on the grass court, UNO +4 wild cards</div>
                      </div>
                    </div>
                  )}

                  {currentSection.id === "lunch" && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#C96E59]/20 border border-[#C96E59]/40 flex items-center justify-center text-2xl flex-shrink-0">
                        🍛
                      </div>
                      <div>
                        <div className="font-handwritten text-base text-mustard font-bold">The Giant Round Banquet</div>
                        <div className="text-xs text-parchment/70">Passing curries around the red tablecloth & pool patio</div>
                      </div>
                    </div>
                  )}

                  {currentSection.id === "night" && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#8199A8]/20 border border-[#8199A8]/40 flex items-center justify-center text-2xl flex-shrink-0">
                        🌙
                      </div>
                      <div>
                        <div className="font-handwritten text-base text-mustard font-bold">Floodlight Courtyard & Late UNO</div>
                        <div className="text-xs text-parchment/70">Winter jackets, shivering jokes & 2:00 AM patio cards</div>
                      </div>
                    </div>
                  )}

                  {currentSection.id === "beach" && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#D9B76B]/20 border border-[#D9B76B]/40 flex items-center justify-center text-2xl flex-shrink-0">
                        🌊
                      </div>
                      <div>
                        <div className="font-handwritten text-base text-mustard font-bold">Bay of Bengal Shoreline</div>
                        <div className="text-xs text-parchment/70">Barefoot sand circle, wooden gazebo & victory poses</div>
                      </div>
                    </div>
                  )}

                  {currentSection.id === "chat" && (
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#E5A96A]/20 border border-[#E5A96A]/40 flex items-center justify-center text-2xl flex-shrink-0">
                        📱
                      </div>
                      <div>
                        <div className="font-handwritten text-base text-mustard font-bold">Group 'UNO-2026' Created</div>
                        <div className="text-xs text-parchment/70">Subhashree dropped the photos & bus dance video vault</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Hand-drawn Illustrated Badge based on section */}
              <div className="p-4 bg-black/30 rounded-md border border-parchment/10 text-xs text-parchment/70 flex items-center justify-between">
                <span>📍 Gopalpur, Odisha</span>
                <span className="font-handwritten text-sm text-mustard">
                  {currentSection.photos.length} Real Keepsakes • Click to view 🔍
                </span>
              </div>
            </div>

            {/* Right 8 Cols: Real Authentic Photos Placed Exactly as Lived */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
                {currentSection.photos.map((photo, pIdx) => (
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
                      <span className="font-handwritten text-xs text-mustard-light mt-1.5 text-center px-1">
                        ↳ {photo.note}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Factual Clarification Note at Base */}
        <div className="mt-12 text-center max-w-xl mx-auto">
          <p className="font-sans text-xs text-parchment/50 leading-relaxed">
            * Gopalpur was an occasion where connections grew naturally beyond work. After returning, Subhashree created the occasion-specific WhatsApp group <strong>UNO-2026</strong> to share photographs and bus-dancing videos.
          </p>
        </div>
      </div>
    </section>
  );
};
