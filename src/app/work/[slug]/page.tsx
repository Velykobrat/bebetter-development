import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { caseProjects, getCaseProject, projectAuthorshipLabels, getProjectStatusLabel } from "@/data/projects";
import "@/styles/case.css";
import { pageMetadata } from "@/lib/site";
import { projectImage } from "@/lib/project-images";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getCaseProject((await params).slug);
  if (!project?.caseStudy) notFound();
  const cover = project.cover ?? project.media?.heroDesktop;
  return pageMetadata(`${project.title} — BeBetter Development`, project.caseStudy.task, `/work/${project.slug}`, cover ? projectImage(cover) : undefined);
}

export default async function ProjectCasePage({ params }: Props) {
  const project = getCaseProject((await params).slug);
  if (!project?.caseStudy) notFound();
  const study = project.caseStudy;
  const views = project.caseScreens ? project.caseScreens.filter((screen) => screen.src !== project.cover && screen.src !== project.media?.heroDesktop && screen.src !== project.media?.heroMobile) : project.media ? [
    { src: project.media.secondaryDesktop, label: "Додатковий вигляд — десктоп", mobile: false },
    { src: project.media.secondaryMobile, label: "Додатковий вигляд — телефон", mobile: true },
  ] : [];
  const heroDesktop = project.caseScreens?.find((screen) => screen.src === project.media?.heroDesktop);
  const heroMobile = project.caseScreens?.find((screen) => screen.src === project.media?.heroMobile);
  const coverScreen = project.caseScreens?.find((screen) => screen.src === project.cover);
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
            <div><dt>Статус</dt><dd>{getProjectStatusLabel(project)}</dd></div>
          </dl>
        </header>
        <div className="case-intro">
          <p className="eyebrow">Ідея проєкту</p>
          <p>{study.task}</p>
        </div>
        {project.cover && <figure className={`case-cover case-cover--${project.slug}`}>
          <div className="case-hero-image" style={coverScreen ? { aspectRatio: `${coverScreen.width} / ${coverScreen.height}` } : undefined}>
            <Image src={projectImage(project.cover)} alt={`${project.title}: ${coverScreen?.label ?? "Головна — десктоп"}`} fill sizes="(max-width: 768px) 84vw, 84vw" />
          </div>
          <figcaption>{coverScreen?.label ?? "Головна — десктоп"}</figcaption>
        </figure>}
        {project.media && <div className="case-hero">
          <figure>
            <div className="case-hero-image" style={heroDesktop ? { aspectRatio: `${heroDesktop.width} / ${heroDesktop.height}` } : undefined}>
              <Image src={projectImage(project.media.heroDesktop)} alt={`Головний екран ${project.title}: десктоп`} fill sizes="(max-width: 768px) 84vw, 60vw" />
            </div>
            <figcaption>Головна — десктоп</figcaption>
          </figure>
          <figure className="case-hero-mobile">
            <div className="case-hero-image" style={heroMobile ? { aspectRatio: `${heroMobile.width} / ${heroMobile.height}` } : undefined}>
              <Image src={projectImage(project.media.heroMobile)} alt={`Головний екран ${project.title}: телефон`} fill sizes="(max-width: 768px) 72vw, 20vw" />
            </div>
            <figcaption>Головна — телефон</figcaption>
          </figure>
        </div>}
        <section className="case-section" aria-labelledby="task-title">
          <h2 id="task-title">01 / Контекст</h2><p>{study.currentState}</p>
        </section>
        <section className="case-section" aria-labelledby="solution-title">
          <h2 id="solution-title">02 / Рішення</h2>
          <div><p>{study.approach}</p><ul>{study.scope.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </section>
        {views.length > 0 && <section aria-labelledby="screens-title">
          <h2 className="case-gallery-heading" id="screens-title">Інтерфейс на різних екранах</h2>
          <div className={project.caseScreens ? "case-gallery case-gallery--screens" : "case-gallery"}>
            {views.map((view) => (
              <figure className={view.mobile ? "case-screen case-screen-mobile" : "case-screen"} key={view.src}>
                <div className="case-screen-image" style={"width" in view && "height" in view ? { aspectRatio: `${view.width} / ${view.height}` } : undefined}>
                  <Image src={projectImage(view.src)} alt={`${project.title}: ${view.label}`} fill
                    sizes={view.mobile ? "(max-width: 768px) 84vw, 26vw" : project.caseScreens ? "(max-width: 768px) 84vw, 84vw" : "(max-width: 768px) 90vw, 59vw"}
                    />
                </div>
                <figcaption>{view.label}</figcaption>
              </figure>
            ))}
          </div>
        </section>}
        <section className="case-section" aria-labelledby="state-title">
          <h2 id="state-title">03 / Технології та посилання</h2>
          <div>
            <p className="case-stack">Технології: {project.technologies.join(" · ")}</p>
            {study.technologyNotes && <p className="case-stack">{study.technologyNotes}</p>}
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
