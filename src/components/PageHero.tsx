import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  text?: React.ReactNode;
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink py-20 text-ivory md:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[400px] w-[400px] rounded-full bg-jade/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-6xl">
            {title}
          </h1>
          {text && <p className="mt-5 max-w-2xl text-lg text-ivory/70">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}