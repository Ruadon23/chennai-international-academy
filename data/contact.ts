export const contactData = {
  isDemo: true,
  hero: {
    eyebrow: "Connect with the Academy",
    title: "We welcome the conversation.",
    description:
      "Whether you are exploring enrollment for your child, inquiring about faculty careers, or scheduling a visit to our Chennai campus, our administrative team is here to assist you.",
  },
  address: {
    campusName: "Chennai International Academy",
    street: "123 Academy Road, Off Old Mahabalipuram Road (OMR)",
    city: "Chennai, Tamil Nadu 600 119",
    country: "India",
  },
  hours: [
    { days: "Monday – Friday", times: "08:30 AM – 04:30 PM IST" },
    { days: "Saturday", times: "09:00 AM – 01:00 PM IST (Admissions Only)" },
    { days: "Sunday & Public Holidays", times: "Closed for Campus Rest" },
  ],
  departments: [
    {
      name: "Admissions Office",
      desc: "For prospectus requests, campus tour bookings, entrance assessments, and enrollment queries.",
      email: "admissions@cia-demo.example",
      phone: "+91 00000 00001",
      lead: "Admissions Directorate",
    },
    {
      name: "General Enquiries & Administration",
      desc: "For general institutional questions, administrative records, and verification requests.",
      email: "info@cia-demo.example",
      phone: "+91 00000 00000",
      lead: "Central Office",
    },
    {
      name: "Transport & Facilities Management",
      desc: "For school bus route mapping, safety protocols, and campus visitor logistics.",
      email: "transport@cia-demo.example",
      phone: "+91 00000 00002",
      lead: "Director of Facilities",
    },
    {
      name: "Academic Careers & Faculty Recruitment",
      desc: "For certified educators, postgraduate researchers, and residential pastoral staff seeking positions.",
      email: "careers@cia-demo.example",
      phone: "+91 00000 00003",
      lead: "Human Resources Directorate",
      id: "careers",
    },
  ],
  careersInfo: {
    title: "Teaching & Residential Pastoral Careers",
    intro:
      "We invite expressions of interest from scholar-teachers who combine rigorous disciplinary scholarship with a genuine devotion to mentorship and youth development.",
    openings: [
      {
        title: "Faculty in Pure Mathematics & Statistics (Grades 9–12)",
        type: "Full-Time · Cambridge & CBSE",
        req: "Postgraduate degree in Mathematics or allied discipline with proven secondary teaching distinction.",
      },
      {
        title: "Faculty in Physics & Computational Modeling",
        type: "Full-Time · Cambridge A-Level",
        req: "M.Sc. or Ph.D. in Physics; experience with laboratory design and robotics mentoring preferred.",
      },
      {
        title: "Resident Housemaster / Housemistress",
        type: "Residential · Full-Time",
        req: "Experienced educator with strong pastoral background committed to residential student flourishing.",
      },
    ],
  },
} as const;
