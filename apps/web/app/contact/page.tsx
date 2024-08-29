"use client";

import { sendMail } from "@/actions/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
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

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

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
      <div className="px-4 flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Let's Connect
        </h1>
        <p className="text-xl max-w-3xl mb-8 font-light">
          Have a question, suggestion, or just want to say hello? We're here for
          you! Reach out to us and let's spark a conversation about how we can
          build the future together.
        </p>
        <Button onClick={scrollToForm}>Get in touch</Button>
      </div>

      <div
        className="space-y-12 px-4 md:px-6 py-12 md:py-24 lg:py-32"
        id="contact-form"
      >
        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter mb-4 mx-auto max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            We're Eager to Hear from You!
          </h2>
          <h4 className="text-lg max-w-xl mx-auto text-center text-white bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            We value your feedback and are always open to exploring new
            partnerships and collaborations. Don't hesitate to reach out – we're
            excited to see how we can create
          </h4>
        </div>

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

              <SubmitButton
                isSubmitting={isPending}
                className="bg-indigo-500 hover:bg-indigo-600 text-white min-w-52 flex items-center justify-center"
              >
                Send message
              </SubmitButton>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
