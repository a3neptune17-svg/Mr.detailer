"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"

import { Button } from "@/components/ui/button"

/** Wraps a CTA so it drifts a few px toward the cursor while hovered. */
function Magnetic({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 16, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 200, damping: 16, mass: 0.4 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className="inline-flex"
    >
      {children}
    </motion.div>
  )
}

const STATS = [
  { value: "12", label: "Yrs" },
  { value: "4,800+", label: "Cars" },
  { value: "5.0", label: "Rating" },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 26 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 26 })
  const spotlight = useMotionTemplate`radial-gradient(760px circle at ${springX}px ${springY}px, rgba(229,252,160,0.07), transparent 65%)`

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.22])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-ink text-white"
    >
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        style={{ scale: videoScale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent"
      />
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5]" style={{ background: spotlight }} />

      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between border-b border-white/10 py-6 pl-20 pr-6 md:pl-10 md:pr-10 lg:pl-24 lg:pr-24"
      >
        <div className="flex items-center gap-2.5">
          <span
            aria-hidden
            className="size-2 shrink-0 bg-brand"
            style={{ clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0 100%)" }}
          />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-white">
            Mr. Detailer
          </span>
        </div>
        <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white/40 sm:inline">
          Studio No. 013 — Est. 2013
        </span>
        <Magnetic>
          <Link
            href="#contact"
            className="rounded-full border border-white/25 px-4 py-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-brand hover:text-brand"
          >
            Enquire
          </Link>
        </Magnetic>
      </motion.div>

      {/* Content — anchored to the bottom, editorial rather than poster */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-end gap-7 px-6 pb-14 sm:px-10 lg:px-24 lg:pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span aria-hidden className="h-px w-8 bg-brand" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
            Detailing &amp; Paint Protection Studio
          </span>
        </motion.div>

        <h1 className="max-w-2xl font-heading uppercase">
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[9vw] font-medium leading-[1.02] tracking-tight text-white sm:text-[5vw] lg:text-[3.6vw]"
          >
            Detailing, engineered
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
            className="block text-[9vw] font-bold leading-[1.02] tracking-tight text-brand sm:text-[5vw] lg:text-[3.6vw]"
          >
            like a concept car.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="max-w-md text-sm leading-6 text-white/65 sm:text-base"
        >
          Paint correction, ceramic coating, and PPF applied like race-team
          prep — every panel inspected under raking light before it leaves
          the bay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.02, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-6 pt-1"
        >
          <Magnetic>
            <Button
              asChild
              size="lg"
              className="glow-brand rounded-full bg-brand px-7 text-sm font-semibold uppercase tracking-wide text-brand-foreground hover:bg-white"
            >
              <Link href="#contact">Book a Detail</Link>
            </Button>
          </Magnetic>
          <Link
            href="#process"
            className="group flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors duration-200 hover:text-brand"
          >
            <span className="border-b border-transparent pb-0.5 group-hover:border-brand">
              Our Workflow
            </span>
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom bar — scroll cue + quiet stat strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between border-t border-white/10 px-6 py-5 sm:px-10 lg:px-24"
      >
        <div className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/45">
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-3 text-brand" />
          </motion.div>
          Scroll
        </div>
        <div className="flex items-center gap-5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-white/60 sm:gap-8">
          {STATS.map((stat, i) => (
            <span key={stat.label} className="flex items-center gap-5 sm:gap-8">
              {i > 0 && <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:block" />}
              <span>
                <span className="font-semibold text-white">{stat.value}</span>{" "}
                <span className="text-white/40">{stat.label}</span>
              </span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
