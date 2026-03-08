import type { Config } from "tailwindcss";

/**
 * NVX Design System — Tailwind theme extension
 * -------------------------------------------
 * Prefer semantic tokens over raw values so themes and future changes stay consistent.
 *
 * Quick reference:
 * - Spacing: 1 unit = 4px (e.g. gap-4, py-12). Custom: col-gap, btn, btn-min.
 * - Typography: breadcrumb = text-xs font-semibold uppercase; labels = text-subtitle; body = text-body-lg; hero H1 = text-display-1; buttons = text-button.
 * - Light surfaces: bg-surface-default | surface-inverse | surface-subtle. Text: text-content-primary | secondary | muted.
 * - Dark theme: use dark: prefix with surface-dark-*, text-dark-*, accent-dark. See globals.css for .dark overrides.
 * - Full token list and usage: docs/DESIGN_TOKENS.md
 */
const config: Config = {
  darkMode: "class",
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
        /** Accent — same blue as primary CTA (brand). Use for links and secondary emphasis. */
        accent: {
          400: "#42a9dc",
          500: "#0084d1",
          600: "#0069b3",
        },
        /** Semantic content hierarchy (light theme). Use for headings, body, muted labels. */
        content: {
          primary: "#101828",
          secondary: "#1e2939",
          muted: "#62748e",
        },
        /** Surface backgrounds (light theme). Default = page/sections; inverse = header; subtle = cards/placeholders. */
        surface: {
          default: "#ffffff",
          inverse: "#18181b",
          subtle: "#e4e4e7",
        },
        /** Button semantics. Use button-primary for filled CTA, button-secondary for ghost/secondary. */
        button: {
          primary: "#0084d1",
          "primary-foreground": "#ffffff",
          secondary: "#0084d1",
        },
        /** Text on inverse/dark surfaces (e.g. navbar). Use for nav links and icons. */
        "text-inverse": {
          DEFAULT: "#ffffff",
          muted: "#a1a1aa",
        },
        /** Dark theme surfaces. Primary = main background (#0F172A); secondary = header/sidebars; bright = cards; input = form fields. */
        "surface-dark": {
          primary: "#0F172A",
          secondary: "#0E141D",
          bright: "#273347",
          input: "#1B2533",
        },
        /** Dark theme text hierarchy. Use with dark: prefix. */
        "text-dark": {
          primary: "#E0E0E0",
          secondary: "#8C929B",
          placeholder: "#9DA5B3",
          tertiary: "#CCCCCC",
        },
        /** Dark theme: borders and accent (e.g. primary button). */
        "border-dark": "#40546D",
        "accent-dark": "#3498DB",
      },
      fontFamily: {
        /** Headings and display text */
        display: ["Proxima Nova", "system-ui", "sans-serif"],
        /** Body and UI copy */
        body: ["Proxima Nova", "system-ui", "sans-serif"],
      },
      fontSize: {
        /** 12px — small metadata, optional alternative to text-xs (e.g. captions). For breadcrumbs use text-xs + font-semibold. */
        caption: ["0.75rem", { lineHeight: "1.2" }],
        /** 18px — section labels (e.g. "IoT Query") above headings */
        subtitle: ["1.125rem", { lineHeight: "1.2" }],
        /** 20px — body copy on desktop */
        "body-lg": ["1.25rem", { lineHeight: "1.4" }],
        /** 60px — hero H1 on large screens. Line-height 1.1 for Hero 01; see DESIGN_TOKENS.md “Line-height rules” and “Mobile breakpoint rules”. */
        "display-1": ["3.75rem", { lineHeight: "1.1" }],
        /** 16px — button label text */
        button: ["1rem", { lineHeight: "1.4" }],
      },
      spacing: {
        /** 70px — gap between hero text and image columns on xl */
        "col-gap": "4.375rem",
        /** 46px — button height (h-btn) */
        btn: "2.875rem",
        /** 150px — primary button min-width (min-w-btn-min) */
        "btn-min": "9.375rem",
      },
      maxWidth: {
        /** 590px — hero text column width */
        content: "36.875rem",
        /** 620px — hero image column max width */
        "hero-image": "38.75rem",
      },
      minHeight: {
        /** 630px — hero section min height (mobile/tablet) */
        hero: "39.375rem",
      },
      height: {
        /** 630px — hero section fixed height on xl */
        hero: "39.375rem",
      },
      borderRadius: {
        "2xl": "1rem",
        /** 6px — buttons and form inputs */
        btn: "0.375rem",
      },
    },
  },
  plugins: [],
};

export default config;
