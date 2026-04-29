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
          "fixed top-0 inset-x-0 z-[1000] transition-all duration-300",
          scrolled
            ? "header-scrolled border-b border-divider"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto max-w-[88rem] px-3 sm:px-6 lg:px-12">
          <div className="flex h-16 sm:h-20 md:h-24 items-center justify-between gap-2 sm:gap-6 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 md:gap-4 group min-w-0 flex-1"
              aria-label="Summit Handyman home"
            >
              <Image
                src="/images/logo.webp"
                alt=""
                width={64}
                height={64}
                priority
                className="rounded-md flex-shrink-0 h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <span className="font-display text-base sm:text-xl md:text-2xl font-extrabold tracking-tight text-fg-strong leading-none truncate">
                Summit Handyman
                <span className="text-accent">.</span>
              </span>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium"
              aria-label="Primary"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-fg/85 hover:text-accent transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href={`mailto:${site.contact.email}`}
                className="hidden lg:inline-flex items-center gap-2 text-sm text-fg/85 hover:text-accent transition-colors"
                aria-label={`Email Brody at ${site.contact.email}`}
              >
                <Mail className="h-4 w-4" />
                <span className="hidden 2xl:inline">{site.contact.email}</span>
                <span className="2xl:hidden">Email</span>
              </a>
              <ThemeToggle className="hidden lg:inline-flex" />
              <Button href="/quote" size="sm" className="hidden lg:inline-flex">
                Start My Quote
              </Button>
              <button
                type="button"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider-strong text-fg hover:border-accent hover:text-accent transition-colors flex-shrink-0"
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
          "fixed inset-0 z-[990] lg:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 mobile-menu-veil backdrop-blur-md"
          onClick={() => setOpen(false)}
          aria-hidden
        />
        <div
          className={cn(
            "relative ml-auto h-full w-full max-w-sm bg-surface-panel border-l border-divider px-6 pt-24 pb-8 overflow-y-auto",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Theme toggle row: moved here from the main header bar so the
              brand wordmark has space at small viewports. */}
          <div className="flex items-center justify-between gap-3 mb-6 pb-5 border-b border-divider">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Appearance
            </span>
            <ThemeToggle />
          </div>

          <nav className="flex flex-col gap-2" aria-label="Mobile primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-display font-bold text-fg-strong hover:text-accent py-3 border-b border-divider transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 space-y-3">
            <Button href="/quote" size="lg" className="w-full">
              Start My Quote
            </Button>
            <p className="text-xs text-fg-muted -mt-1 text-center">
              The best first step when photos and details matter.
            </p>
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
