import type { ImageKey } from "./images";

/** Fictional demo facilities. */
export type FacilityCategory = {
  id: string;
  title: string;
  summary: string;
  facilities: string[];
  image: ImageKey;
};

export const facilityCategories: FacilityCategory[] = [
  {
    id: "research",
    title: "Research & Innovation",
    summary:
      "Purpose-built laboratories where students move from classroom theory to genuine inquiry, with equipment and mentorship that reward sustained curiosity.",
    facilities: ["Robotics suite", "AI laboratory", "Biotech greenhouse", "Makerspace"],
    image: "facilityResearch",
  },
  {
    id: "athletics",
    title: "Athletics & Physical Education",
    summary:
      "Training environments that build discipline, teamwork and lifelong fitness, from daily physical education to state-level competition.",
    facilities: ["Swimming pool", "Sports turf", "Badminton courts"],
    image: "facilityAthletics",
  },
  {
    id: "arts",
    title: "Creative & Performing Arts",
    summary:
      "Spaces for expression and craft, where performance, music and design are taught as serious disciplines.",
    facilities: ["Auditorium", "Theatre", "Music conservatories"],
    image: "facilityArts",
  },
];
