"use client"

import Image from "next/image"
import Link from "next/link"
import { Droplets, PackageSearch, SprayCan, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { SectionHeading } from "@/components/section-heading"

const PRODUCTS = [
  {
    name: "Namex PPF Roll",
    price: "From $120 / roll",
    image: "/images/Namex white background only.png",
  },
  {
    name: "Ceramic Coating Kit",
    price: "$85",
    icon: Sparkles,
  },
  {
    name: "Microfiber Towel Set",
    price: "$24",
    icon: Droplets,
  },
  {
    name: "Interior Detail Spray",
    price: "$18",
    icon: SprayCan,
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ShopSection() {
  return (
    <section id="shop" className="relative overflow-hidden bg-secondary py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-0 size-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <SectionHeading
            eyebrow="Shop"
            title="Studio-grade care for between visits."
            className="max-w-xl"
          />
          <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.25em] text-white/35">
            <PackageSearch className="size-3.5" />
            In-studio only
          </span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:bg-white/[0.06]"
            >
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-ink/40">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />
                ) : (
                  product.icon && (
                    <product.icon className="size-10 text-brand/70 transition-transform duration-300 group-hover:scale-110" />
                  )
                )}
              </div>
              <div className="flex flex-1 flex-col gap-1 p-5">
                <h3 className="font-heading text-sm font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-xs text-white/50">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-xs text-white/40">
          Products are available for purchase in-studio.{" "}
          <Link href="#contact" className="text-brand hover:underline">
            Ask us about them
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
