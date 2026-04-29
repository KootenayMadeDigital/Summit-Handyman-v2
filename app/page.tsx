import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BentoSection } from "@/components/sections/bento-section";
import { AreasSection } from "@/components/sections/areas-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { AboutSection } from "@/components/sections/about-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <ProjectsSection />
      <BentoSection />
      <AreasSection />
      <ReviewsSection />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
