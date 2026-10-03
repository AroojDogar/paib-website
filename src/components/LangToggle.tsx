"use client";

import { useLang } from "@/lib/lang";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "ur" : "en")}
      aria-label="Switch language"
      className="rounded-full border border-ivory/25 px-3 py-1.5 text-xs font-semibold text-ivory transition hover:border-gold hover:text-gold"
    >
      {lang === "en" ? "اردو" : "EN"}
    </button>
  );
}