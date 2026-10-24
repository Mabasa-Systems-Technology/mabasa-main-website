import { unsplash } from "./site";

/** Sectors we are focused on. These describe where we aim our expertise, not a list of existing clients. */
export type Industry = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  summary: string;
  challenges: string[];
  solutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    image: unsplash("photo-1554469384-e58fac16e23a"),
    alt: "Looking up at a modern high-rise office building",
    summary: "Secure, auditable systems for organisations where accuracy, compliance and data protection come first.",
    challenges: [
      "Manual onboarding and document verification",
      "Reconciliation across multiple systems and statements",
      "Regulatory reporting assembled by hand",
      "Strict requirements for access control and audit trails",
    ],
    solutions: [
      "Onboarding platforms with document capture and workflow",
      "Automated reconciliation and exception reporting",
      "Data pipelines feeding consistent management and regulatory reports",
      "Role-based internal platforms with full activity logging",
    ],
  },
  {
    slug: "logistics-and-supply-chain",
    name: "Logistics & Supply Chain",
    image: unsplash("photo-1553413077-190dd305871c"),
    alt: "Interior of a large warehouse with stacked shelving",
    summary:
      "Visibility and coordination across orders, inventory, fleets and partners, running on current information.",
    challenges: [
      "Limited real-time visibility of stock and shipments",
      "Order data re-captured between client, warehouse and carrier systems",
      "Paper-based proof of delivery and manual exception handling",
      "Planning decisions made without reliable historical data",
    ],
    solutions: [
      "Integrations between order, warehouse and carrier platforms",
      "Tracking dashboards and automated exception alerts",
      "Mobile capture for deliveries, inspections and returns",
      "Demand and capacity reporting built on clean operational data",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    image: unsplash("photo-1647427060118-4911c9821b82"),
    alt: "Industrial machinery on a factory floor",
    summary: "Better information from the production floor to the boardroom, connecting operational systems and data.",
    challenges: [
      "Production data captured on paper or isolated spreadsheets",
      "Limited visibility of output, downtime and quality",
      "ERP and shop-floor systems that do not communicate",
      "Maintenance driven by breakdowns rather than data",
    ],
    solutions: [
      "Digital production and quality capture applications",
      "Operational dashboards for output, downtime and yield",
      "ERP and equipment data integration",
      "Data foundations for maintenance and quality analysis",
    ],
  },
  {
    slug: "infrastructure-and-utilities",
    name: "Infrastructure & Utilities",
    image: unsplash("photo-1473341304170-971dccb5ac1e"),
    alt: "Steel transmission towers against the sky",
    summary: "Dependable systems and data for organisations that operate large, distributed physical networks.",
    challenges: [
      "Asset and maintenance records spread across separate systems",
      "Limited visibility of network condition and performance",
      "Field data captured on paper and re-entered later",
      "Aging systems that are difficult to integrate or replace",
    ],
    solutions: [
      "Asset, inspection and maintenance management platforms",
      "Operational dashboards across distributed sites",
      "Mobile field capture connected to core systems",
      "Phased modernisation of legacy operational systems",
    ],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    image: unsplash("photo-1658330968675-94e15ed262e9"),
    alt: "A telecommunications tower at sunset",
    summary:
      "Engineering and data capability for organisations managing complex networks, platforms and customer systems.",
    challenges: [
      "Large volumes of operational and customer data in separate platforms",
      "Complex integrations between billing, network and support systems",
      "Manual processes in provisioning and service operations",
      "Pressure to release changes quickly without risking reliability",
    ],
    solutions: [
      "Integration layers between billing, network and CRM platforms",
      "Data engineering for network and service analytics",
      "Automation of provisioning and support workflows",
      "Release pipelines built for reliability and rollback",
    ],
  },
  {
    slug: "public-sector",
    name: "Public Sector & Institutions",
    image: unsplash("photo-1640580488727-056835ca6f32"),
    alt: "A large institutional building with a clock tower",
    summary: "Secure, transparent systems for institutions that serve the public and answer for how they operate.",
    challenges: [
      "Paper-based and manual administrative processes",
      "Information held in disconnected departmental systems",
      "Strict requirements for security, privacy and accountability",
      "Limited visibility of service delivery and performance",
    ],
    solutions: [
      "Case-management and workflow platforms with full audit trails",
      "Secure integration between departmental systems",
      "Reporting that gives leadership a consistent view of delivery",
      "Digitisation of high-volume, document-heavy processes",
    ],
  },
];
