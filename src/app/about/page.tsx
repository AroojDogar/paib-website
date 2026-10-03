import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "About | PAIB" };

const values = [
  { t: "Innovation", d: "We explore new technology and turn it into practical use." },
  { t: "Collaboration", d: "Students, developers, trainers and professionals building together." },
  { t: "Impact", d: "We measure success by the real difference our work makes." },
  { t: "Excellence", d: "High standards in what we teach and what we build." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT PAIB"
        title={
          <>
            Where technology becomes <span className="text-gradient">opportunity</span>.
          </>
        }
        text="PAIB brings together education, solutions and a community of builders to make AI and blockchain useful for Pakistan."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
            <p className="font-mono text-xs tracking-[0.3em] text-jade">MISSION</p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug">
              To democratize artificial intelligence in Pakistan through AI solutions, education and innovation.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-ink p-8 text-ivory">
            <p className="font-mono text-xs tracking-[0.3em] text-gold">VISION</p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug">
              To position Pakistan as a global leader in artificial intelligence by 2030.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">OUR VALUES</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold">What guides our work.</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border-t-4 border-jade bg-white p-6 shadow-sm">
                <div className="font-display text-xl font-bold">{v.t}</div>
                <p className="mt-2 text-sm text-ink/70">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}