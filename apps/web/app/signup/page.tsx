"use client";

import { signUpAction } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormMessage } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { SubmitButton } from "@repo/ui/submit-button";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignupPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const { execute: signUp, isPending } = useAction(signUpAction, {
    onSuccess: () => {
      toast.success(
        "Congratulations! Your account has been successfully created. Welcome aboard! We’re excited to have you with us. Check your email for a confirmation link to verify your account. Let’s get started!",
      );
    },
    onError: (error) => {
      toast.error(
        "Oops! Something went wrong. We couldn’t complete your sign-up process. Please double-check your information and try again. If the problem persists, contact our support team for assistance.",
      );
    },
  });

  return (
    <div className="w-full px-4 h-full pt-10 relative">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to sign up
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(signUp)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SubmitButton isSubmitting={isPending} variant="outline">
                Sign Up
              </SubmitButton>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
