"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { team } from "@/data/team";
import { useLang } from "@/lib/lang";

const roleUr: Record<string, string> = {
  "Board of Director": "بورڈ آف ڈائریکٹر",
  "Head of Program": "ہیڈ آف پروگرام",
  "Deputy Director – Training & Programs": "ڈپٹی ڈائریکٹر – ٹریننگ اور پروگرامز",
  "Assistant Director – Programs": "اسسٹنٹ ڈائریکٹر – پروگرامز",
};

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function TeamSection() {
  const { lang, t } = useLang();

  return (
    <section className="bg-forest py-24 text-ivory">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold">{t("THE TEAM", "ہماری ٹیم")}</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
            {t("The people behind PAIB.", "PAIB کے پیچھے کام کرنے والے لوگ۔")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.1}>
              <div className="group rounded-2xl border border-ivory/10 bg-ink/50 p-6 transition hover:border-gold/50">
                <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-gold/60 transition group-hover:ring-gold">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                      style={{
                        objectPosition: m.focus ?? "50% 20%",
                        transform: `scale(${m.zoom ?? 1})`,
                        transformOrigin: m.focus ?? "50% 20%",
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-forest font-display text-2xl font-bold text-jade">
                      {initials(m.name)}
                    </div>
                  )}
                </div>
                <div className="mt-4 font-display text-xl font-bold">{m.name}</div>
                <div className="mt-1 text-sm text-gold">
                  {lang === "ur" ? roleUr[m.role] ?? m.role : m.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}