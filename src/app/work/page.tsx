import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { projects, projectAuthorshipLabels, projectStatusLabels } from "@/data/projects";
import "@/styles/case.css";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Work — BeBetter Development", "Проєкти BeBetter: самостійні розробки, комерційна frontend-робота та внесок у командні проєкти.", "/work");

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="case-page section-shell" id="main-content" tabIndex={-1}>
        <Link className="case-back" href="/#work">← На головну</Link>
        <header className="case-header">
          <p className="eyebrow" lang="en">Work / Exhibition</p>
          <h1>Проєкти та внесок.</h1>
          <p>Самостійні розробки й роботи у співпраці. Для кожного проєкту зазначаємо формат участі та поточний стан.</p>
        </header>
        {projects.map((project) => (
          <article className="case-section" key={project.slug}>
            <div>
              <p className="eyebrow">{project.number} · {project.year}</p>
              <h2 lang={project.titleLanguage ?? "en"}>{project.title}</h2>
            </div>
            <div>
              <p>{projectAuthorshipLabels[project.authorship]} · {projectStatusLabels[project.status]}</p>
              <p className="case-stack" lang="en">{project.category} · {project.role}</p>
              <p className="case-stack" lang={project.shortDescriptionLanguage}>{project.shortDescription}</p>
              {project.contribution && <p className="case-stack">Внесок: {project.contribution}</p>}
              <p className="case-stack">{project.technologies.join(" · ")}</p>
              <div className="case-links">
                {project.caseStudy && <Link href={`/work/${project.slug}`}>Переглянути кейс ↗</Link>}
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Відкрити сайт ↗</a>}
                {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">GitHub ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </main>
      <Footer />
    </>
  );
}
