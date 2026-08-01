import { Nav } from "@/components/Nav";
import { EasterEgg } from "@/components/EasterEgg";
import { Hero } from "@/components/sections/Hero";
import { BeyondTheCode } from "@/components/sections/BeyondTheCode";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <BeyondTheCode />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <EasterEgg />
    </>
  );
}
