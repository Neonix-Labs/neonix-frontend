"use client";

import { sendMail } from "@/actions/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { SubmitButton } from "@repo/ui/submit-button";
import { Textarea } from "@repo/ui/textarea";
import { useAction } from "next-safe-action/hooks";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const { execute: send, isPending } = useAction(sendMail, {
    onSuccess: () => {
      toast.success(
        "Your message has been sent! We'll get back to you as soon as possible.",
      );
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <>
      <div className="container max-w-[750px] relative mx-auto hero-slide-up px-4 text-center">
        <h1 className="mt-24 font-medium text-5xl mb-16 leading-snug">
          Talk to us
        </h1>
        <p className="text-[#878787] mb-8">
          We value your feedback and are always open to exploring new
          partnerships and collaborations. Don't hesitate to reach out – we're
          excited to see how we can create something amazing together.
        </p>
      </div>

      <div className="space-y-12 px-4 md:px-6 py-12 relative" id="contact-form">
        <div className="text-lg max-w-xl mx-auto mt-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(send)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input placeholder="(555) 555-5555" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@doe.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton isSubmitting={isPending} variant="outline">
                Send message
              </SubmitButton>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
