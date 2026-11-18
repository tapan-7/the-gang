"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PHOTO_ALBUMS, AlbumPhoto } from "@/data/photos";
import { Polaroid } from "../scrapbook/Polaroid";
import { StampBadge } from "../scrapbook/StampBadge";
import { WashiTape } from "../scrapbook/WashiTape";

export const MemoryGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxPhoto, setLightboxPhoto] = useState<AlbumPhoto | null>(null);

  const categories = [
    { id: "all", label: "All Keepsakes", icon: "✨" },
    { id: "tea-breaks", label: "4:30 PM Tea Runs", icon: "☕" },
    { id: "lunch", label: "1:00 PM Lunch Army", icon: "🍱" },
    { id: "bachelorette", label: "Operation Arpita", icon: "👑" },
    { id: "bday", label: "Birthday Bashes", icon: "🎂" },
    { id: "elevator", label: "Elevator Squeezes", icon: "🛗" },
    { id: "outings", label: "Outings & Treks", icon: "🏔️" },
  ];

  const allPhotos: AlbumPhoto[] = [
    ...PHOTO_ALBUMS.teaBreaks,
    ...PHOTO_ALBUMS.lunch,
    ...PHOTO_ALBUMS.bachelorette,
    ...PHOTO_ALBUMS.birthdays,
    ...PHOTO_ALBUMS.elevator,
    ...PHOTO_ALBUMS.outings,
  ];

  const filteredPhotos =
    activeTab === "all"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeTab);

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
              The Archive
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-ink/20" />
            <span className="font-sans text-xs tracking-widest text-ink-muted uppercase">
              Real Photographic Keepsakes
            </span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl text-ink tracking-tight">
            The Scrapbook Photo Vault
          </h2>

          <p className="font-handwritten text-2xl sm:text-3xl text-ink-muted max-w-2xl mx-auto mt-4 leading-relaxed">
            "Every snapshot has a story. Tap any photo to enlarge and inspect the memory."
          </p>

          <div className="mt-4">
            <StampBadge text="AUTHENTIC MEMORIES" subtext="VERIFIED GANG MOMENTS" color="red" rotation={-3} />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
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

        {/* Masonry-Style Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxPhoto(photo)}
              className="cursor-pointer"
            >
              <Polaroid
                imageSrc={photo.src}
                caption={photo.caption}
                subcaption={photo.subcaption}
                rotation={photo.rotation || ((idx % 5) - 2) * 1.5}
                tapeColor={photo.tapeColor || "mustard"}
                tapePosition="top-center"
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxPhoto && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-ink/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
            onClick={() => setLightboxPhoto(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-paper-card rounded-scrapbook p-6 sm:p-8 shadow-scrapbook border-2 border-ink/20 animate-scaleUp flex flex-col items-center"
            >
              <div className="absolute -top-3 left-10 -rotate-2">
                <WashiTape color={lightboxPhoto.tapeColor || "mustard"} width="w-28" />
              </div>

              <button
                onClick={() => setLightboxPhoto(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-paper-aged flex items-center justify-center text-ink font-bold text-sm hover:bg-terracotta hover:text-parchment transition-colors"
              >
                ✕
              </button>

              <div className="relative w-full aspect-[4/3] rounded overflow-hidden shadow-inner border border-ink/10 mb-4 bg-parchment">
                <Image
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-contain"
                />
              </div>

              <div className="text-center">
                <h3 className="font-handwritten text-3xl text-ink leading-tight">
                  {lightboxPhoto.caption}
                </h3>
                {lightboxPhoto.subcaption && (
                  <p className="font-sans text-xs tracking-widest text-ink-muted uppercase mt-1">
                    {lightboxPhoto.subcaption}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

