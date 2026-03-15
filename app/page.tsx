import { HeroBlock } from "@/components/blocks/HeroBlock";
import { HeroBlock02 } from "@/components/blocks/HeroBlock02";
import { HeroBlock03 } from "@/components/blocks/HeroBlock03";
import { ActivityZoneIcon } from "@/components/icons/ActivityZoneIcon";
import { ArrowRightIcon } from "@/components/icons/ArrowRightIcon";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { SolutionLogoIcon } from "@/components/icons/SolutionLogoIcon";

export default function Home() {
  return (
    <main>
      <section id="hero" aria-label="Hero">
        <HeroBlock />
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          Hero 02 from the design system — use and customize as needed
        </p>
      </div>
      <section id="hero-02" aria-label="Hero 02">
        <HeroBlock02 />
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          Hero 03 from the design system — use and customize as needed
        </p>
      </div>
      <section id="hero-03" aria-label="Hero 03">
        <HeroBlock03 />
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          text+img 01 from the design system — use and customize as needed
        </p>
      </div>
      {/* ─── text+img (Figma 8029:47086) ─────────────────────────────────────────
          Design system styles used:
          - Section: bg-surface-default, dark:bg-surface-dark-primary; py-24, md:py-section-py (token).
          - Container: max-w-7xl, px-4 sm:px-6 lg:px-8 (design system container).
          - Grid: gap-16 (64px); текстовая колонка lg:max-w-content (590px).
          - Heading: font-display, text-4xl, font-bold, leading-[1.3], text-content-primary, dark:text-text-dark-primary.
          - Body / list: font-body, text-base (16px), leading-[1.4], text-content-secondary, dark:text-text-dark-secondary.
          - List: max-w-content-list (token); gap-3 (icon–text), gap-6 (items). Checkmark icon: text-brand-500, dark:text-accent-dark.
          - Optional button: font-body, text-subtitle, font-semibold, text-brand-500, dark:text-accent-dark.
          - Image: rounded-btn, h-text-img-mobile sm:h-text-img-sm lg:h-text-img (tokens).
      ───────────────────────────────────────────────────────────────────────── */}
      <section
        id="text-img"
        className="bg-surface-default py-24 dark:bg-surface-dark-primary md:py-section-py lg:py-section-py"
        aria-label="Text + Image"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-7 lg:max-w-content">
              <div className="flex flex-col gap-7">
                <h2 className="font-display text-4xl font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                  Telematics platform to innovate
                  <br />
                  and scale globally
                </h2>
                <p className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                  Take advantage of the latest generative AI innovations with easy access to a choice of high-performing
                  models from leading AI companies like AI21 Labs, Anthropic, Cohere, DeepSeek, Luma AI, Meta, Mistral
                  AI, OpenAI, Qwen, Stability AI, TwelveLabs, Writer, and Amazon.
                </p>
              </div>
              <ul className="flex max-w-content-list flex-col gap-6" aria-label="Benefits">
                <li className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 text-brand-500 dark:text-accent-dark" aria-hidden>
                    <CheckCircleIcon className="h-6 w-6" />
                  </span>
                  <span className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                    We reduced customer support calls by 40% by sending a geo-link with every delivery confirmation.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 text-brand-500 dark:text-accent-dark" aria-hidden>
                    <CheckCircleIcon className="h-6 w-6" />
                  </span>
                  <span className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                    Using Navixy&apos;s Time Machine, we replayed the exact route and proved our van was at their
                    secondary gate. Case closed in 5 minutes.
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="font-body text-subtitle font-semibold leading-[1.3] text-brand-500 hover:underline dark:text-accent-dark"
              >
                Button (optional)
              </a>
            </div>
            {/* Right column: image — анимированный синий фон + картинка */}
            <div className="relative min-w-0 w-full overflow-hidden rounded-btn aspect-[5/3]">
              <div
                className="absolute -inset-6 bg-gradient-shift animate-gradient-shift blur-xl bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,#1a96d6_0%,#0084d1_40%,#0069b3_75%,#044878_100%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,#38bdf8_0%,#2548a2_35%,#1e3a8a_70%,transparent_100%)]"
                aria-hidden
              />
              <img
                src="/images/img-product.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center scale-[0.92] -translate-x-[10%] translate-y-[5%]"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          text+img 02 from the design system — use and customize as needed
        </p>
      </div>
      <section
        id="text-img-02"
        className="bg-surface-default py-24 dark:bg-surface-dark-primary md:py-section-py lg:py-section-py"
        aria-label="Text + Image 02"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-16">
            {/* Left column on lg: image (order-1); on mobile — ниже текста (order-2); анимированный синий фон */}
            <div className="relative min-w-0 w-full overflow-hidden rounded-btn aspect-[5/3] order-2 lg:order-1">
              <div
                className="absolute -inset-6 bg-gradient-shift animate-gradient-shift blur-xl bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,#1a96d6_0%,#0084d1_40%,#0069b3_75%,#044878_100%)] dark:bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,#38bdf8_0%,#2548a2_35%,#1e3a8a_70%,transparent_100%)]"
                aria-hidden
              />
              <img
                src="/images/img-product.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center scale-[0.92] -translate-x-[10%] translate-y-[5%]"
              />
            </div>
            {/* Right column on lg: text (order-2), сужено; on mobile — первым (order-1) */}
            <div className="flex flex-col gap-7 order-1 lg:order-2 lg:max-w-content">
              <div className="flex flex-col gap-7">
                <h2 className="font-display text-4xl font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                  Explore Location Intelligence
                </h2>
                <div className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 text-brand-500 dark:text-accent-dark" aria-hidden>
                    <CheckCircleIcon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-body text-subtitle font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                      Last-Mile Transparency
                    </p>
                    <p className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                      Get full visibility into delivery operations and resolve disputes in minutes. See how fleets use
                      Navixy for last-mile transparency and proof of delivery.
                    </p>
                  </div>
                </div>
              </div>
              <ul className="flex max-w-content-list flex-col gap-6" aria-label="Benefits">
                <li className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 text-brand-500 dark:text-accent-dark" aria-hidden>
                    <CheckCircleIcon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-body text-subtitle font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                      Last-Mile Transparency
                    </p>
                    <p className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                      We reduced customer support calls by 40% by sending a geo-link with every delivery confirmation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-0.5 shrink-0 text-brand-500 dark:text-accent-dark" aria-hidden>
                    <CheckCircleIcon className="h-6 w-6" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="font-body text-subtitle font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                      Time Machine
                    </p>
                    <p className="font-body text-base leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                      Using Navixy&apos;s Time Machine, we replayed the exact route and proved our van was at their
                      secondary gate. Case closed in 5 minutes.
                    </p>
                  </div>
                </li>
              </ul>
              <a
                href="#"
                className="font-body text-subtitle font-semibold leading-[1.3] text-brand-500 hover:underline dark:text-accent-dark"
              >
                Button (optional)
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          features 01
        </p>
      </div>
      {/* ─── Features 01 (Figma 8034:83652) — 3 cards, design system tokens ─────
          Card: bg-white, dark:bg-surface-dark-bright; border-neutral-200, dark:border-border-dark; rounded-lg (8px); p-6.
          Icon box: 60×60, bg-brand-500/15, rounded-lg. Title: font-display font-semibold text-xl leading-[1.3] text-content-primary. Body: text-sm leading-[1.4] text-content-secondary. Link: text-sm text-brand-500 dark:text-accent-dark + ArrowRightIcon.
      ───────────────────────────────────────────────────────────────────────── */}
      <section
        id="features"
        className="bg-surface-default py-24 dark:bg-surface-dark-primary md:py-section-py lg:py-section-py"
        aria-label="Features"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven.",
                href: "https://www.navixy.com/en/iot-logic",
              },
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "",
              },
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "",
              },
            ].map((card, i) => (
              <article
                key={i}
                className={`relative mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col rounded-lg border border-slate-100 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-[#131F3B] ${card.href ? "transition-shadow duration-300 ease-out hover:shadow-xl dark:hover:shadow-glow-blue-card" : ""}`}
              >
                {card.href ? (
                  <a href={card.href} className="absolute inset-0 z-10 rounded-lg" aria-label={`${card.title}, open link`} />
                ) : null}
                <div className="flex flex-col gap-9">
                  <div
                    className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-brand-500/15 dark:bg-accent-dark/15"
                    aria-hidden
                  >
                    <SolutionLogoIcon className="h-[35px] w-[36px] text-brand-500 dark:text-accent-dark" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl font-semibold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                        {card.title}
                      </h3>
                      <p className="line-clamp-4 font-body text-sm leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                        {card.body}
                      </p>
                    </div>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="group inline-flex items-center gap-1.5 font-body text-sm leading-[1.4] text-brand-500 no-underline hover:no-underline dark:text-accent-dark"
                      >
                        See solutions
                        <ArrowRightIcon className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          features 02
        </p>
      </div>
      <section
        id="features-02"
        className="bg-surface-default py-24 dark:bg-surface-dark-primary md:py-section-py lg:py-section-py"
        aria-label="Features 02"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary mb-12 md:mb-14">
            Features 02 heading
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven.",
                href: "https://www.navixy.com/en/iot-logic",
              },
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "",
              },
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "",
              },
            ].map((card, i) => (
              <article
                key={i}
                className={`relative mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col rounded-lg border border-slate-100 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-[#131F3B] ${card.href ? "transition-shadow duration-300 ease-out hover:shadow-xl dark:hover:shadow-glow-blue-card" : ""}`}
              >
                {card.href ? (
                  <a href={card.href} className="absolute inset-0 z-10 rounded-lg" aria-label={`${card.title}, open link`} />
                ) : null}
                <div className="flex flex-col gap-9">
                  <div
                    className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-brand-500/15 dark:bg-accent-dark/15"
                    aria-hidden
                  >
                    <SolutionLogoIcon className="h-[35px] w-[36px] text-brand-500 dark:text-accent-dark" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <h3 className="font-display text-xl font-semibold leading-[1.3] text-content-primary dark:text-text-dark-primary">
                        {card.title}
                      </h3>
                      <p className="line-clamp-4 font-body text-sm leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                        {card.body}
                      </p>
                    </div>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="group inline-flex items-center gap-1.5 font-body text-sm leading-[1.4] text-brand-500 no-underline hover:no-underline dark:text-accent-dark"
                      >
                        See solutions
                        <ArrowRightIcon className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="border-t border-neutral-200 bg-white px-4 py-3 text-center dark:border-border-dark dark:bg-surface-dark-primary sm:px-6 lg:px-8">
        <p className="font-body text-xs text-content-muted dark:text-text-dark-secondary">
          features 03 (Figma 8053:40189)
        </p>
      </div>
      {/* ─── Features 03 — 3 cards, Figma 8053:40189: chip "Use case" + body + See solutions ─── */}
      <section
        id="features-03"
        className="bg-surface-default py-24 dark:bg-surface-dark-primary md:py-section-py lg:py-section-py"
        aria-label="Features 03"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary mb-12 text-center md:mb-14">
            Features 03 heading
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven.",
                href: "https://www.navixy.com/en/iot-logic",
              },
              {
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "",
              },
              {
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "",
              },
            ].map((card, i) => (
              <article
                key={i}
                className={`relative mx-auto flex min-h-0 w-full max-w-sm flex-1 flex-col rounded-lg border border-slate-100 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-[#131F3B] ${card.href ? "transition-shadow duration-300 ease-out hover:shadow-xl dark:hover:shadow-glow-blue-card" : ""}`}
              >
                {card.href ? (
                  <a href={card.href} className="absolute inset-0 z-10 rounded-lg" aria-label="Open link" />
                ) : null}
                <div className="flex flex-col gap-6">
                  <div
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-500 bg-brand-500/15 px-4 py-2 dark:border-accent-dark dark:bg-accent-dark/15 w-fit"
                    aria-hidden
                  >
                    <ActivityZoneIcon className="h-4 w-4 shrink-0 text-brand-500 dark:text-accent-dark" />
                    <span className="font-body text-xs font-normal leading-normal text-brand-500 dark:text-accent-dark">
                      Use case
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="line-clamp-4 font-body text-sm leading-[1.4] text-content-secondary dark:text-text-dark-secondary">
                      {card.body}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="group inline-flex items-center gap-1.5 font-body text-sm leading-[1.4] text-brand-500 no-underline hover:no-underline dark:text-accent-dark"
                      >
                        See solutions
                        <ArrowRightIcon className="h-[18px] w-[18px] shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center md:mt-14">
            <a
              href="#"
              className="flex h-btn min-w-btn-min items-center justify-center rounded-btn border-2 border-brand-500 bg-transparent px-6 py-3.5 font-body text-button font-semibold text-brand-500 transition-opacity hover:bg-brand-500/10 hover:opacity-90 dark:border-accent-dark dark:text-accent-dark dark:hover:bg-accent-dark/10"
              aria-label="View all features"
            >
              View all features
            </a>
          </div>
        </div>
      </section>
      <section id="product" className="min-h-[50vh] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-neutral-900">
            Product
          </h2>
        </div>
      </section>
      <section id="pricing" className="min-h-[50vh] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-neutral-900">
            Pricing
          </h2>
        </div>
      </section>
      <section id="about" className="min-h-[50vh] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-neutral-900">
            About
          </h2>
        </div>
      </section>
      {/* ─── CTA (Figma 8053:48260) — gradient block, heading + description + primary button ─── */}
      <section id="cta" className="py-24 md:py-section-py lg:py-section-py" aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-slate-100 p-6 text-center shadow-md dark:border-slate-800 md:p-section-gap bg-gradient-to-b from-white via-white to-brand-200 dark:from-[#131F3B] dark:via-surface-dark-primary dark:to-surface-dark-primary"
          >
            {/* Mesh pattern — gradient sky-200 → sky-400, fades from bottom; light theme only. Grid as single SVG mask so full lines (not dots) show. */}
            <div
              className="pointer-events-none absolute inset-0 rounded-lg dark:opacity-0"
              style={{
                backgroundImage: "linear-gradient(to bottom, #bae6fd 0%, #38bdf8 100%)",
                maskImage: `linear-gradient(to bottom, transparent 0%, transparent 45%, black 85%, black 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 0h1v44H0zM0 0h44v1H0z' fill='white'/%3E%3C/svg%3E")`,
                maskSize: "100% 100%, 44px 44px",
                maskRepeat: "no-repeat, repeat",
                maskComposite: "intersect",
                WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, transparent 45%, black 85%, black 100%), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44'%3E%3Cpath d='M0 0h1v44H0zM0 0h44v1H0z' fill='white'/%3E%3C/svg%3E")`,
                WebkitMaskSize: "100% 100%, 44px 44px",
                WebkitMaskRepeat: "no-repeat, repeat",
                WebkitMaskComposite: "source-in",
              } as React.CSSProperties}
              aria-hidden
            />
            {/* 9 голубых квадратов без обводки — позиции по референсу (сетка 44×44); light theme only; анимация появления/исчезновения */}
            <div
              className="pointer-events-none absolute inset-0 rounded-lg dark:opacity-0"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, transparent 45%, black 85%, black 100%)",
                maskSize: "100% 100%",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 45%, black 85%, black 100%)",
                WebkitMaskSize: "100% 100%",
              } as React.CSSProperties}
              aria-hidden
            >
              <div className="absolute bottom-0 left-0 grid h-[264px] grid-cols-[repeat(24,44px)] grid-rows-[repeat(6,44px)] gap-0 animate-squares-fade" style={{ width: "min(100%, 1056px)" }}>
                {[
                  { row: 1, col: 1 },
                  { row: 1, col: 3 },
                  { row: 1, col: 6 },
                  { row: 1, col: 13 },
                  { row: 2, col: 1 },
                  { row: 2, col: 3 },
                  { row: 2, col: 8 },
                  { row: 3, col: 7 },
                  { row: 4, col: 9 },
                ].map(({ row, col }, i) => (
                  <div
                    key={i}
                    className="m-[4px] h-[36px] w-[36px] rounded-sm bg-sky-300"
                    style={{ gridRow: row, gridColumn: col }}
                  />
                ))}
              </div>
            </div>
            <div
              className="pointer-events-none absolute inset-0 rounded-lg opacity-0 dark:opacity-100 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_45%,black_85%,black_100%)] [mask-size:100%_100%] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_45%,black_85%,black_100%)] [-webkit-mask-size:100%_100%]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--hero-mesh-color) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--hero-mesh-color) 1px, transparent 1px)
                `,
                backgroundSize: "44px 44px",
              }}
              aria-hidden
            />
            {/* Decorative circles — layer blue uniform 300, plus darker (light); dark: sky-500 / blue-500 */}
            <div
              className="absolute bottom-0 left-0 h-[300px] w-[300px] -translate-x-1/2 translate-y-1/2 rounded-full bg-[#74D4FF] opacity-60 blur-[150px] mix-blend-darken pointer-events-none dark:bg-sky-500 dark:opacity-100 dark:mix-blend-normal"
              aria-hidden
            />
            <div
              className="absolute bottom-0 right-0 h-[300px] w-[300px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#53EAFD] opacity-60 blur-[150px] mix-blend-darken pointer-events-none dark:bg-blue-500 dark:opacity-100 dark:mix-blend-normal"
              aria-hidden
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex flex-col gap-4">
                <h2 className="font-display text-4xl font-bold leading-[1.3] text-content-primary dark:text-text-dark-primary md:text-5xl">
                  Get Field Visibility That Actually Works.{" "}
                  <br className="md:block" aria-hidden />
                  Start Today.
                </h2>
                <p className="font-body text-xl leading-[1.4] text-content-secondary dark:text-text-dark-secondary md:text-2xl">
                  Operations managers use Navixy FSM to dispatch faster, reduce check-in calls, and prove every job. Deploy in days, not months.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="flex h-btn min-w-btn-min items-center justify-center rounded-btn bg-brand-500 px-6 py-3.5 font-body text-button font-semibold text-white transition-opacity hover:opacity-90 dark:bg-accent-dark"
                  aria-label="Get Started"
                >
                  Get Started
                </a>
              </div>
              <p className="mt-6 font-body text-xs leading-[1.4] text-content-secondary dark:text-text-dark-secondary text-center">
                No hardware required. Works on any smartphone. Free trial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
