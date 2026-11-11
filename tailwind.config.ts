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
        // Brand palette — cream / gray / purple
        cream: {
          DEFAULT: "#EAE8E3",
          white: "#FFFFFF",
        },
        gray: {
          mid: "#8B8B8B",
          charcoal: "#57585C",
        },
        purple: {
          DEFAULT: "#8257E5",
          bright: "#9E46D6",
          deep: "#7600AD",
          rich: "#6100A5",
          night: "#32007D",
        },
        // Semantic aliases used across components
        ink: {
          DEFAULT: "#32007D",
          soft: "#57585C",
          muted: "#8B8B8B",
        },
        mist: {
          DEFAULT: "#EAE8E3",
          warm: "#FFFFFF",
          deep: "#E0DDD6",
        },
        amber: {
          DEFAULT: "#8257E5",
          soft: "#9E46D6",
          deep: "#7600AD",
        },
        moss: {
          DEFAULT: "#6100A5",
          soft: "#7600AD",
        },
        steam: "#8B8B8B",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "steam-glow":
          "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(130,87,229,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 10%, rgba(158,70,214,0.28), transparent 50%), linear-gradient(165deg, #32007D 0%, #6100A5 45%, #7600AD 100%)",
        "section-wash":
          "linear-gradient(180deg, #EAE8E3 0%, #FFFFFF 50%, #EAE8E3 100%)",
        "footer-deep":
          "linear-gradient(180deg, #32007D 0%, #1a0040 100%)",
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
