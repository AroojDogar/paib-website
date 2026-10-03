"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "@/lib/lang";

const stages = [
  {
    label: "Software",
    labelUr: "سافٹ ویئر",
    title: "Follows fixed instructions",
    titleUr: "طے شدہ ہدایات پر چلتا ہے",
    text: "Traditional software does exactly what it was programmed to do, nothing more.",
    textUr: "روایتی سافٹ ویئر بالکل وہی کرتا ہے جو اس میں پروگرام کیا گیا ہو، اس سے زیادہ کچھ نہیں۔",
  },
  {
    label: "Application",
    labelUr: "ایپلیکیشن",
    title: "Serves people through an interface",
    titleUr: "انٹرفیس کے ذریعے لوگوں کی خدمت کرتی ہے",
    text: "Applications give users screens, data and features to get work done themselves.",
    textUr: "ایپلیکیشنز صارفین کو اسکرینز، ڈیٹا اور فیچرز دیتی ہیں تاکہ وہ خود اپنا کام مکمل کر سکیں۔",
  },
  {
    label: "AI Agent",
    labelUr: "AI ایجنٹ",
    title: "Understands goals and acts",
    titleUr: "مقصد سمجھتا ہے اور عمل کرتا ہے",
    text: "AI agents plan steps, use tools and complete tasks, working like a digital team member.",
    textUr: "AI ایجنٹس مراحل کا منصوبہ بناتے ہیں، ٹولز استعمال کرتے ہیں اور کام مکمل کرتے ہیں، گویا ڈیجیٹل ٹیم ممبر ہوں۔",
  },
];

export default function AgenticAI() {
  const { lang, t } = useLang();
  const ur = lang === "ur";
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive((a) => (a + 1) % stages.length), 3500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-ivory">
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-jade/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold">{t("AGENTIC AI", "ایجنٹک AI")}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">
            {ur ? (
              <>
                سافٹ ویئر کے بعد اگلا قدم <span className="text-gradient">AI ایجنٹ</span> ہے۔
              </>
            ) : (
              <>
                The next step after software is the <span className="text-gradient">AI agent</span>.
              </>
            )}
          </h2>
          <p className="mt-5 max-w-lg text-lg text-ivory/70">
            {t(
              "Agentic AI doesn't just answer questions. It plans, uses tools and completes work. At PAIB we help people and organizations understand it, build it and benefit from it.",
              "ایجنٹک AI صرف سوالوں کے جواب نہیں دیتا۔ یہ منصوبہ بناتا ہے، ٹولز استعمال کرتا ہے اور کام مکمل کرتا ہے۔ PAIB میں ہم لوگوں اور اداروں کو اسے سمجھنے، بنانے اور اس سے فائدہ اٹھانے میں مدد دیتے ہیں۔"
            )}
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
                className={`block w-full rounded-2xl border p-5 text-start transition ${
                  on ? "border-jade bg-forest" : "border-ivory/10 bg-forest/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-display text-xl font-extrabold ${on ? "text-jade" : "text-ivory"}`}>
                    {ur ? s.labelUr : s.label}
                  </span>
                  <span className="font-mono text-xs text-ivory/40">0{i + 1}</span>
                </div>
                {on && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 font-semibold text-gold">{ur ? s.titleUr : s.title}</div>
                    <p className="mt-1 text-sm text-ivory/70">{ur ? s.textUr : s.text}</p>
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