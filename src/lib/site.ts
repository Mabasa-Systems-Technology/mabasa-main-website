export const site = {
  name: "MST",
  legalName: "MST (Pty) Ltd",
  tagline: "Technology consulting & software engineering",
  description:
    "MST is a South African technology consultancy. We design, build, integrate and maintain software, AI, cloud and data systems for startups, SMEs and growing organisations.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_ZA",
  country: "South Africa",
  publicEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Builds a remote Unsplash URL (images are free-licence, served via next/image). */
export function unsplash(id: string) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;
}
