import Image from "next/image";
import Link from "next/link";
import { projectImage } from "@/lib/project-images";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/#top" aria-label="BeBetter Development home">
        <Image
          src={projectImage("/brand/logo-icon.svg")}
          alt=""
          width={34}
          height={34}
          priority
        />

        <span>BEBETTER</span>
      </Link>

      <nav className="nav" aria-label="Основна навігація" lang="en">
        <Link href="/#work">Work</Link>
        <Link href="/#studio">Studio</Link>
        <Link href="/#lab">Lab</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
