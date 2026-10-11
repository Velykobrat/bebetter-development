import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { SelectedWork } from "@/components/SelectedWork";
import { Studio } from "@/components/Studio";
import { About } from "@/components/About";
import { Lab } from "@/components/Lab";

export default function Home() {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <Studio />
        <Manifesto />
        <Lab />
        <About />
      </main>

      <Footer />
    </>
  );
}
