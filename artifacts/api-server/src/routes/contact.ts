import { Router, type IRouter } from "express";
import { SubmitContactBody } from "@workspace/api-zod";
import { db, contactSubmissionsTable } from "@workspace/db";

const router: IRouter = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, phone, subject, message } = parsed.data;

  const [inserted] = await db
    .insert(contactSubmissionsTable)
    .values({ name, email, phone: phone ?? null, subject: subject ?? null, message })
    .returning({ id: contactSubmissionsTable.id });

  res.status(201).json({
    id: inserted.id,
    message: "Thank you for your enquiry. We will be in touch shortly.",
  });
});

export default router;
