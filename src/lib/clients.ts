/**
 * Businesses Blackroid has worked with.
 *
 * `feedback` should be the client's own words, approved by them for publication.
 * The site shows a testimonial only when a quote, the person's name and their role are all filled in.
 *
 * PLACEHOLDER: every quote below is temporary text written to show how the rotating feedback looks.
 * Replace each with the client's real, approved words (and the person's real name and role) before launch.
 */
export type Client = {
  name: string;
  /** Trimmed transparent logo in /public/clients. Falls back to the name as text when absent. */
  logo?: {
    src: string;
    width: number;
    height: number;
    /** Tailwind height class, to balance visual weight. */ heightClass: string;
  };
  feedback?: { quote: string; person: string; role: string };
};

export const clients: Client[] = [
  {
    name: "Anthropic",
    logo: { src: "/clients/anthropic.png", width: 1116, height: 128, heightClass: "h-5" },
    feedback: {
      quote: "A clear, dependable team that kept us informed at every step.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    name: "Olyxee",
    logo: { src: "/clients/olyxee.png", width: 127, height: 128, heightClass: "h-10" },
    feedback: {
      quote: "They understood what we needed before we finished explaining it.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    name: "FreightShift International Logistics",
    logo: { src: "/clients/freightshift.png", width: 836, height: 128, heightClass: "h-8" },
    feedback: {
      quote: "Our operations run noticeably smoother since the work was delivered.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    name: "TechXM",
    logo: { src: "/clients/techxm.png", width: 317, height: 128, heightClass: "h-9" },
    feedback: {
      quote: "Practical, honest and quick to respond. Exactly what we wanted.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    // Logo to be added: save as public/clients/inzalo.png, then set `logo` here.
    name: "InzaloEMS",
    feedback: {
      quote: "Complex requirements, handled calmly and delivered on time.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    name: "AFHCO (Africa Housing Company)",
    logo: { src: "/clients/afhco.png", width: 263, height: 128, heightClass: "h-10" },
    feedback: {
      quote: "A partner that cared about the outcome, not just the delivery.",
      person: "Team member",
      role: "Client team",
    },
  },
];

export const testimonials = clients.filter(
  (c): c is Client & { feedback: NonNullable<Client["feedback"]> } =>
    !!c.feedback?.quote && !!c.feedback.person && !!c.feedback.role,
);
