import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Learn | PAIB" };

const areas = [
  { en: "AI Fundamentals", ur: "AI کے بنیادی اصول" },
  { en: "Agentic AI", ur: "ایجنٹک AI" },
  { en: "AI Development", ur: "AI ڈیولپمنٹ" },
  { en: "AI Applications", ur: "AI ایپلیکیشنز" },
  { en: "AI Automation", ur: "AI آٹومیشن" },
  { en: "Blockchain", ur: "بلاک چین" },
];

const badge = {
  open: "bg-jade/15 text-jade",
  upcoming: "bg-gold/20 text-gold-deep",
  closed: "bg-ink/10 text-ink/60",
} as const;

const statusLabel = {
  open: { en: "Open", ur: "داخلے جاری" },
  upcoming: { en: "Upcoming", ur: "جلد آ رہا ہے" },
  closed: { en: "Closed", ur: "بند" },
} as const;

export default function Learn() {
  return (
    <>
      <PageHero
        eyebrow={<T en="LEARN" ur="سیکھیں" />}
        title={
          <T
            en={
              <>
                Learn the skills <span className="text-jade">shaping</span> the future.
              </>
            }
            ur={
              <>
                وہ مہارتیں سیکھیں جو <span className="text-jade">مستقبل</span> کو تشکیل دے رہی ہیں۔
              </>
            }
          />
        }
        text={
          <T
            en="Practical programs in AI, Agentic AI and emerging technology, open to everyone from every background."
            ur="AI، ایجنٹک AI اور ابھرتی ہوئی ٹیکنالوجی کے عملی پروگرام، ہر پس منظر کے لوگوں کے لیے کھلے ہیں۔"
          />
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">
            <T en="PROGRAMS" ur="پروگرامز" />
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold">
            <T en="Our programs." ur="ہمارے پروگرامز۔" />
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge[c.status]}`}>
                    <T en={statusLabel[c.status].en} ur={statusLabel[c.status].ur} />
                  </span>
                  {c.level && (
                    <span className="font-mono text-xs text-ink/50">
                      <T en={c.level} ur={c.levelUr ?? c.level} />
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold">
                  <T en={c.title} ur={c.titleUr} />
                </h3>
                <p className="mt-2 flex-1 text-ink/70">
                  <T en={c.summary} ur={c.summaryUr} />
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink/60">
                  {c.duration && <span>{c.duration}</span>}
                  {c.price && <span>{c.price}</span>}
                </div>
                <Link
                  href={c.enrollUrl ?? "/contact"}
                  className="mt-5 inline-block self-start rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink"
                >
                  {c.status === "open" ? (
                    <T en="Enroll" ur="داخلہ لیں" />
                  ) : (
                    <T en="Enquire" ur="معلومات حاصل کریں" />
                  )}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-forest py-20 text-ivory">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <p className="font-mono text-xs tracking-[0.3em] text-gold">
              <T en="COMING UP" ur="جلد آ رہا ہے" />
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
              <T en="Areas we are growing into." ur="وہ شعبے جن میں ہم آگے بڑھ رہے ہیں۔" />
            </h2>
            <p className="mt-3 max-w-xl text-ivory/60">
              <T
                en="These learning areas are planned and not yet confirmed as programs. Details will be announced here."
                ur="یہ سیکھنے کے شعبے منصوبے میں ہیں اور ابھی پروگرام کے طور پر تصدیق شدہ نہیں۔ تفصیلات یہاں اعلان کی جائیں گی۔"
              />
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((a) => (
              <span key={a.en} className="rounded-full border border-ivory/20 px-5 py-2 text-sm">
                <T en={a.en} ur={a.ur} />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}