"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { faqs, starterIds, fallback, type Faq } from "@/data/faq";
import { matchFaq } from "@/lib/matchFaq";
import { useLang } from "@/lib/lang";

type Msg = {
  from: "user" | "bot";
  text: string;
  link?: { label: string; href: string };
  next?: Faq[];
};

const byId = (ids: string[]) =>
  ids.map((id) => faqs.find((f) => f.id === id)).filter(Boolean) as Faq[];

export default function Assistant() {
  const { lang, t } = useLang();
  const ur = lang === "ur";

  const makeIntro = (): Msg => ({
    from: "bot",
    text: ur
      ? "السلام علیکم! میں PAIB نالج اسسٹنٹ ہوں۔ PAIB، ہمارے پروگرامز، خدمات یا شمولیت کے بارے میں پوچھیں۔"
      : "Hi! I'm the PAIB Knowledge Assistant. Ask me about PAIB, our programs, services or how to get involved.",
    next: byId(starterIds),
  });

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([makeIntro()]);
  const endRef = useRef<HTMLDivElement>(null);

  // Restart the chat when the language changes, so replies match the language
  useEffect(() => {
    setMsgs([makeIntro()]);
    setTyping(false);
    setInput("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  function ask(question: string, direct?: Faq) {
    const q = question.trim();
    if (!q || typing) return;
    setMsgs((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);

    const faq = direct ?? matchFaq(q);
    const reply: Msg = faq
      ? {
          from: "bot",
          text: ur ? faq.aUr : faq.a,
          link: faq.link && { label: ur ? faq.link.labelUr : faq.link.label, href: faq.link.href },
          next: byId(faq.next ?? []),
        }
      : {
          from: "bot",
          text: ur ? fallback.aUr : fallback.a,
          link: { label: ur ? fallback.link.labelUr : fallback.link.label, href: fallback.link.href },
          next: byId(starterIds).slice(0, 3),
        };

    setTimeout(() => {
      setMsgs((m) => [...m, reply]);
      setTyping(false);
    }, 600);
  }

  const lastIndex = msgs.length - 1;

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[520px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-ivory/15 bg-ink text-ivory shadow-2xl md:max-w-md">
          <div className="flex items-center justify-between border-b border-ivory/10 bg-forest px-4 py-3">
            <div>
              <div className="font-display text-sm font-bold">{t("PAIB Assistant", "PAIB اسسٹنٹ")}</div>
              <div className="font-mono text-[10px] tracking-widest text-jade">
                {t("KNOWLEDGE BASE", "علمی معاون")}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-ivory/60">
              <button
                onClick={() => {
                  setMsgs([makeIntro()]);
                  setTyping(false);
                  setInput("");
                }}
                className="hover:text-ivory"
              >
                {t("Clear", "صاف کریں")}
              </button>
              <button onClick={() => setOpen(false)} className="hover:text-ivory">
                {t("Close", "بند کریں")}
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "user" ? "text-end" : ""}>
                <span
                  className={`inline-block max-w-[88%] rounded-2xl px-4 py-2.5 text-start leading-relaxed ${
                    m.from === "user" ? "bg-jade text-ink" : "bg-forest text-ivory/90"
                  }`}
                >
                  {m.text}
                </span>

                {m.from === "bot" && m.link && (
                  <div className="mt-2">
                    <Link
                      href={m.link.href}
                      onClick={() => setOpen(false)}
                      className="inline-block rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-ink transition hover:bg-jade"
                    >
                      {m.link.label} {ur ? "←" : "→"}
                    </Link>
                  </div>
                )}

                {m.from === "bot" && i === lastIndex && !typing && m.next && m.next.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.next.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => ask(ur ? f.qUr : f.q, f)}
                        className="rounded-full border border-gold/40 px-3 py-1.5 text-xs text-gold transition hover:bg-gold hover:text-ink"
                      >
                        {ur ? f.qUr : f.q}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div>
                <span className="inline-flex items-center gap-1 rounded-2xl bg-forest px-4 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-ivory/60"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex gap-2 border-t border-ivory/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask(input)}
              placeholder={t("Ask about PAIB...", "PAIB کے بارے میں پوچھیں...")}
              className="flex-1 rounded-full bg-forest px-4 py-2 text-sm text-ivory outline-none placeholder:text-ivory/40"
            />
            <button
              onClick={() => ask(input)}
              className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-jade"
            >
              {t("Send", "بھیجیں")}
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Ask PAIB AI"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 rounded-full bg-jade px-5 py-3.5 text-sm font-semibold text-ink shadow-[0_0_30px_-5px_#14b87a] transition hover:bg-gold"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-ink" />
        {t("Ask PAIB AI", "PAIB AI سے پوچھیں")}
      </button>
    </>
  );
}