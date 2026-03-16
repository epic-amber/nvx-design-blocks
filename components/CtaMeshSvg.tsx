"use client";

/**
 * CTA mesh: CSS-built grid + squares (no SVG path).
 * Same look as original: grid with gradient (sky-200 → sky-400 light, hero-mesh dark), 10 squares.
 * Same scale (1.2) on all viewports. Block pinned to bottom of banner on all breakpoints.
 */
/** Grid: cell 41×41, offset (19,23) so each square fits exactly one cell (viewBox 1100×439). */
const VIEW_W = 1100;
const VIEW_H = 439;
const CELL = 41;
const OFFSET_X = 19;
const OFFSET_Y = 23;
const CELL_W_PCT = (CELL / VIEW_W) * 100;
const CELL_H_PCT = (CELL / VIEW_H) * 100;
const OFFSET_X_PCT = (OFFSET_X / VIEW_W) * 100;
const OFFSET_Y_PCT = (OFFSET_Y / VIEW_H) * 100;

/** Squares snapped to grid cells so each fits exactly one cell: [x, y] top-left in viewBox units, size 41×41. */
const SQUARES: Array<[number, number]> = [
  [183, 310],
  [265, 351],
  [60, 269],
  [19, 351],
  [716, 351],
  [839, 269],
  [921, 392],
  [1003, 351],
  [962, 310],
  [60, 392],
];

/** Light theme square colors (randomly distributed across 10 squares). */
const LIGHT_SQ_COLORS = ["#BAEFFF", "#C0E9FF", "#D2F4FF"];
/** Dark theme square colors (same distribution pattern). */
const DARK_SQ_COLORS = ["#132559", "#324783", "#081A39"];
/** Color index per square (0,1,2) — varied distribution. */
const SQUARE_COLOR_INDEX = [0, 2, 1, 0, 2, 1, 2, 0, 1, 2];

/** Animation: first 2–3 squares (delay 0), rest random: some instant (0.3s), others delayed (0.55s); pop-in appearance. */
const SQUARE_APPEAR_DELAYS_S = [0, 0.3, 0.3, 0.55, 0, 0.3, 0.3, 0.55, 0, 0.55];

/** Aspect ratio of the design area (1100×439) so mesh cells and squares stay exactly square. */
const VIEW_ASPECT = VIEW_W / VIEW_H;

export function CtaMeshSvg({ className }: { className?: string }) {
  return (
    <div
      className={
        "absolute inset-x-0 bottom-0 left-0 right-0 top-0 origin-bottom scale-[1.056] overflow-hidden [--cta-mesh-from:rgba(186,230,253,0.7)] [--cta-mesh-to:rgba(56,189,248,0.65)] dark:[--cta-mesh-from:rgba(165,178,230,0.22)] dark:[--cta-mesh-to:rgba(165,178,230,0.12)] " +
        (className ?? "")
      }
      aria-hidden
    >
      {/* Inner wrapper: cover — aspect 1100:439, fills area so mesh visible and cells square (cqh = parent height). */}
      <div className="absolute inset-0 overflow-hidden" style={{ containerType: "size" } as React.CSSProperties}>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 overflow-hidden"
          style={{
            aspectRatio: VIEW_ASPECT,
            width: "max(100%, calc(100cqh * 1100 / 439))",
            height: "auto",
            maxHeight: "none",
          } as React.CSSProperties}
        >
          <div className="absolute inset-0">
            {/* Squares first (under mesh), then grid on top. Animation: loop — appear staggered, stay, then reset. */}
            <style
              dangerouslySetInnerHTML={{
                __html: [
                  "@keyframes cta-square-appear { 0% { opacity: 0 } 0.5% { opacity: 1 } 87% { opacity: 1 } 100% { opacity: 0 } }",
                  ...SQUARES.map(
                    (_, i) =>
                      `.dark .cta-mesh-sq-${i} { background-color: ${DARK_SQ_COLORS[SQUARE_COLOR_INDEX[i]]} !important; }`
                  ),
                ].join("\n"),
              }}
            />
            <div className="absolute inset-0 overflow-hidden">
              {SQUARES.map(([x, y], i) => (
                <div
                  key={i}
                  className={`absolute cta-mesh-sq-${i}`}
                  style={{
                    left: `${(x / VIEW_W) * 100}%`,
                    top: `${((y - 1) / VIEW_H) * 100}%`,
                    width: `${CELL_W_PCT}%`,
                    aspectRatio: "1",
                    height: "auto",
                    backgroundColor: LIGHT_SQ_COLORS[SQUARE_COLOR_INDEX[i]],
                    opacity: 0,
                    animation: "cta-square-appear 4s infinite",
                    animationDelay: `${SQUARE_APPEAR_DELAYS_S[i]}s`,
                  }}
                />
              ))}
            </div>
            {/* Grid (mesh) above squares. */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, var(--cta-mesh-from), var(--cta-mesh-to))",
                maskImage: `
                  linear-gradient(to right, black 1px, transparent 1px),
                  linear-gradient(to bottom, black 1px, transparent 1px)
                `,
                maskSize: `${CELL_W_PCT}% ${CELL_H_PCT}%`,
                maskPosition: `${OFFSET_X_PCT}% ${OFFSET_Y_PCT}%`,
                WebkitMaskImage: `
                  linear-gradient(to right, black 1px, transparent 1px),
                  linear-gradient(to bottom, black 1px, transparent 1px)
                `,
                WebkitMaskSize: `${CELL_W_PCT}% ${CELL_H_PCT}%`,
                WebkitMaskPosition: `${OFFSET_X_PCT}% ${OFFSET_Y_PCT}%`,
              } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
