import { ArrowRight, Mail, MessageSquare, MessageCircle } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <Section size="lg" className="grainient-promise relative overflow-hidden">
      <Container size="narrow">
        <Reveal>
          <div className="text-center space-y-7">
            <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
              Ready to fix it?
            </p>
            <h2 className="font-display text-display-xl font-extrabold tracking-tightest text-summit-mist text-balance">
              Send a few details. <br />
              <span className="font-serif italic font-normal text-gradient-gold">
                Brody handles the rest.
              </span>
            </h2>
            <p className="text-lg text-summit-mist/80 max-w-xl mx-auto leading-relaxed">
              Most quotes come back within 24 hours. Need it faster? Text or message — Brody
              checks all three throughout the day.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticCTA href="/quote" size="lg">
                Start your quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </MagneticCTA>
              <Button
                href={`mailto:${site.contact.email}`}
                variant="secondary"
                size="lg"
              >
                <Mail className="h-5 w-5" />
                Email Brody
              </Button>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-3 text-sm text-summit-stone">
              <a
                href={`mailto:${site.contact.email}`}
                className="inline-flex items-center gap-2 hover:text-summit-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                {site.contact.email}
              </a>
              <a
                href={`sms:${site.contact.phoneTel}`}
                className="inline-flex items-center gap-2 hover:text-summit-gold transition-colors"
              >
                <MessageSquare className="h-4 w-4" />
                Text {site.contact.phone}
              </a>
              <a
                href={site.contact.messenger}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 hover:text-summit-gold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Messenger
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
