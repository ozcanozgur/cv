import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Ozcan Ozgur",
  initials: "OZ",
  location: "Sofia, Bulgaria",
  locationLink: "https://www.google.com/maps/place/Sofia",
  about:
    "Senior mobile engineer focused on building production-grade React Native applications and delivering high-quality products.",
  summary:
    "React Native-focused software engineer with experience building and shipping production mobile applications. Skilled in taking products from concept to launch using TypeScript, React, and React Native. Over 5 years of experience working remotely and in hybrid environments with international teams.",
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
        "Building enterprise e-commerce solutions and mobile applications with React Native and TypeScript. Technologies: React, React Native, TypeScript",
    },
    {
      company: "Innovance Consultancy",
      link: "https://innovance.com.tr/",
      badges: ["Remote"],
      title: "Software Developer",
      start: "2023",
      end: "2025",
      description:
        "Developing and maintaining fintech and high-traffic mobile applications with React and React Native. Technologies: React, React Native, TypeScript",
    },
    {
      company: "Huawei",
      link: "https://www.huawei.com",
      badges: ["Hybrid"],
      title: "Software Developer",
      start: "2020",
      end: "2023",
      description:
        "Developed React Native HMS plugins, native integrations with Java and Swift, and supported the developer ecosystem with documentation, demos, and community support. Technologies: React Native, TypeScript, Java, Swift",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
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
        "Enterprise e-commerce platform with dynamic CMS powering mobile and web experiences for 20+ retail brands.",
      link: {
        href: "https://wynshop.com/",
      },
    },
    {
      title: "Huawei HMS Core",
      techStack: ["Lead React Native Developer", "TypeScript", "Java", "Swift"],
      description:
        "Developed React Native HMS plugins with native Java and Swift integrations; led development, authored technical docs, and managed community support.",
      link: {
        href: "https://github.com/HMS-Core/hms-react-native-plugin",
      },
    },
    {
      title: "Vodafone Pay",
      techStack: ["React", "React Native", "TypeScript"],
      description:
        "Digital wallet application built with React Native for mobile and back-office solutions.",
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
        "React Native mobile wallet application for money transfers with native module integrations.",
      link: {
        href: "https://letim.app/",
      },
    },
    {
      title: "Baskent Kart",
      techStack: ["React Native", "React Native Web", "TypeScript", "Redux"],
      description:
        "Wallet application for Turkey's capital city, built with React Native and React Native Web.",
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
        "Indie astrology and journaling mobile app built end-to-end, including product design, mobile development, and Supabase backend integration.",
      link: {
        href: "",
      },
    },
    {
      title: "Sutbir",
      techStack: ["React Native", "TypeScript"],
      description:
        "React Native application for livestock management and government financial aid distribution to farmers.",
      link: {
        href: "",
      },
    },
    {
      title: "E-Vital",
      techStack: ["Java", "Android", "IoT"],
      description:
        "Android IoT application integrated with Arduino for wireless monitoring of human vital signs.",
      link: {
        href: "",
      },
    },
  ],
} as const;
