"use client";

/**
 * Hero chart switcher — automatic loop between Mileage Distribution and Mileage By Weeks.
 * From navixy-system-web Hero A. Both charts stay mounted; foreground/background via motion.
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroADashboard from "./HeroADashboard";
import MileageChart from "./MileageChart";

const EASE = [0.25, 0.46, 0.45, 0.94];
const DURATION = 0.58;

const TRANSITION = {
  type: "tween" as const,
  duration: DURATION,
  ease: EASE,
};

const BACKGROUND_LEFT = { opacity: 1, scale: 0.98, x: -24, y: -14, filter: "blur(0px)", zIndex: 0 };
const BACKGROUND_RIGHT = { opacity: 1, scale: 0.98, x: 28, y: -10, filter: "blur(0px)", zIndex: 0 };

const TRANSITION_REDUCED = {
  duration: 0.08,
  ease: "easeOut" as const,
};

const CYCLE_DURATION_MS = 7000;

function buildVariants(reducedMotion: boolean) {
  const t = reducedMotion ? TRANSITION_REDUCED : TRANSITION;
  return {
    foreground: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      zIndex: 10,
      transition: t,
    },
    backgroundLeft: { ...BACKGROUND_LEFT },
    backgroundRight: { ...BACKGROUND_RIGHT },
    enterLeft: {
      opacity: 0,
      scale: 0.97,
      x: -24,
      y: -10,
      filter: "blur(0px)",
    },
    enterRight: {
      opacity: 0,
      scale: 0.97,
      x: 24,
      y: -8,
      filter: "blur(0px)",
    },
  };
}

export default function HeroChartSwitcher() {
  const [activeChart, setActiveChart] = useState<"distribution" | "byWeeks">("distribution");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveChart((prev) => (prev === "distribution" ? "byWeeks" : "distribution"));
    }, CYCLE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const variants = buildVariants(reducedMotion);

  const distributionAnim = activeChart === "distribution" ? "foreground" : "backgroundLeft";
  const byWeeksAnim = activeChart === "byWeeks" ? "foreground" : "backgroundRight";

  /* Responsive scale: preserve aspect ratio, no crop. Desktop 88%. */
  const contentHeight = 450;
  return (
    <div className="relative w-full flex-1 overflow-hidden min-h-[288px] sm:min-h-[338px] md:min-h-[396px] lg:min-h-[396px]">
      <div
        className="absolute left-1/2 top-0 w-[560px] -translate-x-1/2 origin-top scale-[0.64] sm:scale-75 md:scale-[0.88] lg:scale-[0.88]"
        style={{ minHeight: contentHeight }}
      >
        <div className="relative w-full" style={{ minHeight: contentHeight }}>
          <motion.div
            key="distribution"
            className="absolute inset-0 flex origin-left items-start justify-start"
            initial={false}
            animate={distributionAnim}
            variants={variants}
            transition={reducedMotion ? TRANSITION_REDUCED : TRANSITION}
            style={{ pointerEvents: activeChart === "distribution" ? "auto" : "none" }}
          >
            <HeroADashboard elevated={activeChart === "distribution"} />
          </motion.div>

          <motion.div
            key="byWeeks"
            className="absolute inset-0 flex origin-right items-start justify-start"
            initial="enterRight"
            animate={byWeeksAnim}
            variants={variants}
            transition={reducedMotion ? TRANSITION_REDUCED : TRANSITION}
            style={{ pointerEvents: activeChart === "byWeeks" ? "auto" : "none" }}
          >
            <MileageChart elevated={activeChart === "byWeeks"} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
