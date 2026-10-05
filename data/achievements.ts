import type { ImageKey } from "./images";

/**
 * Fictional demo achievements. No real universities, awards or students are
 * referenced; destinations are described by region and field only.
 */
export const outcomes = {
  isDemo: true,
  stats: [
    { value: "100%", label: "of graduates placed at a university of their choice" },
    { value: "11", label: "countries represented in recent destinations" },
    { value: "37", label: "independent research projects presented this year" },
    { value: "24", label: "state and national honours in sport and the arts" },
  ],
  destinations: [
    { region: "United Kingdom", fields: "Engineering & Natural Sciences" },
    { region: "United States", fields: "Liberal Arts & Computing" },
    { region: "Canada", fields: "Medicine & Life Sciences" },
    { region: "India", fields: "Technology, Law & Design" },
  ],
  projects: [
    {
      title: "Rainwater harvesting audit",
      note: "Grade 11 team mapped water use across the campus and neighbouring village.",
    },
    {
      title: "Low-cost soil sensor",
      note: "Student-built sensors trialled with a partner farming cooperative.",
    },
    {
      title: "Reading circle outreach",
      note: "Senior volunteers tutor primary pupils at a local community school.",
    },
  ],
} as const;

export type Spotlight = {
  name: string;
  tagline: string;
  quote: string;
  image: ImageKey;
};

export const spotlights: Spotlight[] = [
  {
    name: "Arjun S.",
    tagline: "Grade 12 · Research Fellow (demo student)",
    quote:
      "My teachers never handed me answers. They handed me better questions, and that changed how I think.",
    image: "spotlightOne",
  },
  {
    name: "Nisha K.",
    tagline: "Grade 11 · State Swimming Finalist (demo student)",
    quote:
      "Training at 5 a.m. taught me discipline. The school taught me that discipline is only useful when it serves something bigger.",
    image: "spotlightTwo",
  },
];
