import Link from "next/link";

/* DESIGN_TOKENS.md — Spacing table */
const SPACING = [
  { class: "1", value: "4px", rem: "0.25rem", use: "gap-1, p-1" },
  { class: "2", value: "8px", rem: "0.5rem", use: "gap-2 (icon + label)" },
  { class: "4", value: "16px", rem: "1rem", use: "gap-4 (heading + block)" },
  { class: "5", value: "20px", rem: "1.25rem", use: "gap-5 (mobile buttons), mb-5 (below breadcrumb)" },
  { class: "6", value: "24px", rem: "1.5rem", use: "py-6 (content block)" },
  { class: "7", value: "28px", rem: "1.75rem", use: "gap-7 (hero content), buttons md+" },
  { class: "8", value: "32px", rem: "2rem", use: "—" },
  { class: "9", value: "36px", rem: "2.25rem", use: "gap-9 (text ↔ image)" },
  { class: "12", value: "48px", rem: "3rem", use: "py-12 (section mobile)" },
  { class: "16", value: "64px", rem: "4rem", use: "py-16 (sm)" },
  { class: "20", value: "80px", rem: "5rem", use: "py-20 (md)" },
  { class: "24", value: "96px", rem: "6rem", use: "py-24 (lg)" },
  { class: "32", value: "128px", rem: "8rem", use: "py-32 (xl section)" },
] as const;

const SPACING_CUSTOM = [
  { class: "col-gap", value: "4.375rem (70px)", use: "xl: gap between hero columns" },
  { class: "btn", value: "2.875rem (46px)", use: "Button height (h-btn)" },
  { class: "btn-min", value: "9.375rem (150px)", use: "Primary button min-width (min-w-btn-min)" },
] as const;

/* DESIGN_TOKENS.md — Light theme surfaces (blocks only) */
const LIGHT_SURFACES = [
  { token: "surface-default", class: "bg-surface-default", hex: "#ffffff", use: "Page and section background (e.g. Hero), cards" },
] as const;

/* DESIGN_TOKENS.md — Dark theme surfaces */
const DARK_SURFACES = [
  { token: "surface-dark-primary", class: "dark:bg-surface-dark-primary", hex: "#0F172A", use: "Main page/section background" },
  { token: "surface-dark-secondary", class: "dark:bg-surface-dark-secondary", hex: "#0E141D", use: "Dark blocks (cards, bars)" },
  { token: "surface-dark-bright", class: "dark:bg-surface-dark-bright", hex: "#273347", use: "Cards, image blocks" },
  { token: "surface-dark-input", class: "dark:bg-surface-dark-input", hex: "#1B2533", use: "Form inputs" },
] as const;

/* DESIGN_TOKENS.md — Light theme content */
const LIGHT_CONTENT = [
  { token: "content-primary", class: "text-content-primary", hex: "#101828", use: "Headings, primary text" },
  { token: "content-secondary", class: "text-content-secondary", hex: "#1e2939", use: "Descriptions, secondary text (light)" },
  { token: "content-muted", class: "text-content-muted", hex: "#62748e", use: "Breadcrumb, hints, tertiary text" },
] as const;

/* DESIGN_TOKENS.md — Light theme buttons */
const LIGHT_BUTTONS = [
  { token: "button-primary", class: "bg-button-primary", hex: "#0084d1", use: "Primary (filled) button background" },
  { token: "button-primary-foreground", class: "text-button-primary-foreground", hex: "#ffffff", use: "Text on primary button" },
  { token: "button-secondary", class: "text-button-secondary", hex: "#0084d1", use: "Secondary (ghost) button text" },
] as const;

/* DESIGN_TOKENS.md — Dark theme text */
const DARK_CONTENT = [
  { token: "text-dark-primary", class: "dark:text-text-dark-primary", hex: "#E0E0E0", use: "Headings, primary text" },
  { token: "text-dark-secondary", class: "dark:text-text-dark-secondary", hex: "#e5e7eb", use: "Body text, descriptions in dark theme (gray-200)" },
  { token: "text-dark-placeholder", class: "dark:text-text-dark-placeholder", hex: "#9DA5B3", use: "Input placeholder" },
  { token: "text-dark-tertiary", class: "dark:text-text-dark-tertiary", hex: "#CCCCCC", use: "Tertiary text" },
] as const;

