import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import PathQuiz from "@/components/PathQuiz";
import { pathways } from "@/data/pathways";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Earn | PAIB" };

export default function Earn() {
  return (
    <>
      <PageHero
        eyebrow={<T en="EARN" ur="کمائیں" />}
        title={
          <T
            en={
              <>
                Turn AI skills into <span className="text-gold">real opportunity</span>.
              </>
            }
            ur={
              <>
                AI مہارتوں کو <span className="text-gold">حقیقی مواقع</span> میں بدلیں۔
              </>
            }
          />
        }
        text={
          <T
            en="Any background. Any field. One future. Whoever you are, PAIB helps you turn what you learn into work, income and growth."
            ur="کوئی بھی پس منظر۔ کوئی بھی شعبہ۔ ایک مستقبل۔ آپ جو بھی ہوں، PAIB آپ کی سیکھی ہوئی مہارتوں کو کام، آمدنی اور ترقی میں بدلنے میں مدد کرتا ہے۔"
          />
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">
            <T en="FIVE PATHWAYS" ur="پانچ راستے" />
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold">
            <T en="Five ways to put AI to work for you." ur="AI کو اپنے لیے کام پر لگانے کے پانچ طریقے۔" />
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink/70">
            <T
              en="Pick one, combine several, or start with what you already do. AI multiplies the skills you have."
              ur="ایک چنیں، کئی ملائیں، یا اسی سے شروع کریں جو آپ پہلے سے کرتے ہیں۔ AI آپ کی موجودہ مہارتوں کو کئی گنا بڑھا دیتا ہے۔"
            />
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.1}>
              <div className="h-full rounded-2xl border-t-4 border-gold bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="font-mono text-xs text-ink/40">0{i + 1}</div>
                <div className="mt-2 font-display text-2xl font-bold">
                  <T en={p.title} ur={p.titleUr} />
                </div>
                <p className="mt-2 text-ink/70">
                  <T en={p.description} ur={p.descriptionUr} />
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-ink p-7 text-ivory">
              <div className="font-display text-2xl font-bold">
                <T en="Not sure where to start?" ur="یقین نہیں کہ کہاں سے شروع کریں؟" />
              </div>
              <p className="mt-2 text-sm text-ivory/60">
                <T
                  en="Talk to the PAIB team and find the path that fits you."
                  ur="PAIB ٹیم سے بات کریں اور اپنے لیے موزوں راستہ تلاش کریں۔"
                />
              </p>
              <Link
                href="/contact"
                className="mt-4 self-start text-sm font-semibold text-gold hover:underline"
              >
                <T en="Explore AI Opportunities →" ur="AI کے مواقع دیکھیں ←" />
              </Link>
            </div>
          </Reveal>
        </div>

        <p className="mt-10 max-w-2xl text-sm text-ink/50">
          <T
            en="These are pathways, not guarantees of income. Outcomes depend on your skills, effort and the market."
            ur="یہ راستے ہیں، آمدنی کی ضمانت نہیں۔ نتائج آپ کی مہارت، محنت اور مارکیٹ پر منحصر ہیں۔"
          />
        </p>
      </section>

      <PathQuiz />
    </>
  );
}