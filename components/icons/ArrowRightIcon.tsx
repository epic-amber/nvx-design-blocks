/**
 * Arrow right — for links / "See solutions" CTA.
 * Use currentColor so parent can set color (e.g. text-brand-500).
 */
export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"
        fill="currentColor"
      />
    </svg>
  );
}
