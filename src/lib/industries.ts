import { unsplash } from "./site";

/** Sectors Blackroid intends to serve. This is a focus, not a list of existing clients. */
export type Industry = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  summary: string;
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    image: unsplash("photo-1554469384-e58fac16e23a"),
    alt: "Looking up at a modern high-rise office building",
    summary: "Secure, auditable systems and reliable reporting.",
    solutions: [
      "Onboarding and workflow platforms",
      "Automated reconciliation and reporting",
      "Role-based systems with full audit trails",
    ],
  },
  {
    slug: "industrial-and-manufacturing",
    name: "Industrial & Manufacturing",
    image: unsplash("photo-1647427060118-4911c9821b82"),
    alt: "Industrial machinery on a factory floor",
    summary: "Connected operations from the production floor to the boardroom.",
    solutions: [
      "Production and quality data capture",
      "Operational performance dashboards",
      "ERP and equipment integration",
    ],
  },
  {
    slug: "logistics-and-supply-chain",
    name: "Logistics & Supply Chain",
    image: unsplash("photo-1553413077-190dd305871c"),
    alt: "Interior of a large warehouse with stacked shelving",
    summary: "Visibility and coordination across orders, inventory and partners.",
    solutions: [
      "Order, warehouse and carrier integration",
      "Tracking dashboards and exception alerts",
      "Demand and capacity reporting",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    image: unsplash("photo-1568992687947-868a62a9f521"),
    alt: "A team meeting around a table in a modern office",
    summary: "Less administration, so specialists can focus on clients.",
    solutions: ["Secure client portals", "Document automation and review", "Practice reporting and integration"],
  },
  {
    slug: "technology-and-telecommunications",
    name: "Technology & Telecommunications",
    image: unsplash("photo-1658330968675-94e15ed262e9"),
    alt: "A telecommunications tower at sunset",
    summary: "Engineering and data capability for complex platforms and networks.",
    solutions: [
      "Integration of billing, network and support systems",
      "Data engineering for service analytics",
      "Reliable release pipelines",
    ],
  },
];
