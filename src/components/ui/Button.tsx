import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "outline-light" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-deep",
  light: "bg-white text-ink hover:bg-accent-wash",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white hover:text-ink",
  "outline-dark": "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(
    "group inline-flex h-12 items-center justify-center gap-2.5 rounded-[3px] px-6 text-[0.9375rem] font-medium tracking-[-0.005em]",
    "transition-[background-color,color,border-color] duration-300 ease-out-expo disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    className,
  );
}

function Arrow() {
  return (
    <ArrowUpRight
      aria-hidden="true"
      strokeWidth={1.75}
      className="size-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  );
}

export function ButtonLink({
  variant = "primary",
  className,
  children,
  arrow = true,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; arrow?: boolean }) {
  return (
    <Link className={buttonClasses(variant, className)} {...props}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

/** Understated text link with an animated underline. */
export function TextLink({
  className,
  children,
  tone = "dark",
  ...props
}: ComponentProps<typeof Link> & { tone?: "dark" | "light" }) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
      {...props}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:100%_1px] bg-bottom-left bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:0%_1px]">
        {children}
      </span>
      <Arrow />
    </Link>
  );
}
