"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  Building2,
  ChevronDown,
  Compass,
  Newspaper,
  Phone,
  PhoneCall,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react"

import { cn } from "cn"
import { Button } from "@/components/ui/button"

type MenuItem = { label: string; href: string }
type MenuGroup = { heading?: string; items: MenuItem[] }
type NavLink = { href: string; label: string; icon: LucideIcon; groups?: MenuGroup[] }

const HOME_MENU: MenuGroup[] = [
  {
    heading: "Explore",
    items: [
      { label: "Overview", href: "#top" },
      { label: "About Us", href: "#about" },
      { label: "Our Workflow", href: "#process" },
      { label: "Gallery", href: "#gallery" },
    ],
  },
  {
    heading: "More",
    items: [
      { label: "Our Story", href: "#our-story" },
      { label: "Vision & Mission", href: "#vision-mission" },
      { label: "Behind the Drama", href: "#behind-the-drama" },
      { label: "Protection Science", href: "#protection-science" },
      { label: "FAQ's", href: "#faqs" },
    ],
  },
]

const SERVICES_MENU: MenuGroup[] = [
  {
    heading: "Core Services",
    items: [
      { label: "PPF", href: "/services/ppf" },
      { label: "Surface Coating", href: "/services/surface-coating" },
      { label: "Detailing Packages", href: "/services/detailing-packages" },
      { label: "Automods", href: "/services/automods" },
    ],
  },
  {
    heading: "Packages",
    items: [
      { label: "Car Care Package", href: "/services/car-care-package" },
      { label: "Paint Correction Package", href: "/services/paint-correction-package" },
      { label: "Paint Enhancement Package", href: "/services/paint-enhancement-package" },
      { label: "Interior + Exterior Care Package", href: "/services/interior-exterior-care-package" },
      { label: "Ultimate Protection Package", href: "/services/ultimate-protection-package" },
      { label: "Gloss Enrichment Package", href: "/services/gloss-enrichment-package" },
      { label: "Ceramic Protection Package", href: "/services/ceramic-protection-package" },
    ],
  },
]

const SHOP_MENU: MenuGroup[] = [
  {
    items: [
      { label: "Exterior Care", href: "/shop/exterior-care" },
      { label: "Interior Care", href: "/shop/interior-care" },
      { label: "Accessories", href: "/shop/accessories" },
      { label: "Detailing Kits", href: "/shop/detailing-kits" },
    ],
  },
]

const WARRANTY_MENU: MenuGroup[] = [
  {
    items: [
      { label: "Check Your Warranty", href: "/warranty-hub/check-warranty" },
      { label: "Maintenance Schedule", href: "/warranty-hub/maintenance-schedule" },
      { label: "Annual Inspection", href: "/warranty-hub/annual-inspection" },
    ],
  },
]

const NAV_LINKS: NavLink[] = [
  { href: "#top", label: "Home", icon: Compass, groups: HOME_MENU },
  { href: "#services", label: "Our Services", icon: Wrench, groups: SERVICES_MENU },
  { href: "/shop", label: "Shop", icon: ShoppingBag, groups: SHOP_MENU },
  { href: "/warranty-hub", label: "Warranty Hub", icon: ShieldCheck, groups: WARRANTY_MENU },
  { href: "/franchise", label: "Our Franchise", icon: Building2 },
  { href: "/blog", label: "Blog", icon: Newspaper },
  { href: "#contact", label: "Contact Us", icon: PhoneCall },
]

