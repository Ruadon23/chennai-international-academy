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

export const academicsPageData = {
  isDemo: true,
  hero: {
    eyebrow: "Scholastic Rigor & Intellectual Independence",
    title: "An academic journey built for depth, not just achievement.",
    description:
      "We prepare scholars to navigate complexity through rigorous disciplinary understanding, interdisciplinary inquiry, and habits of patient, sustained reflection.",
  },
  philosophyPillars: [
    {
      title: "Inquiry & Evidence",
      description:
        "Students learn that knowledge is constructed, not received. Science begins with observation; history with original documents; literature with close textual reading.",
    },
    {
      title: "Critical & Quantitative Reasoning",
      description:
        "Rigorous training in mathematics, computational logic, and rhetoric enables students to discern valid reasoning from persuasive fallacies.",
    },
    {
      title: "Independent Learning",
      description:
        "As students advance, teachers transition from instructors to intellectual sparring partners, preparing scholars for university seminar culture.",
    },
    {
      title: "Interdisciplinary Synthesis",
      description:
        "Modern global dilemmas cannot be addressed within single silos. We deliberately connect science to ethics, computation to arts, and history to ecology.",
    },
  ],
  curriculumTracks: [
    {
      id: "cambridge",
      name: "Cambridge International Pathway",
      code: "IGCSE & Cambridge International A-Levels",
      badge: "Global Benchmark · Demo Affiliation",
      description:
        "Renowned for depth, analytical flexibility, and worldwide university recognition. Ideal for scholars seeking international higher education or deep subject specialisation in 3–4 core disciplines.",
      features: [
        "In-depth research and laboratory practical assessments",
        "Linear examinations emphasizing critical reasoning over rote recall",
        "Global Recognition across top research universities in the US, UK, Canada, and Singapore",
        "Extended Essay and Cambridge Global Perspectives colloquia",
      ],
      subjects: [
        "Pure & Applied Mathematics",
        "Physics, Chemistry & Biology",
        "Computer Science & AI",
        "Economics & Business Strategy",
        "Literature in English & World History",
        "Art, Design & Visual Media",
      ],
    },
    {
      id: "cbse",
      name: "CBSE National Scholastic Pathway",
      code: "Central Board of Secondary Education",
      badge: "National Excellence · Demo Affiliation",
      description:
        "A rigorous, comprehensive curriculum adhering strictly to India's National Education Framework, perfectly tailored for competitive national entrance examinations (JEE, NEET, CUET, CLAT) alongside broad liberal arts foundation.",
      features: [
        "High-rigor STEM coursework integrated with advanced competitive problem solving",
        "Strong multilingual foundation (English, Tamil, Hindi, Sanskrit)",
        "Compulsory social empowerment work and sports certification",
        "Seamless alignment with Indian premier central and state universities",
      ],
      subjects: [
        "Mathematics, Physics & Chemistry",
        "Biology & Biotechnology",
        "Informatics Practices & Python",
        "Accountancy & Business Studies",
        "Political Science & Psychology",
        "Physical Education & Health Sciences",
      ],
    },
  ],
  assessmentFramework: {
    title: "Assessment for Learning, Not Just Ranking",
    intro:
      "Evaluation at CIA is designed to diagnose understanding and guide growth, rather than merely generate rank orders.",
    points: [
      {
        title: "Continuous Formative Assessment",
        detail:
          "Weekly diagnostic problem sets, seminar contributions, lab notebooks, and peer reviews allow teachers to intervene before misunderstandings compound.",
      },
      {
        title: "Rigorous Summative Examinations",
        detail:
          "Termly examinations simulate national and international testing conditions, training students in time management, precision, and sustained focus.",
      },
      {
        title: "Extended Capstone Research",
        detail:
          "Every Grade 11 student submits a 4,000-word independent paper or engineering prototype evaluated on intellectual originality and methodology.",
      },
    ],
  },
  beyondClassroom: [
    {
      title: "Scientific Research & Robotics",
      summary:
        "Hands-on experimentation in our biotech greenhouse, autonomous robotics workshop, and computational intelligence suite.",
    },
    {
      title: "Rhetoric & Parliamentary Debate",
      summary:
        "Weekly competitive Oxford-union style debate leagues and Model United Nations simulations honing diplomacy and persuasion.",
    },
    {
      title: "Chamber Music & Dramatic Arts",
      summary:
        "Orchestral rehearsal, classical vocal training, and annual full-scale theatrical productions performed in our 600-seat auditorium.",
    },
    {
      title: "Competitive Interschool Sport",
      summary:
        "Daily athletic training in aquatics, football, cricket, badminton, and track under certified national coaches.",
    },
    {
      title: "Community Service & Civic Action",
      summary:
        "Direct engagement with coastal mangrove conservation, rural literacy centers, and local public school peer-tutoring.",
    },
  ],
  supportSystem: [
    {
      title: "The Writing & Reasoning Centre",
      description:
        "One-on-one editorial tutorials where students bring drafts of essays, research papers, and lab reports for structured critical review.",
    },
    {
      title: "Mathematics & Quantitative Clinic",
      description:
        "Daily drop-in clinics for students seeking additional explanation or advanced competitive problem-solving coaching.",
    },
    {
      title: "University & Career Guidance Office",
      description:
        "Dedicated college counselors guiding students through profile building, standardized testing strategy, scholarship applications, and career mapping.",
    },
  ],
} as const;
