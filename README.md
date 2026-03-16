# NVX Design Blocks

A modular design system built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. It provides reusable blocks (Hero, Text+Image, Features, CTA), semantic tokens, and light/dark theme support.

**Language:** All text in this project (comments, documentation, UI copy, and prompts) is in English.

---

## For Cursor / vibe coders: how to use this system in your project

### Option A: Add this folder to your project (reference)

1. **Clone or copy** the `nvx-design-blocks` folder into your repo (e.g. `./design-blocks/` or keep it as a separate repo and open it in the same Cursor workspace).

2. **Copy the styles and config** into your app:
   - **`tailwind.config.ts`** — Copy the `theme.extend` block (colors, spacing, fontSize, boxShadow, etc.) into your project’s Tailwind config. Merge with your existing `extend` if you have one.
   - **`app/globals.css`** — Copy the full file, or only the parts you need (e.g. font-face, base layer, dark theme section, mileage chart styles if you use Hero 03). Ensure your app imports this CSS (e.g. in `layout.tsx`).

3. **Copy components as needed:**
   - `components/blocks/` — HeroBlock, HeroBlock02, HeroBlock03, NavBar, ThemeToggleFloating.
   - `components/CtaMeshSvg.tsx` — Used by the CTA block.
   - `components/icons/` — ArrowRightIcon, CheckCircleIcon, ActivityZoneIcon, etc.
   - `components/charts/` — Only if you use Hero 03 with the mileage chart (HeroChartSwitcher, MileageChart, HeroADashboard).
   - `lib/animations.ts` — Framer Motion variants and `defaultTransition`.
   - `lib/ThemeContext.tsx` — If you want the same theme toggle (localStorage + `.dark` on `<html>`).

4. **Fonts:** Add Proxima Nova `.woff2` files to `public/fonts/` (or your public folder) and keep the `@font-face` rules in `globals.css` pointing to them.

5. **Theme:** Add `.dark` to `<html>` when dark mode is on. The inline script in `app/layout.tsx` reads `localStorage.getItem('nvx-theme')` and sets the class before paint to avoid flash.

---

### Option B: Use as reference only (no copy)

Open this repo in Cursor next to your project (e.g. multi-root workspace) and ask the AI to:

- Apply the **same token names** (e.g. `text-content-primary`, `bg-surface-dark-primary`, `py-section-py`) in your codebase.
- Reuse the **same structure** for sections (container `max-w-7xl`, section padding `py-24 md:py-section-py`).
- Follow **docs/DESIGN_TOKENS.md** for spacing, typography, colors, and buttons.

You can paste the **Cursor prompt** below when you need the AI to follow this system.

---

## What to copy (checklist)

| Item | Path | When to copy |
|------|------|----------------|
| Tailwind theme | `tailwind.config.ts` → `theme.extend` | Always (merge into your config). |
| Global styles | `app/globals.css` | Always (or only the sections you need). |
| Theme provider + script | `app/layout.tsx` (script in head, ThemeProvider, body classes) | If you want light/dark with the same key `nvx-theme`. |
| Animations | `lib/animations.ts` | If you use Hero or animated blocks. |
| Theme context | `lib/ThemeContext.tsx` | If you use the floating theme toggle. |
| Hero blocks | `components/blocks/HeroBlock*.tsx` | Per hero variant you use. |
| NavBar / ThemeToggle | `components/blocks/NavBar.tsx`, `ThemeToggleFloating.tsx` | If you want the same nav and toggle. |
| CTA block | CTA section in `app/page.tsx` + `CtaMeshSvg.tsx` | If you use the CTA block. |
| Icons | `components/icons/*.tsx` | As needed. |
| Charts (Hero 03) | `components/charts/` + mileage styles in `globals.css` | Only if you use the Hero 03 mileage chart. |

---

## Cursor prompt (paste when you want the AI to follow this system)

You can paste this into the Cursor chat when starting a task:

```
Use the NVX Design Blocks design system from this project (or from the nvx-design-blocks folder):

- Tokens: Use semantic Tailwind classes from tailwind.config.ts (e.g. text-content-primary, bg-surface-default, dark:bg-surface-dark-primary, text-text-dark-primary for dark; py-section-py, gap-section-gap, max-w-content, h-btn, rounded-btn).
- Colors: Prefer content-*, surface-*, button-*, brand-*, and dark: text-dark-*, surface-dark-*, accent-dark. See docs/DESIGN_TOKENS.md for the full list.
- Typography: font-body / font-display, text-subtitle (18px), text-heading-4xl or text-section-title (36px), text-body-lg (20px), text-display-1 (60px for hero H1). Hero H1 on mobile is always text-4xl (36px).
- Spacing: 1 unit = 4px. Use section tokens (section-py, section-gap, col-gap) for sections and columns.
- Buttons: h-btn, min-w-btn-min, rounded-btn; primary = bg-brand-500 dark:bg-accent-dark; on mobile full width and stacked, primary on top.
- Shadows: shadow-xs, shadow-md, etc. (blue-tinted). Cards with links in dark: dark:hover:shadow-glow-blue-card.
- Do not hardcode hex or px for spacing/typography that exist as tokens. Keep light/dark consistency via semantic tokens.
```

---

## Run this project locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the home page and [http://localhost:3000/design-system](http://localhost:3000/design-system) for the design system reference.

---

## Project structure

```
app/
  globals.css       # Fonts, base layout, dark theme, hero vars, mileage chart
  layout.tsx        # Root layout, theme script, NavBar, ThemeToggle
  page.tsx          # All blocks in order (Hero 01–03, Text+Image, Features 01–03, CTA)
  design-system/    # Design system reference page
components/
  blocks/           # HeroBlock, HeroBlock02, HeroBlock03, NavBar, ThemeToggleFloating
  charts/           # Hero 03 mileage chart (HeroChartSwitcher, MileageChart, HeroADashboard)
  icons/            # ArrowRight, CheckCircle, ActivityZone, etc.
  CtaMeshSvg.tsx    # CTA mesh + squares
lib/
  animations.ts     # Framer Motion variants, defaultTransition
  ThemeContext.tsx  # Theme state + localStorage sync
docs/
  DESIGN_TOKENS.md  # Full token list and usage rules
tailwind.config.ts  # Design tokens (colors, spacing, shadows, etc.)
```

---

## Dependencies

- **Next.js** 14
- **React** 18
- **Tailwind CSS** 3
- **Framer Motion** 11 (for Hero and block animations)

---

## More details

- **Token reference:** [docs/DESIGN_TOKENS.md](docs/DESIGN_TOKENS.md)
- **Visual reference:** run the app and open `/design-system`
