import { Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SkillGrid from "@/components/sections/SkillGrid";
import ProjectGallery from "@/components/sections/ProjectGallery";
import { ProjectsSkeleton } from "@/components/ui/Skeletons";
import Timeline from "@/components/sections/Timeline";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Global ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-sky-500/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[400px] rounded-full bg-sky-400/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SkillGrid />

        {/* Projects section with Suspense boundary */}
        <section id="projects" className="relative py-24">
          <Suspense fallback={<ProjectsSkeleton />}>
            <ProjectGallery />
          </Suspense>
        </section>

        <Timeline />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
