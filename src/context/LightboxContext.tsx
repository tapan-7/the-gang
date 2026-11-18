"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";
import { ALL_MEDIA, MEDIA_BY_ID } from "@/data/media";
import { MemoryPhoto } from "@/types/media";
import { WashiTape } from "@/components/scrapbook/WashiTape";

interface LightboxContextType {
  openLightbox: (photoOrId: string | MemoryPhoto, playlist?: MemoryPhoto[]) => void;
  closeLightbox: () => void;
  isOpen: boolean;
  currentPhoto: MemoryPhoto | null;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [playlist, setPlaylist] = useState<MemoryPhoto[]>(ALL_MEDIA);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = useCallback((photoOrId: string | MemoryPhoto, customPlaylist?: MemoryPhoto[]) => {
    const list = customPlaylist && customPlaylist.length > 0 ? customPlaylist : ALL_MEDIA;
    setPlaylist(list);

    let targetPhoto: MemoryPhoto | undefined;
    if (typeof photoOrId === "string") {
      targetPhoto = list.find((p) => p.id === photoOrId || p.src === photoOrId) || MEDIA_BY_ID[photoOrId];
    } else {
      targetPhoto = photoOrId;
    }

    if (targetPhoto) {
      const idx = list.findIndex((p) => p.id === targetPhoto?.id || p.src === targetPhoto?.src);
      setCurrentIndex(idx !== -1 ? idx : 0);
    } else {
      setCurrentIndex(0);
    }
    setIsOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  const showNext = useCallback(() => {
    if (playlist.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  }, [playlist.length]);

  const showPrev = useCallback(() => {
    if (playlist.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  }, [playlist.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const currentPhoto = isOpen && playlist[currentIndex] ? playlist[currentIndex] : null;

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox, isOpen, currentPhoto }}>
      {children}

      {/* Fullscreen Accessible Lightbox Overlay */}
      {isOpen && currentPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.caption || "Photograph keepsake"}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            aria-label="Close photo preview"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Prev */}
          {playlist.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 sm:left-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Navigation Next */}
          {playlist.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 sm:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Main Polaroid Frame Container */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center p-3 sm:p-5 bg-paper-card rounded-scrapbook shadow-2xl border border-ink/20 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Washi Tape on frame */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none">
              <WashiTape color={currentPhoto.tapeColor || "mustard"} width="w-28" />
            </div>

            {/* Photo Container */}
            <div className="relative w-full max-h-[70vh] aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded bg-ink/5 flex items-center justify-center">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                className="object-contain"
                priority
              />
            </div>

            {/* Bottom Caption & Memory Details */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-ink/10 pt-3">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                  {currentPhoto.caption}
                </h3>
                {currentPhoto.subcaption && (
                  <p className="font-handwritten text-lg sm:text-xl text-ink-muted">
                    {currentPhoto.subcaption}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3">
                {currentPhoto.date && (
                  <span className="font-sans text-xs uppercase tracking-wider text-ink-muted/80 bg-paper-aged px-2.5 py-1 rounded">
                    📅 {currentPhoto.date}
                  </span>
                )}
                <span className="font-sans text-xs uppercase tracking-wider text-terracotta bg-terracotta/10 px-2.5 py-1 rounded font-bold">
                  {currentPhoto.folder}
                </span>
                <span className="font-sans text-xs text-ink-muted">
                  {currentIndex + 1} / {playlist.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context;
};

