import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, subject, message } = data ?? {};

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !to) {
      console.warn("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL not set. Logging instead.");
      console.info("[contact]", { firstName, lastName, email, subject, message });
      return NextResponse.json({ ok: true, stubbed: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "SLA Pharma <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `[Website] ${subject} — ${firstName} ${lastName}`,
      text:
        `From: ${firstName} ${lastName} <${email}>\n` +
        `Subject: ${subject}\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: "Email provider error." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
