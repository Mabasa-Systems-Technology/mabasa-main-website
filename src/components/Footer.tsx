import Link from "next/link";
import { Logo } from "./ui/Logo";
import { navigation, site } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-site pt-20 pb-10 lg:pt-28">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-white/60">
              Technology consulting and software engineering for growing businesses in {site.country}.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="eyebrow mb-5 text-white/40">Company</p>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.9375rem] text-white/75 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5 text-white/40">Services</p>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-[0.9375rem] text-white/75 transition-colors hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5 text-white/40">Get in touch</p>
              <ul className="space-y-3 text-[0.9375rem] text-white/75">
                <li>
                  <Link href="/contact" className="transition-colors hover:text-white">
                    Start a project enquiry
                  </Link>
                </li>
                {site.publicEmail && (
                  <li>
                    <a href={`mailto:${site.publicEmail}`} className="transition-colors hover:text-white">
                      {site.publicEmail}
                    </a>
                  </li>
                )}
                <li className="text-white/50">Serving clients across {site.country}</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl">
            © {year} {site.legalName}. All rights reserved. Site content, design and code may not be copied, reproduced
            or used to train AI models without written permission.
          </p>
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
