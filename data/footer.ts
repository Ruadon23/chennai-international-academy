import type { NavLink } from "./navigation";

export type FooterColumn = { title: string; links: NavLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Academics",
    links: [
      { label: "Primary School", href: "/academics#primary" },
      { label: "Middle School", href: "/academics#middle" },
      { label: "Senior School", href: "/academics#senior" },
      { label: "Curriculum", href: "/academics#curriculum" },
      { label: "Achievements", href: "/achievements" },
    ],
  },
  {
    title: "Admissions & Governance",
    links: [
      { label: "Admissions Process", href: "/admissions" },
      { label: "Fees & Scholarships", href: "/admissions#fees" },
      { label: "Leadership & Governance", href: "/about#governance" },
      { label: "Policies", href: "/about#policies" },
      { label: "Careers", href: "/contact#careers" },
    ],
  },
  {
    title: "Campus",
    links: [
      { label: "Campus & Facilities", href: "/campus" },
      { label: "News & Events", href: "/news" },
      { label: "Gallery", href: "/gallery" },
      { label: "Parent Portal", href: "/parent-portal" },
      { label: "Alumni", href: "/alumni" },
    ],
  },
];
