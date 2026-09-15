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
      "Paint correction took out swirls I'd given up on. The handover walkthrough alone told me this team notices things other shops don't.",
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

const [featured, ...rest] = TESTIMONIALS

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
}

function Stars({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div className={`flex gap-0.5 ${tone === "light" ? "text-ink/70" : "text-brand"}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-3.5 fill-current" />
      ))}
    </div>
  )
}

export function GallerySection() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-white py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 size-72 rounded-full bg-brand/20 blur-3xl"
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
            tone="light"
            title="Results our clients keep talking about."
            className="max-w-xl"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brand/20 bg-ink p-8 text-white shadow-xl shadow-black/40 sm:p-10"
          >
            <Quote
              aria-hidden
              className="absolute -right-4 -top-6 size-32 text-white/[0.05]"
              strokeWidth={1.5}
            />
            <div>
              <Stars />
              <p className="relative mt-5 max-w-md font-serif text-2xl italic leading-snug text-white sm:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-semibold text-brand-foreground">
                {featured.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{featured.name}</p>
                <p className="text-xs text-white/50">{featured.detail}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            {rest.map(({ quote, name, detail }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink/[0.03] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-ink/[0.05]"
              >
                <Stars tone="light" />
                <p className="relative mt-3 text-sm leading-6 text-ink/70">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="relative mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-xs font-semibold text-brand-foreground">
                    {name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">{name}</p>
                    <p className="text-xs text-ink/45">{detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