/* DESIGN_TOKENS.md — Dark theme accent and borders */
const DARK_ACCENT_BORDERS = [
  { token: "accent-dark", class: "dark:bg-accent-dark, dark:text-accent-dark", hex: "#3498DB", use: "Primary button, links" },
  { token: "border-dark", class: "dark:border-border-dark", hex: "#40546D", use: "Borders" },
] as const;

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-surface-default dark:bg-surface-dark-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-16 border-b border-neutral-200 pb-12 dark:border-border-dark">
          <h1 className="font-display text-3xl font-bold tracking-tight text-content-primary dark:text-text-dark-primary sm:text-4xl">
            Design System
          </h1>
          <p className="mt-2 max-w-2xl font-body text-body-lg text-content-secondary dark:text-text-dark-secondary">
            Tokens and components for NVX Design Blocks. Use semantic tokens for light/dark consistency.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block font-body text-sm font-medium text-brand-500 hover:underline dark:text-accent-dark"
          >
            ← Back to home
          </Link>
        </div>

        {/* Colors — Light surfaces */}
        <section className="mb-20" aria-labelledby="colors-surfaces">
          <h2 id="colors-surfaces" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Surfaces (light)
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {LIGHT_SURFACES.map(({ token, class: cls, hex, use }) => (
              <div key={token} className="rounded-lg border border-neutral-200 dark:border-border-dark overflow-hidden">
                <div className={`h-24 ${cls} border-b border-neutral-200 dark:border-border-dark`} />
                <div className="bg-surface-subtle px-4 py-3 dark:bg-surface-dark-bright">
                  <p className="font-mono text-xs font-semibold text-content-primary dark:text-text-dark-primary">{token}</p>
                  <p className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">{cls}</p>
                  <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">{hex}</p>
                  <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colors — Dark surfaces */}
        <section className="mb-20" aria-labelledby="colors-surfaces-dark">
          <h2 id="colors-surfaces-dark" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Surfaces (dark)
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DARK_SURFACES.map(({ token, class: cls, hex, use }) => (
              <div key={token} className="rounded-lg border border-neutral-200 dark:border-border-dark overflow-hidden">
                <div className={`h-24 ${cls} border-b border-neutral-200 dark:border-border-dark`} />
                <div className="bg-surface-subtle px-4 py-3 dark:bg-surface-dark-bright">
                  <p className="font-mono text-xs font-semibold text-content-primary dark:text-text-dark-primary">{token}</p>
                  <p className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">{cls}</p>
                  <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">{hex}</p>
                  <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colors — Content (text, light) */}
        <section className="mb-20" aria-labelledby="colors-content">
          <h2 id="colors-content" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Content (light)
          </h2>
          <div className="flex flex-wrap gap-6">
            {LIGHT_CONTENT.map(({ token, class: cls, hex, use }) => (
              <div key={token} className="rounded-lg border border-neutral-200 bg-white px-6 py-4 dark:border-border-dark dark:bg-surface-dark-bright">
                <p className={`font-body text-lg ${cls}`}>Sample text</p>
                <p className="mt-2 font-mono text-xs font-semibold text-content-primary dark:text-text-dark-primary">{token}</p>
                <p className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">{hex}</p>
                <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Colors — Content (text, dark) — wrap in .dark so token preview is correct */}
        <section className="mb-20" aria-labelledby="colors-content-dark">
          <h2 id="colors-content-dark" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Content (dark)
          </h2>
          <div className="dark rounded-xl bg-surface-dark-primary p-6">
            <div className="flex flex-wrap gap-6">
              {DARK_CONTENT.map(({ token, class: cls, hex, use }) => (
                <div key={token} className="rounded-lg border border-border-dark bg-surface-dark-bright px-6 py-4">
                  <p className={`font-body text-lg ${cls}`}>Sample text</p>
                  <p className="mt-2 font-mono text-xs font-semibold text-text-dark-primary">{token}</p>
                  <p className="font-mono text-xs text-text-dark-secondary">{hex}</p>
                  <p className="mt-1 text-xs text-text-dark-secondary">{use}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Colors — Light theme buttons (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="colors-buttons">
          <h2 id="colors-buttons" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Light theme — buttons
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {LIGHT_BUTTONS.map(({ token, class: cls, hex, use }) => (
              <div key={token} className="rounded-lg border border-neutral-200 dark:border-border-dark overflow-hidden">
                <div className={`h-14 flex items-center justify-center border-b border-neutral-200 dark:border-border-dark ${token.includes("foreground") ? "bg-button-primary" : token.includes("secondary") ? "bg-surface-subtle dark:bg-surface-dark-bright" : cls}`}>
                  {token.includes("foreground") ? (
                    <span className="font-body text-sm font-medium text-button-primary-foreground">Aa</span>
                  ) : token.includes("secondary") ? (
                    <span className="font-body text-sm font-medium text-button-secondary">Secondary</span>
                  ) : (
                    <span className="font-body text-sm font-medium text-button-primary-foreground">Primary</span>
                  )}
                </div>
                <div className="bg-surface-subtle px-4 py-3 dark:bg-surface-dark-bright">
                  <p className="font-mono text-xs font-semibold text-content-primary dark:text-text-dark-primary">{token}</p>
                  <p className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">{cls}</p>
                  <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">{hex}</p>
                  <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colors — Dark theme accent and borders (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="colors-accent-dark">
          <h2 id="colors-accent-dark" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Dark theme — accent and borders
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {DARK_ACCENT_BORDERS.map(({ token, class: cls, hex, use }) => (
              <div key={token} className="rounded-lg border border-neutral-200 dark:border-border-dark overflow-hidden">
                <div className={`h-14 flex items-center justify-center border-b border-neutral-200 dark:border-border-dark ${token === "accent-dark" ? "bg-accent-dark" : "border-2 border-border-dark"}`}>
                  {token === "accent-dark" ? (
                    <span className="font-body text-sm font-medium text-white">Aa</span>
                  ) : (
                    <span className="font-body text-xs text-content-muted dark:text-text-dark-secondary">Border sample</span>
                  )}
                </div>
                <div className="bg-surface-subtle px-4 py-3 dark:bg-surface-dark-bright">
                  <p className="font-mono text-xs font-semibold text-content-primary dark:text-text-dark-primary">{token}</p>
                  <p className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">{cls}</p>
                  <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">{hex}</p>
                  <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand (DESIGN_TOKENS.md — one line only) */}
        <section className="mb-20" aria-labelledby="colors-brand">
          <h2 id="colors-brand" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Colors · Brand / accent (light)
          </h2>
          <p className="font-body text-content-secondary dark:text-text-dark-secondary">
            <strong className="text-content-primary dark:text-text-dark-primary">brand-500</strong> / <strong className="text-content-primary dark:text-text-dark-primary">accent-500</strong> (#0084d1) match button-primary. Full scales in <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright font-mono text-sm">tailwind.config.ts</code>.
          </p>
          <div className="mt-4 h-14 w-14 rounded-lg bg-brand-500" title="brand-500 #0084d1" />
        </section>

        {/* Spacing (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="spacing">
          <h2 id="spacing" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Spacing
          </h2>
          <p className="font-body text-content-secondary dark:text-text-dark-secondary mb-6">
            1 unit = 0.25rem (4px). Use <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">p-*</code>, <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">m-*</code>, <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">gap-*</code>, <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">space-*</code>.
          </p>
          <div className="space-y-3">
            {SPACING.map(({ class: c, value, rem, use }) => (
              <div key={c} className="flex flex-wrap items-center gap-4">
                <div
                  className="rounded bg-brand-500/20 dark:bg-accent-dark/20 shrink-0"
                  style={{ width: `${parseInt(c, 10) * 4}px`, minWidth: "4px", height: "20px" }}
                />
                <span className="font-mono text-sm text-content-primary dark:text-text-dark-primary">gap-{c}</span>
                <span className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">{value} · {rem}</span>
                <span className="text-xs text-content-secondary dark:text-text-dark-secondary">{use}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 font-body text-sm font-semibold text-content-primary dark:text-text-dark-primary">Custom spacing</p>
          <div className="mt-2 space-y-2">
            {SPACING_CUSTOM.map(({ class: c, value, use }) => (
              <div key={c} className="flex flex-wrap items-center gap-4 font-mono text-sm">
                <span className="text-content-primary dark:text-text-dark-primary">{c}</span>
                <span className="text-content-muted dark:text-text-dark-secondary">{value}</span>
                <span className="text-content-secondary dark:text-text-dark-secondary font-sans font-normal text-xs">{use}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-content-muted dark:text-text-dark-secondary">Container padding: px-4 (mobile) → sm:px-6 → lg:px-8.</p>
        </section>

        {/* Typography (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="typography">
          <h2 id="typography" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Typography
          </h2>
          <p className="font-body text-content-secondary dark:text-text-dark-secondary mb-6">
            Font families: <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">font-body</code> (body and UI), <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">font-display</code> (headings). Both use Proxima Nova.
          </p>
          <div className="space-y-6">
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-body text-xs font-semibold uppercase text-content-primary dark:text-text-dark-primary">Breadcrumb</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-xs + font-semibold + uppercase · 12px (0.75rem) · default</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Breadcrumb (e.g. &quot;Navixy Platform · Data &amp; Analytics&quot;)</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-body text-caption text-content-primary dark:text-text-dark-primary">Caption</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-caption · 12px (0.75rem) · 1.2</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Small metadata, captions</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-body text-subtitle font-bold text-content-primary dark:text-text-dark-primary">Hero category slot</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-subtitle · 18px (1.125rem) · 1.2</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Hero category slot (icon + label above H1, e.g. &quot;IoT Query&quot;)</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-display text-heading-4xl font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary">Section heading (4xl bold)</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-heading-4xl + font-bold · 36px (2.25rem) · 1.3</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Заголовки секций (e.g. &quot;Telematics platform to innovate and scale globally&quot;)</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">Длинные описания в секциях (text+img): абзацы и пункты списка.</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-base + leading-[1.4] · 16px (1rem) · 1.4</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Используется при большом объёме текста (e.g. text+img 01, 02)</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-body text-body-lg text-content-secondary dark:text-text-dark-secondary">Body copy on desktop</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-body-lg · 20px (1.25rem) · 1.4</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Body copy on desktop</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-display text-display-1 text-content-primary dark:text-text-dark-primary">Hero H1</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-display-1 · 60px (3.75rem) · 1.1</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Hero H1</p>
            </div>
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark p-4">
              <p className="font-body text-button text-content-primary dark:text-text-dark-primary">Button label</p>
              <p className="mt-1 font-mono text-xs text-content-muted dark:text-text-dark-secondary">text-button · 16px (1rem) · 1.4</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Button label</p>
            </div>
          </div>
        </section>

        {/* Hero background · Mesh (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="hero-mesh">
          <h2 id="hero-mesh" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Hero background · Mesh
          </h2>
          <p className="font-body text-content-secondary dark:text-text-dark-secondary mb-6">
            Сетка линий поверх hero. Размер ячейки во всех hero: <strong className="text-content-primary dark:text-text-dark-primary font-mono">44×44px</strong> (<code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">backgroundSize: &quot;44px 44px&quot;</code>). Light: inline в компоненте; dark: <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">--hero-mesh-color</code> в <code className="rounded bg-surface-subtle px-1 dark:bg-surface-dark-bright">.dark</code>.
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="rounded-lg border border-neutral-200 dark:border-border-dark overflow-hidden">
              <div
                className="h-40 w-64 bg-surface-default"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(223,242,254,0.52) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(223,242,254,0.52) 1px, transparent 1px)
                  `,
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="bg-surface-subtle px-4 py-3 dark:bg-surface-dark-bright">
                <p className="font-mono text-xs font-semibold text-content-primary dark:text-text-dark-primary">Light (Hero 01)</p>
                <p className="font-mono text-xs text-content-muted dark:text-text-dark-secondary">rgba(223,242,254,0.52) · 44×44px</p>
              </div>
            </div>
            <div className="dark rounded-lg border border-border-dark overflow-hidden">
              <div
                className="h-40 w-64 bg-surface-dark-primary"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, var(--hero-mesh-color, rgba(165,178,230,0.12)) 1px, transparent 1px),
                    linear-gradient(to bottom, var(--hero-mesh-color, rgba(165,178,230,0.12)) 1px, transparent 1px)
                  `,
                  backgroundSize: "44px 44px",
                }}
              />
              <div className="bg-surface-dark-bright px-4 py-3">
                <p className="font-mono text-xs font-semibold text-text-dark-primary">Dark</p>
                <p className="font-mono text-xs text-text-dark-secondary">--hero-mesh-color · 44×44px</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-content-muted dark:text-text-dark-secondary">
            В компонентах hero также используются горизонтальный градиент и оверлей; см. DESIGN_TOKENS.md «Hero background».
          </p>
        </section>

        {/* Buttons */}
        <section className="mb-20" aria-labelledby="buttons">
          <h2 id="buttons" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="flex h-btn min-w-btn-min items-center justify-center rounded-btn bg-brand-500 px-6 py-3.5 font-body text-button font-semibold text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
            >
              Primary
            </a>
            <a
              href="#"
              className="flex h-btn items-center justify-center rounded-btn px-6 py-3.5 font-body text-button font-semibold text-brand-500 transition-opacity hover:opacity-90 dark:text-accent-dark"
            >
              Secondary
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-content-muted dark:text-text-dark-secondary">
            h-btn (46px) · min-w-btn-min (150px) · rounded-btn (6px)
          </p>
        </section>

        {/* Border radius (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="radius">
          <h2 id="radius" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Border radius
          </h2>
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div className="h-20 w-20 rounded-btn border-2 border-neutral-300 dark:border-border-dark" />
              <p className="mt-2 font-mono text-xs text-content-primary dark:text-text-dark-primary">rounded-btn · 6px</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Buttons, inputs</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 rounded-lg border-2 border-neutral-300 dark:border-border-dark" />
              <p className="mt-2 font-mono text-xs text-content-primary dark:text-text-dark-primary">rounded-lg · 8px</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Cards, images</p>
            </div>
            <div className="text-center">
              <div className="h-20 w-20 rounded-2xl border-2 border-neutral-300 dark:border-border-dark" />
              <p className="mt-2 font-mono text-xs text-content-primary dark:text-text-dark-primary">rounded-2xl · 1rem</p>
              <p className="mt-1 text-xs text-content-secondary dark:text-text-dark-secondary">Large blocks</p>
            </div>
          </div>
        </section>

        {/* Width / max-width (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="width">
          <h2 id="width" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Width / max-width
          </h2>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
              <span className="text-content-primary dark:text-text-dark-primary">max-w-7xl</span>
              <span className="text-content-muted dark:text-text-dark-secondary">80rem (1280px)</span>
              <span className="font-sans font-normal text-xs text-content-secondary dark:text-text-dark-secondary">Section container</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
              <span className="text-content-primary dark:text-text-dark-primary">max-w-content</span>
              <span className="text-content-muted dark:text-text-dark-secondary">36.875rem (590px)</span>
              <span className="font-sans font-normal text-xs text-content-secondary dark:text-text-dark-secondary">Hero text column</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
              <span className="text-content-primary dark:text-text-dark-primary">max-w-hero-image</span>
              <span className="text-content-muted dark:text-text-dark-secondary">38.75rem (620px)</span>
              <span className="font-sans font-normal text-xs text-content-secondary dark:text-text-dark-secondary">Hero image column</span>
            </div>
          </div>
        </section>

        {/* Height (hero) (DESIGN_TOKENS.md) */}
        <section className="mb-20" aria-labelledby="height">
          <h2 id="height" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Height (hero)
          </h2>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
              <span className="text-content-primary dark:text-text-dark-primary">min-h-hero</span>
              <span className="text-content-muted dark:text-text-dark-secondary">39.375rem (630px)</span>
              <span className="font-sans font-normal text-xs text-content-secondary dark:text-text-dark-secondary">Hero section (mobile/tablet)</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
              <span className="text-content-primary dark:text-text-dark-primary">h-hero</span>
              <span className="text-content-muted dark:text-text-dark-secondary">39.375rem (630px)</span>
              <span className="font-sans font-normal text-xs text-content-secondary dark:text-text-dark-secondary">Hero section (xl)</span>
            </div>
          </div>
        </section>

        {/* Buttons (DESIGN_TOKENS.md: h-btn, rounded-btn, min-w-btn-min) */}
        <section className="mb-8" aria-labelledby="buttons">
          <h2 id="buttons" className="font-display text-xl font-bold text-content-primary dark:text-text-dark-primary mb-8">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="flex h-btn min-w-btn-min items-center justify-center rounded-btn bg-brand-500 px-6 py-3.5 font-body text-button font-semibold text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
            >
              Primary
            </a>
            <a
              href="#"
              className="flex h-btn items-center justify-center rounded-btn px-6 py-3.5 font-body text-button font-semibold text-brand-500 transition-opacity hover:opacity-90 dark:text-accent-dark"
            >
              Secondary
            </a>
          </div>
          <p className="mt-4 font-mono text-xs text-content-muted dark:text-text-dark-secondary">
            h-btn (2.875rem / 46px) · min-w-btn-min (9.375rem / 150px) · rounded-btn (6px)
          </p>
        </section>
      </div>
    </main>
  );
}
