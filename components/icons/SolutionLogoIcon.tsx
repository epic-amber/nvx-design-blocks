/**
 * Solution / card logo (logo.svg) — 36×35.
 * Uses currentColor so parent can set color (e.g. text-brand-500, dark:text-accent-dark).
 */
export function SolutionLogoIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M14.4966 0.0903217C6.23218 1.53546 0.135482 8.71601 0 17.1159V18.0191L15.1288 8.98698V0L14.4966 0.0903217Z"
        fill="currentColor"
      />
      <path
        d="M35.1347 17.3417C35.0895 8.85149 28.9928 1.58062 20.6381 0.0903217L20.0059 0V9.0773L35.1347 18.2449V17.3417Z"
        fill="currentColor"
      />
      <path
        d="M1.12888 23.6191C2.39338 26.9159 4.5611 29.761 7.45138 31.7932C10.432 33.8706 13.9094 34.9996 17.5674 34.9996C21.1802 34.9996 24.6576 33.9158 27.593 31.8384C30.4833 29.8513 32.651 27.0514 33.9155 23.7998L34.051 23.3933L17.5222 13.3677L0.948242 23.2579L1.12888 23.6191Z"
        fill="currentColor"
      />
    </svg>
  );
}
