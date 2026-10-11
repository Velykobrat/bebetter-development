export type ProjectGroup = "featured" | "commercial" | "lab";

export type ProjectStatus = "live" | "development";
export type ProjectCategory = "Business Website" | "Product Landing" | "Web Application" | "Promotional Website" | "Android Application";
export type ProjectAuthorship = "independent" | "team" | "commercial";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  live: "Опубліковано",
  development: "У розробці",
};

export const projectAuthorshipLabels: Record<ProjectAuthorship, string> = {
  independent: "Самостійна робота",
  team: "Командна робота",
  commercial: "Комерційна frontend-розробка",
};

export type ProjectCase = {
  task: string;
  approach: string;
  scope: string[];
  currentState: string;
};

export type Project = {
  slug: string;
  number: string;

  title: string;
  titleLanguage?: "uk" | "en";
  labDescription?: string;
  category: ProjectCategory;
  authorship: ProjectAuthorship;
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
  contribution?: string;
  caseStudy?: ProjectCase;
};

export const projects: Project[] = [
  {
    slug: "photographer-portfolio",
    number: "01",

    title: "Photographer Portfolio",
    category: "Business Website",
    authorship: "independent",
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
    caseStudy: {
      task: "Представити фотографа, його роботи та послуги в одному цифровому просторі. Структура має допомогти відвідувачу познайомитися з автором і перейти від перегляду портфоліо до звернення.",
      approach: "Редакційна подача з акцентом на фотографіях. Головна знайомить із брендом, а портфоліо дає роботам власний простір. Десктопний і мобільний вигляди зберігають спільну візуальну ідею.",
      scope: ["Дизайн та frontend-розробка", "Презентація фотографа й послуг", "Візуальне портфоліо", "Адаптивні макети для телефону й комп’ютера"],
      currentState: "Проєкт у розробці. Нижче показано поточний інтерфейс; вихідний код доступний на GitHub. Публічна live-демонстрація ще не додана.",
    },
  },

  {
    slug: "mini-printer-landing",
    number: "02",

    title: "Односторінковий інтернет-магазин",
    titleLanguage: "uk",
    category: "Product Landing",
    authorship: "independent",
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
    caseStudy: {
      task: "Створити односторінкову презентацію фізичного продукту: пояснити пропозицію та побудувати зрозумілий шлях від знайомства з мініпринтером до інтерфейсу замовлення.",
      approach: "Послідовна продуктова сторінка: презентація товару й перехід до дії. Дизайн і frontend реалізовано на HTML, CSS та JavaScript з адаптацією під різні екрани.",
      scope: ["Дизайн та frontend-розробка", "Продуктова презентація", "Інтерфейс замовлення", "Десктопна й мобільна версії"],
      currentState: "Проєкт у розробці. Скриншоти демонструють frontend та інтерфейс замовлення; обробку реальних заявок і бізнес-результати цим кейсом не підтверджено. Вихідний код доступний на GitHub.",
    },
  },

  {
    slug: "chess-journey",
    number: "03",

    title: "Chess Journey",
    labDescription: "Браузерний шаховий застосунок: робота з ігровою логікою, взаємодією та продуктовим інтерфейсом. Основа для розвитку самостійного цифрового продукту.",
    category: "Web Application",
    authorship: "independent",
    year: 2026,

    group: "lab",
    status: "development",

    shortDescription:
      "An interactive chess experience built as the foundation for a standalone digital product.",

    description:
      "A browser-based chess application focused on interaction, game logic and product experience rather than static presentation. The project is designed as a foundation that can evolve into a complete standalone application.",

    role: "Product Design & Development",

    technologies: ["JavaScript", "HTML", "CSS"],

    repository:
      "https://github.com/Velykobrat/chess-journey",

    featured: false,
    caseStudy: {
      task: "Розвивати браузерний шаховий застосунок як власний цифровий продукт, зосереджений на ігровій логіці та взаємодії користувача.",
      approach: "Самостійна продуктова розробка на JavaScript, HTML і CSS. Проєкт розглядається як основа для подальшого розвитку шахового досвіду в браузері.",
      scope: ["Продуктовий дизайн", "Frontend-розробка", "Робота з ігровою логікою та взаємодією"],
      currentState: "Проєкт у розробці в Lab. Вихідний код доступний на GitHub; публічну демонстрацію та скриншоти кейсу ще не додано.",
    },
  },

  {
    slug: "sweet-pop",
    number: "04",

    title: "Sweet Pop",
    category: "Promotional Website",
    authorship: "team",
    contribution: "Home і Gallery: адаптивні макети, мобільні та десктопні стилі, інтеграція ресурсів, покращення доступності й фінальне оформлення інтерфейсу. Дизайн надано команді.",
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
    category: "Promotional Website",
    authorship: "commercial",
    contribution: "Frontend-реалізація за наданим дизайнером макетом. Авторство дизайну не належить BeBetter.",
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
    category: "Promotional Website",
    authorship: "team",
    contribution: "Участь у командній frontend-розробці за наданим дизайном. Конкретні секції особистого внеску ще не описані.",
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
  {
    slug: "hundred", number: "07", title: "Hundred", category: "Web Application",
    authorship: "independent", year: 2026, group: "lab", status: "live", featured: false,
    shortDescription: "Візуальний інструмент для розподілу обмежених ресурсів: бюджету, часу або простору.",
    description: "Hundred показує ресурс як ціле, частини та доступний залишок. Будь-яку частину можна деталізувати; дані зберігаються локально в браузері.",
    labDescription: "Візуальна система розподілу ресурсів. Розкладіть бюджет, час чи простір на частини та деталізуйте кожну з них. Дані зберігаються у вашому браузері, без облікового запису й синхронізації між пристроями.",
    role: "Product Design & Development", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/Velykobrat/hundred", liveUrl: "https://hundred-pearl-ten.vercel.app",
  },
  {
    slug: "bemora", number: "08", title: "BeMora", category: "Android Application",
    authorship: "independent", year: 2026, group: "lab", status: "development", featured: false,
    shortDescription: "Android-застосунок для пошуку та обліку фільмів, книг та ігор.",
    description: "Власна бібліотека фільмів, книг та ігор із пошуком у каталогах TMDB, Open Library і RAWG та статусами перегляду, читання й проходження.",
    labDescription: "Android-застосунок для фільмів, книг та ігор. Пошук у каталогах, власна бібліотека й статуси: заплановано, у процесі, завершено або відкладено. Розроблено на Kotlin і Jetpack Compose.",
    role: "Product Development", technologies: ["Kotlin", "Jetpack Compose", "TMDB", "Open Library", "RAWG"],
    repository: "https://github.com/Velykobrat/BeMora",
  },
];

export const labProjects = projects.filter((project) => project.group === "lab");

export const featuredProjects = projects.filter(
  (project) => project.featured,
);

export const commercialProjects = projects.filter(
  (project) => project.group === "commercial",
);

export const caseProjects = projects.filter((project) => project.caseStudy);

export function getCaseProject(slug: string) {
  return caseProjects.find((project) => project.slug === slug);
}
