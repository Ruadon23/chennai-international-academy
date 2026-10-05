import type { ImageKey } from "./images";

/**
 * About page data.
 * ALL PERSONS, HISTORIES, CREDENTIALS AND CITATIONS ARE FICTIONAL DEMO CONTENT.
 */
export const aboutData = {
  isDemo: true,
  hero: {
    eyebrow: "Our Heritage & Philosophy",
    title: "An education shaped by curiosity, character, and purpose.",
    description:
      "Founded in 2012 along Chennai's southern educational corridor, Chennai International Academy was established to combine traditional scholastic rigor with modern scientific inquiry and global awareness.",
  },
  story: {
    title: "Our Story",
    timeline: [
      {
        year: "2012",
        title: "The Founding Vision",
        description:
          "Established on a 24-acre green campus in Chennai by a consortium of educators and scholars seeking to create a genuinely rigorous, non-utilitarian learning community.",
      },
      {
        year: "2015",
        title: "Curricular Dual-Track",
        description:
          "Introduced the dual Cambridge Assessment International Education and CBSE pathways, giving students both global flexibility and national competitive depth.",
      },
      {
        year: "2018",
        title: "The Innovation Pavilion",
        description:
          "Inaugurated dedicated research suites for robotics, computational intelligence, and biotech experimentation, mentored by visiting university researchers.",
      },
      {
        year: "2022",
        title: "Residential Boarding Community",
        description:
          "Opened state-of-the-art boarding houses cultivating independence, communal responsibility, and cross-cultural fellowship among students from across India and abroad.",
      },
      {
        year: "Today",
        title: "A Thriving Scholastic Community",
        description:
          "Home to over 850 day and residential scholars, CIA continues to prove that academic ambition and moral integrity reinforce each other.",
      },
    ],
  },
  missionVision: {
    vision: {
      label: "Our Vision",
      text: "To be India's premier international academy, celebrated for cultivating young thinkers whose intellectual rigor is matched by moral courage and a profound commitment to human flourishing.",
    },
    mission: {
      label: "Our Mission",
      text: "We educate young minds through demanding intellectual disciplines, hands-on scientific investigation, humane arts, and competitive athletic endeavors within a safe, dignified, and inclusive environment.",
    },
  },
  values: [
    {
      name: "Curiosity",
      tagline: "Asking the deeper question",
      description:
        "We value sustained inquiry over rote memorization. Our scholars are encouraged to test assumptions and sit comfortably with intellectual complexity.",
    },
    {
      name: "Integrity",
      tagline: "Conscience in action",
      description:
        "Academic and personal honesty are absolute. We foster young people who hold themselves accountable to the truth even when unobserved.",
    },
    {
      name: "Courage",
      tagline: "Intellectual & moral resilience",
      description:
        "We instill the confidence to express reasoned, unpopular perspectives, undertake difficult challenges, and learn constructively from setbacks.",
    },
    {
      name: "Service",
      tagline: "Stewardship beyond self",
      description:
        "Education is a privilege that demands reciprocal responsibility toward our local communities, ecosystems, and less fortunate neighbors.",
    },
    {
      name: "Global Perspective",
      tagline: "Rooted heritage, world horizon",
      description:
        "Deeply grounded in the rich cultural history of Tamil Nadu and India, while possessing the linguistic, cultural, and analytical fluency to thrive globally.",
    },
  ],
  leadership: [
    {
      name: "Dr. Meera Raghunathan",
      role: "Head of School",
      credentials: "Ph.D. in Comparative Education, M.Ed. (Demo Profile)",
      bio: "With over two decades leading international schools across Asia and the UK, Dr. Raghunathan champions an educational environment where scholastic depth and pastoral warmth are inseparable.",
      image: "leaderHead" as ImageKey,
    },
    {
      name: "Marcus Vance",
      role: "Academic Director",
      credentials: "M.Sc. in Pure Mathematics, PGCE (Demo Profile)",
      bio: "Overseeing both Cambridge and CBSE faculties, Marcus focuses on curriculum synthesis, faculty professional development, and student independent research protocols.",
      image: "leaderAcademic" as ImageKey,
    },
    {
      name: "Sangeetha Raman",
      role: "Director of Student Life",
      credentials: "M.A. in Developmental Psychology (Demo Profile)",
      bio: "Dedicated to student wellbeing, house life, athletic participation, and mental health counseling across all middle and senior divisions.",
      image: "leaderStudentLife" as ImageKey,
    },
  ],
  facultyPhilosophy: [
    {
      title: "1:8 Faculty Mentorship",
      text: "Every senior student is assigned a dedicated faculty advisor who monitors both intellectual progress and personal wellbeing through weekly individual tutorials.",
    },
    {
      title: "Scholar-Practitioner Teachers",
      text: "Over 70% of our faculty hold postgraduate degrees in their teaching disciplines, bringing active research experience directly into secondary classrooms.",
    },
    {
      title: "Interdisciplinary Colloquia",
      text: "Cross-departmental seminars bridge science, ethics, literature, and technology, training students to synthesize disparate forms of knowledge.",
    },
    {
      title: "Student Wellbeing & Psychological Safety",
      text: "Demanding expectations only bear fruit in an environment free from anxiety. Our pastoral team ensures proactive emotional and developmental support.",
    },
  ],
  policies: [
    {
      title: "Academic Honesty",
      text: "Strict protocols against plagiarism, unauthorized AI generation, and intellectual dishonesty, framed as respect for original scholarship.",
    },
    {
      title: "Safeguarding & Student Protection",
      text: "Comprehensive background screening, round-the-clock campus security, and strict child protection policies adhering to international standards.",
    },
    {
      title: "Equity & Inclusion",
      text: "A non-discriminatory community honoring diverse socioeconomic, linguistic, religious, and cultural backgrounds with active financial aid programs.",
    },
  ],
} as const;
