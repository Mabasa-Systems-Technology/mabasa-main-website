/**
 * Businesses Mabasa Technologies has worked with.
 *
 * `feedback` must be the client's own words, approved by them for publication.
 * Leave it undefined until you have that — the site only shows a testimonial
 * when a real quote, the person's name and their role are all filled in.
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
  { name: "Anthropic", logo: { src: "/clients/anthropic.png", width: 1116, height: 128, heightClass: "h-5" } },
  { name: "Olyxee", logo: { src: "/clients/olyxee.png", width: 127, height: 128, heightClass: "h-10" } },
  {
    name: "FreightShift International Logistics",
    logo: { src: "/clients/freightshift.png", width: 836, height: 128, heightClass: "h-8" },
  },
  { name: "TechXM", logo: { src: "/clients/techxm.png", width: 317, height: 128, heightClass: "h-9" } },
  { name: "InzaloEMS" }, // logo to be added: save as public/clients/inzalo.png, then set `logo` here
  {
    name: "AFHCO (Africa Housing Company)",
    logo: { src: "/clients/afhco.png", width: 263, height: 128, heightClass: "h-10" },
  },
];

export const testimonials = clients.filter(
  (c): c is Client & { feedback: NonNullable<Client["feedback"]> } =>
    !!c.feedback?.quote && !!c.feedback.person && !!c.feedback.role,
);
