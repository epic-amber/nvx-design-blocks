import { HeroBlock } from "@/components/blocks/HeroBlock";
import { NavBar, NAV_HEIGHT } from "@/components/blocks/NavBar";

export default function Home() {
  return (
    <main style={{ paddingTop: `${NAV_HEIGHT}px` }}>
      <NavBar />
      <HeroBlock />
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
