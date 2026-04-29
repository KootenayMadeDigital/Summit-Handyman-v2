import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BentoSection } from "@/components/sections/bento-section";
import { AreasSection } from "@/components/sections/areas-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { AboutSection } from "@/components/sections/about-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { SectionDivider } from "@/components/ui/section-divider";

/**
 * HOME. single-page conversion arc, no redundancy.
 *  1. Hero ........... "Can I trust this person?"
 *  2. Services ....... "Do they do MY job?"
 *  3. Projects ....... "Have they done it well before?"
 *  4. Bento .......... "Why pick THIS handyman?" (also covers trust signals)
 *  5. Areas .......... "Do they work in my neighborhood?"
 *  6. Reviews ........ "What do people say?"
 *  7. About .......... "Who am I actually hiring?"
 *  8. FAQ (top 5) .... "What's the catch?"
 *  9. Final CTA ...... "Take action."
 *
 * Removed (covered by other sections or pages):
 *  - Stats Strip (Bento covers same 4 signals with richer treatment)
 *  - Service Area Map on home (lives on /areas where it's the centerpiece)
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <SectionDivider variant="mark" />
      <ProjectsSection />
      <BentoSection />
      <SectionDivider variant="mark" />
      <AreasSection />
      <ReviewsSection />
      <AboutSection />
      <FAQSection limit={5} />
      <FinalCTA />
    </>
  );
}
