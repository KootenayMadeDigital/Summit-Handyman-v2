"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { faqs } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <Section id="faq" size="lg" className="bg-surface-panel border-y border-divider">
      <Container size="narrow">
        <SectionTitle
          eyebrow="Common Questions"
          title={
            <>
              Quick answers to{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                what most people ask.
              </span>
            </>
          }
          align="center"
          className="mb-12 sm:mb-14"
        />

        <Reveal>
          <ul className="divide-y divide-[var(--border)] border-y border-divider">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full text-left py-5 sm:py-6 flex items-center justify-between gap-4 sm:gap-6 group"
                  >
                    <span className="font-display text-base sm:text-lg md:text-xl font-bold text-fg-strong group-hover:text-accent transition-colors text-balance min-w-0 flex-1">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "flex-shrink-0 h-9 w-9 rounded-full border border-divider-strong flex items-center justify-center transition-all duration-300",
                        isOpen
                          ? "bg-accent border-accent rotate-45 text-summit-black"
                          : "text-fg group-hover:border-accent group-hover:text-accent",
                      )}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    id={`faq-${i}`}
                    className={cn(
                      "grid transition-all duration-300 ease-editorial",
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-fg/85 leading-relaxed text-pretty max-w-2xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
