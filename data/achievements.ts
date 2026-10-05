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

export type DetailedStudentProfile = {
  name: string;
  grade: string;
  specialty: string;
  headline: string;
  challenge: string;
  project: string;
  learning: string;
  outcome: string;
  image: ImageKey;
};

export const achievementsPageData = {
  isDemo: true,
  hero: {
    eyebrow: "Scholastic & Personal Outcomes",
    title: "Achievement measured by what students become.",
    description:
      "We celebrate awards and university placements, but we judge true success by our students' integrity, capacity for sustained rigor, and determination to contribute meaningfully to society.",
  },
  detailedProfiles: [
    {
      name: "Arjun S.",
      grade: "Grade 12 (Cambridge A-Level)",
      specialty: "Computational Biology & Applied Math",
      headline: "Modeling Coastal Microclimate Shifts",
      challenge:
        "Arjun was troubled by unpredictable flooding affecting salt-pan workers in the Ennore creek near Chennai, but lacked access to computational tools to analyze complex meteorological datasets.",
      project:
        "Under faculty mentorship in the AI laboratory, he synthesized six years of satellite telemetry data to construct an open-source predictive tidal surge model for local fishermen.",
      learning:
        "Technical acumen is sterile without empathy. The most elegant algorithm fails if it cannot be interpreted and trusted by the community it is designed to protect.",
      outcome:
        "Presented at the Southern Youth Science Colloquium; awarded the Governor's Commendation for Applied Youth Research (demo honor). Accepted into reading Natural Sciences in the UK.",
      image: "spotlightOne" as ImageKey,
    },
    {
      name: "Nisha K.",
      grade: "Grade 11 (CBSE Science)",
      specialty: "Competitive Aquatics & Biochemistry",
      headline: "Balancing Elite Athletics with STEM Rigor",
      challenge:
        "Training twenty hours a week in our 50m aquatic complex while maintaining a demanding CBSE Physics, Chemistry, and Mathematics curriculum demanded extraordinary time discipline.",
      project:
        "Refused to compromise either arena. With the support of faculty tutorials, Nisha coordinated early morning swim blocks with structured evening academic clinics.",
      learning:
        "Discipline is not deprivation; it is the freedom that comes from knowing exactly what matters most and eliminating extraneous noise.",
      outcome:
        "Secured two Gold Medals at the Tamil Nadu State Aquatic Championships (demo achievement) while ranking in the top decile of her academic class.",
      image: "spotlightTwo" as ImageKey,
    },
    {
      name: "Rohan M.",
      grade: "Grade 12 (Cambridge Humanities)",
      specialty: "Dramatic Arts & Diplomatic Rhetoric",
      headline: "Revitalizing Regional Storytelling in Modern Drama",
      challenge:
        "Felt that international school drama too often severed students from local vernacular heritage and traditional folk narratives.",
      project:
        "Adapted classic Sangam poetry into a contemporary bilingual one-act play staged in our blackbox theatre, incorporating traditional percussion and lighting design.",
      learning:
        "Global perspective does not mean abandoning one's roots. The most universal art is born from specific, deeply authentic cultural memory.",
      outcome:
        "Best Director Award at the Inter-Academy Drama Festival (demo honor); selected as Head Delegate to the Model United Nations Summit in Singapore.",
      image: "spotlightThree" as ImageKey,
    },
  ] satisfies DetailedStudentProfile[],
  competitions: {
    stem: [
      {
        title: "International Autonomous Robotics Challenge",
        award: "1st Place · Southern India Region (Demo)",
        detail: "Autonomous rover navigation task designed and coded entirely by Grade 10 & 11 students in our makerspace.",
      },
      {
        title: "National Mathematics Olympiad Selection",
        award: "5 Finalists Citations (Demo)",
        detail: "Recognized for creative non-routine problem solving in discrete mathematics and combinatorial proof.",
      },
    ],
    athletics: [
      {
        title: "Tamil Nadu Inter-School Aquatics Meet",
        award: "Overall Team Runners-Up · 14 Medals (Demo)",
        detail: "Outstanding finishes across freestyle relay, butterfly sprint, and individual medley.",
      },
      {
        title: "South Zone Interschool Football Tournament",
        award: "Champions Cup 2025 (Demo)",
        detail: "Undefeated tournament run by our Senior Boys Varsity XI playing on all-weather turf.",
      },
    ],
    arts: [
      {
        title: "All-India Youth Orchestra Festival",
        award: "Best Chamber Ensemble Commendation (Demo)",
        detail: "Eight-piece student strings and woodwind ensemble performing original student arrangements.",
      },
      {
        title: "National Youth Parliamentary Debate",
        award: "Outstanding Delegation & Best Speaker (Demo)",
        detail: "Three-day Oxford-format parliamentary debate addressing climate displacement and bioethics.",
      },
    ],
  },
  communityImpact: [
    {
      title: "Kovalam Mangrove Nursery Initiative",
      impact: "3,200 saplings planted",
      desc: "Student-led conservation partnership with local fishermen restoring estuarine biodiversity along the coast.",
    },
    {
      title: "Village Primary Literacy Circles",
      impact: "180 weekly tutoring hours",
      desc: "Senior students volunteering twice weekly to conduct bilingual reading workshops at an OMR rural primary school.",
    },
    {
      title: "Campus Zero-Waste Organic Composting",
      impact: "1.2 tonnes monthly diverted",
      desc: "Automated student audit turning dining hall organic waste into nutrient-dense compost for campus botanical gardens.",
    },
  ],
} as const;
