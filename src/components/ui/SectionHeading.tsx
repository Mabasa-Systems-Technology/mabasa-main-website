import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
}: {
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-4xl", className)}>
      <h2 className={cn("text-headline font-light text-balance", tone === "light" ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-lg leading-relaxed text-pretty",
            align === "center" && "mx-auto",
            tone === "light" ? "text-white/70" : "text-muted",
          )}
        >
          {lead}
        </p>
      )}
    </Reveal>
  );
}
