"use client";

import { signInAction } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@repo/ui/form";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { SubmitButton } from "@repo/ui/submit-button";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const { execute: signIn, isPending, hasErrored } = useAction(signInAction);

  return (
    <div className="w-full px-4 h-full pt-10 relative">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(signIn)} className="grid gap-4">
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

              {hasErrored && (
                <div className="text-sm font-medium text-destructive">
                  Invalid login credentials or the user doesn't exist
                </div>
              )}
              <SubmitButton isSubmitting={isPending} variant="outline">
                Login
              </SubmitButton>
            </form>
          </Form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup">
              <Button type="button" variant="link">
                Sign Up{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
