const services = [
  {
    number: "01",
    title: "Business Websites",
    description: "Сайт, який знайомить із вашим бізнесом, пояснює пропозицію та допомагає клієнтам зв’язатися з вами.",
    details: "Індивідуальний дизайн · Адаптивна розробка · Базове SEO · Контактні інструменти",
  },
  {
    number: "02",
    title: "Landing Pages",
    description: "Сторінка для запуску продукту, послуги чи кампанії — зі зрозумілою пропозицією та шляхом до заявки.",
    details: "Структура пропозиції · Дизайн і розробка · Форма заявок · Підключення аналітики",
  },
  {
    number: "03",
    title: "Digital Tools",
    description: "Невеликий вебзастосунок, автоматизація або інтеграція, що вирішує конкретне завдання вашої команди.",
    details: "Вебінструменти · Інтеграції · Автоматизація процесів · Розвиток рішення",
  },
];

export function Studio() {
  return (
    <section className="studio section-shell" id="studio" aria-labelledby="studio-title">
      <div className="section-heading">
        <p className="eyebrow" lang="en">Studio / What we do</p>
        <p className="section-index">02 — 03 напрями</p>
      </div>
      <div className="studio-intro">
        <h2 id="studio-title">Від задуму до<br />цифрового результату.</h2>
        <p>Працюємо з малим бізнесом, незалежними спеціалістами та невеликими командами.
          Поєднуємо дизайн і розробку, щоб створювати рішення під реальні потреби.</p>
      </div>
      <div className="studio-services">
        {services.map((service) => (
          <article className="studio-service" key={service.number}>
            <p className="studio-service-number">{service.number}</p>
            <h3 lang="en">{service.title}</h3>
            <p className="studio-service-description">{service.description}</p>
            <p className="studio-service-details">{service.details}</p>
          </article>
        ))}
      </div>
      <div className="studio-bottom">
        <p>Починаємо з вашого завдання. Узгоджуємо обсяг, етапи та формат підтримки до початку роботи.</p>
        <a href="#contact">Обговорити проєкт <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
