import Image from "next/image";
import { ButtonLink } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { unsplash } from "@/lib/site";

export function CtaBand({
  title = "Speak with Blackroid.",
  body,
  cta = "Contact Us",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    // clip-path turns the section into a window onto a viewport-fixed photo,
    // so the image stays still while the page scrolls past it.
    <section className="relative isolate bg-navy-900 text-white [clip-path:inset(0)]">
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <Image
          src={unsplash("photo-1508385082359-f38ae991e8f2")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgb(0_12_31/0.7)_0%,rgb(0_12_31/0.35)_55%,rgb(0_12_31/0.1)_100%)]" />
      </div>
      <div className="container-site flex min-h-[80svh] flex-col justify-center py-28 lg:py-40">
        <Reveal className="max-w-3xl">
          <h2 className="text-display font-light text-balance">{title}</h2>
          {body && <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">{body}</p>}
          <ButtonLink href={href} variant="light" className="mt-12">
            {cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
