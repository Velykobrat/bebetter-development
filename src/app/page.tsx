import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { SelectedWork } from "@/components/SelectedWork";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <SelectedWork />
        <Manifesto />
      </main>

      <Footer />
    </>
  );
}