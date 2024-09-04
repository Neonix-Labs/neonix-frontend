"use server";

import { createClient } from "@repo/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { actionClient } from "./safe-actions";

const schema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signInAction = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { email, password } }) => {
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    revalidatePath("/", "layout");
    redirect("/");
  });

export const signUpAction = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { email, password } }) => {
    const supabase = createClient();

    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      throw new Error(error.code);
    }

    revalidatePath("/", "layout");
    redirect("/");
  });

export const signOutAction = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
};
