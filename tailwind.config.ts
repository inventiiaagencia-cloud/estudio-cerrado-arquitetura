import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        border: "rgba(255, 255, 255, 0.08)",
        input: "rgba(255, 255, 255, 0.12)",
        ring: "#823829",
        background: "#0C0C0D",
        foreground: "#EAEAEA",
        rust: {
          DEFAULT: "#823829",
          hover: "#9B4332",
          subtle: "rgba(130, 56, 41, 0.15)",
          border: "rgba(130, 56, 41, 0.35)",
        },
        charcoal: {
          900: "#0C0C0D",
          800: "#141416",
          700: "#1C1C1F",
          600: "#28282C",
        },
        primary: {
          DEFAULT: "#823829",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1C1C1F",
          foreground: "#EAEAEA",
        },
        muted: {
          DEFAULT: "#18181B",
          foreground: "#999994",
        },
        accent: {
          DEFAULT: "#823829",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#141416",
          foreground: "#EAEAEA",
        },
      },
      borderRadius: {
        lg: "0px",
        md: "0px",
        sm: "0px",
        none: "0px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
