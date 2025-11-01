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
        primary: {
          DEFAULT: "#1f6feb",
          light: "#60a5fa",
          dark: "#1d4ed8",
        },
        accent: "#f97316",
        midnight: "#0f172a",
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', "var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-pattern": "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
