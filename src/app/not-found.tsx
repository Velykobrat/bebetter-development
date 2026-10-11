import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell" id="main-content" tabIndex={-1}>
      <p className="eyebrow">404</p>
      <h1>Сторінку не знайдено</h1>
      <p>Перевірте адресу або поверніться до проєктів BeBetter.</p>
      <Link href="/work">Переглянути проєкти →</Link>
    </main>
  );
}
