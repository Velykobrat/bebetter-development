import { projects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section className="work section-shell" id="work">
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <p className="section-index">01 — 02</p>
      </div>

      <div className="featured-projects">
        {projects.map((project) => (
          <article className="featured-project" key={project.number}>
            <div className="project-visual">
              <span className="visual-number">{project.number}</span>

              <span className="visual-word">
                {project.title.split(" ")[0]}
              </span>

              <span className="visual-type">{project.type}</span>
            </div>

            <div className="project-info">
              <div>
                <p className="project-type">{project.type}</p>
                <h2>{project.title}</h2>
              </div>

              <p className="project-description">
                {project.description}
              </p>

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