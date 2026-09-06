"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BadgeCheck, Droplets, ShieldCheck, Sparkles, Sun } from "lucide-react"

import { SectionHeading } from "@/components/section-heading"

const CERTS = [
  { icon: BadgeCheck, label: "SGS tested" },
  { icon: ShieldCheck, label: "CE certified" },
]

const FEATURES = [
  {
    icon: Sparkles,
    title: "Self-healing topcoat",
    description:
      "Light swirl marks and fine scratches smooth themselves out with a little heat — the film quietly repairs its own surface.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic finish",
    description:
      "Water beads and sheets straight off, so the film stays cleaner for longer between washes.",
  },
  {
    icon: Sun,
    title: "UV & yellowing resistant",
    description:
      "Engineered to stay optically clear and resist discoloration under constant sun exposure.",
  },
]

const GALLERY = [
  {
    src: "/images/Picsart_26-09-02_15-33-19-009.jpg.jpeg",
    alt: "Namex Paint Protection Film packaging, close up",
    width: 2239,
    height: 1260,
    caption: "Namex · Paint Protection Film",
  },
  {
    src: "/images/IMG_20260902_144058.jpg.jpeg",
    alt: "Namex Paint Protection Film rolls standing upright",
    width: 1260,
    height: 2184,
    caption: "Studio-ready rolls",
  },
  {
    src: "/images/Namex white background only.png",
    alt: "Namex Paint Protection Film boxes on a white background",
    width: 768,
    height: 1364,
    caption: "SGS & CE certified",
  },
  {
    src: "/images/Picsart_26-09-02_15-32-13-361.jpg.jpeg",
    alt: "Namex Paint Protection Film boxes arranged in a studio shot",
    width: 1150,
    height: 2000,
    caption: "Every roll, hand-checked",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export function BrandsSection() {
  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-background py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[22vw] font-black italic tracking-tighter text-ink/[0.03] sm:text-[16vw]"
      >
        namex
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 z-0 size-72 rounded-full bg-brand/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 z-0 size-80 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:pl-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="max-w-2xl"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
            <SectionHeading
              eyebrow="Our Protection Partner"
              title={
                <>
                  One film. Every finish.{" "}
                  <span className="text-brand-foreground">Namex.</span>
                </>
              }
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-5 max-w-xl text-sm leading-6 text-ink/60 sm:text-base"
          >
            Every ceramic coating and correction we deliver sits on top of
            Namex Paint Protection Film — a self-healing TPU film engineered
            to take the hits so your paint doesn&apos;t have to. It&apos;s the
            only film that leaves our studio with a Mr. Detailer finish.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {CERTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-black/5 bg-secondary/60 px-4 py-2 text-xs font-medium text-ink/70"
              >
                <Icon className="size-3.5 text-brand-foreground/70" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {GALLERY.map((img, idx) => (
            <motion.div
              key={img.src}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={
                idx % 2 === 1
                  ? "group relative mt-4 overflow-hidden rounded-3xl border border-black/5 shadow-sm sm:mt-6"
                  : "group relative overflow-hidden rounded-3xl border border-black/5 shadow-sm"
              }
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-[0.68rem] font-medium uppercase tracking-wide text-white/90">
                {img.caption}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-14 grid grid-cols-1 gap-6 border-t border-black/5 pt-10 sm:grid-cols-3"
        >
          {FEATURES.map(({ icon: Icon, title, description }, idx) => (
            <motion.div key={title} variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="flex items-center gap-2">
                <span className="text-[0.65rem] font-semibold text-ink/30">
                  0{idx + 1}
                </span>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                  <Icon className="size-4" />
                </span>
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-xs leading-5 text-ink/55">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
