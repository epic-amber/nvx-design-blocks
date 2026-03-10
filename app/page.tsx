import { HeroBlock } from "@/components/blocks/HeroBlock";
import { HeroBlock02 } from "@/components/blocks/HeroBlock02";
import { HeroBlock03 } from "@/components/blocks/HeroBlock03";
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
                className="absolute inset-0 bg-gradient-shift bg-[linear-gradient(90deg,#0084d1_0%,#38bdf8_50%,#0084d1_100%)] dark:bg-[linear-gradient(90deg,#1e3a8a_0%,#38bdf8_50%,#1e3a8a_100%)] animate-gradient-shift"
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
                className="absolute inset-0 bg-gradient-shift bg-[linear-gradient(90deg,#0084d1_0%,#38bdf8_50%,#0084d1_100%)] dark:bg-[linear-gradient(90deg,#1e3a8a_0%,#38bdf8_50%,#1e3a8a_100%)] animate-gradient-shift"
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
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven.",
                href: "#",
              },
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "#",
              },
              {
                title: "Default card name",
                body: "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations. Make data-driven decisions. Make data-driven operations. Make data-driven decisions. Make data-drive...",
                href: "#",
              },
            ].map((card, i) => (
              <article
                key={i}
                className="flex min-h-0 flex-1 flex-col rounded-lg border border-neutral-200 bg-white p-6 dark:border-border-dark dark:bg-slate-800"
              >
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
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1.5 font-body text-sm leading-[1.4] text-brand-500 hover:underline dark:text-accent-dark"
                    >
                      See solutions
                      <ArrowRightIcon className="h-[18px] w-[18px] shrink-0" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
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
      <section id="cta" className="min-h-[30vh] py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-neutral-900">
            CTA
          </h2>
        </div>
      </section>
    </main>
  );
}
