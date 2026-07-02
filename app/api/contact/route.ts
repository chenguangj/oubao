import { NextResponse } from "next/server";

export const runtime = "edge";

const EMAIL_API_URL = "https://workers.lxztzp.top/email/send";
const TARGET_EMAIL = "support@oubaogame.online";

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const subject = `[OUBAOGAME] New Contact: ${name}`;
    const html = `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px;">
        <tr><td style="padding:8px;font-weight:bold;">Name:</td><td style="padding:8px;">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone:</td><td style="padding:8px;">${phone}</td></tr>
      </table>
      <h3>Message:</h3>
      <p style="white-space:pre-wrap;">${message}</p>
      <hr/>
      <p style="color:#888;font-size:12px;">Submitted at: ${new Date().toISOString()}</p>
    `;

    const res = await fetch(EMAIL_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: TARGET_EMAIL,
        subject,
        html,
        from_name: "OUBAOGAME",
        from_alias: "noreply",
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Email API error:", res.status, errText);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
