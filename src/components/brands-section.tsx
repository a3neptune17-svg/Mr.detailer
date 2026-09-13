"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BadgeCheck } from "lucide-react"

import { ScrollBulge } from "@/components/scroll-bulge"
import { SectionHeading } from "@/components/section-heading"

const GALLERY = [
  {
    src: "/images/Picsart_26-09-02_15-33-19-009.jpg.jpeg",
    alt: "Namex Paint Protection Film packaging, close up",
    width: 2239,
    height: 1260,
  },
  {
    src: "/images/IMG_20260902_144058.jpg.jpeg",
    alt: "Namex Paint Protection Film rolls standing upright",
    width: 1260,
    height: 2184,
  },
  {
    src: "/images/Namex white background only.png",
    alt: "Namex Paint Protection Film boxes on a white background",
    width: 768,
    height: 1364,
  },
  {
    src: "/images/Picsart_26-09-02_15-32-13-361.jpg.jpeg",
    alt: "Namex Paint Protection Film boxes arranged in a studio shot",
    width: 1150,
    height: 2000,
  },
]

const SPECS = [
  {
    label: "Film Thickness",
    value: "190 µm",
    description: "TPU self-healing topcoat",
  },
  {
    label: "Protection",
    value: "10-Year",
    description: "Manufacturer warranty",
  },
  {
    label: "Certification",
    value: "SGS · CE",
    description: "Independently tested",
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

export function BrandsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-background py-24">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[22vw] font-heading font-bold italic tracking-tighter text-white/[0.03] sm:text-[16vw]"
      >
        namex
      </span>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 z-0 size-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 z-0 size-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:pl-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <SectionHeading
                eyebrow="Our Protection Partner"
                title={
                  <>
                    One film. Every finish.{" "}
                    <span className="text-brand">Namex.</span>
                  </>
                }
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-5 max-w-lg text-sm leading-6 text-white/60 sm:text-base"
            >
              Every ceramic coating and correction we deliver sits on top of
              Namex Paint Protection Film — a self-healing TPU film engineered
              to take the hits so your paint doesn&apos;t have to. It&apos;s the
              only film that leaves our studio with a Mr. Detailer finish.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:ml-auto"
          >
            <div className="relative">
              <div className="absolute -right-6 -top-8 w-32 rotate-6 overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl shadow-black/40 sm:w-40">
                <ScrollBulge>
                  <Image
                    src={GALLERY[1].src}
                    alt={GALLERY[1].alt}
                    width={GALLERY[1].width}
                    height={GALLERY[1].height}
                    className="aspect-[3/4] w-full object-cover"
                  />
                </ScrollBulge>
              </div>

              <div className="relative -rotate-3 overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40">
                <ScrollBulge>
                  <Image
                    src={GALLERY[0].src}
                    alt={GALLERY[0].alt}
                    width={GALLERY[0].width}
                    height={GALLERY[0].height}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </ScrollBulge>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink p-3 pr-4 shadow-xl shadow-black/40 sm:-left-8">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand text-brand-foreground">
                  <BadgeCheck className="size-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">Certified</p>
                  <p className="text-[0.65rem] text-white/50">SGS · CE tested</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-3 pl-8">
              {[GALLERY[2], GALLERY[3]].map((img) => (
                <div
                  key={img.src}
                  className="w-1/2 overflow-hidden rounded-lg border border-white/10 bg-white"
                >
                  <ScrollBulge>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="aspect-square w-full object-cover"
                    />
                  </ScrollBulge>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
        >
          {SPECS.map((spec) => (
            <motion.div
              key={spec.label}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col gap-1 bg-ink p-6"
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                {spec.label}
              </span>
              <span className="font-heading text-2xl font-semibold text-brand sm:text-3xl">
                {spec.value}
              </span>
              <span className="text-xs text-white/50">{spec.description}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
