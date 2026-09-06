import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import type { SVGProps } from "react"

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

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
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
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors duration-200 hover:border-brand/40 hover:text-brand"
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
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-brand"
                    >
                      {link.label}
                    </Link>
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

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} Mr. Detailer Auto Care Studio. All
            rights reserved.
          </span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
