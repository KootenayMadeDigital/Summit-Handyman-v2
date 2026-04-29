import { Star, ShieldCheck, Mail, HandCoins } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";

const stats = [
  {
    Icon: Star,
    headline: "5.0",
    label: "rating",
    sub: "on Google",
  },
  {
    Icon: HandCoins,
    headline: "$150",
    label: "minimum",
    sub: "per job",
  },
  {
    Icon: ShieldCheck,
    headline: "Licensed",
    label: "& Insured",
    sub: "Comprehensive liability",
  },
  {
    Icon: Mail,
    headline: "24-hr",
    label: "response",
    sub: "Email-first",
  },
];

export function StatsStrip() {
  return (
    <Section size="sm" className="border-y border-summit-slate/40 bg-summit-panel/40">
      <Container>
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-6">
            {stats.map((s) => (
              <li
                key={s.headline + s.label}
                className="flex flex-col items-center md:items-start text-center md:text-left min-w-0 px-2"
              >
                <s.Icon
                  className="h-5 w-5 text-summit-gold mb-3"
                  strokeWidth={1.6}
                  aria-hidden
                />
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-summit-mist leading-none">
                  {s.headline}
                </p>
                <p className="mt-1 font-display text-sm sm:text-base font-semibold text-summit-gold">
                  {s.label}
                </p>
                <p className="mt-1 text-xs text-summit-stone leading-snug">{s.sub}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  );
}
