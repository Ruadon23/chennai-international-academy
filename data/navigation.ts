export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const utilityLinks: NavLink[] = [
  { label: "Alumni", href: "/alumni" },
  { label: "Parent Portal", href: "/parent-portal" },
  { label: "Staff Directory", href: "/staff" },
  { label: "Emergency Notices", href: "/notices" },
];

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story", description: "Heritage, founding and milestones" },
      { label: "Head of School & Leadership", href: "/about#governance", description: "Academic leadership team" },
      { label: "Faculty Philosophy", href: "/about#faculty", description: "1:8 mentorship and pedagogy" },
      { label: "Institutional Policies", href: "/about#policies", description: "Safeguarding and equity" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Primary School", href: "/academics#primary", description: "Early Years – Grade 5" },
      { label: "Middle School", href: "/academics#middle", description: "Grades 6 – 8" },
      { label: "Senior School", href: "/academics#senior", description: "Grades 9 – 12" },
      { label: "Curriculum Pathways", href: "/academics#curriculum", description: "Cambridge & CBSE tracks" },
    ],
  },
  {
    label: "Campus & Life",
    href: "/campus",
    children: [
      { label: "Campus & Facilities", href: "/campus", description: "24-acre green masterplan" },
      { label: "Residential Boarding", href: "/campus#boarding", description: "Boarding residences & houses" },
      { label: "News & Events", href: "/news", description: "The CIA Gazette & calendar" },
      { label: "Photographic Gallery", href: "/gallery", description: "Documentary perspectives" },
    ],
  },
  { label: "Achievements", href: "/achievements" },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions Process", href: "/admissions#process", description: "Four-stage journey" },
      { label: "Fees & Scholarships", href: "/admissions#fees", description: "Tuition schedules & bursaries" },
      { label: "Contact Admissions", href: "/contact", description: "Dialogue with our team" },
    ],
  },
];

export const navCtas = {
  inquire: { label: "Inquire", href: "/contact" },
  tour: { label: "Schedule a Tour", href: "/admissions#tour" },
  call: { label: "Call Admissions", href: "tel:+910000000000" },
};
