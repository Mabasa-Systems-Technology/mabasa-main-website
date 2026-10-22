/**
 * Verified, client-approved case studies only.
 * The homepage "Selected Work" section lists these when present and otherwise
 * shows a services-to-contact section. Never add unapproved or illustrative work here.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  outcomes: string[];
};

export const caseStudies: CaseStudy[] = [];
