import Image from "next/image";
import {
  Mail,
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  HandCoins,
} from "lucide-react";
import { Container, Section, SectionTitle } from "@/components/ui/section";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";

export function BentoSection() {
  return (
    <Section size="lg" className="grainient-promise relative overflow-hidden">
      <Container>
        <SectionTitle
          eyebrow="Why Summit"
          title={
            <>
              Lower Mainland homeowners{" "}
              <span className="font-serif italic font-normal text-gradient-gold">
                pick Brody
              </span>{" "}
              for one reason.
            </>
          }
          description="Reliability. Everything else — the pricing, the response time, the warranty — flows from that."
          align="center"
          className="mb-14"
        />

        <RevealStagger className="grid grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-4 md:gap-5 auto-rows-[12rem] md:auto-rows-[14rem]">
          {/* HERO TILE — promise + portrait — spans 2x2 */}
          <RevealItem className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl border border-summit-gold/30 bg-summit-panel group">
            <Image
              src="/images/about-brody.webp"
              alt={`${site.owner}, owner of ${site.name}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-summit-black via-summit-black/70 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-summit-gold font-semibold mb-3">
                The Brody Promise
              </p>
              <p className="font-serif text-2xl md:text-3xl text-summit-mist leading-snug max-w-md text-balance">
                "{site.promise}"
              </p>
              <p className="mt-4 text-sm text-summit-mist/70">
                — {site.owner}, founder
              </p>
            </div>
          </RevealItem>

          {/* RATING TILE */}
          <RevealItem className="relative overflow-hidden rounded-2xl border border-summit-slate/60 bg-summit-panel p-6 md:p-7 flex flex-col justify-between group hover:border-summit-gold/60 transition-colors">
            <div className="flex items-center gap-1.5 text-summit-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-summit-gold" strokeWidth={0} />
              ))}
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl font-extrabold text-summit-mist">
                <CountUp end={5.0} decimals={1} />
              </p>
              <p className="mt-2 text-sm text-summit-stone">on Google · live count</p>
            </div>
          </RevealItem>

          {/* PRICING TILE */}
          <RevealItem className="relative overflow-hidden rounded-2xl border border-summit-slate/60 bg-summit-panel p-6 md:p-7 flex flex-col justify-between group hover:border-summit-gold/60 transition-colors">
            <HandCoins className="h-7 w-7 text-summit-gold" strokeWidth={1.5} />
            <div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-summit-mist">
                $150
              </p>
              <p className="mt-1 text-sm text-summit-stone leading-snug">
                Minimum per job. <br />
                <span className="text-summit-mist/70">No hourly games.</span>
              </p>
            </div>
          </RevealItem>

          {/* LICENSED TILE */}
          <RevealItem className="relative overflow-hidden rounded-2xl border border-summit-slate/60 bg-summit-panel p-6 md:p-7 flex flex-col justify-between group hover:border-summit-gold/60 transition-colors">
            <ShieldCheck className="h-7 w-7 text-summit-gold" strokeWidth={1.5} />
            <div>
              <p className="font-display text-xl md:text-2xl font-bold text-summit-mist leading-tight">
                Licensed.
                <br />
                Insured.
              </p>
              <p className="mt-1 text-sm text-summit-stone">Full liability coverage.</p>
            </div>
          </RevealItem>

          {/* RESPONSE TIME TILE */}
          <RevealItem className="relative overflow-hidden rounded-2xl border border-summit-slate/60 bg-summit-panel p-6 md:p-7 flex flex-col justify-between group hover:border-summit-gold/60 transition-colors">
            <Clock className="h-7 w-7 text-summit-gold" strokeWidth={1.5} />
            <div>
              <p className="font-display text-3xl md:text-4xl font-extrabold text-summit-mist">
                {"<"} <CountUp end={24} /> hr
              </p>
              <p className="mt-1 text-sm text-summit-stone">Typical email response</p>
            </div>
          </RevealItem>

          {/* SERVICE AREAS TILE — spans 2 cols */}
          <RevealItem className="col-span-2 relative overflow-hidden rounded-2xl border border-summit-slate/60 bg-summit-panel p-6 md:p-7 flex flex-col justify-between group hover:border-summit-gold/60 transition-colors">
            <MapPin className="h-7 w-7 text-summit-gold" strokeWidth={1.5} />
            <div>
              <p className="font-display text-xl md:text-2xl font-bold text-summit-mist mb-3">
                {areas.length} cities served
              </p>
              <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-summit-mist/80">
                {areas.map((a) => (
                  <li key={a.slug} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-summit-gold" />
                    {a.name}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

          {/* EMAIL FIRST TILE — spans 2 cols */}
          <RevealItem className="col-span-2 relative overflow-hidden rounded-2xl border border-summit-gold/40 bg-gradient-to-br from-summit-panel via-summit-panel to-summit-gold/10 p-6 md:p-7 flex flex-col justify-between group hover:border-summit-gold transition-colors">
            <Mail className="h-7 w-7 text-summit-gold" strokeWidth={1.5} />
            <div>
              <p className="font-display text-xl md:text-2xl font-bold text-summit-mist mb-1">
                Email-first contact
              </p>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-sm text-summit-gold hover:text-summit-gold-hot transition-colors font-semibold underline-offset-4 hover:underline"
              >
                {site.contact.email}
              </a>
              <p className="mt-1 text-xs text-summit-stone">
                Or text {site.contact.phone} for urgent jobs.
              </p>
            </div>
          </RevealItem>
        </RevealStagger>
      </Container>
    </Section>
  );
}
