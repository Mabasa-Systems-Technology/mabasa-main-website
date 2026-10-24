import { z } from "zod";

export const startingPointOptions = [
  "Starting from scratch",
  "I have a website or app",
  "I have systems to fix or connect",
  "Not sure yet",
] as const;

export const roleOptions = [
  "Developers",
  "Designers",
  "Testers",
  "Data and AI specialists",
  "Cloud and security",
  "Project manager",
] as const;

export const durationOptions = [
  "Under 3 months",
  "3 to 6 months",
  "6 to 12 months",
  "Ongoing",
  "Not sure yet",
] as const;

export const proposalSchema = z.object({
  name: z
    .string({ error: "Please enter your full name." })
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  email: z
    .string({ error: "Please enter your work email address." })
    .trim()
    .toLowerCase()
    .email("Please enter a valid work email address.")
    .max(200),
  company: z
    .string({ error: "Please enter your company name." })
    .trim()
    .min(2, "Please enter your company name.")
    .max(160, "Company name is too long."),
  startingPoint: z.enum(startingPointOptions, { message: "Please tell us where you are starting from." }),
  link: z.string().trim().max(300, "That address is too long.").optional().or(z.literal("")),
  roles: z.array(z.enum(roleOptions)).min(1, "Choose at least one role you need.").max(roleOptions.length),
  duration: z.enum(durationOptions, { message: "Please choose how long you need the team." }),
  message: z
    .string({ error: "Please tell us what you want to build." })
    .trim()
    .min(20, "Please tell us a little more, at least 20 characters.")
    .max(5000, "Please keep this under 5,000 characters."),
  consent: z.literal(true, { message: "Please tick the box to agree to how we'll use your information." }),
  // Spam protection: must stay empty / be a plausible render timestamp.
  website: z.string().max(0).optional().or(z.literal("")),
  startedAt: z.number().int().positive(),
});

export type ProposalInput = z.infer<typeof proposalSchema>;
