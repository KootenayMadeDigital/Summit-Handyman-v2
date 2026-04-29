"use client";

import { Mail, MessageSquare, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-divider mobile-bar pb-[env(safe-area-inset-bottom)]"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 divide-x divide-[var(--border)]">
        <a
          href={`mailto:${site.contact.email}`}
          className="flex flex-col items-center gap-1 py-3 text-fg active:bg-surface-elevated transition-colors"
          aria-label="Email Brody"
        >
          <Mail className="h-5 w-5 text-accent" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Email</span>
        </a>
        <a
          href={`sms:${site.contact.phoneTel}`}
          className="flex flex-col items-center gap-1 py-3 text-fg active:bg-surface-elevated transition-colors"
          aria-label="Text Brody"
        >
          <MessageSquare className="h-5 w-5 text-accent" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Text</span>
        </a>
        <a
          href={site.contact.messenger}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-1 py-3 text-fg active:bg-surface-elevated transition-colors"
          aria-label="Message Brody on Facebook"
        >
          <MessageCircle className="h-5 w-5 text-accent" />
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">Message</span>
        </a>
      </div>
    </div>
  );
}
