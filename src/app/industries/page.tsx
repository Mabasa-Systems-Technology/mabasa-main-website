import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/lib/industries";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Mabasa Technologies applies software engineering, AI, cloud and data capabilities to challenges in financial services, logistics, retail, healthcare, professional services and manufacturing.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero title="Engineering that adapts to the sector you operate in." />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-site space-y-24 lg:space-y-36">
          {industries.map((ind, i) => (
            <article
              key={ind.slug}
              id={ind.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-12 lg:gap-16"
            >
              <Reveal className={cn("lg:col-span-5", i % 2 === 1 && "lg:order-2 lg:col-start-8")}>
                <div
                  className={cn(
                    "group relative aspect-[4/5] overflow-hidden bg-navy-900",
                    i % 2 === 0 ? "rounded-[4px] rounded-tr-[56px]" : "rounded-[4px] rounded-tl-[56px]",
                  )}
                >
                  <Image
                    src={ind.image}
                    alt={ind.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover grayscale-[30%] transition-[transform,filter] duration-[1.4s] ease-out-expo group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent"
                  />
                  <p className="absolute bottom-6 left-6 font-mono text-xs text-white/80">0{i + 1}</p>
                </div>
              </Reveal>

              <Reveal delay={0.1} className={cn("lg:col-span-6", i % 2 === 0 ? "lg:col-start-7" : "lg:order-1")}>
                <h2 className="text-headline font-light">{ind.name}</h2>
                <p className="mt-6 text-lg leading-relaxed text-muted">{ind.summary}</p>
                <div className="mt-10">
                  <div>
                    <ul className="space-y-3">
                      {ind.solutions.map((s) => (
                        <li
                          key={s}
                          className="border-t border-accent/25 pt-3 text-[0.9375rem] leading-relaxed text-ink-soft"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
