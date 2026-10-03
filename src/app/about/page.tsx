import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "About | PAIB" };

const values = [
  {
    t: "Innovation",
    tUr: "جدت",
    d: "We explore new technology and turn it into practical use.",
    dUr: "ہم ابھرتی ہوئی ٹیکنالوجی کو کھوجتے ہیں اور اسے عملی استعمال میں بدلتے ہیں۔",
  },
  {
    t: "Collaboration",
    tUr: "تعاون",
    d: "Students, developers, trainers and professionals building together.",
    dUr: "طلبہ، ڈیولپرز، ٹرینرز اور پیشہ ور افراد مل کر کام کرتے ہیں۔",
  },
  {
    t: "Impact",
    tUr: "اثر",
    d: "We measure success by the real difference our work makes.",
    dUr: "ہم کامیابی کو اپنے کام کے حقیقی فرق سے ناپتے ہیں۔",
  },
  {
    t: "Excellence",
    tUr: "عمدگی",
    d: "High standards in what we teach and what we build.",
    dUr: "جو ہم سکھاتے اور بناتے ہیں اس میں اعلیٰ معیار۔",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={<T en="ABOUT PAIB" ur="PAIB کے بارے میں" />}
        title={
          <T
            en={
              <>
                Where technology becomes <span className="text-gradient">opportunity</span>.
              </>
            }
            ur={
              <>
                جہاں ٹیکنالوجی <span className="text-gradient">موقع</span> بنتی ہے۔
              </>
            }
          />
        }
        text={
          <T
            en="PAIB brings together education, solutions and a community of builders to make AI and blockchain useful for Pakistan."
            ur="PAIB تعلیم، حل اور بنانے والوں کی ایک کمیونٹی کو یکجا کرتا ہے تاکہ AI اور بلاک چین پاکستان کے لیے مفید بن سکیں۔"
          />
        }
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl bg-white p-8 shadow-sm">
            <p className="font-mono text-xs tracking-[0.3em] text-jade">
              <T en="MISSION" ur="مشن" />
            </p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug">
              <T
                en="To democratize artificial intelligence in Pakistan through AI solutions, education and innovation."
                ur="پاکستان میں AI حل، تعلیم اور جدت کے ذریعے مصنوعی ذہانت کو عام کرنا۔"
              />
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-ink p-8 text-ivory">
            <p className="font-mono text-xs tracking-[0.3em] text-gold">
              <T en="VISION" ur="وژن" />
            </p>
            <p className="mt-3 font-display text-2xl font-bold leading-snug">
              <T
                en="To position Pakistan as a global leader in artificial intelligence by 2030."
                ur="2030 تک پاکستان کو مصنوعی ذہانت میں عالمی رہنما بنانا۔"
              />
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-gold-deep">
            <T en="OUR VALUES" ur="ہماری اقدار" />
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold">
            <T en="What guides our work." ur="ہمارے کام کی رہنمائی کرنے والی باتیں۔" />
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="h-full rounded-2xl border-t-4 border-jade bg-white p-6 shadow-sm">
                <div className="font-display text-xl font-bold">
                  <T en={v.t} ur={v.tUr} />
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  <T en={v.d} ur={v.dUr} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}