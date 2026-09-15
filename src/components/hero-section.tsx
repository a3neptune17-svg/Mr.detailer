"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Pause, Play } from "lucide-react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
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

// Placeholder: all five slots point at the same clip until the real cuts land —
// swap each `src` for its own file and the rotation/controls need no other changes.
const HERO_VIDEOS = [
  { src: "/videos/hero.mp4", label: "Graphene Coating", tag: "3-yr gloss protection" },
  { src: "/videos/hero.mp4", label: "Paint Protection Film", tag: "Self-healing film" },
  { src: "/videos/hero.mp4", label: "Ceramic Coating", tag: "High-gloss finish" },
  { src: "/videos/hero.mp4", label: "Paint Correction", tag: "Swirl-free paint" },
  { src: "/videos/hero.mp4", label: "Interior Detailing", tag: "Deep-clean cabin" },
]

const ROTATE_MS = 7000

function HeroVideoStage({
  activeIndex,
  playing,
  scale,
}: {
  activeIndex: number
  playing: boolean
  scale: MotionValue<number>
}) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    const el = videoRefs.current[activeIndex]
    if (el) el.currentTime = 0
  }, [activeIndex])

  useEffect(() => {
    videoRefs.current.forEach((el, i) => {
      if (!el) return
      if (i === activeIndex && playing) {
        void el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  }, [activeIndex, playing])

  return (
    <div className="absolute inset-0">
      {HERO_VIDEOS.map((video, i) => (
        <motion.video
          key={i}
          ref={(el) => {
            videoRefs.current[i] = el
          }}
          muted
          loop
          playsInline
          autoPlay={i === 0}
          style={{ scale }}
          initial={false}
          animate={{ opacity: i === activeIndex ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video.src} type="video/mp4" />
        </motion.video>
      ))}
    </div>
  )
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_VIDEOS.length)
    }, ROTATE_MS)
  }, [])

  useEffect(() => {
    if (!playing) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [playing, startTimer])

  function selectVideo(index: number) {
    setActiveIndex(index)
    if (playing) startTimer()
  }

  function togglePlaying() {
    setPlaying((p) => !p)
  }

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
      <HeroVideoStage activeIndex={activeIndex} playing={playing} scale={videoScale} />

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

      {/* Content — anchored to the bottom, editorial rather than poster */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex flex-1 flex-col justify-end gap-7 px-6 pb-14 pt-24 sm:px-10 lg:px-24 lg:pb-16"
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

      {/* Reel selector — track with a sliding progress head + play/pause */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        className="relative z-10 flex items-center gap-4 border-t border-white/10 bg-ink/40 px-4 py-4 backdrop-blur-md sm:gap-6 sm:px-8 sm:py-5 lg:px-16"
      >
        <button
          type="button"
          onClick={togglePlaying}
          aria-label={playing ? "Pause reel" : "Play reel"}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink text-white transition-colors duration-200 hover:border-brand/60 hover:text-brand sm:size-12"
        >
          {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
        </button>

        <div className="relative flex-1">
          <div aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-white/10" />
          <motion.div
            aria-hidden
            animate={{ x: `${activeIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute left-0 top-0 z-10 h-[3px]"
            style={{ width: `${100 / HERO_VIDEOS.length}%` }}
          >
            <motion.span
              key={`${activeIndex}-${playing}`}
              initial={{ width: playing ? "0%" : "100%" }}
              animate={{ width: "100%" }}
              transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
              className="block h-full bg-brand"
            />
          </motion.div>

          {/* Desktop / tablet — full detail columns */}
          <div className="hidden sm:flex">
            {HERO_VIDEOS.map((video, i) => {
              const active = i === activeIndex
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectVideo(i)}
                  aria-label={`Show ${video.label} reel`}
                  aria-current={active}
                  className={`flex-1 border-l border-white/10 px-5 py-4 text-left transition-colors duration-300 first:border-l-0 ${
                    active ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold tracking-tight transition-colors duration-300 ${
                      active ? "bg-brand text-ink" : "bg-white/10 text-white/50"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`mt-2 block truncate text-sm font-bold uppercase tracking-tight transition-colors duration-300 sm:text-base ${
                      active ? "text-white" : "text-white/55"
                    }`}
                  >
                    {video.label}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-white/35">
                    {video.tag}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Mobile — current reel summary + tap-to-jump dots */}
          <div className="flex items-center justify-between gap-3 py-3.5 pl-3 sm:hidden">
            <div className="min-w-0">
              <span className="inline-flex items-center rounded-md bg-brand px-2 py-0.5 text-xs font-bold tracking-tight text-ink">
                0{activeIndex + 1}
              </span>
              <p className="mt-1.5 truncate text-sm font-bold uppercase tracking-tight text-white">
                {HERO_VIDEOS[activeIndex].label}
              </p>
              <p className="truncate text-xs text-white/35">
                {HERO_VIDEOS[activeIndex].tag}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-1.5">
              {HERO_VIDEOS.map((video, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectVideo(i)}
                  aria-label={`Show ${video.label} reel`}
                  aria-current={i === activeIndex}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? "w-5 bg-brand" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
