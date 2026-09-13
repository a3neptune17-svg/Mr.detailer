"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { BadgeCheck, Layers, ScanLine, Send, SprayCan, type LucideIcon } from "lucide-react"

type Step = {
  step: string
  title: string
  icon: LucideIcon
  summary: string
}

const PROCESS: Step[] = [
  {
    step: "01",
    title: "Scan",
    icon: ScanLine,
    summary:
      "Every panel is laser-measured and cross-checked against reference photos, so the plan is built on data, not a guess.",
  },
  {
    step: "02",
    title: "Prepare",
    icon: SprayCan,
    summary:
      "Decontamination wash, clay, and masking strip the surface back to bare paint — the only base a coating or film will bond to.",
  },
  {
    step: "03",
    title: "Install",
    icon: Layers,
    summary:
      "Correction, ceramic, or film goes on by hand in a controlled bay, panel by panel, matched to the scan from step one.",
  },
  {
    step: "04",
    title: "Validate",
    icon: BadgeCheck,
    summary:
      "Every edge and panel is checked under raking light against the original scan before anything is signed off.",
  },
  {
    step: "05",
    title: "Release",
    icon: Send,
    summary:
      "We walk the finished car with you, hand over care instructions matched to what was applied, and log the build for next time.",
  },
]

// Slight, deterministic per-card tilt — enough to read as hand-placed rather than grid-snapped.
const TILT = [-1.6, 1.1, -1, 1.4, -1.2]

function ProcessCard({ item, index }: { item: Step; index: number }) {
  const Icon = item.icon
  const tilt = TILT[index % TILT.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92, rotate: tilt * 3.5 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: tilt }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        type: "spring",
        stiffness: 130,
        damping: 15,
        mass: 0.9,
        delay: 0.12 * index,
      }}
      whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/20 transition-colors duration-300 hover:border-brand/40 hover:bg-white/[0.06] sm:p-7"
    >
      <motion.span
        aria-hidden
        initial={{ opacity: 0, rotate: -tilt * 2 }}
        whileInView={{ opacity: 1, rotate: -tilt }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ delay: 0.12 * index + 0.05, duration: 0.4 }}
        className="text-outline pointer-events-none absolute -right-2 -top-4 select-none font-heading text-7xl font-bold"
      >
        {item.step}
      </motion.span>

      <motion.span
        initial={{ scale: 0, rotate: -140 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 14,
          delay: 0.12 * index + 0.18,
        }}
        className="relative z-10 flex size-10 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_4px_14px_-2px_rgba(229,252,160,0.5)]"
      >
        <Icon className="size-4.5" strokeWidth={2.25} />
      </motion.span>

      <span className="relative z-10 mt-4 block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">
        Step {item.step}
      </span>
      <h3 className="relative z-10 mt-1.5 font-heading text-lg font-semibold text-white">
        {item.title}
      </h3>
      <p className="relative z-10 mt-3 text-sm leading-6 text-white/60">
        {item.summary}
      </p>
    </motion.div>
  )
}

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 40%"],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="relative mt-14">
      {/* Desktop: a hand-drawn road curving through five columns */}
      <svg
        aria-hidden
        viewBox="0 0 1000 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 top-6 hidden h-10 w-full lg:block"
      >
        <motion.path
          d="M 20 44 C 90 6, 160 6, 220 30 S 340 58, 400 30 S 520 4, 580 30 S 700 58, 760 30 S 880 4, 940 30"
          fill="none"
          stroke="var(--brand)"
          strokeOpacity={0.35}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="1 10"
          style={{ pathLength }}
        />
      </svg>

      {/* Mobile / tablet: a loose dashed spine down the left edge */}
      <div
        aria-hidden
        className="absolute left-[19px] top-2 bottom-2 hidden w-px border-l-2 border-dashed border-white/15 sm:block lg:hidden"
      />

      <div className="flex flex-col gap-6 sm:pl-12 lg:grid lg:grid-cols-5 lg:gap-5 lg:pl-0 lg:pt-10">
        {PROCESS.map((item, index) => (
          <ProcessCard key={item.step} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
