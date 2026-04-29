"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { areas } from "@/lib/areas";

const InteractiveMap = dynamic(() => import("./service-area-map.client"), {
  ssr: false,
  loading: () => (
    <div className="aspect-[16/10] w-full rounded-2xl bg-summit-panel border border-summit-slate/60 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-summit-stone">
        <div className="h-8 w-8 rounded-full border-2 border-summit-gold/30 border-t-summit-gold animate-spin" />
        <span className="text-sm">Loading map…</span>
      </div>
    </div>
  ),
});

export function ServiceAreaMapSection() {
  return (
    <Section id="map" size="lg" className="relative bg-summit-panel/30 border-y border-summit-slate/40">
      <Container>
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
          <div className="rounded-2xl overflow-hidden border border-summit-slate/60 shadow-panel-lg">
            <InteractiveMap />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
