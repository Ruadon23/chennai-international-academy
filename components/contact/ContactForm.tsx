"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Errors = Partial<Record<"name" | "email" | "department" | "message", string>>;

const fieldClass =
  "mt-1.5 block min-h-11 w-full rounded-button border bg-surface px-3 py-2.5 font-normal text-ink transition-colors duration-200 placeholder:text-muted/70 focus-visible:border-brass";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const dept = String(data.get("department") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const errs: Errors = {};
    if (!name) errs.name = "Please provide your full name.";
    if (!email) errs.email = "Please provide your email address.";
    else if (!EMAIL_RE.test(email)) errs.email = "Please enter a valid email address.";
    if (!dept) errs.department = "Please select a department.";
    if (!message) errs.message = "Please enter your message.";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="rounded-card border border-hairline bg-surface p-8 shadow-card">
      <h3 className="font-display text-2xl font-semibold text-navy">
        Send a Message to the Academy
      </h3>
      <p className="mt-2 text-xs text-muted">
        Fill out the form below and our administrative team will direct your inquiry to the appropriate department.
      </p>

      {submitted ? (
        <div role="status" className="mt-8 rounded-card border-l-4 border-brass bg-cream p-6">
          <h4 className="font-display text-2xl font-semibold text-navy">
            Message Received
          </h4>
          <p className="mt-2 text-sm text-ink/90 leading-relaxed">
            Thank you for reaching out. In an active production environment, the appropriate directorate would respond within one business day.
          </p>
          <p className="mt-3 text-xs text-muted italic">
            This is a front-end demonstration form. No actual email or database entry was dispatched.
          </p>
          <Button
            variant="secondary"
            className="mt-6 text-xs"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-navy">
              Full Name <span className="text-brass">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="e.g., Ananya Sundaram"
              className={`${fieldClass} ${errors.name ? "border-red-700" : "border-hairline"}`}
            />
            {errors.name && <span className="mt-1 block text-xs text-red-700">{errors.name}</span>}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold uppercase tracking-wider text-navy">
                Email Address <span className="text-brass">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                className={`${fieldClass} ${errors.email ? "border-red-700" : "border-hairline"}`}
              />
              {errors.email && <span className="mt-1 block text-xs text-red-700">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-navy">
                Phone Number <span className="text-muted font-normal">(Optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 98000 00000"
                className={`${fieldClass} border-hairline`}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-dept" className="block text-xs font-semibold uppercase tracking-wider text-navy">
              Department to Direct Inquiry <span className="text-brass">*</span>
            </label>
            <select
              id="contact-dept"
              name="department"
              required
              defaultValue=""
              className={`${fieldClass} ${errors.department ? "border-red-700" : "border-hairline"}`}
            >
              <option value="" disabled>
                Select a department
              </option>
              <option value="admissions">Admissions Directorate</option>
              <option value="administration">General Administration & Transcripts</option>
              <option value="transport">Transport & Facilities</option>
              <option value="careers">Faculty & Staff Careers</option>
            </select>
            {errors.department && <span className="mt-1 block text-xs text-red-700">{errors.department}</span>}
          </div>

          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-navy">
              Your Message <span className="text-brass">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              placeholder="How can we assist you?"
              className={`${fieldClass} resize-y ${errors.message ? "border-red-700" : "border-hairline"}`}
            />
            {errors.message && <span className="mt-1 block text-xs text-red-700">{errors.message}</span>}
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Transmit Inquiry
          </Button>

          <p className="text-[11px] text-muted text-center">
            Demonstration form · Privacy protected
          </p>
        </form>
      )}
    </div>
  );
}
