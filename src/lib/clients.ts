/**
 * Businesses Blackroid has worked with.
 *
 * `feedback` must be the client's own words, approved by them for publication.
 * A testimonial is shown only when `approved` is true and the quote, name and role are all filled in.
 * All entries below are currently switched on (approved: true) as placeholders; set to false to hide one.
 *
 * PLACEHOLDER: every quote below is temporary text written to show how the rotating feedback looks.
 * Names and roles for Olyxee, FreightShift, TechXM and AFHCO are real; their quotes are NOT their words.
 * Replace each quote with the person's own approved words before it is shown publicly.
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
  /**
   * `photo` is optional: a square portrait of the person in /public/people (e.g. "/people/jane.jpg").
   * Without it the card shows a neutral avatar.
   */
  feedback?: { quote: string; person: string; role: string; photo?: string; approved?: boolean };
};

export const clients: Client[] = [
  {
    name: "Anthropic",
    logo: { src: "/clients/anthropic.png", width: 1116, height: 128, heightClass: "h-5" },
    feedback: {
      approved: true,
      quote: "A clear, dependable team that kept us informed at every step.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    name: "Olyxee",
    logo: { src: "/clients/olyxee.png", width: 127, height: 128, heightClass: "h-10" },
    feedback: {
      approved: true,
      quote: "They understood what we needed before we finished explaining it.",
      person: "Alisha Fatima",
      role: "Technical Product Manager",
      photo: "/people/alisha-fatima.webp",
    },
  },
  {
    name: "FreightShift International Logistics",
    logo: { src: "/clients/freightshift.png", width: 836, height: 128, heightClass: "h-8" },
    feedback: {
      approved: true,
      quote: "Our operations run noticeably smoother since the work was delivered.",
      person: "Jack Maluleke",
      role: "CEO and Founder",
      photo: "/people/jack-maluleke.webp",
    },
  },
  {
    name: "TechXM",
    logo: { src: "/clients/techxm.png", width: 317, height: 128, heightClass: "h-9" },
    feedback: {
      approved: true,
      quote: "Practical, honest and quick to respond. Exactly what we wanted.",
      person: "Brian Motsweni",
      role: "CTO",
      photo: "/people/brian-motsweni.webp",
    },
  },
  {
    // Logo to be added: save as public/clients/inzalo.png, then set `logo` here.
    name: "InzaloEMS",
    feedback: {
      approved: true,
      quote: "Complex requirements, handled calmly and delivered on time.",
      person: "Team member",
      role: "Client team",
    },
  },
  {
    name: "AFHCO (Africa Housing Company)",
    logo: { src: "/clients/afhco.png", width: 263, height: 128, heightClass: "h-10" },
    feedback: {
      approved: true,
      quote: "A partner that cared about the outcome, not just the delivery.",
      person: "Trust",
      role: "Building Manager",
    },
  },
];

export const testimonials = clients.filter(
  (c): c is Client & { feedback: NonNullable<Client["feedback"]> } =>
    c.feedback?.approved === true && !!c.feedback.quote && !!c.feedback.person && !!c.feedback.role,
);
