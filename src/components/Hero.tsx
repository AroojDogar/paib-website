"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/data/site";

const steps = [
  { word: "LEARN", note: "Practical technology skills", color: "text-jade", dot: "bg-jade" },
  { word: "BUILD", note: "Real AI and blockchain solutions", color: "text-ivory", dot: "bg-ivory" },
  { word: "EARN", note: "Professional and business opportunities", color: "text-gold", dot: "bg-gold" },
];

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-ink text-ivory">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#14b87a 1px, transparent 1px), linear-gradient(90deg, #14b87a 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 70% 40%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 70% 40%, black 20%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full bg-jade/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-[360px] w-[360px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 py-20 md:grid-cols-[1.25fr_1fr] md:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.25em] text-gold"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            {site.fullName.toUpperCase()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.03] tracking-tight md:text-7xl"
          >
            <span className="text-jade">Learn</span> it.
            <br />
            Build it.
            <br />
            <span className="text-gradient">Earn from it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/70"
          >
            {site.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              href="/learn"
              className="rounded-full bg-jade px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_#14b87a] transition hover:bg-gold hover:shadow-[0_0_30px_-5px_#e8b84a]"
            >
              Start Learning
            </Link>
            <Link
              href="/build"
              className="rounded-full border border-ivory/25 px-7 py-3.5 text-sm font-semibold transition hover:border-gold hover:text-gold"
            >
              Work With PAIB
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ivory/55"
          >
            {site.ctas.slice(2).map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="underline-offset-4 transition hover:text-gold hover:underline"
              >
                {c.label} →
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Animated LEARN > BUILD > EARN flow */}
        <div className="relative pl-10">
          <div className="absolute bottom-4 left-[11px] top-4 w-px bg-gradient-to-b from-jade via-ivory/40 to-gold" />
          <motion.span
            className="absolute left-[7px] h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_14px_3px_rgba(255,255,255,0.7)]"
            animate={{ top: ["4%", "94%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
          />

          <div className="flex flex-col gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.word}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                className="group relative rounded-2xl border border-ivory/10 bg-forest/60 p-5 backdrop-blur transition hover:border-ivory/30 hover:bg-forest"
              >
                <span
                  className={`absolute -left-[37px] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full ring-4 ring-ink ${s.dot}`}
                />
                <div className="font-mono text-xs text-ivory/40">0{i + 1}</div>
                <div className={`font-display text-3xl font-extrabold ${s.color}`}>{s.word}</div>
                <div className="mt-1 text-sm text-ivory/60">{s.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}