function NavLinkList({
  openSection,
  setOpenSection,
  onNavigate,
}: {
  openSection: string | null
  setOpenSection: (v: string | null) => void
  onNavigate: () => void
}) {
  return (
    <ul className="flex flex-col gap-1">
      {NAV_LINKS.map((link) => {
        const isOpen = openSection === link.href
        const Icon = link.icon

        if (!link.groups) {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onNavigate}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/70 transition-colors duration-150 hover:bg-brand/15 hover:text-white"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-white/5 text-white/50 transition-colors duration-150 group-hover:bg-brand group-hover:text-brand-foreground">
                  <Icon className="size-4" />
                </span>
                {link.label}
              </Link>
            </li>
          )
        }

        return (
          <li key={link.href}>
            <button
              type="button"
              onClick={() => setOpenSection(isOpen ? null : link.href)}
              aria-expanded={isOpen}
              className={cn(
                "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-150",
                isOpen ? "bg-brand/20 text-white" : "text-white/70 hover:bg-brand/15 hover:text-white"
              )}
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-md transition-colors duration-150",
                  isOpen ? "bg-brand text-brand-foreground" : "bg-white/5 text-white/50 group-hover:bg-brand group-hover:text-brand-foreground"
                )}
              >
                <Icon className="size-4" />
              </span>
              <span className="flex-1">{link.label}</span>
              <ChevronDown
                className={cn("size-3.5 shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-3 py-2 pl-11">
                    {link.groups.map((group, idx) => (
                      <div key={group.heading ?? idx}>
                        {group.heading && (
                          <span className="block px-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                            {group.heading}
                          </span>
                        )}
                        <div className={cn("flex flex-wrap gap-1.5", group.heading && "mt-1.5")}>
                          {group.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={onNavigate}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.78rem] leading-snug whitespace-nowrap text-white/60 transition-colors duration-150 hover:border-brand/40 hover:bg-brand/15 hover:text-white"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}

function GroupsPanel({ groups, onNavigate }: { groups: MenuGroup[]; onNavigate: () => void }) {
  const multiColumn = groups.length > 1

  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-ink/95 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl",
        multiColumn ? "w-[calc(100vw-4rem)] max-w-[560px]" : "w-60"
      )}
    >
      <div className={cn(multiColumn ? "grid grid-cols-2 gap-x-8 gap-y-1" : "flex flex-col")}>
        {groups.map((group, idx) => (
          <div key={group.heading ?? idx}>
            {group.heading && (
              <span className="block px-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/40">
                {group.heading}
              </span>
            )}
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-md px-2 py-1.5 text-sm leading-snug text-white/65 transition-colors duration-150 hover:bg-brand/15 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function DesktopNavLinks({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav className="hidden items-center gap-1 lg:flex">
      {NAV_LINKS.map((link) => {
        if (!link.groups) {
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onNavigate}
              className="group relative px-3.5 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/65 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <span
                aria-hidden
                className="absolute inset-x-3.5 -bottom-0.5 h-px origin-center scale-x-0 bg-brand transition-transform duration-200 ease-out group-hover:scale-x-100"
              />
            </Link>
          )
        }

        return (
          <div key={link.href} className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 px-3.5 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/65 transition-colors duration-200 hover:text-white"
            >
              {link.label}
              <ChevronDown className="size-3.5 transition-transform duration-200 group-hover:rotate-180" />
              <span
                aria-hidden
                className="absolute inset-x-3.5 -bottom-0.5 h-px origin-center scale-x-0 bg-brand transition-transform duration-200 ease-out group-hover:scale-x-100"
              />
            </button>
            <div className="invisible absolute left-0 top-full z-20 pt-3 opacity-0 transition-all duration-150 ease-out group-hover:visible group-hover:opacity-100">
              <GroupsPanel groups={link.groups} onNavigate={onNavigate} />
            </div>
          </div>
        )
      })}
    </nav>
  )
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <span className="relative flex size-4 flex-col items-center justify-center">
      <motion.span
        animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute h-px w-4 bg-current"
      />
      <motion.span
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="absolute h-px w-4 bg-current"
      />
      <motion.span
        animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute h-px w-4 bg-current"
      />
    </span>
  )
}

function MobileDrawer({
  openSection,
  setOpenSection,
  onNavigate,
  onClose,
}: {
  openSection: string | null
  setOpenSection: (v: string | null) => void
  onNavigate: () => void
  onClose: () => void
}) {
  return (
    <div className="flex h-full w-[82vw] max-w-xs flex-col bg-ink shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <Link href="#top" onClick={onNavigate} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Mr. Detailer logo"
            width={172}
            height={130}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="flex size-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/5 hover:text-white"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <NavLinkList openSection={openSection} setOpenSection={setOpenSection} onNavigate={onNavigate} />
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <Button
          asChild
          className="w-full rounded-md bg-brand text-sm font-semibold uppercase tracking-wide text-brand-foreground shadow-[0_6px_16px_-4px_rgba(255,255,255,0.35)] hover:bg-white"
        >
          <Link href="#contact" onClick={onNavigate}>
            Get a Quote
          </Link>
        </Button>
      </div>
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [openSection, setOpenSection] = React.useState<string | null>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [drawerOpen])

  const closeAll = () => {
    setDrawerOpen(false)
    setOpenSection(null)
  }

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-ink/85 shadow-lg shadow-black/30 backdrop-blur-xl"
            : "bg-gradient-to-b from-ink/60 via-ink/20 to-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
          <Link href="#top" onClick={closeAll} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Mr. Detailer logo"
              width={172}
              height={130}
              className="h-8 w-auto object-contain sm:h-9"
              priority
            />
          </Link>

          <DesktopNavLinks onNavigate={closeAll} />

          <div className="flex items-center gap-4">
            <Link
              href="tel:+10000000000"
              className="hidden items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/60 transition-colors duration-200 hover:text-white xl:flex"
            >
              <Phone className="size-3.5 text-brand" />
              +1 (000) 000-0000
            </Link>
            <span aria-hidden className="hidden h-6 w-px bg-white/15 xl:block" />
            <Button
              asChild
              className="hidden rounded-full bg-brand px-5 text-xs font-semibold uppercase tracking-wide text-brand-foreground hover:bg-white lg:inline-flex"
            >
              <Link href="#contact" onClick={closeAll}>
                Get a Quote
              </Link>
            </Button>
            <button
              type="button"
              aria-label={drawerOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setDrawerOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-150 hover:bg-white/10 lg:hidden"
            >
              <MenuGlyph open={drawerOpen} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <React.Fragment>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAll}
              className="fixed inset-0 z-40 bg-ink/30 backdrop-blur-[2px]"
            />
            <motion.div
              key="panel"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50"
            >
              <MobileDrawer
                openSection={openSection}
                setOpenSection={setOpenSection}
                onNavigate={closeAll}
                onClose={closeAll}
              />
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  )
}
