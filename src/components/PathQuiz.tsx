"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { pathways, type Pathway } from "@/data/pathways";
import { useLang } from "@/lib/lang";

type Scores = Partial<Record<Pathway["id"], number>>;

const questions: {
  q: string;
  qUr: string;
  options: { label: string; labelUr: string; scores: Scores }[];
}[] = [
  {
    q: "What do you enjoy doing most?",
    qUr: "آپ کو سب سے زیادہ کیا کرنا پسند ہے؟",
    options: [
      { label: "Helping people solve their problems", labelUr: "لوگوں کے مسائل حل کرنے میں مدد", scores: { consultant: 2, freelancer: 1 } },
      { label: "Making things and automating tasks", labelUr: "چیزیں بنانا اور کام خودکار کرنا", scores: { builder: 2, entrepreneur: 1 } },
      { label: "Finding patterns and insights", labelUr: "پیٹرنز اور بصیرت تلاش کرنا", scores: { analyst: 2, consultant: 1 } },
      { label: "Turning my own ideas into reality", labelUr: "اپنے خیالات کو حقیقت بنانا", scores: { entrepreneur: 2, builder: 1 } },
      { label: "Working on varied tasks my own way", labelUr: "مختلف کام اپنے انداز میں کرنا", scores: { freelancer: 2 } },
    ],
  },
  {
    q: "How do you like to work?",
    qUr: "آپ کیسے کام کرنا پسند کرتے ہیں؟",
    options: [
      { label: "On my own, with flexible hours", labelUr: "اکیلے، لچکدار اوقات کے ساتھ", scores: { freelancer: 2, entrepreneur: 1 } },
      { label: "With teams and organizations", labelUr: "ٹیموں اور اداروں کے ساتھ", scores: { consultant: 2, analyst: 1 } },
      { label: "Hands-on with tools and systems", labelUr: "ٹولز اور نظاموں کے ساتھ خود عملی کام", scores: { builder: 2, analyst: 1 } },
      { label: "Leading my own venture", labelUr: "اپنا منصوبہ خود چلانا", scores: { entrepreneur: 2, consultant: 1 } },
    ],
  },
  {
    q: "What would you like to achieve first?",
    qUr: "آپ سب سے پہلے کیا حاصل کرنا چاہیں گے؟",
    options: [
      { label: "Get my first clients", labelUr: "اپنے پہلے کلائنٹس حاصل کرنا", scores: { freelancer: 2, consultant: 1 } },
      { label: "Build a useful AI tool", labelUr: "ایک کارآمد AI ٹول بنانا", scores: { builder: 2, entrepreneur: 1 } },
      { label: "Make better decisions with data", labelUr: "ڈیٹا سے بہتر فیصلے کرنا", scores: { analyst: 2 } },
      { label: "Launch my own idea", labelUr: "اپنا خیال شروع کرنا", scores: { entrepreneur: 2, builder: 1 } },
      { label: "Advise others on using AI", labelUr: "دوسروں کو AI کے استعمال پر مشورہ دینا", scores: { consultant: 2, analyst: 1 } },
    ],
  },
];

export default function PathQuiz() {
  const { lang, t } = useLang();
  const ur = lang === "ur";
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
        <p className="font-mono text-xs tracking-[0.3em] text-gold">{t("FIND YOUR PATH", "اپنا راستہ تلاش کریں")}</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
          {ur ? (
            <>
              کون سا AI راستہ آپ کے لیے <span className="text-gradient">موزوں</span> ہے؟
            </>
          ) : (
            <>
              Which AI pathway <span className="text-gradient">fits you</span>?
            </>
          )}
        </h2>
        <p className="mt-3 text-ivory/60">
          {t("Three quick questions. No right or wrong answers.", "تین مختصر سوال۔ کوئی جواب صحیح یا غلط نہیں۔")}
        </p>

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
                  {ur
                    ? `سوال ${step + 1} از ${questions.length}`
                    : `QUESTION ${step + 1} OF ${questions.length}`}
                </div>
                <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                  {ur ? questions[step].qUr : questions[step].q}
                </h3>
                <div className="mt-6 grid gap-3">
                  {questions[step].options.map((o) => (
                    <button
                      key={o.label}
                      onClick={() => pick(o.scores)}
                      className="rounded-xl border border-ivory/15 bg-ink/40 px-5 py-4 text-start text-sm transition hover:border-gold hover:bg-ink md:text-base"
                    >
                      {ur ? o.labelUr : o.label}
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
                <div className="font-mono text-xs tracking-widest text-jade">
                  {t("YOUR BEST FIT", "آپ کے لیے بہترین")}
                </div>
                <h3 className="mt-2 font-display text-4xl font-extrabold text-gold md:text-5xl">
                  {ur ? top.titleUr : top.title}
                </h3>
                <p className="mt-3 text-lg text-ivory/80">{ur ? top.descriptionUr : top.description}</p>

                <p className="mt-5 text-sm text-ivory/60">
                  {t("Also worth exploring:", "یہ بھی دیکھنے کے قابل:")}{" "}
                  <span className="font-semibold text-ivory">{ur ? second.titleUr : second.title}</span>
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-jade px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
                  >
                    {t("Talk to the PAIB team", "PAIB ٹیم سے بات کریں")}
                  </Link>
                  <button
                    onClick={restart}
                    className="text-sm text-ivory/60 underline-offset-4 hover:text-ivory hover:underline"
                  >
                    {t("Retake the quiz", "کوئز دوبارہ کریں")}
                  </button>
                </div>

                <p className="mt-6 text-xs text-ivory/40">
                  {t(
                    "This is a starting point for exploring, not a guarantee of any outcome.",
                    "یہ دریافت کی ایک ابتدا ہے، کسی نتیجے کی ضمانت نہیں۔"
                  )}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}