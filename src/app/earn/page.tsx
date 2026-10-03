import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Earn | PAIB" };

const paths = [
  { t: "AI Freelancer", d: "Win clients and deliver AI-powered services remotely." },
  { t: "AI Consultant", d: "Help businesses understand and implement AI solutions." },
  { t: "AI Agent Builder", d: "Create automation, research and business agents." },
  { t: "AI-Powered Analyst", d: "Combine business knowledge, data and AI to produce insights." },
  { t: "AI Entrepreneur", d: "Use AI to develop and scale your own business." },
];

export default function Earn() {
  return (
    <>
      <PageHero
        eyebrow="EARN"
        title={
          <>
            Turn AI skills into <span className="text-gold">real opportunity</span>.
          </>
        }
                text="Any background. Any field. One future. Whoever you are, PAIB helps you turn AI skills into a career or a business."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">FIVE PATHWAYS</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold">
            How to build a career or business with Agentic AI.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-2xl border-t-4 border-gold bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="font-mono text-xs text-ink/40">0{i + 1}</div>
                <div className="mt-2 font-display text-2xl font-bold">{p.t}</div>
                <p className="mt-2 text-ink/70">{p.d}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-ink p-7 text-ivory">
              <div className="font-display text-2xl font-bold">Find your path</div>
              <p className="mt-2 text-sm text-ivory/60">Talk to the PAIB team about where to start.</p>
              <Link href="/contact" className="mt-4 self-start text-sm font-semibold text-gold hover:underline">
                Explore AI Opportunities →
              </Link>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink/50">
          These are career and business pathways, not guarantees of income. Outcomes depend on your skills,
          effort and the market.
        </p>
      </section>
    </>
  );
}