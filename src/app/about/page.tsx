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
    "Blackroid is a technology-led enterprise solutions and execution firm. Learn about our collective-expertise model, our principles and our leadership.",
  alternates: { canonical: "/about" },
};

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
              <p>
                Blackroid is an enterprise solutions and execution firm. We bring together specialists in engineering,
                artificial intelligence, data and business to solve complex organisational challenges.
              </p>
              <p className="font-semibold text-white">
                Blackroid is built on one conviction: complex challenges need coordinated expertise, not isolated
                specialists.
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
            <h2 className="text-headline font-light text-balance">Built Around Collective Expertise.</h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-12"
          >
            <p>
              Blackroid is a technology-led enterprise solutions and execution firm. We work on complex organisational
              challenges where no single discipline holds the answer.
            </p>
            <p>
              For each challenge we assemble the specialists it needs and take responsibility for coordinating the work.
            </p>
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
            <p className="max-w-xl text-xl font-light text-white lg:text-2xl">
              Based in South Africa, solving complex challenges for organisations that depend on technology.
            </p>
          </div>
        </div>
      </section>

      <Principles />
      <CtaBand />
    </>
  );
}
