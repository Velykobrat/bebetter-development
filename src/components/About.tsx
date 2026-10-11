const principles = [
  { title: "Design with purpose", description: "Дизайн пояснює пропозицію, допомагає користувачу й створює правильне враження." },
  { title: "Technology with value", description: "Кожна функція вирішує конкретне завдання людей або бізнесу." },
  { title: "Built to evolve", description: "Продумуємо підтримку та наступні кроки розвитку рішення." },
  { title: "Honest development", description: "Відкрито пояснюємо обсяг роботи, можливості, обмеження та власний внесок." },
];

export function About() {
  return (
    <section className="about section-shell" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="eyebrow" lang="en">About BeBetter</p>
        <p className="section-index">04 — Людина та принципи</p>
      </div>
      <div className="about-intro">
        <h2 id="about-title">Незалежний бренд.<br />Особиста відповідальність.</h2>
        <div className="about-founder">
          <p className="about-founder-label">Засновник</p>
          <h3>Віталій Великобрат</h3>
          <p>BeBetter Development поєднує роботу над клієнтськими рішеннями
            та розвиток власних цифрових продуктів.</p>
          <p>За брендом стоїть засновник. За потреби до окремих проєктів
            можуть долучатися інші спеціалісти — формат співпраці та ролі
            узгоджуємо заздалегідь.</p>
        </div>
      </div>
      <div className="about-principles">
        {principles.map((principle) => (
          <article className="about-principle" key={principle.title}>
            <h3 lang="en">{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </div>
      <p className="about-note">Це наші стандарти роботи. Підтверджуємо їх реальними проєктами та відкритим описом результатів.</p>
    </section>
  );
}
