import photographerScreens from "./photographer-screens.json";
import hundredScreens from "./hundred-screens.json";

export type ProjectGroup = "featured" | "commercial" | "lab";

export type ProjectStatus = "live" | "development";
export type ProjectCategory = "Business Website" | "Product Landing" | "Web Application" | "Promotional Website" | "Android Application";
export type ProjectAuthorship = "independent" | "team" | "commercial";

export const projectStatusLabels: Record<ProjectStatus, string> = {
  live: "Опубліковано",
  development: "У розробці",
};

export const projectAuthorshipLabels: Record<ProjectAuthorship, string> = {
  independent: "Авторський проєкт",
  team: "Командна робота",
  commercial: "Комерційна frontend-розробка",
};

export type ProjectCase = {
  task: string;
  approach: string;
  scope: string[];
  currentState: string;
  technologyNotes?: string;
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
  version?: string;

  shortDescription: string;
  cardDescription?: string;
  cardContribution?: string;
  shortDescriptionLanguage: "uk" | "en";
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
  cover?: string;
  caseScreens?: { src: string; label: string; mobile: boolean; width: number; height: number }[];

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
    cardDescription: "Двомовний сайт фотографа: серії робіт, журнал і форма звернення.",
    category: "Business Website",
    authorship: "independent",
    year: 2026,

    group: "featured",
    status: "live",
    version: "1.3.0",

    shortDescriptionLanguage: "uk",
    shortDescription:
      "Завершений двомовний сайт фотографа: портфоліо з категоріями та серіями робіт, повноекранний перегляд фотографій, журнал і форма звернення.",

    description:
      "Цифровий простір фотографа, у якому роботи, авторський голос і звернення клієнта утворюють єдиний досвід. Сайт поєднує українську та англійську версії, портфоліо, журнал і керування контентом через Sanity.",

    role: "Design & Development",

    technologies: ["React", "TypeScript", "Vite", "Sanity"],

    media: {
      heroDesktop:
        "/projects/photographer/updated/photographer-home-desktop.webp",
      heroMobile:
        "/projects/photographer/updated/photographer-home-mobile-uk.webp",
      secondaryDesktop:
        "/projects/photographer/updated/photographer-portfolio-desktop.webp",
      secondaryMobile:
        "/projects/photographer/updated/photographer-portfolio-mobile.webp",
    },
    caseScreens: photographerScreens,

    repository:
      "https://github.com/Velykobrat/photographer-portfolio",

    featured: true,
    caseStudy: {
      task: "Створити цифровий простір фотографа, де головну роль відіграють його роботи. Від першого враження на головній до перегляду окремої серії та звернення — сайт допомагає познайомитися з автором і обрати формат зйомки.",
      approach: "Редакційна подача: великі фотографії, виразна типографіка та стримана навігація. Портфоліо організовано за категоріями й серіями, а повноекранний перегляд дає змогу зосередитися на роботах. Журнал розкриває авторський погляд, форма збирає деталі майбутньої зйомки. Українська й англійська версії адаптовані до комп’ютера та телефона.",
      scope: ["Українська та англійська версії", "Портфоліо з категоріями та окремими серіями", "Повноекранний перегляд фотографій із перемиканням кадрів", "Журнал з історіями та інтерв’ю", "Форма звернення з типом зйомки, датою, місцем і описом ідеї", "Керування серіями фотографій через Sanity", "Адаптивний інтерфейс для комп’ютера та телефона"],
      currentState: "Завершена версія сайту — 1.3.0. Кейс показує готовий інтерфейс і основні сценарії: знайомство з фотографом, перегляд портфоліо та журналу, підготовка звернення. Скриншоти демонструють десктопну й мобільну версії та керування серіями в Sanity.",
      technologyNotes: "React формує компоненти інтерфейсу, TypeScript додає перевірку типів, Vite використовується для розробки та збірки. Sanity забезпечує керування контентом серій фотографій через окремий редактор.",
    },
  },

  {
    slug: "mini-printer-landing",
    number: "02",

    title: "Односторінковий інтернет-магазин",
    cardDescription: "Презентація мініпринтера зі зрозумілим переходом до замовлення.",
    titleLanguage: "uk",
    category: "Product Landing",
    authorship: "independent",
    year: 2026,

    group: "featured",
    status: "development",

    shortDescriptionLanguage: "en",
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

    shortDescriptionLanguage: "en",
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
    cardDescription: "Адаптивна верстка з окремими стилями для телефона й комп’ютера. SCSS допомагає організувати оформлення, а графічні ресурси передають яскраву стилістику гри. Галерея на JavaScript дає змогу переглядати ігрові екрани та перемикати зображення. Інтерфейс реалізовано за макетом дизайнера з увагою до композиції й доступності. Для розробки та збірки використано Vite.",
    category: "Promotional Website",
    authorship: "team",
    contribution: "Home і Gallery: адаптивні макети, мобільні та десктопні стилі, інтеграція ресурсів, покращення доступності й фінальне оформлення інтерфейсу. Дизайн надано команді.",
    year: 2024,

    group: "featured",
    status: "live",

    shortDescriptionLanguage: "uk",
    shortDescription:
      "Адаптивний промосайт мобільної гри Sweet Pop, реалізований командою за готовим макетом дизайнера. Власний внесок — frontend секцій Home і Gallery.",

    description:
      "Командна робота з реалізації дизайнерського макета у вебінтерфейсі. Власний внесок охоплює Home і Gallery: розмітку, адаптивні стилі, інтеграцію графічних ресурсів і фінальне оформлення. Авторство дизайну належить дизайнеру.",

    role: "Frontend Development",

    technologies: ["HTML", "SCSS", "JavaScript", "Vite"],
    cover: "/projects/sweet-pop/updated/sweet-pop-cover-desktop.webp",

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

    shortDescriptionLanguage: "en",
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

    shortDescriptionLanguage: "en",
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
    shortDescriptionLanguage: "uk",
    shortDescription: "Візуальний інструмент для розподілу обмежених ресурсів: бюджету, часу або простору.",
    description: "Hundred показує ресурс як ціле, частини та доступний залишок. Будь-яку частину можна деталізувати; дані зберігаються локально в браузері.",
    labDescription: "Побачте ресурс як ціле: розподіліть бюджет, час чи простір на частини та відкривайте кожну для деталізації. Візуальна карта показує пропорції й доступний залишок. Дані зберігаються у вашому браузері, без облікового запису й синхронізації між пристроями.",
    role: "Product Design & Development", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/Velykobrat/hundred", liveUrl: "https://hundred-pearl-ten.vercel.app",
    cover: "/projects/hundred/hundred-home-desktop.webp",
    caseScreens: hundredScreens,
    caseStudy: {
      task: "Допомогти побачити обмежений ресурс як ціле та зрозуміти місце кожної частини. Hundred працює з бюджетом, часом, площею чи іншою вимірюваною величиною: користувач задає обсяг і одиницю, а потім розподіляє ресурс відповідно до власних потреб.",
      approach: "Інтерфейс поєднує числові значення з візуальною картою: площа кожного блока відображає його частку ресурсу. Будь-яку частину можна відкрити як окреме ціле й деталізувати далі. Показники розподілу та вільного залишку допомагають оцінити стан на кожному рівні.",
      scope: ["Створення ресурсу з назвою, обсягом та одиницею виміру", "Візуальна карта частин із пропорціями та відсотками", "Вкладений розподіл: деталізація кожної частини", "Додавання, редагування та видалення частин", "Відображення розподіленого обсягу та вільного залишку", "Локальне збереження даних у браузері", "Адаптивний інтерфейс для комп’ютера й телефона"],
      currentState: "Hundred опубліковано як власний продукт Lab. Скриншоти показують створення ресурсу, розподіл місячного бюджету та деталізацію оренди. Дані зберігаються на поточному пристрої в браузері; облікові записи й синхронізація між пристроями не передбачені.",
      technologyNotes: "Next.js і React формують застосунок та компоненти інтерфейсу. TypeScript використано для типізації даних, Tailwind CSS — для адаптивного оформлення. Локальне збереження дозволяє працювати без облікового запису.",
    },
  },
  {
    slug: "bemora", number: "08", title: "BeMora", category: "Android Application",
    authorship: "independent", year: 2026, group: "lab", status: "development", featured: false,
    shortDescriptionLanguage: "uk",
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

export function getProjectStatusLabel(project: Project): string {
  return project.version ? `Версія ${project.version}` : projectStatusLabels[project.status];
}
