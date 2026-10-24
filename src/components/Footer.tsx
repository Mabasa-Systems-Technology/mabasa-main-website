import Image from "next/image";
import Link from "next/link";
import { BbbeeBadge } from "./ui/BbbeeBadge";
import { SocialLinks } from "./SocialLinks";
import { navigation, site } from "@/lib/site";
import wordmark from "../../public/brand/wordmark-light.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden bg-navy-950 text-white">
      <div className="container-site pt-20 lg:pt-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-headline font-light text-balance">Let&apos;s talk.</p>
            <a
              href={`mailto:${site.publicEmail}`}
              className="mt-8 inline-block text-[clamp(1.25rem,3vw,2.25rem)] font-light tracking-tight underline decoration-white/25 underline-offset-8 transition-colors hover:decoration-white"
            >
              {site.publicEmail}
            </a>
            <p className="mt-4">
              <a
                href={`tel:${site.phone}`}
                className="text-lg text-white/70 transition-colors hover:text-white lg:text-xl"
              >
                {site.phoneDisplay}
              </a>
            </p>
            <SocialLinks className="mt-10 gap-5 [&_svg]:size-5" />
          </div>

          <div className="flex items-end justify-between gap-10 lg:col-span-4 lg:col-start-9 lg:flex-col lg:items-start lg:justify-between">
            <nav aria-label="Footer">
              <ul className="space-y-3">
                {navigation.slice(1).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-2xl font-light tracking-tight text-white/80 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={site.clientPortalUrl}
                    className="text-2xl font-light tracking-tight text-white/80 transition-colors hover:text-white"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
            <BbbeeBadge className="h-28 w-auto shrink-0 lg:h-32" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* A large, faint wordmark closes the page. */}
      <div aria-hidden="true" className="container-site select-none pt-10 pb-6">
        <Image src={wordmark} alt="" className="h-auto w-full opacity-[0.07]" />
      </div>
    </footer>
  );
}
