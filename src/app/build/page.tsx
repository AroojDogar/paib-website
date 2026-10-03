import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "Build | PAIB" };

const services = [
  { t: "AI Agents", d: "Intelligent systems that handle defined workflows." },
  { t: "Chatbots", d: "Support, information, education and business chatbots." },
  { t: "AI Automation", d: "Automating repetitive business processes." },
  { t: "Custom AI Development", d: "AI-powered applications built for your specific needs." },
  { t: "Data Analytics", d: "Turning business data into useful insights." },
  { t: "AI Consulting", d: "Finding where and how AI can be applied in your organization." },
  { t: "AI Integration", d: "Connecting AI with your existing systems and workflows." },
  { t: "Blockchain", d: "Blockchain-related applications and experimentation." },
];

export default function Build() {
  return (
    <>
      <PageHero
        eyebrow="BUILD"
        title={
          <>
            AI and blockchain solutions, <span className="text-gradient">built around you</span>.
          </>
        }
        text="We help organizations understand, build and implement AI solutions that fit real needs."
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 0.08}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-jade hover:shadow-xl">
                <div className="font-mono text-xs text-ink/40">0{i + 1}</div>
                <div className="mt-2 font-display text-xl font-bold">{s.t}</div>
                <p className="mt-2 text-sm text-ink/70">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-3xl bg-ink p-8 text-ivory md:flex-row md:items-center md:p-12">
            <div>
              <div className="font-display text-2xl font-bold md:text-3xl">Have a problem AI could solve?</div>
              <p className="mt-1 text-ivory/60">Tell us about it and we&apos;ll discuss the best way forward.</p>
            </div>
            <Link href="/contact" className="rounded-full bg-jade px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold">
              Work With PAIB
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}