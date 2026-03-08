import type { Config } from "tailwindcss";

/**
 * Design system tokens (Tailwind scale + semantic names).
 * Spacing: 1 unit = 0.25rem (4px). Use px-4, gap-5, py-12, etc.
 * Typography: caption, subtitle, body-lg, display-1, button.
 * Semantic colors: content.primary, content.secondary, content.muted.
 */
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
        /** Semantic text/UI colors */
        content: {
          primary: "#101828",
          secondary: "#1e2939",
          muted: "#62748e",
        },
      },
      fontFamily: {
        display: ["Proxima Nova", "system-ui", "sans-serif"],
        body: ["Proxima Nova", "system-ui", "sans-serif"],
      },
      fontSize: {
        /** 12px, uppercase labels / breadcrumbs */
        caption: ["0.75rem", { lineHeight: "1.2" }],
        /** 18px, labels */
        subtitle: ["1.125rem", { lineHeight: "1.2" }],
        /** 20px, body copy */
        "body-lg": ["1.25rem", { lineHeight: "1.4" }],
        /** 60px, hero heading */
        "display-1": ["3.75rem", { lineHeight: "1.1" }],
        /** 16px, buttons */
        button: ["1rem", { lineHeight: "1.4" }],
      },
      spacing: {
        /** 70px — gap between hero columns on xl */
        "col-gap": "4.375rem",
        /** 46px — button height */
        btn: "2.875rem",
        /** 150px — primary button min-width */
        "btn-min": "9.375rem",
      },
      maxWidth: {
        /** 590px — hero text column */
        content: "36.875rem",
        /** 620px — hero image column */
        "hero-image": "38.75rem",
      },
      minHeight: {
        hero: "39.375rem",
      },
      height: {
        hero: "39.375rem",
      },
      borderRadius: {
        "2xl": "1rem",
        /** 6px — buttons, inputs */
        btn: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
