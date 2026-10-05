import type { ImageKey } from "./images";

/** Fictional demo curriculum content. */
export type Pathway = {
  id: "primary" | "middle" | "senior";
  numeral: string;
  title: string;
  range: string;
  /** Typical age range */
  ages: string;
  philosophy: string;
  focus: string;
  enrichment: string;
  development: string;
  /** Example learning experiences (fictional demo content). */
  experiences: string[];
  image: ImageKey;
};

export const pathways: Pathway[] = [
  {
    id: "primary",
    numeral: "I",
    title: "Primary School",
    range: "Early Years → Grade 5",
    ages: "Ages 3–11",
    philosophy:
      "Learning begins with wonder. We build secure foundations in language, number and inquiry through guided exploration and close teacher attention.",
    focus: "Literacy, numeracy, and an inquiry-led introduction to science and the humanities.",
    enrichment: "Music, swimming, gardening and a weekly library studio.",
    development: "Confidence, collaboration and the habit of asking good questions.",
    experiences: [
      "Building a classroom garden and recording its growth",
      "Story-making studio with the school librarian",
      "First experiments: floating, sinking and why",
    ],
    image: "pathwayPrimary",
  },
  {
    id: "middle",
    numeral: "II",
    title: "Middle School",
    range: "Grades 6 → 8",
    ages: "Ages 11–14",
    philosophy:
      "The middle years are for stretching. Students learn to reason, write with precision, and take ownership of their own learning.",
    focus: "Disciplinary study in sciences, mathematics, languages and social studies.",
    enrichment: "Robotics, debating, theatre and interschool athletics.",
    development: "Independence, resilience and early leadership through service.",
    experiences: [
      "Designing and testing a bridge in the makerspace",
      "Inter-house debating league",
      "A term-long local history investigation",
    ],
    image: "pathwayMiddle",
  },
  {
    id: "senior",
    numeral: "III",
    title: "Senior School",
    range: "Grades 9 → 12",
    ages: "Ages 14–18",
    philosophy:
      "Senior students pursue depth. Through the dual curriculum they specialise, undertake independent research and prepare for university and beyond.",
    focus: "Cambridge and CBSE pathways, extended research and university guidance.",
    enrichment: "Model United Nations, research labs, the arts and elite sport.",
    development: "Intellectual courage, ethical leadership and global citizenship.",
    experiences: [
      "Independent research project with a faculty mentor",
      "Model United Nations and Harvard-style seminars",
      "Community service leadership placements",
    ],
    image: "pathwaySenior",
  },
];
