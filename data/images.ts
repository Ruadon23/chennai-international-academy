/**
 * Central image registry.
 *
 * `src: null` renders a neutral placeholder. To use final photography, drop the
 * file in /public/images and set `src` to e.g. "/images/hero.jpg". No component
 * changes are required.
 *
 * ALL IMAGES ARE DEMO PLACEHOLDERS for a fictional school.
 */
export type ImageAsset = {
  src: string | null;
  alt: string;
  /** CSS aspect ratio, e.g. "4 / 5" — reserves space to prevent layout shift. */
  aspect: string;
  /** Caption shown on the placeholder only. */
  label: string;
};

export const images = {
  hero: {
    src: null,
    alt: "Students collaborating in a science laboratory on the CIA campus (demo image)",
    aspect: "4 / 5",
    label: "Hero — campus & students",
  },
  principal: {
    src: null,
    alt: "Portrait of the Head of School in the school library (demo content)",
    aspect: "4 / 5",
    label: "Head of School portrait",
  },
  pathwayPrimary: {
    src: null,
    alt: "Primary school pupils working together on a project in a bright classroom (demo image)",
    aspect: "4 / 3",
    label: "Primary — classroom",
  },
  pathwayMiddle: {
    src: null,
    alt: "Middle school students conducting an experiment at a laboratory bench (demo image)",
    aspect: "4 / 3",
    label: "Middle — laboratory",
  },
  pathwaySenior: {
    src: null,
    alt: "Senior students in a seminar discussion around a table (demo image)",
    aspect: "4 / 3",
    label: "Senior — seminar",
  },
  facilityResearch: {
    src: null,
    alt: "The robotics and AI laboratory with student workstations (demo image)",
    aspect: "1 / 1",
    label: "Research & Innovation",
  },
  facilityAthletics: {
    src: null,
    alt: "The covered swimming pool and sports turf at the CIA campus (demo image)",
    aspect: "16 / 10",
    label: "Athletics & PE",
  },
  facilityArts: {
    src: null,
    alt: "The school auditorium prepared for a theatre performance (demo image)",
    aspect: "16 / 10",
    label: "Creative & Performing Arts",
  },
  spotlightOne: {
    src: null,
    alt: "A senior student presenting a research poster (demo image)",
    aspect: "4 / 5",
    label: "Student spotlight",
  },
  spotlightTwo: {
    src: null,
    alt: "A senior student at the swimming pool after a race (demo image)",
    aspect: "4 / 5",
    label: "Student spotlight",
  },
  gazetteLead: {
    src: null,
    alt: "Delegates seated at the Model United Nations conference (demo image)",
    aspect: "3 / 2",
    label: "Gazette — lead story",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
