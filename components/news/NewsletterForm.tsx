"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div className="rounded-card border border-brass/50 bg-sand p-8 text-center shadow-card max-w-xl mx-auto">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brass-hover">
        The Gazette Dispatch
      </span>
      <h3 className="mt-2 font-display text-3xl font-semibold text-navy">
        Subscribe to Academy Dispatches
      </h3>
      <p className="mt-2 text-sm text-ink/80 leading-relaxed">
        Receive our termly gazette, invitations to public colloquia, and student publication highlights directly in your inbox.
      </p>

      {subscribed ? (
        <div className="mt-6 rounded-card border-l-4 border-brass bg-surface p-4 text-left">
          <p className="text-sm font-semibold text-navy">
            Thank you for subscribing.
          </p>
          <p className="text-xs text-muted mt-1">
            This is a front-end demonstration. No actual emails will be dispatched.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-button border border-hairline bg-surface px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus-visible:border-brass"
          />
          <Button type="submit" variant="accent">
            Subscribe
          </Button>
        </form>
      )}
      <p className="mt-4 text-[11px] text-muted">
        Front-end demo only · We respect your privacy.
      </p>
    </div>
  );
}
