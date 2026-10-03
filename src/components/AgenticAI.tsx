"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const stages = [
  {
    label: "Software",
    title: "Follows fixed instructions",
    text: "Traditional software does exactly what it was programmed to do, nothing more.",
  },
  {
    label: "Application",
    title: "Serves people through an interface",
    text: "Applications give users screens, data and features to get work done themselves.",
  },
  {
    label: "AI Agent",
    title: "Understands goals and acts",
    text: "AI agents plan steps, use tools and complete tasks, working like a digital team member.",
  },
];

export default function AgenticAI() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-ivory">
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-jade/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold">AGENTIC AI</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            The next step after software is the <span className="text-gradient">AI agent</span>.
          </h2>
          <p className="mt-5 max-w-lg text-lg text-ivory/70">
            Agentic AI doesn&apos;t just answer questions. It plans, uses tools and completes work.
            At PAIB we help people and organizations understand it, build it and benefit from it.
          </p>
        </Reveal>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="space-y-4"
        >
          {stages.map((s, i) => {
            const on = i === active;
            return (
              <motion.button
                key={s.label}
                onClick={() => setActive(i)}
                animate={{ scale: on ? 1 : 0.97, opacity: on ? 1 : 0.55 }}
                transition={{ duration: 0.4 }}
                className={`block w-full rounded-2xl border p-5 text-left transition ${
                  on ? "border-jade bg-forest" : "border-ivory/10 bg-forest/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display text-xl font-extrabold ${on ? "text-jade" : "text-ivory"}`}>
                    {s.label}
                  </span>
                  <span className="font-mono text-xs text-ivory/40">0{i + 1}</span>
                </div>
                {on && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 font-semibold text-gold">{s.title}</div>
                    <p className="mt-1 text-sm text-ivory/70">{s.text}</p>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}