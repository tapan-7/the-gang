"use client";

import React, { useState, useEffect } from "react";
import { CHAPTERS } from "@/data/chapters";
import { cn } from "@/lib/utils";
import { WashiTape } from "../scrapbook/WashiTape";

export const ChapterNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChapterId, setActiveChapterId] = useState<string>("chapter-01");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectChapter = (id: string) => {
    setIsOpen(false);
    setActiveChapterId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top-Right Scrapbook Bookmark Button */}
      <div className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Chapter Index"
          aria-expanded={isOpen}
          className="group relative flex items-center gap-2 bg-paper-card text-ink px-4 py-2 sm:px-5 sm:py-2.5 rounded-sm shadow-md hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5 border border-ink/10 focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          {/* Subtle tape over button */}
          <div className="absolute -top-2 left-3 -rotate-3 pointer-events-none">
            <WashiTape color="terracotta" width="w-12" />
          </div>
          <span className="font-display font-semibold text-sm tracking-wider uppercase">
            {isOpen ? "Close" : "Chapters"}
          </span>
          <span className="font-handwritten text-lg text-terracotta font-bold">
            01-09
          </span>
        </button>
      </div>

      {/* Fullscreen Overlay Chapter Index */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-ink/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-parchment rounded-scrapbook p-6 sm:p-12 shadow-scrapbook border-2 border-ink/15 animate-scaleUp"
          >
            {/* Washi tapes on corners */}
            <div className="absolute -top-3 left-8 rotate-[-4deg]">
              <WashiTape color="mustard" width="w-28" />
            </div>
            <div className="absolute -top-3 right-8 rotate-[5deg]">
              <WashiTape color="dusty-blue" width="w-28" />
            </div>

            {/* Modal Header */}
            <div className="border-b border-ink/15 pb-6 mb-8 text-center sm:text-left">
              <span className="font-handwritten text-2xl text-terracotta-dark">
                Table of Memories
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink mt-1">
                The 9 Chapters of THE GANG
              </h2>
              <p className="font-body text-ink-muted text-sm mt-1">
                Select any chapter to turn to its page in the scrapbook.
              </p>
            </div>

            {/* Chapter List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {CHAPTERS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => handleSelectChapter(ch.id)}
                  className={cn(
                    "group text-left p-4 rounded-sm bg-paper-card border border-ink/10 hover:border-terracotta transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between",
                    activeChapterId === ch.id && "ring-2 ring-terracotta"
                  )}
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-handwritten text-xl font-bold text-terracotta">
                      Chapter 0{ch.number}
                    </span>
                    {ch.location && (
                      <span className="font-sans text-[10px] tracking-wider text-ink-faint uppercase">
                        {ch.location}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink group-hover:text-terracotta transition-colors leading-snug">
                    {ch.title}
                  </h3>
                  <p className="font-body text-xs text-ink-muted mt-2 line-clamp-2 leading-relaxed">
                    {ch.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

