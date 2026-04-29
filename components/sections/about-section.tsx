import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <Section id="about" size="lg" className="bg-surface relative">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="photo-grade relative aspect-[4/5] rounded-2xl overflow-hidden border border-divider-strong shadow-panel-lg">
              <Image
                src="/images/about-brody.webp"
                alt={`${site.owner}, owner of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-summit-black via-summit-black/75 to-transparent">
                <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
                  Owner & Founder
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-summit-mist">
                  {site.owner}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7 space-y-6" delay={0.1}>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-accent font-semibold">
              About
            </p>
            <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-fg-strong text-balance leading-[1.05]">
              Built on{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                integrity.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-fg/85 leading-relaxed text-pretty max-w-2xl font-serif">
              {site.about}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="secondary" size="md" withArrow>
                Read the full story
              </Button>
              <a
                href={site.social.facebook.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent transition-colors"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-accent transition-colors"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
