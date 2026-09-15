import { AboutSection } from "@/components/about-section"
import { BrandsSection } from "@/components/brands-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"
import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSteps } from "@/components/process-steps"
import { SectionHeading } from "@/components/section-heading"
import { ServicesSection } from "@/components/services-section"
import { ShopSection } from "@/components/shop-section"

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Navbar />

      {/* Hero */}
      <HeroSection />

      {/* Brand partner */}
      <BrandsSection />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Process */}
      <section id="process" className="relative overflow-hidden bg-secondary py-24">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-8 z-0 -translate-x-1/2 select-none whitespace-nowrap text-[16vw] font-heading font-bold italic tracking-tighter text-white/[0.03] sm:text-[10vw]"
        >
          workflow
        </span>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-brand/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:pl-24">
          <SectionHeading
            eyebrow="Workflow"
            title="Controlled from inspection to release."
            className="max-w-xl"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* Pricing */}
      <PricingSection />

      {/* Contact */}
      <ContactSection />

      {/* Shop */}
      <ShopSection />

      <Footer />
    </div>
  )
}
