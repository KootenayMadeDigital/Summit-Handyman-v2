import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Summit brand palette — sourced verbatim from summit-handyman.ca V1
        summit: {
          black: "#0F1115",      // V1 --summit-dark
          panel: "#181B21",      // V1 --summit-panel
          elevated: "#1F232B",   // panel-on-panel
          slate: "#2A2F3A",
          stone: "#6B7280",
          mist: "#E5E7EB",
          cream: "#F8F5EE",
          gold: "#D97706",       // V1 --summit-gold (amber-600)
          "gold-hot": "#F59E0B", // amber-500
          "gold-deep": "#B45309",// V1 --summit-gold-hover
          "gold-soft": "#FCD34D",// amber-300 — for light-mode accents
          forest: "#1F3A2E",
        },
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Switzer", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Gambarino", "ui-serif", "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Fluid typography (clamp-based) — minimums tightened so display text never overflows narrow viewports.
        "display-2xl": ["clamp(2.5rem, 8vw, 7rem)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.125rem, 6vw, 5.25rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(1.875rem, 5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.625rem, 3.5vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.375rem, 2.5vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        tight: "-0.015em",
        editorial: "-0.02em",
      },
      spacing: {
        section: "clamp(4rem, 10vh, 8rem)",
        "section-lg": "clamp(6rem, 14vh, 12rem)",
      },
      maxWidth: {
        editorial: "72ch",
        prose: "65ch",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(217, 119, 6, 0.4), 0 8px 24px -8px rgba(217, 119, 6, 0.28)",
        "gold-lg": "0 0 0 1px rgba(217, 119, 6, 0.55), 0 20px 40px -12px rgba(217, 119, 6, 0.38)",
        panel: "0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 8px 24px -12px rgba(0, 0, 0, 0.6)",
        "panel-lg": "0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 32px 64px -24px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.5s ease-out both",
        marquee: "marquee 40s linear infinite",
        "shimmer-gold": "shimmerGold 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmerGold: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "grain-dark": "url('/textures/grain-dark.png')",
        "gradient-summit": "linear-gradient(135deg, #0F1115 0%, #181B21 50%, #0F1115 100%)",
        "gradient-gold": "linear-gradient(135deg, #D97706 0%, #F59E0B 50%, #D97706 100%)",
        "radial-gold": "radial-gradient(ellipse at 70% 100%, rgba(217, 119, 6, 0.18) 0%, transparent 60%)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        snappy: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
