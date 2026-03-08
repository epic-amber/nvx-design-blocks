"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeUp, defaultTransition } from "@/lib/animations";

const IOT_ICON =
  "https://www.figma.com/api/mcp/asset/0b9dc247-0df6-4603-9124-17f7a155bcac";
const PLACEHOLDER_ICON =
  "https://www.figma.com/api/mcp/asset/300cc789-1ad3-4394-b9ef-4a44454a3036";

/** Макет Figma: контейнер 1280px, контент 590px, изображение 620×384px, отступы 8/16/20/24px */
export function HeroBlock() {
  return (
    <section className="relative h-[730px] w-full overflow-hidden bg-white">
      {/* Фон: mesh внизу, градиенты сверху — сетка мягко исчезает по краям */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {/* 1. Mesh — светлая, не навязчивая, с маской затухания сверху/снизу */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(223,242,254,0.35) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(223,242,254,0.35) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
        {/* 2. Градиенты поверх сетки */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(89.998deg, rgba(189,227,255,0) 3.13%, rgba(125,192,240,0) 27.89%, rgba(125,192,240,0) 46.64%, rgba(125,192,240,0) 70.67%, rgba(189,227,255,0) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 81.98%, rgb(255,255,255) 96.34%), linear-gradient(180deg, rgba(255,255,255,0) 31.06%, rgba(189,227,255,0) 96.76%), linear-gradient(180deg, rgb(184,230,254) 0%, rgba(255,255,255,0) 27.5%)",
          }}
        />
      </div>

      {/* Контейнер: 100px сверху — продолжение фона, затем контент 630px */}
      <div className="relative mx-auto flex min-h-[630px] w-full max-w-[1280px] flex-col items-center justify-center gap-8 px-4 pt-[100px] pb-24 sm:px-6 lg:flex lg:flex-row lg:items-center lg:gap-[70px] lg:px-8">
        {/* Левый столбец: по Figma Content width 590px, shrink-0 */}
        <motion.div
          className="flex w-full max-w-[590px] flex-col items-start justify-center lg:w-[590px] lg:shrink-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >
          {/* Breadcrumbs: 12px, #62748e, leading 1.2 — отступ снизу 20px */}
          <motion.p
            className="mb-5 font-body text-hero-eyebrow font-normal text-[#62748e]"
            variants={fadeUp}
          >
            Navixy Platform · Data & Analytics
          </motion.p>

          {/* Main container по макету: gap 20px, py-24 */}
          <div className="flex flex-col gap-5 py-6">
            {/* Sub container: иконка + заголовок, gap 16px */}
            <motion.div
              className="flex flex-col gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              transition={defaultTransition}
            >
              <motion.div
                className="flex items-center gap-2"
                variants={fadeUp}
              >
                <span className="relative h-6 w-6 shrink-0 overflow-hidden rounded">
                  <Image
                    src={IOT_ICON}
                    alt=""
                    width={24}
                    height={24}
                    className="object-cover"
                    unoptimized
                  />
                </span>
                <span className="font-body text-hero-label font-bold text-[#101828]">
                  IoT Query
                </span>
              </motion.div>

              <motion.h1
                className="font-body text-hero-heading font-bold text-[#101828]"
                variants={fadeUp}
              >
                A Private Lakehouse for telematics data
              </motion.h1>
            </motion.div>

            {/* Подзаголовок: 20px, #1e2939, leading 1.4 */}
            <motion.p
              className="max-w-[590px] font-body text-hero-body font-normal text-[#1e2939]"
              variants={fadeUp}
            >
              Query GPS and IoT streams with SQL instead of stitching together
              APIs, retries, and custom data pipelines.
            </motion.p>

            {/* Кнопки: gap 20px по макету */}
            <motion.div
              className="flex flex-wrap gap-5"
              variants={fadeUp}
            >
              <a
                href="#product"
                className="flex h-[46px] min-w-[150px] items-center justify-center rounded-[6px] bg-[#0084d1] px-6 py-3.5 font-body text-hero-btn font-semibold text-white transition-opacity hover:opacity-90"
              >
                Action button
              </a>
              <a
                href="#pricing"
                className="flex h-[46px] items-center justify-center rounded-[6px] px-6 py-3.5 font-body text-hero-btn font-semibold text-[#0084d1] transition-opacity hover:opacity-80"
              >
                Secondary button
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Правый столбец: изображение 620×384px, на мобильном те же пропорции */}
        <motion.div
          className="mt-12 flex w-full shrink-0 overflow-hidden rounded-lg bg-[#e2e8f0] aspect-[620/384] lg:mt-0 lg:aspect-auto lg:h-[384px] lg:w-[620px]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={PLACEHOLDER_ICON}
              alt=""
              width={129}
              height={129}
              className="opacity-60"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
