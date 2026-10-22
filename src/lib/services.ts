export type Service = {
  slug: string;
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
    number: "01",
    title: "Custom Software Development",
    short: "Design and development of web applications, internal platforms, APIs, and business-critical systems.",
    intro:
      "When off-the-shelf software no longer fits the way your business works, we design and build software that does. From customer-facing web applications to internal operational platforms, we engineer systems that are reliable on day one and maintainable for years.",
    capabilities: [
      "Web applications and client portals",
      "Internal operations platforms and admin tools",
      "REST and GraphQL API design and development",
      "Modernisation of legacy applications",
      "Workflow, approval and case-management systems",
      "Automated testing and code-quality practices",
    ],
    problems: [
      "Critical processes run on spreadsheets, email and manual handovers",
      "Existing software is difficult to change, slow or unsupported",
      "A product idea needs to become a dependable first release",
      "Teams work across disconnected tools with no single source of truth",
    ],
    deliverables: [
      "Product and technical specification",
      "Production-ready, documented codebase",
      "Automated test suite and deployment pipeline",
      "Handover documentation and knowledge transfer",
    ],
    technologies: ["TypeScript", "React & Next.js", "Node.js", "Python", ".NET", "PostgreSQL"],
  },
  {
    slug: "ai-and-automation",
    number: "02",
    title: "Artificial Intelligence & Automation",
    short: "Intelligent workflows, machine learning applications, AI integrations, and practical automation.",
    intro:
      "We apply AI where it produces a measurable operational benefit, not for its own sake. That can mean automating document-heavy processes, adding language-model capabilities to existing systems, or building machine learning models that support specific decisions.",
    capabilities: [
      "Document processing and data extraction",
      "Large language model integrations and assistants",
      "Retrieval over internal knowledge and documents",
      "Workflow and back-office process automation",
      "Classification, forecasting and anomaly detection models",
      "Evaluation, monitoring and human-in-the-loop review",
    ],
    problems: [
      "Staff spend hours re-keying information from documents and emails",
      "Knowledge is scattered across files that are hard to search",
      "Repetitive, rules-based tasks slow down operations",
      "Decisions rely on judgement that could be supported by data",
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
    number: "03",
    title: "Cloud & Infrastructure",
    short: "Cloud architecture, application deployment, infrastructure engineering, and systems reliability.",
    intro:
      "Good infrastructure is invisible: applications stay available, deployments are routine, and costs are predictable. We design, provision and operate cloud environments that support your software rather than complicate it.",
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
      "Applications need to move from on-premise servers to the cloud",
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
    number: "04",
    title: "Data Engineering & Analytics",
    short: "Data platforms, integrations, reporting, and decision-support systems.",
    intro:
      "Most organisations already have the data they need; it is simply spread across systems and difficult to trust. We build the pipelines, models and reporting that turn operational data into dependable information for decision-makers.",
    capabilities: [
      "Data pipelines and scheduled integrations",
      "Data warehouse and data model design",
      "Reporting and dashboard development",
      "Data quality checks and reconciliation",
      "Operational and management reporting automation",
      "Analytical models for decision support",
    ],
    problems: [
      "Monthly reporting is assembled by hand from multiple exports",
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
    number: "05",
    title: "Systems Integration",
    short: "Connecting business applications, databases, APIs, and legacy systems.",
    intro:
      "Growing businesses accumulate systems: accounting, CRM, ERP, e-commerce, logistics and in-house tools. We connect them so information flows automatically, accurately and securely between the platforms your teams rely on.",
    capabilities: [
      "API integrations between business applications",
      "ERP, CRM, accounting and e-commerce connectivity",
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
    number: "06",
    title: "Technology Consulting",
    short: "Architecture, technical strategy, feasibility assessments, and engineering guidance.",
    intro:
      "Some decisions are expensive to get wrong: choosing a platform, committing to an architecture, or deciding whether to build or buy. We provide independent, practical engineering guidance so you can make those decisions with confidence.",
    capabilities: [
      "Technical strategy and technology roadmaps",
      "Architecture design and review",
      "Feasibility assessments and proof-of-concept work",
      "Build-versus-buy and vendor evaluation",
      "Code, security and infrastructure reviews",
      "Fractional technical leadership and team guidance",
    ],
    problems: [
      "You need to choose a technical direction without in-house expertise",
      "An existing system's quality, risk or scalability is uncertain",
      "A large investment requires a realistic technical assessment first",
      "Your team needs senior engineering input without a full-time hire",
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
