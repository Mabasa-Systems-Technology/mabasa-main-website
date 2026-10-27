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
    image: unsplash("photo-1584169417032-d34e8d805e8b"),
    imageAlt: "An aisle of server racks in a data centre",
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
    image: unsplash("photo-1762163516269-3c143e04175c"),
    imageAlt: "Server hardware in a rack with indicator lights",
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
    image: unsplash("photo-1569968201228-01aebb252e80"),
    imageAlt: "Machinery inside a large industrial facility",
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
    image: unsplash("photo-1785682117028-6fcf2c0b515b"),
    imageAlt: "An engineer working on enterprise server equipment",
    related: { label: "Outsourced Development", href: "/outsourced-development" },
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
