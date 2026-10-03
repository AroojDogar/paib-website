"use client";

import { useLang } from "@/lib/lang";

const items = [
  { en: "Artificial Intelligence", ur: "مصنوعی ذہانت" },
  { en: "Agentic AI", ur: "ایجنٹک AI" },
  { en: "Blockchain", ur: "بلاک چین" },
  { en: "AI Automation", ur: "AI آٹومیشن" },
  { en: "Chatbots", ur: "چیٹ بوٹس" },
  { en: "Data Analytics", ur: "ڈیٹا اینالیٹکس" },
  { en: "AI Consulting", ur: "AI مشاورت" },
  { en: "Custom AI Development", ur: "حسبِ ضرورت AI ڈیولپمنٹ" },
];

export default function Marquee() {
  const { lang } = useLang();
  const row = [...items, ...items];
  return (
    <div dir="ltr" className="overflow-hidden border-y border-ink/10 bg-ivory py-5">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span
            key={i}
            className="flex items-center whitespace-nowrap px-8 font-display text-lg font-semibold text-ink/70"
          >
            {lang === "ur" ? t.ur : t.en}
            <span className="ml-16 text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}