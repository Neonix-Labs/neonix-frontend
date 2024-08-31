"use server";

import { WaitlistTemplate } from "@repo/email-templates/waitlist";
import { createClient } from "@repo/supabase/server";
import { cookies } from "next/headers";
import { Resend } from "resend";
import { z } from "zod";
import { actionClient } from "../lib/safe-actions";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMailSchema = z.object({
  email: z.string().email(),
});

export const joinWaitlist = actionClient
  .schema(sendMailSchema)
  .action(async ({ parsedInput: { email } }) => {
    const cookiesStore = cookies();
    const supabase = createClient(cookiesStore);

    const inserted = await supabase.from("waitlist").insert({
      email,
    });

    if (inserted.error) {
      throw Error(inserted.error.message);
    }

    await resend.emails.send({
      from: "Neonix Labs <onboarding@resend.dev>",
      to: ["tiagoagm@gmail.com"],
      subject: "Join Waitlist",
      react: WaitlistTemplate({
        email,
      }),
    });

    return;
  });
