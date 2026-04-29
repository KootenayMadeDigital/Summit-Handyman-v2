import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function AboutSection() {
  return (
    <Section id="about" size="lg" className="bg-summit-panel/40 border-y border-summit-slate/40">
      <Container>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-summit-slate/60 shadow-panel-lg">
              <Image
                src="/images/about-brody.webp"
                alt={`${site.owner}, owner of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover [filter:saturate(0.9)_contrast(1.05)]"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-summit-black via-summit-black/70 to-transparent">
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
            <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold">
              About
            </p>
            <h2 className="font-display text-display-lg font-extrabold tracking-tightest text-summit-mist text-balance">
              Built on{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                integrity.
              </span>
            </h2>
            <p className="text-lg text-summit-mist/85 leading-relaxed text-pretty max-w-2xl font-serif">
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
                className="inline-flex items-center gap-2 text-sm text-summit-mist/80 hover:text-summit-gold transition-colors"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-sm text-summit-mist/80 hover:text-summit-gold transition-colors"
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
