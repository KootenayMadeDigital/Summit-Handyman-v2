import { ArrowRight, Mail, Camera, FileText, Clock } from "lucide-react";
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
          <div className="text-center space-y-6 sm:space-y-7">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
              The fastest path to a quote
            </p>
            <h2 className="font-display text-display-xl font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
              Submit the quote form. <br />
              <span className="font-serif italic font-normal text-gradient-gold">
                Brody handles the rest.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-fg/85 max-w-xl mx-auto leading-relaxed">
              The form takes about 90 seconds and lets Brody review the scope, photos, and timing before reaching out. That way the first reply already has the answers you need.
            </p>

            {/* Why the form */}
            <ul className="grid sm:grid-cols-3 gap-3 sm:gap-4 pt-2 max-w-2xl mx-auto text-left">
              <li className="summit-card-motion flex items-start gap-3 p-4 rounded-xl bg-surface-panel border border-divider">
                <FileText className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <p className="font-display font-bold text-sm text-fg-strong leading-tight">Documented</p>
                  <p className="text-xs text-fg-muted mt-0.5">Brody has all the details on hand for the call.</p>
                </div>
              </li>
              <li className="summit-card-motion flex items-start gap-3 p-4 rounded-xl bg-surface-panel border border-divider">
                <Camera className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <p className="font-display font-bold text-sm text-fg-strong leading-tight">Photos help</p>
                  <p className="text-xs text-fg-muted mt-0.5">Attach up to 5 for a more accurate estimate.</p>
                </div>
              </li>
              <li className="summit-card-motion flex items-start gap-3 p-4 rounded-xl bg-surface-panel border border-divider">
                <Clock className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" strokeWidth={1.6} />
                <div>
                  <p className="font-display font-bold text-sm text-fg-strong leading-tight">24-hour reply</p>
                  <p className="text-xs text-fg-muted mt-0.5">Most submissions get an answer within 24 hours.</p>
                </div>
              </li>
            </ul>

            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <MagneticCTA href="/quote" size="lg">
                Submit a quote request
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </MagneticCTA>
            </div>

            <p className="pt-2 text-sm text-fg-muted">
              Prefer to skip the form? You can{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-accent font-semibold underline-offset-4 hover:underline inline-flex items-center gap-1"
              >
                <Mail className="h-3.5 w-3.5" />
                email Brody directly
              </a>
              {" "}at {site.contact.email}.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
