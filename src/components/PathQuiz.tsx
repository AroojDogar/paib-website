"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { pathways, type Pathway } from "@/data/pathways";

type Scores = Partial<Record<Pathway["id"], number>>;

const questions: {
  q: string;
  options: { label: string; scores: Scores }[];
}[] = [
  {
    q: "What do you enjoy doing most?",
    options: [
      { label: "Helping people solve their problems", scores: { consultant: 2, freelancer: 1 } },
      { label: "Making things and automating tasks", scores: { builder: 2, entrepreneur: 1 } },
      { label: "Finding patterns and insights", scores: { analyst: 2, consultant: 1 } },
      { label: "Turning my own ideas into reality", scores: { entrepreneur: 2, builder: 1 } },
      { label: "Working on varied tasks my own way", scores: { freelancer: 2 } },
    ],
  },
  {
    q: "How do you like to work?",
    options: [
      { label: "On my own, with flexible hours", scores: { freelancer: 2, entrepreneur: 1 } },
      { label: "With teams and organizations", scores: { consultant: 2, analyst: 1 } },
      { label: "Hands-on with tools and systems", scores: { builder: 2, analyst: 1 } },
      { label: "Leading my own venture", scores: { entrepreneur: 2, consultant: 1 } },
    ],
  },
  {
    q: "What would you like to achieve first?",
    options: [
      { label: "Get my first clients", scores: { freelancer: 2, consultant: 1 } },
      { label: "Build a useful AI tool", scores: { builder: 2, entrepreneur: 1 } },
      { label: "Make better decisions with data", scores: { analyst: 2 } },
      { label: "Launch my own idea", scores: { entrepreneur: 2, builder: 1 } },
      { label: "Advise others on using AI", scores: { consultant: 2, analyst: 1 } },
    ],
  },
];

export default function PathQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Scores>({});

  const done = step >= questions.length;

  function pick(s: Scores) {
    const next = { ...scores };
    for (const [k, v] of Object.entries(s)) {
      const key = k as Pathway["id"];
      next[key] = (next[key] ?? 0) + (v ?? 0);
    }
    setScores(next);
    setStep(step + 1);
  }

  function restart() {
    setScores({});
    setStep(0);
  }

  const ranked = [...pathways].sort((a, b) => (scores[b.id] ?? 0) - (scores[a.id] ?? 0));
  const top = ranked[0];
  const second = ranked[1];

  return (
    <section id="quiz" className="grain relative overflow-hidden bg-ink py-24 text-ivory">
      <div className="pointer-events-none absolute -left-24 top-0 h-[360px] w-[360px] rounded-full bg-jade/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5">
        <p className="font-mono text-xs tracking-[0.3em] text-gold">FIND YOUR PATH</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
          Which AI pathway <span className="text-gradient">fits you</span>?
        </h2>
        <p className="mt-3 text-ivory/60">Three quick questions. No right or wrong answers.</p>

        <div className="mt-10 rounded-3xl border border-ivory/10 bg-forest/70 p-6 backdrop-blur md:p-10">
          {!done && (
            <div className="mb-6 flex gap-2">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition ${i <= step ? "bg-jade" : "bg-ivory/15"}`}
                />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-mono text-xs text-ivory/40">
                  QUESTION {step + 1} OF {questions.length}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{questions[step].q}</h3>
                <div className="mt-6 grid gap-3">
                  {questions[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => pick(o.scores)}
                      className="rounded-xl border border-ivory/15 bg-ink/40 px-5 py-4 text-left text-sm transition hover:border-gold hover:bg-ink md:text-base"
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="font-mono text-xs tracking-widest text-jade">YOUR BEST FIT</div>
                <h3 className="mt-2 font-display text-4xl font-extrabold text-gold md:text-5xl">{top.title}</h3>
                <p className="mt-3 text-lg text-ivory/80">{top.description}</p>

                <p className="mt-5 text-sm text-ivory/60">
                  Also worth exploring: <span className="font-semibold text-ivory">{second.title}</span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-jade px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
                  >
                    Talk to the PAIB team
                  </Link>
                  <button onClick={restart} className="text-sm text-ivory/60 underline-offset-4 hover:text-ivory hover:underline">
                    Retake the quiz
                  </button>
                </div>

                <p className="mt-6 text-xs text-ivory/40">
                  This is a starting point for exploring, not a guarantee of any outcome.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}