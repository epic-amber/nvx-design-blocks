# Design system tokens (Tailwind)

Reference for anyone using the NVX design system: tokens live in `tailwind.config.ts`; global styles and theme overrides are in `app/globals.css`. Use semantic tokens (e.g. `text-content-primary`, `bg-surface-dark-primary`) instead of raw colors so light/dark and future theme changes stay consistent. **Avoid hardcoding** repeated values (e.g. `py-[100px]`, `max-w-[603px]`) in components—add a token in `tailwind.config.ts` and document it here so the system can grow consistently. For motion, use variants and `defaultTransition` from `lib/animations.ts`.

---

## Global styles (globals.css)

**Base styles = default (light) theme.** There is no separate “light theme” block; the base layer defines typography (Proxima Nova), layout (html, body, main), default body colors (#ffffff / #101828), and hero layer visibility (light layers visible when `.dark` is not on `html`).

**Dark theme = sub-styles only.** Applied when `.dark` is added to `html`. It overrides: hero layer visibility, body/section/hero text and buttons, hero image block colors. It does not duplicate typography or layout.

**Hero mesh and gradients:** The variables `--hero-mesh-*` and `--hero-gradient-*` in `.dark` and `.dark [data-hero-02]` are part of the dark sub-styles; do not rename or change their structure when editing globals.css.

---

## Spacing

Tailwind scale: **1 unit = 0.25rem (4px)**. Use `p-*`, `m-*`, `gap-*`, `space-*`.

| Class | Value | rem | Use for |
|-------|--------|-----|--------|
| 1 | 4px | 0.25rem | gap-1, p-1 |
| 2 | 8px | 0.5rem | gap-2 (icon + label) |
| 4 | 16px | 1rem | gap-4 (heading + block) |
| 5 | 20px | 1.25rem | gap-5 (mobile buttons), mb-5 (below breadcrumb) |
| 6 | 24px | 1.5rem | py-6 (content block) |
| 7 | 28px | 1.75rem | gap-7 (hero content), buttons md+ |
| 8 | 32px | 2rem | — |
| 9 | 36px | 2.25rem | gap-9 (text ↔ image) |
| 12 | 48px | 3rem | py-12 (section mobile) |
| 16 | 64px | 4rem | py-16 (sm) |
| 20 | 80px | 5rem | py-20 (md) |
| 24 | 96px | 6rem | py-24 (lg) |
| 32 | 128px | 8rem | py-32 (xl section) |

**Custom spacing:**

| Class | Value | Use for |
|-------|--------|--------|
| `col-gap` | 4.375rem (70px) | xl: gap between hero columns |
| `section-gap` | 3.75rem (60px) | Gap between columns in two-column blocks (e.g. text+img) |
| `section-py` | 6.25rem (100px) | Vertical padding for content sections (`py-section-py`) |
| `btn` | 2.875rem (46px) | Button height (`h-btn`) |
| `btn-min` | 9.375rem (150px) | Primary button min-width (`min-w-btn-min`) |

**Container padding:** `px-4` (mobile) → `sm:px-6` → `lg:px-8`.

**Section / blocks:** Prefer tokens over raw values: `py-section-py`, `gap-section-gap`, `max-w-content-list`, `h-text-img-mobile` / `h-text-img-sm` / `h-text-img` for text+img image column. New repeated values should be added to `tailwind.config.ts` and documented here.

---

## Typography

**Font families:** `font-body` (body and UI), `font-display` (headings). Both use Proxima Nova.

See **“Line-height rules for all headings”** and **“Mobile breakpoint rules (font size)”** below for fixed rules; do not override them without updating the design system.

| Class | Size | Line height | Use for |
|-------|------|-------------|--------|
| `text-xs` + `font-semibold` + `uppercase` | 12px (0.75rem) | default | **Breadcrumb** (e.g. "Navixy Platform · Data & Analytics") |
| `text-caption` | 12px (0.75rem) | 1.2 | Small metadata, captions (optional alternative to text-xs) |
| `text-subtitle` | 18px (1.125rem) | 1.2 | **Hero category slot** (icon + label above H1, e.g. "IoT Query") |
| `text-heading-4xl` | 36px (2.25rem) | 1.3 | **Section headings, 4xl bold** (e.g. «Telematics platform to innovate and scale globally»). Use with `font-bold`. |
| `text-section-title` | 36px (2.25rem) | 1.3 | Alias for `text-heading-4xl` (section headings) |
| `text-base` | 16px (1rem) | 1.4 | **Длинные описания в контентных секциях** (e.g. text+img: абзацы и пункты списка). Use with `font-body`, `leading-[1.4]`, `text-content-secondary`. |

**Hero category slot (icon + text):** Customizable slot for vibe coders — swap icon and label per product/campaign. Icon **24×24px** (use `h-6 w-6` container, `<Image width={24} height={24} />`). Label **18px**, `font-bold`, `text-subtitle`. Gap between icon and label **8px** (`gap-2`). Gap below to H1 **16px** (`gap-4`).
| `text-body-lg` | 20px (1.25rem) | 1.4 | Body copy on desktop |
| `text-display-1` | 60px (3.75rem) | 1.1 | Hero H1 |
| `text-button` | 16px (1rem) | 1.4 | Button label |

**Hero H1 length rule:** If the heading has more characters than "A Private Lakehouse for telematics data" (41), use the smaller size on desktop: `md:text-5xl` (48px) instead of `md:text-display-1` / `md:text-6xl`. Keeps long titles from overwhelming the layout.

---

### Line-height rules for all headings

| Context | Line-height | Tailwind class | Notes |
|--------|-------------|----------------|--------|
| **Hero H1 (Hero 01)** | 1.1 | (from `text-display-1` token) | Default; do not add custom leading. |
| **Hero H1 (Hero 02)** | 1.25 on desktop only | `md:leading-tight` | Apply from `md` breakpoint only; mobile uses default. |
| **Other headings** (section titles, etc.) | Prefer 1.2–1.25 | `leading-tight` or default | Keep headings compact; use `leading-normal` (1.5) only for long multi-line headings. |

Do not apply custom line-height to hero H1 on mobile; use the default that comes with `text-4xl` (36px).

---

### Mobile breakpoint rules (font size)

**Rule: hero H1 on mobile is 36px for all heroes.**

| Element | Mobile (default) | From `sm` | From `md` |
|---------|------------------|-----------|-----------|
| **Hero H1** | **36px (`text-4xl`)** — fixed for all hero blocks | — | 60px (`text-display-1` or `text-6xl`); long titles may use 48px (`text-5xl`) |
| Hero description | 18px (`text-lg`) | 20px (`text-body-lg`) | — |
| Breadcrumb | 12px (`text-xs`) | — | — |
| Category label | 18px (`text-subtitle`) | — | — |

Do not change hero H1 font size on mobile; 36px is the design system rule for all hero headings on small screens.

**Hero 02 description only:** If the description has **more characters** than *"Query GPS and IoT streams with SQL instead of stitching together APIs, retries, and custom data pipelines."* (82 characters), use **`text-lg` + `font-normal`** on all breakpoints (no `sm:text-body-lg`). Shorter descriptions use `text-lg` on mobile and `sm:text-body-lg` (20px) from `sm` as usual.

---

## Colors (semantic tokens)

### Light theme — surfaces

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| surface-default | `bg-surface-default` | #ffffff | Page and section background (e.g. Hero), cards |

### Light theme — content (text hierarchy)

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| content-primary | `text-content-primary` | #101828 | Headings, primary text |
| content-secondary | `text-content-secondary` | #1e2939 | Descriptions, secondary text (light theme) |
| content-muted | `text-content-muted` | #62748e | Breadcrumb, hints, tertiary text |

### Light theme — buttons

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| button-primary | `bg-button-primary` | #0084d1 | Primary (filled) button background |
| button-primary-foreground | `text-button-primary-foreground` | #ffffff | Text on primary button |
| button-secondary | `text-button-secondary` | #0084d1 | Secondary (ghost) button text |

### Dark theme — surfaces

Use with `dark:` prefix. Main background token: **surface-dark-primary** (#0F172A).

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| surface-dark-primary | `dark:bg-surface-dark-primary` | #0F172A | Main page/section background |
| surface-dark-secondary | `dark:bg-surface-dark-secondary` | #0E141D | Dark blocks (cards, bars) |
| surface-dark-bright | `dark:bg-surface-dark-bright` | #273347 | Cards, image blocks |
| surface-dark-input | `dark:bg-surface-dark-input` | #1B2533 | Form inputs |

### Dark theme — text

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| text-dark-primary | `dark:text-text-dark-primary` | #E0E0E0 | Headings, primary text |
| text-dark-secondary | `dark:text-text-dark-secondary` | #e5e7eb (gray-200) | Body text, descriptions in dark theme |
| text-dark-placeholder | `dark:text-text-dark-placeholder` | #9DA5B3 | Input placeholder |
| text-dark-tertiary | `dark:text-text-dark-tertiary` | #CCCCCC | Tertiary text |

### Dark theme — accent and borders

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| accent-dark | `dark:bg-accent-dark`, `dark:text-accent-dark` | #3498DB | Primary button, links |
| border-dark | `dark:border-border-dark` | #40546D | Borders |

**Brand / accent (light):** `brand-500` / `accent-500` (#0084d1) match button-primary. Full scales in `tailwind.config.ts`.

---

## Border radius

| Class | Value | Use for |
|-------|--------|--------|
| `rounded-btn` | 6px | Buttons, inputs |
| `rounded-lg` | 8px | Cards, images |
| `rounded-2xl` | 1rem | Large blocks |

---

## Width / max-width

| Class | Value | Use for |
|-------|--------|--------|
| `max-w-7xl` | 80rem (1280px) | Section container |
| `max-w-content` | 36.875rem (590px) | Hero text column |
| `max-w-content-list` | 37.6875rem (603px) | Text+img list column; reuse for similar blocks |
| `max-w-hero-image` | 38.75rem (620px) | Hero image column |

---

## Height (hero)

| Class | Value | Use for |
|-------|--------|--------|
| `min-h-hero` | 39.375rem (630px) | Hero section (mobile/tablet) |
| `h-hero` | 39.375rem (630px) | Hero section (xl) |

**Height (blocks):** Text+img image column: `h-text-img-mobile` (280px) → `sm:h-text-img-sm` (340px) → `lg:h-text-img` (390px).

---

## Hero background

Hero background is implemented in the component (mesh + gradients). **Base (light):** inline styles in HeroBlock. **Dark sub-styles:** CSS variables `--hero-mesh-color`, `--hero-gradient-horizontal`, `--hero-gradient-overlay` in `.dark` (and `.dark [data-hero-02]` for Hero 02). Do not rename or remove these variables in `globals.css`.

| Layer | Base (light) | Dark (sub-styles) |
|-------|--------------|-------------------|
| Mesh | rgba(223,242,254,0.52), 40×40px, fade mask | `--hero-mesh-color`, 40×40px |
| Horizontal gradient | mix-blend-multiply, see HeroBlock | `--hero-gradient-horizontal` |
| Overlay | Top blue tint, bottom fade to white | `--hero-gradient-overlay` (blue tint at top, fade to surface-dark-primary) |

Visibility of light vs dark layers is controlled by `data-hero-bg-light` and `data-hero-bg-dark` in `globals.css` (light set visible by default; dark set visible when `.dark` is on `html`).

**Hero 02 gradient variant:** Section has `data-hero-02`. In dark theme, `.dark [data-hero-02]` overrides only the gradient variables (different blue hue/opacity); mesh and structure are shared with Hero 01. Light theme: Hero 02 uses its own gradient in the component.
