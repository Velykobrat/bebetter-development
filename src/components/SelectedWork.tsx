import Image from "next/image";
import Link from "next/link";
import { featuredProjects, projectAuthorshipLabels, getProjectStatusLabel } from "@/data/projects";
import { projectImage } from "@/lib/project-images";

export function SelectedWork() {
  return (
    <section className="work section-shell" id="work">
      <div className="section-heading">
        <p className="eyebrow" lang="en">Selected work</p>
        <p className="section-index"><Link href="/work">Усі проєкти ↗</Link> · 01 — {String(featuredProjects.length).padStart(2, "0")}</p>
      </div>
      <div className="featured-projects">
        {featuredProjects.map((project, index) => {
          const cover = project.cover ?? project.media?.heroDesktop ?? project.gallery?.[0];
          return (
            <article className="featured-project" key={project.slug}>
              <div className={"work-cover work-cover--" + project.slug}>
                <div className="work-cover-meta"><span>{String(index + 1).padStart(2, "0")}</span><span lang="en">{project.category}</span></div>
                {cover ? <div className={"work-cover-frame" + (project.gallery && !project.cover ? " work-cover-frame--portrait" : "")}>
                  <Image src={projectImage(cover)} alt={"Інтерфейс проєкту " + project.title} fill sizes="(max-width: 768px) 84vw, (max-width: 1100px) 42vw, 28vw" />
                </div> : <p className="work-cover-name">{project.title}</p>}
                <div className="work-cover-meta"><span>{project.year}</span><span>{getProjectStatusLabel(project)}</span></div>
              </div>
              <div className="project-info">
                <div className="project-title-group">
                  <p className="project-type" lang="en">{project.category}</p>
                  <h2 lang={project.titleLanguage ?? "en"}>{project.title}</h2>
                  <p className="project-role">{projectAuthorshipLabels[project.authorship]} · <span lang="en">{project.role}</span></p>
                </div>
                <div className="project-description-group">
                  <p className="project-description" lang={project.cardDescription ? "uk" : project.shortDescriptionLanguage}>{project.cardDescription ?? project.shortDescription}</p>
                  {project.cardContribution && <p className="project-contribution">Внесок: {project.cardContribution}</p>}
                  <p className="project-technologies" lang="en">{project.technologies.join(" · ")}</p>
                  <div className="project-links">
                    {project.caseStudy && <Link href={"/work/" + project.slug}>Переглянути кейс ↗</Link>}
                    {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Відкрити сайт ↗</a>}
                    {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
