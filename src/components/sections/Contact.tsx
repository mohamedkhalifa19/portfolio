"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import nodemailer from "nodemailer";

import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { OWNER } from "@/lib/data";
import SectionHeader from "@/components/ui/SectionHeader";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { email, message, name } = fields;
    setFormState("submitting");
    // Simulate async send — wire up to Formspree / Resend in production
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    setFormState("success");
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/[0.08] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40 focus:border-sky-500/40 transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Together"
          description="Open to full-time roles, freelance projects, and interesting collaborations. I typically respond within 24 hours."
        />

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* ── Left: info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-white/[0.06] bg-slate-900/60 p-6 space-y-5 md:w-full w-[280px]">
              <h3 className="text-lg font-bold text-white">Get in touch</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Email</p>
                    <a
                      href={`mailto:${OWNER.email}`}
                      className="text-slate-300 hover:text-sky-400 transition-colors text-xs md:text-[14px]"
                    >
                      {OWNER.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Location</p>
                    <span className="text-slate-300">{OWNER.location}</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-xs text-slate-600 mb-3 uppercase tracking-widest">
                  Find me online
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href={OWNER.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={OWNER.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 text-sky-400 hover:text-sky-300 text-sm font-medium transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 flex items-center gap-4">
              <div className="relative">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-400">
                  Currently available
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Open to full-time roles &amp; freelance work
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 flex flex-col items-center text-center gap-4"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Message sent!</h3>
                <p className="text-slate-400 text-sm">
                  Thanks for reaching out. I&apos;ll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFields({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-white/[0.06] bg-slate-900/60 p-6 space-y-4"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  Send a message
                </h3>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputBase}
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "submitting"}
                  whileHover={{ scale: formState !== "submitting" ? 1.02 : 1 }}
                  whileTap={{ scale: formState !== "submitting" ? 0.98 : 1 }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 text-slate-950 font-bold text-sm transition-all duration-200 shadow-neon-blue"
                >
                  {formState === "submitting" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-slate-950/40 border-t-slate-950 rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
