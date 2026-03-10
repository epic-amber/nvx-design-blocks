"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { slideDown, defaultTransition } from "@/lib/animations";
import { useTheme } from "@/lib/ThemeContext";

/** Section ids for in-page links; design-system is a route. */
const SECTION_IDS = ["hero", "text-img", "features", "product", "pricing", "about"] as const;

const NAV_ITEMS: { id: string; label: string; href: string }[] = [
  ...SECTION_IDS.map((id) => ({
    id,
    label: id === "text-img" ? "text+img" : id,
    href: `#${id}`,
  })),
  { id: "design-system", label: "Design System", href: "/design-system" },
];

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

function BurgerIcon({ className, open }: { className?: string; open: boolean }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      {open ? (
        <path d="M18 6L6 18M6 6l12 12" />
      ) : (
        <>
          <path d="M3 12h18M3 6h18M3 18h18" />
        </>
      )}
    </svg>
  );
}

/**
 * Sticky top navigation with section links, Design System link, and theme toggle.
 * Mobile: burger icon opens overlay with links. Desktop: inline links.
 * Used only on the design system page for visual reference.
 */
export function NavBar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 20],
    ["0 1px 3px 0 rgb(0 0 0 / 0.1)", "0 4px 6px -1px rgb(0 0 0 / 0.2)"]
  );

  const isDesignSystem = pathname === "/design-system";

  useEffect(() => {
    if (isDesignSystem) return;
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
  }, [isDesignSystem]);

  const effectiveActiveId = isDesignSystem ? "design-system" : activeId;

  const navLinks = (
    <>
      {NAV_ITEMS.map((item) => {
        const isActive = effectiveActiveId === item.id;
        const isHash = item.href.startsWith("#");
        const href = isHash && pathname !== "/" ? `/${item.href}` : item.href;
        const content = (
          <>
            {item.label}
            {isActive && (
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-text-inverse dark:bg-text-inverse" />
            )}
          </>
        );
        const className = `relative capitalize transition-colors hover:text-text-inverse ${
          isActive ? "text-text-inverse" : "text-text-inverse-muted"
        }`;
        if (isHash) {
          return (
            <a
              key={item.id}
              href={href}
              className={className}
              onClick={() => setMobileOpen(false)}
            >
              {content}
            </a>
          );
        }
        return (
          <Link
            key={item.id}
            href={item.href}
            className={className}
            onClick={() => setMobileOpen(false)}
          >
            {content}
          </Link>
        );
      })}
    </>
  );

  return (
    <motion.header
      className="sticky left-0 right-0 top-0 z-50 w-full bg-surface-inverse dark:bg-surface-dark-secondary"
      style={{ boxShadow: shadow }}
      initial="hidden"
      animate="visible"
      variants={slideDown}
      transition={defaultTransition}
    >
      <nav className="mx-auto flex h-12 min-h-[44px] max-w-7xl items-center justify-end gap-4 px-4 text-sm sm:h-14 sm:gap-6 sm:px-6 lg:gap-8 lg:px-8">
        {/* Desktop: always visible links */}
        <div className="hidden flex-shrink-0 items-center gap-4 md:flex md:gap-6 lg:gap-8">
          {navLinks}
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text-inverse transition-opacity hover:opacity-80 focus:outline-none"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile: burger + theme, and overlay when open */}
        <div className="flex flex-shrink-0 items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-text-inverse transition-opacity hover:opacity-80 focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <BurgerIcon open={mobileOpen} />
          </button>
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="absolute left-0 right-0 top-full z-40 border-t border-white/10 bg-surface-inverse dark:bg-surface-dark-secondary md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive = effectiveActiveId === item.id;
                const isHash = item.href.startsWith("#");
                const href = isHash && pathname !== "/" ? `/${item.href}` : item.href;
                const className = `rounded-lg px-4 py-3 text-left capitalize transition-colors ${
                  isActive ? "bg-white/10 text-text-inverse" : "text-text-inverse-muted hover:bg-white/5 hover:text-text-inverse"
                }`;
                if (isHash) {
                  return (
                    <a key={item.id} href={href} className={className} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </a>
                  );
                }
                return (
                  <Link key={item.id} href={item.href} className={className} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export { NAV_HEIGHT };
