import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { Container, Section } from "@/components/ui/section";

const stats = [
  { value: 200, suffix: "+", label: "Jobs completed in the Lower Mainland" },
  { value: 5.0, suffix: " ★", label: "Average rating on Google", decimals: 1 },
  { value: 24, suffix: " hr", label: "Typical email response time", prefix: "< " },
  { value: 100, suffix: "%", label: "Satisfaction guaranteed" },
];

export function StatsStrip() {
  return (
    <Section size="sm" className="border-y border-summit-slate/40 bg-summit-panel/40">
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter text-summit-gold">
                  <CountUp
                    end={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix}
                    decimals={s.decimals ?? 0}
                  />
                </p>
                <p className="mt-2 text-sm text-summit-stone leading-snug max-w-[18ch] mx-auto md:mx-0">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
