"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeUp, defaultTransition } from "@/lib/animations";

const IOT_ICON =
  "https://www.figma.com/api/mcp/asset/0b9dc247-0df6-4603-9124-17f7a155bcac";

/** Десктоп 620×384, на всех разрешениях — соотношение сторон 620:384. Путь из public. */
const HERO_IMAGE = "/images/hero-desktop.png";
const HERO_ASPECT = 620 / 384;

/** Hero: design tokens из tailwind.config (spacing, typography, content colors). */
export function HeroBlock() {
  return (
    <section className="relative min-h-hero w-full overflow-hidden bg-white xl:h-hero">
      {/* Фон: mesh и градиенты по дизайн-системе (Figma) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(223,242,254,0.52) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(223,242,254,0.52) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
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

      {/* Контейнер: max-w-7xl (1280px), отступы по шкале Tailwind (4/6/8), вертикально 12/16/20/24/32 */}
      <div className="relative mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col items-start justify-center gap-9 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:flex xl:flex-row xl:items-center xl:gap-col-gap xl:py-32">
        {/* Левый столбец */}
        <motion.div
          className="flex min-w-0 shrink max-w-content flex-col items-start justify-center xl:basis-[theme(maxWidth.content)] xl:shrink-0"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          transition={defaultTransition}
        >
          {/* Breadcrumb: caption (12px), content.muted, отступ снизу 1.25rem (5) */}
          <motion.p
            className="mb-5 font-body text-caption font-normal uppercase text-content-muted"
            variants={fadeUp}
          >
            Navixy Platform · Data & Analytics
          </motion.p>

          {/* Контент: gap-7 (1.75rem) между блоком заголовка, описанием и кнопками; py-6 */}
          <div className="flex flex-col gap-7 py-6">
            {/* Иконка + заголовок: gap-4 (1rem) */}
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
                <span className="font-body text-subtitle font-bold text-content-primary">
                  IoT Query
                </span>
              </motion.div>

              <motion.h1
                className="font-body text-4xl font-bold text-content-primary md:text-display-1"
                variants={fadeUp}
              >
                A Private Lakehouse for telematics data
              </motion.h1>
            </motion.div>

            {/* Описание: mobile 18px (text-lg), sm+ 20px (body-lg), content.secondary */}
            <motion.p
              className="max-w-content font-body text-lg font-normal text-content-secondary sm:text-body-lg"
              variants={fadeUp}
            >
              Query GPS and IoT streams with SQL instead of stitching together
              APIs, retries, and custom data pipelines.
            </motion.p>

            {/* Кнопки: gap-5 (1.25rem) mobile, gap-7 (1.75rem) md+ */}
            <motion.div
              className="flex flex-wrap gap-5 md:gap-7"
              variants={fadeUp}
            >
              <a
                href="#product"
                className="flex h-btn min-w-btn-min items-center justify-center rounded-btn bg-brand-500 px-6 py-3.5 font-body text-button font-semibold text-white transition-opacity hover:opacity-90"
              >
                Action button
              </a>
              <a
                href="#pricing"
                className="flex h-btn items-center justify-center py-3.5 font-body text-button font-semibold text-brand-500 no-underline transition-opacity hover:opacity-80"
              >
                Secondary button
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Изображение: пропорции 620:384, max-w-hero-image на xl, placeholder neutral-200 */}
        <motion.div
          className="relative w-full min-w-0 shrink overflow-hidden rounded-lg bg-neutral-200 xl:max-w-hero-image"
          style={{ aspectRatio: String(HERO_ASPECT) }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: 0.2 }}
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            sizes="(max-width: 1279px) 100vw, 620px"
            className="rounded-lg object-cover"
            unoptimized
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
