import React from "react";
import { cn } from "@/lib/utils";

interface WashiTapeProps {
  color?: "mustard" | "dusty-blue" | "terracotta" | "sage";
  className?: string;
  rotation?: number; // degrees
  width?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = "mustard",
  className,
  rotation = -2,
  width = "w-28",
}) => {
  const colorMap = {
    mustard: "bg-mustard/80 border-mustard-dark/20 text-mustard-dark",
    "dusty-blue": "bg-dusty-blue/80 border-dusty-blue-dark/20 text-dusty-blue-dark",
    terracotta: "bg-terracotta/80 border-terracotta-dark/20 text-terracotta-dark",
    sage: "bg-sage/80 border-sage-dark/20 text-sage-dark",
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "relative h-6 shadow-sm pointer-events-none select-none z-20 backdrop-blur-[1px]",
        width,
        colorMap[color],
        className
      )}
    >
      {/* Torn left edge */}
      <svg
        className="absolute -left-1 top-0 h-full w-2 fill-current opacity-70"
        viewBox="0 0 10 100"
        preserveAspectRatio="none"
      >
        <path d="M10,0 L0,15 L8,30 L1,50 L9,70 L2,85 L10,100 Z" />
      </svg>
      {/* Tape texture subtle grain pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#262522_1px,transparent_1px)] [background-size:6px_6px]" />
      {/* Torn right edge */}
      <svg
        className="absolute -right-1 top-0 h-full w-2 fill-current opacity-70"
        viewBox="0 0 10 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L9,15 L2,35 L10,55 L3,75 L9,88 L0,100 Z" />
      </svg>
    </div>
  );
};

