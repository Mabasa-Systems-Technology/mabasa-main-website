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
    title: "Understand the Challenge",
    summary:
      "Understand the organisation's objectives, operating environment, constraints and the problem that needs solving.",
    detail:
      "We start with the business problem, not the technology. We speak to the people involved, review how work gets done today, and establish what success needs to look like.",
    activities: [
      "Stakeholder conversations and process walkthroughs",
      "Review of operations, existing systems and data",
      "Identification of constraints, risks and dependencies",
      "Agreement on objectives and success measures",
    ],
    deliverables: ["Summary of findings", "Problem statement and objectives", "Initial options and recommendation"],
    fromYou: ["Access to key people and systems", "Context on priorities, budget and timelines"],
  },
  {
    number: "02",
    title: "Define the Solution",
    summary: "Shape the right approach, team and plan, and agree what success looks like before delivery begins.",
    detail:
      "We turn what we learned into a prioritised view of where change will matter most, and what it would take to deliver it. You know what you are getting, and why, before any engineering begins.",
    activities: [
      "Assessment of options and their business value",
      "Prioritisation against objectives and constraints",
      "Solution approach, architecture and scope definition",
      "Delivery plan, milestones and estimates",
    ],
    deliverables: ["Options assessment", "Scoped and prioritised plan", "Fixed or phased proposal"],
    fromYou: ["Feedback on priorities and trade-offs", "Sign-off on scope and approach"],
  },
  {
    number: "03",
    title: "Coordinate Delivery",
    summary: "Bring the right specialists together to design, build and integrate the solution, with clear ownership.",
    detail:
      "We build in short, visible increments and release carefully. You see working results regularly, priorities can be adjusted as we learn, and quality is built in through testing, review and controlled deployment.",
    activities: [
      "Iterative delivery with regular demonstrations",
      "Integration with existing systems and data",
      "Automated testing, review and security checks",
      "Production release, training and handover",
    ],
    deliverables: ["Working solution delivered in stages", "Test and quality reports", "Documentation and handover"],
    fromYou: ["Regular review sessions", "Timely decisions and acceptance testing"],
  },
  {
    number: "04",
    title: "Measure and Improve",
    summary: "Evaluate outcomes against agreed objectives and identify opportunities for further improvement.",
    detail:
      "Launch is a milestone, not the finish line. We assess how the solution performs against the objectives agreed at the start, resolve issues, and identify further improvements, according to the scope of the engagement.",
    activities: [
      "Monitoring and performance review",
      "Evaluation of outcomes against agreed objectives",
      "Resolution of issues and refinement",
      "Recommendations for further improvement",
    ],
    deliverables: ["Outcome review", "Operational documentation", "Improvement recommendations"],
    fromYou: ["Access to results and operational data", "Feedback from real-world use"],
  },
];
