"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { StampBadge } from "../scrapbook/StampBadge";
import { CharacterAvatar } from "../characters/CharacterAvatar";
import { CHARACTERS } from "@/data/characters";

export const SceneChapter01: React.FC = () => {
  const [selectedEarlyMember, setSelectedEarlyMember] = useState<string>("dushmanta");

  const earlyMembers = [
    {
      id: "dushmanta",
      name: "Dushmanta",
      role: "The Finance Minister",
      deskItem: "Bill receipts & coffee mug",
      firstImpression: "Politely offered to pay for everyone's tea on day one—and completely forgot to collect the split.",
      quote: "'Wait, who had the extra samosa?'",
      avatarColor: "#D9A84E",
      doodle: "🧾",
    },
    {
      id: "paresh",
      name: "Paresh",
      role: "The Gentleman Writer",
      deskItem: "Fountain pen & legal pad",
      firstImpression: "Sat upright drafting elegant prose and formal meeting summaries before anyone realized he was a master chef.",
      quote: "'In summary: the meeting could have been a poem.'",
      avatarColor: "#4A6B82",
      doodle: "✒️",
    },
    {
      id: "shyamalendu",
      name: "Shyamalendu",
      role: "The Explainer",
      deskItem: "Whiteboard marker & diagrams",
      firstImpression: "Drew full architectural diagrams on glass partitions explaining jokes nobody understood yet.",
      quote: "'Let me draw you a quick flowchart of what happened.'",
      avatarColor: "#8C4843",
      doodle: "📊",
    },
    {
      id: "astha",
      name: "Astha",
      role: "The Event Commander",
      deskItem: "Sticky notes & color pens",
      firstImpression: "Organized everyone's desk supplies while affectionately joking about running out of RAM.",
      quote: "'If we don't put this in the calendar right now, it will evaporate.'",
      avatarColor: "#E07A5F",
      doodle: "📋",
    },
    {
      id: "tapan",
      name: "Tapan (Luffy)",
      role: "The Quiet Observer",
      deskItem: "Volleyball badge & bento",
      firstImpression: "Sat quietly listening to everyone with a slight smirk, chiming in with one devastatingly funny one-liner before disappearing.",
      quote: "'I'm just here for volleyball and peaceful silence.'",
      avatarColor: "#C96E59",
      doodle: "🏐",
    },
  ];

  const currentMember = earlyMembers.find((m) => m.id === selectedEarlyMember) || earlyMembers[0];

  return (
    <section
      id="chapter-01"
      className="relative min-h-screen w-full bg-[#FAF5EB] py-24 sm:py-32 px-4 sm:px-8 flex flex-col items-center justify-center overflow-hidden border-t border-ink/10"
    >
      {/* 2D Illustrated Office Background: Subtle Wall Paneling & Ambient Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Illustrated Office Architectural Elements: Ceiling Beam & Slowly Spinning Fan */}
      <div className="absolute top-0 left-0 right-0 h-24 border-b border-ink/10 flex items-center justify-around pointer-events-none opacity-40">
        <div className="flex items-center gap-2">
          {/* Animated 2D Wall Clock */}
          <div className="w-10 h-10 rounded-full border-2 border-ink/60 flex items-center justify-center relative bg-paper-card">
            <div className="w-0.5 h-3 bg-ink rounded absolute top-2 left-[19px] origin-bottom animate-[spin_12s_linear_infinite]" />
            <div className="w-0.5 h-4 bg-terracotta rounded absolute top-1 left-[19px] origin-bottom animate-[spin_60s_linear_infinite]" />
            <div className="w-1.5 h-1.5 rounded-full bg-ink z-10" />
          </div>
          <span className="font-sans text-[10px] tracking-widest text-ink-muted uppercase font-bold">
            09:15 AM • QUIET HOURS
          </span>
        </div>

        {/* 2D Animated Ceiling Fan */}
        <div className="hidden sm:flex flex-col items-center">
          <div className="w-1 h-6 bg-ink/40" />
          <div className="w-16 h-2 bg-ink/30 rounded-full animate-spin [animation-duration:3s]" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center mt-6">
        {/* Chapter Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 01
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Early Days • The Polite Office Cubicles
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            Before the Chaos
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Before the 3 AM UNO games and the bachelorette pool parties, we were polite colleagues exchanging shy nods in the hallway."
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <StampBadge text="POLITE STAGE" subtext="AWKWARD LUNCHES" color="brown" rotation={-3} />
            <StampBadge text="UNO-2026" subtext="ORIGIN" color="blue" rotation={2} />
          </div>
        </div>

        {/* 2D Interactive Illustrated Office Floor Spread */}
        <div className="w-full bg-[#FFFDF9] border-2 border-ink/15 rounded-scrapbook p-6 sm:p-10 shadow-xl relative overflow-hidden mb-12">
          {/* Faint Corkboard Texture Stripe on Top */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-[#C9A66B]/30 border-b border-ink/10" />

          {/* Interactive Desk Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-8">
            {earlyMembers.map((member) => {
              const isSelected = member.id === selectedEarlyMember;
              return (
                <button
                  key={member.id}
                  onClick={() => setSelectedEarlyMember(member.id)}
                  className={`px-4 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-300 border flex items-center gap-2 ${
                    isSelected
                      ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                      : "bg-paper-card text-ink border-ink/15 hover:bg-parchment"
                  }`}
                >
                  <span className="text-base">{member.doodle}</span>
                  <span>{member.name}'s Desk</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 5 Cols: 2D Illustrated Desk Vignette */}
            <div className="lg:col-span-5 bg-parchment/60 p-6 rounded-xl border border-ink/10 relative">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-inner border-2 border-white"
                  style={{ backgroundColor: `${currentMember.avatarColor}33`, color: currentMember.avatarColor }}
                >
                  {currentMember.doodle}
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-ink">
                    {currentMember.name}
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-widest text-terracotta font-bold">
                    {currentMember.role}
                  </span>
                </div>
              </div>

              {/* Desk Item Sketch */}
              <div className="p-3 bg-white/80 rounded-lg border border-ink/10 mb-4 text-xs text-ink-muted">
                <span className="font-bold text-ink block mb-0.5">Desk Artifacts:</span>
                <span>{currentMember.deskItem}</span>
              </div>

              {/* Memory Note */}
              <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">
                {currentMember.firstImpression}
              </p>

              {/* First Quote */}
              <div className="font-handwritten text-lg text-ink bg-terracotta/5 p-3 rounded border-l-2 border-terracotta">
                {currentMember.quote}
              </div>
            </div>

            {/* Right 7 Cols: The First Office Polaroid & Corkboard Memories */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Polaroid
                imageSrc="/lunch/DSC_0071.JPG"
                caption="Early Cafeteria Days 📸"
                subcaption="Awkward nods before the table mergers"
                rotation={-2}
                tapeColor="mustard"
                tapePosition="top-center"
                className="w-full max-w-[270px]"
              />

              <div className="p-6 bg-[#FAF5EB] rounded-lg border border-dashed border-ink/20 max-w-xs text-center">
                <span className="text-3xl block mb-2">☕</span>
                <span className="font-handwritten text-xl text-ink font-bold block mb-1">
                  The First 1:00 PM Break
                </span>
                <p className="font-body text-xs text-ink-muted leading-relaxed">
                  Noticeable pauses in conversation where everyone pretended to read Slack notifications. Nobody knew that within months, we'd be an inseparable family.
                </p>
                <div className="mt-3 text-[11px] font-bold text-terracotta uppercase tracking-widest">
                  Tap other desks above ↑
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trail Indicator to Chapter 02 */}
        <div className="flex flex-col items-center gap-2 opacity-70">
          <span className="font-handwritten text-xl text-ink-muted">
            Then fourteen distinct worlds collided...
          </span>
          <span className="text-xl animate-bounce text-terracotta">↓</span>
        </div>
      </div>
    </section>
  );
};
