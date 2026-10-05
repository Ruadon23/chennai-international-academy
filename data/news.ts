import type { ImageKey } from "./images";

/** Fictional demo news and events. */
export const gazette = {
  title: "The CIA Gazette",
  edition: "Vol. XIV · Michaelmas Term · Demo edition",
  lead: {
    kicker: "Debate & Diplomacy",
    headline: "Model United Nations conference draws 400 delegates to campus",
    excerpt:
      "Students from twelve schools spent three days negotiating crisis scenarios, with CIA delegates earning commendations for research and procedure.",
    meta: "14 September · Senior School",
    href: "/news#featured",
  },
  briefs: [
    {
      kicker: "Athletics",
      headline: "State Aquatic Championship: five medals for CIA swimmers",
      meta: "28 August",
      href: "/news#story-aquatics",
    },
    {
      kicker: "Innovation",
      headline: "Robotics team qualifies for the International Finals",
      meta: "9 September",
      href: "/news#story-robotics",
    },
    {
      kicker: "Visiting Scholar",
      headline: "A marine biologist on why ambiguity is the scientist's friend",
      meta: "21 September",
      href: "/news#story-scholar",
    },
  ],
  events: [
    { day: "12", month: "Oct", title: "Open Day & Campus Tour", note: "Admissions" },
    { day: "24", month: "Oct", title: "Inter-House Athletics Meet", note: "Sports Turf" },
    { day: "07", month: "Nov", title: "Autumn Theatre Production", note: "Auditorium" },
    { day: "19", month: "Nov", title: "Parent–Teacher Conferences", note: "All grades" },
  ],
} as const;

export type NewsArticle = {
  id: string;
  category: "Academics" | "Sport" | "Arts" | "Student Life" | "Community" | "Events";
  title: string;
  date: string;
  readTime: string;
  author: string;
  summary: string;
  image: ImageKey;
  featured?: boolean;
};

export const newsArticles: NewsArticle[] = [
  {
    id: "featured",
    category: "Student Life",
    title: "Model United Nations Conference Draws 400 Delegates to CIA Campus",
    date: "14 September 2026",
    readTime: "4 min read",
    author: "Rohan M. (Editor-in-Chief)",
    summary:
      "Students representing twelve leading schools across South India concluded three days of intense multilateral negotiation addressing international maritime safety and sustainable development corridors.",
    image: "newsMUN",
    featured: true,
  },
  {
    id: "story-greenhouse",
    category: "Academics",
    title: "Biotech Greenhouse Yields First Harvest from Student IoT Soil Audit",
    date: "11 September 2026",
    readTime: "3 min read",
    author: "Grade 11 Biology Faculty",
    summary:
      "Senior biology students deployed custom low-power telemetry probes to optimize drip irrigation for drought-resistant indigenous legumes.",
    image: "newsGreenhouse",
  },
  {
    id: "story-robotics",
    category: "Academics",
    title: "Autonomous Robotics Team Secures Southern Regional Championship",
    date: "09 September 2026",
    readTime: "3 min read",
    author: "Innovation Centre Mentors",
    summary:
      "The CIA Cyber-Navigators rover prototype aced the rough-terrain navigation and obstacle avoidance challenges, punching its ticket to the international finals.",
    image: "achievementRobotics",
  },
  {
    id: "story-aquatics",
    category: "Sport",
    title: "State Aquatic Championships: Five Medals and Two State Records for CIA Swimmers",
    date: "28 August 2026",
    readTime: "2 min read",
    author: "Athletic Department",
    summary:
      "Led by Nisha K., our varsity swim squad set two new state timing marks in the 200m butterfly and 4x100m freestyle relay.",
    image: "newsAquatics",
  },
  {
    id: "story-theatre",
    category: "Arts",
    title: "Autumn Amphitheatre Production: Re-Imagining The Tempest on Chennai's Coastline",
    date: "24 August 2026",
    readTime: "3 min read",
    author: "Dramatic Arts Faculty",
    summary:
      "A stunning student-directed open-air staging brought Shakespeare's shipwreck island to life against the backdrop of ocean evening breezes.",
    image: "newsShakespeare",
  },
  {
    id: "story-scholar",
    category: "Academics",
    title: "Colloquium: Marine Biologist Dr. K. Sundaram on Scientific Ambiguity",
    date: "21 August 2026",
    readTime: "4 min read",
    author: "Senior Seminar Series",
    summary:
      "Addressing senior science scholars, the visiting researcher discussed why negative experimental results often constitute the most fruitful scientific discoveries.",
    image: "academicsMentorship",
  },
  {
    id: "story-mangroves",
    category: "Community",
    title: "Kovalam Mangrove Nursery: Student Volunteers Plant 800 Estuarine Saplings",
    date: "15 August 2026",
    readTime: "2 min read",
    author: "Social Stewardship League",
    summary:
      "In conjunction with local coastal fisherfolk, students spent Saturday planting native saplings to stabilize coastal dune buffer zones.",
    image: "gallery7",
  },
  {
    id: "story-music",
    category: "Arts",
    title: "Chamber Music Ensemble Presents Monsoon Twilight Recital",
    date: "08 August 2026",
    readTime: "2 min read",
    author: "Music Conservatories",
    summary:
      "An intimate evening performance featured string quartets and Carnatic-Western fusion pieces composed entirely by Grade 10 scholars.",
    image: "achievementArts",
  },
];

export const upcomingCalendar = [
  {
    day: "12",
    month: "Oct",
    title: "Annual Admissions Open House & Campus Walk",
    category: "Admissions",
    time: "09:30 AM – 01:00 PM",
    venue: "Main Auditorium & Campus Quad",
    desc: "Prospective parents and children are invited for guided tours, faculty discussions, and classroom demonstration sessions.",
  },
  {
    day: "24",
    month: "Oct",
    title: "Inter-House Athletics Championship Meet",
    category: "Sport",
    time: "08:00 AM – 04:30 PM",
    venue: "Olympic Synthetic Track & Field",
    desc: "Chola, Pallava, Chera, and Pandya houses compete across 28 track, field, and relay events.",
  },
  {
    day: "07",
    month: "Nov",
    title: "Annual Inter-School Shakespeare Festival",
    category: "Arts",
    time: "06:00 PM – 09:00 PM",
    venue: "Campus Amphitheatre",
    desc: "Showcase of dramatic scenes and monologues presented by visiting secondary academies.",
  },
  {
    day: "19",
    month: "Nov",
    title: "Scholastic Colloquium & Parent-Mentor Conferences",
    category: "Academics",
    time: "All Day",
    venue: "Senior Seminar Suites",
    desc: "Comprehensive individual feedback sessions reviewing student capstones, diagnostic assessments, and pastoral growth.",
  },
  {
    day: "04",
    month: "Dec",
    title: "Winter Festival of Lessons & Carols",
    category: "Student Life",
    time: "05:30 PM – 08:00 PM",
    venue: "Main Auditorium",
    desc: "Traditional candlelit evening of choral music, readings, and student chamber orchestral performances.",
  },
];
