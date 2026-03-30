"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-14",
        isCenter && "flex flex-col items-center text-center",
        className
      )}
    >
      {/* Eyebrow */}
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
        <span className="w-4 h-px bg-sky-400" />
        {eyebrow}
        <span className="w-4 h-px bg-sky-400" />
      </span>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-white leading-tight"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
      >
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={cn(
            "mt-4 text-slate-400 text-base leading-relaxed",
            isCenter && "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
