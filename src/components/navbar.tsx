"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  Building2,
  ChevronDown,
  ChevronRight,
  Compass,
  Menu,
  Newspaper,
  PhoneCall,
  Send,
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
      { label: "Our Process", href: "#process" },
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

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  return isMobile
}

function NavLinkList({
  openSection,
  setOpenSection,
  onNavigate,
  compact,
  flyout,
}: {
  openSection: string | null
  setOpenSection: (v: string | null) => void
  onNavigate: () => void
  compact?: boolean
  flyout?: boolean
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
                className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink/70 transition-colors duration-150 hover:bg-brand/20 hover:text-ink"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink/5 text-ink/50 transition-colors duration-150 group-hover:bg-brand group-hover:text-brand-foreground">
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
                "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors duration-150",
                isOpen ? "bg-brand/25 text-ink" : "text-ink/70 hover:bg-brand/20 hover:text-ink"
              )}
            >
              <span
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors duration-150",
                  isOpen ? "bg-brand text-brand-foreground" : "bg-ink/5 text-ink/50 group-hover:bg-brand group-hover:text-brand-foreground"
                )}
              >
                <Icon className="size-4" />
              </span>
              <span className="flex-1">{link.label}</span>
              <ChevronDown
                className={cn(
                  "size-3.5 shrink-0 transition-transform duration-200",
                  isOpen && (flyout ? "rotate-90" : "rotate-180")
                )}
              />
            </button>
            {!flyout && (
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className={cn("flex flex-col gap-3 py-2", compact ? "pl-11" : "pl-11")}>
                      {link.groups.map((group, idx) => (
                        <div key={group.heading ?? idx}>
                          {group.heading && (
                            <span className="block px-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/40">
                              {group.heading}
                            </span>
                          )}
                          <div className={cn("flex flex-wrap gap-1.5", group.heading && "mt-1.5")}>
                            {group.items.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={onNavigate}
                                className="rounded-full border border-black/5 bg-black/[0.03] px-2.5 py-1 text-[0.78rem] leading-snug whitespace-nowrap text-ink/60 transition-colors duration-150 hover:border-brand/40 hover:bg-brand/15 hover:text-ink"
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
            )}
          </li>
        )
      })}
    </ul>
  )
}

