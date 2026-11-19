"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";
import { CharacterDoodle } from "../characters/CharacterDoodle";
import { Polaroid } from "../scrapbook/Polaroid";

export const SceneCover: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const latchRef = useRef<HTMLDivElement>(null);
  const waxSealRef = useRef<HTMLButtonElement>(null);
  const doodlesRef = useRef<HTMLDivElement>(null);
  const polaroidsRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.progress > 0.15) {
              setIsOpened(true);
            }
          },
        },
      });

      // 1. Crack the Wax Seal & slide latch
      tl.to(waxSealRef.current, {
        scale: 1.15,
        rotate: 15,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });

      tl.to(
        latchRef.current,
        {
          x: 45,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "-=0.2"
      );

      // 2. Open the scrapbook cover in 3D perspective
      tl.to(
        coverRef.current,
        {
          rotateY: -95,
          transformOrigin: "left center",
          boxShadow: "-15px 35px 70px rgba(38, 37, 34, 0.45)",
          duration: 1.1,
          ease: "power1.inOut",
        },
        "-=0.1"
      );

      // 3. Scatter the character doodles outward from the spine
      tl.to(
        ".cover-doodle",
        {
          scale: 1.25,
          opacity: 0.95,
          stagger: 0.05,
          duration: 0.5,
          ease: "back.out(1.5)",
        },
        "-=0.6"
      );

      // 4. Reveal the polaroids tucked under the edges
      tl.to(
        polaroidsRef.current,
        {
          scale: 1.05,
          y: -20,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpenBook = () => {
    setIsOpened(true);
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#FAF5EB] flex items-center justify-center p-4 sm:p-8"
      style={{ perspective: "1500px" }}
    >
      {/* Background Desk Surface Paper Texture & Ambient Floating Paper Flecks */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Floating Paper Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#D9B76B]/20 animate-pulse"
            style={{
              width: `${(i % 3) * 3 + 4}px`,
              height: `${(i % 3) * 3 + 4}px`,
              top: `${(i * 19) % 95}%`,
              left: `${(i * 27) % 90}%`,
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${(i % 5) * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* Tucked Peeking Polaroids in Background (Revealed as cover opens) */}
      <div
        ref={polaroidsRef}
        className="absolute inset-0 max-w-4xl mx-auto flex items-center justify-between pointer-events-auto px-6 sm:px-12 opacity-85 transition-opacity"
      >
        <div className="hidden lg:block -translate-x-12 -rotate-6">
          <Polaroid
            imageSrc="/gopalpur/IMG-20260111-WA0609.jpg"
            caption="Gopalpur Morning Garden ☀️"
            subcaption="January 11, 2026 • Resort Lawn"
            rotation={-6}
            tapeColor="mustard"
            tapePosition="top-left"
            className="w-56"
          />
        </div>
        <div className="hidden lg:block translate-x-12 rotate-8">
          <Polaroid
            imageSrc="/lunch/IMG_20260220_132922747.jpg"
            caption="The Merged Tables 🍱"
            subcaption="1:29 PM • Cafeteria Merger"
            rotation={8}
            tapeColor="dusty-blue"
            tapePosition="top-right"
            className="w-56"
          />
        </div>
      </div>

      {/* The Physical Memory Book Container */}
      <div className="relative w-full max-w-3xl aspect-[1.3/1] max-h-[82vh] flex items-center justify-center">
        {/* Interior Page 1 (Beneath Cover) */}
        <div className="absolute inset-0 bg-[#FFFDF9] rounded-scrapbook shadow-inner border border-ink/15 p-6 sm:p-12 flex flex-col justify-between overflow-hidden">
          {/* Faint Ruled Notebook Lines */}
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(transparent,transparent_28px,#8199A8_29px)] pointer-events-none" />
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-[#C96E59]/20 pointer-events-none" />

          {/* Top Stamp & Label */}
          <div className="relative z-10 flex items-center justify-between border-b border-ink/10 pb-4">
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Page 01 • The Beginning
            </span>
            <StampBadge text="UNO-2026" subtext="MEMORIES ONLY" color="brown" rotation={3} />
          </div>

          {/* First Page Welcome Message */}
          <div className="relative z-10 my-auto text-center max-w-lg mx-auto">
            <span className="font-handwritten text-2xl text-terracotta block mb-2">
              Welcome to our little world
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-ink leading-tight">
              Before the Chaos
            </h2>
            <p className="font-handwritten text-xl sm:text-2xl text-ink-muted mt-4 leading-relaxed">
              "Every great story starts somewhere. Ours started rather quietly with awkward lunches
              and polite hellos..."
            </p>
          </div>

          <div className="relative z-10 text-center font-handwritten text-lg text-ink-faint">
            Scroll down to travel through our journey ↓
          </div>
        </div>

        {/* The 3D Turning Front Cover */}
        <div
          ref={coverRef}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0 bg-[#38261E] text-parchment rounded-scrapbook shadow-scrapbook border-4 border-[#281A14] p-6 sm:p-12 flex flex-col justify-between overflow-hidden select-none z-30"
        >
          {/* Rich Aged Kraft/Leather Cover Texture Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F3EBDD_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Brass Protective Corners */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#D9B76B]/80 rounded-tl-sm pointer-events-none" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#D9B76B]/80 rounded-tr-sm pointer-events-none" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#D9B76B]/80 rounded-bl-sm pointer-events-none" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#D9B76B]/80 rounded-br-sm pointer-events-none" />

          {/* Book Spine Stitching Effect on Left */}
          <div className="absolute left-6 top-0 bottom-0 w-2 border-r-2 border-dashed border-[#D9B76B]/30 pointer-events-none" />

          {/* The Brass Latch Closure on Right Edge */}
          <button
            ref={latchRef as any}
            onClick={handleOpenBook}
            aria-label="Unlatch and open memory book"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-11 h-20 bg-gradient-to-r from-[#D9B76B] to-[#B48F40] rounded-r-md shadow-lg border border-[#8C6D27] flex items-center justify-center z-40 cursor-pointer hover:scale-105 transition-transform group"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#38261E] border-2 border-[#D9B76B] group-hover:scale-110 transition-transform" />
          </button>

          {/* The Central Wax Seal with "UNO-2026" */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-40">
            <button
              ref={waxSealRef}
              onClick={handleOpenBook}
              aria-label="Break the wax seal to open UNO-2026"
              className="pointer-events-auto cursor-pointer transform hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#A83232] via-[#852222] to-[#541111] border-4 border-[#691818] flex flex-col items-center justify-center shadow-inner">
                {/* Organic Scalloped Wax Rim Edge */}
                <div className="absolute inset-1 rounded-full border border-[#D96B6B]/40 pointer-events-none" />
                <div className="absolute inset-2.5 rounded-full border border-black/30 pointer-events-none" />
                
                {/* Wax Seal Emblem Text */}
                <span className="font-sans text-[9px] tracking-widest text-[#FCD5D5] uppercase font-bold opacity-80 -mt-1">
                  OFFICIAL SEAL
                </span>
                <span className="font-display font-black text-lg sm:text-xl text-[#FFF0F0] tracking-wider drop-shadow-md">
                  UNO-2026
                </span>
                <span className="font-handwritten text-xs text-[#FFC4C4] opacity-90">
                  Tap to Unseal ✦
                </span>
              </div>
            </button>
          </div>

          {/* Top Cover Washi Tape & Date Stamp */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="-mt-3 -ml-2 rotate-[-3deg]">
              <WashiTape color="mustard" width="w-32" />
            </div>
            <StampBadge text="EST. 2026" subtext="UNO-2026" color="red" rotation={8} />
          </div>

          {/* Main Cover Title Presentation */}
          <div className="relative z-10 text-center my-auto px-4 mt-6">
            <span className="font-handwritten text-xl sm:text-2xl text-mustard-light tracking-wide block mb-1">
              An Illustrated Digital Memory Book
            </span>

            {/* Embossed Main Title */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-parchment drop-shadow-md">
              UNO-2026
            </h1>

            {/* Golden Ribbon Line */}
            <div className="w-24 sm:w-36 h-1 bg-gradient-to-r from-transparent via-mustard to-transparent mx-auto my-3" />

            {/* Hand-lettered Taglines */}
            <p className="font-handwritten text-2xl sm:text-3xl text-mustard-light">
              "A little chaos. A lot of memories."
            </p>
            <p className="font-body text-xs sm:text-sm text-parchment/70 tracking-widest uppercase mt-2">
              We came for work. We stayed for each other.
            </p>
          </div>

          {/* Bottom Cover Doodles & Scroll Prompt */}
          <div
            ref={doodlesRef}
            className="relative z-10 flex items-center justify-between pt-4 border-t border-[#D9B76B]/20"
          >
            <div className="flex items-center gap-3 text-mustard-light opacity-80">
              <span className="cover-doodle">
                <CharacterDoodle type="receipt" size={24} className="text-mustard-light" />
              </span>
              <span className="cover-doodle">
                <CharacterDoodle type="eggplant" size={24} className="text-mustard-light" />
              </span>
              <span className="cover-doodle">
                <CharacterDoodle type="volleyball" size={24} className="text-mustard-light" />
              </span>
              <span className="cover-doodle hidden sm:inline-block">
                <CharacterDoodle type="cat" size={24} className="text-mustard-light" />
              </span>
              <span className="cover-doodle hidden sm:inline-block">
                <CharacterDoodle type="cup" size={24} className="text-mustard-light" />
              </span>
            </div>

            <div className="flex items-center gap-2 animate-bounce cursor-pointer" onClick={handleOpenBook}>
              <span className="font-handwritten text-xl text-mustard-light">Break seal & open</span>
              <span className="text-mustard-light text-lg">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
