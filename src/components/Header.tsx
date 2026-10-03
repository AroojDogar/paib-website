"use client";

import Link from "next/link";
import { useState } from "react";
import Wordmark from "./Wordmark";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" aria-label="PAIB home">
          <Wordmark onDark showTagline />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 px-5 py-5 md:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}