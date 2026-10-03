"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";
import { useLang } from "@/lib/lang";

export default function ProjectsPreview() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const list = featured.length ? featured : projects.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">{t("PROJECTS", "پراجیکٹس")}</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
          {t("Real work, built by the PAIB community.", "حقیقی کام، جو PAIB کمیونٹی نے بنایا۔")}
        </h2>
      </Reveal>

      {list.length === 0 ? (
        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-dashed border-ink/25 bg-white/50 p-10 text-center">
            <div className="font-display text-2xl font-bold">
              {t("Our showcase is coming soon", "ہماری نمائش جلد آ رہی ہے")}
            </div>
            <p className="mx-auto mt-2 max-w-md text-ink/60">
              {t(
                "We're preparing our verified projects. Want your work featured? Get in touch.",
                "ہم اپنے تصدیق شدہ پراجیکٹس تیار کر رہے ہیں۔ کیا آپ اپنا کام نمایاں کروانا چاہتے ہیں؟ رابطہ کریں۔"
              )}
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink"
            >
              {t("Build With PAIB", "PAIB کے ساتھ بنائیں")}
            </Link>
          </div>
        </Reveal>
      ) : (
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="font-mono text-xs tracking-widest text-jade">{p.category.toUpperCase()}</div>
                <div className="mt-2 font-display text-2xl font-bold">{p.name}</div>
                <p className="mt-2 text-ink/70">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-ivory px-3 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}