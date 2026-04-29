import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { Container, Section } from "@/components/ui/section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
        eyebrow="Legal"
        title="Privacy Policy"
        description="The plain-language version. Last updated April 2026."
      />
      <Section size="md">
        <Container size="narrow">
          <div className="prose max-w-none space-y-6 text-fg/90 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-fg-strong">What we collect</h2>
            <p>
              When you contact Brody through the website, we collect only what you give us: name,
              email or phone, postal code (if provided), and any photos you upload to the quote
              form. We don't track you with third-party advertising cookies.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">
              What we do with it
            </h2>
            <p>
              We use it to respond to your request. That's it. Your info is forwarded to Brody's
              email at {site.contact.email}. We don't sell, rent, or share your information with
              third parties.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">
              How long we keep it
            </h2>
            <p>
              Email correspondence is retained as long as needed for the project plus typical
              business-record-keeping. Photos uploaded to the form are stored only as long as
              needed to quote the job.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Your rights</h2>
            <p>
              Email{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-accent hover:text-accent-hot underline-offset-4 hover:underline"
              >
                {site.contact.email}
              </a>{" "}
              at any time to request your data be deleted from our records.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Analytics</h2>
            <p>
              We use privacy-respecting analytics (Vercel Analytics) to understand how the site is
              used. No personal information is collected by these tools.
            </p>

            <h2 className="font-display text-2xl font-bold text-fg-strong mt-10">Contact</h2>
            <p>
              Questions? Email{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-accent hover:text-accent-hot underline-offset-4 hover:underline"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
