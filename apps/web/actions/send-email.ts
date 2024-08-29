"use server";

import { ContactEmailTemplate } from "@repo/email-templates/contact";
import { actionClient } from "../lib/safe-actions";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMailSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export const sendMail = actionClient
  .schema(sendMailSchema)
  .action(async ({ parsedInput: { name, email, message, phone } }) => {
    await resend.emails.send({
      from: "Neonix Labs <onboarding@resend.dev>",
      to: ["tiagoagm@gmail.com"],
      subject: "Contact Form Submission",
      react: ContactEmailTemplate({
        name,
        email,
        message,
        phone,
      }),
    });
  });
