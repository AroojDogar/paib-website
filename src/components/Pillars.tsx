import Link from "next/link";
import Reveal from "./Reveal";

const pillars = [
  {
    n: "01",
    title: "LEARN",
    text: "Programs in AI, Agentic AI and emerging technology for students and professionals.",
    href: "/learn",
    cta: "Explore programs",
    border: "border-jade",
    color: "text-jade",
  },
  {
    n: "02",
    title: "BUILD",
    text: "AI agents, chatbots, automation and custom solutions for organizations, built around real needs.",
    href: "/build",
    cta: "See what we build",
    border: "border-ink",
    color: "text-ink",
  },
  {
    n: "03",
    title: "EARN",
    text: "Pathways to turn technology skills into freelancing, consulting, analysis and entrepreneurship.",
    href: "/earn",
    cta: "Explore opportunities",
    border: "border-gold",
    color: "text-gold-deep",
  },
];

export default function Pillars() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">THE PAIB WAY</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
          From knowledge to real opportunity.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.12}>
            <Link
              href={p.href}
              className={`group block h-full rounded-2xl border-t-4 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${p.border}`}
            >
              <div className="font-mono text-xs text-ink/40">{p.n}</div>
              <div className={`mt-2 font-display text-3xl font-extrabold ${p.color}`}>
                {p.title}
              </div>
              <p className="mt-3 text-ink/70">{p.text}</p>
              <div className={`mt-6 text-sm font-semibold ${p.color}`}>
                {p.cta}{" "}
                <span className="inline-block transition group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}