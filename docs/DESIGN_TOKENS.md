# Design system tokens (Tailwind)

Reference for anyone using the NVX design system: tokens live in `tailwind.config.ts`; global overrides (theme, hero, dark mode) are in `app/globals.css`. Use semantic tokens (e.g. `text-content-primary`, `bg-surface-dark-primary`) instead of raw colors so light/dark and future theme changes stay consistent. For motion, use variants and `defaultTransition` from `lib/animations.ts`.

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
| `btn` | 2.875rem (46px) | Button height (`h-btn`) |
| `btn-min` | 9.375rem (150px) | Primary button min-width (`min-w-btn-min`) |

**Container padding:** `px-4` (mobile) → `sm:px-6` → `lg:px-8`.

---

## Typography

**Font families:** `font-body` (body and UI), `font-display` (headings). Both use Proxima Nova.

| Class | Size | Line height | Use for |
|-------|------|-------------|--------|
| `text-xs` + `font-semibold` + `uppercase` | 12px (0.75rem) | default | **Breadcrumb** (e.g. "Navixy Platform · Data & Analytics") |
| `text-caption` | 12px (0.75rem) | 1.2 | Small metadata, captions (optional alternative to text-xs) |
| `text-subtitle` | 18px (1.125rem) | 1.2 | **Hero category slot** (icon + label above H1, e.g. "IoT Query") |

**Hero category slot (icon + text):** Customizable slot for vibe coders — swap icon and label per product/campaign. Icon **24×24px** (use `h-6 w-6` container, `<Image width={24} height={24} />`). Label **18px**, `font-bold`, `text-subtitle`. Gap between icon and label **8px** (`gap-2`). Gap below to H1 **16px** (`gap-4`).
| `text-body-lg` | 20px (1.25rem) | 1.4 | Body copy on desktop |
| `text-display-1` | 60px (3.75rem) | 1.1 | Hero H1 |
| `text-button` | 16px (1rem) | 1.4 | Button label |

**Responsive:** Hero description — `text-lg` (18px) on mobile, `sm:text-body-lg` (20px) on sm+. Hero H1 — `text-4xl` (36px) on mobile, `md:text-display-1` (60px) on md+.

---

## Colors (semantic tokens)

### Light theme — surfaces

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| surface-default | `bg-surface-default` | #ffffff | Page and section background (e.g. Hero) |
| surface-inverse | `bg-surface-inverse` | #18181b | Inverted area (navbar) |
| surface-subtle | `bg-surface-subtle` | #e4e4e7 | Cards, image placeholders |

### Light theme — content (text hierarchy)

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| content-primary | `text-content-primary` | #101828 | Headings, primary text |
| content-secondary | `text-content-secondary` | #1e2939 | Descriptions, secondary text |
| content-muted | `text-content-muted` | #62748e | Breadcrumb, hints, tertiary text |

### Light theme — buttons

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| button-primary | `bg-button-primary` | #0084d1 | Primary (filled) button background |
| button-primary-foreground | `text-button-primary-foreground` | #ffffff | Text on primary button |
| button-secondary | `text-button-secondary` | #0084d1 | Secondary (ghost) button text |

### Light theme — text on dark surfaces (e.g. navbar)

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| text-inverse | `text-text-inverse` | #ffffff | Active nav link, icons on dark bg |
| text-inverse-muted | `text-text-inverse-muted` | #a1a1aa | Inactive nav link |

### Dark theme — surfaces

Use with `dark:` prefix. Main background token: **surface-dark-primary** (#0F172A).

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| surface-dark-primary | `dark:bg-surface-dark-primary` | #0F172A | Main page/section background |
| surface-dark-secondary | `dark:bg-surface-dark-secondary` | #0E141D | Header, sidebars |
| surface-dark-bright | `dark:bg-surface-dark-bright` | #273347 | Cards, image blocks |
| surface-dark-input | `dark:bg-surface-dark-input` | #1B2533 | Form inputs |

### Dark theme — text

| Token | Class | Hex | Use for |
|-------|--------|-----|--------|
| text-dark-primary | `dark:text-text-dark-primary` | #E0E0E0 | Headings, primary text |
| text-dark-secondary | `dark:text-text-dark-secondary` | #8C929B | Descriptions, breadcrumb, muted |
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
| `max-w-hero-image` | 38.75rem (620px) | Hero image column |

---

## Height (hero)

| Class | Value | Use for |
|-------|--------|--------|
| `min-h-hero` | 39.375rem (630px) | Hero section (mobile/tablet) |
| `h-hero` | 39.375rem (630px) | Hero section (xl) |

---

## Hero background

Hero background is implemented in the component (mesh + gradients). Light theme: inline styles in HeroBlock. Dark theme: CSS variables in `.dark` (see `globals.css`).

| Layer | Light theme | Dark theme |
|-------|-------------|------------|
| Mesh | rgba(223,242,254,0.52), 40×40px, fade mask | `--hero-mesh-color`, 40×40px |
| Horizontal gradient | mix-blend-multiply, see HeroBlock | `--hero-gradient-horizontal` |
| Overlay | Top blue tint, bottom fade to white | `--hero-gradient-overlay` (blue tint at top, fade to surface-dark-primary) |

Visibility of light vs dark layers is controlled by `data-hero-bg-light` and `data-hero-bg-dark` in `globals.css`.
