import type { ImageKey } from "./images";

export type GalleryCategory = "All" | "Campus" | "Learning" | "Sport" | "Arts" | "Student Life";

export type GalleryItem = {
  id: string;
  title: string;
  category: "Campus" | "Learning" | "Sport" | "Arts" | "Student Life";
  caption: string;
  image: ImageKey;
  location: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Sunrise Over the Central Quadrangle",
    category: "Campus",
    caption: "Early morning light filters through the brick colonnade connecting the library and sciences wings.",
    image: "aboutHero",
    location: "Main Colonnade",
  },
  {
    id: "g2",
    title: "Autonomous Robotics Prototyping",
    category: "Learning",
    caption: "Senior engineering scholars fine-tuning motor driver electronics and computer vision algorithms.",
    image: "facilityResearch",
    location: "Innovation Suite",
  },
  {
    id: "g3",
    title: "Olympic 50m Aquatic Training",
    category: "Sport",
    caption: "Early dawn swim squad drill in the temperature-regulated 8-lane competition pool.",
    image: "facilityAthletics",
    location: "Aquatics Centre",
  },
  {
    id: "g4",
    title: "Blackbox Theatre Drama Rehearsal",
    category: "Arts",
    caption: "Students blocking out lighting cues and dialogue for the autumn Shakespearean production.",
    image: "facilityArts",
    location: "Amphitheatre & Theatre",
  },
  {
    id: "g5",
    title: "Residential House Study Lounge",
    category: "Student Life",
    caption: "Quiet evening reading and collaborative debate in the junior boarding house common room.",
    image: "campusBoarding",
    location: "Chola House Residence",
  },
  {
    id: "g6",
    title: "Senior Chemistry Analytical Practical",
    category: "Learning",
    caption: "Cambridge A-Level students conducting quantitative titration in our state-of-the-art laboratory.",
    image: "curriculumCambridge",
    location: "Faraday Chemistry Wing",
  },
  {
    id: "g7",
    title: "All-Weather Football Pitch & Oval",
    category: "Sport",
    caption: "Afternoon inter-house league match under the coastal sunset.",
    image: "campusSportsTurf",
    location: "Main Sports Oval",
  },
  {
    id: "g8",
    title: "Two-Tier Central Scholastic Library",
    category: "Campus",
    caption: "Over 25,000 volumes, silent research carrels, and panoramic views of the campus botanical gardens.",
    image: "campusLibrary",
    location: "Scholastic Library",
  },
  {
    id: "g9",
    title: "Primary Environmental Stewardship",
    category: "Learning",
    caption: "Grade 3 pupils documenting botanical species and measuring sapling height in the eco-garden.",
    image: "pathwayPrimary",
    location: "Botanical Gardens",
  },
  {
    id: "g10",
    title: "Model United Nations General Assembly",
    category: "Student Life",
    caption: "Over 400 delegates representing twenty global nations debating climate adaptation resolutions.",
    image: "newsMUN",
    location: "Main Auditorium",
  },
  {
    id: "g11",
    title: "Fine Arts Atelier & Printmaking Studio",
    category: "Arts",
    caption: "Natural northern daylight illuminates student canvas works and ceramic sculpting wheels.",
    image: "gallery4",
    location: "Arts Atelier",
  },
  {
    id: "g12",
    title: "Chamber Music String Quartet",
    category: "Arts",
    caption: "Student ensemble perfecting polyphonic harmony in the soundproofed conservatory studio.",
    image: "achievementArts",
    location: "Music Conservatory",
  },
];
