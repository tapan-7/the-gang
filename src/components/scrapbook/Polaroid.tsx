import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

interface PolaroidProps {
  caption?: string;
  subcaption?: string;
  rotation?: number; // degrees
  tapeColor?: "mustard" | "dusty-blue" | "terracotta" | "sage";
  tapePosition?: "top-left" | "top-right" | "top-center" | "none";
  className?: string;
  imageSrc?: string;
  children?: React.ReactNode;
  aspectRatio?: "square" | "portrait" | "video";
}

export const Polaroid: React.FC<PolaroidProps> = ({
  caption,
  subcaption,
  rotation = 0,
  tapeColor = "mustard",
  tapePosition = "top-center",
  className,
  imageSrc,
  children,
  aspectRatio = "square",
}) => {
  const aspectStyles = {
    square: "aspect-square",
    portrait: "aspect-[4/5]",
    video: "aspect-[16/10]",
  };

  const tapePositions = {
    "top-left": "-top-3 -left-3 rotate-[-15deg]",
    "top-right": "-top-3 -right-3 rotate-[12deg]",
    "top-center": "-top-3.5 left-1/2 -translate-x-1/2 rotate-[-2deg]",
    none: "hidden",
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "group relative bg-paper-card p-3 sm:p-4 rounded-polaroid shadow-polaroid hover:shadow-polaroid-hover transition-all duration-300 ease-out hover:scale-[1.02] hover:z-30",
        className
      )}
    >
      {/* Optional Washi Tape */}
      {tapePosition !== "none" && (
        <div className={cn("absolute z-20", tapePositions[tapePosition])}>
          <WashiTape color={tapeColor} width="w-20 sm:w-24" />
        </div>
      )}

      {/* Image Area / Inner Frame */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-parchment/60 rounded-[1px] border border-ink/5 flex items-center justify-center text-ink-muted",
          aspectStyles[aspectRatio]
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={caption || "Memory photograph"}
            fill
            sizes="(max-width: 768px) 100vw, 450px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        ) : children ? (
          children
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center select-none">
            <svg
              className="w-10 h-10 mb-2 opacity-40 text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
            </svg>
            <span className="font-handwritten text-lg text-ink-muted">Photo Placeholder</span>
          </div>
        )}
      </div>

      {/* Handwritten Caption Area */}
      {(caption || subcaption) && (
        <div className="pt-3 pb-1 text-center select-none">
          {caption && (
            <p className="font-handwritten text-xl sm:text-2xl text-ink leading-tight">
              {caption}
            </p>
          )}
          {subcaption && (
            <p className="font-sans text-[10px] tracking-wider text-ink-faint uppercase mt-1">
              {subcaption}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
