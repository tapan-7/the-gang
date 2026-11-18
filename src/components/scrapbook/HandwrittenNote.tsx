import React from "react";
import { cn } from "@/lib/utils";

interface HandwrittenNoteProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  color?: "ink" | "terracotta" | "muted";
  size?: "sm" | "md" | "lg";
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  className,
  rotation = 1,
  color = "ink",
  size = "md",
}) => {
  const colorMap = {
    ink: "text-ink",
    terracotta: "text-terracotta-dark",
    muted: "text-ink-muted",
  };

  const sizeMap = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl sm:text-4xl",
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "font-handwritten leading-snug tracking-wide select-none",
        colorMap[color],
        sizeMap[size],
        className
      )}
    >
      {children}
    </div>
  );
};

