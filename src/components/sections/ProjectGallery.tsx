"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/**
 * ProjectGallery — wrapped in Suspense in page.tsx.
 * The motion.div with variants handles staggered fade-in
 * across all ProjectCard children.
 */
export default function ProjectGallery() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader
        eyebrow="Work"
        title="Selected Projects"
        description="From React SPAs to Node.js APIs — each project represents a different facet of my skill set."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </motion.div>

      {/* View more CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex justify-center mt-12"
      >
        <a
          href="https://github.com/mohamedkhalifa19"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200"
        >
          See more on GitHub →
        </a>
      </motion.div>
    </div>
  );
}
