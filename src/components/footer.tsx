"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import type { SVGProps } from "react"

import { Button } from "@/components/ui/button"

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8.5h2V5.2c-.35-.05-1.55-.2-2.97-.2C11.1 5 9.5 6.6 9.5 9.3v2.2H7v3.3h2.5V21H13v-6.2h2.7l.4-3.3H13V9.6c0-.72.35-1.1 1-1.1Z" />
    </svg>
  )
}

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "Our Franchise", href: "/franchise" },
      { label: "Blog", href: "/blog" },
      { label: "Warranty Hub", href: "/warranty-hub" },
      { label: "Shop", href: "/shop" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Gallery", href: "#gallery" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
]

const SOCIALS = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
]

const TICKER = [
  "Ceramic Coating",
  "Paint Protection Film",
  "Interior Detailing",
  "Mobile Bookings",
  "AutoMods",
]

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group relative inline-block text-sm text-white/60 transition-colors duration-200 hover:text-white">
      {label}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-brand/10 blur-3xl"
      />

      {/* Newsletter strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center lg:px-24">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Stay in the loop.</h3>
            <p className="mt-2 max-w-sm text-sm text-white/50">
              Studio openings, seasonal offers, and detailing tips — no spam,
              unsubscribe anytime.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center gap-1.5 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5 backdrop-blur-md sm:w-auto"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="w-full min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
            />
            <Button
              type="submit"
              size="sm"
              className="shrink-0 rounded-full bg-brand text-brand-foreground hover:bg-brand/85"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="#top"
              className="inline-flex items-center rounded-xl bg-white/95 px-3 py-2 shadow-sm"
            >
              <Image
                src="/logo.png"
                alt="Mr. Detailer logo"
                width={172}
                height={130}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/50">
              Hand-finished paint correction, ceramic protection, and interior
              restoration from a studio obsessed with the details.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                {group.heading}
              </span>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contact
            </span>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-brand" />
                <Link href="tel:+10000000000" className="hover:text-brand">
                  +1 (000) 000-0000
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-brand" />
                <Link href="mailto:hello@mrdetailer.studio" className="hover:text-brand">
                  hello@mrdetailer.studio
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>123 Detail Ave, Your City</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service ticker */}
      <div className="relative overflow-hidden border-y border-white/10 bg-white/5 py-3">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10">
              {TICKER.map((label) => (
                <span
                  key={`${dup}-${label}`}
                  className="flex items-center gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-white/40"
                >
                  {label}
                  <span aria-hidden className="size-1 rounded-full bg-brand/60" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-24">
          <span>
            © {new Date().getFullYear()} Mr. Detailer Auto Care Studio. All
            rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand">
              Terms of Service
            </Link>
          </div>
        </div>

        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -3 }}
          className="absolute bottom-6 right-6 flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 backdrop-blur-md transition-colors duration-200 hover:border-brand/40 hover:text-brand lg:right-24"
        >
          <ArrowUp className="size-4" />
        </motion.button>
      </div>
    </footer>
  )
}
