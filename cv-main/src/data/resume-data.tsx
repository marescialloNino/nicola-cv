import {
  KireyLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

interface Project {
  title: string;
  techStack: string[];
  description: string;
  logo: any; 
  link?: {
    label: string;
    href: string;
  };
}

interface Education {
  school: string;
  degree: string;
  start: string;
  end?: string;
}

interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo?: any; // Adjust based on your actual usage, e.g., string for logo URLs or a specific component type for logos
  start: string;
  end?: string;
  description: string;
}

export interface ResumeData {
  name: string;
  initials?: string;
  location: string;
  locationLink?: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl?: string;
  contact: {
    email?: string;
    tel?: string;
    social?: Array<{
      name: string;
      url: string;
      icon: typeof GitHubIcon | typeof LinkedInIcon | typeof XIcon; // Example, adjust as necessary
    }>;
  };
  education?: Education[];
  work?: WorkExperience[];
  skills: string[];
  projects?: Project[]; // Marked as optional
}

export const RESUME_DATA: ResumeData = {
  name: "Nicola Schiavo",
  initials: "NS",
  location: "Venice, Italy",
  locationLink: "https://www.google.com/maps/place/Venice",
  avatarUrl: "CvPhoto",
  about:
    "Electrical Engineering, Applied Mathematics and Software Development",
  summary:
    "As a software developer, my career in tech is just starting out, and I'm loving it, I'm also finishing a master degree in mathematical engineering, and that's the things i like doing the most. I enjoy working in an enviroment where I can test myself on new problems and challenges, pushing me to learn and become every day a little better.",
  /* avatarUrl: "CvPhoto", */
  /* personalWebsiteUrl: "https://jarocki.me", */
  contact: {
    email: "nicola.schiavoo@gmail.com",
    tel: "+393453999183",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/marescialloNino",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicola-schiavo-a3281b271/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Padua",
      degree: "Electrical engineering Bachelor's Degree ",
      start: "2019",
      end: "2023",
    },
    {
      school: "University of Padua",
      degree: "Mathematical engineering Masters Degree",
      start: "2023",
      end: "Now",
    }
  ],
  work: [
    {
      company: "Kirey Group SRL",
      link: "https://www.kireygroup.com",
      badges: ["Remote"],
      title: "Junior Software Developer",
      logo: KireyLogo,
      start: "April 2023",
      end: "Now",
      description:
        "I worked on several Java/Spring Boot web applications, mainly on an internal IOT platform for the industry sector (built from scratch), where i worked with several technologies, including Python, MongoDB, Docker, MQTT messaging protocol, LoRa Wan protocol, edgeX and Grafana.",
    },
  ],
  skills: [
    "Java",
    "SpringBoot",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Grafana",
  ],
  
} as const;
