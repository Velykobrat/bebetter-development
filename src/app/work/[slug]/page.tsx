import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { caseProjects, getCaseProject, projectAuthorshipLabels, projectStatusLabels } from "@/data/projects";
import "@/styles/case.css";
import { pageMetadata } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getCaseProject((await params).slug);
  if (!project?.caseStudy) notFound();
  return pageMetadata(`${project.title} — BeBetter Development`, project.caseStudy.task, `/work/${project.slug}`, project.media?.heroDesktop);
}

export default async function ProjectCasePage({ params }: Props) {
  const project = getCaseProject((await params).slug);
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;
  const views = project.media ? [
    { src: project.media.heroDesktop, label: "Головна — десктоп", mobile: false },
    { src: project.media.heroMobile, label: "Головна — телефон", mobile: true },
    { src: project.media.secondaryDesktop, label: "Додатковий вигляд — десктоп", mobile: false },
    { src: project.media.secondaryMobile, label: "Додатковий вигляд — телефон", mobile: true },
  ] : [];
  return (
    <>
      <Header />
      <main className="case-page section-shell" id="main-content" tabIndex={-1}>
        <Link className="case-back" href="/#work">← Усі вибрані роботи</Link>
        <header className="case-header">
          <p className="eyebrow" lang="en">Work / {project.category}</p>
          <h1 lang={project.titleLanguage ?? "en"}>{project.title}</h1>
          <dl className="case-facts">
            <div><dt>Рік</dt><dd>{project.year}</dd></div>
            <div><dt>Формат</dt><dd>{projectAuthorshipLabels[project.authorship]}</dd></div>
            <div><dt>Роль</dt><dd lang="en">{project.role}</dd></div>
            <div><dt>Статус</dt><dd>{projectStatusLabels[project.status]}</dd></div>
          </dl>
        </header>
        <section className="case-section" aria-labelledby="task-title">
          <h2 id="task-title">Завдання</h2><p>{study.task}</p>
        </section>
        <section className="case-section" aria-labelledby="solution-title">
          <h2 id="solution-title">Підхід і реалізація</h2>
          <div><p>{study.approach}</p><ul>{study.scope.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        {views.length > 0 && <section aria-labelledby="screens-title">
          <h2 className="case-gallery-heading" id="screens-title">Інтерфейс на різних екранах</h2>
          <div className="case-gallery">
            {views.map((view) => (
              <figure className={view.mobile ? "case-screen case-screen-mobile" : "case-screen"} key={view.src}>
                <div className="case-screen-image">
                  <Image src={view.src} alt={`${project.title}: ${view.label}`} fill
                    sizes={view.mobile ? "(max-width: 768px) 90vw, 28vw" : "(max-width: 768px) 90vw, 59vw"}
                    />
                </div>
                <figcaption>{view.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>}
        <section className="case-section" aria-labelledby="state-title">
          <h2 id="state-title">Поточний стан</h2>
          <div>
            <p>{study.currentState}</p>
            <p className="case-stack">Технології: {project.technologies.join(" · ")}</p>
            <div className="case-links">
              {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Вихідний код на GitHub ↗</a>}
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live-демонстрація ↗</a>}
            </div>
          </div>
        </section>
        <nav className="case-next" aria-label="Інші кейси">
          {caseProjects.filter((item) => item.slug !== project.slug).map((item) => (
            <Link href={`/work/${item.slug}`} key={item.slug}>Інший кейс: <span lang={item.titleLanguage ?? "en"}>{item.title}</span> ↗</Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
