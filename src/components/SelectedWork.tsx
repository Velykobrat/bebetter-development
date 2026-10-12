import Image from "next/image";
import Link from "next/link";

import { featuredProjects, projectAuthorshipLabels, projectStatusLabels } from "@/data/projects";
import { ProjectCarousel } from "@/components/ProjectCarousel";

export function SelectedWork() {
  return (
    <section className="work section-shell" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>

        <p className="section-index">
          <Link href="/work">Усі проєкти ↗</Link> · 01 — {String(featuredProjects.length).padStart(2, "0")}
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project) => (
          <article className="featured-project" key={project.slug}>
            <div
              className={`project-showcase ${
                project.gallery
                  ? "project-showcase--gallery"
                  : ""
              }`}
            >
              <div className="project-showcase-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              {project.gallery ? (
                <ProjectCarousel
                  images={project.gallery}
                  title={project.title}
                />
              ) : project.media ? (
                <div className="project-media">
                  <div className="project-media-primary">
                    <Image
                      className="project-image-desktop"
                      src={project.media.heroDesktop}
                      alt={`${project.title} homepage`}
                      fill
                      sizes="(max-width: 768px) 1px, 82vw"
                    />

                    <Image
                      className="project-image-mobile"
                      src={project.media.heroMobile}
                      alt={`${project.title} homepage`}
                      fill
                      sizes="(max-width: 768px) 76vw, 1px"
                    />
                  </div>

                  <div className="project-media-secondary">
                    <Image
                      className="project-image-desktop"
                      src={project.media.secondaryDesktop}
                      alt={`${project.title} secondary view`}
                      fill
                      sizes="(max-width: 768px) 1px, 34vw"
                    />

                    <Image
                      className="project-image-mobile"
                      src={project.media.secondaryMobile}
                      alt={`${project.title} secondary view`}
                      fill
                      sizes="(max-width: 768px) 42vw, 1px"
                    />
                  </div>
                </div>
              ) : (
                <div className="project-showcase-title">
                  <span>{project.title}</span>
                </div>
              )}

              <div className="project-showcase-bottom">
                <span>{project.year}</span>
                <span>{projectStatusLabels[project.status]}</span>
              </div>
            </div>

            <div className="project-info">
              <div className="project-title-group">
                <p className="project-type">
                  {project.category} · {project.year}
                </p>

                <h2 lang={project.titleLanguage ?? "en"}>{project.title}</h2>

                <p className="project-role">
                  {projectAuthorshipLabels[project.authorship]} · {project.role}
                </p>
              </div>

              <div className="project-description-group">
                <p className="project-description" lang={project.shortDescriptionLanguage}>
                  {project.shortDescription}
                </p>
                {project.contribution && <p className="project-contribution">Внесок: {project.contribution}</p>}

                <p className="project-technologies">
                  {project.technologies.join(" · ")}
                </p>

                {(project.caseStudy || project.liveUrl || project.repository) && (
                  <div className="project-links">
                    {project.caseStudy && <Link href={`/work/${project.slug}`}>Переглянути кейс ↗</Link>}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Відкрити сайт ↗
                      </a>
                    )}

                    {project.repository && (
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </div>

              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
