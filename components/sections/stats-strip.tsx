import { Star, ShieldCheck, Mail, HandCoins } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";

/**
 * STATS STRIP. answers "What's the deal here, in one glance?"
 * Four concrete, verifiable claims directly under the hero so cold visitors
 * absorb the proposition without scrolling further.
 */
const stats = [
  { Icon: Star, headline: "5.0", label: "rating", sub: "on Google" },
  { Icon: HandCoins, headline: "$150", label: "minimum", sub: "per job · no hourly" },
  { Icon: ShieldCheck, headline: "Licensed", label: "& Insured", sub: "Comprehensive liability" },
  { Icon: Mail, headline: "24-hr", label: "reply", sub: "Email-first contact" },
];

export function StatsStrip() {
  return (
    <Section size="sm" className="bg-surface-panel border-y border-divider">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-8 divide-x-0 md:divide-x md:divide-[var(--border)]">
            {stats.map((s, i) => (
              <li
                key={s.headline + s.label}
                className="flex flex-col items-center md:items-start text-center md:text-left min-w-0 md:px-6 first:md:pl-0 last:md:pr-0"
                style={{ marginLeft: i === 0 ? 0 : undefined }}
              >
                <s.Icon
                  className="h-5 w-5 text-accent mb-3"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <p className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold tracking-tight text-fg-strong leading-none">
                  {s.headline}
                </p>
                <p className="mt-1 font-display text-sm sm:text-base font-semibold text-accent">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-fg-muted leading-snug">{s.sub}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
