"use client"

import Link from "next/link"
import { Award, Check } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const PLANS = [
  {
    name: "Essential",
    price: "$89",
    desc: "Hand wash, vacuum, and interior wipe-down.",
    features: ["Hand wash & dry", "Full vacuum", "Interior wipe-down"],
  },
  {
    name: "Signature",
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
    <section id="pricing" className="relative overflow-hidden bg-secondary/60 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-10 size-80 rounded-full bg-brand/15 blur-3xl"
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
                  ? "relative flex flex-col rounded-3xl bg-ink p-8 text-white shadow-xl shadow-black/20 ring-1 ring-brand/30"
                  : "relative flex flex-col rounded-3xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 right-6 flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-brand-foreground shadow-md">
                  <Award className="size-3" />
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p
                className={
                  plan.featured
                    ? "mt-4 text-3xl font-semibold text-brand"
                    : "mt-4 text-3xl font-semibold text-ink"
                }
              >
                {plan.price}
              </p>
              <p
                className={
                  plan.featured
                    ? "mt-3 text-sm leading-6 text-white/60"
                    : "mt-3 text-sm leading-6 text-ink/60"
                }
              >
                {plan.desc}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      plan.featured
                        ? "flex items-start gap-2 text-sm text-white/75"
                        : "flex items-start gap-2 text-sm text-ink/70"
                    }
                  >
                    <Check
                      className={
                        plan.featured
                          ? "mt-0.5 size-4 shrink-0 text-brand"
                          : "mt-0.5 size-4 shrink-0 text-brand-foreground/70"
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={
                  plan.featured
                    ? "mt-8 w-full rounded-full bg-brand text-brand-foreground hover:bg-brand/85"
                    : "mt-8 w-full rounded-full bg-ink text-white hover:bg-ink/85"
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
