import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects | PAIB" };

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="PROJECTS"
        title={
          <>
            Real work from the <span className="text-jade">PAIB community</span>.
          </>
        }
        text="A showcase of AI, automation, web and blockchain projects built with PAIB."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        {projects.length === 0 ? (
          <Reveal>
            <div className="rounded-2xl border border-dashed border-ink/25 bg-white/50 p-12 text-center">
              <div className="font-display text-2xl font-bold">Our showcase is coming soon</div>
              <p className="mx-auto mt-2 max-w-md text-ink/60">
                We&apos;re preparing our verified projects. Want your work featured? Get in touch.
              </p>
              <Link href="/contact" className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink">
                Build With PAIB
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.1}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="font-mono text-xs tracking-widest text-jade">{p.category.toUpperCase()}</div>
                  <div className="mt-2 font-display text-2xl font-bold">{p.name}</div>
                  <p className="mt-2 flex-1 text-ink/70">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span key={t} className="rounded-full bg-ivory px-3 py-1 text-xs">{t}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 text-sm font-semibold">
                    {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="text-jade hover:underline">Visit</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="text-ink hover:underline">GitHub</a>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}