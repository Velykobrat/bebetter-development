import Link from "next/link";
import { labProjects, getProjectStatusLabel } from "@/data/projects";

export function Lab() {
  return (
    <section className="lab section-shell" id="lab" aria-labelledby="lab-title">
      <div className="section-heading">
        <p className="eyebrow" lang="en">Lab / What comes next</p>
        <p className="section-index">03 — Власні розробки</p>
      </div>
      <div className="lab-intro">
        <h2 id="lab-title">Простір для<br />власних ідей.</h2>
        <p>У Studio створюємо рішення для клієнтів. У Lab розвиваємо власні
          продукти й досліджуємо технології через практичні проєкти.</p>
      </div>
      {labProjects.map((project) => <article className="lab-project" key={project.slug}>
        <div>
          <p className="eyebrow">{getProjectStatusLabel(project)}</p>
          <h3 lang="en">{project.title}</h3>
        </div>
        <div>
          <p>{project.labDescription}</p>
          <p className="lab-stack">{project.technologies.join(" · ")}</p>
          {project.caseStudy && <Link href={`/work/${project.slug}`}>Переглянути кейс ↗</Link>}
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Відкрити продукт ↗</a>}
          {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Переглянути вихідний код ↗</a>}
        </div>
      </article>)}
    </section>
  );
}
