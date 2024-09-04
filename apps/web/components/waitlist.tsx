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

  const {
    execute: send,
    isPending,
    hasSucceeded,
  } = useAction(joinWaitlist, {
    onError: () => {
      toast.info("Thank you for joining our waitlist!", {
        description:
          "You’re already in line, and we’ll notify you as soon as your spot is ready. We appreciate your patience.",
      });
    },
  });

  return (
    <section className="relative container mx-auto">
      <div className="relative border p-8 md:px-20 md:py-20 mt-20 rounded-lg flex flex-col items-center text-center">
        <h1 className="font-medium text-center text-5xl leading-snug">
          Coming soon
        </h1>
        <h1 className="font-thin text-center text-3xl my-4 leading-snug">
          Join the waitlist
        </h1>
        <p className="text-zinc-500 mb-8">
          Recap is currently in development. By joining our waiting list, you'll
          get early access to the free tier and be notified about our launch and
          upcoming features.
        </p>

        <div className="mt-8">
          <div className="flex justify-center">
            {hasSucceeded ? (
              <div className="rounded-md border border-[#2C2C2C] font-sm text-primary h-11 w-[330px] flex items-center py-1 px-3 justify-between">
                <p>Subscribed</p>

                <svg
                  width="17"
                  height="17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Check</title>
                  <path
                    d="m14.546 4.724-8 8-3.667-3.667.94-.94 2.727 2.72 7.06-7.053.94.94Z"
                    fill="#fff"
                  />
                </svg>
              </div>
            ) : (
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
                            className="min-w-72"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <SubmitButton isSubmitting={isPending} variant="outline">
                    Subscribe
                  </SubmitButton>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
