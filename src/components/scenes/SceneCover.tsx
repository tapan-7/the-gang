"use client";

import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { WashiTape } from "../scrapbook/WashiTape";
import { StampBadge } from "../scrapbook/StampBadge";
import { CharacterDoodle } from "../characters/CharacterDoodle";
import { Polaroid } from "../scrapbook/Polaroid";

export const SceneCover: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const latchRef = useRef<HTMLDivElement>(null);
  const doodlesRef = useRef<HTMLDivElement>(null);
  const polaroidsRef = useRef<HTMLDivElement>(null);

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
        },
      });

      // 1. Unlatch the brass latch
      tl.to(latchRef.current, {
        x: 40,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });

      // 2. Open the scrapbook cover in 3D perspective
      tl.to(
        coverRef.current,
        {
          rotateY: -92,
          transformOrigin: "left center",
          boxShadow: "-10px 30px 60px rgba(38, 37, 34, 0.4)",
          duration: 1,
          ease: "power1.inOut",
        },
        "-=0.1"
      );

      // 3. Scatter the character doodles outward from the spine
      tl.to(
        ".cover-doodle",
        {
          scale: 1.2,
          opacity: 0.9,
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

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-parchment flex items-center justify-center p-4 sm:p-8"
      style={{ perspective: "1500px" }}
    >
      {/* Background Desk Surface Paper Texture */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#59483D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Tucked Peeking Polaroids in Background (Revealed as cover opens) */}
      <div
        ref={polaroidsRef}
        className="absolute inset-0 max-w-4xl mx-auto flex items-center justify-between pointer-events-auto px-6 sm:px-12 opacity-85 transition-opacity"
      >
        <div className="hidden lg:block -translate-x-12 -rotate-6">
          <Polaroid
            imageSrc="/gopalpur/IMG-20260111-WA0609.jpg"
            caption="Gopalpur Sunrise 🌊"
            subcaption="January 11, 2026 • Beach Walk"
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
            subcaption="1:00 PM • Cafeteria Merger"
            rotation={8}
            tapeColor="dusty-blue"
            tapePosition="top-right"
            className="w-56"
          />
        </div>
      </div>

      {/* The Physical Scrapbook Book Container */}
      <div className="relative w-full max-w-3xl aspect-[1.3/1] max-h-[82vh] flex items-center justify-center">
        {/* Interior Page 1 (Beneath Cover) */}
        <div className="absolute inset-0 bg-paper-card rounded-scrapbook shadow-inner border border-ink/15 p-6 sm:p-12 flex flex-col justify-between overflow-hidden">
          {/* Faint Ruled Notebook Lines */}
          <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(transparent,transparent_28px,#8199A8_29px)] pointer-events-none" />

          {/* Top Stamp & Label */}
          <div className="relative z-10 flex items-center justify-between border-b border-ink/10 pb-4">
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Chapter 01 • The Beginning
            </span>
            <StampBadge text="CONFIDENTIAL" subtext="MEMORIES ONLY" color="brown" rotation={3} />
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
            Scroll down to unfold the memories ↓
          </div>
        </div>

        {/* The 3D Turning Front Cover */}
        <div
          ref={coverRef}
          style={{ transformStyle: "preserve-3d" }}
          className="absolute inset-0 bg-[#3D2C24] text-parchment rounded-scrapbook shadow-scrapbook border-4 border-[#2D1F18] p-6 sm:p-12 flex flex-col justify-between overflow-hidden select-none z-30"
        >
          {/* Rich Aged Leather/Kraft Cover Texture Overlay */}
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
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
            }}
            aria-label="Unlatch and open memory book"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-11 h-20 bg-gradient-to-r from-[#D9B76B] to-[#B48F40] rounded-r-md shadow-lg border border-[#8C6D27] flex items-center justify-center z-40 cursor-pointer hover:scale-105 transition-transform group"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-[#3D2C24] border-2 border-[#D9B76B] group-hover:scale-110 transition-transform" />
          </button>

          {/* Top Cover Washi Tape & Date Stamp */}
          <div className="relative z-10 flex items-start justify-between">
            <div className="-mt-3 -ml-2 rotate-[-3deg]">
              <WashiTape color="mustard" width="w-32" />
            </div>
            <StampBadge text="EST. 2026" subtext="HYSCALER GANG" color="red" rotation={8} />
          </div>

          {/* Main Cover Title Presentation */}
          <div className="relative z-10 text-center my-auto px-4">
            <span className="font-handwritten text-xl sm:text-2xl text-mustard-light tracking-wide block mb-1">
              An Illustrated Digital Memory Book
            </span>

            {/* Embossed Main Title */}
            <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-parchment drop-shadow-md">
              THE GANG
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

            <div className="flex items-center gap-2 animate-bounce">
              <span className="font-handwritten text-xl text-mustard-light">Open our story</span>
              <span className="text-mustard-light text-lg">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

