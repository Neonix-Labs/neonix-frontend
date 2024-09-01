"use server";

import { ContactTemplate } from "@repo/email-templates/contact";
import { Resend } from "resend";
import { actionClient } from "../safe-actions";
import { sendMailSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = actionClient
  .schema(sendMailSchema)
  .action(async ({ parsedInput: { name, email, message, phone } }) => {
    await resend.emails.send({
      from: "Neonix Labs <onboarding@resend.dev>",
      to: ["tiagoagm@gmail.com"],
      subject: "User Inquiry Received",
      react: ContactTemplate({
        name,
        email,
        message,
        phone,
      }),
    });

    return;
  });
