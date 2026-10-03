"use client";

import { useState, useRef, useEffect } from "react";
import { faqs } from "@/data/faq";
import { site } from "@/data/site";

type Msg = { from: "user" | "bot"; text: string };

function findAnswer(input: string): string {
  const text = input.toLowerCase();
  let best = { score: 0, a: "" };
  for (const f of faqs) {
    const score = f.keywords.reduce((s, k) => (text.includes(k) ? s + k.length : s), 0);
    if (score > best.score) best = { score, a: f.a };
  }
  return (
    best.a ||
    `I can help with questions about PAIB, our programs, services and how to join or work with us. For anything else, please email ${site.contact.emails[0]}.`
  );
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      from: "bot",
      text: "Hi! I'm the PAIB Knowledge Assistant. Ask me about PAIB, programs, services or how to get involved.",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, open]);

  function ask(q: string) {
    const question = q.trim();
    if (!question) return;
    setMsgs((m) => [...m, { from: "user", text: question }, { from: "bot", text: findAnswer(question) }]);
    setInput("");
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[480px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-ivory/15 bg-ink text-ivory shadow-2xl">
          <div className="flex items-center justify-between border-b border-ivory/10 bg-forest px-4 py-3">
            <div>
              <div className="font-display text-sm font-bold">PAIB Assistant</div>
              <div className="font-mono text-[10px] tracking-widest text-jade">KNOWLEDGE BASE</div>
            </div>
            <button onClick={() => setOpen(false)} className="text-sm text-ivory/60 hover:text-ivory">
              Close
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto p-4 text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "user" ? "text-right" : ""}>
                <span
                  className={`inline-block max-w-[85%] rounded-2xl px-4 py-2.5 text-left leading-relaxed ${
                    m.from === "user" ? "bg-jade text-ink" : "bg-forest text-ivory/90"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {faqs.slice(0, 5).map((f) => (
                  <button
                    key={f.q}
                    onClick={() => ask(f.q)}
                    className="rounded-full border border-gold/40 px-3 py-1.5 text-xs text-gold transition hover:bg-gold hover:text-ink"
                  >
                    {f.q}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="flex gap-2 border-t border-ivory/10 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && ask(input)}
              placeholder="Ask about PAIB..."
              className="flex-1 rounded-full bg-forest px-4 py-2 text-sm text-ivory outline-none placeholder:text-ivory/40"
            />
            <button
              onClick={() => ask(input)}
              className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-jade"
            >
              Send
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
        Ask PAIB AI
      </button>
    </>
  );
}