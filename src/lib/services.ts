import { unsplash } from "./site";

export type Service = {
  slug: string;
  /** One plain-language sentence for quick scanning. */
  plain: string;
  image: string;
  imageAlt: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  capabilities: string[];
  problems: string[];
  deliverables: string[];
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    plain: "We design, build and modernise the complex systems large organisations depend on.",
    image: unsplash("photo-1785682117028-6fcf2c0b515b"),
    imageAlt: "An engineer working on enterprise server equipment",
    number: "01",
    title: "Enterprise Software Engineering",
    short: "Architecture, development and modernisation of complex, business-critical systems.",
    intro:
      "Organisations outgrow off-the-shelf software when their operations become too specific, too connected or too important to compromise. We engineer and modernise the systems those operations rely on, from internal platforms to customer-facing services, with the architecture and discipline that long-lived systems need.",
    capabilities: [
      "Enterprise platforms and internal operations systems",
      "Service and API architecture",
      "Modernisation of legacy applications",
      "Workflow, approval and case-management systems",
      "Systems engineering and technical design",
      "Automated testing and code-quality practices",
    ],
    problems: [
      "Critical processes depend on ageing or fragmented systems",
      "Existing software is hard to change, slow or no longer supported",
      "A strategic initiative needs a dependable, well-architected build",
      "Teams work across disconnected tools with no single source of truth",
    ],
    deliverables: [
      "Technical specification and target architecture",
      "Production-ready, documented codebase",
      "Automated test suite and deployment pipeline",
      "Handover documentation and knowledge transfer",
    ],
    technologies: ["TypeScript", "React & Next.js", "Node.js", "Python", ".NET", "PostgreSQL"],
  },
  {
    slug: "ai-and-automation",
    plain: "We apply AI, automation and data where they create measurable operational value.",
    image: unsplash("photo-1716191299980-a6e8827ba10b"),
    imageAlt: "An industrial robot arm on a production line",
    number: "02",
    title: "Artificial Intelligence & Automation",
    short: "Applied AI and intelligent workflow systems built into real operational processes.",
    intro:
      "We apply AI and automation where they produce a measurable operational benefit, not for their own sake. That can mean automating document-heavy processes, adding intelligent capabilities to existing systems, or building models that support specific decisions, with the evaluation and controls an enterprise needs.",
    capabilities: [
      "Document processing and data extraction",
      "Large language model integrations and assistants",
      "Retrieval over internal knowledge and documents",
      "Workflow and back-office process automation",
      "Classification, forecasting and anomaly detection models",
      "Evaluation, monitoring and human-in-the-loop review",
    ],
    problems: [
      "Skilled staff spend hours re-keying information from documents and emails",
      "Institutional knowledge is scattered across files that are hard to search",
      "Repetitive, rules-based work slows down operations at scale",
      "Decisions rely on judgement that data could support",
    ],
    deliverables: [
      "Feasibility assessment and use-case prioritisation",
      "Working automation or model integrated into your workflow",
      "Accuracy evaluation and quality controls",
      "Operating guidelines, monitoring and data-handling controls",
    ],
    technologies: ["Python", "LLM APIs", "Vector search", "Workflow orchestration", "scikit-learn", "PyTorch"],
  },
  {
    slug: "cloud-and-infrastructure",
    plain: "We build the secure, reliable foundations that critical systems run on.",
    image: unsplash("photo-1584169417032-d34e8d805e8b"),
    imageAlt: "An aisle of server racks in a data centre",
    number: "03",
    title: "Cloud & Infrastructure",
    short: "Cloud architecture, deployment and infrastructure engineering for reliable, secure operations.",
    intro:
      "Good infrastructure is invisible: systems stay available, releases are routine and costs are understood. We design and operate cloud environments that give critical systems a dependable, secure foundation and a clear path to scale.",
    capabilities: [
      "Cloud architecture and environment design",
      "Infrastructure as code and environment automation",
      "CI/CD pipelines and release processes",
      "Containerisation and application hosting",
      "Monitoring, logging, alerting and incident readiness",
      "Cost review, security hardening and backup strategy",
    ],
    problems: [
      "Deployments are manual, risky or depend on one person",
      "Outages are discovered by customers before the team",
      "Cloud spend has grown without clear visibility",
      "Workloads need to move from on-premise servers to the cloud",
    ],
    deliverables: [
      "Architecture and environment documentation",
      "Version-controlled infrastructure definitions",
      "Automated build and deployment pipelines",
      "Monitoring dashboards and operational runbooks",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    slug: "data-engineering-and-analytics",
    plain: "We turn scattered operational data into information leaders can trust and act on.",
    image: unsplash("photo-1551288049-bebda4e38f71"),
    imageAlt: "Performance charts on a laptop screen",
    number: "04",
    title: "Data Engineering & Analytics",
    short: "Data platforms, pipelines and reporting that support confident decisions.",
    intro:
      "Most organisations already hold the data they need; it is spread across systems and difficult to trust. We build the pipelines, models and reporting that turn operational data into dependable information for leadership.",
    capabilities: [
      "Data pipelines and scheduled integrations",
      "Data warehouse and data model design",
      "Reporting and dashboard development",
      "Data quality checks and reconciliation",
      "Operational and management reporting automation",
      "Analytical models for decision support",
    ],
    problems: [
      "Management reporting is assembled by hand from multiple exports",
      "Different teams report different numbers for the same metric",
      "Leadership lacks timely visibility of operational performance",
      "Data exists but cannot be combined or analysed reliably",
    ],
    deliverables: [
      "Data architecture and source mapping",
      "Automated, monitored data pipelines",
      "Documented data models and metric definitions",
      "Dashboards and reports aligned to business questions",
    ],
    technologies: ["SQL", "Python", "dbt", "Apache Airflow", "Power BI", "Cloud data warehouses"],
  },
  {
    slug: "systems-integration",
    plain: "We connect disconnected systems so information flows once, accurately.",
    image: unsplash("photo-1544197150-b99a580bb7a8"),
    imageAlt: "Network cables plugged into a switch",
    number: "05",
    title: "Systems Integration",
    short: "Connecting enterprise applications, databases, APIs and legacy systems.",
    intro:
      "Large organisations accumulate systems: finance, CRM, ERP, logistics, operational and internal tools. We connect them so information flows accurately and securely, and teams stop re-capturing the same data.",
    capabilities: [
      "API integrations between business applications",
      "ERP, CRM, finance and operational system connectivity",
      "Legacy system interfaces and data migration",
      "Event-driven and scheduled data synchronisation",
      "Payment, messaging and third-party service integration",
      "Integration monitoring, retries and error handling",
    ],
    problems: [
      "The same data is captured more than once in different systems",
      "Orders, invoices or stock levels fall out of sync",
      "A legacy system holds critical data but has no modern interface",
      "Integrations fail silently and are hard to diagnose",
    ],
    deliverables: [
      "Integration architecture and data-flow mapping",
      "Tested, monitored integration services",
      "Migration scripts and reconciliation reports",
      "Support documentation and failure-handling procedures",
    ],
    technologies: ["REST & SOAP APIs", "Webhooks", "Message queues", "Node.js", "Python", "SQL"],
  },
  {
    slug: "technology-consulting",
    plain: "We assess technology challenges, define the right solution and guide its execution.",
    image: unsplash("photo-1759310610372-c547611af808"),
    imageAlt: "Executives in a technology strategy meeting",
    number: "06",
    title: "Technology Advisory",
    short: "Architecture, technical strategy and feasibility assessment aligned with business objectives.",
    intro:
      "Some decisions are expensive to get wrong: choosing a platform, committing to an architecture, or deciding whether to build or buy. We provide independent guidance grounded in business objectives, so those decisions can be made with confidence.",
    capabilities: [
      "Technical strategy and technology roadmaps",
      "Architecture design and review",
      "Feasibility assessments and proof-of-concept work",
      "Build-versus-buy and vendor evaluation",
      "Code, security and infrastructure reviews",
      "Technical leadership and programme guidance",
    ],
    problems: [
      "A technical direction must be chosen with limited in-house certainty",
      "An existing system's quality, risk or scalability is unclear",
      "A large investment requires a realistic technical assessment first",
      "Your teams need senior engineering input on a complex programme",
    ],
    deliverables: [
      "Written assessment with findings and recommendations",
      "Target architecture and phased roadmap",
      "Risk register and prioritised remediation plan",
      "Estimates and implementation options",
    ],
    technologies: ["Architecture reviews", "Threat modelling", "Cost modelling", "Proof of concept", "Roadmapping"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
