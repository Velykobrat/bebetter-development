export type ProjectGroup = "featured" | "commercial";

export type ProjectStatus = "live" | "development";

export type Project = {
  slug: string;
  number: string;

  title: string;
  category: string;
  year: number;

  group: ProjectGroup;
  status: ProjectStatus;

  shortDescription: string;
  description: string;

  role: string;
  technologies: string[];

  media?: {
    heroDesktop: string;
    heroMobile: string;
    secondaryDesktop: string;
    secondaryMobile: string;
  };

  gallery?: string[];

  repository?: string;
  liveUrl?: string;

  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "photographer-portfolio",
    number: "01",

    title: "Photographer Portfolio",
    category: "Business Website",
    year: 2026,

    group: "featured",
    status: "development",

    shortDescription:
      "A digital presence for a professional photographer, built to present the brand, expertise and work while turning visitors into enquiries.",

    description:
      "A complete business website designed around the identity and work of a professional photographer. The experience combines portfolio presentation, services, expertise and lead generation in a focused editorial interface.",

    role: "Design & Development",

    technologies: ["React", "TypeScript", "Vite"],

    media: {
      heroDesktop:
        "/projects/photographer/photographer-hero-desktop.jpg",
      heroMobile:
        "/projects/photographer/photographer-hero-mobile.jpg",
      secondaryDesktop:
        "/projects/photographer/photographer-portfolio-desktop.jpg",
      secondaryMobile:
        "/projects/photographer/photographer-portfolio-mobile.jpg",
    },

    repository:
      "https://github.com/Velykobrat/photographer-portfolio",

    featured: true,
  },

  {
    slug: "mini-printer-landing",
    number: "02",

    title: "Mini Printer",
    category: "Product Landing",
    year: 2026,

    group: "featured",
    status: "development",

    shortDescription:
      "A conversion-focused landing page designed to turn product interest into customer enquiries.",

    description:
      "A focused one-page sales experience for a physical product. The project combines product presentation, conversion-oriented structure and an enquiry flow designed to move visitors from interest to action.",

    role: "Design & Development",

    technologies: ["HTML", "CSS", "JavaScript"],

    media: {
      heroDesktop:
        "/projects/mini-printer/mini-printer-hero-desktop.jpg",
      heroMobile:
        "/projects/mini-printer/mini-printer-hero-mobile.jpg",
      secondaryDesktop:
        "/projects/mini-printer/mini-printer-order-desktop.jpg",
      secondaryMobile:
        "/projects/mini-printer/mini-printer-order-mobile.jpg",
    },

    repository:
      "https://github.com/Velykobrat/mini-printer-landing",

    featured: true,
  },

  {
    slug: "chess-journey",
    number: "03",

    title: "Chess Journey",
    category: "Web Application",
    year: 2026,

    group: "featured",
    status: "development",

    shortDescription:
      "An interactive chess experience built as the foundation for a standalone digital product.",

    description:
      "A browser-based chess application focused on interaction, game logic and product experience rather than static presentation. The project is designed as a foundation that can evolve into a complete standalone application.",

    role: "Product Design & Development",

    technologies: ["JavaScript", "HTML", "CSS"],

    repository:
      "https://github.com/Velykobrat/chess-journey",

    featured: true,
  },

  {
    slug: "sweet-pop",
    number: "04",

    title: "Sweet Pop",
    category: "Team Frontend Project",
    year: 2024,

    group: "featured",
    status: "live",

    shortDescription:
      "A responsive promotional website for a mobile puzzle game, developed as part of a team project from a provided design.",

    description:
      "A team frontend project built from a provided design for the Sweet Pop mobile puzzle game. My contribution included the Home and Gallery sections, responsive layouts, mobile and desktop styling, asset integration, accessibility improvements and final UI polish.",

    role: "Frontend Development",

    technologies: ["HTML", "SCSS", "JavaScript", "Vite"],

    gallery: [
      "/projects/sweet-pop/sweet-pop-01.png",
      "/projects/sweet-pop/sweet-pop-02.png",
      "/projects/sweet-pop/sweet-pop-03.png",
      "/projects/sweet-pop/sweet-pop-04.png",
      "/projects/sweet-pop/sweet-pop-05.png",
    ],

    repository:
      "https://github.com/Velykobrat/Sweet-Pop",

    liveUrl:
      "https://velykobrat.github.io/Sweet-Pop/",

    featured: true,
  },

  {
    slug: "yukon-family-adventure",
    number: "05",

    title: "Yukon Family Adventure",
    category: "Commercial Development",
    year: 2026,

    group: "commercial",
    status: "live",

    shortDescription:
      "A commercial frontend project developed from a designer-provided layout.",

    description:
      "A responsive commercial web implementation focused on accurately translating a supplied design into a functional digital experience.",

    role: "Frontend Development",

    technologies: ["React", "JavaScript"],

    repository:
      "https://github.com/Velykobrat/Yukon-Family-Adventure",

    featured: false,
  },

  {
    slug: "project-twenty-team",
    number: "06",

    title: "Project Twenty Team",
    category: "Team Development",
    year: 2026,

    group: "commercial",
    status: "live",

    shortDescription:
      "A collaborative frontend project developed as part of a team from a provided design.",

    description:
      "A team-based commercial development project focused on implementing a supplied interface design while working within a shared frontend workflow.",

    role: "Frontend Developer",

    technologies: ["HTML", "CSS", "JavaScript"],

    repository:
      "https://github.com/vladok05/project-twenty-team",

    liveUrl:
      "https://vladok05.github.io/project-twenty-team/",

    featured: false,
  },
];

export const featuredProjects = projects.filter(
  (project) => project.group === "featured",
);

export const commercialProjects = projects.filter(
  (project) => project.group === "commercial",
);