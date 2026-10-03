"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="PAIB home">
          <Wordmark onDark showTagline />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm text-ivory/70 transition hover:text-ivory"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition hover:bg-jade"
          >
            Join PAIB
          </Link>
        </nav>

        <button
          className="text-sm text-ivory md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-ivory/10 px-5 py-5 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-ivory/80"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="font-semibold text-gold">
            Join PAIB →
          </Link>
        </nav>
      )}
    </header>
  );
}