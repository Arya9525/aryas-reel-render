import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SocialSidebar } from "@/components/SocialSidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Education } from "@/components/sections/Education";
import { SoftSkills } from "@/components/sections/SoftSkills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

const title = "Arya Kumar Mishra — Full Stack Web Developer";
const description =
  "Portfolio of Arya Kumar Mishra, a Full Stack Web Developer and MCA student at SRM IST building MERN-stack applications.";

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
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Capabilities />
      <Education />
      <SoftSkills />
      <Contact />
      <Footer />
    </main>
  );
}
