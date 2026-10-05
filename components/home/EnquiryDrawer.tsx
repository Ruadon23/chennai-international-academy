"use client";

import { useRef, useState, type ComponentProps } from "react";
import { Button } from "@/components/ui/Button";
import { gradeOptions } from "@/data/admissions";

type Variant = ComponentProps<typeof Button>["variant"];

const fieldClass =
  "mt-1.5 block min-h-11 w-full rounded-button border border-hairline bg-surface px-3 py-2.5 text-ink placeholder:text-muted/70 focus-visible:border-brass";

/**
 * Trigger button + right-hand drawer (native <dialog>: focus trap, Escape and
 * inert background come for free). Front-end only — no data is sent or stored.
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const open = () => {
    setSubmitted(false);
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <Button variant={variant} className={className} onClick={open}>
        {label}
      </Button>
      <dialog
        ref={dialogRef}
        aria-labelledby="enquiry-title"
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-md bg-cream p-0 text-ink shadow-card-hover backdrop:bg-navy/60 open:animate-fade-in"
      >
        <div className="flex h-full flex-col overflow-y-auto p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2 id="enquiry-title" className="text-card-title">
              {title}
            </h2>
            <button
              type="button"
              onClick={close}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-button border border-hairline text-navy"
            >
              <span className="sr-only">Close enquiry form</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {submitted ? (
            <div role="status" className="mt-8 border-t-2 border-brass pt-6">
              <p className="font-display text-3xl font-semibold text-navy">
                Thank you.
              </p>
              <p className="mt-3 text-muted">
                This is a demonstration form, so no information was sent or
                stored. In a live version, our admissions team would respond
                within one working day.
              </p>
              <Button variant="secondary" className="mt-6" onClick={close}>
                Close
              </Button>
            </div>
          ) : (
            <form
              className="mt-6 flex flex-1 flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <p className="text-muted">
                Three quick details. We will take it from here.
              </p>
              <label className="block font-medium text-navy">
                Parent name
                <input
                  name="parentName"
                  type="text"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </label>
              <label className="block font-medium text-navy">
                Email or phone
                <input
                  name="contact"
                  type="text"
                  required
                  autoComplete="email"
                  className={fieldClass}
                />
              </label>
              <label className="block font-medium text-navy">
                Grade of interest
                <select name="grade" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    Select a grade
                  </option>
                  {gradeOptions.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </label>
              <Button type="submit" variant="accent" className="mt-2 w-full">
                Submit Enquiry
              </Button>
              <p className="mt-auto text-xs text-muted">
                Demo form: no data is sent or stored.
              </p>
            </form>
          )}
        </div>
      </dialog>
    </>
  );
}
