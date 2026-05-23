import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { SubmitContactBody } from "@workspace/api-zod";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY environment variable is required.");
}
if (!process.env.CONTACT_EMAIL_TO) {
  throw new Error("CONTACT_EMAIL_TO environment variable is required.");
}
if (!process.env.CONTACT_EMAIL_FROM) {
  throw new Error("CONTACT_EMAIL_FROM environment variable is required.");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.CONTACT_EMAIL_TO;
const EMAIL_FROM = process.env.CONTACT_EMAIL_FROM;

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, subject, message } = parsed.data;

  const emailSubject = subject
    ? `Contact Form: ${subject}`
    : `New Contact Form Submission from ${name}`;

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
    ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${message}</p>
  `;

  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    replyTo: email,
    subject: emailSubject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Failed to send message. Please try again." });
    return;
  }

  res.status(201).json({
    message: "Thank you for your enquiry. We will be in touch shortly.",
  });
});

export default router;
