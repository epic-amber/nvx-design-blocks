import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "NVX Design Blocks",
  description: "Modular website block design system",
};

/**
 * Root layout: theme and base body styles.
 * - Inline script in <head> applies theme from localStorage (key: nvx-theme) before paint to avoid flash; adds .light or .dark to <html>. Do not remove.
 * - body: font-body, antialiased; light = bg-white + text-content-primary; dark = bg-surface-dark-primary + text-text-dark-primary. ThemeProvider syncs toggle with DOM and storage.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var k='nvx-theme';var t=localStorage.getItem(k);document.documentElement.classList.add(t==='dark'||t==='light'?t:'light');})();`,
          }}
        />
      </head>
      <body className="font-body antialiased bg-white text-content-primary dark:bg-surface-dark-primary dark:text-text-dark-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
