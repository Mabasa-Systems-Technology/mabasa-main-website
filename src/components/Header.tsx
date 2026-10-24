"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Logo } from "./ui/Logo";
import { ButtonLink } from "./ui/Button";
import { LogIn } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 320 && y > lastY.current + 4);
      if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation (adjusting state during render, not in an effect).
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded bg-white px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out-expo",
          solid ? "border-b border-line bg-white/90 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
        )}
      >
        <div className="container-site flex h-[72px] items-center justify-between gap-6 lg:h-20">
          <Logo tone={solid ? "dark" : "light"} />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.slice(1).map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative rounded px-3.5 py-2 text-[0.9375rem] transition-colors duration-300",
                        solid ? "text-ink-soft hover:text-ink" : "text-white/75 hover:text-white",
                        active && (solid ? "text-ink" : "text-white"),
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-current transition-transform duration-500 ease-out-expo",
                          active ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {
              <a
                href={site.clientPortalUrl}
                className={cn(
                  "hidden h-11 items-center px-3 text-sm font-medium transition-colors duration-300 lg:inline-flex",
                  solid ? "text-ink-soft hover:text-ink" : "text-white/75 hover:text-white",
                )}
              >
                Login
              </a>
            }
            <div className="hidden sm:block">
              <ButtonLink href="/contact" variant={solid ? "primary" : "outline-light"} className="h-11 px-5">
                Start a Project
              </ButtonLink>
            </div>
            <button
              ref={menuButton}
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
              className={cn(
                "relative flex size-11 items-center justify-center rounded lg:hidden",
                solid ? "text-ink" : "text-white",
              )}
            >
              <span className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-out-expo",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-6 bg-current transition-all duration-500 ease-out-expo",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.4 }}
            className="hero-field fixed inset-0 z-40 flex flex-col overflow-y-auto pt-[72px] lg:hidden"
          >
            <nav aria-label="Mobile" className="container-site flex flex-1 flex-col justify-between py-10">
              <ul className="space-y-1">
                {navigation.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className="flex items-baseline gap-4 border-b border-white/10 py-4 text-[2rem] font-light tracking-tight text-white"
                    >
                      <span className="font-mono text-xs text-accent-soft">0{i + 1}</span>
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10"
              >
                {
                  <a
                    href={site.clientPortalUrl}
                    className="mb-4 flex items-center justify-center gap-2 py-3 text-sm font-medium text-white/80"
                  >
                    <LogIn aria-hidden="true" strokeWidth={1.5} className="size-4" />
                    Client Portal login
                  </a>
                }
                <ButtonLink href="/contact" variant="light" className="w-full">
                  Start a Project
                </ButtonLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
