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
        background: "var(--background)",
        foreground: "var(--foreground)",
        editorial: {
          bg: "#FFFFFF",
          surface: "#F7F7F8",
          dark: "#111111",
          black: "#0A0A0A",
          muted: "#6B6B6B",
          border: "#E2E2E2",
          borderDark: "#262626",
        },
        club: {
          crimson: "#70111A",
          crimsonDark: "#4D0911",
          cream: "#F3EBDD",
          ivory: "#FAF6EE",
          gold: "#C2A267",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        athletic: ["var(--font-athletic)", "Impact", "Arial Black", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest: "0.2em",
        ultra: "0.28em",
      },
      boxShadow: {
        editorial: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        lift: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
