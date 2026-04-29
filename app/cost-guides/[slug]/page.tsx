import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Clock, Calendar, ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { MagneticCTA } from "@/components/ui/magnetic-cta";
import { FinalCTA } from "@/components/sections/final-cta";
import { guides, getGuide } from "@/lib/guides";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.title,
    description: g.excerpt,
    alternates: { canonical: `/cost-guides/${g.slug}` },
    openGraph: {
      title: g.title,
      description: g.excerpt,
      type: "article",
      publishedTime: g.date,
    },
  };
}

export default async function GuidePage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const related = guides.filter((x) => x.slug !== g.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.excerpt,
    image: `${site.url}${g.hero}`,
    datePublished: g.date,
    author: { "@type": "Person", name: site.owner, url: `${site.url}/about` },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/images/logo.webp` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Cost Guides", href: "/cost-guides" },
          { label: g.title.length > 40 ? g.title.slice(0, 40) + "…" : g.title },
        ]}
        eyebrow="Cost Guide"
        title={g.title}
        description={g.excerpt}
      >
        <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-fg-muted pt-4">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-accent" />
            {g.readingMinutes} min read
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-accent" />
            {g.date}
          </span>
          {g.area && <span>· {g.area}</span>}
        </div>
      </PageHero>

      <Section size="md">
        <Container size="narrow">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-divider-strong mb-12 shadow-panel-lg">
            <Image
              src={g.hero}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          <article className="prose prose-invert max-w-none">
            <Reveal>
              {g.body.map((block, i) => {
                if (block.type === "p") {
                  return (
                    <p
                      key={i}
                      className="text-lg text-fg-strong/85 leading-relaxed mb-6 text-pretty font-serif"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="font-display text-3xl font-bold text-fg-strong mt-12 mb-5 text-balance"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="font-display text-xl font-bold text-fg-strong mt-8 mb-3"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="space-y-2.5 mb-8 pl-1">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-fg-strong/85 leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-summit-gold flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "callout") {
                  return (
                    <aside
                      key={i}
                      className="my-10 p-6 md:p-7 rounded-2xl bg-gradient-to-br from-summit-panel via-summit-panel to-summit-gold/5 border border-accent/40"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                        {block.title}
                      </p>
                      <p className="text-fg-strong leading-relaxed">{block.text}</p>
                    </aside>
                  );
                }
                if (block.type === "pricing") {
                  return (
                    <div key={i} className="my-10 rounded-2xl bg-surface-panel border border-divider-strong overflow-hidden">
                      <table className="w-full">
                        <tbody>
                          {block.rows.map((r, j) => (
                            <tr
                              key={j}
                              className="border-b border-divider-strong/30 last:border-0"
                            >
                              <td className="px-5 py-4 text-fg-strong/85 text-sm md:text-base">
                                {r.label}
                              </td>
                              <td className="px-5 py-4 text-right font-display font-bold text-accent">
                                {r.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return null;
              })}
            </Reveal>
          </article>

          {/* Mid/end CTA */}
          <div className="mt-14 rounded-2xl bg-surface-panel border border-accent/40 p-7 md:p-8 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              Need this done?
            </p>
            <p className="font-display text-2xl md:text-3xl font-bold text-fg-strong mb-5 text-balance">
              Get a free, written estimate from Brody.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <MagneticCTA
                href={g.service ? `/quote?service=${g.service}` : "/quote"}
                size="md"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </MagneticCTA>
              <Button
                href={`mailto:${site.contact.email}`}
                variant="secondary"
                size="md"
              >
                <Mail className="h-4 w-4" />
                Email Brody
              </Button>
            </div>
          </div>

          <div className="mt-14 pt-8 border-t border-divider">
            <Link
              href="/cost-guides"
              className="inline-flex items-center gap-2 text-fg-muted hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All cost guides
            </Link>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section size="md" className="bg-surface-panel border-y border-divider">
          <Container>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-fg-strong mb-8">
              Related guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/cost-guides/${r.slug}`}
                  className="group p-5 rounded-2xl bg-surface-panel border border-divider-strong hover:border-accent-soft transition-colors"
                >
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">
                    {r.readingMinutes} min · {r.area ?? "Lower Mainland"}
                  </p>
                  <h3 className="font-display text-lg font-bold text-fg-strong group-hover:text-accent transition-colors text-balance">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
