"use client";

import { motion } from "framer-motion";
import { SKILLS, type SkillCategory } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

// ─── Skill bar ───────────────────────────────────────────────────────────────

function SkillBar({
  name,
  level,
  color,
  delay,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      className="group"
    >
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-slate-300 font-medium group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs text-slate-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: delay + 0.15, duration: 0.7, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </motion.div>
  );
}

// ─── Bento card ──────────────────────────────────────────────────────────────

const categoryMeta: Record<
  string,
  {
    barGradient: string;
    spanClass: string;
    accentBorder: string;
    glowColor: string;
  }
> = {
  frontend: {
    barGradient: "from-sky-500 to-cyan-400",
    spanClass: "md:col-span-2",
    accentBorder: "border-t-sky-500/40",
    glowColor: "rgba(14,165,233,0.06)",
  },
  backend: {
    barGradient: "from-violet-500 to-purple-400",
    spanClass: "md:col-span-1",
    accentBorder: "border-t-violet-500/40",
    glowColor: "rgba(168,85,247,0.06)",
  },
  tools: {
    barGradient: "from-emerald-500 to-teal-400",
    spanClass: "md:col-span-1",
    accentBorder: "border-t-emerald-500/40",
    glowColor: "rgba(16,185,129,0.06)",
  },
};

function BentoCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const meta = categoryMeta[category.id];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`${meta.spanClass} relative rounded-2xl border border-white/[0.06] ${meta.accentBorder} border-t bg-slate-900/60 backdrop-blur-sm p-6 overflow-hidden group hover:border-white/10 transition-colors duration-300`}
      style={{ background: `linear-gradient(135deg, ${meta.glowColor}, transparent 60%)` }}
    >
      {/* Category label */}
      <div className="flex items-center gap-2 mb-5">
        <div
          className={`w-2 h-2 rounded-full bg-gradient-to-br ${meta.barGradient}`}
        />
        <span className={`text-xs font-bold tracking-[0.2em] uppercase ${category.color}`}>
          {category.label}
        </span>
        <span className="ml-auto text-[11px] text-slate-600 font-mono">
          {category.skills.length} skills
        </span>
      </div>

      {/* Skills */}
      <div className="space-y-3">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={meta.barGradient}
            delay={i * 0.06}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function SkillGrid() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Skills & Technologies"
          description="A full-stack perspective — front-end first, with real back-end experience to understand the whole picture."
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SKILLS.map((cat, i) => (
            <BentoCard key={cat.id} category={cat} index={i} />
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "3+", label: "Projects shipped" },
            { value: "15+", label: "Technologies" },
            { value: "B+", label: "Degree grade" },
            { value: "100%", label: "Mobile-first" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.06] bg-slate-900/40 px-5 py-4 text-center"
            >
              <div
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
