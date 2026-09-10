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
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-white">
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <span className="flex size-14 items-center justify-center rounded-2xl bg-brand text-brand-foreground">
          <Timer className="size-6" />
        </span>
        <SectionHeading
          eyebrow="Book Now"
          title="Ready for a car that turns heads?"
          align="center"
          invert
          className="mt-5"
        />
        <p className="mt-3 max-w-md text-white/60">
          Slots open daily. Book online or call the studio to reserve your
          detailing appointment.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 rounded-full bg-brand px-6 text-brand-foreground hover:bg-brand/85"
        >
          <Link href="mailto:hello@mrdetailer.studio">Get in Touch</Link>
        </Button>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8">
          {CONTACT_DETAILS.map(({ icon: Icon, label, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 text-sm text-white/60 transition-colors duration-200 hover:text-brand"
            >
              <Icon className="size-4 text-brand" />
              {label}
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
