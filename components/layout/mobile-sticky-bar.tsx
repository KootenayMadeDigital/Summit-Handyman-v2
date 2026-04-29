"use client";

import Link from "next/link";
import { Mail, MessageSquare, FileText } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobile sticky bar. Quote form is the primary action (gold-filled),
 * email and text remain as one-tap fallbacks.
 */
export function MobileStickyBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-divider mobile-bar pb-[env(safe-area-inset-bottom)]"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-5 gap-1 p-2">
        <Link
          href="/quote"
          className="col-span-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent text-white font-display font-bold text-sm transition-colors active:bg-accent-hot shadow-gold"
          aria-label="Submit a quote request"
        >
          <FileText className="h-4 w-4" />
          Submit a Quote
        </Link>
        <a
          href={`mailto:${site.contact.email}`}
          className="col-span-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-fg active:bg-surface-elevated transition-colors"
          aria-label="Email Brody"
        >
          <Mail className="h-4 w-4 text-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Email</span>
        </a>
        <a
          href={`sms:${site.contact.phoneTel}`}
          className="col-span-1 flex flex-col items-center gap-0.5 py-2 rounded-xl text-fg active:bg-surface-elevated transition-colors"
          aria-label="Text Brody"
        >
          <MessageSquare className="h-4 w-4 text-accent" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Text</span>
        </a>
      </div>
    </div>
  );
}
