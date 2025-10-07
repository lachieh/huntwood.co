import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ApproachSection } from "@/components/approach-section"
import { ServicesSection } from "@/components/services-section"
import { ImpactSection } from "@/components/impact-section"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ApproachSection />
      <ServicesSection />
      <ImpactSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
