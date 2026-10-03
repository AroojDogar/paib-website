"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "ur";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, ur: string) => string;
};

const LangContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("paib-lang");
      if (saved === "ur" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  }, [lang]);

  function setLang(l: Lang) {
    setLangState(l);
    try {
      localStorage.setItem("paib-lang", l);
    } catch {}
  }

  const t = (en: string, ur: string) => (lang === "ur" ? ur : en);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

// Use inside any page: <T en="Hello" ur="ہیلو" />
export function T({ en, ur }: { en: React.ReactNode; ur: React.ReactNode }) {
  const { lang } = useLang();
  return <>{lang === "ur" ? ur : en}</>;
}