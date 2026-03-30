import { Github, Linkedin, Heart } from "lucide-react";
import { OWNER } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span
          className="font-bold text-slate-400 text-sm"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
        >
          <span className="text-sky-400">M</span>.Khalifa
        </span>

        {/* Copyright */}
        <p className="text-xs text-slate-600 flex items-center gap-1.5">
          © {year} {OWNER.name}. Built with{" "}
          <Heart className="w-3 h-3 text-sky-500 inline" /> using Next.js &amp;
          Tailwind CSS.
        </p>

        {/* Social */}
        <div className="flex items-center gap-3">
          <a
            href={OWNER.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
