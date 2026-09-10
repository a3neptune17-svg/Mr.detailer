"use client"

import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"

const TESTIMONIALS = [
  {
    quote:
      "The ceramic coating still beads water like day one. You can tell every panel was actually inspected, not just wiped down.",
    name: "Alex R.",
    detail: "Tesla Model 3",
  },
  {
    quote:
      "Paint correction took out swirls I'd given up on. Handover walkthrough alone told me this team notices things other shops don't.",
    name: "Priya K.",
    detail: "BMW 3 Series",
  },
  {
    quote:
      "Booked the mobile detail for a Sunday morning — showed up on time, left the interior smelling and looking factory new.",
    name: "Marcus D.",
    detail: "Audi Q5",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-brand/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading
            eyebrow="Gallery"
            title="Results our clients keep talking about."
            className="max-w-xl"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {TESTIMONIALS.map(({ quote, name, detail }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote
                aria-hidden
                className="absolute -right-3 -top-3 size-20 text-ink/[0.04]"
                strokeWidth={1.5}
              />
              <div className="flex gap-0.5 text-brand-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="relative mt-4 text-sm leading-6 text-ink/70">
                &ldquo;{quote}&rdquo;
              </p>
              <div className="relative mt-6 flex items-center gap-3 border-t border-black/5 pt-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                  {name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{name}</p>
                  <p className="text-xs text-ink/45">{detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
