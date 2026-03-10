"use client";

/**
 * Mileage By Weeks, km — stacked bar chart with staggered loop animation.
 * From navixy-system-web Hero A.
 */
import { useState, useEffect, useRef } from "react";

const data = [
  { week: "Dec 15", nonWork: 4000, weekend: 2200, work: 3100 },
  { week: "Dec 22", nonWork: 2000, weekend: 700, work: 900 },
  { week: "Dec 29", nonWork: 2200, weekend: 600, work: 900 },
  { week: "Jan 5", nonWork: 400, weekend: 0, work: 900 },
];

const MAX = 10000;
const CHART_H = 200;
const BAR_W = 40;
const GAP = 44;
const RADIUS = 5;

const SEGMENTS = [
  { key: "nonWork" as const, color: "#3988DA", label: "Non-Work Time" },
  { key: "weekend" as const, color: "#36C486", label: "Weekend" },
  { key: "work" as const, color: "#72DCFB", label: "Work Time" },
];

const yTicks = [0, 2500, 5000, 7500, 10000];
const SHADOW_NORMAL =
  "0 2px 4px rgba(57,136,218,0.06), 0 6px 16px rgba(57,136,218,0.1), 0 12px 32px rgba(57,136,218,0.12)";
const SHADOW_ELEVATED =
  "0 0 0 1px rgba(57,136,218,0.15), 0 8px 16px rgba(57,136,218,0.1), 0 16px 32px rgba(57,136,218,0.14), 0 32px 64px rgba(57,136,218,0.12), 0 0 40px rgba(57,136,218,0.08)";
const LABEL_W = 40;
const PAD_RIGHT = 8;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInCubic = (t: number) => t * t * t;

const BAR_DURATION = 900;
const HOLD_DURATION = 2500;
const STAGGER = 220;
const GAP_DURATION = 600;

type DataRow = (typeof data)[0];

function useStaggeredLoop(barCount: number) {
  const [progresses, setProgresses] = useState<number[]>(() => Array(barCount).fill(0));
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgresses(Array(barCount).fill(1));
      return;
    }
    const totalIn = BAR_DURATION + (barCount - 1) * STAGGER;
    const totalOut = BAR_DURATION + (barCount - 1) * STAGGER;
    const CYCLE = totalIn + HOLD_DURATION + totalOut + GAP_DURATION;

    startRef.current = null;
    const tick = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = (ts - startRef.current) % CYCLE;
      const next = Array.from({ length: barCount }, (_, i) => {
        const inStart = i * STAGGER;
        const inEnd = inStart + BAR_DURATION;
        const outStart = totalIn + HOLD_DURATION + (barCount - 1 - i) * STAGGER;
        const outEnd = outStart + BAR_DURATION;
        if (elapsed < inStart) return 0;
        if (elapsed < inEnd) return easeOutCubic((elapsed - inStart) / BAR_DURATION);
        if (elapsed < outStart) return 1;
        if (elapsed < outEnd) return 1 - easeInCubic((elapsed - outStart) / BAR_DURATION);
        return 0;
      });
      setProgresses(next);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [barCount]);

  return progresses;
}

function StackedBar({
  d,
  p,
  x,
  isHov,
}: {
  d: DataRow;
  p: number;
  x: number;
  isHov: boolean;
}) {
  const heights = SEGMENTS.map(({ key }) => (d[key] / MAX) * CHART_H * p);
  const totalH = heights.reduce((a, b) => a + b, 0);
  if (totalH < 0.5) return null;

  let currentY = CHART_H;
  const rects: JSX.Element[] = [];
  SEGMENTS.forEach(({ key, color }, si) => {
    const h = heights[si];
    if (h < 0.5) return;
    currentY -= h;
    const isLast = si === SEGMENTS.length - 1 || heights.slice(si + 1).every((v) => v < 0.5);
    const isFirst = si === 0;
    const top = currentY;
    const bottom = currentY + h;
    const left = x;
    const right = x + BAR_W;
    const r = isLast ? RADIUS : 0;
    const rb = isFirst ? RADIUS : 0;
    const path = [
      `M ${left + r} ${top}`,
      `H ${right - r}`,
      r ? `Q ${right} ${top} ${right} ${top + r}` : "",
      `V ${bottom - rb}`,
      rb ? `Q ${right} ${bottom} ${right - rb} ${bottom}` : "",
      `H ${left + rb}`,
      rb ? `Q ${left} ${bottom} ${left} ${bottom - rb}` : "",
      `V ${top + r}`,
      r ? `Q ${left} ${top} ${left + r} ${top}` : "",
      "Z",
    ].join(" ");
    rects.push(
      <path
        key={key}
        d={path}
        fill={color}
        opacity={isHov ? 0.82 : 1}
        style={{ transition: "opacity 0.15s" }}
      />
    );
  });
  return <>{rects}</>;
}

