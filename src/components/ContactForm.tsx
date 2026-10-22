"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, ArrowUpRight, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { budgetOptions, contactSchema, serviceOptions } from "@/lib/contact-schema";
import { buttonClasses } from "./ui/Button";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<string, string>>;

const fieldBase =
  "block w-full rounded-[3px] border bg-white px-4 py-3.5 text-[1rem] text-ink placeholder:text-muted/70 transition-[border-color,box-shadow] duration-200 outline-none focus:border-accent focus:ring-4 focus:ring-accent/10";

function Field({
  id,
  label,
  optional,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between text-sm font-medium text-ink">
        {label}
        {optional && <span className="text-xs font-normal text-muted">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
          <AlertCircle aria-hidden="true" className="size-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ initialService, publicEmail }: { initialService?: string; publicEmail?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const startedAt = useRef(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Records when the form became interactive, for the server-side timing check.
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const defaultService = serviceOptions.find((s) => s === initialService) ?? "";

  const describedBy = (id: string, hint = false) => (errors[id] ? `${id}-error` : hint ? `${id}-hint` : undefined);

  const focusFirstError = (errs: Errors) => {
    const first = Object.keys(errs)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      service: String(fd.get("service") ?? ""),
      budget: String(fd.get("budget") ?? ""),
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      website: String(fd.get("website") ?? ""),
      startedAt: startedAt.current,
    };

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      setFormError("Please correct the highlighted fields.");
      setStatus("error");
      focusFirstError(errs);
      return;
    }

    setErrors({});
    setFormError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as {
        message?: string;
        fieldErrors?: Errors;
      };
      if (res.ok) {
        setStatus("success");
        return;
      }
      if (body.fieldErrors) {
        setErrors(body.fieldErrors);
        focusFirstError(body.fieldErrors);
      }
      setFormError(body.message || "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setFormError("We couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === "success" ? (
        <motion.div
          key="success"
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[4px] border border-line bg-white p-10 lg:p-14"
        >
          <CheckCircle2 aria-hidden="true" strokeWidth={1.25} className="size-12 text-accent" />
          <h2 className="mt-8 text-title font-light">Thank you — your enquiry has been sent.</h2>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            We&apos;ll review the details you&apos;ve shared and reply to the email address you provided. If we need
            more context, we&apos;ll suggest a short call to discuss your project.
          </p>
          <Link href="/services" className={buttonClasses("outline-dark", "mt-10")}>
            Explore our services
            <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
          </Link>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          ref={formRef}
          noValidate
          onSubmit={onSubmit}
          exit={{ opacity: 0, y: -12 }}
          aria-describedby={formError ? "form-error" : undefined}
          className="rounded-[4px] border border-line bg-white p-6 sm:p-10 lg:p-12"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label="Full name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={120}
                aria-invalid={!!errors.name}
                aria-describedby={describedBy("name")}
                className={cn(fieldBase, errors.name ? "border-red-600" : "border-line-strong")}
              />
            </Field>
            <Field id="email" label="Work email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                maxLength={200}
                aria-invalid={!!errors.email}
                aria-describedby={describedBy("email")}
                className={cn(fieldBase, errors.email ? "border-red-600" : "border-line-strong")}
              />
            </Field>
            <Field id="company" label="Company name" error={errors.company}>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                required
                maxLength={160}
                aria-invalid={!!errors.company}
                aria-describedby={describedBy("company")}
                className={cn(fieldBase, errors.company ? "border-red-600" : "border-line-strong")}
              />
            </Field>
            <Field id="service" label="Service of interest" error={errors.service}>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue={defaultService}
                  aria-invalid={!!errors.service}
                  aria-describedby={describedBy("service")}
                  className={cn(
                    fieldBase,
                    "appearance-none pr-11",
                    errors.service ? "border-red-600" : "border-line-strong",
                  )}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="pointer-events-none absolute top-1/2 right-4 size-[18px] -translate-y-1/2 text-muted"
                />
              </div>
            </Field>
            <div className="sm:col-span-2">
              <Field id="budget" label="Estimated project budget" optional error={errors.budget}>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    defaultValue=""
                    aria-invalid={!!errors.budget}
                    aria-describedby={describedBy("budget")}
                    className={cn(fieldBase, "appearance-none pr-11", "border-line-strong")}
                  >
                    <option value="">Prefer not to say</option>
                    {budgetOptions.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="pointer-events-none absolute top-1/2 right-4 size-[18px] -translate-y-1/2 text-muted"
                  />
                </div>
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field
                id="message"
                label="Project description"
                error={errors.message}
                hint="What are you trying to achieve, what exists today, and any timelines or constraints."
              >
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  maxLength={5000}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  aria-invalid={!!errors.message}
                  aria-describedby={describedBy("message", true)}
                  className={cn(fieldBase, "resize-y", errors.message ? "border-red-600" : "border-line-strong")}
                />
              </Field>
              <p className="mt-1 text-right font-mono text-[0.7rem] text-muted" aria-hidden="true">
                {messageLength} / 5000
              </p>
            </div>
          </div>

          {/* Honeypot — hidden from people and assistive technology. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Leave this field empty</label>
            <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="mt-6">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink-soft">
              <input
                type="checkbox"
                name="consent"
                required
                aria-invalid={!!errors.consent}
                aria-describedby={describedBy("consent")}
                className="mt-0.5 size-[18px] shrink-0 cursor-pointer accent-accent"
              />
              <span>
                I agree that MST may use the information I provide to respond to my enquiry, as described in the{" "}
                <Link href="/privacy" className="text-accent underline underline-offset-4">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.consent && (
              <p id="consent-error" className="mt-2 flex items-center gap-1.5 text-sm text-red-700">
                <AlertCircle aria-hidden="true" className="size-3.5 shrink-0" />
                {errors.consent}
              </p>
            )}
          </div>

          <div aria-live="polite">
            {status === "error" && formError && (
              <div
                id="form-error"
                role="alert"
                className="mt-8 flex gap-3 rounded-[3px] border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                <AlertCircle aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                <p>
                  {formError}
                  {publicEmail && !Object.keys(errors).length && (
                    <>
                      {" "}
                      You can also email us at{" "}
                      <a href={`mailto:${publicEmail}`} className="underline">
                        {publicEmail}
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-muted">All fields are required unless marked optional.</p>
            <button
              type="submit"
              disabled={status === "submitting"}
              className={buttonClasses("primary", "min-w-[200px]")}
            >
              {status === "submitting" ? (
                <>
                  <Loader2 aria-hidden="true" className="size-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send enquiry
                  <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className="size-4" />
                </>
              )}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
