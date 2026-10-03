"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Wordmark from "./Wordmark";
import LangToggle from "./LangToggle";
import { useLang } from "@/lib/lang";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { lang, t } = useLang();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const label = (item: (typeof site.nav)[number]) => (lang === "ur" ? item.ur : item.label);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="PAIB home" dir="ltr">
          <Wordmark onDark showTagline />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-sm transition hover:text-ivory ${
                isActive(item.href) ? "text-ivory" : "text-ivory/70"
              }`}
            >
              {label(item)}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gold transition-all ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <LangToggle />
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition hover:bg-jade"
          >
            {t("Join PAIB", "PAIB میں شامل ہوں")}
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LangToggle />
          <button
            className="text-sm text-ivory"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? t("Close", "بند کریں") : t("Menu", "مینو")}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-ivory/10 px-5 py-5 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={isActive(item.href) ? "font-semibold text-gold" : "text-ivory/80"}
            >
              {label(item)}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="font-semibold text-gold">
            {t("Join PAIB", "PAIB میں شامل ہوں")}
          </Link>
        </nav>
      )}
    </header>
  );
}