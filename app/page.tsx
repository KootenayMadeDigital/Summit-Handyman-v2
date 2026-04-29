import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BentoSection } from "@/components/sections/bento-section";
import { AreasSection } from "@/components/sections/areas-section";
import { ServiceAreaMapSection } from "@/components/sections/service-area-map";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { AboutSection } from "@/components/sections/about-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionDivider } from "@/components/ui/section-divider";

/**
 * HOME PAGE — narrative arc:
 *  1. Hero ............... "Who is this and can I trust them?"
 *  2. Stats Strip ........ "What's the deal in one glance?"
 *  3. Services ........... "Do they do MY job?"
 *  4. Projects ........... "Have they done it well before?"
 *  5. Bento (Why Summit).. "Why this person specifically?"
 *  6. Areas + Map ........ "Do they work in my neighborhood?"
 *  7. Reviews ............ "What do people say?"
 *  8. About .............. "Who am I actually hiring?"
 *  9. FAQ ................ "What's the catch?"
 * 10. Final CTA .......... "Take action."
 *
 * Section backgrounds alternate (surface → surface-panel) to create rhythm.
 * SectionDivider is used at meaningful transitions for visual breath.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesSection />
      <SectionDivider variant="mark" />
      <ProjectsSection />
      <BentoSection />
      <SectionDivider variant="mark" />
      <AreasSection />
      <ServiceAreaMapSection />
      <ReviewsSection />
      <SectionDivider variant="dot" />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
