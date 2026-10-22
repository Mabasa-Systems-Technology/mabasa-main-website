/**
 * Businesses Mabasa Technologies has worked with.
 *
 * `feedback` must be the client's own words, approved by them for publication.
 * Leave it undefined until you have that — the site only shows a testimonial
 * when a real quote, the person's name and their role are all filled in.
 */
export type Client = {
  name: string;
  feedback?: { quote: string; person: string; role: string };
};

export const clients: Client[] = [
  { name: "Anthropic" },
  { name: "Olyxee" },
  { name: "Freightshift International Logistics" },
  { name: "TechXM" },
  { name: "InzaloEMS" },
  { name: "AFCHO" },
];

export const testimonials = clients.filter(
  (c): c is Client & { feedback: NonNullable<Client["feedback"]> } =>
    !!c.feedback?.quote && !!c.feedback.person && !!c.feedback.role,
);
