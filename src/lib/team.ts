/**
 * Leadership shown on the About page.
 *
 * `name` is left empty until the person's full name is supplied — cards then show the
 * role only, and no named Person is added to the site's search data. `bio` is optional.
 */
export type TeamMember = {
  role: string;
  image: string;
  name?: string;
  /** Also-known-as name, published in search data only. */
  alias?: string;
  bio?: string;
  /** Vertical focus when the photo is cropped, e.g. "50% 30%". */
  focus?: string;
};

export const team: TeamMember[] = [
  { name: "Lethabo Scofield", role: "Co-founder & CEO", image: "/team/ceo.webp", focus: "50% 40%" },
  { name: "Zamokuhle Mazibuko", role: "Co-founder & CTO", image: "/team/cto.webp", focus: "50% 25%" },
];
