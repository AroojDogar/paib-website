"use client";

import { useState } from "react";
import { useLang } from "@/lib/lang";

// "en" is what the PAIB team receives in the email; "ur" is what the visitor sees
const interests = [
  { en: "I want to learn", ur: "میں سیکھنا چاہتا ہوں" },
  { en: "I want to work with PAIB", ur: "میں PAIB کے ساتھ کام کرنا چاہتا ہوں" },
  { en: "I want to join PAIB", ur: "میں PAIB میں شامل ہونا چاہتا ہوں" },
  { en: "I want to build with PAIB", ur: "میں PAIB کے ساتھ بنانا چاہتا ہوں" },
  { en: "Explore AI opportunities", ur: "AI کے مواقع دیکھنا چاہتا ہوں" },
  { en: "Something else", ur: "کچھ اور" },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const { lang, t } = useLang();
  const ur = lang === "ur";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0].en);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // hidden spam trap
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interest, message, website }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(
        ur
          ? "پیغام نہیں بھیجا جا سکا۔ براہِ کرم دوبارہ کوشش کریں یا info@paib.pk پر لکھیں۔"
          : err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    }
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-jade";

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
        <div className="font-display text-3xl font-extrabold text-jade">
          {t("Message sent", "پیغام بھیج دیا گیا")}
        </div>
        <p className="mt-3 text-ink/70">
          {t(
            "Thank you for reaching out. The PAIB team will get back to you soon.",
            "رابطہ کرنے کا شکریہ۔ PAIB ٹیم جلد آپ سے رابطہ کرے گی۔"
          )}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-gold-deep hover:underline"
        >
          {t("Send another message", "ایک اور پیغام بھیجیں")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-7 shadow-sm">
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={t("Your name", "آپ کا نام")}
        className={field}
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("Your email", "آپ کی ای میل")}
        className={field}
      />
      <select value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
        {interests.map((i) => (
          <option key={i.en} value={i.en}>
            {ur ? i.ur : i.en}
          </option>
        ))}
      </select>
      <textarea
        required
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t("How can we help?", "ہم آپ کی کیسے مدد کر سکتے ہیں؟")}
        className={field}
      />

      {/* Hidden spam trap: real people never see or fill this */}
      <input
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink disabled:opacity-60"
      >
        {status === "sending" ? t("Sending...", "بھیجا جا رہا ہے...") : t("Send message", "پیغام بھیجیں")}
      </button>
    </form>
  );
}