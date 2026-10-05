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
    href: "/news",
  },
  briefs: [
    {
      kicker: "Athletics",
      headline: "State Aquatic Championship: five medals for CIA swimmers",
      meta: "28 August",
      href: "/news",
    },
    {
      kicker: "Innovation",
      headline: "Robotics team qualifies for the International Finals",
      meta: "9 September",
      href: "/news",
    },
    {
      kicker: "Visiting Scholar",
      headline: "A marine biologist on why ambiguity is the scientist's friend",
      meta: "21 September",
      href: "/news",
    },
  ],
  events: [
    { day: "12", month: "Oct", title: "Open Day & Campus Tour", note: "Admissions" },
    { day: "24", month: "Oct", title: "Inter-House Athletics Meet", note: "Sports Turf" },
    { day: "07", month: "Nov", title: "Autumn Theatre Production", note: "Auditorium" },
    { day: "19", month: "Nov", title: "Parent–Teacher Conferences", note: "All grades" },
  ],
} as const;
