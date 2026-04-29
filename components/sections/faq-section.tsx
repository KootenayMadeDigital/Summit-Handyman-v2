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
    <Section id="faq" size="lg">
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
          className="mb-14"
        />

        <Reveal>
          <ul className="divide-y divide-summit-slate/40 border-y border-summit-slate/40">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="w-full text-left py-6 flex items-center justify-between gap-6 group"
                  >
                    <span className="font-display text-lg md:text-xl font-bold text-summit-mist group-hover:text-summit-gold transition-colors">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "flex-shrink-0 h-9 w-9 rounded-full border border-summit-slate/60 flex items-center justify-center transition-all duration-300",
                        isOpen
                          ? "bg-summit-gold border-summit-gold rotate-45 text-summit-black"
                          : "text-summit-mist group-hover:border-summit-gold group-hover:text-summit-gold",
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
                      <p className="text-summit-mist/80 leading-relaxed text-pretty max-w-2xl">
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
