"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useLang } from "@/lib/lang";

const stages = [
  {
    word: "LEARN",
    wordUr: "سیکھیں",
    color: "text-jade",
    glow: "rgba(20,184,122,0.28)",
    line: "Gain practical technology skills.",
    lineUr: "عملی ٹیکنالوجی مہارتیں حاصل کریں۔",
    text: "Programs in AI, Agentic AI and emerging technology, open to everyone from every background.",
    textUr: "AI، ایجنٹک AI اور ابھرتی ہوئی ٹیکنالوجی کے پروگرام، ہر پس منظر کے لوگوں کے لیے کھلے ہیں۔",
    href: "/learn",
    cta: "Explore programs",
    ctaUr: "پروگرام دیکھیں",
  },
  {
    word: "BUILD",
    wordUr: "بنائیں",
    color: "text-ivory",
    glow: "rgba(246,241,231,0.18)",
    line: "Create real solutions.",
    lineUr: "حقیقی حل تخلیق کریں۔",
    text: "AI agents, chatbots, automation and custom solutions, built around real needs.",
    textUr: "AI ایجنٹس، چیٹ بوٹس، آٹومیشن اور حسبِ ضرورت حل، حقیقی ضروریات کو سامنے رکھ کر۔",
    href: "/build",
    cta: "See what we build",
    ctaUr: "ہم کیا بناتے ہیں",
  },
  {
    word: "EARN",
    wordUr: "کمائیں",
    color: "text-gold",
    glow: "rgba(232,184,74,0.28)",
    line: "Turn skills into opportunity.",
    lineUr: "مہارتوں کو مواقع میں بدلیں۔",
    text: "Five pathways to turn what you learn into work and growth. Pathways, not guarantees.",
    textUr: "پانچ راستے جو آپ کی سیکھی ہوئی مہارتوں کو کام اور ترقی میں بدل سکتے ہیں۔ یہ راستے ہیں، آمدنی کی ضمانت نہیں۔",
    href: "/earn",
    cta: "Explore opportunities",
    ctaUr: "مواقع دیکھیں",
  },
];

export default function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { lang, t } = useLang();
  const ur = lang === "ur";

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
      <div className="sticky top-0 flex h-dvh items-center overflow-hidden text-ivory">
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
            <p className="font-mono text-xs tracking-[0.3em] text-gold">
              {t("THE PAIB WAY", "PAIB کا طریقہ")}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={s.word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.45 }}
              >
                <h2 className={`mt-4 font-display text-6xl font-extrabold leading-none md:text-9xl ${s.color}`}>
                  {ur ? s.wordUr : s.word}
                </h2>
                <p className="mt-6 font-display text-2xl font-bold md:text-4xl">{ur ? s.lineUr : s.line}</p>
                <p className="mt-4 max-w-xl text-lg text-ivory/70">{ur ? s.textUr : s.text}</p>
                <Link
                  href={s.href}
                  className="mt-8 inline-block rounded-full bg-ivory px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
                >
                  {ur ? `${s.ctaUr} ←` : `${s.cta} →`}
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