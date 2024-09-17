"use client";

import { joinWaitlist } from "@/actions/join-waitlist";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { SubmitButton } from "@repo/ui/submit-button";
import { useAction } from "next-safe-action/hooks";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
});

export function RecapWailist() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const { execute: send, isPending } = useAction(joinWaitlist, {
    onSuccess: () => {
      toast.success("Subscribed to waitlist successfully");
    },
    onError: () => {
      toast.info("Thank you for joining our waitlist!", {
        description:
          "You’re already in line, and we’ll notify you as soon as your spot is ready. We appreciate your patience.",
      });
    },
  });

  return (
    <section className="relative container mx-auto">
      <div className="relative border-4 border-blue-500 bg-white/5 p-8 md:px-20 md:py-20 mt-20 rounded-lg flex flex-col items-center text-center">
        <h1 className="font-medium text-center text-5xl leading-snug">
          Coming soon
        </h1>
        <h1 className="font-thin text-center text-3xl my-2 mb-4 leading-snug">
          Join the waitlist
        </h1>
        <p className="text-zinc-500 mb-8 text-2xl lg:text-3xl">
          Recap is currently in development. By joining our waiting list, you'll
          get early access to the free tier and be notified about our launch and
          upcoming features.
        </p>

        <div className="mt-8">
          <div className="flex justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(send)}
                className="flex items-start gap-2 justify-start"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormControl>
                        <Input
                          placeholder="john@doe.com"
                          type="email"
                          {...field}
                          className="min-w-72 h border border-zinc-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <SubmitButton isSubmitting={isPending} variant="blueish">
                  Subscribe
                </SubmitButton>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
