import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Projects | PAIB" };

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow={<T en="PROJECTS" ur="پراجیکٹس" />}
        title={
          <T
            en={
              <>
                Real work from the <span className="text-jade">PAIB community</span>.
              </>
            }
            ur={
              <>
                <span className="text-jade">PAIB کمیونٹی</span> کا حقیقی کام۔
              </>
            }
          />
        }
        text={
          <T
            en="A showcase of AI, automation, web and blockchain projects built with PAIB."
            ur="PAIB کے ساتھ بنائے گئے AI، آٹومیشن، ویب اور بلاک چین پراجیکٹس کی نمائش۔"
          />
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        {projects.length === 0 ? (
          <Reveal>
            <div className="rounded-2xl border border-dashed border-ink/25 bg-white/50 p-12 text-center">
              <div className="font-display text-2xl font-bold">
                <T en="Our showcase is coming soon" ur="ہماری نمائش جلد آ رہی ہے" />
              </div>
              <p className="mx-auto mt-2 max-w-md text-ink/60">
                <T
                  en="We're preparing our verified projects. Want your work featured? Get in touch."
                  ur="ہم اپنے تصدیق شدہ پراجیکٹس تیار کر رہے ہیں۔ کیا آپ اپنا کام نمایاں کروانا چاہتے ہیں؟ رابطہ کریں۔"
                />
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink"
              >
                <T en="Build With PAIB" ur="PAIB کے ساتھ بنائیں" />
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
                    {p.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-ivory px-3 py-1 text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 text-sm font-semibold">
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noreferrer" className="text-jade hover:underline">
                        <T en="Visit" ur="دیکھیں" />
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="text-ink hover:underline">
                        GitHub
                      </a>
                    )}
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