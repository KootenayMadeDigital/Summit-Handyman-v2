"use client";

import * as React from "react";
import { ArrowRight, ArrowLeft, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Timing = "urgent" | "this-week" | "two-weeks" | "no-rush";

type FormState = {
  service: string;
  timing: Timing | "";
  area: string;
  description: string;
  name: string;
  contact: string;
  preferredContact: "email" | "text" | "either";
  postalCode: string;
};

const initialState: FormState = {
  service: "",
  timing: "",
  area: "",
  description: "",
  name: "",
  contact: "",
  preferredContact: "email",
  postalCode: "",
};

const timingOptions: { value: Timing; label: string; description: string; emoji: string }[] = [
  { value: "urgent", label: "Urgent", description: "Today or tomorrow", emoji: "🔥" },
  { value: "this-week", label: "This week", description: "Within 7 days", emoji: "📅" },
  { value: "two-weeks", label: "Within 2 weeks", description: "Some flexibility", emoji: "🗓️" },
  { value: "no-rush", label: "No rush", description: "Whenever works", emoji: "🌿" },
];

const STEPS = ["Service", "Timing & Area", "Details", "Contact"] as const;

function humanizeTiming(t: string) {
  return (
    {
      urgent: "Urgent — today or tomorrow",
      "this-week": "This week",
      "two-weeks": "Within 2 weeks",
      "no-rush": "No rush",
    }[t as Timing] ?? "Not specified"
  );
}

function buildMailto(state: FormState): string {
  const serviceObj = services.find((s) => s.slug === state.service);
  const areaObj = areas.find((a) => a.slug === state.area);

  const subject = `Quote request — ${state.name}${serviceObj ? ` · ${serviceObj.name}` : ""}`;

  const body = [
    `Hi Brody,`,
    ``,
    `I'd like a quote for the following:`,
    ``,
    `Name: ${state.name}`,
    `Contact: ${state.contact}`,
    `Preferred contact: ${state.preferredContact}`,
    `Service: ${serviceObj?.name ?? state.service}`,
    `Area: ${areaObj?.name ?? state.area}${state.postalCode ? ` (${state.postalCode})` : ""}`,
    `Timing: ${humanizeTiming(state.timing)}`,
    ``,
    `Details:`,
    state.description,
    ``,
    `(I can reply to this email with photos if helpful.)`,
    ``,
    `Thanks!`,
    state.name,
  ].join("\n");

  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function QuoteForm() {
  const [step, setStep] = React.useState(0);
  const [state, setState] = React.useState<FormState>(initialState);
  const [submitted, setSubmitted] = React.useState(false);

  // Persist draft so accidental refreshes don't lose work
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("summit-quote-draft");
      if (saved) setState(JSON.parse(saved));
    } catch {}
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem("summit-quote-draft", JSON.stringify(state));
    } catch {}
  }, [state]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const sv = url.searchParams.get("service");
    const ar = url.searchParams.get("area");
    if (sv && services.some((s) => s.slug === sv)) {
      setState((p) => ({ ...p, service: sv }));
    }
    if (ar && areas.some((a) => a.slug === ar)) {
      setState((p) => ({ ...p, area: ar }));
    }
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((p) => ({ ...p, [key]: value }));
  };

  const canAdvance = () => {
    if (step === 0) return !!state.service;
    if (step === 1) return !!state.timing && !!state.area;
    if (step === 2) return state.description.trim().length >= 10;
    if (step === 3) return state.name.trim().length >= 2 && state.contact.trim().length >= 5;
    return true;
  };

  const next = () => {
    if (canAdvance() && step < STEPS.length - 1) setStep(step + 1);
  };
  const back = () => step > 0 && setStep(step - 1);

  const submit = () => {
    const href = buildMailto(state);
    setSubmitted(true);
    try {
      localStorage.removeItem("summit-quote-draft");
    } catch {}
    // Open user's email client
    window.location.href = href;
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-summit-panel border border-summit-gold/30 p-8 md:p-14 text-center shadow-gold-lg">
        <div className="mx-auto h-16 w-16 rounded-full bg-summit-gold/15 border border-summit-gold/40 flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-summit-gold" strokeWidth={2.5} />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-summit-mist mb-4 text-balance">
          Email opened in your inbox.
        </h2>
        <p className="text-summit-mist/80 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          Hit send and Brody will reply within 24 hours. If your email app didn't open,{" "}
          <a
            href={buildMailto(state)}
            className="text-summit-gold font-semibold underline-offset-4 hover:underline"
          >
            click here to retry
          </a>
          {" "}or text{" "}
          <a
            href={`sms:${site.contact.phoneTel}`}
            className="text-summit-gold font-semibold underline-offset-4 hover:underline"
          >
            {site.contact.phone}
          </a>
          .
        </p>
        <p className="mt-4 text-xs text-summit-stone">
          Reply to that email and attach photos if you have any — Brody can quote more accurately
          with a few pictures.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="secondary" size="md">
            Back to home
          </Button>
          <Button
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setState(initialState);
            }}
            variant="ghost"
            size="md"
          >
            Start a new quote
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-summit-panel border border-summit-slate/60 p-5 sm:p-6 md:p-10 shadow-panel-lg">
      {/* Stepper */}
      <div className="flex items-center justify-between gap-2 sm:gap-3 mb-6 sm:mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex-1 flex items-center gap-2 min-w-0">
            <div
              className={cn(
                "flex-shrink-0 h-8 w-8 rounded-full grid place-items-center text-xs font-bold transition-colors",
                i < step
                  ? "bg-summit-gold text-summit-black"
                  : i === step
                    ? "bg-summit-gold/20 border border-summit-gold text-summit-gold"
                    : "bg-summit-black/40 border border-summit-slate text-summit-stone",
              )}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span
              className={cn(
                "hidden md:inline text-xs font-semibold uppercase tracking-wider truncate",
                i === step ? "text-summit-mist" : "text-summit-stone",
              )}
            >
              {s}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-px transition-colors min-w-[8px]",
                  i < step ? "bg-summit-gold" : "bg-summit-slate",
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="min-h-[420px]">
        {/* STEP 0 — Service */}
        {step === 0 && (
          <div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
              What needs doing?
            </h2>
            <p className="text-sm sm:text-base text-summit-stone mb-6">
              Pick the closest match — we can refine later.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => update("service", s.slug)}
                  className={cn(
                    "p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 min-w-0",
                    state.service === s.slug
                      ? "border-summit-gold bg-summit-gold/10 text-summit-mist"
                      : "border-summit-slate/60 bg-summit-black/30 text-summit-mist/85 hover:border-summit-gold/50 hover:bg-summit-panel/80",
                  )}
                >
                  <span className="block font-display font-bold text-sm sm:text-base leading-tight text-balance">
                    {s.name}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-summit-stone mt-1 leading-snug">
                    {s.shortDescription}
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => update("service", "other")}
                className={cn(
                  "p-3 sm:p-4 rounded-xl border text-left transition-all duration-200",
                  state.service === "other"
                    ? "border-summit-gold bg-summit-gold/10 text-summit-mist"
                    : "border-summit-slate/60 bg-summit-black/30 text-summit-mist/85 hover:border-summit-gold/50 hover:bg-summit-panel/80",
                )}
              >
                <span className="block font-display font-bold text-sm sm:text-base">Something else</span>
                <span className="block text-[11px] sm:text-xs text-summit-stone mt-1">
                  Tell us in step 3.
                </span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 1 — Timing & Area */}
        {step === 1 && (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
                When do you need this done?
              </h2>
              <p className="text-sm sm:text-base text-summit-stone mb-5">
                Honest answers help Brody schedule realistically.
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {timingOptions.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => update("timing", t.value)}
                    className={cn(
                      "p-3 sm:p-4 rounded-xl border text-left transition-all min-w-0",
                      state.timing === t.value
                        ? "border-summit-gold bg-summit-gold/10"
                        : "border-summit-slate/60 bg-summit-black/30 hover:border-summit-gold/50",
                    )}
                  >
                    <span className="block text-xl mb-1" aria-hidden>
                      {t.emoji}
                    </span>
                    <span className="block font-display font-bold text-sm sm:text-base text-summit-mist leading-tight">
                      {t.label}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-summit-stone mt-0.5 leading-snug">
                      {t.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-summit-mist mb-2">Where?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {areas.map((a) => (
                  <button
                    key={a.slug}
                    type="button"
                    onClick={() => update("area", a.slug)}
                    className={cn(
                      "p-2.5 sm:p-3 rounded-xl border text-sm font-semibold transition-all min-w-0 truncate",
                      state.area === a.slug
                        ? "border-summit-gold bg-summit-gold/10 text-summit-mist"
                        : "border-summit-slate/60 bg-summit-black/30 text-summit-mist/85 hover:border-summit-gold/50",
                    )}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
              <label className="block mt-5">
                <span className="text-sm text-summit-stone">Postal code (optional)</span>
                <input
                  type="text"
                  value={state.postalCode}
                  onChange={(e) => update("postalCode", e.target.value)}
                  placeholder="V2Y 1A1"
                  maxLength={7}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-summit-black/40 border border-summit-slate/60 text-summit-mist placeholder:text-summit-stone/60 focus-visible:border-summit-gold focus-visible:outline-none"
                />
              </label>
            </div>
          </div>
        )}

        {/* STEP 2 — Description */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
                Tell Brody what's going on.
              </h2>
              <p className="text-sm sm:text-base text-summit-stone mb-3">
                A few sentences are perfect.
              </p>
              <textarea
                value={state.description}
                onChange={(e) => update("description", e.target.value)}
                rows={6}
                placeholder="Describe the project — size, scope, anything Brody should know."
                className="w-full px-4 py-3 rounded-xl bg-summit-black/40 border border-summit-slate/60 text-summit-mist placeholder:text-summit-stone/60 focus-visible:border-summit-gold focus-visible:outline-none resize-none"
              />
              <p className="mt-1 text-xs text-summit-stone">
                {state.description.length} characters · 10 minimum
              </p>
            </div>

            <div className="rounded-xl bg-summit-black/30 border border-summit-slate/60 p-4 sm:p-5">
              <p className="font-display text-base sm:text-lg font-bold text-summit-mist mb-1.5">
                Have photos?
              </p>
              <p className="text-sm text-summit-stone leading-relaxed">
                Reply with photos after Brody emails you back, or attach them when your email app
                opens. Photos help Brody quote accurately.
              </p>
            </div>
          </div>
        )}

        {/* STEP 3 — Contact */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
                How can Brody reach you?
              </h2>
              <p className="text-sm sm:text-base text-summit-stone">
                Email is preferred, but text or phone works too.
              </p>
            </div>

            <label className="block">
              <span className="text-sm text-summit-stone">Your name</span>
              <input
                type="text"
                value={state.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="First & last"
                autoComplete="name"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-summit-black/40 border border-summit-slate/60 text-summit-mist placeholder:text-summit-stone/60 focus-visible:border-summit-gold focus-visible:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm text-summit-stone">Email or phone</span>
              <input
                type="text"
                value={state.contact}
                onChange={(e) => update("contact", e.target.value)}
                placeholder="you@example.com or 604-555-0123"
                autoComplete="email"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-summit-black/40 border border-summit-slate/60 text-summit-mist placeholder:text-summit-stone/60 focus-visible:border-summit-gold focus-visible:outline-none"
              />
            </label>

            <fieldset>
              <legend className="text-sm text-summit-stone mb-2">Preferred contact method</legend>
              <div className="grid grid-cols-3 gap-2">
                {(["email", "text", "either"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => update("preferredContact", p)}
                    className={cn(
                      "py-2.5 px-2 sm:px-3 rounded-xl border text-xs sm:text-sm font-semibold capitalize transition-all min-w-0 truncate",
                      state.preferredContact === p
                        ? "border-summit-gold bg-summit-gold/10 text-summit-mist"
                        : "border-summit-slate/60 bg-summit-black/30 text-summit-mist/85 hover:border-summit-gold/50",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </fieldset>

            <p className="text-xs text-summit-stone pt-2">
              Hitting "Send to Brody" opens your email app with the details filled in. Just press
              send.
            </p>
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="mt-8 flex items-center justify-between gap-3 sm:gap-4 border-t border-summit-slate/40 pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-summit-stone hover:text-summit-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <p className="text-[11px] sm:text-xs text-summit-stone whitespace-nowrap">
          Step {step + 1} of {STEPS.length}
        </p>
        {step < STEPS.length - 1 ? (
          <Button
            onClick={next}
            disabled={!canAdvance()}
            size="md"
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={submit}
            disabled={!canAdvance()}
            size="md"
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Mail className="h-4 w-4" />
            Send to Brody
          </Button>
        )}
      </div>
    </div>
  );
}
