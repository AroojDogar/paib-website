import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[70vh] items-center bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-5">
        <p className="font-mono text-xs tracking-[0.3em] text-gold">ERROR 404</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold md:text-7xl">
          This page <span className="text-gradient">doesn&apos;t exist</span>.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-jade px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}