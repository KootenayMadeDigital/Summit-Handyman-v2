"use client";

import * as React from "react";
import { ArrowRight, ArrowLeft, Check, Upload, X, Loader2 } from "lucide-react";
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
  contact: string; // email or phone
  preferredContact: "email" | "text" | "either";
  postalCode: string;
  photos: File[];
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
  photos: [],
};

const timingOptions: { value: Timing; label: string; description: string; emoji: string }[] = [
  { value: "urgent", label: "Urgent", description: "Today or tomorrow", emoji: "🔥" },
  { value: "this-week", label: "This week", description: "Within 7 days", emoji: "📅" },
  { value: "two-weeks", label: "Within 2 weeks", description: "Some flexibility", emoji: "🗓️" },
  { value: "no-rush", label: "No rush", description: "Whenever works", emoji: "🌿" },
];

const STEPS = ["Service", "Timing & Area", "Details", "Contact"] as const;

export function QuoteForm() {
  const [step, setStep] = React.useState(0);
  const [state, setState] = React.useState<FormState>(initialState);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Persist to localStorage so an accidental refresh doesn't lose progress
  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("summit-quote-draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Don't restore photos (File objects can't be serialized)
        setState({ ...parsed, photos: [] });
      }
    } catch {}
  }, []);

  React.useEffect(() => {
    try {
      // Save everything except photos
      const { photos: _photos, ...rest } = state;
      localStorage.setItem("summit-quote-draft", JSON.stringify(rest));
    } catch {}
  }, [state]);

  React.useEffect(() => {
    // Pre-fill from query params if present
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

  const onPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    const allowed = files
      .filter((f) => f.type.startsWith("image/"))
      .filter((f) => f.size <= 5 * 1024 * 1024)
      .slice(0, 5 - state.photos.length);
    update("photos", [...state.photos, ...allowed]);
  };

  const removePhoto = (index: number) => {
    update(
      "photos",
      state.photos.filter((_, i) => i !== index),
    );
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

  const submit = async () => {
    setSubmitting(true);
    setError(null);
    try {
      const fd = new FormData();
      fd.append("service", state.service);
      fd.append("timing", state.timing);
      fd.append("area", state.area);
      fd.append("description", state.description);
      fd.append("name", state.name);
      fd.append("contact", state.contact);
      fd.append("preferredContact", state.preferredContact);
      fd.append("postalCode", state.postalCode);
      state.photos.forEach((p) => fd.append("photos", p));
      // Honeypot
      fd.append("website", "");

      const res = await fetch("/api/quote", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again or email Brody directly.");
      }
      setSubmitted(true);
      try {
        localStorage.removeItem("summit-quote-draft");
      } catch {}
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-summit-panel border border-summit-gold/30 p-10 md:p-14 text-center shadow-gold-lg">
        <div className="mx-auto h-16 w-16 rounded-full bg-summit-gold/15 border border-summit-gold/40 flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-summit-gold" strokeWidth={2.5} />
        </div>
        <h2 className="font-display text-3xl font-extrabold text-summit-mist mb-4 text-balance">
          Got it. Brody will be in touch.
        </h2>
        <p className="text-summit-mist/80 max-w-lg mx-auto leading-relaxed">
          You'll get an email back within 24 hours. Need it faster? Text{" "}
          <a
            href={`sms:${site.contact.phoneTel}`}
            className="text-summit-gold font-semibold underline-offset-4 hover:underline"
          >
            {site.contact.phone}
          </a>{" "}
          and Brody will reply quickly.
        </p>
        <div className="mt-8">
          <Button href="/" variant="secondary" size="md">
            Back to home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-summit-panel border border-summit-slate/60 p-6 md:p-10 shadow-panel-lg">
      {/* Stepper */}
      <div className="flex items-center justify-between gap-3 mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex-1 flex items-center gap-2">
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
                "hidden md:inline text-xs font-semibold uppercase tracking-wider",
                i === step ? "text-summit-mist" : "text-summit-stone",
              )}
            >
              {s}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-px transition-colors",
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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
              What needs doing?
            </h2>
            <p className="text-summit-stone mb-6">Pick the closest match — we can refine later.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => update("service", s.slug)}
                  className={cn(
                    "p-4 rounded-xl border text-left transition-all duration-200",
                    state.service === s.slug
                      ? "border-summit-gold bg-summit-gold/10 text-summit-mist"
                      : "border-summit-slate/60 bg-summit-black/30 text-summit-mist/85 hover:border-summit-gold/50 hover:bg-summit-panel/80",
                  )}
                >
                  <span className="block font-display font-bold text-base">{s.name}</span>
                  <span className="block text-xs text-summit-stone mt-1 leading-snug">
                    {s.shortDescription}
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => update("service", "other")}
                className={cn(
                  "p-4 rounded-xl border text-left transition-all duration-200",
                  state.service === "other"
                    ? "border-summit-gold bg-summit-gold/10 text-summit-mist"
                    : "border-summit-slate/60 bg-summit-black/30 text-summit-mist/85 hover:border-summit-gold/50 hover:bg-summit-panel/80",
                )}
              >
                <span className="block font-display font-bold text-base">Something else</span>
                <span className="block text-xs text-summit-stone mt-1">Tell us in step 3.</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 1 — Timing & Area */}
        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
                When do you need this done?
              </h2>
              <p className="text-summit-stone mb-5">Honest answers help Brody schedule realistically.</p>
              <div className="grid grid-cols-2 gap-3">
                {timingOptions.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => update("timing", t.value)}
                    className={cn(
                      "p-4 rounded-xl border text-left transition-all",
                      state.timing === t.value
                        ? "border-summit-gold bg-summit-gold/10"
                        : "border-summit-slate/60 bg-summit-black/30 hover:border-summit-gold/50",
                    )}
                  >
                    <span className="block text-xl mb-1" aria-hidden>
                      {t.emoji}
                    </span>
                    <span className="block font-display font-bold text-summit-mist">{t.label}</span>
                    <span className="block text-xs text-summit-stone mt-0.5">{t.description}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-summit-mist mb-2">Where?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {areas.map((a) => (
                  <button
                    key={a.slug}
                    type="button"
                    onClick={() => update("area", a.slug)}
                    className={cn(
                      "p-3 rounded-xl border text-sm font-semibold transition-all",
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

        {/* STEP 2 — Description + photos */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
                Tell Brody what's going on.
              </h2>
              <p className="text-summit-stone mb-3">A few sentences are perfect.</p>
              <textarea
                value={state.description}
                onChange={(e) => update("description", e.target.value)}
                rows={6}
                placeholder="Describe the project — size, scope, anything Brody should know."
                className="w-full px-4 py-3 rounded-xl bg-summit-black/40 border border-summit-slate/60 text-summit-mist placeholder:text-summit-stone/60 focus-visible:border-summit-gold focus-visible:outline-none resize-none"
              />
              <p className="mt-1 text-xs text-summit-stone">
                {state.description.length} / 1000 · 10 character minimum
              </p>
            </div>

            <div>
              <p className="font-display text-lg font-bold text-summit-mist mb-2">
                Add photos (optional, up to 5)
              </p>
              <p className="text-sm text-summit-stone mb-4">
                Photos help Brody quote accurately and prep the right tools.
              </p>
              <label className="block cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="sr-only"
                  onChange={onPhotoSelect}
                  disabled={state.photos.length >= 5}
                />
                <div
                  className={cn(
                    "p-6 rounded-xl border-2 border-dashed text-center transition-colors",
                    state.photos.length >= 5
                      ? "border-summit-slate/40 bg-summit-black/20 opacity-60 cursor-not-allowed"
                      : "border-summit-slate hover:border-summit-gold bg-summit-black/30",
                  )}
                >
                  <Upload className="mx-auto h-6 w-6 text-summit-gold mb-2" />
                  <p className="text-sm text-summit-mist">
                    {state.photos.length >= 5
                      ? "Maximum 5 photos"
                      : "Tap to add photos · 5MB max each"}
                  </p>
                </div>
              </label>
              {state.photos.length > 0 && (
                <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {state.photos.map((f, i) => (
                    <li
                      key={i}
                      className="relative aspect-square rounded-lg bg-summit-black/40 border border-summit-slate/60 overflow-hidden flex items-center justify-center"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={URL.createObjectURL(f)}
                        alt={`Upload ${i + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        aria-label="Remove photo"
                        className="absolute top-1.5 right-1.5 h-7 w-7 rounded-full bg-summit-black/80 border border-summit-slate text-summit-mist hover:bg-summit-black hover:text-summit-gold transition-colors flex items-center justify-center"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* STEP 3 — Contact */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-summit-mist mb-2 text-balance">
                How can Brody reach you?
              </h2>
              <p className="text-summit-stone">Email is preferred, but text or phone works too.</p>
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
                      "py-2.5 px-3 rounded-xl border text-sm font-semibold capitalize transition-all",
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

            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              aria-hidden
            />

            <p className="text-xs text-summit-stone pt-2">
              By submitting, you agree to be contacted by Brody at Summit Handyman regarding your
              project. We don't share your info, ever.
            </p>

            {error && (
              <p
                role="alert"
                className="rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 text-sm px-4 py-3"
              >
                {error}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Footer nav */}
      <div className="mt-8 flex items-center justify-between gap-4 border-t border-summit-slate/40 pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0 || submitting}
          className="inline-flex items-center gap-2 text-sm text-summit-stone hover:text-summit-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <p className="text-xs text-summit-stone">
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
            disabled={!canAdvance() || submitting}
            size="md"
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send to Brody
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
