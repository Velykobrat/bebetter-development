import Image from "next/image";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="BeBetter Development home">
        <Image
          src="/brand/logo-icon.svg"
          alt=""
          width={34}
          height={34}
          priority
        />

        <span>BEBETTER</span>
      </a>

      <nav className="nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#lab">Lab</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}