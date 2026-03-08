"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { slideDown, defaultTransition } from "@/lib/animations";
import { useTheme } from "@/lib/ThemeContext";

/** Section ids used for in-page links and active state. Add/remove to match main sections. */
const SECTION_IDS = ["hero", "features", "product", "pricing", "about"] as const;

const NAV_HEIGHT = 56;

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/**
 * Sticky top navigation with section links and theme toggle.
 *
 * Design tokens: bg-surface-inverse (light) / bg-surface-dark-secondary (dark). Links use
 * text-text-inverse (active) and text-text-inverse-muted (inactive); active link has bottom
 * border. Theme button is 36×36px (h-9 w-9), no focus ring. Height: h-12 / sm:h-14; min-h-[44px]
 * for touch. Container matches page: max-w-7xl, px-4/sm:px-6/lg:px-8.
 *
 * Active section is derived from IntersectionObserver (rootMargin -30% -60%); ensure section
 * ids match SECTION_IDS and exist in the DOM.
 */
export function NavBar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  /** Shadow increases on scroll for depth; keep range [0, 20] in sync with header height if changed. */
  const shadow = useTransform(
    scrollY,
    [0, 20],
    ["0 1px 3px 0 rgb(0 0 0 / 0.1)", "0 4px 6px -1px rgb(0 0 0 / 0.2)"]
  );

  /** Track which section is in view to highlight the corresponding nav link. */
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
      className="sticky left-0 right-0 top-0 z-50 w-full bg-surface-inverse dark:bg-surface-dark-secondary"
      style={{ boxShadow: shadow }}
      initial="hidden"
      animate="visible"
      variants={slideDown}
      transition={defaultTransition}
    >
      <nav className="mx-auto flex h-12 min-h-[44px] max-w-7xl flex-wrap items-center justify-end gap-4 px-4 text-sm sm:h-14 sm:flex-nowrap sm:gap-6 sm:px-6 lg:gap-8 lg:px-8">
        <div className="flex flex-shrink-0 items-center gap-4 sm:gap-6 lg:gap-8">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative capitalize transition-colors hover:text-text-inverse ${
                activeId === id ? "text-text-inverse" : "text-text-inverse-muted"
              }`}
            >
              {id}
              {activeId === id && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-text-inverse" />
              )}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text-inverse transition-opacity hover:opacity-80 focus:outline-none"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

export { NAV_HEIGHT };
