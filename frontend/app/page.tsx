import { Navigation } from "@/components/portfolio/navigation";
import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
