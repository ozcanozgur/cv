import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ozcan Ozgur",
  initials: "OZ",
  location: "Sofia, Bulgaria",
  locationLink: "https://www.google.com/maps/place/Sofia",
  about:
    "Senior Frontend & Mobile Engineer specializing in scalable React and React Native applications, mobile architecture, and production-grade cross-platform experiences.",
  summary:
    "Senior Frontend & Mobile Engineer building production-grade React Native/Expo apps and modern React frontends. Focused on scalable architecture, reusable UI systems, native integrations, performance, and reliable releases. Remote-first collaborator using AI-assisted tooling to iterate faster and strengthen code quality.",
  avatarUrl: "https://avatars.githubusercontent.com/u/13644092?v=4",
  personalWebsiteUrl: "https://ozcanozgur.com",
  contact: {
    email: "ozcanozgur123@gmail.com",
    tel: "+359 89 7482970",
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
      company: "Wynshop",
      link: "https://wynshop.com/",
      badges: ["Remote"],
      title: "Senior React Native Developer",
      start: "2025",
      end: null,
      description:
        "Building production React Native features for an enterprise retail/e-commerce platform serving multiple large-scale brands. Contributing to reusable UI systems, scalable mobile architecture, modernization efforts, and performance improvements in a remote cross-functional environment. Technologies: React, React Native, TypeScript",
    },
    {
      company: "Innovance Consultancy",
      link: "https://innovance.com.tr/",
      badges: ["Remote"],
      title: "Senior React Native Developer",
      start: "2023",
      end: "2025",
      description:
        "Delivered and supported fintech, high-traffic mobile applications across React and React Native codebases. Owned production features, upgrades, and stability improvements; collaborated with product and backend teams to ship reliably. Technologies: React, React Native, TypeScript",
    },
    {
      company: "Huawei",
      link: "https://www.huawei.com",
      badges: ["Hybrid"],
      title: "Mobile Software Engineer",
      start: "2020",
      end: "2023",
      description:
        "Built and shipped React Native HMS Core plugins with native integrations in Java (Android) and Swift (iOS). Owned bridging APIs and developer experience via docs, demos, and ecosystem support to enable production integrations. Technologies: React Native, TypeScript, Java, Swift",
    },
  ],
  skills: [
    "Expo",
    "EAS",
    "React Native",
    "React",
    "TypeScript",
    "JavaScript",
    "React Query",
    "Zustand",
    "Redux",
    "Mobile Architecture",
    "Component Systems",
    "Native Modules",
    "Performance Optimization",
    "CI/CD",
    "REST APIs",
    "Supabase",
    "AI-assisted Dev",
    "Java",
    "Swift",
  ],
  projects: [
    {
      title: "Wynshop",
      techStack: [
        "React",
        "React Native",
        "CMS",
        "TypeScript",
        "Redux",
        "React Query",
      ],
      description:
        "Enterprise retail/e-commerce platform with CMS-driven web and mobile experiences for 20+ brands.",
      link: {
        href: "https://wynshop.com/",
      },
    },
    {
      title: "Huawei HMS Core",
      techStack: ["React Native", "TypeScript", "Java", "Swift"],
      description:
        "React Native HMS Core plugins with Java/Swift native bridges, docs, and samples to enable production integrations.",
      link: {
        href: "https://github.com/HMS-Core/hms-react-native-plugin",
      },
    },
    {
      title: "Vodafone Pay",
      techStack: ["React", "React Native", "TypeScript"],
      description:
        "React Native digital wallet for consumer mobile and back-office tooling.",
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
        "React Native + React Native Web wallet application for Ankara.",
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
        "Indie React Native/Expo journaling app with Supabase backend, feature flags, and AI-assisted dev workflow.",
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
