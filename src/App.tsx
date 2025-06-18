import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { BackToTop } from "./components/back-to-top"
import { HomeSection } from "@/components/sections/HomeSection"
import { HappeningsSection } from "@/components/sections/HappeningsSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { CoursesSection } from "@/components/sections/CoursesSection"
import { EngageSection } from "@/components/sections/EngageSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function App() {
  return (
    <div className="relative min-h-screen bg-background font-sans antialiased">
      <Navbar />
      <main>
        <HomeSection />
        <HappeningsSection />
        <AboutSection />
        <ServicesSection />
        <CoursesSection />
        <EngageSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
