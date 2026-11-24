import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

const SKILL_GROUPS = [
  {
    name: "Web & mobile",
    skills: [
      "React",
      "React Native",
      "React Native Web",
      "TypeScript",
      "JavaScript",
      "Expo / EAS",
    ],
  },
  {
    name: "Architecture & integrations",
    skills: [
      "Component Systems",
      "Native Modules",
      "REST APIs",
      "Supabase",
      "Java / Swift integrations",
    ],
  },
  { name: "State & data", skills: ["React Query", "Zustand", "Redux"] },
  {
    name: "Delivery & reliability",
    skills: [
      "Azure DevOps",
      "Fastlane",
      "CI/CD",
      "Performance Optimization",
      "Production Debugging",
    ],
  },
] as const;

export const RESUME_DATA = {
  name: "Ozcan Ozgur",
  initials: "OZ",
  location: "Sofia, Bulgaria",
  locationLink: "https://www.google.com/maps/place/Sofia",
  about:
    "Senior Software Engineer | Web & Mobile Products, Cross-platform Architecture & Delivery",
  summary:
    "Software engineer delivering web and mobile products across hospitality, retail, and fintech. Builds React interfaces, cross-platform applications, native integrations, and backend-connected workflows. Experience spans architecture, authentication, CI/CD automation, and production troubleshooting, connecting user-facing features with reliable releases.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13644092?v=4",
  personalWebsiteUrl: "https://ozcanozgur.com",
  contact: {
    email: "ozcanozgur.dev@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ozcanozgur",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ozcan-ozgur/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@ozcan-ozgur",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "Istanbul Kultur University",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Fourth",
      link: "https://www.fourth.com/",
      badges: ["Sofia, Bulgaria"],
      title: "Senior Software Engineer",
      start: "May 2026",
      end: null,
      description:
        "Help shape and implement the Manager App’s shared iOS, Android, and web foundation, including platform-specific navigation, state, and authentication.\nUse AI-assisted workflows with project context, architectural guidelines, code review, and validation.\nDeliver manager-facing features and standardize release versioning and automated delivery across native and branded apps.",
    },
    {
      company: "Instacart (Wynshop)",
      link: "https://company.instacart.com/",
      badges: ["Remote"],
      title: "Senior React Native Developer",
      start: "2025",
      end: "May 2026",
      description:
        "Built web and mobile features for a multi-brand retail platform, balancing shared product capabilities with client-specific requirements.\nContributed to reusable UI systems, application architecture, modernization, and performance improvements across React and React Native codebases.\nPlanned and implemented branded checkout experiences, including Apple Pay, Google Pay, and native payment SDK integrations.",
    },
    {
      company: "Innovance Consultancy",
      link: "https://innovance.com.tr/",
      badges: ["Remote"],
      title: "Senior React Native Developer",
      start: "2023",
      end: "2025",
      description:
        "Delivered React and React Native features for fintech applications and supporting web tools.\nOwned production features, application upgrades, and stability improvements across TypeScript codebases.\nCollaborated with product and backend teams on integrations and releases.",
    },
    {
      company: "Huawei",
      link: "https://www.huawei.com",
      badges: ["Hybrid"],
      title: "Mobile Software Engineer",
      start: "2020",
      end: "2023",
      description:
        "Built and shipped React Native HMS Core plugins with Android and iOS integrations in Java and Swift.\nOwned bridging APIs connecting JavaScript applications to native platform capabilities.\nProduced documentation, demos, and integration support for developers using the plugins.",
    },
  ],
  skills: SKILL_GROUPS.flatMap((group) => [...group.skills]),
  skillGroups: SKILL_GROUPS,
  featuredProjectTitles: [
    "Wynshop (Instacart)",
    "Huawei HMS Core",
    "Vodafone Pay",
    "Baskent Kart",
    "JupiterApp",
  ],
  projects: [
    {
      title: "Fourth / Manager App",
      techStack: [
        "React Native",
        "React Native Web",
        "TypeScript",
        "Azure DevOps",
        "Fastlane",
      ],
      description:
        "React Native Web proof of concept and cross-platform Manager App foundation spanning phone, tablet, and web. Contributions include biometric/PIN login, regional authentication, and Actions features, alongside Fourth App and branded-app release automation.",
      link: {
        href: "https://www.fourth.com/",
      },
    },
    {
      title: "Wynshop (Instacart)",
      techStack: [
        "React",
        "React Native",
        "CMS",
        "TypeScript",
        "Redux",
        "React Query",
      ],
      description:
        "Built web and mobile features for a CMS-driven retail platform serving 20+ brands, contributing shared UI systems and client-specific experiences, including checkout and native payment integrations.",
      link: {
        href: "https://wynshop.com/",
      },
    },
    {
      title: "Huawei HMS Core",
      techStack: ["React Native", "TypeScript", "Java", "Swift"],
      description:
        "Built React Native plugins and Java/Swift bridges for Huawei HMS Core; wrote documentation and samples supporting developer integrations.",
      link: {
        href: "https://github.com/HMS-Core/hms-react-native-plugin",
      },
    },
    {
      title: "Vodafone Pay",
      techStack: ["React", "React Native", "TypeScript"],
      description:
        "Contributed React Native development to a digital wallet, alongside React-based back-office tooling.",
      link: {
        href: "https://www.vodafonepay.com.tr/",
      },
    },
    {
      title: "Letim",
      techStack: [
        "React Native",
        "TypeScript",
        "Native Modules",
        "React Query",
      ],
      description:
        "React Native money transfer wallet with native module integrations.",
      link: {
        href: "https://letim.app/",
      },
    },
    {
      title: "Baskent Kart",
      techStack: ["React Native", "React Native Web", "TypeScript", "Redux"],
      description:
        "Contributed to a wallet application for Ankara using React Native and React Native Web for mobile and browser experiences.",
      link: {
        href: "https://www.baskentkart.com.tr/",
      },
    },
    {
      title: "JupiterApp",
      techStack: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "React Query",
      ],
      description:
        "Built React Native/Expo journaling features with Supabase integration, server-state management, and feature flags.",
      link: {
        href: "",
      },
    },
    {
      title: "Sütbir",
      techStack: ["React Native", "TypeScript"],
      description:
        "React Native app for livestock management and government aid distribution.",
      link: {
        href: "",
      },
    },
    {
      title: "E-Vital",
      techStack: ["Java", "Android", "IoT"],
      description:
        "Android + Arduino IoT app for wireless vital-sign monitoring.",
      link: {
        href: "",
      },
    },
  ],
} as const;
