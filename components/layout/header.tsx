"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Mail, MessageSquare } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Areas", href: "/areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "Cost Guides", href: "/cost-guides" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-summit-black/85 backdrop-blur-lg border-b border-summit-slate/60"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto max-w-[88rem] px-6 sm:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between gap-6">
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Summit Handyman home"
            >
              <Image
                src="/images/logo.webp"
                alt=""
                width={40}
                height={40}
                priority
                className="rounded-md"
              />
              <span className="font-display text-lg font-bold tracking-tight text-summit-mist">
                Summit
                <span className="text-summit-gold">.</span>
              </span>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-7 text-sm font-medium"
              aria-label="Primary"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-summit-mist/80 hover:text-summit-gold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="hidden md:inline-flex items-center gap-2 text-sm text-summit-mist/80 hover:text-summit-gold transition-colors"
                aria-label={`Email Brody at ${site.contact.email}`}
              >
                <Mail className="h-4 w-4" />
                <span className="hidden xl:inline">{site.contact.email}</span>
                <span className="xl:hidden">Email</span>
              </a>
              <ThemeToggle />
              <Button href="/quote" size="sm" className="hidden sm:inline-flex">
                Get a Quote
              </Button>
              <button
                type="button"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-summit-slate/60 text-summit-mist hover:border-summit-gold hover:text-summit-gold transition-colors"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-30 lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-summit-black/80 backdrop-blur-md"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={cn(
            "relative ml-auto h-full w-full max-w-sm bg-summit-panel border-l border-summit-slate/60 px-6 pt-24 pb-8 overflow-y-auto",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-display font-bold text-summit-mist hover:text-summit-gold py-3 border-b border-summit-slate/40 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <Button href="/quote" size="lg" className="w-full">
              Get a Free Quote
            </Button>
            <Button
              href={`mailto:${site.contact.email}`}
              variant="secondary"
              size="md"
              className="w-full"
            >
              <Mail className="h-4 w-4" />
              Email Brody
            </Button>
            <Button
              href={`sms:${site.contact.phoneTel}`}
              variant="secondary"
              size="md"
              className="w-full"
            >
              <MessageSquare className="h-4 w-4" />
              Text {site.contact.phone}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