export default function MileageChart({ elevated = false }: { elevated?: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const progresses = useStaggeredLoop(data.length);
  const totalW = LABEL_W + data.length * (BAR_W + GAP) - GAP + PAD_RIGHT;

  return (
    <div
      className="ml-[180px] mt-[116px] w-fit shrink-0"
      style={{ transform: "scale(0.85)", transformOrigin: "top left" }}
    >
      <div
        className="rounded-[22px] bg-white"
        style={{
          padding: "18.4px",
          boxShadow: elevated ? SHADOW_ELEVATED : SHADOW_NORMAL,
          transition: "box-shadow 0.6s ease",
        }}
      >
        <div className="mb-3">
          <p className="m-0 text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">Weekly Overview</p>
          <h3 className="mt-0.5 font-display text-[19px] font-extrabold tracking-tight text-neutral-900">
            Mileage By Weeks, km
          </h3>
        </div>
        <svg width={totalW} height={CHART_H + 28} className="block overflow-visible">
          {yTicks.map((val) => {
            const y = CHART_H - (val / MAX) * CHART_H;
            return (
              <g key={val}>
                <line
                  x1={LABEL_W}
                  y1={y}
                  x2={totalW - PAD_RIGHT}
                  y2={y}
                  stroke={val === 0 ? "#e5e7eb" : "#f0f1f3"}
                  strokeWidth={val === 0 ? 1.5 : 1}
                />
                <text
                  x={LABEL_W - 8}
                  y={y + 4}
                  textAnchor="end"
                  fill="#9CA3AF"
                  fontSize={10}
                  fontFamily="inherit"
                >
                  {val === 0 ? "" : val >= 1000 ? `${val / 1000}k` : val}
                </text>
              </g>
            );
          })}
          {data.map((d, i) => {
            const x = LABEL_W + i * (BAR_W + GAP);
            const p = progresses[i];
            const isHov = hovered === i;
            const total = d.nonWork + d.weekend + d.work;
            const totalH = (total / MAX) * CHART_H * p;
            return (
              <g
                key={d.week}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "default" }}
              >
                <StackedBar d={d} p={p} x={x} isHov={isHov} />
                {isHov && p > 0.1 && (
                  <text
                    x={x + BAR_W / 2}
                    y={CHART_H - totalH - 8}
                    textAnchor="middle"
                    fill="#555"
                    fontSize={10}
                    fontWeight={600}
                    fontFamily="inherit"
                  >
                    {(total / 1000).toFixed(1)}k
                  </text>
                )}
                <text
                  x={x + BAR_W / 2}
                  y={CHART_H + 18}
                  textAnchor="middle"
                  fill="#9CA3AF"
                  fontSize={10}
                  fontFamily="inherit"
                >
                  {d.week}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="mt-3 flex gap-4 border-t border-[#F3F4F6] pt-3">
          {SEGMENTS.map(({ key, color, label }) => (
            <div key={key} className="flex items-center gap-1.5">
              <div
                className="h-2.5 w-2.5 shrink-0 rounded-sm"
                style={{ background: color }}
              />
              <span className="text-[11px] text-[#9CA3AF]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
