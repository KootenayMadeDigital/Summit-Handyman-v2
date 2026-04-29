"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { areas } from "@/lib/areas";

const InteractiveMap = dynamic(() => import("./service-area-map.client"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/10] w-full rounded-2xl bg-surface-elevated border border-divider flex items-center justify-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-3 text-fg-muted">
        <div className="h-8 w-8 rounded-full border-2 border-accent-soft border-t-accent animate-spin motion-reduce:animate-none" aria-hidden />
        <span className="text-sm">Loading map...</span>
      </div>
    </div>
  ),
});

export function ServiceAreaMapSection() {
  return (
    <Section id="map" size="lg" className="relative overflow-hidden bg-surface-panel border-y border-divider">
      <Image
        src="/images/service-map-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-surface-panel/82" />
      <Container className="relative">
        <SectionTitle
          eyebrow="Coverage Map"
          title={
            <>
              {areas.length} cities across the{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                Lower Mainland.
              </span>
            </>
          }
          description="Click any pin to jump to that city's page. Same handyman, same standard, same direct line."
          align="center"
          className="mb-12"
        />
        <Reveal>
          <div className="summit-service-map relative z-0 isolate rounded-2xl overflow-hidden border border-divider-strong shadow-panel-lg" role="region" aria-label="Interactive Summit Handyman service area map">
            <InteractiveMap />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
