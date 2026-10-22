import Image from "next/image";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { unsplash } from "@/lib/site";

export function CtaBand({
  title = "Let's build what's next.",
  body = "Tell us what you're building or the challenge you're trying to solve. We'll help you explore the right technical approach.",
  cta = "Discuss Your Project",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <Image
        src={unsplash("photo-1479292889369-1a48f234247e")}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--color-navy-950)_15%,rgb(5_13_31/0.82)_50%,rgb(27_63_184/0.45)_100%)]"
      />
      <div className="container-site py-28 lg:py-40">
        <Reveal className="max-w-3xl">
          <h2 className="text-display font-light text-balance">{title}</h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">{body}</p>
          <ButtonLink href={href} variant="light" className="mt-12">
            {cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
