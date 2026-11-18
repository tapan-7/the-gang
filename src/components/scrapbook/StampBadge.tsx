import React from "react";
import { cn } from "@/lib/utils";

interface StampBadgeProps {
  text: string;
  subtext?: string;
  color?: "red" | "blue" | "brown";
  className?: string;
  rotation?: number;
}

export const StampBadge: React.FC<StampBadgeProps> = ({
  text,
  subtext,
  color = "red",
  className,
  rotation = -8,
}) => {
  const colorStyles = {
    red: "text-stamp-red border-stamp-red/70",
    blue: "text-dusty-blue-dark border-dusty-blue-dark/70",
    brown: "text-ink-muted border-ink-muted/70",
  };

  return (
    <div
      style={{ transform: `rotate(${rotation}deg)` }}
      className={cn(
        "inline-flex flex-col items-center justify-center p-2 border-2 border-dashed rounded-md font-sans tracking-widest uppercase select-none opacity-85",
        colorStyles[color],
        className
      )}
    >
      <span className="text-[11px] font-extrabold leading-none">{text}</span>
      {subtext && <span className="text-[8px] font-semibold mt-0.5 tracking-wider">{subtext}</span>}
    </div>
  );
};

