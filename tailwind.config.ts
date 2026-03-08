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
        brand: {
          50: "#eef7fc",
          100: "#d6ecf8",
          200: "#b3ddf2",
          300: "#7ec6e9",
          400: "#42a9dc",
          500: "#0084d1",
          600: "#0069b3",
          700: "#005592",
          800: "#044878",
          900: "#0a3c64",
          950: "#072742",
        },
        neutral: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        accent: {
          400: "#f59e0b",
          500: "#d97706",
          600: "#b45309",
        },
      },
      fontFamily: {
        display: ["Proxima Nova", "system-ui", "sans-serif"],
        body: ["Proxima Nova", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero-eyebrow": ["12px", { lineHeight: "1.2" }],
        "hero-label": ["18px", { lineHeight: "1.2" }],
        "hero-heading": ["60px", { lineHeight: "110%" }],
        "hero-body": ["20px", { lineHeight: "1.4" }],
        "hero-btn": ["16px", { lineHeight: "1.4" }],
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
