import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, message } = await request.json();

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // Target email address - change this to your actual email
    const targetEmail = "contact@oubaogame.com";

    // Send email using a simple SMTP approach
    // For production, integrate with services like:
    // - Resend (https://resend.com)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // For now, we log the contact submission and return success
    // Replace this section with your email service integration
    console.log("=== New Contact Submission ===");
    console.log(`To: ${targetEmail}`);
    console.log(`Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Message: ${message}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("==============================");

    // Example with Resend (uncomment and install `resend` package):
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'OUBAOGAME <noreply@oubaogame.com>',
    //   to: [targetEmail],
    //   subject: `New Contact: ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //     <hr/>
    //     <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
