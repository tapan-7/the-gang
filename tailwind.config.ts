import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F3EBDD",
        "paper-aged": "#E8DDC9",
        "paper-card": "#FCFBF7",
        ink: {
          DEFAULT: "#262522",
          muted: "#59483D",
          faint: "#8C7E74",
        },
        terracotta: {
          DEFAULT: "#C96E59",
          light: "#DF8D7A",
          dark: "#A54C37",
        },
        "dusty-blue": {
          DEFAULT: "#8199A8",
          light: "#A4BAC7",
          dark: "#5E7788",
        },
        mustard: {
          DEFAULT: "#D9B76B",
          light: "#E7CE8F",
          dark: "#B48F40",
        },
        sage: {
          DEFAULT: "#9AA48D",
          light: "#B8C1AD",
          dark: "#79846C",
        },
        "stamp-red": "#A8382B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        handwritten: ["var(--font-caveat)", "cursive"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        polaroid: "2px 8px 24px -4px rgba(38, 37, 34, 0.16), 0 2px 6px -1px rgba(38, 37, 34, 0.08)",
        "polaroid-hover": "4px 16px 32px -4px rgba(38, 37, 34, 0.22), 0 4px 10px -2px rgba(38, 37, 34, 0.12)",
        "paper-sheet": "1px 3px 12px -2px rgba(38, 37, 34, 0.12)",
        scrapbook: "0 20px 50px -10px rgba(38, 37, 34, 0.3), 0 10px 20px -5px rgba(38, 37, 34, 0.15)",
        pin: "0 4px 8px rgba(38, 37, 34, 0.35)",
      },
      borderRadius: {
        polaroid: "2px",
        scrapbook: "8px",
      },
    },
  },
  plugins: [],
};

export default config;

