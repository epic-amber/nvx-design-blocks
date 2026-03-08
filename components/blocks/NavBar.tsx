"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { slideDown, defaultTransition } from "@/lib/animations";

const SECTION_IDS = ["features", "product", "pricing", "about"] as const;

const NAV_HEIGHT = 72;

export function NavBar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 20],
    ["0 1px 3px 0 rgb(0 0 0 / 0.1)", "0 4px 6px -1px rgb(0 0 0 / 0.2)"]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            return;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="sticky left-0 right-0 top-0 z-50 w-full bg-neutral-900"
      style={{ boxShadow: shadow }}
      initial="hidden"
      animate="visible"
      variants={slideDown}
      transition={defaultTransition}
    >
      <nav className="mx-auto flex h-14 min-h-[44px] max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm sm:h-[72px] sm:flex-nowrap sm:gap-6 sm:px-6 lg:gap-8 lg:px-8">
        <a
          href="/"
          className="shrink-0 font-display font-semibold text-white"
        >
          Logo
        </a>
        <div className="flex flex-shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative capitalize transition-colors hover:text-white ${
                activeId === id ? "text-white" : "text-neutral-400"
              }`}
            >
              {id}
              {activeId === id && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-white" />
              )}
            </a>
          ))}
        </div>
        <a
          href="#cta"
          className="shrink-0 rounded-full bg-white px-4 py-2 font-medium text-neutral-900 transition-opacity hover:opacity-90"
        >
          CTA
        </a>
      </nav>
    </motion.header>
  );
}

export { NAV_HEIGHT };
