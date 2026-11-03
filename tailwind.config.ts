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
        ink: {
          DEFAULT: "#140f0c",
          soft: "#2a211b",
          muted: "#5c4f45",
        },
        mist: {
          DEFAULT: "#f3eee6",
          warm: "#e8dfd2",
          deep: "#d4c7b5",
        },
        amber: {
          DEFAULT: "#b8894a",
          soft: "#d4b483",
          deep: "#8a6432",
        },
        moss: {
          DEFAULT: "#3f4a3c",
          soft: "#5a6b56",
        },
        steam: "#9aa8a0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "steam-glow":
          "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(184,137,74,0.18), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 10%, rgba(90,107,86,0.2), transparent 50%), linear-gradient(165deg, #140f0c 0%, #1c1612 45%, #241c16 100%)",
        "section-wash":
          "linear-gradient(180deg, #f3eee6 0%, #ebe3d6 50%, #f3eee6 100%)",
        "footer-deep":
          "linear-gradient(180deg, #1a1410 0%, #0e0b09 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.75" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.02)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "fade-up-delay": "fade-up 0.9s ease-out 0.15s both",
        "fade-up-late": "fade-up 1s ease-out 0.3s both",
        "soft-pulse": "soft-pulse 6s ease-in-out infinite",
        drift: "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
