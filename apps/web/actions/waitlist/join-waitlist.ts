"use server";

import { WaitlistTemplate } from "@repo/email-templates/waitlist";
import { createClient } from "@repo/supabase/server";
import { cookies } from "next/headers";
import { Resend } from "resend";
import { actionClient } from "../safe-actions";
import { sendMailSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

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
      subject: "User Joined the Recap Waitlist",
      react: WaitlistTemplate({
        email,
      }),
    });

    return;
  });
