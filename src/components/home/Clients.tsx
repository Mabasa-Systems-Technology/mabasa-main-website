import Image from "next/image";
import { clients, testimonials } from "@/lib/clients";
import { cn } from "@/lib/cn";
import { Reveal } from "../ui/Reveal";

/** A slim band, not a full section: heading beside the client names. */
export function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="border-y border-line bg-black py-12 lg:py-14">
      <div className="container-site">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
          <h2 id="clients-heading" className="text-xl font-light tracking-tight text-ink lg:col-span-3">
            Businesses we&apos;ve worked with
          </h2>
          <ul className="grid grid-cols-2 items-center justify-items-start gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-8 lg:col-span-9 lg:justify-between">
            {clients.map((c) => (
              // The logos are dark artwork, so each sits on a small white tile against the black page.
              <li
                key={c.name}
                className={cn("flex items-center", c.logo ? "h-14 rounded-[3px] bg-white px-4" : "h-10")}
              >
                {c.logo ? (
                  <Image
                    src={c.logo.src}
                    alt={c.name}
                    width={c.logo.width}
                    height={c.logo.height}
                    className={cn(
                      "w-auto max-w-[8.5rem] object-contain object-left opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-w-none",
                      c.logo.heightClass,
                    )}
                  />
                ) : (
                  <span className="text-lg font-medium tracking-tight text-ink/60">{c.name}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        {testimonials.length > 0 && (
          <div className="mt-12 grid gap-5 border-t border-line pt-12 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-[4px] bg-paper p-8">
                  <blockquote className="text-lg leading-relaxed font-light text-ink lg:text-xl">
                    &ldquo;{t.feedback.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm">
                    <span className="block font-medium text-ink">{t.feedback.person}</span>
                    <span className="block text-muted">
                      {t.feedback.role}, {t.name}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
