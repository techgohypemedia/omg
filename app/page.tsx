import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { SacredToolsSection } from "@/components/sections/sacred-tools-section";
import { SpiritualBoxesSection } from "@/components/sections/spiritual-boxes-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { WhyTribeSection } from "@/components/sections/why-tribe-section";
import { ConsultationSection } from "@/components/sections/consultation-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { YouTubeSection } from "@/components/sections/youtube-section";
import { CommunitySection } from "@/components/sections/community-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FCFAF5] text-[#2A2317] antialiased">
      {/* Header & Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero — Om · Mārga · Gyān (DARK) */}
        <HeroSection />

        {/* 2. Sacred Instruments Inside Every Box (DARK) */}
        <SacredToolsSection />

        {/* 3 & 4. Our Spiritual Boxes & Six Single Pieces (LIGHT) */}
        <SpiritualBoxesSection />

        {/* 5. Our Programs (LIGHT BAND) */}
        <ProgramsSection />

        {/* 6. Our Philosophy — panchtatva (DARK) */}
        <PhilosophySection />

        {/* 7. Why OMG Tribe (LIGHT) */}
        <WhyTribeSection />

        {/* 8. Book a Consultation (LIGHT BAND) */}
        <ConsultationSection />

        {/* 9. What People Are Saying — video testimonials (LIGHT) */}
        <TestimonialsSection />

        {/* 10. Watch & Learn — YouTube (DARK) */}
        <YouTubeSection />

        {/* 11. Join Our Community (LIGHT BAND) */}
        <CommunitySection />
      </main>

      {/* 12. Footer (DARK) */}
      <FooterSection />
    </div>
  );
}
