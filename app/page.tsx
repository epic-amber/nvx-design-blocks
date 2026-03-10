import { HeroBlock } from "@/components/blocks/HeroBlock";
import { HeroBlock02 } from "@/components/blocks/HeroBlock02";
import { HeroBlock03 } from "@/components/blocks/HeroBlock03";
import { NavBar } from "@/components/blocks/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
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
      <section id="features" className="h-screen py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-neutral-900">
            Features
          </h2>
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
