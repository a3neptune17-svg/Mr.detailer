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
      <section id="process" className="relative overflow-hidden bg-secondary/60 py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-brand/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:pl-24">
          <SectionHeading
            eyebrow="Process"
            title="A simple, transparent workflow."
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

      <Footer />
    </div>
  )
}
