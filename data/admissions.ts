export const admissionsSteps = [
  {
    number: "01",
    title: "Online Enquiry",
    text: "Share a few details and our admissions team will respond within one working day.",
  },
  {
    number: "02",
    title: "Campus Experience & Assessment",
    text: "Visit the campus, meet teachers and complete a relaxed, age-appropriate assessment.",
  },
  {
    number: "03",
    title: "Parent & Leadership Dialogue",
    text: "A conversation with school leadership about your child's strengths and aspirations.",
  },
  {
    number: "04",
    title: "Formal Enrollment",
    text: "Receive your offer, complete documentation and join the CIA community.",
  },
] as const;

export const gradeOptions = [
  "Early Years",
  "Grade 1 – 5",
  "Grade 6 – 8",
  "Grade 9 – 10",
  "Grade 11 – 12",
] as const;

export const admissionsPageData = {
  isDemo: true,
  hero: {
    eyebrow: "Admissions & Enrollment",
    title: "Begin the conversation.",
    description:
      "Choosing a school is among the most consequential decisions a family makes. We invite you to visit our campus, observe our classrooms, and discover whether CIA is the right home for your child.",
  },
  whyCia: [
    {
      title: "1:8 Mentoring Culture",
      desc: "Every student is known personally by faculty mentors who track character, academic vigor, and individual wellbeing.",
    },
    {
      title: "Dual Curriculum Choice",
      desc: "Seamless integration of Cambridge International and CBSE pathways provides unmatched national and global versatility.",
    },
    {
      title: "University-Grade Facilities",
      desc: "24-acre green campus boasting AI & robotics suites, biotech greenhouse, 50m aquatic complex, and 600-seat auditorium.",
    },
    {
      title: "Balanced Character Formation",
      desc: "Scholastic rigor paired with mandatory competitive athletics, fine arts, public rhetoric, and community stewardship.",
    },
    {
      title: "Vibrant Boarding Community",
      desc: "Residential facilities that build independence, camaraderie, and evening academic focus under resident faculty housemasters.",
    },
    {
      title: "Demonstrated Global Destinations",
      desc: "Consistent admissions to premier national and international institutions across sciences, humanities, law, and arts.",
    },
  ],
  gradeEntry: [
    {
      stage: "Early Years (Ages 3–5)",
      grades: "Nursery, LKG & UKG",
      focus: "Play-based inquiry, phonemic awareness, spatial reasoning, and social discovery in small nurture groups of 12.",
      entryNotes: "Informal, play-led observation session with child and parents.",
    },
    {
      stage: "Primary School (Ages 6–10)",
      grades: "Grades 1 through 5",
      focus: "Foundational numeracy, literacy, scientific curiosity, swimming, music, and daily library studio.",
      entryNotes: "Age-appropriate developmental assessment in reading, language, and quantitative skills.",
    },
    {
      stage: "Middle School (Ages 11–13)",
      grades: "Grades 6 through 8",
      focus: "Disciplinary subject study, laboratory practicals, robotics, interschool debate, and house athletics.",
      entryNotes: "Written assessments in Mathematics, English, and General Science, followed by student interaction.",
    },
    {
      stage: "Secondary (Ages 14–15)",
      grades: "Grades 9 & 10",
      focus: "Choice between Cambridge IGCSE or CBSE Secondary, intensive experimental science, and Model UN.",
      entryNotes: "Academic diagnostic examination, previous school transcripts, and leadership interview.",
    },
    {
      stage: "Senior Secondary (Ages 16–17)",
      grades: "Grades 11 & 12",
      focus: "Cambridge A-Levels or CBSE Senior Secondary, independent capstone research, and university admissions coaching.",
      entryNotes: "Grade 10 board exam results, subject aptitude tests, and interview with Head of School.",
    },
  ],
  preparationChecklist: [
    {
      item: "Past Academic Records",
      detail: "Certified report cards or transcripts from the applicant's previous two academic years.",
    },
    {
      item: "Birth Certificate & Identity Proof",
      detail: "Government-issued birth certificate, passport copy (for international applicants), and Aadhaar copy.",
    },
    {
      item: "Student Work or Portfolio (Grades 6+)",
      detail: "Examples of independent projects, creative writing, art, or evidence of athletic/musical distinction.",
    },
    {
      item: "Confidential Teacher Reference",
      detail: "Contact information for two recent subject teachers for a brief pastoral and academic recommendation.",
    },
  ],
  feesAndScholarships: {
    overview:
      "Tuition fees at CIA reflect our small class sizes, world-class laboratory apparatus, international faculty, and comprehensive athletic facilities. All figures below represent illustrative demo schedules.",
    tiers: [
      {
        gradeRange: "Early Years (Nursery – UKG)",
        tuition: "Illustrative Demo Scale: Tier I",
        includes: "Curriculum materials, meals, daily swimming, and activity supplies.",
      },
      {
        gradeRange: "Primary School (Grades 1 – 5)",
        tuition: "Illustrative Demo Scale: Tier II",
        includes: "Textbooks, laboratory consumables, sports coaching, and IT resources.",
      },
      {
        gradeRange: "Middle School (Grades 6 – 8)",
        tuition: "Illustrative Demo Scale: Tier III",
        includes: "Makerspace access, competitive robotics materials, and interschool fixture transport.",
      },
      {
        gradeRange: "Senior School (Grades 9 – 12)",
        tuition: "Illustrative Demo Scale: Tier IV",
        includes: "Board examination registration assistance, research capstone mentoring, and college counseling.",
      },
    ],
    scholarshipInfo:
      "Merit-cum-means scholarships are awarded annually to candidates demonstrating exceptional scholastic, athletic, or musical distinction alongside verified financial need. Applications open each November.",
  },
  faqs: [
    {
      q: "When should families submit applications for the upcoming academic year?",
      a: "Admissions open in September for enrollment the following June. While rolling admissions are considered subject to seat availability, early enquiry is strongly advised for Early Years and Grade 11 entries.",
    },
    {
      q: "What is the teacher-to-student ratio across classrooms?",
      a: "Our overall campus faculty ratio is 1:8. Classroom sizes are capped at 18 students in Early Years and 22 students in Middle and Senior divisions to ensure individualized guidance.",
    },
    {
      q: "How does the dual Cambridge and CBSE curriculum choice work?",
      a: "Students follow an integrated inquiry curriculum through Grade 8. At the end of Grade 8, families and faculty meet to determine whether the Cambridge IGCSE / A-Level pathway or the CBSE pathway best aligns with the student's higher education goals.",
    },
    {
      q: "What does the student assessment involve?",
      a: "For younger children, assessment is conversational and play-based. For Grades 4 and above, candidates complete diagnostic evaluations in reading comprehension, analytical writing, and mathematics, followed by a dialogue with our academic team.",
    },
    {
      q: "Is school transport available across Chennai?",
      a: "Yes. CIA operates a fleet of air-conditioned, GPS-tracked buses equipped with CCTV and female attendants, covering major residential zones across South and Central Chennai.",
    },
    {
      q: "What boarding options are available?",
      a: "We offer both full-time (termly) boarding and 5-day weekly boarding (students return home on Friday evening and return Monday morning), starting from Grade 6 upwards.",
    },
    {
      q: "Can international or out-of-state students apply online?",
      a: "Yes. Our admissions team conducts online assessments and virtual campus interviews for overseas or out-of-state families, with in-person campus visits arranged prior to final enrollment.",
    },
  ],
} as const;
