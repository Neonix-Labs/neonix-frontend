"use server";

import { WaitlistTemplate } from "@repo/email-templates/waitlist";
import { createClient } from "@repo/supabase/server";
import { Resend } from "resend";
import { z } from "zod";
import { actionClient } from "./safe-actions";

const sendMailSchema = z.object({
  email: z.string().email(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export const joinWaitlist = actionClient
  .schema(sendMailSchema)
  .action(async ({ parsedInput: { email } }) => {
    const supabase = createClient();

    const inserted = await supabase.from("waitlist").insert({
      email,
    });

    if (inserted.error) {
      throw Error(inserted.error.message);
    }

    await resend.emails.send({
      from: "Neonix Labs <onboarding@resend.dev>",
      to: ["tiagoagm@gmail.com"],
      subject: "User Joined the Recap Waitlist",
      react: WaitlistTemplate(),
    });

    return;
  });
