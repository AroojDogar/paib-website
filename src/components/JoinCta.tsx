import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function JoinCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-3xl bg-ink p-10 text-ivory md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <h2 className="max-w-2xl font-display text-4xl font-extrabold md:text-5xl">
              Ready to <span className="text-jade">learn</span>, <span className="text-ivory">build</span> and{" "}
              <span className="text-gold">earn</span> with AI?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {site.ctas.map((c, i) => (
                <Link
                  key={c.label}
                  href={c.href}
                  className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                    i === 0
                      ? "bg-jade text-ink hover:bg-gold"
                      : "border border-ivory/25 hover:border-gold hover:text-gold"
                  }`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}