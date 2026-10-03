import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Build | PAIB" };

const services = [
  {
    t: "AI Agents",
    tUr: "AI ایجنٹس",
    d: "Intelligent systems that handle defined workflows.",
    dUr: "ایسے ذہین نظام جو طے شدہ کام خود سنبھالتے ہیں۔",
  },
  {
    t: "Chatbots",
    tUr: "چیٹ بوٹس",
    d: "Support, information, education and business chatbots.",
    dUr: "سپورٹ، معلومات، تعلیم اور کاروبار کے لیے چیٹ بوٹس۔",
  },
  {
    t: "AI Automation",
    tUr: "AI آٹومیشن",
    d: "Automating repetitive business processes.",
    dUr: "بار بار دہرائے جانے والے کاموں کو خودکار بنانا۔",
  },
  {
    t: "Custom AI Development",
    tUr: "حسبِ ضرورت AI ڈیولپمنٹ",
    d: "AI-powered applications built for your specific needs.",
    dUr: "آپ کی مخصوص ضروریات کے مطابق AI ایپلیکیشنز۔",
  },
  {
    t: "Data Analytics",
    tUr: "ڈیٹا اینالیٹکس",
    d: "Turning business data into useful insights.",
    dUr: "ڈیٹا کو کارآمد بصیرت میں بدلنا۔",
  },
  {
    t: "AI Consulting",
    tUr: "AI مشاورت",
    d: "Finding where and how AI can be applied in your organization.",
    dUr: "یہ جاننے میں مدد کہ آپ کے ادارے میں AI کہاں اور کیسے کارآمد ہو سکتا ہے۔",
  },
  {
    t: "AI Integration",
    tUr: "AI انٹیگریشن",
    d: "Connecting AI with your existing systems and workflows.",
    dUr: "AI کو آپ کے موجودہ نظام اور ورک فلو سے جوڑنا۔",
  },
  {
    t: "Blockchain",
    tUr: "بلاک چین",
    d: "Blockchain-related applications and experimentation.",
    dUr: "بلاک چین سے متعلق ایپلیکیشنز اور تجربات۔",
  },
];

export default function Build() {
  return (
    <>
      <PageHero
        eyebrow={<T en="BUILD" ur="بنائیں" />}
        title={
          <T
            en={
              <>
                AI and blockchain solutions, <span className="text-gradient">built around you</span>.
              </>
            }
            ur={
              <>
                AI اور بلاک چین حل، <span className="text-gradient">آپ کی ضرورت کے مطابق</span>۔
              </>
            }
          />
        }
        text={
          <T
            en="We help organizations understand, build and implement AI solutions that fit real needs."
            ur="ہم اداروں کو ایسے AI حل سمجھنے، بنانے اور نافذ کرنے میں مدد دیتے ہیں جو حقیقی ضروریات پر پورا اتریں۔"
          />
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 0.08}>
              <div className="group h-full rounded-2xl border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-jade hover:shadow-xl">
                <div className="font-mono text-xs text-ink/40">0{i + 1}</div>
                <div className="mt-2 font-display text-xl font-bold">
                  <T en={s.t} ur={s.tUr} />
                </div>
                <p className="mt-2 text-sm text-ink/70">
                  <T en={s.d} ur={s.dUr} />
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-3xl bg-ink p-8 text-ivory md:flex-row md:items-center md:p-12">
            <div>
              <div className="font-display text-2xl font-bold md:text-3xl">
                <T en="Have a problem AI could solve?" ur="کوئی مسئلہ ہے جسے AI حل کر سکتا ہو؟" />
              </div>
              <p className="mt-1 text-ivory/60">
                <T
                  en="Tell us about it and we'll discuss the best way forward."
                  ur="ہمیں بتائیں، ہم بہترین آگے بڑھنے کے راستے پر بات کریں گے۔"
                />
              </p>
            </div>
            <Link
              href="/contact"
              className="rounded-full bg-jade px-7 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold"
            >
              <T en="Work With PAIB" ur="PAIB کے ساتھ کام کریں" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}