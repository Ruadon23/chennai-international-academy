import type { ImageKey } from "./images";

/**
 * Campus & Life data.
 * ALL DESCRIPTIONS, SIZES, AND FACILITIES ARE FICTIONAL DEMO CONTENT.
 */
export const campusData = {
  isDemo: true,
  hero: {
    eyebrow: "Environment & Community",
    title: "Space to explore. Places to belong.",
    description:
      "Set across 24 acres of protected green spaces along Chennai's southern educational belt, our campus blends contemporary architectural design with indigenous landscape ecology to foster focus, fellowship, and wellbeing.",
  },
  overviewStats: [
    { value: "24", label: "Acres of Protected Campus" },
    { value: "100%", label: "Solar Powered Day Operations" },
    { value: "4", label: "Collegiate Student Houses" },
    { value: "1:8", label: "Faculty-to-Student Ratio" },
  ],
  pillars: [
    {
      id: "research",
      title: "Research & Innovation",
      eyebrow: "Scientific Discovery",
      summary:
        "Where student curiosity meets university-grade research infrastructure. Our scientific suites encourage students to conduct original experimental inquiries.",
      image: "facilityResearch" as ImageKey,
      facilities: [
        {
          name: "Artificial Intelligence Laboratory",
          desc: "Dedicated computing clusters and neural network workstations for student machine learning projects and algorithmic research.",
        },
        {
          name: "Autonomous Robotics Studio",
          desc: "Equipped with CNC routers, 3D printers, laser cutters, and electronics benches for robotics league prototyping.",
        },
        {
          name: "Advanced Biotech Greenhouse",
          desc: "Climate-controlled research greenhouse with hydroponic towers and automated soil monitoring sensors.",
        },
        {
          name: "Pure Chemistry & Physics Suites",
          desc: "Spacious wet laboratories designed to international safety standards with full fume-hood integration.",
        },
      ],
    },
    {
      id: "athletics",
      title: "Sport & Physical Education",
      eyebrow: "Physical Rigor & Teamwork",
      summary:
        "Daily physical endeavor is vital to scholastic clarity. We provide world-class athletic infrastructure for recreational fitness and competitive state tournaments.",
      image: "facilityAthletics" as ImageKey,
      facilities: [
        {
          name: "Olympic-Length Aquatic Complex",
          desc: "8-lane 50-meter temperature-managed pool with electronic timing pads, diving blocks, and spectator galleries.",
        },
        {
          name: "FIFA-Standard Football Turf",
          desc: "All-weather artificial turf pitch flanked by a 400-meter synthetic polyurethane running track.",
        },
        {
          name: "Indoor Racquet Pavilion",
          desc: "Six international-standard wooden badminton courts, two squash courts, and table tennis facilities.",
        },
        {
          name: "Cricket Nets & Conditioning Gym",
          desc: "Four turf and astro bowling lanes alongside a modern strength and athletic conditioning gym.",
        },
      ],
    },
    {
      id: "arts",
      title: "Creative & Performing Arts",
      eyebrow: "Expression & Aesthetic Craft",
      summary:
        "Artistic craft is treated as an intellectual discipline at CIA. Our creative facilities offer spaces where performance, composition, and visual art flourish.",
      image: "facilityArts" as ImageKey,
      facilities: [
        {
          name: "600-Seat Main Auditorium",
          desc: "Acoustically tuned hall with orchestra pit, computerized fly-loft, and stage lighting for annual productions.",
        },
        {
          name: "Blackbox Experimental Theatre",
          desc: "A versatile, intimate performance space dedicated to student-directed drama and debate.",
        },
        {
          name: "Acoustic Music Conservatories",
          desc: "Soundproof individual practice studios, ensemble rehearsal suites, and a digital recording workstation.",
        },
        {
          name: "North-Light Visual Arts Atelier",
          desc: "Double-height painting studio, pottery wheels, ceramic kiln, and printmaking facilities.",
        },
      ],
    },
  ],
  boarding: {
    id: "boarding",
    title: "Residential Boarding Life",
    eyebrow: "Home Away From Home",
    description:
      "Boarding at CIA provides a structured, supportive home where students develop self-reliance, lifelong camaraderie, and collaborative habits. Pastoral care is directed by resident faculty housemasters.",
    features: [
      {
        title: "Modern En-Suite Residences",
        desc: "Comfortable air-conditioned twin-sharing rooms with ergonomic study desks, ample natural light, and secure storage.",
      },
      {
        title: "Structured Evening Prep",
        desc: "Dedicated two-hour supervised study periods each evening with subject specialist faculty on hand for academic assistance.",
      },
      {
        title: "Chef-Prepared Nutritional Dining",
        desc: "Four wholesome, balanced meals daily prepared in our ISO-certified kitchens, accommodating varied dietary requirements.",
      },
      {
        title: "Weekend Enrichment & Excursions",
        desc: "Supervised weekend activities including heritage visits, surf lessons on Chennai's coast, service projects, and film screenings.",
      },
    ],
  },
  houseSystem: {
    title: "The Collegiate House System",
    intro:
      "All students and faculty belong to one of four historic collegiate houses named after ancient Tamil dynasties, creating cross-grade mentorship and friendly rivalry.",
    houses: [
      {
        name: "Chola",
        color: "Navy & Brass",
        motto: "Bravery & Maritime Vision",
        crestDesc: "Represented by the regal tiger and open compass.",
      },
      {
        name: "Pallava",
        color: "Forest Green & Gold",
        motto: "Artistry & Architectural Endurance",
        crestDesc: "Represented by the stone lion and chisel.",
      },
      {
        name: "Chera",
        color: "Crimson & Silver",
        motto: "Justice & Unyielding Resolve",
        crestDesc: "Represented by the archer's bow and crest.",
      },
      {
        name: "Pandya",
        color: "Oxford Blue & Pearl",
        motto: "Wisdom & Scholastic Depth",
        crestDesc: "Represented by the twin diving carp and open scroll.",
      },
    ],
  },
} as const;
