import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { stories } from "@/lib/stories";
import { Reveal } from "../ui/Reveal";

/** Landing-page teasers for the customer stories: image, then title and date below it. */
export function CustomerStory() {
  return (
    <section aria-labelledby="story-heading" className="bg-white pb-16 lg:pb-24">
      <div className="container-site">
        <Reveal>
          <h2 id="story-heading" className="text-headline font-light text-balance">
            Customer stories.
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-12 sm:grid-cols-2 lg:mt-14 lg:gap-14">
          {stories.map((story, i) => (
            <li key={story.slug}>
              <Reveal delay={i * 0.1}>
                <Link
                  href={story.href}
                  className="group block rounded-[4px] outline-offset-8 focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {/* One shared 3:2 frame keeps the cards level; each photo is framed around its people. */}
                  <div className="relative aspect-[3/2] overflow-hidden rounded-[4px] bg-paper">
                    <Image
                      src={story.thumbnail}
                      alt={story.thumbnailAlt}
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      placeholder="blur"
                      style={{ objectPosition: story.thumbnailPosition }}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className="mt-6 text-xl leading-snug font-light text-balance transition-colors duration-300 group-hover:text-accent lg:text-2xl">
                    {story.title}
                  </h3>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted">
                    <time dateTime={story.dateISO}>{story.date}</time>
                    <span className="flex items-center gap-1.5 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 max-sm:opacity-100 sm:-translate-x-2">
                      Read story
                      <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
