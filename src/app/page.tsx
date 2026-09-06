import Link from "next/link"
import {
  Award,
  CalendarCheck,
  Car,
  Droplets,
  Gauge,
  ShieldCheck,
  Sparkles,
  Timer,
} from "lucide-react"

import { AboutSection } from "@/components/about-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ProcessSteps } from "@/components/process-steps"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const SERVICES = [
  {
    icon: Sparkles,
    title: "Ceramic Coating",
    description:
      "Multi-year hydrophobic protection that keeps paint glossy and easy to clean.",
  },
  {
    icon: Droplets,
    title: "Interior Deep Clean",
    description:
      "Steam extraction, leather conditioning, and odor removal for a showroom cabin.",
  },
  {
    icon: Gauge,
    title: "Paint Correction",
    description:
      "Machine polishing to remove swirls, oxidation, and light scratches.",
  },
  {
    icon: Car,
    title: "Mobile Detailing",
    description:
      "Full studio-grade detailing at your home or office, on your schedule.",
  },
]

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden bg-ink text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink/85"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(229,252,160,0.18) 0%, rgba(11,13,10,0) 70%)",
          }}
        />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-brand">
            <ShieldCheck className="size-3.5" />
            Certified ceramic coating studio
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Detailing that makes your car look{" "}
            <span className="text-brand">factory-new</span>, every time.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/60 sm:text-lg">
            Hand-finished paint correction, ceramic protection, and interior
            restoration — delivered by a studio obsessed with the details.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand px-6 text-brand-foreground hover:bg-brand/85"
            >
              <Link href="#contact">
                <CalendarCheck className="size-4" />
                Book Detailing
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Brand partner */}
      <BrandsSection />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <section id="services" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Services"
            title="Everything your car needs, nothing it doesn't."
            className="max-w-xl"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-brand-foreground transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:pl-24">
          <SectionHeading
            eyebrow="Process"
            title="A simple, transparent workflow."
            className="max-w-xl"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Gallery placeholder */}
      <section id="gallery" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Gallery" title="Recent transformations." />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-ink via-ink/90 to-ink/70"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Pricing" title="Packages for every finish." />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { name: "Essential", price: "$89", desc: "Hand wash, vacuum, and interior wipe-down." },
              { name: "Signature", price: "$219", featured: true, desc: "Paint decontamination, wax, full interior detail." },
              { name: "Ceramic", price: "$549", desc: "Paint correction with multi-year ceramic coating." },
            ].map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.featured
                    ? "rounded-3xl bg-ink p-8 text-white shadow-xl"
                    : "rounded-3xl border border-black/5 bg-white p-8"
                }
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  {plan.featured && (
                    <Award className="size-4 text-brand" />
                  )}
                </div>
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
                <Button
                  asChild
                  className={
                    plan.featured
                      ? "mt-6 w-full rounded-full bg-brand text-brand-foreground hover:bg-brand/85"
                      : "mt-6 w-full rounded-full bg-ink text-white hover:bg-ink/85"
                  }
                >
                  <Link href="#contact">Choose {plan.name}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-ink py-24 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <Timer className="size-8 text-brand" />
          <SectionHeading
            eyebrow="Book Now"
            title="Ready for a car that turns heads?"
            align="center"
            invert
            className="mt-4"
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
        </div>
      </section>

      <Footer />
    </div>
  )
}