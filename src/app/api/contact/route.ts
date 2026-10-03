import { NextResponse } from "next/server";
import { Resend } from "resend";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const message = String(body.message ?? "").trim();
  const honeypot = String(body.website ?? "");

  if (honeypot) return NextResponse.json({ ok: true });

  if (!name || !isEmail(email) || !message) {
    return NextResponse.json({ error: "Please fill in all fields correctly." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 150 || message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey || !to) {
    console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      { error: "Email service is not configured (check .env.local and restart the server)." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() || "PAIB Website <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `PAIB enquiry: ${interest || "General"}`,
      text: `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      const dev = process.env.NODE_ENV !== "production";
      return NextResponse.json(
        { error: dev ? `Resend: ${error.message}` : "Could not send message. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Send failed:", err);
    return NextResponse.json({ error: "Could not send message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}