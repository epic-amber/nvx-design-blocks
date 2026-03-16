import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import { NavBar } from "@/components/blocks/NavBar";
import { ThemeToggleFloating } from "@/components/blocks/ThemeToggleFloating";

export const metadata: Metadata = {
  title: "NVX Design Blocks",
  description: "Modular website block design system",
};

/**
 * Root layout — single shell for the whole app.
 * Design: light/dark theme is set on <html>; body uses semantic color tokens.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Theme applied before paint (from localStorage "nvx-theme") to prevent flash. Do not remove. */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k='nvx-theme';var t=localStorage.getItem(k);document.documentElement.classList.add(t==='dark'||t==='light'?t:'light');})();`,
          }}
        />
      </head>
      {/* Light: white bg, dark text. Dark: surface-dark-primary bg, gray-200 body text. */}
      <body className="font-body antialiased bg-white text-content-primary dark:bg-surface-dark-primary dark:text-text-dark-secondary">
        <ThemeProvider>
          {/* Top nav: logo, links, theme toggle (syncs with html class and storage). */}
          <NavBar />
          {/* Main page content (hero, features, CTA, etc.). */}
          {children}
          {/* Floating theme toggle — bottom-right. */}
          <ThemeToggleFloating />
        </ThemeProvider>
      </body>
    </html>
  );
}
