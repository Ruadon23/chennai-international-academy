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
      { label: "Our Story", href: "/about", description: "History, mission and values" },
      { label: "Head of School", href: "/about#head-of-school" },
      { label: "Leadership & Governance", href: "/about#governance" },
      { label: "Faculty", href: "/about#faculty" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Primary School", href: "/academics#primary", description: "Early Years – Grade 5" },
      { label: "Middle School", href: "/academics#middle", description: "Grades 6 – 8" },
      { label: "Senior School", href: "/academics#senior", description: "Grades 9 – 12" },
      { label: "Curriculum", href: "/academics#curriculum" },
    ],
  },
  {
    label: "Campus & Life",
    href: "/campus",
    children: [
      { label: "Campus & Facilities", href: "/campus" },
      { label: "Boarding", href: "/campus#boarding" },
      { label: "News & Events", href: "/news" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Achievements", href: "/achievements" },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions Process", href: "/admissions" },
      { label: "Fees & Scholarships", href: "/admissions#fees" },
      { label: "Contact Admissions", href: "/contact" },
    ],
  },
];

export const navCtas = {
  inquire: { label: "Inquire", href: "/contact" },
  tour: { label: "Schedule a Tour", href: "/admissions#tour" },
  call: { label: "Call Admissions", href: "tel:+910000000000" },
};
