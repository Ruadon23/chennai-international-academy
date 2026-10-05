/**
 * Homepage hero, trust metrics and Head of School content.
 * ALL STATISTICS, AFFILIATIONS, NAMES AND QUALIFICATIONS ARE FICTIONAL DEMO CONTENT.
 */
export const hero = {
  eyebrow: "Founded 2012 • Chennai, Tamil Nadu",
  headline: "Nurturing intellectual independence, moral courage, and global vision.",
  supporting:
    "An international day and boarding academy committed to scholastic rigor, scientific inquiry, and purposeful leadership.",
  primaryCta: { label: "Explore Admissions", href: "#admissions" },
  secondaryCta: { label: "Watch Campus Film", href: "/campus#film" },
  badge: "Demo school · Fictional content",
} as const;

export type TrustMetric = { value: string; label: string };

export const trustMetrics = {
  /** Demonstration statistics — replace with verified figures for a real client. */
  isDemo: true,
  items: [
    { value: "1:8", label: "Faculty-to-Student Ratio" },
    { value: "100%", label: "University Acceptance" },
    { value: "24-Acre", label: "Eco-Sustainable Campus" },
    { value: "Dual Curriculum", label: "Cambridge / CBSE Pathways" },
  ] satisfies TrustMetric[],
} as const;

export const principal = {
  /** Fictional person. Credentials are demo content only. */
  isDemo: true,
  eyebrow: "From the Head of School",
  quote:
    "We do not train students merely to clear entrance examinations; we teach them how to think through ambiguity.",
  philosophy: [
    "A great school is a long conversation between curiosity and discipline. We hold our students to demanding standards because we believe they are capable of meeting them.",
    "Here, rigour is never an end in itself. It is the foundation for independent judgement, for the courage to hold an unpopular view, and for the humility to change one's mind.",
  ],
  pillars: ["Scholastic rigour", "Ethical character", "Global outlook"],
  name: "Dr. Meera Raghunathan",
  role: "Head of School",
  qualification: "Ph.D., M.Ed. (demo credentials)",
} as const;
