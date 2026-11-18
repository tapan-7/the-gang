import React from "react";
import { cn } from "@/lib/utils";

interface CharacterDoodleProps {
  type: string; // 'calculator' | 'receipt' | 'volleyball' | 'eggplant' | 'cat' | 'chef' | 'board' | 'scissors' | 'cloud' | 'penguin' | 'coffee' | 'cup' | 'sparkles'
  className?: string;
  size?: number;
}

export const CharacterDoodle: React.FC<CharacterDoodleProps> = ({
  type,
  className,
  size = 36,
}) => {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("inline-block text-ink drop-shadow-sm select-none", className),
  };

  switch (type) {
    case "receipt":
      return (
        <svg {...props}>
          <path d="M12 6h24v36l-4-3-4 3-4-3-4 3-4-3-4 3V6z" />
          <path d="M18 14h12M18 20h12M18 26h8M28 32h2" />
        </svg>
      );
    case "calculator":
      return (
        <svg {...props}>
          <rect x="10" y="6" width="28" height="36" rx="4" />
          <rect x="15" y="11" width="18" height="8" rx="1" />
          <circle cx="17" cy="25" r="1.5" fill="currentColor" />
          <circle cx="24" cy="25" r="1.5" fill="currentColor" />
          <circle cx="31" cy="25" r="1.5" fill="currentColor" />
          <circle cx="17" cy="33" r="1.5" fill="currentColor" />
          <circle cx="24" cy="33" r="1.5" fill="currentColor" />
          <circle cx="31" cy="33" r="1.5" fill="currentColor" />
        </svg>
      );
    case "volleyball":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="18" />
          <path d="M12 11c6 3 12 1 12-5" />
          <path d="M16 17c6 3 10-1 9-9" />
          <path d="M37 19c-5 4-11 3-13-3" />
          <path d="M33 26c-5 4-8-1-11-7" />
          <path d="M23 37c-1-6 2-11 8-11" />
          <path d="M16 32c-1-6 4-9 11-8" />
        </svg>
      );
    case "eggplant":
      return (
        <svg {...props}>
          <path d="M28 8c-2 4-5 5-8 5s-6-1-8-5c4-1 8-2 11-1 2 0 4 .5 5 1z" fill="currentColor" opacity="0.3" />
          <path d="M24 4v5" />
          <path d="M14 18c-3 8-1 18 6 22s16-1 18-9c1-8-4-15-10-18-5-3-11-1-14 5z" />
          <path d="M20 28c2 4 6 5 9 3" />
        </svg>
      );
    case "cat":
      return (
        <svg {...props}>
          <path d="M12 28c0 8 5 14 12 14s12-6 12-14c0-7-4-11-12-11s-12 4-12 11z" />
          <path d="M14 18l-4-8 9 4M34 18l4-8-9 4" />
          <circle cx="19" cy="26" r="1.5" fill="currentColor" />
          <circle cx="29" cy="26" r="1.5" fill="currentColor" />
          <path d="M24 29v3M21 32h6M14 29l-6-2M14 32l-6 1M34 29l6-2M34 32l6 1" />
        </svg>
      );
    case "chef":
      return (
        <svg {...props}>
          <path d="M12 36h24v4H12z" />
          <path d="M14 36c0-6-3-9-3-14a9 9 0 0118-4 9 9 0 0118 4c0 5-3 8-3 14" />
          <path d="M20 36v-6M28 36v-6" />
        </svg>
      );
    case "board":
      return (
        <svg {...props}>
          <rect x="8" y="10" width="32" height="22" rx="2" />
          <path d="M14 16h8M14 21h12M14 26h4M30 16l4 5-4 5M8 32l-3 10M40 32l3 10" />
        </svg>
      );
    case "scissors":
      return (
        <svg {...props}>
          <circle cx="14" cy="34" r="5" />
          <circle cx="34" cy="34" r="5" />
          <path d="M18 30L34 12M30 30L14 12" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...props}>
          <path d="M12 32h24a8 8 0 002-15.7 10 10 0 00-19.5-3.3A7 7 0 0012 32z" />
        </svg>
      );
    case "penguin":
      return (
        <svg {...props}>
          <ellipse cx="24" cy="26" rx="14" ry="16" />
          <ellipse cx="24" cy="28" rx="8" ry="11" fill="currentColor" opacity="0.2" />
          <path d="M10 24c-3 4-4 10-2 14M38 24c3 4 4 10 2 14M22 20l2 2 2-2zM16 42l4-2M32 42l-4-2" />
          <circle cx="19" cy="16" r="1.5" fill="currentColor" />
          <circle cx="29" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...props}>
          <path d="M10 16h24v16a6 6 0 01-6 6H16a6 6 0 01-6-6V16zM34 20h4a4 4 0 010 8h-4M8 42h28M17 10c0-3 3-4 3-7M24 10c0-3 3-4 3-7" />
        </svg>
      );
    case "cup":
      return (
        <svg {...props}>
          <path d="M12 16h20l-3 20H15L12 16z" />
          <path d="M10 16h24M18 10c0-2 2-3 2-5M24 10c0-2 2-3 2-5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M24 8l4 10 10 1-8 7 3 10-9-6-9 6 3-10-8-7 10-1z" />
        </svg>
      );
  }
};

