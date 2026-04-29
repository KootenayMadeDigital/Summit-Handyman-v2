"use client";

import * as React from "react";
import { ArrowRight, ArrowLeft, Check, Loader2, Upload, X, Camera } from "lucide-react";
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
          data?.error ??
            "Submission failed. Please try again or email Brody at " + site.contact.email,
        );
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
      <div className="rounded-2xl bg-surface-panel border border-accent/40 p-8 md:p-14 text-center shadow-gold-lg">
        <div className="mx-auto h-16 w-16 rounded-full bg-accent-soft border border-accent/50 flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-accent" strokeWidth={2.5} />
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-fg-strong mb-4 text-balance">
          Got it. Brody will be in touch.
        </h2>
        <p className="text-fg/85 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          Your details {photos.length > 0 ? `and ${photos.length} photo${photos.length > 1 ? "s" : ""} ` : ""}have been sent to Brody. He'll review the job and reply within 24 hours with questions or a written estimate.
        </p>
        <p className="mt-4 text-xs text-fg-muted">
          Need it faster? Text{" "}
          <a
            href={`sms:${site.contact.phoneTel}`}
            className="text-accent font-semibold underline-offset-4 hover:underline"
          >
            {site.contact.phone}
          </a>
          .
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
    );
  }

  return (
    <div className="rounded-2xl bg-surface-panel border border-divider-strong p-5 sm:p-6 md:p-10 shadow-panel-lg">
      <div className="flex items-center justify-between gap-2 sm:gap-3 mb-6 sm:mb-8">
        {STEPS.map((s, i) => (
          <div key={s} className="flex-1 flex items-center gap-2 min-w-0">
            <div
              className={cn(
                "flex-shrink-0 h-8 w-8 rounded-full grid place-items-center text-xs font-bold transition-colors",
                i < step
                  ? "bg-accent text-white"
                  : i === step
                    ? "bg-accent-soft border border-accent text-accent"
                    : "bg-surface-elevated/80 border border-divider-strong text-fg-muted",
              )}
            >
              {i < step ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span
              className={cn(
                "hidden md:inline text-xs font-semibold uppercase tracking-wider truncate",
                i === step ? "text-fg-strong" : "text-fg-muted",
              )}
            >
              {s}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-px transition-colors min-w-[8px]",
                  i < step ? "bg-accent" : "bg-divider-strong",
                )}
              />
            )}
          </div>
        ))}
      </div>

      <div className="min-h-[420px]">
        {step === 0 && (
          <div>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-fg-strong mb-2 text-balance">
              What needs doing?
            </h2>
            <p className="text-sm sm:text-base text-fg-muted mb-6">
              Pick the closest match. We can refine later.
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
                      ? "border-accent bg-accent-soft text-fg-strong"
                      : "border-divider-strong bg-surface-elevated/60 text-fg/85 hover:border-accent-soft hover:bg-surface-elevated",
                  )}
                >
                  <span className="block font-display font-bold text-sm sm:text-base leading-tight text-balance">
                    {s.name}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-fg-muted mt-1 leading-snug">
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
                    ? "border-accent bg-accent-soft text-fg-strong"
                    : "border-divider-strong bg-surface-elevated/60 text-fg/85 hover:border-accent-soft hover:bg-surface-elevated",
                )}
              >
                <span className="block font-display font-bold text-sm sm:text-base">
                  Something else
                </span>
                <span className="block text-[11px] sm:text-xs text-fg-muted mt-1">
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
                    className={cn(
                      "p-3 sm:p-4 rounded-xl border text-left transition-all min-w-0",
                      state.timing === t.value
                        ? "border-accent bg-accent-soft"
                        : "border-divider-strong bg-surface-elevated/60 hover:border-accent-soft",
                    )}
                  >
                    <span className="block text-xl mb-1" aria-hidden>
                      {t.emoji}
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
              <h3 className="font-display text-lg sm:text-xl font-bold text-fg-strong mb-2">Where?</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {areas.map((a) => (
                  <button
                    key={a.slug}
                    type="button"
                    onClick={() => update("area", a.slug)}
                    className={cn(
                      "p-2.5 sm:p-3 rounded-xl border text-sm font-semibold transition-all min-w-0 truncate",
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
                The more detail here, the more accurate Brody's estimate. He'll review everything before reaching out.
              </p>
              <textarea
                value={state.description}
                onChange={(e) => update("description", e.target.value)}
                rows={6}
                placeholder="Describe the project. Size, scope, anything Brody should know."
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
                Photos let Brody quote accurately and show up with the right tools. JPG, PNG, WEBP, or HEIC. 5MB each.
              </p>

              {photos.length < MAX_PHOTOS && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="group w-full p-5 rounded-xl border-2 border-dashed border-divider-strong bg-surface-elevated/40 hover:border-accent hover:bg-accent-soft/30 transition-colors text-left flex items-center gap-4"
                >
                  <span className="h-10 w-10 rounded-xl bg-accent-soft border border-accent/40 flex items-center justify-center flex-shrink-0">
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
                      className="relative aspect-square rounded-xl overflow-hidden border border-divider-strong bg-surface-elevated"
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
                        className="absolute top-1.5 right-1.5 grid place-items-center h-7 w-7 rounded-full bg-summit-black/85 border border-summit-mist/30 text-summit-mist hover:bg-summit-black hover:text-summit-gold transition-colors"
                      >
                        <X className="h-3.5 w-3.5" />
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
                Email is preferred and gets the fastest reply. Text or phone work too.
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
              <div className="grid grid-cols-3 gap-2">
                {(["email", "text", "either"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => update("preferredContact", p)}
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

      <div className="mt-8 flex items-center justify-between gap-3 sm:gap-4 border-t border-divider pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0 || submitting}
          className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-fg-muted hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
