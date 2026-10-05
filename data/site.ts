/**
 * Site identity and contact details.
 *
 * ALL VALUES BELOW ARE FICTIONAL DEMO CONTENT. Chennai International Academy
 * is a demonstration school. Replace this file when adapting for a real client.
 */
export const site = {
  name: "Chennai International Academy",
  shortName: "CIA",
  tagline: "Intellectual independence. Moral courage. Global vision.",
  description:
    "Chennai International Academy is a fictional demonstration school website: an international day and boarding academy in Chennai, Tamil Nadu.",
  url: "https://example.com",
  founded: 2012,
  location: "Chennai, Tamil Nadu",
  /** Shown in the utility bar. Fictional — not a real affiliation. */
  affiliationNote: "Demo school · Fictional affiliations",
  contact: {
    address: ["123 Academy Road", "Chennai, Tamil Nadu 600 000", "India"],
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    email: "admissions@cia-demo.example",
  },
  disclaimer:
    "Chennai International Academy is a fictional institution created for website demonstration purposes. All names, statistics, affiliations, achievements and contact details are illustrative placeholders.",
} as const;
