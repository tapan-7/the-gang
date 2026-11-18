import React from "react";
import { cn } from "@/lib/utils";

interface TornPaperEdgeProps {
  position?: "top" | "bottom";
  className?: string;
  fill?: string;
}

export const TornPaperEdge: React.FC<TornPaperEdgeProps> = ({
  position = "top",
  className,
  fill = "#F3EBDD",
}) => {
  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-none select-none pointer-events-none z-10",
        position === "top" ? "-translate-y-[98%]" : "translate-y-[98%] rotate-180",
        className
      )}
    >
      <svg
        className="w-full h-4 sm:h-6"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 L25,18 L50,6 L80,24 L110,10 L140,28 L170,14 L205,32 L240,12 L275,26 L310,8 L350,28 L390,14 L430,34 L470,16 L510,30 L550,12 L590,32 L630,18 L670,36 L710,16 L750,28 L790,10 L830,30 L870,14 L910,32 L950,16 L990,34 L1030,12 L1070,28 L1110,14 L1150,30 L1180,16 L1200,32 L1200,40 L0,40 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

