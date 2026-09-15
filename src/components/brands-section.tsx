"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Award, ArrowUpRight, BadgeCheck, Layers, ShieldCheck } from "lucide-react"

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
    icon: Layers,
    label: "Film Thickness",
    value: "190 µm",
    description: "TPU self-healing topcoat",
  },
  {
    icon: ShieldCheck,
    label: "Protection",
    value: "10-Year",
    description: "Manufacturer warranty",
  },
  {
    icon: Award,
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
    <section className="relative overflow-hidden border-y border-ink/10 bg-white py-24 sm:py-28">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-4 right-0 z-0 select-none whitespace-nowrap text-[26vw] font-heading font-bold italic leading-none tracking-tighter text-ink/[0.035] sm:text-[15vw]"
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
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={container}
            className="max-w-xl"
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <SectionHeading
                eyebrow="Official Protection Partner"
                tone="light"
                title={
                  <>
                    <span className="block font-heading text-3xl font-medium leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                      Every panel we finish
                    </span>
                    <span className="mt-1 block font-heading text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-5xl">
                      is backed by{" "}
                      <span className="rounded-sm bg-brand px-1.5 text-brand-foreground">
                        Namex.
                      </span>
                    </span>
                  </>
                }
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-6 max-w-lg text-sm leading-7 text-ink/60 sm:text-base"
            >
              We don&apos;t just apply paint protection film — we install
              Namex: a self-healing TPU engineered to absorb rock chips,
              resist yellowing, and disappear into the finish. It&apos;s the
              only film that leaves our studio with a Mr. Detailer signature,
              because it&apos;s the only film that&apos;s earned it.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: "easeOut" }}>
              <Link
                href="#gallery"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-200 hover:text-brand-foreground"
              >
                <span className="border-b border-transparent pb-0.5 group-hover:border-brand">
                  See the results
                </span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3"
            >
              {SPECS.map((spec) => (
                <div key={spec.label} className="flex flex-col gap-2 bg-ink p-6">
                  <spec.icon className="size-4 text-brand" />
                  <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
                    {spec.value}
                  </span>
                  <span className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white/40">
                    {spec.label}
                  </span>
                  <span className="text-xs text-white/50">{spec.description}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xs lg:mx-0 lg:ml-auto"
          >
            <div className="relative">
              <div className="absolute -right-6 -top-8 w-32 rotate-6 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl shadow-black/20 sm:w-40">
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

              <div className="relative -rotate-3 overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-2xl shadow-black/20">
                <ScrollBulge>
                  <video
                    src="/videos/hero.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="aspect-[4/5] w-full object-cover"
                  />
                </ScrollBulge>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
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
                  className="w-1/2 overflow-hidden rounded-lg border border-ink/10 bg-white"
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
      </div>
    </section>
  )
}
