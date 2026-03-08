"use client";

/**
 * Mileage Distribution dashboard — from navixy-system-web Hero A.
 * Donut chart, legend with progress bars, variant cycling and shimmer animations.
 */
import { useRef, useEffect, useState } from "react";

const C = 2 * Math.PI * 70;
const BASE_TOTAL = 13352;
const BASE_SEGS = [
  { pct: 0.58, miles: 7744 },
  { pct: 0.27, miles: 3605 },
  { pct: 0.15, miles: 2003 },
];
const BAR_PCTS = [58, 37.5, 15.6];
const VARIANTS = [
  { total: 13352, miles: [7744, 3605, 2003], pcts: [58.0, 27.0, 15.0] },
  { total: 14120, miles: [8190, 3820, 2110], pcts: [58.0, 27.1, 14.9] },
  { total: 12780, miles: [7210, 3620, 1950], pcts: [56.4, 28.3, 15.3] },
  { total: 13890, miles: [8200, 3480, 2210], pcts: [59.0, 25.1, 15.9] },
  { total: 13352, miles: [7744, 3605, 2003], pcts: [58.0, 27.0, 15.0] },
];
const SEG_NAMES = ["Work Time", "Non-Work Time", "Weekend"];
const SEG_COLORS = ["#3988DA", "#72DCFB", "#B28FE8"];

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const SHADOW_NORMAL =
  "0 2px 4px rgba(57,136,218,0.06), 0 6px 16px rgba(57,136,218,0.1), 0 12px 32px rgba(57,136,218,0.12)";
const SHADOW_ELEVATED =
  "0 0 0 1px rgba(57,136,218,0.15), 0 8px 16px rgba(57,136,218,0.1), 0 16px 32px rgba(57,136,218,0.14), 0 32px 64px rgba(57,136,218,0.12), 0 0 40px rgba(57,136,218,0.08)";

