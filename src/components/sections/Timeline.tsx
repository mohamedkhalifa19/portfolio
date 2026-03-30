"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { TIMELINE, type TimelineEntry } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

const typeConfig: Record<
  TimelineEntry["type"],
  { Icon: React.ElementType; color: string; bg: string }
> = {
  education: {
    Icon: GraduationCap,
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  experience: {
    Icon: Briefcase,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
  achievement: {
    Icon: Award,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
};

function TimelineItem({
  entry,
  index,
  isLast,
}: {
  entry: TimelineEntry;
  index: number;
  isLast: boolean;
}) {
  const { Icon, color, bg } = typeConfig[entry.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-white/10 to-transparent" />
      )}

      {/* Icon node */}
      <div
        className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center ${bg}`}
      >
        <Icon className={`w-4.5 h-4.5 ${color}`} />
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
          <div>
            <h3 className="text-base font-bold text-white leading-tight">
              {entry.title}
            </h3>
            <p className={`text-sm font-medium mt-0.5 ${color}`}>
              {entry.institution}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {entry.badge && (
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${bg} ${color}`}>
                {entry.badge}
              </span>
            )}
            <span className="text-xs text-slate-500 font-mono whitespace-nowrap">
              {entry.year}
            </span>
          </div>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mt-2">
          {entry.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      {/* Subtle section divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Journey"
          title="Education & Experience"
          description="Building a strong foundation — from Computer Science fundamentals to real-world project delivery."
        />

        <div className="relative">
          {TIMELINE.map((entry, i) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              index={i}
              isLast={i === TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
