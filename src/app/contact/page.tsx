import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { T } from "@/lib/lang";

export const metadata: Metadata = { title: "Contact | PAIB" };

export default function Contact() {
  const c = site.contact;

  return (
    <>
      <PageHero
        eyebrow={<T en="CONTACT" ur="رابطہ" />}
        title={
          <T
            en={
              <>
                Let&apos;s talk about <span className="text-gradient">what&apos;s next</span>.
              </>
            }
            ur={
              <>
                آئیں بات کریں کہ <span className="text-gradient">آگے کیا</span> ہے۔
              </>
            }
          />
        }
        text={
          <T
            en="Students, businesses and future team members: tell us what you are looking for."
            ur="طلبہ، کاروباری ادارے اور مستقبل کے ٹیم ممبرز: ہمیں بتائیں آپ کیا تلاش کر رہے ہیں۔"
          />
        }
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-8">
            <div>
              <div className="font-mono text-xs tracking-widest text-gold-deep">
                <T en="EMAIL" ur="ای میل" />
              </div>
              {c.emails.map((e) => (
                <div key={e}>
                  <a dir="ltr" href={`mailto:${e}`} className="mt-1 inline-block text-lg hover:text-jade">
                    {e}
                  </a>
                </div>
              ))}
            </div>

            {c.phone && (
              <div>
                <div className="font-mono text-xs tracking-widest text-gold-deep">
                  <T en="PHONE" ur="فون" />
                </div>
                <a
                  dir="ltr"
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="mt-1 inline-block text-lg hover:text-jade"
                >
                  {c.phone}
                </a>
              </div>
            )}

            {c.address && (
              <div>
                <div className="font-mono text-xs tracking-widest text-gold-deep">
                  <T en="OFFICE" ur="دفتر" />
                </div>
                <p className="mt-1 text-lg">{c.address}</p>
              </div>
            )}

            {c.hours.length > 0 && (
              <div>
                <div className="font-mono text-xs tracking-widest text-gold-deep">
                  <T en="HOURS" ur="اوقاتِ کار" />
                </div>
                {c.hours.map((h) => (
                  <p key={h} className="mt-1 text-ink/70">
                    {h}
                  </p>
                ))}
              </div>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}