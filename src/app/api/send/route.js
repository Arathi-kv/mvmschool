import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // ✅ Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // ✅ Configure Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your Gmail
        pass: process.env.GMAIL_PASS, // app password
      },
    });

    // ✅ Email content
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email, // reply will go to sender
      subject: subject || `New Admission Form Submission from ${name}`,
      text: `
You have received a new admission form submission:

Name: ${name}
Email: ${email}
Subject: ${subject || "—"}
Message:
${message}
      `,
      html: `
        <h3>New Admission Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true, message: "Email sent successfully." }), {
      status: 200,
    });
  } catch (err) {
    console.error("Send mail error:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        error: err.message || "Failed to send email.",
      }),
      { status: 500 }
    );
  }
}
