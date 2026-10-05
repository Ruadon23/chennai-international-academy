import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "editorial";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-[background-color,transform,color,box-shadow] duration-200 ease-cia focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass";

const variants: Record<Variant, string> = {
  primary:
    "min-h-11 rounded-button bg-navy px-6 py-3 text-cream hover:-translate-y-0.5 hover:bg-oxford",
  secondary:
    "min-h-11 rounded-button border border-navy bg-transparent px-6 py-3 text-navy hover:bg-sand",
  accent:
    "min-h-11 rounded-button bg-brass px-6 py-3 font-semibold text-navy hover:-translate-y-0.5 hover:bg-brass-hover",
  editorial:
    "group min-h-11 border-b border-brass py-1 text-navy hover:border-b-2",
};

type CommonProps = { variant?: Variant; className?: string; children: ReactNode };

type ButtonAsLink = CommonProps & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type ButtonAsButton = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);
  const content =
    variant === "editorial" ? (
      <>
        {children}
        <span
          aria-hidden="true"
          className="transition-transform duration-200 ease-cia group-hover:translate-x-1"
        >
          →
        </span>
      </>
    ) : (
      children
    );

  if ("href" in rest && rest.href !== undefined) {
    const { href, ...linkRest } = rest as Omit<ButtonAsLink, keyof CommonProps>;
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...linkRest}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
