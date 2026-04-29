"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hot shadow-gold hover:shadow-gold-lg",
  secondary:
    "bg-surface-panel text-fg-strong border border-divider-strong hover:border-accent hover:text-accent",
  ghost:
    "text-fg hover:text-accent hover:bg-surface-panel/60",
  outline:
    "border border-accent text-accent hover:bg-accent hover:text-white",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-11 px-5 text-sm rounded-full",
  md: "h-12 px-6 text-base rounded-full",
  lg: "h-14 px-8 text-lg rounded-full",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  withArrow?: boolean;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, withArrow, ...rest } = props;

  const classes = cn(
    "btn-magnetic inline-flex items-center justify-center gap-2 font-semibold tracking-wide",
    "transition-all duration-200 ease-editorial",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-summit-gold",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const linkRest = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternal =
      props.href.startsWith("http") ||
      props.href.startsWith("mailto:") ||
      props.href.startsWith("tel:") ||
      props.href.startsWith("sms:");
    // Auto-tag any internal link to /quote so the mobile sticky bar can
    // intersect-observe these CTAs and hide itself when one is in view.
    const ctaAttr = props.href.startsWith("/quote") ? { "data-quote-cta": "true" } : {};
    if (isExternal) {
      return (
        <a {...linkRest} {...ctaAttr} href={props.href} className={cn("group", classes)}>
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} {...ctaAttr} className={cn("group", classes)}>
        {content}
      </Link>
    );
  }

  const btnRest = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button {...btnRest} className={cn("group", classes)}>
      {content}
    </button>
  );
}
