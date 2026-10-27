import { unsplash } from "./site";

/** The five practices. Older service addresses redirect here (see next.config.ts). */
export type Service = {
  slug: string;
  number: string;
  title: string;
  /** One short line, shown in lists and on the home page. */
  plain: string;
  /** Used for page descriptions and search data. */
  short: string;
  intro: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  /** A related page that belongs to this practice. */
  related?: { label: string; href: string };
};

export const services: Service[] = [
  {
    slug: "strategy-and-advisory",
    number: "01",
    title: "Strategy & Advisory",
    plain: "Business strategy, operating models and performance improvement.",
    short: "Business strategy, operating models and performance improvement.",
    intro: "We help leadership teams define direction, structure the organisation and improve performance.",
    capabilities: [
      "Business and technology strategy",
      "Operating model design",
      "Performance improvement",
      "Feasibility and investment assessment",
    ],
    image: unsplash("photo-1759310610372-c547611af808"),
    imageAlt: "Executives in a strategy meeting",
  },
  {
    slug: "technology-transformation",
    number: "02",
    title: "Technology Transformation",
    plain: "Enterprise architecture, modernisation and systems integration.",
    short: "Enterprise architecture, modernisation and systems integration.",
    intro: "We plan and deliver the technology change that organisations depend on.",
    capabilities: [
      "Enterprise architecture",
      "Systems modernisation",
      "Systems integration",
      "Cloud and infrastructure",
    ],
    image: unsplash("photo-1606857521015-7f9fcf423740"),
    imageAlt: "Professionals working in a large modern office",
  },
  {
    slug: "artificial-intelligence-and-data",
    number: "03",
    title: "Artificial Intelligence & Data",
    plain: "AI strategy, intelligent systems and data engineering.",
    short: "AI strategy, intelligent systems and data engineering.",
    intro: "We apply AI and data where they create measurable operational value.",
    capabilities: [
      "AI strategy and use-case selection",
      "Intelligent systems and automation",
      "Data engineering and integration",
      "Reporting and analytics",
    ],
    image: unsplash("photo-1526628953301-3e589a6a8b74"),
    imageAlt: "Performance dashboards on a monitoring screen",
  },
  {
    slug: "operations-and-performance",
    number: "04",
    title: "Operations & Performance",
    plain: "Operational improvement and business transformation.",
    short: "Operational improvement and business transformation.",
    intro: "We improve how organisations operate, from process through to performance.",
    capabilities: [
      "Process review and redesign",
      "Workflow automation",
      "Performance measurement and reporting",
      "Transformation programme support",
    ],
    image: unsplash("photo-1781559818983-c32838ee3d55"),
    imageAlt: "An operations manager reviewing a tablet in a warehouse",
  },
  {
    slug: "engineering-and-implementation",
    number: "05",
    title: "Engineering & Implementation",
    plain: "Enterprise engineering and complex programme delivery.",
    short: "Enterprise engineering and complex programme delivery.",
    intro: "We build and deliver complex systems with disciplined implementation.",
    capabilities: [
      "Enterprise software engineering",
      "Programme and delivery management",
      "Quality assurance and testing",
      "Ongoing support",
    ],
    image: unsplash("photo-1462396240927-52058a6a84ec"),
    imageAlt: "Glass office towers seen from below",
    related: { label: "Outsource a team", href: "/outsourced-development" },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
