"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";
import { ButtonLink } from "../ui/Button";
import heroBg from "../../../public/images/hero-bg.webp";

const headline = ["We build the technology", "that moves businesses", "forward."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax only on the background, so content is never pushed out of the clipped section.
  const fieldY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fieldOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] overflow-hidden bg-navy-950 text-white">
      <motion.div
        aria-hidden="true"
        style={{ opacity: fieldOpacity, y: fieldY }}
        className="absolute inset-0 -z-10 bg-navy-950"
      >
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-center"
        />
        {/* Scrim keeps the white headline legible over the lighter lower half of the image. */}
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_0%_100%,rgb(5_13_31/0.72)_0%,rgb(5_13_31/0.3)_55%,transparent_80%)]" />
      </motion.div>

      <div className="container-site flex flex-1 flex-col justify-end pt-36 pb-12 lg:pb-16">
        <h1 className="max-w-6xl text-display font-light">
          {headline.map((line, i) => (
            <span key={line} className="-mb-[0.06em] block overflow-hidden pb-[0.14em]">
              <span className="line-up block" style={{ "--d": `${0.2 + i * 0.1}s` } as CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div className="rise mt-10" style={{ "--d": "0.6s" } as CSSProperties}>
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-white/75 lg:text-xl">
              From intelligent automation to enterprise-grade software, MST helps growing businesses design, build, and
              scale the systems they need.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Start a Project
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
