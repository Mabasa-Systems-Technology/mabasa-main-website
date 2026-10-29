import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { Reveal } from "../ui/Reveal";

/** A story section: heading on the left, text on the right. */
export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-light text-balance lg:text-4xl">{heading}</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/** A story photo in a fixed-ratio frame. */
export function Photo({
  src,
  alt,
  className,
  sizes,
}: {
  src: ComponentProps<typeof Image>["src"];
  alt: string;
  className?: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[4px] bg-paper ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className="object-cover" />
    </div>
  );
}
