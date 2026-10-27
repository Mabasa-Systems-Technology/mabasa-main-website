import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import { HeroBackground } from "@/components/HeroBackground";
import { CtaBand } from "@/components/CtaBand";
import { Leadership } from "@/components/Leadership";
import { Principles } from "@/components/Principles";
import { Reveal } from "@/components/ui/Reveal";
import { unsplash } from "@/lib/site";
import markLight from "../../../public/brand/mark-light.png";

export const metadata: Metadata = {
  title: "About",
  description:
    "Blackroid is an independent business and technology services firm focused on performance, transformation and engineering.",
  alternates: { canonical: "/about" },
};

const focus = [
  "Business Performance",
  "Technology Transformation",
  "Artificial Intelligence",
  "Enterprise Engineering",
  "Operational Improvement",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <HeroBackground />
        </div>
        <div className="container-site grid items-center gap-12 pt-40 pb-16 lg:min-h-[72svh] lg:grid-cols-12 lg:pb-24">
          <div className="lg:col-span-7">
            <h1 className="rise text-display font-light text-balance">About Blackroid</h1>
            <div
              className="rise mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-white/80 lg:text-xl"
              style={{ "--d": "0.12s" } as CSSProperties}
            >
              <p>Blackroid is an independent business and technology services firm.</p>
              <p>
                We work with organisations to address complex business challenges through strategic advisory, technology
                expertise and disciplined implementation.
              </p>
              <p>
                Our capabilities bring together business understanding, engineering and technology to support
                organisational performance and long-term transformation.
              </p>
            </div>
          </div>
          {/* The official B monogram, large, to balance the text column. */}
          <div aria-hidden="true" className="hidden lg:col-span-5 lg:flex lg:justify-end">
            <Image src={markLight} alt="" priority className="h-[22rem] w-auto" />
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-headline font-light text-balance">Our Approach.</h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-12"
          >
            <p>
              We focus on understanding the business problem, establishing clear objectives and delivering appropriate
              solutions.
            </p>
            <p>Our work combines advisory expertise with technical implementation and ongoing support.</p>
            <p className="eyebrow pt-6 text-accent">Our Focus</p>
            <ul className="border-t border-line-strong">
              {focus.map((f) => (
                <li key={f} className="border-b border-line-strong py-4 text-lg font-light text-ink">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Leadership />

      <section className="relative isolate -mt-20 overflow-hidden rounded-t-[3rem] bg-navy-950 lg:-mt-28 lg:rounded-t-[6rem]">
        <div className="relative aspect-[16/9] max-h-[640px] w-full sm:aspect-[21/9]">
          <Image
            src={unsplash("photo-1636706519609-988babca3dd5")}
            alt="Aerial view of the Johannesburg skyline"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
          />
          <div className="container-site absolute inset-x-0 bottom-0 pb-10">
            <p className="max-w-xl text-xl font-light text-white lg:text-2xl">Based in South Africa.</p>
          </div>
        </div>
      </section>

      <Principles />
      <CtaBand />
    </>
  );
}
