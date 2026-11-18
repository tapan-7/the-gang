import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Character } from "@/types/character";
import { CharacterDoodle } from "./CharacterDoodle";

interface CharacterAvatarProps {
  character: Character;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showPropBadge?: boolean;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  character,
  size = "md",
  className,
  showPropBadge = true,
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeMap = {
    sm: "w-12 h-12 text-sm",
    md: "w-20 h-20 text-xl",
    lg: "w-28 h-28 text-3xl",
    xl: "w-36 h-36 text-4xl",
  };

  const propBadgeSize = {
    sm: 18,
    md: 24,
    lg: 32,
    xl: 38,
  };

  const primaryProp = character.signatureProps[0]?.icon || "sparkles";

  return (
    <div className={cn("relative inline-block select-none", className)}>
      {/* Outer illustrated ring */}
      <div
        style={{ borderColor: character.avatarColor }}
        className={cn(
          "relative flex items-center justify-center rounded-full border-2 border-dashed bg-paper-card shadow-md transition-transform duration-300 hover:scale-105 overflow-hidden",
          sizeMap[size]
        )}
      >
        {/* Soft pastel background */}
        <div
          style={{ backgroundColor: character.avatarColor }}
          className="absolute inset-0 opacity-15"
        />

        {/* Real Portrait Image if available */}
        {character.image && !imgError ? (
          <Image
            src={character.image}
            alt={character.name}
            fill
            sizes="(max-width: 768px) 80px, 144px"
            className="object-cover transition-opacity duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback Character Silhouette / Letter Vignette */
          <div className="relative z-10 flex flex-col items-center justify-center font-display font-bold text-ink">
            <span>{character.name[0]}</span>
            {character.nickname && size !== "sm" && (
              <span className="font-handwritten text-xs -mt-1 text-ink-muted">
                {character.nickname}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Floating Signature Prop Badge */}
      {showPropBadge && (
        <div
          style={{ borderColor: character.avatarColor }}
          className="absolute -bottom-1 -right-1 bg-paper-card rounded-full p-1 border shadow-sm flex items-center justify-center text-ink z-20"
        >
          <CharacterDoodle type={primaryProp} size={propBadgeSize[size]} />
        </div>
      )}
    </div>
  );
};
