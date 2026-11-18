"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CATEGORIES_CONFIG, ALL_PHOTOS, ALBUMS_BY_FOLDER, AlbumPhoto } from "@/data/photos";
import { Polaroid } from "../scrapbook/Polaroid";
import { StampBadge } from "../scrapbook/StampBadge";
import { WashiTape } from "../scrapbook/WashiTape";

export const MemoryGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const filteredPhotos: AlbumPhoto[] =
    activeTab === "all"
      ? ALL_PHOTOS
      : ALBUMS_BY_FOLDER[activeTab] || [];

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredPhotos.length : null
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : null
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const currentLightboxPhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="relative min-h-screen w-full bg-paper-card py-28 px-4 sm:px-8 border-t border-ink/10"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#262522_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Gallery Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="font-handwritten text-2xl text-terracotta font-bold">
              The Vault
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              {ALL_PHOTOS.length} Authentic Photographic Keepsakes
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
            The Complete Photo Vault
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Every single photo from every outing, tea break, cafeteria lunch, and celebration.
            Preserved folder-by-folder exactly as lived."
          </p>

          <div className="mt-4">
            <StampBadge text="ALL 120+ PHOTOS" subtext="FOLDER VERIFIED" color="red" rotation={-3} />
          </div>
        </div>

        {/* Category Filter Tabs (Preserving Each Distinct Folder) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES_CONFIG.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setVisibleCount(24);
              }}
              className={`px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wider transition-all duration-200 border flex items-center gap-1.5 ${
                activeTab === cat.id
                  ? "bg-terracotta text-parchment border-terracotta scale-105 shadow-md"
                  : "bg-paper-aged/80 text-ink-muted border-ink/15 hover:bg-parchment hover:text-ink"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Masonry-Style Scrapbook Grid with All Photos */}
        {visiblePhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {visiblePhotos.map((photo, idx) => (
              <div
                key={photo.src}
                onClick={() => setLightboxIndex(idx)}
                className="cursor-pointer"
              >
                <Polaroid
                  imageSrc={photo.src}
                  caption={photo.caption}
                  subcaption={photo.subcaption}
                  rotation={photo.rotation || 0}
                  tapeColor={photo.tapeColor || "mustard"}
                  tapePosition="top-center"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-parchment/60 rounded-scrapbook border border-dashed border-ink/20 my-8">
            <p className="font-handwritten text-2xl text-ink-muted">
              Folder active • Add photos to this folder to reveal them here.
            </p>
          </div>
        )}

        {/* Load More Button if photos remain */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => Math.min(filteredPhotos.length, prev + 24))}
              className="px-8 py-3 bg-paper-card border-2 border-terracotta text-terracotta rounded-full font-display font-bold text-sm tracking-wider uppercase shadow hover:bg-terracotta hover:text-parchment transition-all duration-200"
            >
              Reveal More Keepsakes ({filteredPhotos.length - visibleCount} remaining) ↓
            </button>
          </div>
        )}

        {/* Full-Screen Lightbox Modal with Next / Prev Controls */}
        {currentLightboxPhoto && lightboxIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-paper-card rounded-scrapbook p-6 sm:p-10 shadow-scrapbook border-2 border-ink/20 animate-scaleUp flex flex-col items-center"
            >
              {/* Corner Washi Tape */}
              <div className="absolute -top-3 left-10 -rotate-2">
                <WashiTape color={currentLightboxPhoto.tapeColor || "mustard"} width="w-28" />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-paper-aged flex items-center justify-center text-ink font-bold text-sm hover:bg-terracotta hover:text-parchment transition-colors z-20 shadow-sm"
              >
                ✕
              </button>

              {/* Main Photo Viewport */}
              <div className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-inner border border-ink/10 mb-4 bg-parchment">
                <Image
                  src={currentLightboxPhoto.src}
                  alt={currentLightboxPhoto.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 850px"
                  className="object-contain"
                />
              </div>

              {/* Caption & Metadata */}
              <div className="text-center w-full">
                <div className="flex items-center justify-between border-t border-ink/10 pt-3">
                  <button
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
                      )
                    }
                    className="px-4 py-1.5 rounded bg-paper-aged text-ink font-sans text-xs font-bold hover:bg-terracotta hover:text-parchment transition-colors"
                  >
                    ← Prev
                  </button>

                  <div>
                    <h3 className="font-handwritten text-3xl text-ink leading-tight">
                      {currentLightboxPhoto.caption}
                    </h3>
                    <p className="font-sans text-[11px] tracking-widest text-ink-muted uppercase mt-0.5">
                      {currentLightboxPhoto.subcaption} • Photo {lightboxIndex + 1} of {filteredPhotos.length}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setLightboxIndex((prev) =>
                        prev !== null ? (prev + 1) % filteredPhotos.length : 0
                      )
                    }
                    className="px-4 py-1.5 rounded bg-paper-aged text-ink font-sans text-xs font-bold hover:bg-terracotta hover:text-parchment transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
