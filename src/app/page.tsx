import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="md:pr-24">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Resume />
      <Testimonials />
      <Contact />
    </main>
  );
}