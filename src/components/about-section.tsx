"use client"

import { Award, BadgeCheck, Clock, Quote, ShieldCheck, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const ABOUT_STATS = [
  { value: "12+", label: "Years of craft" },
  { value: "4,800+", label: "Cars detailed" },
  { value: "98%", label: "Client satisfaction" },
]

const ABOUT_FEATURES = [
  { icon: BadgeCheck, label: "Certified technicians" },
  { icon: Sparkles, label: "Premium-grade products" },
  { icon: ShieldCheck, label: "Insured & guaranteed work" },
  { icon: Clock, label: "Flexible scheduling" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-secondary py-24">
      <div aria-hidden className="rumble-strip absolute inset-x-0 top-0 h-1.5" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(246,247,240,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(246,247,240,0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(60% 60% at 50% 40%, black 0%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-10 size-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <SectionHeading
            eyebrow="About Us"
            title="Detailing, treated like craftsmanship."
          />
          <p className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base">
            Mr. Detailer started with a simple belief: a car deserves the
            same care as any piece you&apos;d call a craft. Every wash,
            correction, and coating is done by hand, by technicians trained
            to notice the details most shops skip.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid grid-cols-2 gap-4 grid-flow-dense sm:grid-cols-4"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl border border-brand/20 bg-ink p-7 text-white shadow-xl shadow-black/40 sm:p-8"
          >
            <Quote
              aria-hidden
              className="absolute -right-4 -top-4 size-28 text-white/[0.06]"
              strokeWidth={1.5}
            />
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Our Philosophy
            </span>
            <p className="relative mt-4 max-w-md text-xl font-medium leading-snug sm:text-2xl">
              &ldquo;A car deserves the same care as any piece you&apos;d call
              a craft.&rdquo;
            </p>
            <p className="relative mt-4 max-w-sm text-sm leading-6 text-white/50">
              Every wash, correction, and coating is done by hand — by
              technicians trained to notice the details most shops skip.
            </p>
            <div className="relative mt-8 flex items-center gap-2 border-t border-white/10 pt-5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-brand text-brand-foreground">
                <Award className="size-4" />
              </span>
              <span className="text-xs font-medium tracking-wide text-white/70">
                Mr. Detailer Studio · Since 2013
              </span>
            </div>
          </motion.div>

          {ABOUT_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white/[0.06]"
            >
              <p className="text-2xl font-heading font-semibold tracking-tight text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/45">
                {stat.label}
              </p>
            </motion.div>
          ))}

          {ABOUT_FEATURES.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:bg-white/[0.06]"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand text-brand-foreground transition-transform duration-300 group-hover:scale-110">
                <Icon className="size-4" />
              </span>
              <span className="text-sm font-medium leading-snug text-white/75">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
