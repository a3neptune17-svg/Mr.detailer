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
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Services"
            title="Everything your car needs, nothing it doesn't."
            className="max-w-xl"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map(({ icon: Icon, title, description }, idx) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="absolute right-5 top-5 text-[0.65rem] font-semibold text-ink/20">
                0{idx + 1}
              </span>
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/60">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
