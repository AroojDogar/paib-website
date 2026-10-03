"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const stages = [
  {
    word: "LEARN",
    color: "text-jade",
    glow: "rgba(20,184,122,0.28)",
    line: "Gain practical technology skills.",
    text: "Programs in AI, Agentic AI and emerging technology, open to everyone from every background.",
    href: "/learn",
    cta: "Explore programs",
  },
  {
    word: "BUILD",
    color: "text-ivory",
    glow: "rgba(246,241,231,0.18)",
    line: "Create real solutions.",
    text: "AI agents, chatbots, automation and custom solutions, built around real needs.",
    href: "/build",
    cta: "See what we build",
  },
  {
    word: "EARN",
    color: "text-gold",
    glow: "rgba(232,184,74,0.28)",
    line: "Turn skills into opportunity.",
    text: "Five pathways to turn what you learn into work and growth. Pathways, not guarantees.",
    href: "/earn",
    cta: "Explore opportunities",
  },
];

export default function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(stages.length - 1, Math.max(0, Math.floor(v * stages.length)));
    setActive(i);
  });

  const s = stages[active];

  return (
    <section ref={ref} className="relative h-[300vh] bg-ink">
           <div className="sticky top-0 flex h-screen items-center overflow-hidden text-ivory">
        {/* colour glow that changes per stage */}
        <motion.div
          className="pointer-events-none absolute -right-40 top-1/4 h-[560px] w-[560px] rounded-full blur-3xl"
          animate={{ backgroundColor: s.glow }}
          transition={{ duration: 0.8 }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#f6f1e7 1px, transparent 1px), linear-gradient(90deg, #f6f1e7 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 pt-16 md:grid-cols-[auto_1fr]">
          {/* progress rail */}
          <div className="hidden items-stretch gap-5 md:flex">
            <div className="relative w-px bg-ivory/15">
              <motion.div
                className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-jade to-gold"
                style={{ scaleY: scrollYProgress }}
              />
            </div>
            <div className="flex flex-col justify-between py-2 font-mono text-xs tracking-widest">
              {stages.map((st, i) => (
                <span key={st.word} className={i === active ? st.color : "text-ivory/30"}>
                  0{i + 1}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-gold">THE PAIB WAY</p>

            <AnimatePresence mode="wait">
              <motion.div
                key={s.word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.45 }}
              >
                <h2 className={`mt-4 font-display text-6xl font-extrabold leading-none md:text-9xl ${s.color}`}>
                  {s.word}
                </h2>
                <p className="mt-6 font-display text-2xl font-bold md:text-4xl">{s.line}</p>
                <p className="mt-4 max-w-xl text-lg text-ivory/70">{s.text}</p>
                <Link
                  href={s.href}
                  className="mt-8 inline-block rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
                >
                  {s.cta} →
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex gap-2 md:hidden">
              {stages.map((st, i) => (
                <span
                  key={st.word}
                  className={`h-1 flex-1 rounded-full ${i === active ? "bg-gold" : "bg-ivory/15"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}