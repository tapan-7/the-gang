"use client";

import React, { useState } from "react";
import { Polaroid } from "../scrapbook/Polaroid";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";
import { HandwrittenNote } from "../scrapbook/HandwrittenNote";

export const SceneChapter03_Gopalpur: React.FC = () => {
  const [activeBeat, setActiveBeat] = useState<number>(1);

  const beats = [
    {
      id: 1,
      time: "10:00 AM",
      title: "Morning Setup Rushes",
      summary: "Inner squad—Tapan, Shyamalendu, Astha, Tanu, Soumya—running around blowing balloons, pinning streamers, and decorating the evening lawn.",
      humor: "Astha issuing 45 instructions per minute while everyone carried tape rolls.",
      photoCaption: "Operation Prep Rushes 🎈",
      subcaption: "Mayfair Grounds • Morning",
      tapeColor: "mustard" as const,
      rotation: -3,
    },
    {
      id: 2,
      time: "12:00 PM - 5:00 PM",
      title: "The Pool Party & The 5 PM Lunch Sprint",
      summary: "Completing song lyrics, splashing, and tossing reluctant members into the shallow pool. We had so much fun we completely lost track of time and forgot lunch existed until 5:00 PM!",
      humor: "The Running Joke: 'We organized the entire retreat schedule. We forgot to schedule lunch.' We literally ate at 5 PM!",
      photoCaption: "The 5:00 PM Lunch Sprint 🏊‍♂️",
      subcaption: "Running Joke • 5 PM sharp!",
      tapeColor: "terracotta" as const,
      rotation: 2.5,
    },
    {
      id: 3,
      time: "6:30 PM",
      title: "Evening Lawn Speeches & Cake",
      summary: "Twilight falls over Mayfair. Golden fairy lights glow softly. Emotional toasts celebrate Arpita, cake is cut, and everyone dances.",
      humor: "Arpita dancing with radiant joy while the entire gang cheered.",
      photoCaption: "Fairy Lights & Speeches ✨",
      subcaption: "Toasting our Penguin Mom",
      tapeColor: "dusty-blue" as const,
      rotation: -2,
    },
    {
      id: 4,
      time: "10:30 PM",
      title: "Pyjama Party & The Secret Treasure Hunt",
      summary: "Arpita following handwritten clue notes hidden across the hotel property, leading to a magical living room photoshoot and tribute website.",
      humor: "Arpita sprinting through hotel corridors deciphering clues with the gang trailing behind.",
      photoCaption: "The Final Clue Found 🗺️",
      subcaption: "Living Room Celebration",
      tapeColor: "sage" as const,
      rotation: 3,
    },
    {
      id: 5,
      time: "1:00 AM - 6:00 AM",
      title: "Ghost Stories, UNO-2026, and Sunrise",
      summary: "Spine-tingling personal ghost stories told in the dark patio, furious screaming over UNO draw-four cards until 3:00 AM, and walking to the beach to watch the golden sunrise.",
      humor: "The birth of the 'UNO-2026' WhatsApp group as the sun crested the waves.",
      photoCaption: "The Gopalpur Sunrise 🌅",
      subcaption: "Colleagues became family",
      tapeColor: "mustard" as const,
      rotation: -1.5,
    },
  ];

  const currentBeat = beats.find((b) => b.id === activeBeat) || beats[0];

  return (
    <section
      id="chapter-03"
      className="relative min-h-screen w-full bg-[#18232F] text-parchment py-28 px-4 sm:px-8 overflow-hidden"
    >
      {/* Twilight stars and ocean atmosphere */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F3EBDD_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      {/* Decorative Golden Fairy Lights across top */}
      <div className="absolute top-0 left-0 right-0 h-12 flex justify-around items-center opacity-70 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[#FDE68A] shadow-[0_0_12px_#FDE68A] animate-pulse"
            style={{ animationDelay: `${(i * 0.2).toFixed(1)}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Chapter Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-mustard font-bold">
              Chapter 03
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-parchment/30" />
            <span className="font-sans text-xs tracking-widest text-parchment/60 uppercase">
              Mayfair Palm Beach Resort • Gopalpur
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-parchment tracking-tight">
            The Night Everything Changed
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light max-w-2xl mx-auto mt-4 leading-relaxed">
            "Somewhere between the pool games, the 5 PM lunch sprint, the ghost stories, and the sunrise...
            we stopped being just colleagues."
          </p>

          <div className="mt-4">
            <StampBadge text="UNO-2026 WAS BORN" subtext="GOPALPUR RETREAT" color="red" rotation={-5} />
          </div>
        </div>

        {/* Interactive 24-Hour Timeline Stepper */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {beats.map((beat) => (
            <button
              key={beat.id}
              onClick={() => setActiveBeat(beat.id)}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-200 border ${
                activeBeat === beat.id
                  ? "bg-mustard text-ink border-mustard scale-105 shadow-lg"
                  : "bg-parchment/10 text-parchment/80 border-parchment/20 hover:bg-parchment/20"
              }`}
            >
              <span>{beat.time}</span> • <span className="font-medium">{beat.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Current Beat Cinematic Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-[#223140]/90 p-8 sm:p-12 rounded-scrapbook border border-parchment/15 shadow-2xl relative">
          {/* Corner Washi Tape */}
          <div className="absolute -top-3 left-10 -rotate-2">
            <WashiTape color={currentBeat.tapeColor} width="w-28" />
          </div>

          {/* Left: Interactive Polaroid */}
          <div className="flex justify-center">
            <Polaroid
              caption={currentBeat.photoCaption}
              subcaption={currentBeat.subcaption}
              rotation={currentBeat.rotation}
              tapeColor={currentBeat.tapeColor}
              tapePosition="top-center"
              className="w-full max-w-sm"
            >
              <div className="w-full h-full p-6 flex flex-col items-center justify-center bg-paper-aged text-ink text-center">
                {currentBeat.id === 2 ? (
                  /* Animated Spinning Clock for 5 PM Lunch Sprint */
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full border-4 border-ink flex items-center justify-center relative mb-3 bg-paper-card shadow-inner">
                      <div className="w-1 h-7 bg-stamp-red origin-bottom absolute top-3 left-[38px] rotate-[150deg]" />
                      <div className="w-1 h-9 bg-ink origin-bottom absolute top-1 left-[38px] rotate-[0deg]" />
                      <div className="w-3 h-3 rounded-full bg-ink z-10" />
                    </div>
                    <span className="font-display font-extrabold text-2xl text-stamp-red">
                      5:00 PM!
                    </span>
                    <span className="font-handwritten text-lg text-ink-muted">
                      "We forgot lunch existed!"
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <span className="text-4xl mb-2">🌊</span>
                    <span className="font-display font-bold text-lg text-ink">
                      {currentBeat.title}
                    </span>
                    <span className="font-handwritten text-base text-ink-muted mt-1">
                      {currentBeat.time} • Mayfair Gopalpur
                    </span>
                  </div>
                )}
              </div>
            </Polaroid>
          </div>

          {/* Right: Narrative Details */}
          <div className="space-y-6 text-left">
            <div>
              <span className="font-sans text-xs font-bold tracking-widest text-mustard uppercase">
                Scene 3.{currentBeat.id} • {currentBeat.time}
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-parchment mt-1">
                {currentBeat.title}
              </h3>
            </div>

            <p className="font-body text-base text-parchment/90 leading-relaxed">
              {currentBeat.summary}
            </p>

            {/* Humorous Moment */}
            <div className="p-4 bg-mustard/15 rounded border border-mustard/30 text-parchment">
              <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-mustard-light block mb-1">
                The Memory Highlight:
              </span>
              <p className="font-handwritten text-xl text-mustard-light leading-snug">
                "{currentBeat.humor}"
              </p>
            </div>

            {/* Stepper Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-parchment/15">
              <button
                disabled={activeBeat === 1}
                onClick={() => setActiveBeat((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 font-sans text-xs font-bold tracking-wider uppercase rounded bg-parchment/10 hover:bg-parchment/20 disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                ← Previous Beat
              </button>
              <span className="font-mono text-xs text-parchment/50">
                0{activeBeat} / 0{beats.length}
              </span>
              <button
                disabled={activeBeat === beats.length}
                onClick={() => setActiveBeat((prev) => Math.min(beats.length, prev + 1))}
                className="px-4 py-2 font-sans text-xs font-bold tracking-wider uppercase rounded bg-mustard text-ink hover:bg-mustard-light disabled:opacity-30 disabled:pointer-events-none transition-colors"
              >
                Next Beat →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

