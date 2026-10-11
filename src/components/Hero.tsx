export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow" lang="en">Independent Technology Brand & Digital Studio</p>

      <h1 lang="en">
        Technology
        <br />
        to Be Better.
      </h1>

      <div className="hero-intro">
        <p className="hero-copy">
          Створюємо сайти, цифрові продукти й практичні інструменти,
          які допомагають людям і бізнесу рухатися вперед.
        </p>
        <div className="hero-actions">
          <a className="hero-cta" href="#contact">Обговорити проєкт <span aria-hidden="true">↗</span></a>
          <a className="hero-work-link" href="#work">Переглянути роботи <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <div className="hero-meta">
        <span lang="en">Design with purpose · Technology with value</span>
        <span lang="en">Independent · Est. 2026</span>
      </div>
    </section>
  );
}
