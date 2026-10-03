"use client";

import { useState } from "react";
import { site } from "@/data/site";

const interests = [
  "I want to learn (Student)",
  "I want to work with PAIB (Business)",
  "I want to join PAIB",
  "I want to build with PAIB",
  "Explore AI opportunities",
  "Something else",
];

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState(interests[0]);
  const [message, setMessage] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`PAIB enquiry: ${interest}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${site.contact.emails[0]}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-jade";

  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl bg-white p-7 shadow-sm">
      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={field} />
      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className={field} />
      <select value={interest} onChange={(e) => setInterest(e.target.value)} className={field}>
        {interests.map((i) => (
          <option key={i}>{i}</option>
        ))}
      </select>
      <textarea required rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" className={field} />
      <button type="submit" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ivory transition hover:bg-jade hover:text-ink">
        Send message
      </button>
    </form>
  );
}