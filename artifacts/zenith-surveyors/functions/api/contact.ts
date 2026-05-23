import { Resend } from "resend";
import { z } from "zod";

interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL_TO: string;
  CONTACT_EMAIL_FROM: string;
}

const ContactBody = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  phone: z.string().max(50).optional(),
  subject: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
});

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { RESEND_API_KEY, CONTACT_EMAIL_TO, CONTACT_EMAIL_FROM } = context.env;

  if (!RESEND_API_KEY || !CONTACT_EMAIL_TO || !CONTACT_EMAIL_FROM) {
    return json({ error: "Server misconfiguration." }, 500);
  }

  let body: unknown;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const parsed = ContactBody.safeParse(body);
  if (!parsed.success) {
    return json({ error: parsed.error.message }, 400);
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

  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: CONTACT_EMAIL_FROM,
    to: CONTACT_EMAIL_TO,
    replyTo: email,
    subject: emailSubject,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return json({ error: "Failed to send message. Please try again." }, 500);
  }

  return json(
    { message: "Thank you for your enquiry. We will be in touch shortly." },
    201,
  );
};
