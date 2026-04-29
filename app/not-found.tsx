import { Container, Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <Section size="lg" className="grainient-promise relative pt-32 md:pt-40">
      <Container size="narrow">
        <div className="text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
            404 · Lost on the trail
          </p>
          <h1 className="font-display text-display-xl font-extrabold tracking-tightest text-summit-mist text-balance leading-[1]">
            That page didn't{" "}
            <span className="font-serif italic font-normal text-gradient-gold">make it.</span>
          </h1>
          <p className="text-lg text-summit-mist/80 max-w-xl mx-auto">
            The page you're looking for doesn't exist, or it moved. Head back home or shoot Brody
            an email if you can't find what you need.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button href="/" size="lg">
              <Home className="h-4 w-4" />
              Back home
            </Button>
            <Button href={`mailto:${site.contact.email}`} variant="secondary" size="lg">
              <Mail className="h-4 w-4" />
              Email Brody
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