function GroupsPanel({
  groups,
  onNavigate,
  title,
}: {
  groups: MenuGroup[]
  onNavigate: () => void
  title?: string
}) {
  const multiColumn = groups.length > 1

  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-black/5 bg-white/95 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl",
        multiColumn ? "w-[calc(100vw-22rem)] max-w-[560px]" : "w-60"
      )}
    >
      {title && (
        <div className="mb-3 border-b border-black/5 pb-2">
          <span className="text-sm font-semibold text-ink">{title}</span>
        </div>
      )}
      <div className={cn(multiColumn ? "grid grid-cols-2 gap-x-8 gap-y-1" : "flex flex-col")}>
        {groups.map((group, idx) => (
          <div key={group.heading ?? idx}>
            {group.heading && (
              <span className="block px-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ink/40">
                {group.heading}
              </span>
            )}
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-lg px-2 py-1.5 text-sm leading-snug text-ink/65 transition-colors duration-150 hover:bg-brand/15 hover:text-ink"
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

function DesktopSidebarRail({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-full border border-white/50 bg-white/85 p-2 shadow-2xl shadow-black/15 backdrop-blur-xl">
      <Link
        href="#top"
        onClick={onNavigate}
        className="mb-1 flex size-11 items-center justify-center rounded-full bg-white/70"
      >
        <Image
          src="/logo.png"
          alt="Mr. Detailer logo"
          width={172}
          height={130}
          className="h-6 w-auto object-contain"
          priority
        />
      </Link>

      <span aria-hidden className="my-1 h-px w-6 rounded-full bg-black/10" />

      <ul className="flex flex-col items-center gap-1">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon
          return (
            <li key={link.href} className="group relative">
              <Link
                href={link.href}
                onClick={onNavigate}
                className="flex size-11 items-center justify-center rounded-full text-ink/55 transition-all duration-200 hover:scale-105 hover:bg-brand hover:text-brand-foreground"
              >
                <Icon className="size-[1.1rem]" />
              </Link>
              <div className="invisible absolute left-full top-1/2 z-20 -translate-y-1/2 translate-x-1 pl-3 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
                {link.groups ? (
                  <GroupsPanel groups={link.groups} title={link.label} onNavigate={onNavigate} />
                ) : (
                  <span className="block whitespace-nowrap rounded-full border border-black/5 bg-white/95 px-3.5 py-2 text-sm font-medium text-ink shadow-xl shadow-black/10 backdrop-blur-xl">
                    {link.label}
                  </span>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      <span aria-hidden className="my-1 h-px w-6 rounded-full bg-black/10" />

      <div className="group relative">
        <Link
          href="#contact"
          onClick={onNavigate}
          className="flex size-11 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-[0_6px_16px_-4px_rgba(229,252,160,0.9)] transition-transform duration-200 hover:scale-105"
        >
          <Send className="size-[1.05rem]" />
        </Link>
        <div className="invisible absolute left-full top-1/2 z-20 -translate-y-1/2 translate-x-1 pl-3 opacity-0 transition-all duration-200 ease-out group-hover:visible group-hover:translate-x-0 group-hover:opacity-100">
          <span className="block whitespace-nowrap rounded-full border border-black/5 bg-white/95 px-3.5 py-2 text-sm font-medium text-ink shadow-xl shadow-black/10 backdrop-blur-xl">
            Get a Quote
          </span>
        </div>
      </div>
    </div>
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
    <div className="flex h-full w-[82vw] max-w-xs flex-col bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
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
          className="flex size-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <NavLinkList openSection={openSection} setOpenSection={setOpenSection} onNavigate={onNavigate} compact />
      </div>

      <div className="border-t border-black/5 px-4 py-4">
        <Button
          asChild
          className="w-full rounded-full bg-brand text-brand-foreground shadow-[0_6px_16px_-4px_rgba(229,252,160,0.9)] hover:bg-brand/85"
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
  const isMobile = useIsMobile()
  const [scrolled, setScrolled] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [openSection, setOpenSection] = React.useState<string | null>(null)

  React.useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7
      setScrolled(pastHero)
      if (!pastHero) setDrawerOpen(false)
    }
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

  const showDockedSidebar = !isMobile && !scrolled
  const showToggle = !showDockedSidebar && !drawerOpen

  return (
    <>
      {/* Docked sidebar — desktop only, visible while the hero is on screen. Submenus open on hover so it never blocks the hero. */}
      <AnimatePresence>
        {showDockedSidebar && (
          <motion.div
            key="hero-sidebar"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed left-6 top-1/2 z-50 -translate-y-1/2"
          >
            <DesktopSidebarRail onNavigate={closeAll} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle — always on for mobile, appears on desktop once scrolled past the hero */}
      <AnimatePresence>
        {showToggle && (
          <motion.button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setDrawerOpen(true)}
            initial={{ opacity: 0, x: -16, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -16, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className={cn(
              "fixed z-50 flex size-12 items-center justify-center rounded-full border border-black/5 bg-white/90 text-ink shadow-xl shadow-black/15 backdrop-blur-xl transition-transform duration-200 hover:scale-105",
              isMobile ? "left-4 top-4" : "left-6 top-1/2 -translate-y-1/2"
            )}
          >
            {isMobile ? <Menu className="size-5" /> : <ChevronRight className="size-5" />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Drawer */}
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
            {isMobile ? (
              <motion.div
                key="mobile-panel"
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
            ) : (
              <motion.div
                key="desktop-panel"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed left-6 top-1/2 z-50 -translate-y-1/2"
              >
                <div className="relative">
                  <DesktopSidebarRail onNavigate={closeAll} />
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={closeAll}
                    className="absolute -top-2 -right-2 flex size-7 items-center justify-center rounded-full border border-black/5 bg-white text-ink shadow-lg"
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </React.Fragment>
        )}
      </AnimatePresence>
    </>
  )
}
