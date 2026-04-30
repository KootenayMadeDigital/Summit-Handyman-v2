"use client";

import * as React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarClock,
  Camera,
  Check,
  CheckCircle2,
  Clock3,
  Flame,
  Leaf,
  Loader2,
  MapPin,
  Upload,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Timing = "time-sensitive" | "this-week" | "two-weeks" | "no-rush";

type FormState = {
  service: string;
  timing: Timing | "";
  area: string;
  description: string;
  name: string;
  contact: string;
  preferredContact: "email" | "text" | "call" | "either";
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

const timingOptions: { value: Timing; label: string; description: string; Icon: typeof Flame }[] = [
  { value: "time-sensitive", label: "Time-sensitive", description: "Sooner is better", Icon: Flame },
  { value: "this-week", label: "This week", description: "Within 7 days", Icon: CalendarClock },
  { value: "two-weeks", label: "Within 2 weeks", description: "Some flexibility", Icon: Clock3 },
  { value: "no-rush", label: "No rush", description: "Whenever works", Icon: Leaf },
];

const STEPS = ["Service", "Timing & Area", "Details + Photos", "Contact"] as const;

const MAX_PHOTOS = 5;
const MAX_PHOTO_SIZE = 5 * 1024 * 1024;

export function QuoteForm() {
  const [step, setStep] = React.useState(0);
  const [state, setState] = React.useState<FormState>(initialState);
  const [photos, setPhotos] = React.useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = React.useState<string[]>([]);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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

  React.useEffect(() => {
    const urls = photos.map((p) => URL.createObjectURL(p));
    setPhotoPreviews(urls);
    return () => {
      urls.forEach((u) => URL.revokeObjectURL(u));
    };
  }, [photos]);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setState((p) => ({ ...p, [key]: value }));
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    setError(null);

    const remainingSlots = MAX_PHOTOS - photos.length;
    const next: File[] = [];
    for (const f of files.slice(0, remainingSlots)) {
      if (!f.type.startsWith("image/")) {
        setError("Photos must be images (JPG, PNG, WEBP, or HEIC).");
        continue;
      }
      if (f.size > MAX_PHOTO_SIZE) {
        setError(`"${f.name}" is over 5MB. Try a smaller image.`);
        continue;
      }
      next.push(f);
    }
    if (next.length > 0) setPhotos((p) => [...p, ...next]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removePhoto = (i: number) => {
    setPhotos((p) => p.filter((_, idx) => idx !== i));
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

  const selectedService = services.find((s) => s.slug === state.service);
  const selectedArea = areas.find((a) => a.slug === state.area);
  const selectedTiming = timingOptions.find((t) => t.value === state.timing);
  const progress = ((step + 1) / STEPS.length) * 100;

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
      fd.append("website", "");
      photos.forEach((p) => fd.append("photos", p));

      const res = await fetch("/api/quote", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data?.error ?? "Submission failed. Please try again in a moment.",
        );
      }

      setSubmitted(true);
      try {
        localStorage.removeItem("summit-quote-draft");
      } catch {}
    } catch (e: unknown) {
      setError(
        e instanceof Error
          ? e.message
          : "Submission failed. Please try again in a moment.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="summit-card-motion motion-cta relative overflow-hidden rounded-[2rem] bg-surface-panel border border-accent/40 p-8 md:p-14 text-center shadow-gold-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_55%)]" />
        <div className="relative">
          <div className="summit-icon-box mx-auto h-20 w-20 rounded-full bg-accent-soft border border-accent/50 flex items-center justify-center mb-6 shadow-gold">
            <Check className="h-10 w-10 text-accent" strokeWidth={2.5} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-fg-strong mb-4 text-balance">
            Got it. Brody will be in touch.
          </h2>
          <p className="text-fg/85 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
            Your details {photos.length > 0 ? `and ${photos.length} photo${photos.length > 1 ? "s" : ""} ` : ""}have been sent to Brody. He'll review the job and reply within 24 hours with questions or a written estimate.
          </p>
        <p className="mt-4 text-xs text-fg-muted">
          Need to add context? Submit another quote note and Brody will see it in the same inbox.
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
                setPhotos([]);
              }}
              variant="ghost"
              size="md"
            >
              Submit another
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="summit-card-motion motion-cta relative overflow-hidden rounded-[2rem] bg-surface-panel border border-divider-strong shadow-panel-lg">
      <div className="absolute inset-x-0 top-0 h-1 bg-surface-elevated">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-hot transition-all duration-500 ease-editorial"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="mb-5 sm:mb-7 grid gap-5 lg:grid-cols-[1fr_0.34fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold">
              Step {step + 1} of {STEPS.length}
            </p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-fg-strong leading-tight text-balance">
              {STEPS[step]}
            </h2>
          </div>
          <div className="summit-card-motion motion-trust hidden sm:block rounded-2xl border border-divider-strong bg-surface/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted font-semibold">
              Current scope
            </p>
            <p className="mt-2 text-sm text-fg-strong font-semibold leading-snug">
              {selectedService?.name ?? "Service not picked"}
            </p>
            <p className="mt-1 text-xs text-fg-muted">
              {[selectedArea?.name, selectedTiming?.label].filter(Boolean).join(" · ") || "Timing and area next"}
            </p>
          </div>
        </div>

        <div className="mb-5 sm:mb-8 grid grid-cols-4 gap-2 sm:gap-3" role="group" aria-label="Quote form progress">
          {STEPS.map((s, i) => (
            <div key={s} className="min-w-0">
              <div
                className={cn(
                  "h-2 rounded-full transition-colors",
                  i <= step ? "bg-accent" : "bg-surface-elevated",
                )}
              />
              <p className={cn("mt-2 hidden text-[10px] font-semibold uppercase tracking-[0.14em] sm:block", i === step ? "text-fg-strong" : "text-fg-muted")}>{s}</p>
            </div>
          ))}
        </div>

        <div className="min-h-0 sm:min-h-[420px]">
        {step === 0 && (
          <div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-fg-strong mb-2 text-balance">
              What needs doing?
            </h2>
            <p className="text-sm sm:text-base text-fg-muted mb-4 sm:mb-6">
              Pick the closest match. We can refine later.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2.5 sm:gap-3">
              {services.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => update("service", s.slug)}
                  aria-pressed={state.service === s.slug}
                  className={cn(
                    "summit-card-motion motion-service group relative overflow-hidden p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300 min-w-0",
                    state.service === s.slug
                      ? "border-accent bg-accent-soft text-fg-strong shadow-gold"
                      : "border-divider-strong bg-surface-elevated/60 text-fg/85 hover:border-accent-soft hover:bg-surface-elevated",
                  )}
                >
                  <span className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </span>
                  <span className="block pr-4 font-display font-bold text-sm sm:text-base leading-tight text-balance">
                    {s.name}
                  </span>
                  <span className="hidden sm:block text-xs text-fg-muted mt-2 leading-snug">
                    {s.shortDescription}
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => update("service", "other")}
                aria-pressed={state.service === "other"}
                className={cn(
                  "summit-card-motion motion-service p-3 sm:p-4 rounded-2xl border text-left transition-all duration-300",
                  state.service === "other"
                    ? "border-accent bg-accent-soft text-fg-strong"
                    : "border-divider-strong bg-surface-elevated/60 text-fg/85 hover:border-accent-soft hover:bg-surface-elevated",
                )}
              >
                <span className="block font-display font-bold text-sm sm:text-base">
                  Something else
                </span>
                <span className="hidden sm:block text-[11px] sm:text-xs text-fg-muted mt-1">
                  Tell us in step 3.
                </span>
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-fg-strong mb-2 text-balance">
                When do you need this done?
              </h2>
              <p className="text-sm sm:text-base text-fg-muted mb-5">
                Honest answers help Brody schedule realistically.
              </p>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {timingOptions.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => update("timing", t.value)}
                    aria-pressed={state.timing === t.value}
                    className={cn(
                      "summit-card-motion motion-service p-3 sm:p-4 rounded-xl border text-left transition-all min-w-0",
                      state.timing === t.value
                        ? "border-accent bg-accent-soft"
                        : "border-divider-strong bg-surface-elevated/60 hover:border-accent-soft",
                    )}
                  >
                    <span className="summit-icon-box mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/35 bg-accent-soft" aria-hidden>
                      <t.Icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
                    </span>
                    <span className="block font-display font-bold text-sm sm:text-base text-fg-strong leading-tight">
                      {t.label}
                    </span>
                    <span className="block text-[11px] sm:text-xs text-fg-muted mt-0.5 leading-snug">
                      {t.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-fg-strong mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-accent" strokeWidth={1.7} />
                Where?
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {areas.map((a) => (
                  <button
                    key={a.slug}
                    type="button"
                    onClick={() => update("area", a.slug)}
                    aria-pressed={state.area === a.slug}
                    className={cn(
                      "summit-card-motion motion-area p-3 rounded-xl border text-sm font-semibold transition-all min-w-0 truncate",
                      state.area === a.slug
                        ? "border-accent bg-accent-soft text-fg-strong"
                        : "border-divider-strong bg-surface-elevated/60 text-fg/85 hover:border-accent-soft",
                    )}
                  >
                    {a.name}
                  </button>
                ))}
              </div>
              <label className="block mt-5">
                <span className="text-sm text-fg-muted">Postal code (optional)</span>
                <input
                  type="text"
                  value={state.postalCode}
                  onChange={(e) => update("postalCode", e.target.value)}
                  placeholder="V2Y 1A1"
                  maxLength={7}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-surface-elevated/80 border border-divider-strong text-fg-strong placeholder:text-fg-faint focus-visible:border-accent focus-visible:outline-none"
                />
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-fg-strong mb-2 text-balance">
                Tell Brody what's going on.
              </h2>
              <p className="text-sm sm:text-base text-fg-muted mb-3">
                A rough list is fine. Helpful details: what changed, rough size, access issues, tenant timing, and what a clean finished result should look like.
              </p>
              <textarea
                value={state.description}
                onChange={(e) => update("description", e.target.value)}
                rows={6}
                placeholder="Example: hallway drywall patch about the size of a dinner plate, needs texture match and paint touch-up. Photos attached."
                className="w-full px-4 py-3 rounded-xl bg-surface-elevated/80 border border-divider-strong text-fg-strong placeholder:text-fg-faint focus-visible:border-accent focus-visible:outline-none resize-none"
              />
              <p className="mt-1 text-xs text-fg-muted">
                {state.description.length} characters · 10 minimum
              </p>
            </div>

            <div>
              <p className="font-display text-base sm:text-lg font-bold text-fg-strong mb-1 flex items-center gap-2">
                <Camera className="h-5 w-5 text-accent" strokeWidth={1.6} />
                Add photos (optional, up to {MAX_PHOTOS})
              </p>
              <p className="text-sm text-fg-muted mb-3">
                Photos reduce guesswork and help Brody spot materials, damage, access, and finish details before he replies. JPG, PNG, WEBP, or HEIC. 5MB each.
              </p>

              {photos.length < MAX_PHOTOS && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="summit-card-motion motion-cta group w-full p-5 rounded-xl border-2 border-dashed border-divider-strong bg-surface-elevated/40 hover:border-accent hover:bg-accent-soft/30 transition-colors text-left flex items-center gap-4"
                >
                  <span className="summit-icon-box h-10 w-10 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center flex-shrink-0">
                    <Upload className="h-5 w-5 text-accent" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-fg-strong text-sm sm:text-base leading-tight">
                      Tap to upload photos
                    </span>
                    <span className="block text-xs text-fg-muted mt-0.5">
                      {photos.length === 0
                        ? "On mobile, you can take a photo with your camera."
                        : `${MAX_PHOTOS - photos.length} more allowed`}
                    </span>
                  </span>
                </button>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoSelect}
                className="sr-only"
                aria-label="Upload photos"
              />

              {photos.length > 0 && (
                <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {photos.map((p, i) => (
                    <li
                      key={i}
                      className="summit-photo-motion summit-scan-accent relative aspect-square rounded-xl overflow-hidden border border-divider-strong bg-surface-elevated"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photoPreviews[i]}
                        alt={`Upload ${i + 1}`}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        aria-label="Remove photo"
                        className="absolute top-2 right-2 grid place-items-center h-11 w-11 rounded-full bg-summit-black/85 border border-summit-mist/30 text-summit-mist hover:bg-summit-black hover:text-summit-gold transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 rounded-full bg-summit-black/70 text-[10px] font-semibold text-summit-mist backdrop-blur">
                        {(p.size / 1024).toFixed(0)} KB
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-fg-strong mb-2 text-balance">
                How can Brody reach you?
              </h2>
              <p className="text-sm sm:text-base text-fg-muted">
                Brody replies using your selected preference after the form is submitted.
              </p>
            </div>

            <label className="block">
              <span className="text-sm text-fg-muted">Your name</span>
              <input
                type="text"
                value={state.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="First & last"
                autoComplete="name"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-surface-elevated/80 border border-divider-strong text-fg-strong placeholder:text-fg-faint focus-visible:border-accent focus-visible:outline-none"
              />
            </label>

            <label className="block">
              <span className="text-sm text-fg-muted">Email or phone</span>
              <input
                type="text"
                value={state.contact}
                onChange={(e) => update("contact", e.target.value)}
                placeholder="you@example.com or 604-555-0123"
                autoComplete="email"
                className="mt-1 w-full px-4 py-3 rounded-xl bg-surface-elevated/80 border border-divider-strong text-fg-strong placeholder:text-fg-faint focus-visible:border-accent focus-visible:outline-none"
              />
            </label>

            <fieldset>
              <legend className="text-sm text-fg-muted mb-2">Preferred contact method</legend>
              {/*
                Brody is fine calling people who came through the form, but does
                not take blind cold calls, so "Call" only appears as an option
                AFTER the customer has filled out the scope.
              */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(["email", "text", "call", "either"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => update("preferredContact", p)}
                    aria-pressed={state.preferredContact === p}
                    className={cn(
                      "py-2.5 px-2 sm:px-3 rounded-xl border text-xs sm:text-sm font-semibold capitalize transition-all min-w-0 truncate",
                      state.preferredContact === p
                        ? "border-accent bg-accent-soft text-fg-strong"
                        : "border-divider-strong bg-surface-elevated/60 text-fg/85 hover:border-accent-soft",
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </fieldset>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute -left-[9999px] opacity-0 pointer-events-none"
              aria-hidden
            />

            <p className="text-xs text-fg-muted pt-2">
              By submitting, you agree to be contacted by Brody at Summit Handyman regarding your project. Your info is never shared.
            </p>

            {error && (
              <div
                role="alert"
                className="rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 text-sm px-4 py-3"
              >
                <p>{error}</p>
              </div>
            )}
          </div>
        )}
      </div>

        <div className="mt-6 sm:mt-8 flex items-center justify-between gap-3 sm:gap-4 border-t border-divider pt-5 sm:pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0 || submitting}
          className="inline-flex min-h-11 items-center gap-1 sm:gap-2 rounded-xl px-3 text-xs sm:text-sm text-fg-muted hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
        <p className="text-[11px] sm:text-xs text-fg-muted whitespace-nowrap">
          Step {step + 1} of {STEPS.length}
        </p>
        {step < STEPS.length - 1 ? (
          <Button
            onClick={next}
            disabled={!canAdvance() || submitting}
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
                Sending...
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
    </div>
  );
}
