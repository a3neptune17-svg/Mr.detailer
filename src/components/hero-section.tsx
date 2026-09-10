"use client"

import Image from "next/image"
import { Award } from "lucide-react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion"

const TICKER = [
  "Ceramic Coating",
  "Paint Protection Film",
  "Paint Correction",
  "Interior Detailing",
  "AutoMods",
  "Performance Tuning",
]

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 24 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 24 })
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${springX}px ${springY}px, rgba(229,252,160,0.14), transparent 65%)`

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-ink text-white"
    >
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 0.32, opacity: 0, borderRadius: "3rem" }}
        animate={{ scale: 1, opacity: 1, borderRadius: "0rem" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/20 to-ink/70"
      />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5]" style={{ background: spotlight }} />

      {/* Top utility strip */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        className="relative z-10 flex w-full items-center justify-between px-6 pt-24 sm:px-10 sm:pt-10 lg:px-24"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand/60" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/60">
            Now booking
          </span>
        </div>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/40">
          4,800+ Cars Detailed
        </span>
      </motion.div>

      {/* Focal medallion */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-6 py-16">
        <div className="relative flex items-center justify-center">
          <motion.span
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute size-32 rounded-full border border-dashed border-white/25 sm:size-40"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 1.7, ease: "easeOut" }}
            className="relative flex size-24 items-center justify-center rounded-full bg-white p-4 shadow-[0_0_50px_-10px_rgba(229,252,160,0.85)] sm:size-28"
          >
            <Image
              src="/logo.png"
              alt="Mr. Detailer logo"
              width={172}
              height={130}
              className="h-auto w-full object-contain"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md"
        >
          <Award className="size-3.5 text-brand" />
          <span className="text-xs font-medium tracking-wide text-white/70">
            Mr. Detailer Studio · Est. 2013
          </span>
        </motion.div>
      </div>

      {/* Bottom ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
        className="relative z-10 overflow-hidden border-t border-white/10 bg-white/5 py-3 backdrop-blur-sm"
      >
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10">
              {TICKER.map((label) => (
                <span
                  key={`${dup}-${label}`}
                  className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/50"
                >
                  {label}
                  <span aria-hidden className="size-1 rounded-full bg-brand/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
