import React from "react";
import Link from "next/link";
import { StampBadge } from "../scrapbook/StampBadge";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-30 pointer-events-none p-5 sm:p-7 flex items-center justify-between">
      <div className="pointer-events-auto flex items-center gap-3">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 hover:opacity-85 transition-opacity"
        >
          <span className="font-display font-black text-2xl tracking-tight text-ink">
            THE GANG
          </span>
          <span className="font-handwritten text-lg text-terracotta hidden sm:inline">
            • A little chaos. A lot of memories.
          </span>
        </Link>
      </div>

      <div className="pointer-events-auto mr-32 sm:mr-40 hidden md:block">
        <StampBadge text="UNO-2026" subtext="EST. GOPALPUR" color="red" rotation={-6} />
      </div>
    </header>
  );
};

