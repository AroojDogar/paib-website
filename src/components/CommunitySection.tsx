"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { members } from "@/data/members";
import { useLang } from "@/lib/lang";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export default function CommunitySection() {
  const { lang, t } = useLang();
  const ur = lang === "ur";

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">
          {t("DEVELOPERS & TEAM", "ڈیولپرز اور ٹیم")}
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
          {t("The builders of PAIB.", "PAIB کے بنانے والے۔")}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">
          {t(
            "Developers, trainers and team members who learn, build and grow with PAIB.",
            "ڈیولپرز، ٹرینرز اور ٹیم ممبرز جو PAIB کے ساتھ سیکھتے، بناتے اور آگے بڑھتے ہیں۔"
          )}
        </p>
      </Reveal>

      {members.length === 0 ? (
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-dashed border-ink/25 bg-white/50 p-10 text-center">
            <div className="font-display text-2xl font-bold">
              {t("Our community is growing", "ہماری کمیونٹی بڑھ رہی ہے")}
            </div>
            <p className="mx-auto mt-2 max-w-md text-ink/60">
              {t(
                "New developers and team members will appear here as they join. Want to be one of them?",
                "نئے ڈیولپرز اور ٹیم ممبرز شامل ہوتے ہی یہاں نظر آئیں گے۔ کیا آپ ان میں سے ایک بننا چاہتے ہیں؟"
              )}
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink"
            >
              {t("Join PAIB", "PAIB میں شامل ہوں")}
            </Link>
          </div>
        </Reveal>
      ) : (
        <>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-jade/50">
                    {m.photo ? (
                      <Image
                        src={m.photo}
                        alt={m.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-ivory font-display text-xl font-bold text-jade">
                        {initials(m.name)}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 font-display text-lg font-bold">{m.name}</div>
                  <div className="text-sm text-gold-deep">{m.role}</div>
                  {m.skills && m.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {m.skills.map((s) => (
                        <span key={s} className="rounded-full bg-ivory px-3 py-1 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="text-sm font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              {t("Join PAIB", "PAIB میں شامل ہوں")} {ur ? "←" : "→"}
            </Link>
          </div>
        </>
      )}
    </section>
  );
}