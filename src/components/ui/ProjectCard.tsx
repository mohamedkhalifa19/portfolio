"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";
import type { Project } from "@/lib/data";

// ─── Framer Motion variants ───────────────────────────────────────────────────

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // custom ease-out-expo
    },
  }),
};

// ─── Role badge colours ───────────────────────────────────────────────────────

const roleMeta: Record<
  Project["role"],
  { label: string; classes: string }
> = {
  Frontend: {
    label: "Front-End",
    classes: "bg-sky-500/10 text-sky-400 border-sky-500/20",
  },
  Backend: {
    label: "Back-End",
    classes: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  },
  "Full Stack": {
    label: "Full Stack",
    classes: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
};

// ─── Tech badge ───────────────────────────────────────────────────────────────

function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-slate-300 border border-white/8 whitespace-nowrap">
      {label}
    </span>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface ProjectCardProps {
  project: Project;
  index: number;
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { label, classes } = roleMeta[project.role];

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-slate-900/70 backdrop-blur-sm overflow-hidden shadow-card hover:border-white/[0.12] transition-colors duration-300"
    >
      {/* ── Gradient header ── */}
      <div
        className={`relative h-36 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Subtle dot grid */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative z-10 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center"
        >
          <Layers className="w-7 h-7 text-white/70" />
        </motion.div>

        {/* Featured ribbon */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-semibold tracking-widest uppercase bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Role badge */}
        <span
          className={`self-start text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full border ${classes}`}
        >
          {label}
        </span>

        {/* Title + subtitle */}
        <div>
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-sky-300 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techs.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* ── Actions ── */}
        <div className="flex gap-2 pt-3 border-t border-white/5 mt-auto">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 hover:border-white/15 text-slate-300 hover:text-white text-sm font-medium py-2 px-3 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>

          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 hover:border-sky-500/40 text-sky-400 hover:text-sky-300 text-sm font-medium py-2 px-3 transition-all duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(14,165,233,0.04), transparent 40%)",
        }}
      />
    </motion.article>
  );
}
