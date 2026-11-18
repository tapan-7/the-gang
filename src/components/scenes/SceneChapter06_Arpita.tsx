"use client";

import React from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";

export const SceneChapter06_Arpita: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "The Covert Prep Squad",
      desc: "Astha, Subhashree, Tapan, Soumya, and Tanu secretly decorating the lawn and room while keeping Arpita completely unsuspecting.",
    },
    {
      num: "02",
      title: "Pool Madness & 5 PM Lunch",
      desc: "Water games, singing competitions, playful pool tosses, and laughing so hard that lunch was literally eaten at 5:00 PM!",
    },
    {
      num: "03",
      title: "Fairy Lights & Speeches",
      desc: "Lawn toasts expressing what Arpita meant to everyone, accompanied by emotional happy tears, cake cutting, and dancing.",
    },
    {
      num: "04",
      title: "The Hotel Treasure Hunt",
      desc: "Handwritten clues scattered across Mayfair, sending Arpita on an adventure that led to a living room photoshoot and tribute website.",
    },
  ];

  return (
    <section
      id="chapter-06"
      className="relative min-h-screen w-full bg-[#FCFBF7] py-28 px-4 sm:px-8 border-t border-ink/10"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C96E59_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              Chapter 06
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Gopalpur Special Feature
            </span>
          </div>

          <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-ink tracking-tight">
            Operation Arpita
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-xl mx-auto mt-4 leading-relaxed">
            "A mini-documentary honoring our Penguin Mom's bachelorette celebration at Mayfair."
          </p>

          <div className="mt-4">
            <StampBadge text="OPERATION ARPITA" subtext="MISSION ACCOMPLISHED" color="red" rotation={3} />
          </div>
        </div>

        {/* 4-Step Keepsake Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-parchment/60 rounded-scrapbook border border-ink/10 shadow-sm flex flex-col justify-between"
            >
              <span className="font-display font-black text-3xl text-terracotta mb-2">
                {step.num}
              </span>
              <h4 className="font-display font-bold text-lg text-ink mb-2">{step.title}</h4>
              <p className="font-body text-xs text-ink-muted leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Centerpiece Tribute Card */}
        <div className="bg-paper-card p-8 sm:p-12 rounded-scrapbook border border-ink/10 shadow-md relative">
          <div className="absolute -top-3 left-10 -rotate-2">
            <WashiTape color="terracotta" width="w-28" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-handwritten text-2xl text-terracotta block">
                The Mother of the Gang
              </span>
              <h3 className="font-display font-black text-3xl text-ink mt-1">
                Dancing, Cooking, and Endless Love
              </h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed mt-4">
                Arpita fed everyone first, danced with radiant energy, and cared for all of us like family.
                Operation Arpita was our collective way of saying: we will always cherish you.
              </p>
              <div className="mt-6 p-4 bg-terracotta/10 rounded border border-terracotta/20">
                <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-terracotta block mb-1">
                  The Gang's Promise:
                </span>
                <p className="font-handwritten text-xl text-ink leading-snug">
                  "No matter where life takes you, you will always be our Penguin Mom."
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Polaroid
                caption="Operation Arpita Queen 👑"
                subcaption="Mayfair Gopalpur • 2026"
                rotation={2}
                tapeColor="mustard"
                tapePosition="top-right"
                className="w-full max-w-sm"
              >
                <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-paper-aged text-center">
                  <span className="text-4xl mb-2">🐧❤️</span>
                  <span className="font-display font-bold text-lg text-ink">Bachelorette Tiara</span>
                  <span className="font-handwritten text-base text-ink-muted mt-1">
                    "Happy tears, cake, and memories forever."
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

