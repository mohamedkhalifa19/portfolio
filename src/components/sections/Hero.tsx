"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { OWNER } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-100 pointer-events-none"
      />

      {/* Hero glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,165,233,0.12), transparent)",
        }}
      />

      {/* Floating accent orbs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 right-16 w-48 h-48 rounded-full bg-violet-600/10 blur-2xl pointer-events-none hidden lg:block"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 16, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-12 w-64 h-64 rounded-full bg-sky-600/8 blur-3xl pointer-events-none hidden lg:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Status badge */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          {/* Role tag */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-sky-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              {OWNER.role}
              <Sparkles className="w-3.5 h-3.5" />
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            <span className="block">Crafting</span>
            <span
              className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent"
              style={{ textShadow: "none" }}
            >
              Responsive
            </span>
            <span className="block text-slate-300">Web Interfaces</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            I&apos;m{" "}
            <span className="text-white font-semibold">
              {OWNER.firstName} Khalifa
            </span>
            , a React developer building{" "}
            <span className="text-sky-400">
              high-performance, pixel-perfect
            </span>{" "}
            web experiences. I bridge the gap between beautiful design and
            robust code.
          </motion.p>

          {/* Location */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="w-3.5 h-3.5" />
              {OWNER.location}
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-3 mt-2"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 text-sm font-bold shadow-neon-blue transition-all duration-200"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-200"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4 mt-2">
            <div className="h-px w-12 bg-white/10" />
            <a
              href={OWNER.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={OWNER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="h-px w-12 bg-white/10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#skills"
        aria-label="Scroll to skills"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.a>
    </section>
  );
}
