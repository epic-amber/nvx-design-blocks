"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeUp, defaultTransition } from "@/lib/animations";

const IOT_ICON =
  "https://www.figma.com/api/mcp/asset/0b9dc247-0df6-4603-9124-17f7a155bcac";

/** Hero image: 620×384 from public. Keep this aspect ratio when replacing the asset. */
const HERO_IMAGE = "/images/hero-desktop.png";
const HERO_ASPECT = 620 / 384;

/**
 * Hero block — above-the-fold section with headline, description, and CTA.
 *
 * Design tokens used (change only via tailwind.config / globals.css):
 * - Surfaces: bg-surface-default, dark:bg-surface-dark-primary; image block uses surface-subtle / surface-dark-bright.
 * - Text: content-primary/secondary/muted (light), text-dark-primary/secondary (dark). Breadcrumb = text-xs font-semibold uppercase.
 * - Buttons: h-btn, min-w-btn-min, rounded-btn, text-button; primary = brand-500 / accent-dark, secondary = text-only.
 * - Layout: max-w-content (text column), max-w-hero-image (image), min-h-hero / h-hero, gap-col-gap on xl.
 *
 * data-hero-* attributes are targeted by globals.css for dark theme overrides; keep them if you add new hero elements.
 */
export function HeroBlock() {
  return (
    <section data-hero-section className="relative min-h-hero w-full overflow-hidden bg-surface-default dark:bg-surface-dark-primary xl:h-hero">
      {/* Decorative background: two layer sets (light/dark) toggled by globals.css. Do not add layout or interactive children here. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Light: mesh grid + horizontal gradient + top blue overlay (Figma-spec). */}
        <div data-hero-bg-light className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
            backgroundImage: `
              linear-gradient(to right, rgba(223,242,254,0.52) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(223,242,254,0.52) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(89.998deg, rgba(189,227,255,0) 3.13%, rgba(125,192,240,0) 27.89%, rgba(125,192,240,0) 46.64%, rgba(125,192,240,0) 70.67%, rgba(189,227,255,0) 100%)",
          }}
        />
        <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 81.98%, rgb(255,255,255) 96.34%), linear-gradient(180deg, rgba(255,255,255,0) 31.06%, rgba(189,227,255,0) 96.76%), linear-gradient(180deg, rgb(184,230,254) 0%, rgba(255,255,255,0) 27.5%)",
            }}
          />
        </div>
        {/* Dark: same structure, values from .dark CSS vars (--hero-mesh-color, --hero-gradient-*). */}
        <div data-hero-bg-dark className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, var(--hero-mesh-color) 1px, transparent 1px),
              linear-gradient(to bottom, var(--hero-mesh-color) 1px, transparent 1px)
            `,
              backgroundSize: "44px 44px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              maskSize: "100% 100%",
              WebkitMaskSize: "100% 100%",
            }}
          />
          <div
            className="absolute inset-0 dark:mix-blend-normal"
            style={{ background: "var(--hero-gradient-horizontal)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--hero-gradient-overlay)" }}
          />
        </div>
      </div>

      {/* Content container: 1280px max, responsive padding (px-4 → sm:px-6 → lg:px-8), vertical rhythm py-12 → py-32. On xl, two columns with gap-col-gap. */}
      <div className="relative mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col items-start justify-center gap-9 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:flex xl:flex-row xl:items-center xl:gap-col-gap xl:py-32">
        {/* Left column: max-w-content (590px). Use this width so long headlines don’t overstretch. */}
        <motion.div
          className="flex min-w-0 shrink max-w-content flex-col items-start justify-center xl:basis-[theme(maxWidth.content)] xl:shrink-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >
          {/* Breadcrumb: design system standard is text-xs + font-semibold + uppercase. Use content-muted (light) / text-dark-secondary (dark). Spacing: mb-5 (1.25rem). */}
          <motion.p
            data-hero-breadcrumb
            className="mb-5 font-body text-xs font-semibold uppercase text-content-muted dark:text-text-dark-secondary"
            variants={fadeUp}
          >
            Navixy Platform · Data & Analytics
          </motion.p>

          {/* Vertical stack: gap-7 (1.75rem) between label+headline, description, and buttons. py-6 for internal rhythm. */}
          <div className="flex flex-col gap-7 py-6">
            {/* CATEGORY SLOT — vibe coders / content: replace icon + text with your own.
                Sizes: icon 24×24px (container h-6 w-6), gap between icon and text 8px (gap-2).
                Text: text-subtitle (18px), font-bold. gap-4 (16px) between this row and H1 below. */}
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={defaultTransition}
            >
              <motion.div
                className="flex items-center gap-2"
                variants={fadeUp}
              >
                <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                  <Image
                    src={IOT_ICON}
                    alt=""
                    width={24}
                    height={24}
                    className="object-cover"
                    unoptimized
                  />
                </span>
                <span data-hero-label className="font-body text-subtitle font-bold text-content-primary dark:text-text-dark-primary">
                  IoT Query
                </span>
              </motion.div>

              {/* Hero H1: design system — mobile 36px (text-4xl) for all heroes; md+ text-display-1 (60px). Line-height: default (display-1 = 1.1). See DESIGN_TOKENS.md “Line-height rules” and “Mobile breakpoint rules”. */}
              <motion.h1
                data-hero-heading
                className="font-body text-4xl font-bold text-content-primary dark:text-text-dark-primary md:text-display-1"
                variants={fadeUp}
              >
                A Private Lakehouse for telematics data
              </motion.h1>
            </motion.div>

            {/* Body copy: text-content-secondary (light) / text-dark-secondary (dark). Responsive size: text-lg on mobile, text-body-lg from sm. max-w-content keeps line length readable. */}
            <motion.p
              data-hero-description
              className="max-w-content font-body text-lg font-normal text-content-secondary dark:text-text-dark-secondary sm:text-body-lg"
              variants={fadeUp}
            >
              Query GPS and IoT streams with SQL instead of stitching together
              APIs, retries, and custom data pipelines.
            </motion.p>

            {/* CTA group: use h-btn and rounded-btn for tap targets. Primary = filled (brand-500 / accent-dark), min-w-btn-min. Secondary = text only, same brand/accent. gap-5 on mobile, gap-7 from md. */}
            <motion.div
              className="flex flex-wrap gap-5 md:gap-7"
              variants={fadeUp}
            >
              <a
                href="#product"
                data-hero-btn-primary
                className="flex h-btn min-w-btn-min items-center justify-center rounded-btn bg-brand-500 px-6 py-3.5 font-body text-button font-semibold text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
              >
                Action button
              </a>
              <a
                href="#pricing"
                data-hero-btn-link
                className="flex h-btn items-center justify-center py-3.5 font-body text-button font-semibold text-brand-500 no-underline transition-opacity hover:opacity-80 dark:text-accent-dark"
              >
                Link button
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right column (xl): image container. Keep aspect ratio 620:384; max-w-hero-image caps width. Background = surface-subtle (light) / surface-dark-bright (dark) for loading/placeholder. */}
        <motion.div
          data-hero-image-block
          className="relative w-full min-w-0 shrink overflow-hidden rounded-lg bg-surface-subtle dark:bg-surface-dark-bright xl:max-w-hero-image"
          style={{ aspectRatio: String(HERO_ASPECT) }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            sizes="(max-width: 1279px) 100vw, 620px"
            className="rounded-lg object-cover"
            unoptimized
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
