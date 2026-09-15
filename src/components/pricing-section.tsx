"use client"

import Link from "next/link"
import { ArrowUpRight, Award, Check } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const PLANS = [
  {
    name: "Essential",
    slug: "essential",
    price: "$89",
    desc: "Hand wash, vacuum, and interior wipe-down.",
    features: ["Hand wash & dry", "Full vacuum", "Interior wipe-down"],
  },
  {
    name: "Signature",
    slug: "signature",
    price: "$219",
    featured: true,
    desc: "Paint decontamination, wax, full interior detail.",
    features: [
      "Everything in Essential",
      "Paint decontamination & wax",
      "Full interior detail",
    ],
  },
  {
    name: "Ceramic",
    slug: "ceramic",
    price: "$549",
    desc: "Paint correction with multi-year ceramic coating.",
    features: [
      "Everything in Signature",
      "Machine paint correction",
      "Multi-year ceramic coating",
    ],
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

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-secondary py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading eyebrow="Pricing" title="Packages for every finish." />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid gap-6 sm:grid-cols-3"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={
                plan.featured
                  ? "relative flex flex-col rounded-2xl bg-ink p-8 text-white shadow-xl shadow-black/40 ring-1 ring-brand/40"
                  : "relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.06]"
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 right-6 flex items-center gap-1 bg-brand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-foreground shadow-md">
                  <Award className="size-3" />
                  Most popular
                </span>
              )}
              <Link
                href={`/packages/${plan.slug}`}
                className="group/title flex items-center gap-1.5 font-heading text-lg font-semibold text-white transition-colors duration-200 hover:text-brand"
              >
                {plan.name}
                <ArrowUpRight className="size-3.5 opacity-0 transition-opacity duration-200 group-hover/title:opacity-100" />
              </Link>
              <p
                className={
                  plan.featured
                    ? "mt-4 font-heading text-3xl font-semibold text-brand"
                    : "mt-4 font-heading text-3xl font-semibold text-white"
                }
              >
                {plan.price}
              </p>
              <p
                className={
                  plan.featured
                    ? "mt-3 text-sm leading-6 text-white/60"
                    : "mt-3 text-sm leading-6 text-white/60"
                }
              >
                {plan.desc}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/75"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={
                  plan.featured
                    ? "mt-8 w-full rounded-md bg-brand text-sm font-semibold uppercase tracking-wide text-brand-foreground hover:bg-white"
                    : "mt-8 w-full rounded-md border border-white/15 bg-transparent text-sm font-semibold uppercase tracking-wide text-white hover:border-brand hover:text-brand"
                }
              >
                <Link href="#contact">Choose {plan.name}</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
