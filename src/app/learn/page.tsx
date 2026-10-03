import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";

export const metadata: Metadata = { title: "Learn | PAIB" };

const areas = [
  "AI Fundamentals",
  "Agentic AI",
  "AI Development",
  "AI Applications",
  "AI Automation",
  "Blockchain",
];

const badge = {
  open: "bg-jade/15 text-jade",
  upcoming: "bg-gold/20 text-gold-deep",
  closed: "bg-ink/10 text-ink/60",
} as const;

export default function Learn() {
  return (
    <>
      <PageHero
        eyebrow="LEARN"
        title={
          <>
            Learn the skills <span className="text-jade">shaping</span> the future.
          </>
        }
               text="Practical programs in AI, Agentic AI and emerging technology, open to everyone from every background."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">PROGRAMS</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold">Our programs.</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${badge[c.status]}`}>
                    {c.status}
                  </span>
                  {c.level && <span className="font-mono text-xs text-ink/50">{c.level}</span>}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">{c.title}</h3>
                <p className="mt-2 flex-1 text-ink/70">{c.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink/60">
                  {c.duration && <span>{c.duration}</span>}
                  {c.price && <span>{c.price}</span>}
                </div>
                <Link
                  href={c.enrollUrl ?? "/contact"}
                  className="mt-5 inline-block self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink"
                >
                  {c.status === "open" ? "Enroll" : "Enquire"}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-gold">COMING UP</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
              Areas we are growing into.
            </h2>
            <p className="mt-3 max-w-xl text-ivory/60">
              These learning areas are planned and not yet confirmed as programs. Details will be announced here.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((a) => (
              <span key={a} className="rounded-full border border-ivory/20 px-5 py-2 text-sm">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}