"use client"

import Link from "next/link"
import { Mail, Phone, Timer } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const CONTACT_DETAILS = [
  { icon: Phone, label: "+1 (000) 000-0000", href: "tel:+10000000000" },
  { icon: Mail, label: "hello@mrdetailer.studio", href: "mailto:hello@mrdetailer.studio" },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 text-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/25 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-xl bg-brand text-brand-foreground">
          <Timer className="size-6" />
        </span>
        <SectionHeading
          eyebrow="Book Now"
          tone="light"
          title="Ready for a car that turns heads?"
          align="center"
          className="mt-5"
        />
        <p className="mt-3 max-w-md text-ink/60">
          Slots open daily. Book online or call the studio to reserve your
          detailing appointment.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-md bg-brand px-6 text-sm font-semibold uppercase tracking-wide text-brand-foreground hover:bg-ink hover:text-white"
        >
          <Link href="mailto:hello@mrdetailer.studio">Get in Touch</Link>
        </Button>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-ink/10 pt-8">
          {CONTACT_DETAILS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 text-sm text-ink/60 transition-colors duration-200 hover:text-ink"
            >
              <Icon className="size-4 text-ink/50" />
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
