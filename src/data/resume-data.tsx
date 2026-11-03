import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Anil Bayseferogullari",
  initials: "AB",
  location: "Sofia, Bulgaria",
  locationLink: "https://www.google.com/maps/place/Sofia",
  about:
    "Credits & Incentives Senior Analyst | Financing & Cash Flow Management",
  summary:
    "Finance and operations professional with 8+ years of experience in credits and incentives, project financing, and cash flow management. Experienced in supporting EMEA incentive projects, evaluating financing alternatives, and coordinating compliance with tax, legal, and commercial teams. Combines financial analysis with banking and stakeholder management experience across multinational and capital-intensive businesses.",
  avatarUrl: "/anil-bayseferogullari.png",
  personalWebsiteUrl: "",
  contact: {
    email: "bayseferanil@gmail.com",
    tel: "+359879582025",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anil-bayseferogullari/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Uludag University",
      degree: "Bachelor’s degree in economics",
      start: "Sep 2010",
      end: "Jun 2014",
    },
  ],
  work: [
    {
      company: "Cargill Inc.",
      link: "",
      badges: ["Sofia, Bulgaria"],
      title: "Credits & Incentives Senior Analyst",
      start: "Sep 2020",
      end: null,
      description:
        "Supported EMEA incentive projects, monitoring regulatory compliance, internal governance requirements, and project obligations throughout their lifecycles.\nConducted financial and operational analyses to support investment decisions and incentive applications.\nLed project kick-off meetings and stakeholder discussions, partnering with tax, legal, project, and commercial teams across multiple countries.\nPrepared financial analyses, reports, and compliance documentation for incentive claims, government submissions, and project decision-making.\nDrove process improvement and data-quality initiatives covering validation, reporting, and operational efficiency.",
    },
    {
      company: "Fernas Group",
      link: "",
      badges: ["Ankara, Turkey"],
      title: "Financial Specialist — Energy, Mining & Infrastructure",
      start: "Aug 2017",
      end: "Apr 2020",
      description:
        "Prepared cash flow forecasts and maintained financing, banking, and credit-related reports for energy, mining, and infrastructure projects.\nCollaborated with banks on loans, leasing facilities, guarantee letters, and letters of credit.\nEvaluated financing alternatives against borrowing costs, liquidity needs, and foreign exchange exposure, including USD-denominated options in a volatile currency environment.\nContributed to assessments of subcontractors’ financial and operational capabilities before project awards.\nAssessed counterparty and project financial risks, guarantee requirements, and payment security mechanisms to support financing decisions.",
    },
  ],
  skills: [
    "Financial Analysis",
    "Credits & Incentives",
    "Regulatory Compliance",
    "Cash Flow Management",
    "Risk Assessment",
    "Stakeholder Management",
    "Business Partnering",
    "Financial Reporting",
    "Credit & Financing Support",
  ],
  technicalSkills: [
    "SAP ERP",
    "Microsoft Excel",
    "Power BI",
    "Microsoft Office 365",
  ],
  languages: [
    { name: "Turkish", proficiency: "Native" },
    { name: "English", proficiency: "Advanced Professional Proficiency" },
    { name: "French", proficiency: "Elementary" },
  ],
  projects: [],
} as const;
