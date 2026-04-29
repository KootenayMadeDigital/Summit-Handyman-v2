"use client";

import { Mail, MessageSquare, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 border-t border-summit-slate/60 bg-summit-black/90 backdrop-blur-lg pb-[env(safe-area-inset-bottom)]"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-3 divide-x divide-summit-slate/40">
        <a
          href={`mailto:${site.contact.email}`}
          className="flex flex-col items-center gap-1 py-3 text-summit-mist active:bg-summit-panel/60 transition-colors"
          aria-label="Email Brody"
        >
          <Mail className="h-5 w-5 text-summit-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">Email</span>
        </a>
        <a
          href={`sms:${site.contact.phoneTel}`}
          className="flex flex-col items-center gap-1 py-3 text-summit-mist active:bg-summit-panel/60 transition-colors"
          aria-label="Text Brody"
        >
          <MessageSquare className="h-5 w-5 text-summit-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">Text</span>
        </a>
        <a
          href={site.contact.messenger}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-1 py-3 text-summit-mist active:bg-summit-panel/60 transition-colors"
          aria-label="Message Brody on Facebook"
        >
          <MessageCircle className="h-5 w-5 text-summit-gold" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">Message</span>
        </a>
      </div>
    </div>
  );
}
