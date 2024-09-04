import { createClient } from "@repo/supabase/server";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <div className="container max-w-[750px] relative mx-auto px-4 text-center">
        <h1 className="mt-24 font-medium text-5xl mb-16 leading-snug">
          Profile
        </h1>
      </div>

      <div className="pt-10 relative">
        <div className="container mx-auto space-y-12">
          <p>{data.user.email}</p>
        </div>
      </div>
    </>
  );
}
