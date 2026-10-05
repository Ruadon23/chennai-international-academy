"use client";

import { useId, useRef, useState, type ComponentProps, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { gradeOptions } from "@/data/admissions";

type Variant = ComponentProps<typeof Button>["variant"];
type Errors = Partial<Record<"parentName" | "grade" | "email" | "phone", string>>;

const fieldClass =
  "mt-1.5 block min-h-11 w-full rounded-button border bg-surface px-3 py-2.5 font-normal text-ink transition-colors duration-200 placeholder:text-muted/70 focus-visible:border-brass";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s()-]{8,16}$/;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  const get = (k: string) => String(data.get(k) ?? "").trim();
  if (!get("parentName")) errors.parentName = "Please enter your name.";
  if (!get("grade")) errors.grade = "Please choose a grade.";
  if (!get("email")) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(get("email")))
    errors.email = "Please enter a valid email address.";
  if (get("phone") && !PHONE_RE.test(get("phone")))
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

/**
 * Trigger button + right-hand drawer (native <dialog>: focus trap, Escape and
 * inert background come for free). FRONT-END DEMO ONLY — nothing is sent,
 * stored or emailed; values live in the DOM until the dialog closes.
 */
export function EnquiryDrawer({
  label,
  variant = "accent",
  title = "Begin your enquiry",
  className,
}: {
  label: string;
  variant?: Variant;
  title?: string;
  className?: string;
}) {
  const uid = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formKey, setFormKey] = useState(0);

  const open = () => {
    setSubmitted(false);
    setErrors({});
    setFormKey((k) => k + 1); // fresh, empty form each time
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);
    const firstInvalid = (
      ["parentName", "grade", "email", "phone"] as const
    ).find((k) => found[k]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    form.reset();
    setSubmitted(true);
    requestAnimationFrame(() => successRef.current?.focus());
  };

  const field = (name: keyof Errors) => ({
    id: `${uid}-${name}`,
    name,
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-error` : undefined,
    className: `${fieldClass} ${errors[name] ? "border-red-700" : "border-hairline"}`,
  });

  const fieldError = (name: keyof Errors) =>
    errors[name] ? (
      <span
        id={`${uid}-${name}-error`}
        className="mt-1.5 block text-[13px] font-normal text-red-700"
      >
        {errors[name]}
      </span>
    ) : null;

  const labelClass = "block text-sm font-semibold text-navy";
  const req = (
    <span aria-hidden="true" className="ml-0.5 text-brass-hover">
      *
    </span>
  );

  return (
    <>
      <Button variant={variant} className={className} onClick={open}>
        {label}
      </Button>
      <dialog
        ref={dialogRef}
        aria-labelledby={`${uid}-title`}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-md bg-cream p-0 text-ink shadow-card-hover backdrop:bg-navy/60 open:animate-slide-in"
      >
        <div className="flex h-full flex-col overflow-y-auto p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brass-hover">
                Admissions
              </p>
              <h2 id={`${uid}-title`} className="text-card-title">
                {title}
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-button border border-hairline text-navy transition-colors duration-200 hover:bg-sand"
            >
              <span className="sr-only">Close enquiry form</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div role="status" className="mt-8 animate-fade-up border-t-2 border-brass pt-6">
              <h3
                ref={successRef}
                tabIndex={-1}
                className="text-3xl outline-none"
              >
                Thank you.
              </h3>
              <p className="mt-4 text-base text-ink/90">
                Our admissions team would be pleased to continue the
                conversation.
              </p>
              <p className="mt-4 border-l-2 border-brass pl-4 text-sm text-muted">
                This is a demonstration form. No information was sent, stored
                or emailed.
              </p>
              <Button variant="secondary" className="mt-8" onClick={close}>
                Close
              </Button>
            </div>
          ) : (
            <form
              key={formKey}
              ref={formRef}
              noValidate
              onSubmit={onSubmit}
              className="mt-6 flex flex-1 flex-col gap-5"
            >
              <p className="text-sm text-muted">
                Fields marked <span className="text-brass-hover">*</span> are
                required.
              </p>

              <div>
                <label htmlFor={`${uid}-parentName`} className={labelClass}>
                  Parent / Guardian name {req}
                </label>
                <input {...field("parentName")} type="text" autoComplete="name" required />
                {fieldError("parentName")}
              </div>

              <div>
                <label htmlFor={`${uid}-grade`} className={labelClass}>
                  Student grade {req}
                </label>
                <select {...field("grade")} defaultValue="" required>
                  <option value="" disabled>
                    Select a grade
                  </option>
                  {gradeOptions.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                {fieldError("grade")}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${uid}-email`} className={labelClass}>
                    Email {req}
                  </label>
                  <input {...field("email")} type="email" autoComplete="email" inputMode="email" required />
                  {fieldError("email")}
                </div>
                <div>
                  <label htmlFor={`${uid}-phone`} className={labelClass}>
                    Phone <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input {...field("phone")} type="tel" autoComplete="tel" inputMode="tel" />
                  {fieldError("phone")}
                </div>
              </div>

              <div>
                <label htmlFor={`${uid}-message`} className={labelClass}>
                  Message <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  id={`${uid}-message`}
                  name="message"
                  rows={4}
                  maxLength={500}
                  className={`${fieldClass} resize-y border-hairline`}
                />
              </div>

              <Button type="submit" variant="accent" className="mt-1 w-full">
                Submit Enquiry
              </Button>
              <p className="mt-auto border-t border-hairline pt-4 text-xs text-muted">
                Demonstration form: nothing is sent, stored or emailed.
              </p>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
