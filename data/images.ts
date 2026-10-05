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
    label: "Student spotlight: Arjun S.",
  },
  spotlightTwo: {
    src: null,
    alt: "A senior student at the swimming pool after a race (demo image)",
    aspect: "4 / 5",
    label: "Student spotlight: Nisha K.",
  },
  spotlightThree: {
    src: null,
    alt: "A senior student directing a theatre rehearsal in the auditorium (demo image)",
    aspect: "4 / 5",
    label: "Student spotlight: Rohan M.",
  },
  gazetteLead: {
    src: null,
    alt: "Delegates seated at the Model United Nations conference (demo image)",
    aspect: "3 / 2",
    label: "Gazette — lead story",
  },

  // About Page
  aboutHero: {
    src: null,
    alt: "The architectural brick colonnade and central quadrangle of CIA (demo image)",
    aspect: "16 / 9",
    label: "Campus quadrangle & colonnade",
  },
  aboutFounders: {
    src: null,
    alt: "Founding committee and architectural drawings from 2012 (demo image)",
    aspect: "4 / 3",
    label: "Founding archive 2012",
  },
  leaderHead: {
    src: null,
    alt: "Dr. Meera Raghunathan, Head of School (demo image)",
    aspect: "4 / 5",
    label: "Dr. Meera Raghunathan — Head of School",
  },
  leaderAcademic: {
    src: null,
    alt: "Marcus Vance, Academic Director (demo image)",
    aspect: "4 / 5",
    label: "Marcus Vance — Academic Director",
  },
  leaderStudentLife: {
    src: null,
    alt: "Sangeetha Raman, Director of Student Life (demo image)",
    aspect: "4 / 5",
    label: "Sangeetha Raman — Director of Student Life",
  },

  // Academics Page
  academicsHero: {
    src: null,
    alt: "Senior seminar room overlooking the campus grounds (demo image)",
    aspect: "16 / 9",
    label: "Senior seminar library",
  },
  curriculumCambridge: {
    src: null,
    alt: "Students undertaking advanced Cambridge IGCSE chemistry practicals (demo image)",
    aspect: "4 / 3",
    label: "Cambridge Pathway Lab",
  },
  curriculumCbse: {
    src: null,
    alt: "CBSE senior secondary lecture and mathematics inquiry (demo image)",
    aspect: "4 / 3",
    label: "CBSE Scholastic Lecture",
  },
  academicsMentorship: {
    src: null,
    alt: "Faculty mentor reviewing research thesis draft with student (demo image)",
    aspect: "4 / 3",
    label: "1:8 Academic Mentorship",
  },

  // Campus & Life Page
  campusHero: {
    src: null,
    alt: "Aerial panorama of the 24-acre eco-sustainable campus (demo image)",
    aspect: "16 / 9",
    label: "24-Acre Eco-Campus Panorama",
  },
  campusBoarding: {
    src: null,
    alt: "Residential boarding house common room and study suites (demo image)",
    aspect: "16 / 10",
    label: "Boarding House Residence",
  },
  campusSportsTurf: {
    src: null,
    alt: "FIFA-standard turf and all-weather running track (demo image)",
    aspect: "16 / 10",
    label: "Sports Turf & Athletics Oval",
  },
  campusArtsCenter: {
    src: null,
    alt: "Blackbox experimental theatre and orchestra hall (demo image)",
    aspect: "16 / 10",
    label: "Performing Arts Centre",
  },
  campusLibrary: {
    src: null,
    alt: "Two-storey central scholastic library and reading quiet room (demo image)",
    aspect: "16 / 10",
    label: "Central Scholastic Library",
  },

  // Achievements Page
  achievementsHero: {
    src: null,
    alt: "Graduation convocation and student academic citations (demo image)",
    aspect: "16 / 9",
    label: "Scholastic Convocation",
  },
  achievementRobotics: {
    src: null,
    alt: "Robotics team with their autonomous regional rover prototype (demo image)",
    aspect: "4 / 3",
    label: "International Robotics Trophy",
  },
  achievementAquatics: {
    src: null,
    alt: "State aquatics championship medal ceremony (demo image)",
    aspect: "4 / 3",
    label: "State Aquatics Champions",
  },
  achievementArts: {
    src: null,
    alt: "Student orchestral ensemble performing at annual concert (demo image)",
    aspect: "4 / 3",
    label: "Symphony Orchestra Performance",
  },

  // Admissions Page
  admissionsHero: {
    src: null,
    alt: "Families entering the Admissions Welcome Pavilion (demo image)",
    aspect: "16 / 9",
    label: "Admissions Welcome Pavilion",
  },
  admissionsTour: {
    src: null,
    alt: "Prospective parents and children touring the science courtyard (demo image)",
    aspect: "4 / 3",
    label: "Campus Walk & Dialogue",
  },

  // News Page
  newsMUN: {
    src: null,
    alt: "Opening general assembly at Model United Nations 2026 (demo image)",
    aspect: "16 / 10",
    label: "Model UN General Assembly",
  },
  newsGreenhouse: {
    src: null,
    alt: "Biotech greenhouse harvest and student sensor testing (demo image)",
    aspect: "16 / 10",
    label: "Greenhouse Soil Audit",
  },
  newsShakespeare: {
    src: null,
    alt: "Costume drama production on the main amphitheatre stage (demo image)",
    aspect: "16 / 10",
    label: "Autumn Amphitheatre Production",
  },
  newsAquatics: {
    src: null,
    alt: "Swimmers diving off blocks at the Tamil Nadu State Meet (demo image)",
    aspect: "16 / 10",
    label: "Tamil Nadu Aquatic Finals",
  },

  // Gallery
  gallery1: { src: null, alt: "Architectural arcade facing east towards the morning sun (demo image)", aspect: "4 / 3", label: "Sunrise Arcade" },
  gallery2: { src: null, alt: "Students calibrating an articulated robotic arm in the tech lab (demo image)", aspect: "1 / 1", label: "Robotics Laboratory" },
  gallery3: { src: null, alt: "Olympic-dimension swimming pool during afternoon squad training (demo image)", aspect: "16 / 9", label: "Aquatic Complex" },
  gallery4: { src: null, alt: "Oil painting and ceramics atelier filled with natural north light (demo image)", aspect: "4 / 3", label: "Visual Arts Atelier" },
  gallery5: { src: null, alt: "Boarding house common room with students playing chess and reading (demo image)", aspect: "4 / 3", label: "Boarding Lounge" },
  gallery6: { src: null, alt: "Open-air amphitheatre during an acoustic student concert (demo image)", aspect: "16 / 9", label: "Campus Amphitheatre" },
  gallery7: { src: null, alt: "Primary school pupils exploring the botanical garden touch-pool (demo image)", aspect: "1 / 1", label: "Primary Eco-Garden" },
  gallery8: { src: null, alt: "Middle school robotics competition exhibition hall (demo image)", aspect: "4 / 3", label: "Innovation Arena" },
  gallery9: { src: null, alt: "Evening study hours in the mezzanine quiet library (demo image)", aspect: "16 / 9", label: "Mezzanine Library" },

  // Contact Page
  contactCampus: {
    src: null,
    alt: "Main campus administrative building and guest reception (demo image)",
    aspect: "16 / 9",
    label: "Academy Administration Quad",
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;