export default function HeroADashboard({ elevated = false }: { elevated?: boolean }) {
  const segRefs = [useRef<SVGCircleElement>(null), useRef<SVGCircleElement>(null), useRef<SVGCircleElement>(null)];
  const barRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const metaRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const gapRefs = [useRef<SVGLineElement>(null), useRef<SVGLineElement>(null), useRef<SVGLineElement>(null)];
  const segGroupRef = useRef<SVGGElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);

  const [tooltip, setTooltip] = useState({ show: false, text: "", x: 0, y: 0 });
  const [hoveredSeg, setHoveredSeg] = useState<number | null>(null);

  const rafRef = useRef<number | null>(null);
  const entranceDoneRef = useRef(false);
  const curMilesRef = useRef([...BASE_SEGS.map((s) => s.miles)]);
  const curPctsRef = useRef([...BAR_PCTS]);
  const curTotalRef = useRef(BASE_TOTAL);
  const variantIdxRef = useRef(0);
  const variantLastRef = useRef<number | null>(null);
  const transStartRef = useRef<{
    from: { miles: number[]; pcts: number[]; total: number };
    to: (typeof VARIANTS)[0];
    start: number;
  } | null>(null);
  const counterStartRef = useRef<number | null>(null);
  const counterDoneRef = useRef(false);

  const VARIANT_HOLD_MS = 6000;
  const VARIANT_TRANS_MS = 2400;
  const ENTRANCE_START = 0.12;
  const ENTRANCE_DUR = 1400;

  useEffect(() => {
    const segEls = segRefs.map((r) => r.current);
    const barEls = barRefs.map((r) => r.current);
    const metaEls = metaRefs.map((r) => r.current);
    const gapEls = gapRefs.map((r) => r.current);
    const segGroup = segGroupRef.current;
    const counter = counterRef.current;

    if (
      !segGroup ||
      !counter ||
      segEls.some((e) => !e) ||
      barEls.some((e) => !e) ||
      metaEls.some((e) => !e) ||
      gapEls.some((e) => !e)
    ) {
      return;
    }

    let startTime: number | null = null;
    let globalRot = 0;

    function applyAll(rot: number) {
      segGroup.style.transform = `rotate(${-90 + rot}deg)`;
      const curPcts = curPctsRef.current;
      const total = curPcts.reduce((a, v) => a + v, 0) || 100;
      const fracs = curPcts.map((p) => p / total);
      let cum = 0;
      fracs.forEach((frac, i) => {
        const dash = frac * C;
        const gap = C - dash;
        const offset = -(cum * C);
        segEls[i]!.style.strokeDasharray = `${dash} ${gap}`;
        segEls[i]!.style.strokeDashoffset = `${offset}`;
        cum += frac;
      });
      const boundaries = [0, fracs[0], fracs[0] + fracs[1]];
      boundaries.forEach((b, i) => {
        gapEls[i]!.setAttribute("transform", `rotate(${b * 360 + rot} 100 100)`);
        gapEls[i]!.style.opacity = "1";
      });
    }

    function applySegmentsPartial(level: number) {
      let cum = 0;
      BASE_SEGS.forEach((s, i) => {
        const sp = Math.max(0, Math.min(1, (level - cum) / s.pct));
        const dash = sp * s.pct * C;
        const gap = C - dash;
        const offset = -(cum * C);
        segEls[i]!.style.strokeDasharray = `${dash} ${gap}`;
        segEls[i]!.style.strokeDashoffset = `${offset}`;
        cum += s.pct;
      });
    }

    function applyBars() {
      curPctsRef.current.forEach((pct, i) => {
        barEls[i]!.style.width = `${Math.max(pct, 0.5)}%`;
      });
    }

    function applyMeta() {
      curMilesRef.current.forEach((miles, i) => {
        const pct = curPctsRef.current[i];
        metaEls[i]!.textContent = `${Math.round(miles).toLocaleString("en-US")} mi · ${pct.toFixed(1)}%`;
      });
    }

    function applyCounter() {
      counter.textContent = Math.round(curTotalRef.current).toLocaleString("en-US");
    }

    function tick(now: number) {
      rafRef.current = requestAnimationFrame(tick);
      try {
        if (!startTime) startTime = now;
        const elapsed = now - startTime;

        if (!entranceDoneRef.current) {
          const entranceElapsed = elapsed - ENTRANCE_START * 1000;
          let level = 0;
          if (entranceElapsed > 0) {
            level = easeOutExpo(Math.min(entranceElapsed / ENTRANCE_DUR, 1));
            curPctsRef.current = BASE_SEGS.map((s) => s.pct * level * 100);
            applySegmentsPartial(level);
            if (level >= 1) {
              entranceDoneRef.current = true;
              curPctsRef.current = [...BAR_PCTS];
              barEls.forEach((el, i) => {
                el!.style.width = `${BAR_PCTS[i]}%`;
              });
              applyMeta();
            }
          }
          if (elapsed > ENTRANCE_START * 1000 + 200 && !counterDoneRef.current) {
            if (!counterStartRef.current) counterStartRef.current = now;
            const t = Math.min((now - counterStartRef.current) / 1500, 1);
            counter.textContent = Math.round(easeOutExpo(t) * BASE_TOTAL).toLocaleString("en-US");
            if (t >= 1) {
              counterDoneRef.current = true;
              curTotalRef.current = BASE_TOTAL;
            }
          }
          globalRot += 0.01;
          segGroup.style.transform = `rotate(${-90 + globalRot}deg)`;
          const tot = curPctsRef.current.reduce((a, v) => a + v, 0) || 100;
          const bf = [0, curPctsRef.current[0] / tot, (curPctsRef.current[0] + curPctsRef.current[1]) / tot];
          const gapOpacity = Math.max(0, Math.min(1, (level - 0.3) / 0.7));
          bf.forEach((b, i) => {
            gapEls[i]!.setAttribute("transform", `rotate(${b * 360 + globalRot} 100 100)`);
            gapEls[i]!.style.opacity = String(gapOpacity);
          });
          return;
        }

        globalRot += 0.008;

        if (transStartRef.current === null) {
          if (variantLastRef.current === null) variantLastRef.current = now;
          if (now - variantLastRef.current < VARIANT_HOLD_MS) {
            applyAll(globalRot);
            return;
          }
          const variantFrom = {
            miles: [...curMilesRef.current],
            pcts: [...curPctsRef.current],
            total: curTotalRef.current,
          };
          variantIdxRef.current = (variantIdxRef.current + 1) % VARIANTS.length;
          const variantTo = VARIANTS[variantIdxRef.current];
          transStartRef.current = { from: variantFrom, to: variantTo, start: now };
          metaEls.forEach((el) => el?.classList.add("mileage-meta-updating"));
          setTimeout(() => metaEls.forEach((el) => el?.classList.remove("mileage-meta-updating")), 300);
        } else {
          const trans = transStartRef.current;
          const t = Math.min((now - trans.start) / VARIANT_TRANS_MS, 1);
          const e = easeOutCubic(t);
          curTotalRef.current = trans.from.total + (trans.to.total - trans.from.total) * e;
          for (let i = 0; i < 3; i++) {
            curMilesRef.current[i] = trans.from.miles[i] + (trans.to.miles[i] - trans.from.miles[i]) * e;
            curPctsRef.current[i] = trans.from.pcts[i] + (trans.to.pcts[i] - trans.from.pcts[i]) * e;
          }
          applyBars();
          applyMeta();
          applyCounter();
          if (t >= 1) {
            transStartRef.current = null;
            variantLastRef.current = now;
          }
        }

        applyAll(globalRot);
      } catch (err) {
        console.warn("[HeroADashboard] animation tick error:", err);
      }
    }

    const handleVisibility = () => {
      if (document.visibilityState === "visible" && transStartRef.current === null) {
        variantLastRef.current = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const handleSegMouseEnter = (i: number, e: React.MouseEvent) => {
    const miles = curMilesRef.current[i] ?? BASE_SEGS[i].miles;
    const pct = curPctsRef.current[i] ?? BASE_SEGS[i].pct * 100;
    setTooltip({
      show: true,
      text: `${SEG_NAMES[i]}: ${Math.round(miles).toLocaleString()} mi · ${pct.toFixed(1)}%`,
      x: e.clientX,
      y: e.clientY,
    });
  };
  const handleSegMouseMove = (e: React.MouseEvent) =>
    setTooltip((t) => (t.show ? { ...t, x: e.clientX, y: e.clientY } : t));
  const handleSegMouseLeave = () => setTooltip((t) => ({ ...t, show: false }));
  const handleLegendEnter = (i: number) => setHoveredSeg(i);
  const handleLegendLeave = () => setHoveredSeg(null);

  return (
    <div className="flex-1 w-full max-w-[560px] scale-[0.88] origin-left">
      <div
        className="mileage-tooltip"
        style={{
          opacity: tooltip.show ? 1 : 0,
          transform: tooltip.show ? "none" : "translateY(5px) scale(0.94)",
          left: tooltip.x + 14,
          top: tooltip.y - 38,
        }}
      >
        {tooltip.text}
      </div>

      <div
        className="mileage-card"
        style={{
          boxShadow: elevated ? SHADOW_ELEVATED : SHADOW_NORMAL,
          transition: "box-shadow 0.6s ease",
        }}
      >
        <div className="mileage-accent-bar" />
        <div className="mileage-header">
          <div className="flex flex-col">
            <div className="flex items-center gap-2.5">
              <svg
                className="h-[22px] w-[22px] shrink-0 text-[#9CA3AF]"
                viewBox="0 -960 960 960"
                fill="currentColor"
                aria-hidden
              >
                <path d="M486-337.5q34-1.5 50-25.5l208-309-309.16 208.26Q410-447 408-413.5t21 55.5q23 22 57 20.5ZM481-768q60 0 108 15.5t87 38.5l-69 45q-28-13-58.5-20t-67.5-7q-130.09 0-221.55 93.5Q168-509 168-384q0 38 5.5 62.5T191-264h577q13-33 18.5-60.5T792-384q0-42-11.5-84T747-545l43-65q35 48 54.5 106T864-386q0 51-8.5 89T828-227q-10 17-25.5 26t-34.5 9H192q-19 0-34.5-9T132-227q-19-32-27.5-70T96-386q0-79.72 30.5-149.36Q157-605 209-656.5T331.44-738q70.44-30 149.56-30Zm-1 279Z" />
              </svg>
              <span className="font-display text-[19px] font-extrabold tracking-[-0.4px] text-neutral-900">
                Mileage Distribution
              </span>
            </div>
          </div>
          <div className="pt-0.5 text-[10.5px] font-medium tracking-[1.3px] text-[#9CA3AF]">JAN – DEC 2026</div>
        </div>

        <div className="mileage-divider" />

        <div className="mileage-body">
          <div className="mileage-chart-wrap">
            <svg className="h-[200px] w-[200px]" viewBox="0 0 200 200">
              <g style={{ transformOrigin: "100px 100px" }}>
                <circle className="mileage-pulse-ring" cx="100" cy="100" r="70" />
              </g>
              <circle className="mileage-donut-track" cx="100" cy="100" r="70" />
              <g ref={segGroupRef} style={{ transformOrigin: "100px 100px", transform: "rotate(-90deg)" }}>
                {[0, 1, 2].map((i) => (
                  <circle
                    key={i}
                    ref={segRefs[i]}
                    className="mileage-seg"
                    cx="100"
                    cy="100"
                    r="70"
                    stroke={SEG_COLORS[i]}
                    style={{
                      strokeWidth: hoveredSeg === i ? 38 : hoveredSeg !== null ? 32 : undefined,
                      opacity: hoveredSeg !== null && hoveredSeg !== i ? 0.2 : 1,
                    }}
                    onMouseEnter={(e) => handleSegMouseEnter(i, e)}
                    onMouseMove={handleSegMouseMove}
                    onMouseLeave={handleSegMouseLeave}
                  />
                ))}
              </g>
              {[0, 1, 2].map((i) => (
                <line
                  key={i}
                  ref={gapRefs[i]}
                  className="mileage-gap-line"
                  x1="100"
                  y1="12"
                  x2="100"
                  y2="48"
                  style={{ opacity: 0 }}
                />
              ))}
            </svg>
            <div className="mileage-center-label">
              <div className="text-[9.5px] font-semibold uppercase tracking-[1.6px] text-[#9CA3AF]">Total</div>
              <div
                ref={counterRef}
                className="font-display text-[27px] font-extrabold leading-tight tracking-[-1.5px] tabular-nums text-neutral-900"
              >
                0
              </div>
              <div className="mt-0.5 text-[9.5px] tracking-[0.5px] text-[#D1D5DB]">miles</div>
            </div>
          </div>

          <div className="mileage-legend">
            {[
              { name: "Work Time", bar: "mileage-bar-work", dot: "mileage-dot-work", seg: 0 },
              { name: "Non-Work Time", bar: "mileage-bar-nonwork", dot: "mileage-dot-nonwork", seg: 1 },
              { name: "Weekend", bar: "mileage-bar-weekend", dot: "mileage-dot-weekend", seg: 2 },
            ].map(({ name, bar, dot, seg }) => (
              <div
                key={seg}
                className={`mileage-legend-item ${bar}`}
                data-seg={seg}
                onMouseEnter={() => handleLegendEnter(seg)}
                onMouseLeave={handleLegendLeave}
              >
                <div className="mb-1 flex items-center gap-2.5">
                  <div className={`mileage-legend-dot ${dot}`} />
                  <div className="text-[13px] font-semibold text-neutral-900">{name}</div>
                </div>
                <div ref={metaRefs[seg]} className="ml-[19px] mb-1.5 text-[11px] text-[#9CA3AF]">
                  7,744 mi · 58%
                </div>
                <div className="mileage-bar-track">
                  <div ref={barRefs[seg]} className="mileage-bar-fill" style={{ width: "0%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mileage-footer">
          <div className="text-[11px] font-medium text-[#9CA3AF]">
            <span className="mileage-live-dot" />
            <span className="font-bold text-[#3988DA]">↑ 4.2%</span> vs last year
          </div>
          <div className="text-[11px] font-medium text-[#9CA3AF]">Updated today</div>
        </div>
      </div>
    </div>
  );
}
