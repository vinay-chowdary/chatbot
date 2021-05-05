export const choices = {
  Courses: {
    description: "select the course",
    options: ["Junior", "UG", "PG"],
    Junior: {
      requireMail: true,
      description:
        "It is an intermediate English medium two year course. It has four branches.",

      options: [
        "MPC (Maths Physics Chemistry)",
        "BiPC (Biology Physics Chemistry)",
        "CEC (Civics Economics Commerce)",
        "MEC (Maths Economics Commerce)",
      ],
    },
    UG: {
      requireMail: true,
      description:
        "It is a 3year graduation course. Second Language: Hindi, Telugu, Arabic, Sanskrit. It has four branches. Please select a branch",
      "B sc": {
        description: "B sc has 4 branches",
        options: [
          "Bio-Technology, MicroBiology, Chemistry",
          "Bio-Chemistry, MicroBiology, Computer Applications",
          "Maths, Physics, Computer science",
          "Maths, Statistics, Computer science",
        ],
      },
      "B com": {
        description: "B com has 2 branches",
        options: ["honors", "General"],
      },
      "B.B.A": {},
      "B.C.A": {},
      options: ["B sc", "B com", "B.B.A", "B.C.A"],
    },
    PG: {
      requireMail: true,
      description: "It is a two year post graduation course.",
      "M sc": {
        description: "MSC has 2 branches",
        options: ["MSC Computer science", "Msc Orgnic Chemistry"],
      },
      "M com": {},
      options: ["M sc", "M com"],
    },
  },
  Admission: {
    description:
      "Shanitniketan Women’s College affiliated to Osmania University. Please select an option below to proceed",
    "Application Form": {
      requireMail: true,
      link:
        "http://shantiniketancollege.com/images/shantiniketan-application-form.zip",
    },
    "Agreement Form": {
      requireMail: true,
      link:
        "http://shantiniketancollege.com/images/shantiniketan_agreement.pdf",
    },
    "Download Brochure": {
      requireMail: true,
      link: "link to download brochure",
    },
    options: ["Application Form", "Agreement Form", "Download Brochure"],
  },
  Faculty: "",
  Library: "",
  Management: "",
  Hostel: "",
  Amenities: "",
  "Contact us": "",
  "Placements & Training": "",
  options: [
    "Courses",
    "Admission",
    "Faculty",
    "Library",
    "Management",
    "Hostel",
    "Amenities",
    "Contact us",
    "Placements & Training",
  ],
};

export const noEvent = [
  "M com",
  "MSC Computer science",
  "Msc Orgnic Chemistry",
  "B.B.A",
  "B.C.A",
  "MPC (Maths Physics Chemistry)",
  "BiPC (Biology Physics Chemistry)",
  "CEC (Civics Economics Commerce)",
  "MEC (Maths Economics Commerce)",
  "honors",
  "General",
  "Bio-Technology, MicroBiology, Chemistry",
  "Bio-Chemistry, MicroBiology, Computer Applications",
  "Maths, Physics, Computer science",
  "Maths, Statistics, Computer science",
];
