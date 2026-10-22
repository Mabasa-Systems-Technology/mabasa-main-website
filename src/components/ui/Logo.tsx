import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="MST — home"
      className={cn(
        "group inline-flex items-center gap-3 transition-colors duration-500",
        tone === "light" ? "text-white" : "text-ink",
        className,
      )}
    >
      <svg viewBox="0 0 28 28" aria-hidden="true" className="size-7 shrink-0">
        <rect x="0.75" y="0.75" width="26.5" height="26.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 20V8l7 7 7-7v12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <rect x="19.5" y="18.5" width="3" height="3" className="fill-accent" />
      </svg>
      <span className="text-[1.15rem] font-semibold tracking-[0.22em]">MST</span>
    </Link>
  );
}
