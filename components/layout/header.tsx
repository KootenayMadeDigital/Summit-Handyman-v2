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
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          scrolled
            ? "header-scrolled border-b border-divider"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-12">
          <div className="flex h-20 md:h-24 items-center justify-between gap-3 sm:gap-6 min-w-0">
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 group min-w-0"
              aria-label="Summit Handyman home"
            >
              <Image
                src="/images/logo.webp"
                alt=""
                width={64}
                height={64}
                priority
                className="rounded-md flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
              />
              <span className="font-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-fg-strong leading-none truncate">
                Summit{" "}
                <span className="hidden sm:inline">Handyman</span>
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
              <ThemeToggle />
              <Button href="/quote" size="sm" className="hidden lg:inline-flex">
                Get a Quote
              </Button>
              <button
                type="button"
                className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-divider-strong text-fg hover:border-accent hover:text-accent transition-colors"
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
              Submit a Quote Request
            </Button>
            <p className="text-xs text-fg-muted -mt-1 text-center">
              The fastest way for Brody to give an accurate estimate.
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
