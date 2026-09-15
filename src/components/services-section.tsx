"use client"

import { Car, Droplets, Gauge, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"

const SERVICES = [
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description:
      "Multi-year hydrophobic protection that keeps paint glossy and easy to clean.",
  },
  {
    icon: Droplets,
    title: "Interior Deep Clean",
    description:
      "Steam extraction, leather conditioning, and odor removal for a showroom cabin.",
  },
  {
    icon: Gauge,
    title: "Paint Correction",
    description:
      "Machine polishing to remove swirls, oxidation, and light scratches.",
  },
  {
    icon: Car,
    title: "Mobile Detailing",
    description:
      "Full studio-grade detailing at your home or office, on your schedule.",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-brand/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <SectionHeading
            eyebrow="Services"
            tone="light"
            title="Everything your car needs, nothing it doesn't."
            className="max-w-xl"
          />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink/40">
            04 disciplines
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 border-t border-ink/10"
        >
          {SERVICES.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group grid grid-cols-[3.5rem_1fr] items-center gap-5 border-b border-ink/10 py-7 transition-colors duration-300 hover:bg-ink/[0.03] sm:grid-cols-[5.5rem_3.5rem_1fr_20rem] sm:gap-8 sm:px-2"
            >
              <span
                aria-hidden
                className="text-outline-light hidden select-none font-heading text-6xl font-bold leading-none transition-colors duration-300 group-hover:[-webkit-text-stroke:1.5px_rgba(26,26,24,0.35)] sm:block"
              >
                0{idx + 1}
              </span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-ink transition-colors duration-300 sm:text-2xl">
                {title}
              </h3>
              <p className="col-span-2 text-sm leading-6 text-ink/60 sm:col-span-1 sm:text-right">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
