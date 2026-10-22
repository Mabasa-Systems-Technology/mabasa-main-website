export type Stage = {
  number: string;
  title: string;
  summary: string;
  detail: string;
  activities: string[];
  deliverables: string[];
  fromYou: string[];
};

export const stages: Stage[] = [
  {
    number: "01",
    title: "Discover",
    summary: "Understand the organisation, its challenges, operational requirements, and business objectives.",
    detail:
      "We start by understanding the business problem, not just the requested feature. We speak to the people involved, review existing systems and data, and establish what success needs to look like.",
    activities: [
      "Stakeholder conversations and process walkthroughs",
      "Review of existing systems, data and constraints",
      "Identification of risks, dependencies and quick wins",
      "Agreement on objectives and success measures",
    ],
    deliverables: ["Discovery summary", "Problem statement and objectives", "Initial options and recommendation"],
    fromYou: ["Access to key people and systems", "Context on priorities, budget and timelines"],
  },
  {
    number: "02",
    title: "Design",
    summary: "Define the technical architecture, project scope, priorities, and implementation approach.",
    detail:
      "We translate what we learned into a concrete plan: the architecture, the scope of the first release, how the work will be sequenced, and how progress will be measured. You know what you are getting before engineering begins.",
    activities: [
      "Solution architecture and technology selection",
      "Scope definition and prioritised backlog",
      "User flows, interface concepts or API contracts where relevant",
      "Delivery plan, milestones and estimates",
    ],
    deliverables: ["Architecture overview", "Scoped and prioritised plan", "Fixed or phased proposal"],
    fromYou: ["Feedback on priorities and trade-offs", "Sign-off on scope and approach"],
  },
  {
    number: "03",
    title: "Build",
    summary: "Engineer, integrate, and validate the solution using appropriate technologies.",
    detail:
      "We build in short, visible increments. You see working software regularly, priorities can be adjusted as we learn, and quality is built in through automated testing, code review and continuous integration.",
    activities: [
      "Iterative development with regular demonstrations",
      "Integration with existing systems and data",
      "Automated testing, code review and security checks",
      "User acceptance testing with your team",
    ],
    deliverables: [
      "Working software in staged releases",
      "Test coverage and quality reports",
      "Technical documentation",
    ],
    fromYou: ["Regular review sessions", "Timely decisions and test participation"],
  },
  {
    number: "04",
    title: "Deploy & Improve",
    summary: "Launch the solution, monitor performance, and support ongoing improvements.",
    detail:
      "Launch is a milestone, not the finish line. We release carefully, monitor how the system performs in real use, resolve issues quickly and continue to improve it as your needs evolve.",
    activities: [
      "Planned production release and data migration",
      "Monitoring, alerting and performance tuning",
      "Training and handover to your team",
      "Ongoing support, maintenance and enhancement",
    ],
    deliverables: ["Production deployment", "Operational runbooks", "Support and improvement plan"],
    fromYou: ["Launch coordination with your users", "Feedback from real-world use"],
  },
];
