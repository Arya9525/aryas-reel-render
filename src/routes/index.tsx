import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SocialSidebar } from "@/components/SocialSidebar";
import { IntroTitleScreen } from "@/components/sections/IntroTitleScreen";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Activities } from "@/components/sections/Activities";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const title = "Arya Kumar Mishra — Portfolio";
const description =
  "Portfolio of Arya Kumar Mishra, a Full Stack & Mobile App Developer building modern web and mobile applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <SocialSidebar />
      <IntroTitleScreen />
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Capabilities />
      <Education />
      <Experience />
      <Certifications />
      <Activities />
      <SoftSkills />
      <Contact />
      <Footer />
    </main>
  );
}
