"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeUp, defaultTransition } from "@/lib/animations";
import HeroChartSwitcher from "@/components/charts/HeroChartSwitcher";

/** Dashboard logo icon (category slot): 24×24 SVG. Full logo PNG available at /images/logo-dashboard.png. */
const HERO03_LOGO_ICON = "/images/dashboard-logo.svg";

/** Title length threshold: if heading has more characters, use smaller size (text-5xl). */
const HERO_TITLE_LENGTH_THRESHOLD = "A Private Lakehouse for telematics data".length; // 41

/** Description length threshold: if longer than this, use text-lg font-normal only (no sm:text-body-lg). */
const HERO_DESCRIPTION_LENGTH_THRESHOLD =
  "Query GPS and IoT streams with SQL instead of stitching together APIs, retries, and custom data pipelines.".length; // 82

const HERO03_TITLE = "Build deeper fleet dashboards in 1 minute";
const HERO03_DESCRIPTION =
  "Navixy Location Intelligence goes beyond the dot on the map—turning real-time GPS data and historical movement patterns into contextual, actionable insights that drive better decisions across your entire operation.";

/**
 * Hero 03 — copy of HeroBlock02 for customization.
 * Logo in category slot (Dashboard Studio). Title uses text-5xl when longer than threshold.
 */
export function HeroBlock03() {
  const isLongTitle = HERO03_TITLE.length > HERO_TITLE_LENGTH_THRESHOLD;
  const isLongDescription = HERO03_DESCRIPTION.length > HERO_DESCRIPTION_LENGTH_THRESHOLD;
  /* DESIGN_TOKENS: "Line-height rules" + "Mobile breakpoint rules". Mobile: H1 = 36px (text-4xl) for all heroes. Desktop: md:text-6xl or md:text-5xl (long title) + md:leading-tight (1.25) for Hero 03 only. */
  const titleClassName = isLongTitle
    ? "font-body text-4xl font-bold text-content-primary dark:text-text-dark-primary md:text-5xl md:leading-tight"
    : "font-body text-4xl font-bold text-content-primary dark:text-text-dark-primary md:text-6xl md:leading-tight";
  /* Hero 03 description: if longer than "Query GPS and IoT streams…" (82 chars), use text-lg font-normal only on all breakpoints; otherwise text-lg + sm:text-body-lg. */
  const descriptionClassName = isLongDescription
    ? "max-w-content font-body text-lg font-normal text-content-secondary dark:text-text-dark-secondary"
    : "max-w-content font-body text-lg font-normal text-content-secondary dark:text-text-dark-secondary sm:text-body-lg";

  return (
    <section data-hero-section data-hero-03 className="relative min-h-hero w-full overflow-hidden bg-surface-default dark:bg-surface-dark-primary xl:h-hero">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* Hero 03 light theme: same as Hero 02 — blue variant, less bright. */}
        <div data-hero-bg-light className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(219,234,254,0.42) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(219,234,254,0.42) 1px, transparent 1px)
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
                "linear-gradient(89.998deg, rgba(219,234,254,0) 3.13%, rgba(147,197,253,0.06) 27.89%, rgba(147,197,253,0.06) 46.64%, rgba(147,197,253,0.06) 70.67%, rgba(219,234,254,0) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 81.98%, rgb(255,255,255) 96.34%), linear-gradient(180deg, rgba(255,255,255,0) 31.06%, rgba(219,234,254,0) 96.76%), linear-gradient(180deg, rgb(184,230,254) 0%, rgba(255,255,255,0) 27.5%)",
            }}
          />
        </div>
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

      <div className="relative mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col items-start justify-center gap-9 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:flex xl:flex-row xl:items-center xl:gap-col-gap xl:py-32">
        <motion.div
          className="flex min-w-0 shrink max-w-content flex-col items-start justify-center xl:basis-[theme(maxWidth.content)] xl:shrink-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >
          <motion.p
            data-hero-breadcrumb
            className="mb-5 font-body text-xs font-semibold uppercase text-content-muted dark:text-text-dark-secondary"
            variants={fadeUp}
          >
            Navixy Platform · Data & Analytics
          </motion.p>

          <div className="flex flex-col gap-7 py-6">
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={defaultTransition}
            >
              {/* Category slot: Dashboard Studio icon (24×24) + label. Design system: h-6 w-6, gap-2. */}
              <motion.div
                className="flex items-center gap-2"
                variants={fadeUp}
              >
                <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                  <Image
                    src={HERO03_LOGO_ICON}
                    alt="Dashboard Studio"
                    width={24}
                    height={24}
                    className="object-contain"
                    unoptimized
                  />
                </span>
                <span
                  data-hero-label
                  className="font-body text-subtitle font-bold text-content-primary dark:text-text-dark-primary"
                >
                  Dashboard Studio
                </span>
              </motion.div>

              <motion.h1
                data-hero-heading
                className={titleClassName}
                variants={fadeUp}
              >
                {HERO03_TITLE}
              </motion.h1>
            </motion.div>

            <motion.p
              data-hero-description
              className={descriptionClassName}
              variants={fadeUp}
            >
              {HERO03_DESCRIPTION}
            </motion.p>

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
                data-hero-btn-secondary
                className="flex h-btn items-center justify-center py-3.5 font-body text-button font-semibold text-brand-500 no-underline transition-opacity hover:opacity-80 dark:text-accent-dark"
              >
                Secondary button
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          data-hero-image-block
          className="relative flex w-full min-w-0 shrink items-center justify-center overflow-visible rounded-lg bg-transparent xl:max-w-hero-image"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <HeroChartSwitcher />
        </motion.div>
      </div>
    </section>
  );
}
