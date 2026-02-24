import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary":   "#0a0a0a",
        "bg-secondary": "#111111",
        "bg-card":      "#1a1a1a",
        "bg-elevated":  "#222222",
        "accent-red":   "#ff3333",
        "accent-coral": "#ff6b6b",
        "accent-green": "#00ff88",
        "text-primary": "#ffffff",
        "text-secondary":"#a0a0a0",
        "text-muted":   "#666666",
        "border-subtle":"#2a2a2a",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        bebas:    ["Bebas Neue", "cursive"],
        rajdhani: ["Rajdhani", "sans-serif"],
        inter:    ["Inter", "sans-serif"],
        poppins:  ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-hero":    "linear-gradient(135deg, #ff3333 0%, #ff0066 100%)",
        "gradient-dark":    "linear-gradient(180deg, transparent 0%, #0a0a0a 100%)",
        "gradient-card":    "linear-gradient(135deg, #1a1a1a 0%, #111111 100%)",
        "gradient-red-v":   "linear-gradient(180deg, #ff3333 0%, #cc0000 100%)",
      },
      boxShadow: {
        "red-glow":    "0 0 20px rgba(255, 51, 51, 0.4)",
        "red-glow-lg": "0 0 40px rgba(255, 51, 51, 0.5)",
        "green-glow":  "0 0 20px rgba(0, 255, 136, 0.4)",
        "card":        "0 4px 24px rgba(0,0,0,0.6)",
        "card-hover":  "0 8px 40px rgba(0,0,0,0.8)",
      },
      animation: {
        "pulse-red":   "pulseRed 2s ease-in-out infinite",
        "marquee":     "marquee 30s linear infinite",
        "marquee-rev": "marqueeRev 30s linear infinite",
        "float":       "float 3s ease-in-out infinite",
        "shimmer":     "shimmer 2s linear infinite",
        "spin-slow":   "spin 8s linear infinite",
        "bounce-soft": "bounceSoft 1s ease-in-out infinite",
        "fade-up":     "fadeUp 0.6s ease-out forwards",
        "glow-pulse":  "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        pulseRed: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255,51,51,0.4)" },
          "50%":       { boxShadow: "0 0 35px rgba(255,51,51,0.8)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRev: {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%":      { opacity: "1" },
        },
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

export default config;
